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
const intentSource = sourceBetween(app, "function a100SafeAutonomyIntent", "function openA100SafeAutonomyPreview");
const previewSource = sourceBetween(app, "function openA100SafeAutonomyPreview", "function openFullScaleUserMap");
const voiceCoreSource = sourceBetween(app, "async function handleVoiceCommandCore", "function bindStatic");

assert(stateSource.includes("let a100SafeFollowUpContext = null;"), "A100 follow-up context should be in-memory session state.");
assert(followUpSource.includes("rememberA100SafeFollowUpContext"), "Follow-up context writer should exist.");
assert(followUpSource.includes("a100SafeFollowUpIntent"), "Follow-up intent reader should exist.");
assert(intentSource.includes("const followUp = a100SafeFollowUpIntent(command);"), "A100 intent should check follow-up context first.");
assert(previewSource.includes("rememberA100SafeFollowUpContext(intent);"), "A100 preview should refresh session-only follow-up context.");

[
  "show me more",
  "open that",
  "explain it",
  "go back",
  "what should i do next"
].forEach(term => assert(followUpSource.includes(term), `Follow-up command should be supported: ${term}`));

[
  "will not call, send, pay, buy, request location, open camera, use microphone, or contact a provider",
  "No workflow was submitted and no provider handoff was started",
  "guidance only",
  "safe assistant capability menu",
  "will not execute high-risk actions"
].forEach(term => assert(followUpSource.includes(term), `Follow-up response should preserve safety phrase: ${term}`));

[
  followUpSource,
  previewSource
].forEach((source, index) => {
  assert(!source.includes("localStorage"), `A100 follow-up source ${index} must not persist to localStorage.`);
  assert(!source.includes("sessionStorage"), `A100 follow-up source ${index} must not persist to sessionStorage.`);
  assert(!source.includes("navigator.geolocation"), `A100 follow-up source ${index} must not request geolocation.`);
  assert(!source.includes("getCurrentPosition"), `A100 follow-up source ${index} must not request current position.`);
  assert(!source.includes("watchPosition"), `A100 follow-up source ${index} must not start tracking.`);
  assert(!source.includes("window.open"), `A100 follow-up source ${index} must not open external providers.`);
  assert(!source.includes("openWorkflowByVoice"), `A100 follow-up source ${index} must not execute workflows.`);
  assert(!source.includes("dispatchProviderWebhook"), `A100 follow-up source ${index} must not dispatch providers.`);
  assert(!source.includes("requestPermission"), `A100 follow-up source ${index} must not prompt browser permission.`);
  assert(!source.includes("mediaDevices"), `A100 follow-up source ${index} must not start camera or microphone.`);
});

assert(voiceCoreSource.includes("a100SafeAutonomyIntent"), "Voice/typed core should continue routing through A100 safe autonomy.");
assert(voiceCoreSource.indexOf("a100SafeAutonomyIntent") < voiceCoreSource.indexOf("runStandardUserAssistantRuntimePreview"), "A100 follow-ups should resolve before provider-backed runtime preview.");
assert(pkg.scripts["qa:nexus-a100-runtime-activation-1"], "Sprint 1 QA alias should remain.");
assert.equal(pkg.scripts["qa:nexus-a100-runtime-activation-2"], "node scripts/nexus-a100-runtime-activation-2-qa.js", "Sprint 2 QA alias should exist.");
assert(qaSuite.includes("scripts/nexus-a100-runtime-activation-2-qa.js"), "Sprint 2 QA should be wired into qa-suite.");

console.log("[nexus-a100-runtime-activation-2-qa] passed");
