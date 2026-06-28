# Sprint O7 - Standard User Browser Validation for Payment Preview

Sprint O7 records the Standard User browser-validation boundary for the Sprint O6 payment preview builder.

No runtime-visible behavior was introduced in Sprint O6. The preview builder is not loaded by `public/index.html`, not imported by `public/app.js`, and not injected by `server.js`. Therefore Standard User validation for this phase is an absence and regression check rather than a visible feature test.

## Standard User Expected State

For the normal Standard User path:

- no payment preview card appears.
- no payment preview flag is enabled.
- no payee identity preview appears from Sprint O6.
- no amount, currency, payment method, provider, consent, or dry-run payment preview appears from Sprint O6.
- no Review, Pay, Checkout, Transfer, Wallet, Confirm payment, or Store credentials controls appear from Sprint O6.
- no payment provider handoff occurs.
- no wallet transfer occurs.
- no checkout occurs.
- no payment API call occurs.
- no credential storage occurs.
- no communication channel opens.
- no location sharing, camera, medical/pharmacy, emergency dispatch, backend write, storage write, or pending real-world action occurs.

## Prompts for Future Manual Browser Validation

Use the normal Standard User build:

```bash
node server.js
```

Open `http://127.0.0.1:4182/` and choose `Start as User`.

Test prompts:

- "Pay for seeds"
- "Send mobile money"
- "Checkout this order"
- "Pay the provider"
- "Refund this payment"
- "Transfer money to the seller"
- "Store my payment details"

Expected result: existing Standard User behavior remains intact, and no Sprint O6 payment preview UI appears.

## Future Flag-On Browser Validation

Before any runtime activation, a later phase must validate a default-off flag-on path in a controlled browser session. That validation must confirm:

- payee identity is visible and accurate.
- amount and currency are visible and not treated as final authorization.
- dry-run status is visible.
- evidence requirement is visible.
- payee confirmation, user approval, and final execution gate are visible.
- no payment, wallet, checkout, credential, or provider execution controls are visible.
- no unsafe controls or hidden/debug metadata are visible.
- console warnings/errors are zero.

## Runtime Boundary

`public/index.html`, `public/app.js`, and `server.js` must remain unwired to the Sprint O6 preview builder and the `NEXUS_PAYMENT_PREVIEW_ENABLED` flag in this phase.
