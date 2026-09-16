// Real bug fixes:
// 1. POST /api/nexus/openai-native/tool silently substituted a synthetic (or
//    real, borrowed) "Standard User" identity for any caller with no session,
//    instead of rejecting the request -- so an unauthenticated caller could
//    dispatch any OpenAI-native tool, including real SMS/WhatsApp/call
//    sending through nexus_communications, via a second path around the
//    auth gates already added to the dedicated /api/nexus/tools/* routes.
// 2. verifyNexusHealthSourceLive() fell back to fetching a raw,
//    caller-supplied URL whenever it didn't match a recognized source id --
//    an unauthenticated POST to /api/nexus/health-evidence/source/verify
//    with { url, live: true } (once an operator enables
//    NEXUS_HEALTH_SOURCE_LIVE_VERIFICATION_ENABLED) made the server issue a
//    real outbound HTTPS request to any attacker-chosen host (SSRF).
const assert = require("assert");
const { spawn } = require("child_process");
const net = require("net");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = 4613;
const listenerPort = 4614;
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-openai-native-tool-auth-and-health-source-ssrf-smoke-db.json");

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
async function waitForServer() {
  for (let i = 0; i < 80; i++) { try { const r = await fetch(`${base}/api/healthz`); if (r.ok) return; } catch { await wait(150); } }
  throw new Error("not up");
}

(async () => {
  let ssrfHitCount = 0;
  const listener = net.createServer(socket => {
    ssrfHitCount++;
    socket.end();
  });
  await new Promise(resolve => listener.listen(listenerPort, "127.0.0.1", resolve));

  fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_PRESERVE_EMPTY_ENV: "1", NEXUS_HEALTH_SOURCE_LIVE_VERIFICATION_ENABLED: "true" },
    stdio: "ignore", windowsHide: true
  });
  try {
    await waitForServer();
    const failures = [];
    const check = async (label, fn) => { try { await fn(); console.log("OK:", label); } catch (e) { failures.push(label + ": " + e.message); console.error("FAIL:", label, e.message); } };

    await check("openai-native/tool unauth POST -> 401", async () => {
      const r = await fetch(`${base}/api/nexus/openai-native/tool`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name: "nexus_communications", arguments: { channel: "sms", to: "+15551234567", message: "REALMARKER_unauth_sms", confirmed: true } })
      });
      assert.equal(r.status, 401);
    });

    await check("health-evidence/source/verify does not fetch an attacker-supplied URL", async () => {
      const r = await fetch(`${base}/api/nexus/health-evidence/source/verify`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ url: `https://127.0.0.1:${listenerPort}/ssrf-marker`, live: true })
      });
      assert.equal(r.status, 200);
      await wait(300);
      assert.equal(ssrfHitCount, 0, "server must not connect to an unrecognized/attacker-supplied URL");
    });

    await check("health-evidence/source/verify still verifies a real recognized source", async () => {
      const r = await fetch(`${base}/api/nexus/health-evidence/source/verify`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ sourceId: "cdc", live: false })
      });
      assert.equal(r.status, 200);
      const json = await r.json();
      assert.equal(json.ok, true);
    });

    const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
    const cookie = login.headers.get("set-cookie").split(";")[0];

    await check("authed openai-native/tool -> 200", async () => {
      const r = await fetch(`${base}/api/nexus/openai-native/tool`, {
        method: "POST",
        headers: { "content-type": "application/json", cookie },
        body: JSON.stringify({ name: "nexus_data_code_analysis", arguments: { command: "Calculate 12 * 7", language: "en" } })
      });
      assert.equal(r.status, 200);
      const json = await r.json();
      assert.equal(json.status, "completed");
    });

    if (failures.length) {
      console.error(`\n${failures.length} FAILURE(S):\n` + failures.join("\n"));
      process.exit(1);
    }
    console.log("\nALL CHECKS PASSED");
  } finally {
    server.kill();
    listener.close();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(e => { console.error(e.stack || e.message); process.exit(1); });
