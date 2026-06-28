# Sprint L1 - Calls and Messaging Product Boundary

Current HEAD: `48778a35ad7a2c16fdcc44fc5ca107aa4286b6d5`

Sprint K closeout posture: contact/provider identity resolution is available only as inert contracts, fixture harnesses, evidence mapping, default-off preview modeling, and QA. It is not loaded by the Standard User runtime and has no execution authority.

## Sprint L Purpose

Sprint L defines how Nexus may safely represent call/message intent, recipient confirmation, channel selection, drafts, and preview behavior without actually calling, sending, dispatching, or writing real-world pending actions.

## Call/Message Intent

A call/message intent is a structured representation that the user may want to communicate with a recipient. It is not a completed call, sent message, provider handoff, or dispatch.

Distinctions:

- intent: Nexus detected a possible communication request.
- draft: Nexus may prepare review-only wording or purpose.
- handoff: a future provider/channel transfer that remains blocked until approved in a later sprint.
- actual send/call execution: forbidden in Sprint L without a later explicit provider execution approval.

## Supported Communication Channels

- phone call
- SMS
- WhatsApp
- Telegram
- email
- in-app message
- user-provided communication channel

## Required Intent Fields

- communicationIntentId
- communicationType
- recipientIdentityResolutionId
- recipientDisplayName
- recipientChannelType
- recipientChannelValue
- messageDraft
- callPurpose
- channelConfirmationRequired
- userApprovalRequired
- finalExecutionGateRequired
- executionAuthority
- riskTier
- evidenceRequirement
- sourcePacketRequirement
- blockedExecutionChannels
- safeUseNotes
- limitations

All call/message intent objects must require:

- `channelConfirmationRequired: true`
- `userApprovalRequired: true`
- `finalExecutionGateRequired: true`
- `executionAuthority: false`

## Recipient And Channel Requirements

Recipient identity must use the Sprint K contact/provider identity posture. Nexus must not guess recipients, infer private identifiers, or use hidden contact/provider data. Ambiguous or missing recipients require clarification.

Every channel requires visible confirmation of the intended channel type and value before any future action. A channel value may be absent or masked in preview, but cannot be used for execution without a later approved gate.

## Evidence And Risk

Every intent must include evidence and risk expectations:

- visible user phrase or source packet requirement
- recipient identity evidence
- channel confirmation evidence
- risk tier
- safe-use notes
- limitations

## Standard User Safety

The Standard User build may only show preview or review language when a future flag explicitly allows it. Sprint L1 adds no runtime behavior.

Sprint L1 blocks:

- actual call execution
- SMS sending
- WhatsApp sending
- Telegram sending
- email sending
- in-app message sending
- provider dispatch
- payments, purchases, marketplace transactions, account creation, checkout, or money movement
- location sharing, geolocation execution, camera access, image capture, or image diagnosis
- appointment booking
- emergency routing
- medical or pharmacy workflow execution
- backend writes
- real pending actions

## Browser Validation

Browser validation is required only when a later phase changes runtime-visible behavior. Validation must use the normal Standard User build, verify no unsafe controls or hidden debug metadata, confirm no calls/messages/provider handoff occur, and ensure console warnings/errors are documented.

## Rollback Strategy

If a future calls/messaging preview introduces unsafe behavior, rollback by disabling the preview flag, removing runtime wiring, and preserving inert contracts and QA. No provider execution state should exist to unwind in Sprint L.

## Sprint L2 Readiness

L2 should add an inert call/message intent contract and validator. It must preserve the no-call, no-send, no-provider-dispatch, no-backend-write, and no-real-pending-action boundary.
