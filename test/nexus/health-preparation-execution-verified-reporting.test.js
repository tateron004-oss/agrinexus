"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4576;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-health-preparation-execution-verified-reporting-db.json");

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
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  cookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

async function callVoiceTool(command, extra = {}) {
  const res = await fetch(`${base}/api/voice/realtime/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_health_preparation", arguments: { command, ...extra } })
  });
  return res.json();
}

// Found live (voice-dispatch AI-quality audit): nexus_health_preparation's
// shared return for every real-record write branch (vitals, training plan,
// workout log, RTM activity/adherence note, telehealth intake) never
// forwarded whether the underlying bridge call actually persisted a real
// record into executionAttempted/executionVerified -- it always fell back
// to false/false even on a confirmed, successful save. Both the Realtime
// voice model and any other caller of this exact tool-dispatch gateway read
// those structured fields (not just the prose `response`) as the source of
// truth for whether something really happened.
test("a confirmed, real blood-pressure save reports executionAttempted/executionVerified true, not the common default false", async () => {
  const result = await callVoiceTool("My blood pressure is 150 over 95", { confirmed: true });
  assert.equal(result.status, "health-reading-saved", "expected the reading to actually save");
  assert.equal(result.executionAttempted, true, "a real chronic-care write was attempted");
  assert.equal(result.executionVerified, true, "the chronic-care write genuinely completed");

  // Confirm it is not just the structured field lying the other way -- the
  // reading must be genuinely retrievable from the real chronic-care store.
  const history = await callVoiceTool("what is my blood pressure trend?");
  assert.match(history.response, /150\/95|150 over 95/, "the real saved reading must be retrievable afterward");
});

test("a confirmed real workout log reports executionAttempted/executionVerified true", async () => {
  const result = await callVoiceTool("I completed a 30 minute run", { confirmed: true });
  assert.equal(result.status, "health-reading-saved");
  assert.equal(result.executionAttempted, true);
  assert.equal(result.executionVerified, true);
});

// An unconfirmed vitals report (the bridge's own requireConfirmation() gate
// blocks the real write) must NOT falsely claim executionVerified: true --
// only a genuinely completed save should.
test("an unconfirmed blood-pressure report does not falsely claim executionVerified", async () => {
  const result = await callVoiceTool("My blood pressure is 140 over 90");
  assert.notEqual(result.status, "health-reading-saved");
  assert.equal(result.executionVerified, false, "an unsaved/blocked reading must not claim verified execution");
});
