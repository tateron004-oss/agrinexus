"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (Nexus Operations uncapped-collections sweep, same bug class as
// the workforce/job-search sweep in workforce-toolkit-scoping-and-caps.test.js):
// chronicCareProfiles/rpmReadings/rtmActivities/cases/healthcareIntakes/
// providers/learningProfiles/trainingRecords/learningPlans/skillAssessments/
// lmsHandoffRecords/certificationPathways were NEVER capped anywhere, unlike
// this exact store's own sibling collections (auditLogs/actionReceipts/
// consentRecords, all capped to 1000 right after unshift). This store is
// GLOBAL across every user of the app (ownerId is a read-side filter, not
// storage partitioning), so unbounded growth here degrades every write in the
// whole application over time, not just health/learning ones.
//
// Separately and more severely: rpmReadings/rtmActivities/cases (health) and
// the shared training-record object written to trainingRecords/learningPlans/
// skillAssessments/lmsHandoffRecords/certificationPathways (learning) were
// created with NO ownerId field at all -- unlike their already-correct
// siblings chronicCareProfiles/healthcareIntakes/providers/learningProfiles.
// collectOwnedOperationsRecords/eraseOwnedOperationsRecords (used by
// /api/account/export and /api/account/erase) match strictly on
// item.ownerId === userId, and none of these collections are in
// NEXUS_OPERATIONS_AUDIT_TRAIL_COLLECTIONS (so they are not disclosed as a
// known gap either) -- an undefined ownerId can never match a real user id,
// so a real RPM reading, RTM activity, provider-review case, training
// referral, learning plan, skill-assessment packet, LMS handoff record, or
// certification pathway all silently survived account erasure and were
// absent from export, with no disclosed gap (the worst combination: neither
// erased nor disclosed).
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-nexus-operations-health-learning-caps-db.json");

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

// Pre-seed all 12 uncapped collections with 1000 filler entries each, owned
// by nobody real, so proving the cap holds needs exactly ONE real HTTP call
// per collection instead of 1000+.
const CAPPED_COLLECTIONS = [
  "chronicCareProfiles", "rpmReadings", "rtmActivities", "cases", "healthcareIntakes",
  "providers", "learningProfiles", "trainingRecords", "learningPlans", "skillAssessments",
  "lmsHandoffRecords", "certificationPathways"
];

function seedFullCollections(dbFilePath) {
  const db = JSON.parse(fs.readFileSync(dbFilePath, "utf8"));
  const filler = () => Array.from({ length: 1000 }, (_, i) => ({
    id: `seed-filler-${i}`,
    ownerId: "seed-filler-owner",
    status: "active",
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString()
  }));
  const seeded = {};
  for (const key of CAPPED_COLLECTIONS) seeded[key] = filler();
  db.nexusPersistentOperations = { ...(db.nexusPersistentOperations || {}), ...seeded };
  fs.writeFileSync(dbFilePath, JSON.stringify(db));
}

let server;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  seedFullCollections(tempDbPath);
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
  const res = await fetch(`${base}/api/nexus/operations/action`, { method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body) });
  const responseBody = await res.json();
  return { status: res.status, json: responseBody.nexusOperationsResult || responseBody };
}

async function post(cookie, pathname, body = {}) {
  const res = await fetch(`${base}${pathname}`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body) });
  return { status: res.status, body: await res.json() };
}

function currentCollectionLength(name) {
  const db = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  return db.nexusPersistentOperations[name].length;
}

test("repeatedly creating chronic-care/health/provider/learning records does not grow the global operations store without bound", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzopscap-health-learning@example.com", "OpsCapHealth2026!");
  const cookie = await login("zzopscap-health-learning@example.com", "OpsCapHealth2026!");

  for (const key of CAPPED_COLLECTIONS) {
    assert.equal(currentCollectionLength(key), 1000, `sanity: ${key} must start pre-seeded at the cap`);
  }

  const chronicCare = await opsAction(cookie, { action: "create_chronic_care_profile", conditionArea: "diabetes" });
  assert.equal(chronicCare.json.ok, true, JSON.stringify(chronicCare.json));
  assert.equal(currentCollectionLength("chronicCareProfiles"), 1000, "adding one more past 1000 must drop the oldest, not grow past the cap");
  assert.equal(JSON.parse(fs.readFileSync(tempDbPath, "utf8")).nexusPersistentOperations.chronicCareProfiles[0].chronicCareId, chronicCare.json.record.chronicCareId, "the newest record must still be present at the front");

  const rpm = await opsAction(cookie, { action: "add_rpm_reading", chronicCareId: chronicCare.json.record.chronicCareId, value: "120/80" });
  assert.equal(rpm.json.ok, true, JSON.stringify(rpm.json));
  assert.equal(currentCollectionLength("rpmReadings"), 1000);

  const rtm = await opsAction(cookie, { action: "add_rtm_activity", chronicCareId: chronicCare.json.record.chronicCareId, value: "walked 20 minutes" });
  assert.equal(rtm.json.ok, true, JSON.stringify(rtm.json));
  assert.equal(currentCollectionLength("rtmActivities"), 1000);

  const caseRecord = await opsAction(cookie, { action: "create_provider_review_packet", chronicCareId: chronicCare.json.record.chronicCareId });
  assert.equal(caseRecord.json.ok, true, JSON.stringify(caseRecord.json));
  assert.equal(currentCollectionLength("cases"), 1000);

  const intake = await opsAction(cookie, { action: "create_intake", reason: "Cap test intake" });
  assert.equal(intake.json.ok, true, JSON.stringify(intake.json));
  assert.equal(currentCollectionLength("healthcareIntakes"), 1000);

  const provider = await opsAction(cookie, { action: "add_provider", name: "Cap Test Clinic" });
  assert.equal(provider.json.ok, true, JSON.stringify(provider.json));
  assert.equal(currentCollectionLength("providers"), 1000);

  const learningProfile = await opsAction(cookie, { action: "create_learning_profile", learnerName: "Cap Test Learner" });
  assert.equal(learningProfile.json.ok, true, JSON.stringify(learningProfile.json));
  assert.equal(currentCollectionLength("learningProfiles"), 1000);

  const trainingRecord = await opsAction(cookie, { action: "prepare_training_referral", learningProfileId: learningProfile.json.record.learningProfileId });
  assert.equal(trainingRecord.json.ok, true, JSON.stringify(trainingRecord.json));
  assert.equal(currentCollectionLength("trainingRecords"), 1000);

  const learningPlan = await opsAction(cookie, { action: "create_learning_plan", learningProfileId: learningProfile.json.record.learningProfileId });
  assert.equal(learningPlan.json.ok, true, JSON.stringify(learningPlan.json));
  assert.equal(currentCollectionLength("learningPlans"), 1000);

  const skillAssessment = await opsAction(cookie, { action: "create_skill_assessment_packet", learningProfileId: learningProfile.json.record.learningProfileId });
  assert.equal(skillAssessment.json.ok, true, JSON.stringify(skillAssessment.json));
  assert.equal(currentCollectionLength("skillAssessments"), 1000);

  const lmsHandoff = await opsAction(cookie, { action: "prepare_lms_handoff", learningProfileId: learningProfile.json.record.learningProfileId });
  assert.equal(lmsHandoff.json.ok, true, JSON.stringify(lmsHandoff.json));
  assert.equal(currentCollectionLength("lmsHandoffRecords"), 1000);

  const certificationPathway = await opsAction(cookie, { action: "create_drone_training_referral", learningProfileId: learningProfile.json.record.learningProfileId });
  assert.equal(certificationPathway.json.ok, true, JSON.stringify(certificationPathway.json));
  assert.equal(currentCollectionLength("certificationPathways"), 1000);
});

test("RPM readings, RTM activities, provider-review cases, and learning/training records are owned, exported, and erased like their siblings", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzops-health-learning-export@example.com", "OpsExportHealth2026!");
  const cookie = await login("zzops-health-learning-export@example.com", "OpsExportHealth2026!");

  const chronicCare = await opsAction(cookie, { action: "create_chronic_care_profile", conditionArea: "hypertension" });
  assert.equal(chronicCare.json.ok, true, JSON.stringify(chronicCare.json));
  const rpm = await opsAction(cookie, { action: "add_rpm_reading", chronicCareId: chronicCare.json.record.chronicCareId, value: "130/85" });
  assert.equal(rpm.json.ok, true, JSON.stringify(rpm.json));
  const rtm = await opsAction(cookie, { action: "add_rtm_activity", chronicCareId: chronicCare.json.record.chronicCareId, value: "stretching" });
  assert.equal(rtm.json.ok, true, JSON.stringify(rtm.json));
  const caseRecord = await opsAction(cookie, { action: "create_provider_review_packet", chronicCareId: chronicCare.json.record.chronicCareId });
  assert.equal(caseRecord.json.ok, true, JSON.stringify(caseRecord.json));

  const learningProfile = await opsAction(cookie, { action: "create_learning_profile", learnerName: "Export Test Learner" });
  assert.equal(learningProfile.json.ok, true, JSON.stringify(learningProfile.json));
  const trainingRecord = await opsAction(cookie, { action: "prepare_training_referral", learningProfileId: learningProfile.json.record.learningProfileId });
  assert.equal(trainingRecord.json.ok, true, JSON.stringify(trainingRecord.json));
  const learningPlan = await opsAction(cookie, { action: "create_learning_plan", learningProfileId: learningProfile.json.record.learningProfileId });
  assert.equal(learningPlan.json.ok, true, JSON.stringify(learningPlan.json));
  const skillAssessment = await opsAction(cookie, { action: "create_skill_assessment_packet", learningProfileId: learningProfile.json.record.learningProfileId });
  assert.equal(skillAssessment.json.ok, true, JSON.stringify(skillAssessment.json));
  const lmsHandoff = await opsAction(cookie, { action: "prepare_lms_handoff", learningProfileId: learningProfile.json.record.learningProfileId });
  assert.equal(lmsHandoff.json.ok, true, JSON.stringify(lmsHandoff.json));
  const certificationPathway = await opsAction(cookie, { action: "create_drone_training_referral", learningProfileId: learningProfile.json.record.learningProfileId });
  assert.equal(certificationPathway.json.ok, true, JSON.stringify(certificationPathway.json));

  const exportRes = await post(cookie, "/api/account/export");
  assert.equal(exportRes.status, 200, JSON.stringify(exportRes.body));
  assert.ok(exportRes.body.recordCounts.rpmReadings >= 1, "rpmReadings must be included in the export, not silently excluded for lacking an owner field");
  assert.ok(exportRes.body.recordCounts.rtmActivities >= 1, "rtmActivities must be included in the export");
  assert.ok(exportRes.body.recordCounts.cases >= 1, "cases must be included in the export");
  assert.ok(exportRes.body.recordCounts.trainingRecords >= 1, "trainingRecords must be included in the export");
  assert.ok(exportRes.body.recordCounts.learningPlans >= 1, "learningPlans must be included in the export");
  assert.ok(exportRes.body.recordCounts.skillAssessments >= 1, "skillAssessments must be included in the export");
  assert.ok(exportRes.body.recordCounts.lmsHandoffRecords >= 1, "lmsHandoffRecords must be included in the export");
  assert.ok(exportRes.body.recordCounts.certificationPathways >= 1, "certificationPathways must be included in the export");

  const eraseRes = await post(cookie, "/api/account/erase", { confirmed: true });
  assert.equal(eraseRes.status, 200, JSON.stringify(eraseRes.body));
  assert.ok(eraseRes.body.verification.profileRecordsRemoved.rpmReadings >= 1, "rpmReadings must actually be removed by erasure, not left behind for lacking an owner field");
  assert.ok(eraseRes.body.verification.profileRecordsRemoved.rtmActivities >= 1, "rtmActivities must actually be removed by erasure");
  assert.ok(eraseRes.body.verification.profileRecordsRemoved.cases >= 1, "cases must actually be removed by erasure");
  assert.ok(eraseRes.body.verification.profileRecordsRemoved.trainingRecords >= 1, "trainingRecords must actually be removed by erasure");
  assert.ok(eraseRes.body.verification.profileRecordsRemoved.learningPlans >= 1, "learningPlans must actually be removed by erasure");
  assert.ok(eraseRes.body.verification.profileRecordsRemoved.skillAssessments >= 1, "skillAssessments must actually be removed by erasure");
  assert.ok(eraseRes.body.verification.profileRecordsRemoved.lmsHandoffRecords >= 1, "lmsHandoffRecords must actually be removed by erasure");
  assert.ok(eraseRes.body.verification.profileRecordsRemoved.certificationPathways >= 1, "certificationPathways must actually be removed by erasure");
});
