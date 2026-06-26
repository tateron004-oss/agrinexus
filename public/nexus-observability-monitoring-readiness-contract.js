(function nexusObservabilityMonitoringReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusObservabilityMonitoringReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusObservabilityMonitoringReadinessContractModule() {
  const OBSERVABILITY_MONITORING_ACTION_TYPES = Object.freeze(["explain_observability_monitoring_boundary","review_observability_monitoring_readiness","prepare_observability_monitoring_summary","evaluate_observability_monitoring_gate","unsupported"]);
  const OBSERVABILITY_MONITORING_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "observabilitymonitoringSpecificReadiness",
  "observabilitymonitoringHumanReviewPath"
]);
  const OBSERVABILITY_MONITORING_RESTRICTED_DOMAINS = Object.freeze([
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
  const OBSERVABILITY_MONITORING_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const OBSERVABILITY_MONITORING_READINESS_CONTRACT = Object.freeze({
    contractId: "observability-monitoring.readiness.phase_91",
    phase: "91",
    readinessStatus: "blocked",
    riskTier: "controlled",
    roadmapComponent: "telemetry and dashboards",
    acceptanceTarget: "health visible",
    allowedActionTypes: OBSERVABILITY_MONITORING_ACTION_TYPES,
    requiredPreconditions: OBSERVABILITY_MONITORING_REQUIRED_PRECONDITIONS,
    restrictedDomains: OBSERVABILITY_MONITORING_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_activation",
    fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
    nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
    ...OBSERVABILITY_MONITORING_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return OBSERVABILITY_MONITORING_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createObservabilityMonitoringReadinessContract(overrides = {}) {
    return Object.freeze({
      ...OBSERVABILITY_MONITORING_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "91",
      readinessStatus: "blocked",
      riskTier: "controlled",
      auditRequirement: "audit_decision_record_required_before_activation",
      fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
      nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
      ...OBSERVABILITY_MONITORING_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    OBSERVABILITY_MONITORING_ACTION_TYPES,
    OBSERVABILITY_MONITORING_REQUIRED_PRECONDITIONS,
    OBSERVABILITY_MONITORING_RESTRICTED_DOMAINS,
    OBSERVABILITY_MONITORING_NO_EXECUTION_DEFAULTS,
    OBSERVABILITY_MONITORING_READINESS_CONTRACT,
    createObservabilityMonitoringReadinessContract
  });
});
