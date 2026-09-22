const twilioProvider = require("../../server/providers/twilioProvider.js");
const emailProvider = require("../../server/providers/emailProvider.js");

// The tools whose canonical executor calls out to Tavily (scripts/provider-engines.js), and honestly refuses rather than
// answering if TAVILY_API_KEY is absent. knowledge.search alone also has a real OpenAI fallback, so it stays configured
// on OPENAI_API_KEY too even without Tavily.
const TAVILY_TOOLS = new Set(["knowledge.search", "images.search", "jobs.search", "marketplace.search"]);

// Whether a canonical tool is genuinely usable right now, not just registered. Previously this whole function always
// reported `configured: true` for every tool regardless of any of this -- confirmed live 2026-09-22 (the capability
// audit): every provider row on production said "configured" even though nothing here had ever checked a credential.
function providerConfiguration(item, env) {
  if (item.toolId === "media.play") return { configured: false, reason: "no real media backend exists; always returns a canned response" };
  if (item.toolId === "health.emergency-guidance") return { configured: true, reason: "static, hand-reviewed safety text by design -- not a live lookup" };
  if (item.toolId === "communications.send") {
    const sms = twilioProvider.status(env); const mail = emailProvider.status(env);
    const configured = sms.sms.missingConfig.length === 0 || sms.whatsapp.missingConfig.length === 0 || sms.calls.missingConfig.length === 0 || mail.missingConfig.length === 0;
    return configured ? { configured: true } : { configured: false, reason: "no SMS/WhatsApp/call (Twilio) or email provider credentials are set" };
  }
  if (TAVILY_TOOLS.has(item.toolId)) {
    const hasTavily = Boolean(String(env.TAVILY_API_KEY || "").trim());
    const hasOpenAiFallback = item.toolId === "knowledge.search" && Boolean(String(env.OPENAI_API_KEY || "").trim());
    return (hasTavily || hasOpenAiFallback) ? { configured: true } : { configured: false, reason: "TAVILY_API_KEY is not set" };
  }
  return { configured: true };
}

async function checkRuntimeHealth(runtime, { env = process.env } = {}) {
  const result = await runtime.db.query(`select current_database() as database,
    current_setting('server_version_num')::int as version_num,
    exists(select 1 from pg_extension where extname='vector') as pgvector,
    (exists(select 1 from schema_migrations where name='010_nexus_production_acceptance.sql') and
      exists(select 1 from schema_migrations where name='016_nexus_operations_consolidation.sql')) as migrated`);
  const state = result.rows[0];
  const databaseReadWrite = await verifyReadWrite(runtime.db);
  const releaseSha = env.RENDER_GIT_COMMIT || env.GIT_SHA || "development";
  const identity = Boolean(runtime.access?.authorize);
  const worker = Boolean(runtime.acceptance?.report);
  const providers = (runtime.providers?.definitions || []).map(item => ({ toolId: item.toolId, domain: item.domain, ...providerConfiguration(item, env) }));
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
