
import React from 'react';
import NotificationList from './NotificationList.jsx';

const NotificationContainer = props =>(
    <div>
        <NotificationList notificationList={props.notificationList} />
        <button onClick={props.clearNotificationsAction}>Clear notifications</button>
    </div>
);

export default NotificationContainer;
