# PromiseYoullNotify

Framework agnostic notification library.

# Usage

```
import NotificationManager from 'promiseyoullnotify';

const notificationManager = new NotificationManager();
const notificationId = notificationManager.createNotification({
    duration: 1500, // notification duration in ms
    text: 'You\'ve got an error', // notification text
    type: 'warning' // normal | success | warning
});

notificationManager.closeNotification(notificationId);
```