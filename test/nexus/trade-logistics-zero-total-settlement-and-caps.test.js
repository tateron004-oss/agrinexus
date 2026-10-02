"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (legacy server.js helper-function sweep): createTradeLogisticsWorkflow's settlement branch
// computed `grossAmount: Number(order.total) || amount` -- a legitimate order.total of exactly 0 (a
// free-sample/zero-price product) was treated as missing and silently replaced with `amount`, the
// unrelated 12%-of-total freight-cost ESTIMATE, then credited to the seller's real wallet for an order
// that should settle for nothing. Also fixed: db.profile.orders and db.profile.enrollments grow
// unboundedly, never capped anywhere in this file, unlike sibling arrays created in the same functions.
const root = path.resolve(__dirname, "..", "..");
const port = 4801;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-trade-logistics-zero-total-settlement-and-caps-db.json");

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

function readTempDb() {
  return JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
}

let server;
let cookie;

test.before(async () => {
  const seedDb = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  seedDb.profile.orders = seedDb.profile.orders || [];
  seedDb.profile.orders.push({
    id: "zero-total-order-test",
    orderNumber: "AN-ORD-TEST-ZERO",
    productId: null,
    product: "Free community sample lot",
    countryId: "kenya",
    routeId: "east-africa",
    checkpoint: "Farm gate",
    checkpointIndex: 0,
    stage: "Delivered",
    stageIndex: 4,
    trackingNumber: "AN-TRK-TEST-ZERO",
    buyerInterest: 70,
    total: 0,
    timeline: [],
    createdAt: new Date().toISOString()
  });
  fs.writeFileSync(tempDbPath, JSON.stringify(seedDb));

  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  assert.equal(login.status, 200);
  cookie = login.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server?.kill();
  fs.rmSync(tempDbPath, { force: true });
});

test("settling an order with a legitimate total of 0 credits the seller's wallet with $0, not a fabricated freight-estimate amount", async () => {
  const walletBefore = readTempDb().profile.wallet;
  const res = await fetch(`${base}/api/trade/logistics`, {
    method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ type: "settlement", orderId: "zero-total-order-test" })
  });
  const body = await res.json();
  assert.equal(body.error, undefined, JSON.stringify(body));
  assert.equal(body.tradeLogisticsResult.record.platformFee.grossAmount, 0, "a real order.total of 0 must be honored, not replaced with the freight-estimate amount");
  const walletAfter = readTempDb().profile.wallet;
  assert.equal(walletAfter, walletBefore, "a $0 settlement must not credit any real money to the seller's wallet");
});
