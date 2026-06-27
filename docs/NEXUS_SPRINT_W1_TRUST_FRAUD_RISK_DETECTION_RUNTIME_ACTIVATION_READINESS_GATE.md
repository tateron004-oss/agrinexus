# Nexus Sprint W1 - Trust/Fraud/Risk Detection Runtime Activation Readiness Gate

Current base: `c7dc51d4f240e1fbba658b0150d18b6f10aa996a`

Sprint W1 starts the Trust/Fraud/Risk Detection readiness lane after Sprint V5 and Phase 75. This phase is documentation and deterministic QA only. It does not add a live risk engine, fraud scoring runtime, hidden score, automated enforcement, account penalty, marketplace restriction, provider handoff, identity decision, payment hold, transaction block, user accusation, event handler, typed route mutation, voice route mutation, permission prompt, audit write, storage write, backend write, network call, provider handoff, pending action, or execution behavior.

## Relationship To Prior Lanes

Sprint W1 builds on:

- Sprint V5 - Marketplace Intelligence Lane Closeout
- Phase 75 - Trust Fraud Risk Detection Readiness Contract

Marketplace Intelligence readiness is not trust, fraud, risk, scoring, enforcement, account, marketplace restriction, provider, payment, identity, role, or execution authority. Trust/Fraud/Risk Detection readiness is also not automated fraud determination authority, enforcement authority, account restriction authority, marketplace penalty authority, payment hold authority, provider approval, user consent, product owner approval, human review approval, or audit approval.

## Runtime Activation Preconditions

Trust/Fraud/Risk Detection runtime activation remains blocked until all of these conditions are satisfied and reviewed:

- product owner approval for a risk engine runtime change;
- verified source or partner signal;
- source attribution;
- freshness label;
- confidence label;
- user consent boundary where user data is involved;
- role and permission check;
- explicit user approval for high-risk user-facing actions;
- visible cancellation or appeal path where appropriate;
- human review path before adverse decisions;
- audit decision record;
- safe fallback path;
- no unsupported live claim;
- no completed action claim;
- no final fraud determination by automated text;
- no hidden scoring in Standard User runtime;
- no automated account restriction;
- no automated marketplace enforcement;
- no automated payment hold;
- no automated identity decision;
- no provider, buyer, seller, clinician, pharmacy, emergency, transportation, or workforce contact;
- no communications execution;
- no location sharing;
- no Standard User runtime risk-engine mutation approval gap;
- risky prompt coverage;
- marketplace risk boundary prompt coverage;
- payment risk boundary prompt coverage;
- identity/account boundary prompt coverage;
- healthcare/pharmacy/emergency boundary prompt coverage;
- regression suite coverage;
- browser validation plan for any future visible/runtime change;
- deterministic QA coverage.

## Runtime Absence Requirements

The following must remain absent from `public/index.html`, `public/app.js`, and `server.js` during Sprint W1:

- `public/nexus-trust-fraud-risk-detection-readiness-contract.js`;
- any future Trust/Fraud/Risk Detection feature flag;
- any future Trust/Fraud/Risk Detection fixture harness;
- any future live risk engine runtime;
- any future fraud scoring runtime;
- any future risk signal retrieval runtime;
- any future enforcement runtime;
- any future account restriction runtime;
- any future marketplace restriction runtime;
- any future payment hold runtime;
- any future provider handoff runtime;
- Sprint W QA scripts.

Sprint W1 artifacts may be present in the repository only as documentation or deterministic QA. They must not be loaded, executed, imported, dynamically imported, injected, routed, clicked, spoken into runtime behavior, or used as authority by the Standard User build.

## Blocked Runtime Behavior

Sprint W1 does not authorize or introduce:

- active Trust/Fraud/Risk Detection runtime;
- live risk engine execution;
- hidden risk scoring;
- hidden fraud scoring;
- fraud accusation claims;
- final fraud determination claims;
- automated adverse decisions;
- automated account restrictions;
- automated marketplace restrictions;
- automated payment holds;
- automated identity decisions;
- automated role authorization decisions;
- user, buyer, seller, provider, clinician, pharmacy, emergency, transportation, workforce, or marketplace contact claims;
- healthcare, pharmacy, medical record, payment, marketplace, transportation, emergency, location, communications, identity, account, or regulated action execution claims;
- provider connection claims;
- completed action claims;
- unsupported live data claims;
- source-backed risk answer claims without sources;
- stale data claims without freshness labels;
- confidence-free risk claims;
- event handlers;
- typed route mutation;
- voice route mutation;
- policy bypass from risk metadata;
- confirmation bypass from risk metadata;
- permission bypass from risk metadata;
- ambiguous prompt execution;
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
- external navigation;
- real pending action creation;
- execution authority.

## Standard User Boundary

The normal Standard User build must remain unchanged while Sprint W1 artifacts exist in the repository:

- no Sprint W1 contract or QA script is imported by `public/index.html`, `public/app.js`, or `server.js`;
- no Sprint W1 artifact creates buttons, cards, modals, forms, chips, status text, hidden queues, route handlers, voice handlers, or typed handlers;
- existing marketplace, agriculture, workforce, health, telehealth, map, call, music, learning, language, and Standard User behavior remains separate from Trust/Fraud/Risk Detection artifacts;
- high-risk prompts remain blocked, permission-gated, confirmation-gated, or bounded by existing app behavior;
- hidden/debug-only metadata must not become user-visible;
- no action has been taken.

## Required Contract Invariants

The Phase 75 Trust/Fraud/Risk Detection readiness contract must remain blocked and non-executing:

- `contractId: "trust-fraud-risk-detection.readiness.phase_75"`;
- `readinessStatus: "blocked"`;
- `riskTier: "restricted"`;
- `roadmapComponent: "risk engine"`;
- `acceptanceTarget: "risky actions blocked"`;
- `liveConnectorEnabled: false`;
- `providerExecutionEnabled: false`;
- `regulatedActionEnabled: false`;
- `silentActionAllowed: false`;
- `backgroundExecutionAllowed: false`;
- `standardUserRuntimeMutationAllowed: false`;
- `storageSideEffectAllowed: false`;
- `networkSideEffectAllowed: false`;
- `executionAllowed: false`;
- `liveActionEnabled: false`.

## Restricted Domains

Trust/Fraud/Risk Detection must not infer authority over these domains:

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
- account/profile;
- role authorization;
- regulated execution.

## Safe Copy Boundary

Allowed posture:

> I can help flag potential risk signals for review, but I cannot make final fraud determinations, restrict accounts, block transactions, contact providers, or take enforcement action without approved review, permission, and audit controls.

Disallowed claims:

- I found fraud.
- I blocked the user.
- I restricted the account.
- I held the payment.
- I stopped the transaction.
- I contacted the provider.
- I reported the seller.
- I approved the identity.
- I completed enforcement.

## Browser Validation Implication

Sprint W1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that loads Trust/Fraud/Risk Detection artifacts, renders risk UI, activates a live risk engine, performs risk source retrieval runtime, changes typed routing, changes voice routing, changes Standard User visible behavior, writes audit events, changes permission prompts, changes marketplace or account behavior, or changes risk tier behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- marketplace risk prompt checks;
- payment risk boundary checks;
- identity/account risk boundary checks;
- healthcare/pharmacy/emergency boundary checks;
- provider/contact boundary checks;
- ambiguous prompt checks;
- high-risk prompt checks;
- console warning/error checks;
- runtime mutation restoration.

## Rollback Strategy

If a future sprint accidentally turns Sprint W artifacts into runtime authority:

1. Revert the runtime wiring first.
2. Restore the Trust/Fraud/Risk Detection readiness contract to no-execution defaults.
3. Restore `liveConnectorEnabled: false`, `providerExecutionEnabled: false`, `regulatedActionEnabled: false`, `silentActionAllowed: false`, `backgroundExecutionAllowed: false`, `standardUserRuntimeMutationAllowed: false`, `storageSideEffectAllowed: false`, `networkSideEffectAllowed: false`, `executionAllowed: false`, and `liveActionEnabled: false`.
4. Re-run Phase 75 Trust/Fraud/Risk Detection readiness QA.
5. Re-run Sprint W1 QA.
6. Re-run `node scripts/qa-suite.js nexus-workforce`.
7. Re-run `node scripts/qa-suite.js all-safe`.
8. Browser validate the Standard User path if visible behavior changed.

## Next Safe Sprint Recommendation

Recommended next sprint train:

`Sprint W2 - Trust/Fraud/Risk Detection Feature Flag Contract`

Sprint W2 should remain inert unless explicitly approved. It should define a default-off Trust/Fraud/Risk Detection feature flag contract without automated scoring, enforcement, account penalties, marketplace restrictions, payment holds, provider contact, hidden execution, storage writes, network calls, or execution authority.
