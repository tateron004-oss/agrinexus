# Nexus Sprint K3 - Fixture-Only Contact/Provider Harness

Sprint K3 adds a fixture-only harness for the Sprint K2 inert contact/provider identity contract.

This phase does not add runtime UI, live contact lookup, live provider lookup, provider dispatch, provider handoff, external navigation, calls, messages, WhatsApp, Telegram, SMS, email, scheduling, payments, purchases, location sharing, camera or microphone access, medical/pharmacy behavior, emergency routing, marketplace transactions, backend writes, storage writes, network calls, or pending real-world actions.

## Purpose

The harness proves representative contact/provider identity candidates validate through the inert K2 contract and fail closed when confidence, evidence, required safety state, or no-execution flags are invalid.

## Fixture Coverage

The harness covers:

- contact candidate preview;
- provider candidate preview;
- role candidate preview;
- marketplace-party candidate preview;
- healthcare-provider candidate preview;
- pharmacy-provider candidate preview;
- emergency-contact candidate preview;
- transportation-provider candidate preview;
- ambiguous identity candidate;
- missing identity candidate;
- unsupported entity type;
- unsupported confidence tier;
- missing permission state;
- missing consent state;
- missing audit state;
- missing final execution gate;
- execution authority escalation;
- provider dispatch escalation;
- provider handoff escalation;
- communication escalation;
- external navigation escalation;
- native bridge escalation;
- network escalation;
- storage write escalation;
- backend write escalation;
- incomplete blocked identity channels.

## Required Safety Properties

Every fixture must preserve:

- `identityResolutionOnly: true`;
- `approvalIntentOnly: true`;
- `finalExecutionGateRequired: true`;
- `executionAuthority: false`;
- `providerDispatchAllowed: false`;
- `providerHandoffAllowed: false`;
- `communicationAllowed: false`;
- `externalNavigationAllowed: false`;
- `nativeBridgeAllowed: false`;
- `networkAllowed: false`;
- `storageWriteAllowed: false`;
- `backendWriteAllowed: false`;
- `executionAllowed: false`.

## Runtime Boundary

The harness is not imported by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

It is local-safe QA only and is not a live identity resolver, provider adapter, contact lookup, communication launcher, pending-action store, or audit writer.
