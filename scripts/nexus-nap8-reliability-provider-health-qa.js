const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const orchestrator = require("../server/nexus-live-source-orchestrator.js");
const runtime = require("../server/nexus-assistant-runtime-entrypoint.js");
const providerHealth = require("../server/nexus-provider-reliability-health.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function assertStaticContracts() {
  const healthSource = read("server", "nexus-provider-reliability-health.js");
  const runtimeSource = read("server", "nexus-assistant-runtime-entrypoint.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "SAFE_RETRY_POLICY",
    "SAFE_CACHE_POLICY",
    "buildProviderHealthStatus",
    "isSafeProviderReliabilityHealth",
    "providerTimedOut",
    "providerErrorNormalized",
    "safeUnavailableState",
    "staleResultWarning",
    "noSecretsLogged",
    "noProviderPayloadCached",
    "noExecutionFallback"
  ].forEach(term => assert(healthSource.includes(term), `NAP8 health module must include ${term}.`));

  [
    "providerReliabilityHealth",
    "providerHealth",
    "staleResultWarning",
    "safeRetryPolicy",
    "cachePolicy",
    "isSafeProviderReliabilityHealth"
  ].forEach(term => assert(runtimeSource.includes(term), `NAP8 runtime response must include ${term}.`));

  [
    "localStorage.setItem",
    "sessionStorage.setItem",
    "writeFileSync",
    "fs.writeFile",
    "new Map(",
    ".set(",
    "cache.set",
    "window.open",
    "location.href",
    "navigator.geolocation",
    "getCurrentPosition",
    "getUserMedia",
    "executionAuthority: true",
    "providerHandoffAllowed: true"
  ].forEach(term => assert(!healthSource.includes(term), `NAP8 reliability health must not introduce unsafe behavior: ${term}`));

  assert(!/console\.(log|warn|error)\([^)]*(api[_-]?key|secret|token)/i.test(healthSource), "NAP8 health module must not log secret-like values.");
  assert.equal(
    pkg.scripts["qa:nexus-nap8-reliability-provider-health"],
    "node scripts/nexus-nap8-reliability-provider-health-qa.js",
    "NAP8 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-nap8-reliability-provider-health-qa.js"), "NAP8 QA must be wired into local-safe suites.");
}

async function assertReliabilityHealthBehavior() {
  const missingConfig = await orchestrator.buildLiveSourceOrchestrationResultAsync("What is the weather in Stockton, CA?", {}, {
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_ENABLED: "false"
  });
  const missingHealth = providerHealth.buildProviderHealthStatus(missingConfig);
  assert.equal(providerHealth.isSafeProviderReliabilityHealth(missingHealth), true, "Missing config health must be safe.");
  assert.equal(missingHealth.safeUnavailableState, true, "Missing config must be a safe unavailable state.");
  assert.equal(missingHealth.safeRetryPolicy.automaticRetryAllowed, false, "Missing config must not auto-retry.");
  assert.equal(missingHealth.cachePolicy.enabled, false, "Missing config must not cache.");

  const timedOut = await orchestrator.withProviderTimeout(new Promise(() => {}), "weather", { NEXUS_ASSISTANT_PROVIDER_TIMEOUT_MS: "1" });
  const timeoutHealth = providerHealth.buildProviderHealthStatus({
    selectedProvider: "weather",
    providerStatus: "provider_error",
    allowed: false,
    reliability: timedOut.reliability,
    citations: [],
    confidence: "low"
  });
  assert.equal(providerHealth.isSafeProviderReliabilityHealth(timeoutHealth), true, "Timeout health must be safe.");
  assert.equal(timeoutHealth.providerTimedOut, true, "Timeout health must expose providerTimedOut.");
  assert.equal(timeoutHealth.providerErrorNormalized, true, "Timeout health must normalize provider errors.");
  assert.equal(timeoutHealth.noExecutionFallback, true, "Timeout health must not create execution fallback.");

  const staleHealth = providerHealth.buildProviderHealthStatus({
    selectedProvider: "agriculture-context",
    providerStatus: "ready",
    allowed: true,
    trustAssessment: { staleResultWarning: true },
    citations: [{ freshnessStatus: "stale" }],
    confidence: "medium"
  });
  assert.equal(providerHealth.isSafeProviderReliabilityHealth(staleHealth), true, "Stale health must be safe.");
  assert.equal(staleHealth.staleResultWarning, true, "Stale result warning must be explicit.");
  assert.equal(staleHealth.freshnessStatus, "stale", "Stale health must expose stale freshness.");

  const response = await runtime.buildAssistantRuntimeResponseAsync("Find farm jobs near Stockton", { surface: "standard-user", previewOnly: true }, {
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true"
  });
  assert.equal(runtime.isSafeAssistantRuntimeResponse(response), true, "Runtime response with provider health must be safe.");
  assert(response.providerHealth, "Runtime response must include providerHealth.");
  assert.equal(providerHealth.isSafeProviderReliabilityHealth(response.providerHealth), true, "Runtime providerHealth must be safe.");
  assert.equal(response.safeRetryPolicy.automaticRetryAllowed, false, "Runtime safeRetryPolicy must not auto-retry.");
  assert.equal(response.cachePolicy.enabled, false, "Runtime cachePolicy must remain disabled.");
  assert.equal(response.providerHealth.noSecretsCached, true, "Runtime providerHealth must not cache secrets.");
}

async function runNap8ReliabilityProviderHealthQa() {
  assertStaticContracts();
  await assertReliabilityHealthBehavior();
  console.log(JSON.stringify({
    providerHealthStatus: true,
    providerTimeoutSafe: true,
    providerErrorSafe: true,
    staleWarningExplicit: true,
    safeRetryRules: true,
    noSensitiveCache: true,
    noExecutionFallback: true
  }, null, 2));
  console.log("[nexus-nap8-reliability-provider-health-qa] passed");
}

if (require.main === module) {
  runNap8ReliabilityProviderHealthQa().catch(error => {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  });
}

module.exports = Object.freeze({
  runNap8ReliabilityProviderHealthQa
});
