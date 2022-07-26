import React from 'react';
import styles from './home.module.css';
import SendWordInput from './components/SendWordInput/SendWordInput';
import ShowWordsSection from './components/ShowWordsSection/ShowWordsSection';
const Home = () => {
  return (
    <div className={styles.home}>
      <SendWordInput />
      <ShowWordsSection />
    </div>
  )
}

export default Home