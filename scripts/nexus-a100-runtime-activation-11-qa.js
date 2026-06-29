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

const gateSource = sourceBetween(app, "function a100HighRiskActionGates", "function rememberA100SafeFollowUpContext");
const intentSource = sourceBetween(app, "function a100SafeAutonomyIntent", "function openA100SafeAutonomyPreview");

assert(intentSource.includes("a100HighRiskActionGates().find"), "A100 intent should use the centralized high-risk gate matrix.");
assert(intentSource.indexOf("a100HighRiskActionGates().find") < intentSource.indexOf("const matched = ["), "High-risk gates should run before low-risk matching.");

[
  "Call readiness",
  "Message preparation",
  "Payment and purchase boundary",
  "Location permission boundary",
  "Camera and microphone boundary",
  "Emergency boundary",
  "External navigation boundary",
  "Provider handoff boundary"
].forEach(label => assert(gateSource.includes(label), `High-risk gate should include ${label}.`));

[
  "call",
  "message",
  "whatsapp",
  "buy",
  "pay",
  "create order",
  "update inventory",
  "track my location",
  "start tracking",
  "camera",
  "microphone",
  "emergency",
  "dispatch",
  "google maps",
  "start navigation",
  "hand off",
  "provider webhook"
].forEach(term => assert(gateSource.includes(term), `High-risk matrix should recognize ${term}.`));

[
  "will not place a call",
  "will not send it",
  "buying, paying, ordering",
  "will not request geolocation",
  "will not start media capture",
  "cannot dispatch emergency services",
  "will not open another navigation app",
  "review is required before any provider handoff"
].forEach(copy => assert(gateSource.includes(copy), `High-risk gate should preserve safe copy: ${copy}`));

[
  "help me with agriculture",
  "find agriculture training",
  "show me farm jobs",
  "browse AgriTrade",
  "help me plan a route"
].forEach(copy => assert(intentSource.includes(copy), `Low-risk suggestion should remain available: ${copy}`));

[
  gateSource,
  intentSource
].forEach((source, index) => {
  assert(!source.includes("localStorage"), `Sprint 11 source ${index} must not persist to localStorage.`);
  assert(!source.includes("sessionStorage"), `Sprint 11 source ${index} must not persist to sessionStorage.`);
  assert(!source.includes("navigator.geolocation"), `Sprint 11 source ${index} must not request geolocation.`);
  assert(!source.includes("getCurrentPosition"), `Sprint 11 source ${index} must not request current position.`);
  assert(!source.includes("watchPosition"), `Sprint 11 source ${index} must not start tracking.`);
  assert(!source.includes("window.open"), `Sprint 11 source ${index} must not open external providers.`);
  assert(!source.includes("openWorkflowByVoice"), `Sprint 11 source ${index} must not execute workflows.`);
  assert(!source.includes("dispatchProviderWebhook"), `Sprint 11 source ${index} must not dispatch providers.`);
  assert(!source.includes("requestPermission"), `Sprint 11 source ${index} must not prompt browser permission.`);
  assert(!source.includes("mediaDevices"), `Sprint 11 source ${index} must not start camera or microphone.`);
  assert(!source.includes("fetch("), `Sprint 11 source ${index} must not add external/backend calls.`);
});

assert.equal(pkg.scripts["qa:nexus-a100-runtime-activation-11"], "node scripts/nexus-a100-runtime-activation-11-qa.js", "Sprint 11 QA alias should exist.");
assert(qaSuite.includes("scripts/nexus-a100-runtime-activation-11-qa.js"), "Sprint 11 QA should be wired into qa-suite.");

console.log("[nexus-a100-runtime-activation-11-qa] passed");
