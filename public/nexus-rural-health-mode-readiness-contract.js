(function nexusRuralHealthModeReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusRuralHealthModeReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusRuralHealthModeReadinessContractModule() {
  const RURAL_HEALTH_MODE_ACTION_TYPES = Object.freeze(["explain_rural_health_mode_boundary","review_rural_health_mode_readiness","prepare_rural_health_mode_summary","evaluate_rural_health_mode_gate","unsupported"]);
  const RURAL_HEALTH_MODE_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "ruralhealthmodeSpecificReadiness",
  "ruralhealthmodeHumanReviewPath"
]);
  const RURAL_HEALTH_MODE_RESTRICTED_DOMAINS = Object.freeze([
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
  const RURAL_HEALTH_MODE_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const RURAL_HEALTH_MODE_READINESS_CONTRACT = Object.freeze({
    contractId: "rural-health-mode.readiness.phase_77", phase: "77", readinessStatus: "blocked", riskTier: "high", roadmapComponent: "rural health mode", acceptanceTarget: "no diagnosis/execution", allowedActionTypes: RURAL_HEALTH_MODE_ACTION_TYPES, requiredPreconditions: RURAL_HEALTH_MODE_REQUIRED_PRECONDITIONS, restrictedDomains: RURAL_HEALTH_MODE_RESTRICTED_DOMAINS, auditRequirement: "audit_decision_record_required_before_activation", fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback", nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution", ...RURAL_HEALTH_MODE_NO_EXECUTION_DEFAULTS
  });
  function normalizeActionType(value) { return RURAL_HEALTH_MODE_ACTION_TYPES.includes(value) ? value : "unsupported"; }
  function createRuralHealthModeReadinessContract(overrides = {}) { return Object.freeze({ ...RURAL_HEALTH_MODE_READINESS_CONTRACT, ...overrides, actionType: normalizeActionType(overrides.actionType || "unsupported"), phase: "77", readinessStatus: "blocked", riskTier: "high", auditRequirement: "audit_decision_record_required_before_activation", fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback", nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution", ...RURAL_HEALTH_MODE_NO_EXECUTION_DEFAULTS }); }
  return Object.freeze({ RURAL_HEALTH_MODE_ACTION_TYPES, RURAL_HEALTH_MODE_REQUIRED_PRECONDITIONS, RURAL_HEALTH_MODE_RESTRICTED_DOMAINS, RURAL_HEALTH_MODE_NO_EXECUTION_DEFAULTS, RURAL_HEALTH_MODE_READINESS_CONTRACT, createRuralHealthModeReadinessContract });
});
