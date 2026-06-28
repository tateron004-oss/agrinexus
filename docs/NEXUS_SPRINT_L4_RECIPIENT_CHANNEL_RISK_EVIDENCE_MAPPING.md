# Nexus Sprint L4 - Recipient, Channel, Risk, and Evidence Mapping

Sprint L4 adds inert mapping rules for call/message intent risk and evidence requirements.

This phase does not add runtime UI, live contact lookup, live provider lookup, provider dispatch, provider handoff, external navigation, calls, messages, WhatsApp, Telegram, SMS, email, scheduling, payments, purchases, location sharing, camera or microphone access, medical/pharmacy behavior, emergency routing, marketplace transactions, backend writes, storage writes, network calls, or pending real-world actions.

## Mapping Purpose

The mapping layer classifies a communication intent by recipient, channel, domain, risk tier, and evidence requirements. It prepares only local-safe metadata for future review surfaces. It does not execute communication, open providers, create pending real-world actions, or authorize a handoff.

## Risk Mapping Rules

- emergency recipient or purpose: `restricted`
- payment, purchase, marketplace transaction, medical, pharmacy, location, camera, provider handoff: `restricted`
- phone call, SMS, WhatsApp, Telegram, email, or provider-related message: `high`
- in-app or user-provided channel review without sensitive execution: `medium`
- unknown or ambiguous recipient: `high`

## Evidence Requirements

Every mapped intent requires:

- resolved or explicitly ambiguous recipient state
- visible recipient display
- visible channel display
- visible message draft or call purpose
- source packet requirement
- channel confirmation
- explicit user approval
- final execution gate
- audit-ready state

## Required Safety Flags

Every mapped intent preserves:

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
- `executionAllowed: false`

## Runtime Boundary

The mapping module is not imported by:

- `public/index.html`
- `public/app.js`
- `server.js`

It is local-safe source and QA scaffolding only.
