(function initNexusLiveSourceResultContract(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusLiveSourceResultContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusLiveSourceResultContract() {
  "use strict";

  const PROVIDER_MODES = Object.freeze(["fixture", "mock", "sandbox", "live"]);
  const REQUEST_TYPES = Object.freeze([
    "weather",
    "news-security",
    "shipment-tracking",
    "job-search",
    "job-application-preparation",
    "agriculture-context",
    "music-media",
    "provider-status",
    "general-question",
    "unsupported"
  ]);

  const SOURCE_STATUSES = Object.freeze([
    "provider-connected",
    "provider-not-configured",
    "provider-not-connected",
    "provider-required",
    "source-query-ready",
    "source-result-available",
    "source-unavailable",
    "source-stale",
    "source-conflict-detected",
    "source-rate-limited",
    "source-error",
    "fallback-source-required",
    "unsupported"
  ]);

  const FRESHNESS_STATUSES = Object.freeze(["fresh", "recent", "stale", "conflicting", "unavailable", "unknown"]);
  const CONFIDENCE_LEVELS = Object.freeze(["high", "medium", "low", "unknown"]);
  const EVIDENCE_STATUSES = Object.freeze(["source-backed", "fixture-backed", "mock-backed", "sandbox-backed", "source-unavailable", "not-source-backed", "conflicting"]);

  const REQUIRED_SOURCE_RESULT_FIELDS = Object.freeze([
    "sourceResultId",
    "requestType",
    "providerName",
    "providerMode",
    "sourceName",
    "sourceCategory",
    "sourceUrl",
    "query",
    "resultSummary",
    "rawResultAvailable",
    "retrievedAt",
    "lastUpdated",
    "freshnessStatus",
    "confidenceLevel",
    "limitationNotes",
    "evidenceStatus",
    "sourceStatus",
    "readOnly",
    "noExecutionRequired",
    "executionAuthority"
  ]);

  const PROVIDER_ENV_CONFIG = Object.freeze({
    weather: Object.freeze({ enabledFlag: "NEXUS_WEATHER_PROVIDER_ENABLED", keyName: "NEXUS_WEATHER_PROVIDER_API_KEY" }),
    "news-security": Object.freeze({ enabledFlag: "NEXUS_NEWS_SECURITY_PROVIDER_ENABLED", keyName: "NEXUS_NEWS_SECURITY_PROVIDER_API_KEY" }),
    "shipment-tracking": Object.freeze({ enabledFlag: "NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED", keyName: "NEXUS_SHIPMENT_TRACKING_PROVIDER_API_KEY" }),
    "job-search": Object.freeze({ enabledFlag: "NEXUS_JOB_SEARCH_PROVIDER_ENABLED", keyName: "NEXUS_JOB_SEARCH_PROVIDER_API_KEY" }),
    "agriculture-context": Object.freeze({ enabledFlag: "NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED", keyName: "NEXUS_AGRICULTURE_CONTEXT_PROVIDER_API_KEY" }),
    "music-media": Object.freeze({ enabledFlag: "NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED", keyName: "NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY" })
  });

  function isPlainObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function hasText(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function nowIso() {
    return new Date().toISOString();
  }

  function stableId(prefix, value) {
    const text = String(value || "unavailable").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48);
    return `${prefix}-${text || "source"}`;
  }

  function redactSensitiveProviderInput(input) {
    const text = typeof input === "string" ? input : JSON.stringify(input || {});
    return text
      .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[redacted-email]")
      .replace(/\+?\d[\d\s().-]{7,}\d/g, "[redacted-phone-or-tracking]")
      .replace(/\b[A-Z0-9]{12,}\b/gi, "[redacted-long-identifier]")
      .replace(/\b(token|secret|password|api[_-]?key)\s*[:=]\s*["']?[^"',\s}]+/gi, "$1=[redacted-secret]");
  }

  function classifySourceRequestType(query, context) {
    const combined = `${query || ""} ${context && context.lastTopic ? context.lastTopic : ""}`.toLowerCase();
    if (/\b(weather|rain|forecast|temperature|storm)\b/.test(combined)) return "weather";
    if (/\b(conflict|security|fighting|war|safe to travel|travel advisory|news|current events|goma|congo|sudan)\b/.test(combined)) return "news-security";
    if (/\b(track|tracking|shipment|delivery|parcel|in transit)\b/.test(combined)) return "shipment-tracking";
    if (/\b(apply|application|resume|cover letter|cv)\b/.test(combined)) return "job-application-preparation";
    if (/\b(job|jobs|hiring|work|career|employment)\b/.test(combined)) return "job-search";
    if (/\b(crop|farm|soil|irrigation|market price|agriculture|pest|disease)\b/.test(combined)) return "agriculture-context";
    if (/\b(music|playlist|spotify|radio|song|media)\b/.test(combined)) return "music-media";
    if (/\b(provider|status|available|connected)\b/.test(combined)) return "provider-status";
    if (hasText(query)) return "general-question";
    return "unsupported";
  }

  function getConfiguredProviderMode(providerName, env) {
    const sourceEnv = env || {};
    const normalizedProvider = String(providerName || "").toLowerCase();
    const config = PROVIDER_ENV_CONFIG[normalizedProvider];
    if (!config) return "fixture";
    if (sourceEnv.NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED !== "true") return "fixture";
    if (sourceEnv[config.enabledFlag] !== "true") return "fixture";
    if (!hasText(sourceEnv[config.keyName])) return "mock";
    return "live";
  }

  function normalizeSourceResult(providerResult) {
    const input = isPlainObject(providerResult) ? providerResult : {};
    const requestType = REQUEST_TYPES.includes(input.requestType) ? input.requestType : classifySourceRequestType(input.query || input.resultSummary || "");
    const providerName = hasText(input.providerName) ? input.providerName.trim() : "unconfigured-provider";
    const providerMode = PROVIDER_MODES.includes(input.providerMode) ? input.providerMode : "fixture";
    const timestamp = hasText(input.retrievedAt) ? input.retrievedAt : nowIso();

    const result = {
      sourceResultId: hasText(input.sourceResultId) ? input.sourceResultId : stableId("source-result", `${providerName}-${requestType}`),
      requestType,
      providerName,
      providerMode,
      sourceName: hasText(input.sourceName) ? input.sourceName : providerName,
      sourceCategory: hasText(input.sourceCategory) ? input.sourceCategory : requestType,
      sourceUrl: hasText(input.sourceUrl) ? input.sourceUrl : "provider-identifier-unavailable",
      query: hasText(input.query) ? redactSensitiveProviderInput(input.query) : "query-unavailable",
      resultSummary: hasText(input.resultSummary) ? input.resultSummary : "Source result unavailable.",
      rawResultAvailable: input.rawResultAvailable === true,
      retrievedAt: timestamp,
      lastUpdated: hasText(input.lastUpdated) ? input.lastUpdated : timestamp,
      freshnessStatus: FRESHNESS_STATUSES.includes(input.freshnessStatus) ? input.freshnessStatus : "unknown",
      confidenceLevel: CONFIDENCE_LEVELS.includes(input.confidenceLevel) ? input.confidenceLevel : "unknown",
      limitationNotes: hasText(input.limitationNotes) ? input.limitationNotes : "Result must be verified against a configured source before high-impact use.",
      evidenceStatus: EVIDENCE_STATUSES.includes(input.evidenceStatus) ? input.evidenceStatus : "not-source-backed",
      sourceStatus: SOURCE_STATUSES.includes(input.sourceStatus) ? input.sourceStatus : "source-unavailable",
      readOnly: true,
      noExecutionRequired: true,
      executionAuthority: false
    };

    return Object.freeze(result);
  }

  function buildProviderUnavailableResult(providerName, reason) {
    return normalizeSourceResult({
      sourceResultId: stableId("provider-unavailable", providerName),
      requestType: "provider-status",
      providerName: providerName || "unconfigured-provider",
      providerMode: "fixture",
      sourceName: providerName || "Unconfigured provider",
      sourceCategory: "provider-status",
      sourceUrl: "provider-not-configured",
      query: "provider availability",
      resultSummary: `Provider is unavailable: ${reason || "not configured"}.`,
      rawResultAvailable: false,
      freshnessStatus: "unavailable",
      confidenceLevel: "low",
      limitationNotes: reason || "Provider credentials or feature flags are required.",
      evidenceStatus: "source-unavailable",
      sourceStatus: "provider-not-configured"
    });
  }

  function buildProviderErrorResult(providerName, errorType) {
    return normalizeSourceResult({
      sourceResultId: stableId("provider-error", `${providerName}-${errorType}`),
      requestType: "provider-status",
      providerName: providerName || "unconfigured-provider",
      providerMode: "fixture",
      sourceName: providerName || "Provider",
      sourceCategory: "provider-status",
      sourceUrl: "provider-error",
      query: "provider error",
      resultSummary: `Provider returned an error: ${errorType || "source-error"}.`,
      rawResultAvailable: false,
      freshnessStatus: "unavailable",
      confidenceLevel: "low",
      limitationNotes: "Nexus must disclose provider errors and avoid guessing.",
      evidenceStatus: "source-unavailable",
      sourceStatus: SOURCE_STATUSES.includes(errorType) ? errorType : "source-error"
    });
  }

  function validateReadOnlySourceResult(result) {
    const failures = [];
    if (!isPlainObject(result)) {
      return { ok: false, executionAllowed: false, failures: ["source result must be an object"] };
    }

    REQUIRED_SOURCE_RESULT_FIELDS.forEach(field => {
      if (!Object.prototype.hasOwnProperty.call(result, field)) failures.push(`missing required field: ${field}`);
    });

    [
      "sourceResultId",
      "requestType",
      "providerName",
      "providerMode",
      "sourceName",
      "sourceCategory",
      "sourceUrl",
      "query",
      "resultSummary",
      "retrievedAt",
      "lastUpdated",
      "freshnessStatus",
      "confidenceLevel",
      "limitationNotes",
      "evidenceStatus",
      "sourceStatus"
    ].forEach(field => {
      if (Object.prototype.hasOwnProperty.call(result, field) && !hasText(result[field])) failures.push(`field must be non-empty text: ${field}`);
    });

    if (!REQUEST_TYPES.includes(result.requestType)) failures.push("requestType must be supported");
    if (!PROVIDER_MODES.includes(result.providerMode)) failures.push("providerMode must be supported");
    if (!FRESHNESS_STATUSES.includes(result.freshnessStatus)) failures.push("freshnessStatus must be supported");
    if (!CONFIDENCE_LEVELS.includes(result.confidenceLevel)) failures.push("confidenceLevel must be supported");
    if (!EVIDENCE_STATUSES.includes(result.evidenceStatus)) failures.push("evidenceStatus must be supported");
    if (!SOURCE_STATUSES.includes(result.sourceStatus)) failures.push("sourceStatus must be supported");
    if (result.rawResultAvailable !== true && result.rawResultAvailable !== false) failures.push("rawResultAvailable must be boolean");
    if (result.readOnly !== true) failures.push("readOnly must be true");
    if (result.noExecutionRequired !== true) failures.push("noExecutionRequired must be true");
    if (result.executionAuthority !== false) failures.push("executionAuthority must be false");

    return { ok: failures.length === 0, executionAllowed: false, failures };
  }

  function isSafeReadOnlySourceResult(result) {
    return validateReadOnlySourceResult(result).ok === true;
  }

  return Object.freeze({
    PROVIDER_MODES,
    REQUEST_TYPES,
    SOURCE_STATUSES,
    FRESHNESS_STATUSES,
    CONFIDENCE_LEVELS,
    EVIDENCE_STATUSES,
    REQUIRED_SOURCE_RESULT_FIELDS,
    normalizeSourceResult,
    buildProviderUnavailableResult,
    buildProviderErrorResult,
    isSafeReadOnlySourceResult,
    validateReadOnlySourceResult,
    getConfiguredProviderMode,
    redactSensitiveProviderInput,
    classifySourceRequestType
  });
});
