"use strict";
// Backs up the app's own record: the default space, every business space and the business directory (see server/stateBackup.js for why `npm run db:backup` does not cover these).
//   node scripts/state-backup.js                 everything
//   node scripts/state-backup.js --business acme one business
//   add --out <folder> to choose where the file goes (default: backups/)
// The file holds password hashes and personal records. It is written readable by its owner only; keep it somewhere private.
const fs = require("fs");
const path = require("path");
const { loadEnvFile } = require("../foundation/src/runtime/env-file");
const stateBackup = require("../server/stateBackup.js");

loadEnvFile();

const argument = name => { const index = process.argv.indexOf(name); return index >= 0 ? process.argv[index + 1] : undefined; };

async function main() {
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
    const business = argument("--business");
    const backup = await stateBackup.collectState(store, { business, releaseSha: process.env.RENDER_GIT_COMMIT || process.env.GIT_SHA || null });
    const dir = argument("--out") || path.join(__dirname, "..", "backups");
    fs.mkdirSync(dir, { recursive: true });
    const output = path.join(dir, `kyro-state-${business ? `${business}-` : ""}${new Date().toISOString().replace(/[:.]/g, "-")}.json`);
    fs.writeFileSync(output, JSON.stringify(backup, null, 2) + "\n", { mode: 0o600, flag: "wx" });
    console.log(JSON.stringify({ ok: true, file: output, bytes: fs.statSync(output).size, scope: backup.scope, spaces: backup.spaces.map(space => space.id) }, null, 2));
  } finally {
    if (pool) await pool.end();
  }
}

if (require.main === module) main().catch(error => { console.error(error.message || error); process.exit(1); });
