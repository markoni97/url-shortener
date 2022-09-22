import React from "react";

import classes from './ShortenedLink.module.scss';

const ShortenedLink = ({link}) => {
  return (
    <h1><a href={link.url} target="_blank">{link.label}</a></h1>
  );
}

export default ShortenedLink;