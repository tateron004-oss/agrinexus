(function nexusAdvancedIntentUnderstandingReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusAdvancedIntentUnderstandingReadinessContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusAdvancedIntentUnderstandingReadinessContractModule() {
  const ADVANCED_INTENT_UNDERSTANDING_ACTION_TYPES = Object.freeze([
    "explain_intent_boundary",
    "review_classifier_decision",
    "ask_clarifying_question",
    "evaluate_classifier_upgrade",
    "unsupported"
  ]);

  const ADVANCED_INTENT_UNDERSTANDING_REQUIRED_PRECONDITIONS = Object.freeze([
    "evaluatedClassifierVersion",
    "representativePromptSet",
    "riskStabilityBaseline",
    "ambiguityFallback",
    "clarificationPath",
    "highRiskNoDowngradeRule",
    "sourceTraceForClassifierDecision",
    "auditDecisionRecord",
    "policyEngineReview",
    "plannerNonAuthorityRule",
    "providerSelectionBoundary",
    "noRawAdapterCalls",
    "noImplicitPermission",
    "noFirstTurnExecution",
    "userOverrideOrCorrectionPath",
    "regressionSuiteCoverage",
    "rollbackPlan"
  ]);

  const ADVANCED_INTENT_UNDERSTANDING_RESTRICTED_DOMAINS = Object.freeze([
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

  const ADVANCED_INTENT_UNDERSTANDING_NO_EXECUTION_DEFAULTS = Object.freeze({
    liveClassifierReplacementEnabled: false,
    automaticRouteChangesEnabled: false,
    hiddenRiskDowngradeEnabled: false,
    providerSelectionEnabled: false,
    rawAdapterCallsEnabled: false,
    implicitPermissionEnabled: false,
    firstTurnExecutionEnabled: false,
    standardUserClassifierMutationAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });

  const ADVANCED_INTENT_UNDERSTANDING_READINESS_CONTRACT = Object.freeze({
    contractId: "advanced_intent_understanding.readiness.phase_64",
    phase: "64",
    readinessStatus: "blocked",
    riskTier: "high",
    allowedActionTypes: ADVANCED_INTENT_UNDERSTANDING_ACTION_TYPES,
    requiredPreconditions: ADVANCED_INTENT_UNDERSTANDING_REQUIRED_PRECONDITIONS,
    restrictedDomains: ADVANCED_INTENT_UNDERSTANDING_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_classifier_upgrade_activation",
    fallbackRequirement: "ambiguous_or_high_risk_prompts_must_clarify_or_remain_gated",
    nonAuthorityRequirement: "classifier_decisions_must_not_authorize_execution",
    ...ADVANCED_INTENT_UNDERSTANDING_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return ADVANCED_INTENT_UNDERSTANDING_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createAdvancedIntentUnderstandingReadinessContract(overrides = {}) {
    return Object.freeze({
      ...ADVANCED_INTENT_UNDERSTANDING_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "64",
      readinessStatus: "blocked",
      riskTier: "high",
      auditRequirement: "audit_decision_record_required_before_classifier_upgrade_activation",
      fallbackRequirement: "ambiguous_or_high_risk_prompts_must_clarify_or_remain_gated",
      nonAuthorityRequirement: "classifier_decisions_must_not_authorize_execution",
      ...ADVANCED_INTENT_UNDERSTANDING_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    ADVANCED_INTENT_UNDERSTANDING_ACTION_TYPES,
    ADVANCED_INTENT_UNDERSTANDING_REQUIRED_PRECONDITIONS,
    ADVANCED_INTENT_UNDERSTANDING_RESTRICTED_DOMAINS,
    ADVANCED_INTENT_UNDERSTANDING_NO_EXECUTION_DEFAULTS,
    ADVANCED_INTENT_UNDERSTANDING_READINESS_CONTRACT,
    createAdvancedIntentUnderstandingReadinessContract
  });
});
