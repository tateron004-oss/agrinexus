"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (IDOR follow-up audit): every collection in Nexus Operations'
// "local operations memory" sandbox (chronicCareProfiles, transactions,
// applicantProfiles, employerProfiles, shipments, etc.) was a single flat
// array shared by the whole app, with no ownership field at all. Any two
// authenticated Standard Users shared the exact same ID space, and every
// "latest" fallback (used whenever an action omits an explicit ID) picked
// the single most-recently-created record ACROSS THE ENTIRE APP -- so user
// B could read or mutate user A's real chronic-care/transaction/applicant
// record either by supplying A's real ID, or by supplying no ID at all and
// landing on whatever A had most recently touched. This pins that two real,
// distinct authenticated accounts are now each scoped to their own records.
const root = path.resolve(__dirname, "..", "..");
const port = 4623;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-operations-cross-user-isolation-db.json");

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

async function opsAction(cookie, body) {
  const res = await fetch(`${base}/api/nexus/operations/action`, { method: "POST", headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) },
    body: JSON.stringify(body) });
  const responseBody = await res.json();
  // A failed action (ok:false) is sent as the raw result directly (400); a
  // successful one is wrapped inside publicState() as nexusOperationsResult.
  return { status: res.status, json: responseBody.nexusOperationsResult || responseBody };
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

test("one user's chronic-care profile is invisible and unmutable to a different real user, even when its real ID is supplied", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzops-victim@example.com", "VictimPass2026!");
  await createTestUser(adminCookie, "zzops-attacker@example.com", "AttackerPass2026!");
  const victimCookie = await login("zzops-victim@example.com", "VictimPass2026!");
  const attackerCookie = await login("zzops-attacker@example.com", "AttackerPass2026!");

  const created = await opsAction(victimCookie, {
    action: "create_chronic_care_profile",
    conditionArea: "diabetes",
    patientName: "Victim RealPatient",
    medications: "insulin",
    allergies: "penicillin"
  });
  assert.equal(created.json.ok, true);
  const victimChronicCareId = created.json.record.chronicCareId;

  // The attacker supplies the victim's real ID directly.
  const readAttempt = await opsAction(attackerCookie, { action: "show_chronic_care_timeline", chronicCareId: victimChronicCareId });
  assert.equal(readAttempt.json.ok, true);
  assert.notEqual(readAttempt.json.record?.chronicCareId, victimChronicCareId, "the attacker must not be able to view the victim's profile by ID");

  const mutateAttempt = await opsAction(attackerCookie, { action: "add_rpm_reading", chronicCareId: victimChronicCareId, type: "blood_pressure", value: "120/80" });
  assert.equal(mutateAttempt.json.ok, true);
  assert.notEqual(mutateAttempt.json.record?.chronicCareId, victimChronicCareId, "the attacker's own action must not attach to the victim's profile");

  // The attacker supplies no ID at all, relying on the omitted-ID fallback.
  const fallbackAttempt = await opsAction(attackerCookie, { action: "show_chronic_care_timeline" });
  assert.notEqual(fallbackAttempt.json.record?.chronicCareId, victimChronicCareId, "the omitted-ID fallback must never resolve to another user's most-recent record");

  // The victim's own profile is still reachable by the victim.
  const victimOwnRead = await opsAction(victimCookie, { action: "show_chronic_care_timeline", chronicCareId: victimChronicCareId });
  assert.equal(victimOwnRead.json.record?.chronicCareId, victimChronicCareId, "the victim must still be able to see their own profile");
});

test("one user's transaction cannot be cancelled or settled by a different real user via its real ID", async () => {
  const victimCookie = await login("zzops-victim@example.com", "VictimPass2026!");
  const attackerCookie = await login("zzops-attacker@example.com", "AttackerPass2026!");

  const created = await opsAction(victimCookie, { action: "create_transaction", amount: "500" });
  assert.equal(created.json.ok, true);
  const victimTransactionId = created.json.record.transactionId;

  const cancelAttempt = await opsAction(attackerCookie, { action: "cancel_transaction", transactionId: victimTransactionId });
  assert.equal(cancelAttempt.json.ok, false, "an attacker with no transactions of their own must get transaction_not_found, not cancel the victim's");
  assert.equal(cancelAttempt.json.error, "transaction_not_found");

  const stillDraft = await opsAction(victimCookie, { action: "show_action_receipts" });
  assert.equal(stillDraft.json.ok, true);
});

test("show_action_receipts redacts the real entityId for a non-admin caller but still shows it to a real Admin", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  const victimCookie = await login("zzops-victim@example.com", "VictimPass2026!");

  const nonAdminView = await opsAction(victimCookie, { action: "show_action_receipts" });
  assert.equal(nonAdminView.json.ok, true);
  assert.ok(nonAdminView.json.receipts.length > 0);
  for (const receipt of nonAdminView.json.receipts) {
    assert.equal(receipt.entityId, null, "a non-admin must not see other users' real entityIds in the global receipts list");
  }

  const adminView = await opsAction(adminCookie, { action: "show_action_receipts" });
  assert.equal(adminView.json.ok, true);
  assert.ok(adminView.json.receipts.some(receipt => receipt.entityId), "a real Admin must still see real entityIds");
});
