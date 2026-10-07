"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (flagged, never actually raised, resurfaced by re-scanning
// memory for dormant findings): db.profile was ONE shared, non-per-user JSON
// blob, and enrollments/certificates/activeCourseId/completedCourses/
// quizScore/learningHours/learningStreak/learningAssignments/quizAttempts/
// instructorNotes/learningProgressReports/learningTranscripts/
// learningCohorts/learningAccommodations/womenChildrenLearningPlans all lived
// there with no owner field at all -- two different real accounts starting
// the same course genuinely shared and overwrote one enrollment/certificate/
// progress record. Moved onto the user record itself (db.users[] already has
// genuinely unique entries per account, the same way login already works).
// publicState() merges the signed-in user's own fields back onto the
// client-visible profile.* shape so the existing frontend contract is
// unaffected; only the underlying per-account isolation changed.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-course-enrollment-cross-user-isolation-db.json");

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
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200, `login for ${email} failed`);
  return res.headers.get("set-cookie").split(";")[0];
}

async function post(cookie, pathname, body = {}) {
  const res = await fetch(`${base}${pathname}`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body) });
  return { status: res.status, body: await res.json() };
}

async function state(cookie) {
  const res = await fetch(`${base}/api/state`, { headers: { cookie } });
  return res.json();
}

test("two different accounts starting the same course have fully independent enrollments, quiz scores, and certificates", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  const userCookie = await login("user@agrinexus.org", "User2026!");

  const adminStart = await post(adminCookie, "/api/learning/start", { courseId: "digital-foundations" });
  assert.equal(adminStart.status, 200, JSON.stringify(adminStart.body));
  const userStart = await post(userCookie, "/api/learning/start", { courseId: "digital-foundations" });
  assert.equal(userStart.status, 200, JSON.stringify(userStart.body));

  // Only admin advances to quiz + certificate.
  await post(adminCookie, "/api/learning/lesson", { courseId: "digital-foundations", moduleIndex: 0 });
  const adminQuiz = await post(adminCookie, "/api/learning/quiz", {});
  assert.equal(adminQuiz.status, 200, JSON.stringify(adminQuiz.body));
  const adminCert = await post(adminCookie, "/api/learning/certificate", {});
  assert.equal(adminCert.status, 200, JSON.stringify(adminCert.body));

  const adminState = await state(adminCookie);
  const userState = await state(userCookie);

  assert.ok(adminState.profile.certificates.length >= 1, "admin should have a certificate after issuing one");
  assert.equal(userState.profile.certificates.length, 0, "user must not see admin's certificate -- a cross-user collision would leak it onto a shared array");

  const adminEnrollment = adminState.profile.enrollments.find(item => item.courseId === "digital-foundations");
  const userEnrollment = userState.profile.enrollments.find(item => item.courseId === "digital-foundations");
  assert.ok(adminEnrollment && userEnrollment, "both accounts must have their own enrollment record for the same course");
  assert.notEqual(adminEnrollment.progress, userEnrollment.progress, "progress on the same course must advance independently per account, not overwrite one shared record");
  assert.notEqual(adminState.profile.quizScore, userState.profile.quizScore, "quiz scores must be independent per account");
  assert.equal(userState.profile.activeCourseId, "digital-foundations", "the user's own active course must be unaffected by admin's workflow");
});
