const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4536;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-reminder-round-trip-db.json");

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
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "" },
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

async function callReminder(command, extra = {}) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_automation_reminder", arguments: { command, ...extra } })
  });
  return res.json();
}

test("a reminder created via the default fallback is visible in the list, instead of two disconnected stores hiding it", async () => {
  const before = await callReminder("What are my reminders?");
  assert.equal(before.response, "You have no reminders saved yet.");

  const created = await callReminder("Remind me to water the seedlings this evening.", { confirmed: true });
  assert.equal(created.status, "local-reminder-created");

  const after = await callReminder("What are my reminders?");
  assert.equal(after.status, "reminders-listed");
  assert.match(after.response, /water the seedlings/i);
});

test("'cancel my reminder about X' is treated as a cancellation, not routed into the create-confirmation flow", async () => {
  await callReminder("Remind me to check the fence line tomorrow.", { confirmed: true });
  const cancelAttempt = await callReminder("Cancel my reminder about the fence line.");
  assert.equal(cancelAttempt.status, "confirmation-required");
  assert.doesNotMatch(cancelAttempt.response, /before I create it/i, "a cancel request must never be asked to confirm a CREATE");
});

test("confirming a cancel actually removes the matching reminder, and it no longer appears in the list", async () => {
  await callReminder("Remind me to inspect the greenhouse roof next week.", { confirmed: true });
  const canceled = await callReminder("Cancel my reminder about the greenhouse roof.", { confirmed: true });
  assert.equal(canceled.status, "reminder-canceled");
  assert.match(canceled.response, /greenhouse roof/i);

  const after = await callReminder("What are my reminders?");
  assert.doesNotMatch(after.response, /greenhouse roof/i);
});

test("canceling a reminder that doesn't exist gets an honest not-found response, not a fabricated success", async () => {
  const result = await callReminder("Cancel my reminder about a nonexistent thing that was never created.", { confirmed: true });
  assert.equal(result.status, "reminder-not-found");
});
