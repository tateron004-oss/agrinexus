# Nexus Sprint S4 - Farmer Agriculture Intelligence Runtime Absence Regression Guard

Current base: `a1f259632adfa61aa0c672d9b918440e19f41a54`

Sprint S4 adds a deterministic regression guard proving the Farmer Agriculture Intelligence readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, agriculture advisor execution, source retrieval runtime, live extension contact, marketplace transactions, payment execution, location sharing, storage writes, backend writes, provider execution, or action authority.

## Purpose

Prevent accidental drift where Farmer Agriculture Intelligence readiness artifacts become runtime activation.

Sprint S4 protects:

- S1 Farmer Agriculture Intelligence runtime activation readiness gate;
- S2 Farmer Agriculture Intelligence feature flag contract;
- S3 Farmer Agriculture Intelligence flag contract harness;
- Phase 71 Farmer Agriculture Intelligence readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-farmer-agriculture-intelligence-readiness-contract.js`;
- `public/nexus-farmer-agriculture-intelligence-feature-flag.js`;
- `scripts/nexus-sprint-s3-farmer-agriculture-intelligence-flag-contract-harness.js`;
- `fixtures/nexus/farmer-agriculture-intelligence-feature-flags.json`;
- Sprint S QA scripts.

The guard checks exact Farmer Agriculture Intelligence artifact names and helpers. It intentionally does not ban generic agriculture words such as `farmer`, `farm`, `crop`, `livestock`, `soil`, `pest`, `weather`, `market`, `AgriTrade`, `extension`, or `agriculture`, because existing source-backed agriculture, marketplace, learning, and workflow behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint S artifacts must not introduce:

- active farmer agriculture intelligence runtime;
- live agriculture advisor;
- source retrieval runtime;
- unsourced agriculture advice;
- chemical application instruction execution;
- diagnosis claims;
- marketplace transaction execution;
- payment execution;
- provider or extension contact;
- live weather or pest claim without a source trace;
- location sharing;
- crop insurance filing;
- standard user agriculture brain mutation;
- source-backed answer claims without sources;
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
- health, medical, pharmacy, prescription, or FHIR execution;
- appointment scheduling;
- transportation dispatch;
- emergency dispatch;
- external navigation;
- real pending action creation;
- execution authority.

## Required Contract Invariants

The guard confirms the S2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
- `agricultureReviewAllowed: false`;
- `sourceBackedGuidancePreviewAllowed: false`;
- `farmerSummaryPreviewAllowed: false`;
- `extensionEscalationPreviewAllowed: false`;
- `agricultureRuntimeAllowed: false`;
- `liveAgricultureAdvisorAllowed: false`;
- `sourceRetrievalRuntimeAllowed: false`;
- `unsourcedAgricultureAdviceAllowed: false`;
- `chemicalApplicationInstructionAllowed: false`;
- `diagnosisClaimAllowed: false`;
- `marketplaceTransactionAllowed: false`;
- `paymentExecutionAllowed: false`;
- `providerOrExtensionContactAllowed: false`;
- `weatherOrPestLiveClaimAllowed: false`;
- `locationSharingAllowed: false`;
- `cropInsuranceFilingAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserAgricultureBrainMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The guard confirms the S3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Farmer Agriculture Intelligence runtime is active;
- no Farmer Agriculture Intelligence review surface appears from Sprint S artifacts;
- no live agriculture advisor is loaded by Sprint S artifacts;
- no source retrieval runtime is performed by Sprint S artifacts;
- no typed or voice route is changed by Sprint S artifacts;
- no unsourced guidance, diagnosis, chemical application, marketplace transaction, payment, provider contact, extension contact, crop insurance filing, location sharing, or weather/pest live claim is possible from Sprint S artifacts;
- no policy, confirmation, or permission bypass is possible from Sprint S artifacts;
- no audit event is written by Sprint S artifacts;
- existing source-backed agriculture preview, AgriTrade, learning, workflow, health, telehealth, map, call, confirmation, and permission behavior remains separate from Farmer Agriculture Intelligence runtime authority.

## Browser Validation Implication

Sprint S4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Farmer Agriculture Intelligence artifacts, renders Farmer Agriculture Intelligence UI, activates a live agriculture advisor, changes typed routing, changes voice routing, changes source-backed answer behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- farmer agriculture prompt checks;
- crop issue prompt checks;
- AgriTrade boundary checks;
- extension escalation boundary checks;
- high-risk prompt checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint S4 QA must verify:

- this regression guard exists;
- S1, S2, S3, and Phase 71 artifacts exist;
- runtime files do not load Farmer Agriculture Intelligence contracts, feature flags, fixtures, or harnesses;
- S2 default and unsafe-attempt behavior remains no-execution;
- S3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint S5 - Farmer Agriculture Intelligence Lane Closeout`

Sprint S5 should close the Farmer Agriculture Intelligence readiness lane, summarize S1-S4, and recommend the next safe inert lane without activating runtime behavior.
