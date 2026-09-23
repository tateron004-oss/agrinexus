"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Confirmed by a 2026-09-22 security audit: phoneVoiceUser() handed the
// FULL Admin identity -- real data access, real side-effecting actions -- to
// literally anyone who dialed the AgriNexus phone number, with zero check of
// who was actually calling. These tests load the REAL replacement logic
// (resolveAuthorizedPhoneCaller / phoneExternalPartyNumber /
// twilioAuthorizedCallers) out of server.js via vm, so they exercise the
// actual matching/normalization behavior, not just a string-presence check.
function loadAuthorization() {
  const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  const extract = name => {
    const start = source.indexOf(`function ${name}(`);
    assert.ok(start > 0, `could not locate ${name} in server.js`);
    const end = source.indexOf("\nfunction ", start + 10);
    assert.ok(end > start, `could not find the end of ${name} in server.js`);
    return source.slice(start, end);
  };
  const sandbox = { process: { env: {} } };
  vm.createContext(sandbox);
  vm.runInContext(
    extract("normalizePhoneNumber") + "\n" +
    extract("redactPhoneNumber") + "\n" +
    extract("twilioAuthorizedCallers") + "\n" +
    extract("phoneExternalPartyNumber") + "\n" +
    extract("resolveAuthorizedPhoneCaller") + "\n" +
    "this.normalizePhoneNumber = normalizePhoneNumber;\n" +
    "this.redactPhoneNumber = redactPhoneNumber;\n" +
    "this.twilioAuthorizedCallers = twilioAuthorizedCallers;\n" +
    "this.phoneExternalPartyNumber = phoneExternalPartyNumber;\n" +
    "this.resolveAuthorizedPhoneCaller = resolveAuthorizedPhoneCaller;",
    sandbox
  );
  return sandbox;
}

function fixtureDb() {
  return {
    users: [
      { id: "u_admin", email: "admin@agrinexus.org", role: "Admin", language: "en" },
      { id: "u_staff", email: "staff@agrinexus.org", role: "Member", language: "sw" }
    ]
  };
}

test("an unlisted caller gets no identity at all -- the core fix for the critical vulnerability", () => {
  const { resolveAuthorizedPhoneCaller } = loadAuthorization();
  const env = { TWILIO_AUTHORIZED_CALLERS: "+15551234567:admin@agrinexus.org" };
  const result = resolveAuthorizedPhoneCaller(fixtureDb(), { From: "+15559999999" }, env);
  assert.equal(result, null, "a caller not on the allowlist must never be granted any account identity");
});

test("a caller with no allowlist configured at all gets no identity (fails closed by default)", () => {
  const { resolveAuthorizedPhoneCaller } = loadAuthorization();
  const result = resolveAuthorizedPhoneCaller(fixtureDb(), { From: "+15551234567" }, {});
  assert.equal(result, null, "an unconfigured allowlist must refuse everyone, not default-allow");
});

test("an authorized number with an explicit email is resolved to that exact real user, not always Admin", () => {
  const { resolveAuthorizedPhoneCaller } = loadAuthorization();
  const env = { TWILIO_AUTHORIZED_CALLERS: "+15551234567:staff@agrinexus.org" };
  const result = resolveAuthorizedPhoneCaller(fixtureDb(), { From: "+15551234567" }, env);
  assert.equal(result?.id, "u_staff", "the specific matched user must be returned, not the default Admin");
});

test("a bare authorized number with no email authorizes the default account owner", () => {
  const { resolveAuthorizedPhoneCaller } = loadAuthorization();
  const env = { TWILIO_AUTHORIZED_CALLERS: "+15551234567" };
  const result = resolveAuthorizedPhoneCaller(fixtureDb(), { From: "+15551234567" }, env);
  assert.equal(result?.id, "u_admin");
});

test("phone number formatting differences (spaces, dashes, parens) do not defeat the allowlist match", () => {
  const { resolveAuthorizedPhoneCaller } = loadAuthorization();
  const env = { TWILIO_AUTHORIZED_CALLERS: "+1 (555) 123-4567:admin@agrinexus.org" };
  const result = resolveAuthorizedPhoneCaller(fixtureDb(), { From: "+15551234567" }, env);
  assert.equal(result?.id, "u_admin", "normalizePhoneNumber must strip formatting on both sides of the comparison");
});

test("multiple authorized entries are each honored independently", () => {
  const { resolveAuthorizedPhoneCaller } = loadAuthorization();
  const env = { TWILIO_AUTHORIZED_CALLERS: "+15551234567:admin@agrinexus.org,+15559876543:staff@agrinexus.org" };
  assert.equal(resolveAuthorizedPhoneCaller(fixtureDb(), { From: "+15551234567" }, env)?.id, "u_admin");
  assert.equal(resolveAuthorizedPhoneCaller(fixtureDb(), { From: "+15559876543" }, env)?.id, "u_staff");
});

test("phoneExternalPartyNumber identifies the real other party regardless of call direction", () => {
  const { phoneExternalPartyNumber } = loadAuthorization();
  const env = { TWILIO_PHONE_NUMBER: "+15550001111" };
  // Inbound: the external caller is From.
  assert.equal(phoneExternalPartyNumber({ From: "+15551234567", To: "+15550001111" }, env), "+15551234567");
  // Outbound (we placed the call): From is our own number, so the real
  // party is To -- this is the case the original code got wrong by nature
  // of never distinguishing direction at all.
  assert.equal(phoneExternalPartyNumber({ From: "+15550001111", To: "+15559876543" }, env), "+15559876543");
});

test("an outbound call answered by an unauthorized third party (e.g. a wrong number) is still refused", () => {
  const { resolveAuthorizedPhoneCaller } = loadAuthorization();
  const env = { TWILIO_PHONE_NUMBER: "+15550001111", TWILIO_AUTHORIZED_CALLERS: "+15551234567:admin@agrinexus.org" };
  // We called +15559999999 (an intended contact) but a different/wrong
  // number answered -- To in the webhook still reports who was dialed, so
  // this models the intended recipient not being on the allowlist either,
  // which must also be refused, not silently granted admin access.
  const result = resolveAuthorizedPhoneCaller(fixtureDb(), { From: "+15550001111", To: "+15559999999" }, env);
  assert.equal(result, null);
});

test("an empty or malformed caller number never matches, and never crashes", () => {
  const { resolveAuthorizedPhoneCaller } = loadAuthorization();
  const env = { TWILIO_AUTHORIZED_CALLERS: "+15551234567:admin@agrinexus.org" };
  assert.equal(resolveAuthorizedPhoneCaller(fixtureDb(), {}, env), null);
  assert.equal(resolveAuthorizedPhoneCaller(fixtureDb(), { From: "not-a-number" }, env), null);
  assert.equal(resolveAuthorizedPhoneCaller(fixtureDb(), { From: "" }, env), null);
});

test("redactPhoneNumber never logs the full number, so an audit-log line can't leak it", () => {
  const { redactPhoneNumber } = loadAuthorization();
  const redacted = redactPhoneNumber("+15551234567");
  assert.notEqual(redacted, "+15551234567", "the full number must not appear verbatim");
  assert.match(redacted, /\*/, "a redacted number should contain masking characters");
});
