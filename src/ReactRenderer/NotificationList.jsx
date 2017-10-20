import React from 'react';
import Notification from './Notification';

const NotificationList = props => (
    props.notificationList.map(el => <Notification {...el} key={el.id} />)
);

export default NotificationList;

