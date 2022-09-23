import React, { useContext } from 'react';
import LinksContext from '../../store/links-context';
import Spinner from '../ui/spinner/Spinner';
import LinkItem from './link-item/LinkItem';

import classes from './LinksList.module.scss';

const LinksList = () => {
  const linksList = useContext(LinksContext);

  if (linksList.urlLinks.length < 1) {
    return <Spinner />;
  }

  const linksElement = linksList.urlLinks.map((link) => {
    return (
      <LinkItem
        key={link.code}
        fullShortLink={link.full_short_link}
        shortLink={link.short_link}
      />
    );
  });

  return (
    <div className="wrapper">
      <ul className={classes['links']}>{linksElement}</ul>
    </div>
  );
};

export default LinksList;
