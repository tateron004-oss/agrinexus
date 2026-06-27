# Nexus Sprint U4 - Workforce Intelligence Runtime Absence Regression Guard

Current base: `073e032c10409527ae3ca86f6b9e2d6f4b99fa85`

Sprint U4 adds a deterministic regression guard proving the Workforce Intelligence readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, workforce advisor execution, source retrieval runtime, job application submission, referral submission, training enrollment, credential or certificate issuance, eligibility claims, employer or program contact, payment execution, marketplace transactions, transportation dispatch, emergency dispatch, location sharing, communications execution, storage writes, backend writes, provider execution, or action authority.

## Purpose

Prevent accidental drift where Workforce Intelligence readiness artifacts become runtime activation.

Sprint U4 protects:

- U1 Workforce Intelligence runtime activation readiness gate;
- U2 Workforce Intelligence feature flag contract;
- U3 Workforce Intelligence flag contract harness;
- Phase 73 Workforce Intelligence readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-workforce-intelligence-readiness-contract.js`;
- `public/nexus-workforce-intelligence-feature-flag.js`;
- `scripts/nexus-sprint-u3-workforce-intelligence-flag-contract-harness.js`;
- `fixtures/nexus/workforce-intelligence-feature-flags.json`;
- Sprint U QA scripts.

The guard checks exact Workforce Intelligence artifact names and helpers. It intentionally does not ban generic workforce words such as `workforce`, `training`, `job`, `career`, `learning`, `skills`, `pathway`, `provider`, `program`, or `support`, because existing workforce, learning, and Standard User guidance behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint U artifacts must not introduce:

- active workforce intelligence runtime;
- live workforce advisor;
- source retrieval runtime;
- job application submission;
- referral submission;
- training enrollment execution;
- credential issuance;
- certificate issuance;
- eligibility claims;
- employer, provider, or workforce program contact;
- provider connection claims;
- completed action claims;
- standard user workforce brain mutation;
- source-backed workforce claims without sources;
- stale data claims without freshness labels;
- confidence-free source-backed claims;
- unsupported live data claims;
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
- payment execution;
- marketplace transactions;
- transportation dispatch;
- emergency dispatch;
- location sharing;
- account or profile mutation;
- external navigation;
- real pending action creation;
- execution authority.

## Required Contract Invariants

The guard confirms the U2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
- `workforcePathwayReviewAllowed: false`;
- `sourceBackedWorkforceGuidancePreviewAllowed: false`;
- `trainingPathwaySummaryPreviewAllowed: false`;
- `jobPathwaySummaryPreviewAllowed: false`;
- `providerEscalationPreviewAllowed: false`;
- `workforceRuntimeAllowed: false`;
- `liveWorkforceAdvisorAllowed: false`;
- `sourceRetrievalRuntimeAllowed: false`;
- `jobApplicationSubmissionAllowed: false`;
- `referralSubmissionAllowed: false`;
- `trainingEnrollmentExecutionAllowed: false`;
- `credentialIssuanceAllowed: false`;
- `certificateIssuanceAllowed: false`;
- `eligibilityClaimAllowed: false`;
- `employerProviderProgramContactAllowed: false`;
- `providerConnectionClaimAllowed: false`;
- `completedActionClaimAllowed: false`;
- `paymentExecutionAllowed: false`;
- `marketplaceTransactionAllowed: false`;
- `identityAccountProfileActionAllowed: false`;
- `locationSharingAllowed: false`;
- `transportationDispatchAllowed: false`;
- `emergencyDispatchAllowed: false`;
- `communicationExecutionAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserWorkforceBrainMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The guard confirms the U3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Workforce Intelligence runtime is active;
- no Workforce Intelligence review surface appears from Sprint U artifacts;
- no live workforce advisor is loaded by Sprint U artifacts;
- no workforce source retrieval runtime is performed by Sprint U artifacts;
- no typed or voice route is changed by Sprint U artifacts;
- no job application, referral, training enrollment, credential issuance, eligibility claim, employer contact, program contact, provider contact, payment, marketplace transaction, transportation dispatch, emergency dispatch, location sharing, communication, or account/profile mutation is possible from Sprint U artifacts;
- no policy, confirmation, or permission bypass is possible from Sprint U artifacts;
- no audit event is written by Sprint U artifacts;
- existing workforce guidance, learning, jobs, agriculture, health access, telehealth camera handoff, call confirmation, map permission, and marketplace behavior remains separate from Workforce Intelligence runtime authority.

## Browser Validation Implication

Sprint U4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Workforce Intelligence artifacts, renders Workforce Intelligence UI, activates a live workforce advisor, changes typed routing, changes voice routing, changes job/training behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- workforce prompt checks;
- training prompt checks;
- job application boundary checks;
- referral boundary checks;
- provider contact boundary checks;
- payment and marketplace boundary checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint U4 QA must verify:

- this regression guard exists;
- U1, U2, U3, and Phase 73 artifacts exist;
- runtime files do not load Workforce Intelligence contracts, feature flags, fixtures, or harnesses;
- U2 default and unsafe-attempt behavior remains no-execution;
- U3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint U5 - Workforce Intelligence Lane Closeout`

Sprint U5 should close the Workforce Intelligence readiness lane, summarize U1-U4, and recommend the next safe inert lane without activating runtime behavior.
