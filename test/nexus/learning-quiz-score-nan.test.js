"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live: db.profile.quizScore is never initialized by
// ensureLearningProfile() (unlike learningStreak/learningHours/enrollments,
// which all default to 0/[]), and POST /api/learning/quiz's one live call
// site computed `Math.max(db.profile.quizScore, enrollment.score)` with no
// `|| 0` fallback -- every other one of the 5 call sites in server.js has
// that fallback, this one didn't. A brand-new learner's very first quiz
// computed Math.max(undefined, 25) === NaN, and Math.max(NaN, x) is always
// NaN, so quizScore was silently and PERMANENTLY poisoned to NaN from the
// first quiz onward, no matter how well later quizzes went.
const root = path.resolve(__dirname, "..", "..");
const port = 4649;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-learning-quiz-score-nan-db.json");

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
    body: JSON.stringify({ email, name: "Fresh Learner", password }) });
  assert.equal(res.status, 200, `creating ${email} should succeed`);
}

async function post(cookie, path, body) {
  const res = await fetch(`${base}${path}`, { method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body || {}) });
  return { status: res.status, json: await res.json() };
}

let server;

test.before(async () => {
  // db.profile is a single shared state row for the whole app (not
  // per-user), and the checked-in db.json already seeds quizScore to a
  // real number from prior use -- delete it here to genuinely reproduce
  // "never initialized," the actual condition that triggers the bug.
  const db = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  delete db.profile.quizScore;
  fs.writeFileSync(tempDbPath, JSON.stringify(db));
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

test("a brand-new learner's very first quiz never permanently poisons quizScore to NaN", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zz-fresh-learner@example.com", "FreshLearner2026!");
  const learnerCookie = await login("zz-fresh-learner@example.com", "FreshLearner2026!");

  const firstQuiz = await post(learnerCookie, "/api/learning/quiz", {});
  assert.equal(firstQuiz.status, 200);
  assert.ok(Number.isFinite(firstQuiz.json.profile.quizScore), `quizScore must be a real number after the first quiz, got ${firstQuiz.json.profile.quizScore}`);
  assert.ok(firstQuiz.json.profile.quizScore > 0);

  const secondQuiz = await post(learnerCookie, "/api/learning/quiz", {});
  assert.ok(Number.isFinite(secondQuiz.json.profile.quizScore), "quizScore must stay a real number after a second quiz, never permanently poisoned to NaN");
  assert.ok(secondQuiz.json.profile.quizScore >= firstQuiz.json.profile.quizScore, "quizScore must be able to improve, not get stuck");
});
