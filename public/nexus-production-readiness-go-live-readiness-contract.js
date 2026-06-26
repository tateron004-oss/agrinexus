(function nexusProductionReadinessGoLiveReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusProductionReadinessGoLiveReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusProductionReadinessGoLiveReadinessContractModule() {
  const PRODUCTION_READINESS_GO_LIVE_ACTION_TYPES = Object.freeze(["explain_production_readiness_go_live_boundary","review_production_readiness_go_live_readiness","prepare_production_readiness_go_live_summary","evaluate_production_readiness_go_live_gate","unsupported"]);
  const PRODUCTION_READINESS_GO_LIVE_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "productionreadinessgoliveSpecificReadiness",
  "productionreadinessgoliveHumanReviewPath"
]);
  const PRODUCTION_READINESS_GO_LIVE_RESTRICTED_DOMAINS = Object.freeze([
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
  const PRODUCTION_READINESS_GO_LIVE_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const PRODUCTION_READINESS_GO_LIVE_READINESS_CONTRACT = Object.freeze({
    contractId: "production-readiness-go-live.readiness.phase_100",
    phase: "100",
    readinessStatus: "blocked",
    riskTier: "restricted",
    roadmapComponent: "go-live checklist",
    acceptanceTarget: "go-live approved",
    allowedActionTypes: PRODUCTION_READINESS_GO_LIVE_ACTION_TYPES,
    requiredPreconditions: PRODUCTION_READINESS_GO_LIVE_REQUIRED_PRECONDITIONS,
    restrictedDomains: PRODUCTION_READINESS_GO_LIVE_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_activation",
    fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
    nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
    ...PRODUCTION_READINESS_GO_LIVE_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return PRODUCTION_READINESS_GO_LIVE_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createProductionReadinessGoLiveReadinessContract(overrides = {}) {
    return Object.freeze({
      ...PRODUCTION_READINESS_GO_LIVE_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "100",
      readinessStatus: "blocked",
      riskTier: "restricted",
      auditRequirement: "audit_decision_record_required_before_activation",
      fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
      nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
      ...PRODUCTION_READINESS_GO_LIVE_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    PRODUCTION_READINESS_GO_LIVE_ACTION_TYPES,
    PRODUCTION_READINESS_GO_LIVE_REQUIRED_PRECONDITIONS,
    PRODUCTION_READINESS_GO_LIVE_RESTRICTED_DOMAINS,
    PRODUCTION_READINESS_GO_LIVE_NO_EXECUTION_DEFAULTS,
    PRODUCTION_READINESS_GO_LIVE_READINESS_CONTRACT,
    createProductionReadinessGoLiveReadinessContract
  });
});
