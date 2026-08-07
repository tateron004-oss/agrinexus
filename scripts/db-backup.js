const fs = require("fs");
const path = require("path");
const { Client } = require("pg");
const { loadEnvFile } = require("../foundation/src/runtime/env-file");
const { BACKUP_TABLES, BACKUP_FORMAT } = require("../nexus/operations/backup-manifest.js");

loadEnvFile();

function timestamp() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

async function main() {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set.");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : false
  });

  await client.connect();
  try {
    await client.query("begin isolation level repeatable read read only");
    const backup = {
      format: BACKUP_FORMAT,
      createdAt: new Date().toISOString(),
      databaseUrl: process.env.DATABASE_URL.replace(/:\/\/([^:]+):([^@]+)@/, "://$1:***@"),
      releaseSha: process.env.RENDER_GIT_COMMIT || process.env.GIT_SHA || null,
      migrationIdentity: { applied: [] },
      tables: {}
    };

    for (const table of BACKUP_TABLES) {
      const result = await client.query(`select * from ${table}`);
      backup.tables[table] = result.rows;
    }
    backup.migrationIdentity.applied = backup.tables.schema_migrations.map(row => row.name).sort();
    await client.query("commit");

    const backupDir = path.join(__dirname, "..", "backups");
    fs.mkdirSync(backupDir, { recursive: true });
    const output = path.join(backupDir, `agrinexus-${timestamp()}.json`);
    fs.writeFileSync(output, JSON.stringify(backup, null, 2) + "\n");
    const stats = fs.statSync(output);
    console.log(JSON.stringify({ ok: true, file: output, bytes: stats.size, tables: BACKUP_TABLES.length,
      migrations: backup.migrationIdentity.applied, releaseSha: backup.releaseSha }, null, 2));
  } catch (error) {
    await client.query("rollback").catch(() => {});
    throw error;
  } finally {
    await client.end();
  }
}

main().catch(error => {
  console.error(error.message || error);
  process.exit(1);
});
