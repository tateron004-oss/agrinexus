(function nexusFieldAgentModeReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusFieldAgentModeReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusFieldAgentModeReadinessContractModule() {
  const FIELD_AGENT_MODE_ACTION_TYPES = Object.freeze(["explain_field_agent_mode_boundary","review_field_agent_mode_readiness","prepare_field_agent_mode_summary","evaluate_field_agent_mode_gate","unsupported"]);
  const FIELD_AGENT_MODE_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "fieldagentmodeSpecificReadiness",
  "fieldagentmodeHumanReviewPath"
]);
  const FIELD_AGENT_MODE_RESTRICTED_DOMAINS = Object.freeze([
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
  const FIELD_AGENT_MODE_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const FIELD_AGENT_MODE_READINESS_CONTRACT = Object.freeze({
    contractId: "field-agent-mode.readiness.phase_85",
    phase: "85",
    readinessStatus: "blocked",
    riskTier: "high",
    roadmapComponent: "field agent mode",
    acceptanceTarget: "offline capture safe",
    allowedActionTypes: FIELD_AGENT_MODE_ACTION_TYPES,
    requiredPreconditions: FIELD_AGENT_MODE_REQUIRED_PRECONDITIONS,
    restrictedDomains: FIELD_AGENT_MODE_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_activation",
    fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
    nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
    ...FIELD_AGENT_MODE_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return FIELD_AGENT_MODE_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createFieldAgentModeReadinessContract(overrides = {}) {
    return Object.freeze({
      ...FIELD_AGENT_MODE_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "85",
      readinessStatus: "blocked",
      riskTier: "high",
      auditRequirement: "audit_decision_record_required_before_activation",
      fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
      nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
      ...FIELD_AGENT_MODE_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    FIELD_AGENT_MODE_ACTION_TYPES,
    FIELD_AGENT_MODE_REQUIRED_PRECONDITIONS,
    FIELD_AGENT_MODE_RESTRICTED_DOMAINS,
    FIELD_AGENT_MODE_NO_EXECUTION_DEFAULTS,
    FIELD_AGENT_MODE_READINESS_CONTRACT,
    createFieldAgentModeReadinessContract
  });
});
