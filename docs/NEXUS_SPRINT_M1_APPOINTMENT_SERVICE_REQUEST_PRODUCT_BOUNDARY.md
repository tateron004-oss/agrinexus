# Sprint M1 - Appointment and Service Request Product Boundary

Current HEAD: `6299131404bf71d1f35bec5c8c69a5e3f44c246a`

Sprint L closeout posture: calls and messaging are represented only by inert contracts, fixtures, risk/evidence mapping, and flag-gated local-safe preview metadata. Standard User runtime remains unwired, non-executing, and protected from provider handoff, calls, messages, WhatsApp, Telegram, SMS, email, native bridge dispatch, backend writes, and pending real-world actions.

## Sprint M Purpose

Sprint M builds the appointment and service request booking readiness lane. It lets Nexus safely represent appointment/service request intent, draft request needs, provider/service selection requirements, timing needs, evidence expectations, and controlled preview behavior without booking, contacting, dispatching, or creating real pending actions.

## Intent Boundary

Appointment/service request intent means the user is asking Nexus to help prepare or review a possible appointment, field visit, consultation, training session, logistics coordination, or service request.

- Request intent: the user expresses what service they may need.
- Draft request: an inert text/request packet that can be reviewed later.
- Provider handoff: opening or transferring to a provider channel; not allowed in this lane.
- Dispatch: sending a request to a provider, clinic, worker, driver, or emergency service; not allowed in this lane.
- Actual booking: creating, confirming, scheduling, or reserving an appointment/service; not allowed in this lane.

## Supported Categories

- agriculture support request
- training/workforce service request
- provider consultation request
- field visit request
- logistics/service coordination request
- health service request, caution-only and non-executing
- emergency service request, blocked from execution
- user-provided service request

## Required Fields

- serviceRequestId
- serviceRequestType
- providerIdentityResolutionId
- providerDisplayName
- requestedServiceCategory
- requestedTimeWindow
- userProvidedTimePreference
- serviceLocationRequirement
- communicationIntentRequirement
- requestDraft
- providerConfirmationRequired
- userApprovalRequired
- finalExecutionGateRequired
- executionAuthority
- riskTier
- evidenceRequirement
- sourcePacketRequirement
- blockedExecutionChannels
- safeUseNotes
- limitations

Every appointment/service request object must require:

- `providerConfirmationRequired: true`
- `userApprovalRequired: true`
- `finalExecutionGateRequired: true`
- `executionAuthority: false`

## Relationship To Sprint K And Sprint L

Sprint K provider identity requirements still apply. Nexus must show or require a resolved provider/service identity before any future handoff or booking lane can be considered.

Sprint L communication intent requirements still apply. Any future contact, message, WhatsApp, Telegram, SMS, email, or call action remains separate from appointment/service request intent and requires its own confirmation, audit, and final execution gate.

## Timing, Evidence, And Risk

Timing and availability language must be review-oriented: requested time window, user preference, and provider availability are not confirmation of a booking. Evidence requirements must include visible provider identity, timing or availability need, source packet requirement, user approval state, provider confirmation state, and audit-ready state.

Health service requests are caution-only and non-executing. Emergency service requests are blocked from execution and must direct the user to local emergency services instead of dispatching.

## Standard User Safety Expectations

Standard User may receive guidance or a review-only preview in later approved phases. Standard User must not receive unsafe controls, hidden metadata, provider handoff, actual booking, dispatch, calls, messages, payment, location sharing, camera access, medical/pharmacy execution, emergency routing, backend writes, storage writes, network calls, or pending real-world actions.

## Explicit Blocks

- no actual booking
- no provider dispatch
- no call/message sending
- no WhatsApp, SMS, Telegram, in-app, or email sending
- no payments, purchases, marketplace transactions, account creation, checkout, or money movement
- no location sharing, geolocation execution, camera, image capture, or image diagnosis
- no medical, pharmacy, or emergency execution
- no backend writes
- no real pending actions

## Browser Validation

Browser validation is required for any runtime-visible change. Use the normal Standard User build, `node server.js`, `http://127.0.0.1:4182/`, and Start as User. Validate no unsafe controls, no hidden/debug metadata, no provider dispatch, no actual booking, no calls/messages, no payments/location/camera/medical/pharmacy/emergency behavior, no console warnings/errors, and restored runtime state.

## Rollback Strategy

If any future appointment/service request change creates visible unsafe behavior, disable the feature flag, remove runtime wiring, keep inert contract and QA artifacts only, rerun focused and broad QA, and restore any runtime or database mutations before commit.

## Sprint M2 Readiness

M2 should add an inert appointment/service request contract and validator only. It must not wire Standard User runtime, book appointments, contact providers, dispatch services, write backend state, or create real pending actions.
