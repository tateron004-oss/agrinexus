# Sprint N1 - Marketplace Request Product Boundary

Current HEAD: `a5d1774105b030341083754d0dfd2b3402302c52`

Sprint M closeout posture: appointment/service requests are represented only by inert contracts, fixtures, risk/evidence mapping, default-off guards, and local-safe preview metadata. Standard User runtime remains unwired, non-executing, and protected from booking, provider dispatch, calls, messages, payments, location, camera, medical/pharmacy, emergency behavior, backend writes, storage writes, and real pending actions.

## Sprint N Purpose

Sprint N prepares marketplace request and purchase-intent workflows. Nexus may represent buyer interest, seller/product identity needs, evidence requirements, price/availability caution, and review-only request drafts. Nexus must not place orders, reserve goods, dispatch sellers, start checkout, process payment, move money, or create real marketplace transactions.

## Intent Boundary

Marketplace request intent means the user is asking Nexus to help prepare or review a possible marketplace request, product inquiry, seller question, agriculture input request, produce request, or purchase-intent packet.

- Request intent: the user expresses what product/service they may want.
- Draft marketplace request: an inert text/request packet that can be reviewed later.
- Seller handoff: opening or transferring to a seller/provider channel; not allowed in this lane.
- Checkout: any order, cart finalization, payment, reservation, or money movement; not allowed in this lane.
- Actual purchase: creating, confirming, placing, reserving, paying for, or dispatching a marketplace order; not allowed in this lane.

## Supported Categories

- agriculture input request
- produce purchase inquiry
- seller/product question
- marketplace availability review
- price quote request, review-only
- logistics interest, non-dispatching
- payment-related request, blocked from execution
- ambiguous marketplace request requiring clarification

## Required Future Fields

- marketplaceRequestId
- marketplaceRequestType
- productIdentityResolutionId
- productDisplayName
- sellerIdentityResolutionId
- sellerDisplayName
- requestedMarketplaceCategory
- requestedQuantity
- userProvidedBudgetOrPrice
- availabilityRequirement
- logisticsRequirement
- communicationIntentRequirement
- requestDraft
- sellerConfirmationRequired
- userApprovalRequired
- finalExecutionGateRequired
- executionAuthority
- riskTier
- evidenceRequirement
- sourcePacketRequirement
- blockedExecutionChannels
- safeUseNotes
- limitations

Every marketplace request object must require:

- `sellerConfirmationRequired: true`
- `userApprovalRequired: true`
- `finalExecutionGateRequired: true`
- `executionAuthority: false`

## Standard User Safety Expectations

Standard User may receive guidance or a review-only preview in later approved phases. Standard User must not receive unsafe controls, hidden metadata, seller handoff, actual checkout, order placement, payment, purchase, marketplace transaction, delivery dispatch, calls, messages, location sharing, camera access, medical/pharmacy execution, emergency routing, backend writes, storage writes, network calls, or pending real-world actions.

## Explicit Blocks

- no payment
- no checkout
- no money movement
- no order placement
- no seller dispatch
- no seller handoff
- no cart finalization
- no purchase confirmation
- no call/message sending
- no WhatsApp, SMS, Telegram, in-app, or email sending
- no location sharing, geolocation execution, camera, or image capture
- no medical, pharmacy, or emergency execution
- no backend writes
- no real pending actions

## Browser Validation

Browser validation is required for any runtime-visible change. Use the normal Standard User build, `node server.js`, `http://127.0.0.1:4182/`, and Start as User. Validate no unsafe controls, no hidden/debug metadata, no seller dispatch, no checkout, no payment, no calls/messages, no location/camera/medical/pharmacy/emergency behavior, no console warnings/errors, and restored runtime state.

## Sprint N2 Readiness

N2 should add an inert marketplace request contract and validator only. It must not wire Standard User runtime, place orders, contact sellers, process payments, dispatch services, write backend state, or create real pending actions.
