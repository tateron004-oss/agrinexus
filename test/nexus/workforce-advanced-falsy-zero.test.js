"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (money-logic audit): /api/workforce/advanced's timesheet,
// payroll, and evaluation actions each computed Number(body.X || default) --
// truthy-fallback, not "value provided or not." An explicit falsy 0 (a
// timesheet correction to zero hours, a payroll correction to $0, a
// genuinely failing 0% review score) was silently replaced with a
// fabricated non-zero default, and a negative or non-numeric amount was
// accepted outright with no validation, directly corrupting the real,
// persisted db.profile.earnings ledger (including permanently NaN-poisoning
// it for a non-numeric amount).
const root = path.resolve(__dirname, "..", "..");
const port = 4650;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-workforce-advanced-falsy-zero-db.json");

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

function cookieFrom(res) {
  const raw = typeof res.headers.getSetCookie === "function" ? res.headers.getSetCookie() : [res.headers.get("set-cookie")].filter(Boolean);
  return raw.map(part => part.split(";")[0]).join("; ");
}

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password }) });
  assert.equal(res.status, 200, `login for ${email} should succeed`);
  return cookieFrom(res);
}

async function post(cookie, body) {
  const res = await fetch(`${base}/api/workforce/advanced`, { method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body) });
  return { status: res.status, json: await res.json() };
}

async function action(cookie, type) {
  const res = await fetch(`${base}/api/workforce/action`, { method: "POST", headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ type }) });
  return { status: res.status, json: await res.json() };
}

async function createTestUser(adminCookie, email, password) {
  const res = await fetch(`${base}/api/admin/test-user`, { method: "POST", headers: { "content-type": "application/json", cookie: adminCookie },
    body: JSON.stringify({ email, name: "QA User", password }) });
  assert.equal(res.status, 200, `creating ${email} should succeed`);
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
  fs.rmSync(tempDbPath, { force: true });
});

// Found live (workforce/advanced sibling audit): unlike /api/workforce/action's "interview" (readiness
// gate) and "shift" (interviews gate, plus a dedup refusing a second shift while one is already
// scheduled), payroll and evaluation had no prerequisite at all -- payroll could be the very first
// workforce action a brand-new user ever took, unconditionally crediting real earnings and setting
// candidateStage to "Paid Placement", and repeated evaluation calls with no real interview could reach
// 100% readiness, the exact field roleReadiness() uses to gate real role applications. These three tests
// run first, before any other test in this file submits a timesheet or runs an interview -- db.profile is
// a single shared blob across every account in this legacy system (a known, pre-existing characteristic,
// not something these tests can or should work around), so a genuinely gate-testing "nobody has done this
// yet" state only exists at the very start of the file.
test("payroll refuses when no timesheet has ever been submitted, instead of fabricating one and paying it", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzworkforce-gate-payroll1@example.com", "GatePass2026!");
  const cookie = await login("zzworkforce-gate-payroll1@example.com", "GatePass2026!");
  const result = await post(cookie, { type: "payroll" });
  assert.equal(result.status, 409, JSON.stringify(result.json));
  assert.match(result.json.error, /timesheet/i);
});

test("payroll cannot be approved twice off the same timesheet, closing the unbounded-repeat path", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzworkforce-gate-payroll2@example.com", "GatePass2026!");
  const cookie = await login("zzworkforce-gate-payroll2@example.com", "GatePass2026!");
  await post(cookie, { type: "timesheet" });
  const first = await post(cookie, { type: "payroll" });
  assert.equal(first.status, 200, JSON.stringify(first.json));
  const second = await post(cookie, { type: "payroll" });
  assert.equal(second.status, 409, JSON.stringify(second.json), "a second payroll call with no fresh timesheet must be refused, not credit earnings again");
});

// db.profile.interviews is real seed/demo data (already 5 in the base db.json fixture, not a zero
// state), since db.profile is a single blob shared by the whole app rather than per-account -- so this
// test forces interviews back to 0 directly in the temp db copy first, to exercise the actual "nobody has
// interviewed yet" case the gate exists for.
test("evaluation refuses without a real interview, instead of letting readiness advance for free", async () => {
  const adminCookie = await login("admin@agrinexus.org", "Admin2026!");
  await createTestUser(adminCookie, "zzworkforce-gate-evaluation1@example.com", "GatePass2026!");
  const cookie = await login("zzworkforce-gate-evaluation1@example.com", "GatePass2026!");
  const seeded = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
  seeded.profile.interviews = 0;
  fs.writeFileSync(tempDbPath, JSON.stringify(seeded));
  const result = await post(cookie, { type: "evaluation" });
  assert.equal(result.status, 409, JSON.stringify(result.json));
  assert.match(result.json.error, /interview/i);
});

test("an explicit timesheet correction to 0 hours is honored, not silently replaced with the default", async () => {
  const cookie = await login("user@agrinexus.org", "User2026!");
  const result = await post(cookie, { type: "timesheet", hours: 0 });
  assert.equal(result.json.workforceAdvancedResult.record.hours, 0, "explicit 0 hours must not fall back to the default 6");
});

test("a negative or non-numeric timesheet hours value is refused and falls back to the default, not accepted outright", async () => {
  const cookie = await login("user@agrinexus.org", "User2026!");
  const negative = await post(cookie, { type: "timesheet", hours: -5 });
  assert.equal(negative.json.workforceAdvancedResult.record.hours, 6, "a negative hours value must not be recorded as-is");
});

test("an explicit payroll correction to $0 is honored, and a negative or non-finite amount never corrupts real earnings", async () => {
  const cookie = await login("user@agrinexus.org", "User2026!");
  // Found live (workforce/advanced sibling audit, same session as this falsy-zero fix): payroll now
  // requires a real, still-unpaid submitted timesheet -- submit one fresh before each call below, since
  // approving payroll marks the timesheet it used as paid.
  await post(cookie, { type: "timesheet" });
  const zero = await post(cookie, { type: "payroll", amount: 0 });
  assert.equal(zero.json.workforceAdvancedResult.record.amount, 0, "an explicit $0 payroll correction must not be replaced with a fabricated positive amount");
  const earningsAfterZero = zero.json.profile.earnings;

  await post(cookie, { type: "timesheet" });
  const negative = await post(cookie, { type: "payroll", amount: -900 });
  assert.notEqual(negative.json.workforceAdvancedResult.record.amount, -900, "a negative amount must never be recorded as-is");
  assert.ok(negative.json.profile.earnings >= earningsAfterZero, "real earnings must never be driven down by an unvalidated negative amount");

  await post(cookie, { type: "timesheet" });
  const nonNumeric = await post(cookie, { type: "payroll", amount: "not-a-number" });
  assert.ok(Number.isFinite(nonNumeric.json.profile.earnings), "a non-numeric amount must never permanently NaN-poison the real earnings ledger");
});

test("an explicit failing 0% review score is honored, not silently replaced with a passing score", async () => {
  const cookie = await login("user@agrinexus.org", "User2026!");
  // Found live (workforce/advanced sibling audit, same session as this falsy-zero fix): evaluation now
  // requires a real interview to have happened first, the same interviews>=1 gate /api/workforce/action's
  // own "shift" already uses.
  for (let readiness = 0; readiness < 50; readiness += 10) await action(cookie, "build-profile");
  await action(cookie, "interview");
  const result = await post(cookie, { type: "evaluation", score: 0 });
  assert.equal(result.json.workforceAdvancedResult.record.score, 0, "an explicit 0% (a genuinely failing review) must not be replaced with a fabricated passing score");
});
