// Manual local verification for the Phase 9 course-progress shadow-write
// (learningBridgeProvider.markProgress() -> server/pg-courses.js). Not part
// of scripts/qa-suite.js: needs a real local Postgres with
// COURSE_STORE=postgres + DATABASE_URL configured (see .env), same reason
// the other Phase 9 expansion scripts are standalone.
//
// Calls the real tool dispatcher directly (POST /api/nexus/openai-native/tool
// with an explicit toolName) rather than going through a real OpenAI model
// call to choose the tool -- this project has repeatedly documented that
// tool *selection* is inherently non-deterministic (the model sometimes
// picks a different tool, or rephrases the command text, for identical
// input), which is a live-model characteristic unrelated to the dispatch
// logic this script is actually verifying. Calling the dispatcher directly
// still exercises the real command-text parsing (wantsProgress/regex
// stripping), the real learningBridge.markProgress() call, and the real
// Postgres shadow-write -- everything downstream of tool selection.
// Run manually: node scripts/courses-expansion-verify.js
const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");
const { loadEnvFile } = require("../foundation/src/runtime/env-file");
const pgUsers = require("../server/pg-users.js");

loadEnvFile();

const port = 4500;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-courses-expansion-verify-db.json");

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

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const setCookie = res.headers.get("set-cookie");
  if (!res.ok) throw new Error(`login ${email} failed: ${res.status}`);
  return setCookie.split(";")[0];
}

async function callLearningTool(command, cookie) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    // confirmed: true -- learningBridge.markProgress/saveResource/
    // createLearningReminder now forward the caller's real confirmation
    // instead of the provider's requireConfirmation() gate being bypassed.
    body: JSON.stringify({ name: "nexus_workforce_learning", arguments: { command, confirmed: true } })
  });
  return res.json();
}

(async () => {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required -- set it the same way COURSE_STORE=postgres expects (see .env).");
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  fs.copyFileSync(dbPath, tempDbPath);
  const testEmail = `courses-verify-${Date.now()}@agrinexus.test`;
  const testPassword = "CoursesVerify2026!";
  const createdUser = await pgUsers.createUser(pool, { email: testEmail, displayName: "Courses Verify", password: testPassword });

  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, COURSE_STORE: "postgres", AUTH_STORE: "postgres", OPENAI_API_KEY: "" },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitFor(`${base}/api/healthz`);
    const cookie = await login(testEmail, testPassword);

    const started = await callLearningTool("I started the irrigation basics course.", cookie);
    assert.equal(started.status, "learning-progress-recorded", `expected the dispatcher to actually record progress, got status=${started.status}`);
    console.log("Tool response (started):", started.response);

    let enrollmentRow = { rows: [] };
    for (let i = 0; i < 20 && enrollmentRow.rows.length === 0; i += 1) {
      await wait(300);
      enrollmentRow = await pool.query(
        `select ce.status, c.code, c.title, lp.user_id
         from course_enrollments ce
         join courses c on c.id = ce.course_id
         join learner_profiles lp on lp.id = ce.learner_profile_id
         where lp.user_id = $1`,
        [createdUser.id]
      );
    }
    assert.equal(enrollmentRow.rows.length, 1, "a real 'I started X course' command must shadow-write a real, linked course_enrollments row");
    assert.equal(enrollmentRow.rows[0].status, "started");
    console.log(`Verified real course_enrollments row: course=${enrollmentRow.rows[0].code}, status=${enrollmentRow.rows[0].status}`);

    const finished = await callLearningTool("I've finished the irrigation basics course.", cookie);
    assert.equal(finished.status, "learning-progress-recorded", `expected the dispatcher to actually record progress, got status=${finished.status}`);
    console.log("Tool response (completed, contraction phrasing):", finished.response);

    let completedRow = { rows: [{ status: "started" }] };
    for (let i = 0; i < 20 && completedRow.rows[0].status !== "completed"; i += 1) {
      await wait(300);
      completedRow = await pool.query(
        `select ce.status, ce.completed_at
         from course_enrollments ce
         join learner_profiles lp on lp.id = ce.learner_profile_id
         where lp.user_id = $1`,
        [createdUser.id]
      );
    }
    assert.equal(completedRow.rows[0].status, "completed", "completing the same course must update the SAME real row, not create a second one");
    assert.ok(completedRow.rows[0].completed_at, "a completed enrollment must record a real completed_at timestamp");
    const countCheck = await pool.query(
      `select count(*)::int as count from course_enrollments ce join learner_profiles lp on lp.id = ce.learner_profile_id where lp.user_id = $1`,
      [createdUser.id]
    );
    assert.equal(countCheck.rows[0].count, 1, "start+complete on the same course must upsert one row, not two");
    console.log("Verified completion updates the same real course_enrollments row (status=completed, completed_at set), including via a contraction phrasing that previously broke the search");

    // Regression check: a save/reminder request that also mentions progress
    // language must still save/remind, not get intercepted by progress
    // tracking (the branch-order bug found in review).
    const saveResult = await callLearningTool("Save the soil health basics course I started", cookie);
    assert.equal(saveResult.status, "learning-resource-saved", `a save request must still save even when it also mentions progress language, got status=${saveResult.status}`);
    console.log("Verified: a 'save' command that also mentions progress language still saves (branch-order fix holds).");

    await pool.query("delete from course_enrollments where learner_profile_id = (select id from learner_profiles where user_id = $1)", [createdUser.id]);
    await pool.query("delete from learner_profiles where user_id = $1", [createdUser.id]);
    console.log("Courses expansion verification passed");
  } finally {
    server.kill();
    await pool.query("delete from users where id = $1", [createdUser.id]).catch(() => {});
    await pool.end();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(async error => {
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  console.error(error.stack || error.message);
  process.exit(1);
});
