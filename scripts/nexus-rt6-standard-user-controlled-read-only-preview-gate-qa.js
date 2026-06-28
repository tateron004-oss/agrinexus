const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const gate = require("../public/nexus-standard-user-live-source-preview-gate.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function runRt6StandardUserControlledReadOnlyPreviewGateQa() {
  const moduleSource = read("public", "nexus-standard-user-live-source-preview-gate.js");
  const doc = read("docs", "NEXUS_RT6_STANDARD_USER_CONTROLLED_READ_ONLY_PREVIEW_GATE.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  const enabledEnv = {
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED: "true",
    NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED: "true"
  };

  assert.equal(gate.areRequiredFlagsEnabled({}), false, "RT6 flags must default off.");
  assert.equal(gate.areRequiredFlagsEnabled(enabledEnv), true, "RT6 flags must require all three explicit flags.");

  ["weather", "agriculture-context", "current-events-news", "conflict-security", "job-search", "music-media"].forEach(intent => {
    const result = gate.resolveStandardUserLiveSourcePreviewGate({ prompt: `safe ${intent} question`, intent }, enabledEnv);
    assert.equal(result.enabled, true, `${intent} should be eligible when all flags are on.`);
    assert.equal(result.allowedPreviewOnly, true, `${intent} should be preview-only eligible.`);
    assert.equal(gate.isSafeStandardUserLiveSourcePreviewGate(result), true, `${intent} gate result must be safe.`);
  });

  const shipmentMissing = gate.resolveStandardUserLiveSourcePreviewGate({ prompt: "Track my shipment", intent: "shipment-tracking" }, enabledEnv);
  assert.equal(shipmentMissing.enabled, false, "shipment preview must require explicit tracking/reference text.");
  assert.equal(shipmentMissing.blockedReason, "shipment_tracking_requires_explicit_reference", "shipment missing reference reason must be explicit.");

  const shipmentExplicit = gate.resolveStandardUserLiveSourcePreviewGate({ prompt: "Track shipment AB12345678", intent: "shipment-tracking" }, enabledEnv);
  assert.equal(shipmentExplicit.enabled, true, "shipment preview may be eligible with explicit reference text.");

  ["emergency dispatch", "medical pharmacy", "buy fertilizer", "pay seller", "apply now", "submit form", "call provider", "message seller", "book appointment", "send location", "log in to my account"].forEach(prompt => {
    const result = gate.resolveStandardUserLiveSourcePreviewGate({ prompt, intent: "weather" }, enabledEnv);
    assert.equal(result.enabled, false, `${prompt} must be blocked from Standard User live preview.`);
    assert.equal(gate.isSafeStandardUserLiveSourcePreviewGate(result), true, `${prompt} blocked result must remain safe.`);
  });

  const flagOff = gate.resolveStandardUserLiveSourcePreviewGate({ prompt: "What is the weather in Stockton?", intent: "weather" }, {});
  assert.equal(flagOff.enabled, false, "flag-off Standard User gate must stay disabled.");
  assert.equal(flagOff.noVisibleRuntimeChangeWhenDisabled, true, "flag-off gate must declare no visible runtime change.");

  [
    "NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED",
    "NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED",
    "NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED",
    "noExecutionAuthorized",
    "noLocationPermissionRequested",
    "noProviderContactAuthorized",
    "noBackendWritePerformed",
    "noAutoNavigationAuthorized",
    "noPermissionPromptAuthorized"
  ].forEach(term => assert(moduleSource.includes(term), `RT6 gate module must include ${term}.`));

  [
    "no visible behavior change",
    "no provider calls",
    "no preview cards",
    "shipment information with explicit tracking/reference text only",
    "emergency dispatch",
    "medical/pharmacy",
    "calls/messages",
    "location sharing or browser geolocation",
    "no execution controls"
  ].forEach(term => assert(doc.includes(term), `RT6 doc must include: ${term}`));

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
  ].forEach(term => assert(!moduleSource.includes(term), `RT6 gate must not include side-effect API: ${term}`));

  [app, index, server].forEach((source, indexNumber) => {
    const label = ["public/app.js", "public/index.html", "server.js"][indexNumber];
    assert(!source.includes("nexus-standard-user-live-source-preview-gate"), `${label} must not load RT6 gate.`);
  });

  assert.equal(
    pkg.scripts["qa:nexus-rt6-standard-user-controlled-read-only-preview-gate"],
    "node scripts/nexus-rt6-standard-user-controlled-read-only-preview-gate-qa.js",
    "RT6 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rt6-standard-user-controlled-read-only-preview-gate-qa.js"), "RT6 QA must be in safe suites.");

  console.log("[nexus-rt6-standard-user-controlled-read-only-preview-gate-qa] passed");
}

if (require.main === module) {
  try {
    runRt6StandardUserControlledReadOnlyPreviewGateQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runRt6StandardUserControlledReadOnlyPreviewGateQa
});
