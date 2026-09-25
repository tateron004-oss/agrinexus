"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (IDOR follow-up audit, same recurring shape as the Nexus
// Operations/records/communications/knowledge cross-user IDORs already
// fixed): db.profile.nexusPersistentMemory is a single shared store whose
// records accept arbitrary free-form payload content (patient name,
// diagnosis, etc.). Requiring sign-in was not enough on its own -- every
// authenticated user still shared the exact same record ID space, since
// nothing tagged who created what. This pins that two real, distinct
// authenticated users are now each scoped to their own records/receipts.
const root = path.resolve(__dirname, "..", "..");
const port = 4626;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-persistent-memory-cross-user-isolation-db.json");

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
let victimCookie;
let attackerCookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzpm-victim@example.com", "VictimPass2026!");
  await createTestUser(adminCookie, "zzpm-attacker@example.com", "AttackerPass2026!");
  victimCookie = await login("zzpm-victim@example.com", "VictimPass2026!");
  attackerCookie = await login("zzpm-attacker@example.com", "AttackerPass2026!");
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

test("a persistent-memory record created by one user is invisible, unreadable, and unmutable to a different real user", async () => {
  const createRes = await fetch(`${base}/api/nexus/persistent-memory/records`, { method: "POST", headers: { "content-type": "application/json", cookie: victimCookie },
    body: JSON.stringify({ type: "chronic_condition_record", title: "Victim's real record", payload: { diagnosis: "hypertension" } }) });
  const created = await createRes.json();
  assert.equal(created.ok, true);
  const recordId = created.record.id;

  const attackerList = await fetch(`${base}/api/nexus/persistent-memory/records`, { headers: { cookie: attackerCookie } }).then(r => r.json());
  assert.ok(!attackerList.records.some(record => record.id === recordId), "the attacker's listing must not include the victim's record");

  const readAttempt = await fetch(`${base}/api/nexus/persistent-memory/records/${recordId}`, { headers: { cookie: attackerCookie } }).then(r => r.json());
  assert.equal(readAttempt.record, null, "an attacker reading the victim's record by real id must not get it back");

  const patchAttempt = await fetch(`${base}/api/nexus/persistent-memory/records/${recordId}`, { method: "PATCH", headers: { "content-type": "application/json", cookie: attackerCookie },
    body: JSON.stringify({ title: "tampered" }) });
  assert.equal(patchAttempt.status, 404, "an attacker patching the victim's record by real id must get 404");

  const victimRead = await fetch(`${base}/api/nexus/persistent-memory/records/${recordId}`, { headers: { cookie: victimCookie } }).then(r => r.json());
  assert.equal(victimRead.record.title, "Victim's real record", "the victim's own record must be untouched and still readable by them");
});

test("a PATCH cannot reassign a record's ownerId to another account", async () => {
  const createRes = await fetch(`${base}/api/nexus/persistent-memory/records`, { method: "POST", headers: { "content-type": "application/json", cookie: victimCookie },
    body: JSON.stringify({ type: "farm_profile", title: "Victim's farm record" }) });
  const recordId = (await createRes.json()).record.id;

  const patchRes = await fetch(`${base}/api/nexus/persistent-memory/records/${recordId}`, { method: "PATCH", headers: { "content-type": "application/json", cookie: victimCookie },
    body: JSON.stringify({ ownerId: "someone-elses-id" }) });
  const patched = await patchRes.json();
  assert.equal(patched.ok, true);
  assert.notEqual(patched.record.ownerId, "someone-elses-id", "ownerId must be stripped from a PATCH body, never reassignable");

  const stillOwn = await fetch(`${base}/api/nexus/persistent-memory/records/${recordId}`, { headers: { cookie: victimCookie } }).then(r => r.json());
  assert.ok(stillOwn.record, "the original owner must still be able to read their own record after the attempted reassignment");
});

test("a real Admin still sees every persistent-memory record", async () => {
  await fetch(`${base}/api/nexus/persistent-memory/records`, { method: "POST", headers: { "content-type": "application/json", cookie: attackerCookie },
    body: JSON.stringify({ type: "farmer_profile", title: "Attacker's own unrelated record" }) });

  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  const adminList = await fetch(`${base}/api/nexus/persistent-memory/records`, { headers: { cookie: adminCookie } }).then(r => r.json());
  const ownerIds = new Set(adminList.records.map(record => record.ownerId));
  assert.ok(ownerIds.size >= 2, "an admin must see records owned by more than one distinct real user");
});
