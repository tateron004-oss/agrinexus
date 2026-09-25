"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (login-security follow-up audit): /api/login's only brute-force
// protection was authRateLimit(), keyed solely by source IP -- an attacker
// rotating through many IPs (botnet, proxy pool) could make unlimited
// attempts in aggregate against one specific victim account, since every new
// IP got a fresh 10-attempts/5min budget. This pins the new, independent
// per-account budget (keyed on the submitted email itself, not on whether an
// account exists -- see server.js's authRateLimitByAccount comment) and
// proves it is genuinely account-scoped: it fires on its own, distinct
// threshold, well before the per-IP budget would, and blocking one email
// never blocks a different one from the same IP.
const root = path.resolve(__dirname, "..", "..");
const port = 4621;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-login-account-rate-limit-db.json");

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

function login(email, password) {
  return fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password })
  });
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

test("repeated failed logins against one email are blocked by a per-account budget, well before the per-IP budget (10/5min) would fire", async () => {
  const email = "zzrate-limit-victim@example.com";
  for (let i = 0; i < 6; i += 1) {
    const res = await login(email, "wrong-password");
    assert.equal(res.status, 401, `attempt ${i + 1} should still be a plain rejection, not yet rate-limited`);
  }
  const seventh = await login(email, "wrong-password");
  assert.equal(seventh.status, 429, "the 7th attempt against the same email must be blocked by the per-account budget");
  assert.match((await seventh.json()).error, /too many login attempts/i);
});

test("the per-account block for one email does not block a different email from the same IP", async () => {
  const stillBlocked = await login("zzrate-limit-victim@example.com", "wrong-password");
  assert.equal(stillBlocked.status, 429, "the exhausted account's budget must still be blocked");

  const otherEmail = "zzrate-limit-innocent-bystander@example.com";
  const res = await login(otherEmail, "wrong-password");
  assert.equal(res.status, 401, "a different email sharing the same source IP must not be swept up in the other account's block");
});
