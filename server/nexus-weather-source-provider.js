const {
  normalizeSourceResult,
  buildProviderUnavailableResult,
  getConfiguredProviderMode
} = require("../public/nexus-live-source-result-contract.js");

const WEATHER_PROVIDER_NAME = "weather";
const WEATHER_PROVIDER_CANDIDATES = Object.freeze([
  "OpenWeather",
  "WeatherAPI",
  "Tomorrow.io",
  "Meteomatics",
  "NASA POWER"
]);

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeLocationText(locationText) {
  return String(locationText || "").trim().replace(/\s+/g, " ");
}

function buildWeatherSourceQuery(request) {
  const location = normalizeLocationText(request && request.locationText);
  const timeframe = hasText(request && request.timeframe) ? request.timeframe.trim() : "current";
  const queryType = hasText(request && request.queryType) ? request.queryType.trim() : "weather";
  return Object.freeze({
    requestType: "weather",
    queryType,
    locationText: location,
    timeframe,
    providerCandidates: WEATHER_PROVIDER_CANDIDATES,
    requiresUserProvidedLocation: true,
    usesBrowserGeolocation: false,
    readOnly: true,
    noExecutionRequired: true,
    executionAuthority: false
  });
}

function resolveWeatherProviderConfig(env = process.env) {
  const providerMode = getConfiguredProviderMode(WEATHER_PROVIDER_NAME, env);
  return Object.freeze({
    providerName: WEATHER_PROVIDER_NAME,
    providerMode,
    liveSourceEnabled: env.NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED === "true",
    weatherProviderEnabled: env.NEXUS_WEATHER_PROVIDER_ENABLED === "true",
    hasProviderKey: hasText(env.NEXUS_WEATHER_PROVIDER_API_KEY),
    providerCandidates: WEATHER_PROVIDER_CANDIDATES
  });
}

function buildMockWeatherResult(request = {}) {
  const query = buildWeatherSourceQuery(request);
  const location = hasText(query.locationText) ? query.locationText : "requested location";
  return normalizeSourceResult({
    sourceResultId: `weather-mock-${location.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "location"}`,
    requestType: "weather",
    providerName: WEATHER_PROVIDER_NAME,
    providerMode: "mock",
    sourceName: "Mock Weather Provider",
    sourceCategory: "weather",
    sourceUrl: "provider:mock-weather",
    query: `${query.queryType} ${query.timeframe} for ${location}`,
    resultSummary: `Mock weather readiness result for ${location}.`,
    rawResultAvailable: false,
    freshnessStatus: "recent",
    confidenceLevel: "medium",
    limitationNotes: "Mock weather provider result; no live weather lookup occurred.",
    evidenceStatus: "mock-backed",
    sourceStatus: "source-result-available"
  });
}

function buildWeatherProviderUnavailableResult(reason) {
  return buildProviderUnavailableResult("weather", reason || "weather provider flags or credentials are missing");
}

function getWeatherSourceResult(request = {}, env = process.env) {
  const query = buildWeatherSourceQuery(request);
  if (!hasText(query.locationText)) {
    return normalizeSourceResult({
      sourceResultId: "weather-location-required",
      requestType: "weather",
      providerName: WEATHER_PROVIDER_NAME,
      providerMode: "fixture",
      sourceName: "Weather Provider Required",
      sourceCategory: "weather",
      sourceUrl: "provider-required",
      query: "weather location missing",
      resultSummary: "Which city or country should I check?",
      rawResultAvailable: false,
      freshnessStatus: "unavailable",
      confidenceLevel: "low",
      limitationNotes: "Weather lookup requires a user-provided city or country. Browser geolocation is not used.",
      evidenceStatus: "source-unavailable",
      sourceStatus: "provider-required"
    });
  }

  const config = resolveWeatherProviderConfig(env);
  if (config.providerMode === "fixture") {
    return buildWeatherProviderUnavailableResult("live weather retrieval is disabled or not configured");
  }

  if (config.providerMode === "mock") {
    return buildMockWeatherResult(request);
  }

  return normalizeSourceResult({
    sourceResultId: `weather-live-query-ready-${query.locationText.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "location"}`,
    requestType: "weather",
    providerName: WEATHER_PROVIDER_NAME,
    providerMode: "live",
    sourceName: "Configured Weather Provider",
    sourceCategory: "weather",
    sourceUrl: "provider:weather",
    query: `${query.queryType} ${query.timeframe} for ${query.locationText}`,
    resultSummary: "Weather provider is configured for a future read-only live query. No network request is made in this readiness phase.",
    rawResultAvailable: false,
    freshnessStatus: "unavailable",
    confidenceLevel: "medium",
    limitationNotes: "Live weather provider credentials are present, but this readiness module does not perform network calls.",
    evidenceStatus: "source-unavailable",
    sourceStatus: "source-query-ready"
  });
}

module.exports = Object.freeze({
  WEATHER_PROVIDER_NAME,
  WEATHER_PROVIDER_CANDIDATES,
  buildWeatherSourceQuery,
  resolveWeatherProviderConfig,
  buildMockWeatherResult,
  buildWeatherProviderUnavailableResult,
  getWeatherSourceResult
});
