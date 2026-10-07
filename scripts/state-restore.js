"use strict";
// Puts a state backup (scripts/state-backup.js) back.
//   node scripts/state-restore.js <file> --verify-only          check the file, change nothing
//   node scripts/state-restore.js <file> --business acme        put one business back (refuses if it exists; add --replace to overwrite it)
//   node scripts/state-restore.js <file>                        put every business back (the default record is untouched)
//   node scripts/state-restore.js <file> --include-default      ... and the default record too
// Like db:restore, it is locked: set NEXUS_ALLOW_DATABASE_RESTORE=true only during an approved recovery window.
const fs = require("fs");
const { loadEnvFile } = require("../foundation/src/runtime/env-file");
const stateBackup = require("../server/stateBackup.js");

loadEnvFile();

const argument = name => { const index = process.argv.indexOf(name); return index >= 0 ? process.argv[index + 1] : undefined; };
const flag = name => process.argv.includes(name);

async function main() {
  const file = process.argv[2];
  if (!file || file.startsWith("--") || !fs.existsSync(file)) { console.error("Usage: node scripts/state-restore.js <backup-file.json> [--verify-only] [--business id] [--replace] [--include-default]"); process.exit(1); }
  const backup = JSON.parse(fs.readFileSync(file, "utf8"));
  stateBackup.validateStateBackup(backup);
  if (flag("--verify-only")) { console.log(JSON.stringify({ ok: true, verified: file, scope: backup.scope, createdAt: backup.createdAt, spaces: backup.spaces.map(space => space.id) }, null, 2)); return; }
  if (process.env.NEXUS_ALLOW_DATABASE_RESTORE !== "true") throw new Error("Restore is locked. Set NEXUS_ALLOW_DATABASE_RESTORE=true only during an approved recovery window.");
  const config = stateBackup.resolveStateConfig();
  let pool = null;
  let store;
  if (config.store === "postgres") {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set.");
    const { Pool } = require("pg");
    pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : false });
    store = stateBackup.createPostgresStore(pool);
  } else {
    store = stateBackup.createFileStore(config);
  }
  try {
    const summary = await stateBackup.applyState(store, backup, { business: argument("--business"), includeDefault: flag("--include-default"), replace: flag("--replace") });
    console.log(JSON.stringify({ ok: true, restoredFrom: file, ...summary }, null, 2));
  } finally {
    if (pool) await pool.end();
  }
}

if (require.main === module) main().catch(error => { console.error(error.message || error); process.exit(1); });
