const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const weather = require("../server/nexus-weather-source-provider.js");
const runtime = require("../server/nexus-assistant-runtime-entrypoint.js");
const orchestrator = require("../server/nexus-live-source-orchestrator.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function buildFakeOpenMeteoFetch(callLog) {
  return async function fakeFetch(url) {
    const target = String(url);
    callLog.push(target);
    if (target.includes("geocoding-api.open-meteo.com")) {
      return {
        ok: true,
        status: 200,
        async json() {
          return {
            results: [{
              name: "Stockton",
              admin1: "California",
              country_code: "US",
              latitude: 37.9577,
              longitude: -121.2908
            }]
          };
        }
      };
    }
    if (target.includes("api.open-meteo.com")) {
      return {
        ok: true,
        status: 200,
        async json() {
          return {
            current: {
              time: "2026-06-28T12:00",
              temperature_2m: 29,
              weather_code: 1,
              wind_speed_10m: 9
            }
          };
        }
      };
    }
    throw new Error(`unexpected-url:${target}`);
  };
}

function buildOpenMeteoEnv(fetchImpl) {
  return Object.freeze({
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_ENABLED: "true",
    NEXUS_WEATHER_OPEN_METEO_PROVIDER_ENABLED: "true",
    NEXUS_WEATHER_FETCH_IMPL: fetchImpl
  });
}

function assertNoUnsafeRuntimeActivation() {
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const weatherSource = read("server", "nexus-weather-source-provider.js");
  const runtimeSource = read("server", "nexus-assistant-runtime-entrypoint.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(exists("server", "nexus-weather-source-provider.js"), "Weather provider source must exist.");
  assert(exists("server", "nexus-assistant-runtime-entrypoint.js"), "Assistant runtime entrypoint must exist.");
  assert(exists("scripts", "nexus-ar2-real-public-provider-runtime-qa.js"), "AR2 QA must exist.");

  assert(weatherSource.includes("OPEN_METEO_GEOCODING_URL"), "Weather provider must declare the Open-Meteo geocoding boundary.");
  assert(weatherSource.includes("OPEN_METEO_FORECAST_URL"), "Weather provider must declare the Open-Meteo forecast boundary.");
  assert(weatherSource.includes("NEXUS_WEATHER_OPEN_METEO_PROVIDER_ENABLED"), "Open-Meteo provider must stay flag-gated.");
  assert(runtimeSource.includes("buildAssistantRuntimeResponseAsync"), "Assistant runtime must expose an async read-only response path.");

  [
    "nexus-ar2-real-public-provider-runtime-qa",
    "NEXUS_WEATHER_OPEN_METEO_PROVIDER_ENABLED",
    "buildAssistantRuntimeResponseAsync",
    "runOpenMeteoReadOnlyLookup"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not expose ${term} in Standard User runtime.`);
    assert(!index.includes(term), `public/index.html must not expose ${term} in Standard User runtime.`);
  });
  assert(!server.includes("nexus-assistant-runtime-entrypoint"), "server.js must not expose the AR2 assistant runtime.");

  [
    "navigator.geolocation",
    "getCurrentPosition",
    "watchPosition",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "window.open",
    "location.href",
    "ACTION_CALL",
    "createPayment",
    "dispatchEmergency"
  ].forEach(term => assert(!weatherSource.includes(term), `Weather provider must not introduce unsafe behavior: ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-ar2-real-public-provider-runtime"],
    "node scripts/nexus-ar2-real-public-provider-runtime-qa.js",
    "AR2 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-ar2-real-public-provider-runtime-qa.js"), "AR2 QA must be wired into local-safe suites.");
}

async function assertOpenMeteoProviderPath() {
  const calls = [];
  const env = buildOpenMeteoEnv(buildFakeOpenMeteoFetch(calls));
  const result = await weather.runOpenMeteoReadOnlyLookup({ locationText: "Stockton, CA" }, env);

  assert.equal(result.providerName, "weather", "Open-Meteo result must stay in weather provider lane.");
  assert.equal(result.providerMode, "live", "Open-Meteo result must be normalized as live provider mode.");
  assert.equal(result.sourceName, "Open-Meteo", "Source label must identify Open-Meteo.");
  assert.equal(result.sourceStatus, "source-result-available", "Open-Meteo source must produce an available read-only result.");
  assert.equal(result.evidenceStatus, "source-backed", "Open-Meteo source must be source-backed.");
  assert.equal(result.freshnessStatus, "fresh", "Open-Meteo source must be fresh.");
  assert.match(result.query, /Stockton/i, "Open-Meteo query must retain explicit location text.");
  assert.match(result.resultSummary, /Stockton/i, "Open-Meteo result must summarize the explicit location.");
  assert.match(result.resultSummary, /Current weather/i, "Open-Meteo result must be weather-specific.");
  assert.equal(result.readOnly, true, "Open-Meteo source result must be read-only.");
  assert.equal(result.noExecutionRequired, true, "Open-Meteo source result must require no execution.");
  assert.equal(result.executionAuthority, false, "Open-Meteo source result must carry no execution authority.");
  assert.equal(calls.length, 2, "Open-Meteo provider path must use one geocoding call and one forecast call.");
}

async function assertAsyncRuntimePath() {
  const calls = [];
  const env = buildOpenMeteoEnv(buildFakeOpenMeteoFetch(calls));
  const response = await runtime.buildAssistantRuntimeResponseAsync("What is the weather in Stockton, CA?", {}, env);

  assert.equal(runtime.isSafeAssistantRuntimeResponse(response), true, "Async weather runtime response must satisfy safe response contract.");
  assert.equal(response.intent, "weather", "Async runtime must classify Stockton weather prompt as weather.");
  assert.equal(response.selectedProvider, "weather", "Async runtime must select weather provider.");
  assert.equal(response.providerStatus, "ready", "Async runtime must mark source-backed Open-Meteo result ready.");
  assert.equal(response.allowed, true, "Async runtime must allow only read-only source-backed response.");
  assert(response.sourceLabels.includes("Open-Meteo"), "Async runtime must surface Open-Meteo source label.");
  assert.match(response.answer, /Here(?:'| i)s what I found/i, "Async runtime must produce a natural answer prefix.");
  assert.match(response.answer, /Current weather for Stockton/i, "Async runtime answer must include normalized weather summary.");
  assert.equal(response.noExecutionAuthorized, true, "Async runtime must authorize no execution.");
  assert.equal(response.noLocationPermissionRequested, true, "Async runtime must request no location permission.");
  assert.equal(response.noProviderContactAuthorized, true, "Async runtime must authorize no provider contact.");
  assert.equal(response.noBackendWritePerformed, true, "Async runtime must perform no backend writes.");
  assert.equal(calls.length, 2, "Async runtime must perform exactly the deterministic fake provider lookups.");

  const orchestrationResult = await orchestrator.buildLiveSourceOrchestrationResultAsync("What is the weather in Stockton, CA?", {}, env);
  assert.equal(orchestrator.isSafeLiveSourceOrchestrationResult(orchestrationResult), true, "Async orchestration result must stay safe.");
  assert.equal(orchestrationResult.providerStatus, "ready", "Async orchestration provider status must be ready.");
}

async function assertSafeSkipsAndBlocks() {
  const offCalls = [];
  const offResult = await weather.getWeatherSourceResultAsync(
    { locationText: "Stockton, CA" },
    { NEXUS_WEATHER_FETCH_IMPL: buildFakeOpenMeteoFetch(offCalls) }
  );
  assert.equal(offCalls.length, 0, "Disabled Open-Meteo flags must not call fetch.");
  assert(["provider-not-configured", "source-query-ready", "source-result-available"].includes(offResult.sourceStatus), "Disabled Open-Meteo path must return existing safe provider status.");

  const missingLocationCalls = [];
  const missingLocationResult = await weather.runOpenMeteoReadOnlyLookup({}, buildOpenMeteoEnv(buildFakeOpenMeteoFetch(missingLocationCalls)));
  assert.equal(missingLocationCalls.length, 0, "Missing explicit location must not call fetch.");
  assert.equal(missingLocationResult.sourceStatus, "provider-required", "Missing explicit location must require a user-provided location.");
  assert.equal(missingLocationResult.readOnly, true, "Missing explicit location must stay read-only.");
  assert.equal(missingLocationResult.noExecutionRequired, true, "Missing explicit location must require no execution.");
  assert.equal(missingLocationResult.executionAuthority, false, "Missing explicit location must carry no execution authority.");

  const blockedCalls = [];
  const blockedResponse = await runtime.buildAssistantRuntimeResponseAsync("Call this provider about weather in Stockton, CA.", {}, buildOpenMeteoEnv(buildFakeOpenMeteoFetch(blockedCalls)));
  assert.equal(blockedCalls.length, 0, "High-risk execution phrase must block before provider fetch.");
  assert.equal(blockedResponse.allowed, false, "High-risk prompt must be blocked.");
  assert.equal(blockedResponse.selectedProvider, null, "High-risk prompt must not select a provider.");
  assert.match(blockedResponse.blockedReason, /blocked/i, "High-risk prompt must include a blocked reason.");
  assert.equal(blockedResponse.noExecutionAuthorized, true, "Blocked response must authorize no execution.");
}

async function runAr2RealPublicProviderRuntimeQa() {
  assertNoUnsafeRuntimeActivation();
  await assertOpenMeteoProviderPath();
  await assertAsyncRuntimePath();
  await assertSafeSkipsAndBlocks();

  console.log(JSON.stringify({
    provider: "Open-Meteo",
    deterministicFetch: true,
    standardUserRuntimeActivated: false,
    noExecutionAuthorized: true,
    noLocationPermissionRequested: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  }, null, 2));
  console.log("[nexus-ar2-real-public-provider-runtime-qa] passed");
}

if (require.main === module) {
  runAr2RealPublicProviderRuntimeQa().catch(error => {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  });
}

module.exports = Object.freeze({
  runAr2RealPublicProviderRuntimeQa
});
