(function nexusFarmerModeReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusFarmerModeReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusFarmerModeReadinessContractModule() {
  const FARMER_MODE_ACTION_TYPES = Object.freeze(["explain_farmer_mode_boundary","review_farmer_mode_readiness","prepare_farmer_mode_summary","evaluate_farmer_mode_gate","unsupported"]);
  const FARMER_MODE_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "farmermodeSpecificReadiness",
  "farmermodeHumanReviewPath"
]);
  const FARMER_MODE_RESTRICTED_DOMAINS = Object.freeze([
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
  const FARMER_MODE_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const FARMER_MODE_READINESS_CONTRACT = Object.freeze({
    contractId: "farmer-mode.readiness.phase_76", phase: "76", readinessStatus: "blocked", riskTier: "controlled", roadmapComponent: "farmer mode runtime", acceptanceTarget: "farmer mode ready", allowedActionTypes: FARMER_MODE_ACTION_TYPES, requiredPreconditions: FARMER_MODE_REQUIRED_PRECONDITIONS, restrictedDomains: FARMER_MODE_RESTRICTED_DOMAINS, auditRequirement: "audit_decision_record_required_before_activation", fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback", nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution", ...FARMER_MODE_NO_EXECUTION_DEFAULTS
  });
  function normalizeActionType(value) { return FARMER_MODE_ACTION_TYPES.includes(value) ? value : "unsupported"; }
  function createFarmerModeReadinessContract(overrides = {}) { return Object.freeze({ ...FARMER_MODE_READINESS_CONTRACT, ...overrides, actionType: normalizeActionType(overrides.actionType || "unsupported"), phase: "76", readinessStatus: "blocked", riskTier: "controlled", auditRequirement: "audit_decision_record_required_before_activation", fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback", nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution", ...FARMER_MODE_NO_EXECUTION_DEFAULTS }); }
  return Object.freeze({ FARMER_MODE_ACTION_TYPES, FARMER_MODE_REQUIRED_PRECONDITIONS, FARMER_MODE_RESTRICTED_DOMAINS, FARMER_MODE_NO_EXECUTION_DEFAULTS, FARMER_MODE_READINESS_CONTRACT, createFarmerModeReadinessContract });
});
