const fs = require("fs");
const { Client } = require("pg");
const { loadEnvFile } = require("../foundation/src/runtime/env-file");
const { BACKUP_TABLES, validateBackup, restorationOrder } = require("../nexus/operations/backup-manifest.js");

loadEnvFile();

function quoteIdent(value) {
  return `"${String(value).replace(/"/g, '""')}"`;
}

async function insertRows(client, table, rows, jsonColumns = new Set()) {
  for (const row of rows) {
    const columns = Object.keys(row);
    if (!columns.length) continue;
    const placeholders = columns.map((_, index) => `$${index + 1}`).join(", ");
    const sql = `insert into ${quoteIdent(table)} (${columns.map(quoteIdent).join(", ")}) values (${placeholders})`;
    await client.query(sql, columns.map(column => jsonColumns.has(column) && row[column] !== null ? JSON.stringify(row[column]) : row[column]));
  }
}

async function main() {
  const backupFile = process.argv[2];
  if (!backupFile || !fs.existsSync(backupFile)) {
    console.error("Usage: node scripts/db-restore.js <backup-file.json>");
    process.exit(1);
  }
  const backup = JSON.parse(fs.readFileSync(backupFile, "utf8"));
  validateBackup(backup);
  if (process.argv.includes("--verify-only")) {
    console.log(JSON.stringify({ ok: true, verified: backupFile, tables: BACKUP_TABLES.length,
      migrations: backup.migrationIdentity.applied, releaseSha: backup.releaseSha || null }, null, 2));
    return;
  }
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set.");
  if (process.env.NEXUS_ALLOW_DATABASE_RESTORE !== "true") {
    throw new Error("Restore is locked. Set NEXUS_ALLOW_DATABASE_RESTORE=true only during an approved recovery window.");
  }

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : false
  });

  await client.connect();
  try {
    await client.query("begin");
    const dependencies = await client.query("select c.relname as child,p.relname as parent from pg_constraint fk join pg_class c on c.oid=fk.conrelid join pg_class p on p.oid=fk.confrelid join pg_namespace n on n.oid=c.relnamespace where fk.contype='f' and n.nspname='public'");
    const order = restorationOrder(dependencies.rows);
    const jsonTypes = await client.query("select table_name,column_name from information_schema.columns where table_schema='public' and data_type in ('json','jsonb') and table_name=any($1::text[])", [BACKUP_TABLES]);
    // No CASCADE: unrelated tables must never be silently erased.
    await client.query(`truncate ${BACKUP_TABLES.map(quoteIdent).join(", ")} restart identity`);
    for (const table of order) {
      await insertRows(client, table, backup.tables[table] || [], new Set(jsonTypes.rows.filter(column => column.table_name === table).map(column => column.column_name)));
    }
    const sequences = await client.query(`select table_name,column_name,
      pg_get_serial_sequence(format('%I.%I',table_schema,table_name),column_name) as sequence_name
      from information_schema.columns where table_schema='public' and table_name=any($1::text[])
      and column_default like 'nextval(%'`, [BACKUP_TABLES]);
    for (const sequence of sequences.rows) {
      const maximum = await client.query(`select max(${quoteIdent(sequence.column_name)}) as value from ${quoteIdent(sequence.table_name)}`);
      const value = Number(maximum.rows[0].value || 1);
      await client.query("select setval($1::regclass,$2,$3)", [sequence.sequence_name, value, maximum.rows[0].value !== null]);
    }
    await client.query("commit");
    console.log(JSON.stringify({ ok: true, restored: backupFile, tables: BACKUP_TABLES.length,
      migrations: backup.migrationIdentity.applied, releaseSha: backup.releaseSha || null }, null, 2));
  } catch (error) {
    await client.query("rollback").catch(() => {});
    throw error;
  } finally {
    await client.end();
  }
}

if (require.main === module) main().catch(error => {
  console.error(error.message || error);
  process.exit(1);
});

module.exports = Object.freeze({ insertRows });
