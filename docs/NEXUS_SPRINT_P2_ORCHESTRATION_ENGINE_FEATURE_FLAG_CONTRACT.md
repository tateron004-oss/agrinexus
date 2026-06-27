# Nexus Sprint P2 - Orchestration Engine Feature Flag Contract

Current base: `2d345636ec5548bc40870126a71c0a776b0ef4a3`

Sprint P2 defines a default-off Orchestration Engine feature flag contract. This phase adds a standalone inert contract module and deterministic QA only. It does not import the module into Standard User runtime, activate an orchestration engine, render a step queue, chain steps, call providers, call raw adapters, write storage, write audit events, request permissions, navigate, or execute actions.

## Purpose

Sprint P2 turns the Sprint P1 runtime activation readiness gate into a concrete default-off flag vocabulary for future work.

The flag exists so a later approved sprint can reason about a visible or local/test-safe orchestration readiness surface without confusing:

- feature flag readiness;
- visible orchestration review UI permission;
- orchestration trace preview permission;
- live orchestration runtime;
- executable step runners;
- automatic step chaining;
- background execution;
- provider adapter execution;
- raw adapter calls;
- silent provider handoff;
- autonomous high-risk orchestration;
- orchestration from raw intent;
- plan-based orchestration execution;
- selectedToolId-based orchestration execution;
- context-based orchestration execution;
- policy bypass;
- confirmation bypass;
- permission bypass;
- first-turn or later-turn execution;
- Standard User orchestration mutation;
- storage writes;
- network calls;
- audit writes;
- execution authority.

## Feature Flag Name

`NEXUS_ORCHESTRATION_ENGINE_VISIBLE_ENABLED`

## Default State

The default state must be:

- `enabled: false`;
- `visibleUiAllowed: false`;
- `orchestrationReviewAllowed: false`;
- `orchestrationTracePreviewAllowed: false`;
- `orchestrationRuntimeAllowed: false`;
- `liveOrchestrationEngineAllowed: false`;
- `executableStepsAllowed: false`;
- `automaticStepChainingAllowed: false`;
- `backgroundExecutionAllowed: false`;
- `providerAdapterExecutionAllowed: false`;
- `rawAdapterCallsAllowed: false`;
- `silentProviderHandoffAllowed: false`;
- `autonomousHighRiskOrchestrationAllowed: false`;
- `orchestrationFromRawIntentAllowed: false`;
- `planBasedOrchestrationExecutionAllowed: false`;
- `selectedToolIdOrchestrationExecutionAllowed: false`;
- `contextBasedOrchestrationExecutionAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserOrchestrationMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

## Contract Module

The inert contract module is:

`public/nexus-orchestration-engine-feature-flag.js`

It may be loaded by deterministic QA, but it must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Important Boundary

An enabled feature flag is not enough to activate Orchestration Engine authority.

Even if a future local/test-safe caller passes `enabled: true`, the contract keeps:

- `orchestrationReviewAllowed: false`;
- `orchestrationTracePreviewAllowed: false`;
- `orchestrationRuntimeAllowed: false`;
- `liveOrchestrationEngineAllowed: false`;
- `executableStepsAllowed: false`;
- `automaticStepChainingAllowed: false`;
- `backgroundExecutionAllowed: false`;
- `providerAdapterExecutionAllowed: false`;
- `rawAdapterCallsAllowed: false`;
- `silentProviderHandoffAllowed: false`;
- `autonomousHighRiskOrchestrationAllowed: false`;
- `orchestrationFromRawIntentAllowed: false`;
- `planBasedOrchestrationExecutionAllowed: false`;
- `selectedToolIdOrchestrationExecutionAllowed: false`;
- `contextBasedOrchestrationExecutionAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserOrchestrationMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

This means flag-on visibility can only ever mean review-only readiness until a separate approved sprint changes connector registry, step policy, permission, consent, approval, audit, browser validation, and rollback boundaries.

## Prohibited Behavior

Sprint P2 must not add:

- runtime imports;
- script tags;
- event handlers;
- live orchestration engine;
- orchestration runtime UI;
- orchestration review buttons;
- step queue runtime UI;
- automatic step chaining;
- executable step runners;
- background execution;
- provider adapter execution;
- raw adapter calls;
- silent provider handoff;
- automatic connector execution;
- autonomous high-risk orchestration;
- orchestration from raw intent;
- plan-based orchestration execution;
- selectedToolId-based orchestration execution;
- context-based orchestration execution;
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
- real pending action creation;
- execution authority.

## Relationship To Sprint P1

Sprint P1 remains the activation gate. Sprint P2 only defines the default-off flag contract. Future visible or runtime Orchestration Engine work still requires every Sprint P1 precondition, including product owner approval, evaluated orchestrator engine version, approved step list, visible step list and current step, risk tier for each step, policy and permission decisions for each step, consent state, explicit approval for each high-risk step, audit event for each step, provider availability, connector registry entry, cancellation and rollback paths, no autonomous high-risk step, no raw adapter calls, no background execution, no silent provider handoff, browser validation, and deterministic QA coverage.

## QA Expectations

Sprint P2 QA must verify:

- the feature flag contract doc exists;
- the feature flag module exists;
- the flag defaults off;
- flag-on test input cannot grant orchestration review, trace preview, runtime authority, live orchestration engine, executable steps, automatic step chaining, background execution, provider adapter execution, raw adapter calls, silent provider handoff, autonomous high-risk orchestration, raw-intent orchestration, plan-based execution, selectedToolId-based execution, context-based execution, policy bypass, confirmation bypass, permission bypass, first-turn or later-turn execution, Standard User orchestration mutation, backend write, storage write, network, audit write, or execution authority;
- runtime files do not load the module;
- no unsafe API or execution hook is introduced;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint P3 - Orchestration Engine Flag Contract Harness`

Sprint P3 should add deterministic fixtures for flag-off, flag-on-review-only, and unsafe attempted authority states. It should remain local-safe and non-runtime.
