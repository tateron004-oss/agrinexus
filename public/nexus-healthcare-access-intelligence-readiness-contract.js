(function nexusHealthcareAccessIntelligenceReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusHealthcareAccessIntelligenceReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusHealthcareAccessIntelligenceReadinessContractModule() {
  const HEALTHCARE_ACCESS_INTELLIGENCE_ACTION_TYPES = Object.freeze(["explain_healthcare_access_intelligence_boundary","review_healthcare_access_intelligence_readiness","prepare_healthcare_access_intelligence_summary","evaluate_healthcare_access_intelligence_gate","unsupported"]);
  const HEALTHCARE_ACCESS_INTELLIGENCE_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "healthcareaccessintelligenceSpecificReadiness",
  "healthcareaccessintelligenceHumanReviewPath"
]);
  const HEALTHCARE_ACCESS_INTELLIGENCE_RESTRICTED_DOMAINS = Object.freeze([
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
  const HEALTHCARE_ACCESS_INTELLIGENCE_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const HEALTHCARE_ACCESS_INTELLIGENCE_READINESS_CONTRACT = Object.freeze({
    contractId: "healthcare-access-intelligence.readiness.phase_72", phase: "72", readinessStatus: "blocked", riskTier: "high", roadmapComponent: "health access brain", acceptanceTarget: "no diagnosis claim", allowedActionTypes: HEALTHCARE_ACCESS_INTELLIGENCE_ACTION_TYPES, requiredPreconditions: HEALTHCARE_ACCESS_INTELLIGENCE_REQUIRED_PRECONDITIONS, restrictedDomains: HEALTHCARE_ACCESS_INTELLIGENCE_RESTRICTED_DOMAINS, auditRequirement: "audit_decision_record_required_before_activation", fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback", nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution", ...HEALTHCARE_ACCESS_INTELLIGENCE_NO_EXECUTION_DEFAULTS
  });
  function normalizeActionType(value) { return HEALTHCARE_ACCESS_INTELLIGENCE_ACTION_TYPES.includes(value) ? value : "unsupported"; }
  function createHealthcareAccessIntelligenceReadinessContract(overrides = {}) { return Object.freeze({ ...HEALTHCARE_ACCESS_INTELLIGENCE_READINESS_CONTRACT, ...overrides, actionType: normalizeActionType(overrides.actionType || "unsupported"), phase: "72", readinessStatus: "blocked", riskTier: "high", auditRequirement: "audit_decision_record_required_before_activation", fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback", nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution", ...HEALTHCARE_ACCESS_INTELLIGENCE_NO_EXECUTION_DEFAULTS }); }
  return Object.freeze({ HEALTHCARE_ACCESS_INTELLIGENCE_ACTION_TYPES, HEALTHCARE_ACCESS_INTELLIGENCE_REQUIRED_PRECONDITIONS, HEALTHCARE_ACCESS_INTELLIGENCE_RESTRICTED_DOMAINS, HEALTHCARE_ACCESS_INTELLIGENCE_NO_EXECUTION_DEFAULTS, HEALTHCARE_ACCESS_INTELLIGENCE_READINESS_CONTRACT, createHealthcareAccessIntelligenceReadinessContract });
});
