const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4601;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-provider-coordination-blocked-status-db.json");

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

let server;
let cookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  cookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

async function post(pathname, body) {
  const res = await fetch(`${base}${pathname}`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body)
  });
  return { status: res.status, body: await res.json() };
}

// Confirmed: sendNexusProviderCoordinationPacket and
// createNexusProviderCoordinationPacket both returned ok: true for their
// blocked-confirmation-required/blocked-consent-required branches, unlike
// every sibling packet function (email, SMS/WhatsApp) -- the REST route
// answers a genuinely blocked, un-actioned request with the same HTTP 200 a
// real completion gets.

test("pharmacy create-referral without confirmation is reported as blocked (not ok, not 200)", async () => {
  const result = await post("/api/nexus/pharmacy/create-referral", {});
  assert.equal(result.body.ok, false);
  assert.equal(result.status, 400);
  assert.equal(result.body.status, "blocked-confirmation-required");
});

test("pharmacy create-referral with confirmation but no consent is reported as blocked", async () => {
  const result = await post("/api/nexus/pharmacy/create-referral", { confirmed: true });
  assert.equal(result.body.ok, false);
  assert.equal(result.status, 400);
  assert.equal(result.body.status, "blocked-consent-required");
});

test("pharmacy create-referral with confirmation and consent actually completes", async () => {
  const result = await post("/api/nexus/pharmacy/create-referral", { confirmed: true, consentToPreparePacket: true });
  assert.equal(result.body.ok, true);
  assert.equal(result.status, 200);
  assert.notEqual(result.body.status, "blocked-confirmation-required");
  assert.notEqual(result.body.status, "blocked-consent-required");
});

test("pharmacy send-referral without confirmation is reported as blocked (not ok, not 200)", async () => {
  const result = await post("/api/nexus/pharmacy/send-referral", {});
  assert.equal(result.body.ok, false);
  assert.equal(result.status, 400);
  assert.equal(result.body.status, "blocked-confirmation-required");
});

test("pharmacy send-referral with confirmation but no share consent is reported as blocked", async () => {
  const result = await post("/api/nexus/pharmacy/send-referral", { confirmed: true, consentToPreparePacket: true });
  assert.equal(result.body.ok, false);
  assert.equal(result.status, 400);
  assert.equal(result.body.status, "blocked-consent-required");
});

test("mobile-clinic create-request without confirmation is reported as blocked (not ok, not 200)", async () => {
  const result = await post("/api/nexus/mobile-clinic/create-request", {});
  assert.equal(result.body.ok, false);
  assert.equal(result.status, 400);
  assert.equal(result.body.status, "blocked-confirmation-required");
});

test("mobile-clinic send-request without confirmation is reported as blocked (not ok, not 200)", async () => {
  const result = await post("/api/nexus/mobile-clinic/send-request", {});
  assert.equal(result.body.ok, false);
  assert.equal(result.status, 400);
  assert.equal(result.body.status, "blocked-confirmation-required");
});
