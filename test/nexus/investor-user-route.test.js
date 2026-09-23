"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Real Investor-login provisioning (2026-09-23): mirrors /api/admin/test-user
// and /api/admin/admin-user exactly, but forces role: "Investor" so a real
// investor can be handed a personal login instead of the shared seeded demo
// account (investor@agrinexus.org). These tests pin the three things that
// matter for handing this to an outside party: only an Admin can create one,
// it never overwrites a real pre-existing account, and the resulting login
// gets full feature access but is locked out of admin/integrations/governance.
const root = path.resolve(__dirname, "..", "..");
const port = 4606;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-investor-user-route-db.json");

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

function readUsers() {
  return JSON.parse(fs.readFileSync(tempDbPath, "utf8")).users;
}

async function loginAs(email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password }) });
  const cookie = res.headers.get("set-cookie")?.split(";")[0];
  return { res, cookie };
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

test("a non-admin cannot create an investor login", async () => {
  const { cookie } = await loginAs("user@agrinexus.org", "User2026!");
  const res = await fetch(`${base}/api/admin/investor-user`, { method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ email: "should-not-exist@example.com", name: "Nope", password: "Whatever2026!" }) });
  assert.equal(res.status, 403);
});

test("an admin creates a real, personal Investor login -- hashed password, stored role, can log in", async () => {
  const { cookie } = await loginAs("admin@agrinexus.org", "Admin2026!");
  const createRes = await fetch(`${base}/api/admin/investor-user`, { method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ email: "zzverify-investor@example.com", name: "Zzverify Investor", password: "ZzInvestor2026!" }) });
  const createBody = await createRes.json();
  assert.equal(createRes.status, 200);
  assert.equal(createBody.investorUserResult?.role, "Investor");
  assert.equal(createBody.investorUserResult?.password, "ZzInvestor2026!", "the admin creating it is shown the real password once");

  const stored = readUsers().find(user => user.email === "zzverify-investor@example.com");
  assert.equal(stored.role, "Investor");
  assert.ok(stored.password.startsWith("scrypt:"), `expected a scrypt hash, got: ${stored.password}`);

  const { res: loginRes } = await loginAs("zzverify-investor@example.com", "ZzInvestor2026!");
  assert.equal(loginRes.status, 200);
});

test("creating against an email that already belongs to a real (non-sandbox) account is refused, not overwritten", async () => {
  const { cookie } = await loginAs("admin@agrinexus.org", "Admin2026!");
  const res = await fetch(`${base}/api/admin/investor-user`, { method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ email: "admin@agrinexus.org", name: "Hijack Attempt", password: "Whatever2026!" }) });
  assert.equal(res.status, 409);
  const admin = readUsers().find(user => user.email === "admin@agrinexus.org");
  assert.equal(admin.role, "Admin", "the real admin account must be untouched");
});

test("the resulting Investor login gets full feature access but is blocked from admin-only routes", async () => {
  const { cookie } = await loginAs("zzverify-investor@example.com", "ZzInvestor2026!");
  const blocked = await fetch(`${base}/api/admin/test-user`, { method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ email: "should-not-be-created@example.com" }) });
  assert.equal(blocked.status, 403, "an Investor must not be able to create other logins");

  const state = await fetch(`${base}/api/state`, { headers: { cookie } });
  assert.equal(state.status, 200, "an Investor can load the normal app state (learning/workforce/health/trade/map/ai)");
});
