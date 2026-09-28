"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4702;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-cloud-agent-approval-idempotency-db.json");

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

// A $1000 order at the default 2.5% platform fee settles for a $975 seller net payout -- the real,
// order-tied amount trade.wallet_payment now posts (see server.js's fix), replacing the old fixed,
// fabricated $120 credit this test file used to rely on.
const TEST_ORDER_TOTAL = 1000;
const EXPECTED_SETTLEMENT_NET = 975;

function injectRun(status) {
  const db = readTempDb();
  db.profile = db.profile || {};
  db.profile.wallet = 0;
  db.profile.walletTransactions = [];
  db.profile.agentExecutions = db.profile.agentExecutions || [];
  db.profile.cloudAgentRuns = db.profile.cloudAgentRuns || [];
  db.profile.orders = db.profile.orders || [];
  db.profile.tradeLogisticsRecords = db.profile.tradeLogisticsRecords || [];
  const orderId = `ord_idempotency_test_${status}`;
  db.profile.orders.push({
    id: orderId, orderNumber: `AN-ORD-TEST-${status}`, productId: null, product: "Test crop lot",
    countryId: "kenya", routeId: null, checkpoint: "Test checkpoint", checkpointIndex: 0,
    stage: "Delivered", stageIndex: 4, trackingNumber: `AN-TRK-TEST-${status}`,
    total: TEST_ORDER_TOTAL, timeline: [], settled: false, createdAt: new Date().toISOString()
  });
  const runId = `run_idempotency_test_${status}`;
  db.profile.cloudAgentRuns.unshift({
    id: runId,
    goal: "Post a wallet payment",
    mode: "controlled-cloud-agent",
    status,
    planId: `plan_${runId}`,
    transparentWorkflow: [],
    // trade.wallet_payment is a real, deterministic, no-network, no-approval step (server.js's
    // executeAgentTool) that settles the most recent real order for its real, order-tied payout -- a
    // clean way to observe whether executeCloudAgentRun actually re-ran, without needing a full
    // plan/catalog round trip.
    steps: [{ id: "step1", module: "AgriTrade", tool: "trade.wallet_payment", action: "Post wallet payment", status: "queued", requiresApproval: false, approvalStatus: "not-needed", attempts: 0 }],
    blockedSteps: 0,
    safeSteps: 1,
    summary: "Cloud agent prepared 1 step(s).",
    createdBy: "demo@agrinexus.org",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
  fs.writeFileSync(tempDbPath, JSON.stringify(db));
  return runId;
}

async function approve(runId) {
  const res = await fetch(`${base}/api/cloud-agent/approve`, {
    method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ runId })
  });
  return { status: res.status, body: await res.json() };
}

// Found live: executeCloudAgentRun has no re-entrancy guard of its own and
// unconditionally re-runs every step in run.steps. Approving the same runId
// twice (double-click, client retry, a replayed request) re-applied every
// side effect a second time -- another wallet credit, another duplicate
// trade order, etc, all counted again as if it were a genuinely new run.
test("approving an already-completed cloud agent run is refused, not silently re-executed", async () => {
  const runId = injectRun("completed");
  const executionsBefore = (readTempDb().profile.agentExecutions || []).length;
  const result = await approve(runId);
  assert.equal(result.status, 409, JSON.stringify(result.body));
  assert.match(result.body.error, /already completed/);

  const db = readTempDb();
  assert.equal(db.profile.wallet, 0, "a run that is already completed must not be re-executed, so the wallet must not be credited");
  assert.equal((db.profile.walletTransactions || []).length, 0);
  assert.equal((db.profile.agentExecutions || []).length, executionsBefore, "no new execution record should be created for a refused re-approval");
});

test("approving an already-needs-human-review cloud agent run is refused, not silently re-executed", async () => {
  const runId = injectRun("needs-human-review");
  const result = await approve(runId);
  assert.equal(result.status, 409, JSON.stringify(result.body));

  const db = readTempDb();
  assert.equal(db.profile.wallet, 0);
});

test("a run genuinely awaiting approval can still be approved and executes exactly once", async () => {
  const runId = injectRun("awaiting-approval");
  const result = await approve(runId);
  assert.equal(result.status, 200, JSON.stringify(result.body));

  const db = readTempDb();
  assert.equal(db.profile.wallet, EXPECTED_SETTLEMENT_NET, "the one legitimate approval must still execute the step");
  assert.equal((db.profile.walletTransactions || []).length, 1);

  // Approving the very same run again, now that it is completed, must be refused.
  const secondAttempt = await approve(runId);
  assert.equal(secondAttempt.status, 409, JSON.stringify(secondAttempt.body));
  const afterSecondAttempt = readTempDb();
  assert.equal(afterSecondAttempt.profile.wallet, EXPECTED_SETTLEMENT_NET, "a second approval of the same run must not credit the wallet again");
  assert.equal((afterSecondAttempt.profile.walletTransactions || []).length, 1);
});

// Found live (GPS/cloud-agent audit): trade.wallet_payment used to unconditionally credit a fixed,
// fabricated $120 "M-Pesa" transaction -- never tied to any real order, order.total, or delivery status.
// These cover the fix directly: no fabricated credit without a real, delivered, not-already-settled order.
test("trade.wallet_payment posts no fabricated credit when there is no order to settle", async () => {
  const db = readTempDb();
  db.profile = db.profile || {};
  db.profile.wallet = 0;
  db.profile.walletTransactions = [];
  db.profile.agentExecutions = db.profile.agentExecutions || [];
  db.profile.cloudAgentRuns = db.profile.cloudAgentRuns || [];
  db.profile.orders = []; // deliberately no order at all
  const runId = "run_no_order_test";
  db.profile.cloudAgentRuns.unshift({
    id: runId, goal: "Post a wallet payment", mode: "controlled-cloud-agent", status: "awaiting-approval",
    planId: `plan_${runId}`, transparentWorkflow: [],
    steps: [{ id: "step1", module: "AgriTrade", tool: "trade.wallet_payment", action: "Post wallet payment", status: "queued", requiresApproval: false, approvalStatus: "not-needed", attempts: 0 }],
    blockedSteps: 0, safeSteps: 1, summary: "Cloud agent prepared 1 step(s).",
    createdBy: "demo@agrinexus.org", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  });
  fs.writeFileSync(tempDbPath, JSON.stringify(db));
  const result = await approve(runId);
  assert.equal(result.status, 200, JSON.stringify(result.body));
  const after = readTempDb();
  assert.equal(after.profile.wallet, 0, "no fabricated credit must ever be posted when no real order exists to settle");
  assert.equal((after.profile.walletTransactions || []).length, 0);
});

test("trade.wallet_payment refuses to settle an order that has not been marked Delivered yet, posting no credit", async () => {
  const db = readTempDb();
  db.profile = db.profile || {};
  db.profile.wallet = 0;
  db.profile.walletTransactions = [];
  db.profile.agentExecutions = db.profile.agentExecutions || [];
  db.profile.cloudAgentRuns = db.profile.cloudAgentRuns || [];
  db.profile.orders = [{
    id: "ord_not_delivered", orderNumber: "AN-ORD-NOT-DELIVERED", productId: null, product: "Test crop lot",
    countryId: "kenya", routeId: null, checkpoint: "Test checkpoint", checkpointIndex: 0,
    stage: "In transit", stageIndex: 2, trackingNumber: "AN-TRK-NOT-DELIVERED",
    total: TEST_ORDER_TOTAL, timeline: [], settled: false, createdAt: new Date().toISOString()
  }];
  const runId = "run_not_delivered_test";
  db.profile.cloudAgentRuns.unshift({
    id: runId, goal: "Post a wallet payment", mode: "controlled-cloud-agent", status: "awaiting-approval",
    planId: `plan_${runId}`, transparentWorkflow: [],
    steps: [{ id: "step1", module: "AgriTrade", tool: "trade.wallet_payment", action: "Post wallet payment", status: "queued", requiresApproval: false, approvalStatus: "not-needed", attempts: 0 }],
    blockedSteps: 0, safeSteps: 1, summary: "Cloud agent prepared 1 step(s).",
    createdBy: "demo@agrinexus.org", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  });
  fs.writeFileSync(tempDbPath, JSON.stringify(db));
  const result = await approve(runId);
  assert.equal(result.status, 200, JSON.stringify(result.body));
  const after = readTempDb();
  assert.equal(after.profile.wallet, 0, "an order that has not reached Delivered must never be settled for a fabricated or premature payout");
  assert.equal((after.profile.walletTransactions || []).length, 0);
});
