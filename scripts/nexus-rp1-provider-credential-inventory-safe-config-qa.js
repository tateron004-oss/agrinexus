const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const harness = require("../server/nexus-live-provider-adoption-harness.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function runRp1ProviderCredentialInventorySafeConfigQa() {
  const docName = "NEXUS_RP1_PROVIDER_CREDENTIAL_INVENTORY_SAFE_CONFIG_CONTRACT.md";
  const qaName = "nexus-rp1-provider-credential-inventory-safe-config-qa.js";
  assert(exists("docs", docName), "RP1 credential inventory doc must exist.");
  assert(exists("scripts", qaName), "RP1 QA script must exist.");

  const doc = read("docs", docName);
  const qaSource = read("scripts", qaName);
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "Provider Credential Inventory",
    "Safe Config Contract",
    "weather",
    "agriculture-context",
    "news-security",
    "job-search",
    "shipment-tracking",
    "music-media",
    "NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED",
    "NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED",
    "NEXUS_WEATHER_PROVIDER_API_KEY",
    "NEXUS_AGRICULTURE_CONTEXT_PROVIDER_API_KEY",
    "NEXUS_NEWS_SECURITY_PROVIDER_API_KEY",
    "NEXUS_JOB_SEARCH_PROVIDER_API_KEY",
    "NEXUS_SHIPMENT_TRACKING_PROVIDER_API_KEY",
    "NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY",
    "placeholder values",
    "Do not paste real secrets",
    "safe missing-config behavior",
    "noExecutionAuthorized",
    "noLocationPermissionRequested",
    "noDispatchAuthorized",
    "noProviderContactAuthorized",
    "noBackendWritePerformed"
  ].forEach(term => assert(doc.includes(term), `RP1 doc must include ${term}.`));

  [
    "no browser geolocation",
    "no location permission",
    "no provider contact",
    "no calls or messages",
    "no payments",
    "no emergency dispatch",
    "no medical/pharmacy execution",
    "no marketplace transaction",
    "no backend writes"
  ].forEach(term => assert(doc.includes(term), `RP1 safety contract must include ${term}.`));

  const expectedHarness = {
    weather: ["NEXUS_WEATHER_PROVIDER_ENABLED", "NEXUS_WEATHER_PROVIDER_API_KEY"],
    "agriculture-context": ["NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED", "NEXUS_AGRICULTURE_CONTEXT_PROVIDER_API_KEY"],
    "news-security": ["NEXUS_NEWS_SECURITY_PROVIDER_ENABLED", "NEXUS_NEWS_SECURITY_PROVIDER_API_KEY"],
    "job-search": ["NEXUS_JOB_SEARCH_PROVIDER_ENABLED", "NEXUS_JOB_SEARCH_PROVIDER_API_KEY"],
    "shipment-tracking": ["NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED", "NEXUS_SHIPMENT_TRACKING_PROVIDER_API_KEY"],
    "music-media": ["NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED", "NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY"]
  };

  Object.entries(expectedHarness).forEach(([providerId, [enabledFlag, keyName]]) => {
    const providerCase = harness.PROVIDER_HARNESS_CASES[providerId];
    assert(providerCase, `Provider harness must include ${providerId}.`);
    assert.equal(providerCase.enabledFlag, enabledFlag, `${providerId} enabled flag must match RP1 inventory.`);
    assert.equal(providerCase.keyName, keyName, `${providerId} key name must match RP1 inventory.`);
  });

  [
    "nexus-live-provider-adoption-harness",
    "nexus-live-source-orchestrator",
    "nexus-weather-live-provider-smoke-qa",
    "nexus-rp1-provider-credential-inventory-safe-config-qa"
  ].forEach(moduleName => {
    assert(!app.includes(moduleName), `public/app.js must not load ${moduleName}.`);
    assert(!index.includes(moduleName), `public/index.html must not load ${moduleName}.`);
  });
  assert(!server.includes("NEXUS_WEATHER_PROVIDER_API_KEY"), "server.js must not read provider API keys for Standard User startup.");

  [
    "fetch" + "(",
    "XML" + "HttpRequest",
    "http." + "request",
    "https." + "request",
    "write" + "File",
    "append" + "File",
    "local" + "Storage",
    "session" + "Storage",
    "navigator." + "geolocation",
    "media" + "Devices",
    "window." + "open",
    "location." + "href",
    "process.env." + "NEXUS_WEATHER_PROVIDER_API_KEY)"
  ].forEach(term => assert(!qaSource.includes(term), `RP1 QA must not include side effect or secret-printing API: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-rp1-provider-credential-inventory-safe-config"],
    "node scripts/nexus-rp1-provider-credential-inventory-safe-config-qa.js",
    "RP1 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rp1-provider-credential-inventory-safe-config-qa.js"), "RP1 QA must be in safe suites.");

  console.log("[nexus-rp1-provider-credential-inventory-safe-config-qa] passed");
}

if (require.main === module) {
  try {
    runRp1ProviderCredentialInventorySafeConfigQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runRp1ProviderCredentialInventorySafeConfigQa
});
