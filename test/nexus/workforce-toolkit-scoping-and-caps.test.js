"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (real-estate/workforce sibling sweep): two bugs in the same
// prepare_application_packet/track_application_status/add_interview_follow_up
// handler and its sibling create actions.
//
// 1. The job-opportunity fallback used to pick the caller's first owned job
//    from ANY employer, ignoring the employerId already resolved on the line
//    above -- a user managing more than one employer could get an
//    application recorded against one employer's job while attributed to a
//    different employer.
// 2. None of applicantProfiles/resumePackets/employerProfiles/
//    jobOpportunities/jobApplications/interviewFollowUps/hiringPipelineRecords
//    were ever capped, unlike this exact store's own sibling collections
//    (auditLogs/actionReceipts/consentRecords, all capped to 1000). This
//    store is GLOBAL across every user of the app, so unbounded growth here
//    degrades every write in the whole application over time.
const root = path.resolve(__dirname, "..", "..");
const port = 4734;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-workforce-toolkit-scoping-and-caps-db.json");

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

// Pre-seed all 7 uncapped collections with 1000 filler entries each, owned
// by nobody real, so proving the cap holds needs exactly ONE real HTTP call
// per collection instead of 1000+.
function seedFullCollections(dbFilePath) {
  const db = JSON.parse(fs.readFileSync(dbFilePath, "utf8"));
  const filler = (prefix, extra = {}) => Array.from({ length: 1000 }, (_, i) => ({
    [`${prefix}Id`]: `seed-${prefix}-${i}`,
    ownerId: "seed-filler-owner",
    status: "active",
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
    ...extra
  }));
  db.nexusPersistentOperations = {
    ...(db.nexusPersistentOperations || {}),
    applicantProfiles: filler("applicant"),
    resumePackets: filler("resumePacket"),
    employerProfiles: filler("employer"),
    jobOpportunities: filler("jobOpportunity"),
    jobApplications: filler("application"),
    interviewFollowUps: filler("application"),
    hiringPipelineRecords: filler("pipeline")
  };
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

function currentCollectionLength(name) {
  const db = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  return db.nexusPersistentOperations[name].length;
}

test("track_application_status scopes its job-opportunity fallback to the resolved employer, not the caller's first owned job from any employer", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzworkforce-employer-scope@example.com", "WorkforceScope2026!");
  const cookie = await login("zzworkforce-employer-scope@example.com", "WorkforceScope2026!");

  const employerA = await opsAction(cookie, { action: "create_employer_profile", companyName: "Acme Farms" });
  assert.equal(employerA.json.ok, true);
  const jobA = await opsAction(cookie, { action: "add_job_opportunity", employerId: employerA.json.record.employerId, title: "Field lead" });
  assert.equal(jobA.json.ok, true);
  assert.equal(jobA.json.record.employerId, employerA.json.record.employerId);

  const employerB = await opsAction(cookie, { action: "create_employer_profile", companyName: "Beta Logistics" });
  assert.equal(employerB.json.ok, true);
  assert.notEqual(employerB.json.record.employerId, employerA.json.record.employerId);

  // No jobOpportunityId supplied, and employer B has no jobs of its own yet.
  // Before the fix, this fell through to the caller's first owned job from
  // ANY employer -- Employer A's "Field lead" -- attributing the application
  // to the wrong employer/job pairing.
  const application = await opsAction(cookie, { action: "track_application_status", employerId: employerB.json.record.employerId, status: "submitted" });
  assert.equal(application.json.ok, true);
  assert.equal(application.json.record.employerId, employerB.json.record.employerId, "the application must be attributed to employer B, which it was explicitly requested for");
  assert.notEqual(application.json.record.jobOpportunityId, jobA.json.record.jobOpportunityId, "the application must never attach to employer A's job when employer B was explicitly requested");
});

test("repeatedly creating applicant/employer/job/application records does not grow the global operations store without bound", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzworkforce-cap@example.com", "WorkforceCap2026!");
  const cookie = await login("zzworkforce-cap@example.com", "WorkforceCap2026!");

  assert.equal(currentCollectionLength("applicantProfiles"), 1000, "sanity: the collection must start pre-seeded at the cap");
  const applicant = await opsAction(cookie, { action: "create_applicant_profile", headline: "Cap test applicant" });
  assert.equal(applicant.json.ok, true);
  assert.equal(currentCollectionLength("applicantProfiles"), 1000, "adding one more past 1000 must drop the oldest, not grow past the cap");
  assert.equal(JSON.parse(fs.readFileSync(tempDbPath, "utf8")).nexusPersistentOperations.applicantProfiles[0].applicantId, applicant.json.record.applicantId, "the newest record must still be present at the front");

  const packet = await opsAction(cookie, { action: "prepare_resume_packet" });
  assert.equal(packet.json.ok, true);
  assert.equal(currentCollectionLength("resumePackets"), 1000);

  const employer = await opsAction(cookie, { action: "create_employer_profile", companyName: "Cap Test Co" });
  assert.equal(employer.json.ok, true);
  assert.equal(currentCollectionLength("employerProfiles"), 1000);

  const job = await opsAction(cookie, { action: "add_job_opportunity", employerId: employer.json.record.employerId, title: "Cap test role" });
  assert.equal(job.json.ok, true);
  assert.equal(currentCollectionLength("jobOpportunities"), 1000);

  const application = await opsAction(cookie, { action: "track_application_status", employerId: employer.json.record.employerId, jobOpportunityId: job.json.record.jobOpportunityId, status: "submitted" });
  assert.equal(application.json.ok, true);
  assert.equal(currentCollectionLength("jobApplications"), 1000);
  assert.equal(currentCollectionLength("hiringPipelineRecords"), 1000);

  const followUp = await opsAction(cookie, { action: "add_interview_follow_up", employerId: employer.json.record.employerId, jobOpportunityId: job.json.record.jobOpportunityId });
  assert.equal(followUp.json.ok, true);
  assert.equal(currentCollectionLength("interviewFollowUps"), 1000);
});
