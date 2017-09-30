(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.proiseYoullNotify = factory());
}(this, (function () { 'use strict';

class Notification {
    constructor(
        id = null,
        settings, 
        initializedCallback,
        destroyCallback,
    ) {
        if(!settings) {
            throw new Error('You have to provide settings');
        }
        this.id = id;
        this.settings = settings; 
        this.destroyCallback = destroyCallback;

        const duration = settings.duration || 3000;

        this.timeout = setTimeout(this.onDestroy.bind(this), duration);
        initializedCallback();
    }

    onDestroy() { 
        this.destroyCallback();
    }

    destroy() {
        clearTimeout(this.timeout);
        this.onDestroy();
    }

}

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

return NotificationManager;

})));
