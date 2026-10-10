"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { spawn } = require("node:child_process");

const root = path.resolve(__dirname, "..", "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const watchdog = require("../../public/kyro-stall-watchdog.js");
const KyroVoiceIntake = require("../../public/kyro-voice-intake.js");
const KyroIntakeForms = require("../../public/kyro-intake-forms.js");
const reports = require("../../server/voice-stall-reports.js");

// The voice-stall mitigations (see docs/VOICE_STALL_ANALYSIS.md). Everything here runs without a microphone or a phone: the page code is cut out of
// public/app.js and run against fakes, the same technique as kyro-voice-intake-realtime-routing.test.js.

// ---- the pure pieces: event ring, phase, session timing ----------------------------------------------------------------------------------

test("the event ring keeps only the last few event TYPES, counts repeats, and strips anything that is not a type name", () => {
  let clock = 1000;
  const ring = watchdog.createEventRing({ cap: 3, now: () => clock });
  ring.record("response.created"); clock += 10;
  ring.record("output_audio_buffer.started"); ring.record("output_audio_buffer.started"); clock += 10;
  ring.record("Hello, my name is Amina Wanjiru and my phone is 0712 345 678"); clock += 10; // speech must never get in
  ring.record("response.done");
  const snapshot = ring.snapshot();
  assert.equal(snapshot.length, 3, "capped");
  assert.deepEqual(snapshot.map(item => item.type), ["output_audio_buffer.started", "hellomynameisaminawanjiruandmyphoneis0712345678".slice(0, 60), "response.done"]);
  assert.equal(snapshot[0].count, 2);
  assert.ok(snapshot.every(item => /^[a-z0-9_.:-]{1,60}$/.test(item.type)));
  assert.equal(snapshot.find(item => item.type === "response.created"), undefined, "the oldest was pushed out by the cap");
  ring.record("response.done");
  assert.equal(ring.snapshot().pop().count, 2, "consecutive repeats are counted, not listed again");
});

test("phase: the most basic cause wins, and each known way of going quiet has its own name", () => {
  const phase = state => watchdog.classifyPhase({ active: true, peerState: "connected", iceState: "connected", dataChannelState: "open", micTrack: "live", online: true, tabVisible: "visible", ...state });
  assert.equal(phase({ toolRunning: true }), "waiting-for-tool");
  assert.equal(phase({ waitingForResponse: true }), "waiting-for-response");
  assert.equal(phase({ audioContextState: "suspended", waitingForResponse: true }), "audio-suspended");
  assert.equal(phase({ peerState: "failed", waitingForResponse: true }), "disconnected");
  assert.equal(phase({ dataChannelState: "closing" }), "disconnected");
  assert.equal(phase({ active: false }), "disconnected");
  assert.equal(phase({ micTrack: "ended", waitingForResponse: true }), "mic-lost");
  assert.equal(phase({ online: false, toolRunning: true }), "offline");
  assert.equal(phase({ autoResponseOn: false, intakeActive: false, waitingForResponse: true }), "auto-response-stuck");
  assert.equal(phase({ autoResponseOn: false, intakeActive: true, waitingForResponse: true }), "waiting-for-response", "off on purpose during an interview");
  assert.equal(phase({ tabVisible: "hidden", waitingForResponse: true }), "backgrounded");
  assert.equal(phase({}), "idle");
  for (const name of ["waiting-for-tool", "waiting-for-response", "audio-suspended", "disconnected"]) assert.ok(watchdog.PHASES.includes(name));
});

test("session timing compares the session's age with the lifetime of its start key (seconds or milliseconds), numbers only", () => {
  const now = 1_800_000_000_000;
  const seconds = watchdog.sessionTiming({ startedAt: now - 90_000, expiresAt: Math.floor((now + 30_000) / 1000), now });
  assert.equal(seconds.sessionAgeMs, 90_000);
  assert.ok(Math.abs(seconds.keyRemainingMs - 30_000) < 1000);
  assert.equal(seconds.keyKnown, true);
  assert.equal(watchdog.sessionTiming({ startedAt: now - 5000, expiresAt: now - 10_000, now }).keyRemainingMs, -10_000, "negative: the key had already expired");
  assert.deepEqual(watchdog.sessionTiming({ startedAt: now - 5000, expiresAt: null, now }), { sessionAgeMs: 5000, keyRemainingMs: 0, keyKnown: false });
});

// ---- the server's side of a report: what is kept, and the summary ----------------------------------------------------------------------

test("a stall report keeps only known short fields: no transcript, no unknown kind or phase, numbers clamped, event names cleaned", () => {
  const report = reports.sanitiseStallReport({
    kind: "tool-stuck", phase: "waiting-for-tool", toolName: "nexus_weather", waitedMs: 14000, sessionAgeMs: 99e12, keyRemainingMs: -5000, keyKnown: true, autoResponseOn: false,
    transcript: "my private words", secret: "x", lastEvents: [{ type: "response.created", ageMs: 20, count: 2 }, { type: "<script>alert(1)</script>", ageMs: -4 }, { type: "" }],
    userAgent: "u".repeat(500)
  });
  assert.equal(report.kind, "tool-stuck");
  assert.equal(report.phase, "waiting-for-tool");
  assert.equal(report.sessionAgeMs, 86_400_000, "clamped");
  assert.equal(report.keyRemainingMs, -5000);
  assert.equal(report.autoResponseOn, false);
  assert.equal(report.userAgent.length, 160);
  assert.deepEqual(report.lastEvents.map(item => item.type), ["response.created", "scriptalert1script"]);
  assert.equal(report.lastEvents[1].ageMs, 0);
  assert.equal(JSON.stringify(report).includes("my private words"), false);
  assert.equal("transcript" in report || "secret" in report, false);
  assert.equal(reports.sanitiseStallReport({ kind: "<b>", phase: "made-up" }).kind, "unknown");
  assert.equal(reports.sanitiseStallReport({ kind: "<b>", phase: "made-up" }).phase, "unknown");
  assert.equal(reports.sanitiseStallReport({}).autoResponseOn, true, "a report that does not say is not blamed on the automatic reply");
});

test("stored reports are newest-first and capped; the summary counts by phase, kind, tool and last event and reads the biggest group out in words", () => {
  let list = [];
  for (let i = 0; i < reports.STORE_CAP + 25; i += 1) list = reports.storeStallReport(list, reports.sanitiseStallReport({ kind: "no-response", phase: i % 3 ? "waiting-for-response" : "disconnected", sessionId: `s${i % 7}`, waitedMs: 14000 + i, sessionAgeMs: 60_000 * (i % 5) }));
  assert.equal(list.length, reports.STORE_CAP);
  list = reports.storeStallReport(list, reports.sanitiseStallReport({ kind: "tool-stuck", phase: "waiting-for-tool", toolName: "nexus_live_knowledge", waitedMs: 25000, keyKnown: true, keyRemainingMs: -1000, lastEvents: [{ type: "response.output_item.added" }, { type: "function_call_arguments.done" }] }));
  const summary = reports.summariseStallReports(list, { limit: 3 });
  assert.equal(summary.total, reports.STORE_CAP);
  assert.equal(summary.byPhase[0].name, "waiting-for-response");
  assert.match(summary.readout, /^\d+ of \d+ reports are "waiting-for-response"/);
  assert.equal(summary.byTool[0].name, "nexus_live_knowledge");
  assert.equal(summary.byLastEventInRing[0].name, "function_call_arguments.done");
  assert.equal(summary.keyExpiredBeforeStall, 1);
  assert.equal(summary.recent.length, 3);
  assert.equal(summary.recent[0].kind, "tool-stuck");
  assert.ok(summary.waitedMs.p90 >= summary.waitedMs.median);
  assert.equal(reports.summariseStallReports([]).readout, "No stall reports yet.");
});

test("reports can also be read from a server log with scripts/voice-stall-summary.js", () => {
  const line = report => `2026-10-07T10:00:00.000Z [voice-stall] ${JSON.stringify(report)}`;
  const log = ["noise", line({ kind: "no-response", phase: "waiting-for-response", waitedMs: 14000 }), "[voice-stall] {cut off", line({ kind: "tool-stuck", phase: "waiting-for-tool", toolName: "nexus_maps_route", waitedMs: 25000 })].join("\n");
  const parsed = reports.parseStallLogLines(log);
  assert.equal(parsed.length, 2);
  const { render } = require("../../scripts/voice-stall-summary.js");
  const out = render(reports.summariseStallReports(parsed));
  assert.match(out, /Voice stall reports: 2/);
  assert.match(out, /nexus_maps_route/);
  assert.match(render(reports.summariseStallReports([])), /No \[voice-stall\] lines found/);
});

// ---- the page: guided-form auto-response always comes back ---------------------------------------------------------------------------

function makeClock() {
  const clock = { now: 1_000_000, timers: [], nextId: 1 };
  clock.setTimeout = (fn, ms) => { const id = clock.nextId++; clock.timers.push({ id, fn, at: clock.now + ms }); return id; };
  clock.clearTimeout = id => { clock.timers = clock.timers.filter(timer => timer.id !== id); };
  clock.advance = ms => {
    const target = clock.now + ms;
    for (;;) {
      const due = clock.timers.filter(timer => timer.at <= target).sort((a, b) => a.at - b.at)[0];
      if (!due) break;
      clock.now = due.at; clock.timers = clock.timers.filter(timer => timer !== due); due.fn();
    }
    clock.now = target;
  };
  clock.Date = class FakeDate extends Date { static now() { return clock.now; } };
  return clock;
}

const oneQuestionForm = { id: "mini", title: "Mini form", confirmBeforeSubmit: false, fields: [{ key: "name", label: "Name", question: "What is your name?", required: true, kind: "name" }] };

function loadIntakeGlue({ sendFails = false, intakeIdleMs = 600000, extra = {} } = {}) {
  const start = appSource.indexOf("function sendKyroRealtimeEvent(event) {");
  const end = appSource.indexOf("\nfunction genesisWorkspaceActionFromFinalTranscript(");
  assert.ok(start > 0 && end > start, "intake glue present");
  const clock = makeClock();
  const events = []; const debug = []; const stallReports = []; const heardTurns = [];
  const state = { sendFails, failRender: false };
  const fakeElement = () => ({ style: {}, dataset: {}, classList: { add() {}, remove() {} }, setAttribute() {}, addEventListener() {}, appendChild() {}, remove() {}, querySelector() { return null; }, set innerHTML(_v) {}, set id(_v) {}, set className(_v) {}, set textContent(_v) {} });
  const session = {
    active: true, autoResponseOn: true,
    sdkController: { interrupt() {} },
    sdkSession: { transport: { sendEvent: event => { if (state.sendFails) throw new Error("data channel closed"); events.push(event); } } }
  };
  const sandbox = {
    KyroVoiceIntake: { ...KyroVoiceIntake, create: (definition, options) => KyroVoiceIntake.create(definition, { ...options, now: () => clock.now, idleTimeoutMs: intakeIdleMs }) },
    window: { KyroIntakeForms },
    document: { body: { appendChild() {} }, head: { appendChild() {} }, getElementById() { if (state.failRender) throw new Error("render failed"); return null; }, querySelector() { return null; }, createElement: fakeElement, addEventListener() {} },
    escapeHtml: value => String(value ?? ""),
    kyroActiveVoiceIntake: null,
    kyroRealtimeBaseTurnDetection: { type: "semantic_vad", create_response: true, interrupt_response: true, eagerness: "auto" },
    realtimeVoiceSession: session,
    realtimeVoiceActive: () => true,
    languageCode: () => "en",
    setVoiceResponse: () => {},
    nexusGenesisVoiceDebugLog: (stage, details) => debug.push({ stage, details }),
    handleNexusMentalHealthBehavioralWellnessCommand: () => false,
    reportKyroVoiceStall: (kind, detail) => stallReports.push({ kind, detail }),
    kyroStallWatchdogInstance: () => ({ userTurnCommitted: label => heardTurns.push(label) }),
    setTimeout: clock.setTimeout, clearTimeout: clock.clearTimeout, Date: clock.Date,
    ...extra
  };
  vm.createContext(sandbox);
  vm.runInContext(appSource.slice(start, end) + `
    this.route = routeKyroVoiceIntakeTranscript;
    this.startIntake = startKyroVoiceIntake;
    this.ensure = kyroEnsureAutoResponse;
    this.setAuto = setKyroRealtimeAutoResponse;
    this.apply = applyKyroIntakeDecision;
    this.active = () => kyroActiveVoiceIntake;
  `, sandbox);
  const lastCreateResponse = () => { const updates = events.filter(event => event.type === "session.update"); return updates.length ? updates[updates.length - 1].session.audio.input.turn_detection.create_response : undefined; };
  return { sandbox, clock, events, debug, stallReports, heardTurns, state, session, lastCreateResponse };
}

test("cancelling a guided form puts the automatic reply back FIRST, even when the screen or speech cleanup then fails", async () => {
  const glue = loadIntakeGlue();
  let cancelled = 0;
  glue.sandbox.startIntake(oneQuestionForm, { onComplete: async () => ({ ok: true }), onCancel: () => { cancelled += 1; throw new Error("cleanup failed"); } });
  assert.equal(glue.lastCreateResponse(), false);
  assert.equal(glue.session.autoResponseOn, false);
  glue.state.failRender = true;
  await glue.sandbox.apply(glue.sandbox.active().engine.cancel());
  assert.equal(glue.lastCreateResponse(), true, "back on");
  assert.equal(glue.session.autoResponseOn, true);
  assert.equal(glue.sandbox.active(), null);
  assert.equal(cancelled, 1);
});

test("finishing a guided form puts the automatic reply back even if showing or saying the result throws", async () => {
  const glue = loadIntakeGlue();
  glue.sandbox.startIntake(oneQuestionForm, { onComplete: async () => { glue.state.failRender = true; return { ok: true, say: "Saved." }; } });
  const decision = glue.sandbox.active().engine.handleUtterance("Amina", { utteranceId: "u1" });
  assert.equal(decision.action, "submit");
  await glue.sandbox.apply(decision);
  assert.equal(glue.lastCreateResponse(), true);
  assert.equal(glue.session.autoResponseOn, true);
  assert.equal(glue.sandbox.active(), null);
  assert.ok(glue.debug.some(item => item.stage === "kyro-voice-intake-done-cleanup-error"));
});

test("a restore the connection could not carry is retried (1s, 2s, 4s, 8s) until it lands, and gives up quietly after that", () => {
  const glue = loadIntakeGlue();
  glue.sandbox.startIntake(oneQuestionForm, { onComplete: async () => ({ ok: true }) });
  assert.equal(glue.session.autoResponseOn, false);
  glue.sandbox.active().engine.pause("test");
  glue.state.sendFails = true;
  assert.equal(glue.sandbox.setAuto(true), false, "could not be sent");
  assert.equal(glue.session.autoResponseOn, false, "still off: not pretended");
  glue.clock.advance(1000); // first retry fails too
  glue.state.sendFails = false;
  glue.clock.advance(2000); // second retry goes through
  assert.equal(glue.lastCreateResponse(), true);
  assert.equal(glue.session.autoResponseOn, true);
  const sentBefore = glue.events.length;
  glue.clock.advance(60000);
  assert.equal(glue.events.length, sentBefore, "no more retries once it landed");
  const dead = loadIntakeGlue({ sendFails: true });
  dead.session.autoResponseOn = false;
  dead.sandbox.setAuto(true);
  dead.clock.advance(60000);
  assert.equal(dead.events.length, 0);
  assert.equal(dead.clock.timers.length, 0, "no retry loop left running");
});

test("if the automatic reply is found off with no guided form running, speaking again puts it back and reports it; during a form it is left alone", () => {
  const stuck = loadIntakeGlue();
  stuck.session.autoResponseOn = false;
  assert.equal(stuck.sandbox.ensure("speech-started"), true);
  assert.equal(stuck.lastCreateResponse(), true);
  assert.equal(stuck.session.autoResponseOn, true);
  assert.equal(stuck.stallReports[0].kind, "auto-response-stuck");
  const quiet = loadIntakeGlue();
  assert.equal(quiet.sandbox.ensure("speech-started"), false, "already on: nothing sent");
  assert.equal(quiet.events.length, 0);
  const interview = loadIntakeGlue();
  interview.sandbox.startIntake(oneQuestionForm, { onComplete: async () => ({ ok: true }) });
  const sent = interview.events.length;
  assert.equal(interview.sandbox.ensure("speech-started"), false, "off on purpose while the form runs");
  assert.equal(interview.events.length, sent);
});

test("a guided form the person walked away from is released by a timer, not only by their next word", () => {
  const glue = loadIntakeGlue({ intakeIdleMs: 120000 });
  glue.sandbox.startIntake(oneQuestionForm, { onComplete: async () => ({ ok: true }) });
  assert.equal(glue.session.autoResponseOn, false);
  glue.clock.advance(60000);
  assert.ok(glue.sandbox.active(), "still within its idle time: kept");
  glue.clock.advance(120000);
  assert.equal(glue.sandbox.active(), null, "abandoned: released");
  assert.equal(glue.session.autoResponseOn, true);
  assert.equal(glue.lastCreateResponse(), true);
  assert.ok(glue.debug.some(item => item.stage === "kyro-voice-intake-released-by-safety-net"));
});

test("a form that has finished or been cancelled but was never cleaned up is released by the timer too", () => {
  const glue = loadIntakeGlue();
  glue.sandbox.startIntake(oneQuestionForm, { onComplete: async () => ({ ok: true }) });
  glue.sandbox.active().engine.cancel(); // the engine ended, the page's cleanup never ran
  glue.clock.advance(31000);
  assert.equal(glue.sandbox.active(), null);
  assert.equal(glue.session.autoResponseOn, true);
});

test("when a form timed out in the middle of a turn, that turn is watched so it is still answered", () => {
  const glue = loadIntakeGlue({ intakeIdleMs: 1000 });
  glue.sandbox.startIntake(oneQuestionForm, { onComplete: async () => ({ ok: true }) });
  glue.clock.now += 5000; // idle time passes with no safety-net tick yet
  const consumed = glue.sandbox.route({ transcript: "what is the weather like", utteranceId: "u9", source: "realtime-transport" });
  assert.equal(consumed, false, "not an answer to the form: normal routing continues");
  assert.equal(glue.session.autoResponseOn, true);
  assert.deepEqual(glue.heardTurns, ["auto-response-restored:intake-expired"], "the unanswered turn is handed to the stall watchdog");
});

// ---- the page: microphone, restart, tool failures, report ------------------------------------------------------------------------------

function loadResilience(overrides = {}) {
  const start = appSource.indexOf("// ---- voice resilience (BEGIN)");
  const end = appSource.indexOf("// ---- voice resilience (END)");
  assert.ok(start > 0 && end > start, "resilience block present");
  const toasts = []; const statuses = []; const started = []; const restarted = []; const posted = []; const docHandlers = {};
  const track = (readyState = "live") => ({ readyState, enabled: true, muted: false, stopped: false, stop() { this.stopped = true; this.readyState = "ended"; } });
  const stream = (readyState = "live") => { const t = track(readyState); const s = { tracks: [t], getAudioTracks: () => s.tracks, getTracks: () => s.tracks, cloned: 0, clone() { s.cloned += 1; const c = stream(t.readyState); return c; } }; return s; };
  const sandbox = {
    window: { KyroStallWatchdog: watchdog },
    realtimeVoiceSession: null, realtimeVoiceStarting: false,
    nexusPermanentMicrophoneStream: null, nexusVoicePermissionStream: null, nexusRealtimeConversationIdentity: "conv-1",
    kyroActiveVoiceIntake: null, AGRINEXUS_BUILD_VERSION: "test-build",
    startRealtimeVoiceSession: async options => { started.push(options); return overrides.startResult ?? true; },
    restartRealtimeVoiceAfterStall: reason => restarted.push(reason),
    toast: message => toasts.push(message),
    setNexusPermanentMicrophoneState: (state, message) => statuses.push([state, message]),
    navigator: { onLine: true, userAgent: "TestAgent/1.0", mediaDevices: { getUserMedia: async () => { if (overrides.micError) throw new Error(overrides.micError); return overrides.newStream || stream(); } } },
    document: { hidden: false, visibilityState: "visible", addEventListener: (name, handler) => { docHandlers[name] = handler; } },
    fetch: (url, init) => { posted.push({ url, body: JSON.parse(init.body) }); return Promise.resolve({ ok: true }); },
    AbortController, setTimeout, clearTimeout, Date
  };
  vm.createContext(sandbox);
  vm.runInContext(appSource.slice(start, end) + `
    this.live = kyroMicrophoneIsLive; this.clone = kyroCloneMicrophoneForSdk; this.liveForRestart = kyroLiveMicrophoneForRestart; this.restartWithMic = kyroRestartVoiceWithLiveMicrophone;
    this.note = kyroNoteRealtimeEvent; this.failure = kyroToolFailureResult; this.fetchTimeout = kyroFetchWithTimeout; this.reportBody = kyroStallReportBody; this.visibility = kyroOnVisibilityChange;
    this.health = kyroRealtimeHealth; this.report = reportKyroVoiceStall;
  `, sandbox);
  return { sandbox, toasts, statuses, started, restarted, posted, docHandlers, stream, track };
}

test("the SDK is given a CLONE of the microphone: it stops what it is given when a session closes, and the page's own microphone must survive that", () => {
  const { sandbox, stream } = loadResilience();
  const mine = stream();
  const given = sandbox.clone(mine);
  assert.notEqual(given, mine);
  assert.equal(mine.cloned, 1);
  given.getTracks().forEach(t => t.stop()); // what OpenAIRealtimeWebRTC.close() does to the sender's track
  assert.equal(sandbox.live(mine), true, "the original is untouched");
  const dead = stream("ended");
  assert.equal(sandbox.clone(dead), dead, "a stream that is not live is passed through unchanged (and then fails honestly)");
  assert.equal(sandbox.clone(null), null);
  assert.equal(sandbox.clone({ getAudioTracks: () => [{ readyState: "live", enabled: true }] }).getAudioTracks().length, 1, "a stream that cannot clone is used as it is");
});

test("the real SDK bundle really does stop the sender's track on close (why the clone is needed), and app.js really passes the clone and keeps the page's stream", () => {
  const bundle = fs.readFileSync(path.join(root, "public", "vendor", "nexus-openai-realtime-agent.bundle.mjs"), "utf8");
  assert.match(bundle, /peerConnection\.getSenders\(\)\.forEach\(\(sender\) => \{\s*sender\.track\?\.stop\(\);/);
  assert.match(appSource, /preverifiedMicrophoneStream: kyroCloneMicrophoneForSdk\(options\.preverifiedMicrophoneStream \|\| null\)/);
  assert.match(appSource, /realtimeVoiceSession\.stream = options\.preverifiedMicrophoneStream \|\| controller\.mediaStream;/);
});

test("a restart reuses the kept microphone when it is live, otherwise opens a new one, and says so plainly if it cannot", async () => {
  const live = loadResilience();
  const kept = live.stream();
  live.sandbox.nexusPermanentMicrophoneStream = kept;
  assert.equal(await live.sandbox.liveForRestart({ stream: kept }), kept);

  const fresh = loadResilience();
  const old = fresh.stream("ended");
  fresh.sandbox.nexusPermanentMicrophoneStream = old;
  const got = await fresh.sandbox.liveForRestart({ stream: old });
  assert.notEqual(got, old);
  assert.equal(fresh.sandbox.live(got), true);
  assert.equal(fresh.sandbox.nexusPermanentMicrophoneStream, got, "the page keeps the new one");
  assert.equal(fresh.sandbox.nexusVoicePermissionStream, got);

  const refused = loadResilience({ micError: "NotAllowedError" });
  assert.equal(await refused.sandbox.liveForRestart({ stream: null }), null);
  const useless = loadResilience({ newStream: loadResilience().stream("ended") });
  assert.equal(await useless.sandbox.liveForRestart({ stream: null }), null, "a stream with no live track is not used");
});

test("a restarted session gets the live microphone and the conversation's identity; with none, the person is told to tap (once) and a report is sent", async () => {
  const ok = loadResilience();
  const kept = ok.stream();
  ok.sandbox.nexusPermanentMicrophoneStream = kept;
  assert.equal(await ok.sandbox.restartWithMic({ stream: kept, turnIndex: 4, conversationIdentity: "c-9" }, { source: "stall-watchdog-restart" }), true);
  assert.equal(ok.started.length, 1);
  assert.equal(ok.started[0].preverifiedMicrophoneStream, kept);
  assert.equal(ok.started[0].turnIndex, 4);
  assert.equal(ok.started[0].conversationIdentity, "c-9");
  assert.equal(ok.started[0].recovery, true);
  assert.equal(ok.toasts.length, 0);

  const noMic = loadResilience({ micError: "NotAllowedError" });
  assert.equal(await noMic.sandbox.restartWithMic({ stream: null }, { source: "bounded-realtime-recovery" }), false);
  assert.equal(noMic.started.length, 0, "no point starting a session that cannot hear");
  assert.deepEqual(noMic.toasts, ["Voice stopped. Tap the orb to start again."]);
  assert.match(noMic.statuses[0][1], /Tap the orb/);
  assert.equal(noMic.posted[0].body.kind, "mic-lost");

  const failed = loadResilience({ startResult: false });
  const live = failed.stream();
  failed.sandbox.nexusPermanentMicrophoneStream = live;
  assert.equal(await failed.sandbox.restartWithMic({ stream: live }, { source: "x" }), false);
  assert.equal(failed.posted[0].body.kind, "restart-failed");
  assert.equal(failed.toasts.length, 1);

  const already = loadResilience();
  already.sandbox.realtimeVoiceSession = { active: true };
  assert.equal(await already.sandbox.restartWithMic({ stream: null }, {}), false);
  assert.equal(already.started.length, 0, "someone already started a session: not a second one");
});

test("the tool gateway refusing, signing out, erroring or hanging always becomes a short true sentence for the model, never 'done' and never silence", async () => {
  const { sandbox } = loadResilience();
  const tooMany = sandbox.failure("http", { status: 429, body: { error: "Too many Nexus Realtime tool requests", category: "rate-limited" } });
  assert.equal(tooMany.ok, false);
  assert.equal(tooMany.status, "rate-limited");
  assert.match(tooMany.response, /too many requests/i);
  assert.equal(tooMany.executionAttempted, false);
  assert.match(sandbox.failure("http", { status: 401, body: {} }).response, /sign in/i);
  assert.match(sandbox.failure("http", { status: 403, body: {} }).response, /not allowed/i);
  assert.match(sandbox.failure("http", { status: 500, body: {} }).response, /went wrong/i);
  assert.match(sandbox.failure("timed-out").response, /taking longer than I expected/);
  assert.match(sandbox.failure("offline").response, /cannot reach the server/);
  assert.equal(sandbox.failure("http", { status: 429, body: { response: "Wait a bit." } }).response, "Wait a bit.", "a sentence the server already gave is kept");
  // a request that never answers is let go
  const hung = loadResilience();
  hung.sandbox.fetch = (url, init) => new Promise((resolve, reject) => init.signal.addEventListener("abort", () => reject(Object.assign(new Error("aborted"), { name: "AbortError" }))));
  await assert.rejects(hung.sandbox.fetchTimeout("/x", {}, 20), error => error.name === "AbortError");
});

test("the tool call from the voice session: a 429 reaches the model as a refusal, a hang as 'taking longer', a dropped connection as 'cannot reach the server'", async () => {
  const start = appSource.indexOf("async function callNexusOpenAiRealtimeTool(");
  const end = appSource.indexOf("\nfunction handleOpenAiAgentsRealtimeEvent(");
  assert.ok(start > 0 && end > start);
  async function call(fetchImpl) {
    const base = loadResilience();
    const sandbox = base.sandbox;
    Object.assign(sandbox, {
      kyroVoiceIntakeOwnsTurn: () => false, nexusGenesisVoiceDebugLog() {}, languageCode: () => "en",
      genesisWorkspaceActionFromFinalTranscript: () => null, executeGenesisWorkspaceFromFinalTranscript: async () => false, runAuthoritativeGenesisWorkspaceBridge: async () => {},
      kyroDeviceTimeZone: () => "America/Chicago"
    });
    sandbox.fetch = fetchImpl;
    vm.runInContext(`${appSource.slice(start, end)}\nthis.callTool = callNexusOpenAiRealtimeTool;`, sandbox);
    return sandbox.callTool("nexus_weather", { command: "weather in Kisumu" });
  }
  const refused = await call(async () => ({ ok: false, status: 429, json: async () => ({ error: "Too many Nexus Realtime tool requests", category: "rate-limited" }) }));
  assert.equal(refused.ok, false);
  assert.equal(refused.status, "rate-limited");
  assert.match(refused.response, /too many requests/i);
  const dropped = await call(async () => { throw new TypeError("Failed to fetch"); });
  assert.equal(dropped.status, "offline");
  const aborted = await call(async () => { throw Object.assign(new Error("aborted"), { name: "AbortError" }); });
  assert.equal(aborted.status, "timed-out");
  let sentBody = null;
  const fine = await call(async (url, init) => { sentBody = JSON.parse(init.body); return { ok: true, status: 200, json: async () => ({ ok: true, status: "completed", response: "It is sunny." }) }; });
  assert.equal(fine.response, "It is sunny.");
  assert.equal(fine.ok, true);
  // the device's time zone goes with every tool call (the US guides and "tomorrow at 5" depend on it), in the arguments and at the top of the body
  assert.equal(sentBody.arguments.timeZone, "America/Chicago"); assert.equal(sentBody.timeZone, "America/Chicago");
});

test("a stall report says the phase, the last events, whether the automatic reply was off, and the session's age against its key, and carries no speech", () => {
  const { sandbox, docHandlers } = loadResilience();
  sandbox.realtimeVoiceSession = {
    active: true, sessionId: "rt-sdk-abc", turnIndex: 3, controllerState: "processing", lastModelEvent: "input_audio_buffer.committed", autoResponseOn: false,
    startedAt: Date.now() - 600_000, keyExpiresAt: Math.floor(Date.now() / 1000) - 60, connectionState: "connected", lastHiddenForMs: 42_000,
    microphoneTrack: { readyState: "live", muted: false },
    sdkSession: { transport: { connectionState: { peerConnection: { connectionState: "connected", iceConnectionState: "checking" }, dataChannel: { readyState: "open" } } } }
  };
  sandbox.note("input_audio_buffer.speech_stopped"); sandbox.note("input_audio_buffer.committed");
  const body = sandbox.reportBody("no-response", { waitedMs: 14000, nudges: 1, restarts: 0, waitingForResponse: true });
  assert.equal(body.phase, "auto-response-stuck");
  assert.equal(body.autoResponseOn, false);
  assert.equal(body.iceState, "checking");
  assert.equal(body.dataChannelState, "open");
  assert.ok(body.sessionAgeMs >= 600_000);
  assert.equal(body.keyKnown, true);
  assert.ok(body.keyRemainingMs < 0, "the key had expired before this stall");
  assert.equal(body.hiddenForMs, 42_000);
  assert.deepEqual(body.lastEvents.map(item => item.type), ["input_audio_buffer.speech_stopped", "input_audio_buffer.committed"]);
  assert.equal(body.build, "test-build");
  const serialised = JSON.stringify(body);
  assert.equal(/transcript|content|text/i.test(Object.keys(body).join(",")), false, "no field that could hold speech");
  assert.ok(serialised.length < 2500);
  // the server accepts exactly this shape
  const kept = reports.sanitiseStallReport(body);
  assert.equal(kept.phase, "auto-response-stuck");
  assert.equal(kept.lastEvents.length, 2);
  assert.equal(typeof docHandlers.visibilitychange, "function", "page-visibility is watched");
});

test("coming back to the page after the phone suspended it: a dead connection is reported and restarted; a healthy one is left alone", () => {
  const dead = loadResilience();
  dead.sandbox.realtimeVoiceSession = { active: true, sessionId: "s1", sdkSession: { transport: { connectionState: { peerConnection: { connectionState: "failed", iceConnectionState: "failed" }, dataChannel: { readyState: "closed" } } } } };
  dead.sandbox.document.hidden = true; dead.docHandlers.visibilitychange();
  dead.sandbox.document.hidden = false; dead.docHandlers.visibilitychange();
  assert.equal(dead.restarted.length, 1);
  assert.match(dead.restarted[0], /returned-from-background:peer-connection-down/);
  assert.equal(dead.posted[0].body.kind, "disconnected");
  assert.ok(dead.posted[0].body.lastEvents.some(item => item.type === "tab-hidden") && dead.posted[0].body.lastEvents.some(item => item.type === "tab-visible"));

  const healthy = loadResilience();
  healthy.sandbox.realtimeVoiceSession = { active: true, sdkSession: { transport: { connectionState: { peerConnection: { connectionState: "connected", iceConnectionState: "connected" }, dataChannel: { readyState: "open" } } } } };
  healthy.sandbox.document.hidden = true; healthy.docHandlers.visibilitychange();
  healthy.sandbox.document.hidden = false; healthy.docHandlers.visibilitychange();
  assert.equal(healthy.restarted.length, 0);
  assert.equal(healthy.posted.length, 0);

  const micGone = loadResilience();
  micGone.sandbox.realtimeVoiceSession = { active: true, microphoneTrack: { readyState: "ended" } };
  micGone.docHandlers.visibilitychange();
  assert.equal(micGone.restarted.length, 1);
  assert.equal(micGone.posted[0].body.kind, "mic-lost");
});

test("both restart paths (the stall watchdog and a lost connection) go through the live-microphone helper, not a stream the SDK just stopped", () => {
  assert.match(appSource, /stopRealtimeVoiceSession\(`Realtime voice restarted after a stall: \$\{reason\}`\);\s*void kyroRestartVoiceWithLiveMicrophone\(session, \{ source: "stall-watchdog-restart" \}\);/);
  assert.match(appSource, /void kyroRestartVoiceWithLiveMicrophone\(session, \{ source: "bounded-realtime-recovery" \}\);/);
  assert.equal(/preservedPermanentStream/.test(appSource), false);
  assert.match(appSource, /try \{ if \(typeof kyroEnsureAutoResponse === "function"\) kyroEnsureAutoResponse\("speech-started"\); \}/);
});

test("a start that finds the voice runtime is not Realtime no longer leaves 'already starting' set for ever", async () => {
  const start = appSource.indexOf("async function startRealtimeVoiceSession(");
  const end = appSource.indexOf("\nfunction browserVoiceRuntimeProfile(");
  assert.ok(start > 0 && end > start);
  const sandbox = {
    realtimeVoiceSession: null, realtimeVoiceStarting: false, realtimeVoiceSupported: () => true, realtimeVoiceActive: () => false,
    window: { KyroStallWatchdog: null }, loadRealtimeVoiceStatus: async () => ({ realtimeVoice: { runtime: "legacy" } }),
    stopRealtimeVoiceSession() {}, nexusGenesisVoiceDebugLog() {}, setNexusPermanentMicrophoneState() {}, updateNexusBehaviorLayer() {}, translateText: value => value, $: () => null, kyroStallWatchdogInstance: () => null
  };
  vm.createContext(sandbox);
  vm.runInContext(`${appSource.slice(start, end)}\nthis.startIt = startRealtimeVoiceSession; this.starting = () => realtimeVoiceStarting;`, sandbox);
  assert.equal(await sandbox.startIt({}), false);
  assert.equal(sandbox.starting(), false, "a later tap can start voice");
});

test("the page loads the watchdog (which now also holds the phase and event helpers) before app.js, and it is in the offline shell", () => {
  const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
  const sw = fs.readFileSync(path.join(root, "public", "sw.js"), "utf8");
  assert.ok(html.indexOf("/kyro-stall-watchdog.js") > 0 && html.indexOf("/kyro-stall-watchdog.js") < html.indexOf("/app.js?v="));
  assert.match(sw, /kyro-stall-watchdog\.js/);
});

// ---- the server (real): a deadline on every tool the voice session calls, an honest 429, and the stored report summary ---------------

const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-voice-stall-mitigations-db.json");
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let logText = ""; let userCookie; let adminCookie;

test.describe("server (real)", () => {
  test.before(async () => {
    fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
    server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_REALTIME_TOOL_DEADLINE_MS: "1" }, stdio: ["ignore", "pipe", "pipe"], windowsHide: true });
    server.stdout.on("data", chunk => { logText += chunk; }); server.stderr.on("data", chunk => { logText += chunk; });
    for (let i = 0; i < 80; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await wait(150); } }
    const login = async (email, password) => {
      const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
      assert.equal(res.status, 200);
      return res.headers.get("set-cookie").split(";")[0];
    };
    userCookie = await login("user@agrinexus.org", "User2026!");
    adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  });
  test.after(() => { server.kill(); if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath); });

  const post = (route, cookie, body) => fetch(`${base}${route}`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body) });

  test("a tool the voice session really calls (nexus_weather) that overruns the deadline gets a plain, honest spoken line, and is logged", async () => {
    const res = await post("/api/voice/realtime/tool", userCookie, { name: "nexus_weather", correlationId: "native-deadline-1", arguments: { command: "What's the weather in Kisumu today?", language: "en" }, language: "en" });
    const body = await res.json();
    assert.equal(res.status, 200);
    assert.equal(body.status, "timed-out");
    assert.equal(body.ok, false);
    assert.match(body.response, /taking longer than I expected, and I cannot tell yet whether it finished/);
    assert.equal(body.toolName, "nexus_weather");
    await wait(200);
    assert.match(logText, /\[voice-slow-tool\].*"tool":"nexus_weather".*"timedOut":true/);
  });

  test("stall reports are kept and summarised for the owner only, without any speech", async () => {
    const send = extra => post("/api/voice/realtime/stall-report", userCookie, { kind: "no-response", phase: "waiting-for-response", build: "b1", sessionId: "s-1", waitedMs: 14000, sessionAgeMs: 300000, keyKnown: true, keyRemainingMs: -2000, autoResponseOn: true, tabVisible: "visible", online: true, lastEvents: [{ type: "input_audio_buffer.committed", ageMs: 14000, count: 1 }], transcript: "my private words", ...extra });
    assert.equal((await send({})).status, 200);
    assert.equal((await send({ kind: "tool-stuck", phase: "waiting-for-tool", toolName: "nexus_live_knowledge", toolRunningMs: 25000 })).status, 200);
    assert.equal((await send({ kind: "auto-response-stuck", phase: "auto-response-stuck", autoResponseOn: false })).status, 200);
    assert.equal((await send({ kind: "hacked", phase: "<script>" })).status, 200);
    const refused = await fetch(`${base}/api/admin/voice/stall-summary`, { headers: { cookie: userCookie } });
    assert.equal(refused.status, 403, "an ordinary account cannot read it");
    assert.equal((await fetch(`${base}/api/admin/voice/stall-summary`)).status, 401);
    const res = await fetch(`${base}/api/admin/voice/stall-summary?limit=5`, { headers: { cookie: adminCookie } });
    assert.equal(res.status, 200);
    const summary = await res.json();
    assert.equal(summary.total, 4);
    assert.ok(summary.byPhase.some(item => item.name === "waiting-for-tool"));
    assert.ok(summary.byPhase.some(item => item.name === "unknown"), "an unknown phase is recorded as unknown, not as typed");
    assert.equal(summary.byTool[0].name, "nexus_live_knowledge");
    assert.equal(summary.autoResponseOff, 1);
    assert.equal(summary.keyExpiredBeforeStall, 4);
    assert.match(summary.readout, /reports are/);
    assert.equal(JSON.stringify(summary).includes("my private words"), false);
    assert.equal(summary.recent.length, 4);
  });

  test("when the tool gateway is out of budget the answer is a 429 that also carries a sentence the voice can say, and when to retry", async () => {
    let last;
    for (let i = 0; i < 95; i += 1) { last = await post("/api/voice/realtime/tool", userCookie, { name: "not_a_tool", correlationId: `flood-${i}` }); if (last.status === 429) break; }
    assert.equal(last.status, 429);
    const body = await last.json();
    assert.equal(body.ok, false);
    assert.equal(body.status, "rate-limited");
    assert.match(body.response, /too many requests/i);
    assert.equal(last.headers.get("retry-after"), "30");
  });
});
