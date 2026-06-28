const {
  normalizeSourceResult,
  buildProviderUnavailableResult,
  getConfiguredProviderMode
} = require("../public/nexus-live-source-result-contract.js");

const NEWS_SECURITY_PROVIDER_NAME = "news-security";
const NEWS_SECURITY_PROVIDER_CANDIDATES = Object.freeze([
  "ReliefWeb",
  "GDELT",
  "ACLED",
  "UN/OCHA public source",
  "trusted news/search provider",
  "government travel/security advisory"
]);

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeTopicText(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function buildNewsSecuritySourceQuery(request = {}) {
  const regionOrTopic = normalizeTopicText(request.regionOrTopic || request.locationText || request.query);
  const queryType = hasText(request.queryType) ? request.queryType.trim() : "security-awareness";
  return Object.freeze({
    requestType: "news-security",
    queryType,
    regionOrTopic,
    providerCandidates: NEWS_SECURITY_PROVIDER_CANDIDATES,
    multiSourcePreferred: true,
    riskCautionRequired: true,
    travelSafetyCertaintyAllowed: false,
    readOnly: true,
    noExecutionRequired: true,
    executionAuthority: false
  });
}

function resolveNewsSecurityProviderConfig(env = process.env) {
  const providerMode = getConfiguredProviderMode(NEWS_SECURITY_PROVIDER_NAME, env);
  return Object.freeze({
    providerName: NEWS_SECURITY_PROVIDER_NAME,
    providerMode,
    liveSourceEnabled: env.NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED === "true",
    newsSecurityProviderEnabled: env.NEXUS_NEWS_SECURITY_PROVIDER_ENABLED === "true",
    hasProviderKey: hasText(env.NEXUS_NEWS_SECURITY_PROVIDER_API_KEY),
    hasPublicSourceEndpoint: hasText(env.NEXUS_NEWS_SECURITY_PUBLIC_SOURCE_ENDPOINT),
    providerCandidates: NEWS_SECURITY_PROVIDER_CANDIDATES
  });
}

function buildMockNewsSecurityResult(request = {}) {
  const query = buildNewsSecuritySourceQuery(request);
  const topic = hasText(query.regionOrTopic) ? query.regionOrTopic : "requested area";
  return normalizeSourceResult({
    sourceResultId: `news-security-mock-${topic.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "topic"}`,
    requestType: "news-security",
    providerName: NEWS_SECURITY_PROVIDER_NAME,
    providerMode: "mock",
    sourceName: "Mock News/Security Provider",
    sourceCategory: "conflict-security",
    sourceUrl: "provider:mock-news-security",
    query: `${query.queryType} for ${topic}`,
    resultSummary: `Mock news/security readiness result for ${topic}. Verify with current sources before travel or safety decisions.`,
    rawResultAvailable: false,
    freshnessStatus: "recent",
    confidenceLevel: "low",
    limitationNotes: "Mock news/security result. It is not travel clearance, emergency guidance, or a live conflict report.",
    evidenceStatus: "mock-backed",
    sourceStatus: "source-result-available"
  });
}

function buildConflictingNewsSecurityResult(request = {}) {
  const query = buildNewsSecuritySourceQuery(request);
  const topic = hasText(query.regionOrTopic) ? query.regionOrTopic : "requested area";
  return normalizeSourceResult({
    sourceResultId: `news-security-conflict-${topic.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "topic"}`,
    requestType: "news-security",
    providerName: NEWS_SECURITY_PROVIDER_NAME,
    providerMode: "mock",
    sourceName: "Mock Multi-Source Security Provider",
    sourceCategory: "conflict-security",
    sourceUrl: "provider:mock-news-security",
    query: `${query.queryType} conflicting signals for ${topic}`,
    resultSummary: `Mock source conflict for ${topic}. Nexus must disclose uncertainty and avoid definitive travel guidance.`,
    rawResultAvailable: false,
    freshnessStatus: "conflicting",
    confidenceLevel: "low",
    limitationNotes: "Conflicting source signals require user-facing caution and additional verification.",
    evidenceStatus: "conflicting",
    sourceStatus: "source-conflict-detected"
  });
}

function buildNewsSecurityProviderUnavailableResult(reason) {
  return buildProviderUnavailableResult("news-security", reason || "news/security provider flags or config are missing");
}

function getNewsSecuritySourceResult(request = {}, env = process.env) {
  const query = buildNewsSecuritySourceQuery(request);
  if (!hasText(query.regionOrTopic)) {
    return normalizeSourceResult({
      sourceResultId: "news-security-region-required",
      requestType: "news-security",
      providerName: NEWS_SECURITY_PROVIDER_NAME,
      providerMode: "fixture",
      sourceName: "News/Security Provider Required",
      sourceCategory: "conflict-security",
      sourceUrl: "provider-required",
      query: "news/security region missing",
      resultSummary: "Which area should I check?",
      rawResultAvailable: false,
      freshnessStatus: "unavailable",
      confidenceLevel: "low",
      limitationNotes: "News/security lookup requires a user-provided area or topic. Nexus cannot dispatch help or certify safety.",
      evidenceStatus: "source-unavailable",
      sourceStatus: "provider-required"
    });
  }

  const config = resolveNewsSecurityProviderConfig(env);
  if (config.providerMode === "fixture") {
    return buildNewsSecurityProviderUnavailableResult("live news/security retrieval is disabled or not configured");
  }

  if (request.conflictExpected === true) {
    return buildConflictingNewsSecurityResult(request);
  }

  if (config.providerMode === "mock") {
    return buildMockNewsSecurityResult(request);
  }

  return normalizeSourceResult({
    sourceResultId: `news-security-live-query-ready-${query.regionOrTopic.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "topic"}`,
    requestType: "news-security",
    providerName: NEWS_SECURITY_PROVIDER_NAME,
    providerMode: "live",
    sourceName: "Configured News/Security Provider",
    sourceCategory: "conflict-security",
    sourceUrl: "provider:news-security",
    query: `${query.queryType} for ${query.regionOrTopic}`,
    resultSummary: "News/security provider is configured for a future read-only live query. No network request is made in this readiness phase.",
    rawResultAvailable: false,
    freshnessStatus: "unavailable",
    confidenceLevel: "medium",
    limitationNotes: "Live provider config is present, but this readiness module does not perform network calls or provide safety clearance.",
    evidenceStatus: "source-unavailable",
    sourceStatus: "source-query-ready"
  });
}

module.exports = Object.freeze({
  NEWS_SECURITY_PROVIDER_NAME,
  NEWS_SECURITY_PROVIDER_CANDIDATES,
  buildNewsSecuritySourceQuery,
  resolveNewsSecurityProviderConfig,
  buildMockNewsSecurityResult,
  buildConflictingNewsSecurityResult,
  buildNewsSecurityProviderUnavailableResult,
  getNewsSecuritySourceResult
});
