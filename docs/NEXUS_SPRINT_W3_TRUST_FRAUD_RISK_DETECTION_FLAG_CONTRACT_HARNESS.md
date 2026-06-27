# Nexus Sprint W3 - Trust/Fraud/Risk Detection Flag Contract Harness

Current base: `c78fdad49efcc1b2bf77950ebf0e4abbad234884`

Sprint W3 adds fixture, harness, documentation, and QA only. It does not load Trust/Fraud/Risk Detection into Standard User runtime, render UI, score users, accuse users, restrict accounts, block transactions, hold payments, enforce marketplace rules, contact providers, write storage, write audit events, request permissions, make provider claims, or execute actions.

## Added Artifacts

- `fixtures/nexus/trust-fraud-risk-detection-feature-flags.json`
- `scripts/nexus-sprint-w3-trust-fraud-risk-detection-flag-contract-harness.js`

## Fixture Coverage

The fixture set covers:

- default-off state;
- flag-on review-only local/test state;
- unsafe authority attempt;
- enabled without visible permission.

Every fixture must preserve:

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

## Runtime Boundary

The harness is a Node QA utility only. It must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

The harness must not include DOM, storage, network, provider handoff, permissions, navigation, native bridge, scoring, enforcement, or execution APIs.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint W4 - Trust/Fraud/Risk Detection Runtime Absence Regression Guard`
