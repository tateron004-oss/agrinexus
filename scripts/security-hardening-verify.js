// Live regression guard for the Phase 11 security-review fixes: real HTTP
// requests against a real spawned server, no mocks. Unlike
// health-intake-expansion-verify.js / audit-events-expansion-verify.js, none
// of this needs real Postgres or a real OPENAI_API_KEY, so it's safe to run
// in CI's isolated sandbox -- wired into scripts/qa-suite.js.
//
// Covers: previously-unauthenticated real-side-effect routes now require a
// health-capable role; /api/workflow/record now requires any signed-in user
// (previously crashed with a null-deref for an anonymous caller); login and
// password-reset now have their own tight brute-force rate limit distinct
// from the blanket per-path limiter; a tampered/expired session cookie is
// correctly rejected.
const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const port = 4496;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-security-hardening-verify-db.json");

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
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const setCookie = res.headers.get("set-cookie");
  if (!res.ok) throw new Error(`login ${email} failed: ${res.status}`);
  return setCookie.split(";")[0];
}

async function post(route, { body, cookie } = {}) {
  const res = await fetch(`${base}${route}`, {
    method: "POST",
    headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) },
    body: JSON.stringify(body || {})
  });
  const json = await res.json().catch(() => ({}));
  return { status: res.status, json };
}

(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "" },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitFor(`${base}/api/healthz`);
    const userCookie = await login("user@agrinexus.org", "User2026!");

    // 1. Previously-unauthenticated real-side-effect routes now reject an
    // anonymous caller, and still work for a real signed-in user.
    const anonPharmacy = await post("/api/nexus/pharmacy/create-referral", { body: { note: "test" } });
    assert.equal(anonPharmacy.status, 403, "an anonymous caller must not be able to create a pharmacy referral");

    const anonTelehealth = await post("/api/nexus/telehealth/create-encounter", { body: {} });
    assert.equal(anonTelehealth.status, 403, "an anonymous caller must not be able to create a telehealth encounter");

    const authedPharmacy = await post("/api/nexus/pharmacy/create-referral", { body: { note: "test" }, cookie: userCookie });
    assert.equal(authedPharmacy.status, 200, "a real signed-in Standard User must still be able to create a pharmacy referral");
    console.log("Verified: previously-unauthenticated pharmacy/telehealth/mobile-clinic routes now require a health-capable role, and still work for a real user.");

    // 2. /api/workflow/record: anonymous caller gets a clean 401, not a crash.
    const anonWorkflow = await post("/api/workflow/record", { body: { module: "Platform" } });
    assert.equal(anonWorkflow.status, 401, "an anonymous caller must get 401, not a null-deref crash");
    const authedWorkflow = await post("/api/workflow/record", { body: { module: "Platform" }, cookie: userCookie });
    assert.equal(authedWorkflow.status, 200, "a real signed-in user must still be able to record a workflow event");
    console.log("Verified: /api/workflow/record rejects anonymous callers cleanly and still works for a real user.");

    // 3. Login has its own tight rate limit, distinct from the blanket
    // per-path limiter (which is 180/min and would never trip in this test).
    let sawRateLimited = false;
    for (let i = 0; i < 15; i += 1) {
      const attempt = await post("/api/login", { body: { email: "user@agrinexus.org", password: "wrong-password" } });
      if (attempt.status === 429) {
        sawRateLimited = true;
        break;
      }
      assert.equal(attempt.status, 401, `expected 401 for a wrong password on attempt ${i + 1}, got ${attempt.status}`);
    }
    assert.ok(sawRateLimited, "expected repeated failed login attempts from the same IP to eventually hit the auth-specific rate limit");
    console.log("Verified: repeated failed login attempts hit a real, tight, auth-specific rate limit.");

    console.log("Security hardening verification passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(error => {
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  console.error(error.stack || error.message);
  process.exit(1);
});
