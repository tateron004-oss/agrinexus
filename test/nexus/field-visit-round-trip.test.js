const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4543;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-field-visit-round-trip-db.json");

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

async function callWorkflow(command, extra = {}) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_workflow", arguments: { command, ...extra } })
  });
  return res.json();
}

test("field visit plans start empty, and a saved plan is genuinely visible in the list afterward", async () => {
  const before = await callWorkflow("Show my field visit plans.");
  assert.equal(before.response, "You have no saved field visit plans yet.");

  const saved = await callWorkflow("Save this field visit plan from Stockton to Elk Grove.", { confirmed: true });
  assert.equal(saved.status, "field-visit-saved");

  const after = await callWorkflow("Show my field visit plans.");
  assert.equal(after.status, "field-visits-listed");
  assert.match(after.response, /Elk Grove/i);
});

test("'cancel my field visit plan' is treated as a cancellation, not routed into planning a brand new one", async () => {
  await callWorkflow("Save this field visit plan from Stockton to Lodi.", { confirmed: true });
  const cancelAttempt = await callWorkflow("Cancel my field visit plan to Lodi.");
  assert.equal(cancelAttempt.status, "confirmation-required");
  assert.doesNotMatch(cancelAttempt.response, /starting point and a destination/i, "a cancel request must never be asked for an origin/destination as if planning a new visit");
});

test("confirming a cancel actually removes the matching saved plan", async () => {
  await callWorkflow("Save this field visit plan from Stockton to Galt.", { confirmed: true });
  const canceled = await callWorkflow("Cancel my field visit plan to Galt.", { confirmed: true });
  assert.equal(canceled.status, "field-visit-canceled");

  const after = await callWorkflow("Show my field visit plans.");
  assert.doesNotMatch(after.response, /Galt/i);
});

test("canceling a plan that doesn't exist gets an honest not-found response", async () => {
  const result = await callWorkflow("Cancel my field visit plan to a place that was never saved.", { confirmed: true });
  assert.equal(result.status, "field-visit-not-found");
});

test("a plain field-visit planning request still works exactly as before, unaffected by the new show/save/cancel branches", async () => {
  const result = await callWorkflow("Plan a field visit from Stockton to Sacramento.", { confirmed: true });
  assert.equal(result.status, "field-visit-planned");
  assert.match(result.response, /prepared a field visit plan/i);
});

test("an unconfirmed field-visit route request does not silently make the real routing call -- the provider's confirmation gate is no longer bypassed", async () => {
  const result = await callWorkflow("Plan a field visit from Stockton to Modesto.");
  assert.notEqual(result.status, "field-visit-planned");
});
