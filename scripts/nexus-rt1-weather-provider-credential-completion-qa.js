const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const weatherValidation = require("./nexus-weather-live-provider-validation-qa.js");
const weatherSmoke = require("./nexus-weather-live-provider-smoke-qa.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

async function runRt1WeatherProviderCredentialCompletionQa(env = process.env) {
  const docName = "NEXUS_RT1_WEATHER_PROVIDER_CREDENTIAL_COMPLETION.md";
  assert(exists("docs", docName), "RT1 closeout doc must exist.");

  const doc = read("docs", docName);
  const smokeScript = read("scripts", "nexus-weather-live-provider-smoke-qa.js");
  const validationScript = read("scripts", "nexus-weather-live-provider-validation-qa.js");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "WEATHER1",
    "WEATHER2",
    "WEATHER3",
    "LIVE5",
    "LIVE11",
    "Stockton, CA",
    "NEXUS_WEATHER_PROVIDER_API_KEY",
    "noExecutionAuthorized",
    "noLocationPermissionRequested",
    "noDispatchAuthorized",
    "noProviderContactAuthorized",
    "noBackendWritePerformed"
  ].forEach(term => assert(doc.includes(term), `RT1 doc must include: ${term}`));

  [
    "runOpenWeatherReadOnlyLookup",
    "isLiveWeatherValidationConfigured",
    "buildSafeWeatherProviderErrorResult"
  ].forEach(term => assert(validationScript.includes(term), `WEATHER1 validation must keep ${term}.`));

  [
    "buildPublicSmokeResult",
    "redactPotentialSecret",
    "noProviderContactAuthorized",
    "noBackendWritePerformed"
  ].forEach(term => assert(smokeScript.includes(term), `WEATHER2/3 smoke must keep ${term}.`));

  [app, index, server].forEach((source, indexNumber) => {
    const label = ["public/app.js", "public/index.html", "server.js"][indexNumber];
    assert(!source.includes("nexus-weather-live-provider-smoke-qa.js"), `${label} must not load weather smoke QA.`);
    assert(!source.includes("NEXUS_WEATHER_PROVIDER_API_KEY"), `${label} must not reference weather provider API keys.`);
  });

  [
    "navigator." + "geolocation",
    "getCurrent" + "Position",
    "watch" + "Position",
    "location." + "href",
    "window." + "open",
    "send" + "Beacon",
    "localStorage." + "setItem",
    "sessionStorage." + "setItem"
  ].forEach(term => {
    assert(!validationScript.includes(term), `Weather validation must not include unsafe behavior: ${term}`);
    assert(!smokeScript.includes(term), `Weather smoke must not include unsafe behavior: ${term}`);
  });

  assert.equal(
    pkg.scripts["qa:nexus-rt1-weather-provider-credential-completion"],
    "node scripts/nexus-rt1-weather-provider-credential-completion-qa.js",
    "RT1 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rt1-weather-provider-credential-completion-qa.js"), "RT1 QA must be in safe suites.");

  const smoke = await weatherSmoke.runWeatherLiveProviderSmokeQa(env);
  assert.equal(smoke.queryLocationText, "Stockton, CA", "RT1 smoke should default to Stockton, CA.");
  assert.equal(smoke.noExecutionAuthorized, true, "RT1 must not authorize execution.");
  assert.equal(smoke.noLocationPermissionRequested, true, "RT1 must not request location permission.");
  assert.equal(smoke.noDispatchAuthorized, true, "RT1 must not authorize dispatch.");
  assert.equal(smoke.noProviderContactAuthorized, true, "RT1 must not authorize provider contact.");
  assert.equal(smoke.noBackendWritePerformed, true, "RT1 must not perform backend writes.");

  if (weatherValidation.isLiveWeatherValidationConfigured(env)) {
    assert.equal(smoke.liveAttempted, true, "RT1 configured path must attempt a single read-only provider call.");
    assert(["live-tested", "provider-error"].includes(smoke.status), "RT1 configured path must return live-tested or provider-error.");
  } else {
    assert.equal(smoke.status, "skipped-missing-config", "RT1 unconfigured path must skip safely.");
    assert.equal(smoke.liveAttempted, false, "RT1 unconfigured path must not attempt live call.");
  }

  console.log("[nexus-rt1-weather-provider-credential-completion-qa] passed");
  return smoke;
}

if (require.main === module) {
  runRt1WeatherProviderCredentialCompletionQa()
    .catch(error => {
      console.error(error && error.stack ? error.stack : error);
      process.exitCode = 1;
    });
}

module.exports = Object.freeze({
  runRt1WeatherProviderCredentialCompletionQa
});
