const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  normalizeSourceResult,
  isSafeReadOnlySourceResult
} = require("../public/nexus-live-source-result-contract.js");
const weatherProvider = require("../server/nexus-weather-source-provider.js");
const assistantPreview = require("../server/nexus-assistant-live-source-preview.js");

const root = path.resolve(__dirname, "..");
const DEFAULT_WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const DEFAULT_TEST_LOCATION = "Stockton, CA";

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isLiveWeatherValidationConfigured(env = process.env) {
  return env.NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED === "true"
    && env.NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED === "true"
    && env.NEXUS_WEATHER_PROVIDER_ENABLED === "true"
    && hasText(env.NEXUS_WEATHER_PROVIDER_API_KEY);
}

function buildSafeWeatherValidationAuditEvent({ status, locationText, providerName, sourceStatus }) {
  return Object.freeze({
    eventType: "weather-live-provider-validation",
    status,
    providerName,
    locationText,
    sourceStatus,
    readOnly: true,
    noExecutionAuthorized: true,
    noLocationPermissionRequested: true,
    noDispatchAuthorized: true,
    createdAt: new Date().toISOString()
  });
}

function buildSafeWeatherValidationResult({ status, locationText, sourceResult, liveAttempted, liveSkippedReason }) {
  const providerName = sourceResult.providerName || "weather";
  return Object.freeze({
    validationId: "nexus-weather-live-provider-validation",
    status,
    providerName,
    queryLocationText: locationText,
    retrievedAt: sourceResult.retrievedAt,
    sourceResult,
    normalizedWeatherSummary: sourceResult.resultSummary,
    confidence: sourceResult.confidenceLevel,
    citation: Object.freeze({
      sourceName: sourceResult.sourceName,
      sourceCategory: sourceResult.sourceCategory,
      sourceUrl: sourceResult.sourceUrl,
      evidenceStatus: sourceResult.evidenceStatus,
      freshnessStatus: sourceResult.freshnessStatus
    }),
    safetyPosture: Object.freeze({
      readOnly: true,
      noExecutionRequired: true,
      executionAuthority: false,
      noExecutionAuthorized: true,
      noLocationPermissionRequested: true,
      noDispatchAuthorized: true,
      standardUserRuntimeActivated: false,
      providerHandoffAuthorized: false,
      backendWriteAuthorized: false
    }),
    auditEvent: buildSafeWeatherValidationAuditEvent({
      status,
      locationText,
      providerName,
      sourceStatus: sourceResult.sourceStatus
    }),
    liveAttempted,
    liveSkippedReason: liveSkippedReason || "",
    noExecutionAuthorized: true,
    noLocationPermissionRequested: true,
    noDispatchAuthorized: true
  });
}

function buildSafeWeatherProviderErrorResult(locationText, errorType, message) {
  return normalizeSourceResult({
    sourceResultId: "weather-live-provider-error",
    requestType: "weather",
    providerName: "OpenWeather",
    providerMode: "live",
    sourceName: "OpenWeather",
    sourceCategory: "weather",
    sourceUrl: "https://openweathermap.org/",
    query: `weather current for ${locationText}`,
    resultSummary: "Weather provider validation failed safely. No fallback execution occurred.",
    rawResultAvailable: false,
    freshnessStatus: "unavailable",
    confidenceLevel: "low",
    limitationNotes: `${errorType || "source-error"}: ${message || "weather provider request failed"}`,
    evidenceStatus: "source-unavailable",
    sourceStatus: "source-error"
  });
}

function buildMissingConfigResult(locationText, reason) {
  const sourceResult = weatherProvider.getWeatherSourceResult({ locationText }, {});
  return buildSafeWeatherValidationResult({
    status: "skipped-missing-config",
    locationText,
    sourceResult,
    liveAttempted: false,
    liveSkippedReason: reason
  });
}

function buildMissingLocationResult() {
  const sourceResult = weatherProvider.getWeatherSourceResult({}, {
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_API_KEY: "configured"
  });
  return buildSafeWeatherValidationResult({
    status: "skipped-missing-location",
    locationText: "",
    sourceResult,
    liveAttempted: false,
    liveSkippedReason: "explicit location text is required"
  });
}

function normalizeOpenWeatherPayload(payload, locationText) {
  const weatherText = Array.isArray(payload.weather) && payload.weather[0] && hasText(payload.weather[0].description)
    ? payload.weather[0].description
    : "weather conditions available";
  const tempText = payload.main && typeof payload.main.temp === "number"
    ? `${Math.round(payload.main.temp)} C`
    : "temperature unavailable";
  const cityName = hasText(payload.name) ? payload.name : locationText;
  const country = payload.sys && hasText(payload.sys.country) ? `, ${payload.sys.country}` : "";
  const retrievedAt = new Date().toISOString();

  return normalizeSourceResult({
    sourceResultId: `weather-live-openweather-${String(cityName).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "location"}`,
    requestType: "weather",
    providerName: "OpenWeather",
    providerMode: "live",
    sourceName: "OpenWeather",
    sourceCategory: "weather",
    sourceUrl: "https://openweathermap.org/",
    query: `weather current for ${locationText}`,
    resultSummary: `Current weather for ${cityName}${country}: ${weatherText}, about ${tempText}.`,
    rawResultAvailable: true,
    retrievedAt,
    lastUpdated: retrievedAt,
    freshnessStatus: "fresh",
    confidenceLevel: "medium",
    limitationNotes: "Read-only live weather validation. Verify directly with the provider for operational decisions.",
    evidenceStatus: "source-backed",
    sourceStatus: "source-result-available"
  });
}

async function runOpenWeatherReadOnlyLookup(locationText, env = process.env) {
  if (!hasText(locationText)) return buildMissingLocationResult();
  if (!isLiveWeatherValidationConfigured(env)) {
    return buildMissingConfigResult(locationText, "required weather live validation flags or API key are missing");
  }

  const baseUrl = hasText(env.NEXUS_WEATHER_PROVIDER_BASE_URL) ? env.NEXUS_WEATHER_PROVIDER_BASE_URL : DEFAULT_WEATHER_BASE_URL;
  const url = new URL(baseUrl);
  url.searchParams.set("q", locationText);
  url.searchParams.set("appid", env.NEXUS_WEATHER_PROVIDER_API_KEY);
  url.searchParams.set("units", "metric");

  try {
    const response = await fetch(url, { method: "GET", signal: AbortSignal.timeout(8000) });
    if (!response.ok) {
      const sourceResult = buildSafeWeatherProviderErrorResult(locationText, `http-${response.status}`, "provider returned non-success status");
      return buildSafeWeatherValidationResult({ status: "provider-error", locationText, sourceResult, liveAttempted: true });
    }

    const payload = await response.json();
    const sourceResult = normalizeOpenWeatherPayload(payload, locationText);
    return buildSafeWeatherValidationResult({ status: "live-tested", locationText, sourceResult, liveAttempted: true });
  } catch (error) {
    const sourceResult = buildSafeWeatherProviderErrorResult(locationText, error && error.name ? error.name : "fetch-error", error && error.message ? error.message : "provider request failed");
    return buildSafeWeatherValidationResult({ status: "provider-error", locationText, sourceResult, liveAttempted: true });
  }
}

function runStaticWeatherValidationAssertions() {
  const docName = "NEXUS_WEATHER_LIVE_PROVIDER_VALIDATION.md";
  const qaName = "nexus-weather-live-provider-validation-qa.js";
  assert(exists("docs", docName), "WEATHER1 validation doc must exist.");
  assert(exists("scripts", qaName), "WEATHER1 QA script must exist.");

  const doc = read("docs", docName);
  const scriptSource = read("scripts", qaName);
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "Nexus WEATHER1",
    "Read-Only Weather Provider Live Validation",
    "explicit user-provided location text only",
    "NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true",
    "NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED=true",
    "NEXUS_WEATHER_PROVIDER_ENABLED=true",
    "NEXUS_WEATHER_PROVIDER_API_KEY",
    "Stockton, CA",
    "provider name",
    "query/location text",
    "retrievedAt",
    "normalized weather summary",
    "citation/source fields",
    "audit event",
    "noExecutionAuthorized",
    "noLocationPermissionRequested",
    "noDispatchAuthorized",
    "source-error",
    "WEATHER1 does not activate"
  ].forEach(term => assert(doc.includes(term), `WEATHER1 doc must include: ${term}`));

  [
    "isLiveWeatherValidationConfigured",
    "runOpenWeatherReadOnlyLookup",
    "buildSafeWeatherProviderErrorResult",
    "buildSafeWeatherValidationResult",
    "noLocationPermissionRequested: true",
    "noDispatchAuthorized: true",
    "noExecutionAuthorized: true",
    "standardUserRuntimeActivated: false",
    "providerHandoffAuthorized: false",
    "backendWriteAuthorized: false"
  ].forEach(term => assert(scriptSource.includes(term), `WEATHER1 script must include: ${term}`));

  [app, index, server].forEach((source, indexNumber) => {
    const label = ["public/app.js", "public/index.html", "server.js"][indexNumber];
    assert(!source.includes(qaName), `${label} must not load WEATHER1 QA harness.`);
    assert(!source.includes("NEXUS_WEATHER_PROVIDER_API_KEY"), `${label} must not reference weather provider API keys.`);
  });

  [
    "navigator." + "geolocation",
    "getCurrent" + "Position",
    "watch" + "Position",
    "media" + "Devices",
    "localStorage." + "setItem",
    "sessionStorage." + "setItem",
    "write" + "File",
    "append" + "File",
    "db." + "json",
    "window." + "open",
    "location." + "href",
    "send" + "Beacon",
    "dispatch" + "Provider",
    "send" + "Message",
    "make" + "Payment",
    "book" + "Appointment",
    "emergency" + "Dispatch"
  ].forEach(term => assert(!scriptSource.includes(term), `WEATHER1 script must not include unsafe behavior: ${term}`));

  const alias = "qa:nexus-weather-live-provider-validation";
  const command = `node scripts/${qaName}`;
  assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
  assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include WEATHER1 QA.");
  assert(qaSuite.includes("scripts/nexus-sprint-live5-weather-provider-readiness-qa.js"), "WEATHER1 requires LIVE5 QA to remain in qa-suite.");
}

async function runWeatherLiveProviderValidationQa(env = process.env) {
  runStaticWeatherValidationAssertions();

  const missingLocation = buildMissingLocationResult();
  assert.equal(missingLocation.status, "skipped-missing-location", "missing location path must be safe.");
  assert.equal(missingLocation.noLocationPermissionRequested, true, "missing location path must not request location permission.");
  assert.equal(missingLocation.noExecutionAuthorized, true, "missing location path must not authorize execution.");
  assert.equal(isSafeReadOnlySourceResult(missingLocation.sourceResult), true, "missing location source result must be safe.");

  const disabled = buildMissingConfigResult(DEFAULT_TEST_LOCATION, "disabled flag path");
  assert.equal(disabled.status, "skipped-missing-config", "disabled path must skip safely.");
  assert.equal(disabled.noDispatchAuthorized, true, "disabled path must not authorize dispatch.");
  assert.equal(disabled.sourceResult.executionAuthority, false, "disabled path must not grant execution.");
  assert.equal(isSafeReadOnlySourceResult(disabled.sourceResult), true, "disabled path source result must be safe.");

  const locationText = hasText(env.NEXUS_WEATHER_VALIDATION_LOCATION) ? env.NEXUS_WEATHER_VALIDATION_LOCATION : DEFAULT_TEST_LOCATION;
  const validation = await runOpenWeatherReadOnlyLookup(locationText, env);
  assert.equal(validation.noExecutionAuthorized, true, "validation must not authorize execution.");
  assert.equal(validation.noLocationPermissionRequested, true, "validation must not request location permission.");
  assert.equal(validation.noDispatchAuthorized, true, "validation must not authorize dispatch.");
  assert.equal(validation.safetyPosture.readOnly, true, "validation safety posture must be read-only.");
  assert.equal(validation.safetyPosture.executionAuthority, false, "validation safety posture must not grant execution.");
  assert.equal(isSafeReadOnlySourceResult(validation.sourceResult), true, "validation source result must be safe.");

  const previewDisabled = assistantPreview.buildAssistantLiveSourcePreview("Nexus, what is the weather in Stockton, CA?", {}, {});
  assert.equal(previewDisabled.sourcePreviewEnabled, false, "assistant live source preview must remain default-off.");
  assert.equal(previewDisabled.executionAuthority, false, "assistant preview must not grant execution.");

  return validation;
}

if (require.main === module) {
  runWeatherLiveProviderValidationQa()
    .then(result => {
      const publicResult = {
        status: result.status,
        providerName: result.providerName,
        queryLocationText: result.queryLocationText,
        retrievedAt: result.retrievedAt,
        sourceStatus: result.sourceResult.sourceStatus,
        freshnessStatus: result.sourceResult.freshnessStatus,
        confidence: result.confidence,
        evidenceStatus: result.citation.evidenceStatus,
        noExecutionAuthorized: result.noExecutionAuthorized,
        noLocationPermissionRequested: result.noLocationPermissionRequested,
        noDispatchAuthorized: result.noDispatchAuthorized,
        liveAttempted: result.liveAttempted,
        liveSkippedReason: result.liveSkippedReason
      };
      console.log(JSON.stringify(publicResult, null, 2));
      console.log("[nexus-weather-live-provider-validation-qa] passed");
    })
    .catch(error => {
      console.error(error && error.stack ? error.stack : error);
      process.exitCode = 1;
    });
}

module.exports = Object.freeze({
  DEFAULT_TEST_LOCATION,
  isLiveWeatherValidationConfigured,
  buildSafeWeatherValidationAuditEvent,
  buildSafeWeatherValidationResult,
  buildSafeWeatherProviderErrorResult,
  buildMissingConfigResult,
  buildMissingLocationResult,
  normalizeOpenWeatherPayload,
  runOpenWeatherReadOnlyLookup,
  runStaticWeatherValidationAssertions,
  runWeatherLiveProviderValidationQa
});
