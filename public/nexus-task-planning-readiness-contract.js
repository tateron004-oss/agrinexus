(function nexusTaskPlanningReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusTaskPlanningReadinessContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusTaskPlanningReadinessContractModule() {
  const TASK_PLANNING_ACTION_TYPES = Object.freeze([
    "explain_plan_boundary",
    "review_staged_plan",
    "prepare_plan_preview",
    "evaluate_planner_upgrade",
    "unsupported"
]);

  const TASK_PLANNING_REQUIRED_PRECONDITIONS = Object.freeze([
    "toolRegistryStepMapping",
    "riskTierForEachStep",
    "policyReviewForEachStep",
    "executionFalseByDefault",
    "stagedPlanPreview",
    "visibleStepPurpose",
    "visibleStepConsequence",
    "explicitApprovalPerHighRiskStep",
    "cancellationPath",
    "providerAvailabilityCheck",
    "permissionStatePerStep",
    "auditEventPerStep",
    "sourceTraceForPlan",
    "noAutonomousHighRiskSteps",
    "noRawAdapterCalls",
    "noImplicitPermission",
    "rollbackPlan",
    "regressionSuiteCoverage"
]);

  const TASK_PLANNING_RESTRICTED_DOMAINS = Object.freeze([
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

  const TASK_PLANNING_NO_EXECUTION_DEFAULTS = Object.freeze({
    livePlannerReplacementEnabled: false,
    executablePlanStepsEnabled: false,
    automaticStepChainingEnabled: false,
    providerExecutionFromPlansEnabled: false,
    rawAdapterCallsEnabled: false,
    implicitPermissionEnabled: false,
    autonomousHighRiskStepsEnabled: false,
    standardUserPlannerMutationAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });

  const TASK_PLANNING_READINESS_CONTRACT = Object.freeze({
    contractId: "task_planning.readiness.phase_66",
    phase: "66",
    readinessStatus: "blocked",
    riskTier: "high",
    allowedActionTypes: TASK_PLANNING_ACTION_TYPES,
    requiredPreconditions: TASK_PLANNING_REQUIRED_PRECONDITIONS,
    restrictedDomains: TASK_PLANNING_RESTRICTED_DOMAINS,
    auditRequirement: "audit_event_required_per_step_before_any_future_execution",
    fallbackRequirement: "plans_must_remain_staged_until_all_gates_are_satisfied",
    nonAuthorityRequirement: "plans_must_not_authorize_execution",
    ...TASK_PLANNING_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return TASK_PLANNING_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createTaskPlanningReadinessContract(overrides = {}) {
    return Object.freeze({
      ...TASK_PLANNING_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "66",
      readinessStatus: "blocked",
      riskTier: "high",
      auditRequirement: "audit_event_required_per_step_before_any_future_execution",
      fallbackRequirement: "plans_must_remain_staged_until_all_gates_are_satisfied",
      nonAuthorityRequirement: "plans_must_not_authorize_execution",
      ...TASK_PLANNING_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    TASK_PLANNING_ACTION_TYPES,
    TASK_PLANNING_REQUIRED_PRECONDITIONS,
    TASK_PLANNING_RESTRICTED_DOMAINS,
    TASK_PLANNING_NO_EXECUTION_DEFAULTS,
    TASK_PLANNING_READINESS_CONTRACT,
    createTaskPlanningReadinessContract
  });
});
