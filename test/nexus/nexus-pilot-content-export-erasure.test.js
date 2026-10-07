"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (workforce/GPS/notifications follow-up sweep, the same bug
// class as the telehealth export/erasure gap): db.nexusCommunications,
// db.nexusNotifications, db.nexusPilotRecords, db.nexusKnowledgeQueries, and
// several sibling arrays are all further top-level siblings of db.profile,
// each already carrying a real ownerId: user.id set at creation and already
// used correctly for read-side isolation elsewhere -- but none of them were
// ever reachable by collectOwnedProfileRecords/eraseOwnedProfileRecords, so
// a real user's drafted messages, notifications, and saved records all
// silently survived account erasure and were absent from export.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-nexus-pilot-content-export-erasure-db.json");

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

const cookieCache = new Map();
async function login(email, password) {
  if (cookieCache.has(email)) return cookieCache.get(email);
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200, `login for ${email} should succeed`);
  const cookie = cookieFrom(res);
  cookieCache.set(email, cookie);
  return cookie;
}

async function createTestUser(adminCookie, email, password) {
  const res = await fetch(`${base}/api/admin/test-user`, { method: "POST", headers: { "content-type": "application/json", cookie: adminCookie },
    body: JSON.stringify({ email, name: "QA User", password }) });
  assert.equal(res.status, 200, `creating ${email} should succeed`);
}

async function post(cookie, pathname, body = {}) {
  const res = await fetch(`${base}${pathname}`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body) });
  return { status: res.status, body: await res.json() };
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

test("a real drafted communication and notification are included in the owning account's own export, absent from a different account's", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzpilot-export-victim1@example.com", "VictimPass2026!");
  await createTestUser(adminCookie, "zzpilot-export-attacker1@example.com", "AttackerPass2026!");
  const victimCookie = await login("zzpilot-export-victim1@example.com", "VictimPass2026!");
  const attackerCookie = await login("zzpilot-export-attacker1@example.com", "AttackerPass2026!");

  const preparedComm = await post(victimCookie, "/api/nexus/communications/prepare", { channel: "in_app_notification", messagePreview: "Real draft message" });
  assert.equal(preparedComm.status, 200, JSON.stringify(preparedComm.body));
  const notif = await post(victimCookie, "/api/nexus/notifications", { title: "Real notification", message: "Real notification body" });
  assert.equal(notif.status, 200, JSON.stringify(notif.body));

  const victimExport = await post(victimCookie, "/api/account/export");
  assert.equal(victimExport.status, 200, JSON.stringify(victimExport.body));
  assert.equal(victimExport.body.recordCounts.nexusCommunications, 1,
    "the victim's own real drafted communication must be included in their own export, not silently omitted");
  assert.equal(victimExport.body.recordCounts.nexusNotifications, 1,
    "the victim's own real notification must be included in their own export");

  const attackerExport = await post(attackerCookie, "/api/account/export");
  assert.equal(attackerExport.status, 200, JSON.stringify(attackerExport.body));
  assert.ok(!attackerExport.body.recordCounts.nexusCommunications && !attackerExport.body.recordCounts.nexusNotifications,
    "a different real account must never see another user's drafted communication or notification in their own export");
});

test("account erasure actually removes a user's real communication and notification, leaving a different account's own records untouched", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzpilot-export-victim2@example.com", "VictimPass2026!");
  await createTestUser(adminCookie, "zzpilot-export-other2@example.com", "OtherPass2026!");
  const victimCookie = await login("zzpilot-export-victim2@example.com", "VictimPass2026!");
  const otherCookie = await login("zzpilot-export-other2@example.com", "OtherPass2026!");

  await post(victimCookie, "/api/nexus/communications/prepare", { channel: "in_app_notification", messagePreview: "Victim draft" });
  await post(otherCookie, "/api/nexus/communications/prepare", { channel: "in_app_notification", messagePreview: "Other draft" });

  const erase = await post(victimCookie, "/api/account/erase", { confirmed: true });
  assert.equal(erase.status, 200, JSON.stringify(erase.body));
  assert.equal(erase.body.verification.profileRecordsRemoved.nexusCommunications, 1,
    "erasing the account must actually remove the real drafted communication, not just claim success while leaving it in place");

  const otherExport = await post(otherCookie, "/api/account/export");
  assert.equal(otherExport.status, 200, JSON.stringify(otherExport.body));
  assert.equal(otherExport.body.recordCounts.nexusCommunications, 1,
    "a different real account's own drafted communication must survive another account's erasure untouched");
});
