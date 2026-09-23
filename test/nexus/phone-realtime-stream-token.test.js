"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// The real-time phone bridge (Twilio Media Streams <-> OpenAI Realtime) has
// no webhook signature or session cookie to check on its WebSocket handshake
// -- the only identity it gets back is whatever we put in a <Stream>
// <Parameter>, round-tripped through Twilio. issuePhoneRealtimeStreamToken /
// verifyPhoneRealtimeStreamToken (server.js) are the real signed, short-lived,
// call-bound token that stands in for that missing signature. These tests
// load the actual implementation out of server.js via vm, not a copy.
function loadTokenFunctions() {
  const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  const extract = name => {
    const start = source.indexOf(`function ${name}(`);
    assert.ok(start > 0, `could not locate ${name} in server.js`);
    const end = source.indexOf("\nfunction ", start + 10);
    assert.ok(end > start, `could not find the end of ${name} in server.js`);
    return source.slice(start, end);
  };
  const constStart = source.indexOf("const PHONE_REALTIME_STREAM_TOKEN_TTL_MS");
  assert.ok(constStart > 0, "could not locate PHONE_REALTIME_STREAM_TOKEN_TTL_MS");
  const constEnd = source.indexOf(";", constStart) + 1;
  const { isUsableEnvValue } = require("../../server/local-env-loader.js");
  const sandbox = { process: { env: {} }, Buffer, crypto: require("crypto"), isUsableEnvValue };
  vm.createContext(sandbox);
  vm.runInContext(
    extract("durableAuthSecret") + "\n" +
    source.slice(constStart, constEnd) + "\n" +
    extract("issuePhoneRealtimeStreamToken") + "\n" +
    extract("verifyPhoneRealtimeStreamToken") + "\n" +
    extract("phoneRealtimeStreamingEnabled") + "\n" +
    extract("genesisRealtimeConfigured") + "\n" +
    extract("phoneRealtimeStreamUrl") + "\n" +
    "this.issuePhoneRealtimeStreamToken = issuePhoneRealtimeStreamToken;\n" +
    "this.verifyPhoneRealtimeStreamToken = verifyPhoneRealtimeStreamToken;\n" +
    "this.phoneRealtimeStreamingEnabled = phoneRealtimeStreamingEnabled;\n" +
    "this.phoneRealtimeStreamUrl = phoneRealtimeStreamUrl;",
    sandbox
  );
  return sandbox;
}

const ENV = { SESSION_SECRET: "test-session-secret-value" };

test("a token issued for one call verifies successfully against that same call", () => {
  const { issuePhoneRealtimeStreamToken, verifyPhoneRealtimeStreamToken } = loadTokenFunctions();
  const now = Date.now();
  const token = issuePhoneRealtimeStreamToken("u_admin", "CA1234", now, ENV);
  assert.ok(token, "a token should be issued when secret/userId/callSid are present");
  const claim = verifyPhoneRealtimeStreamToken(token, "CA1234", now + 1000, ENV);
  assert.equal(claim?.userId, "u_admin");
});

test("a token is rejected when replayed against a different call", () => {
  const { issuePhoneRealtimeStreamToken, verifyPhoneRealtimeStreamToken } = loadTokenFunctions();
  const now = Date.now();
  const token = issuePhoneRealtimeStreamToken("u_admin", "CA1234", now, ENV);
  const claim = verifyPhoneRealtimeStreamToken(token, "CA9999-different-call", now + 1000, ENV);
  assert.equal(claim, null, "a token bound to one CallSid must not authorize a different call");
});

test("an expired token is rejected", () => {
  const { issuePhoneRealtimeStreamToken, verifyPhoneRealtimeStreamToken } = loadTokenFunctions();
  const now = Date.now();
  const token = issuePhoneRealtimeStreamToken("u_admin", "CA1234", now, ENV);
  const claim = verifyPhoneRealtimeStreamToken(token, "CA1234", now + 5 * 60_000, ENV);
  assert.equal(claim, null, "a token past its TTL must not verify");
});

test("a tampered signature is rejected", () => {
  const { issuePhoneRealtimeStreamToken, verifyPhoneRealtimeStreamToken } = loadTokenFunctions();
  const now = Date.now();
  const token = issuePhoneRealtimeStreamToken("u_admin", "CA1234", now, ENV);
  const [payload] = token.split(".");
  const tampered = `${payload}.not-the-real-signature`;
  assert.equal(verifyPhoneRealtimeStreamToken(tampered, "CA1234", now + 1000, ENV), null);
});

test("a tampered payload (e.g. swapped userId) is rejected even with the original signature reused", () => {
  const { issuePhoneRealtimeStreamToken, verifyPhoneRealtimeStreamToken } = loadTokenFunctions();
  const now = Date.now();
  const token = issuePhoneRealtimeStreamToken("u_admin", "CA1234", now, ENV);
  const [, signature] = token.split(".");
  const forgedPayload = Buffer.from(JSON.stringify({
    userId: "u_someone_else", callSid: "CA1234", issuedAt: now, expiresAt: now + 120_000
  })).toString("base64url");
  assert.equal(verifyPhoneRealtimeStreamToken(`${forgedPayload}.${signature}`, "CA1234", now + 1000, ENV), null);
});

test("no token is issued at all when SESSION_SECRET is unset (fails closed, not with an unsigned token)", () => {
  const { issuePhoneRealtimeStreamToken } = loadTokenFunctions();
  const token = issuePhoneRealtimeStreamToken("u_admin", "CA1234", Date.now(), {});
  assert.equal(token, "");
});

test("phoneRealtimeStreamingEnabled requires both the explicit flag and a configured OpenAI key", () => {
  const { phoneRealtimeStreamingEnabled } = loadTokenFunctions();
  assert.equal(phoneRealtimeStreamingEnabled({}), false);
  assert.equal(phoneRealtimeStreamingEnabled({ PHONE_REALTIME_STREAMING_ENABLED: "true" }), false, "must not enable without OPENAI_API_KEY");
  assert.equal(phoneRealtimeStreamingEnabled({ OPENAI_API_KEY: "sk-test" }), false, "must not enable without the explicit flag");
  assert.equal(phoneRealtimeStreamingEnabled({ PHONE_REALTIME_STREAMING_ENABLED: "true", OPENAI_API_KEY: "sk-test" }), true);
});

test("phoneRealtimeStreamUrl derives a wss:// URL from PUBLIC_BASE_URL, and is empty when unset", () => {
  const { phoneRealtimeStreamUrl } = loadTokenFunctions();
  assert.equal(phoneRealtimeStreamUrl({}), "");
  assert.equal(
    phoneRealtimeStreamUrl({ PUBLIC_BASE_URL: "https://nexus-genesis-certified.onrender.com/" }),
    "wss://nexus-genesis-certified.onrender.com/api/voice/phone/stream"
  );
});
