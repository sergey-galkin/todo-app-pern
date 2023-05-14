import React from 'react';
import css from './Button.module.css';

const Button = ({ handleClick, caption, classesArr = [], ...restProps}) => {
  classesArr.push(css.btn)
  return (
    <button className={classesArr.join(' ')} onClick={handleClick} {...restProps}>{caption}</button>
  )
}

export default Button