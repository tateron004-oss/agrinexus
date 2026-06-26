(function nexusAfricaRegionalDeploymentModeReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusAfricaRegionalDeploymentModeReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusAfricaRegionalDeploymentModeReadinessContractModule() {
  const AFRICA_REGIONAL_DEPLOYMENT_MODE_ACTION_TYPES = Object.freeze(["explain_africa_regional_deployment_mode_boundary","review_africa_regional_deployment_mode_readiness","prepare_africa_regional_deployment_mode_summary","evaluate_africa_regional_deployment_mode_gate","unsupported"]);
  const AFRICA_REGIONAL_DEPLOYMENT_MODE_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "africaregionaldeploymentmodeSpecificReadiness",
  "africaregionaldeploymentmodeHumanReviewPath"
]);
  const AFRICA_REGIONAL_DEPLOYMENT_MODE_RESTRICTED_DOMAINS = Object.freeze([
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
  const AFRICA_REGIONAL_DEPLOYMENT_MODE_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT = Object.freeze({
    contractId: "africa-regional-deployment-mode.readiness.phase_89",
    phase: "89",
    readinessStatus: "blocked",
    riskTier: "high",
    roadmapComponent: "regional config",
    acceptanceTarget: "country kit ready",
    allowedActionTypes: AFRICA_REGIONAL_DEPLOYMENT_MODE_ACTION_TYPES,
    requiredPreconditions: AFRICA_REGIONAL_DEPLOYMENT_MODE_REQUIRED_PRECONDITIONS,
    restrictedDomains: AFRICA_REGIONAL_DEPLOYMENT_MODE_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_activation",
    fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
    nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
    ...AFRICA_REGIONAL_DEPLOYMENT_MODE_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return AFRICA_REGIONAL_DEPLOYMENT_MODE_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createAfricaRegionalDeploymentModeReadinessContract(overrides = {}) {
    return Object.freeze({
      ...AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "89",
      readinessStatus: "blocked",
      riskTier: "high",
      auditRequirement: "audit_decision_record_required_before_activation",
      fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
      nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
      ...AFRICA_REGIONAL_DEPLOYMENT_MODE_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    AFRICA_REGIONAL_DEPLOYMENT_MODE_ACTION_TYPES,
    AFRICA_REGIONAL_DEPLOYMENT_MODE_REQUIRED_PRECONDITIONS,
    AFRICA_REGIONAL_DEPLOYMENT_MODE_RESTRICTED_DOMAINS,
    AFRICA_REGIONAL_DEPLOYMENT_MODE_NO_EXECUTION_DEFAULTS,
    AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT,
    createAfricaRegionalDeploymentModeReadinessContract
  });
});
