async function checkRuntimeHealth(runtime, { env = process.env } = {}) {
  const result = await runtime.db.query(`select current_database() as database,
    current_setting('server_version_num')::int as version_num,
    exists(select 1 from pg_extension where extname='vector') as pgvector,
    exists(select 1 from schema_migrations where name='010_nexus_production_acceptance.sql') as migrated`);
  const state = result.rows[0];
  const databaseReadWrite = await verifyReadWrite(runtime.db);
  const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
  const identity = Boolean(runtime.access?.authorize);
  const worker = Boolean(runtime.acceptance?.report);
  const providers = (runtime.providers?.definitions || []).map(item => ({ toolId: item.toolId, domain: item.domain, configured: true }));
  const providersConfigured = providers.length > 0;
  const browserBundleCompatible = Boolean(runtime.behavior?.acknowledge);
  const ok = Boolean(state.pgvector && state.migrated && databaseReadWrite && identity && worker);
  return { ok, authoritative: true, durable: databaseReadWrite, database: state.database, postgresVersion: state.version_num,
    pgvector: state.pgvector, migrationsCurrent: state.migrated,
    databaseReadWrite, identity, worker, providers, providersConfigured, browserBundleCompatible,
    releaseSha, components: { database: databaseReadWrite, identity, worker, providers: providersConfigured,
      browserBundle: browserBundleCompatible } };
}

async function verifyReadWrite(db) {
  const marker = `health-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return db.transaction(async trx => {
    await trx.query("create temporary table if not exists nexus_health_write_probe (marker text primary key) on commit drop");
    await trx.query("insert into nexus_health_write_probe(marker) values($1)", [marker]);
    const result = await trx.query("select marker from nexus_health_write_probe where marker=$1", [marker]);
    return (result.rows || result)[0]?.marker === marker;
  });
}

module.exports = Object.freeze({ checkRuntimeHealth, verifyReadWrite });
