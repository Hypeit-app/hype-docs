# Referrals and Ambassadors

This feature set is implemented across auth, user schema, and feed components.

## Referral capture

Referral code is accepted in auth flows:

- `app/api/auth/verify/route.ts`
- `lib/auth.ts` (credentials provider)

Behavior:

1. Request contains `referrerCode`.
2. Backend looks up `User` by `username = referrerCode`.
3. New user is created with `referredById` when a valid referrer exists.

Schema fields:

- `User.referredById`
- `User.referredBy`
- `User.referrals`

## Top ambassadors API

Endpoint: `GET /api/ambassadors/top`

Source: `app/api/ambassadors/top/route.ts`

Logic:

1. Load referred users that have at least one `connectedSocials` record.
2. Count referrals grouped by `referredById`.
3. Return top 10 users with `{ id, username, walletAddress, profileImageUrl, referralCount }`.

## Feed integration

- `components/feedpage/TopAmbassadors.tsx`
- `components/FeedPage.tsx`

Behavior:

- Special module `top-ambassadors` is inserted into feed special cards.
- Logged-in users with a username can copy referral link format:
  - `<origin>?ref=<username>`
- Empty ambassador list still shows invite CTA for signed-in users.
