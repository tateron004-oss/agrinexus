(function nexusOrchestrationEngineReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusOrchestrationEngineReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusOrchestrationEngineReadinessContractModule() {
  const ORCHESTRATION_ENGINE_ACTION_TYPES = Object.freeze(["explain_orchestration_boundary", "review_approved_steps", "prepare_orchestration_trace", "evaluate_orchestrator", "unsupported"]);
  const ORCHESTRATION_ENGINE_REQUIRED_PRECONDITIONS = Object.freeze([
    "approvedStepList",
    "riskTierForEachStep",
    "policyDecisionForEachStep",
    "permissionStateForEachStep",
    "explicitApprovalForEachHighRiskStep",
    "auditEventForEachStep",
    "providerAvailabilityForEachStep",
    "stepCancellationPath",
    "stepFailureFallback",
    "noAutonomousHighRiskStep",
    "noRawAdapterCalls",
    "noBackgroundExecution",
    "noSilentProviderHandoff",
    "reviewableOrchestrationTrace",
    "rollbackOrStopPlan",
    "regressionSuiteCoverage"
]);
  const ORCHESTRATION_ENGINE_RESTRICTED_DOMAINS = Object.freeze([
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
  const ORCHESTRATION_ENGINE_NO_EXECUTION_DEFAULTS = Object.freeze({
    liveOrchestrationEngineEnabled: false,
    autonomousHighRiskOrchestrationEnabled: false,
    backgroundExecutionEnabled: false,
    providerAdapterExecutionEnabled: false,
    silentProviderHandoffEnabled: false,
    rawAdapterCallsEnabled: false,
    standardUserOrchestrationMutationAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });
  const ORCHESTRATION_ENGINE_READINESS_CONTRACT = Object.freeze({
    contractId: "orchestration_engine.readiness.phase_68",
    phase: "68",
    readinessStatus: "blocked",
    riskTier: "restricted",
    allowedActionTypes: ORCHESTRATION_ENGINE_ACTION_TYPES,
    requiredPreconditions: ORCHESTRATION_ENGINE_REQUIRED_PRECONDITIONS,
    restrictedDomains: ORCHESTRATION_ENGINE_RESTRICTED_DOMAINS,
    auditRequirement: "audit_event_required_for_each_orchestrated_step",
    fallbackRequirement: "orchestration_must_stop_or_fallback_safely_on_missing_gate",
    nonAuthorityRequirement: "orchestration_must_not_authorize_execution",
    ...ORCHESTRATION_ENGINE_NO_EXECUTION_DEFAULTS
  });
  function normalizeActionType(value) { return ORCHESTRATION_ENGINE_ACTION_TYPES.includes(value) ? value : "unsupported"; }
  function createOrchestrationEngineReadinessContract(overrides = {}) {
    return Object.freeze({ ...ORCHESTRATION_ENGINE_READINESS_CONTRACT, ...overrides, actionType: normalizeActionType(overrides.actionType || "unsupported"), phase: "68", readinessStatus: "blocked", riskTier: "restricted", auditRequirement: "audit_event_required_for_each_orchestrated_step", fallbackRequirement: "orchestration_must_stop_or_fallback_safely_on_missing_gate", nonAuthorityRequirement: "orchestration_must_not_authorize_execution", ...ORCHESTRATION_ENGINE_NO_EXECUTION_DEFAULTS });
  }
  return Object.freeze({ ORCHESTRATION_ENGINE_ACTION_TYPES, ORCHESTRATION_ENGINE_REQUIRED_PRECONDITIONS, ORCHESTRATION_ENGINE_RESTRICTED_DOMAINS, ORCHESTRATION_ENGINE_NO_EXECUTION_DEFAULTS, ORCHESTRATION_ENGINE_READINESS_CONTRACT, createOrchestrationEngineReadinessContract });
});
