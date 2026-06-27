# Nexus Sprint N1 - Task Planning Runtime Activation Readiness Gate

Current base: `489bef0820afe6315857c7abb26eed43776d0f7b`

Sprint N1 defines the readiness gate that must be satisfied before Task Planning can affect the Standard User runtime. This phase is documentation and deterministic QA only. It does not add live planner replacement, executable plan steps, automatic step chaining, provider execution from plans, raw adapter calls, implicit permissions, autonomous high-risk steps, typed route mutation, voice route mutation, storage writes, network calls, backend writes, audit writes, permission prompts, route changes, or execution behavior.

## Relationship To Prior Lanes

Sprint N1 starts after:

- Sprint M5 - Multi-Turn Reasoning Lane Closeout;
- Phase 66 - Task Planning Readiness Contract.

Multi-Turn Reasoning readiness is not planner authority. Future task planning may help Nexus organize safe next steps, but a plan must never become consent, permission, provider authorization, or execution approval.

## Runtime Activation Preconditions

Task Planning runtime activation must remain blocked until all of these conditions are complete:

- product owner approval for a planner runtime change;
- evaluated planner version;
- tool registry step mapping;
- risk tier for each plan step;
- policy review for each plan step;
- execution false by default;
- staged plan preview;
- visible step purpose;
- visible step consequence;
- explicit approval per high-risk step;
- cancellation path;
- provider availability check;
- permission state per step;
- audit event per step;
- source trace for plan;
- no autonomous high-risk steps;
- no raw adapter calls;
- no implicit permission;
- no first-turn execution from a generated plan;
- no later-turn execution from a generated plan;
- representative prompt set;
- multilingual prompt coverage;
- Standard User prompt coverage;
- voice prompt coverage;
- typed prompt coverage;
- ambiguity fallback;
- user correction or override path;
- rollback plan;
- regression suite coverage;
- browser validation plan;
- deterministic QA coverage.

## Runtime Absence Requirements

Until those preconditions are complete, the following must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-task-planning-readiness-contract.js`;
- any future Task Planning runtime engine module;
- any future plan step adapter;
- any future task planning feature flag module;
- any future task planning fixture harness;
- Sprint N QA scripts.

The existing Phase 66 contract may be loaded by deterministic QA only.

## Blocked Runtime Behavior

Sprint N1 does not authorize:

- live planner replacement;
- executable plan steps;
- automatic step chaining;
- provider execution from plans;
- raw adapter calls;
- implicit permission from plans;
- autonomous high-risk steps;
- plan-based typed route mutation;
- plan-based voice route mutation;
- plan-based risk tier downgrade;
- plan-based provider selection;
- plan-based tool selection;
- plan-based policy bypass;
- plan-based confirmation bypass;
- plan-based permission bypass;
- source-backed answer claims without sources;
- medical diagnosis from a generated plan;
- pharmacy or prescription execution from a generated plan;
- payment or marketplace transaction execution from a generated plan;
- emergency dispatch from a generated plan;
- contact or message execution from a generated plan;
- location or camera activation from a generated plan;
- identity verification from a generated plan;
- role or permission elevation from a generated plan;
- Standard User runtime planner changes;
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
- no Task Planning runtime surface;
- no planner engine module loaded;
- no plan step adapter loaded;
- no plan-driven route mutation;
- no plan-driven risk tier mutation;
- no plan-driven provider selection;
- no plan-driven execution, staging, or confirmation bypass;
- no provider/contact/payment/health/location/marketplace/emergency authority from generated plans;
- existing confirmation and permission gates untouched.

## Required Contract Invariants

The Phase 66 Task Planning Readiness Contract must continue to preserve:

- `livePlannerReplacementEnabled: false`;
- `executablePlanStepsEnabled: false`;
- `automaticStepChainingEnabled: false`;
- `providerExecutionFromPlansEnabled: false`;
- `rawAdapterCallsEnabled: false`;
- `implicitPermissionEnabled: false`;
- `autonomousHighRiskStepsEnabled: false`;
- `standardUserPlannerMutationAllowed: false`;
- `executionAllowed: false`;
- `liveActionEnabled: false`.

Future overrides must not be able to turn those fields on until a later approved activation phase changes the contract intentionally with new QA.

## Restricted Domains

Future task planning improvements must not infer execution authority in:

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

> I can prepare a staged plan, but I will not run any step until the required approvals and connections are active.

Nexus must not say:

- I made the plan and started it;
- I will run the next step automatically;
- I selected a provider and contacted them;
- I used the plan as permission;
- I already called, messaged, paid, scheduled, shared, dispatched, or opened a provider.

## Browser Validation Implication

Sprint N1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that loads planner runtime artifacts, changes typed routing, changes voice routing, changes Standard User visible behavior, renders plan review UI, stages actions from generated plans, writes audit events, changes permission prompts, or changes risk classification must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk prompt checks;
- ambiguous prompt checks;
- high-risk prompt checks;
- staged plan review/cancel checks;
- console warning/error checks;
- runtime mutation restoration.

## Rollback Strategy

If a future sprint accidentally turns Task Planning artifacts into runtime authority:

1. Revert the runtime wiring first.
2. Restore the Phase 66 contract no-execution defaults.
3. Restore `livePlannerReplacementEnabled: false`, `executablePlanStepsEnabled: false`, `automaticStepChainingEnabled: false`, `providerExecutionFromPlansEnabled: false`, `rawAdapterCallsEnabled: false`, `implicitPermissionEnabled: false`, `autonomousHighRiskStepsEnabled: false`, `standardUserPlannerMutationAllowed: false`, `executionAllowed: false`, and `liveActionEnabled: false`.
4. Re-run Phase 66 Task Planning readiness QA.
5. Re-run Sprint N1 QA.
6. Re-run `node scripts/qa-suite.js nexus-workforce`.
7. Re-run `node scripts/qa-suite.js all-safe`.
8. Browser validate the Standard User path if visible behavior or routing changed.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint N2 - Task Planning Feature Flag Contract`

Sprint N2 should remain inert. It may define a default-off Task Planning feature flag contract, but it must not load planner runtime, generate executable plan steps, chain steps automatically, select providers, stage actions, write audit events, use credentials, request permissions, or grant execution authority.
