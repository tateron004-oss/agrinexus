# Nexus Sprint M4 - Multi-Turn Reasoning Runtime Absence Regression Guard

Current base: `1d89ba9b98229ad1df183d29360d912f4c9a1205`

Sprint M4 adds a deterministic regression guard proving the Multi-Turn Reasoning readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, reasoning engine activation, context continuation adapters, typed route mutation, voice route mutation, automatic routing, hidden task continuation, context-based execution, memory-derived authority, risk downgrades, network calls, storage writes, backend writes, permission prompts, audit writes, provider selection, tool selection, planner action creation, or execution behavior.

## Purpose

Prevent accidental drift where Multi-Turn Reasoning readiness artifacts become runtime activation.

Sprint M4 protects:

- M1 Multi-Turn Reasoning runtime activation readiness gate;
- M2 Multi-Turn Reasoning feature flag contract;
- M3 Multi-Turn Reasoning flag contract harness;
- Phase 65 Multi-Turn Reasoning readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-multi-turn-reasoning-readiness-contract.js`;
- `public/nexus-multi-turn-reasoning-feature-flag.js`;
- `scripts/nexus-sprint-m3-multi-turn-reasoning-flag-contract-harness.js`;
- `fixtures/nexus/multi-turn-reasoning-feature-flags.json`;
- Sprint M QA scripts.

The guard checks exact Multi-Turn Reasoning artifact names and helpers. It intentionally does not ban generic words such as `reasoning`, `context`, `route`, `memory`, `language`, or `settings`, because existing assistant, voice, memory, language, and route behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint M artifacts must not introduce:

- live reasoning engine replacement;
- active context continuation adapters;
- context review buttons;
- event handlers;
- typed route mutation;
- voice route mutation;
- automatic route changes from prior turns;
- hidden task continuation;
- context-based execution;
- memory-derived authority;
- risk downgrades from prior context;
- ambiguous prompt execution;
- provider selection from context;
- tool selection from context;
- planner action creation from context;
- policy bypass from prior context;
- confirmation bypass from prior context;
- permission bypass from prior context;
- source-backed answer claims without sources;
- medical diagnosis from prior turns;
- pharmacy or prescription continuation from prior turns;
- payment or marketplace transaction continuation from prior turns;
- emergency dispatch from prior turns;
- contact or message execution from prior turns;
- location or camera permission from prior turns;
- identity verification from prior turns;
- role or permission elevation from prior turns;
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

The guard confirms the M2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
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

The guard confirms the M3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Multi-Turn Reasoning runtime is active;
- no reasoning review surface appears from Sprint M artifacts;
- no conversation context is stored by Sprint M artifacts;
- no context continuation adapter is loaded by Sprint M artifacts;
- no typed or voice route is changed by Sprint M artifacts;
- no hidden task continuation is performed by Sprint M artifacts;
- no risk downgrade from prior context is performed by Sprint M artifacts;
- no provider selection is performed by Sprint M artifacts;
- no policy, confirmation, or permission bypass is possible from Sprint M artifacts;
- no audit event is written by Sprint M artifacts;
- no provider, payment, regulated, marketplace, location, communication, or account action can be executed by Sprint M artifacts;
- existing language, accessibility, login, confirmation, session memory, and permission behavior remains separate from Multi-Turn Reasoning runtime authority.

## Browser Validation Implication

Sprint M4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Multi-Turn Reasoning artifacts, renders context review UI, activates a reasoning engine, stores conversation context, continues tasks across turns, changes typed routing, changes voice routing, changes risk tier behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk prompt checks;
- ambiguous prompt checks;
- high-risk prompt checks;
- multi-turn correction/reset checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint M4 QA must verify:

- this regression guard exists;
- M1, M2, M3, and Phase 65 artifacts exist;
- runtime files do not load Multi-Turn Reasoning contracts, feature flags, fixtures, or harnesses;
- M2 default and unsafe-attempt behavior remains no-execution;
- M3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint M5 - Multi-Turn Reasoning Lane Closeout`

Sprint M5 should close the Multi-Turn Reasoning readiness lane, summarize M1-M4, and recommend the next safe inert lane without activating runtime behavior.
