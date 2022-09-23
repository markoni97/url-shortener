import React from 'react';

import classes from './Button.module.scss';

const Button = (props) => {
  return (
    <button
      className={classes['button'] + ' ' + classes[`button__${props.style}`]}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
