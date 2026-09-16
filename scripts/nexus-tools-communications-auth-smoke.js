const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const port = 4508;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-nexus-tools-communications-auth-smoke-db.json");

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
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDbPath,
      OPENAI_API_KEY: "",
      NEXUS_PRESERVE_EMPTY_ENV: "1",
      NEXUS_SMS_ENABLED: "true",
      NEXUS_WHATSAPP_ENABLED: "true",
      NEXUS_CALLS_ENABLED: "true"
    },
    stdio: "ignore",
    windowsHide: true
  });
  try {
    await waitFor(`${base}/api/healthz`);

    // Real bug fix: /api/nexus/tools/{sms,whatsapp,call}/* and
    // /api/nexus/tools/communications/{sms,whatsapp,call}/* had no
    // authentication check at all -- any unauthenticated internet client
    // could send real SMS/WhatsApp messages or place real calls through the
    // app's Twilio account with just {"confirmed": true, "to": "...", ...}.
    const routes = [
      "/api/nexus/tools/sms/send",
      "/api/nexus/tools/whatsapp/send",
      "/api/nexus/tools/call/start",
      "/api/nexus/tools/communications/sms/send",
      "/api/nexus/tools/communications/whatsapp/send",
      "/api/nexus/tools/communications/call/prepare",
      "/api/nexus/tools/communications/call/start"
    ];
    for (const route of routes) {
      const result = await post(route, { to: "+15555550100", message: "hi", confirmed: true }, null);
      assert.equal(result.status, 401, `${route} must require authentication`);
    }

    const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
    const cookie = login.headers.get("set-cookie").split(";")[0];
    for (const route of routes) {
      const result = await post(route, { to: "+15555550100", message: "hi", confirmed: true }, cookie);
      assert.notEqual(result.status, 401, `${route} must work for an authenticated caller`);
    }

    console.log("Nexus tools communications auth smoke test passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(error => {
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  console.error(error.stack || error.message);
  process.exit(1);
});
