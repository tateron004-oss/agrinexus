"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");

// Found by a wider live check against a copy of the app (every plain page, every page that takes an id, and Kyro's voice and chat read-backs, as a second signed-in user): after the health and money
// records were made private, two more personal lists still reached everyone through /api/state, the cloud-agent pages and the typed command box: the spoken and chat sessions (what a person said and Kyro's
// reply) and the assistant reminders. Everything a person makes in the shared lists is now theirs; only public listings, the shared map layers, field findings and the staff review queues are shared.

const root = path.resolve(__dirname, "..", "..");
const port = 4991;
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-personal-private-test-db.json");
const tempUploadDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-personal-private-uploads-"));
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let adminCookie; let aCookie; let bCookie;
async function login(email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200, `${email} must be able to sign in`);
  return res.headers.get("set-cookie").split(";")[0];
}
async function call(pathname, cookie, body, method = "POST") {
  const res = await fetch(`${base}${pathname}`, { method, headers: { "content-type": "application/json", cookie }, body: method === "GET" ? undefined : JSON.stringify(body || {}) });
  const text = await res.text();
  let json; try { json = JSON.parse(text); } catch { json = null; }
  return { status: res.status, json, text };
}
const say = (cookie, command) => call("/api/voice/realtime/tool", cookie, { name: "nexus_general_conversation", correlationId: `personal-${Math.random().toString(36).slice(2, 8)}`, arguments: { command, language: "en" }, language: "en" });
const MARKER = `zzpersonal${crypto.randomUUID().slice(0, 6)}`;
const has = text => String(text).toLowerCase().includes(MARKER);

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: tempUploadDir }, stdio: "ignore" });
  for (let i = 0; i < 100; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await wait(150); } }
  adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  aCookie = await login("user@agrinexus.org", "User2026!");
  const email = `second-${crypto.randomUUID().slice(0, 8)}@example.com`; const password = crypto.randomBytes(9).toString("base64url");
  assert.equal((await call("/api/admin/test-user", adminCookie, { email, name: "Second User", password })).status, 200);
  bCookie = await login(email, password);
});
test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  fs.rmSync(tempUploadDir, { recursive: true, force: true });
});

test("what a person says to Kyro, Kyro's reply and their reminders are shown to them and to an Admin, and to nobody else who signs in", async () => {
  const before = (await call("/api/state", bCookie, null, "GET")).json.profile;
  const demoSessions = before.voiceSessions.length; const demoReminders = (before.assistantReminders || []).length;
  await say(aCookie, `Remind me tomorrow at 9am to ${MARKER}call the clinic`);
  await say(aCookie, `Add ${MARKER}milk to my shopping list`);
  const own = await call("/api/state", aCookie, null, "GET");
  assert.ok(has(own.text), "the person who said it still sees it");
  assert.ok(has((await call("/api/state", adminCookie, null, "GET")).text), "an Admin sees it");
  const other = await call("/api/state", bCookie, null, "GET");
  assert.ok(!has(other.text), "another Standard User receives none of it");
  assert.equal(other.json.profile.voiceSessions.length, demoSessions, "the demo sessions, which have no personal owner, are still shown");
  assert.equal((other.json.profile.assistantReminders || []).length, demoReminders);
  for (const route of ["/api/cloud-agent/status", "/api/cloud-agent/audit"]) assert.ok(!has((await call(route, bCookie, null, "GET")).text), `${route} does not return it either`);
  assert.ok(!has((await call("/api/agent/command", bCookie, { command: "Show my notes and lists" })).text), "nor does the typed command box");
  assert.ok(!has((await say(bCookie, "What are my reminders?")).text), "nor does asking Kyro by voice");
});
