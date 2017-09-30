import NotificationManager from './NotificationManager';
const noop = () => true;

describe('notification manager', () => {
    jest.useFakeTimers();

    test('can be created', () => {
        const notificationManager = new NotificationManager();
    });

    test('allows adding notifications', () => {
        const notificationManager = new NotificationManager();
        expect(notificationManager.createNotification()).toEqual(true);
        expect(notificationManager.notificationList.length).toEqual(1);
        expect(notificationManager.createNotification()).toEqual(true);
        expect(notificationManager.notificationList.length).toEqual(2);
    });

    test('allows removing notifications', () => {
        const notificationManager = new NotificationManager();
        notificationManager.createNotification();
        notificationManager.createNotification();
        expect(notificationManager.notificationList.length).toEqual(2);
        notificationManager.closeAllNotifications();
        expect(notificationManager.notificationList.length).toEqual(0);        
    });
});