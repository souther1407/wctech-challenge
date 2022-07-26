import React from 'react';
import styles from './loading.module.css';
import { CircularProgress } from "@mui/material";
const Loading = () => {
  return (
    <CircularProgress color='primary' size={24}/>
  )
}

export default Loading