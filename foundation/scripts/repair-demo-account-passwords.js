// One-off repair, meant to be run manually (e.g. via Render's "One-Off Jobs"), for the 2026-09-22
// production login outage: admin@agrinexus.org and user@agrinexus.org's stored password hashes in the
// blob (agrinexus_app_state) stopped verifying against their documented values (Admin2026!/User2026!)
// for a cause that couldn't be conclusively pinned down (see PRs #560/#561's diagnostic work). Both
// accounts are well-known, publicly-documented demo/pilot credentials, not a real secret boundary, so
// resetting them back to their documented values is a safe, direct fix regardless of the exact root
// cause. Requires --confirm to actually write; without it, prints what it WOULD do and exits.
//
// Does not touch any other user, any other field on these two users, or anything else in the blob.
// Safe to re-run.

const { loadEnvFile } = require("../src/runtime/env-file");
const { readConfig } = require("../src/config");
const { createPostgresAdapter } = require("../src/runtime/postgres-adapter");
const pgUsers = require("../../server/pg-users.js");

const TARGETS = [
  { email: "admin@agrinexus.org", password: "Admin2026!" },
  { email: "user@agrinexus.org", password: "User2026!" }
];

async function main() {
  loadEnvFile();
  const config = readConfig();
  if (!config.database.url) throw new Error("DATABASE_URL is not set. Copy .env.example to .env or set DATABASE_URL in this shell.");
  const confirm = process.argv.includes("--confirm");

  const adapter = createPostgresAdapter(config);
  const pool = adapter.pool;
  try {
    const result = await pool.query("select state from agrinexus_app_state where id = $1", ["default"]);
    if (!result.rowCount) throw new Error("agrinexus_app_state has no 'default' row yet -- start the app once before running this.");
    const state = result.rows[0].state;
    const users = Array.isArray(state.users) ? state.users : [];

    const report = [];
    for (const target of TARGETS) {
      const user = users.find(item => String(item.email || "").toLowerCase() === target.email);
      if (!user) { report.push({ email: target.email, found: false, action: "skipped (no such account in the blob)" }); continue; }
      const alreadyCorrect = typeof user.password === "string" && user.password.startsWith("scrypt:") && pgUsers.verifyPasswordHash(target.password, user.password);
      if (alreadyCorrect) { report.push({ email: target.email, found: true, action: "already correct, left unchanged" }); continue; }
      if (confirm) user.password = pgUsers.hashPassword(target.password);
      report.push({ email: target.email, found: true, action: confirm ? "password reset to its documented value" : "WOULD reset to its documented value (dry run -- pass --confirm to actually write)" });
    }

    if (confirm && report.some(item => item.action.startsWith("password reset"))) {
      await pool.query("update agrinexus_app_state set state = $2::jsonb, updated_at = now() where id = $1", ["default", JSON.stringify(state)]);
    }

    console.log(JSON.stringify({ ok: true, confirm, report }, null, 2));
  } finally {
    await adapter.close();
  }
}

if (require.main === module) {
  main().catch(error => {
    console.error(error.stack || error.message);
    process.exit(1);
  });
}

module.exports = { main, TARGETS };
