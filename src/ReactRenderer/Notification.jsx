import React from 'react';
import styles from './notification.scss';

export const Notification = props => (
    <div className={`${styles.notification} ${styles[props.settings.type]}`}>
        jestem notyfikacją {props.id}
        {props.settings.text}
        {props.settings.type}
        <button onClick={props.destroy}>delete</button>
    </div>
);

export default Notification;
