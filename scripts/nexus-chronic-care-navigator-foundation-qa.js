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

const surfaceSource = sourceBetween(app, "function a100CapabilitySurfaceHtml", "function a100SafeTaskControlsHtml");
const prepSource = sourceBetween(app, "function a100ReviewOnlyPreparation", "function a100ProviderReadinessCards");
const chronicSource = sourceBetween(app, "function a100ChronicCareQuickActions", "function a100RoutePlanningPreview");
const guidanceSource = sourceBetween(app, "function a100ChronicCareGuidanceCard", "function a100RoutePlanningPreview");
const intentSource = sourceBetween(app, "function a100SafeAutonomyIntent", "function openA100SafeAutonomyPreview");
const gateSource = sourceBetween(app, "function a100HighRiskActionGates", "function normalizeA100RuntimeCommand");

[
  "Chronic Care Navigator",
  "Review-only chronic care navigation for diabetes, blood pressure, asthma, heart risk, kidney risk, maternal risk, reminders, RPM, and RTM.",
  "multilingual, low-bandwidth, rural telehealth and community health worker review"
].forEach(copy => assert(surfaceSource.includes(copy), `Navigator surface should include: ${copy}`));

[
  "Chronic Care Navigator",
  "Asthma / Breathing Support",
  "Heart / Kidney Risk",
  "Medication Reminder Plan",
  "Text-first Africa-ready support for education, tracking, reminders, clinic prep, and red-flag guidance."
].forEach(copy => assert(chronicSource.includes(copy), `Navigator quick actions should include: ${copy}`));

[
  "category: \"navigator\"",
  "category: \"asthma\"",
  "category: \"heart-risk\"",
  "category: \"kidney-risk\"",
  "category: \"maternal-risk\"",
  "category: \"medication-reminder\"",
  "Age range.",
  "Country or region.",
  "Preferred language.",
  "Known condition.",
  "Clinic access.",
  "Last BP/glucose reading if known.",
  "No diagnosis, prescribing, medication change, booking, message, call, payment, pharmacy order, location lookup, provider handoff, device connection, external transmission, or persistent sensitive storage."
].forEach(copy => assert(prepSource.includes(copy), `Navigator preparation should include: ${copy}`));

[
  "chronic-care-navigator-africa",
  "Chronic Care Navigator for Africa: education, tracking, reminders, clinic preparation, red-flag routing, and CHW support.",
  "condition support summary",
  "tracking checklist",
  "Route red flags to urgent-care guidance and stop normal coaching.",
  "I can help you prepare, understand, track, and navigate care. I do not replace a doctor, nurse, pharmacist, community health worker, or emergency service.",
  "chronic-care-asthma-respiratory",
  "inhaler-technique questions",
  "severe shortness of breath",
  "chronic-care-heart-risk",
  "chronic-care-kidney-risk",
  "chronic-care-maternal-risk",
  "chronic-care-medication-reminder"
].forEach(copy => assert(guidanceSource.includes(copy), `Navigator guidance should include: ${copy}`));

[
  "chronic care navigator",
  "i have diabetes",
  "manage",
  "my father has high blood pressure and forgets his medicine",
  "my mother has asthma",
  "i have asthma and want to prepare for my clinic visit",
  "what should i ask my doctor",
  "community health worker",
  "help with heart disease risk",
  "help with kidney disease risk",
  "pregnancy danger signs",
  "remind me to take my medicine",
  "book me a doctor appointment now",
  "buy"
].forEach(prompt => assert(intentSource.toLowerCase().includes(prompt) || gateSource.toLowerCase().includes(prompt) || chronicSource.toLowerCase().includes(prompt), `Navigator representative prompt should be routed or gated: ${prompt}`));

[
  "asthma: \"Asthma / Breathing Support\"",
  "\"heart-risk\": \"Heart Disease Risk Support\"",
  "\"kidney-risk\": \"Kidney Risk Support\"",
  "\"maternal-risk\": \"Maternal Chronic Risk Support\"",
  "\"medication-reminder\": \"Medication Reminder Plan\"",
  "navigator: \"Chronic Care Navigator\"",
  "I can help you prepare, understand, track, and navigate chronic care",
  "I do not replace a doctor, nurse, pharmacist, CHW, or emergency service"
].forEach(copy => assert(intentSource.includes(copy), `Navigator intent response should include: ${copy}`));

[
  "Medication safety boundary",
  "Urgent symptom boundary",
  "Appointment booking boundary",
  "Payment and purchase boundary",
  "severe weakness",
  "severe shortness of breath",
  "severe confusion",
  "pregnancy danger signs",
  "severe dehydration",
  "loss of consciousness",
  "will not recommend stopping, starting, or changing a dose",
  "it will not book, schedule, or contact a provider"
].forEach(copy => assert(gateSource.includes(copy), `Navigator safety gates should include: ${copy}`));

[
  "Asthma / chronic respiratory disease",
  "Heart disease risk",
  "Kidney disease risk",
  "Maternal chronic risk support",
  "Medication adherence and appointment follow-up",
  "Chronic Care AI Navigator for Africa",
  "Navigator intake",
  "Navigator output",
  "Africa-ready delivery",
  "text-first, low-bandwidth, simple language, community health worker support"
].forEach(copy => assert(app.includes(copy), `Navigator report metadata should include: ${copy}`));

[
  chronicSource,
  prepSource,
  guidanceSource,
  intentSource
].forEach((source, index) => {
  assert(!source.includes("localStorage"), `Navigator source ${index} must not persist health data to localStorage.`);
  assert(!source.includes("sessionStorage"), `Navigator source ${index} must not persist health data to sessionStorage.`);
  assert(!source.includes("navigator.geolocation"), `Navigator source ${index} must not request geolocation.`);
  assert(!source.includes("getCurrentPosition"), `Navigator source ${index} must not request current position.`);
  assert(!source.includes("watchPosition"), `Navigator source ${index} must not start tracking.`);
  assert(!source.includes("mediaDevices"), `Navigator source ${index} must not start camera or microphone.`);
  assert(!source.includes("requestPermission"), `Navigator source ${index} must not prompt browser permission.`);
  assert(!source.includes("fetch("), `Navigator source ${index} must not add backend or external calls.`);
  assert(!source.includes("window.open"), `Navigator source ${index} must not open external providers.`);
  assert(!source.includes("dispatchProviderWebhook"), `Navigator source ${index} must not dispatch providers.`);
});

assert.equal(pkg.scripts["qa:nexus-chronic-care-navigator-foundation"], "node scripts/nexus-chronic-care-navigator-foundation-qa.js", "Package script should expose navigator foundation QA.");
assert(qaSuite.includes("scripts/nexus-chronic-care-navigator-foundation-qa.js"), "Navigator foundation QA should be wired into qa-suite.");

console.log("[nexus-chronic-care-navigator-foundation-qa] passed");
