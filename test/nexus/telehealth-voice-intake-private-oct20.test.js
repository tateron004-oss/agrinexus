"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

// The telehealth interview by voice saves an intake case through the health tool (nexus_health_preparation). The older cross-account check (health-records-private-between-users.test.js) made its record through the
// simulation route; this one makes it the way the voice interview does, and checks that a second signed-in person is never shown it, in the state they are sent, in the cloud-agent routes, or by asking Kyro by voice.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "tele-private-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const MARKER = `ZZVOICEHEALTH${crypto.randomUUID().replace(/-/g, "").slice(0, 8)}`;
let server; let n = 0; let aCookie = ""; let bCookie = ""; let adminCookie = "";

async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function request(route, cookie, body, method = "POST") {
  const res = await fetch(`${base}${route}`, { method, headers: { "content-type": "application/json", "x-forwarded-for": "10.15.98.1", ...(cookie ? { cookie } : {}) }, body: method === "GET" ? undefined : JSON.stringify(body || {}) });
  const text = await res.text();
  let json = null; try { json = JSON.parse(text); } catch { /* not JSON */ }
  return { status: res.status, json, text, setCookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
}
const tool = async (cookie, name, args) => (await request("/api/voice/realtime/tool", cookie, { name, correlationId: `tp-${++n}-${Math.random().toString(36).slice(2, 8)}`, arguments: { language: "en", ...args }, language: "en" })).json || {};
async function login(email, password) { const res = await request("/api/login", "", { email, password }); assert.equal(res.status, 200, `${email} signs in`); return res.setCookie; }

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), SESSION_SECRET: "tele-private-secret-for-the-test-0123456789", AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_DIR: path.join(dir, "spaces"),
    OPENAI_API_KEY: "", DATABASE_URL: "", AGRINEXUS_STATE_STORE: "json", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_TEST_REMINDER_STORE: "memory", AGRINEXUS_TRUST_PROXY: "true",
    AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
  adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  aCookie = await login("user@agrinexus.org", "User2026!");
  const email = `second-${crypto.randomUUID().slice(0, 8)}@example.com`; const password = crypto.randomBytes(9).toString("base64url");
  assert.equal((await request("/api/admin/test-user", adminCookie, { email, name: "Second User", password })).status, 200);
  bCookie = await login(email, password);
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("an intake made by the voice interview is shown to the person who made it and an Admin, and to nobody else who signs in", async () => {
  const made = await tool(aCookie, "nexus_health_preparation", { command: "Start my telehealth intake", summary: `Reason: ${MARKER} knee pain after a fall at work. Started: three days ago.` });
  assert.equal(made.status, "health-intake-created", JSON.stringify(made).slice(0, 300));
  const own = await request("/api/state", aCookie, null, "GET");
  assert.ok(own.text.includes(MARKER), "the person who made it sees it");
  const admin = await request("/api/state", adminCookie, null, "GET");
  assert.ok(admin.text.includes(MARKER), "an Admin sees every health record");
  const other = await request("/api/state", bCookie, null, "GET");
  assert.equal(other.status, 200);
  assert.ok(!other.text.includes(MARKER), "another Standard User is not sent it");
  for (const route of ["/api/cloud-agent/status", "/api/cloud-agent/audit"]) assert.ok(!(await request(route, bCookie, null, "GET")).text.includes(MARKER), `${route} does not return it either`);
  assert.ok(!(await request("/api/state", "", null, "GET")).text.includes(MARKER), "nor does a signed-out request");
});

test("the second person cannot read it back by asking Kyro by voice", async () => {
  for (const command of ["Show my telehealth intake", "What is my telehealth case?", "Show my latest health intake", "What did I tell you about my knee?"]) {
    const answer = await tool(bCookie, "nexus_health_preparation", { command });
    assert.ok(!JSON.stringify(answer).includes(MARKER), `"${command}" must not reach the first person's intake`);
  }
});

test("the second person's own intake is theirs, and the first person does not get it", async () => {
  const OTHER = `${MARKER}B`;
  const made = await tool(bCookie, "nexus_health_preparation", { command: "Start my telehealth intake", summary: `Reason: ${OTHER} headaches. Started: a week ago.` });
  assert.equal(made.status, "health-intake-created");
  assert.ok((await request("/api/state", bCookie, null, "GET")).text.includes(OTHER));
  assert.ok(!(await request("/api/state", aCookie, null, "GET")).text.includes(OTHER), "the first person is not sent the second person's intake");
});
