"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Seen live: the voice connection stalled ~2 minutes with no time limit, and every retry was ignored
// meanwhile because realtimeVoiceStarting stayed true. withRealtimeStartTimeout turns a stall into
// a rejection (which the startup catch block already turns into "unavailable -- retry").
const source = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const start = source.indexOf("const NEXUS_REALTIME_START_TIMEOUT_MS");
const end = source.indexOf("async function startOpenAiAgentsRealtimeVoiceSession");
assert.ok(start > 0 && end > start, "helper must exist in app.js");

function load() {
  const code = source.slice(start, end).replace(/NEXUS_REALTIME_START_TIMEOUT_MS = \d+/, "NEXUS_REALTIME_START_TIMEOUT_MS = 40");
  const sandbox = { setTimeout, clearTimeout, Promise };
  vm.createContext(sandbox);
  vm.runInContext(`${code}\nthis.withRealtimeStartTimeout = withRealtimeStartTimeout;`, sandbox);
  return sandbox.withRealtimeStartTimeout;
}

test("a fast startup resolves with its value", async () => {
  const withTimeout = load();
  assert.equal(await withTimeout(Promise.resolve("ok"), "Starting"), "ok");
});

test("a startup error passes through unchanged", async () => {
  const withTimeout = load();
  await assert.rejects(withTimeout(Promise.reject(new Error("boom")), "Starting"), /boom/);
});

test("a stalled startup rejects with a clear message instead of hanging", async () => {
  const withTimeout = load();
  await assert.rejects(withTimeout(new Promise(() => {}), "Connecting the voice stream"), /Connecting the voice stream took too long/);
});

test("a connection that completes AFTER the timeout is handed to onLateResolve so it can be closed", async () => {
  const withTimeout = load();
  let release;
  const slow = new Promise(resolve => { release = resolve; });
  const late = [];
  await assert.rejects(withTimeout(slow, "Connecting", value => late.push(value)), /took too long/);
  release({ id: "stale-controller" });
  await new Promise(resolve => setTimeout(resolve, 10));
  assert.equal(late.length, 1);
  assert.equal(late[0].id, "stale-controller");
});

test("a connection that completes in time is never passed to onLateResolve", async () => {
  const withTimeout = load();
  const late = [];
  await withTimeout(Promise.resolve("fine"), "Connecting", value => late.push(value));
  await new Promise(resolve => setTimeout(resolve, 80));
  assert.deepEqual(late, []);
});

test("both startup awaits in startOpenAiAgentsRealtimeVoiceSession are wrapped", () => {
  const body = source.slice(end, source.indexOf("\nasync function startRealtimeVoiceSession"));
  assert.match(body, /await withRealtimeStartTimeout\(\s*Promise\.all\(\[loadNexusOpenAiRealtimeAgentModule\(\), requestNexusOpenAiRealtimeSession/);
  assert.match(body, /controller = await withRealtimeStartTimeout\(module\.startNexusOpenAiRealtimeGenesisSession/);
});
