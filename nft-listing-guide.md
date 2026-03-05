# List NFT (Fixed or Auction)

Hype supports two listing styles:

- **Fixed price** (`bidEnabled = false`): buyers can purchase directly.
- **Auction** (`bidEnabled = true`): users place bids, seller can accept/finalize.

## Create a listing

Required inputs:

- NFT contract + token id (`asset`, `assetId`)
- Chain
- Payment token
- Price
- Start time
- End time

Minimum listing value is enforced at about **$0.50 equivalent**.

## Fixed price listing flow

1. Create listing with bidding disabled.
2. Listing goes live.
3. Buyer taps **Own it** and completes purchase.

## Auction listing flow

1. Create listing with bidding enabled.
2. Users place offers.
3. Seller accepts/highest bid finalizes as per listing state and timing.

## Listing states users may see

- Active
- Paused
- Sold
- Delisted / Canceled
- Expired

## Important notes

- Duplicate active listings for the same NFT are blocked.
- Listings can be automatically delisted if ownership/transfer checks fail.
