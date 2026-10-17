"use strict";
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");
const assert = require("node:assert/strict");

// "Everything failed" by voice, on the owner's own computer, while every request worked when typed: the page could not be watched from outside. The voice trace is an opt-in box on the page
// (open the site with ?voicetrace=1) that writes down what the voice heard, which part of the page took it, what the voice model said or called, and whether a screen came up. It never leaves the device.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const start = app.indexOf("const KYRO_TRACE_KEY");
const end = app.indexOf("kyroTraceInstall();\n", start) + "kyroTraceInstall();\n".length;
assert.ok(start > 0 && end > start);
const block = app.slice(start, end);

function fakeElement(tag) {
  return { tag, style: {}, children: [], listeners: {}, textContent: "", value: "", attrs: {},
    setAttribute(k, v) { this.attrs[k] = v; }, append(...kids) { this.children.push(...kids); }, addEventListener(type, fn) { this.listeners[type] = fn; }, remove() {}, select() {}, getBoundingClientRect() { return { width: 10, height: 10 }; }, scrollTop: 0, scrollHeight: 0 };
}
function load({ search = "?voicetrace=1", stored = {}, user = { name: "Standard User", role: "Standard User" }, overrides = {} } = {}) {
  const calls = []; const clipboard = []; const store = { ...stored };
  const body = fakeElement("body"); body.classList = { contains: () => false };
  const sandbox = {
    location: { search, pathname: "/" }, sessionStorage: { getItem: k => (k in store ? store[k] : null), setItem: (k, v) => { store[k] = String(v); }, removeItem: k => { delete store[k]; } },
    URLSearchParams, JSON, Date, String, Array, Object, Promise, Error, setTimeout: fn => { calls.push(["timer"]); sandbox.timers.push(fn); return 1; }, timers: [],
    document: { createElement: fakeElement, body, querySelectorAll: () => [], querySelector: () => null },
    navigator: { clipboard: { writeText: async text => { clipboard.push(text); } } },
    data: { user }, calls, clipboard, store, console
  };
  sandbox.window = sandbox;
  sandbox.fetch = async () => ({ status: 200, json: async () => ({ release: "abcdef1234567890" }) });
  // the page's own functions, as plain stand-ins
  sandbox.handleOpenAiAgentsRealtimeEvent = (name, payload) => { calls.push(["event", name]); return undefined; };
  sandbox.routeKyroVoiceIntakeTranscript = args => { calls.push(["route", args.transcript]); return args.transcript === "Open documents"; };
  sandbox.kyroHandleSpokenOpen = text => text === "Open documents";
  sandbox.handleNexusUnifiedBrainRuntimeCommand = async text => { calls.push(["typed", text]); return true; };
  sandbox.callNexusOpenAiRealtimeTool = async () => ({ ok: true, response: "done" });
  sandbox.kyroNoteSessionEnded = () => false;
  Object.assign(sandbox, overrides);
  vm.createContext(sandbox);
  vm.runInContext(block, sandbox);
  vm.runInContext("this.api = { kyroTrace, kyroTraceOn, kyroTraceEventText, lines: () => kyroTraceLines };", sandbox);
  return sandbox;
}

test("without ?voicetrace=1 nothing is wrapped, drawn or recorded", () => {
  const page = load({ search: "" });
  assert.equal(page.api.kyroTraceOn(), false);
  assert.equal(page.api.lines().length, 0);
  assert.equal(page.routeKyroVoiceIntakeTranscript.__kyroTraced, undefined);
  assert.equal(page.document.body.children.length, 0, "no box on the page");
  assert.equal(page.fetch.__kyroTraced, undefined);
});

test("with ?voicetrace=1 the words heard, the page's decision, the model's tool call and a screen check are written down, and the page behaves exactly as before", async () => {
  const page = load();
  assert.equal(page.store.kyroVoiceTrace, "1", "remembered for the rest of this tab");
  assert.equal(page.routeKyroVoiceIntakeTranscript({ transcript: "Open documents", source: "realtime-transport" }), true, "the real answer is passed through");
  assert.equal(page.routeKyroVoiceIntakeTranscript({ transcript: "Open the map", source: "realtime-transport" }), false);
  await page.handleNexusUnifiedBrainRuntimeCommand("Show my saved documents");
  assert.deepEqual(await page.callNexusOpenAiRealtimeTool({ name: "nexus_everyday_records", arguments: { command: "x" } }), { ok: true, response: "done" });
  page.handleOpenAiAgentsRealtimeEvent("transport_event", { type: "conversation.item.input_audio_transcription.completed", transcript: "Open documents." });
  page.handleOpenAiAgentsRealtimeEvent("transport_event", { type: "response.output_audio_transcript.done", transcript: "I can't open documents from here." });
  page.handleOpenAiAgentsRealtimeEvent("transport_event", { type: "response.output_audio.delta", delta: "AAAA" });
  page.handleOpenAiAgentsRealtimeEvent("transport_event", { type: "input_audio_buffer.speech_started" });
  page.handleOpenAiAgentsRealtimeEvent("transport_event", { type: "input_audio_buffer.speech_stopped" });
  page.handleOpenAiAgentsRealtimeEvent("transport_event", { type: "conversation.item.input_audio_transcription.failed", error: { message: "model not available" } });
  await new Promise(resolve => setImmediate(resolve));
  const text = page.api.lines().join("\n");
  assert.match(text, /HEARD 'Open documents' via realtime-transport as Standard User \/ Standard User/);
  assert.match(text, /routeKyroVoiceIntakeTranscript finished: true/); assert.match(text, /routeKyroVoiceIntakeTranscript finished: false/);
  assert.match(text, /handleNexusUnifiedBrainRuntimeCommand: Show my saved documents/);
  assert.match(text, /MODEL CALLED TOOL nexus_everyday_records/);
  assert.match(text, /conversation\.item\.input_audio_transcription\.completed Open documents\./);
  assert.match(text, /response\.output_audio_transcript\.done I can't open documents from here\./, "what the model said is written down");
  assert.match(text, /input_audio_transcription\.failed model not available/, "a failed transcription is written down");
  assert.doesNotMatch(text, /output_audio\.delta/, "the noisy audio events are left out");
  assert.match(text, /input_audio_buffer\.speech_started/, "when speech was heard is written down"); assert.match(text, /input_audio_buffer\.speech_stopped/);
  assert.equal(page.timers.length, 2, "a screen check is set for each thing heard");
  page.timers[0]();
  assert.match(page.api.lines().join("\n"), /SCREEN 4s after 'Open documents': \{"screens":\[\],"intake":false,"workspace":false,"map":false\}/);
  assert.ok(page.document.body.children.length === 1, "one box on the page");
});

test("a failure in the page's own function still reaches its caller, and a failure in the trace never reaches the page", async () => {
  const page = load({ overrides: { callNexusOpenAiRealtimeTool: async () => { throw new Error("tool down"); }, kyroHandleSpokenOpen: () => { throw new Error("boom"); } } });
  await assert.rejects(() => page.callNexusOpenAiRealtimeTool({ name: "x" }), /tool down/);
  assert.throws(() => page.kyroHandleSpokenOpen("Open documents"), /boom/);
  await new Promise(resolve => setImmediate(resolve));
  assert.match(page.api.lines().join(" | "), /callNexusOpenAiRealtimeTool FAILED: tool down/, "the failure is written down too");
  const broken = load();
  broken.document.body.append = () => { throw new Error("no box"); };
  assert.doesNotThrow(() => broken.api.kyroTrace("x", "still fine"));
});

test("the Copy button copies every line, and ?voicetrace=0 turns it off", async () => {
  const page = load();
  page.api.kyroTrace("one", "a"); page.api.kyroTrace("two", "b");
  const box = page.document.body.children[0];
  const row = box.children[1];
  const copy = row.children[0];
  await copy.listeners.click();
  assert.equal(page.clipboard.length, 1);
  assert.match(page.clipboard[0], /one: a\n.*two: b/);
  const off = load({ search: "?voicetrace=0", stored: { kyroVoiceTrace: "1" } });
  assert.equal(off.api.kyroTraceOn(), false);
  assert.equal(off.store.kyroVoiceTrace, undefined);
  const remembered = load({ search: "", stored: { kyroVoiceTrace: "1" } });
  assert.equal(remembered.api.kyroTraceOn(), true, "stays on for the rest of the tab after the first ?voicetrace=1");
});

test("nothing is sent anywhere by the trace (the only request is the existing health check for the release)", () => {
  assert.doesNotMatch(block, /method:\s*["']POST["']|sendBeacon|XMLHttpRequest/);
  assert.equal((block.match(/fetch\(/g) || []).length, 1);
  assert.match(block, /fetch\("\/api\/healthz", \{ cache: "no-store" \}\)/);
});
