const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const weatherValidation = require("./nexus-weather-live-provider-validation-qa.js");
const weatherSmoke = require("./nexus-weather-live-provider-smoke-qa.js");

const root = path.resolve(__dirname, "..");
const TEST_LOCATION = "Stockton, CA";

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticContract() {
  const docName = "NEXUS_RP2_WEATHER_REAL_PROVIDER_ACTIVATION.md";
  const qaName = "nexus-rp2-weather-real-provider-activation-qa.js";
  assert(exists("docs", docName), "RP2 weather activation doc must exist.");
  assert(exists("scripts", qaName), "RP2 weather activation QA must exist.");

  const doc = read("docs", docName);
  const qaSource = read("scripts", qaName);
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "Weather Real Provider Activation",
    "Stockton, CA",
    "developer/QA-only",
    "Standard User remains default-off and unchanged",
    "NEXUS_WEATHER_PROVIDER_API_KEY",
    "explicit query/location text",
    "noExecutionAuthorized",
    "noLocationPermissionRequested",
    "noDispatchAuthorized",
    "noProviderContactAuthorized",
    "noBackendWritePerformed",
    "providerError",
    "skippedMissingConfig",
    "safe skipped/missing-config behavior"
  ].forEach(term => assert(doc.includes(term), `RP2 doc must include ${term}.`));

  [
    "browser geolocation",
    "location permission",
    "dispatch",
    "call",
    "message",
    "book",
    "buy",
    "pay",
    "contact providers",
    "write backend state"
  ].forEach(term => assert(doc.includes(term), `RP2 safety boundary must include ${term}.`));

  [
    "nexus-rp2-weather-real-provider-activation-qa",
    "nexus-weather-live-provider-smoke-qa",
    "NEXUS_WEATHER_PROVIDER_API_KEY"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load or expose ${term}.`);
    assert(!index.includes(term), `public/index.html must not load or expose ${term}.`);
  });
  assert(!server.includes("nexus-rp2-weather-real-provider-activation-qa"), "server.js must not load RP2 QA.");

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
  ].forEach(term => assert(!qaSource.includes(term), `RP2 QA must not include unsafe behavior: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-rp2-weather-real-provider-activation"],
    "node scripts/nexus-rp2-weather-real-provider-activation-qa.js",
    "RP2 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rp2-weather-real-provider-activation-qa.js"), "RP2 QA must be in safe suites.");
}

async function runRp2WeatherRealProviderActivationQa(env = process.env) {
  assertStaticContract();

  const missingLocation = weatherValidation.buildMissingLocationResult();
  assert.equal(missingLocation.status, "skipped-missing-location", "Weather lookup must require explicit location text.");
  assert.equal(missingLocation.noLocationPermissionRequested, true, "Missing location must not request location permission.");
  assert.equal(missingLocation.noExecutionAuthorized, true, "Missing location must not authorize execution.");

  const disabled = await weatherValidation.runOpenWeatherReadOnlyLookup(TEST_LOCATION, {});
  assert.equal(disabled.status, "skipped-missing-config", "Disabled flags must skip safely.");
  assert.equal(disabled.liveAttempted, false, "Disabled flags must not attempt live provider calls.");

  const missingKey = await weatherValidation.runOpenWeatherReadOnlyLookup(TEST_LOCATION, {
    ...env,
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_API_KEY: ""
  });
  assert.equal(missingKey.status, "skipped-missing-config", "Missing API key must skip safely.");
  assert.equal(missingKey.liveAttempted, false, "Missing API key must not attempt live provider calls.");

  const smokeResult = await weatherSmoke.runWeatherLiveProviderSmokeQa(env);
  assert.equal(smokeResult.queryLocationText, env.NEXUS_WEATHER_VALIDATION_LOCATION || TEST_LOCATION, "Weather smoke must preserve explicit location text.");
  assert.equal(smokeResult.noExecutionAuthorized, true, "Weather smoke must not authorize execution.");
  assert.equal(smokeResult.noLocationPermissionRequested, true, "Weather smoke must not request location permission.");
  assert.equal(smokeResult.noDispatchAuthorized, true, "Weather smoke must not authorize dispatch.");
  assert.equal(smokeResult.noProviderContactAuthorized, true, "Weather smoke must not authorize provider contact.");
  assert.equal(smokeResult.noBackendWritePerformed, true, "Weather smoke must not write backend state.");
  assert(smokeResult.status === "live-tested" || smokeResult.status === "provider-error" || smokeResult.status === "skipped-missing-config", "Weather smoke must return a safe status.");

  const liveConfigured = weatherValidation.isLiveWeatherValidationConfigured(env);
  if (liveConfigured) {
    assert.equal(smokeResult.liveAttempted, true, "Configured weather provider must attempt one read-only live call.");
  } else {
    assert.equal(smokeResult.skippedMissingConfig, true, "Unconfigured weather provider must report skippedMissingConfig.");
    assert.equal(smokeResult.liveAttempted, false, "Unconfigured weather provider must not attempt live calls.");
  }

  return Object.freeze({
    providerId: "weather",
    testLocation: TEST_LOCATION,
    status: smokeResult.status,
    liveConfigured,
    liveAttempted: smokeResult.liveAttempted,
    skippedMissingConfig: smokeResult.skippedMissingConfig,
    providerError: smokeResult.providerError,
    noExecutionAuthorized: smokeResult.noExecutionAuthorized,
    noLocationPermissionRequested: smokeResult.noLocationPermissionRequested,
    noDispatchAuthorized: smokeResult.noDispatchAuthorized
  });
}

if (require.main === module) {
  runRp2WeatherRealProviderActivationQa()
    .then(result => {
      console.log(JSON.stringify(result, null, 2));
      console.log("[nexus-rp2-weather-real-provider-activation-qa] passed");
    })
    .catch(error => {
      console.error(error && error.stack ? error.stack : error);
      process.exitCode = 1;
    });
}

module.exports = Object.freeze({
  TEST_LOCATION,
  runRp2WeatherRealProviderActivationQa
});
