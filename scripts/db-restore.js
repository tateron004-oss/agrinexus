const fs = require("fs");
const { Client } = require("pg");
const { loadEnvFile } = require("../foundation/src/runtime/env-file");

loadEnvFile();

const restoreOrder = [
  "schema_migrations",
  "tenants",
  "countries",
  "users",
  "roles",
  "user_roles",
  "program_metrics",
  "facilities",
  "routes",
  "route_checkpoints",
  "courses",
  "learner_profiles",
  "course_enrollments",
  "certificates",
  "workforce_roles",
  "candidate_profiles",
  "job_applications",
  "patient_intakes",
  "products",
  "trade_orders",
  "wallet_accounts",
  "wallet_transactions",
  "ai_runs",
  "audit_events"
];

function quoteIdent(value) {
  return `"${String(value).replace(/"/g, '""')}"`;
}

async function insertRows(client, table, rows) {
  for (const row of rows) {
    const columns = Object.keys(row);
    if (!columns.length) continue;
    const placeholders = columns.map((_, index) => `$${index + 1}`).join(", ");
    const sql = `insert into ${quoteIdent(table)} (${columns.map(quoteIdent).join(", ")}) values (${placeholders})`;
    await client.query(sql, columns.map(column => row[column]));
  }
}

async function main() {
  const backupFile = process.argv[2];
  if (!backupFile || !fs.existsSync(backupFile)) {
    console.error("Usage: node scripts/db-restore.js <backup-file.json>");
    process.exit(1);
  }
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set.");

  const backup = JSON.parse(fs.readFileSync(backupFile, "utf8"));
  if (backup.format !== "agrinexus-json-backup-v1") {
    throw new Error("Unsupported backup format.");
  }

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : false
  });

  await client.connect();
  try {
    await client.query("begin");
    await client.query(`truncate ${restoreOrder.map(quoteIdent).join(", ")} restart identity cascade`);
    for (const table of restoreOrder) {
      await insertRows(client, table, backup.tables[table] || []);
    }
    await client.query("commit");
    console.log(JSON.stringify({ ok: true, restored: backupFile, tables: restoreOrder.length }, null, 2));
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
