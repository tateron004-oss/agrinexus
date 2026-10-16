"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");
const usage = require("../../server/voice-usage.js");

// How often spoken requests go smoothly, from counts only: requests heard and how many had a problem, added up per day (server/voice-usage.js).

test("a report keeps five small numbers and a build, and nothing a person said", () => {
  const clean = usage.sanitiseUsage({ requests: 12, refused: "2", notUnderstood: -5, stalls: 1.9, slowStarts: 99999, build: "09f4f807 <script>", transcript: "open my private diary", speech: "secret" });
  assert.deepEqual(clean, { requests: 12, refused: 2, notUnderstood: 0, stalls: 1, slowStarts: 500, build: "09f4f807script" });
  assert.ok(!JSON.stringify(clean).includes("diary") && !JSON.stringify(clean).includes("secret"));
  assert.deepEqual(usage.sanitiseUsage(null), { requests: 0, refused: 0, notUnderstood: 0, stalls: 0, slowStarts: 0, build: "" });
});

test("reports are added into a per-day total, old days are dropped, and the smooth percentage is worked out from it", () => {
  let daily = {};
  daily = usage.addUsage(daily, usage.sanitiseUsage({ requests: 10, refused: 1, stalls: 1 }), { now: new Date("2026-10-14T10:00:00Z") });
  daily = usage.addUsage(daily, usage.sanitiseUsage({ requests: 10, notUnderstood: 2 }), { now: new Date("2026-10-14T18:00:00Z") });
  daily = usage.addUsage(daily, usage.sanitiseUsage({ requests: 5 }), { now: new Date("2026-10-15T09:00:00Z") });
  assert.deepEqual(daily["2026-10-14"], { requests: 20, refused: 1, notUnderstood: 2, stalls: 1, slowStarts: 0, reports: 2 });
  const summary = usage.summariseUsage(daily);
  assert.equal(summary.days.length, 2);
  assert.equal(summary.days[0].smoothPercent, 80, "(20 - 4) / 20");
  assert.equal(summary.days[1].smoothPercent, 100);
  assert.deepEqual(summary.total, { requests: 25, refused: 1, notUnderstood: 2, stalls: 1, slowStarts: 0, smoothPercent: 84 });
  assert.equal(usage.summariseUsage({}).total.smoothPercent, null, "no requests: no percentage rather than a made-up one");
  assert.equal(usage.smoothPercent({ requests: 2, refused: 5 }), 0, "never below zero");
  let long = {}; for (let i = 1; i <= 60; i += 1) long = usage.addUsage(long, usage.sanitiseUsage({ requests: 1 }), { now: new Date(Date.UTC(2026, 0, i)) });
  assert.ok(Object.keys(long).length <= 45);
});

test("the page counts a heard request once, counts each kind of problem, and sends only the totals", () => {
  const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
  const report = app.slice(app.indexOf("function reportKyroVoiceStall("), app.indexOf("\n}\n", app.indexOf("function reportKyroVoiceStall(")));
  assert.match(report, /kyroNoteVoice\(kind === "model-refused" \? "refused" : kind === "request-not-understood" \? "notUnderstood" : \(kind === "slow-start" \|\| kind === "start-failed"\) \? "slowStarts" : "stalls"\)/);
  assert.match(app, /kyroHeard = \{ key: heardKey, text: trimmed, at: Date\.now\(\), recovered: false \}; if \(typeof kyroNoteVoice === "function"\) kyroNoteVoice\("requests"\);/);
  const flush = app.slice(app.indexOf("function kyroFlushVoiceUsage("), app.indexOf("\n}\n", app.indexOf("function kyroFlushVoiceUsage(")));
  assert.match(flush, /\/api\/voice\/realtime\/usage-report/);
  assert.ok(!/transcript|trimmed|said/.test(flush), "no words are sent");
  assert.match(app, /window\.addEventListener\("pagehide", kyroFlushVoiceUsage\)/);
});

// the routes, on a real server
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync(); const base = `http://localhost:${port}`;
const tempDbPath = path.join(root, "tmp-voice-usage-test-db.json");
const tempUploadDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-voice-usage-uploads-"));
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let server;
async function login(email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200); return res.headers.get("set-cookie").split(";")[0];
}
const call = (pathname, cookie, body, method = "POST") => fetch(`${base}${pathname}`, { method, headers: { "content-type": "application/json", cookie, origin: base }, body: method === "GET" ? undefined : JSON.stringify(body || {}) })
  .then(async res => ({ status: res.status, json: await res.json().catch(() => null) }));

test("the usage routes: a signed-in browser reports, only the owner reads, and nothing is kept for an empty report", async t => {
  fs.copyFileSync(path.join(root, "db.json"), tempDbPath);
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_STORAGE_DIR: tempUploadDir }, stdio: "ignore" });
  t.after(() => { server.kill(); if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath); fs.rmSync(tempUploadDir, { recursive: true, force: true }); });
  for (let i = 0; i < 100; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await wait(150); } }
  const userCookie = await login("user@agrinexus.org", "User2026!");
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  assert.equal((await call("/api/voice/realtime/usage-report", "", { requests: 3 })).status, 401, "signed out: refused");
  assert.deepEqual((await call("/api/voice/realtime/usage-report", userCookie, { requests: 0 })).json, { ok: true, kept: false });
  assert.equal((await call("/api/voice/realtime/usage-report", userCookie, { requests: 8, refused: 1, stalls: 1, transcript: "private words" })).json.kept, true);
  assert.equal((await call("/api/voice/realtime/usage-report", userCookie, { requests: 2, notUnderstood: 1 })).json.kept, true);
  assert.equal((await call("/api/admin/voice/usage-summary", userCookie, null, "GET")).status, 403, "a standard user cannot read it");
  const summary = await call("/api/admin/voice/usage-summary", adminCookie, null, "GET");
  assert.equal(summary.status, 200);
  assert.deepEqual(summary.json.total, { requests: 10, refused: 1, notUnderstood: 1, stalls: 1, slowStarts: 0, smoothPercent: 70 });
  assert.ok(!JSON.stringify(summary.json).includes("private words"));
});
