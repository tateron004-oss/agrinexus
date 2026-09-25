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

// Found live (health-data audit): "trajectory" only ever checked "do I have
// >=2 readings" -- it never inspected the actual values, so a
// monotonically worsening BP sequence and the exact reverse, improving
// sequence produced byte-for-byte identical output. Chains three real
// readings across sequential calls (via the endpoint's own state
// round-tripping) to prove a real direction is now computed.
async function evaluateChained(commands) {
  let state = {};
  let result;
  for (const command of commands) {
    const res = await fetch(`${base}/api/nexus/chronic-predictive/evaluate`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ command, state })
    });
    result = await res.json();
    state = result.modeler;
  }
  return result;
}

test("a real worsening blood-pressure trend is reported as worsening, not a fixed 'variable'", async () => {
  const result = await evaluateChained(["My blood pressure was 130/85.", "My blood pressure was 145/92.", "My blood pressure was 160/98."]);
  assert.equal(result.modeler.trends.hypertension.trajectory, "worsening");
});

test("the exact reverse, improving blood-pressure sequence is reported as improving -- not identical to the worsening case", async () => {
  const result = await evaluateChained(["My blood pressure was 160/98.", "My blood pressure was 145/92.", "My blood pressure was 130/85."]);
  assert.equal(result.modeler.trends.hypertension.trajectory, "improving");
});

test("a stable blood-pressure sequence is reported as stable", async () => {
  const result = await evaluateChained(["My blood pressure was 120/80.", "My blood pressure was 121/80.", "My blood pressure was 120/81."]);
  assert.equal(result.modeler.trends.hypertension.trajectory, "stable");
});

// Found live: "yesterday" wasn't a recognized connector word -- "my blood
// pressure yesterday was 160/98" failed to match at all, so a real reading
// was never saved.
test("'my blood pressure yesterday was X/Y' is recognized, not silently dropped", async () => {
  const result = await evaluate("My blood pressure yesterday was 160/98.");
  assert.equal(result.modeler.readings.bloodPressure.length, 1);
  assert.equal(result.modeler.readings.bloodPressure[0].systolic, 160);
  assert.equal(result.modeler.readings.bloodPressure[0].diastolic, 98);
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
