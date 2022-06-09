import React, { useState} from 'react';
import TwitterHeader from './TwitterHeader';
import TwitterList from './TweetList';

import { useEnterButtonsHook } from '../../hooks/useEvent';
import data from '../../data.json';
import { DataInterface } from '../../types';
import moment from 'moment'
import styles from '../../styles/index.module.css';


export const User = 'Joe';

const TwitterApp = () => {
    const [textValue, setTextValue] = useState<string>('');
    const [tweets, setTweets] = useState<DataInterface[]>(data);

    const handleTweet = (content: string) => {
      const newTweet = {
        content,
        id: String(Math.random() * 100),
        created_on: moment().toISOString(),
        user: User,
        favorites_count: 0,
      }
      setTweets([...tweets, newTweet])
      setTextValue('')
    }

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { target : { value } } = e;
      setTextValue(value);
    }
  
  
    useEnterButtonsHook({handleSubmit: handleTweet})


    return (
        <div className={styles.app}>
          <div className={styles.appContainer}>
            <TwitterHeader value={textValue} handleChange={handleTextAreaChange} handleSubmit={handleTweet} />
            <TwitterList tweets={tweets}/>
          </div>
        </div>
      
    )
}


export default TwitterApp;