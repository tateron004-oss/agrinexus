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

const RELIEFWEB_REPORTS_URL = "https://api.reliefweb.int/v1/reports";

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
    publicProviderEnabled: env.NEXUS_NEWS_SECURITY_PUBLIC_PROVIDER_ENABLED === "true",
    hasProviderKey: hasText(env.NEXUS_NEWS_SECURITY_PROVIDER_API_KEY),
    hasPublicSourceEndpoint: hasText(env.NEXUS_NEWS_SECURITY_PUBLIC_SOURCE_ENDPOINT),
    providerCandidates: NEWS_SECURITY_PROVIDER_CANDIDATES
  });
}

function isReliefWebPublicProviderConfigured(env = process.env) {
  return env.NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED === "true"
    && env.NEXUS_NEWS_SECURITY_PROVIDER_ENABLED === "true"
    && env.NEXUS_NEWS_SECURITY_PUBLIC_PROVIDER_ENABLED === "true";
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

function buildReliefWebProviderErrorResult(query, errorType) {
  return normalizeSourceResult({
    sourceResultId: `news-security-reliefweb-error-${String(query.regionOrTopic || "topic").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "topic"}`,
    requestType: "news-security",
    providerName: NEWS_SECURITY_PROVIDER_NAME,
    providerMode: "live",
    sourceName: "ReliefWeb",
    sourceCategory: "news-security",
    sourceUrl: "https://reliefweb.int/",
    query: `${query.queryType} for ${query.regionOrTopic || "requested topic"}`,
    resultSummary: "ReliefWeb public news/security lookup failed safely. Nexus did not dispatch help or certify safety.",
    rawResultAvailable: false,
    freshnessStatus: "unavailable",
    confidenceLevel: "low",
    limitationNotes: `${errorType || "source-error"}; verify directly with official sources before travel, safety, or emergency decisions.`,
    evidenceStatus: "source-unavailable",
    sourceStatus: "source-error"
  });
}

function normalizeReliefWebPayload(query, payload) {
  const first = payload && Array.isArray(payload.data) ? payload.data[0] : null;
  const fields = first && first.fields ? first.fields : null;
  if (!fields || !hasText(fields.title)) return buildReliefWebProviderErrorResult(query, "source-result-empty");
  const title = normalizeTopicText(fields.title);
  const sourceUrl = hasText(fields.url) ? fields.url : "https://reliefweb.int/";
  const created = fields.date && hasText(fields.date.created) ? fields.date.created : new Date().toISOString();
  return normalizeSourceResult({
    sourceResultId: `news-security-reliefweb-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48) || "report"}`,
    requestType: "news-security",
    providerName: NEWS_SECURITY_PROVIDER_NAME,
    providerMode: "live",
    sourceName: "ReliefWeb",
    sourceCategory: "news-security",
    sourceUrl,
    query: `${query.queryType} for ${query.regionOrTopic}`,
    resultSummary: `Latest public ReliefWeb item for ${query.regionOrTopic}: ${title}.`,
    rawResultAvailable: true,
    lastUpdated: created,
    freshnessStatus: "fresh",
    confidenceLevel: "medium",
    limitationNotes: "Read-only public ReliefWeb result. It is not travel clearance, emergency guidance, or a dispatch action.",
    evidenceStatus: "source-backed",
    sourceStatus: "source-result-available"
  });
}

async function fetchJson(fetchImpl, url) {
  const response = await fetchImpl(url, { method: "GET", signal: AbortSignal.timeout(8000) });
  if (!response || response.ok !== true) {
    const status = response && typeof response.status !== "undefined" ? `http-${response.status}` : "http-error";
    throw new Error(status);
  }
  return response.json();
}

async function runReliefWebReadOnlyLookup(request = {}, env = process.env) {
  const query = buildNewsSecuritySourceQuery(request);
  if (!hasText(query.regionOrTopic)) return getNewsSecuritySourceResult(request, env);
  if (!isReliefWebPublicProviderConfigured(env)) return getNewsSecuritySourceResult(request, env);
  const fetchImpl = typeof env.NEXUS_NEWS_SECURITY_FETCH_IMPL === "function" ? env.NEXUS_NEWS_SECURITY_FETCH_IMPL : globalThis.fetch;
  if (typeof fetchImpl !== "function") return buildReliefWebProviderErrorResult(query, "fetch-unavailable");
  try {
    const url = new URL(RELIEFWEB_REPORTS_URL);
    url.searchParams.set("appname", "nexus-workforce-ai");
    url.searchParams.set("query[value]", query.regionOrTopic);
    url.searchParams.set("limit", "1");
    url.searchParams.set("preset", "latest");
    url.searchParams.set("fields[include][]", "title");
    url.searchParams.set("fields[include][]", "url");
    url.searchParams.set("fields[include][]", "date");
    const payload = await fetchJson(fetchImpl, url);
    return normalizeReliefWebPayload(query, payload);
  } catch (error) {
    return buildReliefWebProviderErrorResult(query, error && error.message ? error.message : "source-error");
  }
}

async function getNewsSecuritySourceResultAsync(request = {}, env = process.env) {
  if (isReliefWebPublicProviderConfigured(env)) return runReliefWebReadOnlyLookup(request, env);
  return getNewsSecuritySourceResult(request, env);
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
  RELIEFWEB_REPORTS_URL,
  buildNewsSecuritySourceQuery,
  resolveNewsSecurityProviderConfig,
  isReliefWebPublicProviderConfigured,
  buildMockNewsSecurityResult,
  buildConflictingNewsSecurityResult,
  buildNewsSecurityProviderUnavailableResult,
  buildReliefWebProviderErrorResult,
  normalizeReliefWebPayload,
  runReliefWebReadOnlyLookup,
  getNewsSecuritySourceResult,
  getNewsSecuritySourceResultAsync
});
