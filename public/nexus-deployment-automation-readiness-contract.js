(function nexusDeploymentAutomationReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusDeploymentAutomationReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusDeploymentAutomationReadinessContractModule() {
  const DEPLOYMENT_AUTOMATION_ACTION_TYPES = Object.freeze(["explain_deployment_automation_boundary","review_deployment_automation_readiness","prepare_deployment_automation_summary","evaluate_deployment_automation_gate","unsupported"]);
  const DEPLOYMENT_AUTOMATION_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "deploymentautomationSpecificReadiness",
  "deploymentautomationHumanReviewPath"
]);
  const DEPLOYMENT_AUTOMATION_RESTRICTED_DOMAINS = Object.freeze([
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
  const DEPLOYMENT_AUTOMATION_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const DEPLOYMENT_AUTOMATION_READINESS_CONTRACT = Object.freeze({
    contractId: "deployment-automation.readiness.phase_97",
    phase: "97",
    readinessStatus: "blocked",
    riskTier: "high",
    roadmapComponent: "CI/CD and rollback",
    acceptanceTarget: "rollback ready",
    allowedActionTypes: DEPLOYMENT_AUTOMATION_ACTION_TYPES,
    requiredPreconditions: DEPLOYMENT_AUTOMATION_REQUIRED_PRECONDITIONS,
    restrictedDomains: DEPLOYMENT_AUTOMATION_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_activation",
    fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
    nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
    ...DEPLOYMENT_AUTOMATION_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return DEPLOYMENT_AUTOMATION_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createDeploymentAutomationReadinessContract(overrides = {}) {
    return Object.freeze({
      ...DEPLOYMENT_AUTOMATION_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "97",
      readinessStatus: "blocked",
      riskTier: "high",
      auditRequirement: "audit_decision_record_required_before_activation",
      fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
      nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
      ...DEPLOYMENT_AUTOMATION_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    DEPLOYMENT_AUTOMATION_ACTION_TYPES,
    DEPLOYMENT_AUTOMATION_REQUIRED_PRECONDITIONS,
    DEPLOYMENT_AUTOMATION_RESTRICTED_DOMAINS,
    DEPLOYMENT_AUTOMATION_NO_EXECUTION_DEFAULTS,
    DEPLOYMENT_AUTOMATION_READINESS_CONTRACT,
    createDeploymentAutomationReadinessContract
  });
});
