const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4552;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-vitals-false-positive-safety-db.json");

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

async function callHealth(command) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_health_preparation", arguments: { command } })
  });
  return res.json();
}

test("a completely unrelated 'temp file' command does not fabricate a temperature reading", async () => {
  const result = await callHealth("Please use temp file 42 for this.");
  assert.notEqual(result.status, "health-reading-saved");
});

test("a completely unrelated 'template' command does not fabricate a temperature reading", async () => {
  const result = await callHealth("The template 87 needs review.");
  assert.notEqual(result.status, "health-reading-saved");
});

test("a completely unrelated 'pulse item' (marketplace/catalog) command does not fabricate a pulse reading", async () => {
  const result = await callHealth("Check pulse item 85 in the catalog.");
  assert.notEqual(result.status, "health-reading-saved");
});

test("a completely unrelated 'oxygen tank' command does not fabricate an oxygen saturation reading", async () => {
  const result = await callHealth("Check oxygen tank 95 for the clinic.");
  assert.notEqual(result.status, "health-reading-saved");
});

test("a completely unrelated 'glucose sensor model number' command does not fabricate a glucose reading", async () => {
  const result = await callHealth("The glucose sensor model 120 is out of stock.");
  assert.notEqual(result.status, "health-reading-saved");
});

test("genuine temperature, pulse, oxygen, and glucose reports are all still saved correctly, unaffected by the false-positive fix", async () => {
  const temp = await callHealth("My temperature is 101.");
  assert.equal(temp.status, "health-reading-saved");
  assert.match(temp.response, /temperature reading 101/i);

  const pulse = await callHealth("My pulse is 72.");
  assert.equal(pulse.status, "health-reading-saved");
  assert.match(pulse.response, /pulse reading 72/i);

  const oxygen = await callHealth("My oxygen is 95 percent.");
  assert.equal(oxygen.status, "health-reading-saved");
  assert.match(oxygen.response, /oxygen saturation reading 95/i);

  const glucose = await callHealth("My blood sugar is 120.");
  assert.equal(glucose.status, "health-reading-saved");
  assert.match(glucose.response, /blood-glucose reading 120/i);
});

test("a temperature report with a temporal filler word ('today') still saves correctly", async () => {
  const result = await callHealth("My temperature today is 101.");
  assert.equal(result.status, "health-reading-saved");
  assert.match(result.response, /temperature reading 101/i);
});

test("blood pressure reporting is unaffected by the vitals-extraction fix", async () => {
  const result = await callHealth("My blood pressure is 120 over 80.");
  assert.equal(result.status, "health-reading-saved");
  assert.match(result.response, /blood-pressure reading 120 over 80/i);
});
