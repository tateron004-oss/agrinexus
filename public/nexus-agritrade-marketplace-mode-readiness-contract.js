(function nexusAgritradeMarketplaceModeReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusAgritradeMarketplaceModeReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusAgritradeMarketplaceModeReadinessContractModule() {
  const AGRITRADE_MARKETPLACE_MODE_ACTION_TYPES = Object.freeze(["explain_agritrade_marketplace_mode_boundary","review_agritrade_marketplace_mode_readiness","prepare_agritrade_marketplace_mode_summary","evaluate_agritrade_marketplace_mode_gate","unsupported"]);
  const AGRITRADE_MARKETPLACE_MODE_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "agritrademarketplacemodeSpecificReadiness",
  "agritrademarketplacemodeHumanReviewPath"
]);
  const AGRITRADE_MARKETPLACE_MODE_RESTRICTED_DOMAINS = Object.freeze([
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
  const AGRITRADE_MARKETPLACE_MODE_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT = Object.freeze({
    contractId: "agritrade-marketplace-mode.readiness.phase_84",
    phase: "84",
    readinessStatus: "blocked",
    riskTier: "high",
    roadmapComponent: "marketplace mode",
    acceptanceTarget: "no auto buy/sell",
    allowedActionTypes: AGRITRADE_MARKETPLACE_MODE_ACTION_TYPES,
    requiredPreconditions: AGRITRADE_MARKETPLACE_MODE_REQUIRED_PRECONDITIONS,
    restrictedDomains: AGRITRADE_MARKETPLACE_MODE_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_activation",
    fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
    nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
    ...AGRITRADE_MARKETPLACE_MODE_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return AGRITRADE_MARKETPLACE_MODE_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createAgritradeMarketplaceModeReadinessContract(overrides = {}) {
    return Object.freeze({
      ...AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "84",
      readinessStatus: "blocked",
      riskTier: "high",
      auditRequirement: "audit_decision_record_required_before_activation",
      fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
      nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
      ...AGRITRADE_MARKETPLACE_MODE_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    AGRITRADE_MARKETPLACE_MODE_ACTION_TYPES,
    AGRITRADE_MARKETPLACE_MODE_REQUIRED_PRECONDITIONS,
    AGRITRADE_MARKETPLACE_MODE_RESTRICTED_DOMAINS,
    AGRITRADE_MARKETPLACE_MODE_NO_EXECUTION_DEFAULTS,
    AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT,
    createAgritradeMarketplaceModeReadinessContract
  });
});
