import React, { useState, useContext } from 'react';
import LinksContext from '../../store/links-context';
import Button from '../ui/button/Button';

import classes from './LinkForm.module.scss';
import ShortenedLink from './shortened-link/ShortenedLink';

const UrlForm = () => {
  const linksList = useContext(LinksContext);
  const [link, setLink] = useState('');
  const [shortenedLink, setShortenedLink] = useState({ url: '', label: '' });
  const [error, setError] = useState({});

  const linkChangeHandler = (e) => {
    setLink(e.target.value);
  };

  const linkSubmitHandler = async (e) => {
    e.preventDefault();

    if (!link) {
      setError({ message: 'Please enter a URL' });
      return;
    }

    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${link}`
    );

    const data = await response.json();

    if (!data.ok) {
      setError({ message: data.error, code: data.error_code });
      setLink('');
      return;
    }
    setError({});
    setLink('');
    setShortenedLink({
      url: data.result.full_short_link,
      label: data.result.short_link,
    });
    linksList.addLink(data.result);
  };

  return (
    <div className="wrapper">
      <h1 className={classes['title']}>URL Shortener</h1>
      {error.message && <p className="error-message">{error.message}</p>}
      <form className={classes['form']} onSubmit={linkSubmitHandler}>
        <input
          className={classes['form__input']}
          placeholder="Paste a long URL"
          onChange={linkChangeHandler}
          value={link}
        />
        <Button label="Shorten" style="secondary" />
      </form>
      
      {shortenedLink.url && <ShortenedLink link={shortenedLink} />}
    </div>
  );
};

export default UrlForm;
