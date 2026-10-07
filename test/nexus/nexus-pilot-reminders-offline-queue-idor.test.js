"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (IDOR follow-up sweep): db.nexusPilotReminders and
// db.nexusPilotOfflineQueue are single arrays shared by every account. Both
// GET routes previously required only sign-in, unlike every sibling
// nexusPilot* collection in this same subsystem (nexusCommunications,
// nexusNotifications, nexusOutcomes, nexusKnowledgeQueries,
// nexusPersistentMemory), all of which are filtered per-owner via
// nexusPilotRecordOwned(). Any signed-in account, any role, could read every
// OTHER user's reminder notes (created via real voice commands like "remind
// me to take my medication") and every queued offline item, including a
// real, unmasked recipient email address queued whenever an email-send
// route -- including password-reset -- falls back because no email provider
// is configured. The same missing filter also let "list my reminders"/
// "cancel my reminder" (executeNexusOpenAiNativeTool's wantsListReminders/
// wantsCancelReminder branches, which read/mutate this exact array) leak and
// even DELETE another user's reminder; those branches now go through the
// same nexusPilotRecordOwned-filtered array fixed here, verified by code
// review rather than a duplicate end-to-end voice-command test.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-nexus-pilot-reminders-offline-queue-idor-db.json");

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

function cookieFrom(res) {
  const raw = typeof res.headers.getSetCookie === "function" ? res.headers.getSetCookie() : [res.headers.get("set-cookie")].filter(Boolean);
  return raw.map(part => part.split(";")[0]).join("; ");
}

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200, `login for ${email} should succeed`);
  return cookieFrom(res);
}

async function createTestUser(adminCookie, email, password) {
  const res = await fetch(`${base}/api/admin/test-user`, { method: "POST", headers: { "content-type": "application/json", cookie: adminCookie },
    body: JSON.stringify({ email, name: "QA User", password }) });
  assert.equal(res.status, 200, `creating ${email} should succeed`);
}

let server;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

test("GET /api/nexus/reminders does not leak another user's reminder notes", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzpilotrem-victim1@example.com", "VictimPass2026!");
  await createTestUser(adminCookie, "zzpilotrem-attacker1@example.com", "AttackerPass2026!");
  const victimCookie = await login("zzpilotrem-victim1@example.com", "VictimPass2026!");
  const attackerCookie = await login("zzpilotrem-attacker1@example.com", "AttackerPass2026!");

  const createRes = await fetch(`${base}/api/nexus/reminders`, {
    method: "POST", headers: { "content-type": "application/json", cookie: victimCookie },
    body: JSON.stringify({ title: "Take HIV medication", notes: "Very sensitive medical note", time: "8pm" })
  });
  assert.equal(createRes.status, 200);

  const attackerRead = await fetch(`${base}/api/nexus/reminders`, { headers: { cookie: attackerCookie } });
  const attackerBody = await attackerRead.json();
  assert.ok(!attackerBody.reminders.some(item => item.title === "Take HIV medication"), "an unrelated signed-in user must not see another user's reminder");

  const victimRead = await fetch(`${base}/api/nexus/reminders`, { headers: { cookie: victimCookie } });
  const victimBody = await victimRead.json();
  assert.ok(victimBody.reminders.some(item => item.title === "Take HIV medication"), "the creator must still see their own reminder");
});

test("GET /api/nexus/offline-queue does not leak another user's queued email address", async () => {
  const victimCookie = await login("zzpilotrem-victim1@example.com", "VictimPass2026!");
  const attackerCookie = await login("zzpilotrem-attacker1@example.com", "AttackerPass2026!");

  // No email provider is configured in this test environment (OPENAI_API_KEY
  // and email env vars are unset), so this real send falls through to
  // queueNexusEmailFallback with a real, unmasked recipient address.
  const sendRes = await fetch(`${base}/api/nexus/email/send-packet`, {
    method: "POST", headers: { "content-type": "application/json", cookie: victimCookie },
    body: JSON.stringify({ to: "zzpilotrem-victim1@example.com", subject: "Nexus packet", domain: "admin", confirmed: true })
  });
  assert.equal(sendRes.status, 200);

  const attackerRead = await fetch(`${base}/api/nexus/offline-queue`, { headers: { cookie: attackerCookie } });
  const attackerBody = await attackerRead.json();
  assert.ok(!attackerBody.offlineQueue.some(item => item.recipient === "zzpilotrem-victim1@example.com"), "an unrelated signed-in user must not see another user's queued recipient email address");

  const victimRead = await fetch(`${base}/api/nexus/offline-queue`, { headers: { cookie: victimCookie } });
  const victimBody = await victimRead.json();
  assert.ok(victimBody.offlineQueue.some(item => item.recipient === "zzpilotrem-victim1@example.com"), "the sender must still see their own queued item");
});
