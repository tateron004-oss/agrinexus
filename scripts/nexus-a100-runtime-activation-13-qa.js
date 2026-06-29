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

const stateSource = sourceBetween(app, "let liveVoiceSuggestions", "let assistantRuntimePreviewCard");
const followUpSource = sourceBetween(app, "function rememberA100SafeFollowUpContext", "function userVisualIconHtml");

assert(stateSource.includes("let a100SafeFollowUpContext = null;"), "A100 context should remain in-memory.");
assert(stateSource.includes("let a100SafeFollowUpBackStack = [];"), "A100 back stack should be in-memory.");

[
  "category",
  "lastSafeAction",
  "lastRenderedCard",
  "nextSteps",
  "currentPreparation",
  "a100SafeFollowUpBackStack"
].forEach(key => assert(followUpSource.includes(key), `Expanded session context should include ${key}.`));

[
  "show me another option",
  "explain the last one",
  "prepare that",
  "open the related section",
  "go back",
  "what is next"
].forEach(term => assert(followUpSource.includes(term), `Expanded follow-up should support: ${term}`));

assert(followUpSource.includes("a100ReviewOnlyPreparation"), "Prepare-that follow-up should create review-only preparation.");
assert(followUpSource.includes("a100SafeFollowUpBackStack.shift()"), "Go-back follow-up should use the session back stack.");
assert(followUpSource.includes("No real-world action was executed"), "Back-stack response should preserve no-execution boundary.");
assert(followUpSource.includes("Nothing was sent, submitted, purchased, paid, tracked, or handed off"), "Prepare-that response should preserve no-execution boundary.");

[
  followUpSource
].forEach((source, index) => {
  assert(!source.includes("localStorage"), `Sprint 13 source ${index} must not persist to localStorage.`);
  assert(!source.includes("sessionStorage"), `Sprint 13 source ${index} must not persist to sessionStorage.`);
  assert(!source.includes("navigator.geolocation"), `Sprint 13 source ${index} must not request geolocation.`);
  assert(!source.includes("getCurrentPosition"), `Sprint 13 source ${index} must not request current position.`);
  assert(!source.includes("watchPosition"), `Sprint 13 source ${index} must not start tracking.`);
  assert(!source.includes("window.open"), `Sprint 13 source ${index} must not open external providers.`);
  assert(!source.includes("openWorkflowByVoice"), `Sprint 13 source ${index} must not execute workflows.`);
  assert(!source.includes("dispatchProviderWebhook"), `Sprint 13 source ${index} must not dispatch providers.`);
  assert(!source.includes("requestPermission"), `Sprint 13 source ${index} must not prompt browser permission.`);
  assert(!source.includes("mediaDevices"), `Sprint 13 source ${index} must not start camera or microphone.`);
  assert(!source.includes("fetch("), `Sprint 13 source ${index} must not add external/backend calls.`);
});

assert.equal(pkg.scripts["qa:nexus-a100-runtime-activation-13"], "node scripts/nexus-a100-runtime-activation-13-qa.js", "Sprint 13 QA alias should exist.");
assert(qaSuite.includes("scripts/nexus-a100-runtime-activation-13-qa.js"), "Sprint 13 QA should be wired into qa-suite.");

console.log("[nexus-a100-runtime-activation-13-qa] passed");
