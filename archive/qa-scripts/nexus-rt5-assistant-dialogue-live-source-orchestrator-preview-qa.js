const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const preview = require("../server/nexus-assistant-live-source-orchestrator-preview.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function runRt5AssistantDialogueLiveSourceOrchestratorPreviewQa() {
  const moduleSource = read("server", "nexus-assistant-live-source-orchestrator-preview.js");
  const doc = read("docs", "NEXUS_RT5_ASSISTANT_DIALOGUE_LIVE_SOURCE_ORCHESTRATOR_PREVIEW.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  const disabled = preview.buildAssistantLiveSourceOrchestratorPreview("What is the weather in Stockton, CA?", {}, {});
  assert.equal(disabled.sourcePreviewEnabled, false, "RT5 preview must default off.");
  assert.equal(preview.isSafeAssistantLiveSourceOrchestratorPreview(disabled), true, "default-off preview must be safe.");
  assert.equal(disabled.executionAuthority, false, "default-off preview must not grant execution.");

  const env = {
    NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED: "true",
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_ENABLED: "true",
    NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
    NEXUS_NEWS_SECURITY_PROVIDER_ENABLED: "true",
    NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
    NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED: "true",
    NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED: "true"
  };

  [
    ["What is the weather in Stockton, CA?", "weather"],
    ["What crop disease updates should farmers know?", "agriculture-context"],
    ["What security issues are affecting farmers in Kenya right now?", "conflict-security"],
    ["Find farm jobs in Nairobi", "job-search"],
    ["Track this shipment AB12345678", "shipment-tracking"],
    ["Find music about Kenya", "music-media"]
  ].forEach(([prompt, expectedIntent]) => {
    const result = preview.buildAssistantLiveSourceOrchestratorPreview(prompt, {}, env);
    assert.equal(result.sourcePreviewEnabled, true, `${prompt} should be enabled in harness env.`);
    assert.equal(result.orchestrationResult.intent, expectedIntent, `${prompt} intent mismatch.`);
    assert.equal(result.executionAuthority, false, `${prompt} must not grant execution.`);
    assert.equal(result.noExecutionAuthorized, true, `${prompt} must not authorize execution.`);
    assert.equal(result.noLocationPermissionRequested, true, `${prompt} must not request location.`);
    assert.equal(result.noProviderContactAuthorized, true, `${prompt} must not authorize provider contact.`);
    assert.equal(result.noBackendWritePerformed, true, `${prompt} must not write backend state.`);
    assert(Array.isArray(result.citations), `${prompt} citations must be carried through.`);
    assert(result.auditEvent, `${prompt} auditEvent must be carried through.`);
    assert.equal(preview.isSafeAssistantLiveSourceOrchestratorPreview(result), true, `${prompt} preview must be safe.`);
  });

  [
    "Call provider",
    "Message provider",
    "Apply now",
    "Buy now",
    "Book appointment",
    "Send location",
    "Dispatch help",
    "Submit form",
    "Pay",
    "Create account"
  ].forEach(blocked => {
    const safe = preview.filterSafeFollowUps([blocked, "Explain this result"]);
    assert(!safe.includes(blocked), `${blocked} must be filtered from follow-ups.`);
    assert(safe.includes("Explain this result"), "safe follow-up should survive filtering.");
  });

  ["Call this provider", "Buy fertilizer", "Send my location", "Book me an appointment", "This is an emergency"].forEach(prompt => {
    const result = preview.buildAssistantLiveSourceOrchestratorPreview(prompt, {}, env);
    assert.equal(result.orchestrationResult.allowed, false, `${prompt} must remain blocked.`);
    assert.equal(result.executionAuthority, false, `${prompt} must not grant execution.`);
    assert.equal(preview.isSafeAssistantLiveSourceOrchestratorPreview(result), true, `${prompt} blocked preview must be safe.`);
  });

  [
    "requestId",
    "selectedProvider",
    "providerStatus",
    "citations",
    "confidence",
    "safetyPosture",
    "auditEvent",
    "nextSafeOptions"
  ].forEach(term => assert(moduleSource.includes(term), `RT5 module must preserve ${term}.`));

  [
    "Ask a follow-up question",
    "Compare sources",
    "Explain this result",
    "Review source details",
    "Call provider",
    "Message provider",
    "Apply now",
    "Buy now",
    "Book appointment",
    "Send location",
    "Dispatch help",
    "Submit form",
    "Pay",
    "Create account"
  ].forEach(term => assert(doc.includes(term), `RT5 doc must include: ${term}`));

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
    "mediaDevices",
    "document.",
    "addEventListener"
  ].forEach(term => assert(!moduleSource.includes(term), `RT5 module must not include side-effect API: ${term}`));

  [app, index, server].forEach((source, indexNumber) => {
    const label = ["public/app.js", "public/index.html", "server.js"][indexNumber];
    assert(!source.includes("nexus-assistant-live-source-orchestrator-preview"), `${label} must not load RT5 preview adapter.`);
  });

  assert.equal(
    pkg.scripts["qa:nexus-rt5-assistant-dialogue-live-source-orchestrator-preview"],
    "node scripts/nexus-rt5-assistant-dialogue-live-source-orchestrator-preview-qa.js",
    "RT5 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rt5-assistant-dialogue-live-source-orchestrator-preview-qa.js"), "RT5 QA must be in safe suites.");

  console.log("[nexus-rt5-assistant-dialogue-live-source-orchestrator-preview-qa] passed");
}

if (require.main === module) {
  try {
    runRt5AssistantDialogueLiveSourceOrchestratorPreviewQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runRt5AssistantDialogueLiveSourceOrchestratorPreviewQa
});
