const { loadEnvFile } = require("../src/runtime/env-file");
const { readConfig, validateConfig } = require("../src/config");
const { createDatabaseRuntime, createOfflineDatabaseRuntime } = require("../src/runtime/database");
const { runMigrations } = require("../src/runtime/migrations");
const { createPostgresAdapter } = require("../src/runtime/postgres-adapter");

async function main() {
  loadEnvFile();
  const config = readConfig();
  const warnings = validateConfig(config);
  for (const warning of warnings) console.warn(`Warning: ${warning}`);

  let adapter = null;
  try {
    adapter = createPostgresAdapter(config);
  } catch (error) {
    console.warn(`Warning: ${error.message}`);
  }

  const db = adapter ? createDatabaseRuntime({ adapter }) : createOfflineDatabaseRuntime();
  const result = await runMigrations(db, {
    migrationsDir: config.database.migrationsDir,
    dryRun: process.argv.includes("--dry-run")
  });

  console.log(JSON.stringify(result, null, 2));
  if (adapter && adapter.close) await adapter.close();
}

main().catch(error => {
  console.error(error.stack || error.message);
  process.exit(1);
});
