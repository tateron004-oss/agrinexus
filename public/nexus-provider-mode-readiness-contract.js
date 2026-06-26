(function nexusProviderModeReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusProviderModeReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusProviderModeReadinessContractModule() {
  const PROVIDER_MODE_ACTION_TYPES = Object.freeze(["explain_provider_mode_boundary","review_provider_mode_readiness","prepare_provider_mode_summary","evaluate_provider_mode_gate","unsupported"]);
  const PROVIDER_MODE_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "providermodeSpecificReadiness",
  "providermodeHumanReviewPath"
]);
  const PROVIDER_MODE_RESTRICTED_DOMAINS = Object.freeze([
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
  const PROVIDER_MODE_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const PROVIDER_MODE_READINESS_CONTRACT = Object.freeze({
    contractId: "provider-mode.readiness.phase_86",
    phase: "86",
    readinessStatus: "blocked",
    riskTier: "high",
    roadmapComponent: "provider mode",
    acceptanceTarget: "provider actions gated",
    allowedActionTypes: PROVIDER_MODE_ACTION_TYPES,
    requiredPreconditions: PROVIDER_MODE_REQUIRED_PRECONDITIONS,
    restrictedDomains: PROVIDER_MODE_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_activation",
    fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
    nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
    ...PROVIDER_MODE_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return PROVIDER_MODE_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createProviderModeReadinessContract(overrides = {}) {
    return Object.freeze({
      ...PROVIDER_MODE_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "86",
      readinessStatus: "blocked",
      riskTier: "high",
      auditRequirement: "audit_decision_record_required_before_activation",
      fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
      nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
      ...PROVIDER_MODE_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    PROVIDER_MODE_ACTION_TYPES,
    PROVIDER_MODE_REQUIRED_PRECONDITIONS,
    PROVIDER_MODE_RESTRICTED_DOMAINS,
    PROVIDER_MODE_NO_EXECUTION_DEFAULTS,
    PROVIDER_MODE_READINESS_CONTRACT,
    createProviderModeReadinessContract
  });
});
