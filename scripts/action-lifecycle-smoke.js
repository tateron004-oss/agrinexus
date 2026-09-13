const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const port = 4471;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-action-lifecycle-smoke-db.json");
let userCookie = "";

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

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const setCookie = res.headers.get("set-cookie");
  if (!res.ok) throw new Error(`login ${email} failed: ${res.status}`);
  return setCookie.split(";")[0];
}

async function call(route, { method, body, cookie } = {}) {
  const res = await fetch(`${base}${route}`, {
    method: method || (body ? "POST" : "GET"),
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const json = await res.json();
  return { status: res.status, json };
}

(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "" },
    stdio: "ignore",
    windowsHide: true
  });
  try {
    await waitFor(`${base}/api/healthz`);
    userCookie = await login("user@agrinexus.org", "User2026!");

    // Real bug fix: an unconfirmed email-packet send must return ok:false / HTTP 400,
    // not the previous ok:true / HTTP 200 with an error buried in the body.
    const unconfirmed = await call("/api/nexus/email/send-packet", {
      body: { to: "farmer@example.com", subject: "Test", domain: "admin" },
      cookie: userCookie
    });
    assert.equal(unconfirmed.status, 400, "an unconfirmed email-packet send must now surface as a real 400, not a misleading 200");
    assert.equal(unconfirmed.json.ok, false);
    assert.equal(unconfirmed.json.status, "confirmation_required");

    // Same bug class, parallel function: an unconfirmed SMS/WhatsApp send must
    // also return a real ok:false/400, not the ok:true/200 it returned before.
    const unconfirmedSms = await call("/api/nexus/communications/send-message", {
      body: { channel: "sms", to: "+15550001111", domain: "admin" },
      cookie: userCookie
    });
    assert.equal(unconfirmedSms.status, 400, "an unconfirmed communications send must surface as a real 400, not a misleading 200");
    assert.equal(unconfirmedSms.json.ok, false);
    assert.equal(unconfirmedSms.json.status, "confirmation_required");

    // With no real Twilio/SendGrid/Calendar credentials configured in this environment,
    // these real-provider tool calls correctly come back disabled -- and a disabled/failed
    // attempt must never be cached as if it were a completed send, so a second identical
    // request must still reach the provider layer for real, not return a stale cached miss.
    const emailArgs = { command: "email farmer@example.com about the harvest", confirmed: true };
    const firstEmail = await call("/api/nexus/openai-native/tool", { body: { name: "nexus_email", arguments: emailArgs }, cookie: userCookie });
    const secondEmail = await call("/api/nexus/openai-native/tool", { body: { name: "nexus_email", arguments: emailArgs }, cookie: userCookie });
    assert.equal(firstEmail.status, 200);
    assert.notEqual(firstEmail.json.status, "duplicate_suppressed", "a disabled/non-completed attempt must never be reported as a suppressed duplicate");
    assert.notEqual(secondEmail.json.status, "duplicate_suppressed");

    const smsArgs = { command: "text +15550001111 the delivery is on the way", confirmed: true, to: "+15550001111", message: "on the way" };
    const firstSms = await call("/api/nexus/openai-native/tool", { body: { name: "nexus_communications", arguments: smsArgs }, cookie: userCookie });
    assert.equal(firstSms.status, 200);

    const calendarArgs = { command: "schedule a farm visit", title: "Farm visit", start: "2026-10-01T10:00:00Z", confirmed: true };
    const firstCalendar = await call("/api/nexus/openai-native/tool", { body: { name: "nexus_calendar", arguments: calendarArgs }, cookie: userCookie });
    assert.equal(firstCalendar.status, 200);

    console.log("Action lifecycle smoke test passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(error => {
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  console.error(error.stack || error.message);
  process.exit(1);
});
