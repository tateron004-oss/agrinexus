(function nexusRegionalCountryLaunchKitsReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusRegionalCountryLaunchKitsReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusRegionalCountryLaunchKitsReadinessContractModule() {
  const REGIONAL_COUNTRY_LAUNCH_KITS_ACTION_TYPES = Object.freeze(["explain_regional_country_launch_kits_boundary","review_regional_country_launch_kits_readiness","prepare_regional_country_launch_kits_summary","evaluate_regional_country_launch_kits_gate","unsupported"]);
  const REGIONAL_COUNTRY_LAUNCH_KITS_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "regionalcountrylaunchkitsSpecificReadiness",
  "regionalcountrylaunchkitsHumanReviewPath"
]);
  const REGIONAL_COUNTRY_LAUNCH_KITS_RESTRICTED_DOMAINS = Object.freeze([
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
  const REGIONAL_COUNTRY_LAUNCH_KITS_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const REGIONAL_COUNTRY_LAUNCH_KITS_READINESS_CONTRACT = Object.freeze({
    contractId: "regional-country-launch-kits.readiness.phase_98",
    phase: "98",
    readinessStatus: "blocked",
    riskTier: "high",
    roadmapComponent: "launch kits",
    acceptanceTarget: "country kit complete",
    allowedActionTypes: REGIONAL_COUNTRY_LAUNCH_KITS_ACTION_TYPES,
    requiredPreconditions: REGIONAL_COUNTRY_LAUNCH_KITS_REQUIRED_PRECONDITIONS,
    restrictedDomains: REGIONAL_COUNTRY_LAUNCH_KITS_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_activation",
    fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
    nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
    ...REGIONAL_COUNTRY_LAUNCH_KITS_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return REGIONAL_COUNTRY_LAUNCH_KITS_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createRegionalCountryLaunchKitsReadinessContract(overrides = {}) {
    return Object.freeze({
      ...REGIONAL_COUNTRY_LAUNCH_KITS_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "98",
      readinessStatus: "blocked",
      riskTier: "high",
      auditRequirement: "audit_decision_record_required_before_activation",
      fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
      nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
      ...REGIONAL_COUNTRY_LAUNCH_KITS_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    REGIONAL_COUNTRY_LAUNCH_KITS_ACTION_TYPES,
    REGIONAL_COUNTRY_LAUNCH_KITS_REQUIRED_PRECONDITIONS,
    REGIONAL_COUNTRY_LAUNCH_KITS_RESTRICTED_DOMAINS,
    REGIONAL_COUNTRY_LAUNCH_KITS_NO_EXECUTION_DEFAULTS,
    REGIONAL_COUNTRY_LAUNCH_KITS_READINESS_CONTRACT,
    createRegionalCountryLaunchKitsReadinessContract
  });
});
