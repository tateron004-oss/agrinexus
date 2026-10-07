"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-learning-advanced-quiz-score-db.json");

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
let cookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const loginRes = await fetch(`${base}/api/login`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "demo@agrinexus.org", password: "Prototype2026!" })
  });
  assert.equal(loginRes.status, 200);
  cookie = loginRes.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

async function quizAttempt(score) {
  const res = await fetch(`${base}/api/learning/advanced`, {
    method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ type: "quiz-attempt", score })
  });
  return { status: res.status, body: await res.json() };
}

// Found live (money-logic-shaped audit, same gap as workforce/advanced's
// already-fixed evaluation action): quiz-attempt's `score: Number(body.score
// || fallback)` treated an explicit score:0 (a genuinely failed quiz) as
// falsy and silently substituted a fake 72-96 passing score, and had no
// Number.isFinite check at all -- a non-finite score like "Infinity" survived
// Number(...) as a truthy Infinity, permanently poisoning
// enrollment.score/db.profile.quizScore (both gate certificate issuance and
// workforce readiness elsewhere) via Math.max.
test("an explicit failing score of 0 is honored, not silently replaced with a fake passing score", async () => {
  const result = await quizAttempt(0);
  assert.equal(result.status, 200, JSON.stringify(result.body));
  const record = result.body.learningAdvancedResult?.record;
  assert.ok(record, JSON.stringify(result.body));
  assert.equal(record.score, 0, "an explicit failing score must be recorded honestly, not overridden to a fake passing score");
});

test("a non-finite score never poisons the recorded score or the enrollment/quizScore fields with Infinity", async () => {
  const result = await quizAttempt("Infinity");
  assert.equal(result.status, 200, JSON.stringify(result.body));
  const record = result.body.learningAdvancedResult?.record;
  assert.ok(record, JSON.stringify(result.body));
  assert.ok(Number.isFinite(record.score), `score must be finite, got ${record.score}`);
  assert.ok(record.score <= 100, `score must be capped at 100, got ${record.score}`);
});
