"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (workforce/job-search audit, same bug class as the telehealth
// export/erasure gap): db.nexusPersistentOperations is another top-level
// sibling of db.profile -- a whole separate "Nexus Operations" content store
// (health, marketplace, learning, workforce/job-search, drone, and more)
// with a real, uniform per-item ownerId field already used correctly for
// read-side isolation, but collectOwnedProfileRecords/eraseOwnedProfileRecords
// never scanned it at all. A real applicant's career profile (name, target
// roles, skills, region) silently survived account erasure and was absent
// from export, with no disclosed gap.
const root = path.resolve(__dirname, "..", "..");
const port = 4709;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-nexus-operations-export-erasure-db.json");

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

async function opsAction(cookie, body) {
  const res = await fetch(`${base}/api/nexus/operations/action`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body) });
  const responseBody = await res.json();
  return { status: res.status, json: responseBody.nexusOperationsResult || responseBody };
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

test("a real applicant career profile (Nexus Operations content) is included in the owning account's own export, absent from a different account's", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzops-export-victim1@example.com", "VictimPass2026!");
  await createTestUser(adminCookie, "zzops-export-attacker1@example.com", "AttackerPass2026!");
  const victimCookie = await login("zzops-export-victim1@example.com", "VictimPass2026!");
  const attackerCookie = await login("zzops-export-attacker1@example.com", "AttackerPass2026!");

  const created = await opsAction(victimCookie, { action: "create_applicant_profile", applicantName: "Real Applicant" });
  assert.equal(created.json.ok, true, JSON.stringify(created.json));

  const victimExport = await post(victimCookie, "/api/account/export");
  assert.equal(victimExport.status, 200, JSON.stringify(victimExport.body));
  assert.equal(victimExport.body.recordCounts.applicantProfiles, 1,
    "the victim's own real applicant profile must be included in their own export, not silently omitted");

  const attackerExport = await post(attackerCookie, "/api/account/export");
  assert.equal(attackerExport.status, 200, JSON.stringify(attackerExport.body));
  assert.ok(!attackerExport.body.recordCounts.applicantProfiles,
    "a different real account must never see another user's applicant profile in their own export");
});

test("account erasure actually removes a user's real applicant profile from Nexus Operations, leaving a different account's own profile untouched", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzops-export-victim2@example.com", "VictimPass2026!");
  await createTestUser(adminCookie, "zzops-export-other2@example.com", "OtherPass2026!");
  const victimCookie = await login("zzops-export-victim2@example.com", "VictimPass2026!");
  const otherCookie = await login("zzops-export-other2@example.com", "OtherPass2026!");

  await opsAction(victimCookie, { action: "create_applicant_profile", applicantName: "Victim Applicant" });
  await opsAction(otherCookie, { action: "create_applicant_profile", applicantName: "Other Applicant" });

  const erase = await post(victimCookie, "/api/account/erase", { confirmed: true });
  assert.equal(erase.status, 200, JSON.stringify(erase.body));
  assert.equal(erase.body.verification.profileRecordsRemoved.applicantProfiles, 1,
    "erasing the account must actually remove the real applicant profile, not just claim success while leaving it in place");

  const otherExport = await post(otherCookie, "/api/account/export");
  assert.equal(otherExport.status, 200, JSON.stringify(otherExport.body));
  assert.equal(otherExport.body.recordCounts.applicantProfiles, 1,
    "a different real account's own applicant profile must survive another account's erasure untouched");
});

// Found live (Nexus Operations sibling audit, same shape already fixed for droneMissionEvents/
// droneImageryReports/heatRiskReports): add_tracking_event never set ownerId on the event it wrote, so
// this content silently survived erasure forever and was absent from export, with no disclosed gap.
test("a real shipment tracking-event note is included in the owning account's own export and removed on erasure", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzops-export-victim4@example.com", "VictimPass2026!");
  await createTestUser(adminCookie, "zzops-export-other4@example.com", "OtherPass2026!");
  const victimCookie = await login("zzops-export-victim4@example.com", "VictimPass2026!");
  const otherCookie = await login("zzops-export-other4@example.com", "OtherPass2026!");

  const shipment = await opsAction(victimCookie, { action: "create_shipment", origin: "Farm A", destination: "Market B" });
  assert.equal(shipment.json.ok, true, JSON.stringify(shipment.json));
  const tracking = await opsAction(victimCookie, { action: "add_tracking_event", shipmentId: shipment.json.record.shipmentId, status: "picked-up", notes: "Left the farm at dawn" });
  assert.equal(tracking.json.ok, true, JSON.stringify(tracking.json));

  const victimExport = await post(victimCookie, "/api/account/export");
  assert.equal(victimExport.status, 200, JSON.stringify(victimExport.body));
  assert.equal(victimExport.body.recordCounts.trackingEvents, 1,
    "the victim's own real tracking-event note must be included in their own export, not silently omitted");

  await opsAction(otherCookie, { action: "create_shipment" });
  const otherTracking = await opsAction(otherCookie, { action: "add_tracking_event", notes: "Someone else's note" });
  assert.equal(otherTracking.json.ok, true, JSON.stringify(otherTracking.json));

  const erase = await post(victimCookie, "/api/account/erase", { confirmed: true });
  assert.equal(erase.status, 200, JSON.stringify(erase.body));
  assert.equal(erase.body.verification.profileRecordsRemoved.trackingEvents, 1,
    "erasing the account must actually remove the real tracking-event note, not just claim success while leaving it in place");

  const otherExportAfter = await post(otherCookie, "/api/account/export");
  assert.equal(otherExportAfter.status, 200, JSON.stringify(otherExportAfter.body));
  assert.equal(otherExportAfter.body.recordCounts.trackingEvents, 1,
    "a different real account's own tracking-event note must survive another account's erasure untouched");
});

test("account export honestly discloses that Nexus Operations' own audit trail (receipts/consent/audit log) is retained, not included", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzops-export-victim3@example.com", "VictimPass2026!");
  const victimCookie = await login("zzops-export-victim3@example.com", "VictimPass2026!");

  // create_applicant_profile always writes a real consent record + audit
  // entry + action receipt alongside the applicant profile itself.
  await opsAction(victimCookie, { action: "create_applicant_profile", applicantName: "Disclosure Test Applicant" });

  const exportRes = await post(victimCookie, "/api/account/export");
  assert.equal(exportRes.status, 200, JSON.stringify(exportRes.body));
  assert.ok(exportRes.body.knownGaps.some(gap => /audit|receipt|consent/i.test(gap)),
    "the export must honestly disclose that Nexus Operations' own audit-trail records are retained, not imply completeness");
  assert.ok(!exportRes.body.recordCounts.actionReceipts && !exportRes.body.recordCounts.auditLogs && !exportRes.body.recordCounts.consentRecords,
    "the audit-trail collections must not be included in the export as if they were primary user content");
});
