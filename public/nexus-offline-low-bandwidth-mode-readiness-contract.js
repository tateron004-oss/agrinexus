(function nexusOfflineLowBandwidthModeReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusOfflineLowBandwidthModeReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusOfflineLowBandwidthModeReadinessContractModule() {
  const OFFLINE_LOW_BANDWIDTH_MODE_ACTION_TYPES = Object.freeze(["explain_offline_low_bandwidth_mode_boundary","review_offline_low_bandwidth_mode_readiness","prepare_offline_low_bandwidth_mode_summary","evaluate_offline_low_bandwidth_mode_gate","unsupported"]);
  const OFFLINE_LOW_BANDWIDTH_MODE_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "offlinelowbandwidthmodeSpecificReadiness",
  "offlinelowbandwidthmodeHumanReviewPath"
]);
  const OFFLINE_LOW_BANDWIDTH_MODE_RESTRICTED_DOMAINS = Object.freeze([
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
  const OFFLINE_LOW_BANDWIDTH_MODE_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT = Object.freeze({
    contractId: "offline-low-bandwidth-mode.readiness.phase_88",
    phase: "88",
    readinessStatus: "blocked",
    riskTier: "controlled",
    roadmapComponent: "offline mode",
    acceptanceTarget: "degraded path works",
    allowedActionTypes: OFFLINE_LOW_BANDWIDTH_MODE_ACTION_TYPES,
    requiredPreconditions: OFFLINE_LOW_BANDWIDTH_MODE_REQUIRED_PRECONDITIONS,
    restrictedDomains: OFFLINE_LOW_BANDWIDTH_MODE_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_activation",
    fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
    nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
    ...OFFLINE_LOW_BANDWIDTH_MODE_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return OFFLINE_LOW_BANDWIDTH_MODE_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createOfflineLowBandwidthModeReadinessContract(overrides = {}) {
    return Object.freeze({
      ...OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "88",
      readinessStatus: "blocked",
      riskTier: "controlled",
      auditRequirement: "audit_decision_record_required_before_activation",
      fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
      nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
      ...OFFLINE_LOW_BANDWIDTH_MODE_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    OFFLINE_LOW_BANDWIDTH_MODE_ACTION_TYPES,
    OFFLINE_LOW_BANDWIDTH_MODE_REQUIRED_PRECONDITIONS,
    OFFLINE_LOW_BANDWIDTH_MODE_RESTRICTED_DOMAINS,
    OFFLINE_LOW_BANDWIDTH_MODE_NO_EXECUTION_DEFAULTS,
    OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT,
    createOfflineLowBandwidthModeReadinessContract
  });
});
