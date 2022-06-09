import React, { useMemo, useState } from 'react';
import ProfileAvatar from '../../components/ProfilePicture';

import { getFirstLetter } from '../../utils/getFirstLetter';
import FavoriteIcon from '@mui/icons-material/Favorite';
import moment from 'moment';
import styles from '../../styles/index.module.css';


export interface TweetInterface {
    user: string;
    createdOn: string;
    children: React.ReactNode;
    id: string;
    likesCount: number;
  
}

const TweetCard = ({user, createdOn, children, id, likesCount}: TweetInterface) => {
    const [active, setActive] = useState(false);
    const formattedDate = moment(createdOn).from(new Date());
    const firstLetter =  useMemo(() => getFirstLetter(user), [user]);

    const handleIconClick = () => {
        setActive(!active);
    }

    return (
        <div className={styles.tweetCard} key={id}>
            <div className={styles.cardHeader}>
                <ProfileAvatar>{firstLetter}</ProfileAvatar>
                <span className={styles.cardUser}>@{user}</span> 
                <span className={styles.cardCreatedOn}>{formattedDate}</span>
            </div>
            <div className={styles.cardContent}>
                {children}
            </div>
            <div className={styles.actions}>
                <span className={styles.favorite} onClick={handleIconClick}>
                    <FavoriteIcon style={{fill: active ? 'red' : 'white'}} />{active ? likesCount + 1 : likesCount}
                </span>
            </div>
        </div>
    )
}


export default TweetCard;