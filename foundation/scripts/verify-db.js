const { loadEnvFile } = require("../src/runtime/env-file");
const { readConfig } = require("../src/config");
const { createDatabaseRuntime } = require("../src/runtime/database");
const { createPostgresAdapter } = require("../src/runtime/postgres-adapter");

const requiredCounts = {
  tenants: 1,
  countries: 4,
  facilities: 8,
  routes: 4,
  route_checkpoints: 16,
  courses: 6,
  workforce_roles: 4,
  patient_intakes: 4,
  products: 4,
  trade_orders: 3,
  wallet_transactions: 2,
  ai_runs: 3,
  audit_events: 4
};

async function main() {
  loadEnvFile();
  const config = readConfig();
  if (!config.database.url) throw new Error("DATABASE_URL is not set. Copy .env.example to .env or set DATABASE_URL in this shell.");
  const adapter = createPostgresAdapter(config);
  const db = createDatabaseRuntime({ adapter });
  try {
    const migrations = await db.query("select name from schema_migrations order by name");
    const migrationNames = (migrations.rows || []).map(row => row.name);
    for (const expected of ["001_initial_schema.sql", "002_seed_demo.sql"]) {
      if (!migrationNames.includes(expected)) throw new Error(`Migration not applied: ${expected}`);
    }

    const counts = {};
    for (const [table, minimum] of Object.entries(requiredCounts)) {
      const result = await db.query(`select count(*)::int as count from ${table}`);
      counts[table] = Number(result.rows[0].count);
      if (counts[table] < minimum) {
        throw new Error(`Expected at least ${minimum} rows in ${table}, found ${counts[table]}.`);
      }
    }

    const demo = await db.query(
      `select u.email, array_agg(r.code order by r.code) as roles
       from users u
       join user_roles ur on ur.user_id = u.id
       join roles r on r.id = ur.role_id
       where lower(u.email) = lower($1)
       group by u.email`,
      ["demo@agrinexus.org"]
    );
    if (!demo.rows.length || !demo.rows[0].roles.includes("coordinator")) {
      throw new Error("Demo coordinator user or role assignment is missing.");
    }

    console.log(JSON.stringify({
      ok: true,
      migrations: migrationNames,
      counts,
      demoUser: demo.rows[0]
    }, null, 2));
  } finally {
    if (adapter.close) await adapter.close();
  }
}

main().catch(error => {
  console.error(error.stack || error.message);
  process.exit(1);
});
