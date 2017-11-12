import Notification from './Notification';
import NotificationRenderer from './ReactRenderer';
import Renderer from './ReactRenderer';

class NotificationManager {
    constructor(
        defaultSettings = {},
        renderer = new Renderer(() => this.closeAllNotifications()),
    ) {
        this.defaultSettings = defaultSettings;
        this.notificationList = [];
        this.lastId = 0;
        this.renderer = renderer;
    }

    createNotification(settings = this.defaultSettings) {
        const notificationId = this.lastId++;

        this.notificationList.push(
            new Notification(
                notificationId,
                settings,
                () => true,
                () => this.closeNotification(notificationId),
            ),
        );
        this._rerenderNotificationList();

        return notificationId;
    }

    closeNotification(removedNotificationId) {
        this.notificationList = this.notificationList.filter(el => el.id !== removedNotificationId);
        this._rerenderNotificationList();
    }

    closeAllNotifications() {
        this.notificationList.forEach((el) => el && el.destroy());
        this.notificationList = [];
    }

    _rerenderNotificationList() {
        this.renderer.updateList(this.notificationList);
    }
}

export default NotificationManager;