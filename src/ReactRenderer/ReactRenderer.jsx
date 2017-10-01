import React from 'react';
import ReactDOM from 'react-dom';

import NotificationContainer from './NotificationContainer.jsx';

class NotificationRenderer {
    constructor(
        clearNotificationsAction,
    ) {
        this.notificationList = [];
        this.notificationContainerID = 'reactNotifications';
        this.notificationNode = document.createElement('div');
        this.notificationNode.id = this.notificationContainerID;
        document.body.appendChild(this.notificationNode);

        this.clearNotificationsAction = clearNotificationsAction;
    }

    updateList(newList) {
        this.notificationList = newList;
        this.render();
    }

    render() {
        ReactDOM.render(
            <NotificationContainer
                notificationList={this.notificationList}
                clearNotificationsAction={this.clearNotificationsAction}
            />,
            this.notificationNode
        );
    }
}

export default NotificationRenderer;
