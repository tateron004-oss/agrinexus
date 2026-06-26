(function nexusTelehealthModeReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusTelehealthModeReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusTelehealthModeReadinessContractModule() {
  const TELEHEALTH_MODE_ACTION_TYPES = Object.freeze(["explain_telehealth_mode_boundary","review_telehealth_mode_readiness","prepare_telehealth_mode_summary","evaluate_telehealth_mode_gate","unsupported"]);
  const TELEHEALTH_MODE_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "telehealthmodeSpecificReadiness",
  "telehealthmodeHumanReviewPath"
]);
  const TELEHEALTH_MODE_RESTRICTED_DOMAINS = Object.freeze([
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
  const TELEHEALTH_MODE_NO_EXECUTION_DEFAULTS = Object.freeze({
    liveConnectorEnabled: false,
    providerExecutionEnabled: false,
    regulatedActionEnabled: false,
    silentActionAllowed: false,
    backgroundExecutionAllowed: false,
    standardUserRuntimeMutationAllowed: false,
    storageSideEffectAllowed: false,
    networkSideEffectAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });
  const TELEHEALTH_MODE_READINESS_CONTRACT = Object.freeze({
    contractId: "telehealth-mode.readiness.phase_78", phase: "78", readinessStatus: "blocked", riskTier: "high", roadmapComponent: "telehealth mode", acceptanceTarget: "live only when connected", allowedActionTypes: TELEHEALTH_MODE_ACTION_TYPES, requiredPreconditions: TELEHEALTH_MODE_REQUIRED_PRECONDITIONS, restrictedDomains: TELEHEALTH_MODE_RESTRICTED_DOMAINS, auditRequirement: "audit_decision_record_required_before_activation", fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback", nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution", ...TELEHEALTH_MODE_NO_EXECUTION_DEFAULTS
  });
  function normalizeActionType(value) { return TELEHEALTH_MODE_ACTION_TYPES.includes(value) ? value : "unsupported"; }
  function createTelehealthModeReadinessContract(overrides = {}) { return Object.freeze({ ...TELEHEALTH_MODE_READINESS_CONTRACT, ...overrides, actionType: normalizeActionType(overrides.actionType || "unsupported"), phase: "78", readinessStatus: "blocked", riskTier: "high", auditRequirement: "audit_decision_record_required_before_activation", fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback", nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution", ...TELEHEALTH_MODE_NO_EXECUTION_DEFAULTS }); }
  return Object.freeze({ TELEHEALTH_MODE_ACTION_TYPES, TELEHEALTH_MODE_REQUIRED_PRECONDITIONS, TELEHEALTH_MODE_RESTRICTED_DOMAINS, TELEHEALTH_MODE_NO_EXECUTION_DEFAULTS, TELEHEALTH_MODE_READINESS_CONTRACT, createTelehealthModeReadinessContract });
});
