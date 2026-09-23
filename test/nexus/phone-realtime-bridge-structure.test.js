"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

// Structural checks for the real-time two-way phone bridge (Twilio Media
// Streams <-> OpenAI Realtime over a raw WebSocket). Unlike the token tests
// in phone-realtime-stream-token.test.js, several pieces here (the
// OpenAIRealtimeWebSocket transport, an actual WebSocket upgrade, a real
// phone call) cannot be exercised without a live call against a deployed
// instance -- see the "not yet available" honesty note in the Kyro
// capability index. These tests instead pin down, in source, the safety
// properties that matter most: the feature is off by default, authorization
// happens before any account identity is granted, the API key never leaves
// the server, and turning the feature off does not disturb the existing,
// already-hardened turn-based phone flow.
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

test("the /incoming route only takes the real-time branch when phoneRealtimeStreamingEnabled() is true", () => {
  const routeStart = source.indexOf('url.pathname === "/api/voice/phone/incoming" && req.method === "POST"');
  assert.notEqual(routeStart, -1);
  const branchStart = source.indexOf("if (phoneRealtimeStreamingEnabled(process.env)) {", routeStart);
  assert.notEqual(branchStart, -1, "the opt-in real-time branch must exist inside the /incoming route");
  const classicFlowIndex = source.indexOf('updatePhoneVoiceSession(db, session, { step: "name"', routeStart);
  assert.notEqual(classicFlowIndex, -1, "the existing turn-based flow must remain in place, unmodified");
  assert.ok(branchStart < classicFlowIndex, "the real-time check must run before falling into the classic Gather flow");
});

test("the real-time branch re-checks caller authorization independently before minting a stream token", () => {
  const branchStart = source.indexOf("if (phoneRealtimeStreamingEnabled(process.env)) {");
  const branchEnd = source.indexOf("const session = getPhoneVoiceSession(db, phoneSessionKey(body,", branchStart);
  const branch = source.slice(branchStart, branchEnd);
  assert.match(branch, /const authorizedCaller = resolveAuthorizedPhoneCaller\(db, body\);/);
  const tokenCallIndex = branch.indexOf("issuePhoneRealtimeStreamToken(");
  const authCallIndex = branch.indexOf("resolveAuthorizedPhoneCaller(db, body)");
  assert.ok(authCallIndex !== -1 && tokenCallIndex !== -1 && authCallIndex < tokenCallIndex,
    "authorization must be resolved before a stream token is ever issued");
});

test("the WebSocket upgrade handler rejects everything except the exact stream path, and rejects it outright when the feature is off", () => {
  const upgradeStart = source.indexOf('server.on("upgrade",');
  assert.notEqual(upgradeStart, -1, "an upgrade handler must be registered on the http server");
  const upgradeEnd = source.indexOf("server.listen(", upgradeStart);
  const upgradeBody = source.slice(upgradeStart, upgradeEnd);
  assert.match(upgradeBody, /url\.pathname !== "\/api\/voice\/phone\/stream" \|\| !phoneRealtimeStreamingEnabled\(process\.env\)/);
  assert.match(upgradeBody, /socket\.destroy\(\)/);
});

test("no HTTP webhook signature is trusted for the WebSocket handshake -- real auth happens per-connection against the signed start-message token", () => {
  const handlerBody = sliceFunction("handleTwilioPhoneRealtimeStream");
  assert.match(handlerBody, /verifyPhoneRealtimeStreamToken\(params\.token, callSid, Date\.now\(\), process\.env\)/);
  const verifyIndex = handlerBody.indexOf("verifyPhoneRealtimeStreamToken(");
  const userLookupIndex = handlerBody.indexOf("db.users.find(item => String(item.id) === String(claim.userId))");
  assert.ok(verifyIndex !== -1 && userLookupIndex !== -1 && verifyIndex < userLookupIndex,
    "the signed token must be verified before any user record is resolved from it");
});

test("a missing or invalid token, or an unknown user, tears the connection down instead of falling back to a default identity", () => {
  const handlerBody = sliceFunction("handleTwilioPhoneRealtimeStream");
  assert.match(handlerBody, /if \(!claim\) return cleanup\("unauthorized-stream-token"\);/);
  assert.match(handlerBody, /if \(!user\) return cleanup\("unknown-user"\);/);
});

test("the real OpenAI API key is used directly server-side via useInsecureApiKey, and is never part of anything sent to Twilio or the caller", () => {
  const handlerBody = sliceFunction("handleTwilioPhoneRealtimeStream");
  assert.match(handlerBody, /useInsecureApiKey: true/, "a raw server-to-server key requires this flag on OpenAIRealtimeWebSocket");
  assert.match(handlerBody, /apiKey: process\.env\.OPENAI_API_KEY/);
  const wsSendCalls = handlerBody.match(/ws\.send\([^)]*\)/g) || [];
  for (const call of wsSendCalls) assert.doesNotMatch(call, /OPENAI_API_KEY|apiKey/i);
});

test("the phone bridge negotiates 8kHz mu-law (audio/pcmu) in both directions, matching what Twilio actually sends and expects", () => {
  const configBody = sliceFunction("phoneRealtimeWebSocketSessionConfig");
  assert.match(configBody, /const pcmu = \{ type: "audio\/pcmu" \};/);
  assert.match(configBody, /input: \{ \.\.\.clientConfig\.audio\.input, format: pcmu \}/);
  assert.match(configBody, /output: \{ \.\.\.clientConfig\.audio\.output, format: pcmu \}/);
});

test("the call's tool calls are dispatched through the same real native tool executor the browser voice path uses, not a stub", () => {
  const eventsBody = sliceFunction("wirePhoneRealtimeTransportEvents");
  assert.match(eventsBody, /executeNexusOpenAiNativeTool\(db, user, event\.name, args, \{/);
  assert.match(eventsBody, /await writeDb\(db\);/, "tool side effects must be persisted, not discarded after execution");
});

test("a VAD-detected interruption clears Twilio's buffered playback (barge-in), it does not just stop sending new audio", () => {
  const eventsBody = sliceFunction("wirePhoneRealtimeTransportEvents");
  assert.match(eventsBody, /transport\.on\("audio_interrupted", \(\) => \{/);
  const interruptedHandler = eventsBody.slice(eventsBody.indexOf('transport.on("audio_interrupted"'));
  assert.match(interruptedHandler.slice(0, 300), /event: "clear", streamSid/);
});

test("a call is force-capped at a clamped duration so a stuck or forgotten call cannot bill indefinitely", () => {
  const constIndex = source.indexOf("const PHONE_REALTIME_MAX_CALL_SECONDS = Math.min(Math.max(Number(process.env.PHONE_REALTIME_MAX_CALL_SECONDS || 600), 60), 1800);");
  assert.notEqual(constIndex, -1, "PHONE_REALTIME_MAX_CALL_SECONDS must be clamped to a sane range regardless of env input");
  const handlerBody = sliceFunction("handleTwilioPhoneRealtimeStream");
  assert.match(handlerBody, /capTimer = setTimeout\(\(\) => \{/);
  assert.match(handlerBody, /goodbyeTimer = setTimeout\(\(\) => cleanup\("max-duration-reached"\), 6000\);/);
});

// 2026-09-23: a real gap was found and closed here -- the crisis/mental-
// health safety net (executeNexusOpenAiNativeTool's classifyState/
// crisisOverride check) only ran on this bridge if the model chose to call a
// tool via the function_call listener above. A caller stating suicidal
// intent who got a purely conversational reply never reached any safety
// check at all. These tests pin the fix: a second, independent listener on
// the Realtime API's own caller-transcript event, which fires regardless of
// whether the model calls a tool.
test("crisis detection on this bridge does not depend on the model choosing to call a tool -- a second, independent listener classifies every caller transcript", () => {
  const eventsBody = sliceFunction("wirePhoneRealtimeTransportEvents");
  assert.match(eventsBody, /transport\.on\("conversation\.item\.input_audio_transcription\.completed", event => \{/,
    "must listen to the Realtime API's own transcript-completed event, not rely on function_call");
  const listenerStart = eventsBody.indexOf('transport.on("conversation.item.input_audio_transcription.completed"');
  const functionCallStart = eventsBody.indexOf('transport.on("function_call"');
  assert.ok(listenerStart > 0 && functionCallStart > 0 && listenerStart > functionCallStart,
    "the transcript-based crisis listener must be registered independently of the function_call listener");
});

test("the transcript-based crisis listener uses the same classifyState/buildSupportPacket module as every other Kyro entry point, not a separate ad hoc check", () => {
  const eventsBody = sliceFunction("wirePhoneRealtimeTransportEvents");
  const listenerStart = eventsBody.indexOf('transport.on("conversation.item.input_audio_transcription.completed"');
  const listener = eventsBody.slice(listenerStart, listenerStart + 1800);
  assert.match(listener, /nexusMentalHealthBehavioralWellness\.classifyState\(transcript, \{\}\)/);
  assert.match(listener, /if \(signal\?\.crisisOverride !== true\) return;/, "must gate on crisisOverride, matching every other call site in this codebase");
  assert.match(listener, /nexusMentalHealthBehavioralWellness\.buildSupportPacket\(transcript, \{/);
});

test("on a detected crisis, the bridge interrupts whatever the model is currently saying before forcing the safety response", () => {
  const eventsBody = sliceFunction("wirePhoneRealtimeTransportEvents");
  const listenerStart = eventsBody.indexOf('transport.on("conversation.item.input_audio_transcription.completed"');
  const listener = eventsBody.slice(listenerStart, listenerStart + 1800);
  const interruptIndex = listener.indexOf("transport.interrupt(true)");
  const deliverIndex = listener.indexOf('type: "response.create"');
  assert.ok(interruptIndex > 0 && deliverIndex > 0 && interruptIndex < deliverIndex,
    "must stop any in-progress speech before injecting the safety override, not talk over it");
});

test("the safety script is delivered via a per-response instructions override (stronger adherence than a normal conversational turn), and it carries the real packet text, not a placeholder", () => {
  const eventsBody = sliceFunction("wirePhoneRealtimeTransportEvents");
  const listenerStart = eventsBody.indexOf('transport.on("conversation.item.input_audio_transcription.completed"');
  const listener = eventsBody.slice(listenerStart, listenerStart + 1800);
  assert.match(listener, /transport\.sendEvent\(\{\s*type: "response\.create",/);
  assert.match(listener, /instructions: `SAFETY OVERRIDE/);
  assert.match(listener, /\$\{packet\.userVisibleStatus\}/);
});

test("every step of the crisis listener (classify, build packet, deliver) is wrapped so a failure there cannot crash the live call", () => {
  const eventsBody = sliceFunction("wirePhoneRealtimeTransportEvents");
  const listenerStart = eventsBody.indexOf('transport.on("conversation.item.input_audio_transcription.completed"');
  const listener = eventsBody.slice(listenerStart, listenerStart + 1800);
  const tryCount = (listener.match(/try \{/g) || []).length;
  assert.ok(tryCount >= 3, `expected classify/packet/deliver to each be wrapped in their own try block, found ${tryCount}`);
});

test("every connection path (unauthorized, unknown user, connect failure, caller hangup, ws close/error) tears down cleanly via the same cleanup path", () => {
  const handlerBody = sliceFunction("handleTwilioPhoneRealtimeStream");
  const cleanupCalls = handlerBody.match(/cleanup\("[a-z0-9-]+"\)/g) || [];
  const reasons = new Set(cleanupCalls.map(call => call.match(/cleanup\("([a-z0-9-]+)"\)/)[1]));
  for (const expected of ["unauthorized-stream-token", "unknown-user", "connect-failed", "caller-hung-up", "websocket-closed", "websocket-error", "max-duration-reached"]) {
    assert.ok(reasons.has(expected), `expected a cleanup("${expected}") call`);
  }
});
