async function checkRuntimeHealth(runtime) {
  const result = await runtime.db.query(`select current_database() as database,
    current_setting('server_version_num')::int as version_num,
    exists(select 1 from pg_extension where extname='vector') as pgvector,
    exists(select 1 from schema_migrations where name='003_nexus_unified_runtime.sql') as migrated`);
  const state = result.rows[0];
  const ok = Boolean(state.pgvector && state.migrated);
  return { ok, database: state.database, postgresVersion: state.version_num,
    pgvector: state.pgvector, migrationsCurrent: state.migrated,
    releaseSha: process.env.RENDER_GIT_COMMIT || process.env.GIT_SHA || "development" };
}

module.exports = Object.freeze({ checkRuntimeHealth });
