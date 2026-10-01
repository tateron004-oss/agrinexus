"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4656;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-workforce-apply-gate-bypass-db.json");

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
  const seedDb = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  // Field Operations Agent (role id "field-agent") has minReadiness 45 and
  // requires the "digital-foundations" course -- well below the real
  // interview gate's 50% readiness threshold. Put the shared profile just
  // inside role eligibility but still short of that interview threshold.
  seedDb.profile.readiness = 45;
  seedDb.profile.interviews = 0;
  seedDb.profile.candidateStage = "Profile Ready";
  seedDb.profile.earnings = 0;
  seedDb.profile.applications = [];
  seedDb.profile.shiftSchedule = [];
  const seedUser = seedDb.users.find(item => item.email === "user@agrinexus.org");
  seedUser.completedCourses = seedUser.completedCourses || [];
  if (!seedUser.completedCourses.includes("digital-foundations")) {
    seedUser.completedCourses.push("digital-foundations");
  }
  fs.writeFileSync(tempDbPath, JSON.stringify(seedDb));
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
  cookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

async function post(pathname, body = {}) {
  const res = await fetch(`${base}${pathname}`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body)
  });
  return { status: res.status, body: await res.json() };
}

// Found live (case-review/workforce audit): applying for a role only checks
// role.minReadiness (as low as 45%), but used to unconditionally set
// interviews>=1, candidateStage="Interview", and fabricate earnings as a
// side effect of the mere act of applying -- with no relation to the real,
// separately-gated "interview" (readiness>=50%) and "shift" (interviews>=1)
// actions. A candidate below the real interview threshold could apply,
// have interviews/stage/earnings fabricated, and immediately schedule and
// get paid for a shift without ever passing the real interview gate.
test("applying for a role below the real interview threshold no longer fabricates interviews, candidate stage, or earnings", async () => {
  const applied = await post("/api/workforce/apply", { roleId: "field-agent" });
  assert.equal(applied.status, 200, "readiness 45% meets field-agent's 45% minimum, so the application itself must still succeed");
  assert.equal(applied.body.profile.interviews, 0, "applying must not fabricate an interview that was never scheduled");
  assert.equal(applied.body.profile.candidateStage, "Applied", "applying should record 'Applied', not skip straight to 'Interview'");
  assert.equal(applied.body.profile.earnings, 0, "applying must not fabricate earnings before any shift is worked");

  const shiftAttempt = await post("/api/workforce/action", { type: "shift" });
  assert.equal(shiftAttempt.status, 409, "a shift must still be refused: applying alone must not have unlocked it");
  assert.equal(shiftAttempt.body.error, "Schedule an interview before starting a shift");

  const interviewAttempt = await post("/api/workforce/action", { type: "interview" });
  assert.equal(interviewAttempt.status, 409, "the real interview gate (readiness >= 50%) must still block this candidate after applying");
  assert.equal(interviewAttempt.body.error, "Reach 50% readiness first");
});
