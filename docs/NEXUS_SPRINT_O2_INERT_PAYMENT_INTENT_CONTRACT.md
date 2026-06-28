# Sprint O2 - Inert Payment Intent Contract

Sprint O2 adds an inert payment intent contract for future mobile money, checkout, service fee, transportation fare, marketplace payment, refund, and reversal review data. The contract gives Nexus a deterministic way to validate payment-shaped data without moving money, calling payment APIs, storing credentials, opening wallet handoffs, writing backend state, or creating real pending actions.

## Supported Payment Intent Types

- payment-intent
- mobile-money-intent
- marketplace-payment-intent
- service-fee-intent
- transportation-fare-intent
- refund-review
- reversal-review
- clarification-required
- blocked-payment-request
- unknown

## Supported Payment Categories

- marketplace-payment-review
- service-payment-review
- mobile-money-transfer-review
- transportation-fare-review
- provider-fee-review
- quote-payment-review
- refund-reversal-review
- ambiguous-payment-review
- blocked-payment-execution

## Required Safety State

Every valid payment intent must include:

- `payeeConfirmationRequired: true`
- `userApprovalRequired: true`
- `finalExecutionGateRequired: true`
- `executionAuthority: false`

The contract also requires payee identity fields, payer display fields, amount and currency display fields, payment purpose, payment method preference, provider requirement, consent requirement, dry-run packet, evidence requirements, source packet requirements, blocked execution channels, safe use notes, and limitations.

## Blocked Execution Channels

Blocked channels must include payment, wallet-transfer, mobile-money-transfer, checkout, money-movement, credential-storage, payment-api-call, provider-payment-intent, order-placement, purchase-confirmation, seller-handoff, provider-handoff, call, message, SMS, WhatsApp, Telegram, email, location, camera, image-capture, medical, pharmacy, emergency, backend-write, storage-write, network-call, and pending-action.

## Runtime Boundary

This module is inert. It must not mutate DOM, add event listeners, fetch network resources, write storage, write backend state, store payment credentials, open wallet handoffs, call payment APIs, move money, start checkout, confirm purchases, send messages, make calls, create pending real-world actions, or execute payment intents.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.
