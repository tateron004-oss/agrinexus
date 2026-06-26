(function nexusWorkforceIntelligenceReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusWorkforceIntelligenceReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusWorkforceIntelligenceReadinessContractModule() {
  const WORKFORCE_INTELLIGENCE_ACTION_TYPES = Object.freeze(["explain_workforce_intelligence_boundary","review_workforce_intelligence_readiness","prepare_workforce_intelligence_summary","evaluate_workforce_intelligence_gate","unsupported"]);
  const WORKFORCE_INTELLIGENCE_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "workforceintelligenceSpecificReadiness",
  "workforceintelligenceHumanReviewPath"
]);
  const WORKFORCE_INTELLIGENCE_RESTRICTED_DOMAINS = Object.freeze([
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
  const WORKFORCE_INTELLIGENCE_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const WORKFORCE_INTELLIGENCE_READINESS_CONTRACT = Object.freeze({
    contractId: "workforce-intelligence.readiness.phase_73", phase: "73", readinessStatus: "blocked", riskTier: "controlled", roadmapComponent: "workforce brain", acceptanceTarget: "pathways useful", allowedActionTypes: WORKFORCE_INTELLIGENCE_ACTION_TYPES, requiredPreconditions: WORKFORCE_INTELLIGENCE_REQUIRED_PRECONDITIONS, restrictedDomains: WORKFORCE_INTELLIGENCE_RESTRICTED_DOMAINS, auditRequirement: "audit_decision_record_required_before_activation", fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback", nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution", ...WORKFORCE_INTELLIGENCE_NO_EXECUTION_DEFAULTS
  });
  function normalizeActionType(value) { return WORKFORCE_INTELLIGENCE_ACTION_TYPES.includes(value) ? value : "unsupported"; }
  function createWorkforceIntelligenceReadinessContract(overrides = {}) { return Object.freeze({ ...WORKFORCE_INTELLIGENCE_READINESS_CONTRACT, ...overrides, actionType: normalizeActionType(overrides.actionType || "unsupported"), phase: "73", readinessStatus: "blocked", riskTier: "controlled", auditRequirement: "audit_decision_record_required_before_activation", fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback", nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution", ...WORKFORCE_INTELLIGENCE_NO_EXECUTION_DEFAULTS }); }
  return Object.freeze({ WORKFORCE_INTELLIGENCE_ACTION_TYPES, WORKFORCE_INTELLIGENCE_REQUIRED_PRECONDITIONS, WORKFORCE_INTELLIGENCE_RESTRICTED_DOMAINS, WORKFORCE_INTELLIGENCE_NO_EXECUTION_DEFAULTS, WORKFORCE_INTELLIGENCE_READINESS_CONTRACT, createWorkforceIntelligenceReadinessContract });
});
