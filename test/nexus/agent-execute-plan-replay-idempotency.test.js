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
const tempDbPath = path.join(root, "tmp-agent-execute-plan-replay-db.json");

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

// Found live: executeAgentPlanObject() had no re-entrancy guard of its own --
// every call unconditionally re-executed every step in plan.steps, with no
// check for a step that already has status "executed" (the same shape
// already fixed tonight in executeCloudAgentRun). POST /api/agent/execute is
// gated only by canUse(user,"ai"), which the default Standard User role has,
// and has no re-entrancy guard of its own either -- a double-click, network
// retry, or duplicate client request with the same planId re-ran the whole
// plan, including trade.market_review, which pushes a real order with a real
// dollar total on every invocation.
test("a second POST /api/agent/execute for an already-executed plan does not re-run its steps", async () => {
  const db = readTempDb();
  db.profile = db.profile || {};
  db.profile.orders = db.profile.orders || [];
  db.profile.agentPlans = db.profile.agentPlans || [];
  db.profile.agentExecutions = db.profile.agentExecutions || [];
  const planId = "plan_agent_execute_replay_test";
  // Seeded in the state right after a real first execution already
  // completed: every step already carries status "executed" and a fixed,
  // old executedAt.
  db.profile.agentPlans.unshift({
    id: planId,
    goal: "Review AgriTrade opportunity",
    status: "executed",
    approvedBy: "demo@agrinexus.org",
    approvedAt: "2020-01-01T00:00:00.000Z",
    executedBy: "demo@agrinexus.org",
    executedAt: "2020-01-01T00:00:00.000Z",
    steps: [
      { id: "step1", module: "AgriTrade", tool: "trade.market_review", action: "Review trade opportunity", detail: "Review the active product.", status: "executed", attempts: 1, result: "Created AN-ORD-AGENT-001 market review.", error: null, executedAt: "2020-01-01T00:00:00.000Z" }
    ]
  });
  fs.writeFileSync(tempDbPath, JSON.stringify(db));
  const ordersBefore = readTempDb().profile.orders.length;

  const res = await fetch(`${base}/api/agent/execute`, {
    method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ planId, approved: true })
  });
  assert.equal(res.status, 200);

  const after = readTempDb();
  assert.equal(after.profile.orders.length, ordersBefore, "no duplicate trade.market_review order should be created by re-executing an already-executed plan");
  const planAfter = after.profile.agentPlans.find(item => item.id === planId);
  const step1After = planAfter.steps.find(item => item.id === "step1");
  assert.equal(step1After.executedAt, "2020-01-01T00:00:00.000Z", "an already-executed step must be left untouched, not silently re-run");
});
