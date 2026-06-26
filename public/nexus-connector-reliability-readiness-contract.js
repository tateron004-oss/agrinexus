(function nexusConnectorReliabilityReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusConnectorReliabilityReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusConnectorReliabilityReadinessContractModule() {
  const CONNECTOR_RELIABILITY_ACTION_TYPES = Object.freeze(["explain_connector_reliability_boundary","review_connector_reliability_readiness","prepare_connector_reliability_summary","evaluate_connector_reliability_gate","unsupported"]);
  const CONNECTOR_RELIABILITY_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "connectorreliabilitySpecificReadiness",
  "connectorreliabilityHumanReviewPath"
]);
  const CONNECTOR_RELIABILITY_RESTRICTED_DOMAINS = Object.freeze([
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
  const CONNECTOR_RELIABILITY_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const CONNECTOR_RELIABILITY_READINESS_CONTRACT = Object.freeze({
    contractId: "connector-reliability.readiness.phase_92",
    phase: "92",
    readinessStatus: "blocked",
    riskTier: "high",
    roadmapComponent: "retry/fallback model",
    acceptanceTarget: "failures safe",
    allowedActionTypes: CONNECTOR_RELIABILITY_ACTION_TYPES,
    requiredPreconditions: CONNECTOR_RELIABILITY_REQUIRED_PRECONDITIONS,
    restrictedDomains: CONNECTOR_RELIABILITY_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_activation",
    fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
    nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
    ...CONNECTOR_RELIABILITY_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return CONNECTOR_RELIABILITY_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createConnectorReliabilityReadinessContract(overrides = {}) {
    return Object.freeze({
      ...CONNECTOR_RELIABILITY_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "92",
      readinessStatus: "blocked",
      riskTier: "high",
      auditRequirement: "audit_decision_record_required_before_activation",
      fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
      nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
      ...CONNECTOR_RELIABILITY_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    CONNECTOR_RELIABILITY_ACTION_TYPES,
    CONNECTOR_RELIABILITY_REQUIRED_PRECONDITIONS,
    CONNECTOR_RELIABILITY_RESTRICTED_DOMAINS,
    CONNECTOR_RELIABILITY_NO_EXECUTION_DEFAULTS,
    CONNECTOR_RELIABILITY_READINESS_CONTRACT,
    createConnectorReliabilityReadinessContract
  });
});
