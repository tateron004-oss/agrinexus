# Sprint N2 - Inert Marketplace Request Contract

Sprint N2 adds an inert marketplace request contract for purchase-intent and marketplace inquiry data. The contract gives Nexus a deterministic way to validate request-shaped data without placing orders, moving money, contacting sellers, opening provider channels, writing backend state, or creating real pending actions.

## Contract Purpose

The contract represents a review-only marketplace request packet. It can describe product identity requirements, seller identity requirements, requested category, quantity, budget or price preference, availability requirement, logistics requirement, communication requirement, draft request, risk tier, evidence requirement, and limitations.

## Supported Marketplace Request Types

- marketplace-request
- purchase-intent
- product-inquiry
- seller-question
- availability-review
- quote-request
- logistics-interest
- clarification-required
- blocked-request
- unknown

## Supported Marketplace Categories

- agriculture-input
- produce-purchase-inquiry
- seller-product-question
- marketplace-availability-review
- price-quote-review-only
- logistics-interest
- payment-related-blocked
- user-provided-marketplace-request

## Required Safety State

Every valid marketplace request must include:

- `sellerConfirmationRequired: true`
- `userApprovalRequired: true`
- `finalExecutionGateRequired: true`
- `executionAuthority: false`

The contract also requires product identity fields, seller identity fields, quantity/price fields, availability requirements, logistics requirements, communication intent requirements, evidence requirements, source packet requirements, blocked execution channels, safe use notes, and limitations.

## Blocked Execution Channels

Blocked channels must include payment, checkout, money-movement, order-placement, seller-dispatch, seller-handoff, cart-finalization, purchase-confirmation, call, message, SMS, WhatsApp, Telegram, email, location, camera, image-capture, medical, pharmacy, emergency, backend-write, storage-write, network-call, and pending-action.

## Runtime Boundary

This module is inert. It must not mutate DOM, add event listeners, fetch network resources, write storage, write backend state, contact sellers, open seller handoff channels, place orders, finalize carts, start checkout, move money, send messages, make calls, create pending real-world actions, or execute marketplace requests.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.

## Sprint N3 Readiness

Sprint N3 may add fixture-only marketplace request harness coverage using this contract. Any fixture must remain local-safe and must not create backend records, seller handoffs, payment activity, checkout activity, provider communication, or Standard User runtime behavior.
