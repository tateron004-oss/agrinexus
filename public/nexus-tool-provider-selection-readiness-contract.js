(function nexusToolProviderSelectionReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusToolProviderSelectionReadinessContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusToolProviderSelectionReadinessContractModule() {
  const TOOL_PROVIDER_SELECTION_ACTION_TYPES = Object.freeze(["explain_selection_boundary", "review_provider_options", "prepare_provider_path", "evaluate_selection_engine", "unsupported"]);
  const TOOL_PROVIDER_SELECTION_REQUIRED_PRECONDITIONS = Object.freeze([
    "connectorRegistryEntry",
    "selectedToolIdTrace",
    "providerAvailabilityState",
    "policyGateDecision",
    "riskTierForSelectedConnector",
    "permissionStateForSelectedConnector",
    "consentStateForSelectedConnector",
    "visibleProviderDisplay",
    "visibleActionTypeDisplay",
    "fallbackProviderPath",
    "unsupportedProviderPath",
    "auditDecisionRecord",
    "noRawAdapterCalls",
    "noProviderSelectionFromRawIntent",
    "noSilentProviderHandoff",
    "regressionSuiteCoverage"
]);
  const TOOL_PROVIDER_SELECTION_RESTRICTED_DOMAINS = Object.freeze([
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
    "minors_family_support"
]);
  const TOOL_PROVIDER_SELECTION_NO_EXECUTION_DEFAULTS = Object.freeze({
    liveSelectionEngineEnabled: false,
    rawAdapterCallsEnabled: false,
    providerCallsFromRawIntentEnabled: false,
    silentProviderHandoffEnabled: false,
    automaticConnectorExecutionEnabled: false,
    providerCredentialUseEnabled: false,
    standardUserSelectionMutationAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });
  const TOOL_PROVIDER_SELECTION_READINESS_CONTRACT = Object.freeze({
    contractId: "tool_provider_selection.readiness.phase_67",
    phase: "67",
    readinessStatus: "blocked",
    riskTier: "high",
    allowedActionTypes: TOOL_PROVIDER_SELECTION_ACTION_TYPES,
    requiredPreconditions: TOOL_PROVIDER_SELECTION_REQUIRED_PRECONDITIONS,
    restrictedDomains: TOOL_PROVIDER_SELECTION_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_provider_selection_activation",
    fallbackRequirement: "unsupported_or_unavailable_providers_must_fail_safely",
    nonAuthorityRequirement: "provider_selection_must_not_authorize_execution",
    ...TOOL_PROVIDER_SELECTION_NO_EXECUTION_DEFAULTS
  });
  function normalizeActionType(value) { return TOOL_PROVIDER_SELECTION_ACTION_TYPES.includes(value) ? value : "unsupported"; }
  function createToolProviderSelectionReadinessContract(overrides = {}) {
    return Object.freeze({
      ...TOOL_PROVIDER_SELECTION_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "67",
      readinessStatus: "blocked",
      riskTier: "high",
      auditRequirement: "audit_decision_record_required_before_provider_selection_activation",
      fallbackRequirement: "unsupported_or_unavailable_providers_must_fail_safely",
      nonAuthorityRequirement: "provider_selection_must_not_authorize_execution",
      ...TOOL_PROVIDER_SELECTION_NO_EXECUTION_DEFAULTS
    });
  }
  return Object.freeze({ TOOL_PROVIDER_SELECTION_ACTION_TYPES, TOOL_PROVIDER_SELECTION_REQUIRED_PRECONDITIONS, TOOL_PROVIDER_SELECTION_RESTRICTED_DOMAINS, TOOL_PROVIDER_SELECTION_NO_EXECUTION_DEFAULTS, TOOL_PROVIDER_SELECTION_READINESS_CONTRACT, createToolProviderSelectionReadinessContract });
});
