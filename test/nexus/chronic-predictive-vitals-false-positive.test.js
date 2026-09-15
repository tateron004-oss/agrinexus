const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4562;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-chronic-predictive-vitals-false-positive-db.json");

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
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

async function evaluate(command) {
  const res = await fetch(`${base}/api/nexus/chronic-predictive/evaluate`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ command })
  });
  return res.json();
}

test("an ordinary ratio/split sentence with no blood-pressure trigger word does not fabricate a hypertension signal", async () => {
  const harvest = await evaluate("Split the harvest 60/40 with my partner.");
  assert.equal(harvest.modeler.readings.bloodPressure.length, 0);
  assert.equal(harvest.modeler.conditionFocus, "careGaps");

  const deal = await evaluate("Let's do a 50/50 split on this deal.");
  assert.equal(deal.modeler.readings.bloodPressure.length, 0);
});

test("a real blood-pressure report with the trigger word still parses correctly", async () => {
  const result = await evaluate("My blood pressure was 145/95 today.");
  assert.equal(result.modeler.readings.bloodPressure.length, 1);
  assert.equal(result.modeler.readings.bloodPressure[0].systolic, 145);
  assert.equal(result.modeler.readings.bloodPressure[0].diastolic, 95);
  assert.equal(result.modeler.conditionFocus, "hypertension");
});

test("an unrelated use of 'missed' with no medication context does not fabricate a medication-adherence signal", async () => {
  const bus = await evaluate("I missed the bus this morning.");
  assert.equal(bus.modeler.readings.adherence.length, 0);

  const flight = await evaluate("I missed my flight twice last month.");
  assert.equal(flight.modeler.readings.adherence.length, 0);
});

test("a real missed-medication report still parses correctly", async () => {
  const direct = await evaluate("I missed my medication twice this week.");
  assert.equal(direct.modeler.readings.adherence.length, 1);
  assert.equal(direct.modeler.conditionFocus, "adherence");

  const worded = await evaluate("I missed my morning medication.");
  assert.equal(worded.modeler.readings.adherence.length, 1);
});
