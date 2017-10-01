import React from 'react';
import Notification from './Notification.jsx';
import styles from './styles.scss';

const NotificationList = props => (
    <div className={styles.notificationList}>
        {props.notificationList.map(el => <Notification {...el} key={el.id} />)}
    </div>
);

export default NotificationList;

