# Nexus Sprint N2 - Task Planning Feature Flag Contract

Current base: `2233180456e8029336ace2375e4a573dcb9f9cd3`

Sprint N2 defines a default-off Task Planning feature flag contract. This phase adds a standalone inert contract module and deterministic QA only. It does not import the module into Standard User runtime, activate a planner engine, generate executable plan steps, chain steps automatically, select providers, stage actions, write storage, write audit events, contact providers, request permissions, or execute actions.

## Purpose

Sprint N2 turns the Sprint N1 runtime activation gate into a concrete default-off flag vocabulary for future work.

The flag exists so a later approved sprint can reason about a visible or local/test-safe task planning readiness surface without confusing:

- feature flag readiness;
- visible plan review UI permission;
- staged plan preview;
- live planner runtime;
- live planner replacement;
- executable plan steps;
- automatic step chaining;
- provider execution from plans;
- raw adapter calls;
- implicit permission;
- autonomous high-risk steps;
- plan-based route mutation;
- risk tier mutation;
- provider selection from plans;
- tool selection from plans;
- policy bypass;
- confirmation bypass;
- permission bypass;
- first-turn or later-turn execution;
- Standard User planner mutation;
- storage writes;
- network calls;
- audit writes;
- execution authority.

## Feature Flag Name

`NEXUS_TASK_PLANNING_VISIBLE_ENABLED`

## Default State

The default state must be:

- `enabled: false`;
- `visibleUiAllowed: false`;
- `planReviewAllowed: false`;
- `stagedPlanPreviewAllowed: false`;
- `plannerRuntimeAllowed: false`;
- `livePlannerReplacementAllowed: false`;
- `executablePlanStepsAllowed: false`;
- `automaticStepChainingAllowed: false`;
- `providerExecutionFromPlansAllowed: false`;
- `rawAdapterCallsAllowed: false`;
- `implicitPermissionAllowed: false`;
- `autonomousHighRiskStepsAllowed: false`;
- `planBasedRouteMutationAllowed: false`;
- `riskTierDowngradeAllowed: false`;
- `providerSelectionFromPlanAllowed: false`;
- `toolSelectionFromPlanAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserPlannerMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

## Contract Module

The inert contract module is:

`public/nexus-task-planning-feature-flag.js`

It may be loaded by deterministic QA, but it must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Important Boundary

An enabled feature flag is not enough to activate Task Planning authority.

Even if a future local/test-safe caller passes `enabled: true`, the contract keeps:

- `planReviewAllowed: false`;
- `stagedPlanPreviewAllowed: false`;
- `plannerRuntimeAllowed: false`;
- `livePlannerReplacementAllowed: false`;
- `executablePlanStepsAllowed: false`;
- `automaticStepChainingAllowed: false`;
- `providerExecutionFromPlansAllowed: false`;
- `rawAdapterCallsAllowed: false`;
- `implicitPermissionAllowed: false`;
- `autonomousHighRiskStepsAllowed: false`;
- `planBasedRouteMutationAllowed: false`;
- `riskTierDowngradeAllowed: false`;
- `providerSelectionFromPlanAllowed: false`;
- `toolSelectionFromPlanAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserPlannerMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

This means flag-on visibility can only ever mean review-only readiness until a separate approved sprint changes the step mapping, risk review, policy review, approval, audit, browser validation, and rollback boundaries.

## Prohibited Behavior

Sprint N2 must not add:

- runtime imports;
- script tags;
- event handlers;
- live planner replacement;
- active plan step adapters;
- route mutation;
- voice route mutation;
- typed route mutation;
- automatic step chaining;
- executable plan steps;
- provider execution from plans;
- raw adapter calls;
- implicit permission;
- autonomous high-risk steps;
- risk downgrades from plans;
- ambiguous prompt execution;
- provider selection from plans;
- tool selection from plans;
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

## Relationship To Sprint N1

Sprint N1 remains the activation gate. Sprint N2 only defines the default-off flag contract. Future visible or runtime Task Planning work still requires every Sprint N1 precondition, including product owner approval, evaluated planner version, tool registry step mapping, risk tier and policy review for each step, execution false by default, staged plan preview, visible step purpose and consequence, explicit approval per high-risk step, cancellation path, provider availability check, permission state per step, audit event per step, source trace for plan, no autonomous high-risk steps, no raw adapter calls, no implicit permission, rollback planning, browser validation, and deterministic QA coverage.

## QA Expectations

Sprint N2 QA must verify:

- the flag contract doc exists;
- the feature flag module exists;
- the flag defaults off;
- flag-on test input cannot grant plan review, staged plan preview, planner runtime authority, live planner replacement, executable plan steps, automatic step chaining, provider execution from plans, raw adapter calls, implicit permission, autonomous high-risk steps, plan-based route mutation, risk downgrade, provider selection, tool selection, policy bypass, confirmation bypass, permission bypass, first-turn or later-turn execution, Standard User planner mutation, backend write, storage write, network, audit write, or execution authority;
- runtime files do not load the module;
- no unsafe API or execution hook is introduced;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint N3 - Task Planning Flag Contract Harness`

Sprint N3 should add deterministic fixtures for flag-off, flag-on-review-only, and unsafe attempted authority states. It should remain local-safe and non-runtime.
