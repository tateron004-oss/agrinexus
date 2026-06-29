const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function sourceBetween(source, start, end) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `Missing source marker: ${start}`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `Missing end marker after ${start}`);
  return source.slice(startIndex, endIndex);
}

const app = read("public", "app.js");
const styles = read("public", "styles.css");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

const surfaceSource = sourceBetween(app, "function a100CapabilitySurfaceHtml", "function a100SafeTaskControlsHtml");
const prepSource = sourceBetween(app, "function a100ReviewOnlyPreparation", "function a100ProviderReadinessCards");
const chronicSource = sourceBetween(app, "function a100ChronicCareQuickActions", "function a100RoutePlanningPreview");
const gateSource = sourceBetween(app, "function a100HighRiskActionGates", "function normalizeA100RuntimeCommand");
const intentSource = sourceBetween(app, "function a100SafeAutonomyIntent", "function openA100SafeAutonomyPreview");

[
  "Chronic Care Assistant",
  "Review-only telehealth support for diabetes, blood pressure, weight, RPM, and RTM.",
  "multilingual, low-bandwidth, rural telehealth and community health worker review",
  "a100-chronic-care-preview",
  "a100ChronicCareQuickActions"
].forEach(copy => assert(surfaceSource.includes(copy), `Chronic care surface should include: ${copy}`));

[
  "Diabetes Support",
  "Blood Pressure Support",
  "Weight & Wellness",
  "RPM/RTM Readiness",
  "Prepare Telehealth Visit",
  "Care Team Summary",
  "Physician Report",
  "Emergency Warning Info"
].forEach(label => assert(chronicSource.includes(label), `Chronic quick action should render: ${label}`));

[
  "function a100ChronicCareReport",
  "Prepare a report for review",
  "Session-only summary",
  "Nexus does not diagnose or prescribe",
  "Data source",
  "Trend or risk signal",
  "Evidence basis",
  "Recommended review",
  "Nexus did not diagnose, prescribe, adjust medication, dispatch emergency services"
].forEach(copy => assert(app.includes(copy), `Reporting foundation should include: ${copy}`));

[
  "help with diabetes",
  "My blood sugar is high",
  "help me with blood pressure",
  "My blood pressure is high",
  "help with obesity",
  "help me lose weight safely",
  "what is RPM",
  "what is RTM",
  "prepare for my telehealth visit",
  "summarize this for my care team"
].forEach(prompt => assert(intentSource.toLowerCase().includes(prompt.toLowerCase()) || chronicSource.toLowerCase().includes(prompt.toLowerCase()), `Chronic prompt should route: ${prompt}`));

[
  "device not connected",
  "manual entry available if supported",
  "review required",
  "provider review needed",
  "no external data transmission",
  "No automatic glucose, blood pressure, weight, or wearable device connection starts from this card.",
  "No readings, summaries, messages, or health records are sent externally from this preview."
].forEach(copy => assert(chronicSource.includes(copy), `RPM/RTM readiness should include: ${copy}`));

[
  "Prepare diabetes telehealth visit notes for review.",
  "Prepare blood pressure telehealth visit notes for review.",
  "Prepare weight and wellness questions for review.",
  "Prepare a care team summary for human review.",
  "Nothing is sent or stored as a medical record from this card."
].forEach(copy => assert(prepSource.includes(copy), `Chronic preparation should include: ${copy}`));

[
  "Medication safety boundary",
  "Urgent symptom boundary",
  "Very high blood pressure boundary",
  "Severe glucose boundary",
  "will not recommend stopping, starting, or changing a dose",
  "Seek local emergency or urgent professional care now",
  "will not make a treatment decision"
].forEach(copy => assert(gateSource.includes(copy), `Healthcare high-risk gate should include: ${copy}`));

[
  "will not diagnose",
  "change medicine",
  "connect devices",
  "transmit health data",
  "no device is connected",
  "no readings are transmitted",
  "Nothing is sent, stored as a medical record, or handed off to a provider"
].forEach(copy => assert(intentSource.includes(copy) || chronicSource.includes(copy), `Chronic response should preserve safety copy: ${copy}`));

[
  chronicSource,
  prepSource,
  intentSource
].forEach((source, index) => {
  assert(!source.includes("localStorage"), `Chronic source ${index} must not persist health data to localStorage.`);
  assert(!source.includes("sessionStorage"), `Chronic source ${index} must not persist health data to sessionStorage.`);
  assert(!source.includes("navigator.geolocation"), `Chronic source ${index} must not request geolocation.`);
  assert(!source.includes("getCurrentPosition"), `Chronic source ${index} must not request current position.`);
  assert(!source.includes("watchPosition"), `Chronic source ${index} must not start tracking.`);
  assert(!source.includes("window.open"), `Chronic source ${index} must not open external providers.`);
  assert(!source.includes("dispatchProviderWebhook"), `Chronic source ${index} must not dispatch providers.`);
  assert(!source.includes("requestPermission"), `Chronic source ${index} must not prompt browser permission.`);
  assert(!source.includes("mediaDevices"), `Chronic source ${index} must not start camera or microphone.`);
  assert(!source.includes("fetch("), `Chronic source ${index} must not add backend or external calls.`);
});

[
  ".a100-chronic-care-preview",
  ".a100-chronic-care-actions",
  ".a100-clinician-report"
].forEach(selector => assert(styles.includes(selector), `Chronic care styles should include ${selector}.`));

assert.equal(pkg.scripts["qa:nexus-chronic-care-assistant-preview"], "node scripts/nexus-chronic-care-assistant-preview-qa.js", "Package script should expose chronic care QA.");
assert(qaSuite.includes("scripts/nexus-chronic-care-assistant-preview-qa.js"), "Chronic care QA should be wired into qa-suite.");

console.log("[nexus-chronic-care-assistant-preview-qa] passed");
