// Manual local verification for the Phase 9 workforce shadow-write
// (server.js's add_job_opportunity/application-tracking actions ->
// server/pg-workforce.js). Not part of scripts/qa-suite.js: needs a real
// local Postgres with WORKFORCE_STORE=postgres + DATABASE_URL configured
// (see .env), same reason the other Phase 9 expansion scripts are
// standalone. The candidate_profiles/job_applications half also needs
// AUTH_STORE=postgres, since job_applications requires a real Postgres
// users.id, which the default blob demo accounts don't have.
// Run manually: node scripts/workforce-expansion-verify.js
const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");
const { loadEnvFile } = require("../foundation/src/runtime/env-file");
const pgUsers = require("../server/pg-users.js");

loadEnvFile();

const port = 4497;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-workforce-expansion-verify-db.json");

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
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required -- set it the same way WORKFORCE_STORE=postgres expects (see .env).");
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  fs.copyFileSync(dbPath, tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, WORKFORCE_STORE: "postgres", AUTH_STORE: "postgres", OPENAI_API_KEY: "" },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitFor(`${base}/api/healthz`);
    // The seeded demo accounts' real Postgres passwords don't match their
    // documented blob-demo passwords (a pre-existing gap unrelated to this
    // change) -- create a dedicated real Postgres user with a known password
    // for this run instead, so the candidate_profiles/job_applications half
    // (which needs a real Postgres users.id) can be genuinely exercised.
    const testEmail = `workforce-verify-${Date.now()}@agrinexus.test`;
    const testPassword = "WorkforceVerify2026!";
    const createdUser = await pgUsers.createUser(pool, { email: testEmail, displayName: "Workforce Verify", password: testPassword });
    assert.ok(createdUser?.id, "expected a real Postgres user id back from createUser");
    const userCookie = await login(testEmail, testPassword);

    const jobTitle = `QA verification role ${Date.now()}`;
    const posted = await call("/api/nexus/operations/action", {
      body: { action: "add_job_opportunity", title: jobTitle, level: "Level 2", country: "kenya" },
      cookie: userCookie
    });
    assert.equal(posted.status, 200);
    const jobOpportunityId = posted.json.nexusOperationsResult.record.jobOpportunityId;
    assert.ok(jobOpportunityId, "expected a real job opportunity id back");

    // The workforce_roles insert is fire-and-forget (not awaited by the
    // request handler) and then persisted back onto the blob job record via
    // its own independent read-patch-write cycle -- give both a moment.
    let roleRow = { rows: [] };
    for (let i = 0; i < 20 && roleRow.rows.length === 0; i += 1) {
      await wait(200);
      roleRow = await pool.query("select id, title, level, country_id from workforce_roles where title = $1", [jobTitle]);
    }
    assert.equal(roleRow.rows.length, 1, "a real job posting must shadow-write a real workforce_roles row");
    assert.equal(roleRow.rows[0].level, "Level 2");
    assert.ok(roleRow.rows[0].country_id, "kenya should map to a real seeded country id");
    console.log(`Verified real workforce_roles row for "${jobTitle}"`);

    // Confirm the real Postgres id was actually persisted back onto the
    // blob job record across a SEPARATE later request, not just held in the
    // now-discarded in-memory object from the first request.
    let persistedJob = null;
    for (let i = 0; i < 20 && !persistedJob?.pgWorkforceRoleId; i += 1) {
      await wait(200);
      const raw = JSON.parse(fs.readFileSync(tempDbPath, "utf8"));
      persistedJob = (raw.nexusPersistentOperations?.jobOpportunities || []).find(item => item.jobOpportunityId === jobOpportunityId) || null;
    }
    assert.ok(persistedJob?.pgWorkforceRoleId, "the real workforce_roles id must be persisted back onto the blob record across requests, not just held in a discarded in-memory object");
    console.log("Verified the real workforce_roles id survives across separate requests (the Phase 8 db-freshness gotcha does not bite here).");

    // Now track a real application against this job as the real signed-in
    // user -- with AUTH_STORE=postgres, this user has a real Postgres id,
    // so this should create real candidate_profiles + job_applications rows.
    const tracked = await call("/api/nexus/operations/action", {
      body: { action: "track_application_status", jobOpportunityId, status: "under-review" },
      cookie: userCookie
    });
    assert.equal(tracked.status, 200);

    let applicationRow = { rows: [] };
    for (let i = 0; i < 20 && applicationRow.rows.length === 0; i += 1) {
      await wait(200);
      applicationRow = await pool.query(
        `select ja.id, ja.status, cp.user_id
         from job_applications ja
         join candidate_profiles cp on cp.id = ja.candidate_profile_id
         join workforce_roles wr on wr.id = ja.workforce_role_id
         where wr.title = $1`,
        [jobTitle]
      );
    }
    assert.equal(applicationRow.rows.length, 1, "a real signed-in user tracking an application must shadow-write a real, linked job_applications row");
    console.log(`Verified real job_applications row linked to a real candidate_profiles row for user ${applicationRow.rows[0].user_id}`);

    await pool.query("delete from job_applications where workforce_role_id = (select id from workforce_roles where title = $1)", [jobTitle]);
    await pool.query("delete from workforce_roles where title = $1", [jobTitle]);
    await pool.query("delete from candidate_profiles where user_id = $1", [createdUser.id]);
    await pool.query("delete from users where id = $1", [createdUser.id]);
    console.log("Workforce expansion verification passed");
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
