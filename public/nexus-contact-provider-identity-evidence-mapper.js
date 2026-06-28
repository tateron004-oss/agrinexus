(function initNexusContactProviderIdentityEvidenceMapper(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./nexus-contact-provider-identity-contract.js"));
    return;
  }

  root.NexusContactProviderIdentityEvidenceMapper = factory(root.NexusContactProviderIdentityContract);
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusContactProviderIdentityEvidenceMapper(identityContract) {
  "use strict";

  const IDENTITY_CONFIDENCE_MAP = Object.freeze({
    exactVisibleLabel: "high",
    verifiedFixtureEvidence: "high",
    partialVisibleEvidence: "medium",
    providerOrOrganizationContext: "medium",
    roleOnly: "low",
    weakPhraseEvidence: "low",
    multipleCandidates: "ambiguous",
    unresolvedDuplicateTarget: "ambiguous",
    missingTarget: "missing",
    missingRequiredInformation: "missing"
  });

  const IDENTITY_RISK_MAP = Object.freeze({
    education: "low",
    browseOnly: "low",
    workforce: "medium",
    organization: "medium",
    contact: "high",
    provider: "high",
    healthcare: "high",
    pharmacy: "high",
    marketplace: "high",
    transportation: "high",
    communication: "high",
    scheduling: "high",
    emergency: "restricted"
  });

  const EVIDENCE_REQUIREMENTS = Object.freeze({
    high: ["visible label", "source surface", "non-sensitive summary"],
    medium: ["source surface", "partial non-sensitive evidence"],
    low: ["role or phrase evidence", "clarification note"],
    ambiguous: ["candidate count", "clarification note"],
    missing: ["missing target note", "clarification note"]
  });

  const HIGH_RISK_ENTITY_TYPES = Object.freeze([
    "contact",
    "provider",
    "marketplace-party",
    "healthcare-provider",
    "pharmacy-provider",
    "transportation-provider"
  ]);

  const RESTRICTED_ENTITY_TYPES = Object.freeze(["emergency-contact"]);

  const HIGH_RISK_ACTION_TERMS = Object.freeze([
    "call",
    "message",
    "whatsapp",
    "telegram",
    "sms",
    "email",
    "appointment",
    "schedule",
    "provider-contact",
    "marketplace-contact",
    "transportation-request"
  ]);

  function text(value, fallback) {
    return typeof value === "string" && value.trim() ? value.trim() : fallback;
  }

  function toArray(value) {
    return Array.isArray(value) ? value.filter(item => typeof item === "string" && item.trim()).map(item => item.trim()) : [];
  }

  function inferConfidence(input) {
    if (input.missingInformationState && input.missingInformationState !== "none") return "missing";
    if (input.ambiguityState && input.ambiguityState !== "single-candidate") return "ambiguous";
    if (input.exactVisibleLabel === true || input.verifiedFixtureEvidence === true) return "high";
    if (input.entityType === "role" || input.roleOnly === true) return "low";
    if (input.partialVisibleEvidence === true || ["provider", "organization"].includes(input.entityType)) return "medium";
    return text(input.confidenceTier, "medium");
  }

  function inferRisk(input) {
    const entityType = text(input.entityType, "unknown");
    const requestedActionType = text(input.requestedActionType, "").toLowerCase();
    const domainContext = text(input.domainContext, "").toLowerCase();
    if (RESTRICTED_ENTITY_TYPES.includes(entityType) || domainContext.includes("emergency")) return "restricted";
    if (HIGH_RISK_ENTITY_TYPES.includes(entityType)) return "high";
    if (HIGH_RISK_ACTION_TERMS.some(term => requestedActionType.includes(term))) return "high";
    if (domainContext.includes("health") || domainContext.includes("pharmacy")) return "high";
    if (domainContext.includes("workforce") || entityType === "organization") return "medium";
    return text(input.riskTier, "medium");
  }

  function summarizeEvidence(input, confidenceTier) {
    const evidence = toArray(input.evidence);
    const phraseEvidence = text(input.phraseEvidence, "");
    const requirements = EVIDENCE_REQUIREMENTS[confidenceTier] || EVIDENCE_REQUIREMENTS.medium;
    const evidenceParts = evidence.length ? evidence : requirements;
    if (phraseEvidence) evidenceParts.unshift(`phrase: ${phraseEvidence}`);
    return evidenceParts.join("; ");
  }

  function mapIdentityConfidenceRiskEvidence(input = {}) {
    const confidenceTier = inferConfidence(input);
    const riskTier = inferRisk(input);
    const entityType = text(input.entityType, "unknown");
    const displayName = text(input.displayName, confidenceTier === "missing" ? "Missing identity target" : "Identity candidate");
    const missingInformationState = text(
      input.missingInformationState,
      confidenceTier === "missing" ? "target-missing" : "none"
    );
    const ambiguityState = text(
      input.ambiguityState,
      confidenceTier === "ambiguous" ? "multiple-candidates" : "single-candidate"
    );

    const mapped = identityContract.createContactProviderIdentityCandidate({
      identityCandidateId: text(input.identityCandidateId, `identity-${entityType}-${confidenceTier}`),
      sourceSurface: text(input.sourceSurface, "local-safe-evidence-mapper"),
      requestedActionType: text(input.requestedActionType, "identity-preview"),
      entityType,
      displayName,
      candidateSummary: text(input.candidateSummary, `${displayName} is available for identity review only`),
      evidenceSummary: summarizeEvidence(input, confidenceTier),
      confidenceTier,
      riskTier,
      language: text(input.language, "en"),
      ambiguityState,
      missingInformationState,
      permissionState: "not-required",
      consentState: "not-required",
      auditState: "ready",
      finalExecutionGateState: "ready",
      limitations: "Identity evidence mapping only; no contact, provider, route, permission, or execution is triggered"
    });

    return Object.freeze({
      candidate: Object.freeze(mapped.candidate),
      validation: mapped.validation,
      mapping: Object.freeze({
        confidenceTier,
        riskTier,
        evidenceRequirements: EVIDENCE_REQUIREMENTS[confidenceTier] || EVIDENCE_REQUIREMENTS.medium,
        executionAllowed: false
      })
    });
  }

  return Object.freeze({
    IDENTITY_CONFIDENCE_MAP,
    IDENTITY_RISK_MAP,
    EVIDENCE_REQUIREMENTS,
    mapIdentityConfidenceRiskEvidence
  });
});
