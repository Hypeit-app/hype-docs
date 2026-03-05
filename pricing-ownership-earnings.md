# Pricing, Ownership, and Earnings

## How ownership works

When a user taps **Own it** and purchase is completed:

- Ownership moves to the buyer
- Content can continue to be bought by the next owner

## How price evolves

Hype recalculates content price using signals like:

- Likes and dislikes
- Number of purchases
- Previous purchase price
- Token minimum constraints

In short: more demand and stronger sentiment can increase the next price.

## How users earn

### Creator earnings

- Creator receives value on the first sale.
- Creator can also receive royalty share on subsequent sales (per marketplace contract rules).

### Owner earnings

- Current owner receives value when another user buys the content from them.

## Royalty and fee plan

- Resale pricing logic includes a **10% combined fee assumption** (`platform + royalty`) to protect positive resale economics.
- Final distribution is enforced by on-chain marketplace contracts and can vary by contract configuration.

If you need exact per-chain fee splits, check the latest marketplace contract settings used in production.
