const fs = require("fs");
const path = require("path");

function listMigrationFiles(migrationsDir) {
  return fs.readdirSync(migrationsDir)
    .filter(file => file.endsWith(".sql"))
    .sort()
    .map(file => ({
      name: file,
      path: path.join(migrationsDir, file),
      sql: fs.readFileSync(path.join(migrationsDir, file), "utf8")
    }));
}

async function ensureMigrationsTable(db) {
  await db.query(`
    create table if not exists schema_migrations (
      name text primary key,
      applied_at timestamptz not null default now()
    )
  `);
}

async function appliedMigrations(db) {
  const result = await db.query("select name from schema_migrations order by name");
  return new Set((result.rows || result || []).map(row => row.name));
}

async function runMigrations(db, { migrationsDir, logger = console, dryRun = false }) {
  const files = listMigrationFiles(migrationsDir);

  if (!db.isConnected) {
    return {
      mode: "offline",
      migrations: files.map(file => file.name),
      message: "No database adapter configured; migrations were listed but not applied."
    };
  }

  await ensureMigrationsTable(db);
  const applied = await appliedMigrations(db);
  const pending = files.filter(file => !applied.has(file.name));

  if (dryRun) {
    return {
      mode: "dry-run",
      pending: pending.map(file => file.name)
    };
  }

  for (const migration of pending) {
    logger.log(`Applying migration ${migration.name}`);
    await db.transaction(async trx => {
      await trx.query(migration.sql);
      await trx.query("insert into schema_migrations (name) values ($1)", [migration.name]);
    });
  }

  return {
    mode: "applied",
    applied: pending.map(file => file.name)
  };
}

module.exports = { listMigrationFiles, runMigrations };
