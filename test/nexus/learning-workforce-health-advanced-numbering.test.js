"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (legacy server.js route sweep, learning/workforce/health "advanced" routes -- most of
// this range already had prior fix comments from the numbering-cap and falsy-zero sweeps; these 3 were
// missed by those passes):
//
// 1. /api/health/advanced numbers every record via `<array>.length + 1`, but every one of those same
//    arrays is capped to 20 right after each insert -- once an array reaches 20, .length pins at 20
//    forever, so every record of that type past the 20th gets an IDENTICAL "unique" number.
// 2. /api/workforce/action type "shift" treats an explicit applications[0].rate of 0 (an unpaid/
//    volunteer placement) as missing and fabricates $64, which is then added unconditionally to the
//    real db.profile.earnings ledger.
// 3. /api/health/mobile-clinic-revenue's own `amount` falsy-zero fix (honoring an explicit 0 for a
//    free/waived visit) was correct, but the serviceMenu built from that same amount still re-applied
//    `amount || 1500` to every displayed price, so a genuinely free visit still showed "1500" on the
//    receipt.
const root = path.resolve(__dirname, "..", "..");
const port = 4798;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-learning-workforce-health-advanced-numbering-db.json");

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

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
  return res.headers.get("set-cookie")?.split(";")[0];
}

function readProfile() {
  return JSON.parse(fs.readFileSync(tempDbPath, "utf8")).profile || {};
}

let server;
let cookie;

test.before(async () => {
  const seed = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  // Force an explicit, legitimate rate of 0 (an unpaid/volunteer placement) on the applicant's current
  // application, so the falsy-zero bug (treating it as "missing") is directly exercisable.
  if (seed.profile?.applications?.[0]) seed.profile.applications[0].rate = 0;
  fs.writeFileSync(tempDbPath, JSON.stringify(seed));

  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  cookie = await login("user@agrinexus.org", "User2026!");
  assert.ok(cookie, "test login must succeed");
});

test.after(async () => {
  server?.kill();
  fs.rmSync(tempDbPath, { force: true });
});

test("POST /api/health/advanced numbers records with a real, ever-growing sequence, not a length-based counter that collides once the 20-item cap is hit", async () => {
  const numbers = [];
  for (let i = 0; i < 22; i += 1) {
    const result = await fetch(`${base}/api/health/advanced`, {
      method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ type: "appointment" })
    }).then(res => res.json());
    numbers.push(result.healthAdvancedResult.record.appointmentNumber);
  }
  assert.equal(new Set(numbers).size, 22, "every one of 22 records -- more than the 20-item display cap -- must get a genuinely unique number");
});

test("POST /api/workforce/action type=shift honors an explicit rate of 0 instead of fabricating $64", async () => {
  const earningsBefore = Number(readProfile().earnings || 0);
  const result = await fetch(`${base}/api/workforce/action`, {
    method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ type: "shift" })
  }).then(res => res.json());
  assert.equal(result.error, undefined, "the shift action must succeed");

  const shift = readProfile().shiftSchedule?.[0];
  assert.ok(shift, "a shift record must have been created");
  assert.equal(shift.estimatedEarnings, 0, "an explicit rate of 0 must be honored, not replaced with a fabricated $64");

  const earningsAfter = Number(readProfile().earnings || 0);
  assert.equal(earningsAfter, earningsBefore, "the real earnings ledger must not be credited for a $0 (unpaid) shift");
});

test("POST /api/health/mobile-clinic-revenue shows $0 across the service menu for a genuinely free/waived visit, not a fabricated $1500 base", async () => {
  const result = await fetch(`${base}/api/health/mobile-clinic-revenue`, {
    method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ type: "clinic-receipt", amount: 0 })
  }).then(res => res.json());
  const record = result.mobileClinicRevenueResult?.record;
  assert.ok(record, "a revenue record must have been created");
  assert.equal(record.amount, 0, "the main amount must honor the explicit 0");
  const mainVisitLine = record.serviceMenu.find(item => item.name === "Mobile clinic visit");
  assert.equal(mainVisitLine.price, 0, "the receipt's main visit line must show $0 for a genuinely free/waived visit, not $1500");
});
