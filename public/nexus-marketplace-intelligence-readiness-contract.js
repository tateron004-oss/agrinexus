(function nexusMarketplaceIntelligenceReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusMarketplaceIntelligenceReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusMarketplaceIntelligenceReadinessContractModule() {
  const MARKETPLACE_INTELLIGENCE_ACTION_TYPES = Object.freeze(["explain_marketplace_intelligence_boundary","review_marketplace_intelligence_readiness","prepare_marketplace_intelligence_summary","evaluate_marketplace_intelligence_gate","unsupported"]);
  const MARKETPLACE_INTELLIGENCE_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "marketplaceintelligenceSpecificReadiness",
  "marketplaceintelligenceHumanReviewPath"
]);
  const MARKETPLACE_INTELLIGENCE_RESTRICTED_DOMAINS = Object.freeze([
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
  const MARKETPLACE_INTELLIGENCE_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const MARKETPLACE_INTELLIGENCE_READINESS_CONTRACT = Object.freeze({
    contractId: "marketplace-intelligence.readiness.phase_74", phase: "74", readinessStatus: "blocked", riskTier: "high", roadmapComponent: "marketplace brain", acceptanceTarget: "no auto trade", allowedActionTypes: MARKETPLACE_INTELLIGENCE_ACTION_TYPES, requiredPreconditions: MARKETPLACE_INTELLIGENCE_REQUIRED_PRECONDITIONS, restrictedDomains: MARKETPLACE_INTELLIGENCE_RESTRICTED_DOMAINS, auditRequirement: "audit_decision_record_required_before_activation", fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback", nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution", ...MARKETPLACE_INTELLIGENCE_NO_EXECUTION_DEFAULTS
  });
  function normalizeActionType(value) { return MARKETPLACE_INTELLIGENCE_ACTION_TYPES.includes(value) ? value : "unsupported"; }
  function createMarketplaceIntelligenceReadinessContract(overrides = {}) { return Object.freeze({ ...MARKETPLACE_INTELLIGENCE_READINESS_CONTRACT, ...overrides, actionType: normalizeActionType(overrides.actionType || "unsupported"), phase: "74", readinessStatus: "blocked", riskTier: "high", auditRequirement: "audit_decision_record_required_before_activation", fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback", nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution", ...MARKETPLACE_INTELLIGENCE_NO_EXECUTION_DEFAULTS }); }
  return Object.freeze({ MARKETPLACE_INTELLIGENCE_ACTION_TYPES, MARKETPLACE_INTELLIGENCE_REQUIRED_PRECONDITIONS, MARKETPLACE_INTELLIGENCE_RESTRICTED_DOMAINS, MARKETPLACE_INTELLIGENCE_NO_EXECUTION_DEFAULTS, MARKETPLACE_INTELLIGENCE_READINESS_CONTRACT, createMarketplaceIntelligenceReadinessContract });
});
