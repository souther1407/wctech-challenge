import React, { useState } from 'react';
import styles from './sendWordInput.module.css';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import { useDispatch, useSelector} from "react-redux";
import {sendWord} from "../../../../redux/actions";
import Loading from "../../../../components/Loading/Loading";

const SendWordInput = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading);
  const [input,setInput] = useState("")
  console.log(isLoading);
  const handlerSendWord = () => {
    dispatch(sendWord(input));
  }

  return (
    <nav className={styles.sendWordInput}>
        <div className={styles.send}>
            <Input placeholder={"Insert Text"} value={input} onChange={(e) => setInput(e.target.value)}/>
            <Button text={isLoading ? <Loading /> : "Send"} onClick={handlerSendWord} disabled={isLoading} />
        </div>
    </nav>
  )
}

export default SendWordInput