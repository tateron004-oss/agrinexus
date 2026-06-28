const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  isSafeReadOnlySourceResult
} = require("../public/nexus-live-source-result-contract.js");
const weather = require("../server/nexus-weather-source-provider.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

const docName = "NEXUS_SPRINT_LIVE5_WEATHER_PROVIDER_READINESS.md";
const moduleName = "nexus-weather-source-provider.js";
const qaName = "nexus-sprint-live5-weather-provider-readiness-qa.js";

assert(exists("docs", docName), "LIVE5 weather provider readiness doc must exist.");
assert(exists("server", moduleName), "LIVE5 weather provider module must exist.");
assert(exists("scripts", qaName), "LIVE5 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("server", moduleName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

[
  "Nexus Sprint LIVE5",
  "Weather Provider Readiness",
  "OpenWeather",
  "WeatherAPI",
  "Tomorrow.io",
  "Meteomatics",
  "NASA POWER",
  "NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true",
  "NEXUS_WEATHER_PROVIDER_ENABLED=true",
  "NEXUS_WEATHER_PROVIDER_API_KEY",
  "provider-not-configured",
  "source-query-ready",
  "does not make network requests",
  "ask browser geolocation",
  "share user location",
  "readOnly: true",
  "noExecutionRequired: true",
  "executionAuthority: false",
  "LIVE6 Readiness"
].forEach(term => assert(doc.includes(term), `LIVE5 doc must include: ${term}`));

[
  "buildWeatherSourceQuery",
  "resolveWeatherProviderConfig",
  "buildMockWeatherResult",
  "buildWeatherProviderUnavailableResult",
  "getWeatherSourceResult"
].forEach(fn => assert.equal(typeof weather[fn], "function", `LIVE5 module must export ${fn}`));

const query = weather.buildWeatherSourceQuery({ locationText: "Nairobi", timeframe: "tomorrow" });
assert.equal(query.locationText, "Nairobi", "weather query must preserve user-provided location text.");
assert.equal(query.usesBrowserGeolocation, false, "weather query must not use browser geolocation.");
assert.equal(query.readOnly, true, "weather query must be read-only.");
assert.equal(query.executionAuthority, false, "weather query must not grant execution.");

const disabledConfig = weather.resolveWeatherProviderConfig({});
assert.equal(disabledConfig.providerMode, "fixture", "weather provider must default to fixture mode.");

const mockConfig = weather.resolveWeatherProviderConfig({
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_WEATHER_PROVIDER_ENABLED: "true"
});
assert.equal(mockConfig.providerMode, "mock", "weather provider without key must stay mock.");

const liveReadyConfig = weather.resolveWeatherProviderConfig({
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_WEATHER_PROVIDER_ENABLED: "true",
  NEXUS_WEATHER_PROVIDER_API_KEY: "configured"
});
assert.equal(liveReadyConfig.providerMode, "live", "weather provider with flags/key may become live-ready.");

const missingLocation = weather.getWeatherSourceResult({}, {});
assert.equal(isSafeReadOnlySourceResult(missingLocation), true, "missing location result must remain safe.");
assert.equal(missingLocation.sourceStatus, "provider-required", "missing location must request provider/source details.");
assert(missingLocation.resultSummary.includes("Which city or country"), "missing location must ask concise clarification.");

const unavailable = weather.getWeatherSourceResult({ locationText: "Nairobi" }, {});
assert.equal(isSafeReadOnlySourceResult(unavailable), true, "unavailable weather result must remain safe.");
assert.equal(unavailable.sourceStatus, "provider-not-configured", "disabled provider must return provider-not-configured.");
assert.equal(unavailable.executionAuthority, false, "disabled provider must not grant execution.");

const mock = weather.getWeatherSourceResult({ locationText: "Nairobi" }, {
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_WEATHER_PROVIDER_ENABLED: "true"
});
assert.equal(isSafeReadOnlySourceResult(mock), true, "mock weather result must be safe.");
assert.equal(mock.providerMode, "mock", "missing key must produce mock weather mode.");
assert.equal(mock.sourceStatus, "source-result-available", "mock weather result must be available.");

const liveReady = weather.getWeatherSourceResult({ locationText: "Nairobi", timeframe: "forecast" }, {
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_WEATHER_PROVIDER_ENABLED: "true",
  NEXUS_WEATHER_PROVIDER_API_KEY: "configured"
});
assert.equal(isSafeReadOnlySourceResult(liveReady), true, "live-ready weather result must remain safe.");
assert.equal(liveReady.providerMode, "live", "configured provider may report live mode.");
assert.equal(liveReady.sourceStatus, "source-query-ready", "configured provider must be query-ready, not fetched, in this phase.");
assert.equal(liveReady.rawResultAvailable, false, "LIVE5 must not claim raw live result availability.");

[
  "fetch(",
  "XMLHttpRequest",
  "http.request",
  "https.request",
  "axios",
  "request(",
  "navigator.geolocation",
  "mediaDevices",
  "localStorage",
  "sessionStorage",
  "writeFile",
  "appendFile",
  "db.json",
  "window.open",
  "location.href",
  "sendBeacon"
].forEach(term => assert(!moduleSource.includes(term), `LIVE5 module must not include unsafe or live side-effect API: ${term}`));

[
  "NEXUS_WEATHER_PROVIDER_API_KEY: \"",
  "apiKey: \"",
  "password",
  "secret"
].forEach(term => assert(!moduleSource.includes(term), `LIVE5 module must not include hardcoded secret-like pattern: ${term}`));

const alias = "qa:nexus-sprint-live5-weather-provider-readiness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include LIVE5 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-live4-assistant-dialogue-engine-contract-qa.js"), "LIVE5 requires LIVE4 QA to remain in qa-suite.");

console.log("[nexus-sprint-live5-weather-provider-readiness-qa] passed");
