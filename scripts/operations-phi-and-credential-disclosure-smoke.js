const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const port = 4510;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-operations-phi-and-credential-disclosure-smoke-db.json");

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
  return { status: res.status, json: await res.json().catch(() => ({})) };
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

    // Real bug fix 1: publicState()'s loginProfiles field serialized every
    // seeded account's cleartext password (including Admin's) into EVERY
    // response, reachable unauthenticated via the pre-auth operations
    // routes. The client never even reads this field's password (it has
    // its own hardcoded, password-less login picker).
    const anonAction = await post("/api/nexus/operations/action", { action: "create_learning_profile" }, null);
    const profiles = anonAction.json.loginProfiles || [];
    assert.ok(profiles.length > 0, "loginProfiles should still list the demo accounts");
    for (const profile of profiles) {
      assert.equal(profile.password, undefined, `loginProfiles must never include a password field (got one for ${profile.email})`);
    }

    // Real bug fix 2: nexusOperationsSummary()'s recentAudit field included
    // the full before/after record snapshot for every operations action --
    // for chronic-care/health actions that's real patient name, condition,
    // medications, and allergies, with no per-user scoping (a single shared
    // collection) and no auth on the read paths. Verify PHI created here is
    // not visible to an unauthenticated caller via any of the three read
    // paths, but still visible to a real Admin.
    await post("/api/nexus/operations/action", {
      action: "create_chronic_care_profile",
      conditionArea: "diabetes",
      patientName: "Jane REALPATIENT Doe",
      medications: "insulin, metformin",
      allergies: "penicillin"
    }, null);

    const statusRes = await fetch(`${base}/api/nexus/operations/status`).then(r => r.json());
    assert.equal(JSON.stringify(statusRes).includes("REALPATIENT"), false, "GET /api/nexus/operations/status must not leak PHI to an unauthenticated caller");

    const auditRes = await post("/api/nexus/operations/action", { action: "show_audit_log" }, null);
    assert.equal(JSON.stringify(auditRes.json).includes("REALPATIENT"), false, "show_audit_log must not leak PHI to an unauthenticated caller");

    const stateRes = await post("/api/nexus/operations/action", { action: "status" }, null);
    assert.equal(JSON.stringify(stateRes.json).includes("REALPATIENT"), false, "the embedded persistentOperations summary must not leak PHI to an unauthenticated caller");

    const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
    const cookie = login.headers.get("set-cookie").split(";")[0];
    const adminAudit = await post("/api/nexus/operations/action", { action: "show_audit_log" }, cookie);
    assert.equal(JSON.stringify(adminAudit.json).includes("REALPATIENT"), true, "a real Admin must still see full audit detail");

    console.log("Operations PHI and credential disclosure smoke test passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(error => {
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  console.error(error.stack || error.message);
  process.exit(1);
});
