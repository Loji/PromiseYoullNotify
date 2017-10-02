import Notification from './Notification';
import NotificationRenderer from './ReactRenderer';
import Renderer from './ReactRenderer';

class NotificationManager {
    constructor(
        defaultSettings = {},
        renderer,
    ) {
        this.defaultSettings = defaultSettings;
        this.notificationList = [];
        this.lastId = 0;
        this.renderer = new Renderer(() => this.closeAllNotifications());
    }

    createNotification(settings = this.defaultSettings) {
        const notificationId = this.lastId++;

        this.notificationList.push(
            new Notification(
                notificationId,
                settings,
                () => true,
                () => this._removeNotification(notificationId),
            ),
        );
        this._rerenderNotificationList();
        console.log(this.notificationList);
    }

    closeAllNotifications() {
        this.notificationList.forEach((el) => el && el.destroy());
        this.notificationList = [];
    }

    _rerenderNotificationList() {
        this.renderer.updateList(this.notificationList);
    }

    _removeNotification(removedNotificationId) {
        this.notificationList = this.notificationList.filter(el => el.id !== removedNotificationId);
        this._rerenderNotificationList();
    }
}

export default NotificationManager;