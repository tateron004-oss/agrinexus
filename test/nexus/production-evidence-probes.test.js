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
