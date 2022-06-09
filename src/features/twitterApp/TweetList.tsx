import React from 'react';
import  TweetCard from './TweetCard';

import { DataInterface } from '../../types';
import styles from '../../styles/index.module.css';


interface TweetListInterface {
    tweets: DataInterface[]
}


const TweetList = ({ tweets }: TweetListInterface ) => {
    return (
        <div className={styles.tweetBody}>
            {tweets.map((tweet) => (
                <TweetCard
                    key={tweet.id}
                    id={tweet.id} 
                    createdOn={tweet.created_on}
                    user={tweet.user} 
                    likesCount={tweet.favorites_count}
                >
                    {tweet.content}
                </TweetCard>
            ))}
        </div>
    )
}


export default TweetList;