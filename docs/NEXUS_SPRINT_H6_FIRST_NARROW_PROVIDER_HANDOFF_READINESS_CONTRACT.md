# Nexus Sprint H6 - First Narrow Provider Handoff Readiness Contract

Sprint H6 adds an inert readiness contract for a future first narrow provider handoff.

This phase does not enable provider handoff. It does not open external provider URLs, call, message, open WhatsApp, open Telegram, send SMS or email, schedule appointments, process payments, share location, activate camera or microphone, execute medical/pharmacy/emergency workflows, create marketplace transactions, write backend state, write browser storage, make network calls, or create pending real-world actions.

## Purpose

Provider handoff must start with a narrow, auditable, user-visible candidate before any live handoff can be considered. The H6 contract defines the minimum fields and fail-closed behavior for that candidate.

## Required Handoff Candidate Fields

- `handoffReadinessId`
- `providerCategory`
- `providerDisplayName`
- `recipientDisplayName`
- `actionType`
- `purposeSummary`
- `riskTier`
- `sourceSurface`
- `language`
- `userApprovalState`
- `finalGateState`
- `permissionState`
- `consentState`
- `auditState`
- `providerAvailabilityState`
- `dryRunState`
- `handoffReadinessOnly`
- `handoffAllowed`
- `externalNavigationAllowed`
- `providerApiAllowed`
- `nativeBridgeAllowed`
- `networkAllowed`
- `storageWriteAllowed`
- `backendWriteAllowed`
- `executionAuthority`
- `cancelPath`
- `blockedHandoffChannels`
- `limitations`

## Required Invariants

- readiness-only mode must remain explicit;
- provider handoff remains disabled;
- external navigation remains disabled;
- provider APIs remain disabled;
- native bridge dispatch remains disabled;
- network, storage, and backend writes remain disabled;
- execution authority remains false;
- permission, consent, audit, provider availability, dry-run, user approval, and final gate states must be represented;
- cancellation path must be visible;
- incomplete handoff candidates fail closed.

## Blocked Handoff Channels

Sprint H6 blocks:

- provider-handoff;
- external-navigation;
- provider-api;
- native-bridge;
- call;
- message;
- WhatsApp;
- Telegram;
- SMS;
- email;
- payment;
- location;
- camera;
- medical;
- pharmacy;
- emergency;
- appointment;
- marketplace-transaction;
- backend-write;
- storage-write;
- network-call;
- pending-action.

## Standard User Safety

The Standard User runtime must not load this readiness contract from:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

The contract is not a UI, not a provider adapter, not a native bridge path, and not a dispatch queue.

## Future Boundary

A later phase may add a fixture harness for representative narrow handoff candidates. Live handoff remains blocked until final execution gate, consent, permission, audit, provider availability, dry-run validation, cancellation, rollback, browser validation, and explicit product approval are complete.
