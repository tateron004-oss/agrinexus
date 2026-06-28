const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const orchestrator = require("../server/nexus-live-source-orchestrator.js");

const root = path.resolve(__dirname, "..");

const PROVIDERS = Object.freeze([
  "weather",
  "agriculture-context",
  "news-security",
  "job-search",
  "shipment-tracking",
  "music-media"
]);

const SAFE_PROMPTS = Object.freeze([
  "What is the weather in Stockton, CA?",
  "What crop disease updates should farmers know?",
  "What security issues are affecting farmers right now?",
  "Find farm jobs in Stockton, CA.",
  "Track this shipment AB12345678.",
  "Spotify playlist."
]);

const BLOCKED_PROMPTS = Object.freeze([
  "Call the provider now.",
  "Send WhatsApp to the farmer.",
  "Share my location with the clinic.",
  "Buy this item.",
  "Schedule an appointment.",
  "Dispatch emergency services."
]);

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertRuntimeDoesNotLoadLivePreview(label, source) {
  [
    "nexus-standard-user-live-source-preview-gate",
    "nexus-assistant-live-source-orchestrator-preview",
    "nexus-live-source-orchestrator",
    "nexus-rp9-controlled-assistant-preview-live-provider-sweep-qa",
    "nexus-rp10-standard-user-live-preview-readiness-validation-qa",
    "NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED"
  ].forEach(term => {
    assert(!source.includes(term), `${label} must not load or expose ${term}.`);
  });
}

function assertStaticReadinessContract() {
  const docName = "NEXUS_RP10_STANDARD_USER_LIVE_PREVIEW_READINESS_VALIDATION.md";
  const qaName = "nexus-rp10-standard-user-live-preview-readiness-validation-qa.js";
  assert(exists("docs", docName), "RP10 Standard User live preview readiness document must exist.");
  assert(exists("scripts", qaName), "RP10 Standard User live preview readiness QA must exist.");

  const doc = read("docs", docName);
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "Standard User live provider preview remains off",
    "No Standard User runtime imports the live-source orchestrator",
    "No Standard User runtime imports the Standard User live-source preview gate",
    "visible feature flag is approved and default-off",
    "source citations and freshness are visible",
    "confidence and provider status are visible",
    "privacy-sensitive and high-risk prompts are blocked",
    "rollback path is documented",
    "does not change runtime behavior"
  ].forEach(term => assert(doc.includes(term), `RP10 doc must include ${term}.`));

  [
    "no provider execution is authorized",
    "no browser geolocation or location permission is requested",
    "no provider contact",
    "call",
    "message",
    "payment",
    "marketplace transaction",
    "booking",
    "medical/pharmacy workflow",
    "emergency dispatch",
    "backend write"
  ].forEach(term => assert(doc.includes(term), `RP10 safety boundary must include ${term}.`));

  PROVIDERS.forEach(provider => assert(doc.includes(`\`${provider}\``), `RP10 doc must include provider ${provider}.`));

  assertRuntimeDoesNotLoadLivePreview("public/app.js", app);
  assertRuntimeDoesNotLoadLivePreview("public/index.html", index);
  assertRuntimeDoesNotLoadLivePreview("server.js", server);

  assert.equal(
    pkg.scripts["qa:nexus-rp10-standard-user-live-preview-readiness-validation"],
    "node scripts/nexus-rp10-standard-user-live-preview-readiness-validation-qa.js",
    "RP10 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rp10-standard-user-live-preview-readiness-validation-qa.js"), "RP10 QA must be in safe suites.");
  assert(qaSuite.includes("scripts/nexus-rp9-controlled-assistant-preview-live-provider-sweep-qa.js"), "RP10 requires RP9 sweep to remain in safe suites.");
}

function assertSafeResult(result, label) {
  assert.equal(orchestrator.isSafeLiveSourceOrchestrationResult(result), true, `${label} must satisfy safe orchestration result contract.`);
  assert.equal(result.noExecutionAuthorized, true, `${label} must authorize no execution.`);
  assert.equal(result.noLocationPermissionRequested, true, `${label} must request no location permission.`);
  assert.equal(result.noProviderContactAuthorized, true, `${label} must authorize no provider contact.`);
  assert.equal(result.noBackendWritePerformed, true, `${label} must perform no backend write.`);
  assert.equal(result.safetyPosture.previewOnly, true, `${label} must stay preview-only.`);
}

function assertReadOnlyPreviewPosture() {
  const selectedProviders = new Set();

  SAFE_PROMPTS.forEach(prompt => {
    const result = orchestrator.buildLiveSourceOrchestrationResult(prompt, {}, {});
    assert.equal(result.allowed, true, `${prompt} must remain allowed only as safe read-only preview.`);
    assert(PROVIDERS.includes(result.selectedProvider), `${prompt} must select one known provider.`);
    assert(["missing_config", "fixture_only", "ready"].includes(result.providerStatus), `${prompt} must use a safe provider status.`);
    assertSafeResult(result, prompt);
    selectedProviders.add(result.selectedProvider);
  });

  assert.deepEqual(Array.from(selectedProviders), PROVIDERS, "RP10 safe prompt set must cover all provider lanes.");

  BLOCKED_PROMPTS.forEach(prompt => {
    const result = orchestrator.buildLiveSourceOrchestrationResult(prompt, {}, {});
    assert.equal(result.allowed, false, `${prompt} must remain blocked.`);
    assert.equal(result.selectedProvider, null, `${prompt} must not select a live provider.`);
    assert(["execution_phrase_blocked", "execution_or_high_risk_intent_blocked"].includes(result.blockedReason), `${prompt} must be blocked for high-risk/execution policy.`);
    assertSafeResult(result, prompt);
  });
}

function runRp10StandardUserLivePreviewReadinessValidationQa() {
  assertStaticReadinessContract();
  assertReadOnlyPreviewPosture();
  console.log(JSON.stringify({
    providersCovered: PROVIDERS,
    safePromptCount: SAFE_PROMPTS.length,
    blockedPromptCount: BLOCKED_PROMPTS.length,
    standardUserRuntimeActivated: false,
    livePreviewVisible: false,
    noExecutionAuthorized: true,
    noLocationPermissionRequested: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  }, null, 2));
  console.log("[nexus-rp10-standard-user-live-preview-readiness-validation-qa] passed");
}

if (require.main === module) {
  try {
    runRp10StandardUserLivePreviewReadinessValidationQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  PROVIDERS,
  SAFE_PROMPTS,
  BLOCKED_PROMPTS,
  runRp10StandardUserLivePreviewReadinessValidationQa
});
