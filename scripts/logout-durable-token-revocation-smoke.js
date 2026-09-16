// Real bug fix: /api/logout only deleted the short-lived agrinexus_sid entry
// from the in-memory sessions map. The "remember me" agrinexus_auth cookie is
// a bare HMAC-signed claim with nothing server-side to delete, so a token
// captured before logout (XSS, a shared machine, a proxy/access-log leak)
// kept authenticating for its full TTL (up to 12h by default) even after the
// real user explicitly logged out. Fixed by stamping a per-user
// authTokensRevokedAt cutoff on logout and rejecting any durable token issued
// before it, while leaving unrelated active sid sessions on other devices,
// and freshly issued tokens after a new login, unaffected.
const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = 4619;
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-logout-durable-token-revocation-smoke-db.json");

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
async function waitForServer() {
  for (let i = 0; i < 80; i++) { try { const r = await fetch(`${base}/api/healthz`); if (r.ok) return; } catch { await wait(150); } }
  throw new Error("not up");
}
function getCookie(res, name) {
  const raw = res.headers.get("set-cookie") || "";
  const parts = raw.split(/,(?=[^;]+?=)/);
  for (const part of parts) {
    const trimmed = part.trim();
    if (trimmed.startsWith(name + "=")) return trimmed.split(";")[0];
  }
  return null;
}

(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_PRESERVE_EMPTY_ENV: "1", SESSION_SECRET: "test-session-secret-for-verification-only" },
    stdio: "ignore", windowsHide: true
  });
  try {
    await waitForServer();
    const failures = [];
    const check = async (label, fn) => { try { await fn(); console.log("OK:", label); } catch (e) { failures.push(label + ": " + e.message); console.error("FAIL:", label, e.message); } };

    await check("a captured durable token no longer authenticates after logout", async () => {
      const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
      const sidCookie = getCookie(login, "agrinexus_sid");
      const authCookie = getCookie(login, "agrinexus_auth");
      assert(sidCookie && authCookie, "expected both session cookies on login");

      const preLogout = await fetch(`${base}/api/nexus/records`, { headers: { cookie: authCookie } });
      assert.equal(preLogout.status, 200, "durable token should authenticate before logout");

      const logout = await fetch(`${base}/api/logout`, { method: "POST", headers: { cookie: `${sidCookie}; ${authCookie}` } });
      assert.equal(logout.status, 200);

      const replay = await fetch(`${base}/api/nexus/records`, { headers: { cookie: authCookie } });
      assert.equal(replay.status, 401, "a captured durable token must not authenticate after logout");
    });

    await check("a fresh login after logout issues a working durable token", async () => {
      const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
      assert.equal(login.status, 200);
      const authCookie = getCookie(login, "agrinexus_auth");
      const res = await fetch(`${base}/api/nexus/records`, { headers: { cookie: authCookie } });
      assert.equal(res.status, 200, "the freshly issued durable token must authenticate");
    });

    await check("an independent active sid session on another device is unaffected", async () => {
      const loginOther = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "investor@agrinexus.org", password: "Investor2026!" }) });
      const sidOther = getCookie(loginOther, "agrinexus_sid");

      const loginSame = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
      const sidSame = getCookie(loginSame, "agrinexus_sid");
      await fetch(`${base}/api/logout`, { method: "POST", headers: { cookie: sidSame } });

      const res = await fetch(`${base}/api/nexus/records`, { headers: { cookie: sidOther } });
      assert.equal(res.status, 200, "an unrelated user's active sid session must be unaffected by someone else's logout");
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
