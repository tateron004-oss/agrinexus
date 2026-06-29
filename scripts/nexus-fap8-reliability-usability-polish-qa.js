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

function functionSlice(source, name) {
  let start = source.indexOf(`async function ${name}(`);
  if (start < 0) start = source.indexOf(`function ${name}(`);
  assert(start >= 0, `${name} must exist.`);
  const next = source.indexOf("\nfunction ", start + 1);
  const nextAsync = source.indexOf("\nasync function ", start + 1);
  const candidates = [next, nextAsync].filter(index => index > start);
  const end = candidates.length ? Math.min(...candidates) : source.length;
  return source.slice(start, end);
}

function assertStaticReliabilityPolish() {
  const app = read("public", "app.js");
  const styles = read("public", "styles.css");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const normalizer = functionSlice(app, "normalizeAssistantRuntimePreviewCard");
  const renderer = functionSlice(app, "renderAssistantRuntimePreviewCardMarkup");

  [
    "providerHealth",
    "safeRetryPolicy",
    "cachePolicy",
    "reliabilityWarnings",
    "Provider timed out",
    "Provider error was normalized",
    "Provider/source unavailable",
    "Freshness warning",
    "Low confidence",
    "Empty result guidance",
    "Retry is user-visible only"
  ].forEach(term => assert(normalizer.includes(term), `FAP8 normalizer must include reliability guidance: ${term}`));

  [
    "nexus-assistant-runtime-reliability",
    "data-nexus-assistant-runtime-provider-health=\"true\"",
    "data-execution-authority=\"false\"",
    "data-provider-handoff=\"false\"",
    "Provider health",
    "Secrets cached",
    "Sensitive data cached",
    "Execution fallback"
  ].forEach(term => assert(renderer.includes(term), `FAP8 renderer must include provider health status: ${term}`));

  [
    ".nexus-assistant-runtime-reliability",
    "background: #f8fbf9",
    "border: 1px solid #d5e5df"
  ].forEach(term => assert(styles.includes(term), `FAP8 styles must include reliability styling: ${term}`));

  [
    "window.open",
    "location.href",
    "navigator.geolocation",
    "getCurrentPosition",
    "watchPosition",
    "getUserMedia",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "providerHandoffAllowed = true",
    "executionAuthority: true",
    "noExecutionAuthorized: false"
  ].forEach(term => {
    assert(!normalizer.includes(term), `FAP8 normalizer must not include unsafe behavior: ${term}`);
    assert(!renderer.includes(term), `FAP8 renderer must not include unsafe behavior: ${term}`);
  });

  assert.equal(
    pkg.scripts["qa:nexus-fap8-reliability-usability-polish"],
    "node scripts/nexus-fap8-reliability-usability-polish-qa.js",
    "FAP8 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-fap8-reliability-usability-polish-qa.js"), "FAP8 QA must be wired into local-safe suites.");
}

async function assertReliabilityBehavior() {
  const timeout = await orchestrator.withProviderTimeout(new Promise(() => {}), "weather", {
    NEXUS_ASSISTANT_PROVIDER_TIMEOUT_MS: "1"
  });
  assert.equal(timeout.reliability.providerTimedOut, true, "Timeout path must be marked.");
  assert.equal(timeout.reliability.safeUnavailableState, true, "Timeout path must be safe unavailable.");
  assert.equal(timeout.reliability.noExecutionFallback, true, "Timeout path must not create execution fallback.");

  const failure = orchestrator.normalizeProviderFailure("agriculture-context", "source-result-empty", {
    NEXUS_ASSISTANT_PROVIDER_TIMEOUT_MS: "300"
  });
  assert.equal(failure.reliability.providerErrorNormalized, true, "Provider error path must be normalized.");
  assert.equal(failure.reliability.cachePolicy.enabled, false, "Provider error path must not cache payloads.");
  assert.equal(failure.reliability.noSecretsCached, true, "Provider error path must not cache secrets.");

  const staleHealth = providerHealth.buildProviderHealthStatus({
    selectedProvider: "agriculture-context",
    providerStatus: "source-result-available",
    allowed: true,
    confidence: "low",
    freshnessStatus: "stale",
    trustAssessment: { staleResultWarning: true },
    citations: [{ freshnessStatus: "stale" }],
    reliability: { rateLimitSafe: true }
  });
  assert.equal(providerHealth.isSafeProviderReliabilityHealth(staleHealth), true, "Stale provider health must remain safe.");
  assert.equal(staleHealth.staleResultWarning, true, "Stale warning must be represented.");
  assert.equal(staleHealth.safeRetryPolicy.automaticRetryAllowed, false, "Retries must not become automatic.");
  assert.equal(staleHealth.cachePolicy.enabled, false, "Reliability cache policy must remain disabled.");

  const missingConfigResponse = await runtime.buildAssistantRuntimeResponseAsync("What is the weather in Stockton, CA?", {
    surface: "standard-user",
    previewOnly: true
  }, {
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_ENABLED: "false"
  });
  assert.equal(runtime.isSafeAssistantRuntimeResponse(missingConfigResponse), true, "Missing config response must remain safe.");
  assert.equal(missingConfigResponse.noExecutionAuthorized, true, "Missing config must not authorize execution.");
  assert.equal(missingConfigResponse.providerHandoffAllowed, false, "Missing config must not authorize handoff.");
  assert(missingConfigResponse.providerHealth.safeUnavailableState, "Missing config must produce safe unavailable provider health.");
  assert.equal(missingConfigResponse.providerHealth.safeRetryPolicy.automaticRetryAllowed, false, "Missing config must not auto-retry.");
  assert.equal(missingConfigResponse.providerHealth.cachePolicy.storesSecrets, false, "Missing config must not cache secrets.");
}

async function runFap8ReliabilityUsabilityPolishQa() {
  assertStaticReliabilityPolish();
  await assertReliabilityBehavior();
  console.log(JSON.stringify({
    timeoutPathSafe: true,
    providerErrorPathSafe: true,
    missingConfigSafe: true,
    staleWarningRepresented: true,
    lowConfidenceGuidanceRepresented: true,
    userVisibleRetryOnly: true,
    noExecutionFallback: true
  }, null, 2));
  console.log("[nexus-fap8-reliability-usability-polish-qa] passed");
}

if (require.main === module) {
  runFap8ReliabilityUsabilityPolishQa().catch(error => {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  });
}

module.exports = Object.freeze({
  runFap8ReliabilityUsabilityPolishQa
});
