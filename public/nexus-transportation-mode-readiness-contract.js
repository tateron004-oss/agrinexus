(function nexusTransportationModeReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusTransportationModeReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusTransportationModeReadinessContractModule() {
  const TRANSPORTATION_MODE_ACTION_TYPES = Object.freeze(["explain_transportation_mode_boundary","review_transportation_mode_readiness","prepare_transportation_mode_summary","evaluate_transportation_mode_gate","unsupported"]);
  const TRANSPORTATION_MODE_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "transportationmodeSpecificReadiness",
  "transportationmodeHumanReviewPath"
]);
  const TRANSPORTATION_MODE_RESTRICTED_DOMAINS = Object.freeze([
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
  const TRANSPORTATION_MODE_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const TRANSPORTATION_MODE_READINESS_CONTRACT = Object.freeze({
    contractId: "transportation-mode.readiness.phase_81",
    phase: "81",
    readinessStatus: "blocked",
    riskTier: "high",
    roadmapComponent: "transport mode",
    acceptanceTarget: "booking gated",
    allowedActionTypes: TRANSPORTATION_MODE_ACTION_TYPES,
    requiredPreconditions: TRANSPORTATION_MODE_REQUIRED_PRECONDITIONS,
    restrictedDomains: TRANSPORTATION_MODE_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_activation",
    fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
    nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
    ...TRANSPORTATION_MODE_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return TRANSPORTATION_MODE_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createTransportationModeReadinessContract(overrides = {}) {
    return Object.freeze({
      ...TRANSPORTATION_MODE_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "81",
      readinessStatus: "blocked",
      riskTier: "high",
      auditRequirement: "audit_decision_record_required_before_activation",
      fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
      nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
      ...TRANSPORTATION_MODE_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    TRANSPORTATION_MODE_ACTION_TYPES,
    TRANSPORTATION_MODE_REQUIRED_PRECONDITIONS,
    TRANSPORTATION_MODE_RESTRICTED_DOMAINS,
    TRANSPORTATION_MODE_NO_EXECUTION_DEFAULTS,
    TRANSPORTATION_MODE_READINESS_CONTRACT,
    createTransportationModeReadinessContract
  });
});
