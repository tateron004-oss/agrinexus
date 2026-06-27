# Nexus Sprint P3 - Orchestration Engine Flag Contract Harness

Current base: `c156fd5630bdc75b39b03db86c9cda569b260d76`

Sprint P3 adds fixture, harness, documentation, and QA only for the Sprint P2 Orchestration Engine feature flag. It does not add runtime imports, Standard User UI, orchestration review buttons, step queues, step chaining, provider handoff, adapter calls, storage writes, network calls, audit writes, permission prompts, or execution authority.

## Harness Artifacts

- `fixtures/nexus/orchestration-engine-feature-flags.json`
- `scripts/nexus-sprint-p3-orchestration-engine-flag-contract-harness.js`
- `scripts/nexus-sprint-p3-orchestration-engine-flag-contract-harness-qa.js`

## Fixture Coverage

The deterministic fixture set covers:

- default-off state;
- flag-on review-only visibility;
- unsafe attempted authority fields;
- enabled without explicit visible UI permission.

## Protected Fields

Every fixture must preserve:

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

## Runtime Boundary

The harness may load `public/nexus-orchestration-engine-feature-flag.js` from Node-based deterministic QA only. It must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Prohibited Behavior

Sprint P3 must not introduce:

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

## QA Expectations

Sprint P3 QA must verify:

- the P3 documentation exists;
- the fixture file exists;
- the harness exists;
- the fixture set includes four representative cases;
- unsafe authority attempts are represented and neutralized;
- every protected field stays false;
- `noExecution` stays true;
- the harness contains no unsafe or mutating APIs;
- Standard User runtime files do not load P2/P3 artifacts;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint P4 - Orchestration Engine Runtime Absence Regression Guard`

Sprint P4 should add a broader runtime absence guard proving the Orchestration Engine lane remains disconnected from Standard User runtime until the Sprint P1 activation gate is explicitly satisfied.
