(function nexusEducationModeReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusEducationModeReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusEducationModeReadinessContractModule() {
  const EDUCATION_MODE_ACTION_TYPES = Object.freeze(["explain_education_mode_boundary","review_education_mode_readiness","prepare_education_mode_summary","evaluate_education_mode_gate","unsupported"]);
  const EDUCATION_MODE_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "educationmodeSpecificReadiness",
  "educationmodeHumanReviewPath"
]);
  const EDUCATION_MODE_RESTRICTED_DOMAINS = Object.freeze([
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
  const EDUCATION_MODE_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const EDUCATION_MODE_READINESS_CONTRACT = Object.freeze({
    contractId: "education-mode.readiness.phase_83",
    phase: "83",
    readinessStatus: "blocked",
    riskTier: "low",
    roadmapComponent: "education mode",
    acceptanceTarget: "learning available",
    allowedActionTypes: EDUCATION_MODE_ACTION_TYPES,
    requiredPreconditions: EDUCATION_MODE_REQUIRED_PRECONDITIONS,
    restrictedDomains: EDUCATION_MODE_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_activation",
    fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
    nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
    ...EDUCATION_MODE_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return EDUCATION_MODE_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createEducationModeReadinessContract(overrides = {}) {
    return Object.freeze({
      ...EDUCATION_MODE_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "83",
      readinessStatus: "blocked",
      riskTier: "low",
      auditRequirement: "audit_decision_record_required_before_activation",
      fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
      nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
      ...EDUCATION_MODE_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    EDUCATION_MODE_ACTION_TYPES,
    EDUCATION_MODE_REQUIRED_PRECONDITIONS,
    EDUCATION_MODE_RESTRICTED_DOMAINS,
    EDUCATION_MODE_NO_EXECUTION_DEFAULTS,
    EDUCATION_MODE_READINESS_CONTRACT,
    createEducationModeReadinessContract
  });
});
