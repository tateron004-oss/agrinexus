(function nexusAdminReviewQueuesReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusAdminReviewQueuesReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusAdminReviewQueuesReadinessContractModule() {
  const ADMIN_REVIEW_QUEUES_ACTION_TYPES = Object.freeze(["explain_admin_review_queues_boundary","review_admin_review_queues_readiness","prepare_admin_review_queues_summary","evaluate_admin_review_queues_gate","unsupported"]);
  const ADMIN_REVIEW_QUEUES_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "adminreviewqueuesSpecificReadiness",
  "adminreviewqueuesHumanReviewPath"
]);
  const ADMIN_REVIEW_QUEUES_RESTRICTED_DOMAINS = Object.freeze([
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
  const ADMIN_REVIEW_QUEUES_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const ADMIN_REVIEW_QUEUES_READINESS_CONTRACT = Object.freeze({
    contractId: "admin-review-queues.readiness.phase_94",
    phase: "94",
    readinessStatus: "blocked",
    riskTier: "high",
    roadmapComponent: "review queues",
    acceptanceTarget: "reviewers can block",
    allowedActionTypes: ADMIN_REVIEW_QUEUES_ACTION_TYPES,
    requiredPreconditions: ADMIN_REVIEW_QUEUES_REQUIRED_PRECONDITIONS,
    restrictedDomains: ADMIN_REVIEW_QUEUES_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_activation",
    fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
    nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
    ...ADMIN_REVIEW_QUEUES_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return ADMIN_REVIEW_QUEUES_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createAdminReviewQueuesReadinessContract(overrides = {}) {
    return Object.freeze({
      ...ADMIN_REVIEW_QUEUES_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "94",
      readinessStatus: "blocked",
      riskTier: "high",
      auditRequirement: "audit_decision_record_required_before_activation",
      fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
      nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
      ...ADMIN_REVIEW_QUEUES_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    ADMIN_REVIEW_QUEUES_ACTION_TYPES,
    ADMIN_REVIEW_QUEUES_REQUIRED_PRECONDITIONS,
    ADMIN_REVIEW_QUEUES_RESTRICTED_DOMAINS,
    ADMIN_REVIEW_QUEUES_NO_EXECUTION_DEFAULTS,
    ADMIN_REVIEW_QUEUES_READINESS_CONTRACT,
    createAdminReviewQueuesReadinessContract
  });
});
