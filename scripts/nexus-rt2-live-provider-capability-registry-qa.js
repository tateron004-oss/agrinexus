const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const registry = require("../public/nexus-live-provider-capability-registry.js");

const root = path.resolve(__dirname, "..");
const REQUIRED_PROVIDER_IDS = Object.freeze([
  "weather",
  "agriculture-context",
  "news-security",
  "shipment-tracking",
  "job-search",
  "music-media"
]);

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function runRt2LiveProviderCapabilityRegistryQa() {
  const providers = registry.getLiveProviderCapabilityRegistry();
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const registrySource = read("public", "nexus-live-provider-capability-registry.js");
  const doc = read("docs", "NEXUS_RT2_LIVE_PROVIDER_CAPABILITY_REGISTRY.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(Array.isArray(providers), "registry must export an array.");
  assert.equal(providers.length, REQUIRED_PROVIDER_IDS.length, "all known providers must be registered exactly once.");

  REQUIRED_PROVIDER_IDS.forEach(providerId => {
    const provider = registry.getLiveProviderCapability(providerId);
    assert(provider, `${providerId} must be registered.`);
    assert.equal(provider.providerId, providerId, `${providerId} id must be stable.`);
    assert.equal(provider.defaultEnabled, false, `${providerId} must default off.`);
    assert(Array.isArray(provider.requiredFlags) && provider.requiredFlags.length >= 2, `${providerId} must declare required flags.`);
    assert(Array.isArray(provider.requiredSecrets), `${providerId} must declare required secrets by name.`);
    assert(Array.isArray(provider.allowedIntents) && provider.allowedIntents.length > 0, `${providerId} must declare allowed intents.`);
    assert(Array.isArray(provider.blockedActions) && provider.blockedActions.includes("provider_contact"), `${providerId} must block provider contact.`);
    assert(provider.blockedActions.includes("backend_write"), `${providerId} must block backend writes.`);
    assert.equal(provider.requiresExplicitUserInput, true, `${providerId} must require explicit user input.`);
    assert.equal(provider.forbidsLocationPermission, true, `${providerId} must forbid location permission.`);
    assert.equal(provider.forbidsExecution, true, `${providerId} must forbid execution.`);
    assert.equal(provider.forbidsProviderContact, true, `${providerId} must forbid provider contact.`);
    assert.equal(provider.forbidsBackendWrites, true, `${providerId} must forbid backend writes.`);
    assert.equal(provider.citationRequired, true, `${providerId} must require citations/source metadata.`);
    assert.equal(provider.confidenceRequired, true, `${providerId} must require confidence metadata.`);
    assert(registry.LIVE_PROVIDER_STATUSES.includes(provider.providerStatus), `${providerId} status must be valid.`);

    const redacted = registry.redactProviderSecrets(provider);
    redacted.requiredSecrets.forEach(secret => {
      assert.equal(secret.value, "[redacted]", `${providerId} secret values must be redacted.`);
      assert.equal(secret.exposed, false, `${providerId} secret values must not be exposed.`);
    });
  });

  assert.equal(registry.getLiveProviderCapability("unknown"), null, "unknown provider must return null.");

  [
    "weather",
    "agriculture-context",
    "news-security",
    "shipment-tracking",
    "job-search",
    "music-media",
    "default off",
    "must never contain secret values",
    "does not activate Standard User runtime behavior"
  ].forEach(term => assert(doc.includes(term), `RT2 doc must include: ${term}`));

  [
    "NEXUS_WEATHER_PROVIDER_API_KEY",
    "NEXUS_AGRICULTURE_CONTEXT_PROVIDER_API_KEY",
    "NEXUS_NEWS_SECURITY_PROVIDER_API_KEY",
    "NEXUS_SHIPMENT_TRACKING_PROVIDER_API_KEY",
    "NEXUS_JOB_SEARCH_PROVIDER_API_KEY",
    "NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY"
  ].forEach(secretName => assert(registrySource.includes(secretName), `registry must name ${secretName}.`));

  [app, index, server].forEach((source, indexNumber) => {
    const label = ["public/app.js", "public/index.html", "server.js"][indexNumber];
    assert(!source.includes("nexus-live-provider-capability-registry.js"), `${label} must not load RT2 registry.`);
  });

  [
    "navigator." + "geolocation",
    "getCurrent" + "Position",
    "watch" + "Position",
    "fetch(",
    "localStorage." + "setItem",
    "sessionStorage." + "setItem",
    "window." + "open",
    "location." + "href"
  ].forEach(term => assert(!registrySource.includes(term), `RT2 registry must not include runtime behavior: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-rt2-live-provider-capability-registry"],
    "node scripts/nexus-rt2-live-provider-capability-registry-qa.js",
    "RT2 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rt2-live-provider-capability-registry-qa.js"), "RT2 QA must be in safe suites.");

  console.log("[nexus-rt2-live-provider-capability-registry-qa] passed");
}

if (require.main === module) {
  try {
    runRt2LiveProviderCapabilityRegistryQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runRt2LiveProviderCapabilityRegistryQa
});
