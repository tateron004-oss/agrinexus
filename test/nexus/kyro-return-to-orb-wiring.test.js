"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const KyroDismissCommands = require("../../public/kyro-dismiss-commands.js");

// Found by using the product: "close the weather card" opened a Live Knowledge Research window (any sentence that mentions the weather did), "close it" / "go back to the orb" were
// understood by nothing, and a finished answer stayed on the screen under the orb. These tests pin how the page reaches the "back to the orb" routine from every door.
const root = path.join(__dirname, "..", "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const sw = fs.readFileSync(path.join(root, "public", "sw.js"), "utf8");

function bodyOf(signature) {
  const start = app.indexOf(signature);
  assert.ok(start >= 0, `could not find ${signature} in app.js`);
  const next = [...app.slice(start + signature.length).matchAll(/\n(?:async )?function [A-Za-z0-9_]+\(/g)][0];
  return app.slice(start, next ? start + signature.length + next.index : undefined);
}

test("a sentence that closes something never opens a workspace, even when it mentions the weather", () => {
  const start = app.indexOf("function genesisWorkspaceActionFromFinalTranscript(");
  const end = app.indexOf("\nasync function executeGenesisWorkspaceFromFinalTranscript(", start);
  assert.ok(start > 0 && end > start);
  const sandbox = { window: { KyroDismissCommands, KyroIntakeForms: undefined }, nexusReminderCalendarParseSchedule: () => ({ scheduleText: "" }) };
  vm.createContext(sandbox);
  vm.runInContext(app.slice(start, end) + "\nthis.run = genesisWorkspaceActionFromFinalTranscript;", sandbox);
  for (const text of ["Close out the weather information.", "close the weather card", "dismiss the weather", "hide the weather card", "close the map", "go back to the orb", "I'm done", "that's all"]) {
    assert.equal(sandbox.run(text), null, `"${text}" must not open a workspace`);
  }
  assert.equal(sandbox.run("what is the weather in Kisumu")?.workspace, "live-knowledge", "a real weather question still opens its workspace");
  assert.equal(sandbox.run("show a route from Nairobi to Nakuru")?.workspace, "map", "a real route request still opens the map");
});

test("every typed and spoken door checks for a dismissal right after the safety check and before anything else reads the sentence", () => {
  const doors = [
    ["function handleNexusStandardUserSafeTypedCommand(", "standard-user-safe-typed-command"],
    ["function routeNexusCommandCenterCommunicationSubmit(", "source"],
    ["async function handleNexusPresenceCommandSendSubmit(", "source"],
    ["async function handleNexusUnifiedBrainRuntimeCommand(", "unified-brain-dismiss"],
    ["async function executeGenesisWorkspaceFromFinalTranscript(", "openai-realtime-final-transcript"]
  ];
  for (const [signature] of doors) {
    const body = bodyOf(signature);
    const safety = body.indexOf("handleNexusMentalHealthBehavioralWellnessCommand(");
    const dismiss = body.indexOf("handleKyroDismissCommand(");
    assert.ok(safety >= 0 && dismiss > safety, `${signature}: the dismissal check must come after the safety check`);
    // nothing that could open or answer runs in between: the next check after the safety check is the dismissal (voice-troubleshooting and the like come later)
    const between = body.slice(safety, dismiss);
    assert.ok(!/handleNexus(?:AgenticBrain|ProductionRuntime|OpenDialogue|VoiceTroubleshooting)\w*\(|runAuthoritativeGenesisWorkspaceBridge\(|openAskNexus\(/.test(between), `${signature}: something runs before the dismissal check`);
  }
});

test("when the voice model calls a tool with a close sentence, the page goes back to the orb and answers Okay without opening anything", () => {
  const body = bodyOf("async function callNexusOpenAiRealtimeTool(");
  const dismiss = body.indexOf("KyroDismissCommands?.parse?.(command)");
  assert.ok(dismiss > 0 && dismiss < body.indexOf("kyroFetchWithTimeout("), "the dismissal is answered before any request is sent");
  assert.ok(dismiss < body.indexOf("genesisWorkspaceActionFromFinalTranscript(command)"));
  assert.match(body, /await kyroReturnToOrb\(/);
  assert.match(body, /response: "Okay\."/);
  assert.match(body, /clientAction: \{ type: "return-to-orb" \}/);
});

test("going back to the orb takes down the window, the conversation workflow and the last answer, then uses the same return-home the Return home button uses", () => {
  const body = bodyOf("async function kyroReturnToOrb(");
  assert.match(body, /closeNexusFunctionWindow\(/);
  assert.match(body, /lastUserInput: ""/);
  assert.match(body, /lastResponse: ""/);
  assert.match(body, /activeWorkflow = null/);
  assert.match(body, /handleNexusOsMissionLifecycleAction\("return-home"\)/);
});

test("it also goes back by itself after a quiet spell, but never while someone is speaking, typing or answering a question, and only in User mode", () => {
  const body = bodyOf("function kyroAutoReturnSnapshot(");
  for (const field of ["assistantSpeaking", "userSpeaking", "focusInField", "pendingConfirmation", "intakeActive", "onOrb", "userMode"]) assert.ok(body.includes(field), `the snapshot must report ${field}`);
  assert.match(body, /data-nexus-genesis-orb-only-home/);
  assert.match(app, /setInterval\(kyroAutoReturnTick, 3000\)/);
  assert.match(bodyOf("function setVoiceResponse("), /kyroNoteActivity\(\)/, "an answer arriving counts as activity");
  for (const event of ["pointerdown", "keydown", "touchstart", "input", "wheel"]) assert.ok(app.includes(`"${event}"`) && /for \(const name of \["pointerdown"/.test(app));
});

test("the recogniser is loaded before app.js and is in the offline shell", () => {
  const tag = html.indexOf("/kyro-dismiss-commands.js");
  assert.ok(tag > 0 && tag < html.indexOf("/app.js"), "kyro-dismiss-commands.js must load before app.js");
  assert.ok(sw.includes("/kyro-dismiss-commands.js"), "and be in the service worker's shell list");
});
