import React from 'react';

import styles from './styles/index.module.css';
import  TwitterApp  from './features/twitterApp';


function App() {
  return (
    <div className={styles.app}>
        <TwitterApp />
    </div>
  );
}

export default App;
