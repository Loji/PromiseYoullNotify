# PromiseYoullNotify

Framework agnostic notification library.

[Live example](https://loji.github.io/PromiseYoullNotify/index.html)

# Usage

```
import NotificationManager from 'promiseyoullnotify';

const notificationManager = new NotificationManager();
const notificationId = notificationManager.createNotification({
    duration: 1500, // notification duration in ms
    text: 'You\'ve got an error', // notification text
    type: 'warning', // normal | success | warning
    params: {
        'data-test': 'great.notification',
    },
});

notificationManager.closeNotification(notificationId);
```