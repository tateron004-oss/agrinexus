# Nexus Sprint M1 - Multi-Turn Reasoning Runtime Activation Readiness Gate

Current base: `c94087b01a47f70350e8dca8f04045be4690ab3b`

Sprint M1 defines the readiness gate that must be satisfied before Multi-Turn Reasoning can affect the Standard User runtime. This phase is documentation and deterministic QA only. It does not add a live reasoning engine, hidden task continuation, context-based execution, memory-derived authority, provider selection, planner action creation, policy bypass, confirmation bypass, permission bypass, storage writes, network calls, backend writes, audit writes, permission prompts, route changes, or execution behavior.

## Relationship To Prior Lanes

Sprint M1 starts after:

- Sprint L5 - Advanced Intent Understanding Lane Closeout;
- Phase 65 - Multi-Turn Reasoning Readiness Contract.

Advanced Intent Understanding readiness is not reasoning authority. Future multi-turn reasoning may help Nexus maintain helpful conversational continuity, but prior turns must never become consent, identity proof, permission proof, role authorization, provider authorization, or execution approval.

## Runtime Activation Preconditions

Multi-Turn Reasoning runtime activation must remain blocked until all of these conditions are complete:

- product owner approval for a reasoning runtime change;
- evaluated reasoning context version;
- bounded conversation context model;
- context freshness limit;
- explicit user restatement for high-risk actions;
- risk tier reevaluation on every turn;
- policy engine review on every turn;
- planner non-authority rule;
- memory non-authority rule;
- confirmation required for high-risk actions;
- permission required for sensitive actions;
- context clear or reset path;
- source trace for context use;
- audit decision record;
- no context-based execution;
- no hidden task continuation;
- no implicit permission from prior turns;
- no first-turn or later-turn execution from context alone;
- representative prompt set;
- multilingual prompt coverage;
- Standard User prompt coverage;
- voice prompt coverage;
- typed prompt coverage;
- ambiguity fallback;
- user correction or override path;
- regression suite coverage;
- browser validation plan;
- rollback plan;
- deterministic QA coverage.

## Runtime Absence Requirements

Until those preconditions are complete, the following must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-multi-turn-reasoning-readiness-contract.js`;
- any future Multi-Turn Reasoning runtime engine module;
- any future context continuation adapter;
- any future reasoning upgrade feature flag module;
- any future reasoning evaluation fixture harness;
- Sprint M QA scripts.

The existing Phase 65 contract may be loaded by deterministic QA only.

## Blocked Runtime Behavior

Sprint M1 does not authorize:

- live reasoning engine replacement;
- context-based execution;
- memory-derived authority;
- hidden task continuation;
- automatic route changes from prior turns;
- provider selection from context alone;
- tool selection from context alone;
- planner action creation from context alone;
- policy bypass from prior context;
- confirmation bypass from prior context;
- permission bypass from prior context;
- risk tier downgrade from prior context;
- source-backed answer claims without sources;
- medical diagnosis from prior turns;
- pharmacy or prescription continuation from prior turns;
- payment or marketplace transaction continuation from prior turns;
- emergency dispatch from prior turns;
- contact or message execution from prior turns;
- location or camera permission from prior turns;
- identity verification from prior turns;
- role or permission elevation from prior turns;
- Standard User runtime reasoning changes;
- storage writes;
- network calls;
- backend writes;
- audit writes;
- localStorage or sessionStorage writes;
- IndexedDB writes;
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
- no Multi-Turn Reasoning runtime surface;
- no reasoning engine module loaded;
- no context continuation adapter loaded;
- no context-driven route mutation;
- no context-driven risk tier mutation;
- no context-driven provider selection;
- no context-driven execution, staging, or confirmation bypass;
- no provider/contact/payment/health/location/marketplace/emergency authority from prior turns;
- existing confirmation and permission gates untouched.

## Required Contract Invariants

The Phase 65 Multi-Turn Reasoning Readiness Contract must continue to preserve:

- `liveReasoningEngineEnabled: false`;
- `contextBasedExecutionEnabled: false`;
- `memoryDerivedAuthorityEnabled: false`;
- `hiddenTaskContinuationEnabled: false`;
- `providerSelectionFromContextEnabled: false`;
- `permissionFromContextEnabled: false`;
- `riskTierDowngradeFromContextEnabled: false`;
- `standardUserReasoningMutationAllowed: false`;
- `executionAllowed: false`;
- `liveActionEnabled: false`.

Future overrides must not be able to turn those fields on until a later approved activation phase changes the contract intentionally with new QA.

## Restricted Domains

Future multi-turn reasoning improvements must not infer execution authority in:

- healthcare;
- medical records;
- pharmacy;
- payments;
- location;
- communications;
- provider contact;
- marketplace transactions;
- emergency;
- identity;
- account profile;
- role authorization;
- minors and family support.

## Safe Copy Boundary

Nexus may say:

> I can keep track of the conversation context, but context alone cannot authorize or execute an action.

Nexus must not say:

- I remembered that, so I started it;
- I continued the task in the background;
- I selected a provider based on earlier context;
- I used your previous message as permission;
- I already called, messaged, paid, scheduled, shared, dispatched, or opened a provider.

## Browser Validation Implication

Sprint M1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that loads reasoning runtime artifacts, changes typed routing, changes voice routing, changes Standard User visible behavior, changes assistant response behavior, continues tasks across turns, stages actions from context, or changes risk classification must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk prompt checks;
- ambiguous prompt checks;
- high-risk prompt checks;
- multi-turn correction/reset checks;
- console warning/error checks;
- runtime mutation restoration.

## Rollback Strategy

If a future sprint accidentally turns Multi-Turn Reasoning artifacts into runtime authority:

1. Revert the runtime wiring first.
2. Restore the Phase 65 contract no-execution defaults.
3. Restore `liveReasoningEngineEnabled: false`, `contextBasedExecutionEnabled: false`, `memoryDerivedAuthorityEnabled: false`, `hiddenTaskContinuationEnabled: false`, `providerSelectionFromContextEnabled: false`, `permissionFromContextEnabled: false`, `riskTierDowngradeFromContextEnabled: false`, `standardUserReasoningMutationAllowed: false`, `executionAllowed: false`, and `liveActionEnabled: false`.
4. Re-run Phase 65 Multi-Turn Reasoning readiness QA.
5. Re-run Sprint M1 QA.
6. Re-run `node scripts/qa-suite.js nexus-workforce`.
7. Re-run `node scripts/qa-suite.js all-safe`.
8. Browser validate the Standard User path if visible behavior or routing changed.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint M2 - Multi-Turn Reasoning Feature Flag Contract`

Sprint M2 should remain inert. It may define a default-off Multi-Turn Reasoning feature flag contract, but it must not load reasoning runtime, store conversation context, continue hidden tasks, change typed routing, change voice routing, mutate risk tiers, select providers, stage actions, write audit events, use credentials, request permissions, or grant execution authority.
