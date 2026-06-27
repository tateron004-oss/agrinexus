# Nexus Sprint N4 - Task Planning Runtime Absence Regression Guard

Current base: `c9809d736e6b1b90625eab06617f33a518fffc32`

Sprint N4 adds a deterministic regression guard proving the Task Planning readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, planner engine activation, plan step adapters, typed route mutation, voice route mutation, automatic routing, executable plan steps, automatic step chaining, provider execution from plans, risk downgrades, network calls, storage writes, backend writes, permission prompts, audit writes, provider selection, tool selection, staged action creation, or execution behavior.

## Purpose

Prevent accidental drift where Task Planning readiness artifacts become runtime activation.

Sprint N4 protects:

- N1 Task Planning runtime activation readiness gate;
- N2 Task Planning feature flag contract;
- N3 Task Planning flag contract harness;
- Phase 66 Task Planning readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-task-planning-readiness-contract.js`;
- `public/nexus-task-planning-feature-flag.js`;
- `scripts/nexus-sprint-n3-task-planning-flag-contract-harness.js`;
- `fixtures/nexus/task-planning-feature-flags.json`;
- Sprint N QA scripts.

The guard checks exact Task Planning artifact names and helpers. It intentionally does not ban generic words such as `plan`, `planning`, `task`, `route`, `review`, `language`, or `settings`, because existing assistant, planner metadata, language, and route behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint N artifacts must not introduce:

- live planner replacement;
- active plan step adapters;
- plan review buttons;
- event handlers;
- typed route mutation;
- voice route mutation;
- automatic route changes from generated plans;
- executable plan steps;
- automatic step chaining;
- provider execution from plans;
- raw adapter calls;
- implicit permission from plans;
- autonomous high-risk steps;
- risk downgrades from generated plans;
- ambiguous prompt execution;
- provider selection from plans;
- tool selection from plans;
- staged action creation from plans;
- policy bypass from generated plans;
- confirmation bypass from generated plans;
- permission bypass from generated plans;
- source-backed answer claims without sources;
- medical diagnosis from generated plans;
- pharmacy or prescription execution from generated plans;
- payment or marketplace transaction execution from generated plans;
- emergency dispatch from generated plans;
- contact or message execution from generated plans;
- location or camera activation from generated plans;
- identity verification from generated plans;
- role or permission elevation from generated plans;
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

The guard confirms the N2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
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

The guard confirms the N3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Task Planning runtime is active;
- no plan review surface appears from Sprint N artifacts;
- no planner engine module is loaded by Sprint N artifacts;
- no plan step adapter is loaded by Sprint N artifacts;
- no typed or voice route is changed by Sprint N artifacts;
- no executable plan step is created by Sprint N artifacts;
- no automatic step chaining is performed by Sprint N artifacts;
- no provider execution from plans is performed by Sprint N artifacts;
- no risk downgrade from generated plans is performed by Sprint N artifacts;
- no provider selection is performed by Sprint N artifacts;
- no policy, confirmation, or permission bypass is possible from Sprint N artifacts;
- no audit event is written by Sprint N artifacts;
- no provider, payment, regulated, marketplace, location, communication, or account action can be executed by Sprint N artifacts;
- existing language, accessibility, login, confirmation, session memory, and permission behavior remains separate from Task Planning runtime authority.

## Browser Validation Implication

Sprint N4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Task Planning artifacts, renders plan review UI, activates a planner engine, creates executable plan steps, chains steps automatically, changes typed routing, changes voice routing, changes risk tier behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk prompt checks;
- ambiguous prompt checks;
- high-risk prompt checks;
- staged plan review/cancel checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint N4 QA must verify:

- this regression guard exists;
- N1, N2, N3, and Phase 66 artifacts exist;
- runtime files do not load Task Planning contracts, feature flags, fixtures, or harnesses;
- N2 default and unsafe-attempt behavior remains no-execution;
- N3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint N5 - Task Planning Lane Closeout`

Sprint N5 should close the Task Planning readiness lane, summarize N1-N4, and recommend the next safe inert lane without activating runtime behavior.
