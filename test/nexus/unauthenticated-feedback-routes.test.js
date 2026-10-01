"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (server.js helper-function sweep, segment 3): /api/nexus/health-evidence/feedback
// and /api/nexus/workforce-genesis/feedback had no `if (!user)` check at all, unlike every
// comparable feedback/queue route in this file -- a fully anonymous caller could append arbitrary
// freeform text into db.profile.nexusHealthEvidenceGovernanceQueue/nexusWorkforceGovernanceQueue
// (a shared, capped-at-100 queue), silently evicting real signed-in users' queued feedback.
const root = path.resolve(__dirname, "..", "..");
const port = 4824;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-unauthenticated-feedback-routes-db.json");

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

test("an unauthenticated caller cannot post to /api/nexus/health-evidence/feedback", async () => {
  const res = await fetch(`${base}/api/nexus/health-evidence/feedback`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ note: "anonymous spam" })
  });
  assert.equal(res.status, 401);
});

test("an unauthenticated caller cannot post to /api/nexus/workforce-genesis/feedback", async () => {
  const res = await fetch(`${base}/api/nexus/workforce-genesis/feedback`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ note: "anonymous spam" })
  });
  assert.equal(res.status, 401);
});

test("a signed-in user can still post to both feedback routes", async () => {
  const loginRes = await fetch(`${base}/api/login`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" })
  });
  assert.equal(loginRes.status, 200);
  const cookie = loginRes.headers.get("set-cookie").split(";")[0];

  const healthRes = await fetch(`${base}/api/nexus/health-evidence/feedback`, {
    method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ note: "real feedback" })
  });
  assert.equal(healthRes.status, 200);

  const workforceRes = await fetch(`${base}/api/nexus/workforce-genesis/feedback`, {
    method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ note: "real feedback" })
  });
  assert.equal(workforceRes.status, 200);
});
