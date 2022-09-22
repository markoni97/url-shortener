import React, { useContext } from 'react';
import LinksContext from '../../store/links-context';

import classes from './LinksList.module.scss';

const LinksList = () => {
  const linksList = useContext(LinksContext);

  console.log(linksList.urlLinks);
  const linksElement = linksList.urlLinks.map((link) => {
    return (
      <li key={link.code}>
        <a href={link.full_short_link} target="_blank">
          {link.short_link}
        </a>
      </li>
    );
  });

  return <ul>{linksElement}</ul>;
};

export default LinksList;
