(function nexusStaleDataAlertsReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusStaleDataAlertsReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusStaleDataAlertsReadinessContractModule() {
  const STALE_DATA_ALERTS_ACTION_TYPES = Object.freeze(["explain_stale_data_alerts_boundary","review_stale_data_alerts_readiness","prepare_stale_data_alerts_summary","evaluate_stale_data_alerts_gate","unsupported"]);
  const STALE_DATA_ALERTS_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "staledataalertsSpecificReadiness",
  "staledataalertsHumanReviewPath"
]);
  const STALE_DATA_ALERTS_RESTRICTED_DOMAINS = Object.freeze([
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
  const STALE_DATA_ALERTS_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const STALE_DATA_ALERTS_READINESS_CONTRACT = Object.freeze({
    contractId: "stale-data-alerts.readiness.phase_93",
    phase: "93",
    readinessStatus: "blocked",
    riskTier: "controlled",
    roadmapComponent: "stale alert engine",
    acceptanceTarget: "stale data labeled",
    allowedActionTypes: STALE_DATA_ALERTS_ACTION_TYPES,
    requiredPreconditions: STALE_DATA_ALERTS_REQUIRED_PRECONDITIONS,
    restrictedDomains: STALE_DATA_ALERTS_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_activation",
    fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
    nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
    ...STALE_DATA_ALERTS_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return STALE_DATA_ALERTS_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createStaleDataAlertsReadinessContract(overrides = {}) {
    return Object.freeze({
      ...STALE_DATA_ALERTS_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "93",
      readinessStatus: "blocked",
      riskTier: "controlled",
      auditRequirement: "audit_decision_record_required_before_activation",
      fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
      nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
      ...STALE_DATA_ALERTS_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    STALE_DATA_ALERTS_ACTION_TYPES,
    STALE_DATA_ALERTS_REQUIRED_PRECONDITIONS,
    STALE_DATA_ALERTS_RESTRICTED_DOMAINS,
    STALE_DATA_ALERTS_NO_EXECUTION_DEFAULTS,
    STALE_DATA_ALERTS_READINESS_CONTRACT,
    createStaleDataAlertsReadinessContract
  });
});
