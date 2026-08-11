"use strict";

const { createId } = require("../contracts/identifiers.js");
const { storedProofsComplete } = require("../apps/workspace-evidence-contract.js");

const COMPONENTS = Object.freeze([
  "taskEngine", "database", "semanticMemory", "worker", "tools", "voice", "documents",
  "objectStorage", "identity", "consentAudit", "offlineSync", "security", "healthcare",
  "predictive", "observability", "delivery", "testing", "operations"
]);

class ProductionAcceptanceRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }

  async heartbeatWorker({ workerId, releaseSha, queues, handlers, status = "ready", lastJobId = null }) {
    const result = await this.db.query(`insert into nexus_worker_instances
      (worker_id,release_sha,queues,registered_handlers,status,last_job_id,last_heartbeat_at)
      values ($1,$2,$3,$4,$5,$6,now()) on conflict (worker_id) do update set release_sha=excluded.release_sha,
      queues=excluded.queues,registered_handlers=excluded.registered_handlers,status=excluded.status,
      last_job_id=coalesce(excluded.last_job_id,nexus_worker_instances.last_job_id),last_heartbeat_at=now(),updated_at=now()
      returning *`, [workerId, releaseSha, JSON.stringify(queues || []), JSON.stringify(handlers || []), status, lastJobId]);
    return (result.rows || result)[0];
  }

  async recordEvidence({ releaseSha, component, status, evidence, source, sourceSha = releaseSha, expiresAt = null }) {
    if (!COMPONENTS.includes(component)) throw new Error(`Unknown acceptance component: ${component}`);
    const result = await this.db.query(`insert into nexus_acceptance_evidence
      (evidence_id,release_sha,component,status,evidence,source,source_sha,expires_at)
      values ($1,$2,$3,$4,$5,$6,$7,$8) on conflict (release_sha,component,source) do update set
      status=excluded.status,evidence=excluded.evidence,source_sha=excluded.source_sha,
      verified_at=now(),expires_at=excluded.expires_at returning *`,
    [createId("evidence"), releaseSha, component, status, evidence || {}, source, sourceSha, expiresAt]);
    return (result.rows || result)[0];
  }

  async report({ releaseSha, applications, health, now = new Date() }) {
    const [workersResult, evidenceResult, workspaceResult, fallbackResult, activationResult] = await Promise.all([
      this.db.query(`select * from nexus_worker_instances where release_sha=$1 and status='ready'
        and last_heartbeat_at > now()-interval '90 seconds' order by last_heartbeat_at desc`, [releaseSha]),
      this.db.query(`select distinct on (component) * from nexus_acceptance_evidence where release_sha=$1
        and source_sha=$1 and (expires_at is null or expires_at>now()) order by component,verified_at desc`, [releaseSha]),
      this.db.query("select * from nexus_workspace_migrations order by workspace_id"),
      this.db.query(`select
        count(*) filter (where component='legacy_write_path')::int as legacy_write_paths,
        count(*) filter (where component='simulated_provider')::int as simulated_providers,
        count(*) filter (where component='in_memory_fallback')::int as memory_fallbacks
        from nexus_production_exceptions where active=true`),
      this.db.query("select * from nexus_release_activations where release_sha=$1 and state='active'", [releaseSha])
    ]);
    const evidenceRows = evidenceResult.rows || evidenceResult;
    const evidenceByComponent = new Map(evidenceRows.map(row => [row.component, row]));
    const workers = workersResult.rows || workersResult;
    const expected = applications.list().map(item => item.applicationId);
    const migrationRows = workspaceResult.rows || workspaceResult;
    const migrations = new Map(migrationRows.map(row => [row.workspace_id, row]));
    const external = name => evidenceComponent(evidenceByComponent.get(name));
    const worker = workers[0];
    const fallback = (fallbackResult.rows || fallbackResult)[0] || {};
    const activeRelease = (activationResult.rows || activationResult)[0];
    const workspaces = expected.map(workspaceId => {
      const row = migrations.get(workspaceId) || {};
      const proofs = row.proofs || {};
      return { workspaceId, state: row.state || "legacy", releaseSha: row.release_sha || null,
        proofsComplete: row.release_sha === releaseSha && storedProofsComplete(proofs, releaseSha) };
    });
    const components = Object.fromEntries(COMPONENTS.map(name => [name, external(name)]));
    components.database = { ready: health.ok === true, productionEvidence: health.ok === true,
      pgvector: health.pgvector === true, migrationsCurrent: health.migrationsCurrent === true,
      evidence: [health.database, `PostgreSQL ${health.postgresVersion}`, "pgvector", "current migrations"].filter(Boolean) };
    components.worker = { ...components.worker, ready: Boolean(worker) && components.worker.ready === true,
      productionEvidence: Boolean(worker) && components.worker.productionEvidence === true,
      recentHeartbeat: Boolean(worker), releaseSha: worker?.release_sha || null,
      evidence: [...(components.worker.evidence || []), worker ? `worker ${worker.worker_id} heartbeat ${worker.last_heartbeat_at}` : "no current release worker heartbeat"] };
    const componentsReady = COMPONENTS.every(name => components[name]?.ready === true && components[name]?.productionEvidence === true);
    const workspacesReady = workspaces.every(item => item.state === "authoritative" && item.proofsComplete === true);
    const noProductionFallbacks = Number(fallback.legacy_write_paths || 0) === 0 &&
      Number(fallback.simulated_providers || 0) === 0 && Number(fallback.memory_fallbacks || 0) === 0;
    const ok = Boolean(activeRelease) && health.ok === true && componentsReady && workspacesReady && noProductionFallbacks;
    return { ok, authoritative: true, generatedAt: now.toISOString(), releaseSha,
      singleRuntime: Boolean(activeRelease), legacyWritePaths: fallback.legacy_write_paths || 0,
      simulatedProductionProviders: fallback.simulated_providers || 0,
      inMemoryProductionFallbacks: fallback.memory_fallbacks || 0, componentsReady, workspacesReady,
      noProductionFallbacks, components, workspaces };
  }
}

function evidenceComponent(row) {
  const data = row?.evidence || {};
  return { ...data, ready: row?.status === "passed", productionEvidence: row?.status === "passed",
    evidence: Array.isArray(data.evidence) ? data.evidence : row ? [`${row.source} at ${row.verified_at}`] : [] };
}

module.exports = Object.freeze({ ProductionAcceptanceRepository, COMPONENTS });
