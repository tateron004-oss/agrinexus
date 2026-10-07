"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (telehealth/account-erasure audit): server/telehealth/
// provider.js's ensureState() creates db.nexusTelehealthEncounters and its
// child records (nexusTelehealthFollowUps, nexusTelehealthVideoAttempts,
// nexusPilotReviewQueue entries) as top-level siblings of db.profile, not
// nested inside it -- collectOwnedProfileRecords/eraseOwnedProfileRecords
// only ever scan db.profile's own arrays, so real telehealth PHI (patient
// name, symptoms, medications, allergies, contact info) created through a
// real encounter was permanently invisible to /api/account/export and
// silently survived /api/account/erase, which nonetheless reported success
// with no disclosed gap. encounter.userId (the real ownership field already
// used by ownsEncounter() for read access control) makes a real per-user
// scan and cascade possible.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-telehealth-export-erasure-db.json");

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

async function createRealEncounter(cookie) {
  const encounterResult = await post(cookie, "/api/nexus/telehealth/create-encounter", {
    conditionArea: "diabetes",
    patientName: "Real Patient",
    symptoms: ["fatigue"],
    contactMethod: "sms",
    contactValue: "+15550001111",
    confirmed: true,
    consentToPreparePacket: true,
    consentToShare: true,
    createVideo: true
  });
  assert.equal(encounterResult.status, 200, JSON.stringify(encounterResult.body));
  const encounterId = encounterResult.body.encounter.id;
  const followUpResult = await post(cookie, "/api/nexus/telehealth/follow-up", { encounterId, confirmed: true });
  assert.equal(followUpResult.status, 200, JSON.stringify(followUpResult.body));
  return encounterId;
}

test("a real telehealth encounter (and its follow-up/video-attempt/review-queue children) is included in the owning account's own data export", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zztele-victim1@example.com", "VictimPass2026!");
  await createTestUser(adminCookie, "zztele-attacker1@example.com", "AttackerPass2026!");
  const victimCookie = await login("zztele-victim1@example.com", "VictimPass2026!");
  const attackerCookie = await login("zztele-attacker1@example.com", "AttackerPass2026!");

  await createRealEncounter(victimCookie);

  const victimExport = await post(victimCookie, "/api/account/export");
  assert.equal(victimExport.status, 200, JSON.stringify(victimExport.body));
  assert.equal(victimExport.body.recordCounts.nexusTelehealthEncounters, 1,
    "the victim's own real telehealth encounter must be included in their own export, not silently omitted");
  assert.equal(victimExport.body.recordCounts.nexusTelehealthFollowUps, 1,
    "the victim's own real follow-up must be included in their own export");
  assert.equal(victimExport.body.recordCounts.nexusTelehealthVideoAttempts, 1,
    "the victim's own real video attempt must be included in their own export");
  assert.equal(victimExport.body.recordCounts.nexusPilotReviewQueue, 1,
    "the victim's own real review-queue entry must be included in their own export");

  const attackerExport = await post(attackerCookie, "/api/account/export");
  assert.equal(attackerExport.status, 200, JSON.stringify(attackerExport.body));
  assert.ok(!attackerExport.body.recordCounts.nexusTelehealthEncounters,
    "a different real account must never see another user's telehealth encounter in their own export");
});

test("account erasure actually removes a user's real telehealth encounter and its children, leaving a different account's own encounter untouched", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zztele-victim2@example.com", "VictimPass2026!");
  await createTestUser(adminCookie, "zztele-other2@example.com", "OtherPass2026!");
  const victimCookie = await login("zztele-victim2@example.com", "VictimPass2026!");
  const otherCookie = await login("zztele-other2@example.com", "OtherPass2026!");

  await createRealEncounter(victimCookie);
  await createRealEncounter(otherCookie);

  const erase = await post(victimCookie, "/api/account/erase", { confirmed: true });
  assert.equal(erase.status, 200, JSON.stringify(erase.body));
  assert.equal(erase.body.verification.profileRecordsRemoved.nexusTelehealthEncounters, 1,
    "erasing the account must actually remove the real telehealth encounter, not just claim success while leaving it in place");
  assert.equal(erase.body.verification.profileRecordsRemoved.nexusTelehealthFollowUps, 1);
  assert.equal(erase.body.verification.profileRecordsRemoved.nexusTelehealthVideoAttempts, 1);
  assert.equal(erase.body.verification.profileRecordsRemoved.nexusPilotReviewQueue, 1);

  // The other real account's own encounter, created in the same shared
  // top-level arrays, must survive this erasure untouched.
  const otherExport = await post(otherCookie, "/api/account/export");
  assert.equal(otherExport.status, 200, JSON.stringify(otherExport.body));
  assert.equal(otherExport.body.recordCounts.nexusTelehealthEncounters, 1,
    "a different real account's own telehealth encounter must survive another account's erasure untouched");
});
