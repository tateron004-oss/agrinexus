"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (drone/cloud-agent audit): when a real cloud-agent step failed,
// executeCloudAgentRun created a "self-correction" -- a generic ai.copilot
// fallback summary prepared for human review, never a retry or recovery of
// the real action itself. If that fallback summary succeeded (which it
// almost always does, since ai.copilot/runAi rarely throws even with no
// OPENAI_API_KEY configured), the step's status became "self-corrected" and
// was counted as "completed" in the run's final tally -- excluded from
// `failed`. This made run.status become "completed" and run.summary claim
// "Cloud agent completed all N controlled workflow step(s)" even when the
// REAL action (a trade order, a wallet payment, a health referral, etc.)
// had actually failed and only a generic AI text summary succeeded in its
// place. An operator reading the run summary would believe a real action
// went through when it did not.
const root = path.resolve(__dirname, "..", "..");
const port = 4715;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-cloud-agent-self-correction-honesty-db.json");

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

function injectFailingRun() {
  const db = readTempDb();
  db.profile = db.profile || {};
  db.profile.cloudAgentRuns = db.profile.cloudAgentRuns || [];
  // No product catalog at all -- trade.market_review (executeAgentTool)
  // throws "No trade product catalog is available." unconditionally, a
  // real, deterministic way to force a genuine step failure without
  // needing network access or missing credentials.
  db.products = [];
  const runId = "run_self_correction_honesty_test";
  db.profile.cloudAgentRuns.unshift({
    id: runId, goal: "Review the market", mode: "controlled-cloud-agent", status: "awaiting-approval",
    planId: `plan_${runId}`, transparentWorkflow: [],
    steps: [{ id: "step1", module: "AgriTrade", tool: "trade.market_review", action: "Review market", status: "queued", requiresApproval: false, approvalStatus: "not-needed", attempts: 0 }],
    blockedSteps: 0, safeSteps: 1, summary: "Cloud agent prepared 1 step(s).",
    createdBy: "demo@agrinexus.org", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
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

test("a cloud-agent run whose real step failed (only a generic AI summary succeeded) is honestly reported as needing human review, not 'completed'", async () => {
  const runId = injectFailingRun();
  const result = await approve(runId);
  assert.equal(result.status, 200, JSON.stringify(result.body));

  const approval = result.body.cloudAgentApproval;
  const step = approval.execution.steps.find(item => item.tool === "trade.market_review");
  assert.equal(step.status, "self-corrected", "the real step must be recorded as self-corrected (failed, with only a fallback summary prepared)");

  assert.equal(approval.run.status, "needs-human-review",
    "a run containing a self-corrected (i.e. really failed) step must never be reported as fully completed");
  assert.doesNotMatch(approval.run.summary, /completed all \d+ controlled workflow step/i,
    "the run summary must never claim full completion when the real underlying action actually failed");
  assert.match(approval.run.summary, /need human review/i);
});
