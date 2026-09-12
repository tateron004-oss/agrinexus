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
const labelsSource = extractFunction(app, "a100RpmRtmManualDataSourceLabels");
const previewSource = extractFunction(app, "updateA100RpmRtmManualSessionPreview");
const summarySource = extractFunction(app, "a100RpmRtmSessionDataSummary");
const reportSource = extractFunction(app, "a100ChronicCareReport");
const reportResultSource = extractFunction(app, "createNexusChronicCarePhysicianReportResult");
const reportRenderSource = extractFunction(app, "renderNexusChronicCarePhysicianReportResults");

[
  "RPM/RTM Manual Session Intake",
  "Blood pressure",
  "Glucose",
  "Weight",
  "Activity / adherence",
  "Symptoms / concerns"
].forEach(copy => assert(panelSource.includes(copy), `Sprint 14 intake panel should include ${copy}`));

[
  "manual entry",
  "RTM self-report",
  "missing data",
  "insufficient data",
  "device-ready not connected"
].forEach(label => {
  assert(labelsSource.includes(label), `Sprint 14 source labels should include ${label}`);
  assert(panelSource.includes("data-current-session-source-labels"), "Sprint 14 panel should expose current-session source labels.");
});

[
  "data-session-only=\"true\"",
  "data-device-connected=\"false\"",
  "data-external-transmission=\"false\"",
  "data-persistent-storage=\"false\"",
  "data-clinical-decision=\"false\""
].forEach(attr => assert(panelSource.includes(attr), `Sprint 14 panel should include safety attribute ${attr}`));

[
  "Manual/session-only information",
  "Device not connected",
  "Nexus does not diagnose or adjust medication",
  "Manual entry only",
  "Provider review required"
].forEach(copy => assert(panelSource.includes(copy), `Sprint 14 visible safety copy should include ${copy}`));

[
  "bloodPressure",
  "glucose",
  "weight",
  "activityAdherence",
  "symptomsConcerns"
].forEach(field => {
  assert(panelSource.includes(`data-a100-rpm-field="${field}"`), `Sprint 14 panel should collect ${field}`);
  assert(summarySource.includes(field), `Sprint 14 summary should include ${field}`);
});

assert(previewSource.includes("slice(0, 160)"), "Sprint 14 manual values should be bounded.");
assert(previewSource.includes("a100RpmRtmSessionData = nextData"), "Sprint 14 should keep manual data in current session memory only.");
assert(reportSource.includes("a100RpmRtmSessionDataSummary()"), "Sprint 14 report should consume current-session manual data.");
assert(reportSource.includes("RPM/RTM Manual Session Data"), "Sprint 14 report should include manual session data as a report field.");
assert(reportResultSource.includes("rpmRtmManualSessionData"), "Sprint 14 controlled report result should carry manual session data.");
assert(reportRenderSource.includes("RPM/RTM Manual Session Data"), "Sprint 14 visible report card should render manual session data.");

[
  "localStorage",
  "sessionStorage",
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "writeDb(",
  "dispatchProviderWebhook",
  "navigator.geolocation",
  "getCurrentPosition",
  "watchPosition",
  "navigator.bluetooth",
  "navigator.usb",
  "navigator.serial",
  "getUserMedia",
  "requestPermission",
  "sendBeacon"
].forEach(term => {
  assert(!panelSource.includes(term), `Sprint 14 panel must not introduce ${term}`);
  assert(!previewSource.includes(term), `Sprint 14 preview must not introduce ${term}`);
});

[
  ".a100-rpm-rtm-source-labels",
  ".a100-rpm-rtm-source-labels span"
].forEach(selector => assert(styles.includes(selector), `Sprint 14 styles should include ${selector}`));

assert.equal(
  pkg.scripts["qa:nexus-capability-sprint-14-rpm-rtm-manual-data-intake"],
  "node scripts/nexus-capability-sprint-14-rpm-rtm-manual-data-intake-qa.js",
  "package alias should expose Sprint 14 QA."
);

assert(
  qaSuite.includes("scripts/nexus-capability-sprint-14-rpm-rtm-manual-data-intake-qa.js"),
  "qa-suite should include Sprint 14 QA."
);

console.log("[nexus-capability-sprint-14-rpm-rtm-manual-data-intake-qa] passed");
