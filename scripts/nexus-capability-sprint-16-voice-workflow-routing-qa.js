const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const index = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const sw = fs.readFileSync(path.join(root, "public", "sw.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}(`);
  assert(start >= 0, `${name} should exist`);
  const signatureEnd = source.indexOf(")", start);
  const bodyStart = source.indexOf("{", signatureEnd);
  let depth = 0;
  for (let index = bodyStart; index < source.length; index += 1) {
    const char = source[index];
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error(`${name} body should be extractable`);
}

const normalizerSource = extractFunction(app, "normalizeNexusVoiceWorkflowCommand");
const commandCoreSource = extractFunction(app, "handleVoiceCommandCore");
const wakeCleanerSource = extractFunction(app, "cleanWakeCommand");

[
  "normalizeNexusVoiceWorkflowCommand",
  "cleanWakeCommand(command)",
  "normalizeMultilingualBehaviorCommand",
  "normalizeImperfectSpeech"
].forEach(term => assert(normalizerSource.includes(term), `Sprint 16 normalizer should include ${term}`));

[
  "can\\s+you",
  "could\\s+you",
  "would\\s+you",
  "help\\s+me",
  "i\\s+need\\s+you\\s+to",
  "go\\s+ahead\\s+and"
].forEach(term => assert(normalizerSource.includes(term), `Sprint 16 normalizer should strip request prefix ${term}`));

[
  "nexus",
  "agrinexus",
  "agri\\s+nexus",
  "hey\\s+"
].forEach(term => assert(wakeCleanerSource.includes(term), `Sprint 16 wake cleaner should preserve assistant prefix support for ${term}`));

[
  "show",
  "open",
  "prepare",
  "call",
  "send",
  "plan",
  "summarize"
].forEach(term => {
  assert(!normalizerSource.includes(`${term} `) || normalizerSource.includes("normalizeImperfectSpeech"), `Sprint 16 should route ${term} through existing workflow interpretation.`);
});

assert(
  commandCoreSource.includes("normalizeNexusVoiceWorkflowCommand(command || localizedCommand)"),
  "handleVoiceCommandCore should normalize voice-style workflow prefixes before routing."
);
assert(
  commandCoreSource.indexOf("normalizeNexusVoiceWorkflowCommand(command || localizedCommand)") <
    commandCoreSource.indexOf("a100SafeAutonomyIntent"),
  "Sprint 16 normalization should run before safe autonomy intent routing."
);

[
  "getUserMedia",
  "navigator.mediaDevices",
  "navigator.geolocation",
  "requestPermission",
  "window.open",
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "localStorage",
  "sessionStorage",
  "sendBeacon",
  "writeDb("
].forEach(term => assert(!normalizerSource.includes(term), `Sprint 16 normalizer must not introduce ${term}`));

[
  "call",
  "send"
].forEach(term => assert(normalizerSource.includes("normalizeImperfectSpeech") && app.includes(term), `Sprint 16 should preserve high-risk ${term} terms for existing gates.`));

[
  "nexus-behavior-323",
  "agrinexus-pwa-v302"
].forEach(version => {
  assert(app.includes(version) || index.includes(version) || sw.includes(version) || server.includes(version), `Sprint 16 should bump ${version}`);
});

assert.equal(
  pkg.scripts["qa:nexus-capability-sprint-16-voice-workflow-routing"],
  "node scripts/nexus-capability-sprint-16-voice-workflow-routing-qa.js",
  "package alias should expose Sprint 16 QA."
);

assert(
  qaSuite.includes("scripts/nexus-capability-sprint-16-voice-workflow-routing-qa.js"),
  "qa-suite should include Sprint 16 QA."
);

console.log("[nexus-capability-sprint-16-voice-workflow-routing-qa] passed");
