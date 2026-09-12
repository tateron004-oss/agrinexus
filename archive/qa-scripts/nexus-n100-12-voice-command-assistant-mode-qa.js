const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const voice = require("../server/nexus-n100-voice-command-assistant-mode.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-n100-voice-command-assistant-mode.js");
  const doc = read("docs", "NEXUS_N100_12_VOICE_COMMAND_ASSISTANT_MODE.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(exists("server", "nexus-n100-voice-command-assistant-mode.js"), "N100-12 voice command module must exist.");
  assert(exists("docs", "NEXUS_N100_12_VOICE_COMMAND_ASSISTANT_MODE.md"), "N100-12 documentation must exist.");
  assert(exists("scripts", "nexus-n100-12-voice-command-assistant-mode-qa.js"), "N100-12 QA must exist.");

  [
    "SUPPORTED_COMMAND_INTENTS",
    "BLOCKED_VOICE_COMMAND_ACTIONS",
    "normalizeCommand",
    "createN100VoiceCommandDecision",
    "alwaysOnListening: false",
    "microphonePermissionRequested: false",
    "noSpeechSynthesisStarted: true"
  ].forEach(term => assert(source.includes(term), `N100-12 source must include ${term}.`));

  [
    "typed and user-initiated voice-style command interpretation",
    "does not request microphone permission",
    "does not start speech synthesis",
    "not loaded into `public/app.js`, `public/index.html`, or `server.js`"
  ].forEach(term => assert(doc.includes(term), `N100-12 documentation must include ${term}.`));

  [
    "nexus-n100-voice-command-assistant-mode",
    "createN100VoiceCommandDecision",
    "SUPPORTED_COMMAND_INTENTS"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load N100-12 runtime term: ${term}.`);
    assert(!index.includes(term), `public/index.html must not load N100-12 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load N100-12 runtime term: ${term}.`);
  });

  [
    "getUserMedia(",
    "SpeechRecognition.start",
    "speechSynthesis.speak",
    "window.open",
    "location.href",
    "fetch(",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "writeFileSync",
    "providerHandoffAllowed: true",
    "executionAuthority: \"provider\""
  ].forEach(term => assert(!source.includes(term), `N100-12 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-n100-12-voice-command-assistant-mode"],
    "node scripts/nexus-n100-12-voice-command-assistant-mode-qa.js",
    "N100-12 package QA alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-n100-12-voice-command-assistant-mode-qa.js"), "N100-12 QA must be wired into local-safe suites.");
}

function assertDecision(command, expectedIntent) {
  const decision = voice.createN100VoiceCommandDecision({
    command,
    nowIso: "2026-06-28T18:00:00.000Z"
  });
  assert.equal(voice.isSafeN100VoiceCommandDecision(decision), true, `${command} must produce a safe decision.`);
  assert.equal(decision.intent, expectedIntent, `${command} intent mismatch.`);
  assert.equal(decision.canExecute, false, `${command} must not execute.`);
  assert.equal(decision.executionAuthority, "none", `${command} must have no execution authority.`);
  assert.equal(decision.safetyPosture.alwaysOnListening, false, `${command} must not enable always-on listening.`);
  assert.equal(decision.safetyPosture.microphonePermissionRequested, false, `${command} must not request microphone permission.`);
  assert.equal(decision.safetyPosture.noSpeechSynthesisStarted, true, `${command} must not start speech synthesis.`);
  voice.BLOCKED_VOICE_COMMAND_ACTIONS.forEach(action => {
    assert(decision.blockedActions.includes(action), `${command} must block ${action}.`);
  });
  return decision;
}

function assertSupportedCommands() {
  assert.equal(voice.normalizeCommand("Nexus, find farm jobs near Stockton."), "find farm jobs near Stockton.", "Wake phrase should be stripped.");
  assertDecision("Nexus, find farm jobs near Stockton.", "source_lookup_preview");
  assertDecision("Nexus, compare the top two.", "compare_current_results");
  assertDecision("Nexus, make me a checklist.", "checklist_preparation");
  assertDecision("Nexus, cancel that.", "cancel_current_plan");
  assertDecision("Nexus, what should I do next?", "proactive_next_step");
}

function assertBlockedCommands() {
  [
    "Nexus, call the provider.",
    "Nexus, buy fertilizer.",
    "Nexus, dispatch help.",
    "Nexus, send WhatsApp to the seller.",
    "Nexus, open the camera.",
    "Nexus, share my location.",
    "Nexus, book an appointment."
  ].forEach(command => {
    const decision = assertDecision(command, "blocked_high_risk_voice_command");
    assert.equal(decision.status, "blocked_no_voice_execution", `${command} must be blocked.`);
    assert(/cannot call, message, buy, dispatch, share location, use the camera, book, or submit/.test(decision.speakableSummary), `${command} must include safe block copy.`);
  });
}

function runN100VoiceCommandAssistantModeQa() {
  assertStaticSafety();
  assertSupportedCommands();
  assertBlockedCommands();

  console.log(JSON.stringify({
    phase: "N100-12",
    supportedCommandIntents: voice.SUPPORTED_COMMAND_INTENTS,
    blockedVoiceCommandActions: voice.BLOCKED_VOICE_COMMAND_ACTIONS,
    standardUserRuntimeActivated: false,
    microphonePermissionRequested: false,
    alwaysOnListening: false,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-n100-12-voice-command-assistant-mode-qa] passed");
}

if (require.main === module) {
  try {
    runN100VoiceCommandAssistantModeQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runN100VoiceCommandAssistantModeQa
});
