"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// The server's health-readings routes with the record store switched on (an in-memory stand-in, NEXUS_TEST_READINGS_STORE=memory): the same person's readings are still saved, shown, deleted and
// corrected exactly as before, through the voice tool and through the command route, and the stored-readings layer (nexus/health/store-readings.js) adds nothing and loses nothing.
// Readings the AI planner saved are covered with a fake store in health-readings-planner-store.test.js; the real Postgres store cannot be run in this test.

const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "health-store-wiring-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let cookie = "";

async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function call(method, route, body, who = cookie) {
  const res = await fetch(`${base}${route}`, { method, headers: { "content-type": "application/json", cookie: who }, body: body ? JSON.stringify(body) : undefined });
  const text = await res.text(); let json; try { json = JSON.parse(text); } catch { json = {}; }
  return { status: res.status, json, text };
}
let counter = 0;
const general = async (command, language = "en") => (await call("POST", "/api/voice/realtime/tool", { name: "nexus_general_conversation", correlationId: `g${++counter}`, arguments: { command, language }, language })).json;
const typed = async command => { const j = (await call("POST", "/api/agent/command", { command, conversational: false })).json; return j.commandResult || j; };
const readings = async () => (await call("GET", "/api/nexus/tools/chronic-disease/readings")).json.data.readings;

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "spaces.json"), OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", AGRINEXUS_TRUST_PROXY: "true", AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000", NEXUS_FILE_STORAGE_DIR: path.join(dir, "uploads"), NEXUS_TEST_READINGS_STORE: "memory", NEXUS_TEST_REMINDER_STORE: "memory" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
  assert.equal(res.status, 200);
  cookie = (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ");
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("with the record store on, a reading is still saved only after a yes, then shown, corrected and deleted by voice and by chat", async () => {
  assert.equal((await general("my blood pressure is 150 over 95")).requiresConfirmation, true);
  assert.equal((await general("yes")).executionVerified, true);
  assert.equal((await readings()).length, 1);
  const shown = await general("show my blood pressure readings");
  assert.match(shown.response, /You have 1 saved blood pressure reading:/);
  assert.match(shown.response, /150 over 95/);
  const wrong = await typed("that was wrong, it was 133/78");
  assert.match(wrong.response, /Change it to 133 over 78\?/);
  await typed("yes");
  assert.deepEqual([(await readings())[0].systolic, (await readings())[0].diastolic], [133, 78]);
  const asked = await general("delete my last reading");
  assert.equal(asked.requiresConfirmation, true);
  assert.match(asked.response, /133 over 78/);
  assert.equal((await readings()).length, 1, "asking deletes nothing");
  await general("yes");
  assert.equal((await readings()).length, 0);
});

test("with the record store on, Kiswahili works the same and 'delete all' still needs the counted words", async () => {
  await general("presha yangu ni 160 juu ya 100", "sw"); await general("ndiyo", "sw");
  await general("sukari yangu 7.5", "sw"); await general("ndiyo", "sw");
  const shown = await general("nionyeshe vipimo vyangu vya presha", "sw");
  assert.match(shown.response, /160 juu ya 100/);
  const asked = await general("futa taarifa zangu zote za afya", "sw");
  assert.match(asked.response, /ndiyo, futa zote 2/);
  const bare = await general("ndiyo", "sw");
  assert.match(bare.response, /tafadhali sema maneno kamili/);
  assert.equal((await readings()).length, 2);
  await general("ndiyo, futa zote 2", "sw");
  assert.equal((await readings()).length, 0);
});

test("who can see my health information is answered the same way, by voice and by chat", async () => {
  assert.match((await general("who can see my health information")).response, /saved under your own account/);
  assert.match((await typed("who can see my health information")).response, /saved under your own account/);
});
