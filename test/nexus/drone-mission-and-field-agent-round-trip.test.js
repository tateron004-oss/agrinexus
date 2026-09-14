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

  const created = await callAgriculture("Send a drone to scan my maize field for pests.");
  assert.equal(created.status, "drone-mission-requested");

  const after = await callAgriculture("Show my drone mission requests.");
  assert.equal(after.status, "drone-missions-listed");
  assert.match(after.response, /maize field/i);
});

test("a plain drone mission request is unaffected by the new show branch", async () => {
  const result = await callAgriculture("Fly a drone over my rice field to check irrigation.");
  assert.equal(result.status, "drone-mission-requested");
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
