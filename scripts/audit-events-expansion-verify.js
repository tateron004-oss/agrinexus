// Manual local verification for the Phase 9 audit_events/ai_runs shadow-write
// (server.js's addNexusPilotAuditEvent / logIntegration / real OpenAI-native
// agent-command completion). Not part of scripts/qa-suite.js: this needs a
// real local Postgres with AUDIT_EVENT_STORE=postgres + DATABASE_URL
// configured (see .env), which CI's isolated network sandbox does not have --
// same reason the Phase 9 health-intake expansion is verified this way.
// The ai_runs half also needs a real OPENAI_API_KEY, since it exercises the
// real OpenAI Responses API end to end, not a mock.
// Run manually: node scripts/audit-events-expansion-verify.js
const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");
const { loadEnvFile } = require("../foundation/src/runtime/env-file");

loadEnvFile();

const port = 4486;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-audit-events-expansion-verify-db.json");

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
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required to run this verification -- set it the same way AUDIT_EVENT_STORE=postgres expects (see .env).");
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  fs.copyFileSync(dbPath, tempDbPath);

  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitFor(`${base}/api/healthz`);
    const userCookie = await login("user@agrinexus.org", "User2026!");

    // Part 1: addNexusPilotAuditEvent -> audit_events, via a real, simple,
    // HTTP-reachable trigger (POST /api/nexus/records -> buildNexusPilotRecord).
    const record = await call("/api/nexus/records", { body: { summary: "Audit-events shadow-write verification record" }, cookie: userCookie });
    assert.equal(record.status, 200);
    const recordId = record.json.record?.id;
    assert.ok(recordId, "expected a real pilot record id back");

    let auditRow = { rows: [] };
    for (let i = 0; i < 20 && auditRow.rows.length === 0; i += 1) {
      await wait(150);
      auditRow = await pool.query("select action, entity_type, entity_id, metadata from audit_events where entity_id = $1", [recordId]);
    }
    assert.equal(auditRow.rows.length, 1, "a real POST /api/nexus/records call must shadow-write a real audit_events row keyed by the new record's id");
    assert.equal(auditRow.rows[0].action, "record_created");
    console.log(`Verified real audit_events row for record ${recordId}: action=${auditRow.rows[0].action}`);

    // Part 2: runNexusOpenAiNativeAgentCommand -> ai_runs, via the real
    // POST /api/agent/command endpoint. This makes a genuine OpenAI API call
    // (not mocked) -- requires a real OPENAI_API_KEY, same as this repo's
    // other live-provider verification scripts.
    const before = await pool.query("select count(*)::int as count from ai_runs where run_type like 'openai_native.%'");
    const agentResult = await call("/api/agent/command", { body: { command: "What is 2 plus 2?", inputMode: "api" }, cookie: userCookie });
    assert.equal(agentResult.status, 200);

    let after = { rows: [{ count: before.rows[0].count }] };
    for (let i = 0; i < 30 && after.rows[0].count <= before.rows[0].count; i += 1) {
      await wait(200);
      after = await pool.query("select count(*)::int as count from ai_runs where run_type like 'openai_native.%'");
    }
    assert.ok(after.rows[0].count > before.rows[0].count, "a real /api/agent/command turn must shadow-write a real ai_runs row");
    const latestRun = await pool.query("select run_type, provider, model, response_text from ai_runs where run_type like 'openai_native.%' order by created_at desc limit 1");
    assert.equal(latestRun.rows[0].provider, "openai");
    assert.ok(latestRun.rows[0].response_text && latestRun.rows[0].response_text.length > 0, "expected a real, non-empty response_text");
    console.log(`Verified real ai_runs row: run_type=${latestRun.rows[0].run_type}, provider=${latestRun.rows[0].provider}, model=${latestRun.rows[0].model}`);

    await pool.query("delete from audit_events where entity_id = $1", [recordId]);
    console.log("Audit-events expansion verification passed");
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
