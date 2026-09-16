const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const port = 4509;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-admin-snapshot-disclosure-smoke-db.json");

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

async function post(route, body, cookie) {
  const res = await fetch(`${base}${route}`, {
    method: "POST",
    headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) },
    body: JSON.stringify(body)
  });
  return { status: res.status, json: await res.json().catch(() => ({})), cookie: res.headers.get("set-cookie")?.split(";")[0] };
}

(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_PRESERVE_EMPTY_ENV: "1" },
    stdio: "ignore",
    windowsHide: true
  });
  try {
    await waitFor(`${base}/api/healthz`);

    // Real bug fix: publicState() unconditionally computed and embedded
    // adminSnapshot() -- the full cross-tenant user directory (every
    // account's name/email/role), subscriber/support records, and a
    // platform-wide audit trail -- for EVERY caller, with no role check at
    // all. Any logged-in Standard User, a zero-credential guest session, or
    // even a fully unauthenticated POST to the local operations console
    // (which substituted db.users[0], the seeded Platform Admin, as a fake
    // caller identity) received the complete admin snapshot. Combined with
    // the public demo-login credential directory (`loginProfiles`,
    // intentionally public), this chained into full admin account takeover.

    // 1. A logged-in Standard User must not see the admin snapshot.
    const userLogin = await post("/api/login", { email: "user@agrinexus.org", password: "User2026!" });
    assert.equal(userLogin.json.admin, null, "a Standard User must not receive the admin snapshot");

    // 2. A zero-credential guest session must not see it either.
    const guest = await post("/api/auth/guest-session", { name: "Guest Tester" });
    assert.equal(guest.json.admin, null, "a guest session must not receive the admin snapshot");

    // 3. THE CRITICAL PATH: a fully unauthenticated POST to the local
    //    operations console (no cookie, no login at all) must not leak the
    //    admin snapshot, and must not echo back the substituted account's
    //    identity as the caller's own `user` field.
    const anonOps = await post("/api/nexus/operations/action", { action: "create_learning_profile" }, null);
    assert.equal(anonOps.status, 200, "an unauthenticated operations-console request must succeed (a real user===null must not crash publicState() downstream, e.g. cloudAgentPolicy)");
    assert.equal(anonOps.json.admin, null, "an unauthenticated operations-console request must not leak the admin snapshot");
    assert.equal(anonOps.json.user, null, "an unauthenticated operations-console request must not report a substituted account as the caller's identity");
    assert.notEqual(anonOps.json.nexusOperationsResult?.ok, false, "the anonymous operations console must still work for local bookkeeping");

    // 4. A real Admin must still see the full snapshot.
    const adminLogin = await post("/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" });
    assert.ok(adminLogin.json.admin, "a real Admin must still receive the admin snapshot");
    assert.ok(Array.isArray(adminLogin.json.admin.users) && adminLogin.json.admin.users.length > 0, "admin snapshot must still list the user directory for a real admin");

    console.log("Admin snapshot disclosure smoke test passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(error => {
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  console.error(error.stack || error.message);
  process.exit(1);
});
