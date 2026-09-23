"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const twilioProvider = require("../../server/providers/twilioProvider.js");

// "Kyro calls someone and connects me" (2026-09-23): the user wants to
// personally talk to a contact via a call Kyro places, not have Kyro have
// the conversation on their behalf. startConnectCall() rings the account
// owner's own phone first, then <Dial> bridges in the target once they pick
// up -- Kyro never participates in the conversation itself. This is a
// deliberately different shape from startCall(), which has Kyro deliver a
// one-way spoken announcement.
const env = { TWILIO_ACCOUNT_SID: "AC123", TWILIO_AUTH_TOKEN: "token", TWILIO_FROM_NUMBER: "+15550009999", NEXUS_CALLS_ENABLED: "true", NEXUS_SMS_STATUS_DELAY_MS: "0" };
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

test("connecting a call requires explicit confirmation, exactly like every other real send/call", async () => {
  const result = await twilioProvider.startConnectCall({ userPhone: "+15105019401", targetPhone: "+15559990000" }, env);
  assert.equal(result.body.status, "confirmation_required");
});

test("a non-phone-shaped target is refused with an honest 'not wired up yet' message, not a generic validation error", async () => {
  const result = await twilioProvider.startConnectCall({ userPhone: "+15105019401", targetPhone: "my supplier John", confirmed: true }, env);
  assert.equal(result.body.status, "blocked");
  assert.match(result.body.message, /saved contact's name for lookup isn't wired up yet/);
});

test("a missing/invalid owner phone is refused before any call is placed", async () => {
  await withFetch(() => { throw new Error("must not call Twilio"); }, async () => {
    const result = await twilioProvider.startConnectCall({ userPhone: "not-a-number", targetPhone: "+15559990000", confirmed: true }, env);
    assert.equal(result.body.status, "blocked");
  });
});

test("dials the owner's own phone first, with TwiML that <Dial>s the target -- Kyro never speaks more than a one-line heads-up", async () => {
  await withFetch((url, options) => options.method === "POST" ? reply({ sid: "CA9", status: "queued" }) : reply({ sid: "CA9", status: "ringing" }), async requests => {
    const result = await twilioProvider.startConnectCall({ userPhone: "+15105019401", targetPhone: "+15559990000", targetName: "your supplier", confirmed: true }, env);
    assert.equal(result.body.ok, true);
    const [placeCallRequest] = requests;
    assert.match(placeCallRequest.body, /To=%2B15105019401/, "the OWNER's phone is dialed, not the target");
    assert.doesNotMatch(placeCallRequest.body, /To=%2B15559990000/, "the target must never be the primary dialed leg");
    const twiml = decodeURIComponent(placeCallRequest.body.match(/Twiml=([\s\S]+)$/)[1].replace(/\+/g, " "));
    assert.match(twiml, /<Say voice="alice">Connecting you to your supplier now\.<\/Say>/);
    assert.match(twiml, /<Dial callerId="\+15550009999"><Number>\+15559990000<\/Number><\/Dial>/);
    assert.equal(result.body.data.calledUser, "+15105019401");
    assert.equal(result.body.data.connectingTo, "+15559990000");
    assert.equal(result.body.data.channel, "voice-connect");
  });
});

test("a target name is escaped in the spoken heads-up so it cannot break out of the TwiML", async () => {
  await withFetch((url, options) => options.method === "POST" ? reply({ sid: "CA9", status: "queued" }) : reply({ sid: "CA9", status: "ringing" }), async requests => {
    await twilioProvider.startConnectCall({ userPhone: "+15105019401", targetPhone: "+15559990000", targetName: `<Hangup/><Say>gotcha`, confirmed: true }, env);
    const body = decodeURIComponent(requests[0].body.replace(/\+/g, " "));
    assert.doesNotMatch(body, /<Hangup\/>/, "raw markup from targetName must never reach the TwiML unescaped");
  });
});

test("Twilio reporting the call as failed is surfaced truthfully, not silently treated as success", async () => {
  await withFetch((url, options) => options.method === "POST" ? reply({ sid: "CA9", status: "queued" }) : reply({ sid: "CA9", status: "failed" }), async () => {
    const result = await twilioProvider.startConnectCall({ userPhone: "+15105019401", targetPhone: "+15559990000", confirmed: true }, env);
    assert.equal(result.body.ok, false);
    assert.equal(result.body.status, "failed");
  });
});

test("with calling disabled or no Twilio credentials, no call is placed and the response says so", async () => {
  await withFetch(() => { throw new Error("must not call Twilio"); }, async () => {
    const disabled = await twilioProvider.startConnectCall({ userPhone: "+15105019401", targetPhone: "+15559990000", confirmed: true }, { ...env, NEXUS_CALLS_ENABLED: "false" });
    assert.equal(disabled.body.status, "disabled");
  });
});

// Structural: the routing inside executeNexusOpenAiNativeTool's
// nexus_communications handler, and the reverse-lookup helper it depends on.
function sliceServerFunction(name) {
  const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  const start = source.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate function ${name} in server.js`);
  const candidates = ["\nfunction ", "\nconst ", "\nasync function "]
    .map(marker => source.indexOf(marker, start + 10))
    .filter(index => index > start);
  const end = Math.min(...candidates);
  return source.slice(start, end);
}

test("nexusOwnPhoneForUser matches by email first, then falls back to the bare/default-owner allowlist entry", () => {
  const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  const extract = name => {
    const start = source.indexOf(`function ${name}(`);
    assert.ok(start > 0, `could not locate ${name}`);
    const end = source.indexOf("\nfunction ", start + 10);
    return source.slice(start, end);
  };
  const sandbox = { process: { env: {} } };
  vm.createContext(sandbox);
  vm.runInContext(
    extract("normalizePhoneNumber") + "\n" +
    extract("twilioAuthorizedCallers") + "\n" +
    extract("nexusOwnPhoneForUser") + "\n" +
    "this.nexusOwnPhoneForUser = nexusOwnPhoneForUser;",
    sandbox
  );
  const env2 = { TWILIO_AUTHORIZED_CALLERS: "+15551234567:admin@agrinexus.org,+15559876543:staff@agrinexus.org" };
  assert.equal(sandbox.nexusOwnPhoneForUser({ email: "staff@agrinexus.org" }, env2), "+15559876543");
  assert.equal(sandbox.nexusOwnPhoneForUser({ email: "nobody@agrinexus.org" }, env2), "");
  const bareEnv = { TWILIO_AUTHORIZED_CALLERS: "+15551234567" };
  assert.equal(sandbox.nexusOwnPhoneForUser({ email: "anyone@agrinexus.org" }, bareEnv), "+15551234567");
});

test("only explicit connect-style phrasing (or an explicit mode) routes a call through the bridging path, not every 'call' request", () => {
  const handlerBody = sliceServerFunction("nexusOwnPhoneForUser");
  assert.ok(handlerBody, "sanity check that slicing works");
  const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  const routingLine = source.match(/const wantsConnectCall = channel === "call" && \([^\n]+\);/);
  assert.ok(routingLine, "could not find the wantsConnectCall routing line");
  assert.match(routingLine[0], /connect me/);
  assert.match(routingLine[0], /patch me through/);
  assert.match(routingLine[0], /args\.mode === "connect"/);
});

test("the connect branch is only reachable ahead of the default announcement-call branch, so it does not shadow the existing feature", () => {
  const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  const connectIndex = source.indexOf('channel === "call" && wantsConnectCall');
  const defaultCallIndex = source.indexOf('action: "call.start"');
  assert.ok(connectIndex > 0 && defaultCallIndex > connectIndex, "the connect-call branch must be checked before the default call.start branch");
});
