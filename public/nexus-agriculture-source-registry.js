(function agricultureSourceRegistryModule(globalScope) {
  "use strict";

  const SOURCE_STATUS = Object.freeze({
    GENERAL: "general guidance",
    SOURCE_BACKED: "source-backed guidance",
    UNVERIFIED: "unverified source unavailable"
  });

  const ALLOWED_SOURCE_TYPES = new Set([
    "extension",
    "government",
    "university",
    "ngo",
    "cooperative",
    "internal-curated"
  ]);

  const GENERAL_GUIDANCE_RECORD = Object.freeze({
    status: SOURCE_STATUS.GENERAL,
    sourceName: "No verified live source connected",
    sourceType: "none",
    contractId: null,
    freshnessLabel: "Unavailable — no live source lookup was performed",
    confidenceLabel: "Limited — general agriculture guidance only",
    verificationStatus: "not-connected",
    disclosure: "This response uses general agriculture guidance only. No live source lookup was performed.",
    escalation: "For severe, spreading, chemical, or unclear crop issues, confirm with a local agriculture extension worker, agronomist, cooperative advisor, or trusted local agriculture expert."
  });

  const UNVERIFIED_RECORD = Object.freeze({
    status: SOURCE_STATUS.UNVERIFIED,
    sourceName: "Source could not be verified",
    sourceType: "unverified",
    contractId: null,
    freshnessLabel: "Unavailable — source could not be verified",
    confidenceLabel: "Unavailable — source could not be verified",
    verificationStatus: "unverified",
    disclosure: "A source-like record was provided, but Nexus could not verify the required source contract metadata.",
    escalation: "Treat this as general guidance until a verified agriculture source contract is available."
  });

  const FORBIDDEN_CONFIDENCE_PATTERNS = [
    /guarantee/i,
    /guaranteed/i,
    /definitive/i,
    /certain/i,
    /diagnosis/i,
    /emergency assurance/i,
    /yield guarantee/i,
    /chemical instruction/i
  ];

  function cloneRecord(record) {
    return Object.assign({}, record);
  }

  function hasText(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function isAllowedConfidenceLabel(label) {
    if (!hasText(label)) {
      return false;
    }
    if (FORBIDDEN_CONFIDENCE_PATTERNS.some(pattern => pattern.test(label))) {
      return false;
    }
    return label === "Source-backed — verify against local conditions before acting";
  }

  function isVerifiedSourceRecord(sourceRecord) {
    if (!sourceRecord || typeof sourceRecord !== "object") {
      return false;
    }
    if (sourceRecord.enabled !== true) {
      return false;
    }
    if (sourceRecord.verificationStatus !== "verified") {
      return false;
    }
    if (!hasText(sourceRecord.name)) {
      return false;
    }
    if (!hasText(sourceRecord.contractId)) {
      return false;
    }
    if (!hasText(sourceRecord.freshnessLabel)) {
      return false;
    }
    if (!ALLOWED_SOURCE_TYPES.has(sourceRecord.sourceType)) {
      return false;
    }
    if (!isAllowedConfidenceLabel(sourceRecord.confidenceLabel)) {
      return false;
    }
    return true;
  }

  function normalizeAgricultureSourceRecord(sourceRecord) {
    if (!sourceRecord) {
      return cloneRecord(GENERAL_GUIDANCE_RECORD);
    }

    if (!isVerifiedSourceRecord(sourceRecord)) {
      return cloneRecord(UNVERIFIED_RECORD);
    }

    return {
      status: SOURCE_STATUS.SOURCE_BACKED,
      sourceName: sourceRecord.name.trim(),
      sourceType: sourceRecord.sourceType,
      contractId: sourceRecord.contractId.trim(),
      freshnessLabel: sourceRecord.freshnessLabel.trim(),
      confidenceLabel: sourceRecord.confidenceLabel.trim(),
      verificationStatus: "verified",
      disclosure: "This response is source-backed by a verified agriculture source contract. Verify against local conditions before acting.",
      escalation: "For severe, spreading, chemical, or unclear crop issues, confirm with a local agriculture extension worker, agronomist, cooperative advisor, or trusted local agriculture expert."
    };
  }

  function buildSourceDisclosure(sourceRecord) {
    const normalized = normalizeAgricultureSourceRecord(sourceRecord);
    return {
      sourceStatus: normalized.status,
      sourceName: normalized.sourceName,
      sourceType: normalized.sourceType,
      contractId: normalized.contractId,
      freshness: normalized.freshnessLabel,
      confidence: normalized.confidenceLabel,
      disclosure: normalized.disclosure,
      escalation: normalized.escalation
    };
  }

  const api = Object.freeze({
    SOURCE_STATUS,
    ALLOWED_SOURCE_TYPES: Array.from(ALLOWED_SOURCE_TYPES),
    normalizeAgricultureSourceRecord,
    buildSourceDisclosure,
    isVerifiedSourceRecord
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  if (globalScope) {
    globalScope.NexusAgricultureSourceRegistry = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
