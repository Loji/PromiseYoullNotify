import React from 'react';
import Notification from './Notification';

const NotificationList = props => (
    <div>
        {props.notificationList.map(el => <Notification {...el} key={el.id} />)}
    </div>
);

export default NotificationList;

