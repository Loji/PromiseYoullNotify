import Notification from './Notification';

class NotificationManager {
    constructor(
        defaultSettings = {},
        renderer,
    ) {
        this.defaultSettings = defaultSettings;
        this.notificationList = [];
        this.lastId = 0;
    }

    createNotification(settings = this.defaultSettings) {
        const notificationId = this.lastId++;

        this.notificationList.push(
            new Notification(
                notificationId,
                settings, 
                this._rerenderNotificationList.bind(this),
                () => this._removeNotification(notificationId),
            ),
        );
        return true;
    }

    closeAllNotifications() {
        this.notificationList.forEach((el) => el && el.destroy());
        this.notificationList = [];
    }

    _rerenderNotificationList() {

    }

    _removeNotification(removedNotificationId) {
        this.notificationList = this.notificationList.filter(el => el.id !== removedNotificationId);
        this._rerenderNotificationList();
    }
}

export default NotificationManager;