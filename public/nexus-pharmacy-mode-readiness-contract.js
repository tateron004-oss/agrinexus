(function nexusPharmacyModeReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusPharmacyModeReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusPharmacyModeReadinessContractModule() {
  const PHARMACY_MODE_ACTION_TYPES = Object.freeze(["explain_pharmacy_mode_boundary","review_pharmacy_mode_readiness","prepare_pharmacy_mode_summary","evaluate_pharmacy_mode_gate","unsupported"]);
  const PHARMACY_MODE_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "pharmacymodeSpecificReadiness",
  "pharmacymodeHumanReviewPath"
]);
  const PHARMACY_MODE_RESTRICTED_DOMAINS = Object.freeze([
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
  const PHARMACY_MODE_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const PHARMACY_MODE_READINESS_CONTRACT = Object.freeze({
    contractId: "pharmacy-mode.readiness.phase_79", phase: "79", readinessStatus: "blocked", riskTier: "restricted", roadmapComponent: "pharmacy mode", acceptanceTarget: "refill gated", allowedActionTypes: PHARMACY_MODE_ACTION_TYPES, requiredPreconditions: PHARMACY_MODE_REQUIRED_PRECONDITIONS, restrictedDomains: PHARMACY_MODE_RESTRICTED_DOMAINS, auditRequirement: "audit_decision_record_required_before_activation", fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback", nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution", ...PHARMACY_MODE_NO_EXECUTION_DEFAULTS
  });
  function normalizeActionType(value) { return PHARMACY_MODE_ACTION_TYPES.includes(value) ? value : "unsupported"; }
  function createPharmacyModeReadinessContract(overrides = {}) { return Object.freeze({ ...PHARMACY_MODE_READINESS_CONTRACT, ...overrides, actionType: normalizeActionType(overrides.actionType || "unsupported"), phase: "79", readinessStatus: "blocked", riskTier: "restricted", auditRequirement: "audit_decision_record_required_before_activation", fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback", nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution", ...PHARMACY_MODE_NO_EXECUTION_DEFAULTS }); }
  return Object.freeze({ PHARMACY_MODE_ACTION_TYPES, PHARMACY_MODE_REQUIRED_PRECONDITIONS, PHARMACY_MODE_RESTRICTED_DOMAINS, PHARMACY_MODE_NO_EXECUTION_DEFAULTS, PHARMACY_MODE_READINESS_CONTRACT, createPharmacyModeReadinessContract });
});
