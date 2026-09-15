const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4565;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-workforce-learning-confirmation-gate-db.json");

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

async function callLearning(command, extra = {}) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_workforce_learning", arguments: { command, ...extra } })
  });
  return res.json();
}

test("an unconfirmed course-progress/save/reminder request no longer bypasses the learning bridge's confirmation gate", async () => {
  const progress = await callLearning("I finished the irrigation basics course.");
  assert.notEqual(progress.status, "learning-progress-recorded");
  const save = await callLearning("Save the irrigation basics course.");
  assert.notEqual(save.status, "learning-resource-saved");
  const reminder = await callLearning("Remind me about the irrigation basics course.");
  assert.notEqual(reminder.status, "learning-reminder-created");
});

test("a confirmed course-progress/save/reminder request still works exactly as before", async () => {
  const progress = await callLearning("I finished the irrigation basics course.", { confirmed: true });
  assert.equal(progress.status, "learning-progress-recorded");
  const save = await callLearning("Save the irrigation basics course.", { confirmed: true });
  assert.equal(save.status, "learning-resource-saved");
});
