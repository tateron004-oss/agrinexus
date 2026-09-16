// Real bug fix: POST /api/nexus/email/send-packet and
// /api/nexus/communications/send-message had no auth check at all -- only
// the standard confirmed === true gate (already correctly strict, not the
// truthy-coercion bug fixed elsewhere this session). nexusEmailSendPacket()/
// nexusCommunicationsSendMessage() perform a REAL SendGrid/SMTP email send
// or a REAL Twilio SMS/WhatsApp send once the operator configures real
// provider credentials -- exactly the same real-world side effect already
// locked behind auth on /api/nexus/tools/sms/send, /whatsapp/send,
// /call/start, and their /api/nexus/tools/communications/* equivalents.
// This was a third, unguarded path to the same real sends. Fixed by adding
// the standard `if (!user) return 401` guard plus the same
// "communications-send" guest-restriction check already applied to every
// other real-send route.
const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = 4642;
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-nexus-email-and-communications-send-packet-auth-smoke-db.json");

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

    await check("unauthenticated POST /api/nexus/communications/send-message -> 401", async () => {
      const r = await fetch(`${base}/api/nexus/communications/send-message`, {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ channel: "sms", to: "+15551234567", message: "x", confirmed: true })
      });
      assert.equal(r.status, 401);
    });

    await check("unauthenticated POST /api/nexus/email/send-packet -> 401", async () => {
      const r = await fetch(`${base}/api/nexus/email/send-packet`, {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ to: "victim@example.com", subject: "x", confirmed: true })
      });
      assert.equal(r.status, 401);
    });

    const guest = await fetch(`${base}/api/auth/guest-session`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ name: "Restricted Guest" }) });
    const guestCookie = guest.headers.get("set-cookie").split(",").map(c => c.trim()).find(c => c.startsWith("agrinexus_sid"));

    await check("guest cannot POST /api/nexus/communications/send-message", async () => {
      const r = await fetch(`${base}/api/nexus/communications/send-message`, {
        method: "POST", headers: { "content-type": "application/json", cookie: guestCookie },
        body: JSON.stringify({ channel: "sms", to: "+15551234567", message: "x", confirmed: true })
      });
      assert.equal(r.status, 403);
    });

    await check("guest cannot POST /api/nexus/email/send-packet", async () => {
      const r = await fetch(`${base}/api/nexus/email/send-packet`, {
        method: "POST", headers: { "content-type": "application/json", cookie: guestCookie },
        body: JSON.stringify({ to: "victim@example.com", subject: "x", confirmed: true })
      });
      assert.equal(r.status, 403);
    });

    const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
    const userCookie = login.headers.get("set-cookie").split(";")[0];

    await check("a real Standard User can still use communications/send-message", async () => {
      const r = await fetch(`${base}/api/nexus/communications/send-message`, {
        method: "POST", headers: { "content-type": "application/json", cookie: userCookie },
        body: JSON.stringify({ channel: "sms", to: "+15551234567", message: "x", confirmed: true })
      });
      assert.equal(r.status, 200);
    });

    await check("a real Standard User can still use email/send-packet", async () => {
      const r = await fetch(`${base}/api/nexus/email/send-packet`, {
        method: "POST", headers: { "content-type": "application/json", cookie: userCookie },
        body: JSON.stringify({ to: "someone@example.com", subject: "x", confirmed: true })
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
