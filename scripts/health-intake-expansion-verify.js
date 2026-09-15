// Manual local verification for the Phase 9 health-intake shadow-write
// expansion (server.js's 13 newly-wired healthIntakes.unshift() call sites).
// Not part of scripts/qa-suite.js: this needs a real local Postgres with
// HEALTH_INTAKE_STORE=postgres + DATABASE_URL configured (see .env), which
// CI's isolated network sandbox does not have -- same reason Phase 1's
// auth-Postgres cutover was verified this way rather than through the
// CI-gated suite. Run manually: node scripts/health-intake-expansion-verify.js
const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");
const { loadEnvFile } = require("../foundation/src/runtime/env-file");

loadEnvFile();

const port = 4485;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-health-intake-expansion-verify-db.json");

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
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const setCookie = res.headers.get("set-cookie");
  if (!res.ok) throw new Error(`login ${email} failed: ${res.status}`);
  return setCookie.split(";")[0];
}

async function call(route, { body, cookie } = {}) {
  const res = await fetch(`${base}${route}`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify(body || {})
  });
  const json = await res.json();
  return { status: res.status, json };
}

(async () => {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required to run this verification -- set it the same way server.js's HEALTH_INTAKE_STORE=postgres path expects (see .env).");
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  // Start with an empty healthIntakes array so healthIntakes[0] is genuinely
  // absent -- this is what makes the `healthIntakes[0] || withHealthProvenance(...)`
  // call sites actually create (and shadow-write) a brand new intake.
  const seedDb = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  seedDb.profile.healthIntakes = [];
  fs.writeFileSync(tempDbPath, JSON.stringify(seedDb));

  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, NEXUS_PRESERVE_EMPTY_ENV: "1", PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "" },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitFor(`${base}/api/healthz`);
    const userCookie = await login("user@agrinexus.org", "User2026!");

    const vitals = await call("/api/health/action", { body: { type: "vitals", temperatureC: 37.2, pulse: 88, symptoms: "headache and fatigue" }, cookie: userCookie });
    assert.equal(vitals.status, 200);

    // The shadow-write is fire-and-forget (not awaited by the request
    // handler), so give it a moment to land before checking.
    let vitalsRow = { rows: [] };
    for (let i = 0; i < 20 && vitalsRow.rows.length === 0; i += 1) {
      await wait(150);
      vitalsRow = await pool.query("select patient_ref, need_summary, risk_level from patient_intakes where patient_ref like '%-VITALS'");
    }
    assert.equal(vitalsRow.rows.length, 1, "a genuinely new intake created via the vitals action must land a real Postgres row");
    const vitalsPatientRef = vitalsRow.rows[0].patient_ref;
    console.log(`Verified real Postgres row for a new intake: ${vitalsPatientRef}`);

    // Now that healthIntakes[0] exists (the vitals intake above), a
    // DIFFERENT action type must reuse it rather than create a second real
    // row, and must not re-write it to Postgres either (only a genuinely new
    // intake shadow-writes).
    const beforeUpdatedAt = (await pool.query("select updated_at from patient_intakes where patient_ref = $1", [vitalsPatientRef])).rows[0].updated_at;
    const referral = await call("/api/health/action", { body: { type: "referral" }, cookie: userCookie });
    assert.equal(referral.status, 200);
    await wait(500);
    const afterUpdatedAt = (await pool.query("select updated_at from patient_intakes where patient_ref = $1", [vitalsPatientRef])).rows[0].updated_at;
    assert.equal(afterUpdatedAt.getTime(), beforeUpdatedAt.getTime(), "reusing an existing intake for a different action must not re-write it to Postgres");

    const totalNewRows = await pool.query("select count(*)::int as count from patient_intakes where patient_ref like '%-VITALS' or patient_ref like '%-REFER'");
    assert.equal(totalNewRows.rows[0].count, 1, "reusing an existing intake must not create a second real row");

    await pool.query("delete from patient_intakes where patient_ref = $1", [vitalsPatientRef]);
    console.log("Health intake expansion verification passed");
  } finally {
    server.kill();
    await pool.end();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(async error => {
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  console.error(error.stack || error.message);
  process.exit(1);
});
