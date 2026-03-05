# Architecture

## Core stack

- Frontend/API: Next.js App Router (`app/`)
- Data: Prisma + PostgreSQL
- Cache/queue: Redis
- Auth: SIWE + NextAuth credentials flow
- Async processing: TS workers in `worker/`

## High-level flow

1. User authenticates via wallet signature (SIWE).
2. Backend resolves/creates user and issues session/JWT tokens.
3. Feed/content/NFT APIs read and write through Prisma.
4. Side effects (notifications, heavy jobs) are queued in Redis.
5. Workers consume queue payloads and deliver Telegram/push notifications.

## Auth and identity

- NextAuth route: `app/api/auth/[...nextauth]/route.ts`
- SIWE verification endpoint: `app/api/auth/verify/route.ts`
- Referral code support on signup: `referrerCode` maps to `User.username` and persists in `User.referredById`.

## Data model anchors

From `prisma/schema.prisma`:

- `User` with referral relation (`referredById`, `referrals`)
- Social graph (`Follow`)
- Content lifecycle (`Content`, `Purchase`, `FeedEvent`)
- NFT marketplace (`NftListing`, `BidHistory`, `NftListingPurchase`)
- Delivery endpoints (`PushSubscription`)

## Async components

- Notification API calls `lib/notification.ts` and enqueues raw payloads.
- `worker/notifyWorker.ts` consumes queue messages and dispatches channels (`telegram`, `push`).
- Legacy and unified notification queue handlers run in parallel loops.
