(function nexusPartnerOnboardingOperationsReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusPartnerOnboardingOperationsReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusPartnerOnboardingOperationsReadinessContractModule() {
  const PARTNER_ONBOARDING_OPERATIONS_ACTION_TYPES = Object.freeze(["explain_partner_onboarding_operations_boundary","review_partner_onboarding_operations_readiness","prepare_partner_onboarding_operations_summary","evaluate_partner_onboarding_operations_gate","unsupported"]);
  const PARTNER_ONBOARDING_OPERATIONS_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "partneronboardingoperationsSpecificReadiness",
  "partneronboardingoperationsHumanReviewPath"
]);
  const PARTNER_ONBOARDING_OPERATIONS_RESTRICTED_DOMAINS = Object.freeze([
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
  const PARTNER_ONBOARDING_OPERATIONS_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const PARTNER_ONBOARDING_OPERATIONS_READINESS_CONTRACT = Object.freeze({
    contractId: "partner-onboarding-operations.readiness.phase_99",
    phase: "99",
    readinessStatus: "blocked",
    riskTier: "high",
    roadmapComponent: "operations model",
    acceptanceTarget: "partners onboard safely",
    allowedActionTypes: PARTNER_ONBOARDING_OPERATIONS_ACTION_TYPES,
    requiredPreconditions: PARTNER_ONBOARDING_OPERATIONS_REQUIRED_PRECONDITIONS,
    restrictedDomains: PARTNER_ONBOARDING_OPERATIONS_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_activation",
    fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
    nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
    ...PARTNER_ONBOARDING_OPERATIONS_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return PARTNER_ONBOARDING_OPERATIONS_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createPartnerOnboardingOperationsReadinessContract(overrides = {}) {
    return Object.freeze({
      ...PARTNER_ONBOARDING_OPERATIONS_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "99",
      readinessStatus: "blocked",
      riskTier: "high",
      auditRequirement: "audit_decision_record_required_before_activation",
      fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
      nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
      ...PARTNER_ONBOARDING_OPERATIONS_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    PARTNER_ONBOARDING_OPERATIONS_ACTION_TYPES,
    PARTNER_ONBOARDING_OPERATIONS_REQUIRED_PRECONDITIONS,
    PARTNER_ONBOARDING_OPERATIONS_RESTRICTED_DOMAINS,
    PARTNER_ONBOARDING_OPERATIONS_NO_EXECUTION_DEFAULTS,
    PARTNER_ONBOARDING_OPERATIONS_READINESS_CONTRACT,
    createPartnerOnboardingOperationsReadinessContract
  });
});
