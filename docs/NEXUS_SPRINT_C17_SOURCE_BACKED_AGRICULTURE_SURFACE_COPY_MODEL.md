# Nexus Sprint C17 - Source-Backed Agriculture Surface Copy Model

## Purpose

Sprint C17 adds a fixture-only source-backed agriculture surface copy model.

This sprint remains inert. It creates metadata-only copy data for Node QA fixtures and does not render DOM, does not load C17 in `public/index.html`, does not import C17 in `public/app.js`, does not add CSS, does not add buttons or click handlers, and does not change backend behavior.

## Starting Checkpoint

- Previous pushed sprint: Sprint C16 - Source-Backed Agriculture Visible Surface Copy and Layout Review Plan
- Starting HEAD: `a30a2e2132b8f97f429a6c39e71b8f6941de9e54`
- C15 module: `public/nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js`
- C16 plan: `docs/NEXUS_SPRINT_C16_SOURCE_BACKED_AGRICULTURE_VISIBLE_SURFACE_COPY_LAYOUT_REVIEW_PLAN.md`

## Contract Module

The C17 contract module is:

`public/nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js`

It exports:

- `COPY_MODEL_VERSION`;
- `FALSE_AUTHORITY`;
- `buildSourceBackedAgricultureSurfaceCopyModel(prompt, flagInput)`.

The module may be loaded by Node QA fixtures. It must not be loaded by `public/index.html`, imported by `public/app.js`, or special-cased by `server.js`.

## Copy Readiness Rules

C17 may report `copyReady: true` only when:

- C15 reports `surfaceReady: true`;
- C8 reports a mappable source-backed preview model;
- the C12 fixture flag is explicitly enabled;
- all authority flags remain `false`.

If either C15 or C8 is not ready, C17 must return:

- `copyReady: false`;
- empty sections;
- empty review-only controls;
- `No action has been taken.`;
- every authority flag set to `false`.

## Metadata-Only Sections

Eligible copy models may include these sections:

- `Evidence & Verification`;
- `What this source supports`;
- `What Nexus inferred`;
- `Local applicability`;
- `What Nexus is not claiming`;
- `Action status`.

The evidence section may contain:

- `Source: {sourceName}`;
- `Type: {sourceType}`;
- `Source contract: {contractId}`;
- `Verification: {verificationStatus}`;
- `Freshness: {freshnessLabel}`;
- `Confidence: {confidenceLabel}`.

The action status section must include:

`No action has been taken.`

## Review-Only Controls

C17 may describe future review-only controls:

- `Review source details`;
- `Not now`.

Those controls must remain metadata-only and disabled:

- `disabled: true`;
- `executionAllowed: false`;
- `clickHandlerAllowed: false`.

This sprint does not render controls and does not add click handlers.

## No Runtime Authority

C17 keeps these fields `false` in every result:

- `runtimeWiringAllowed`;
- `renderDomAllowed`;
- `visibleRuntimeSurfaceAllowed`;
- `clickHandlerAllowed`;
- `formSubmissionAllowed`;
- `navigationAllowed`;
- `routeAutoOpenAllowed`;
- `modalAutoOpenAllowed`;
- `permissionPromptAllowed`;
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
- `pendingActionCreationAllowed`;
- `locationRequestAllowed`;
- `cameraRequestAllowed`;
- `medicalActionAllowed`;
- `pharmacyActionAllowed`;
- `emergencyDispatchAllowed`.

## Safe Fixture Expectations

With the explicit C12 fixture flag enabled, these prompts may produce `copyReady: true` in Node QA only:

- `Help me find agriculture training`;
- `Teach me how irrigation works`;
- `I need help with crop issues`;
- `What should I check in my farm soil?`.

Expected copy:

- title: `Agriculture Source Review`;
- evidence heading: `Evidence & Verification`;
- includes source name, type, contract, verification, freshness, and confidence;
- includes local applicability warning;
- includes `No action has been taken.`;
- includes no live provider, payment, marketplace transaction, location, camera, medical, pharmacy, call, message, appointment, or emergency action language as an available action.

## Unsupported Safe Prompt Expectations

This safe prompt remains `copyReady: false` until a verified C6 source-backed packet family exists:

- `How do I prepare for drought?`.

C17 must not claim source-backed drought readiness before C6 source coverage exists.

## Excluded Prompt Expectations

These prompts must stay `copyReady: false` even with the fixture flag enabled:

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

## Standard User Boundary

C17 must not be wired into:

- `public/index.html`;
- `public/app.js`;
- `server.js`;
- Standard User startup;
- controlled renderer runtime;
- planner;
- policy engine;
- provider registry;
- native bridge;
- confirmation paths.

It must not add script tags, dynamic imports, DOM creation, CSS, event handlers, click handlers, buttons, links, forms, route hooks, modal hooks, permission prompts, network calls, storage reads/writes, backend writes, provider handoff, pending actions, or execution behavior.

## Sprint C17 QA Expectations

The C17 QA guard verifies:

- the contract module exists;
- C16 recommends this sprint;
- eligible fixture prompts produce `copyReady: true` only with explicit fixture flag;
- unsupported and excluded prompts produce `copyReady: false`;
- evidence and no-action copy are present;
- review-only controls are disabled and non-executing;
- every authority flag remains `false`;
- no side-effect API patterns appear in the module;
- Standard User runtime files do not load C17, C15, C13, or C8;
- package alias and safe-suite wiring are present.

## Sprint C18 Recommendation

Sprint C18 should add a fixture-only visual semantics review plan for the C17 copy model, still with no DOM rendering in Standard User runtime.
