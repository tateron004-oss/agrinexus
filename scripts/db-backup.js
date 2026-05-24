const fs = require("fs");
const path = require("path");
const { Client } = require("pg");
const { loadEnvFile } = require("../foundation/src/runtime/env-file");

loadEnvFile();

const tables = [
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
    const backup = {
      format: "agrinexus-json-backup-v1",
      createdAt: new Date().toISOString(),
      databaseUrl: process.env.DATABASE_URL.replace(/:\/\/([^:]+):([^@]+)@/, "://$1:***@"),
      tables: {}
    };

    for (const table of tables) {
      const result = await client.query(`select * from ${table}`);
      backup.tables[table] = result.rows;
    }

    const backupDir = path.join(__dirname, "..", "backups");
    fs.mkdirSync(backupDir, { recursive: true });
    const output = path.join(backupDir, `agrinexus-${timestamp()}.json`);
    fs.writeFileSync(output, JSON.stringify(backup, null, 2) + "\n");
    const stats = fs.statSync(output);
    console.log(JSON.stringify({ ok: true, file: output, bytes: stats.size, tables: tables.length }, null, 2));
  } finally {
    await client.end();
  }
}

main().catch(error => {
  console.error(error.message || error);
  process.exit(1);
});
