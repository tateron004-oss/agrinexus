# Nexus Sprint G6 - Provider Dispatch Dry-Run Contract

Sprint G6 adds an inert provider dispatch dry-run contract. It models what Nexus must prove before any future provider dispatch attempt, while keeping every provider action disabled.

This phase does not dispatch providers. It does not call, message, open WhatsApp, open Telegram, send SMS or email, process payments, share location, activate camera or microphone, execute health/pharmacy/emergency workflows, create marketplace transactions, write backend state, write browser storage, make network calls, or create pending real-world actions.

## Purpose

Future provider dispatch requires a simulation lane before any live lane. The dry-run contract lets Nexus describe and validate a proposed dispatch attempt without granting execution authority.

## Required Dry-Run Fields

- `dryRunId`
- `providerType`
- `providerDisplayName`
- `actionType`
- `targetSummary`
- `purposeSummary`
- `riskTier`
- `finalGateId`
- `finalGateSatisfied`
- `permissionState`
- `consentState`
- `auditState`
- `providerAvailabilityState`
- `userApprovalState`
- `dryRunOnly`
- `executionAuthority`
- `dispatchAllowed`
- `networkAllowed`
- `storageWriteAllowed`
- `backendWriteAllowed`
- `reversalOrCancelPath`
- `blockedDispatchChannels`
- `limitations`

## Required Invariants

- dry-run mode must remain explicit;
- execution authority must remain false;
- dispatch allowed must remain false;
- network, storage, and backend writes must remain false;
- final gate, permission, consent, audit, provider availability, and user approval states must be represented;
- cancellation or reversal path must be visible;
- incomplete dry-run objects fail closed;
- live provider dispatch remains blocked.

## Blocked Dispatch Channels

Sprint G6 blocks:

- provider-dispatch;
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
- marketplace-transaction;
- backend-write;
- storage-write;
- network-call;
- pending-action.

## Standard User Safety

The Standard User runtime must not load this dry-run contract from:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

The contract is source-ready only. It does not add visible UI, buttons, links, event handlers, permission prompts, provider adapters, native bridge calls, fetch calls, or external navigation.

## Future Boundary

A later sprint may add a fixture harness for representative dry-run cases. A live provider lane still requires final execution gate satisfaction, audit persistence, consent, permission, provider availability, role policy, rollback, browser validation, and explicit product approval.

## Closeout

Sprint G6 moves Nexus closer to working assistant capability by defining the provider dispatch simulation boundary. It keeps live provider dispatch disabled.
