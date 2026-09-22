"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Built while verifying the Phase A shadow-write flags (HEALTH_INTAKE_STORE/WORKFORCE_STORE/TRADE_STORE/
// COURSE_STORE/AUDIT_EVENT_STORE) after they were turned on in production: none of the six *_STORE flags
// had any read-back surface anywhere -- an admin could only infer a shadow-write worked from the absence
// of an entry in /api/admin/system/errors, never see the actual row. This endpoint reads each domain's
// real Postgres table back directly.
const root = path.resolve(__dirname, "..", "..");
const port = 4605;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-postgres-shadow-status-db.json");

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
let adminCookie;
let userCookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    // No *_STORE flags and no DATABASE_URL set: every domain must honestly report enabled:false rather
    // than attempting (and failing) a real Postgres query.
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", DATABASE_URL: "" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const adminRes = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  adminCookie = adminRes.headers.get("set-cookie").split(";")[0];
  const userRes = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
  userCookie = userRes.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

test("a non-admin is refused", async () => {
  const res = await fetch(`${base}/api/admin/system/postgres-shadow-status`, { headers: { cookie: userCookie } });
  assert.equal(res.status, 403);
});

test("an anonymous caller is refused", async () => {
  const res = await fetch(`${base}/api/admin/system/postgres-shadow-status`);
  assert.equal(res.status, 401);
});

test("an admin gets an honest per-domain report -- every domain reports disabled (not an empty-but-enabled list) when no *_STORE flag and no DATABASE_URL are set", async () => {
  const res = await fetch(`${base}/api/admin/system/postgres-shadow-status`, { headers: { cookie: adminCookie } });
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.equal(body.ok, true);
  assert.equal(body.authStore, "blob");
  for (const key of ["healthIntakes", "workforceRoles", "jobApplications", "tradeOrders", "courses", "courseEnrollments", "auditEvents", "aiRuns"]) {
    assert.equal(body.domains[key].enabled, false, `${key} must report disabled, not silently query Postgres with no DATABASE_URL`);
    assert.deepEqual(body.domains[key].rows, []);
    assert.equal(body.domains[key].count, 0);
  }
  assert.match(body.domains.jobApplications.note, /AUTH_STORE=postgres/);
  assert.match(body.domains.courseEnrollments.note, /AUTH_STORE=postgres/);
});
