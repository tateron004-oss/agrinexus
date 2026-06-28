const { isSafeReadOnlySourceResult, buildProviderErrorResult } = require("../public/nexus-live-source-result-contract.js");
const weather = require("./nexus-weather-source-provider.js");
const agriculture = require("./nexus-agriculture-context-source-provider.js");
const newsSecurity = require("./nexus-news-security-source-provider.js");
const jobs = require("./nexus-job-search-source-provider.js");
const shipment = require("./nexus-shipment-tracking-source-provider.js");
const musicMedia = require("./nexus-music-media-source-provider.js");

const PROVIDER_HARNESS_CASES = Object.freeze({
  weather: Object.freeze({
    request: Object.freeze({ locationText: "Stockton, CA", timeframe: "current" }),
    missingRequest: Object.freeze({}),
    enabledFlag: "NEXUS_WEATHER_PROVIDER_ENABLED",
    keyName: "NEXUS_WEATHER_PROVIDER_API_KEY",
    getResult: weather.getWeatherSourceResult
  }),
  "agriculture-context": Object.freeze({
    request: Object.freeze({ topic: "maize crop disease updates", locationText: "Kenya" }),
    missingRequest: Object.freeze({}),
    enabledFlag: "NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED",
    keyName: "NEXUS_AGRICULTURE_CONTEXT_PROVIDER_API_KEY",
    getResult: agriculture.getAgricultureContextSourceResult
  }),
  "news-security": Object.freeze({
    request: Object.freeze({ regionOrTopic: "farm security updates in Kenya" }),
    missingRequest: Object.freeze({}),
    enabledFlag: "NEXUS_NEWS_SECURITY_PROVIDER_ENABLED",
    keyName: "NEXUS_NEWS_SECURITY_PROVIDER_API_KEY",
    getResult: newsSecurity.getNewsSecuritySourceResult
  }),
  "job-search": Object.freeze({
    request: Object.freeze({ query: "farm jobs", locationText: "Nairobi" }),
    missingRequest: Object.freeze({ query: "farm jobs" }),
    enabledFlag: "NEXUS_JOB_SEARCH_PROVIDER_ENABLED",
    keyName: "NEXUS_JOB_SEARCH_PROVIDER_API_KEY",
    getResult: jobs.getJobSearchSourceResult
  }),
  "shipment-tracking": Object.freeze({
    request: Object.freeze({ trackingNumber: "AB12345678" }),
    missingRequest: Object.freeze({}),
    enabledFlag: "NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED",
    keyName: "NEXUS_SHIPMENT_TRACKING_PROVIDER_API_KEY",
    getResult: shipment.getShipmentTrackingSourceResult
  }),
  "music-media": Object.freeze({
    request: Object.freeze({ mediaRequest: "Kenya farming music information" }),
    missingRequest: Object.freeze({}),
    enabledFlag: "NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED",
    keyName: "NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY",
    getResult: musicMedia.getMusicMediaSourceResult
  })
});

function buildEnvFor(providerCase, mode) {
  const env = { NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true" };
  if (mode === "disabled") return {};
  env[providerCase.enabledFlag] = "true";
  if (mode === "live-ready") env[providerCase.keyName] = "configured-for-test";
  return env;
}

function sanitizeHarnessResult(providerId, scenario, result) {
  return Object.freeze({
    providerId,
    scenario,
    sourceStatus: result.sourceStatus,
    providerMode: result.providerMode,
    requestType: result.requestType,
    sourceName: result.sourceName,
    sourceUrl: result.sourceUrl,
    resultSummary: result.resultSummary,
    freshnessStatus: result.freshnessStatus,
    confidenceLevel: result.confidenceLevel,
    evidenceStatus: result.evidenceStatus,
    safeReadOnly: isSafeReadOnlySourceResult(result),
    noExecutionAuthorized: result.executionAuthority === false,
    noBackendWritePerformed: true,
    noLocationPermissionRequested: true,
    noProviderContactAuthorized: true
  });
}

function runProviderHarnessScenario(providerId, scenario) {
  const providerCase = PROVIDER_HARNESS_CASES[providerId];
  if (!providerCase) throw new Error(`Unknown provider harness: ${providerId}`);
  if (scenario === "provider-error") {
    return sanitizeHarnessResult(providerId, scenario, buildProviderErrorResult(providerId, "source-error"));
  }
  const request = scenario === "missing-input" ? providerCase.missingRequest : providerCase.request;
  const mode = scenario === "disabled" ? "disabled" : scenario === "mock" ? "mock" : "live-ready";
  return sanitizeHarnessResult(providerId, scenario, providerCase.getResult(request, buildEnvFor(providerCase, mode)));
}

function runAllProviderAdoptionHarnesses() {
  return Object.freeze(Object.keys(PROVIDER_HARNESS_CASES).map(providerId => Object.freeze({
    providerId,
    scenarios: Object.freeze(["missing-input", "disabled", "mock", "live-ready", "provider-error"].map(scenario => runProviderHarnessScenario(providerId, scenario)))
  })));
}

module.exports = Object.freeze({
  PROVIDER_HARNESS_CASES,
  runProviderHarnessScenario,
  runAllProviderAdoptionHarnesses
});
