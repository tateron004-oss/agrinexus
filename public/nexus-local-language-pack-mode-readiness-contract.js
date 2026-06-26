(function nexusLocalLanguagePackModeReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusLocalLanguagePackModeReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusLocalLanguagePackModeReadinessContractModule() {
  const LOCAL_LANGUAGE_PACK_MODE_ACTION_TYPES = Object.freeze(["explain_local_language_pack_mode_boundary","review_local_language_pack_mode_readiness","prepare_local_language_pack_mode_summary","evaluate_local_language_pack_mode_gate","unsupported"]);
  const LOCAL_LANGUAGE_PACK_MODE_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "locallanguagepackmodeSpecificReadiness",
  "locallanguagepackmodeHumanReviewPath"
]);
  const LOCAL_LANGUAGE_PACK_MODE_RESTRICTED_DOMAINS = Object.freeze([
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
  const LOCAL_LANGUAGE_PACK_MODE_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT = Object.freeze({
    contractId: "local-language-pack-mode.readiness.phase_90",
    phase: "90",
    readinessStatus: "blocked",
    riskTier: "controlled",
    roadmapComponent: "language pack system",
    acceptanceTarget: "pack install safe",
    allowedActionTypes: LOCAL_LANGUAGE_PACK_MODE_ACTION_TYPES,
    requiredPreconditions: LOCAL_LANGUAGE_PACK_MODE_REQUIRED_PRECONDITIONS,
    restrictedDomains: LOCAL_LANGUAGE_PACK_MODE_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_activation",
    fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
    nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
    ...LOCAL_LANGUAGE_PACK_MODE_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return LOCAL_LANGUAGE_PACK_MODE_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createLocalLanguagePackModeReadinessContract(overrides = {}) {
    return Object.freeze({
      ...LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "90",
      readinessStatus: "blocked",
      riskTier: "controlled",
      auditRequirement: "audit_decision_record_required_before_activation",
      fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
      nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
      ...LOCAL_LANGUAGE_PACK_MODE_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    LOCAL_LANGUAGE_PACK_MODE_ACTION_TYPES,
    LOCAL_LANGUAGE_PACK_MODE_REQUIRED_PRECONDITIONS,
    LOCAL_LANGUAGE_PACK_MODE_RESTRICTED_DOMAINS,
    LOCAL_LANGUAGE_PACK_MODE_NO_EXECUTION_DEFAULTS,
    LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT,
    createLocalLanguagePackModeReadinessContract
  });
});
