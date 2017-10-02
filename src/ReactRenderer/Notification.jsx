import React from 'react';
import styles from './styles.scss';

export const Notification = props => (
    <div className={styles.notificationList_notification}>
        jestem notyfikacją {props.id}
        {props.settings.text}
        <button onClick={props.destroy}>delete</button>
    </div>
);

export default Notification;
