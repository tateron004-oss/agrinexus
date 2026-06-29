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
const docs = read("docs", "a100-standard-user-runtime-validation.md");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

const surfaceSource = sourceBetween(app, "function a100CapabilitySurfaceHtml", "function a100SafeTaskControlsHtml");
const cardSource = sourceBetween(app, "function a100SafeAutonomyCardHtml", "function renderA100SafeAutonomyCard");
const intentSource = sourceBetween(app, "function a100SafeAutonomyIntent", "function openA100SafeAutonomyPreview");
const gateSource = sourceBetween(app, "function a100HighRiskActionGates", "function normalizeA100RuntimeCommand");

assert(surfaceSource.includes("Nexus can help with..."), "Visible capability surface should remain.");
assert(cardSource.includes("Review-only"), "Runtime cards should remain review-only.");
assert(cardSource.includes("a100SafeTaskControlsHtml(section)"), "Safe controls should remain present.");

[
  "a100AgricultureHelpCard",
  "a100TrainingLearningCard",
  "a100WorkforceJobsCard",
  "a100MarketplaceBrowsingCard",
  "a100RoutePlanningPreview",
  "a100ProviderReadinessCards"
].forEach(helper => assert(app.includes(helper), `Standard User runtime helper should remain wired: ${helper}`));

[
  "help me with agriculture",
  "find agriculture training",
  "show me farm jobs",
  "browse AgriTrade",
  "help me plan a route",
  "what providers are connected"
].forEach(prompt => assert(intentSource.includes(prompt), `Low-risk prompt should remain wired: ${prompt}`));

[
  "Call readiness",
  "Message preparation",
  "Payment and purchase boundary",
  "Location permission boundary",
  "Camera and microphone boundary",
  "Emergency boundary",
  "External navigation boundary",
  "Provider handoff boundary"
].forEach(label => assert(gateSource.includes(label), `High-risk gate should remain wired: ${label}`));

[
  "browser permission prompts",
  "provider handoff",
  "calls",
  "messages",
  "payments",
  "purchases",
  "live tracking",
  "navigation",
  "media capture",
  "external mutation",
  "Standard User testing, bug fixes, QA fixes, browser validation fixes, and small usability fixes only"
].forEach(copy => assert(docs.includes(copy), `Validation doc should include: ${copy}`));

[
  cardSource,
  intentSource,
  gateSource
].forEach((source, index) => {
  assert(!source.includes("localStorage"), `Sprint 14 source ${index} must not persist to localStorage.`);
  assert(!source.includes("sessionStorage"), `Sprint 14 source ${index} must not persist to sessionStorage.`);
  assert(!source.includes("navigator.geolocation"), `Sprint 14 source ${index} must not request geolocation.`);
  assert(!source.includes("getCurrentPosition"), `Sprint 14 source ${index} must not request current position.`);
  assert(!source.includes("watchPosition"), `Sprint 14 source ${index} must not start tracking.`);
  assert(!source.includes("window.open"), `Sprint 14 source ${index} must not open external providers.`);
  assert(!source.includes("openWorkflowByVoice"), `Sprint 14 source ${index} must not execute workflows.`);
  assert(!source.includes("dispatchProviderWebhook"), `Sprint 14 source ${index} must not dispatch providers.`);
  assert(!source.includes("requestPermission"), `Sprint 14 source ${index} must not prompt browser permission.`);
  assert(!source.includes("mediaDevices"), `Sprint 14 source ${index} must not start camera or microphone.`);
});

for (let sprint = 1; sprint <= 14; sprint += 1) {
  assert(pkg.scripts[`qa:nexus-a100-runtime-activation-${sprint}`], `Activation QA alias ${sprint} should be present.`);
  assert(qaSuite.includes(`scripts/nexus-a100-runtime-activation-${sprint}-qa.js`), `Activation QA ${sprint} should be wired into qa-suite.`);
}

console.log("[nexus-a100-runtime-activation-14-qa] passed");
