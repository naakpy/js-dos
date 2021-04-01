---
id: dos-direct 
title: DOS Direct 
---

DOS Direct is an emulation backend based on dosbox, you can create it with following command:

```js
const ci = await emulators.dosDirect(bundle);
```

In theory the direct version is the fastest possible version of the emulator backend. But it has a strong disadvantage: it's working on the main browser thread. So it can easily hang a browser for some amount of time, and not be very responsive.

:::note

[DOS Worker](dos-worker.md) is a more preferred version of the emulator backend, because it does not block the browser.

:::