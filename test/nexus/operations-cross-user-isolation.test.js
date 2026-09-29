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
const port = 4654;
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

// Cached per account: this file logs into the same handful of accounts
// repeatedly across many tests, and each fresh /api/login call counts against
// the real account login-rate-limit -- reusing one session per account
// avoids tripping it, with identical behavior for every caller.
const cookieCache = new Map();
async function login(email, password) {
  if (cookieCache.has(email)) return cookieCache.get(email);
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password }) });
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

// Found live (investor/admin dashboard audit): show_action_receipts (above) was already
// fixed to redact entityId, but nexusOperationsSummary()'s OWN recentReceipts field --
// which backs publicState()'s persistentOperations field, returned by GET /api/state and
// 27+ other routes, including show_action_receipts' own response -- was never redacted.
// A Guest/Investor/Standard User got real entityIds for other users' records on
// essentially every page load or action response.
test("GET /api/state's persistentOperations.recentReceipts redacts entityId for a non-admin caller but still shows it to a real Admin", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  const victimCookie = await login("zzops-victim@example.com", "VictimPass2026!");

  const nonAdminState = await fetch(`${base}/api/state`, { headers: { cookie: victimCookie } }).then(res => res.json());
  const nonAdminReceipts = nonAdminState.persistentOperations?.recentReceipts || [];
  assert.ok(nonAdminReceipts.length > 0, "sanity check: there are real receipts to redact");
  for (const receipt of nonAdminReceipts) {
    assert.equal(receipt.entityId, null, "a non-admin must not see other users' real entityIds via persistentOperations");
  }

  const adminState = await fetch(`${base}/api/state`, { headers: { cookie: adminCookie } }).then(res => res.json());
  assert.ok(adminState.persistentOperations?.recentReceipts?.some(receipt => receipt.entityId), "a real Admin must still see real entityIds");
});

// Found live (investor/admin dashboard audit): unlike its siblings
// /api/nexus/operation-receipts and /api/nexus/audit-log (both gated with a 401 for an
// unauthenticated caller), /api/nexus/activation-matrix had no auth check at all and
// returned raw, unredacted receipts/audit entries to a fully anonymous, pre-login caller.
test("GET /api/nexus/activation-matrix requires sign-in and redacts entityId for a non-admin caller", async () => {
  const anonymous = await fetch(`${base}/api/nexus/activation-matrix`);
  assert.equal(anonymous.status, 401, "an unauthenticated caller must not reach the activation matrix at all");

  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  const victimCookie = await login("zzops-victim@example.com", "VictimPass2026!");

  const nonAdminView = await fetch(`${base}/api/nexus/activation-matrix`, { headers: { cookie: victimCookie } }).then(res => res.json());
  assert.ok(nonAdminView.receipts.length > 0, "sanity check: there are real receipts to redact");
  for (const receipt of nonAdminView.receipts) assert.equal(receipt.entityId, null, "a non-admin must not see other users' real entityIds");
  for (const entry of nonAdminView.audit) assert.equal(entry.before, null);

  const adminView = await fetch(`${base}/api/nexus/activation-matrix`, { headers: { cookie: adminCookie } }).then(res => res.json());
  assert.ok(adminView.receipts.some(receipt => receipt.entityId), "a real Admin must still see real entityIds");
});

// Found live (investor/admin dashboard audit): this route already had the missing-401
// fix, but unlike its sibling /api/nexus/audit-log two routes below (redacted via
// redactSensitiveAuditEntry), it never redacted entityId for a non-admin caller.
test("GET /api/nexus/operation-receipts redacts entityId for a non-admin caller but still shows it to a real Admin", async () => {
  const anonymous = await fetch(`${base}/api/nexus/operation-receipts`);
  assert.equal(anonymous.status, 401);

  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  const victimCookie = await login("zzops-victim@example.com", "VictimPass2026!");

  const nonAdminView = await fetch(`${base}/api/nexus/operation-receipts`, { headers: { cookie: victimCookie } }).then(res => res.json());
  assert.ok(nonAdminView.receipts.length > 0, "sanity check: there are real receipts to redact");
  for (const receipt of nonAdminView.receipts) assert.equal(receipt.entityId, null, "a non-admin must not see other users' real entityIds");

  const adminView = await fetch(`${base}/api/nexus/operation-receipts`, { headers: { cookie: adminCookie } }).then(res => res.json());
  assert.ok(adminView.receipts.some(receipt => receipt.entityId), "a real Admin must still see real entityIds");
});

// Found live (operations-dashboard/entityId-leak follow-up sweep): the nexus_receipts
// AI-agent tool -- dispatchable by any signed-in Standard User or Investor, not just an
// Admin -- returned every entry's real entityId/relatedRecordId unredacted, while
// falsely claiming noSecretValuesReturned: true.
test("the nexus_receipts AI tool redacts entityId/relatedRecordId for a non-admin caller but still shows it to a real Admin", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  const victimCookie = await login("zzops-victim@example.com", "VictimPass2026!");

  const callTool = async cookie => fetch(`${base}/api/nexus/openai-native/tool`, { method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_receipts", command: "show my receipts and audit history" }) }).then(res => res.json());

  const nonAdminView = await callTool(victimCookie);
  assert.ok(nonAdminView.receipts.length > 0, "sanity check: there are real receipts/audit events to redact");
  for (const entry of nonAdminView.receipts) assert.ok(!entry.entityId && !entry.relatedRecordId, "a non-admin must not see other users' real IDs via nexus_receipts");

  const adminView = await callTool(adminCookie);
  assert.ok(adminView.receipts.some(entry => entry.entityId || entry.relatedRecordId), "a real Admin must still see real IDs");
});

// Found live (operations-dashboard/entityId-leak follow-up sweep): unlike its siblings,
// this route was gated against anonymous access but returned every user's auditEvents
// unredacted to ANY signed-in caller, each carrying a real cross-user relatedRecordId.
test("GET /api/nexus/consent-history redacts relatedRecordId for a non-admin caller but still shows it to a real Admin", async () => {
  const anonymous = await fetch(`${base}/api/nexus/consent-history`);
  assert.equal(anonymous.status, 401);

  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  const victimCookie = await login("zzops-victim@example.com", "VictimPass2026!");

  // Create a real db.nexusPilotAuditEvents entry (with a real relatedRecordId) to redact.
  const referral = await fetch(`${base}/api/nexus/pharmacy/create-referral`, { method: "POST",
    headers: { "content-type": "application/json", cookie: victimCookie },
    body: JSON.stringify({ confirmed: true, consentToPreparePacket: true }) }).then(res => res.json());
  assert.equal(referral.ok, true, "sanity check: the referral that creates the pilot audit event must itself succeed");

  const nonAdminView = await fetch(`${base}/api/nexus/consent-history`, { headers: { cookie: victimCookie } }).then(res => res.json());
  assert.ok(nonAdminView.auditEvents.length > 0, "sanity check: there are real audit events to redact");
  for (const entry of nonAdminView.auditEvents) assert.equal(entry.relatedRecordId, null, "a non-admin must not see other users' real relatedRecordId");

  const adminView = await fetch(`${base}/api/nexus/consent-history`, { headers: { cookie: adminCookie } }).then(res => res.json());
  assert.ok(adminView.auditEvents.some(entry => entry.relatedRecordId), "a real Admin must still see real relatedRecordIds");
});
