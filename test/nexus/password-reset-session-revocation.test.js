"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const root = path.resolve(__dirname, "..", "..");
const port = 4573;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-password-reset-revocation-db.json");

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
const rawToken = crypto.randomBytes(24).toString("hex");

test.before(async () => {
  const seedDb = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  const admin = seedDb.users.find(item => item.email === "admin@agrinexus.org");
  admin.resetTokenHash = crypto.createHash("sha256").update(rawToken).digest("hex");
  admin.resetTokenExpiresAt = new Date(Date.now() + 30 * 60 * 1000).toISOString();
  fs.writeFileSync(tempDbPath, JSON.stringify(seedDb));
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
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

// Found live (push/auth/call-screening follow-up audit): unlike /api/logout
// (which stamps authTokensRevokedAt and evicts the session), a successful
// password reset never touched the victim's already-issued session or
// durable "remember me" cookie -- an attacker holding a stolen session (the
// exact scenario a password reset is meant to recover from) stayed fully
// authenticated through and after the victim's own reset.
test("resetting a password revokes every session already issued for that account, not just the reset token itself", async () => {
  const loginRes = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  const stolenCookie = loginRes.headers.get("set-cookie").split(";")[0];

  const beforeReset = await fetch(`${base}/api/state`, { headers: { cookie: stolenCookie } });
  assert.equal(beforeReset.status, 200, "the stolen session must work before the reset, proving it was genuinely live");

  const confirmRes = await fetch(`${base}/api/auth/password-reset/confirm`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", token: rawToken, newPassword: "Brand-New-Pass1" })
  });
  assert.equal(confirmRes.status, 200);

  const afterReset = await fetch(`${base}/api/state`, { headers: { cookie: stolenCookie } });
  assert.equal(afterReset.status, 401, "the pre-reset session must be dead once the password has been reset");
});
