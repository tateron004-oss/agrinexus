"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { ProductionAcceptanceRepository, COMPONENTS } = require("../../nexus/acceptance/repository.js");

test("worker heartbeat writes valid JSON arrays for jsonb columns", async () => {
  let parameters;
  const db = { query: async (_sql, values) => { parameters = values; return { rows: [{ worker_id: values[0] }] }; } };
  await new ProductionAcceptanceRepository(db).heartbeatWorker({ workerId: "worker-1", releaseSha: "a".repeat(40),
    queues: ["default"], handlers: ["acceptance.canary"], status: "ready" });
  assert.deepEqual(JSON.parse(parameters[2]), ["default"]);
  assert.deepEqual(JSON.parse(parameters[3]), ["acceptance.canary"]);
});

test("report fails closed and enumerates all 16 workspace migrations", async () => {
  const responses = [
    { rows: [] }, { rows: [] }, { rows: [] },
    { rows: [{ legacy_write_paths: 0, simulated_providers: 0, memory_fallbacks: 0 }] }, { rows: [] }
  ];
  const db = { query: async () => responses.shift() };
  const applications = { list: () => Array.from({ length: 16 }, (_, index) => ({ applicationId: `app-${index + 1}` })) };
  const report = await new ProductionAcceptanceRepository(db).report({ releaseSha: "sha-1", applications,
    health: { ok: true, pgvector: true, migrationsCurrent: true, database: "nexus", postgresVersion: 170000 } });
  assert.equal(report.ok, false); assert.equal(report.workspaces.length, 16);
  assert.equal(report.workspaces.every(item => item.state === "legacy" && item.proofsComplete === false), true);
  assert.deepEqual(Object.keys(report.components), COMPONENTS);
  assert.equal(report.components.worker.ready, false);
});

test("worker readiness requires both a current heartbeat and passed release-scoped evidence", async () => {
  const now = new Date();
  const rows = COMPONENTS.filter(name => name !== "database").map(component => ({ component, status: "passed",
    source: "production-probe", source_sha: "sha-1", verified_at: now, evidence: { evidence: [component] } }));
  const releaseSha = "a".repeat(40);
  const proofs = Object.fromEntries(["contract", "tenant-isolation", "durable-write", "receipt", "browser-outcome"]
    .map(key => [key, { state: "verified", evidenceId: key, releaseSha }]));
  proofs.rollback = { ref: "refs/tags/nexus-before-app-1", releaseSha };
  const responses = [
    { rows: [{ worker_id: "worker-1", release_sha: releaseSha, last_heartbeat_at: now }] }, { rows: rows.map(row => ({ ...row, source_sha: releaseSha })) },
    { rows: [{ workspace_id: "app-1", state: "authoritative", release_sha: releaseSha, proofs }] },
    { rows: [{ legacy_write_paths: 0, simulated_providers: 0, memory_fallbacks: 0 }] },
    { rows: [{ release_sha: releaseSha, state: "active" }] }
  ];
  const db = { query: async () => responses.shift() };
  const report = await new ProductionAcceptanceRepository(db).report({ releaseSha,
    applications: { list: () => [{ applicationId: "app-1" }] },
    health: { ok: true, pgvector: true, migrationsCurrent: true, database: "nexus", postgresVersion: 170000 } });
  assert.equal(report.ok, true); assert.equal(report.components.worker.ready, true);
  assert.equal(report.components.worker.recentHeartbeat, true); assert.equal(report.components.worker.releaseSha, releaseSha);
  assert.equal(report.workspaces[0].proofsComplete, true);
});
