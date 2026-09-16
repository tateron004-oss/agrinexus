// Real bug fixes:
// 1. POST /api/nexus/records/lifecycle, GET /api/nexus/operation-receipts,
//    and GET /api/nexus/audit-log had no auth check at all -- the same
//    "missing 401 gate on a shared, non-per-user store" pattern already
//    fixed a dozen times this session, missed on these three. Any
//    unauthenticated caller could inject fabricated lifecycle events (e.g.
//    "patient marked deceased" for an arbitrary entityId) and read back the
//    full, unredacted audit log and receipt history -- audit entries carry
//    real before/after PHI snapshots from chronic-care/intake/transaction
//    flows via addNexusOperationsAudit(). Fixed with the standard
//    `if (!user) return 401` guard, plus admin-only redaction on
//    audit-log's before/after fields (reusing redactSensitiveAuditEntry(),
//    already used for the sibling operations-summary endpoint).
// 2. POST /api/admin/admin-user and /api/admin/test-user are meant to
//    create/reset throwaway sandbox logins, but matched an existing account
//    purely by attacker-supplied email and then overwrote its
//    password/name/role unconditionally -- any admin could silently take
//    over (or demote) ANY other real account, including a different real
//    Admin's login, just by knowing their email. Fixed by marking accounts
//    created through these routes with isSandboxTestAccount: true and
//    refusing to touch any existing account that lacks that flag.
const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = 4630;
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-admin-takeover-and-ops-disclosure-smoke-db.json");

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
async function waitForServer() {
  for (let i = 0; i < 80; i++) { try { const r = await fetch(`${base}/api/healthz`); if (r.ok) return; } catch { await wait(150); } }
  throw new Error("not up");
}

(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_PRESERVE_EMPTY_ENV: "1" },
    stdio: "ignore", windowsHide: true
  });
  try {
    await waitForServer();
    const failures = [];
    const check = async (label, fn) => { try { await fn(); console.log("OK:", label); } catch (e) { failures.push(label + ": " + e.message); console.error("FAIL:", label, e.message); } };

    await check("unauthenticated POST /api/nexus/records/lifecycle -> 401", async () => {
      const r = await fetch(`${base}/api/nexus/records/lifecycle`, {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ entityType: "patient", entityId: "REALMARKER_p1", status: "deceased" })
      });
      assert.equal(r.status, 401);
    });

    await check("unauthenticated GET /api/nexus/operation-receipts -> 401", async () => {
      const r = await fetch(`${base}/api/nexus/operation-receipts`);
      assert.equal(r.status, 401);
    });

    await check("unauthenticated GET /api/nexus/audit-log -> 401", async () => {
      const r = await fetch(`${base}/api/nexus/audit-log`);
      assert.equal(r.status, 401);
    });

    const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
    const userCookie = login.headers.get("set-cookie").split(";")[0];

    await check("authenticated Standard User sees redacted before/after on audit-log", async () => {
      await fetch(`${base}/api/nexus/records/lifecycle`, {
        method: "POST", headers: { "content-type": "application/json", cookie: userCookie },
        body: JSON.stringify({ entityType: "patient", entityId: "REALMARKER_p2", status: "deceased" })
      });
      const r = await fetch(`${base}/api/nexus/audit-log`, { headers: { cookie: userCookie } });
      assert.equal(r.status, 200);
      const json = await r.json();
      const entry = json.audit.find(e => e.entityId === "REALMARKER_p2");
      assert(entry);
      assert.equal(entry.before, null);
      assert.equal(entry.after, null);
    });

    const adminLogin = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
    const adminCookie = adminLogin.headers.get("set-cookie").split(";")[0];

    await check("admin sees unredacted before/after on audit-log", async () => {
      const r = await fetch(`${base}/api/nexus/audit-log`, { headers: { cookie: adminCookie } });
      const json = await r.json();
      const entry = json.audit.find(e => e.entityId === "REALMARKER_p2");
      assert(entry);
      assert.notEqual(entry.after, null);
    });

    await check("admin cannot hijack an existing real Admin account via /api/admin/admin-user", async () => {
      const r = await fetch(`${base}/api/admin/admin-user`, {
        method: "POST", headers: { "content-type": "application/json", cookie: adminCookie },
        body: JSON.stringify({ email: "admin@agrinexus.org", password: "AttackerChosenPassw0rd!" })
      });
      assert.equal(r.status, 409);
      const relogin = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
      assert.equal(relogin.status, 200);
    });

    await check("admin cannot demote/hijack an existing Standard User via /api/admin/test-user", async () => {
      const r = await fetch(`${base}/api/admin/test-user`, {
        method: "POST", headers: { "content-type": "application/json", cookie: adminCookie },
        body: JSON.stringify({ email: "user@agrinexus.org", password: "AttackerChosenPassw0rd!" })
      });
      assert.equal(r.status, 409);
      const relogin = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
      assert.equal(relogin.status, 200);
    });

    await check("admin can still create fresh sandbox test-user and admin-user accounts", async () => {
      const r1 = await fetch(`${base}/api/admin/test-user`, {
        method: "POST", headers: { "content-type": "application/json", cookie: adminCookie },
        body: JSON.stringify({ email: "brand-new-sandbox-user@example.com", password: "SandboxPass1" })
      });
      assert.equal(r1.status, 200);
      const r2 = await fetch(`${base}/api/admin/admin-user`, {
        method: "POST", headers: { "content-type": "application/json", cookie: adminCookie },
        body: JSON.stringify({ email: "brand-new-sandbox-admin@example.com", password: "SandboxAdminPass1" })
      });
      assert.equal(r2.status, 200);
    });

    if (failures.length) {
      console.error(`\n${failures.length} FAILURE(S):\n` + failures.join("\n"));
      process.exit(1);
    }
    console.log("\nALL CHECKS PASSED");
  } finally {
    server.kill();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(e => { console.error(e.stack || e.message); process.exit(1); });
