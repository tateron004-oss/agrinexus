const {
  normalizeSourceResult,
  buildProviderUnavailableResult,
  getConfiguredProviderMode
} = require("../public/nexus-live-source-result-contract.js");

const AGRICULTURE_PROVIDER_NAME = "agriculture-context";
const AGRICULTURE_CONTEXT_CATEGORIES = Object.freeze([
  "agriculture-weather-context",
  "market-context",
  "crop-public-source-context",
  "soil-public-source-context",
  "irrigation-public-source-context",
  "food-security-context"
]);

const AGRICULTURE_PROVIDER_CANDIDATES = Object.freeze([
  "FAO",
  "FEWS NET",
  "NASA POWER",
  "Wikipedia public search",
  "local ministry/public agriculture source",
  "source-backed fixture market data"
]);

const WIKIPEDIA_SEARCH_URL = "https://en.wikipedia.org/w/api.php";

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeText(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function classifyAgricultureContextCategory(input) {
  const lower = String(input || "").toLowerCase();
  if (/\b(weather|rain|forecast|climate)\b/.test(lower)) return "agriculture-weather-context";
  if (/\b(price|market|sell|trade)\b/.test(lower)) return "market-context";
  if (/\b(soil|fertility|nutrient)\b/.test(lower)) return "soil-public-source-context";
  if (/\b(irrigation|water)\b/.test(lower)) return "irrigation-public-source-context";
  if (/\b(food security|fews|shortage)\b/.test(lower)) return "food-security-context";
  return "crop-public-source-context";
}

function buildAgricultureContextQuery(request = {}) {
  const topic = normalizeText(request.topic || request.query || "");
  const locationText = normalizeText(request.locationText || request.country || request.region || "");
  const category = AGRICULTURE_CONTEXT_CATEGORIES.includes(request.category) ? request.category : classifyAgricultureContextCategory(`${topic} ${locationText}`);
  return Object.freeze({
    requestType: "agriculture-context",
    topic,
    locationText,
    category,
    providerCandidates: AGRICULTURE_PROVIDER_CANDIDATES,
    marketplaceExecutionAllowed: false,
    paymentExecutionAllowed: false,
    cameraDiagnosisAllowed: false,
    locationSharingAllowed: false,
    readOnly: true,
    noExecutionRequired: true,
    executionAuthority: false
  });
}

function resolveAgricultureContextProviderConfig(env = process.env) {
  const providerMode = getConfiguredProviderMode(AGRICULTURE_PROVIDER_NAME, env);
  return Object.freeze({
    providerName: AGRICULTURE_PROVIDER_NAME,
    providerMode,
    liveSourceEnabled: env.NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED === "true",
    agricultureProviderEnabled: env.NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED === "true",
    publicProviderEnabled: env.NEXUS_AGRICULTURE_CONTEXT_PUBLIC_PROVIDER_ENABLED === "true",
    hasProviderKey: hasText(env.NEXUS_AGRICULTURE_CONTEXT_PROVIDER_API_KEY),
    hasPublicSourceEndpoint: hasText(env.NEXUS_AGRICULTURE_CONTEXT_PUBLIC_SOURCE_ENDPOINT),
    providerCandidates: AGRICULTURE_PROVIDER_CANDIDATES
  });
}

function isWikipediaPublicProviderConfigured(env = process.env) {
  return env.NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED === "true"
    && env.NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED === "true"
    && env.NEXUS_AGRICULTURE_CONTEXT_PUBLIC_PROVIDER_ENABLED === "true";
}

function buildMockAgricultureContextResult(request = {}) {
  const query = buildAgricultureContextQuery(request);
  const topic = hasText(query.topic) ? query.topic : query.category;
  const location = hasText(query.locationText) ? query.locationText : "requested area";
  return normalizeSourceResult({
    sourceResultId: `agriculture-context-mock-${query.category}`,
    requestType: "agriculture-context",
    providerName: AGRICULTURE_PROVIDER_NAME,
    providerMode: "mock",
    sourceName: "Mock Agriculture Context Provider",
    sourceCategory: query.category,
    sourceUrl: "provider:mock-agriculture-context",
    query: `${topic} ${location}`,
    resultSummary: `Mock agriculture context result for ${topic} in ${location}.`,
    rawResultAvailable: false,
    freshnessStatus: "recent",
    confidenceLevel: "medium",
    limitationNotes: "Mock agriculture source result. No marketplace, payment, camera, location, buyer, or seller action occurred.",
    evidenceStatus: "mock-backed",
    sourceStatus: "source-result-available"
  });
}

function buildAgricultureProviderUnavailableResult(reason) {
  return buildProviderUnavailableResult("agriculture-context", reason || "agriculture context provider flags or config are missing");
}

function buildAgriculturePublicProviderErrorResult(query, errorType) {
  return normalizeSourceResult({
    sourceResultId: `agriculture-context-public-error-${String(query.category || "context").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "context"}`,
    requestType: "agriculture-context",
    providerName: AGRICULTURE_PROVIDER_NAME,
    providerMode: "live",
    sourceName: "Wikipedia public search",
    sourceCategory: query.category || "agriculture-context",
    sourceUrl: "https://www.wikipedia.org/",
    query: `${query.topic || query.category} ${query.locationText || ""}`,
    resultSummary: "Wikipedia public agriculture lookup failed safely. No marketplace, payment, camera, or location action occurred.",
    rawResultAvailable: false,
    freshnessStatus: "unavailable",
    confidenceLevel: "low",
    limitationNotes: `${errorType || "source-error"}; verify directly with agriculture extension or official public sources before operational use.`,
    evidenceStatus: "source-unavailable",
    sourceStatus: "source-error"
  });
}

function normalizeWikipediaSearchPayload(query, payload) {
  const first = payload && payload.query && Array.isArray(payload.query.search) ? payload.query.search[0] : null;
  if (!first || !hasText(first.title)) return buildAgriculturePublicProviderErrorResult(query, "source-result-empty");
  const title = normalizeText(first.title);
  const snippet = normalizeText(String(first.snippet || "").replace(/<[^>]+>/g, " "));
  const sourceUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(title.replace(/\s+/g, "_"))}`;
  const summary = snippet
    ? `Public agriculture context for ${query.topic || query.category}: ${title} - ${snippet}.`
    : `Public agriculture context source found for ${query.topic || query.category}: ${title}.`;
  return normalizeSourceResult({
    sourceResultId: `agriculture-context-wikipedia-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "result"}`,
    requestType: "agriculture-context",
    providerName: AGRICULTURE_PROVIDER_NAME,
    providerMode: "live",
    sourceName: "Wikipedia public search",
    sourceCategory: query.category,
    sourceUrl,
    query: `${query.topic || query.category} ${query.locationText}`,
    resultSummary: summary,
    rawResultAvailable: true,
    freshnessStatus: "recent",
    confidenceLevel: "medium",
    limitationNotes: "Read-only public encyclopedia result. Verify with local extension, ministry, or agronomy sources before operational decisions.",
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

async function runWikipediaAgricultureReadOnlyLookup(request = {}, env = process.env) {
  const query = buildAgricultureContextQuery(request);
  if (!hasText(query.topic) && !hasText(query.locationText)) return getAgricultureContextSourceResult(request, env);
  if (!isWikipediaPublicProviderConfigured(env)) return getAgricultureContextSourceResult(request, env);
  const fetchImpl = typeof env.NEXUS_AGRICULTURE_CONTEXT_FETCH_IMPL === "function" ? env.NEXUS_AGRICULTURE_CONTEXT_FETCH_IMPL : globalThis.fetch;
  if (typeof fetchImpl !== "function") return buildAgriculturePublicProviderErrorResult(query, "fetch-unavailable");
  try {
    const url = new URL(WIKIPEDIA_SEARCH_URL);
    url.searchParams.set("action", "query");
    url.searchParams.set("list", "search");
    url.searchParams.set("srsearch", `${query.topic || query.category} agriculture ${query.locationText || ""}`.trim());
    url.searchParams.set("format", "json");
    url.searchParams.set("origin", "*");
    url.searchParams.set("srlimit", "1");
    const payload = await fetchJson(fetchImpl, url);
    return normalizeWikipediaSearchPayload(query, payload);
  } catch (error) {
    return buildAgriculturePublicProviderErrorResult(query, error && error.message ? error.message : "source-error");
  }
}

async function getAgricultureContextSourceResultAsync(request = {}, env = process.env) {
  if (isWikipediaPublicProviderConfigured(env)) return runWikipediaAgricultureReadOnlyLookup(request, env);
  return getAgricultureContextSourceResult(request, env);
}

function getAgricultureContextSourceResult(request = {}, env = process.env) {
  const query = buildAgricultureContextQuery(request);
  if (!hasText(query.topic) && !hasText(query.locationText)) {
    return normalizeSourceResult({
      sourceResultId: "agriculture-context-topic-required",
      requestType: "agriculture-context",
      providerName: AGRICULTURE_PROVIDER_NAME,
      providerMode: "fixture",
      sourceName: "Agriculture Context Provider Required",
      sourceCategory: "agriculture-context",
      sourceUrl: "provider-required",
      query: "agriculture context topic missing",
      resultSummary: "Which crop, market, weather, soil, irrigation, or food-security topic should I check?",
      rawResultAvailable: false,
      freshnessStatus: "unavailable",
      confidenceLevel: "low",
      limitationNotes: "Agriculture context needs a topic or location. No marketplace action occurred.",
      evidenceStatus: "source-unavailable",
      sourceStatus: "provider-required"
    });
  }

  const config = resolveAgricultureContextProviderConfig(env);
  if (config.providerMode === "fixture") {
    return buildAgricultureProviderUnavailableResult("live agriculture context retrieval is disabled or not configured");
  }

  if (config.providerMode === "mock") {
    return buildMockAgricultureContextResult(request);
  }

  return normalizeSourceResult({
    sourceResultId: `agriculture-context-live-query-ready-${query.category}`,
    requestType: "agriculture-context",
    providerName: AGRICULTURE_PROVIDER_NAME,
    providerMode: "live",
    sourceName: "Configured Agriculture Context Provider",
    sourceCategory: query.category,
    sourceUrl: "provider:agriculture-context",
    query: `${query.topic || query.category} ${query.locationText}`,
    resultSummary: "Agriculture context provider is configured for a future read-only live query. No network request is made in this readiness phase.",
    rawResultAvailable: false,
    freshnessStatus: "unavailable",
    confidenceLevel: "medium",
    limitationNotes: "Live agriculture config is present, but this readiness module does not execute marketplace, payment, location, or camera behavior.",
    evidenceStatus: "source-unavailable",
    sourceStatus: "source-query-ready"
  });
}

module.exports = Object.freeze({
  AGRICULTURE_PROVIDER_NAME,
  AGRICULTURE_CONTEXT_CATEGORIES,
  AGRICULTURE_PROVIDER_CANDIDATES,
  WIKIPEDIA_SEARCH_URL,
  classifyAgricultureContextCategory,
  buildAgricultureContextQuery,
  resolveAgricultureContextProviderConfig,
  isWikipediaPublicProviderConfigured,
  buildMockAgricultureContextResult,
  buildAgricultureProviderUnavailableResult,
  buildAgriculturePublicProviderErrorResult,
  normalizeWikipediaSearchPayload,
  runWikipediaAgricultureReadOnlyLookup,
  getAgricultureContextSourceResult,
  getAgricultureContextSourceResultAsync
});
