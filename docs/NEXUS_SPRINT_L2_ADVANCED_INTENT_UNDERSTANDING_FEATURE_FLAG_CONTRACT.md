# Nexus Sprint L2 - Advanced Intent Understanding Feature Flag Contract

Current base: `743b954811917c1ab0917bf8ed7827ce2c4d6617`

Sprint L2 defines a default-off Advanced Intent Understanding feature flag contract. This phase adds a standalone inert contract module and deterministic QA only. It does not import the module into Standard User runtime, replace the classifier, change typed routing, change voice routing, auto-route prompts, downgrade risks, select providers, stage actions, write storage, write audit events, contact providers, request permissions, or execute actions.

## Purpose

Sprint L2 turns the Sprint L1 runtime activation gate into a concrete default-off flag vocabulary for future work.

The flag exists so a later approved sprint can reason about a visible or local/test-safe classifier readiness surface without confusing:

- feature flag readiness;
- visible review UI permission;
- classifier context;
- classifier replacement;
- route mutation;
- risk tier mutation;
- hidden risk downgrade;
- provider selection;
- raw adapter calls;
- implicit permission;
- first-turn execution;
- planner authority;
- policy bypass;
- confirmation bypass;
- permission bypass;
- storage writes;
- network calls;
- audit writes;
- execution authority.

## Feature Flag Name

`NEXUS_ADVANCED_INTENT_UNDERSTANDING_VISIBLE_ENABLED`

## Default State

The default state must be:

- `enabled: false`;
- `visibleUiAllowed: false`;
- `classifierContextAllowed: false`;
- `classifierRuntimeAllowed: false`;
- `liveClassifierReplacementAllowed: false`;
- `automaticRouteChangesAllowed: false`;
- `hiddenRiskDowngradeAllowed: false`;
- `confidenceRiskDowngradeAllowed: false`;
- `providerSelectionAllowed: false`;
- `toolSelectionAllowed: false`;
- `plannerActionCreationAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `rawAdapterCallsAllowed: false`;
- `implicitPermissionAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `standardUserClassifierMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

## Contract Module

The inert contract module is:

`public/nexus-advanced-intent-understanding-feature-flag.js`

It may be loaded by deterministic QA, but it must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Important Boundary

An enabled feature flag is not enough to activate Advanced Intent Understanding authority.

Even if a future local/test-safe caller passes `enabled: true`, the contract keeps:

- `classifierContextAllowed: false`;
- `classifierRuntimeAllowed: false`;
- `liveClassifierReplacementAllowed: false`;
- `automaticRouteChangesAllowed: false`;
- `hiddenRiskDowngradeAllowed: false`;
- `confidenceRiskDowngradeAllowed: false`;
- `providerSelectionAllowed: false`;
- `toolSelectionAllowed: false`;
- `plannerActionCreationAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `rawAdapterCallsAllowed: false`;
- `implicitPermissionAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `standardUserClassifierMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

This means flag-on visibility can only ever mean review-only readiness until a separate approved sprint changes the classifier evaluation, risk stability, ambiguity fallback, audit, policy, planner, browser validation, and rollback boundaries.

## Prohibited Behavior

Sprint L2 must not add:

- runtime imports;
- script tags;
- event handlers;
- classifier replacement;
- active classifier adapters;
- route mutation;
- voice route mutation;
- typed route mutation;
- hidden risk downgrades;
- confidence-only risk downgrades;
- ambiguous prompt execution;
- provider selection from raw intent;
- tool selection from raw intent;
- planner action creation from raw intent;
- policy bypass;
- confirmation bypass;
- permission bypass;
- audit writes;
- backend writes;
- localStorage or sessionStorage writes;
- IndexedDB writes;
- fetch or network calls;
- native bridge calls;
- calls;
- messages;
- WhatsApp, Telegram, SMS, or email sending;
- payments;
- marketplace transactions;
- location sharing;
- camera or microphone activation;
- health, medical, pharmacy, prescription, or FHIR execution;
- appointment scheduling;
- transportation dispatch;
- emergency dispatch;
- external navigation;
- execution authority.

## Relationship To Sprint L1

Sprint L1 remains the activation gate. Sprint L2 only defines the default-off flag contract. Future visible or runtime Advanced Intent Understanding work still requires every Sprint L1 precondition, including product owner approval, evaluated classifier version, representative prompt set, multilingual prompt coverage, Standard User prompt coverage, voice and typed coverage, risk stability baseline, ambiguity fallback, clarification path, high-risk no-downgrade rule, source trace, audit decision record, policy engine review, planner non-authority rule, provider selection boundary, no raw adapter calls, no implicit permission, no first-turn execution, browser validation, rollback planning, and deterministic QA coverage.

## QA Expectations

Sprint L2 QA must verify:

- the flag contract doc exists;
- the feature flag module exists;
- the flag defaults off;
- flag-on test input cannot grant classifier context, classifier runtime authority, classifier replacement, route changes, risk downgrade, provider selection, tool selection, planner action creation, policy bypass, confirmation bypass, permission bypass, raw adapter calls, implicit permission, first-turn execution, Standard User classifier mutation, backend write, storage write, network, audit write, or execution authority;
- runtime files do not load the module;
- no unsafe API or execution hook is introduced;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint L3 - Advanced Intent Understanding Flag Contract Harness`

Sprint L3 should add deterministic fixtures for flag-off, flag-on-review-only, and unsafe attempted authority states. It should remain local-safe and non-runtime.
