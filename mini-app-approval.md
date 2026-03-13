# Mini App Approval & Review

This page explains how to submit a mini‑app, how review works, and how developers can test apps before approval.

## Submit your app
In the Hype Mini Apps page, click **Submit your app** and provide:
- App name and description
- Icon and banner
- App URL
- Contract addresses (if you interact with contracts)

Once submitted, your app enters **In Review** status.

## Developer preview (unapproved apps)
While your app is **In Review**, only you (the developer) can launch it from the **Your Apps** section. It is not visible in the public mini‑app list.

## Approval
When approved, your app is listed publicly and becomes available to all users.

## Developer secret
When you submit an app, a **developerSecret** is generated and shown **once**. Store it securely. Your backend uses this secret to verify `initData` JWTs returned by `Hype.getUser()`.

**Never** expose your `developerSecret` in client code.

## Support & Development Help
If you need help during integration or want Hype to build a mini‑app for you, contact **@letshypeit** on Telegram.
