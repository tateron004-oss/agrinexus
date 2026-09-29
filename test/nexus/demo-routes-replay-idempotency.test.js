"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4731;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-demo-routes-replay-idempotency-db.json");

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

let server;
let cookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const loginRes = await fetch(`${base}/api/login`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  assert.equal(loginRes.status, 200);
  cookie = loginRes.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

function readTempDb() {
  return JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
}

// Found live: both /api/demo/wow and /api/demo/run had no idempotency guard
// at all -- unlike their own certificate/badge/shift blocks (each correctly
// checks "does this already exist?" before creating one), the order/wallet
// credit, health intake/telehealth/safety/care-plan records, and streak/hours
// counters were all unconditionally re-added or re-incremented on every
// single call. A double-click, network retry, or a second press of either
// demo button silently inflated the wallet balance, order history, and
// counters shown in the very same admin/investor dashboard these routes
// exist to showcase.
test("POST /api/demo/wow is idempotent: a second call does not double the wallet credit or duplicate the order/intake/counters", async () => {
  const first = await fetch(`${base}/api/demo/wow`, { method: "POST", headers: { "content-type": "application/json", cookie } });
  assert.equal(first.status, 200);
  const afterFirst = readTempDb();
  const walletAfterFirst = afterFirst.profile.wallet;
  const ordersAfterFirst = afterFirst.profile.orders.length;
  const healthIntakesAfterFirst = afterFirst.profile.healthIntakes.length;
  const learningHoursAfterFirst = afterFirst.profile.learningHours;
  const learningStreakAfterFirst = afterFirst.profile.learningStreak;
  const repConnectionsAfterFirst = afterFirst.profile.representativeConnections;

  const second = await fetch(`${base}/api/demo/wow`, { method: "POST", headers: { "content-type": "application/json", cookie } });
  assert.equal(second.status, 200);
  const afterSecond = readTempDb();

  assert.equal(afterSecond.profile.wallet, walletAfterFirst, "the wallet must not be credited a second time by a repeat demo run");
  assert.equal(afterSecond.profile.orders.length, ordersAfterFirst, "no duplicate demo order should be created on a repeat call");
  assert.equal(afterSecond.profile.healthIntakes.length, healthIntakesAfterFirst, "no duplicate demo health intake should be created on a repeat call");
  assert.equal(afterSecond.profile.learningHours, learningHoursAfterFirst, "learningHours must not keep accumulating on a repeat call");
  assert.equal(afterSecond.profile.learningStreak, learningStreakAfterFirst, "learningStreak must not keep accumulating on a repeat call");
  assert.equal(afterSecond.profile.representativeConnections, repConnectionsAfterFirst, "representativeConnections must not keep accumulating on a repeat call");
});

test("POST /api/demo/run is idempotent: a second call does not duplicate the order/intake or re-increment counters", async () => {
  const first = await fetch(`${base}/api/demo/run`, { method: "POST", headers: { "content-type": "application/json", cookie } });
  assert.equal(first.status, 200);
  const afterFirst = readTempDb();
  const ordersAfterFirst = afterFirst.profile.orders.length;
  const healthIntakesAfterFirst = afterFirst.profile.healthIntakes.length;
  const learningHoursAfterFirst = afterFirst.profile.learningHours;
  const learningStreakAfterFirst = afterFirst.profile.learningStreak;
  const repConnectionsAfterFirst = afterFirst.profile.representativeConnections;

  const second = await fetch(`${base}/api/demo/run`, { method: "POST", headers: { "content-type": "application/json", cookie } });
  assert.equal(second.status, 200);
  const afterSecond = readTempDb();

  assert.equal(afterSecond.profile.orders.length, ordersAfterFirst, "no duplicate demo order should be created on a repeat call");
  assert.equal(afterSecond.profile.healthIntakes.length, healthIntakesAfterFirst, "no duplicate demo health intake should be created on a repeat call");
  assert.equal(afterSecond.profile.learningHours, learningHoursAfterFirst, "learningHours must not keep accumulating on a repeat call");
  assert.equal(afterSecond.profile.learningStreak, learningStreakAfterFirst, "learningStreak must not keep accumulating on a repeat call");
  assert.equal(afterSecond.profile.representativeConnections, repConnectionsAfterFirst, "representativeConnections must not keep accumulating on a repeat call");
});
