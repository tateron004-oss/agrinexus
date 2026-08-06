const {
  normalizeSourceResult,
  buildProviderUnavailableResult,
  getConfiguredProviderMode
} = require("../public/nexus-live-source-result-contract.js");

const WEATHER_PROVIDER_NAME = "weather";
const WEATHER_PROVIDER_CANDIDATES = Object.freeze([
  "OpenWeather",
  "Open-Meteo",
  "WeatherAPI",
  "Tomorrow.io",
  "Meteomatics",
  "NASA POWER"
]);

const OPEN_METEO_GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/search";
const OPEN_METEO_FORECAST_URL = "https://api.open-meteo.com/v1/forecast";
const NOMINATIM_GEOCODING_URL = "https://nominatim.openstreetmap.org/search";
const MET_NORWAY_FORECAST_URL = "https://api.met.no/weatherapi/locationforecast/2.0/compact";
const weatherResultCache = new Map();

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
  const openMeteoPublicProviderEnabled = env.NEXUS_WEATHER_OPEN_METEO_PROVIDER_ENABLED !== "false";
  return Object.freeze({
    providerName: WEATHER_PROVIDER_NAME,
    providerMode,
    liveSourceEnabled: env.NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED !== "false",
    weatherProviderEnabled: env.NEXUS_WEATHER_PROVIDER_ENABLED !== "false",
    openMeteoPublicProviderEnabled,
    hasProviderKey: hasText(env.NEXUS_WEATHER_PROVIDER_API_KEY),
    providerCandidates: WEATHER_PROVIDER_CANDIDATES
  });
}

function isOpenMeteoPublicProviderConfigured(env = process.env) {
  return env.NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED !== "false"
    && env.NEXUS_WEATHER_PROVIDER_ENABLED !== "false"
    && env.NEXUS_WEATHER_OPEN_METEO_PROVIDER_ENABLED !== "false";
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

function buildOpenMeteoProviderErrorResult(locationText, errorType) {
  return normalizeSourceResult({
    sourceResultId: `weather-open-meteo-error-${normalizeLocationText(locationText).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "location"}`,
    requestType: "weather",
    providerName: WEATHER_PROVIDER_NAME,
    providerMode: "live",
    sourceName: "Open-Meteo",
    sourceCategory: "weather",
    sourceUrl: "https://open-meteo.com/",
    query: `current weather for ${normalizeLocationText(locationText) || "requested location"}`,
    resultSummary: "Open-Meteo weather lookup failed safely. No fallback execution occurred.",
    rawResultAvailable: false,
    freshnessStatus: "unavailable",
    confidenceLevel: "low",
    limitationNotes: `${errorType || "source-error"}; verify directly with the provider before operational use.`,
    evidenceStatus: "source-unavailable",
    sourceStatus: "source-error"
  });
}

function weatherCodeSummary(code) {
  const numeric = Number(code);
  if ([0].includes(numeric)) return "clear sky";
  if ([1, 2, 3].includes(numeric)) return "partly cloudy";
  if ([45, 48].includes(numeric)) return "fog";
  if ([51, 53, 55, 56, 57].includes(numeric)) return "drizzle";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(numeric)) return "rain";
  if ([71, 73, 75, 77, 85, 86].includes(numeric)) return "snow";
  if ([95, 96, 99].includes(numeric)) return "thunderstorm";
  return "weather conditions available";
}

function normalizeOpenMeteoWeatherPayload({ locationText, geocodingPayload, forecastPayload }) {
  const location = Array.isArray(geocodingPayload.results) && geocodingPayload.results[0] ? geocodingPayload.results[0] : {};
  const current = forecastPayload && forecastPayload.current ? forecastPayload.current : {};
  const city = hasText(location.name) ? location.name : normalizeLocationText(locationText);
  const admin = hasText(location.admin1) ? `, ${location.admin1}` : "";
  const country = hasText(location.country_code) ? `, ${location.country_code}` : "";
  const temperature = typeof current.temperature_2m === "number" ? `${Math.round(current.temperature_2m)} C` : "temperature unavailable";
  const wind = typeof current.wind_speed_10m === "number" ? `${Math.round(current.wind_speed_10m)} km/h wind` : "wind unavailable";
  const conditions = weatherCodeSummary(current.weather_code);
  const retrievedAt = new Date().toISOString();

  return normalizeSourceResult({
    sourceResultId: `weather-open-meteo-${city.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "location"}`,
    requestType: "weather",
    providerName: WEATHER_PROVIDER_NAME,
    providerMode: "live",
    sourceName: "Open-Meteo",
    sourceCategory: "weather",
    sourceUrl: "https://open-meteo.com/",
    query: `current weather for ${normalizeLocationText(locationText)}`,
    resultSummary: `Current weather for ${city}${admin}${country}: ${conditions}, about ${temperature}, with ${wind}.`,
    rawResultAvailable: true,
    retrievedAt,
    lastUpdated: hasText(current.time) ? current.time : retrievedAt,
    freshnessStatus: "fresh",
    confidenceLevel: "medium",
    limitationNotes: "Read-only public Open-Meteo result. Verify directly with the provider for operational decisions.",
    evidenceStatus: "source-backed",
    sourceStatus: "source-result-available"
  });
}

async function fetchJson(fetchImpl, url) {
  const response = await fetchImpl(url, {
    method: "GET",
    headers: { "user-agent": "NexusGenesis/1.0 weather-resilience" },
    signal: AbortSignal.timeout(8000)
  });
  if (!response || response.ok !== true) {
    const status = response && typeof response.status !== "undefined" ? `http-${response.status}` : "http-error";
    throw new Error(status);
  }
  return response.json();
}

function retryableWeatherError(error) {
  return /http-(429|5\d\d)|fetch|timeout|network/i.test(String(error && error.message || error || ""));
}

async function fetchJsonWithRetry(fetchImpl, url, env = process.env) {
  const attempts = Math.max(1, Number(env.NEXUS_WEATHER_RETRY_ATTEMPTS || 2));
  const wait = typeof env.NEXUS_WEATHER_WAIT_IMPL === "function"
    ? env.NEXUS_WEATHER_WAIT_IMPL
    : delay => new Promise(resolve => setTimeout(resolve, delay));
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await fetchJson(fetchImpl, url);
    } catch (error) {
      lastError = error;
      if (!retryableWeatherError(error) || attempt === attempts) break;
      await wait(Math.min(1000, 150 * (2 ** (attempt - 1))));
    }
  }
  throw lastError;
}

function weatherCacheKey(request = {}) {
  return normalizeLocationText(request.locationText).toLowerCase();
}

function readCachedWeather(request, env = process.env) {
  const cached = weatherResultCache.get(weatherCacheKey(request));
  const ttlMs = Math.max(1000, Number(env.NEXUS_WEATHER_CACHE_TTL_MS || 600000));
  return cached && Date.now() - cached.storedAt <= ttlMs ? cached.result : null;
}

function cacheWeather(request, result) {
  if (result && result.sourceStatus === "source-result-available") {
    weatherResultCache.set(weatherCacheKey(request), { storedAt: Date.now(), result });
  }
  return result;
}

function normalizeMetNorwayWeatherPayload({ locationText, geocodingPayload, forecastPayload }) {
  const location = Array.isArray(geocodingPayload) && geocodingPayload[0] ? geocodingPayload[0] : {};
  const instant = forecastPayload?.properties?.timeseries?.[0];
  const details = instant?.data?.instant?.details || {};
  const symbol = instant?.data?.next_1_hours?.summary?.symbol_code || instant?.data?.next_6_hours?.summary?.symbol_code || "conditions available";
  const city = hasText(location.display_name) ? location.display_name.split(",")[0] : normalizeLocationText(locationText);
  const temperature = typeof details.air_temperature === "number" ? `${Math.round(details.air_temperature)} C` : "temperature unavailable";
  const wind = typeof details.wind_speed === "number" ? `${Math.round(details.wind_speed * 3.6)} km/h wind` : "wind unavailable";
  const retrievedAt = new Date().toISOString();
  return normalizeSourceResult({
    sourceResultId: `weather-met-norway-${city.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "location"}`,
    requestType: "weather",
    providerName: WEATHER_PROVIDER_NAME,
    providerMode: "live",
    sourceName: "MET Norway Locationforecast",
    sourceCategory: "weather",
    sourceUrl: "https://api.met.no/weatherapi/locationforecast/2.0/documentation",
    query: `current weather for ${normalizeLocationText(locationText)}`,
    resultSummary: `Current weather for ${city}: ${String(symbol).replace(/_/g, " ")}, about ${temperature}, with ${wind}.`,
    rawResultAvailable: true,
    retrievedAt,
    lastUpdated: instant?.time || retrievedAt,
    freshnessStatus: "fresh",
    confidenceLevel: "medium",
    limitationNotes: "Read-only MET Norway result geocoded by OpenStreetMap Nominatim. Verify directly for operational decisions.",
    evidenceStatus: "source-backed",
    sourceStatus: "source-result-available"
  });
}

async function runMetNorwayFallbackLookup(request = {}, env = process.env) {
  const query = buildWeatherSourceQuery(request);
  const fetchImpl = typeof env.NEXUS_WEATHER_FETCH_IMPL === "function" ? env.NEXUS_WEATHER_FETCH_IMPL : globalThis.fetch;
  if (!hasText(query.locationText) || typeof fetchImpl !== "function") return null;
  const geocodingUrl = new URL(NOMINATIM_GEOCODING_URL);
  geocodingUrl.searchParams.set("q", query.locationText);
  geocodingUrl.searchParams.set("format", "jsonv2");
  geocodingUrl.searchParams.set("limit", "1");
  const geocodingPayload = await fetchJsonWithRetry(fetchImpl, geocodingUrl, env);
  const location = Array.isArray(geocodingPayload) ? geocodingPayload[0] : null;
  const latitude = Number(location?.lat);
  const longitude = Number(location?.lon);
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) throw new Error("fallback-location-not-found");
  const forecastUrl = new URL(MET_NORWAY_FORECAST_URL);
  forecastUrl.searchParams.set("lat", String(latitude));
  forecastUrl.searchParams.set("lon", String(longitude));
  const forecastPayload = await fetchJsonWithRetry(fetchImpl, forecastUrl, env);
  return normalizeMetNorwayWeatherPayload({ locationText: query.locationText, geocodingPayload, forecastPayload });
}

async function runOpenMeteoReadOnlyLookup(request = {}, env = process.env) {
  const query = buildWeatherSourceQuery(request);
  if (!hasText(query.locationText)) {
    return getWeatherSourceResult(request, env);
  }
  if (!isOpenMeteoPublicProviderConfigured(env)) {
    return getWeatherSourceResult(request, env);
  }

  const fetchImpl = typeof env.NEXUS_WEATHER_FETCH_IMPL === "function" ? env.NEXUS_WEATHER_FETCH_IMPL : globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    return buildOpenMeteoProviderErrorResult(query.locationText, "fetch-unavailable");
  }

  try {
    const geocodingUrl = new URL(OPEN_METEO_GEOCODING_URL);
    geocodingUrl.searchParams.set("name", query.locationText);
    geocodingUrl.searchParams.set("count", "1");
    geocodingUrl.searchParams.set("language", "en");
    geocodingUrl.searchParams.set("format", "json");
    const geocodingPayload = await fetchJsonWithRetry(fetchImpl, geocodingUrl, env);
    const location = Array.isArray(geocodingPayload.results) && geocodingPayload.results[0] ? geocodingPayload.results[0] : null;
    if (!location || typeof location.latitude !== "number" || typeof location.longitude !== "number") {
      return buildOpenMeteoProviderErrorResult(query.locationText, "location-not-found");
    }

    const forecastUrl = new URL(OPEN_METEO_FORECAST_URL);
    forecastUrl.searchParams.set("latitude", String(location.latitude));
    forecastUrl.searchParams.set("longitude", String(location.longitude));
    forecastUrl.searchParams.set("current", "temperature_2m,weather_code,wind_speed_10m");
    forecastUrl.searchParams.set("timezone", "auto");
    const forecastPayload = await fetchJsonWithRetry(fetchImpl, forecastUrl, env);
    return cacheWeather(request, normalizeOpenMeteoWeatherPayload({ locationText: query.locationText, geocodingPayload, forecastPayload }));
  } catch (error) {
    try {
      return cacheWeather(request, await runMetNorwayFallbackLookup(request, env));
    } catch (fallbackError) {
      const cached = readCachedWeather(request, env);
      if (cached) return cached;
      return buildOpenMeteoProviderErrorResult(query.locationText, `all-providers-failed: ${error?.message || "source-error"}; ${fallbackError?.message || "fallback-error"}`);
    }
  }
}

async function getWeatherSourceResultAsync(request = {}, env = process.env) {
  if (isOpenMeteoPublicProviderConfigured(env)) {
    return runOpenMeteoReadOnlyLookup(request, env);
  }
  return getWeatherSourceResult(request, env);
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
  OPEN_METEO_GEOCODING_URL,
  OPEN_METEO_FORECAST_URL,
  NOMINATIM_GEOCODING_URL,
  MET_NORWAY_FORECAST_URL,
  buildWeatherSourceQuery,
  resolveWeatherProviderConfig,
  isOpenMeteoPublicProviderConfigured,
  buildMockWeatherResult,
  buildWeatherProviderUnavailableResult,
  buildOpenMeteoProviderErrorResult,
  normalizeOpenMeteoWeatherPayload,
  normalizeMetNorwayWeatherPayload,
  runMetNorwayFallbackLookup,
  runOpenMeteoReadOnlyLookup,
  getWeatherSourceResult,
  getWeatherSourceResultAsync
});
