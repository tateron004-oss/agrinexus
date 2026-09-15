const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4563;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-health-fitness-status-question-db.json");

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

async function callHealth(command, extra = {}) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_health_preparation", arguments: { command, confirmed: true, ...extra } })
  });
  return res.json();
}

async function fitnessSessionCount() {
  const result = await callHealth("Show my training progress.");
  return result.fitnessProgress?.sessionCount || 0;
}

test("status questions about therapy/exercise/medication adherence do not fabricate a participation record", async () => {
  const before = await fitnessSessionCount();
  const therapy = await callHealth("Have you completed my therapy session?");
  assert.notEqual(therapy.status, "health-reading-saved");
  const adherence = await callHealth("Did you log my medication adherence yet?");
  assert.notEqual(adherence.status, "health-reading-saved");
  assert.equal(await fitnessSessionCount(), before, "a status question must not create a fitness/RTM record");
});

test("a real therapy/exercise or medication-adherence report is still saved, unaffected by the status-question guard", async () => {
  const result = await callHealth("I completed my therapy session today.");
  assert.equal(result.status, "health-reading-saved");
  assert.match(result.response, /activity in your therapy\/exercise participation record/i);
});

test("'Did you create my training plan yet?' does not fabricate a new training plan", async () => {
  const result = await callHealth("Did you create my training plan yet?");
  assert.notEqual(result.status, "health-reading-saved");
});

test("a real training-plan request is still saved, unaffected by the status-question guard", async () => {
  const result = await callHealth("Create a training plan for weight loss.");
  assert.equal(result.status, "health-reading-saved");
  assert.match(result.response, /saved a training plan/i);
});

test("'Did you log my 30 minute run yesterday?' / 'Have you recorded my 20 minute walk?' do not fabricate a workout log entry", async () => {
  const before = await fitnessSessionCount();
  const run = await callHealth("Did you log my 30 minute run yesterday?");
  assert.notEqual(run.status, "health-reading-saved");
  const walk = await callHealth("Have you recorded my 20 minute walk?");
  assert.notEqual(walk.status, "health-reading-saved");
  assert.equal(await fitnessSessionCount(), before, "a status question must not log a new workout");
});

test("a real workout log request is still saved, unaffected by the status-question guard", async () => {
  const before = await fitnessSessionCount();
  const result = await callHealth("I logged a 30 minute run yesterday.");
  assert.equal(result.status, "health-reading-saved");
  assert.match(result.response, /logged your 30-minute run/i);
  assert.equal(await fitnessSessionCount(), before + 1);
});
