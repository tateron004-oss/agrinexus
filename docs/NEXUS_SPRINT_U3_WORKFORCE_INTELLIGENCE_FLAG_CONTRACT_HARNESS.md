# Nexus Sprint U3 - Workforce Intelligence Flag Contract Harness

Current base: `ff9fc09e91099d577c09f27e320dea5ff2816a42`

Sprint U3 adds fixture, harness, documentation, and QA only for the Workforce Intelligence feature flag contract. It does not load the feature flag into Standard User runtime, render UI, change workforce routes, retrieve sources, submit applications, enroll users, issue credentials, contact employers or programs, request permissions, write storage, write audit events, make eligibility claims, or execute actions.

## Artifacts

- `fixtures/nexus/workforce-intelligence-feature-flags.json`
- `scripts/nexus-sprint-u3-workforce-intelligence-flag-contract-harness.js`
- `scripts/nexus-sprint-u3-workforce-intelligence-flag-contract-harness-qa.js`

## Fixture Coverage

The fixture set covers:

- default-off behavior;
- flag-on review-only visibility;
- unsafe authority attempts;
- enabled without visible permission.

Every fixture must preserve:

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

## Runtime Boundary

The harness may be executed by deterministic QA only. It must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Prohibited Behavior

Sprint U3 must not add runtime imports, script tags, event handlers, workforce source retrieval, live workforce advisor execution, job application submission, referral submission, training enrollment, credential or certificate issuance, eligibility claims, employer or program contact, provider handoff, payments, marketplace transactions, transportation dispatch, emergency dispatch, location sharing, communications execution, permissions, storage writes, network calls, audit writes, native bridge dispatch, or execution authority.

## QA Expectations

Sprint U3 QA must verify that the fixture set validates successfully, contains an unsafe authority attempt, keeps every protected field false, keeps `noExecution: true`, and remains absent from Standard User runtime.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint U4 - Workforce Intelligence Runtime Absence Regression Guard`
