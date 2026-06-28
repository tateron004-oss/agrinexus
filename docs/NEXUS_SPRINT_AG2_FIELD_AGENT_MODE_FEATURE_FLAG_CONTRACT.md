# Nexus Sprint AG2 - Field Agent Mode Feature Flag Contract

Current base: `ec1b677be1e527b2928c258c5ada35ccea607f5a`

Sprint AG2 adds a standalone inert contract module and deterministic QA only. It defines a default-off feature flag boundary for future Field Agent Mode visibility, but it does not import Field Agent Mode runtime, render UI, retrieve field/offline/case/task/location/camera/microphone data, connect providers, contact supervisors or field partners, submit offline capture, dispatch field agents, create cases, assign tasks, share location, activate camera or microphone, process payments, write storage, write audit events, request permissions, make live field claims, give medical advice, diagnose, prescribe, dispatch transportation, dispatch emergency help, or execute actions.

## Feature Flag Name

`NEXUS_FIELD_AGENT_MODE_VISIBLE_ENABLED`

This name is reserved for future controlled, permissioned Field Agent Mode visibility work. It is not field dispatch authority, offline capture authority, case authority, task authority, location authority, camera authority, microphone authority, provider authority, supervisor authority, field partner authority, communications authority, transportation authority, emergency authority, medical authority, marketplace authority, identity authority, user consent, audit approval, provider confirmation, supervisor confirmation, field partner confirmation, human review approval, or execution approval.

## Default State

The feature flag defaults to:

- `enabled: false`;
- `visibleUiAllowed: false`;
- `fieldAgentModeReviewAllowed: false`;
- `fieldSupportPreviewAllowed: false`;
- `fieldSourcePreviewAllowed: false`;
- `offlineCapturePreviewAllowed: false`;
- `surveyPreviewAllowed: false`;
- `caseIntakePreviewAllowed: false`;
- `taskAssignmentPreviewAllowed: false`;
- `supervisorDirectoryPreviewAllowed: false`;
- `programDirectoryPreviewAllowed: false`;
- `locationBoundaryPreviewAllowed: false`;
- `cameraBoundaryPreviewAllowed: false`;
- `microphoneBoundaryPreviewAllowed: false`;
- `identityBoundaryPreviewAllowed: false`;
- `communicationsBoundaryPreviewAllowed: false`;
- `transportationBoundaryPreviewAllowed: false`;
- `emergencyBoundaryPreviewAllowed: false`;
- `fieldAgentModeRuntimeAllowed: false`;
- `liveFieldAgentModeRuntimeAllowed: false`;
- `fieldConnectorRuntimeAllowed: false`;
- `fieldSourceConnectorRuntimeAllowed: false`;
- `offlineCaptureConnectorRuntimeAllowed: false`;
- `surveyConnectorRuntimeAllowed: false`;
- `caseIntakeConnectorRuntimeAllowed: false`;
- `taskAssignmentConnectorRuntimeAllowed: false`;
- `locationConnectorRuntimeAllowed: false`;
- `cameraConnectorRuntimeAllowed: false`;
- `microphoneConnectorRuntimeAllowed: false`;
- `providerConnectorRuntimeAllowed: false`;
- `communicationsConnectorRuntimeAllowed: false`;
- `transportationConnectorRuntimeAllowed: false`;
- `healthConnectorRuntimeAllowed: false`;
- `marketplaceConnectorRuntimeAllowed: false`;
- `fieldDispatchAllowed: false`;
- `offlineCaptureSubmissionAllowed: false`;
- `caseCreationAllowed: false`;
- `taskAssignmentAllowed: false`;
- `providerContactAllowed: false`;
- `supervisorContactAllowed: false`;
- `programPartnerContactAllowed: false`;
- `locationSharingAllowed: false`;
- `cameraActivationAllowed: false`;
- `microphoneActivationAllowed: false`;
- `paymentExecutionAllowed: false`;
- `marketplaceTransactionAllowed: false`;
- `identityAccountProfileActionAllowed: false`;
- `communicationsExecutionAllowed: false`;
- `transportationDispatchAllowed: false`;
- `emergencyDispatchAllowed: false`;
- `medicalRecordsFhirRuntimeAllowed: false`;
- `medicalAdviceAllowed: false`;
- `diagnosisClaimAllowed: false`;
- `prescriptionInstructionAllowed: false`;
- `policyBypassAllowed: false`;
- `confirmationBypassAllowed: false`;
- `permissionBypassAllowed: false`;
- `firstTurnExecutionAllowed: false`;
- `laterTurnExecutionAllowed: false`;
- `standardUserFieldAgentModeMutationAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `auditWriteAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

## Contract Module

Sprint AG2 adds:

`public/nexus-field-agent-mode-feature-flag.js`

The module exports:

- `FIELD_AGENT_MODE_FEATURE_FLAG_NAME`;
- `DEFAULT_FIELD_AGENT_MODE_FEATURE_FLAG_STATE`;
- `PROTECTED_FIELD_AGENT_MODE_FLAG_FIELDS`;
- `normalizeFieldAgentModeFeatureFlagState`;
- `isFieldAgentModeVisibleFeatureEnabled`.

The normalizer may represent a future visible-only test state when both `enabled` and `visibleUiAllowed` are explicitly true. Every protected authority field remains forced to false, and `noExecution` remains true.

## Important Boundary

The feature flag does not authorize:

- Field Agent Mode runtime activation;
- live field, field source, offline capture, survey, case intake, task assignment, location, camera, microphone, provider, communications, transportation, health, marketplace, emergency, or FHIR connector behavior;
- medical advice;
- diagnosis claims;
- prescription instructions;
- field dispatch;
- offline capture submission;
- case creation;
- task assignment;
- provider, supervisor, program partner, field partner, transportation partner, or logistics partner contact;
- communications execution;
- location sharing;
- camera activation;
- microphone activation;
- payment execution;
- marketplace transaction execution;
- identity, account, or profile actions;
- transportation dispatch;
- emergency dispatch;
- policy, confirmation, or permission bypass;
- backend writes;
- storage writes;
- network calls;
- audit writes;
- execution authority.

## Relationship To Sprint AG1

Sprint AG1 defines the runtime activation readiness gate. Sprint AG2 adds a default-off flag contract that preserves the AG1 gate. A future visible feature must still satisfy source, consent, role, permission, approval, supervisor/provider/field partner confirmation, human review, audit, fallback, browser validation, and deterministic QA requirements before activation.

## Runtime Absence Requirements

Sprint AG2 must not load or activate:

- `public/nexus-field-agent-mode-feature-flag.js`;
- `NEXUS_FIELD_AGENT_MODE_VISIBLE_ENABLED`;
- `NexusFieldAgentModeFeatureFlagContract`;
- `normalizeFieldAgentModeFeatureFlagState`;
- `isFieldAgentModeVisibleFeatureEnabled`;
- any Field Agent Mode runtime;
- any live field, field source, offline capture, survey, case intake, task assignment, location, camera, microphone, provider, communications, transportation, health, marketplace, emergency, or FHIR runtime;
- any provider, supervisor, program partner, field partner, transportation partner, or logistics partner contact runtime;
- any location, camera, microphone, payment, marketplace transaction, identity, account, or communications execution runtime;
- Sprint AG QA scripts.

These artifacts must remain absent from:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## QA Expectations

Sprint AG2 QA must verify:

- the feature flag contract exists;
- the flag name is reserved and default-off;
- all protected authority fields default to false;
- unsafe authority attempts normalize back to false;
- visible-only test state does not grant execution authority;
- the module does not include DOM, storage, network, provider, permission, navigation, native bridge, workflow, health execution, telehealth execution, marketplace transaction, field dispatch, offline capture, case creation, task assignment, provider contact, supervisor contact, location, camera, microphone, payment, transportation, emergency, or execution APIs;
- Standard User runtime does not load the AG2 module;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint AG3 - Field Agent Mode Flag Contract Harness`

Sprint AG3 should add deterministic fixtures proving default-off, visible-only, and unsafe authority attempts remain no-execution.
