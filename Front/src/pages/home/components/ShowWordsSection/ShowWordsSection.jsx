import React from 'react';
import Input from '../../../../components/Input/Input';
import styles from './showWordsSection.module.css';
import { useSelector } from "react-redux";

const ShowWordsSection = () => {
  const firstWord = useSelector((state) => state.firstWord);
  const secondWord = useSelector((state) => state.secondWord);
  const thirdWord = useSelector((state) => state.thirdWord);
  return (
    <div className={styles.showWordsSection}>
        <section className={styles.inputsSection}>
          <h2 className={styles.title}>Results:</h2>
          <div className={styles.inputs}>
            <Input placeholder={"Third Text"} type={"bordered"} disabled value={thirdWord}/>
            <Input placeholder={"Second Text"} type={"bordered"} disabled value={secondWord}/>
            <Input placeholder={"First Text"} type={"bordered"} disabled value={firstWord}/>
          </div>
        </section>
    </div>
  )
}

export default ShowWordsSection