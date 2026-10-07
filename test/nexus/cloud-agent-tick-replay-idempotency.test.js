"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-cloud-agent-tick-replay-db.json");

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

// Found live: executeCloudAgentRun has no re-entrancy guard of its own -- it
// unconditionally re-iterates the FULL run.steps array on every call, with no
// check for a step that already has status "executed". A run with an
// approval-gated step lands in status "needs-approval", which is one of the
// two statuses cloudAgentTick()'s queue scan matches -- so an ordinary
// POST /api/cloud-agent/tick (gated only by canUse(user,"ai"), no approval
// needed to call it, default body.approved is falsy) kept re-picking up and
// re-executing the SAME run's already-succeeded safe steps on every single
// tick, unbounded, for as long as the approval-gated step stayed unapproved.
// This seeds the DB in the state right after a real first tick already
// executed the safe wallet-payment step once (status: "executed") while the
// approval-gated step is still blocked, then calls tick a second time.
test("a second /api/cloud-agent/tick on a run stuck in needs-approval does not re-execute an already-succeeded step", async () => {
  const db = readTempDb();
  db.profile = db.profile || {};
  db.profile.wallet = 975; // the real payout from the (simulated) first tick's execution
  db.profile.walletTransactions = [{ id: "wt_seed", type: "settlement", amount: 975, createdAt: new Date().toISOString() }];
  db.profile.agentExecutions = db.profile.agentExecutions || [];
  db.profile.cloudAgentRuns = db.profile.cloudAgentRuns || [];
  db.profile.cloudAgentQueue = db.profile.cloudAgentQueue || [];
  db.profile.orders = [{
    id: "ord_tick_replay_test", orderNumber: "AN-ORD-TICK-REPLAY", productId: null, product: "Test crop lot",
    countryId: "kenya", routeId: null, checkpoint: "Test checkpoint", checkpointIndex: 0,
    stage: "Delivered", stageIndex: 4, trackingNumber: "AN-TRK-TICK-REPLAY",
    total: 1000, timeline: [], settled: true, createdAt: new Date().toISOString()
  }];
  const runId = "run_tick_replay_test";
  db.profile.cloudAgentRuns.unshift({
    id: runId,
    goal: "Post a wallet payment, then send a follow-up",
    mode: "controlled-cloud-agent",
    status: "needs-approval",
    planId: `plan_${runId}`,
    transparentWorkflow: [],
    // step1 already succeeded on a real prior tick; step2 is still blocked
    // awaiting approval, which is why the run is parked at "needs-approval".
    steps: [
      { id: "step1", module: "AgriTrade", tool: "trade.wallet_payment", action: "Post wallet payment", status: "executed", requiresApproval: false, approvalStatus: "not-needed", attempts: 1, result: "settled", error: null, executedAt: "2020-01-01T00:00:00.000Z" },
      { id: "step2", module: "AI", tool: "ai.copilot", action: "Send a risky follow-up", status: "blocked-awaiting-approval", requiresApproval: true, approvalStatus: "needed", attempts: 0 }
    ],
    blockedSteps: 1,
    safeSteps: 1,
    summary: "Cloud agent completed 1 safe step(s) and paused 1 approval-gated step(s).",
    createdBy: "demo@agrinexus.org",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
  db.profile.cloudAgentQueue.unshift({ id: "queue_tick_replay_test", runId, status: "needs-approval", createdAt: new Date().toISOString() });
  fs.writeFileSync(tempDbPath, JSON.stringify(db));

  const tickRes = await fetch(`${base}/api/cloud-agent/tick`, {
    method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({})
  });
  assert.equal(tickRes.status, 200);

  const after = readTempDb();
  const runAfter = after.profile.cloudAgentRuns.find(item => item.id === runId);
  const step1After = runAfter.steps.find(item => item.id === "step1");
  // executeAgentStepWithRetry always stamps a FRESH executedAt (new Date()) on
  // any step it actually (re-)runs, regardless of whether the underlying
  // trade.wallet_payment call succeeds or is refused as already-settled -- so
  // an unchanged, still-old executedAt is direct, tool-agnostic proof the loop
  // skipped this step rather than re-executing it.
  assert.equal(step1After.executedAt, "2020-01-01T00:00:00.000Z", "an already-executed step must be left untouched, not silently re-run, by a later tick");
  assert.equal(after.profile.wallet, 975, "the wallet must not be credited a second time for a step that already executed");
  assert.equal((after.profile.walletTransactions || []).length, 1, "no duplicate wallet transaction should be posted by the replay tick");
});
