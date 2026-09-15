"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const dailyProvider = require("../../server/telehealth/providers/daily.js");
const telehealthProvider = require("../../server/telehealth/provider.js");

const env = { NEXUS_TELEHEALTH_PROVIDER: "daily", DAILY_API_KEY: "test_daily_key", DAILY_ROOM_DOMAIN: "nexus.daily.co" };

test("createRoom reports ok:false when the real Daily.co API call fails", async () => {
  const fetchImpl = async () => ({ ok: false, status: 401, text: async () => JSON.stringify({ error: "unauthorized" }) });
  const result = await dailyProvider.createRoom({ id: "enc-1" }, env, { fetchImpl });
  assert.equal(result.ok, false);
  assert.equal(result.status, "provider_error");
  assert.equal(result.roomCreated, false);
});

test("createRoom still reports ok:true for a genuine success", async () => {
  const fetchImpl = async () => ({ ok: true, status: 200, text: async () => JSON.stringify({ name: "room-1", url: "https://nexus.daily.co/room-1" }) });
  const result = await dailyProvider.createRoom({ id: "enc-1" }, env, { fetchImpl });
  assert.equal(result.ok, true);
  assert.equal(result.status, "created");
  assert.equal(result.roomCreated, true);
});

test("createVideoRoom propagates a real provider failure to its own top-level ok field, instead of hardcoding success", async () => {
  const db = {};
  const created = await telehealthProvider.createEncounter(db, {
    conditionArea: "general", confirmed: true, consentToPreparePacket: true
  }, { name: "QA" }, { NEXUS_TELEHEALTH_PROVIDER: "local" });

  const fetchImpl = async () => ({ ok: false, status: 500, text: async () => JSON.stringify({ error: "server_error" }) });
  const result = await telehealthProvider.createVideoRoom(db, {
    encounterId: created.encounter.id, confirmed: true, consentToShare: true
  }, { name: "QA" }, env, { fetchImpl });

  assert.equal(result.ok, false, "a real Daily.co failure must not be reported as ok:true at the outer level");
  assert.equal(result.video.status, "provider_error");
});
