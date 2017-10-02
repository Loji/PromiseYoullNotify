
import React from 'react';
import NotificationList from './NotificationList.jsx';
import styles from './notificationContainer.scss';

const NotificationContainer = props =>(
    <div className={styles.notificationContainer}>
        <NotificationList notificationList={props.notificationList} />
        <button onClick={props.clearNotificationsAction}>Clear notifications</button>
    </div>
);

export default NotificationContainer;
