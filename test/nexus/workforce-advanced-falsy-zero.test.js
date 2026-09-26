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

  const zero = await post(cookie, { type: "payroll", amount: 0 });
  assert.equal(zero.json.workforceAdvancedResult.record.amount, 0, "an explicit $0 payroll correction must not be replaced with a fabricated positive amount");
  const earningsAfterZero = zero.json.profile.earnings;

  const negative = await post(cookie, { type: "payroll", amount: -900 });
  assert.notEqual(negative.json.workforceAdvancedResult.record.amount, -900, "a negative amount must never be recorded as-is");
  assert.ok(negative.json.profile.earnings >= earningsAfterZero, "real earnings must never be driven down by an unvalidated negative amount");

  const nonNumeric = await post(cookie, { type: "payroll", amount: "not-a-number" });
  assert.ok(Number.isFinite(nonNumeric.json.profile.earnings), "a non-numeric amount must never permanently NaN-poison the real earnings ledger");
});

test("an explicit failing 0% review score is honored, not silently replaced with a passing score", async () => {
  const cookie = await login("user@agrinexus.org", "User2026!");
  const result = await post(cookie, { type: "evaluation", score: 0 });
  assert.equal(result.json.workforceAdvancedResult.record.score, 0, "an explicit 0% (a genuinely failing review) must not be replaced with a fabricated passing score");
});
