import React, { useMemo } from 'react';
import ProfileAvatar from '../../components/ProfilePicture';

import { getFirstLetter } from '../../utils/getFirstLetter';
import { User } from '../twitterApp';
import styles from '../../styles/index.module.css';


interface TwitterHeaderInterface {
    handleSubmit: (content: string) => void;
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value: string;
}

const TwitterHeader = ({ handleSubmit, handleChange, value }: TwitterHeaderInterface) => {
    const placeholder = "What's happening?"

    const handleClick = () => {
        handleSubmit(value)
    }

    const firstLetter =  useMemo(() => getFirstLetter(User), []);

    return (
        <div className={styles.twitterHeader}>
            <div className={styles.twitterLeftSideContainer}>
                <ProfileAvatar>{firstLetter}</ProfileAvatar>
            </div>
            <div className={styles.twitterRightSideContainer}>
                <div className={styles.twitterInput}>
                    <textarea 
                    value={value}
                    onChange={handleChange} 
                    placeholder={placeholder}/>
                </div>
                <div className={styles.twitterButton}>
                    <button onClick={handleClick}>Tweet</button>
                </div>
            </div>
        </div>
    )
}

export default TwitterHeader;