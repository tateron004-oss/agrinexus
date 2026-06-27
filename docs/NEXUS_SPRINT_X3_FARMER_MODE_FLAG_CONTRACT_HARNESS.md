# Nexus Sprint X3 - Farmer Mode Flag Contract Harness

Current base: `40e42444eb91490aa590d32fe85303d21fd2b4f3`

Sprint X3 adds fixture, harness, documentation, and QA only. It does not load Farmer Mode into Standard User runtime, render UI, retrieve agriculture or market sources, give unsourced agronomic advice, diagnose crops, recommend chemical applications, execute marketplace transactions, process payments, contact buyers, contact sellers, contact providers, dispatch transportation, dispatch emergency help, share location, activate camera or microphone, write storage, write audit events, request permissions, make provider claims, or execute actions.

## Added Artifacts

- `fixtures/nexus/farmer-mode-feature-flags.json`
- `scripts/nexus-sprint-x3-farmer-mode-flag-contract-harness.js`

## Fixture Coverage

The fixture set covers:

- default-off state;
- flag-on visible-only local/test state;
- unsafe authority attempt;
- enabled without visible permission.

Every fixture must preserve:

- `farmerModeReviewAllowed: false`;
- `sourceBackedFarmerGuidancePreviewAllowed: false`;
- `farmerProfileSummaryPreviewAllowed: false`;
- `cropFieldSupportPreviewAllowed: false`;
- `agritradeReviewPreviewAllowed: false`;
- `extensionEscalationPreviewAllowed: false`;
- `farmerModeRuntimeAllowed: false`;
- `liveFarmerModeRuntimeAllowed: false`;
- `agricultureConnectorRuntimeAllowed: false`;
- `marketSourceRetrievalRuntimeAllowed: false`;
- `unsourcedAgronomicAdviceAllowed: false`;
- `diagnosisClaimAllowed: false`;
- `chemicalApplicationInstructionAllowed: false`;
- `marketplaceTransactionAllowed: false`;
- `paymentExecutionAllowed: false`;
- `buyerSellerContactAllowed: false`;
- `providerOrExtensionContactAllowed: false`;
- `transportationDispatchAllowed: false`;
- `emergencyDispatchAllowed: false`;
- `locationSharingAllowed: false`;
- `cameraActivationAllowed: false`;
- `microphoneActivationAllowed: false`;
- `medicalPharmacyExecutionAllowed: false`;
- `identityAccountProfileActionAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserFarmerModeMutationAllowed: false`;
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

The harness must not include DOM, storage, network, provider handoff, permissions, navigation, native bridge, workflow, marketplace, payment, location, camera, microphone, dispatch, or execution APIs.

## Relationship To Sprint X2

Sprint X2 defines the default-off Farmer Mode feature flag contract. Sprint X3 proves the contract with deterministic fixtures, including unsafe authority attempts that must normalize back to visible-only/no-execution.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint X4 - Farmer Mode Runtime Absence Regression Guard`
