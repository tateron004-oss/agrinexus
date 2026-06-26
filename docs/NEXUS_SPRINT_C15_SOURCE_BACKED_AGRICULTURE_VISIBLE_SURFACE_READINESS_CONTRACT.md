# Nexus Sprint C15 - Source-Backed Agriculture Visible Surface Readiness Contract

## Purpose

Sprint C15 defines a fixture-only visible-surface readiness contract for C13 source-backed agriculture eligibility handoff output.

This sprint remains inert. It does not render DOM, does not wire any module into Standard User runtime, does not add buttons or event handlers, does not open routes or modals, and does not change backend behavior.

## Starting Checkpoint

- Previous pushed sprint: Sprint C14 - Source-Backed Agriculture Eligibility Handoff Browser Validation Plan
- Starting HEAD: `e35682aafee71a714b6edcd0ce3e886ed8c77af7`
- C13 module: `public/nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js`
- C14 plan: `docs/NEXUS_SPRINT_C14_SOURCE_BACKED_AGRICULTURE_ELIGIBILITY_HANDOFF_BROWSER_VALIDATION_PLAN.md`

## Contract Module

The C15 contract module is:

`public/nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js`

It exports:

- `SURFACE_CONTRACT_VERSION`;
- `FALSE_AUTHORITY`;
- `REQUIRED_VISIBLE_FIELDS`;
- `buildSourceBackedAgricultureVisibleSurfaceReadinessModel(prompt, flagInput)`.

The module may be loaded by Node QA fixtures. It must not be loaded by `public/index.html`, imported by `public/app.js`, or special-cased by `server.js`.

## Fixture-Only Surface Readiness

C15 may report `surfaceReady: true` only when C13 reports `handoffEligible: true`.

The C13 handoff requires:

- explicit fixture flag enablement through C12;
- C6 source-backed agriculture packet eligibility;
- C8 visible preview mapping eligibility;
- `renderDomAllowed: false`;
- every no-execution authority flag remaining `false`.

If C13 is not eligible, C15 must return:

- `surfaceReady: false`;
- `handoffEligible: false`;
- empty required visible fields;
- empty review-only controls;
- `No action has been taken.`;
- every authority flag set to `false`.

## Required Future Visible Fields

Any future visible agriculture source-backed surface must show:

- `title`;
- `evidenceTitle`;
- `sourceStatus`;
- `sourceName`;
- `sourceType`;
- `contractId`;
- `verificationStatus`;
- `freshnessLabel`;
- `confidenceLabel`;
- `localApplicabilityWarning`;
- `noActionDisclosure`.

The required no-action disclosure is:

`No action has been taken.`

## Review-Only Controls

C15 may describe a future review-only control:

- label: `Review source details`;
- disabled: `true`;
- `executionAllowed: false`;
- `clickHandlerAllowed: false`.

This sprint does not render that control and does not add a click handler.

## No Runtime Authority

C15 keeps these fields `false` in every result:

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

With the explicit C12 fixture flag enabled, these prompts may produce `surfaceReady: true` in Node QA only:

- `Help me find agriculture training`;
- `Teach me how irrigation works`;
- `I need help with crop issues`;
- `What should I check in my farm soil?`.

The output remains metadata-only and cannot render a Standard User card.

## Unsupported Safe Prompt Expectations

This safe prompt remains `surfaceReady: false` until a verified C6 source-backed packet family exists:

- `How do I prepare for drought?`.

C15 must not claim source-backed drought readiness before C6 source coverage exists.

## Excluded Prompt Expectations

These prompts must stay `surfaceReady: false` even with the fixture flag enabled:

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

C15 must not be wired into:

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

It must not introduce script tags, dynamic imports, DOM creation, event handlers, route hooks, modal hooks, permission prompts, network calls, storage reads/writes, backend writes, provider handoff, pending actions, or execution behavior.

## Sprint C15 QA Expectations

The C15 QA guard verifies:

- the contract module exists;
- the documentation contains the fixture-only boundary;
- C14 recommends this sprint;
- eligible C13 fixtures produce `surfaceReady: true` only with the explicit fixture flag;
- unsupported and excluded prompts produce `surfaceReady: false`;
- all authority fields remain `false`;
- no side-effect API patterns appear in the module;
- Standard User runtime files do not load C15, C13, or C8;
- package alias and safe-suite wiring are present.

## Sprint C16 Recommendation

Sprint C16 should add a fixture-only source-backed agriculture visible-surface copy and layout review plan, without rendering DOM in Standard User runtime.
