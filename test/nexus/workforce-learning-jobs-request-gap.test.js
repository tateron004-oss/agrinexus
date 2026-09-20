const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4602;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-workforce-learning-jobs-request-gap-db.json");

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

async function callWorkforceLearning(command) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_workforce_learning", arguments: { command } })
  });
  return res.json();
}

test("a job-related noun co-occurring with a learning verb still reaches the real learning-catalog search", async () => {
  const resume = await callWorkforceLearning("Can you teach me about resume writing for a new job?");
  assert.equal(resume.capability, "learning-training");
  const interview = await callWorkforceLearning("Explain how to prepare for a job interview.");
  assert.equal(interview.capability, "learning-training");
  const career = await callWorkforceLearning("Teach me about career readiness.");
  assert.equal(career.capability, "learning-training");
});

test("a genuine job-search request is still excluded from the learning branch, unaffected by the narrower jobsRequest gate", async () => {
  const find = await callWorkforceLearning("Find me a job in Nairobi.");
  assert.notEqual(find.capability, "learning-training");
  const looking = await callWorkforceLearning("I'm looking for a job in agriculture.");
  assert.notEqual(looking.capability, "learning-training");
});

test("a plain learning request with no job-related words is unaffected", async () => {
  const result = await callWorkforceLearning("Explain crop rotation to me.");
  assert.equal(result.capability, "learning-training");
});
