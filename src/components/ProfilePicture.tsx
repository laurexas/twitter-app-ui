import React from 'react';
import styles from '../styles/index.module.css';


interface ProfileInterface {
    children: React.ReactNode;
}

const ProfileAvatar = ({children}: ProfileInterface) => {
    return <div className={styles.twitterProfilePicture}>{children}</div>
}

export default ProfileAvatar;