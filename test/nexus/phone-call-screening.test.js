"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Call screening (2026-09-23): an unrecognized caller no longer just gets a
// flat decline -- if PHONE_SCREENING_ENABLED, they're offered a screening
// greeting, then <Dial>-bridged to the account owner's real phone (with a
// real voicemail + push notification fallback) if today's bridge cap still
// has room. The caller never reaches an authenticated identity or a tool --
// these tests pin down that this cannot regress the PR #570 access fix, and
// that the cap/fallback logic is real, not decorative.
const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

function loadScreeningHelpers() {
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
    // Real ensureAiProfile is a huge, unrelated field-initializer -- stub it
    // so these tests exercise only the screening logic, not that function.
    "function ensureAiProfile(profile) { return profile; }\n" +
    extract("phoneScreeningEnabled") + "\n" +
    extract("phoneScreeningDailyBridgeCap") + "\n" +
    extract("phoneScreeningOwner") + "\n" +
    extract("phoneScreeningBridgeAllowed") + "\n" +
    "this.phoneScreeningEnabled = phoneScreeningEnabled;\n" +
    "this.phoneScreeningDailyBridgeCap = phoneScreeningDailyBridgeCap;\n" +
    "this.phoneScreeningOwner = phoneScreeningOwner;\n" +
    "this.phoneScreeningBridgeAllowed = phoneScreeningBridgeAllowed;",
    sandbox
  );
  return sandbox;
}

test("call screening is off unless explicitly enabled -- fails closed to today's flat decline", () => {
  const { phoneScreeningEnabled } = loadScreeningHelpers();
  assert.equal(phoneScreeningEnabled({}), false);
  assert.equal(phoneScreeningEnabled({ PHONE_SCREENING_ENABLED: "false" }), false);
  assert.equal(phoneScreeningEnabled({ PHONE_SCREENING_ENABLED: "true" }), true);
});

test("the daily bridge cap defaults to 5 and is clamped to a sane range", () => {
  const { phoneScreeningDailyBridgeCap } = loadScreeningHelpers();
  assert.equal(phoneScreeningDailyBridgeCap({}), 5);
  assert.equal(phoneScreeningDailyBridgeCap({ PHONE_SCREENING_DAILY_BRIDGE_CAP: "2" }), 2);
  assert.equal(phoneScreeningDailyBridgeCap({ PHONE_SCREENING_DAILY_BRIDGE_CAP: "9999" }), 50, "must be clamped, not trust an unbounded env value");
  assert.equal(phoneScreeningDailyBridgeCap({ PHONE_SCREENING_DAILY_BRIDGE_CAP: "0" }), 5, "a non-positive override falls back to the default rather than disabling the cap");
});

test("phoneScreeningOwner resolves the same Admin/default-owner identity resolveAuthorizedPhoneCaller's bare-entry path uses", () => {
  const { phoneScreeningOwner } = loadScreeningHelpers();
  const db = { users: [{ id: "u_admin", role: "Admin", email: "admin@agrinexus.org" }, { id: "u_staff", role: "Member", email: "staff@agrinexus.org" }] };
  assert.equal(phoneScreeningOwner(db)?.id, "u_admin");
  assert.equal(phoneScreeningOwner({ users: [{ id: "u_only", role: "Member" }] })?.id, "u_only", "falls back to the first user when no Admin exists");
});

test("the bridge cap actually blocks the (cap+1)th screened caller of the day, and resets the next day", () => {
  const { phoneScreeningBridgeAllowed } = loadScreeningHelpers();
  const env = { PHONE_SCREENING_DAILY_BRIDGE_CAP: "3" };
  const db = { profile: {} };
  for (let i = 0; i < 3; i++) assert.equal(phoneScreeningBridgeAllowed(db, env), true, `attempt ${i + 1} should be allowed`);
  assert.equal(phoneScreeningBridgeAllowed(db, env), false, "the 4th attempt today must be refused");
  assert.equal(db.profile.phoneScreeningState.bridgedCount, 3, "a refused attempt must not itself increment the count");
  // Simulate a new day by editing the stored date directly.
  db.profile.phoneScreeningState.date = "2000-01-01";
  assert.equal(phoneScreeningBridgeAllowed(db, env), true, "a new day resets the cap");
  assert.equal(db.profile.phoneScreeningState.bridgedCount, 1);
});

function sliceRouteBlock(startMarker, endMarker) {
  const start = source.indexOf(startMarker);
  assert.ok(start > 0, `could not locate ${startMarker}`);
  const end = source.indexOf(endMarker, start + startMarker.length);
  assert.ok(end > start, `could not locate ${endMarker} after ${startMarker}`);
  return source.slice(start, end);
}

test("screening only replaces the decline when explicitly enabled AND PUBLIC_BASE_URL is configured -- never a half-configured half-open state", () => {
  const incomingBlock = sliceRouteBlock(
    'if (url.pathname === "/api/voice/phone/incoming" && req.method === "POST")',
    'if (url.pathname === "/api/voice/phone/screening-gather" && req.method === "POST")'
  );
  assert.match(incomingBlock, /if \(phoneScreeningEnabled\(process\.env\) && process\.env\.PUBLIC_BASE_URL\) \{/);
  // The unrecognized-caller branch must still fall through to the original
  // flat decline when screening is off/unconfigured -- the decline text
  // must still be present and reachable in the same branch.
  assert.match(incomingBlock, /not authorized for AgriNexus account access/);
});

test("every new screening webhook route validates the real Twilio signature before doing anything else", () => {
  for (const routeMarker of [
    'if (url.pathname === "/api/voice/phone/screening-gather" && req.method === "POST")',
    'if (url.pathname === "/api/voice/phone/screening-dial-result" && req.method === "POST")',
    'if (url.pathname === "/api/voice/phone/screening-voicemail" && req.method === "POST")'
  ]) {
    const start = source.indexOf(routeMarker);
    assert.ok(start > 0, `could not find route ${routeMarker}`);
    const nextLines = source.slice(start, start + 400);
    assert.match(nextLines, /validTwilioWebhookSignature\(req, url, body\)/, `${routeMarker} must validate the Twilio signature`);
  }
});

test("a screened caller never gets a real tool call or authenticated identity -- the whole screening flow is plain TwiML dial/record, no executeNexusOpenAiNativeTool", () => {
  const screeningBlock = sliceRouteBlock(
    'if (url.pathname === "/api/voice/phone/screening-gather" && req.method === "POST")',
    'if (url.pathname === "/api/voice/phone/gather" && req.method === "POST")'
  );
  assert.doesNotMatch(screeningBlock, /executeNexusOpenAiNativeTool/);
  assert.doesNotMatch(screeningBlock, /runNexusOpenAiNativeAgentCommand/);
});

test("a Dial that completed is treated as a successful bridge; anything else falls through to a real voicemail recording, never silence", () => {
  const dialResultBlock = sliceRouteBlock(
    'if (url.pathname === "/api/voice/phone/screening-dial-result" && req.method === "POST")',
    'if (url.pathname === "/api/voice/phone/screening-voicemail" && req.method === "POST")'
  );
  assert.match(dialResultBlock, /dialStatus === "completed"/);
  assert.match(dialResultBlock, /<Record maxLength="120" playBeep="true"/);
});

test("a voicemail left after a missed screened call triggers a real push-notification attempt through the same authoritative reminders pipeline other real reminders use", () => {
  const voicemailBlock = sliceRouteBlock(
    'if (url.pathname === "/api/voice/phone/screening-voicemail" && req.method === "POST")',
    'if (url.pathname === "/api/voice/phone/gather" && req.method === "POST")'
  );
  assert.match(voicemailBlock, /nexusOpenAiNativeCreatePushReminder\(owner, \{ command: "" \}, \{/);
  assert.match(voicemailBlock, /when: "in 1 minute"/);
});
