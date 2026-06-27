# Nexus Sprint W4 - Trust/Fraud/Risk Detection Runtime Absence Regression Guard

Current base: `3dbbf989777d041460b8a951768ea9c67e59c516`

Sprint W4 adds a deterministic regression guard proving the Trust/Fraud/Risk Detection readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, risk review surfaces, fraud signal previews, trust review summaries, human review queues, live risk engines, fraud scoring, automated scoring, hidden scoring, final fraud determinations, account restrictions, marketplace restrictions, payment holds, transaction blocking, identity decisions, role authorization decisions, enforcement actions, user accusations, provider contact, communications execution, location sharing, payment execution, marketplace transactions, storage writes, backend writes, provider execution, or action authority.

## Purpose

Prevent accidental drift where Trust/Fraud/Risk Detection readiness artifacts become runtime activation.

Sprint W4 protects:

- W1 Trust/Fraud/Risk Detection runtime activation readiness gate;
- W2 Trust/Fraud/Risk Detection feature flag contract;
- W3 Trust/Fraud/Risk Detection flag contract harness;
- Phase 75 Trust/Fraud/Risk Detection readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-trust-fraud-risk-detection-readiness-contract.js`;
- `public/nexus-trust-fraud-risk-detection-feature-flag.js`;
- `scripts/nexus-sprint-w3-trust-fraud-risk-detection-flag-contract-harness.js`;
- `fixtures/nexus/trust-fraud-risk-detection-feature-flags.json`;
- Sprint W QA scripts.

The guard checks exact Trust/Fraud/Risk Detection artifact names and helpers. It intentionally does not ban generic safety, trust, fraud, risk, marketplace, payment, account, identity, role, review, blocked, support, or warning words, because existing policy, safety, marketplace, identity, health, payments-readiness, and Standard User guidance behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint W artifacts must not introduce:

- active trust/fraud/risk detection runtime;
- live risk engine;
- fraud scoring runtime;
- risk signal retrieval runtime;
- automated scoring;
- hidden scoring;
- final fraud determination;
- account restriction;
- marketplace restriction;
- payment hold;
- transaction block;
- identity decision;
- role authorization decision;
- enforcement action;
- user accusation;
- trust review mutation;
- human review queue mutation;
- source-backed risk claims without sources;
- stale data claims without freshness labels;
- confidence-free source-backed claims;
- unsupported live data claims;
- provider connection claims;
- completed action claims;
- event handlers;
- typed route mutation;
- voice route mutation;
- policy bypass;
- confirmation bypass;
- permission bypass;
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
- shipping or transportation dispatch;
- emergency dispatch;
- location sharing;
- payment execution;
- marketplace transaction execution;
- account or profile mutation;
- external navigation;
- real pending action creation;
- execution authority.

## Required Contract Invariants

The guard confirms the W2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
- `riskReviewAllowed: false`;
- `riskSignalPreviewAllowed: false`;
- `fraudSignalPreviewAllowed: false`;
- `trustReviewSummaryAllowed: false`;
- `humanReviewQueuePreviewAllowed: false`;
- `trustFraudRiskRuntimeAllowed: false`;
- `liveRiskEngineAllowed: false`;
- `fraudScoringRuntimeAllowed: false`;
- `riskSignalRetrievalRuntimeAllowed: false`;
- `automatedScoringAllowed: false`;
- `hiddenScoringAllowed: false`;
- `finalFraudDeterminationAllowed: false`;
- `accountRestrictionAllowed: false`;
- `marketplaceRestrictionAllowed: false`;
- `paymentHoldAllowed: false`;
- `transactionBlockAllowed: false`;
- `identityDecisionAllowed: false`;
- `roleAuthorizationDecisionAllowed: false`;
- `enforcementActionAllowed: false`;
- `userAccusationAllowed: false`;
- `providerConnectionClaimAllowed: false`;
- `completedActionClaimAllowed: false`;
- `providerContactAllowed: false`;
- `communicationExecutionAllowed: false`;
- `locationSharingAllowed: false`;
- `paymentExecutionAllowed: false`;
- `marketplaceTransactionAllowed: false`;
- `identityAccountProfileActionAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserRiskEngineMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The guard confirms the W3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Trust/Fraud/Risk Detection runtime is active;
- no Trust/Fraud/Risk Detection review surface appears from Sprint W artifacts;
- no live risk engine or fraud scoring runtime is loaded by Sprint W artifacts;
- no risk signal retrieval runtime is performed by Sprint W artifacts;
- no typed or voice route is changed by Sprint W artifacts;
- no account restriction, marketplace restriction, payment hold, transaction block, identity decision, role authorization decision, enforcement action, or user accusation is possible from Sprint W artifacts;
- no provider contact, communications execution, location sharing, payment execution, marketplace transaction, account/profile mutation, or native bridge dispatch is possible from Sprint W artifacts;
- no policy, confirmation, or permission bypass is possible from Sprint W artifacts;
- no audit event is written by Sprint W artifacts;
- existing policy, safety, marketplace, identity, health access, telehealth camera handoff, call confirmation, map permission, workforce, and agriculture behavior remains separate from Trust/Fraud/Risk Detection runtime authority.

## Browser Validation Implication

Sprint W4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Trust/Fraud/Risk Detection artifacts, renders Trust/Fraud/Risk Detection UI, activates a live risk engine, changes typed routing, changes voice routing, changes marketplace/payment/identity behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk Standard User prompt checks;
- risk/fraud/trust prompt boundary checks;
- marketplace/payment/account/identity boundary checks;
- provider/contact/location boundary checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint W4 QA must verify:

- this regression guard exists;
- W1, W2, W3, and Phase 75 artifacts exist;
- runtime files do not load Trust/Fraud/Risk Detection contracts, feature flags, fixtures, or harnesses;
- W2 default and unsafe-attempt behavior remains no-execution;
- W3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint W5 - Trust/Fraud/Risk Detection Lane Closeout`

Sprint W5 should close the Trust/Fraud/Risk Detection readiness lane, summarize W1-W4, and recommend the next safe inert lane without activating runtime behavior.
