const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const harness = require("../server/nexus-live-provider-adoption-harness.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function runRt4ProviderSpecificLiveAdoptionHarnessesQa() {
  const moduleSource = read("server", "nexus-live-provider-adoption-harness.js");
  const doc = read("docs", "NEXUS_RT4_PROVIDER_SPECIFIC_LIVE_ADOPTION_HARNESSES.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  const expectedProviders = ["weather", "agriculture-context", "news-security", "job-search", "shipment-tracking", "music-media"];
  assert.deepEqual(Object.keys(harness.PROVIDER_HARNESS_CASES), expectedProviders, "RT4 must cover every registered read-only provider.");

  harness.runAllProviderAdoptionHarnesses().forEach(providerReport => {
    assert(expectedProviders.includes(providerReport.providerId), `${providerReport.providerId} must be expected.`);
    assert.equal(providerReport.scenarios.length, 5, `${providerReport.providerId} must cover five harness scenarios.`);
    const scenarios = new Map(providerReport.scenarios.map(result => [result.scenario, result]));
    ["missing-input", "disabled", "mock", "live-ready", "provider-error"].forEach(scenario => {
      assert(scenarios.has(scenario), `${providerReport.providerId} must include ${scenario}.`);
      const result = scenarios.get(scenario);
      assert.equal(result.safeReadOnly, true, `${providerReport.providerId}/${scenario} must remain read-only safe.`);
      assert.equal(result.noExecutionAuthorized, true, `${providerReport.providerId}/${scenario} must not authorize execution.`);
      assert.equal(result.noBackendWritePerformed, true, `${providerReport.providerId}/${scenario} must not write backend state.`);
      assert.equal(result.noLocationPermissionRequested, true, `${providerReport.providerId}/${scenario} must not request location permission.`);
      assert.equal(result.noProviderContactAuthorized, true, `${providerReport.providerId}/${scenario} must not authorize provider contact.`);
    });
    assert.equal(scenarios.get("disabled").sourceStatus, "provider-not-configured", `${providerReport.providerId} disabled path must be unavailable.`);
    assert.equal(scenarios.get("provider-error").sourceStatus, "source-error", `${providerReport.providerId} provider-error path must normalize safely.`);
  });

  [
    "Weather requires explicit location text",
    "Agriculture context remains source-backed guidance only",
    "News/security/conflict stays awareness-only",
    "Job search supports read-only job information",
    "Shipment tracking requires explicit tracking/reference text",
    "Music/media remains read-only information lookup",
    "not imported by `server.js`, `public/app.js`, or `public/index.html`"
  ].forEach(term => assert(doc.includes(term), `RT4 doc must include: ${term}`));

  [
    "PROVIDER_HARNESS_CASES",
    "runProviderHarnessScenario",
    "runAllProviderAdoptionHarnesses",
    "noExecutionAuthorized",
    "noBackendWritePerformed",
    "noLocationPermissionRequested",
    "noProviderContactAuthorized"
  ].forEach(term => assert(moduleSource.includes(term), `RT4 harness must include ${term}.`));

  [
    "fetch(",
    "XMLHttpRequest",
    "http.request",
    "https.request",
    "axios",
    "writeFile",
    "appendFile",
    "localStorage",
    "sessionStorage",
    "db.json",
    "window.open",
    "location.href",
    "sendBeacon",
    "navigator.geolocation",
    "mediaDevices"
  ].forEach(term => assert(!moduleSource.includes(term), `RT4 harness must not include side-effect API: ${term}`));

  [
    "NEXUS_WEATHER_PROVIDER_API_KEY: \"",
    "NEXUS_AGRICULTURE_CONTEXT_PROVIDER_API_KEY: \"",
    "NEXUS_NEWS_SECURITY_PROVIDER_API_KEY: \"",
    "NEXUS_JOB_SEARCH_PROVIDER_API_KEY: \"",
    "NEXUS_SHIPMENT_TRACKING_PROVIDER_API_KEY: \"",
    "NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY: \"",
    "password",
    "secret"
  ].forEach(term => assert(!moduleSource.includes(term), `RT4 harness must not include secret-like pattern: ${term}`));

  [app, index, server].forEach((source, indexNumber) => {
    const label = ["public/app.js", "public/index.html", "server.js"][indexNumber];
    assert(!source.includes("nexus-live-provider-adoption-harness"), `${label} must not load RT4 harness.`);
  });

  assert.equal(
    pkg.scripts["qa:nexus-rt4-provider-specific-live-adoption-harnesses"],
    "node scripts/nexus-rt4-provider-specific-live-adoption-harnesses-qa.js",
    "RT4 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rt4-provider-specific-live-adoption-harnesses-qa.js"), "RT4 QA must be in safe suites.");

  console.log("[nexus-rt4-provider-specific-live-adoption-harnesses-qa] passed");
}

if (require.main === module) {
  try {
    runRt4ProviderSpecificLiveAdoptionHarnessesQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runRt4ProviderSpecificLiveAdoptionHarnessesQa
});
