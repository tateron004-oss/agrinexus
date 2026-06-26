(function nexusFarmerAgricultureIntelligenceReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusFarmerAgricultureIntelligenceReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusFarmerAgricultureIntelligenceReadinessContractModule() {
  const FARMER_AGRICULTURE_INTELLIGENCE_ACTION_TYPES = Object.freeze(["explain_agriculture_guidance_boundary","review_agriculture_source_answer","prepare_farmer_support_summary","evaluate_agriculture_intelligence","unsupported"]);
  const FARMER_AGRICULTURE_INTELLIGENCE_REQUIRED_PRECONDITIONS = Object.freeze([
  "verifiedAgricultureSource",
  "sourceAttribution",
  "freshnessLabel",
  "confidenceLabel",
  "regionalContextKnown",
  "cropOrLivestockContext",
  "plainLanguageFarmerSummary",
  "extensionServiceEscalationCopy",
  "marketplaceTransactionBoundary",
  "paymentBoundary",
  "weatherOrPestSourceTrace",
  "humanExpertEscalationPath",
  "auditDecisionRecordForHighRiskGuidance",
  "noDiagnosisOrChemicalApplicationClaim",
  "regressionSuiteCoverage"
]);
  const FARMER_AGRICULTURE_INTELLIGENCE_RESTRICTED_DOMAINS = Object.freeze([
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
  "regulated_chemical_application",
  "crop_insurance_claims"
]);
  const FARMER_AGRICULTURE_INTELLIGENCE_NO_EXECUTION_DEFAULTS = Object.freeze({
    liveAgricultureAdvisorEnabled: false,
    unsourcedAgricultureAdviceAllowed: false,
    chemicalApplicationInstructionAllowed: false,
    marketplaceTransactionAllowed: false,
    paymentExecutionAllowed: false,
    providerOrExtensionContactAllowed: false,
    weatherOrPestLiveClaimAllowed: false,
    standardUserAgricultureBrainMutationAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });
  const FARMER_AGRICULTURE_INTELLIGENCE_READINESS_CONTRACT = Object.freeze({
    contractId: "farmer-agriculture-intelligence.readiness.phase_71", phase: "71", readinessStatus: "blocked", riskTier: "controlled", allowedActionTypes: FARMER_AGRICULTURE_INTELLIGENCE_ACTION_TYPES, requiredPreconditions: FARMER_AGRICULTURE_INTELLIGENCE_REQUIRED_PRECONDITIONS, restrictedDomains: FARMER_AGRICULTURE_INTELLIGENCE_RESTRICTED_DOMAINS, auditRequirement: "audit_decision_record_required_for_agriculture_guidance", fallbackRequirement: "unsupported_or_stale_agriculture_answers_must_label_limits_or_fallback", nonAuthorityRequirement: "farmer_intelligence_must_not_claim_or_authorize_execution", ...FARMER_AGRICULTURE_INTELLIGENCE_NO_EXECUTION_DEFAULTS
  });
  function normalizeActionType(value) { return FARMER_AGRICULTURE_INTELLIGENCE_ACTION_TYPES.includes(value) ? value : "unsupported"; }
  function createFarmerAgricultureIntelligenceReadinessContract(overrides = {}) { return Object.freeze({ ...FARMER_AGRICULTURE_INTELLIGENCE_READINESS_CONTRACT, ...overrides, actionType: normalizeActionType(overrides.actionType || "unsupported"), phase: "71", readinessStatus: "blocked", riskTier: "controlled", auditRequirement: "audit_decision_record_required_for_agriculture_guidance", fallbackRequirement: "unsupported_or_stale_agriculture_answers_must_label_limits_or_fallback", nonAuthorityRequirement: "farmer_intelligence_must_not_claim_or_authorize_execution", ...FARMER_AGRICULTURE_INTELLIGENCE_NO_EXECUTION_DEFAULTS }); }
  return Object.freeze({ FARMER_AGRICULTURE_INTELLIGENCE_ACTION_TYPES, FARMER_AGRICULTURE_INTELLIGENCE_REQUIRED_PRECONDITIONS, FARMER_AGRICULTURE_INTELLIGENCE_RESTRICTED_DOMAINS, FARMER_AGRICULTURE_INTELLIGENCE_NO_EXECUTION_DEFAULTS, FARMER_AGRICULTURE_INTELLIGENCE_READINESS_CONTRACT, createFarmerAgricultureIntelligenceReadinessContract });
});
