"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");

// Found by a live check against a copy of the app: a second signed-in Standard User received the first user's health intake (patient name and needs) in /api/state, and in the cloud-agent status and
// audit routes that return the same data, because db.profile is one shared record and only investors and guests were given a redacted view. Now a Standard User sees the health records they made and the
// demo and older records that carry no personal owner mark, and an Admin still sees everything.

const root = path.resolve(__dirname, "..", "..");
const port = 4996;
const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-health-private-test-db.json");
const tempUploadDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-health-private-uploads-"));
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
const MARKER = `ZZPRIVATEHEALTH-${crypto.randomUUID().slice(0, 8)}`;

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: tempUploadDir }, stdio: "ignore" });
  for (let i = 0; i < 100; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await wait(150); } }
  adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  aCookie = await login("user@agrinexus.org", "User2026!");
  const email = `second-${crypto.randomUUID().slice(0, 8)}@example.com`; const password = crypto.randomBytes(9).toString("base64url");
  assert.equal((await call("/api/admin/test-user", adminCookie, { email, name: "Second User", password })).status, 200);
  bCookie = await login(email, password);
  const made = await call("/api/health/intake-simulation", aCookie, { patientName: `${MARKER}-PATIENT`, needSummary: `${MARKER} private condition follow-up` });
  assert.equal(made.status, 200);
});
test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  fs.rmSync(tempUploadDir, { recursive: true, force: true });
});

test("a health record is shown to the person who made it and to an Admin, and to nobody else who signs in", async () => {
  const own = await call("/api/state", aCookie, null, "GET");
  assert.ok(own.text.includes(MARKER), "the person who made it still sees it");
  const admin = await call("/api/state", adminCookie, null, "GET");
  assert.ok(admin.text.includes(MARKER), "an Admin sees every health record");
  const other = await call("/api/state", bCookie, null, "GET");
  assert.equal(other.status, 200);
  assert.ok(!other.text.includes(MARKER), "another Standard User does not receive it");
  for (const route of ["/api/cloud-agent/status", "/api/cloud-agent/audit"]) {
    const result = await call(route, bCookie, null, "GET");
    assert.ok(!result.text.includes(MARKER), `${route} does not return it either`);
  }
  assert.ok(!(await call("/api/state", "", null, "GET")).text.includes(MARKER), "nor does a signed-out request");
});

test("the demo health records and screens still work for another Standard User", async () => {
  const other = await call("/api/state", bCookie, null, "GET");
  const adminState = await call("/api/state", adminCookie, null, "GET");
  const seeded = (adminState.json.profile.healthIntakes || []).filter(item => !JSON.stringify(item).includes(MARKER));
  assert.ok(seeded.length > 0, "the demo database has health intakes");
  assert.equal(other.json.profile.healthIntakes.length, seeded.length, "every demo record, which has no personal owner, is still shown");
  assert.ok(Array.isArray(other.json.profile.carePlans), "other health lists are still present");
});
