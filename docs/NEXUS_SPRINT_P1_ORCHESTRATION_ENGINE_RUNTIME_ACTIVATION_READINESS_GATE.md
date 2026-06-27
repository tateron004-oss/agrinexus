# Nexus Sprint P1 - Orchestration Engine Runtime Activation Readiness Gate

Current base: `024a89d1956249ebc789be46180bfe76777cf2a8`

Sprint P1 defines the readiness gate that must be satisfied before an Orchestration Engine can affect the Standard User runtime. This phase is documentation and deterministic QA only. It does not add a live orchestration engine, orchestration UI, step runner, step queue, background execution, provider adapter execution, raw adapter calls, silent provider handoff, automatic connector execution, typed route mutation, voice route mutation, storage writes, network calls, backend writes, audit writes, permission prompts, route changes, or execution behavior.

## Relationship To Prior Lanes

Sprint P1 starts after:

- Sprint O5 - Tool Provider Selection Lane Closeout;
- Phase 68 - Orchestration Engine Readiness Contract.

Tool Provider Selection readiness is not orchestration authority. Future orchestration may coordinate already-approved steps, but an orchestration trace must never become consent, permission, provider authorization, credential use, handoff approval, step approval, or execution approval.

## Runtime Activation Preconditions

Orchestration Engine runtime activation must remain blocked until all of these conditions are complete:

- product owner approval for an orchestration runtime change;
- evaluated orchestrator engine version;
- approved step list;
- visible step list display;
- visible current step display;
- risk tier for each step;
- policy decision for each step;
- permission state for each step;
- consent state for each step;
- explicit approval for each high-risk step;
- audit event for each step;
- provider availability for each step;
- connector registry entry for each provider step;
- visible provider display for each provider step;
- visible action type display for each step;
- visible purpose and consequence display for each step;
- step cancellation path;
- full orchestration cancellation path;
- step failure fallback;
- orchestration stop fallback;
- rollback or stop plan;
- reviewable orchestration trace;
- no autonomous high-risk step;
- no raw adapter calls;
- no background execution;
- no silent provider handoff;
- no first-turn execution;
- no later-turn execution without current approval;
- representative prompt set;
- multilingual prompt coverage;
- Standard User prompt coverage;
- voice prompt coverage;
- typed prompt coverage;
- ambiguity fallback;
- regression suite coverage;
- browser validation plan;
- deterministic QA coverage.

## Runtime Absence Requirements

Until those preconditions are complete, the following must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-orchestration-engine-readiness-contract.js`;
- any future Orchestration Engine runtime module;
- any future orchestration step runner;
- any future orchestration feature flag module;
- any future orchestration fixture harness;
- Sprint P QA scripts.

The existing Phase 68 contract may be loaded by deterministic QA only.

## Blocked Runtime Behavior

Sprint P1 does not authorize:

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
- policy bypass from orchestration metadata;
- confirmation bypass from orchestration metadata;
- permission bypass from orchestration metadata;
- source-backed answer claims without sources;
- medical diagnosis from orchestration;
- pharmacy or prescription execution from orchestration;
- payment or marketplace transaction execution from orchestration;
- emergency dispatch from orchestration;
- contact or message execution from orchestration;
- location or camera activation from orchestration;
- identity verification from orchestration;
- role or permission elevation from orchestration;
- Standard User runtime orchestration changes;
- storage writes;
- fetch or network calls;
- backend writes;
- audit writes;
- localStorage or sessionStorage writes;
- IndexedDB writes;
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

## Standard User Boundary

The Standard User build must keep:

- existing visible behavior unchanged;
- existing typed and voice command routing unchanged;
- existing low-risk previews and controlled action behavior unchanged;
- existing clarification behavior for ambiguous prompts;
- no Orchestration Engine runtime surface;
- no orchestration engine module loaded;
- no orchestration step runner loaded;
- no orchestration queue or trace rendered from Sprint P artifacts;
- no orchestration-driven route mutation;
- no orchestration-driven risk tier mutation;
- no orchestration-driven provider handoff;
- no orchestration-driven execution, staging, or confirmation bypass;
- no provider/contact/payment/health/location/marketplace/emergency authority from orchestration metadata;
- existing confirmation and permission gates untouched.

## Required Contract Invariants

The Phase 68 Orchestration Engine Readiness Contract must continue to preserve:

- `liveOrchestrationEngineEnabled: false`;
- `autonomousHighRiskOrchestrationEnabled: false`;
- `backgroundExecutionEnabled: false`;
- `providerAdapterExecutionEnabled: false`;
- `silentProviderHandoffEnabled: false`;
- `rawAdapterCallsEnabled: false`;
- `standardUserOrchestrationMutationAllowed: false`;
- `executionAllowed: false`;
- `liveActionEnabled: false`.

Future overrides must not be able to turn those fields on until a later approved activation phase changes the contract intentionally with new QA.

## Restricted Domains

Future orchestration improvements must not infer execution authority in:

- healthcare;
- medical records;
- pharmacy;
- payments;
- location;
- communications;
- provider contact;
- marketplace transactions;
- emergency;
- transportation dispatch;
- identity;
- account profile;
- role authorization;
- minors and family support.

## Safe Copy Boundary

Nexus may say:

> I can organize approved steps, but I will not run an orchestrated action without the required approval, permission, and audit controls.

Nexus must not say:

- I ran the full workflow for you;
- I completed every step automatically;
- I contacted providers as part of the orchestration;
- I used orchestration metadata as permission;
- I already called, messaged, paid, scheduled, shared, dispatched, or opened a provider;
- I will continue automatically without asking.

## Browser Validation Implication

Sprint P1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that loads orchestration runtime artifacts, changes typed routing, changes voice routing, changes Standard User visible behavior, renders orchestration UI, chains steps automatically, stages actions from orchestration metadata, writes audit events, changes permission prompts, changes risk classification, or opens a provider path must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk prompt checks;
- ambiguous prompt checks;
- high-risk prompt checks;
- orchestration review/cancel checks;
- console warning/error checks;
- runtime mutation restoration.

## Rollback Strategy

If a future sprint accidentally turns Orchestration Engine artifacts into runtime authority:

1. Revert the runtime wiring first.
2. Restore the Phase 68 contract no-execution defaults.
3. Restore `liveOrchestrationEngineEnabled: false`, `autonomousHighRiskOrchestrationEnabled: false`, `backgroundExecutionEnabled: false`, `providerAdapterExecutionEnabled: false`, `silentProviderHandoffEnabled: false`, `rawAdapterCallsEnabled: false`, `standardUserOrchestrationMutationAllowed: false`, `executionAllowed: false`, and `liveActionEnabled: false`.
4. Re-run Phase 68 Orchestration Engine readiness QA.
5. Re-run Sprint P1 QA.
6. Re-run `node scripts/qa-suite.js nexus-workforce`.
7. Re-run `node scripts/qa-suite.js all-safe`.
8. Browser validate the Standard User path if visible behavior or routing changed.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint P2 - Orchestration Engine Feature Flag Contract`

Sprint P2 should remain inert. It may define a default-off Orchestration Engine feature flag contract, but it must not load orchestration runtime, chain steps, call adapters, open providers, use credentials, request permissions, write audit events, or grant execution authority.
