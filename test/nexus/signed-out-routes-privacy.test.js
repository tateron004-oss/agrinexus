"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// Routes that answer a caller with no session. Two of them (POST /api/nexus/operations/action and /command) return the whole application state, and for a caller with no session that state used to
// include other people's health intakes, activity lines, notifications, reminders and the "latest AI" line: a stranger could read a patient's name and needs in one request.

const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://127.0.0.1:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "signed-out-"));
const MARK = "ZXQSIGNEDOUTMARK";
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server;
let cookie = "";
let counter = 0;
const ip = () => `10.88.${Math.floor(++counter / 250)}.${counter % 250 + 1}`;
async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function call(method, route, body, withCookie = true) {
  const response = await fetch(`${base}${route}`, { method, headers: { "content-type": "application/json", "x-forwarded-for": ip(), ...(withCookie && cookie ? { cookie } : {}) }, body: method === "GET" ? undefined : JSON.stringify(body ?? {}) });
  return { status: response.status, text: await response.text(), headers: response.headers };
}

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, stdio: "ignore", windowsHide: true,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "dir.json"), OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", AGRINEXUS_TRUST_PROXY: "true" } });
  await waitFor(`${base}/api/healthz`);
  const login = await call("POST", "/api/login", { email: "user@agrinexus.org", password: "User2026!" }, false);
  assert.equal(login.status, 200);
  cookie = (login.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ");
  assert.equal((await call("POST", "/api/health/action", { type: "intake", patientName: `${MARK} patient`, needSummary: `${MARK} needs insulin` })).status, 200);
  assert.equal((await call("POST", "/api/agent/command", { command: `Remind me to call ${MARK} tomorrow at 9am` })).status, 200);
  await sleep(300);
});
test.after(() => { try { server.kill(); } catch {} fs.rmSync(dir, { recursive: true, force: true }); });

test("the signed-in person still sees their own records", async () => {
  const state = await call("GET", "/api/state");
  assert.equal(state.status, 200);
  assert.match(state.text, new RegExp(`${MARK} patient`), "own health intake is shown to its owner");
});

test("a caller with no session is shown none of another person's records in the state the open operations routes return", async () => {
  for (const [route, body] of [["/api/nexus/operations/command", { command: "show status" }], ["/api/nexus/operations/action", {}]]) {
    const response = await call("POST", route, body, false);
    assert.equal(response.status, 200, route);
    assert.doesNotMatch(response.text, new RegExp(MARK), `${route} leaked another person's record to a caller with no session`);
  }
});

test("the testing store's lists have limits, newest kept", () => {
  const testing = require("../../server/nexus-user-testing-runtime.js");
  const db = { profile: {} };
  for (let i = 0; i < 2100; i += 1) testing.createMemoryRecord(db, { title: `note ${i}` }, { role: "standard-user" });
  const store = testing.ensureUserTestingStore(db);
  assert.equal(store.records.length, 2000);
  assert.equal(store.records[0].title, "note 2099", "the newest note is kept");
  assert.equal(store.auditEvents.length, 1000);
});

test("changes under /api/nexus/user-testing/ need a sign-in, and a GET that used to write 24 records per call is one of them", async () => {
  const before = (await call("GET", "/api/nexus/user-testing/status", null, false));
  assert.equal(before.status, 200, "the read-only status view stays open");
  for (const [method, route] of [["GET", "/api/nexus/user-testing/e2e-harness"], ["POST", "/api/nexus/user-testing/predict"], ["POST", "/api/nexus/user-testing/consent"], ["POST", "/api/nexus/user-testing/execute"], ["POST", "/api/nexus/user-testing/verify"]]) {
    assert.equal((await call(method, route, {}, false)).status, 401, `${method} ${route}`);
  }
  const after = (await call("GET", "/api/nexus/user-testing/status", null, false));
  assert.deepEqual(JSON.parse(after.text).counts, JSON.parse(before.text).counts, "nothing was added by the refused calls");
});

test("routes that spend money or hold testers' notes need a sign-in", async () => {
  assert.equal((await call("POST", "/api/nexus/internet-services/search", { query: "maize prices" }, false)).status, 401);
  assert.equal((await call("GET", "/api/nexus/user-testing/memory", null, false)).status, 401);
  assert.equal((await call("POST", "/api/nexus/user-testing/memory", {}, false)).status, 401, "adding a note with no session is refused, not a server error");
  assert.equal((await call("GET", "/api/nexus/user-testing/memory", null, true)).status, 200, "signed-in people still read them");
});
