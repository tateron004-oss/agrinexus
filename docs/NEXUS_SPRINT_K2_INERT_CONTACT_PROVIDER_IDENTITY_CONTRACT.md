# Nexus Sprint K2 - Inert Contact/Provider Identity Contract

Sprint K2 adds an inert contract for contact and provider identity resolution candidates.

This phase does not add runtime UI, live contact lookup, live provider lookup, provider dispatch, provider handoff, external navigation, calls, messages, WhatsApp, Telegram, SMS, email, scheduling, payments, purchases, location sharing, camera or microphone access, medical/pharmacy behavior, emergency routing, marketplace transactions, backend writes, storage writes, network calls, or pending real-world actions.

## Contract Purpose

The contract models identity resolution as a safe, evidence-backed preview candidate. It can represent what Nexus thinks the user may mean, why, and what is still missing. It cannot authorize communication or any other real-world action.

## Required Candidate Fields

- `identityCandidateId`
- `sourceSurface`
- `requestedActionType`
- `entityType`
- `displayName`
- `candidateSummary`
- `evidenceSummary`
- `confidenceTier`
- `riskTier`
- `language`
- `ambiguityState`
- `missingInformationState`
- `permissionState`
- `consentState`
- `auditState`
- `finalExecutionGateState`
- `identityResolutionOnly`
- `approvalIntentOnly`
- `finalExecutionGateRequired`
- `executionAuthority`
- `providerDispatchAllowed`
- `providerHandoffAllowed`
- `communicationAllowed`
- `externalNavigationAllowed`
- `nativeBridgeAllowed`
- `networkAllowed`
- `storageWriteAllowed`
- `backendWriteAllowed`
- `blockedIdentityChannels`
- `limitations`

## Supported Entity Types

- contact
- provider
- organization
- role
- marketplace-party
- healthcare-provider
- pharmacy-provider
- emergency-contact
- transportation-provider
- unknown

## Confidence Tiers

- low
- medium
- high
- ambiguous
- missing

## Required Safety Flags

Every valid candidate must preserve:

- `identityResolutionOnly: true`
- `approvalIntentOnly: true`
- `finalExecutionGateRequired: true`
- `executionAuthority: false`
- `providerDispatchAllowed: false`
- `providerHandoffAllowed: false`
- `communicationAllowed: false`
- `externalNavigationAllowed: false`
- `nativeBridgeAllowed: false`
- `networkAllowed: false`
- `storageWriteAllowed: false`
- `backendWriteAllowed: false`

## Blocked Channels

The contract blocks calls, messages, WhatsApp, Telegram, SMS, email, provider dispatch, provider handoff, external navigation, native bridge, appointment scheduling, payment, purchase, marketplace transaction, location, camera, medical, pharmacy, emergency, backend write, storage write, network call, and pending action channels.

## Runtime Boundary

The contract is not imported by:

- `public/index.html`
- `public/app.js`
- `server.js`

It is local-safe source and QA scaffolding only.
