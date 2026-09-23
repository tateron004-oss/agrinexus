"use strict";
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");
const assert = require("node:assert/strict");

// 2026-09-23: the user compared Kyro's real-time voice to ChatGPT's Advanced
// Voice Mode and noticed the difference is exactly what happens during a
// tool lookup -- ChatGPT never leaves you in silence while it searches,
// Kyro's realtime instructions previously had no such guidance at all, so a
// slow tool (weather, maps, marketplace, live knowledge -- all real network
// calls, see openAiRealtimeInstructions' own tool-routing lines) could leave
// a genuinely dead gap. This is a system-prompt fix, not new orchestration
// code: it relies on the Realtime API's own ability to speak a short
// acknowledgment in the same turn it decides to call a function.
const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

function sliceFunction(name) {
  const start = source.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate function ${name} in server.js`);
  const candidates = ["\nfunction ", "\nconst ", "\nasync function "]
    .map(marker => source.indexOf(marker, start + 10))
    .filter(index => index > start);
  const end = Math.min(...candidates);
  assert.ok(Number.isFinite(end) && end > start, `could not find the end of ${name} in server.js`);
  return source.slice(start, end);
}

const box = { process: { env: {} } };
vm.createContext(box);
vm.runInContext(sliceFunction("openAiRealtimeInstructions"), box);
const instructions = box.openAiRealtimeInstructions({ displayName: "Test User" }, "en");

test("the realtime voice model is told to speak a brief acknowledgment before a real lookup, so it is never silent mid-tool-call", () => {
  assert.match(instructions, /before calling a tool that looks something up or checks real data/i);
  assert.match(instructions, /so the user is never left in silence while you retrieve it/i);
  assert.match(instructions, /let me check that/i);
});

test("the guidance names concrete example phrases and applies broadly across the actual slow, real-network tools this session already routes to", () => {
  assert.match(instructions, /weather, maps, marketplace, live knowledge, visual search, health or business records/i);
  assert.match(instructions, /one moment/i);
  assert.match(instructions, /give me a second to look that up/i);
});

test("near-instant actions are explicitly exempted, so Kyro does not add pointless chatter before a simple confirmation or save", () => {
  assert.match(instructions, /skip this for near-instant actions like confirmations, simple saves/i);
});

test("this fix lives in the ONE shared instruction set both the browser and phone realtime sessions use, not a browser-only or phone-only copy", () => {
  const sessionConfigBody = sliceFunction("openAiRealtimeSessionConfig");
  assert.match(sessionConfigBody, /instructions: openAiRealtimeInstructions\(user, language\)/);
  const phoneConfigBody = sliceFunction("phoneRealtimeWebSocketSessionConfig");
  assert.match(phoneConfigBody, /const clientConfig = openAiAgentsRealtimeClientConfig\(user, language, env\);/);
  const clientConfigBody = sliceFunction("openAiAgentsRealtimeClientConfig");
  assert.match(clientConfigBody, /instructions: session\.instructions/, "the phone path must derive from the same session config, not a separate instruction set");
});
