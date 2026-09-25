"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (IDOR follow-up audit, same shape as the just-fixed Nexus
// Operations cross-user IDOR): db.nexusPilotRecords -- which can hold real
// chronic-care/telehealth intake content (patient name, diagnosis,
// medication) -- was a single shared array with no ownership field. The
// /api/nexus/records* routes only ever checked "is anyone signed in," never
// whether the caller owns the record: GET /api/nexus/records returned the
// ENTIRE global array to any signed-in user (no id needed at all), and
// every PATCH/POST-by-id route resolved records via a bare `.find(r => r.id
// === id)`. This pins that two real, distinct authenticated users are now
// each scoped to their own records.
const root = path.resolve(__dirname, "..", "..");
const port = 4624;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-pilot-records-cross-user-isolation-db.json");

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
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password }) });
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

test("GET /api/nexus/records only lists the caller's own records, and a different user cannot read or mutate one by real ID", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzpilot-victim@example.com", "VictimPass2026!");
  await createTestUser(adminCookie, "zzpilot-attacker@example.com", "AttackerPass2026!");
  const victimCookie = await login("zzpilot-victim@example.com", "VictimPass2026!");
  const attackerCookie = await login("zzpilot-attacker@example.com", "AttackerPass2026!");

  const createRes = await fetch(`${base}/api/nexus/records`, { method: "POST", headers: { "content-type": "application/json", cookie: victimCookie },
    body: JSON.stringify({ type: "telehealth_intake", sourceMode: "telehealth", summary: "Victim RealPatient diagnosis notes", payload: { diagnosis: "hypertension" } }) });
  const created = await createRes.json();
  assert.equal(created.ok, true);
  const victimRecordId = created.record.id;

  // The attacker's own listing must not include the victim's record.
  const attackerList = await fetch(`${base}/api/nexus/records`, { headers: { cookie: attackerCookie } }).then(r => r.json());
  assert.ok(!attackerList.records.some(record => record.id === victimRecordId), "the attacker's listing must not include the victim's record");

  // The victim's own listing still includes it.
  const victimList = await fetch(`${base}/api/nexus/records`, { headers: { cookie: victimCookie } }).then(r => r.json());
  assert.ok(victimList.records.some(record => record.id === victimRecordId), "the victim's own listing must still include their record");

  // The attacker cannot read or mutate it directly by its real ID.
  const patchAttempt = await fetch(`${base}/api/nexus/records/${victimRecordId}`, { method: "PATCH", headers: { "content-type": "application/json", cookie: attackerCookie },
    body: JSON.stringify({ summary: "tampered by attacker" }) });
  assert.equal(patchAttempt.status, 404, "an attacker patching the victim's record by real id must get record_not_found, not succeed");

  const archiveAttempt = await fetch(`${base}/api/nexus/records/${victimRecordId}/archive`, { method: "POST", headers: { cookie: attackerCookie } });
  assert.equal(archiveAttempt.status, 404, "an attacker archiving the victim's record by real id must get record_not_found, not succeed");

  // The victim's record was not tampered with.
  const stillIntact = await fetch(`${base}/api/nexus/records`, { headers: { cookie: victimCookie } }).then(r => r.json());
  const record = stillIntact.records.find(item => item.id === victimRecordId);
  assert.equal(record.summary, "Victim RealPatient diagnosis notes", "the victim's record must be untouched by the attacker's attempts");
  assert.notEqual(record.status, "archived");
});

test("a real Admin can still see every record, matching the existing admin-sees-all pattern", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  const victimCookie = await login("zzpilot-victim@example.com", "VictimPass2026!");
  const attackerCookie = await login("zzpilot-attacker@example.com", "AttackerPass2026!");

  const createRes = await fetch(`${base}/api/nexus/records`, { method: "POST", headers: { "content-type": "application/json", cookie: attackerCookie },
    body: JSON.stringify({ type: "pharmacy_note", summary: "Attacker's own unrelated record" }) });
  const attackerRecordId = (await createRes.json()).record.id;

  const adminList = await fetch(`${base}/api/nexus/records`, { headers: { cookie: adminCookie } }).then(r => r.json());
  const ownerIds = new Set(adminList.records.map(record => record.ownerId));
  assert.ok(ownerIds.size >= 2, "an admin must see records owned by more than one distinct real user");
  assert.ok(adminList.records.some(record => record.id === attackerRecordId), "an admin must see a record created by the attacker account");

  const victimList = await fetch(`${base}/api/nexus/records`, { headers: { cookie: victimCookie } }).then(r => r.json());
  assert.ok(!victimList.records.some(record => record.id === attackerRecordId), "the victim must still not see the attacker's unrelated record");
});
