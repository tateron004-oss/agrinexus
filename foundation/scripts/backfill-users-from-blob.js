// One-off backfill: copies user credentials from the app's blob state into
// the real `users` table, hashing plaintext passwords with scrypt +
// PASSWORD_PEPPER on the way in. Safe to re-run — upserts by (tenant_id,
// email). Does not touch or delete the blob.
//
// The blob source matches server.js's own AGRINEXUS_STATE_STORE logic: once
// DATABASE_URL is set (as it is in every real deployment), the blob lives in
// the agrinexus_app_state JSONB column of the SAME Postgres database, not in
// a local db.json file — a plain file read here would silently find nothing
// to migrate in production. AGRINEXUS_STATE_STORE=json (local/dev only)
// falls back to reading db.json / AGRINEXUS_DB_PATH directly.
//
// Since the blob-storage password-hashing fix, a blob row's `password` field
// is no longer reliably plaintext — it may already be a real `scrypt:<salt>:
// <hash>` string (every freshly-seeded default user, every account created
// via the admin test-user endpoints, and any user who has logged in even
// once since that fix deployed). Hashing an already-hashed value here would
// silently produce a hash of the hash, leaving that real Postgres row
// unloginable with the person's real password — so an already-hashed value
// is passed straight through via pgUsers.createUser's `passwordHash`
// parameter instead of its `password` (plaintext-to-be-hashed) one.

const fs = require("fs");
const path = require("path");
const { loadEnvFile } = require("../src/runtime/env-file");
const { readConfig } = require("../src/config");
const { createPostgresAdapter } = require("../src/runtime/postgres-adapter");
const pgUsers = require("../../server/pg-users.js");

function usingPostgresState(env = process.env) {
  const store = env.AGRINEXUS_STATE_STORE || (env.DATABASE_URL ? "postgres" : "json");
  return store === "postgres";
}

// Pure and directly testable without a real Postgres connection, unlike main() itself. Returns null for
// a row with no usable email/password (the caller counts that as skipped), otherwise the exact args
// pgUsers.createUser needs -- passwordHash for an already-hashed blob value, password (to be hashed) for
// a legacy plaintext one.
function createUserArgsFromBlobUser(user) {
  const email = String(user?.email || "").trim().toLowerCase();
  const stored = String(user?.password || "");
  if (!email || !stored) return null;
  const displayName = String(user.name || email).trim() || email;
  return stored.startsWith("scrypt:") ? { email, displayName, passwordHash: stored } : { email, displayName, password: stored };
}

async function loadBlobUsers(pool) {
  if (usingPostgresState()) {
    const result = await pool.query("select state from agrinexus_app_state where id = $1", ["default"]);
    if (!result.rowCount) {
      throw new Error("agrinexus_app_state has no 'default' row yet -- start the app once (it seeds this table on first request) before running this backfill.");
    }
    const state = result.rows[0].state;
    return { users: Array.isArray(state.users) ? state.users : [], source: "agrinexus_app_state (Postgres)" };
  }
  const dbPath = process.env.AGRINEXUS_DB_PATH || path.join(__dirname, "..", "..", "db.json");
  const blob = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  return { users: Array.isArray(blob.users) ? blob.users : [], source: dbPath };
}

async function main() {
  loadEnvFile();
  const config = readConfig();
  if (!config.database.url) throw new Error("DATABASE_URL is not set. Copy .env.example to .env or set DATABASE_URL in this shell.");

  const adapter = createPostgresAdapter(config);
  const pool = adapter.pool;
  try {
    const { users, source } = await loadBlobUsers(pool);
    let migrated = 0;
    let skipped = 0;
    for (const user of users) {
      const args = createUserArgsFromBlobUser(user);
      if (!args) { skipped++; continue; }
      await pgUsers.createUser(pool, args);
      migrated++;
    }
    console.log(JSON.stringify({ ok: true, source, totalUsers: users.length, migrated, skipped }, null, 2));
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

module.exports = { usingPostgresState, loadBlobUsers, createUserArgsFromBlobUser, main };
