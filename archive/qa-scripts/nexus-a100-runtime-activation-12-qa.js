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

const normalizeSource = sourceBetween(app, "function normalizeA100RuntimeCommand", "function rememberA100SafeFollowUpContext");
const followUpSource = sourceBetween(app, "function a100SafeFollowUpIntent", "function userVisualIconHtml");
const intentSource = sourceBetween(app, "function a100SafeAutonomyIntent", "function openA100SafeAutonomyPreview");

[
  "normalizeToolText(command)",
  "nexus",
  "hey",
  "can",
  "could",
  "would",
  "please",
  "show\\s+me"
].forEach(copy => assert(normalizeSource.includes(copy), `Normalizer should handle voice/typed phrase: ${copy}`));

assert(followUpSource.includes("normalizeA100RuntimeCommand(command)"), "Follow-ups should use A100 command normalization.");
assert(intentSource.includes("normalizeA100RuntimeCommand(command)"), "Primary A100 intent should use A100 command normalization.");
assert(intentSource.includes("a100HighRiskActionGates().find"), "High-risk voice-style commands should still be gated.");

[
  "Nexus, help me",
  "Hey Nexus",
  "Can you",
  "Show me",
  "Open",
  "Prepare"
].forEach(label => {
  const normalized = label.toLowerCase().replace(/[^a-z ]+/g, "").trim().split(/\s+/)[0];
  assert(normalizeSource.toLowerCase().includes(normalized) || intentSource.toLowerCase().includes(normalized), `Voice/typed command cue should be represented: ${label}`);
});

[
  normalizeSource,
  followUpSource,
  intentSource
].forEach((source, index) => {
  assert(!source.includes("localStorage"), `Sprint 12 source ${index} must not persist to localStorage.`);
  assert(!source.includes("sessionStorage"), `Sprint 12 source ${index} must not persist to sessionStorage.`);
  assert(!source.includes("navigator.geolocation"), `Sprint 12 source ${index} must not request geolocation.`);
  assert(!source.includes("getCurrentPosition"), `Sprint 12 source ${index} must not request current position.`);
  assert(!source.includes("watchPosition"), `Sprint 12 source ${index} must not start tracking.`);
  assert(!source.includes("window.open"), `Sprint 12 source ${index} must not open external providers.`);
  assert(!source.includes("openWorkflowByVoice"), `Sprint 12 source ${index} must not execute workflows.`);
  assert(!source.includes("dispatchProviderWebhook"), `Sprint 12 source ${index} must not dispatch providers.`);
  assert(!source.includes("requestPermission"), `Sprint 12 source ${index} must not prompt browser permission.`);
  assert(!source.includes("mediaDevices"), `Sprint 12 source ${index} must not start camera or microphone.`);
  assert(!source.includes("SpeechRecognition"), `Sprint 12 source ${index} must not activate microphone recognition.`);
  assert(!source.includes("fetch("), `Sprint 12 source ${index} must not add external/backend calls.`);
});

assert.equal(pkg.scripts["qa:nexus-a100-runtime-activation-12"], "node scripts/nexus-a100-runtime-activation-12-qa.js", "Sprint 12 QA alias should exist.");
assert(qaSuite.includes("scripts/nexus-a100-runtime-activation-12-qa.js"), "Sprint 12 QA should be wired into qa-suite.");

console.log("[nexus-a100-runtime-activation-12-qa] passed");
