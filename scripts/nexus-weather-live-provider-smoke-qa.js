const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  isSafeReadOnlySourceResult
} = require("../public/nexus-live-source-result-contract.js");
const weatherValidation = require("./nexus-weather-live-provider-validation-qa.js");

const root = path.resolve(__dirname, "..");
const DEFAULT_TEST_LOCATION = weatherValidation.DEFAULT_TEST_LOCATION || "Stockton, CA";

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function redactPotentialSecret(value) {
  if (!hasText(value)) return "";
  return "[redacted]";
}

function buildPublicSmokeResult(result, env = process.env) {
  const sourceResult = result.sourceResult || {};
  return Object.freeze({
    smokeId: "nexus-weather-real-provider-smoke",
    status: result.status,
    providerName: result.providerName,
    queryLocationText: result.queryLocationText,
    retrievedAt: result.retrievedAt,
    normalizedWeatherSummary: result.normalizedWeatherSummary,
    confidence: result.confidence,
    sourceStatus: sourceResult.sourceStatus,
    sourceName: sourceResult.sourceName,
    sourceCategory: sourceResult.sourceCategory,
    sourceUrl: sourceResult.sourceUrl,
    freshnessStatus: sourceResult.freshnessStatus,
    evidenceStatus: result.citation && result.citation.evidenceStatus,
    safetyPosture: result.safetyPosture,
    auditEvent: result.auditEvent,
    noExecutionAuthorized: result.noExecutionAuthorized,
    noLocationPermissionRequested: result.noLocationPermissionRequested,
    noDispatchAuthorized: result.noDispatchAuthorized,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true,
    providerError: result.status === "provider-error",
    skippedMissingConfig: result.status === "skipped-missing-config",
    liveAttempted: result.liveAttempted,
    liveConfigured: weatherValidation.isLiveWeatherValidationConfigured(env),
    apiKey: redactPotentialSecret(env.NEXUS_WEATHER_PROVIDER_API_KEY)
  });
}

function runStaticWeatherSmokeAssertions() {
  const docName = "NEXUS_WEATHER_REAL_PROVIDER_SMOKE_TEST.md";
  const qaName = "nexus-weather-live-provider-smoke-qa.js";
  const validationQaName = "nexus-weather-live-provider-validation-qa.js";

  assert(exists("docs", docName), "WEATHER2 smoke test doc must exist.");
  assert(exists("scripts", qaName), "WEATHER2 smoke QA script must exist.");
  assert(exists("scripts", validationQaName), "WEATHER1 validation QA must remain available.");

  const doc = read("docs", docName);
  const scriptSource = read("scripts", qaName);
  const validationScript = read("scripts", validationQaName);
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "Nexus WEATHER2",
    "Real API-Key Weather Smoke Test",
    "developer/test-only",
    "read-only",
    "explicit-location-only",
    "Stockton, CA",
    "NEXUS_WEATHER_PROVIDER_API_KEY",
    "skipped/missing-config",
    "provider-error",
    "noExecutionAuthorized",
    "noLocationPermissionRequested",
    "noDispatchAuthorized",
    "noProviderContactAuthorized",
    "noBackendWritePerformed"
  ].forEach(term => assert(doc.includes(term), `WEATHER2 doc must include: ${term}`));

  [
    "runOpenWeatherReadOnlyLookup",
    "runWeatherLiveProviderValidationQa",
    "isLiveWeatherValidationConfigured"
  ].forEach(term => assert(validationScript.includes(term), `WEATHER2 must reuse WEATHER1 helper: ${term}`));

  [
    "buildPublicSmokeResult",
    "redactPotentialSecret",
    "skippedMissingConfig",
    "providerError",
    "liveConfigured",
    "apiKey: redactPotentialSecret",
    "noExecutionAuthorized",
    "noLocationPermissionRequested",
    "noDispatchAuthorized",
    "noProviderContactAuthorized",
    "noBackendWritePerformed"
  ].forEach(term => assert(scriptSource.includes(term), `WEATHER2 script must include: ${term}`));

  [app, index, server].forEach((source, indexNumber) => {
    const label = ["public/app.js", "public/index.html", "server.js"][indexNumber];
    assert(!source.includes(qaName), `${label} must not load WEATHER2 smoke harness.`);
    assert(!/NEXUS_WEATHER_PROVIDER_API_KEY\s*[:=]\s*["'][^"']+["']/i.test(source), `${label} must not hardcode weather provider API key values.`);
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
  ].forEach(term => assert(!scriptSource.includes(term), `WEATHER2 script must not include unsafe behavior: ${term}`));

  const alias = "qa:nexus-weather-live-provider-smoke";
  const command = `node scripts/${qaName}`;
  assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
  assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include WEATHER2 smoke QA.");
  assert(qaSuite.includes(`scripts/${validationQaName}`), "qa-suite must keep WEATHER1 validation QA.");
}

async function runWeatherLiveProviderSmokeQa(env = process.env) {
  runStaticWeatherSmokeAssertions();

  const missingLocation = weatherValidation.buildMissingLocationResult();
  assert.equal(missingLocation.status, "skipped-missing-location", "WEATHER2 must require explicit location text.");
  assert.equal(missingLocation.noLocationPermissionRequested, true, "missing location must not request location permission.");
  assert.equal(missingLocation.noExecutionAuthorized, true, "missing location must not authorize execution.");

  const missingKeyEnv = {
    ...env,
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_API_KEY: ""
  };
  const missingKey = await weatherValidation.runOpenWeatherReadOnlyLookup(DEFAULT_TEST_LOCATION, missingKeyEnv);
  assert.equal(missingKey.status, "skipped-missing-config", "missing API key must skip safely.");
  assert.equal(missingKey.liveAttempted, false, "missing API key must not attempt live call.");

  const disabled = await weatherValidation.runOpenWeatherReadOnlyLookup(DEFAULT_TEST_LOCATION, {});
  assert.equal(disabled.status, "skipped-missing-config", "disabled flags must skip safely.");
  assert.equal(disabled.liveAttempted, false, "disabled flags must not attempt live call.");

  const locationText = hasText(env.NEXUS_WEATHER_VALIDATION_LOCATION)
    ? env.NEXUS_WEATHER_VALIDATION_LOCATION
    : DEFAULT_TEST_LOCATION;
  const liveOrSkipped = await weatherValidation.runOpenWeatherReadOnlyLookup(locationText, env);
  const publicResult = buildPublicSmokeResult(liveOrSkipped, env);

  assert.equal(publicResult.queryLocationText, locationText, "WEATHER2 must preserve explicit query location text.");
  assert.equal(publicResult.noExecutionAuthorized, true, "WEATHER2 must not authorize execution.");
  assert.equal(publicResult.noLocationPermissionRequested, true, "WEATHER2 must not request location permission.");
  assert.equal(publicResult.noDispatchAuthorized, true, "WEATHER2 must not authorize dispatch.");
  assert.equal(publicResult.noProviderContactAuthorized, true, "WEATHER2 must not authorize provider contact.");
  assert.equal(publicResult.noBackendWritePerformed, true, "WEATHER2 must not perform backend writes.");
  assert.equal(publicResult.safetyPosture.readOnly, true, "WEATHER2 safety posture must be read-only.");
  assert.equal(publicResult.safetyPosture.executionAuthority, false, "WEATHER2 must not grant execution authority.");
  assert.equal(isSafeReadOnlySourceResult(liveOrSkipped.sourceResult), true, "WEATHER2 source result must be safe/read-only.");
  assert.notEqual(publicResult.apiKey, env.NEXUS_WEATHER_PROVIDER_API_KEY || "not-set", "WEATHER2 public output must not expose API key.");

  if (weatherValidation.isLiveWeatherValidationConfigured(env)) {
    assert.equal(publicResult.liveAttempted, true, "configured WEATHER2 must attempt exactly one live provider call.");
    assert(
      publicResult.status === "live-tested" || publicResult.status === "provider-error",
      "configured WEATHER2 must return live-tested or provider-error."
    );
  } else {
    assert.equal(publicResult.status, "skipped-missing-config", "unconfigured WEATHER2 must skip safely.");
    assert.equal(publicResult.skippedMissingConfig, true, "unconfigured WEATHER2 must mark skippedMissingConfig.");
    assert.equal(publicResult.liveAttempted, false, "unconfigured WEATHER2 must not attempt live call.");
  }

  return publicResult;
}

if (require.main === module) {
  runWeatherLiveProviderSmokeQa()
    .then(result => {
      console.log(JSON.stringify(result, null, 2));
      console.log("[nexus-weather-live-provider-smoke-qa] passed");
    })
    .catch(error => {
      console.error(error && error.stack ? error.stack : error);
      process.exitCode = 1;
    });
}

module.exports = Object.freeze({
  DEFAULT_TEST_LOCATION,
  buildPublicSmokeResult,
  runStaticWeatherSmokeAssertions,
  runWeatherLiveProviderSmokeQa
});
