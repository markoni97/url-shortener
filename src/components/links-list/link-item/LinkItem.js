import React from 'react';
import Button from '../../ui/button/Button';
import classes from './LinkItem.module.scss';

const LinkItem = ({ fullShortLink, shortLink }) => {
  const copyLinkHandler = () => {
    navigator.clipboard.writeText(fullShortLink);
    alert('Copied to clipboard');
  };

  return (
    <li className={classes['link']}>
      <a className={classes['link__item']} href={fullShortLink} target="_blank">
        {shortLink}
      </a>
      <Button label="Copy" style="secondary" onClick={copyLinkHandler} />
    </li>
  );
};

export default LinkItem;
