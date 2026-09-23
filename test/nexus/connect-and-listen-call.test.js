"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const twilioProvider = require("../../server/providers/twilioProvider.js");

// "Kyro, connect me to X and listen" (2026-09-23): a materially different,
// LEGALLY SENSITIVE shape of the connect-call feature from tonight -- Kyro
// transcribes the call so a follow-up can use what was discussed, without
// the user repeating themselves. Most US states and many countries require
// ALL parties on a call to consent before it is recorded/transcribed, not
// just the person who asked Kyro to do it. These tests exist specifically
// to pin down that the spoken consent disclosure to the THIRD PARTY is
// always present and always comes before they join the bridge -- that is
// what makes this feature lawful, not an implementation detail.
//
// What these tests do NOT and cannot cover: a real live phone call, a real
// Twilio conference recording, and a real OpenAI transcription of real
// audio. Those need one real live test call against a deployed instance,
// same honesty as PR #572's realtime bridge.

const env = { TWILIO_ACCOUNT_SID: "AC123", TWILIO_AUTH_TOKEN: "token", TWILIO_FROM_NUMBER: "+15550009999", NEXUS_CALLS_ENABLED: "true", PUBLIC_BASE_URL: "https://example.onrender.com" };
const reply = payload => ({ ok: true, status: 200, text: async () => JSON.stringify(payload) });
async function withFetch(impl, run) {
  const original = global.fetch;
  const requests = [];
  global.fetch = async (url, options = {}) => {
    requests.push({ url: String(url), method: options.method || "GET", body: String(options.body || "") });
    return impl(String(url), options);
  };
  try { return await run(requests); } finally { global.fetch = original; }
}
function decodedBody(request) {
  return decodeURIComponent(request.body.replace(/\+/g, " "));
}

test("connecting and listening requires explicit confirmation, exactly like every other real send/call", async () => {
  const result = await twilioProvider.startConnectAndListenCall({ userPhone: "+15105019401", targetPhone: "+15559990000", userId: "u1" }, env);
  assert.equal(result.body.status, "confirmation_required");
});

test("requires a real account (userId) to hold context against -- otherwise there is nowhere lawful to put the transcript afterward", async () => {
  const result = await twilioProvider.startConnectAndListenCall({ userPhone: "+15105019401", targetPhone: "+15559990000", confirmed: true }, env);
  assert.equal(result.body.status, "blocked");
});

test("the third party's leg ALWAYS hears the real consent disclosure before joining the conference, and it is the FIRST thing said", async () => {
  await withFetch((url, options) => options.method === "POST" ? reply({ sid: "CA1", status: "queued" }) : reply({ sid: "CA1", status: "ringing" }), async requests => {
    await twilioProvider.startConnectAndListenCall({ userPhone: "+15105019401", targetPhone: "+15559990000", targetName: "the supplier", userId: "u1", confirmed: true }, env);
    const targetCallBody = decodedBody(requests[1]);
    assert.match(targetCallBody, /^To=\+15559990000&From=\+15550009999&Twiml=<Response><Say voice="alice">This call may be recorded and transcribed by an AI assistant to help the caller with a follow-up task\.<\/Say>/);
  });
});

test("the user's own leg is told the call may be recorded too, and is dialed BEFORE the target so recording starts from the conference's first participant", async () => {
  await withFetch((url, options) => options.method === "POST" ? reply({ sid: "CA1", status: "queued" }) : reply({ sid: "CA1", status: "ringing" }), async requests => {
    await twilioProvider.startConnectAndListenCall({ userPhone: "+15105019401", targetPhone: "+15559990000", targetName: "the supplier", userId: "u1", confirmed: true }, env);
    assert.equal(requests.length, 2, "exactly two real outbound legs must be placed");
    const userCallBody = decodedBody(requests[0]);
    assert.match(userCallBody, /^To=\+15105019401&From=\+15550009999/, "the owner's own phone must be dialed first");
    assert.match(userCallBody, /this call may be recorded and transcribed/i);
  });
});

test("both legs join the exact same real conference name, with recording enabled on both", async () => {
  await withFetch((url, options) => options.method === "POST" ? reply({ sid: "CA1", status: "queued" }) : reply({ sid: "CA1", status: "ringing" }), async requests => {
    await twilioProvider.startConnectAndListenCall({ userPhone: "+15105019401", targetPhone: "+15559990000", userId: "u1", confirmed: true }, env);
    const userBody = decodedBody(requests[0]);
    const targetBody = decodedBody(requests[1]);
    const userConf = userBody.match(/<Conference[^>]*>([^<]+)<\/Conference>/)[1];
    const targetConf = targetBody.match(/<Conference[^>]*>([^<]+)<\/Conference>/)[1];
    assert.equal(userConf, targetConf, "both legs must join the identical conference");
    assert.match(userBody, /record="record-from-start"/);
    assert.match(targetBody, /record="record-from-start"/);
    assert.match(userBody, /recordingStatusCallback="https:\/\/example\.onrender\.com\/api\/voice\/phone\/listen-recording\?/);
  });
});

test("only the user's leg ends the conference when they hang up; the target's leg does not tear down the call by itself", () => {
  // Structural, not behavioral -- endConferenceOnExit must differ between
  // the two legs so a target hanging up early does not kill the user's
  // call, but the user hanging up does end it for both.
  const source = fs.readFileSync(path.join(__dirname, "../../server/providers/twilioProvider.js"), "utf8");
  const start = source.indexOf("async function startConnectAndListenCall");
  const end = source.indexOf("\nmodule.exports", start);
  const body = source.slice(start, end);
  assert.match(body, /endConferenceOnExit="true">\$\{xmlEscape\(conferenceName\)\}/, "the user's own leg must end the conference on exit");
  assert.match(body, /endConferenceOnExit="false">\$\{xmlEscape\(conferenceName\)\}/, "the target's leg must not end the conference on exit");
});

test("Twilio recording/config errors are surfaced truthfully, not silently swallowed", async () => {
  await withFetch(() => reply({ message: "Twilio rejected the request" }), async () => {
    global.fetch = async () => ({ ok: false, status: 400, text: async () => JSON.stringify({ message: "invalid number" }) });
    const result = await twilioProvider.startConnectAndListenCall({ userPhone: "+15105019401", targetPhone: "+15559990000", userId: "u1", confirmed: true }, env);
    assert.equal(result.body.ok, false);
  });
});

test("with calling disabled, no real call is placed", async () => {
  await withFetch(() => { throw new Error("must not call Twilio"); }, async () => {
    const disabled = await twilioProvider.startConnectAndListenCall({ userPhone: "+15105019401", targetPhone: "+15559990000", userId: "u1", confirmed: true }, { ...env, NEXUS_CALLS_ENABLED: "false" });
    assert.equal(disabled.body.status, "disabled");
  });
});

test("missing PUBLIC_BASE_URL (needed to build the recording callback URL) is refused with a real missing-config response when simulation is off", async () => {
  const noBase = await twilioProvider.startConnectAndListenCall(
    { userPhone: "+15105019401", targetPhone: "+15559990000", userId: "u1", confirmed: true },
    { ...env, PUBLIC_BASE_URL: "", NEXUS_SIMULATE_DOMAIN_PROVIDERS: "false" }
  );
  assert.equal(noBase.body.status, "missing_config");
});

test("missing PUBLIC_BASE_URL with simulation on (the default) falls back to a clearly-labeled simulated response, not a real call with a broken callback URL", async () => {
  const result = await twilioProvider.startConnectAndListenCall(
    { userPhone: "+15105019401", targetPhone: "+15559990000", userId: "u1", confirmed: true },
    { ...env, PUBLIC_BASE_URL: "" }
  );
  assert.equal(result.body.data?.simulated, true);
});

// Structural: routing, webhook signature validation, and the follow-up
// context-injection wiring in server.js.
const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

test("only explicit 'and listen'/'take notes' phrasing (or an explicit mode) routes through the recorded/transcribed path -- plain 'connect me' must never be silently upgraded into a recorded call", () => {
  const start = source.indexOf("const wantsListenAndRemember = wantsConnectCall");
  assert.ok(start > 0, "could not find the wantsListenAndRemember routing line");
  const line = source.slice(start, source.indexOf(";", start) + 1);
  assert.match(line, /and listen/);
  assert.match(line, /take notes/);
  assert.match(line, /connect_and_listen/);
  const plainConnectStart = source.indexOf("const wantsConnectCall = channel");
  assert.ok(plainConnectStart !== -1 && start > plainConnectStart, "the listen check must depend on wantsConnectCall already being true");
});

test("connect-and-listen requires an explicit opt-in flag, not just the trigger phrase -- the highest legal stakes of any telephony feature built tonight", () => {
  const start = source.indexOf("const wantsListenAndRemember = wantsConnectCall");
  const line = source.slice(start, source.indexOf(";", start) + 1);
  assert.match(line, /nexusFlagEnabled\(process\.env, "PHONE_LISTEN_AND_REMEMBER_ENABLED"\)/);
});

test("the listen-and-remember branch is checked before the plain connect branch, so it is never shadowed by the feature built earlier tonight", () => {
  const listenBranchIndex = source.indexOf('channel === "call" && wantsListenAndRemember');
  const plainConnectBranchIndex = source.indexOf('channel === "call" && wantsConnectCall');
  assert.ok(listenBranchIndex > 0 && plainConnectBranchIndex > listenBranchIndex);
});

test("the recording webhook validates the real Twilio signature before doing anything else", () => {
  const start = source.indexOf('if (url.pathname === "/api/voice/phone/listen-recording" && req.method === "POST")');
  assert.ok(start > 0, "listen-recording route not found");
  const body = source.slice(start, start + 400);
  assert.match(body, /validTwilioWebhookSignature\(req, url, body\)/);
});

test("the recorded call's transcript is stored with a real, short expiry and scoped to the specific account it belongs to -- never a standing, unscoped call log", () => {
  const start = source.indexOf('if (url.pathname === "/api/voice/phone/listen-recording"');
  const end = source.indexOf('if (url.pathname === "/api/voice/phone/gather"', start);
  const body = source.slice(start, end);
  assert.match(body, /expiresAt: new Date\(capturedAt \+ 60 \* 60_000\)\.toISOString\(\)/, "must expire (here, one hour), not persist indefinitely");
  assert.match(body, /forUserId: owner\.id/, "must be scoped to a specific real account");
});

test("a follow-up command only ever sees another user's or an expired call's context as null, never leaked across accounts or past its window", () => {
  const start = source.indexOf("const liveCallContext = db.profile?.lastCallContext;");
  assert.ok(start > 0);
  const body = source.slice(start, start + 500);
  assert.match(body, /liveCallContext\.forUserId === user\.id/, "must check ownership");
  assert.match(body, /new Date\(liveCallContext\.expiresAt\)\.getTime\(\) > Date\.now\(\)/, "must check expiry");
});

test("the model is told about the new listen phrasing and how to use recentCallContext, in both the text and realtime-voice instruction sets", () => {
  const occurrences = source.split("connect_and_listen").length - 1;
  assert.ok(occurrences >= 3, `expected "connect_and_listen" in both instruction prompts plus the routing code, found ${occurrences} mentions`);
  assert.match(source, /If recentCallContext is present in this turn/);
});
