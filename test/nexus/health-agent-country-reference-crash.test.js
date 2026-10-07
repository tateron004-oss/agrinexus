"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (drone/cloud-agent audit): runHealthActionByAgent never
// destructured `country` from activeContext(db) (unlike the sibling
// ensureVoiceHealthIntake it calls internally), yet its vitals/safety/
// careplan branches all reference `country.heat`/`country.risk`/
// `country.name` -- a real, unconditional ReferenceError on every single
// invocation of "capture vitals", "run a safety review", or "generate a
// care plan", whether reached through a direct voice/text command or as a
// step in the default Healthcare autopilot mission. The exception is
// caught by executeAgentStepWithRetry (so the request doesn't crash/500),
// but the feature always silently fails, reporting "needs-review" instead
// of ever actually capturing vitals, running the safety review, or
// generating the care plan.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-health-agent-country-reference-crash-db.json");

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
    // The cap tests below deliberately send more than 60 agent commands (the
    // default AI-agent rate limit's per-minute window) to prove the array
    // caps hold under repeated real use -- raised here since this file is
    // not testing rate-limiting itself.
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "500" },
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

async function cmd(body) {
  const res = await fetch(`${base}/api/agent/command`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify(body) });
  const responseBody = await res.json();
  return { httpStatus: res.status, result: responseBody.commandResult || {} };
}

test("'capture vitals' actually captures vitals instead of always silently failing", async () => {
  const { httpStatus, result } = await cmd({ command: "capture vitals", confirm: true });
  assert.equal(httpStatus, 200);
  assert.equal(result.status, "completed", `expected vitals capture to succeed, got: ${JSON.stringify(result)}`);
  assert.match(result.response, /vitals captured/i);
});

test("a safety review actually runs instead of always silently failing", async () => {
  const { httpStatus, result } = await cmd({ command: "run a safety review", confirm: true });
  assert.equal(httpStatus, 200);
  assert.equal(result.status, "completed", `expected the safety review to succeed, got: ${JSON.stringify(result)}`);
  assert.match(result.response, /safety review/i);
});

test("generating a care plan actually works instead of always silently failing", async () => {
  const { httpStatus, result } = await cmd({ command: "generate a care plan", confirm: true });
  assert.equal(httpStatus, 200);
  assert.equal(result.status, "completed", `expected care plan generation to succeed, got: ${JSON.stringify(result)}`);
  assert.match(result.response, /care plan/i);
});

// Found live (telehealth sibling sweep, follow-up to the crash fix above): unlike every other write
// site for telehealthConsents/telehealthVitals/telehealthReferrals/telehealthFollowUps elsewhere in
// server.js (all of which cap to 20 right after unshift), runHealthActionByAgent never capped any of
// them -- and safetyReviews/carePlans were never capped at ANY of their write sites in the whole file.
// Since db.profile is a single JSON/jsonb blob rewritten wholesale on every read/write, repeatedly
// running "capture vitals" (a real, repeatable voice/text command, also a default Healthcare autopilot
// mission step) grew telehealthVitals without bound.
test("repeatedly capturing vitals through the voice agent does not grow telehealthVitals without bound", async () => {
  for (let i = 0; i < 22; i += 1) {
    const { result } = await cmd({ command: "capture vitals", confirm: true });
    assert.equal(result.status, "completed");
  }
  const db = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  assert.ok(db.profile.telehealthVitals.length <= 20, `expected telehealthVitals to be capped at 20, got ${db.profile.telehealthVitals.length}`);
});

test("repeatedly running a safety review or generating a care plan does not grow safetyReviews/carePlans without bound", async () => {
  for (let i = 0; i < 22; i += 1) {
    const safety = await cmd({ command: "run a safety review", confirm: true });
    assert.equal(safety.result.status, "completed");
    const careplan = await cmd({ command: "generate a care plan", confirm: true });
    assert.equal(careplan.result.status, "completed");
  }
  const db = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  assert.ok(db.profile.safetyReviews.length <= 20, `expected safetyReviews to be capped at 20, got ${db.profile.safetyReviews.length}`);
  assert.ok(db.profile.carePlans.length <= 20, `expected carePlans to be capped at 20, got ${db.profile.carePlans.length}`);
});
