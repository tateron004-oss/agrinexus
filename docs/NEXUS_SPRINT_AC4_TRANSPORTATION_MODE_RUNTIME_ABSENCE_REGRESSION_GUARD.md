# Nexus Sprint AC4 - Transportation Mode Runtime Absence Regression Guard

Current base: `49b476e6985f88dedb1335f5034ded842767d9a0`

Sprint AC4 adds a deterministic regression guard proving the Transportation Mode readiness artifacts remain absent from Standard User runtime. This phase is documentation and QA only. It does not add runtime imports, script tags, UI, Transportation Mode review surfaces, transportation access previews, route readiness previews, provider directory previews, driver directory previews, location consent boundary previews, payment boundary previews, emergency boundary previews, live transportation connector runtime, transportation provider connector runtime, driver connector runtime, dispatch connector runtime, route connector runtime, location connector runtime, clinic connector runtime, telehealth connector runtime, payment connector runtime, appointment scheduling, transportation booking, transportation dispatch, emergency dispatch, medical records/FHIR runtime, medical advice, diagnosis claims, prescription instructions, provider contact, driver contact, location sharing, camera activation, microphone activation, payment execution, marketplace transactions, communications execution, storage writes, backend writes, provider execution, or action authority.

## Purpose

Prevent accidental drift where Transportation Mode readiness artifacts become runtime activation.

Sprint AC4 protects:

- AC1 Transportation Mode runtime activation readiness gate;
- AC2 Transportation Mode feature flag contract;
- AC3 Transportation Mode flag contract harness;
- Phase 81 Transportation Mode readiness contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-transportation-mode-readiness-contract.js`;
- `public/nexus-transportation-mode-feature-flag.js`;
- `scripts/nexus-sprint-ac3-transportation-mode-flag-contract-harness.js`;
- `fixtures/nexus/transportation-mode-feature-flags.json`;
- Sprint AC QA scripts.

The guard checks exact Transportation Mode artifact names and helpers. It intentionally does not ban generic health, telehealth, clinic, provider, driver, transportation, route, location, map, workforce, learning, support, marketplace, agriculture, or AgriTrade words, because existing Standard User behavior has separate runtime boundaries that must remain supported.

## Blocked Runtime Behavior

Sprint AC artifacts must not introduce:

- active Transportation Mode runtime;
- live Transportation Mode runtime;
- transportation connector runtime;
- transportation provider connector runtime;
- driver connector runtime;
- dispatch connector runtime;
- route connector runtime;
- location connector runtime;
- clinic connector runtime;
- telehealth connector runtime;
- payment connector runtime;
- appointment scheduling runtime;
- transportation booking;
- transportation dispatch;
- emergency dispatch;
- medical records/FHIR runtime;
- medical advice;
- diagnosis claims;
- prescription instructions;
- provider contact;
- driver contact;
- location sharing;
- camera activation;
- microphone activation;
- payment execution;
- marketplace transaction execution;
- communications execution;
- identity, account, or profile mutation;
- source-backed claims without sources;
- stale data claims without freshness labels;
- confidence-free source-backed claims;
- unsupported live data claims;
- provider connection claims;
- driver connection claims;
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
- driver handoff;
- native bridge dispatch;
- calls;
- messages;
- WhatsApp, Telegram, SMS, or email sending;
- external navigation;
- real pending action creation;
- execution authority.

## Required Contract Invariants

The guard confirms the AC2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
- `transportationModeReviewAllowed: false`;
- `transportationAccessPreviewAllowed: false`;
- `routeReadinessPreviewAllowed: false`;
- `providerDirectoryPreviewAllowed: false`;
- `driverDirectoryPreviewAllowed: false`;
- `locationConsentBoundaryPreviewAllowed: false`;
- `paymentBoundaryPreviewAllowed: false`;
- `emergencyBoundaryPreviewAllowed: false`;
- `transportationModeRuntimeAllowed: false`;
- `liveTransportationModeRuntimeAllowed: false`;
- `transportationConnectorRuntimeAllowed: false`;
- `transportationProviderConnectorRuntimeAllowed: false`;
- `driverConnectorRuntimeAllowed: false`;
- `dispatchConnectorRuntimeAllowed: false`;
- `routeConnectorRuntimeAllowed: false`;
- `locationConnectorRuntimeAllowed: false`;
- `clinicConnectorRuntimeAllowed: false`;
- `telehealthConnectorRuntimeAllowed: false`;
- `paymentConnectorRuntimeAllowed: false`;
- `appointmentSchedulingAllowed: false`;
- `transportationBookingAllowed: false`;
- `transportationDispatchAllowed: false`;
- `emergencyDispatchAllowed: false`;
- `medicalRecordsFhirRuntimeAllowed: false`;
- `medicalAdviceAllowed: false`;
- `diagnosisClaimAllowed: false`;
- `prescriptionInstructionAllowed: false`;
- `providerContactAllowed: false`;
- `driverContactAllowed: false`;
- `locationSharingAllowed: false`;
- `cameraActivationAllowed: false`;
- `microphoneActivationAllowed: false`;
- `paymentExecutionAllowed: false`;
- `marketplaceTransactionAllowed: false`;
- `identityAccountProfileActionAllowed: false`;
- `communicationsExecutionAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserTransportationModeMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The guard confirms the AC3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Transportation Mode runtime is active;
- no Transportation Mode review surface appears from Sprint AC artifacts;
- no live transportation, provider, driver, dispatch, route, location, clinic, telehealth, payment, emergency, or FHIR connector runtime is loaded by Sprint AC artifacts;
- no typed or voice route is changed by Sprint AC artifacts;
- no medical advice, diagnosis claim, prescription instruction, provider contact, driver contact, appointment scheduling, transportation booking, transportation dispatch, emergency dispatch, location sharing, camera activation, microphone activation, payment execution, marketplace transaction, communications execution, or account/profile mutation is possible from Sprint AC artifacts;
- no policy, confirmation, or permission bypass is possible from Sprint AC artifacts;
- no audit event is written by Sprint AC artifacts;
- existing health access, telehealth camera handoff, call confirmation, map permission, learning, workforce, agriculture, AgriTrade browsing, and Standard User behavior remains separate from Transportation Mode runtime authority.

## Browser Validation Implication

Sprint AC4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Transportation Mode artifacts, renders Transportation Mode UI, activates live connectors, changes typed routing, changes voice routing, changes provider/driver/contact/location/camera/microphone/payment/emergency behavior, writes audit events, changes permission prompts, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk Standard User prompt checks;
- Transportation Mode boundary checks;
- health/telehealth/transportation/provider/driver/location/camera/microphone/emergency boundary checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint AC4 QA must verify:

- this regression guard exists;
- AC1, AC2, AC3, and Phase 81 artifacts exist;
- runtime files do not load Transportation Mode contracts, feature flags, fixtures, or harnesses;
- AC2 default and unsafe-attempt behavior remains no-execution;
- AC3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AC5 - Transportation Mode Lane Closeout`

Sprint AC5 should close the Transportation Mode readiness lane, summarize AC1-AC4, and recommend the next safe inert lane without activating runtime behavior.
