# Notifications

Hype uses a queue-first notification architecture.

## Entry point

File: `hype-web-app/lib/notification.ts`

- `notify(payload)` pushes JSON payload to Redis list `notification_queue_raw`.
- `NotificationService.push(...)` normalizes aliases (`recipientId -> userId`).

## Templates and event types

File: `hype-web-app/config/notificationTemplates.ts`

Notification types include:

- `FOLLOW`, `LIKE`, `COMMENT`, `REPLY`, `REPOST`, `MENTION`
- `BID`, `OUTBID`, `BID_CONFIRMED`, `BID_WITHDRAWN`
- `SOLD`, `LISTING_SUCCESS`, `LISTING_CANCELLED`, `FUNDS_RETURNED`
- `NEW_POST`, `NEW_CONTENT_DROPPED`, `FRIEND_POST`, `PRICE_SURGE`

Each type defines:

- `telegram(data) => string`
- `push(data) => { title, body, url? }`

## Worker delivery

File: `hype-web-app/worker/notifyWorker.ts`

- Unified worker loop consumes `notification_queue_raw` via blocking `BRPOP`.
- Legacy loop consumes `legacy_notify_queue_raw` for purchase-failure notifications.
- Supports fan-out using `userIds[]` with batch processing.
- Channel routing defaults to both `telegram` and `push` unless overridden.

## Push subscription API

- `POST /api/push/subscribe`
- Persists browser push endpoint + keys to `PushSubscription` via Prisma `upsert`.

## Operational notes

- Redis availability is required for queue ingestion and consumption.
- Worker process should be supervised (PM2 config includes `notifier`).
