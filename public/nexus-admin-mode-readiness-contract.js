(function nexusAdminModeReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusAdminModeReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusAdminModeReadinessContractModule() {
  const ADMIN_MODE_ACTION_TYPES = Object.freeze(["explain_admin_mode_boundary","review_admin_mode_readiness","prepare_admin_mode_summary","evaluate_admin_mode_gate","unsupported"]);
  const ADMIN_MODE_REQUIRED_PRECONDITIONS = Object.freeze([
  "verifiedSourceOrPartner",
  "sourceAttribution",
  "freshnessLabel",
  "confidenceLabel",
  "userConsentBoundary",
  "roleAndPermissionCheck",
  "explicitUserApprovalForHighRisk",
  "cancellationPath",
  "auditDecisionRecord",
  "fallbackPath",
  "noUnsupportedLiveClaim",
  "noCompletedActionClaim",
  "regressionSuiteCoverage",
  "adminmodeSpecificReadiness",
  "adminmodeHumanReviewPath"
]);
  const ADMIN_MODE_RESTRICTED_DOMAINS = Object.freeze([
  "healthcare",
  "medical_records",
  "pharmacy",
  "payments",
  "location",
  "communications",
  "provider_contact",
  "marketplace_transactions",
  "emergency",
  "transportation_dispatch",
  "identity",
  "account_profile",
  "role_authorization",
  "regulated_execution"
]);
  const ADMIN_MODE_NO_EXECUTION_DEFAULTS = Object.freeze({
  "liveConnectorEnabled": false,
  "providerExecutionEnabled": false,
  "regulatedActionEnabled": false,
  "silentActionAllowed": false,
  "backgroundExecutionAllowed": false,
  "standardUserRuntimeMutationAllowed": false,
  "storageSideEffectAllowed": false,
  "networkSideEffectAllowed": false,
  "executionAllowed": false,
  "liveActionEnabled": false
});
  const ADMIN_MODE_READINESS_CONTRACT = Object.freeze({
    contractId: "admin-mode.readiness.phase_87",
    phase: "87",
    readinessStatus: "blocked",
    riskTier: "high",
    roadmapComponent: "admin mode",
    acceptanceTarget: "review queues work",
    allowedActionTypes: ADMIN_MODE_ACTION_TYPES,
    requiredPreconditions: ADMIN_MODE_REQUIRED_PRECONDITIONS,
    restrictedDomains: ADMIN_MODE_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_activation",
    fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
    nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
    ...ADMIN_MODE_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return ADMIN_MODE_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createAdminModeReadinessContract(overrides = {}) {
    return Object.freeze({
      ...ADMIN_MODE_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "87",
      readinessStatus: "blocked",
      riskTier: "high",
      auditRequirement: "audit_decision_record_required_before_activation",
      fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
      nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
      ...ADMIN_MODE_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    ADMIN_MODE_ACTION_TYPES,
    ADMIN_MODE_REQUIRED_PRECONDITIONS,
    ADMIN_MODE_RESTRICTED_DOMAINS,
    ADMIN_MODE_NO_EXECUTION_DEFAULTS,
    ADMIN_MODE_READINESS_CONTRACT,
    createAdminModeReadinessContract
  });
});
