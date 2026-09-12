const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const orchestrator = require("../server/nexus-live-source-orchestrator.js");

const root = path.resolve(__dirname, "..");

const SWEEP_PROMPTS = Object.freeze([
  { providerId: "weather", prompt: "What is the weather in Stockton, CA?" },
  { providerId: "agriculture-context", prompt: "What crop disease updates should farmers know?" },
  { providerId: "news-security", prompt: "What security issues are affecting farmers right now?" },
  { providerId: "job-search", prompt: "Find farm jobs in Stockton, CA." },
  { providerId: "shipment-tracking", prompt: "Track this shipment AB12345678." },
  { providerId: "music-media", prompt: "Spotify playlist." }
]);

const HIGH_RISK_PROMPTS = Object.freeze([
  "Call the provider.",
  "Send the farmer a message.",
  "Buy fertilizer.",
  "Dispatch emergency help.",
  "Schedule an appointment.",
  "Share my location."
]);

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticContract() {
  const docName = "NEXUS_RP9_CONTROLLED_ASSISTANT_PREVIEW_LIVE_PROVIDER_SWEEP.md";
  const qaName = "nexus-rp9-controlled-assistant-preview-live-provider-sweep-qa.js";
  assert(exists("docs", docName), "RP9 controlled assistant preview sweep doc must exist.");
  assert(exists("scripts", qaName), "RP9 controlled assistant preview sweep QA must exist.");

  const doc = read("docs", docName);
  const qaSource = read("scripts", qaName);
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "Controlled Assistant Preview Live Provider Sweep",
    "`weather`",
    "`agriculture-context`",
    "`news-security`",
    "`job-search`",
    "`shipment-tracking`",
    "`music-media`",
    "What is the weather in Stockton, CA?",
    "What crop disease updates should farmers know?",
    "What security issues are affecting farmers right now?",
    "Find farm jobs in Stockton, CA.",
    "Track this shipment AB12345678.",
    "Spotify playlist.",
    "Standard User remains default-off and unchanged",
    "no execution authorized"
  ].forEach(term => assert(doc.includes(term), `RP9 doc must include ${term}.`));

  [
    "execute workflows",
    "request browser geolocation",
    "contact providers",
    "call",
    "message",
    "submit applications",
    "change shipments",
    "stream media",
    "process payments",
    "create accounts",
    "navigate externally",
    "dispatch services",
    "write backend state"
  ].forEach(term => assert(doc.includes(term), `RP9 blocked behavior must include ${term}.`));

  ["nexus-rp9-controlled-assistant-preview-live-provider-sweep-qa", "SWEEP_PROMPTS"].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load or expose ${term}.`);
    assert(!index.includes(term), `public/index.html must not load or expose ${term}.`);
  });
  assert(!server.includes("nexus-rp9-controlled-assistant-preview-live-provider-sweep-qa"), "server.js must not load RP9 QA.");

  [
    "fetch" + "(",
    "XML" + "HttpRequest",
    "http." + "request",
    "https." + "request",
    "navigator." + "geolocation",
    "media" + "Devices",
    "write" + "File",
    "append" + "File",
    "localStorage." + "setItem",
    "sessionStorage." + "setItem",
    "window." + "open",
    "location." + "href",
    "send" + "Message",
    "dispatch" + "Provider"
  ].forEach(term => assert(!qaSource.includes(term), `RP9 QA must not include unsafe behavior: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-rp9-controlled-assistant-preview-live-provider-sweep"],
    "node scripts/nexus-rp9-controlled-assistant-preview-live-provider-sweep-qa.js",
    "RP9 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rp9-controlled-assistant-preview-live-provider-sweep-qa.js"), "RP9 QA must be in safe suites.");
}

function assertSafeOrchestrationResult(result, label) {
  assert.equal(orchestrator.isSafeLiveSourceOrchestrationResult(result), true, `${label} must satisfy safe live-source orchestration contract.`);
  assert.equal(result.noExecutionAuthorized, true, `${label} must authorize no execution.`);
  assert.equal(result.noLocationPermissionRequested, true, `${label} must request no location permission.`);
  assert.equal(result.noProviderContactAuthorized, true, `${label} must authorize no provider contact.`);
  assert.equal(result.noBackendWritePerformed, true, `${label} must perform no backend write.`);
  assert.equal(result.safetyPosture.previewOnly, true, `${label} must remain preview-only.`);
  assert(result.auditEvent, `${label} must include audit metadata.`);
  assert(result.trustAssessment, `${label} must include trust assessment metadata.`);
}

function runRp9ControlledAssistantPreviewLiveProviderSweepQa() {
  assertStaticContract();

  const providerSet = new Set();
  SWEEP_PROMPTS.forEach(testCase => {
    const result = orchestrator.buildLiveSourceOrchestrationResult(testCase.prompt, {}, {});
    assert.equal(result.selectedProvider, testCase.providerId, `${testCase.prompt} must select ${testCase.providerId}.`);
    assert.equal(result.allowed, true, `${testCase.prompt} must be allowed only as a safe read-only preview.`);
    assert(["missing_config", "fixture_only", "ready"].includes(result.providerStatus), `${testCase.prompt} provider status must be a safe preview status.`);
    assert(result.results.length >= 1, `${testCase.prompt} must include a normalized source result or provider fallback.`);
    assertSafeOrchestrationResult(result, testCase.prompt);
    providerSet.add(result.selectedProvider);
  });

  HIGH_RISK_PROMPTS.forEach(prompt => {
    const result = orchestrator.buildLiveSourceOrchestrationResult(prompt, {}, {});
    assert.equal(result.allowed, false, `${prompt} must be blocked.`);
    assert.equal(result.selectedProvider, null, `${prompt} must not select a provider.`);
    assert(["execution_phrase_blocked", "execution_or_high_risk_intent_blocked"].includes(result.blockedReason), `${prompt} must be blocked for execution/high-risk policy.`);
    assertSafeOrchestrationResult(result, prompt);
  });

  assert.deepEqual(Array.from(providerSet), SWEEP_PROMPTS.map(testCase => testCase.providerId), "RP9 sweep must cover all six provider lanes.");

  console.log(JSON.stringify({
    providerCount: providerSet.size,
    providers: Array.from(providerSet),
    highRiskPromptCount: HIGH_RISK_PROMPTS.length,
    status: "controlled-assistant-preview-sweep-passed",
    standardUserRuntimeActivated: false,
    noExecutionAuthorized: true,
    noLocationPermissionRequested: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  }, null, 2));
  console.log("[nexus-rp9-controlled-assistant-preview-live-provider-sweep-qa] passed");
}

if (require.main === module) {
  try {
    runRp9ControlledAssistantPreviewLiveProviderSweepQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  SWEEP_PROMPTS,
  HIGH_RISK_PROMPTS,
  runRp9ControlledAssistantPreviewLiveProviderSweepQa
});
