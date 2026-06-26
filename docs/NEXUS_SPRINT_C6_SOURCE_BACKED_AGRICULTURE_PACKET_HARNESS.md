# Nexus Sprint C6 - Source-Backed Agriculture Packet Harness

## Purpose

Sprint C6 adds a deterministic, fixture-only packet harness for source-backed agriculture response review. The harness exists to test the shape, labels, and safety boundaries of future source-backed agriculture packets before live source lookup or broader runtime integration.

This sprint is inert by design. It does not activate live connectors, provider handoff, communications, marketplace actions, payments, location sharing, camera use, medical/pharmacy behavior, emergency dispatch, backend writes, storage writes, or pending actions.

## Starting Checkpoint

- Previous pushed sprint: Sprint C5 - Source-Backed Agriculture Readiness Design
- Starting HEAD: `1b197c6173cc4bfdd4ec5979f6668c2ddd2f1a46`
- Runtime posture: Standard User remains controlled and non-executing.

## Harness Decision

The C6 harness may build a source-backed agriculture packet only from an in-repo fixture that satisfies the existing agriculture source registry contract. It must not:

- fetch live sources;
- call a provider;
- open a route, modal, URL, phone provider, message provider, marketplace, payment, camera, microphone, or location prompt;
- write to `db.json`, localStorage, sessionStorage, backend APIs, network services, or browser storage;
- create pending actions;
- claim a diagnosis, completed local expert review, chemical instruction, buyer/seller contact, payment, dispatch, or provider connection.

## Packet Contract

Every eligible packet must include:

- `schemaVersion`;
- prompt and prompt family;
- `Evidence & Verification`;
- source-backed status;
- source name;
- source type;
- source contract ID;
- verification status;
- freshness label;
- confidence label;
- source-supported claims;
- Nexus inferences;
- local applicability warning;
- limitations;
- claims Nexus is not making;
- no-action disclosure;
- explicit false authority flags.

The required no-action disclosure is: "No action has been taken."

## Eligible Fixture Prompt Families

- crop symptom observation;
- irrigation learning;
- agriculture training;
- safe first-check prompts.

## Excluded Prompt Families

The harness must return a non-source-backed, non-executing ineligible packet for prompts involving:

- provider contact;
- calls, messages, WhatsApp, Telegram, SMS, or email;
- buy, sell, checkout, order, quote, delivery, or marketplace transaction;
- payments;
- precise location, GPS, map, or near-me behavior;
- camera, photo upload, microphone, or media capture;
- appointments or scheduling;
- medical, pharmacy, prescription, clinic, telehealth, hospital, or doctor actions;
- emergency dispatch;
- chemical dose, spraying, or pesticide application instructions;
- guaranteed yield, definitive diagnosis, or completed expert review claims.

## No-Execution Authority

Every harness packet must keep:

- `executionAllowed: false`;
- `sideEffectsAllowed: false`;
- `providerHandoffAllowed: false`;
- `communicationsAllowed: false`;
- `callAllowed: false`;
- `messageAllowed: false`;
- `marketplaceTransactionAllowed: false`;
- `paymentAllowed: false`;
- `locationRequestAllowed: false`;
- `locationSharingAllowed: false`;
- `cameraRequestAllowed: false`;
- `microphoneActivationAllowed: false`;
- `medicalActionAllowed: false`;
- `pharmacyActionAllowed: false`;
- `emergencyDispatchAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkLookupAllowed: false`;
- `pendingActionCreationAllowed: false`;
- `routeAutoOpenAllowed: false`;
- `modalAutoOpenAllowed: false`.

## Runtime Boundary

The harness may live in `public/` for shared browser/Node compatibility, but Sprint C6 does not load it in:

- `public/index.html`;
- `public/app.js`;
- `server.js`;
- Standard User startup;
- provider, planner, policy, native bridge, confirmation, marketplace, health, map, camera, location, call, message, payment, or emergency flows.

## QA Expectations

Sprint C6 QA must prove:

- the harness module exists and is syntax-valid;
- it exports a canonical harness version;
- safe fixture prompts produce source-backed packets;
- excluded prompts produce ineligible, non-source-backed packets;
- every packet remains non-executing;
- fixture source metadata is validated through the existing source registry contract;
- no side-effect APIs are present;
- active runtime files do not load the harness;
- package alias and local-safe suite wiring are present;
- previous Sprint C2-C5 source-backed agriculture guards remain compatible.

## Browser Validation

Browser validation is not required for Sprint C6 because the harness is not loaded by Standard User runtime and does not change visible behavior.

## Sprint C7 Recommendation

The next safe sprint should define a fixture-to-visible-preview review plan for how a future source-backed packet could be passed into the already-validated agriculture response card surface. That sprint should remain inert unless explicitly scoped for runtime activation and browser validation.
