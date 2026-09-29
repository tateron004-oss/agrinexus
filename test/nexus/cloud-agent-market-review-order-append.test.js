"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (cloud-agent audit): every "current order" lookup in the codebase
// (trade.advance_order, trade.wallet_payment, createTradeLogisticsWorkflow,
// initializeTradePaymentCheckout, createBuyerSellerMessage,
// createBuyerContactWorkflow, and others) reads db.profile.orders[orders.length-1]
// as "the most recent order" -- but trade.market_review's own order-creation
// step used unshift() instead of push(), putting its new order at the FRONT of
// the array. Running the default AgriTrade mission a second time in the same
// session made the second run's own new order permanently invisible to every
// "most recent order" lookup -- they kept resolving to whatever order was
// pushed there first, while the new one sat stuck at "Agent market review"
// forever with no way for a later step to ever advance it.
const root = path.resolve(__dirname, "..", "..");
const port = 4703;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-cloud-agent-market-review-order-append-db.json");

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
    body: JSON.stringify({ email: "demo@agrinexus.org", password: "Prototype2026!" })
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

async function approve(runId) {
  const res = await fetch(`${base}/api/cloud-agent/approve`, {
    method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ runId })
  });
  return { status: res.status, body: await res.json() };
}

test("a fresh cloud-agent trade.market_review run appends its new order to the end of the array, not the front", async () => {
  const db = readTempDb();
  db.profile = db.profile || {};
  db.profile.cloudAgentRuns = db.profile.cloudAgentRuns || [];
  // Simulate a real order left over from an earlier run/session, already last
  // in the array -- the thing every "most recent order" lookup treats as current.
  db.profile.orders = [{
    id: "ord_stale_previous_run", orderNumber: "AN-ORD-STALE-001", productId: null, product: "Test crop lot",
    countryId: "kenya", routeId: null, checkpoint: "Test checkpoint", checkpointIndex: 0,
    stage: "Agent market review", stageIndex: 1, trackingNumber: "AN-TRK-STALE-001",
    total: 500, timeline: [], settled: false, createdAt: new Date().toISOString()
  }];
  const runId = "run_market_review_append_test";
  db.profile.cloudAgentRuns.unshift({
    id: runId, goal: "Review a trade opportunity", mode: "controlled-cloud-agent", status: "awaiting-approval",
    planId: `plan_${runId}`, transparentWorkflow: [],
    steps: [{ id: "step1", module: "AgriTrade", tool: "trade.market_review", action: "Review market", status: "queued", requiresApproval: false, approvalStatus: "not-needed", attempts: 0 }],
    blockedSteps: 0, safeSteps: 1, summary: "Cloud agent prepared 1 step(s).",
    createdBy: "demo@agrinexus.org", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  });
  fs.writeFileSync(tempDbPath, JSON.stringify(db));

  const result = await approve(runId);
  assert.equal(result.status, 200, JSON.stringify(result.body));

  const after = readTempDb();
  assert.equal(after.profile.orders.length, 2, "the run must have created exactly one new order alongside the pre-existing one");
  const lastOrder = after.profile.orders[after.profile.orders.length - 1];
  assert.notEqual(lastOrder.id, "ord_stale_previous_run",
    "the newly created order must be LAST in the array (matching every other order-creation path), not buried behind a stale earlier order");
  assert.match(lastOrder.orderNumber, /^AN-ORD-AGENT-/, "the last order in the array must be the one this run just created");
});
