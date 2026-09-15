const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4547;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-drone-fieldagent-round-trip-db.json");

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

async function callAgriculture(command, extra = {}) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_agriculture", arguments: { command, ...extra } })
  });
  return res.json();
}

test("drone mission requests start empty, and a saved request is genuinely visible in the list afterward", async () => {
  const before = await callAgriculture("Show my drone mission requests.");
  assert.equal(before.status, "drone-missions-listed");
  assert.equal(before.response, "You have no saved drone mission requests yet.");

  const created = await callAgriculture("Send a drone to scan my maize field for pests.", { confirmed: true });
  assert.equal(created.status, "drone-mission-requested");

  const after = await callAgriculture("Show my drone mission requests.");
  assert.equal(after.status, "drone-missions-listed");
  assert.match(after.response, /maize field/i);
});

test("a plain drone mission request is unaffected by the new show branch", async () => {
  const result = await callAgriculture("Fly a drone over my rice field to check irrigation.", { confirmed: true });
  assert.equal(result.status, "drone-mission-requested");
});

test("an unconfirmed drone mission request is not saved -- the provider's real confirmation gate is no longer bypassed", async () => {
  const result = await callAgriculture("Send a drone to scan my wheat field for pests.");
  assert.notEqual(result.status, "drone-mission-requested");
  const after = await callAgriculture("Show my drone mission requests.");
  assert.doesNotMatch(after.response, /wheat field/i, "the unconfirmed request must not have been saved");
});

test("'Did you request the drone mission yet?' is a status question, answered with the real list, not a new fabricated request", async () => {
  await callAgriculture("Send a drone to scan my sorghum field for pests.", { confirmed: true });
  const result = await callAgriculture("Did you request the drone mission yet?");
  assert.equal(result.status, "drone-missions-listed");
  assert.match(result.response, /sorghum field/i);
});

test("field agent dispatches start empty, and a recorded dispatch is genuinely visible in the list afterward", async () => {
  const before = await callAgriculture("Show my field agent dispatches.");
  assert.equal(before.status, "field-agent-dispatches-listed");
  assert.equal(before.response, "You have no field agent dispatch records yet.");

  const created = await callAgriculture("I need a field agent dispatched to Kenya for irrigation support.");
  assert.equal(created.status, "field-agent-dispatched");

  const after = await callAgriculture("Show my field agent dispatches.");
  assert.equal(after.status, "field-agent-dispatches-listed");
  assert.match(after.response, /Kenya/i);
});

test("a plain field agent dispatch request is unaffected by the new show branch, even though it shares the word 'dispatch'/'request'", async () => {
  const result = await callAgriculture("Please schedule a field agent for a marketplace verification in Nigeria.");
  assert.equal(result.status, "field-agent-dispatched");
  assert.match(result.response, /Nigeria/i);
});

test("'Did you dispatch a field agent yet?' is a status question, answered with the real list, not a new dispatch that consumes a real agent", async () => {
  const before = await callAgriculture("Show my field agent dispatches.");
  const availableBefore = before.fieldAgentDispatches?.length ?? 0;
  const result = await callAgriculture("Did you dispatch a field agent yet?");
  assert.equal(result.status, "field-agent-dispatches-listed");
  const after = await callAgriculture("Show my field agent dispatches.");
  assert.equal(after.fieldAgentDispatches?.length ?? 0, availableBefore, "a status question must not create a new dispatch record");
});

test("'popcorn'/'unicorn' are not mislabeled 'maize' -- the crop regex required a word boundary on both sides", async () => {
  const popcorn = await callAgriculture("My popcorn plants have holes in the leaves and caterpillars.");
  assert.equal(popcorn.status, "guidance-ready");
  assert.doesNotMatch(popcorn.response, /\bfor maize\b/i);

  const unicorn = await callAgriculture("Random text about a unicorn statue in my field.");
  assert.equal(unicorn.status, "guidance-ready");
  assert.doesNotMatch(unicorn.response, /\bfor maize\b/i);
});

test("a real maize/corn report is still recognized, unaffected by the crop-regex fix", async () => {
  const result = await callAgriculture("My corn leaves are yellowing on the lower leaves.");
  assert.match(result.response, /\bfor maize\b/i);
});

test("'pesticide storage' is not mislabeled a pest/disease scan mission -- the missionType regex required a word boundary on both sides", async () => {
  const result = await callAgriculture("Fly a drone to check pesticide storage in the shed.", { confirmed: true });
  assert.equal(result.status, "drone-mission-requested");
  assert.doesNotMatch(result.response, /pest\/disease scan/i);
});

test("a real pest/disease drone mission is still recognized, unaffected by the missionType-regex fix", async () => {
  const result = await callAgriculture("Fly a drone to check for pest damage in my field.", { confirmed: true });
  assert.match(result.response, /pest\/disease scan/i);
});
