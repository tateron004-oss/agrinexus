# Nexus Approval Center Contract - Phase 49

Phase: 49 - Approval center
Roadmap row: `| Phase 49 | Approval center | Review pending actions | approval UI | future | high | action planner | explicit approval | approval QA | no vague confirmation |`
Status: inert approval-center contract and deterministic QA only

## Scope Decision

Phase 49 defines the contract for a future approval center that can review pending actions before any high-impact step is executed. It does not add an approval UI, visible controls, runtime route, pending-action store, provider action, call, message, payment, health action, location sharing, emergency dispatch, marketplace transaction, account mutation, or backend behavior change.

The roadmap mentions an approval UI. This phase prepares the data and safety contract first. A later phase must implement any visible UI only after explicit approval, browser validation, and regression QA.

## Relationship To Current Safety Gates

The current app already has important approval-like boundaries:

- low-risk previews can show `Review options` and `Not now`;
- high-risk call actions are staged through `agentPendingAction`;
- vague confirmations such as `okay` are blocked for high-risk calls;
- explicit confirmations are limited to known terms such as `yes`, `confirm`, and `do it`;
- native call handoff requires confirmed metadata;
- provider handoff links are sanitized and user-clicked;
- controlled-action preview and confirmation prototype layers remain non-executing.

Phase 49 does not replace those gates. It defines the future approval-center contract that must sit above them.

## Contract Artifact

The inert contract lives in:

- `public/nexus-approval-center-contract.js`

It is intentionally not loaded by `public/index.html`, not consumed by `public/app.js`, and not wired by `server.js`.

The module exposes:

- `APPROVAL_CENTER_STATUSES`
- `PENDING_ACTION_CATEGORIES`
- `NO_EXECUTION_DEFAULTS`
- `APPROVAL_CENTER_FIELDS`
- `APPROVAL_REVIEW_GATE_FIELDS`
- `CONFIRMATION_LANGUAGE_GATE_FIELDS`
- `APPROVAL_RECORD_SCHEMA_FIELDS`
- `DEFAULT_APPROVAL_REVIEW_GATE`
- `DEFAULT_CONFIRMATION_LANGUAGE_GATE`
- `APPROVAL_CENTER_CONTRACT`
- `createApprovalCenterContract(...)`

## Approval Statuses

The contract recognizes:

- `not_configured`
- `approval_ui_required`
- `pending_action_source_required`
- `risk_policy_required`
- `confirmation_policy_required`
- `audit_policy_required`
- `consent_policy_required`
- `role_policy_required`
- `sandbox_testing_required`
- `approved_not_live`
- `rejected_or_blocked`
- `inactive`

Invalid statuses fall back to `not_configured`.

## Pending Action Categories

The contract defines:

- `low_risk_review_option`
- `medium_risk_workflow_staging`
- `high_risk_provider_contact`
- `high_risk_communication`
- `high_risk_payment`
- `sensitive_location`
- `sensitive_health`
- `restricted_emergency`
- `restricted_identity`
- `restricted_marketplace_transaction`
- `restricted_approval_boundary`

Invalid categories are filtered out.

## Approval Center Fields

Future approval-center records must account for:

- `approvalCenterId`
- `sourceOwner`
- `approvalStatus`
- `pendingActionCategories`
- `supportedSurfaces`
- `supportedLanguages`
- `riskPolicyStatus`
- `confirmationPolicyStatus`
- `auditPolicyStatus`
- `consentPolicyStatus`
- `rolePolicyStatus`
- `freshnessModel`
- `allowedResponseStates`
- `approvalReviewGate`
- `confirmationLanguageGate`
- `approvalRecordSchema`
- `auditRequirements`
- `approvalUiEnabled`
- `pendingActionStoreEnabled`
- `runtimeApprovalAuthorityEnabled`
- `providerExecutionEnabled`
- `paymentExecutionEnabled`
- `emergencyDispatchEnabled`
- `liveActionEnabled`
- `noExecution`

## Approval Review Gate

The approval review gate requires:

- `requiresPendingAction`
- `requiresRiskClassification`
- `requiresExplicitApproval`
- `requiresConfirmationPolicy`
- `requiresAuditPolicy`
- `requiresConsentPolicy`
- `requiresRolePolicy`
- `requiresNoVagueConfirmation`
- `requiresCancellationPath`
- `requiresNoFirstTurnExecution`

It forces these to false:

- `allowsRuntimeApprovalAuthority`
- `allowsProviderExecution`
- `allowsPaymentExecution`
- `allowsEmergencyDispatch`
- `allowsExternalNavigation`

## Confirmation Language Gate

The language gate requires:

- `requiresActionSummary`
- `requiresTargetSummary`
- `requiresProviderSummary`
- `requiresConsequenceSummary`
- `requiresDataSharedSummary`
- `requiresAllowedConfirmations`
- `requiresBlockedConfirmations`
- `requiresCancelOption`
- `requiresNoGenericContinue`

It blocks:

- `blocksOkay`
- `blocksSure`
- `blocksMaybe`

It forces these to false:

- `allowsAlwaysApprove`
- `allowsSilentApproval`
- `allowsBulkApproval`

## Approval Record Schema

Future approval records must include:

- `approvalId`
- `pendingActionId`
- `actionType`
- `riskTier`
- `targetSummary`
- `provider`
- `sourceSurface`
- `allowedConfirmations`
- `blockedConfirmations`
- `approvalState`
- `consentState`
- `permissionState`
- `auditRequired`
- `createdAt`
- `expiresAt`

This schema is declarative only. It does not create, save, approve, reject, execute, or transmit actions.

## No-Execution Defaults

The contract defaults every live or high-impact behavior to disabled:

- `approvalUiEnabled: false`
- `pendingActionStoreEnabled: false`
- `runtimeApprovalAuthorityEnabled: false`
- `approvalPersistenceEnabled: false`
- `approvalExportEnabled: false`
- `providerExecutionEnabled: false`
- `callExecutionEnabled: false`
- `messageExecutionEnabled: false`
- `paymentExecutionEnabled: false`
- `healthActionEnabled: false`
- `medicalRecordAccessEnabled: false`
- `locationSharingEnabled: false`
- `marketplaceTransactionEnabled: false`
- `emergencyDispatchEnabled: false`
- `accountMutationEnabled: false`
- `externalNavigationEnabled: false`
- `liveActionEnabled: false`
- `noExecution: true`

It also defaults action-result signals to false:

- `actionApproved: false`
- `actionRejected: false`
- `actionExecuted: false`
- `providerContacted: false`
- `callPlaced: false`
- `messageSent: false`
- `paymentExecuted: false`
- `healthActionPerformed: false`
- `medicalRecordAccessed: false`
- `locationShared: false`
- `marketplaceTransactionCompleted: false`
- `emergencyDispatched: false`
- `accountMutated: false`
- `externalActionExecuted: false`

## Protected Boundaries

Phase 49 must not change:

- Standard User startup
- visible assistant behavior
- low-risk preview behavior
- `Review options` behavior
- controlled-action preview behavior
- call confirmation gate
- native bridge safety
- telehealth/video/camera routing
- marketplace/payment behavior
- health/emergency behavior
- account/identity behavior
- map/location permission behavior
- backend routes
- JSON persistence behavior

## QA

The deterministic QA lives in:

- `scripts/nexus-approval-center-contract-qa.js`

The package alias is:

- `qa:nexus-approval-center-contract`

The QA verifies:

- Phase 49 remains represented in the Nexus 100 roadmap.
- Existing unified confirmation architecture still requires explicit confirmation and blocks vague confirmation.
- The contract exposes required statuses, categories, fields, gates, schema fields, and no-execution defaults.
- Contract factory overrides cannot enable runtime approval authority, provider execution, payment execution, emergency dispatch, external navigation, always-approve, silent approval, or bulk approval.
- The contract is not loaded by `public/index.html`, `public/app.js`, or `server.js`.
- No network, storage, provider, native, permission, navigation, approval UI, or execution behavior is introduced.
- `qa-suite.js all-safe` and `qa-suite.js nexus-workforce` include the focused QA.

## Future Activation Requirements

Before an approval center can become visible or active, a later phase must define and validate:

- approved UI placement
- pending action source model
- role-aware projection
- explicit approval copy
- cancellation and expiry behavior
- audit event creation
- consent requirements
- provider-specific handoff rules
- browser and mobile regression tests
- manual Standard User validation

Until those gates exist, the approval center remains source-ready, policy-ready, and execution-disabled.
