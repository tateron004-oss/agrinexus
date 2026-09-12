const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const orchestrator = require("../server/nexus-live-source-orchestrator.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

const CASES = Object.freeze([
  ["What is the weather in Kenya?", "weather"],
  ["What crop disease updates should farmers know?", "agriculture-context"],
  ["What security issues are affecting farmers in Kenya right now?", "conflict-security"],
  ["Find farm jobs in Nairobi", "job-search"],
  ["Track this shipment ABC123", "shipment-tracking"],
  ["Find music about Kenya", "music-media"]
]);

function runRt3UnifiedLiveSourceOrchestratorQa() {
  const moduleSource = read("server", "nexus-live-source-orchestrator.js");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const doc = read("docs", "NEXUS_RT3_UNIFIED_LIVE_SOURCE_ORCHESTRATOR.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  CASES.forEach(([prompt, expectedIntent]) => {
    const result = orchestrator.buildLiveSourceOrchestrationResult(prompt, {}, {});
    assert.equal(result.intent, expectedIntent, `${prompt} should classify as ${expectedIntent}.`);
    assert(result.requestId.startsWith("live-source-"), "requestId must be present.");
    assert(result.selectedProvider, "selectedProvider must be present.");
    assert(Array.isArray(result.results), "results must be an array.");
    assert(Array.isArray(result.citations), "citations must be an array.");
    assert(result.auditEvent, "auditEvent must be present.");
    assert.equal(result.noExecutionAuthorized, true, "execution must not be authorized.");
    assert.equal(result.noLocationPermissionRequested, true, "location permission must not be requested.");
    assert.equal(result.noProviderContactAuthorized, true, "provider contact must not be authorized.");
    assert.equal(result.noBackendWritePerformed, true, "backend write must not be performed.");
    assert.equal(orchestrator.isSafeLiveSourceOrchestrationResult(result), true, "result must be safe.");
  });

  [
    "Call this provider",
    "Buy fertilizer",
    "Send my location",
    "Book me an appointment",
    "Dispatch help",
    "This is an emergency",
    "Submit my job application"
  ].forEach(prompt => {
    const result = orchestrator.buildLiveSourceOrchestrationResult(prompt, {}, {});
    assert.equal(result.allowed, false, `${prompt} must not be allowed.`);
    assert(["blocked_by_policy", "missing_config"].includes(result.providerStatus), `${prompt} must not produce active execution status.`);
    assert.equal(result.noExecutionAuthorized, true, `${prompt} must not authorize execution.`);
    assert.equal(orchestrator.isSafeLiveSourceOrchestrationResult(result), true, `${prompt} must remain safe.`);
  });

  [
    "requestId",
    "selectedProvider",
    "providerStatus",
    "blockedReason",
    "safetyPosture",
    "suggestedFollowUps",
    "noExecutionAuthorized",
    "noLocationPermissionRequested",
    "noProviderContactAuthorized",
    "noBackendWritePerformed"
  ].forEach(term => assert(moduleSource.includes(term), `RT3 module must include ${term}.`));

  [
    "weather lookup",
    "agriculture context lookup",
    "news/security/conflict lookup",
    "shipment tracking lookup",
    "not wired into Standard User runtime"
  ].forEach(term => assert(doc.includes(term), `RT3 doc must include ${term}.`));

  [app, index, server].forEach((source, indexNumber) => {
    const label = ["public/app.js", "public/index.html", "server.js"][indexNumber];
    assert(!source.includes("nexus-live-source-orchestrator"), `${label} must not load RT3 orchestrator.`);
  });

  [
    "navigator." + "geolocation",
    "getCurrent" + "Position",
    "watch" + "Position",
    "localStorage." + "setItem",
    "sessionStorage." + "setItem",
    "window." + "open",
    "location." + "href"
  ].forEach(term => assert(!moduleSource.includes(term), `RT3 module must not include runtime behavior: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-rt3-unified-live-source-orchestrator"],
    "node scripts/nexus-rt3-unified-live-source-orchestrator-qa.js",
    "RT3 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rt3-unified-live-source-orchestrator-qa.js"), "RT3 QA must be in safe suites.");

  console.log("[nexus-rt3-unified-live-source-orchestrator-qa] passed");
}

if (require.main === module) {
  try {
    runRt3UnifiedLiveSourceOrchestratorQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runRt3UnifiedLiveSourceOrchestratorQa
});
