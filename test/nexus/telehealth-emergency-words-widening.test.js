"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const telehealthBridge = require("../../server/providers/telehealthBridgeProvider.js");

const env = {
  NEXUS_TELEHEALTH_BRIDGE_ENABLED: "true",
  NEXUS_DAILY_VIDEO_ENABLED: "true",
  DAILY_API_KEY: "test-key",
  DAILY_ROOM_DOMAIN: "myclinic.daily.co"
};

async function withFetch(fetchImpl, fn) {
  const original = global.fetch;
  global.fetch = fetchImpl;
  try { return await fn(); } finally { global.fetch = original; }
}

const mockDailySuccess = async () => ({
  ok: true,
  text: async () => JSON.stringify({ name: "nexus-room", url: "https://myclinic.daily.co/nexus-room", config: { exp: Math.floor(Date.now() / 1000) + 3600 } })
});

// Found live (telehealth safety audit): telehealthBridgeProvider.js's
// createSession is a SEPARATE, unguarded route to real Daily.co credentials
// (distinct from server/telehealth/provider.js's own gate, which is fine)
// whose only symptom-safety check was this narrow EMERGENCY_WORDS regex.
// Executed proof: five reason strings taken almost verbatim from this
// codebase's own canonical red-flag list (server.js) all created a real
// video room, because none of them matched the old, narrower phrases.
test("a real danger-sign reason is blocked before a real Daily.co room is ever created", async () => {
  const dangerSigns = [
    "trouble breathing and turning blue",
    "heavy bleeding from a wound that will not stop",
    "severe dehydration, cannot keep any fluids down",
    "very confused and not making sense",
    "child with danger signs, very weak"
  ];
  for (const reason of dangerSigns) {
    const result = await withFetch(mockDailySuccess, () =>
      telehealthBridge.createSession({ confirmed: true, videoProvider: "daily", reason }, {}, env));
    assert.equal(result.body.ok, false, `expected "${reason}" to be blocked, got: ${JSON.stringify(result.body)}`);
    assert.notEqual(result.body.data?.session?.liveRoomCreated, true, `expected no real room for "${reason}"`);
  }
});

test("a genuine, non-emergency reason still creates a real video room, unaffected by the widening", async () => {
  const result = await withFetch(mockDailySuccess, () =>
    telehealthBridge.createSession({ confirmed: true, videoProvider: "daily", reason: "follow-up visit for a mild skin rash" }, {}, env));
  assert.equal(result.body.status, "completed");
  assert.equal(result.body.data.session.liveRoomCreated, true);
});
