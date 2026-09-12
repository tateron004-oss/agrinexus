const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const styles = read("public/styles.css");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.includes(token), `${label} must not include ${token}`);
}

[
  "function openNexusFunctionWindow(functionId, options = {})",
  "function closeNexusFunctionWindow(options = {})",
  "function minimizeNexusFunctionWindow()",
  "function renderNexusFunctionWindow(state = nexusActiveWorkflowState)",
  "function resolveNexusFunctionIntent(input, options = {})",
  "function normalizeNexusFunctionId(functionId = \"\", command = \"\")",
  "window[\"openNexusFunctionWindow\"] = openNexusFunctionWindow",
  "window[\"restoreNexusFunctionWindow\"] = restoreNexusFunctionWindow",
  "data-nexus-function-window-restore",
  "data-nexus-function-window=\"true\"",
  "data-nexus-function-window-id",
  "Focused Nexus function window",
  "data-nexus-workflow-minimize",
  "Restore function window",
  "data-nexus-workflow-back",
  "nexus-function-window-summary",
  "nexus-function-window-preview"
].forEach(token => includes(app, token, `function window system ${token}`));

[
  "virtual-care", "telehealth", "video-visit", "chronic-disease", "diabetes", "hypertension", "obesity", "rpm", "rtm", "physician-review", "follow-up", "emergency-guidance",
  "pharmacy", "pharmacy-referral", "medication-review", "refill-coordination", "medication-adherence", "diabetes-supplies",
  "mobile-clinic", "vitals-check", "diabetes-follow-up", "hypertension-follow-up", "obesity-support", "rural-clinic", "community-outreach",
  "agriculture", "agronomy", "crop-issue", "pest-disease", "soil-fertilizer", "irrigation", "climate-smart-agriculture", "farmer-training", "drone-mission", "farm-visit",
  "agritrade", "marketplace", "vendor-inquiry", "buyer-seller", "produce-listing", "input-sourcing", "quote-request",
  "logistics", "route-support", "pickup-request", "delivery-request", "cold-chain", "storage", "dispatch-gate",
  "workforce", "training", "digital-literacy", "ai-training", "job-readiness", "youth-workforce", "employer-referral", "certification", "lms-handoff",
  "live-knowledge", "internet", "research", "source-backed-answer",
  "maps", "field-visit", "route-planning", "location-sharing",
  "email", "sms", "whatsapp", "phone-handoff", "telegram", "communications-status",
  "music", "media", "youtube", "media-handoff",
  "offline", "low-bandwidth", "offline-queue", "sync-status", "local-fallback",
  "admin-review", "provider-queue", "vendor-queue", "care-team-queue", "pharmacy-queue", "mobile-clinic-queue", "agronomy-queue", "marketplace-queue", "logistics-queue", "workforce-queue", "case-timeline", "provider-response-inbox",
  "payment", "payment-gate", "booking", "booking-gate", "dispatch", "admin-approval"
].forEach(id => includes(app, `"${id}"`, `major function window id ${id}`));

[
  "healthcare",
  "pharmacy",
  "mobile-clinic",
  "agriculture",
  "marketplace",
  "logistics",
  "workforce",
  "research",
  "maps",
  "communications",
  "media",
  "offline",
  "admin",
  "gate"
].forEach(category => {
  assert(app.includes(`${category}: [`) || app.includes(`"${category}": [`), `condensed category fields ${category} should exist`);
});

[
  "launchCapabilityFromAskNexus(input = \"\")",
  "openNexusFunctionWindow(functionIntent.functionId",
  "launchCapabilityFromVoice(transcript = \"\")",
  "sourceSurface: \"voice_audio\"",
  "launchCapabilityFromClick(eventOrElement)",
  "openNexusFunctionWindow(options.functionId || workflowId"
].forEach(token => includes(app, token, `shared launcher wiring ${token}`));

[
  "runNexusKnowledgeQuery(input, { source: \"typed-command\", functionId: \"live-knowledge\"",
  "renderNexusKnowledgeAnswerCard(functionId === \"live-knowledge\"",
  "No full packet has been prepared yet.",
  "Missing Live Knowledge config",
  "No agriculture citations are shown unless Live Knowledge returns citable sources."
].forEach(token => includes(app, token, `live knowledge window support ${token}`));

[
  "position: fixed",
  "body.user-mode .nexus-workflow-modal-backdrop",
  "body.user-mode .nexus-function-window-dock",
  "max-height: calc(100vh",
  "overflow-y: auto",
  "overscroll-behavior: contain"
].forEach(token => includes(styles, token, `function window CSS ${token}`));

[
  "provider contacted successfully",
  "payment processed successfully",
  "appointment booked successfully",
  "dispatch started successfully",
  "prescription sent successfully"
].forEach(token => excludes(app.toLowerCase(), token.toLowerCase(), `unsafe claim ${token}`));

[
  "secret values are never",
  "Missing credentials",
  "No full packet has been prepared yet."
].forEach(token => includes(app, token, `no-secret/blocking guarantee ${token}`));

assert.strictEqual(
  packageJson.scripts["qa:nexus-function-window-system"],
  "node scripts/nexus-function-window-system-qa.js",
  "package alias should run function window QA"
);
includes(qaSuite, "scripts/nexus-function-window-system-qa.js", "qa-suite should include function window QA");

console.log("Nexus function window system QA passed.");
