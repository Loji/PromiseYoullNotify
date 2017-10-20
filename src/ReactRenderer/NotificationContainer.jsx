import React from 'react';
import PropTypes from 'prop-types';
import NotificationList from './NotificationList';
import styles from './notificationContainer.scss';

const NotificationContainer = ({ notificationList, clearNotificationsAction }) => (
    <div className={styles.notificationContainer}>
        <NotificationList notificationList={notificationList} />
        {notificationList.length > 0 && <button onClick={clearNotificationsAction}>Clear notifications</button>}
    </div>
);

NotificationContainer.propTypes = {
    notificationList: PropTypes.array,
    clearNotificationsAction: PropTypes.func,
};

export default NotificationContainer;
