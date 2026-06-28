# Nexus Sprint I6 - First Real-World Action Pilot Readiness Contract

Sprint I6 adds an inert contract for evaluating whether a future first real-world action pilot is ready to be considered.

This phase does not add runtime UI, provider dispatch, provider handoff, external navigation, calls, messages, WhatsApp, Telegram, SMS, email, scheduling, payments, purchases, location sharing, camera or microphone access, medical/pharmacy behavior, emergency routing, marketplace transactions, backend writes, storage writes, network calls, or pending real-world actions.

## Purpose

The contract defines the minimum readiness fields required before Nexus may consider a narrow future real-world action pilot. It is a local-safe model only. It cannot execute an action, contact a provider, open a native bridge, navigate externally, persist state, or create a pending real-world action.

## Required Readiness Fields

Every pilot readiness candidate must include:

- `pilotReadinessId`;
- `pilotName`;
- `actionCategory`;
- `actionType`;
- `targetSummary`;
- `purposeSummary`;
- `riskTier`;
- `sourceSurface`;
- `language`;
- `identityState`;
- `recipientResolutionState`;
- `providerReadinessState`;
- `finalGateState`;
- `permissionState`;
- `consentState`;
- `auditState`;
- `dryRunState`;
- `reversalOrCancelState`;
- `userApprovalState`;
- `pilotReadinessOnly`;
- `executionAuthority`;
- `executionAllowed`;
- `providerDispatchAllowed`;
- `providerHandoffAllowed`;
- `externalNavigationAllowed`;
- `nativeBridgeAllowed`;
- `networkAllowed`;
- `storageWriteAllowed`;
- `backendWriteAllowed`;
- `blockedActionChannels`;
- `limitations`.

## Required Ready States

The candidate must fail closed unless these states are ready:

- identity;
- recipient resolution;
- provider readiness;
- final execution gate;
- permission;
- consent;
- audit;
- dry-run;
- reversal or cancellation path;
- user approval.

## Required Inert State

The contract always preserves:

- `pilotReadinessOnly: true`;
- `executionAuthority: false`;
- `executionAllowed: false`;
- `providerDispatchAllowed: false`;
- `providerHandoffAllowed: false`;
- `externalNavigationAllowed: false`;
- `nativeBridgeAllowed: false`;
- `networkAllowed: false`;
- `storageWriteAllowed: false`;
- `backendWriteAllowed: false`.

## Blocked Channels

The readiness contract blocks:

- real-world-action;
- provider-dispatch;
- provider-handoff;
- external-navigation;
- native-bridge;
- call;
- message;
- WhatsApp;
- Telegram;
- SMS;
- email;
- appointment;
- payment;
- purchase;
- marketplace-transaction;
- location;
- camera;
- medical;
- pharmacy;
- emergency;
- backend-write;
- storage-write;
- network-call;
- pending-action.

## Runtime Boundary

The contract is not imported by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

It is source and QA only. It is not a pilot launcher, provider adapter, action queue, native bridge, storage writer, network caller, or audit writer.

## Closeout

Sprint I6 moves Nexus closer to safe real-world action capability by defining the readiness contract while preserving the no-execution boundary.
