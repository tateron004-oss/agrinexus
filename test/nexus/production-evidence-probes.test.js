"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { component } = require("../../scripts/nexus-run-production-evidence-probes.js");
test("live probe receipts remain exact-release and fail on stale identities", () => {
  const sha = "a".repeat(40); const probe = { url: "https://production/health", status: 200, ok: true, body: { releaseSha: sha } };
  const result = component("testing", sha, [probe], { exactSha: sha });
  assert.equal(result.production, true); assert.equal(result.simulated, false); assert.equal(result.passed, true);
  assert.equal(component("testing", sha, [{ ...probe, body: { releaseSha: "b".repeat(40) } }], {}).passed, false);
});

test("database evidence remains a genuine exact-release production observation", () => {
  const sha = "c".repeat(40);
  const health = { url: "https://production/api/healthz", status: 200, ok: true, body: {
    ok: true, releaseSha: sha, checks: { database: "connected" }, pgvector: true, migrationsCurrent: true
  } };
  const result = component("database", sha, [health], {
    connected: true, pgvector: true, migrationsCurrent: true
  });
  assert.equal(result.passed, true);
  assert.deepEqual(result.facts, { connected: true, pgvector: true, migrationsCurrent: true });
  assert.deepEqual(result.receipts, ["https://production/api/healthz status=200"]);
});

test("task-engine evidence requires a durable completed lifecycle on the exact release", () => {
  const sha = "d".repeat(40);
  const probe = { url: "https://production/api/nexus/runtime/production-acceptance/probes/task-engine",
    status: 200, ok: true, body: { ok: true, releaseSha: sha, durable: true, state: "cancelled", steps: 1 } };
  const result = component("taskEngine", sha, [probe], { durableTask: true, lifecycleState: "cancelled", stepCount: 1 });
  assert.equal(result.passed, true);
  assert.equal(component("taskEngine", sha, [{ ...probe, body: { ...probe.body, releaseSha: "e".repeat(40) } }], {}).passed, false);
});

test("semantic-memory evidence requires reconstruction persistence and cleanup", () => {
  const sha = "f".repeat(40);
  const probe = { url: "https://production/semantic-memory", status: 200, ok: true,
    body: { ok: true, releaseSha: sha, durable: true, repositoryReconstructed: true, cleanedUp: true } };
  const facts = { restartPersistent: true, cleanupVerified: true };
  assert.equal(component("semanticMemory", sha, [probe], facts).passed, true);
  assert.equal(component("semanticMemory", sha, [{ ...probe, ok: false, status: 503, body: { ...probe.body, cleanedUp: false } }], facts).passed, false);
});

test("consent-audit evidence requires preserved immutable receipts", () => {
  const sha = "c".repeat(40);
  const probe = { url: "https://production/consent-audit", status: 200, ok: true,
    body: { ok: true, releaseSha: sha, immutableReceipts: true, auditEventCount: 2, receiptPreserved: true } };
  const record = component("consentAudit", sha, [probe], { immutableReceipts: true });
  assert.equal(record.passed, true);
  assert.equal(record.facts.immutableReceipts, true);
});

test("offline-sync evidence requires durable conflict recovery and cleanup", () => {
  const sha = "d".repeat(40);
  const probe = { url: "https://production/offline-sync", status: 200, ok: true,
    body: { ok: true, releaseSha: sha, conflictRecovery: true, durableConflict: true,
      resolution: "accept-server", cleanedUp: true } };
  const record = component("offlineSync", sha, [probe], { conflictRecovery: true });
  assert.equal(record.passed, true);
  assert.equal(record.facts.conflictRecovery, true);
});
