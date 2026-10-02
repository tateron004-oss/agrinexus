"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (legacy server.js route sweep): unlike its siblings /api/demo/run and /api/demo/wow
// (guarded with a permanent xCompletedAt flag -- one-time setup actions), /api/demo/investor-live is
// legitimately meant to be re-run across multiple real investor meetings, so a permanent guard would be
// the wrong fix. But it had NO protection at all against a double-click or retry of the SAME click --
// every POST unconditionally re-ran runLocalPilotStudio()/aiOrchestrationReview() (real AI-provider
// calls) and pushed another duplicate entry into db.profile.liveInvestorDemos. Fixed with
// withActionLifecycle, the idempotency-key-scoped guard already used elsewhere in this file, which
// suppresses a genuine retry of the identical request within its dedupe window while still letting a
// deliberately new demo run execute for real.
const root = path.resolve(__dirname, "..", "..");
const port = 4797;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-investor-live-demo-idempotency-db.json");

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

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  return res.headers.get("set-cookie")?.split(";")[0];
}

function readProfile() {
  return JSON.parse(fs.readFileSync(tempDbPath, "utf8")).profile || {};
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

test.after(async () => {
  server?.kill();
  fs.rmSync(tempDbPath, { force: true });
});

test("a retried POST to /api/demo/investor-live only really runs the demo once, not twice", async () => {
  const cookie = await login("user@agrinexus.org", "User2026!");
  assert.ok(cookie, "test login must succeed");

  const post = () => fetch(`${base}/api/demo/investor-live`, {
    method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ scenario: "farmer-market" })
  }).then(res => res.json());

  // Sequential, not concurrent: a double-click or client retry is two real, sequential HTTP requests
  // (the second sent once the first has already round-tripped, or timed out client-side), not two
  // requests landing in the exact same in-memory instant -- concurrent requests would also race on this
  // file's own separate, already-known, deliberately-deferred readDb/writeDb lost-update issue, which is
  // not what this fix targets.
  const first = await post();
  const second = await post();
  assert.equal(first.liveInvestorDemoResult?.demo?.id, second.liveInvestorDemoResult?.demo?.id,
    "a duplicate, retried request for the identical demo must be handed the same real result, not a second independent run");

  const demos = readProfile().liveInvestorDemos || [];
  assert.equal(demos.length, 1, "a retried duplicate POST must not create a second liveInvestorDemos entry");
});

test("a genuinely new demo run (a different scenario) still executes for real, unaffected by the fix", async () => {
  const cookie = await login("user@agrinexus.org", "User2026!");
  const runScenario = scenario => fetch(`${base}/api/demo/investor-live`, {
    method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ scenario })
  }).then(res => res.json());

  const before = (readProfile().liveInvestorDemos || []).length;
  const a = await runScenario("cooperative-onboarding");
  const b = await runScenario("logistics-network");
  assert.notEqual(a.liveInvestorDemoResult?.demo?.id, b.liveInvestorDemoResult?.demo?.id, "a different scenario must be a genuinely new run");

  const after = (readProfile().liveInvestorDemos || []).length;
  assert.equal(after, before + 2, "two genuinely distinct demo runs must both be recorded");
});
