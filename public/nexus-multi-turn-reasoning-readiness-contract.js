(function nexusMultiTurnReasoningReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusMultiTurnReasoningReadinessContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusMultiTurnReasoningReadinessContractModule() {
  const MULTI_TURN_REASONING_ACTION_TYPES = Object.freeze([
    "explain_context_boundary",
    "review_reasoning_context",
    "ask_followup_question",
    "evaluate_reasoning_upgrade",
    "unsupported"
]);

  const MULTI_TURN_REASONING_REQUIRED_PRECONDITIONS = Object.freeze([
    "boundedConversationContext",
    "contextFreshnessLimit",
    "explicitUserRestatementForHighRisk",
    "riskTierReevaluationEachTurn",
    "policyEngineReviewEachTurn",
    "plannerNonAuthorityRule",
    "memoryNonAuthorityRule",
    "confirmationRequiredForHighRisk",
    "permissionRequiredForSensitiveActions",
    "contextClearOrResetPath",
    "sourceTraceForContextUse",
    "auditDecisionRecord",
    "noContextBasedExecution",
    "noHiddenTaskContinuation",
    "noImplicitPermission",
    "noFirstTurnOrLaterTurnExecution",
    "regressionSuiteCoverage"
]);

  const MULTI_TURN_REASONING_RESTRICTED_DOMAINS = Object.freeze([
    "healthcare",
    "medical_records",
    "pharmacy",
    "payments",
    "location",
    "communications",
    "provider_contact",
    "marketplace_transactions",
    "emergency",
    "identity",
    "account_profile",
    "role_authorization",
    "minors_family_support"
]);

  const MULTI_TURN_REASONING_NO_EXECUTION_DEFAULTS = Object.freeze({
    liveReasoningEngineEnabled: false,
    contextBasedExecutionEnabled: false,
    memoryDerivedAuthorityEnabled: false,
    hiddenTaskContinuationEnabled: false,
    providerSelectionFromContextEnabled: false,
    permissionFromContextEnabled: false,
    riskTierDowngradeFromContextEnabled: false,
    standardUserReasoningMutationAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });

  const MULTI_TURN_REASONING_READINESS_CONTRACT = Object.freeze({
    contractId: "multi_turn_reasoning.readiness.phase_65",
    phase: "65",
    readinessStatus: "blocked",
    riskTier: "high",
    allowedActionTypes: MULTI_TURN_REASONING_ACTION_TYPES,
    requiredPreconditions: MULTI_TURN_REASONING_REQUIRED_PRECONDITIONS,
    restrictedDomains: MULTI_TURN_REASONING_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_reasoning_upgrade_activation",
    fallbackRequirement: "context_must_clarify_or_remain_gated_for_high_risk_actions",
    nonAuthorityRequirement: "reasoning_context_must_not_authorize_execution",
    ...MULTI_TURN_REASONING_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return MULTI_TURN_REASONING_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createMultiTurnReasoningReadinessContract(overrides = {}) {
    return Object.freeze({
      ...MULTI_TURN_REASONING_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "65",
      readinessStatus: "blocked",
      riskTier: "high",
      auditRequirement: "audit_decision_record_required_before_reasoning_upgrade_activation",
      fallbackRequirement: "context_must_clarify_or_remain_gated_for_high_risk_actions",
      nonAuthorityRequirement: "reasoning_context_must_not_authorize_execution",
      ...MULTI_TURN_REASONING_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    MULTI_TURN_REASONING_ACTION_TYPES,
    MULTI_TURN_REASONING_REQUIRED_PRECONDITIONS,
    MULTI_TURN_REASONING_RESTRICTED_DOMAINS,
    MULTI_TURN_REASONING_NO_EXECUTION_DEFAULTS,
    MULTI_TURN_REASONING_READINESS_CONTRACT,
    createMultiTurnReasoningReadinessContract
  });
});
