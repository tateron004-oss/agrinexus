"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const telehealthProvider = require("../../server/telehealth/provider.js");
const dailyProvider = require("../../server/telehealth/providers/daily.js");
const { resetActionLedgerForTests } = require("../../server/action-lifecycle.js");

test.beforeEach(() => resetActionLedgerForTests());

function withPatched(moduleExports, fnName, replacement, run) {
  const original = moduleExports[fnName];
  moduleExports[fnName] = replacement;
  return Promise.resolve(run()).finally(() => { moduleExports[fnName] = original; });
}

const DAILY_ENV = { NEXUS_TELEHEALTH_PROVIDER: "daily", DAILY_API_KEY: "test-key", DAILY_ROOM_DOMAIN: "nexus.daily.co" };
const user = { id: "u1", name: "Amina" };

// Found live (telehealth audit): createEncounter's bundled real Daily.co/Zoom
// room creation (reachable both through POST /api/nexus/telehealth/create-encounter
// and the NL "start a video visit" voice/text path) had no idempotency protection
// at all -- a retry or double-submit of either call path generated a fresh, real,
// billable video room every time.
test("a retried/double-submitted create-encounter request with createVideo does not create a second real video room", async () => {
  let calls = 0;
  await withPatched(dailyProvider, "createRoom", async (encounter, env) => {
    calls += 1;
    return { ok: true, status: "created", provider: "daily", roomCreated: true, roomName: `room-${calls}`, roomUrl: `https://nexus.daily.co/room-${calls}`, expiresAt: "2026-01-01T00:00:00.000Z" };
  }, async () => {
    const db = {};
    const body = { conditionArea: "general", confirmed: true, consentToPreparePacket: true, createVideo: true, consentToShare: true };
    const first = await telehealthProvider.createEncounter(db, body, user, DAILY_ENV);
    const second = await telehealthProvider.createEncounter(db, body, user, DAILY_ENV);
    assert.equal(calls, 1, "the real Daily.co room-creation call must not happen twice for a retried/duplicate request");
    assert.equal(first.encounter.video.roomCreated, true);
    assert.equal(second.encounter.video.roomCreated, true);
    assert.equal(second.encounter.video.roomUrl, first.encounter.video.roomUrl, "the retry must be handed back the SAME real room, not a fresh one");
  });
});

test("two genuinely different encounter requests still each get their own real video room", async () => {
  let calls = 0;
  await withPatched(dailyProvider, "createRoom", async () => {
    calls += 1;
    return { ok: true, status: "created", provider: "daily", roomCreated: true, roomName: `room-${calls}`, roomUrl: `https://nexus.daily.co/room-${calls}`, expiresAt: "2026-01-01T00:00:00.000Z" };
  }, async () => {
    const db = {};
    await telehealthProvider.createEncounter(db, { conditionArea: "general", confirmed: true, consentToPreparePacket: true, createVideo: true, consentToShare: true, symptoms: ["headache"] }, user, DAILY_ENV);
    await telehealthProvider.createEncounter(db, { conditionArea: "general", confirmed: true, consentToPreparePacket: true, createVideo: true, consentToShare: true, symptoms: ["fever"] }, user, DAILY_ENV);
    assert.equal(calls, 2, "two genuinely different requests must not be conflated into one idempotency key");
  });
});
