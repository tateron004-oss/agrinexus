"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const twilioProvider = require("../../server/providers/twilioProvider.js");

// Found live (phone-bridge audit, matching a real, previously-unresolved
// production report: "greeting plays, then the call hangs up before the
// caller can speak"): handleTwilioPhoneRealtimeStream's "start" handler
// wraps transport.connect() in a try/catch whose only failure action was
// cleanup(), which just closes this WebSocket. Because the TwiML that opened
// this call is a bare <Connect><Stream> with nothing after it, closing the
// stream IS ending the call -- so any transient OpenAI connect failure (an
// auth hiccup, a network blip, a momentary 429/503) silently hung up on the
// caller with zero retry and zero spoken message. This fix redirects the
// still-live call (via Twilio's Call-update REST API) to the classic
// Gather/TTS flow instead of just closing the stream.
const env = { TWILIO_ACCOUNT_SID: "AC123", TWILIO_AUTH_TOKEN: "token", NEXUS_SMS_STATUS_DELAY_MS: "0" };
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

test("twilioProvider.redirectCall posts a Call-update to Twilio with the new TwiML Url, not a new call", async () => {
  await withFetch(() => reply({ sid: "CA9", status: "in-progress" }), async requests => {
    const result = await twilioProvider.redirectCall("CA_LIVE_CALL", "https://example.test/api/voice/phone/incoming?fallback=classic", env);
    assert.equal(result.sid, "CA9");
    assert.equal(requests.length, 1);
    assert.match(requests[0].url, /\/Calls\/CA_LIVE_CALL\.json$/, "must update the SAME call, never create a new one");
    assert.equal(requests[0].method, "POST");
    const params = new URLSearchParams(requests[0].body);
    assert.equal(params.get("Url"), "https://example.test/api/voice/phone/incoming?fallback=classic");
    assert.equal(params.get("Method"), "POST");
    assert.equal(params.get("Twiml"), null, "a redirect must send a Url for Twilio to fetch, not inline Twiml");
  });
});

test("twilioProvider exports redirectCall and twilioConfigured for server.js's connect-failure recovery path", () => {
  assert.equal(typeof twilioProvider.redirectCall, "function");
  assert.equal(typeof twilioProvider.twilioConfigured, "function");
});

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

test("phoneRealtimeClassicFallbackUrl builds a same-origin classic-flow URL carrying the ?fallback=classic marker", () => {
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(`${sliceFunction("phoneRealtimeClassicFallbackUrl")}\nthis.fn = phoneRealtimeClassicFallbackUrl;`, sandbox);
  assert.equal(sandbox.fn({ PUBLIC_BASE_URL: "https://agrinexus.example" }), "https://agrinexus.example/api/voice/phone/incoming?fallback=classic");
  assert.equal(sandbox.fn({ PUBLIC_BASE_URL: "https://agrinexus.example/" }), "https://agrinexus.example/api/voice/phone/incoming?fallback=classic", "a trailing slash on the base must not produce a double slash");
  assert.equal(sandbox.fn({}), "", "with no PUBLIC_BASE_URL configured there is nowhere safe to redirect to");
});

test("a connect() failure attempts to redirect the still-live call to the classic flow before giving up, and only truly hangs up if that also fails", () => {
  const handlerBody = sliceFunction("handleTwilioPhoneRealtimeStream");
  const connectIndex = handlerBody.indexOf("const connectPromise = transport.connect(");
  const catchIndex = handlerBody.indexOf("} catch (error) {", connectIndex);
  assert.ok(connectIndex > 0 && catchIndex > connectIndex, "expected a catch block guarding transport.connect()");
  const catchBlock = handlerBody.slice(catchIndex, catchIndex + 1800);
  assert.match(catchBlock, /nexusRealProviders\.twilio\.redirectCall\(callSid, fallbackUrl, process\.env\)/,
    "must attempt a real Twilio call-redirect before giving up on the call");
  assert.match(catchBlock, /nexusRealProviders\.twilio\.twilioConfigured\(process\.env\)\.length === 0/,
    "must not attempt a redirect when Twilio credentials are not even configured");
  const redirectAttemptIndex = catchBlock.indexOf("redirectCall(callSid, fallbackUrl, process.env)");
  const successCleanupIndex = catchBlock.indexOf('cleanup("connect-failed-redirected-to-classic-flow")');
  const bareHangupIndex = catchBlock.indexOf('cleanup("connect-failed")');
  assert.ok(redirectAttemptIndex > 0 && successCleanupIndex > 0 && bareHangupIndex > 0, "expected all three markers");
  assert.ok(redirectAttemptIndex < successCleanupIndex, "the redirect must be attempted before reporting success");
  assert.ok(redirectAttemptIndex < bareHangupIndex, "the bare hangup must remain as the fallback when redirecting also fails");
  // A failed redirect attempt must be swallowed locally (recorded, not
  // rethrown) so it still falls through to the bare-hangup cleanup rather
  // than crashing the message handler.
  assert.match(catchBlock, /catch \(redirectError\) \{\s*recordServerError\(\{ source: "phone-realtime-connect-redirect"/);
});

test("redirecting to the classic flow is a distinct, honestly-labeled cleanup reason, not conflated with a bare hangup", () => {
  const handlerBody = sliceFunction("handleTwilioPhoneRealtimeStream");
  assert.match(handlerBody, /cleanup\("connect-failed-redirected-to-classic-flow"\)/);
  assert.match(handlerBody, /cleanup\("connect-failed"\)/, "the true bare-hangup path must still exist as the last resort");
});

// Found live (phone-bridge audit, second finding in the same function):
// transport.connect() has no timeout of its own -- a stalled handshake (no
// "open" and no "error" event ever firing) left the connect await pending
// forever, so a caller heard nothing and the call sat connected in dead air
// until PHONE_REALTIME_MAX_CALL_SECONDS (up to 30 minutes) finally spoke a
// goodbye. Racing the connect against a clamped timeout turns that into the
// same, already-fixed "connect failed" recovery path (redirect to the
// classic flow) instead of leaving the caller stranded in silence.
test("transport.connect() is raced against a clamped timeout, and a timeout lands in the same catch block that already recovers a connect failure", () => {
  const handlerBody = sliceFunction("handleTwilioPhoneRealtimeStream");
  const connectCallIndex = handlerBody.indexOf("const connectPromise = transport.connect(");
  assert.ok(connectCallIndex > 0, "expected transport.connect() to be captured as a promise, not directly awaited");
  const raceIndex = handlerBody.indexOf("await Promise.race([", connectCallIndex);
  const catchIndex = handlerBody.indexOf("} catch (error) {", connectCallIndex);
  assert.ok(raceIndex > connectCallIndex && catchIndex > raceIndex,
    "the race against a timeout must run inside the same try block that already redirects a connect failure to the classic flow");
  const raceBlock = handlerBody.slice(connectCallIndex, catchIndex);
  assert.match(raceBlock, /connectPromise\.catch\(\(\) => \{\}\);/, "the abandoned connect promise must be observed so a later rejection can never be an unhandled rejection");
  assert.match(raceBlock, /code: "phone-realtime-connect-timeout"/);
});

test("the connect timeout is configurable but clamped to a sane range, matching the existing PHONE_REALTIME_MAX_CALL_SECONDS pattern", () => {
  const sandbox = { Number, Math };
  vm.createContext(sandbox);
  vm.runInContext(
    'this.clamp = env => Math.min(Math.max(Number(env.PHONE_REALTIME_CONNECT_TIMEOUT_MS) || 12000, 3000), 30000);',
    sandbox
  );
  const handlerBody = sliceFunction("handleTwilioPhoneRealtimeStream");
  assert.match(handlerBody, /Math\.min\(Math\.max\(Number\(process\.env\.PHONE_REALTIME_CONNECT_TIMEOUT_MS\) \|\| 12000, 3000\), 30000\)/,
    "pin the exact clamp expression so this isolated re-implementation stays honest to the real code");
  assert.equal(sandbox.clamp({}), 12000, "default with nothing configured");
  assert.equal(sandbox.clamp({ PHONE_REALTIME_CONNECT_TIMEOUT_MS: "500" }), 3000, "must not allow an unreasonably short timeout that fires before a real handshake could ever complete");
  assert.equal(sandbox.clamp({ PHONE_REALTIME_CONNECT_TIMEOUT_MS: "999999" }), 30000, "must not allow an unbounded timeout that reintroduces the original silent-hang symptom");
  assert.equal(sandbox.clamp({ PHONE_REALTIME_CONNECT_TIMEOUT_MS: "8000" }), 8000, "a reasonable configured value is honored as-is");
});

test("a stalled connect promise genuinely loses the race to the timeout (the same Promise.race+setTimeout shape used in the fix)", async () => {
  const neverResolves = new Promise(() => {});
  neverResolves.catch(() => {});
  const race = Promise.race([
    neverResolves,
    new Promise((_, reject) => setTimeout(() => reject(Object.assign(new Error("OpenAI Realtime connect timed out"), { code: "phone-realtime-connect-timeout" })), 20))
  ]);
  await assert.rejects(race, error => error.code === "phone-realtime-connect-timeout");
});
