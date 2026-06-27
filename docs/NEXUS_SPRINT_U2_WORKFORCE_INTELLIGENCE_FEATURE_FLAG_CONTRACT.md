# Nexus Sprint U2 - Workforce Intelligence Feature Flag Contract

Current base: `b72f1fae09eca081b6076028bdbb71a8eb99f48c`

Sprint U2 adds a standalone inert contract module and deterministic QA only. It defines a default-off feature flag boundary for future Workforce Intelligence visibility, but it does not import a workforce runtime, render UI, change job or training routes, submit applications, enroll users, issue credentials, contact employers or providers, write storage, write audit events, request permissions, make eligibility claims, or execute actions.

## Feature Flag Name

`NEXUS_WORKFORCE_INTELLIGENCE_VISIBLE_ENABLED`

This name is reserved for future controlled, permissioned visibility work. It is not runtime authority, source authority, partner authorization, application approval, referral approval, credential approval, payment approval, user consent, audit approval, or execution approval.

## Default State

The feature flag defaults to:

- `enabled: false`;
- `visibleUiAllowed: false`;
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

## Contract Module

Sprint U2 adds:

`public/nexus-workforce-intelligence-feature-flag.js`

The module exports:

- `WORKFORCE_INTELLIGENCE_FEATURE_FLAG_NAME`;
- `DEFAULT_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_STATE`;
- `PROTECTED_WORKFORCE_INTELLIGENCE_FLAG_FIELDS`;
- `normalizeWorkforceIntelligenceFeatureFlagState`;
- `isWorkforceIntelligenceVisibleFeatureEnabled`.

The normalizer may represent a future visible-only test state when both `enabled` and `visibleUiAllowed` are explicitly true. Every protected authority field remains forced to false, and `noExecution` remains true.

## Important Boundary

The feature flag does not authorize:

- workforce runtime activation;
- live workforce advisor behavior;
- source retrieval runtime;
- job application submission;
- referral submission;
- training enrollment execution;
- credential or certificate issuance;
- eligibility claims;
- employer, provider, or workforce program contact;
- provider connection claims;
- completed action claims;
- payment execution;
- marketplace transactions;
- identity, account, or profile actions;
- location sharing;
- transportation dispatch;
- emergency dispatch;
- call, message, WhatsApp, Telegram, SMS, or email execution;
- policy, confirmation, or permission bypass;
- backend writes;
- storage writes;
- network calls;
- audit writes;
- execution authority.

## Relationship To Sprint U1

Sprint U1 defines the runtime activation readiness gate. Sprint U2 adds a default-off flag contract that preserves the U1 gate. A future visible feature must still satisfy source, consent, permission, approval, audit, fallback, browser validation, and deterministic QA requirements before activation.

## Runtime Absence Requirements

Sprint U2 must not load or activate:

- `public/nexus-workforce-intelligence-feature-flag.js`;
- `NEXUS_WORKFORCE_INTELLIGENCE_VISIBLE_ENABLED`;
- `normalizeWorkforceIntelligenceFeatureFlagState`;
- `isWorkforceIntelligenceVisibleFeatureEnabled`;
- any Workforce Intelligence runtime;
- any live workforce advisor runtime;
- any source retrieval runtime;
- any provider execution runtime;
- Sprint U QA scripts.

These artifacts must remain absent from:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## QA Expectations

Sprint U2 QA must verify:

- the feature flag contract exists;
- the flag name is reserved and default-off;
- all protected authority fields default to false;
- unsafe authority attempts normalize back to false;
- visible-only test state does not grant execution authority;
- the module does not include DOM, storage, network, provider, permission, navigation, native bridge, workflow, or execution APIs;
- Standard User runtime does not load the U2 module;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint U3 - Workforce Intelligence Flag Contract Harness`

Sprint U3 should add deterministic fixtures proving default-off, visible-only, and unsafe authority attempts remain no-execution.
