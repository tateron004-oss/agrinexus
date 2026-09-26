"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live: a completed (or escalation-resolved / provider-declined)
// telehealth encounter could be silently reopened. Several health-action
// routes (consent, vitals, referral, followup, accessibility,
// createVideoSessionWorkflow, /api/health/advanced) reuse
// db.profile.healthIntakes[0] -- the most recently touched intake -- and
// unconditionally passed lifecycleState: "intake-started" to
// ensureTelehealthEncounterForIntake() on every call, even when that
// intake's encounter had already reached a terminal state via the provider
// workflow's "complete-visit" action. An entirely ordinary follow-on action
// (a new vitals reading) on the SAME patient silently flipped an
// already-completed case back to an active state -- reappearing in the
// provider queue's "waiting" count.
const root = path.resolve(__dirname, "..", "..");
const port = 4652;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-telehealth-encounter-terminal-reopen-db.json");

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

async function post(cookie, path, body) {
  const res = await fetch(`${base}${path}`, { method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body || {}) });
  return { status: res.status, json: await res.json() };
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

test("a completed telehealth encounter is never silently reopened by a later, ordinary health action on the same patient", async () => {
  const userCookie = await login("user@agrinexus.org", "User2026!");
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");

  const intakeResult = await post(userCookie, "/api/health/action", { type: "intake", patientName: "Amina Test Patient" });
  const encounterId = intakeResult.json.profile.healthIntakes[0].encounterId;
  assert.ok(encounterId, "intake must create a real encounter");

  const completed = await post(adminCookie, "/api/health/provider-workflow", { action: "complete-visit", encounterId });
  assert.equal(completed.status, 200);
  const completedEncounter = completed.json.profile.telehealthEncounters.find(e => e.encounterId === encounterId);
  assert.equal(completedEncounter.lifecycleState, "completed");
  assert.equal(completedEncounter.status, "completed");

  const queueBefore = await post(adminCookie, "/api/health/provider-workflow", { action: "queue-summary" });
  assert.equal(queueBefore.json.providerWorkflowResult.queue.waiting, 0, "a completed encounter must not count as waiting");

  const vitalsResult = await post(userCookie, "/api/health/action", { type: "vitals", temperatureC: 37.2, pulse: 80 });
  assert.equal(vitalsResult.status, 200);

  const originalStillFound = vitalsResult.json.profile.telehealthEncounters.find(e => e.encounterId === encounterId);
  assert.equal(originalStillFound.lifecycleState, "completed", "the already-completed encounter's own lifecycleState must never be reset");
  assert.equal(originalStillFound.status, "completed", "the already-completed encounter's own status must never be reset");

  const queueAfter = await post(adminCookie, "/api/health/provider-workflow", { action: "queue-summary" });
  assert.equal(queueAfter.json.providerWorkflowResult.queue.waiting, 1, "only the NEW encounter created for the vitals follow-on should be waiting, not the reopened completed one");
});
