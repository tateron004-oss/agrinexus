"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (login-security follow-up audit): completing a password reset
// (POST /api/auth/password-reset/confirm) never touched the sessions Map,
// the Postgres session mirror, or authTokensRevokedAt -- unlike /api/logout,
// which explicitly does all three. An attacker holding a stolen sid cookie
// or durable "remember me" token stayed fully authenticated straight
// through, and after, the victim's own reset. This pins that a reset now
// revokes every outstanding session for the account, and that the new
// password still works while the old one no longer does.
const root = path.resolve(__dirname, "..", "..");
const port = 4622;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-password-reset-session-revocation-db.json");

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

function readDbFile() {
  return JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
}

function writeDbFile(db) {
  fs.writeFileSync(tempDbPath, JSON.stringify(db));
}

function cookieHeaderFrom(res) {
  // node's fetch exposes only one combined set-cookie header via .get(); the
  // server sends sid and (when a durable token is issued) auth as separate
  // Set-Cookie headers, so pull every value out via getSetCookie() when
  // available and fall back to the single-header form otherwise.
  const raw = typeof res.headers.getSetCookie === "function" ? res.headers.getSetCookie() : [res.headers.get("set-cookie")].filter(Boolean);
  return raw.map(part => part.split(";")[0]).join("; ");
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

test("completing a password reset revokes every existing session for that account, while the new password keeps working", async () => {
  const email = "admin@agrinexus.org";

  const loginRes = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password: "Admin2026!" }) });
  assert.equal(loginRes.status, 200);
  const oldCookie = cookieHeaderFrom(loginRes);
  assert.match(oldCookie, /agrinexus_sid=/, "login must issue a session cookie to attack in this test");

  const beforeReset = await fetch(`${base}/api/state`, { headers: { cookie: oldCookie } });
  const beforeBody = await beforeReset.json();
  assert.equal(beforeBody.user?.email, email, "the pre-reset session must actually authenticate as the account");

  // Simulate a password-reset request having already been made: server.js's
  // readDb() re-reads this JSON file fresh on every request (async file I/O,
  // no in-memory-only cache -- see readDb()'s own comment), so writing a
  // known token hash directly here lets this test drive /confirm without
  // needing to intercept the real endpoint's server-generated random token,
  // which is never exposed over HTTP (by design -- it's emailed, not returned).
  const rawToken = "test-harness-known-reset-token-0123456789abcdef";
  const tokenHash = require("node:crypto").createHash("sha256").update(rawToken).digest("hex");
  const db = readDbFile();
  const admin = db.users.find(user => user.email === email);
  admin.resetTokenHash = tokenHash;
  admin.resetTokenExpiresAt = new Date(Date.now() + 30 * 60 * 1000).toISOString();
  writeDbFile(db);

  const newPassword = "BrandNewAdminPass2026!";
  const confirmRes = await fetch(`${base}/api/auth/password-reset/confirm`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, token: rawToken, newPassword }) });
  assert.equal(confirmRes.status, 200, `reset confirm should succeed with the token this test just planted: ${await confirmRes.text()}`);

  const afterReset = await fetch(`${base}/api/state`, { headers: { cookie: oldCookie } });
  assert.equal(afterReset.status, 401, "the pre-reset session cookie must no longer authenticate after a completed password reset");

  const newLogin = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password: newPassword }) });
  assert.equal(newLogin.status, 200, "the new password set by the reset must work");

  const oldPasswordLogin = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password: "Admin2026!" }) });
  assert.equal(oldPasswordLogin.status, 401, "the old password must no longer work after the reset");
});

test("both password-reset routes are also guarded by a per-account rate limit, independent of the per-IP one", () => {
  const source = fs.readFileSync(path.join(root, "server.js"), "utf8");
  const requestRouteStart = source.indexOf('url.pathname === "/api/auth/password-reset" &&');
  const confirmRouteStart = source.indexOf('url.pathname === "/api/auth/password-reset/confirm" &&');
  assert.notEqual(requestRouteStart, -1);
  assert.notEqual(confirmRouteStart, -1);
  const requestRouteBody = source.slice(requestRouteStart, requestRouteStart + 1400);
  const confirmRouteBody = source.slice(confirmRouteStart, confirmRouteStart + 1400);
  assert.match(requestRouteBody, /authRateLimitByAccount\("password-reset", email, 5, 900_000\)/,
    "the request endpoint must check a per-account budget, not just the per-IP one, or a rotated-IP attacker can email-bomb one victim indefinitely");
  assert.match(confirmRouteBody, /authRateLimitByAccount\("password-reset", email, 5, 900_000\)/,
    "the confirm endpoint must check a per-account budget too");
});
