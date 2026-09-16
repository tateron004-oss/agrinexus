const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const port = 4511;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-nexus-records-and-persistent-memory-auth-smoke-db.json");

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

    // Real bug fix: /api/nexus/records (GET/POST/PATCH/summary/consent) and
    // /api/nexus/persistent-memory/{records,receipts,predictive-context} had
    // no authentication check at all. Both back onto a single shared,
    // non-per-user store that can hold real chronic-care/telehealth content
    // (patient name, diagnosis, medication, allergies) -- any unauthenticated
    // caller could read every record ever created and write/patch arbitrary
    // content into any record by id.
    const unauthGet = await fetch(`${base}/api/nexus/records`);
    assert.equal(unauthGet.status, 401, "unauthenticated GET /api/nexus/records must be rejected");
    const unauthPost = await fetch(`${base}/api/nexus/records`, {
      method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ type: "telehealth_intake", payload: { patientName: "REALPATIENT_JaneDoe" } })
    });
    assert.equal(unauthPost.status, 401, "unauthenticated POST /api/nexus/records must be rejected");

    const unauthPMGet = await fetch(`${base}/api/nexus/persistent-memory/records`);
    assert.equal(unauthPMGet.status, 401, "unauthenticated GET /api/nexus/persistent-memory/records must be rejected");
    const unauthPMPost = await fetch(`${base}/api/nexus/persistent-memory/records`, {
      method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ type: "chronic_care", title: "REALPATIENT case", payload: { patientName: "REALPATIENT_Bob" } })
    });
    assert.equal(unauthPMPost.status, 401, "unauthenticated POST /api/nexus/persistent-memory/records must be rejected");

    // /status must remain public -- it's genuinely just capability flags.
    const statusRes = await fetch(`${base}/api/nexus/persistent-memory/status`);
    assert.equal(statusRes.status, 200, "persistent-memory /status should remain public");

    // A real authenticated Standard User must still be able to use both.
    const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
    const cookie = login.headers.get("set-cookie").split(";")[0];
    const authGet = await fetch(`${base}/api/nexus/records`, { headers: { cookie } });
    assert.equal(authGet.status, 200, "an authenticated user must still be able to list records");
    const authPost = await fetch(`${base}/api/nexus/records`, {
      method: "POST", headers: { "content-type": "application/json", cookie },
      body: JSON.stringify({ type: "telehealth_intake", payload: { note: "test" } })
    });
    assert.equal(authPost.status, 200, "an authenticated user must still be able to create a record");

    // Real bug fix: a self-service guest session (/api/auth/guest-session,
    // zero verification beyond a free-text display name) was treated as a
    // full Standard User and saw the shared db.profile's real health arrays
    // unredacted -- the app's own investor-only redaction never covered it.
    const guest = await fetch(`${base}/api/auth/guest-session`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ name: "Eve Attacker" }) });
    const guestBody = await guest.json();
    assert.equal(guestBody.profile?.accessibilityProfile?.redacted, true, "a guest session's profile must be routed through the same redaction as investor accounts");

    console.log("Nexus records and persistent-memory auth smoke test passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(error => {
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  console.error(error.stack || error.message);
  process.exit(1);
});
