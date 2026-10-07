"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const vm = require("node:vm");
const { spawn } = require("node:child_process");
const { createStallWatchdog, DEFAULTS } = require("../../public/kyro-stall-watchdog.js");

// The orb could look connected and never answer, for minutes, with nothing to bring it back. Now a turn that is not answered is nudged and then the
// session is restarted by itself, a tool that hangs cannot leave Kyro silent, and every stall is reported with its timings.

function harness(options = {}) {
  let clock = 0; let nextId = 1; const timers = new Map(); const events = []; const calls = [];
  const dog = createStallWatchdog({
    now: () => clock,
    setTimeoutFn: (fn, ms) => { const id = nextId++; timers.set(id, { fn, at: clock + ms }); return id; },
    clearTimeoutFn: id => timers.delete(id),
    onNudge: detail => calls.push(["nudge", detail]),
    onRestart: detail => calls.push(["restart", detail]),
    onToolStuck: detail => calls.push(["tool-stuck", detail]),
    onEvent: event => events.push(event.type),
    ...options
  });
  const advance = ms => {
    const target = clock + ms;
    for (;;) {
      const due = [...timers.entries()].filter(([, timer]) => timer.at <= target).sort((a, b) => a[1].at - b[1].at)[0];
      if (!due) break;
      clock = due[1].at; timers.delete(due[0]); due[1].fn();
    }
    clock = target;
  };
  return { dog, advance, calls, events, timers };
}

test("a turn that gets no reply is nudged after a few seconds, then the session is restarted", () => {
  const { dog, advance, calls } = harness();
  dog.userTurnCommitted("input-audio-committed");
  advance(DEFAULTS.nudgeMs - 1);
  assert.deepEqual(calls, [], "nothing yet");
  advance(1);
  assert.deepEqual(calls.map(call => call[0]), ["nudge"]);
  advance(DEFAULTS.restartMs - DEFAULTS.nudgeMs);
  assert.deepEqual(calls.map(call => call[0]), ["nudge", "restart"]);
  assert.equal(calls[1][1].waitedMs, DEFAULTS.restartMs);
  assert.equal(calls[1][1].nudged, true);
});

test("a reply that starts in time disarms it: no nudge, no restart", () => {
  const { dog, advance, calls, events } = harness();
  dog.userTurnCommitted();
  advance(3000);
  dog.activity("response-created");
  advance(60000);
  assert.deepEqual(calls, []);
  assert.deepEqual(events, ["recovered-by-activity"]);
  assert.equal(dog.snapshot().waitingForResponse, false);
});

test("a reply that starts right after the nudge also ends the wait", () => {
  const { dog, advance, calls } = harness();
  dog.userTurnCommitted();
  advance(DEFAULTS.nudgeMs);
  dog.activity("response-created");
  advance(60000);
  assert.deepEqual(calls.map(call => call[0]), ["nudge"], "the nudge worked, so there is no restart");
});

test("the person speaking again, a tool starting, or stopping all end the wait", () => {
  for (const act of [dog => dog.userSpeechStarted(), dog => dog.toolStarted("nexus_weather"), dog => dog.reset()]) {
    const { dog, advance, calls } = harness();
    dog.userTurnCommitted();
    advance(2000);
    act(dog);
    advance(DEFAULTS.restartMs * 3);
    assert.deepEqual(calls.filter(call => call[0] !== "tool-stuck"), []);
  }
});

test("a new turn starts the wait over, never doubling it up", () => {
  const { dog, advance, calls } = harness();
  dog.userTurnCommitted();
  advance(5000);
  dog.userTurnCommitted();
  advance(5000);
  assert.deepEqual(calls, [], "the first turn's timer was replaced, 10 seconds in total is not enough to nudge the second");
  advance(1000);
  assert.deepEqual(calls.map(call => call[0]), ["nudge"]);
});

test("a tool that runs far too long is treated as a stall; one that finishes is not", () => {
  const { dog, advance, calls } = harness();
  dog.toolStarted("nexus_weather");
  advance(DEFAULTS.toolMs - 1);
  assert.deepEqual(calls, []);
  advance(1);
  assert.deepEqual(calls.map(call => call[0]), ["tool-stuck"]);
  assert.equal(calls[0][1].toolName, "nexus_weather");
  const ok = harness();
  ok.dog.toolStarted("nexus_lists"); ok.advance(5000); ok.dog.toolEnded(); ok.advance(60000);
  assert.deepEqual(ok.calls, []);
});

test("after a tool finishes the model owes a reply, and that wait is watched too", () => {
  const { dog, advance, calls } = harness();
  dog.toolStarted("nexus_lists"); advance(1000); dog.toolEnded(); dog.userTurnCommitted("after-tool");
  advance(DEFAULTS.restartMs);
  assert.deepEqual(calls.map(call => call[0]), ["nudge", "restart"]);
});

test("it gives up after repeated restarts instead of restarting forever, and any real activity gives the allowance back", () => {
  const { dog, advance, calls, events } = harness();
  for (let i = 0; i < DEFAULTS.maxRestartsPerSession + 1; i += 1) { dog.userTurnCommitted(); advance(DEFAULTS.restartMs); }
  assert.equal(calls.filter(call => call[0] === "restart").length, DEFAULTS.maxRestartsPerSession);
  assert.ok(events.includes("gave-up"));
  dog.reset({ keepRestarts: true });
  dog.userTurnCommitted(); advance(DEFAULTS.restartMs);
  assert.equal(calls.filter(call => call[0] === "restart").length, DEFAULTS.maxRestartsPerSession, "still given up");
  dog.reset();
  dog.userTurnCommitted(); advance(DEFAULTS.restartMs);
  assert.equal(calls.filter(call => call[0] === "restart").length, DEFAULTS.maxRestartsPerSession + 1, "a fresh session starts fresh");
});

test("while a guided interview runs (or there is no session) it does not watch", () => {
  const { dog, advance, calls, timers } = harness({ canWatch: () => false });
  dog.userTurnCommitted();
  advance(DEFAULTS.restartMs * 2);
  assert.deepEqual(calls, []);
  assert.equal(timers.size, 0);
});

test("a handler that throws never stops the next timer or breaks the call", () => {
  const { dog, advance, calls } = harness({ onNudge: () => { throw new Error("boom"); }, onRestart: detail => calls.push(["restart", detail]) });
  dog.userTurnCommitted();
  advance(DEFAULTS.restartMs);
  assert.deepEqual(calls.map(call => call[0]), ["restart"]);
});

// ---- the app's glue, run against the real source ----
const appSource = fs.readFileSync(path.join(__dirname, "..", "..", "public", "app.js"), "utf8");
function loadGlue({ intakeActive = false, active = true } = {}) {
  const start = appSource.indexOf("let kyroStallWatchdog = null;");
  const end = appSource.indexOf("function restartRealtimeVoiceAfterStall(");
  assert.ok(start > 0 && end > start, "glue present in app.js");
  const sent = []; const reports = []; const restarts = []; const logs = [];
  const sandbox = {
    window: { KyroStallWatchdog: { createStallWatchdog: options => createStallWatchdog({ ...options, now: () => Date.now() }) } },
    realtimeVoiceSession: { active, responseInProgress: false },
    kyroActiveVoiceIntake: intakeActive ? { engine: { phase: "asking" } } : null,
    sendKyroRealtimeEvent: event => { sent.push(event); return true; },
    reportKyroVoiceStall: (kind, detail) => reports.push([kind, detail]),
    restartRealtimeVoiceAfterStall: reason => restarts.push(reason),
    nexusGenesisVoiceDebugLog: (name, detail) => logs.push([name, detail]),
    setTimeout, clearTimeout, Date
  };
  vm.createContext(sandbox);
  vm.runInContext(appSource.slice(start, end) + "\nthis.observe = kyroStallWatchdogObserve; this.instance = kyroStallWatchdogInstance;", sandbox);
  return { observe: sandbox.observe, instance: sandbox.instance, sent, reports, restarts, session: sandbox.realtimeVoiceSession };
}

test("app glue: a finished turn with no reply sends the nudge, then restarts and reports", t => {
  t.mock.timers.enable({ apis: ["setTimeout", "Date"] });
  const glue = loadGlue();
  glue.observe("processing", "input-audio-committed");
  t.mock.timers.tick(DEFAULTS.nudgeMs);
  assert.equal(JSON.stringify(glue.sent), JSON.stringify([{ type: "response.create" }]));
  assert.equal(glue.restarts.length, 0);
  t.mock.timers.tick(DEFAULTS.restartMs - DEFAULTS.nudgeMs);
  assert.equal(JSON.stringify(glue.restarts), JSON.stringify(["no-response-watchdog"]));
  assert.equal(glue.reports[0][0], "no-response");
});

test("app glue: a reply, new speech, or an interruption in time means no nudge", t => {
  t.mock.timers.enable({ apis: ["setTimeout", "Date"] });
  for (const cancelling of [["responding", "response-created"], ["user-speaking", "second-user-speech-detected"], ["interrupted", "openai-agents-interruption"]]) {
    const glue = loadGlue();
    glue.observe("processing", "user-speech-stopped");
    t.mock.timers.tick(2000);
    glue.observe(...cancelling);
    t.mock.timers.tick(60000);
    assert.equal(glue.sent.length + glue.restarts.length, 0, cancelling.join(" "));
  }
});

test("app glue: no nudge while a response is already in progress, none during a guided interview, and a tool end re-arms the wait", t => {
  t.mock.timers.enable({ apis: ["setTimeout", "Date"] });
  const busy = loadGlue(); busy.session.responseInProgress = true;
  busy.observe("processing", "input-audio-committed"); t.mock.timers.tick(DEFAULTS.nudgeMs);
  assert.equal(busy.sent.length, 0);
  const interview = loadGlue({ intakeActive: true });
  interview.observe("processing", "input-audio-committed"); t.mock.timers.tick(DEFAULTS.restartMs * 2);
  assert.equal(interview.sent.length + interview.restarts.length, 0);
  const tool = loadGlue();
  tool.observe("processing", "openai-agents-tool-dispatch-started", { toolName: "nexus_weather" });
  t.mock.timers.tick(3000);
  tool.observe("responding", "openai-agents-tool-dispatch-completed", { toolName: "nexus_weather" });
  t.mock.timers.tick(DEFAULTS.nudgeMs);
  assert.equal(JSON.stringify(tool.sent), JSON.stringify([{ type: "response.create" }]), "the reply owed after the tool is watched");
  const stuck = loadGlue();
  stuck.observe("processing", "openai-agents-tool-dispatch-started", { toolName: "nexus_weather" });
  t.mock.timers.tick(DEFAULTS.toolMs);
  assert.equal(JSON.stringify(stuck.restarts), JSON.stringify(["tool-stuck-watchdog"]));
  assert.equal(stuck.reports[0][0], "tool-stuck");
});

test("the page loads the watchdog before the app, and the offline shell has it", () => {
  const html = fs.readFileSync(path.join(__dirname, "..", "..", "public", "index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "..", "..", "public", "sw.js"), "utf8");
  assert.ok(html.indexOf("/kyro-stall-watchdog.js") > 0 && html.indexOf("/kyro-stall-watchdog.js") < html.indexOf("/app.js?v="));
  assert.match(sw, /kyro-stall-watchdog\.js/);
  assert.match(appSource, /try \{ kyroStallWatchdogObserve\(state, eventType, extra\); \}/);
  assert.match(appSource, /options\.recovery !== true\) \{ try \{ kyroStallWatchdogInstance\(\)\?\.reset\(\)/);
});

// ---- the server: a deadline on every spoken tool call, and the stall report ----
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-voice-stall-test-db.json");
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let logText = ""; let cookie;

test.describe("server (real)", () => {
  test.before(async () => {
    fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
    server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_REALTIME_TOOL_DEADLINE_MS: "1" }, stdio: ["ignore", "pipe", "pipe"], windowsHide: true });
    server.stdout.on("data", chunk => { logText += chunk; }); server.stderr.on("data", chunk => { logText += chunk; });
    for (let i = 0; i < 80; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await wait(150); } }
    const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
    assert.equal(login.status, 200);
    cookie = login.headers.get("set-cookie").split(";")[0];
  });
  test.after(() => { server.kill(); if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath); });

  test("a spoken request that overruns the deadline gets a plain spoken fallback instead of silence", async () => {
    const res = await fetch(`${base}/api/voice/realtime/tool`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ name: "nexus_capability_router", correlationId: "deadline-1", arguments: { command: "What's the weather in Kisumu today?", language: "en" }, language: "en" }) });
    const body = await res.json();
    assert.equal(res.status, 200);
    assert.equal(body.status, "timed-out");
    assert.match(body.response, /taking longer than I expected/);
    assert.equal(body.executionAttempted, false);
    await wait(200);
    assert.match(logText, /\[voice-slow-tool\].*"timedOut":true/);
  });

  test("a stall report needs a signed-in person, keeps only short known fields, and is logged", async () => {
    const anonymous = await fetch(`${base}/api/voice/realtime/stall-report`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ kind: "no-response" }) });
    assert.equal(anonymous.status, 401);
    const res = await fetch(`${base}/api/voice/realtime/stall-report`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ kind: "no-response", build: "abc12345", controllerState: "processing", lastModelEvent: "input_audio_buffer.committed", waitedMs: 14000, nudges: 1, restarts: 1, tabVisible: "visible", secret: "should-not-be-kept", transcript: "my private words", userAgent: "x".repeat(500) }) });
    assert.equal(res.status, 200);
    await wait(200);
    const line = logText.split("\n").find(entry => entry.includes("[voice-stall]"));
    assert.ok(line, "the stall is in the server log");
    const logged = JSON.parse(line.slice(line.indexOf("{")));
    assert.equal(logged.kind, "no-response");
    assert.equal(logged.waitedMs, 14000);
    assert.equal(logged.lastModelEvent, "input_audio_buffer.committed");
    assert.equal(logged.userAgent.length, 160);
    assert.equal(JSON.stringify(logged).includes("should-not-be-kept"), false);
    assert.equal(JSON.stringify(logged).includes("my private words"), false);
    const unknown = await fetch(`${base}/api/voice/realtime/stall-report`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ kind: "<script>" }) });
    assert.equal(unknown.status, 200);
    assert.ok(logText.includes('"kind":"unknown"'), "an unknown kind is recorded as unknown, not as typed");
  });
});
