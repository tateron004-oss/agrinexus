# Nexus Sprint P4 - Orchestration Engine Runtime Absence Regression Guard

Current base: `1d31c88eb7aa7ef5283424f579d728542c0e29b5`

Sprint P4 adds a deterministic regression guard proving the Orchestration Engine readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, orchestration engine activation, orchestration review buttons, step queues, executable step runners, automatic step chaining, background execution, provider adapter execution, raw adapter calls, silent provider handoff, network calls, storage writes, backend writes, permission prompts, audit writes, provider execution, or execution behavior.

## Purpose

Prevent accidental drift where Orchestration Engine readiness artifacts become runtime activation.

Sprint P4 protects:

- P1 Orchestration Engine runtime activation readiness gate;
- P2 Orchestration Engine feature flag contract;
- P3 Orchestration Engine flag contract harness;
- Phase 68 Orchestration Engine readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-orchestration-engine-readiness-contract.js`;
- `public/nexus-orchestration-engine-feature-flag.js`;
- `scripts/nexus-sprint-p3-orchestration-engine-flag-contract-harness.js`;
- `fixtures/nexus/orchestration-engine-feature-flags.json`;
- Sprint P QA scripts.

The guard checks exact Orchestration Engine artifact names and helpers. It intentionally does not ban generic words such as `orchestration`, `plan`, `review`, `trace`, `step`, `route`, `language`, or `settings`, because existing assistant, planner, route, language, and settings behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint P artifacts must not introduce:

- live orchestration engine;
- active orchestrator runtime;
- orchestration runtime UI;
- orchestration review buttons;
- orchestration trace preview UI;
- step queue runtime UI;
- step runner runtime;
- event handlers;
- typed route mutation;
- voice route mutation;
- automatic route changes from selectedToolId metadata;
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
- ambiguous prompt execution;
- policy bypass from orchestration;
- confirmation bypass from orchestration;
- permission bypass from orchestration;
- source-backed answer claims without sources;
- medical diagnosis from orchestration;
- pharmacy or prescription execution from orchestration;
- payment or marketplace transaction execution from orchestration;
- emergency dispatch from orchestration;
- contact or message execution from orchestration;
- location or camera activation from orchestration;
- identity verification from orchestration;
- role or permission elevation from orchestration;
- permission prompts;
- audit writes;
- backend writes;
- localStorage or sessionStorage writes;
- IndexedDB writes;
- fetch or network calls;
- provider handoff;
- native bridge dispatch;
- calls;
- messages;
- WhatsApp, Telegram, SMS, or email sending;
- payment execution;
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

## Required Contract Invariants

The guard confirms the P2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
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

The guard confirms the P3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Orchestration Engine runtime is active;
- no orchestration review surface appears from Sprint P artifacts;
- no orchestration trace preview surface appears from Sprint P artifacts;
- no step queue runtime UI appears from Sprint P artifacts;
- no executable step runner is loaded by Sprint P artifacts;
- no typed or voice route is changed by Sprint P artifacts;
- no orchestration from raw intent is performed by Sprint P artifacts;
- no plan-based, selectedToolId-based, or context-based orchestration execution is performed by Sprint P artifacts;
- no automatic step chaining is performed by Sprint P artifacts;
- no provider adapter execution is performed by Sprint P artifacts;
- no raw adapter call is performed by Sprint P artifacts;
- no silent provider handoff is performed by Sprint P artifacts;
- no autonomous high-risk orchestration is possible from Sprint P artifacts;
- no policy, confirmation, or permission bypass is possible from Sprint P artifacts;
- no audit event is written by Sprint P artifacts;
- existing language, accessibility, login, confirmation, session memory, route, planner, and permission behavior remains separate from Orchestration Engine runtime authority.

## Browser Validation Implication

Sprint P4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Orchestration Engine artifacts, renders orchestration UI, activates a step queue, calls provider adapters, chains steps, changes typed routing, changes voice routing, changes selectedToolId route/risk/handoff behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk prompt checks;
- ambiguous prompt checks;
- high-risk prompt checks;
- orchestration review/cancel checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint P4 QA must verify:

- this regression guard exists;
- P1, P2, P3, and Phase 68 artifacts exist;
- runtime files do not load Orchestration Engine contracts, feature flags, fixtures, or harnesses;
- P2 default and unsafe-attempt behavior remains no-execution;
- P3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint P5 - Orchestration Engine Lane Closeout`

Sprint P5 should close the Orchestration Engine readiness lane, summarize P1-P4, and recommend the next safe inert lane without activating runtime behavior.
