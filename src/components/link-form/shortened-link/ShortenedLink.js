import React from 'react';
import Button from '../../ui/button/Button';

import classes from './ShortenedLink.module.scss';

const ShortenedLink = ({ link }) => {
  const copyLinkHandler = () => {
    navigator.clipboard.writeText(link.url);
    alert('Copied to clipboard');
  };

  return (
    <div className={classes['short']}>
      <p className={classes['short__subtext']}>Link generated!</p>
      <h1>
        <a className={classes['short__link']} href={link.url} target="_blank">
          {link.label}
        </a>
      </h1>
      <Button label="Copy" style="primary" onClick={copyLinkHandler} />
    </div>
  );
};

export default ShortenedLink;
