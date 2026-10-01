"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (export/erasure sibling sweep): unlike their siblings applicantProfiles/employerProfiles/
// jobOpportunities (all of which stamp ownerId at creation and are correctly picked up by
// collectOwnedOperationsRecords/eraseOwnedOperationsRecords, which match strictly on
// item.ownerId === userId), resumePackets/jobApplications/interviewFollowUps/hiringPipelineRecords had
// NO owner field at all -- an undefined ownerId can never match a real user id, so these records were
// silently excluded from BOTH /api/account/export and /api/account/erase, with no disclosed gap either
// (the worst combination: neither erased nor disclosed). A real resume-packet headline/skills/summary,
// job-application status/summary, interview follow-up note, and hiring-pipeline status history all
// survived an account-erasure request untouched.
const root = path.resolve(__dirname, "..", "..");
const port = 4735;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-workforce-export-erasure-ownership-db.json");

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
  const res = await fetch(`${base}/api/nexus/operations/action`, { method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body) });
  const responseBody = await res.json();
  return { status: res.status, json: responseBody.nexusOperationsResult || responseBody };
}

test("resume packets, job applications, interview follow-ups, and hiring-pipeline records are owned, exported, and erased like their siblings", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzworkforce-export-erasure@example.com", "WorkforceExport2026!");
  const cookie = await login("zzworkforce-export-erasure@example.com", "WorkforceExport2026!");

  const applicant = await opsAction(cookie, { action: "create_applicant_profile" });
  assert.equal(applicant.json.ok, true);
  const packet = await opsAction(cookie, { action: "prepare_resume_packet", headline: "Ready to work" });
  assert.equal(packet.json.ok, true);
  const employer = await opsAction(cookie, { action: "create_employer_profile", companyName: "Export Test Co" });
  assert.equal(employer.json.ok, true);
  const job = await opsAction(cookie, { action: "add_job_opportunity", employerId: employer.json.record.employerId, title: "Export test role" });
  assert.equal(job.json.ok, true);
  const application = await opsAction(cookie, { action: "track_application_status", employerId: employer.json.record.employerId, jobOpportunityId: job.json.record.jobOpportunityId, status: "submitted" });
  assert.equal(application.json.ok, true);
  const followUp = await opsAction(cookie, { action: "add_interview_follow_up", employerId: employer.json.record.employerId, jobOpportunityId: job.json.record.jobOpportunityId });
  assert.equal(followUp.json.ok, true);

  const exportRes = await fetch(`${base}/api/account/export`, { method: "POST", headers: { "content-type": "application/json", cookie } });
  const exportBody = await exportRes.json();
  assert.equal(exportRes.status, 200, JSON.stringify(exportBody));
  assert.ok(exportBody.recordCounts.resumePackets >= 1, "resumePackets must be included in the export, not silently excluded for lacking an owner field");
  assert.ok(exportBody.recordCounts.jobApplications >= 1, "jobApplications must be included in the export");
  assert.ok(exportBody.recordCounts.interviewFollowUps >= 1, "interviewFollowUps must be included in the export");
  assert.ok(exportBody.recordCounts.hiringPipelineRecords >= 1, "hiringPipelineRecords must be included in the export");

  const eraseRes = await fetch(`${base}/api/account/erase`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ confirmed: true }) });
  const eraseBody = await eraseRes.json();
  assert.equal(eraseRes.status, 200, JSON.stringify(eraseBody));
  assert.ok(eraseBody.verification.profileRecordsRemoved.resumePackets >= 1, "resumePackets must actually be removed by erasure, not left behind for lacking an owner field");
  assert.ok(eraseBody.verification.profileRecordsRemoved.jobApplications >= 1, "jobApplications must actually be removed by erasure");
  assert.ok(eraseBody.verification.profileRecordsRemoved.interviewFollowUps >= 1, "interviewFollowUps must actually be removed by erasure");
  assert.ok(eraseBody.verification.profileRecordsRemoved.hiringPipelineRecords >= 1, "hiringPipelineRecords must actually be removed by erasure");
});

// Found live (same sweep, at the time db.profile.applications had the same gap in the existing
// workforce disclosure bucket). Separately, the course-enrollment cross-user collision fix later moved
// enrollments/completedCourses/womenChildrenLearningPlans off this same shared db.profile blob onto the
// user record itself, which has a real owner -- so they now belong in the real export/erasure path
// instead of the gap list (see collectUserLearningRecords/eraseUserLearningRecords).
test("account export discloses the workforce-applications gap and includes the enrollments/completedCourses/learning-plans records directly, not as a gap", async () => {
  const seeded = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  seeded.profile.applications = [{ id: "application-seed-1", roleId: "role-1", roleTitle: "Field Lead", status: "submitted" }];
  const adminUser = seeded.users.find(item => item.email === "admin@agrinexus.org");
  adminUser.enrollments = [{ id: "enrollment-seed-1", courseId: "course-1", status: "in_progress" }];
  adminUser.completedCourses = ["course-1"];
  fs.writeFileSync(tempDbPath, JSON.stringify(seeded));

  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  const exportRes = await fetch(`${base}/api/account/export`, { method: "POST", headers: { "content-type": "application/json", cookie: adminCookie } });
  const exportBody = await exportRes.json();
  assert.equal(exportRes.status, 200, JSON.stringify(exportBody));
  const gaps = exportBody.knownGaps.join(" | ");
  assert.doesNotMatch(gaps, /course enrollment/i, "the enrollments now have a real owner and must not be disclosed as a gap");
  assert.match(gaps, /role application/i, "the workforce applications gap must be disclosed");
  assert.equal(exportBody.recordCounts.enrollments, 1, "the admin's own enrollment must appear in the real export");
  assert.equal(exportBody.recordCounts.completedCourses, 1, "the admin's own completed-course history must appear in the real export");
});
