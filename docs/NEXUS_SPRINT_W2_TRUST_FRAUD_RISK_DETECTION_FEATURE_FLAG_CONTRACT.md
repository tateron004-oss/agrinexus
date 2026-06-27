# Nexus Sprint W2 - Trust/Fraud/Risk Detection Feature Flag Contract

Current base: `71a91fbdb637e0ce3a19dfc862ea0abf9bde56ee`

Sprint W2 adds a standalone inert contract module and deterministic QA only. It defines a default-off feature flag boundary for future Trust/Fraud/Risk Detection visibility, but it does not import a risk engine, render UI, score users, accuse users, restrict accounts, block transactions, hold payments, enforce marketplace rules, contact providers, write storage, write audit events, request permissions, make provider claims, or execute actions.

## Feature Flag Name

`NEXUS_TRUST_FRAUD_RISK_DETECTION_VISIBLE_ENABLED`

This name is reserved for future controlled, permissioned risk-signal visibility work. It is not risk authority, fraud determination authority, enforcement authority, account authority, marketplace restriction authority, payment hold authority, identity authority, user consent, audit approval, human review approval, or execution approval.

## Default State

The feature flag defaults to:

- `enabled: false`;
- `visibleUiAllowed: false`;
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

## Contract Module

Sprint W2 adds:

`public/nexus-trust-fraud-risk-detection-feature-flag.js`

The module exports:

- `TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_NAME`;
- `DEFAULT_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_STATE`;
- `PROTECTED_TRUST_FRAUD_RISK_DETECTION_FLAG_FIELDS`;
- `normalizeTrustFraudRiskDetectionFeatureFlagState`;
- `isTrustFraudRiskDetectionVisibleFeatureEnabled`.

The normalizer may represent a future visible-only test state when both `enabled` and `visibleUiAllowed` are explicitly true. Every protected authority field remains forced to false, and `noExecution` remains true.

## Important Boundary

The feature flag does not authorize:

- Trust/Fraud/Risk Detection runtime activation;
- live risk engine behavior;
- fraud scoring runtime;
- risk signal retrieval runtime;
- automated scoring;
- hidden scoring;
- final fraud determination;
- account restriction;
- marketplace restriction;
- payment hold;
- transaction block;
- identity or role authorization decision;
- enforcement action;
- user accusation;
- provider connection claims;
- completed action claims;
- provider contact;
- communication execution;
- location sharing;
- payment execution;
- marketplace transaction execution;
- identity, account, or profile actions;
- policy, confirmation, or permission bypass;
- backend writes;
- storage writes;
- network calls;
- audit writes;
- execution authority.

## Relationship To Sprint W1

Sprint W1 defines the runtime activation readiness gate. Sprint W2 adds a default-off flag contract that preserves the W1 gate. A future visible feature must still satisfy source, consent, permission, approval, human review, audit, fallback, browser validation, and deterministic QA requirements before activation.

## Runtime Absence Requirements

Sprint W2 must not load or activate:

- `public/nexus-trust-fraud-risk-detection-feature-flag.js`;
- `NEXUS_TRUST_FRAUD_RISK_DETECTION_VISIBLE_ENABLED`;
- `normalizeTrustFraudRiskDetectionFeatureFlagState`;
- `isTrustFraudRiskDetectionVisibleFeatureEnabled`;
- any Trust/Fraud/Risk Detection runtime;
- any live risk engine runtime;
- any fraud scoring runtime;
- any risk signal retrieval runtime;
- any enforcement runtime;
- any account restriction runtime;
- any marketplace restriction runtime;
- any payment hold runtime;
- Sprint W QA scripts.

These artifacts must remain absent from:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## QA Expectations

Sprint W2 QA must verify:

- the feature flag contract exists;
- the flag name is reserved and default-off;
- all protected authority fields default to false;
- unsafe authority attempts normalize back to false;
- visible-only test state does not grant execution authority;
- the module does not include DOM, storage, network, provider, permission, navigation, native bridge, workflow, scoring, enforcement, or execution APIs;
- Standard User runtime does not load the W2 module;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint W3 - Trust/Fraud/Risk Detection Flag Contract Harness`

Sprint W3 should add deterministic fixtures proving default-off, visible-only, and unsafe authority attempts remain no-execution.
