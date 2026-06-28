const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const orchestrator = require("../server/nexus-live-source-orchestrator.js");
const runtime = require("../server/nexus-assistant-runtime-entrypoint.js");
const { isSafeReadOnlySourceResult } = require("../public/nexus-live-source-result-contract.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function assertStaticReliabilityContract() {
  const orchestratorSource = read("server", "nexus-live-source-orchestrator.js");
  const runtimeSource = read("server", "nexus-assistant-runtime-entrypoint.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "DEFAULT_PROVIDER_TIMEOUT_MS",
    "resolveProviderTimeoutMs",
    "withProviderTimeout",
    "normalizeProviderFailure",
    "providerTimedOut",
    "providerErrorNormalized",
    "safeUnavailableState",
    "rateLimitSafe",
    "RELIABILITY_CACHE_POLICY",
    "noSecretsCached",
    "noSensitiveUserDataCached",
    "noExecutionFallback"
  ].forEach(term => assert(orchestratorSource.includes(term), `AR8 orchestrator must include reliability term: ${term}`));

  assert(runtimeSource.includes("reliability: orchestrationResult.reliability || null"), "AR8 assistant response must expose additive reliability metadata.");

  [
    "localStorage.setItem",
    "sessionStorage.setItem",
    "fs.writeFile",
    "writeFileSync",
    "providerHandoffAllowed = true",
    "noExecutionAuthorized: false",
    "executionAuthority: true",
    "window.open",
    "location.href",
    "navigator.geolocation",
    "getCurrentPosition",
    "watchPosition"
  ].forEach(term => assert(!orchestratorSource.includes(term), `AR8 reliability layer must not introduce unsafe behavior: ${term}`));

  assert(!/console\.(log|warn|error)\([^)]*(api[_-]?key|secret|token)/i.test(orchestratorSource), "AR8 orchestrator must not print secret-like values.");
  [
    "new Map(",
    ".set(",
    "cache.set",
    "globalThis.",
    "process.env.NEXUS_WEATHER_PROVIDER_API_KEY"
  ].forEach(term => assert(!orchestratorSource.includes(term), `AR8 orchestrator must not introduce secret or payload cache mechanics: ${term}`));
  assert.equal(
    pkg.scripts["qa:nexus-ar8-reliability-controls"],
    "node scripts/nexus-ar8-reliability-controls-qa.js",
    "AR8 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-ar8-reliability-controls-qa.js"), "AR8 QA must be wired into local-safe suites.");
}

async function assertReliabilityBehavior() {
  assert.equal(orchestrator.resolveProviderTimeoutMs({ NEXUS_ASSISTANT_PROVIDER_TIMEOUT_MS: "1" }), 250, "Timeout must clamp to the safe minimum.");
  assert.equal(orchestrator.resolveProviderTimeoutMs({ NEXUS_ASSISTANT_PROVIDER_TIMEOUT_MS: "999999" }), 12000, "Timeout must clamp to the safe maximum.");

  const normalizedFailure = orchestrator.normalizeProviderFailure("weather", "source-error", { NEXUS_ASSISTANT_PROVIDER_TIMEOUT_MS: "300" });
  assert.equal(isSafeReadOnlySourceResult(normalizedFailure.sourceResult), true, "Provider errors must normalize to safe read-only source results.");
  assert.equal(normalizedFailure.reliability.providerErrorNormalized, true, "Provider errors must be marked normalized.");
  assert.equal(normalizedFailure.reliability.noExecutionFallback, true, "Provider errors must not create execution fallback.");
  assert.equal(normalizedFailure.reliability.cachePolicy.mode, "no-cache", "Reliability policy must not cache provider payloads.");

  const timedOut = await orchestrator.withProviderTimeout(new Promise(() => {}), "weather", { NEXUS_ASSISTANT_PROVIDER_TIMEOUT_MS: "1" });
  assert.equal(timedOut.reliability.providerTimedOut, true, "Timeout path must be marked.");
  assert.equal(timedOut.reliability.providerErrorNormalized, true, "Timeout path must normalize provider error.");
  assert.equal(timedOut.reliability.safeUnavailableState, true, "Timeout path must produce safe unavailable state.");
  assert.equal(isSafeReadOnlySourceResult(timedOut.sourceResult), true, "Timeout source result must be safe.");

  const missingConfig = await orchestrator.buildLiveSourceOrchestrationResultAsync("What is the weather in Stockton, CA?", {}, {
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_ENABLED: "false"
  });
  assert.equal(orchestrator.isSafeLiveSourceOrchestrationResult(missingConfig), true, "Missing config result must remain safe.");
  assert.equal(missingConfig.noExecutionAuthorized, true, "Missing config must not authorize execution.");
  assert.equal(missingConfig.reliability.retryAllowed, false, "Missing config must not trigger automatic retry.");
  assert.equal(missingConfig.reliability.rateLimitSafe, true, "Missing config must preserve rate-limit-safe posture.");
  assert.equal(missingConfig.reliability.cachePolicy.enabled, false, "Missing config must not cache provider data.");

  const response = await runtime.buildAssistantRuntimeResponseAsync("What is the weather in Stockton, CA?", { surface: "standard-user", previewOnly: true }, {
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_ENABLED: "false"
  });
  assert.equal(runtime.isSafeAssistantRuntimeResponse(response), true, "Assistant response must remain safe when provider unavailable.");
  assert(response.reliability, "Assistant response must expose reliability metadata.");
  assert.equal(response.reliability.noSecretsCached, true, "Assistant response must disclose no secrets cached.");
  assert.equal(response.reliability.noExecutionFallback, true, "Assistant response must disclose no execution fallback.");
  assert.match(response.answer, /provider|unavailable|source/i, "Safe unavailable response must disclose provider/source availability.");
}

async function runAr8ReliabilityControlsQa() {
  assertStaticReliabilityContract();
  await assertReliabilityBehavior();
  console.log(JSON.stringify({
    providerTimeoutSafe: true,
    providerErrorsNormalized: true,
    missingConfigSafe: true,
    noSecretsCached: true,
    noSensitiveUserDataCached: true,
    noExecutionFallback: true
  }, null, 2));
  console.log("[nexus-ar8-reliability-controls-qa] passed");
}

if (require.main === module) {
  runAr8ReliabilityControlsQa().catch(error => {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  });
}

module.exports = Object.freeze({
  runAr8ReliabilityControlsQa
});
