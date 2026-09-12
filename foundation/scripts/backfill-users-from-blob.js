// One-off backfill: copies user credentials from the JSON blob (db.json, or
// AGRINEXUS_DB_PATH) into the real `users` table, hashing plaintext passwords
// with scrypt + PASSWORD_PEPPER on the way in. Safe to re-run — upserts by
// (tenant_id, email). Does not touch or delete the blob.

const fs = require("fs");
const path = require("path");
const { loadEnvFile } = require("../src/runtime/env-file");
const { readConfig } = require("../src/config");
const { createPostgresAdapter } = require("../src/runtime/postgres-adapter");
const pgUsers = require("../../server/pg-users.js");

async function main() {
  loadEnvFile();
  const config = readConfig();
  if (!config.database.url) throw new Error("DATABASE_URL is not set. Copy .env.example to .env or set DATABASE_URL in this shell.");

  const dbPath = process.env.AGRINEXUS_DB_PATH || path.join(__dirname, "..", "..", "db.json");
  const blob = JSON.parse(fs.readFileSync(dbPath, "utf8"));
  const users = Array.isArray(blob.users) ? blob.users : [];

  const adapter = createPostgresAdapter(config);
  const pool = adapter.pool;
  try {
    let migrated = 0;
    let skipped = 0;
    for (const user of users) {
      const email = String(user.email || "").trim().toLowerCase();
      const password = String(user.password || "");
      if (!email || !password) { skipped++; continue; }
      await pgUsers.createUser(pool, {
        email,
        displayName: String(user.name || email).trim() || email,
        password
      });
      migrated++;
    }
    console.log(JSON.stringify({ ok: true, sourceFile: dbPath, totalUsers: users.length, migrated, skipped }, null, 2));
  } finally {
    await adapter.close();
  }
}

main().catch(error => {
  console.error(error.stack || error.message);
  process.exit(1);
});
