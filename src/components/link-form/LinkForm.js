import React, { useState, useContext } from 'react';
import LinksContext from '../../store/links-context';

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
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${link}`
    );

    const data = await response.json();

    if (!data.ok) {
      setError({ message: data.error, code: data.error_code });
      setLink('');
      return;
    }
    setLink('');
    setShortenedLink({
      url: data.result.full_short_link,
      label: data.result.short_link,
    });
    linksList.addLink(data.result);
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={linkSubmitHandler}>
        <input
          placeholder="Paste a long URL"
          onChange={linkChangeHandler}
          value={link}
        />
        {error.code && <p>{error.message}</p>}
        <button>Shorten</button>
      </form>
      <ShortenedLink link={shortenedLink} />
    </div>
  );
};

export default UrlForm;
