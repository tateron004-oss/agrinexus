# Nexus Sprint L1 - Advanced Intent Understanding Runtime Activation Readiness Gate

Current base: `91ee675aba22bbd881bb189b7fefd75aa5ac215f`

Sprint L1 defines the readiness gate that must be satisfied before Advanced Intent Understanding can affect the Standard User runtime. This phase is documentation and deterministic QA only. It does not replace the active classifier, change typed routing, change voice routing, mutate risk tiers, alter policy decisions, alter planner decisions, select providers, write audit records, store classifier context, call network services, or grant execution authority.

## Relationship To Prior Lanes

Sprint L1 starts after:

- Sprint K5 - Personalization Lane Closeout;
- Phase 64 - Advanced Intent Understanding Readiness Contract.

Personalization readiness is not intent authority. Future classifier improvements may help Nexus clarify meaning, but they must not infer consent, permission, identity, role authority, provider selection, or execution authority.

## Runtime Activation Preconditions

Advanced Intent Understanding runtime activation must remain blocked until all of these conditions are complete:

- product owner approval for a classifier runtime change;
- evaluated classifier version;
- representative prompt set;
- multilingual prompt coverage;
- Standard User prompt coverage;
- voice prompt coverage;
- typed prompt coverage;
- risk stability baseline;
- ambiguity fallback;
- clarification path;
- high-risk no downgrade rule;
- source trace for classifier decision;
- audit decision record;
- policy engine review;
- planner non-authority rule;
- provider selection boundary;
- no raw adapter calls;
- no implicit permission;
- no first-turn execution;
- user override or correction path;
- regression suite coverage;
- browser validation plan;
- rollback plan;
- deterministic QA coverage.

## Runtime Absence Requirements

Until those preconditions are complete, the following must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-advanced-intent-understanding-readiness-contract.js`;
- any future Advanced Intent Understanding runtime classifier module;
- any future classifier replacement adapter;
- any future classifier upgrade feature flag module;
- any future classifier evaluation fixture harness;
- Sprint L QA scripts.

The existing Phase 64 contract may be loaded by deterministic QA only.

## Blocked Runtime Behavior

Sprint L1 does not authorize:

- live classifier replacement;
- automatic route changes;
- hidden risk downgrades;
- confidence-only risk downgrades;
- ambiguous prompt execution;
- provider selection from raw intent;
- tool selection from raw intent;
- planner action creation from raw intent;
- policy bypass from classifier confidence;
- confirmation bypass from classifier confidence;
- permission bypass from classifier confidence;
- source-backed answer claims without sources;
- medical diagnosis inference;
- pharmacy or prescription inference;
- payment intent execution;
- marketplace transaction inference;
- emergency dispatch inference;
- contact or message execution inference;
- location or camera permission inference;
- identity verification inference;
- role or permission elevation;
- Standard User runtime classifier changes;
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
- no Advanced Intent Understanding runtime surface;
- no classifier replacement module loaded;
- no classifier-driven risk tier mutation;
- no classifier-driven provider selection;
- no classifier-driven execution, staging, or confirmation bypass;
- no provider/contact/payment/health/location/marketplace/emergency authority from classifier output;
- existing confirmation and permission gates untouched.

## Required Contract Invariants

The Phase 64 Advanced Intent Understanding Readiness Contract must continue to preserve:

- `liveClassifierReplacementEnabled: false`;
- `automaticRouteChangesEnabled: false`;
- `hiddenRiskDowngradeEnabled: false`;
- `providerSelectionEnabled: false`;
- `rawAdapterCallsEnabled: false`;
- `implicitPermissionEnabled: false`;
- `firstTurnExecutionEnabled: false`;
- `standardUserClassifierMutationAllowed: false`;
- `executionAllowed: false`;
- `liveActionEnabled: false`.

Future overrides must not be able to turn those fields on until a later approved activation phase changes the contract intentionally with new QA.

## Restricted Domains

Future intent understanding improvements must not infer execution authority in:

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

> I can help clarify what you mean, but I will not infer permission or execute an action from an ambiguous request.

Nexus must not say:

- I know what you meant, so I started it;
- I selected a provider for you automatically;
- I downgraded this because it seems safe;
- I already called, messaged, paid, scheduled, shared, dispatched, or opened a provider.

## Browser Validation Implication

Sprint L1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that loads classifier runtime artifacts, changes typed routing, changes voice routing, changes Standard User visible behavior, changes assistant response behavior, stages actions from classifier output, or changes risk classification must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk prompt checks;
- ambiguous prompt checks;
- high-risk prompt checks;
- console warning/error checks;
- runtime mutation restoration.

## Rollback Strategy

If a future sprint accidentally turns Advanced Intent Understanding artifacts into runtime authority:

1. Revert the runtime wiring first.
2. Restore the Phase 64 contract no-execution defaults.
3. Restore `liveClassifierReplacementEnabled: false`, `automaticRouteChangesEnabled: false`, `hiddenRiskDowngradeEnabled: false`, `providerSelectionEnabled: false`, `rawAdapterCallsEnabled: false`, `implicitPermissionEnabled: false`, `firstTurnExecutionEnabled: false`, `standardUserClassifierMutationAllowed: false`, `executionAllowed: false`, and `liveActionEnabled: false`.
4. Re-run Phase 64 Advanced Intent Understanding readiness QA.
5. Re-run Sprint L1 QA.
6. Re-run `node scripts/qa-suite.js nexus-workforce`.
7. Re-run `node scripts/qa-suite.js all-safe`.
8. Browser validate the Standard User path if visible behavior or routing changed.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint L2 - Advanced Intent Understanding Feature Flag Contract`

Sprint L2 should remain inert. It may define a default-off Advanced Intent Understanding feature flag contract, but it must not load classifier runtime, change typed routing, change voice routing, mutate risk tiers, select providers, stage actions, write audit events, use credentials, request permissions, or grant execution authority.
