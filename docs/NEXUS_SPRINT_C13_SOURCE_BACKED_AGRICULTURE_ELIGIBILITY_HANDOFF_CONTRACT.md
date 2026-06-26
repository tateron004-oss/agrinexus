# Nexus Sprint C13 - Source-Backed Agriculture Eligibility Handoff Contract

## Purpose

Sprint C13 adds a fixture-only eligibility handoff contract for future source-backed agriculture runtime mapping.

The contract combines:

- C12 explicit boolean flag resolution;
- C6 source-backed agriculture packet safety;
- C8 visible-preview mapper safety.

This sprint remains inert. It does not wire C6, C8, C12, or C13 into Standard User runtime, does not add script tags, does not render DOM, and does not change backend behavior.

## Starting Checkpoint

- Previous pushed sprint: Sprint C12 - Source-Backed Agriculture Flag Resolver Contract
- Starting HEAD: `34d2a605a15559f0416c549b2f5e2e08788e0450`
- C13 module: `public/nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js`
- C12 module: `public/nexus-sprint-c12-source-backed-agriculture-flag-resolver-contract.js`

## Contract Module

The contract module exports:

- `HANDOFF_VERSION`;
- `FALSE_AUTHORITY`;
- `buildSourceBackedAgricultureEligibilityHandoff(prompt, flagInput)`.

The handoff may report `handoffEligible: true` only when:

- C12 resolves `enableSourceBackedAgricultureRuntimeMapping` to explicit fixture boolean `true`;
- C6 builds a source-backed agriculture packet for a low-risk agriculture prompt;
- C8 maps the packet to `visiblePreviewAllowed: true`;
- C8 keeps `renderDomAllowed: false`;
- every C13 authority flag remains `false`.

## Fixture-Only Boundary

C13 may be used only by deterministic QA and fixture harnesses. It must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`;
- Standard User startup;
- agriculture response-card runtime;
- controlled renderer runtime;
- planner;
- policy engine;
- provider registry;
- native bridge;
- confirmation paths;
- marketplace, health, map, camera, location, call, message, payment, or emergency flows.

## No Runtime Authority

C13 output must never grant:

- `runtimeWiringAllowed`;
- `loadMapperInRuntimeAllowed`;
- `renderVisibleCardAllowed`;
- `executionAllowed`;
- `sideEffectsAllowed`;
- `providerHandoffAllowed`;
- `communicationsAllowed`;
- `marketplaceTransactionAllowed`;
- `paymentAllowed`;
- `networkLookupAllowed`;
- `storageReadAllowed`;
- `storageWriteAllowed`;
- `backendWriteAllowed`;
- `permissionPromptAllowed`;
- `routeAutoOpenAllowed`;
- `modalAutoOpenAllowed`;
- `pendingActionCreationAllowed`;
- `locationRequestAllowed`;
- `cameraRequestAllowed`;
- `medicalActionAllowed`;
- `pharmacyActionAllowed`;
- `emergencyDispatchAllowed`.

The no-action disclosure remains:

- `No action has been taken.`

## Safe Fixture Expectations

With the explicit fixture flag enabled, these prompts may become fixture handoff eligible:

- `Help me find agriculture training`;
- `Teach me how irrigation works`;
- `I need help with crop issues`;
- `What should I check in my farm soil?`.

The eligible state is still metadata-only and non-executing.

`How do I prepare for drought?` remains a future browser-validation prompt from Sprint C9, but it must stay ineligible until a later sprint adds a verified C6 source-backed packet family for drought preparedness.

## Excluded Fixture Expectations

These prompts must remain ineligible even when the explicit fixture flag is enabled:

- `Call an extension worker`;
- `Message the seller`;
- `Buy seeds`;
- `Pay for fertilizer`;
- `Use my location to find farms near me`;
- `Open my camera for crop diagnosis`;
- `Schedule an appointment`;
- `Emergency pesticide poisoning`;
- `Tell me the pesticide dose to spray`;
- `Sell my crop`.

Unsupported but safe prompts without a verified C6 source-backed packet family, such as `How do I prepare for drought?`, must also remain ineligible.

## Standard User Boundary

Sprint C13 must not change Standard User behavior:

- no C13 script tag;
- no C13 import from `public/app.js`;
- no C13 server injection;
- no C8 mapper runtime load;
- no source-backed preview generated from C13;
- no hidden executable metadata surfaced;
- no provider handoff;
- no network lookup;
- no storage read or write;
- no backend write;
- no permission prompt;
- no route or modal auto-open;
- no pending action;
- no marketplace, payment, location, camera, medical, pharmacy, telehealth, appointment, call, message, or emergency execution.

## Sprint C13 QA Expectations

Sprint C13 QA must prove:

- this document exists;
- C12 recommends this C13 handoff contract;
- C13 module exists and is syntax-valid;
- safe prompts become fixture handoff eligible only with explicit fixture flag true;
- safe prompts remain ineligible when the flag is missing or false;
- excluded prompts remain ineligible even when the flag is true;
- all authority flags remain false for eligible and ineligible outputs;
- C13 module contains no storage, network, provider, permission, route, modal, backend, or execution APIs;
- `public/index.html`, `public/app.js`, and `server.js` do not load C13;
- active runtime still does not load C8;
- package alias and safe-suite wiring exist.

## Sprint C14 Recommendation

Sprint C14 should add a browser-validation readiness plan for the future C13-to-visible-surface bridge, still without wiring the bridge into Standard User runtime.
