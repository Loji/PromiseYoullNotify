import React from 'react';
import PropTypes from 'prop-types';
import NotificationList from './NotificationList';
import styles from './notificationContainer.scss';

const NotificationContainer = ({ notificationList, clearNotificationsAction }) => (
    <div className={styles.notificationContainer}>
        {notificationList.length > 1 && (
            <button onClick={clearNotificationsAction} className={styles.closeAll}>Close all</button>
        )}
        <NotificationList notificationList={notificationList} />
    </div>
);

NotificationContainer.propTypes = {
    notificationList: PropTypes.array,
    clearNotificationsAction: PropTypes.func,
};

export default NotificationContainer;
