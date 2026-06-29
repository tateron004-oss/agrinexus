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
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

const reportSource = sourceBetween(app, "function a100ChronicCareReport", "function a100ChronicCareReadinessCards");
const chronicSource = sourceBetween(app, "function a100ChronicCareQuickActions", "function a100RoutePlanningPreview");
const intentSource = sourceBetween(app, "function a100SafeAutonomyIntent", "function openA100SafeAutonomyPreview");
const gateSource = sourceBetween(app, "function a100HighRiskActionGates", "function normalizeA100RuntimeCommand");

[
  "Physician Report",
  "Prepare a session-only report for review.",
  "Care Team Summary",
  "Prepare Telehealth Visit",
  "Diabetes Support",
  "Blood Pressure Support",
  "Weight & Wellness",
  "RPM/RTM Readiness",
  "CHW Support"
].forEach(copy => assert(chronicSource.includes(copy), `Physician report entry path should include: ${copy}`));

[
  "prepare a physician report",
  "show physician report",
  "summarize for my doctor",
  "prepare care team report",
  "create a clinical summary",
  "summarize this for the nurse",
  "summarize this for the community health worker",
  "what data supports this",
  "what is missing",
  "what should the doctor review",
  "reportKind",
  "report: a100ChronicCareReport"
].forEach(copy => assert(intentSource.toLowerCase().includes(copy.toLowerCase()), `Physician report prompt routing should include: ${copy}`));

[
  "Report Type",
  "Condition Area",
  "Patient Concern",
  "Current Session Data",
  "Readings Mentioned",
  "Symptoms Mentioned",
  "Medication Questions",
  "RPM/RTM Readiness",
  "Lifestyle / Adherence Barriers",
  "Missing Information",
  "Risk / Safety Flags",
  "Recommended Review Level",
  "Evidence / Source Label",
  "Nexus Safety Boundary"
].forEach(section => assert(reportSource.includes(section), `Physician report should include structured section: ${section}`));

[
  "Education / self-management support",
  "Coach or community health worker review",
  "Nurse review",
  "Physician/provider review",
  "Urgent/emergency care guidance"
].forEach(level => assert(reportSource.includes(level), `Physician report should include review level: ${level}`));

[
  "General chronic-care education",
  "RPM data needed",
  "RTM behavior data needed",
  "Manual/session-only information",
  "Insufficient data",
  "Provider review required",
  "Urgent warning guidance"
].forEach(label => assert(reportSource.includes(label), `Physician report should include evidence/source label: ${label}`));

[
  "Diabetes report detail",
  "blood sugar concern",
  "glucose reading if mentioned",
  "hypoglycemia/hyperglycemia warning language",
  "A1c discussion prompt",
  "medication/insulin questions routed to provider review"
].forEach(copy => assert(reportSource.includes(copy), `Diabetes report details should include: ${copy}`));

[
  "Hypertension report detail",
  "blood pressure concern",
  "BP reading if mentioned",
  "home BP technique/checklist",
  "severe BP, chest pain, or stroke symptoms routed to urgent guidance"
].forEach(copy => assert(reportSource.includes(copy), `Hypertension report details should include: ${copy}`));

[
  "Weight wellness report detail",
  "weight or wellness concern",
  "nutrition/activity/sleep/stress barriers",
  "behavior coaching support",
  "medication/supplement requests gated to provider review"
].forEach(copy => assert(reportSource.includes(copy), `Weight wellness report details should include: ${copy}`));

[
  "not connected; manual entry only; review required; no automatic data transmission",
  "source of data is user-provided/manual",
  "session-only user text",
  "low-bandwidth summary ready for physician/care-team review",
  "community health worker, nurse supervisor, physician/provider, or care coordinator"
].forEach(copy => assert(reportSource.includes(copy), `RPM/RTM and Africa-ready report detail should include: ${copy}`));

assert(reportSource.includes("Nexus prepared this summary for review only. Nexus did not diagnose, prescribe, adjust medication, dispatch emergency services, contact a provider, connect a device, transmit data, or store sensitive health data persistently."), "Physician report should include required Nexus safety disclaimer.");

[
  "Medication safety boundary",
  "Urgent symptom boundary",
  "Very high blood pressure boundary",
  "Severe glucose boundary",
  "insulin",
  "chest pain",
  "stroke",
  "shortness of breath",
  "fainting",
  "extremely high",
  "extremely low",
  "emergency",
  "will not recommend stopping, starting, or changing a dose",
  "Seek local emergency or urgent professional care now"
].forEach(copy => assert(gateSource.includes(copy), `High-risk medical gating should include: ${copy}`));

[
  reportSource,
  chronicSource,
  intentSource
].forEach((source, index) => {
  assert(!source.includes("localStorage"), `Physician report source ${index} must not persist health data to localStorage.`);
  assert(!source.includes("sessionStorage"), `Physician report source ${index} must not persist health data to sessionStorage.`);
  assert(!source.includes("navigator.geolocation"), `Physician report source ${index} must not request geolocation.`);
  assert(!source.includes("getCurrentPosition"), `Physician report source ${index} must not request current position.`);
  assert(!source.includes("watchPosition"), `Physician report source ${index} must not start tracking.`);
  assert(!source.includes("mediaDevices"), `Physician report source ${index} must not start camera or microphone.`);
  assert(!source.includes("requestPermission"), `Physician report source ${index} must not prompt browser permission.`);
  assert(!source.includes("fetch("), `Physician report source ${index} must not add backend or external calls.`);
  assert(!source.includes("window.open"), `Physician report source ${index} must not open external providers.`);
  assert(!source.includes("dispatchProviderWebhook"), `Physician report source ${index} must not dispatch providers.`);
});

assert.equal(pkg.scripts["qa:nexus-chronic-care-physician-report"], "node scripts/nexus-chronic-care-physician-report-qa.js", "Package script should expose physician report QA.");
assert(qaSuite.includes("scripts/nexus-chronic-care-physician-report-qa.js"), "Physician report QA should be wired into qa-suite.");

console.log("[nexus-chronic-care-physician-report-qa] passed");
