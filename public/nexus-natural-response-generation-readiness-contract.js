(function nexusNaturalResponseGenerationReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusNaturalResponseGenerationReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusNaturalResponseGenerationReadinessContractModule() {
  const NATURAL_RESPONSE_GENERATION_ACTION_TYPES = Object.freeze(["explain_response_boundary", "review_source_backed_answer", "prepare_plain_language_response", "evaluate_response_generator", "unsupported"]);
  const NATURAL_RESPONSE_GENERATION_REQUIRED_PRECONDITIONS = Object.freeze([
    "sourceBackedAnswerAvailable",
    "citationOrSourceTrace",
    "freshnessLabel",
    "confidenceLabel",
    "unsupportedClaimFilter",
    "regulatedAdviceBoundary",
    "plainLanguageReview",
    "languageFallbackPath",
    "humanEscalationCopyWhenNeeded",
    "policyEngineReview",
    "auditDecisionRecordForHighRiskResponses",
    "noActionCompletionClaims",
    "noProviderConnectionClaims",
    "noDiagnosisOrPrescriptionClaims",
    "regressionSuiteCoverage"
]);
  const NATURAL_RESPONSE_GENERATION_RESTRICTED_DOMAINS = Object.freeze([
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
    "role_authorization"
]);
  const NATURAL_RESPONSE_GENERATION_NO_EXECUTION_DEFAULTS = Object.freeze({
    liveResponseModelEnabled: false,
    unsupportedClaimAllowed: false,
    providerConnectionClaimAllowed: false,
    completedActionClaimAllowed: false,
    diagnosisClaimAllowed: false,
    prescriptionClaimAllowed: false,
    paymentCompletionClaimAllowed: false,
    transactionCompletionClaimAllowed: false,
    standardUserResponseGeneratorMutationAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });
  const NATURAL_RESPONSE_GENERATION_READINESS_CONTRACT = Object.freeze({
    contractId: "natural_response_generation.readiness.phase_69", phase: "69", readinessStatus: "blocked", riskTier: "controlled", allowedActionTypes: NATURAL_RESPONSE_GENERATION_ACTION_TYPES, requiredPreconditions: NATURAL_RESPONSE_GENERATION_REQUIRED_PRECONDITIONS, restrictedDomains: NATURAL_RESPONSE_GENERATION_RESTRICTED_DOMAINS, auditRequirement: "audit_decision_record_required_for_high_risk_generated_responses", fallbackRequirement: "unsupported_or_stale_answers_must_label_limits_or_fallback", nonAuthorityRequirement: "responses_must_not_claim_or_authorize_execution", ...NATURAL_RESPONSE_GENERATION_NO_EXECUTION_DEFAULTS });
  function normalizeActionType(value) { return NATURAL_RESPONSE_GENERATION_ACTION_TYPES.includes(value) ? value : "unsupported"; }
  function createNaturalResponseGenerationReadinessContract(overrides = {}) { return Object.freeze({ ...NATURAL_RESPONSE_GENERATION_READINESS_CONTRACT, ...overrides, actionType: normalizeActionType(overrides.actionType || "unsupported"), phase: "69", readinessStatus: "blocked", riskTier: "controlled", auditRequirement: "audit_decision_record_required_for_high_risk_generated_responses", fallbackRequirement: "unsupported_or_stale_answers_must_label_limits_or_fallback", nonAuthorityRequirement: "responses_must_not_claim_or_authorize_execution", ...NATURAL_RESPONSE_GENERATION_NO_EXECUTION_DEFAULTS }); }
  return Object.freeze({ NATURAL_RESPONSE_GENERATION_ACTION_TYPES, NATURAL_RESPONSE_GENERATION_REQUIRED_PRECONDITIONS, NATURAL_RESPONSE_GENERATION_RESTRICTED_DOMAINS, NATURAL_RESPONSE_GENERATION_NO_EXECUTION_DEFAULTS, NATURAL_RESPONSE_GENERATION_READINESS_CONTRACT, createNaturalResponseGenerationReadinessContract });
});
