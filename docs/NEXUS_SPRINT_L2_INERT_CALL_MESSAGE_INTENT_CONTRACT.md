# Nexus Sprint L2 - Inert Call/Message Intent Contract

Sprint L2 adds an inert contract for call and message intent records.

This phase does not add runtime UI, live contact lookup, live provider lookup, provider dispatch, provider handoff, external navigation, calls, messages, WhatsApp, Telegram, SMS, email, scheduling, payments, purchases, location sharing, camera or microphone access, medical/pharmacy behavior, emergency routing, marketplace transactions, backend writes, storage writes, network calls, or pending real-world actions.

## Contract Purpose

The contract models a communication request as a safe intent record. It can represent who the user appears to want to contact, which channel they mentioned, what message draft or call purpose was expressed, and which safety gates are still required. It cannot authorize or execute communication.

## Required Intent Fields

- `communicationIntentId`
- `sourceSurface`
- `communicationType`
- `recipientIdentityResolutionId`
- `recipientDisplayName`
- `recipientChannelType`
- `recipientChannelValue`
- `messageDraft`
- `callPurpose`
- `language`
- `riskTier`
- `evidenceRequirement`
- `sourcePacketRequirement`
- `permissionState`
- `auditState`
- `channelConfirmationRequired`
- `userApprovalRequired`
- `finalExecutionGateRequired`
- `executionAuthority`
- `providerHandoffAllowed`
- `externalNavigationAllowed`
- `nativeBridgeAllowed`
- `networkAllowed`
- `storageWriteAllowed`
- `backendWriteAllowed`
- `blockedExecutionChannels`
- `safeUseNotes`
- `limitations`

## Supported Communication Types

- call
- message
- draft
- channel-selection
- recipient-confirmation
- unknown

## Supported Channels

- phone-call
- SMS
- WhatsApp
- Telegram
- email
- in-app-message
- user-provided-channel

## Required Safety Flags

Every valid intent must preserve:

- `channelConfirmationRequired: true`
- `userApprovalRequired: true`
- `finalExecutionGateRequired: true`
- `executionAuthority: false`
- `providerHandoffAllowed: false`
- `externalNavigationAllowed: false`
- `nativeBridgeAllowed: false`
- `networkAllowed: false`
- `storageWriteAllowed: false`
- `backendWriteAllowed: false`

## Blocked Execution Channels

The contract blocks call, message, SMS, WhatsApp, Telegram, email, in-app-message, provider dispatch, provider handoff, external navigation, native bridge, appointment scheduling, payment, purchase, marketplace transaction, location, camera, medical, pharmacy, emergency, backend write, storage write, network call, and pending action channels.

## Runtime Boundary

The contract is not imported by:

- `public/index.html`
- `public/app.js`
- `server.js`

It is local-safe source and QA scaffolding only.
