// Real bug fix: self-service guest accounts (/api/auth/guest-session,
// zero identity verification beyond a free-text display name) are issued a
// `restrictions` array (health-record-write, communications-send,
// external-transaction, account-provider-link) that was purely decorative
// -- returned to the client for UI display but never checked anywhere
// server-side. A guest could use the OpenAI-native tool gateway
// (nexus_communications, nexus_health_preparation) or the dedicated REST
// routes it shares real code paths with to send a real Twilio SMS/WhatsApp/
// call, or save a real chronic-care vital-sign reading -- exactly the two
// categories its own restrictions array says must be blocked. Fixed by
// enforcing "communications-send" and "health-record-write" at every
// real-code-path chokepoint: the tool-call dispatcher, the dedicated
// sms/whatsapp/call REST routes (both the /api/nexus/tools/* and
// /api/nexus/tools/communications/* families), /api/communications/thread,
// the createBuyerSellerMessage() Twilio send, and the medicalPostRoutes
// write dispatch (chronic-disease/reading, etc, keyed off the existing
// per-route "does this persist" flag).
const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = 4626;
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-guest-restrictions-enforcement-smoke-db.json");

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
    assert(guestBody.auth?.restrictions?.includes("communications-send"));
    assert(guestBody.auth?.restrictions?.includes("health-record-write"));

    await check("guest cannot send real SMS via the tool gateway (nexus_communications)", async () => {
      const r = await fetch(`${base}/api/nexus/openai-native/tool`, {
        method: "POST", headers: { "content-type": "application/json", cookie },
        body: JSON.stringify({ name: "nexus_communications", arguments: { command: "text +15551234567 hello", channel: "sms", to: "+15551234567", message: "hello", confirmed: true } })
      });
      const json = await r.json();
      assert.equal(r.status, 200);
      assert.equal(json.status, "restricted");
      assert.equal(json.executionAttempted, false);
    });

    await check("guest cannot save a health reading via the tool gateway (nexus_health_preparation)", async () => {
      const r = await fetch(`${base}/api/nexus/openai-native/tool`, {
        method: "POST", headers: { "content-type": "application/json", cookie },
        body: JSON.stringify({ name: "nexus_health_preparation", arguments: { command: "my blood pressure is 150 over 95", confirmed: true } })
      });
      const json = await r.json();
      assert.equal(r.status, 200);
      assert.equal(json.status, "restricted");
    });

    await check("guest cannot POST a real health-write route (chronic-disease/reading)", async () => {
      const r = await fetch(`${base}/api/nexus/tools/chronic-disease/reading`, {
        method: "POST", headers: { "content-type": "application/json", cookie },
        body: JSON.stringify({ confirmed: true, glucose: 200 })
      });
      assert.equal(r.status, 403);
    });

    await check("guest cannot POST /api/nexus/tools/sms/send", async () => {
      const r = await fetch(`${base}/api/nexus/tools/sms/send`, {
        method: "POST", headers: { "content-type": "application/json", cookie },
        body: JSON.stringify({ to: "+15551234567", message: "x" })
      });
      assert.equal(r.status, 403);
    });

    await check("guest cannot POST /api/communications/thread", async () => {
      const r = await fetch(`${base}/api/communications/thread`, {
        method: "POST", headers: { "content-type": "application/json", cookie },
        body: JSON.stringify({ channel: "sms", message: "x" })
      });
      assert.equal(r.status, 403);
    });

    const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
    const userCookie = login.headers.get("set-cookie").split(";")[0];

    await check("a real Standard User can still use nexus_communications", async () => {
      const r = await fetch(`${base}/api/nexus/openai-native/tool`, {
        method: "POST", headers: { "content-type": "application/json", cookie: userCookie },
        body: JSON.stringify({ name: "nexus_communications", arguments: { command: "text +15551234567 hello", channel: "sms", to: "+15551234567", message: "hello", confirmed: true } })
      });
      const json = await r.json();
      assert.equal(r.status, 200);
      assert.notEqual(json.status, "restricted");
    });

    await check("a real Standard User can still use nexus_health_preparation", async () => {
      const r = await fetch(`${base}/api/nexus/openai-native/tool`, {
        method: "POST", headers: { "content-type": "application/json", cookie: userCookie },
        body: JSON.stringify({ name: "nexus_health_preparation", arguments: { command: "my blood pressure is 150 over 95", confirmed: true } })
      });
      const json = await r.json();
      assert.equal(r.status, 200);
      assert.notEqual(json.status, "restricted");
    });

    await check("a real Standard User can still POST chronic-disease/reading", async () => {
      const r = await fetch(`${base}/api/nexus/tools/chronic-disease/reading`, {
        method: "POST", headers: { "content-type": "application/json", cookie: userCookie },
        body: JSON.stringify({ confirmed: true, glucose: 200 })
      });
      assert.equal(r.status, 200);
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
