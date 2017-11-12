import NotificationManager from './NotificationManager';
import RendererMock from '../__mocks__/rendererMock';
const noop = () => true;

describe('notification manager', () => {
    jest.useFakeTimers();

    test('can be created', () => {
        const notificationManager = new NotificationManager();
    });

    test('allows adding notifications', () => {
        const notificationManager = new NotificationManager({}, new RendererMock());
        expect(notificationManager.createNotification()).toEqual(0);
        expect(notificationManager.notificationList.length).toEqual(1);
        expect(notificationManager.createNotification()).toEqual(1);
        expect(notificationManager.notificationList.length).toEqual(2);
    });

    test('allows removing all notifications', () => {
        const notificationManager = new NotificationManager({}, new RendererMock());
        notificationManager.createNotification();
        notificationManager.createNotification();
        expect(notificationManager.notificationList.length).toEqual(2);
        notificationManager.closeAllNotifications();
        expect(notificationManager.notificationList.length).toEqual(0);
    });

    test('allows removing single notification', () => {
        const notificationManager = new NotificationManager({}, new RendererMock());
        const notificationId = notificationManager.createNotification();
        expect(notificationManager.notificationList.length).toEqual(1);
        notificationManager.closeNotification(notificationId);
        expect(notificationManager.notificationList.length).toEqual(0);
    });
});