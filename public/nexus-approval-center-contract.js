(function nexusApprovalCenterContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusApprovalCenterContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusApprovalCenterContractModule() {
  const APPROVAL_CENTER_STATUSES = Object.freeze([
    "not_configured",
    "approval_ui_required",
    "pending_action_source_required",
    "risk_policy_required",
    "confirmation_policy_required",
    "audit_policy_required",
    "consent_policy_required",
    "role_policy_required",
    "sandbox_testing_required",
    "approved_not_live",
    "rejected_or_blocked",
    "inactive"
  ]);

  const PENDING_ACTION_CATEGORIES = Object.freeze([
    "low_risk_review_option",
    "medium_risk_workflow_staging",
    "high_risk_provider_contact",
    "high_risk_communication",
    "high_risk_payment",
    "sensitive_location",
    "sensitive_health",
    "restricted_emergency",
    "restricted_identity",
    "restricted_marketplace_transaction",
    "restricted_approval_boundary"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    approvalUiEnabled: false,
    pendingActionStoreEnabled: false,
    runtimeApprovalAuthorityEnabled: false,
    approvalPersistenceEnabled: false,
    approvalExportEnabled: false,
    providerExecutionEnabled: false,
    callExecutionEnabled: false,
    messageExecutionEnabled: false,
    paymentExecutionEnabled: false,
    healthActionEnabled: false,
    medicalRecordAccessEnabled: false,
    locationSharingEnabled: false,
    marketplaceTransactionEnabled: false,
    emergencyDispatchEnabled: false,
    accountMutationEnabled: false,
    externalNavigationEnabled: false,
    liveActionEnabled: false,
    actionApproved: false,
    actionRejected: false,
    actionExecuted: false,
    providerContacted: false,
    callPlaced: false,
    messageSent: false,
    paymentExecuted: false,
    healthActionPerformed: false,
    medicalRecordAccessed: false,
    locationShared: false,
    marketplaceTransactionCompleted: false,
    emergencyDispatched: false,
    accountMutated: false,
    externalActionExecuted: false
  });

  const APPROVAL_CENTER_FIELDS = Object.freeze([
    "approvalCenterId",
    "sourceOwner",
    "approvalStatus",
    "pendingActionCategories",
    "supportedSurfaces",
    "supportedLanguages",
    "riskPolicyStatus",
    "confirmationPolicyStatus",
    "auditPolicyStatus",
    "consentPolicyStatus",
    "rolePolicyStatus",
    "freshnessModel",
    "allowedResponseStates",
    "approvalReviewGate",
    "confirmationLanguageGate",
    "approvalRecordSchema",
    "auditRequirements",
    "approvalUiEnabled",
    "pendingActionStoreEnabled",
    "runtimeApprovalAuthorityEnabled",
    "providerExecutionEnabled",
    "paymentExecutionEnabled",
    "emergencyDispatchEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const APPROVAL_REVIEW_GATE_FIELDS = Object.freeze([
    "requiresPendingAction",
    "requiresRiskClassification",
    "requiresExplicitApproval",
    "requiresConfirmationPolicy",
    "requiresAuditPolicy",
    "requiresConsentPolicy",
    "requiresRolePolicy",
    "requiresNoVagueConfirmation",
    "requiresCancellationPath",
    "requiresNoFirstTurnExecution",
    "allowsRuntimeApprovalAuthority",
    "allowsProviderExecution",
    "allowsPaymentExecution",
    "allowsEmergencyDispatch",
    "allowsExternalNavigation"
  ]);

  const CONFIRMATION_LANGUAGE_GATE_FIELDS = Object.freeze([
    "requiresActionSummary",
    "requiresTargetSummary",
    "requiresProviderSummary",
    "requiresConsequenceSummary",
    "requiresDataSharedSummary",
    "requiresAllowedConfirmations",
    "requiresBlockedConfirmations",
    "requiresCancelOption",
    "requiresNoGenericContinue",
    "blocksOkay",
    "blocksSure",
    "blocksMaybe",
    "allowsAlwaysApprove",
    "allowsSilentApproval",
    "allowsBulkApproval"
  ]);

  const APPROVAL_RECORD_SCHEMA_FIELDS = Object.freeze([
    "approvalId",
    "pendingActionId",
    "actionType",
    "riskTier",
    "targetSummary",
    "provider",
    "sourceSurface",
    "allowedConfirmations",
    "blockedConfirmations",
    "approvalState",
    "consentState",
    "permissionState",
    "auditRequired",
    "createdAt",
    "expiresAt"
  ]);

  const DEFAULT_APPROVAL_REVIEW_GATE = Object.freeze({
    requiresPendingAction: true,
    requiresRiskClassification: true,
    requiresExplicitApproval: true,
    requiresConfirmationPolicy: true,
    requiresAuditPolicy: true,
    requiresConsentPolicy: true,
    requiresRolePolicy: true,
    requiresNoVagueConfirmation: true,
    requiresCancellationPath: true,
    requiresNoFirstTurnExecution: true,
    allowsRuntimeApprovalAuthority: false,
    allowsProviderExecution: false,
    allowsPaymentExecution: false,
    allowsEmergencyDispatch: false,
    allowsExternalNavigation: false
  });

  const DEFAULT_CONFIRMATION_LANGUAGE_GATE = Object.freeze({
    requiresActionSummary: true,
    requiresTargetSummary: true,
    requiresProviderSummary: true,
    requiresConsequenceSummary: true,
    requiresDataSharedSummary: true,
    requiresAllowedConfirmations: true,
    requiresBlockedConfirmations: true,
    requiresCancelOption: true,
    requiresNoGenericContinue: true,
    blocksOkay: true,
    blocksSure: true,
    blocksMaybe: true,
    allowsAlwaysApprove: false,
    allowsSilentApproval: false,
    allowsBulkApproval: false
  });

  const APPROVAL_CENTER_CONTRACT = Object.freeze({
    approvalCenterId: "approval.center.not_configured",
    sourceOwner: "approval policy review required",
    approvalStatus: "not_configured",
    pendingActionCategories: Object.freeze([]),
    supportedSurfaces: Object.freeze([]),
    supportedLanguages: Object.freeze(["en"]),
    riskPolicyStatus: "not_reviewed",
    confirmationPolicyStatus: "not_reviewed",
    auditPolicyStatus: "not_reviewed",
    consentPolicyStatus: "not_reviewed",
    rolePolicyStatus: "not_reviewed",
    freshnessModel: Object.freeze({
      freshnessField: "approvalPolicyLastReviewedAt",
      staleAfter: "approval-policy-specific",
      displayRequirement: "Show pending action, risk tier, explicit approval language, cancel path, audit requirement, and execution-disabled boundary before relying on approval context."
    }),
    allowedResponseStates: Object.freeze([
      "approval_readiness_guidance",
      "pending_action_review_guidance",
      "explicit_confirmation_required_fallback",
      "vague_confirmation_blocked",
      "unavailable_approval_center_fallback"
    ]),
    approvalReviewGate: DEFAULT_APPROVAL_REVIEW_GATE,
    confirmationLanguageGate: DEFAULT_CONFIRMATION_LANGUAGE_GATE,
    approvalRecordSchema: Object.freeze(APPROVAL_RECORD_SCHEMA_FIELDS.slice()),
    auditRequirements: Object.freeze([
      "approval-policy-reviewed",
      "pending-action-required",
      "risk-tier-shown",
      "vague-confirmations-blocked",
      "execution-blocked"
    ]),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeApprovalStatus(value) {
    return APPROVAL_CENTER_STATUSES.includes(value) ? value : APPROVAL_CENTER_CONTRACT.approvalStatus;
  }

  function normalizePendingActionCategories(values) {
    if (!Array.isArray(values)) return [];
    return values.filter(value => PENDING_ACTION_CATEGORIES.includes(value));
  }

  function createApprovalCenterContract(overrides = {}) {
    const approvalStatus = normalizeApprovalStatus(overrides.approvalStatus);
    const pendingActionCategories = normalizePendingActionCategories(overrides.pendingActionCategories);
    return Object.freeze({
      ...APPROVAL_CENTER_CONTRACT,
      ...overrides,
      approvalStatus,
      pendingActionCategories: Object.freeze(pendingActionCategories),
      supportedSurfaces: Object.freeze(Array.isArray(overrides.supportedSurfaces) ? overrides.supportedSurfaces.slice() : []),
      supportedLanguages: Object.freeze(Array.isArray(overrides.supportedLanguages) ? overrides.supportedLanguages.slice() : ["en"]),
      approvalReviewGate: Object.freeze({
        ...DEFAULT_APPROVAL_REVIEW_GATE,
        ...(overrides.approvalReviewGate || {}),
        allowsRuntimeApprovalAuthority: false,
        allowsProviderExecution: false,
        allowsPaymentExecution: false,
        allowsEmergencyDispatch: false,
        allowsExternalNavigation: false
      }),
      confirmationLanguageGate: Object.freeze({
        ...DEFAULT_CONFIRMATION_LANGUAGE_GATE,
        ...(overrides.confirmationLanguageGate || {}),
        blocksOkay: true,
        blocksSure: true,
        blocksMaybe: true,
        allowsAlwaysApprove: false,
        allowsSilentApproval: false,
        allowsBulkApproval: false
      }),
      approvalRecordSchema: Object.freeze(APPROVAL_RECORD_SCHEMA_FIELDS.slice()),
      ...NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    APPROVAL_CENTER_STATUSES,
    PENDING_ACTION_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    APPROVAL_CENTER_FIELDS,
    APPROVAL_REVIEW_GATE_FIELDS,
    CONFIRMATION_LANGUAGE_GATE_FIELDS,
    APPROVAL_RECORD_SCHEMA_FIELDS,
    DEFAULT_APPROVAL_REVIEW_GATE,
    DEFAULT_CONFIRMATION_LANGUAGE_GATE,
    APPROVAL_CENTER_CONTRACT,
    createApprovalCenterContract
  });
});
