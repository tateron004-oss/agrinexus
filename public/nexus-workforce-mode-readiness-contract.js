(function nexusWorkforceModeReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusWorkforceModeReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusWorkforceModeReadinessContractModule() {
  const WORKFORCE_MODE_ACTION_TYPES = Object.freeze(["explain_workforce_mode_boundary","review_workforce_mode_readiness","prepare_workforce_mode_summary","evaluate_workforce_mode_gate","unsupported"]);
  const WORKFORCE_MODE_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "workforcemodeSpecificReadiness",
  "workforcemodeHumanReviewPath"
]);
  const WORKFORCE_MODE_RESTRICTED_DOMAINS = Object.freeze([
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
  const WORKFORCE_MODE_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const WORKFORCE_MODE_READINESS_CONTRACT = Object.freeze({
    contractId: "workforce-mode.readiness.phase_82",
    phase: "82",
    readinessStatus: "blocked",
    riskTier: "controlled",
    roadmapComponent: "workforce mode",
    acceptanceTarget: "useful job pathways",
    allowedActionTypes: WORKFORCE_MODE_ACTION_TYPES,
    requiredPreconditions: WORKFORCE_MODE_REQUIRED_PRECONDITIONS,
    restrictedDomains: WORKFORCE_MODE_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_activation",
    fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
    nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
    ...WORKFORCE_MODE_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return WORKFORCE_MODE_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createWorkforceModeReadinessContract(overrides = {}) {
    return Object.freeze({
      ...WORKFORCE_MODE_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "82",
      readinessStatus: "blocked",
      riskTier: "controlled",
      auditRequirement: "audit_decision_record_required_before_activation",
      fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
      nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
      ...WORKFORCE_MODE_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    WORKFORCE_MODE_ACTION_TYPES,
    WORKFORCE_MODE_REQUIRED_PRECONDITIONS,
    WORKFORCE_MODE_RESTRICTED_DOMAINS,
    WORKFORCE_MODE_NO_EXECUTION_DEFAULTS,
    WORKFORCE_MODE_READINESS_CONTRACT,
    createWorkforceModeReadinessContract
  });
});
