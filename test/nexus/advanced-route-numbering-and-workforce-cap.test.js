"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (advanced-route numbering/cap audit): /api/learning/advanced's quiz-attempt/note/report/
// transcript makers computed their human-facing reference number from `<array>.length + 1`, unlike their
// siblings assignment/cohort in the exact same handler (already fixed to use the persistent
// nextRecordSequence(db, key) counter). Every array in this handler is capped to 20 items right after
// insert, so once 20 quiz attempts (etc.) exist, .length is permanently pinned at 20 -- every later
// record gets the SAME number forever (e.g. every quiz attempt after the 20th is "AN-QUIZ-021").
//
// Separately, /api/workforce/advanced's six makers had the identical .length+1 numbering bug AND, unlike
// every comparable "advanced" handler in this file (learning/advanced, map/advanced, trade/advanced),
// none of its six arrays were ever capped at all -- unbounded growth in db.profile on every real
// workforce action.
const root = path.resolve(__dirname, "..", "..");
const port = 4739;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-advanced-route-numbering-workforce-cap-db.json");

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

async function learningAdvanced(type, extra = {}) {
  const res = await fetch(`${base}/api/learning/advanced`, {
    method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ type, ...extra })
  });
  return { status: res.status, body: await res.json() };
}

async function workforceAdvanced(type, extra = {}) {
  const res = await fetch(`${base}/api/workforce/advanced`, {
    method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ type, ...extra })
  });
  return { status: res.status, body: await res.json() };
}

test("quiz-attempt numbers stay unique past the 20-item cap, instead of colliding on the same number forever", async () => {
  const numbers = new Set();
  for (let i = 0; i < 25; i += 1) {
    const result = await learningAdvanced("quiz-attempt", { score: 80 });
    assert.equal(result.status, 200, JSON.stringify(result.body));
    const record = result.body.learningAdvancedResult?.record;
    assert.ok(record, JSON.stringify(result.body));
    numbers.add(record.attemptNumber);
  }
  assert.equal(numbers.size, 25, `expected 25 unique quiz-attempt numbers, got ${numbers.size} (a collision means numbering is still pinned by array.length)`);
  const db = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  const demoUser = db.users.find(item => item.email === "demo@agrinexus.org");
  assert.equal(demoUser.quizAttempts.length, 20, "the array itself must still stay capped at 20");
});

test("note/report/transcript numbers also stay unique past the 20-item cap", async () => {
  for (const type of ["note", "report", "transcript"]) {
    const numbers = new Set();
    for (let i = 0; i < 25; i += 1) {
      const result = await learningAdvanced(type);
      assert.equal(result.status, 200, JSON.stringify(result.body));
      const record = result.body.learningAdvancedResult?.record;
      const number = record.noteNumber || record.reportNumber || record.transcriptNumber;
      numbers.add(number);
    }
    assert.equal(numbers.size, 25, `expected 25 unique ${type} numbers, got ${numbers.size}`);
  }
});

test("workforce/advanced arrays stay capped at 20, and their record numbers stay unique past the cap", async () => {
  // Each type's own number field, checked explicitly rather than via a generic OR-chain -- a payroll
  // record also carries a `timesheetNumber` (copied from the latest timesheet), which would otherwise be
  // picked up ahead of its own `payrollNumber` and mask a real collision.
  const numberFieldByType = {
    onboarding: "packetNumber", document: "documentNumber", timesheet: "timesheetNumber",
    payroll: "payrollNumber", evaluation: "reviewNumber", "shift-request": "requestNumber"
  };
  for (const type of ["onboarding", "document", "timesheet", "payroll", "evaluation", "shift-request"]) {
    const numbers = new Set();
    for (let i = 0; i < 25; i += 1) {
      const result = await workforceAdvanced(type);
      assert.equal(result.status, 200, JSON.stringify(result.body));
      const record = result.body.workforceAdvancedResult?.record;
      assert.ok(record, JSON.stringify(result.body));
      numbers.add(record[numberFieldByType[type]]);
    }
    assert.equal(numbers.size, 25, `expected 25 unique numbers for ${type}, got ${numbers.size} (numbering collision)`);
  }
  const db = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  assert.equal(db.profile.workforceOnboarding.length, 20, "workforceOnboarding must be capped at 20");
  assert.equal(db.profile.workforceDocuments.length, 20, "workforceDocuments must be capped at 20");
  assert.equal(db.profile.timesheets.length, 20, "timesheets must be capped at 20");
  assert.equal(db.profile.payrollApprovals.length, 20, "payrollApprovals must be capped at 20");
  assert.equal(db.profile.performanceReviews.length, 20, "performanceReviews must be capped at 20");
  assert.equal(db.profile.shiftRequests.length, 20, "shiftRequests must be capped at 20");
});
