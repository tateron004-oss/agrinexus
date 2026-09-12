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
  "Chronic Care Navigator",
  "Review-only chronic care navigation for diabetes, blood pressure, asthma, heart risk, kidney risk, maternal risk, reminders, RPM, and RTM.",
  "multilingual, low-bandwidth, rural telehealth and community health worker review",
  "a100-chronic-care-preview",
  "a100ChronicCareQuickActions"
].forEach(copy => assert(surfaceSource.includes(copy), `Chronic care surface should include: ${copy}`));

[
  "Chronic Care Navigator",
  "Diabetes Support",
  "Blood Pressure Support",
  "Asthma / Breathing Support",
  "Heart / Kidney Risk",
  "Medication Reminder Plan",
  "Weight & Wellness",
  "RPM/RTM Readiness",
  "Prepare Telehealth Visit",
  "Care Team Summary",
  "CHW Support",
  "Physician Report",
  "Emergency Warning Info"
].forEach(label => assert(chronicSource.includes(label), `Chronic quick action should render: ${label}`));

[
  "function a100ChronicCareReport",
  "Prepare a report for review",
  "Session-only summary",
  "Nexus does not diagnose or prescribe",
  "Report audience",
  "Data source",
  "source of data is user-provided/manual",
  "Adherence concerns",
  "Trend or risk signal",
  "Data sufficiency label",
  "Evidence basis",
  "Escalation reason",
  "Safety boundary applied",
  "Recommended review",
  "physician/provider, nurse, coach, or community health worker",
  "RPM nurse",
  "RTM coach",
  "partial session data only; insufficient for diagnosis or treatment",
  "Nexus did not diagnose, prescribe, adjust medication, dispatch emergency services"
].forEach(copy => assert(app.includes(copy), `Reporting foundation should include: ${copy}`));

[
  "help with diabetes",
  "My blood sugar is high",
  "help me with blood pressure",
  "My blood pressure is high",
  "my mother has asthma",
  "help with heart disease risk",
  "remind me to take my medicine",
  "help with obesity",
  "help me lose weight safely",
  "what is RPM",
  "what is RTM",
  "prepare for my telehealth visit",
  "summarize this for my care team",
  "community health worker support",
  "prepare CHW intake checklist",
  "prepare a physician report",
  "show physician report",
  "summarize for my doctor",
  "prepare care team report"
].forEach(prompt => assert(intentSource.toLowerCase().includes(prompt.toLowerCase()) || chronicSource.toLowerCase().includes(prompt.toLowerCase()), `Chronic prompt should route: ${prompt}`));

[
  "Chronic Care AI Navigator for Africa",
  "Asthma / chronic respiratory disease",
  "Heart disease risk",
  "Kidney disease risk",
  "Maternal chronic risk support",
  "Medication adherence and appointment follow-up",
  "condition support summary",
  "tracking checklist",
  "red-flag symptoms"
].forEach(copy => assert(app.includes(copy), `Chronic care navigator foundation should include: ${copy}`));

[
  "What is A1c?",
  "A1c education",
  "hypo/hyperglycemia safety",
  "Diabetes focus",
  "Diabetes evidence label",
  "RPM glucose data needed for trend",
  "food/activity context"
].forEach(copy => assert(app.includes(copy), `Diabetes support/reporting should include: ${copy}`));

[
  "How should I measure BP?",
  "Measurement context",
  "cuff size",
  "measurement technique",
  "sodium/activity education",
  "medication-adherence discussion prep",
  "Blood pressure focus",
  "Blood pressure evidence label",
  "repeated BP data needed for trend"
].forEach(copy => assert(app.includes(copy), `Hypertension support/reporting should include: ${copy}`));

[
  "Track my weight safely.",
  "Help with nutrition goals.",
  "Activity goal.",
  "Sleep and stress support.",
  "Progress barriers.",
  "Self-reported barrier",
  "RTM behavior signal",
  "supportive, no shame/blame questions",
  "no medication, supplement, purchase, or product recommendation",
  "will not prescribe a diet, medicine, supplement, product, purchase, or paid plan"
].forEach(copy => assert(app.includes(copy), `Weight wellness support/reporting should include: ${copy}`));

[
  "id: \"report\"",
  "const reportKind = chronicMatched.id === \"report\"",
  "action: `low-risk-chronic-${chronicMatched.id}`",
  "Care Team Report",
  "Physician Report",
  "session-only physician/care-team report",
  "report: a100ChronicCareReport"
].forEach(copy => assert(intentSource.includes(copy), `Report routing should include: ${copy}`));

[
  "Build a Clinician Visit Summary.",
  "Clinician Visit Summary",
  "Telehealth Report basis",
  "recent readings",
  "symptoms/concerns",
  "Medication questions to ask provider",
  "food/activity barriers",
  "goals since last visit",
  "no provider handoff, message, call, medical record write, or external sharing",
  "Visit preparation only. Nexus does not diagnose, prescribe, change medicine, call, message, schedule, update records, or hand off to a provider."
].forEach(copy => assert(app.includes(copy), `Telehealth visit prep/reporting should include: ${copy}`));

[
  "category: \"chw\"",
  "Community health worker support.",
  "Prepare CHW intake checklist.",
  "Explain this in simple language.",
  "Prepare referral guidance.",
  "Prepare follow-up notes.",
  "CHW intake checklist",
  "BP/glucose/weight collection",
  "low-literacy explanation prompts",
  "patient education scripts",
  "referral guidance",
  "follow-up preparation",
  "Clinician handoff summary",
  "Community health worker review report",
  "Nexus does not diagnose, change medicines, submit referrals, send messages, call providers, connect devices, or update records."
].forEach(copy => assert(app.includes(copy), `CHW support/reporting should include: ${copy}`));

[
  "Blood pressure cuff",
  "Glucose meter/CGM",
  "Weight scale",
  "Activity tracker",
  "device-ready, not connected",
  "device not connected",
  "manual entry available if supported",
  "review required",
  "provider review needed",
  "no external data transmission",
  "RPM data inputs",
  "RTM self-report",
  "Monitoring readiness label",
  "insufficient data",
  "stale or missing data",
  "No automatic glucose, blood pressure, weight, or wearable device connection starts from this card.",
  "No readings, summaries, messages, or health records are sent externally from this preview."
].forEach(copy => assert(app.includes(copy), `RPM/RTM readiness should include: ${copy}`));

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
  "may pass out",
  "will not recommend stopping, starting, or changing a dose",
  "Seek local emergency or urgent professional care now",
  "will not make a treatment decision"
].forEach(copy => assert(gateSource.includes(copy), `Healthcare high-risk gate should include: ${copy}`));

[
  "report: a100ChronicCareReport(\"safety\", command)",
  "will not diagnose, change medicine, call, send, pay, buy",
  "dispatch help, connect devices, transmit health data, or change records"
].forEach(copy => assert(intentSource.includes(copy), `High-risk report safety should include: ${copy}`));

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
