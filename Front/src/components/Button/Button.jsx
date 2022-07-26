import React from 'react';
import styles from './button.module.css';
import {Button as Btn} from "@mui/material";
const Button = ({text,onClick,type="full", ...other}) => {
  return (
    <Btn variant="contained" className={`${styles.button} ${styles[type]}`} onClick={onClick} {...other}>{text}</Btn>
  )
}

export default Button