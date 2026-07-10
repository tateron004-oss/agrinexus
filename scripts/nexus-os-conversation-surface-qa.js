const fs = require("fs");
const assert = require("assert");

const app = fs.readFileSync("public/app.js", "utf8");
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const qaSuite = fs.readFileSync("scripts/qa-suite.js", "utf8");

function includes(source, needle, label) {
  assert(source.includes(needle), `${label} should include ${needle}`);
  console.log(`PASS ${label}`);
}

function sectionBetween(source, start, end) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `${start} exists`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `${end} follows ${start}`);
  return source.slice(startIndex, endIndex);
}

const runtimeBlock = sectionBetween(app, "function normalizeNexusOsConversationText", "function conversationMode2Status");
const heroBlock = sectionBetween(app, "function renderNexusCommandCenterHero", "function nexusActiveSidebarId");
const stylesBlock = sectionBetween(app, "function ensureNexusOsVisualBoundaryStyles", "function nexusOsShellState");

[
  "nexusOsUnifiedConversationTurns",
  "nexusOsConversationMuted",
  "recordNexusOsConversationTurn",
  "latestNexusOsUserConversationTurn",
  "renderNexusOsUnifiedConversationSurface",
  "updateNexusOsUnifiedConversationDom",
  "handleNexusOsUnifiedConversationAction"
].forEach(token => includes(app, token, `conversation runtime token ${token}`));

[
  "User messages",
  "Nexus messages",
  "Typed input",
  "Voice transcript"
].forEach((label, index) => {
  const needles = [
    'recordNexusOsConversationTurn("user"',
    'recordNexusOsConversationTurn("assistant"',
    "nexusCommandCenterInput",
    "data-nexus-os-voice-transcript"
  ];
  includes(app, needles[index], label);
});

[
  "stop-response",
  "retry",
  "repeat",
  "correct-transcript",
  "restore"
].forEach(action => includes(runtimeBlock + heroBlock, `data-nexus-os-conversation-action="${action}`, `conversation control ${action}`));
includes(runtimeBlock + heroBlock, 'nexusOsConversationMuted ? "unmute" : "mute"', "dynamic mute/unmute control");
includes(runtimeBlock, 'normalized === "mute" || normalized === "unmute"', "mute and unmute runtime branches");

includes(runtimeBlock, "localStorage.setItem(\"nexusOsUnifiedConversationTurns\"", "conversation persistence");
includes(runtimeBlock, "conversationMemoryForMode()", "conversation restore uses existing memory");
includes(runtimeBlock, "aria-live=\"polite\"", "accessible live-region contract");
includes(runtimeBlock, "scrollTop = log.scrollHeight", "scroll management");
includes(runtimeBlock, "input.focus?.({ preventScroll: true })", "focus management");
includes(runtimeBlock, "slice(-24)", "long conversation bounded persistence");
includes(heroBlock, "${renderNexusOsUnifiedConversationSurface()}", "canonical conversation surface renders in hero");

[
  "#userCaptionPanel",
  "#jarvisPanel",
  "#globalAssistantBar",
  ".conversation-panel",
  ".floating-assistant-card"
].forEach(selector => includes(stylesBlock, selector, `duplicate surface hidden ${selector}`));

includes(stylesBlock, ".nexus-os-conversation-log", "conversation log styling");
includes(stylesBlock, "max-height: min(42vh, 360px)", "long-response/mobile containment");
includes(stylesBlock, "@media (max-width: 720px)", "mobile behavior");

includes(app, "recordNexusOsConversationTurn(\"user\", command", "typed command records user turn");
includes(app, "recordNexusOsConversationTurn(\"assistant\", responseMessage", "Nexus response records assistant turn");
includes(app, "stopNexusSpeaking", "stop output uses existing runtime");
includes(app, "speakVoiceResponse(text)", "repeat response uses existing speech path");

assert(!/fake send|fake provider|fake live|silently execute/i.test(runtimeBlock), "conversation surface avoids fake execution language");
console.log("PASS no fake execution language");

assert(pkg.scripts["qa:nexus-os-conversation-surface"] === "node scripts/nexus-os-conversation-surface-qa.js", "package alias exists");
console.log("PASS package alias exists");
assert(qaSuite.includes("scripts/nexus-os-conversation-surface-qa.js"), "safe QA suite includes Rail 5 QA");
console.log("PASS safe QA suite includes Rail 5 QA");

console.log("Nexus OS conversation surface QA passed.");
