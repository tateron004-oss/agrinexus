// Real bug fixes, follow-up to the guest-restrictions enforcement fix
// (which covered communications-send/health-record-write):
//
// 1. POST /api/trade/payment-checkout only checked canUse(user,"trade")
//    (true for a guest's "Standard User" role) and never consulted
//    user.restrictions, so a zero-verification guest session could reach
//    initializeTradePaymentCheckout() -- a real outbound call to the
//    configured Paystack/Flutterwave provider with guest-controlled
//    amount/currency/email -- exactly what "external-transaction" says is
//    blocked.
// 2. GET /api/music/spotify/login had the same gap for
//    "account-provider-link" -- a guest could initiate a real Spotify OAuth
//    link.
// 3. Separately (not guest-specific): spotifyUserConnection() fell back to
//    ANY Spotify connection in the shared db.profile.musicConnections array
//    when the current user had none of their own, so any user with no
//    connection controlled and read the playback state of whichever real
//    account happened to link one -- a cross-user IDOR. Fixed by removing
//    the fallback entirely.
const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = 4628;
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-guest-transaction-and-provider-link-smoke-db.json");

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

    const guest = await fetch(`${base}/api/auth/guest-session`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ name: "Restricted Guest" }) });
    const guestBody = await guest.json();
    const cookie = guest.headers.get("set-cookie").split(",").map(c => c.trim()).find(c => c.startsWith("agrinexus_sid"));
    assert(guestBody.auth?.restrictions?.includes("external-transaction"));
    assert(guestBody.auth?.restrictions?.includes("account-provider-link"));

    await check("guest cannot POST /api/trade/payment-checkout", async () => {
      const r = await fetch(`${base}/api/trade/payment-checkout`, {
        method: "POST", headers: { "content-type": "application/json", cookie },
        body: JSON.stringify({ amount: 100, currency: "NGN", buyerEmail: "guest@example.com" })
      });
      assert.equal(r.status, 403);
    });

    await check("guest cannot GET /api/music/spotify/login", async () => {
      const r = await fetch(`${base}/api/music/spotify/login`, { headers: { cookie }, redirect: "manual" });
      assert.equal(r.status, 403);
    });

    const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
    const userCookie = login.headers.get("set-cookie").split(";")[0];

    await check("a real Standard User is unaffected by the payment-checkout restriction check", async () => {
      const r = await fetch(`${base}/api/trade/payment-checkout`, {
        method: "POST", headers: { "content-type": "application/json", cookie: userCookie },
        body: JSON.stringify({ amount: 100, currency: "NGN", buyerEmail: "user@example.com" })
      });
      assert.notEqual(r.status, 403);
    });

    await check("a real Standard User is unaffected by the spotify/login restriction check", async () => {
      const r = await fetch(`${base}/api/music/spotify/login`, { headers: { cookie: userCookie }, redirect: "manual" });
      assert.notEqual(r.status, 403);
    });

    await check("a user with no Spotify connection of their own is not treated as connected to someone else's", async () => {
      let dbState = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
      dbState.profile = dbState.profile || {};
      dbState.profile.musicConnections = [{ userId: "u_investor", provider: "spotify", refreshToken: "REALTOKEN_investor", createdAt: new Date().toISOString() }];
      fs.writeFileSync(tempDbPath, JSON.stringify(dbState));
      const r = await fetch(`${base}/api/music/spotify/status`, { headers: { cookie: userCookie } });
      const json = await r.json();
      assert.equal(json.connected, false);
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
