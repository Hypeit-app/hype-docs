# API Overview

`hype-web-app` exposes route handlers under `app/api/**/route.ts`.

## Auth and session

- `/api/auth/[...nextauth]`
- `/api/auth/nonce`
- `/api/auth/verify`
- `/api/siwe/session`
- `/api/siwe/refresh`

## Feed and discovery

- `/api/feed/feed`
- `/api/feed/for-you`
- `/api/feed/following`
- `/api/feed/trending`
- `/api/feed/hashtag/[tag]`
- `/api/feed/token/[id]`
- `/api/feed/check-new`
- `/api/feed/for-you/check-new`
- `/api/feed/following/check-new`
- `/api/feed/seen`
- `/api/ambassadors/top`
- `/api/recommendation`
- `/api/user/recommendations`

## Content and social actions

- `/api/content`
- `/api/content/[contentId]`
- `/api/content/by-contentId/[contentId]`
- `/api/content/reaction`
- `/api/comments`
- `/api/comments/like`
- `/api/comments/pin`
- `/api/like`
- `/api/dislike`
- `/api/repost`
- `/api/follow`
- `/api/follow/status`
- `/api/follow/count`
- `/api/bookmark`
- `/api/bookmark/list`
- `/api/bookmark/status`

## Profile and user

- `/api/user`
- `/api/user/first`
- `/api/user/content`
- `/api/user/preferences`
- `/api/user/resolve`
- `/api/user/seen`
- `/api/profile`
- `/api/update-profile`
- `/api/check-username`

## NFT and market

- `/api/nft/collections`
- `/api/nft/collections/random`
- `/api/nft/listing/create`
- `/api/nft/listing/[listingId]`
- `/api/nft/listing/[listingId]/lastBid`
- `/api/nft/listing/bidHistory/[listingId]`
- `/api/nft/listing/ownership`
- `/api/nft/listing/recommendation`
- `/api/nft/mint`
- `/api/nft/randomize`
- `/api/purchase`
- `/api/purchase/content`

## Integrations and utilities

- `/api/upload`
- `/api/upload-url`
- `/api/view-url`
- `/api/image/uploads/[key]`
- `/api/image/thumbnails/[key]`
- `/api/image/profile/[key]`
- `/api/push/subscribe`
- `/api/push/test`
- `/api/telegram`
- `/api/notification/tg-webhook`
- `/api/twitter/start`
- `/api/twitter/callback`
- `/api/instagram/start`
- `/api/instagram/callback`

## Admin and config

- `/api/admin/feature-flags`
- `/api/feature-flags/[key]`
- `/api/chains`
- `/api/domain`
- `/api/price`
- `/api/search`
- `/api/trending`
- `/api/onboard`
- `/api/get-signature`
