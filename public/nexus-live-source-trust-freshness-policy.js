(function initNexusLiveSourceTrustFreshnessPolicy(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusLiveSourceTrustFreshnessPolicy = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusLiveSourceTrustFreshnessPolicy() {
  "use strict";

  const FRESHNESS_WINDOWS_MINUTES = Object.freeze({
    weather: 90,
    "news-security": 720,
    "conflict-security": 360,
    "job-search": 20160,
    "agriculture-context": 43200,
    "shipment-tracking": 240,
    "music-media": 10080,
    default: 10080
  });

  const TRUST_TIERS_BY_EVIDENCE = Object.freeze({
    "source-backed": "verified-source",
    "mock-backed": "fixture-or-mock",
    "fixture-backed": "fixture-or-mock",
    "sandbox-backed": "sandbox",
    "source-unavailable": "unavailable",
    "not-source-backed": "unavailable",
    conflicting: "conflicting"
  });

  function hasText(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function parseTime(value) {
    const timestamp = Date.parse(value);
    return Number.isFinite(timestamp) ? timestamp : 0;
  }

  function getFreshnessWindowMinutes(domain) {
    return FRESHNESS_WINDOWS_MINUTES[domain] || FRESHNESS_WINDOWS_MINUTES.default;
  }

  function assessLiveSourceTrust(input = {}, now = new Date()) {
    const sourceResult = input.sourceResult || {};
    const domain = input.domain || input.intent || sourceResult.requestType || sourceResult.sourceCategory || "default";
    const citations = Array.isArray(input.citations) ? input.citations : [];
    const confidence = input.confidence || sourceResult.confidenceLevel || "unknown";
    const evidenceStatus = sourceResult.evidenceStatus || "not-source-backed";
    const retrievedAt = input.retrievedAt || sourceResult.retrievedAt || "";
    const retrievedTimestamp = parseTime(retrievedAt);
    const nowTimestamp = now instanceof Date ? now.getTime() : parseTime(now);
    const ageMinutes = retrievedTimestamp > 0 && nowTimestamp > 0 ? Math.max(0, Math.round((nowTimestamp - retrievedTimestamp) / 60000)) : null;
    const freshnessWindowMinutes = getFreshnessWindowMinutes(domain);
    const stale = ageMinutes === null || ageMinutes > freshnessWindowMinutes || sourceResult.freshnessStatus === "stale";
    const missingCitation = citations.length === 0 || citations.every(citation => !hasText(citation.sourceName) && !hasText(citation.sourceUrl));
    const sourceTrustTier = TRUST_TIERS_BY_EVIDENCE[evidenceStatus] || "unavailable";
    const lowConfidence = ["low", "unknown"].includes(confidence);

    return Object.freeze({
      policyId: "live-source-trust-freshness-policy.v1",
      domain,
      freshnessWindowMinutes,
      ageMinutes,
      staleResultWarning: stale,
      missingCitationWarning: missingCitation,
      sourceTrustTier,
      confidence,
      lowConfidenceWarning: lowConfidence,
      unsupportedCertaintyBlocked: stale || missingCitation || lowConfidence || sourceTrustTier === "conflicting" || sourceTrustTier === "unavailable",
      userFacingCaution: stale || missingCitation || lowConfidence
        ? "This result should be treated as limited until a fresh, cited source is available."
        : "This result has source metadata and freshness information.",
      noExecutionAuthorized: true,
      noProviderContactAuthorized: true,
      noBackendWritePerformed: true
    });
  }

  function isSafeLiveSourceTrustAssessment(assessment) {
    if (!assessment || typeof assessment !== "object" || Array.isArray(assessment)) return false;
    if (assessment.noExecutionAuthorized !== true) return false;
    if (assessment.noProviderContactAuthorized !== true) return false;
    if (assessment.noBackendWritePerformed !== true) return false;
    if (!hasText(assessment.policyId)) return false;
    if (!hasText(assessment.domain)) return false;
    if (typeof assessment.staleResultWarning !== "boolean") return false;
    if (typeof assessment.missingCitationWarning !== "boolean") return false;
    if (typeof assessment.lowConfidenceWarning !== "boolean") return false;
    return true;
  }

  return Object.freeze({
    FRESHNESS_WINDOWS_MINUTES,
    TRUST_TIERS_BY_EVIDENCE,
    getFreshnessWindowMinutes,
    assessLiveSourceTrust,
    isSafeLiveSourceTrustAssessment
  });
});
