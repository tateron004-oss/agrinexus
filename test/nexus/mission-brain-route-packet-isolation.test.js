"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (weather/GPS/notifications audit): db.profile.locationRoutePackets
// is a single array shared by every account, with createdBy: user.email as the
// only per-user attribution -- the same "shared array + ownership field,
// never filtered" bug class already fixed for db.profile.assistantReminders
// (PR #732). nexusMissionBrainModel's own mission-brain response read
// locationRoutePackets[0] (the globally most-recent packet, from ANY user)
// with no ownership check, then surfaced its real seller/buyer pickup/
// delivery location text inside every OTHER account's own "mission brain"
// response, both as an evidence string and as the full raw packet object.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-mission-brain-route-packet-isolation-db.json");

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitFor(url) {
  for (let i = 0; i < 80; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error(`${url} did not become reachable`);
}

function cookieFrom(res) {
  const raw = typeof res.headers.getSetCookie === "function" ? res.headers.getSetCookie() : [res.headers.get("set-cookie")].filter(Boolean);
  return raw.map(part => part.split(";")[0]).join("; ");
}

const cookieCache = new Map();
async function login(email, password) {
  if (cookieCache.has(email)) return cookieCache.get(email);
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200, `login for ${email} should succeed`);
  const cookie = cookieFrom(res);
  cookieCache.set(email, cookie);
  return cookie;
}

async function createTestUser(adminCookie, email, password) {
  const res = await fetch(`${base}/api/admin/test-user`, { method: "POST", headers: { "content-type": "application/json", cookie: adminCookie },
    body: JSON.stringify({ email, name: "QA User", password }) });
  assert.equal(res.status, 200, `creating ${email} should succeed`);
}

async function cmd(cookie, command) {
  const res = await fetch(`${base}/api/agent/command`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ command }) });
  const body = await res.json();
  return body.commandResult || {};
}

let server;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

test("a different real user's mission brain response never surfaces another account's real trade-route location packet", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzroute-victim1@example.com", "VictimPass2026!");
  await createTestUser(adminCookie, "zzroute-attacker1@example.com", "AttackerPass2026!");
  const victimCookie = await login("zzroute-victim1@example.com", "VictimPass2026!");
  const attackerCookie = await login("zzroute-attacker1@example.com", "AttackerPass2026!");

  const created = await cmd(victimCookie, "track the crop shipment route from Nairobi to Lagos");
  assert.equal(created.intent, "map.buyer_seller_location_route", JSON.stringify(created));

  const attackerBrain = await cmd(attackerCookie, "mission brain");
  assert.equal(attackerBrain.intent, "agent.mission_brain", JSON.stringify(attackerBrain));
  assert.equal(attackerBrain.metadata.missionBrain.mapIntelligence.routePacket, null,
    "an attacker with no route packet of their own must not see the victim's real route packet");
  const attackerLayer = attackerBrain.metadata.missionBrain.layers.find(layer => layer.id === "real-time-map-intelligence");
  assert.doesNotMatch(attackerLayer.evidence, /Nairobi|Lagos/,
    "the victim's real pickup/delivery location text must never appear in a different account's mission-brain evidence");

  const victimBrain = await cmd(victimCookie, "mission brain");
  assert.equal(victimBrain.metadata.missionBrain.mapIntelligence.routePacket?.sellerLocation, "Nairobi",
    "the victim must still see their own real route packet");
});
