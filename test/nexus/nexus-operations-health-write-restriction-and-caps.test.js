"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (legacy server.js helper-function sweep): runNexusOperationsAction's health-write actions
// (create_chronic_care_profile, add_rpm_reading, add_rtm_activity, create_intake,
// create_provider_review_packet, create_pharmacy_referral, create_mobile_clinic_follow_up,
// create_telehealth_encounter) never called canWriteHealth(), unlike the dedicated REST routes for the
// identical actions. Both HTTP routes that reach this function (/api/nexus/operations/action,
// /api/nexus/operations/command) are explicitly pre-auth, so a fully anonymous caller -- or a
// restricted account like Investor -- could write real PHI-shaped records. Also: ~15 of this function's
// arrays (chronicCareProfiles, archiveRecords, and others) had no `.slice(0, N)` cap at all, unlike
// every sibling array in the same function, which grows them unbounded.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-nexus-operations-health-write-restriction-and-caps-db.json");

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

function readTempDb() {
  return JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
}

async function postOperationsAction(body, cookie) {
  const headers = { "content-type": "application/json" };
  if (cookie) headers.cookie = cookie;
  const res = await fetch(`${base}/api/nexus/operations/action`, { method: "POST", headers, body: JSON.stringify(body) });
  const responseBody = await res.json().catch(() => ({}));
  return { status: res.status, result: responseBody.nexusOperationsResult || responseBody };
}

let server;
let standardUserCookie;
let investorCookie;

test.before(async () => {
  const seedDb = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  // Pre-seed archiveRecords with exactly 1000 dummy entries so a single new archive write can prove the
  // array is capped (stays at 1000, oldest evicted) instead of growing to 1001.
  seedDb.nexusPersistentOperations = seedDb.nexusPersistentOperations || {};
  seedDb.nexusPersistentOperations.archiveRecords = Array.from({ length: 1000 }, (_, index) => ({ archiveId: `NX-ARCH-seed-${index}`, entityType: "seed", entityId: `seed-${index}`, action: "seed", reason: "seed", createdAt: new Date(0).toISOString() }));
  seedDb.nexusPersistentOperations.chronicCareProfiles = Array.from({ length: 1000 }, (_, index) => ({ chronicCareId: `NX-CC-seed-${index}`, ownerId: "nobody", conditionArea: "other", status: "active", createdAt: new Date(0).toISOString() }));
  fs.writeFileSync(tempDbPath, JSON.stringify(seedDb));

  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);

  const standardLogin = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
  assert.equal(standardLogin.status, 200);
  standardUserCookie = standardLogin.headers.get("set-cookie").split(";")[0];

  const adminLogin = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  assert.equal(adminLogin.status, 200);
  const adminCookie = adminLogin.headers.get("set-cookie").split(";")[0];
  const investorEmail = "investor-ops-restriction-test@example.com";
  const created = await fetch(`${base}/api/admin/investor-user`, { method: "POST", headers: { "content-type": "application/json", cookie: adminCookie }, body: JSON.stringify({ email: investorEmail, password: "Investor2026!", name: "Ops Restriction Test" }) });
  assert.equal(created.status, 200);
  const investorLogin = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: investorEmail, password: "Investor2026!" }) });
  assert.equal(investorLogin.status, 200);
  investorCookie = investorLogin.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server?.kill();
  fs.rmSync(tempDbPath, { force: true });
});

test("a fully anonymous caller (no session at all) cannot write a real chronic-care profile through the pre-auth operations route", async () => {
  const { status, result } = await postOperationsAction({ action: "create_chronic_care_profile", conditionArea: "diabetes" }, null);
  assert.equal(status, 400);
  assert.equal(result.ok, false);
  assert.equal(result.error, "health_write_not_allowed");
});

test("a signed-in Investor account (always restricted from health-record-write) cannot write a chronic-care profile through this route either", async () => {
  const { status, result } = await postOperationsAction({ action: "create_chronic_care_profile", conditionArea: "diabetes" }, investorCookie);
  assert.equal(status, 400);
  assert.equal(result.ok, false);
  assert.equal(result.error, "health_write_not_allowed");
});

test("a real, signed-in Standard User can still write a chronic-care profile, unaffected by the fix", async () => {
  const { status, result } = await postOperationsAction({ action: "create_chronic_care_profile", conditionArea: "diabetes" }, standardUserCookie);
  assert.equal(status, 200);
  assert.equal(result.ok, true);
  assert.ok(result.record?.chronicCareId);
});

test("chronicCareProfiles stays capped at 1000 after a new profile is created, not left to grow unbounded", async () => {
  const before = readTempDb().nexusPersistentOperations.chronicCareProfiles.length;
  assert.equal(before, 1000, "the seeded array must start at exactly the cap");
  const { result } = await postOperationsAction({ action: "create_chronic_care_profile", conditionArea: "hypertension" }, standardUserCookie);
  assert.equal(result.ok, true);
  const after = readTempDb().nexusPersistentOperations.chronicCareProfiles;
  assert.equal(after.length, 1000, "the array must stay at the cap, evicting the oldest entry, not grow to 1001");
  assert.equal(after[0].chronicCareId, result.record.chronicCareId, "the newest record must still be unshifted to the front");
});

test("archiveRecords stays capped at 1000 after a new archive entry is written, via the new addNexusOperationsArchive helper", async () => {
  const createIntake = await postOperationsAction({ action: "create_intake", reason: "Routine check-in." }, standardUserCookie);
  assert.equal(createIntake.result.ok, true);
  const before = readTempDb().nexusPersistentOperations.archiveRecords.length;
  assert.equal(before, 1000, "the seeded array must start at exactly the cap");
  const archived = await postOperationsAction({ action: "archive_intake", intakeId: createIntake.result.record.intakeId, reason: "No longer needed." }, standardUserCookie);
  assert.equal(archived.result.ok, true);
  const after = readTempDb().nexusPersistentOperations.archiveRecords;
  assert.equal(after.length, 1000, "the array must stay at the cap, not grow to 1001");
  assert.equal(after[0].entityId, createIntake.result.record.intakeId, "the newest archive entry must still be unshifted to the front");
});
