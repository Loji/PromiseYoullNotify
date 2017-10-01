import React from 'react';

export const Notification = props => (
    <div>
        jestem notyfikacją {props.id}
        {props.settings.text}
        <button onClick={props.destroy}>delete</button>
    </div>
);

export default Notification;
