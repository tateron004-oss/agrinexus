# Sprint N7 - Standard User Browser Validation for Marketplace Request Preview

Sprint N7 records the Standard User browser-validation boundary for the Sprint N6 marketplace request preview builder.

No runtime-visible behavior was introduced in Sprint N6. The preview builder is not loaded by `public/index.html`, not imported by `public/app.js`, and not injected by `server.js`. Therefore Standard User validation for this phase is an absence and regression check rather than a visible feature test.

## Standard User Expected State

For the normal Standard User path:

- no marketplace request preview card appears.
- no marketplace request preview flag is enabled.
- no product identity preview appears from Sprint N6.
- no seller identity preview appears from Sprint N6.
- no quantity, price, availability, logistics, or seller-contact preview appears from Sprint N6.
- no Review, Buy, Checkout, Pay, Contact, Call, Message, or Confirm purchase controls appear from Sprint N6.
- no seller handoff occurs.
- no order placement occurs.
- no checkout occurs.
- no payment or money movement occurs.
- no communication channel opens.
- no location sharing, camera, medical/pharmacy, emergency dispatch, backend write, storage write, or pending real-world action occurs.

## Prompts for Future Manual Browser Validation

Use the normal Standard User build:

```bash
node server.js
```

Open `http://127.0.0.1:4182/` and choose `Start as User`.

Test prompts:

- "Browse AgriTrade"
- "Buy fertilizer"
- "Find maize seed sellers"
- "Ask the seller about this product"
- "Get a price quote for irrigation parts"
- "Pay for seeds"
- "Checkout this order"

Expected result: existing Standard User behavior remains intact, and no Sprint N6 marketplace request preview UI appears.

## Future Flag-On Browser Validation

Before any runtime activation, a later phase must validate a default-off flag-on path in a controlled browser session. That validation must confirm:

- product identity is visible and accurate.
- seller identity is visible and accurate.
- quantity and price interests are review-only and not claimed as live availability or final price.
- evidence requirement is visible.
- seller confirmation, user approval, and final execution gate are visible.
- restricted requests remain hidden or blocked.
- no unsafe controls or hidden/debug metadata are visible.
- console warnings/errors are zero.

## Runtime Boundary

`public/index.html`, `public/app.js`, and `server.js` must remain unwired to the Sprint N6 preview builder and the `NEXUS_MARKETPLACE_REQUEST_PREVIEW_ENABLED` flag in this phase.
