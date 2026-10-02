"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (legacy server.js helper-function sweep): 16 functions across the Operational/Adaptive/
// Network/Ecosystem/Executive/Autonomous-Orchestration "Intelligence" module family numbered their
// records via `(array || []).length + 1` computed BEFORE the array gets `.slice(0, N)`-capped right
// after -- once an array reaches its cap, `.length` pins at the cap forever, so every subsequent record
// of that type gets an identical "unique" reference. Fixed with the already-established
// nextRecordSequence(db, key) helper. Also fixed: shiftSchedule had no cap at any of its 3 write sites,
// unlike virtually every other profile array in this file.
const root = path.resolve(__dirname, "..", "..");
const port = 4800;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-intelligence-module-numbering-and-shift-cap-db.json");
const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");

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

function readTempDb() {
  return JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
}

let server;
let cookie;

test.before(async () => {
  const seedDb = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  seedDb.profile.platformIntelligence = seedDb.profile.platformIntelligence || {};
  seedDb.profile.platformIntelligence.messageDrafts = Array.from({ length: 40 }, (_, index) => ({ id: `seed-${index}`, draftNumber: `NEX-DRAFT-${String(index + 1).padStart(3, "0")}`, audience: "partner", topic: "seed", createdAt: new Date(0).toISOString() }));
  seedDb.profile.adaptiveAutonomy = seedDb.profile.adaptiveAutonomy || {};
  seedDb.profile.adaptiveAutonomy.proactiveNudges = Array.from({ length: 80 }, (_, index) => ({ id: `seed-${index}`, nudgeNumber: `NEX-AUTO-${String(index + 1).padStart(3, "0")}`, module: "Platform", createdAt: new Date(0).toISOString() }));
  // The seeded records above simulate 40/80 real prior creations, numbered 1..N by
  // nextRecordSequence() -- the sequence counter itself must be seeded to match, exactly as it would be
  // in a real system after that many real calls, so the NEXT real call continues from N+1 instead of
  // restarting at 1 and coincidentally colliding with this test's own fabricated seed data.
  seedDb.profile.recordSequences = seedDb.profile.recordSequences || {};
  seedDb.profile.recordSequences.platformIntelligenceMessageDrafts = 40;
  seedDb.profile.recordSequences.adaptiveProactiveNudges = 80;
  // So the shift-schedule test's "already scheduled" guard doesn't trip, and the rate falsy-zero isn't
  // a factor here (separate fix, separate PR) -- give the applicant a normal positive rate.
  if (seedDb.profile.applications?.[0]) seedDb.profile.applications[0].rate = 50;
  seedDb.profile.shiftSchedule = Array.from({ length: 100 }, (_, index) => ({ id: `seed-${index}`, role: "Seed Role", startsAt: new Date(0).toISOString(), status: "completed", estimatedEarnings: 1 }));
  fs.writeFileSync(tempDbPath, JSON.stringify(seedDb));

  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const login = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
  assert.equal(login.status, 200);
  cookie = login.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server?.kill();
  fs.rmSync(tempDbPath, { force: true });
});

// A single call right after the array hits its cap doesn't reproduce the old bug by itself (the broken
// `.length + 1` idiom computes 41 on that first post-cap call too, which doesn't happen to collide with
// the seeded 1..40). The real collision only shows up on the SECOND+ consecutive post-cap call, because
// `.length` is pinned at the cap after every slice -- so every call after the first keeps recomputing
// the same "41" forever. Two calls in a row is what actually proves the fix.
test("platformIntelligenceDraft keeps producing distinct draftNumbers across repeated calls once messageDrafts is already at its 40-item cap", async () => {
  const post = () => fetch(`${base}/api/platform-intelligence/draft`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ audience: "partner", topic: "Follow-up" }) }).then(res => res.json());
  const first = await post();
  const second = await post();
  assert.notEqual(first.platformIntelligenceDraft.draftNumber, second.platformIntelligenceDraft.draftNumber,
    "two consecutive drafts created after the cap is already full must not be numbered identically");
});

test("createAdaptiveNudge keeps producing distinct nudgeNumbers across repeated calls once proactiveNudges is already at its 80-item cap", async () => {
  const post = () => fetch(`${base}/api/adaptive-autonomy/nudge`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ title: "Test nudge", module: "Platform", message: "test" }) }).then(res => res.json());
  const first = await post();
  const second = await post();
  assert.notEqual(first.adaptiveAutonomyNudge.nudgeNumber, second.adaptiveAutonomyNudge.nudgeNumber,
    "two consecutive nudges created after the cap is already full must not be numbered identically");
});

test("shiftSchedule stays capped at 100 after a new shift is scheduled, not left to grow unbounded", async () => {
  const before = readTempDb().profile.shiftSchedule.length;
  assert.equal(before, 100, "the seeded array must start at exactly the cap");
  const res = await fetch(`${base}/api/workforce/action`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ type: "shift" }) });
  const body = await res.json();
  assert.equal(body.error, undefined, "the shift action must succeed");
  const after = readTempDb().profile.shiftSchedule;
  assert.equal(after.length, 100, "shiftSchedule must stay at the cap, not grow to 101");
});

test("none of the 16 fixed Intelligence-module numbering sites regressed back to the broken length+1 idiom", () => {
  const brokenPatterns = [
    "(intelligence.messageDrafts || []).length + 1", "(intelligence.goals || []).length + 1",
    "(intelligence.playbookRuns || []).length + 1", "(intelligence.issueReports || []).length + 1",
    "(intelligence.decisionReviews || []).length + 1", "(autonomy.proactiveNudges || []).length + 1",
    "(autonomy.monitoringRuns || []).length + 1", "(autonomy.autonomousActions || []).length + 1",
    "(autonomy.learningUpdates || []).length + 1", "(network.queries || []).length + 1",
    "(ecosystem.missions || []).length + 1", "(executive.analyses || []).length + 1",
    "(executive.decisions || []).length + 1", "(orchestration.missions || []).length + 1",
    "(orchestration.cycles || []).length + 1", "(orchestration.reports || []).length + 1"
  ];
  for (const pattern of brokenPatterns) {
    assert.ok(!serverSource.includes(pattern), `the broken numbering idiom must not reappear: ${pattern}`);
  }
  assert.ok(serverSource.includes('nextRecordSequence(db, "platformIntelligenceMessageDrafts")'), "the fix must use nextRecordSequence for messageDrafts");
  assert.ok(serverSource.includes('nextRecordSequence(db, "autonomousOrchestrationReports")'), "the fix must use nextRecordSequence for orchestration reports");
});
