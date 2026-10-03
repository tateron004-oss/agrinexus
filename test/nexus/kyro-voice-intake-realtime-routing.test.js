"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appSource = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const KyroVoiceIntake = require("../../public/kyro-voice-intake.js");
const KyroIntakeForms = require("../../public/kyro-intake-forms.js");

// Slices the whole Kyro-voice-intake glue block out of app.js (sendKyroRealtimeEvent through
// startKyroResumeIntake) and runs it in a vm sandbox with the real engine/forms modules plus
// fakes for everything else (Realtime session, DOM, the legacy handlers it must bypass). This is
// the same technique already used by test/nexus/realtime-transcript-crisis-interception.test.js.
function loadGlue(overrides = {}) {
  const start = appSource.indexOf("function sendKyroRealtimeEvent(event) {");
  const end = appSource.indexOf("\nfunction genesisWorkspaceActionFromFinalTranscript(");
  assert.ok(start > 0 && end > start, "could not locate the Kyro voice intake glue block in app.js");

  const events = [];
  const calls = { legacyController: 0, genesisWorkspace: 0, crisis: [], debug: [], interrupts: 0 };
  const fakeElement = () => ({
    style: {}, dataset: {}, classList: { add() {}, remove() {} },
    setAttribute() {}, addEventListener() {}, appendChild() {}, remove() {},
    querySelector() { return null; },
    set innerHTML(_v) {}, set id(_v) {}, set className(_v) {}, set textContent(_v) {}
  });
  const fakeDocument = {
    body: { appendChild() {} },
    head: { appendChild() {} },
    getElementById(id) { calls.getElementById = calls.getElementById || []; calls.getElementById.push(id); return null; },
    querySelector() { return null; },
    createElement() { return fakeElement(); },
    addEventListener() {}
  };

  const sandbox = {
    KyroVoiceIntake, window: { KyroIntakeForms },
    document: fakeDocument,
    escapeHtml: value => String(value ?? ""),
    kyroActiveVoiceIntake: null,
    kyroRealtimeBaseTurnDetection: { type: "server_vad", create_response: true, threshold: 0.5 },
    realtimeVoiceSession: {
      sdkController: { interrupt: () => { calls.interrupts += 1; } },
      sdkSession: { transport: { sendEvent: event => { events.push(event); } } }
    },
    realtimeVoiceActive: () => true,
    languageCode: () => "en",
    setVoiceResponse: () => {},
    nexusGenesisVoiceDebugLog: (stage, details) => { calls.debug.push({ stage, details }); },
    handleNexusMentalHealthBehavioralWellnessCommand: (command, options) => {
      calls.crisis.push({ command, options });
      return overrides.crisisHandled === true;
    },
    window_NexusBrowserActionController_placeholder: null,
    ...overrides.sandboxExtra
  };
  vm.createContext(sandbox);
  vm.runInContext(appSource.slice(start, end) + `
    this.routeKyroVoiceIntakeTranscript = routeKyroVoiceIntakeTranscript;
    this.startKyroVoiceIntake = startKyroVoiceIntake;
    this.kyroVoiceIntakeOwnsTurn = kyroVoiceIntakeOwnsTurn;
    this.getActiveIntake = () => kyroActiveVoiceIntake;
  `, sandbox);
  return { sandbox, events, calls };
}

test("kyro-voice-intake.js and kyro-intake-forms.js are registered for offline caching and load before app.js", () => {
  const html = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  assert.match(html, /<script src="\/kyro-voice-intake\.js\?v=kyro-voice-intake-1"><\/script>/);
  assert.match(html, /<script src="\/kyro-intake-forms\.js\?v=kyro-intake-forms-1"><\/script>/);
  assert.ok(html.indexOf("kyro-voice-intake.js") < html.indexOf('src="/app.js'), "must load before app.js");
  assert.ok(html.indexOf("kyro-intake-forms.js") < html.indexOf('src="/app.js'), "must load before app.js");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  assert.match(sw, /kyro-voice-intake\.js/);
  assert.match(sw, /kyro-intake-forms\.js/);
});

test("an ordinary transcript with no active intake and no resume-build phrasing passes through untouched", () => {
  const { sandbox } = loadGlue();
  const consumed = sandbox.routeKyroVoiceIntakeTranscript({ transcript: "Show a route from Nairobi to Nakuru.", utteranceId: "u1", source: "realtime-transport" });
  assert.equal(consumed, false);
  assert.equal(sandbox.getActiveIntake(), null);
});

test("a résumé-build phrase with no active intake starts one and consumes the transcript", () => {
  const { sandbox, events } = loadGlue();
  const consumed = sandbox.routeKyroVoiceIntakeTranscript({ transcript: "Can you make a resume for me?", utteranceId: "u1", source: "realtime-transport" });
  assert.equal(consumed, true);
  assert.ok(sandbox.getActiveIntake(), "an intake should now be active");
  assert.equal(sandbox.getActiveIntake().definition.id, "resume");
});

test("starting an intake interrupts, then disables auto-response, then speaks the first question -- in that order", () => {
  const { sandbox, events } = loadGlue();
  sandbox.routeKyroVoiceIntakeTranscript({ transcript: "I need a CV", utteranceId: "u1", source: "realtime-transport" });
  const sessionUpdateIndex = events.findIndex(event => event.type === "session.update");
  const responseCreateIndex = events.findIndex(event => event.type === "response.create");
  assert.ok(sessionUpdateIndex >= 0, "must disable auto-response via session.update");
  assert.equal(events[sessionUpdateIndex].session.audio.input.turn_detection.create_response, false);
  assert.ok(responseCreateIndex > sessionUpdateIndex, "the first question must be spoken after auto-response is disabled");
  assert.match(events[responseCreateIndex].response.instructions, /What is your full name/);
});

test("once an intake is active, a subsequent transcript is consumed by the engine, never reaching legacy routing", () => {
  const { sandbox } = loadGlue();
  sandbox.routeKyroVoiceIntakeTranscript({ transcript: "Can you make a resume for me?", utteranceId: "u1", source: "realtime-transport" });
  const consumed = sandbox.routeKyroVoiceIntakeTranscript({ transcript: "Amina Wanjiru", utteranceId: "u2", source: "realtime-transport" });
  assert.equal(consumed, true);
  assert.equal(sandbox.getActiveIntake().engine.snapshot().values.name, "Amina Wanjiru");
});

test("a crisis transcript during an active intake pauses it and restores auto-response, instead of recording it as an answer", () => {
  const { sandbox, events } = loadGlue({ crisisHandled: true });
  sandbox.routeKyroVoiceIntakeTranscript({ transcript: "Can you make a resume for me?", utteranceId: "u1", source: "realtime-transport" });
  events.length = 0;
  const consumed = sandbox.routeKyroVoiceIntakeTranscript({ transcript: "I want to end my life", utteranceId: "u2", source: "realtime-transport" });
  assert.equal(consumed, true);
  assert.equal(sandbox.getActiveIntake().engine.phase, "paused");
  const restoreEvent = events.find(event => event.type === "session.update");
  assert.ok(restoreEvent, "auto-response must be restored so the model can respond normally to the crisis");
  assert.equal(restoreEvent.session.audio.input.turn_detection.create_response, true);
  assert.equal(sandbox.getActiveIntake().engine.snapshot().values.name, undefined, "the crisis statement must never be recorded as the name answer");
});

test("a wake-word new request pauses the intake and is NOT consumed, so the caller still routes it normally", () => {
  const { sandbox } = loadGlue();
  sandbox.routeKyroVoiceIntakeTranscript({ transcript: "Can you make a resume for me?", utteranceId: "u1", source: "realtime-transport" });
  const consumed = sandbox.routeKyroVoiceIntakeTranscript({ transcript: "Kyro, open the map", utteranceId: "u2", source: "realtime-transport" });
  assert.equal(consumed, false, "a topic switch must fall through to normal command routing, not be swallowed");
  assert.equal(sandbox.getActiveIntake().engine.phase, "paused");
});

test("a wake-word new request also takes down the full-screen intake panel, same as the safety pause does", () => {
  // The panel is a fixed, inset:0 overlay covering the whole viewport (see
  // ensureKyroVoiceIntakeStyles/renderKyroVoiceIntakePanel in app.js). If it isn't explicitly
  // closed when the intake pauses for a wake-word switch, it keeps blocking the screen while the
  // user's new request (e.g. opening the map) is handled behind it.
  const { sandbox, calls } = loadGlue();
  sandbox.routeKyroVoiceIntakeTranscript({ transcript: "Can you make a resume for me?", utteranceId: "u1", source: "realtime-transport" });
  calls.getElementById = [];
  sandbox.routeKyroVoiceIntakeTranscript({ transcript: "Kyro, open the map", utteranceId: "u2", source: "realtime-transport" });
  assert.ok(calls.getElementById.includes("kyroVoiceIntakePanel"), "renderKyroVoiceIntakePanel(null) must run to close the panel when pausing for a wake-word switch");
});

// Found live: "Kyro, stop for a minute" (heard as "Chatroom, stop for a minute.") and several
// "can you repeat that, please?" sentences were all saved as answers. These pin the live wiring.
test("a spoken 'repeat' sentence during an active intake re-asks the question over Realtime and saves nothing", () => {
  const { sandbox, events } = loadGlue();
  sandbox.routeKyroVoiceIntakeTranscript({ transcript: "Can you make a resume for me?", utteranceId: "u1", source: "realtime-transport" });
  events.length = 0;
  const consumed = sandbox.routeKyroVoiceIntakeTranscript({ transcript: "I'm sorry, can you repeat that, please?", utteranceId: "u2", source: "realtime-transport" });
  assert.equal(consumed, true);
  assert.equal(sandbox.getActiveIntake().engine.snapshot().values.name, undefined, "the repeat request must not be recorded as the name");
  const spoken = events.find(event => event.type === "response.create");
  assert.ok(spoken, "Kyro must say the question again");
  assert.match(spoken.response.instructions, /What is your full name/);
});

test("'stop for a minute' pauses, is consumed, tells the person how to continue, and hands the conversation back to Kyro", () => {
  const { sandbox, events } = loadGlue();
  sandbox.routeKyroVoiceIntakeTranscript({ transcript: "Can you make a resume for me?", utteranceId: "u1", source: "realtime-transport" });
  events.length = 0;
  const consumed = sandbox.routeKyroVoiceIntakeTranscript({ transcript: "Chatroom, stop for a minute.", utteranceId: "u2", source: "realtime-transport" });
  assert.equal(consumed, true, "a hold is answered by the intake itself, not routed on as a new command");
  assert.equal(sandbox.getActiveIntake().engine.phase, "paused");
  const restore = events.find(event => event.type === "session.update");
  assert.equal(restore.session.audio.input.turn_detection.create_response, true, "auto-response must be back on while paused");
  const spoken = events.find(event => event.type === "response.create");
  assert.match(spoken.response.instructions, /continue/i);
  assert.match(spoken.response.instructions, /cancel/i);
});

test("saying 'I'm ready' while paused cuts off any reply already started, turns auto-response off, and re-asks the question", () => {
  const { sandbox, events, calls } = loadGlue();
  sandbox.routeKyroVoiceIntakeTranscript({ transcript: "Can you make a resume for me?", utteranceId: "u1", source: "realtime-transport" });
  sandbox.routeKyroVoiceIntakeTranscript({ transcript: "Hold on", utteranceId: "u2", source: "realtime-transport" });
  events.length = 0;
  const interruptsBefore = calls.interrupts;
  const consumed = sandbox.routeKyroVoiceIntakeTranscript({ transcript: "Okay, I'm ready", utteranceId: "u3", source: "realtime-transport" });
  assert.equal(consumed, true);
  assert.equal(calls.interrupts, interruptsBefore + 1, "the model's own auto-reply to 'I'm ready' must be interrupted");
  assert.notEqual(sandbox.getActiveIntake().engine.phase, "paused");
  const disable = events.find(event => event.type === "session.update");
  assert.equal(disable.session.audio.input.turn_detection.create_response, false);
  const spoken = events.find(event => event.type === "response.create");
  assert.match(spoken.response.instructions, /What is your full name/);
});

test("saying 'cancel' while paused ends the intake for good", () => {
  const { sandbox, events } = loadGlue();
  sandbox.routeKyroVoiceIntakeTranscript({ transcript: "Can you make a resume for me?", utteranceId: "u1", source: "realtime-transport" });
  sandbox.routeKyroVoiceIntakeTranscript({ transcript: "Wait", utteranceId: "u2", source: "realtime-transport" });
  events.length = 0;
  const consumed = sandbox.routeKyroVoiceIntakeTranscript({ transcript: "Cancel", utteranceId: "u3", source: "realtime-transport" });
  assert.equal(consumed, true);
  assert.equal(sandbox.getActiveIntake(), null, "the intake must be gone");
  assert.ok(events.some(event => event.type === "response.create" && /Nothing was saved/.test(event.response.instructions)));
});

test("an unrelated utterance while paused is NOT consumed (it goes on to normal routing)", () => {
  const { sandbox } = loadGlue();
  sandbox.routeKyroVoiceIntakeTranscript({ transcript: "Can you make a resume for me?", utteranceId: "u1", source: "realtime-transport" });
  sandbox.routeKyroVoiceIntakeTranscript({ transcript: "Wait", utteranceId: "u2", source: "realtime-transport" });
  assert.equal(sandbox.routeKyroVoiceIntakeTranscript({ transcript: "What is the weather in Kisumu?", utteranceId: "u3", source: "realtime-transport" }), false);
});

test("kyroVoiceIntakeOwnsTurn is true while an active (unpaused) intake exists, or for a fresh resume-build phrase", () => {
  const { sandbox } = loadGlue();
  assert.equal(sandbox.kyroVoiceIntakeOwnsTurn("Can you make a resume for me?"), true);
  assert.equal(sandbox.kyroVoiceIntakeOwnsTurn("find farm jobs near Nakuru"), false);
  sandbox.routeKyroVoiceIntakeTranscript({ transcript: "I need a CV", utteranceId: "u1", source: "realtime-transport" });
  assert.equal(sandbox.kyroVoiceIntakeOwnsTurn("anything at all"), true);
});

// callNexusOpenAiRealtimeTool is the model's OWN tool-call path (distinct from the transcript
// routing above) -- it must short-circuit before ever making a network call once a Kyro voice
// intake owns the turn, so the model can't open a competing workspace mid-interview.
test("callNexusOpenAiRealtimeTool short-circuits with no network call when a Kyro voice intake owns the turn", async () => {
  const start = appSource.indexOf("async function callNexusOpenAiRealtimeTool(toolName, args = {}) {");
  const end = appSource.indexOf("\nfunction handleOpenAiAgentsRealtimeEvent(");
  assert.ok(start > 0 && end > start, "could not locate callNexusOpenAiRealtimeTool in app.js");
  let fetchCalls = 0;
  const sandbox = {
    kyroVoiceIntakeOwnsTurn: () => true,
    fetch: async () => { fetchCalls += 1; return { ok: true, json: async () => ({}) }; },
    nexusGenesisVoiceDebugLog: () => {}
  };
  vm.createContext(sandbox);
  vm.runInContext(appSource.slice(start, end) + "\nthis.run = callNexusOpenAiRealtimeTool;", sandbox);
  const result = await sandbox.run("nexus_workforce_learning", { command: "Can you make a resume for me?" });
  assert.equal(fetchCalls, 0, "no HTTP tool call should be made once the intake owns the turn");
  assert.equal(result.executionVerified, false);
  assert.match(result.response, /already asking/);
});
