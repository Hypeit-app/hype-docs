# Mini App SDK

Hype Mini Apps let you run a web app inside Hype with a small SDK for identity, transactions, feed posting, and cloud storage. This guide explains the integration flow and SDK usage.

For submission and review, see [Mini App Approval & Review](/mini-app-approval).

## Quickstart

### 1) Include the SDK
Add the SDK to your mini‑app HTML and set `data-hype-origin` to the Hype host origin (the domain where Hype is hosted).

```html
<script src="https://hypeit.app/hype-sdk.js" data-hype-origin="https://hypeit.app"></script>
```

### 2) Call `Hype.ready()` and `Hype.getUser()` on load
Your mini‑app should initialize automatically so it’s ready before a user interacts.

```html
<script>
  if (window.Hype) {
    Hype.ready();
    Hype.getUser()
      .then((user) => {
        console.log('Connected user:', user);
        // user.initData is a signed JWT for your backend
      })
      .catch((err) => {
        console.error('getUser failed:', err.message);
      });
  }
</script>
```

## SDK APIs

### `Hype.getUser()`
Returns the current Hype user and a signed `initData` JWT.

```js
const user = await Hype.getUser();
console.log(user.walletAddress, user.name, user.image, user.initData);
```

### `Hype.sendTransaction(txData)`
Requests a blockchain transaction via the Hype approval UI.

```js
const result = await Hype.sendTransaction({
  to: '0xRecipientAddress',
  value: '0.001', // decimal ETH or wei string
  data: '0x',
});
console.log('tx hash:', result.hash);
```

### `Hype.postToFeed(postData)`
Creates a post on the Hype feed.

```js
const result = await Hype.postToFeed({
  caption: 'I just finished a mini-app run! #HypeMiniApps',
});
console.log('contentId:', result.contentId);
```

### `Hype.CloudStorage`
Small persistent storage per user per mini‑app.

```js
await Hype.CloudStorage.setItem('highscore', '9400');
const result = await Hype.CloudStorage.getItem('highscore');
console.log(result.value);
```

## Developer Secret & `initData`
When you submit an app, a **developerSecret** is generated and shown **once**. Store it securely.

Your mini‑app receives `initData` from `Hype.getUser()` — a signed JWT. Your backend should verify this token using your `developerSecret` to confirm the user identity and app scope.

**Never** expose your `developerSecret` in client code.

## Security Notes
- The host validates the iframe origin and window source.
- `initData` is a signed JWT that your backend can verify using your `developerSecret`.
- Never expose your `developerSecret` in client code.

## Mini‑app Lifecycle
1. Mini‑app loads inside the Hype iframe.
2. Mini‑app calls `Hype.ready()`.
3. Mini‑app calls `Hype.getUser()` to obtain identity and `initData`.
4. Mini‑app can request transactions, post to feed, or use cloud storage.

## Troubleshooting
- **`getUser` never resolves**: check `data-hype-origin` and host origin.
- **`initData not ready`**: ensure you called `Hype.ready()` before `getUser()`.
- **Wallet not connected**: the user must be logged into Hype with a wallet session.
