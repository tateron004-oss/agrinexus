# Nexus Sprint S3 - Farmer Agriculture Intelligence Flag Contract Harness

Current base: `ecb2851a7662e33621917025373ab4edd356c1b3`

Sprint S3 adds fixture, harness, documentation, and QA only for the Farmer Agriculture Intelligence feature flag contract. It does not load the feature flag into Standard User runtime, render UI, call providers, retrieve sources, request permissions, write storage, write audit events, or execute actions.

## Artifacts

- `fixtures/nexus/farmer-agriculture-intelligence-feature-flags.json`
- `scripts/nexus-sprint-s3-farmer-agriculture-intelligence-flag-contract-harness.js`
- `scripts/nexus-sprint-s3-farmer-agriculture-intelligence-flag-contract-harness-qa.js`

## Fixture Coverage

The fixture set covers:

- default-off behavior;
- flag-on review-only visibility;
- unsafe authority attempts;
- enabled without visible permission.

Every fixture must preserve:

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

## Runtime Boundary

The harness may be executed by deterministic QA only. It must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Prohibited Behavior

Sprint S3 must not add runtime imports, script tags, event handlers, source retrieval, live agriculture advisor execution, chemical instructions, provider handoff, marketplace transactions, payments, location sharing, permissions, storage writes, network calls, audit writes, native bridge dispatch, or execution authority.

## QA Expectations

Sprint S3 QA must verify that the fixture set validates successfully, contains an unsafe authority attempt, keeps every protected field false, keeps `noExecution: true`, and remains absent from Standard User runtime.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint S4 - Farmer Agriculture Intelligence Runtime Absence Regression Guard`
