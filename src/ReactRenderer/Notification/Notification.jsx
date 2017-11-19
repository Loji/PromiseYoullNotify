import React from 'react';
import styles from './notification.scss';
import CloseIcon from './close.svg';

export const Notification = props => (
    <div
        className={`${styles.notification} ${styles[props.settings.type]}`}
        {...props.settings.params}
    >
        <div className={styles.notificationContent}>
            <div className={styles.text}>{props.settings.text}</div>
            <button onClick={props.destroy}>
                {<CloseIcon />}
            </button>
        </div>
        <div
            style={{
                animationDuration: `${props.settings.duration}ms`,
            }}
            className={`${styles.animationBar}`}
        />
    </div>
);

export default Notification;
