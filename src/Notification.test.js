import Notification from './Notification';
const noop = () => true;

describe('single notification', () => {
    jest.useFakeTimers();

    test('can be created', (done) => {
        const notification = new Notification(0, {}, done, noop);
    });

    test('calls to be removed after given time', (done) => {
        const notification = new Notification(0, {
            duration: 1, 
        }, noop, () => done());
        jest.runAllTimers(); 
    });

    test('throws an error if no settings provided', () => {
        expect(() => new Notification()).toThrowError(/settings/);
    });
});