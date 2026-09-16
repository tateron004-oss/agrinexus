"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const dailyProvider = require("../../server/telehealth/providers/daily.js");
const telehealthBridgeProvider = require("../../server/providers/telehealthBridgeProvider.js");

function withPatched(moduleExports, fnName, replacement, run) {
  const original = moduleExports[fnName];
  moduleExports[fnName] = replacement;
  return Promise.resolve(run()).finally(() => { moduleExports[fnName] = original; });
}

const DAILY_ENABLED_ENV = { NEXUS_TELEHEALTH_BRIDGE_ENABLED: "true", NEXUS_DAILY_VIDEO_ENABLED: "true",
  DAILY_API_KEY: "test-key", DAILY_ROOM_DOMAIN: "nexus.daily.co" };

test("createSession with videoProvider daily now genuinely calls the real Daily.co room creation, not a stub", async () => {
  let calledWith;
  await withPatched(dailyProvider, "createRoom", async (encounter, env) => {
    calledWith = { encounter, env };
    return { ok: true, status: "created", provider: "daily", roomCreated: true, roomName: "room-1", roomUrl: "https://nexus.daily.co/room-1", expiresAt: "2026-01-01T00:00:00.000Z" };
  }, async () => {
    const db = { profile: {} };
    const result = await telehealthBridgeProvider.createSession({ confirmed: true, videoProvider: "daily", reason: "prepare questions" }, db, DAILY_ENABLED_ENV);
    assert.equal(result.body.status, "completed");
    assert.equal(result.body.data.session.roomUrl, "https://nexus.daily.co/room-1");
    assert.equal(result.body.data.session.liveRoomCreated, true);
    assert.equal(result.body.message, "A real Daily.co video room was created.");
    assert.ok(calledWith.encounter.id, "a real encounter id must be passed for Daily's room naming");
    assert.equal(calledWith.env, DAILY_ENABLED_ENV);
  });
});

test("createSession with videoProvider daily honestly reports a real Daily.co API failure instead of claiming success", async () => {
  await withPatched(dailyProvider, "createRoom", async () => ({ ok: false, status: "provider_error", provider: "daily", roomCreated: false, providerError: "unauthorized" }), async () => {
    const db = { profile: {} };
    const result = await telehealthBridgeProvider.createSession({ confirmed: true, videoProvider: "daily", reason: "prepare questions" }, db, DAILY_ENABLED_ENV);
    assert.equal(result.body.ok, false);
    assert.equal(result.body.status, "provider_error");
    assert.match(result.body.message, /unauthorized/);
  });
});

test("createSession with videoProvider daily still reports missing_config honestly when Daily's own check catches an unconfigured credential mid-call", async () => {
  await withPatched(dailyProvider, "createRoom", async () => ({ ok: true, status: "missing_config", provider: "daily", missingEnv: ["DAILY_API_KEY"], roomCreated: false }), async () => {
    const db = { profile: {} };
    const result = await telehealthBridgeProvider.createSession({ confirmed: true, videoProvider: "daily", reason: "prepare questions" }, db, DAILY_ENABLED_ENV);
    assert.equal(result.body.status, "missing_config");
  });
});

test("createSession with videoProvider daily never calls the real API when credentials are missing at the bridge's own gate", async () => {
  let called = false;
  await withPatched(dailyProvider, "createRoom", async () => { called = true; return { ok: true, roomCreated: true }; }, async () => {
    const db = { profile: {} };
    const result = await telehealthBridgeProvider.createSession({ confirmed: true, videoProvider: "daily", reason: "prepare questions" }, db, { NEXUS_TELEHEALTH_BRIDGE_ENABLED: "true", NEXUS_DAILY_VIDEO_ENABLED: "true" });
    assert.equal(called, false);
    assert.equal(result.body.status, "missing_config");
  });
});
