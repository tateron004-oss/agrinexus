const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}(`);
  assert(start >= 0, `${name} should exist`);
  const signatureEnd = source.indexOf(")", start);
  const bodyStart = source.indexOf("{", signatureEnd);
  let depth = 0;
  for (let index = bodyStart; index < source.length; index += 1) {
    const char = source[index];
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error(`${name} body should be extractable`);
}

const panelSource = extractFunction(app, "a100RpmRtmManualIntakePanelHtml");
const handlerSource = extractFunction(app, "handleA100RpmRtmManualIntake");
const previewSource = extractFunction(app, "updateA100RpmRtmManualSessionPreview");
const summarySource = extractFunction(app, "a100RpmRtmSessionDataSummary");
const reportSource = extractFunction(app, "a100ChronicCareReport");
const surfaceSource = extractFunction(app, "a100CapabilitySurfaceHtml");

[
  "a100RpmRtmSessionData",
  "a100RpmRtmManualIntakePanelHtml",
  "updateA100RpmRtmManualSessionPreview",
  "handleA100RpmRtmManualIntake",
  "RPM/RTM Manual Session Intake",
  "Session-only manual notes for review",
  "Manual entry only",
  "Device-ready, not connected",
  "Provider review required"
].forEach(term => assert(app.includes(term), `RPM/RTM runtime capability should include ${term}`));

[
  "bloodPressure",
  "glucose",
  "weight",
  "activityAdherence",
  "symptomsConcerns"
].forEach(field => {
  assert(panelSource.includes(`data-a100-rpm-field="${field}"`), `manual intake panel should include ${field}`);
  assert(summarySource.includes(field), `summary should include ${field}`);
});

[
  "data-nexus-rpm-rtm-manual-intake=\"true\"",
  "data-session-only=\"true\"",
  "data-device-connected=\"false\"",
  "data-external-transmission=\"false\"",
  "data-persistent-storage=\"false\"",
  "data-clinical-decision=\"false\"",
  "data-a100-rpm-update=\"true\""
].forEach(attr => assert(panelSource.includes(attr), `RPM/RTM panel should render safety attribute ${attr}`));

[
  "a100RpmRtmManualSessionSummary",
  "a100RpmRtmSessionDataSummary()",
  "RPM/RTM manual notes",
  "RPM/RTM Manual Session Data"
].forEach(term => assert(reportSource.includes(term) || panelSource.includes(term), `report/intake should integrate manual session data: ${term}`));

assert(surfaceSource.includes("a100RpmRtmManualIntakePanelHtml()"), "default Standard User A100 surface should include RPM/RTM manual intake.");
assert(previewSource.includes("slice(0, 160)"), "manual intake values should be bounded.");
assert(handlerSource.includes("nodeType === 1") && handlerSource.includes("parentElement"), "manual intake handler should normalize text-node click targets.");
assert(previewSource.includes("[data-a100-rpm-summary]"), "manual intake preview helper should update the scoped session summary.");
assert(handlerSource.includes("updateA100RpmRtmManualSessionPreview(root)"), "manual intake button handler should update the session preview.");
assert(handlerSource.includes("recordVoiceEvent(\"RPM/RTM manual session preview updated\""), "manual intake should only record local UI preview evidence.");
assert(handlerSource.includes("without device connection, transmission, storage, or clinical execution"), "manual intake should explicitly log no execution posture.");
assert(app.includes("window.handleA100RpmRtmManualIntake = handleA100RpmRtmManualIntake"), "manual intake handler should remain exposed for compatibility.");
assert(app.includes("document.addEventListener(\"click\"") && app.includes("[data-a100-rpm-update='true']"), "manual intake update should have a delegated click handler.");
assert(app.includes("document.addEventListener(\"input\"") && app.includes("updateA100RpmRtmManualSessionPreview(root)"), "manual intake fields should update the session preview from input events.");

[
  "localStorage",
  "sessionStorage",
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "writeDb(",
  "dispatchProviderWebhook",
  "navigator.bluetooth",
  "navigator.usb",
  "navigator.serial",
  "getUserMedia",
  "sendBeacon",
  "providerContact"
].forEach(term => {
  assert(!handlerSource.includes(term), `manual intake handler must not introduce storage/network/device/provider behavior: ${term}`);
  assert(!previewSource.includes(term), `manual intake preview helper must not introduce storage/network/device/provider behavior: ${term}`);
  assert(!panelSource.includes(term), `manual intake panel must not include storage/network/device/provider behavior: ${term}`);
});

[
  ".a100-rpm-rtm-manual-intake",
  ".a100-rpm-rtm-manual-intake-grid",
  ".a100-rpm-rtm-update",
  ".a100-rpm-rtm-summary"
].forEach(selector => assert(styles.includes(selector), `styles should include ${selector}`));

assert.equal(
  pkg.scripts["qa:nexus-rpm-rtm-runtime-data-capability"],
  "node scripts/nexus-rpm-rtm-runtime-data-capability-qa.js",
  "package.json should expose RPM/RTM runtime data QA alias"
);

assert(
  qaSuite.includes("scripts/nexus-rpm-rtm-runtime-data-capability-qa.js"),
  "qa-suite should include RPM/RTM runtime data QA in safe suites"
);

console.log("[nexus-rpm-rtm-runtime-data-capability-qa] passed");
