import React from 'react';
import styles from './input.module.css';

const Input = ({placeholder,type,...otherProps}) => {
  return (
    <input  className={`${styles.input} ${styles[type]}`} placeholder={placeholder} {...otherProps}/>
  )
}

export default Input