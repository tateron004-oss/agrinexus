(function nexusMobileClinicModeReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusMobileClinicModeReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusMobileClinicModeReadinessContractModule() {
  const MOBILE_CLINIC_MODE_ACTION_TYPES = Object.freeze(["explain_mobile_clinic_mode_boundary","review_mobile_clinic_mode_readiness","prepare_mobile_clinic_mode_summary","evaluate_mobile_clinic_mode_gate","unsupported"]);
  const MOBILE_CLINIC_MODE_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "mobileclinicmodeSpecificReadiness",
  "mobileclinicmodeHumanReviewPath"
]);
  const MOBILE_CLINIC_MODE_RESTRICTED_DOMAINS = Object.freeze([
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
  const MOBILE_CLINIC_MODE_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const MOBILE_CLINIC_MODE_READINESS_CONTRACT = Object.freeze({
    contractId: "mobile-clinic-mode.readiness.phase_80", phase: "80", readinessStatus: "blocked", riskTier: "high", roadmapComponent: "mobile clinic mode", acceptanceTarget: "no dispatch claim", allowedActionTypes: MOBILE_CLINIC_MODE_ACTION_TYPES, requiredPreconditions: MOBILE_CLINIC_MODE_REQUIRED_PRECONDITIONS, restrictedDomains: MOBILE_CLINIC_MODE_RESTRICTED_DOMAINS, auditRequirement: "audit_decision_record_required_before_activation", fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback", nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution", ...MOBILE_CLINIC_MODE_NO_EXECUTION_DEFAULTS
  });
  function normalizeActionType(value) { return MOBILE_CLINIC_MODE_ACTION_TYPES.includes(value) ? value : "unsupported"; }
  function createMobileClinicModeReadinessContract(overrides = {}) { return Object.freeze({ ...MOBILE_CLINIC_MODE_READINESS_CONTRACT, ...overrides, actionType: normalizeActionType(overrides.actionType || "unsupported"), phase: "80", readinessStatus: "blocked", riskTier: "high", auditRequirement: "audit_decision_record_required_before_activation", fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback", nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution", ...MOBILE_CLINIC_MODE_NO_EXECUTION_DEFAULTS }); }
  return Object.freeze({ MOBILE_CLINIC_MODE_ACTION_TYPES, MOBILE_CLINIC_MODE_REQUIRED_PRECONDITIONS, MOBILE_CLINIC_MODE_RESTRICTED_DOMAINS, MOBILE_CLINIC_MODE_NO_EXECUTION_DEFAULTS, MOBILE_CLINIC_MODE_READINESS_CONTRACT, createMobileClinicModeReadinessContract });
});
