# Nexus Sprint M2 - Multi-Turn Reasoning Feature Flag Contract

Current base: `b68572f597721c3587cd334106bc5c41c0fc90a8`

Sprint M2 defines a default-off Multi-Turn Reasoning feature flag contract. This phase adds a standalone inert contract module and deterministic QA only. It does not import the module into Standard User runtime, activate a reasoning engine, store conversation context, continue tasks across turns, change typed routing, change voice routing, auto-route prompts, downgrade risks, select providers, stage actions, write storage, write audit events, contact providers, request permissions, or execute actions.

## Purpose

Sprint M2 turns the Sprint M1 runtime activation gate into a concrete default-off flag vocabulary for future work.

The flag exists so a later approved sprint can reason about a visible or local/test-safe reasoning readiness surface without confusing:

- feature flag readiness;
- visible context review UI permission;
- bounded conversation context;
- live reasoning runtime;
- context continuation;
- hidden task continuation;
- context-based execution;
- memory-derived authority;
- route mutation;
- risk tier mutation;
- provider selection from context;
- implicit permission;
- first-turn or later-turn execution;
- planner authority;
- policy bypass;
- confirmation bypass;
- permission bypass;
- storage writes;
- network calls;
- audit writes;
- execution authority.

## Feature Flag Name

`NEXUS_MULTI_TURN_REASONING_VISIBLE_ENABLED`

## Default State

The default state must be:

- `enabled: false`;
- `visibleUiAllowed: false`;
- `contextReviewAllowed: false`;
- `boundedConversationContextAllowed: false`;
- `reasoningRuntimeAllowed: false`;
- `liveReasoningEngineAllowed: false`;
- `contextContinuationAllowed: false`;
- `hiddenTaskContinuationAllowed: false`;
- `contextBasedExecutionAllowed: false`;
- `memoryDerivedAuthorityAllowed: false`;
- `automaticRouteChangesAllowed: false`;
- `riskTierDowngradeAllowed: false`;
- `providerSelectionFromContextAllowed: false`;
- `toolSelectionFromContextAllowed: false`;
- `plannerActionCreationFromContextAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `implicitPermissionAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserReasoningMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

## Contract Module

The inert contract module is:

`public/nexus-multi-turn-reasoning-feature-flag.js`

It may be loaded by deterministic QA, but it must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Important Boundary

An enabled feature flag is not enough to activate Multi-Turn Reasoning authority.

Even if a future local/test-safe caller passes `enabled: true`, the contract keeps:

- `contextReviewAllowed: false`;
- `boundedConversationContextAllowed: false`;
- `reasoningRuntimeAllowed: false`;
- `liveReasoningEngineAllowed: false`;
- `contextContinuationAllowed: false`;
- `hiddenTaskContinuationAllowed: false`;
- `contextBasedExecutionAllowed: false`;
- `memoryDerivedAuthorityAllowed: false`;
- `automaticRouteChangesAllowed: false`;
- `riskTierDowngradeAllowed: false`;
- `providerSelectionFromContextAllowed: false`;
- `toolSelectionFromContextAllowed: false`;
- `plannerActionCreationFromContextAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `implicitPermissionAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserReasoningMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

This means flag-on visibility can only ever mean review-only readiness until a separate approved sprint changes the context freshness, current-turn restatement, policy, planner, audit, browser validation, and rollback boundaries.

## Prohibited Behavior

Sprint M2 must not add:

- runtime imports;
- script tags;
- event handlers;
- live reasoning engine replacement;
- active context continuation adapters;
- route mutation;
- voice route mutation;
- typed route mutation;
- hidden task continuation;
- context-based execution;
- memory-derived authority;
- risk downgrades from prior context;
- ambiguous prompt execution;
- provider selection from context;
- tool selection from context;
- planner action creation from context;
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

## Relationship To Sprint M1

Sprint M1 remains the activation gate. Sprint M2 only defines the default-off flag contract. Future visible or runtime Multi-Turn Reasoning work still requires every Sprint M1 precondition, including product owner approval, evaluated reasoning context version, bounded conversation context model, context freshness limit, explicit user restatement for high-risk actions, risk tier reevaluation every turn, policy review every turn, planner and memory non-authority rules, confirmation and permission gates, context reset path, source trace, audit decision record, no hidden task continuation, browser validation, rollback planning, and deterministic QA coverage.

## QA Expectations

Sprint M2 QA must verify:

- the flag contract doc exists;
- the feature flag module exists;
- the flag defaults off;
- flag-on test input cannot grant context review, bounded conversation context, reasoning runtime authority, live reasoning engine activation, context continuation, hidden task continuation, context-based execution, memory-derived authority, route changes, risk downgrade, provider selection, tool selection, planner action creation, policy bypass, confirmation bypass, permission bypass, implicit permission, first-turn or later-turn execution, Standard User reasoning mutation, backend write, storage write, network, audit write, or execution authority;
- runtime files do not load the module;
- no unsafe API or execution hook is introduced;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint M3 - Multi-Turn Reasoning Flag Contract Harness`

Sprint M3 should add deterministic fixtures for flag-off, flag-on-review-only, and unsafe attempted authority states. It should remain local-safe and non-runtime.
