
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

        const duration = settings.duration || 5000;

        this.timeout = setTimeout(this.onDestroy.bind(this), duration);
        initializedCallback();
        this.destroy = this.destroy.bind(this);
    }

    onDestroy() {
        this.destroyCallback();
    }

    destroy() {
        clearTimeout(this.timeout);
        this.onDestroy();
    }
}

export default Notification;
