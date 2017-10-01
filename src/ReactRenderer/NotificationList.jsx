import React from 'react';
import Notification from './Notification.jsx';

const NotificationList = props => (
    <div className="notificationList">
        {props.notificationList.map(el => <Notification {...el} />)}
    </div>
);

export default NotificationList;

