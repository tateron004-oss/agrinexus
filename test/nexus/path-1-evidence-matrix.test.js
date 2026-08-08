"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const { REQUIRED_PROOFS } = require("../../nexus/apps/migration-repository.js");
const { createPendingEvidenceMatrix, assertActivationReady } = require("../../nexus/apps/workspace-evidence-plan.js");

const SHA = "a".repeat(40);

test("all workspaces start pending with no inferred production evidence", () => {
  const matrix = createPendingEvidenceMatrix();
  assert.equal(Object.keys(matrix).length, 15);
  for (const record of Object.values(matrix)) {
    assert.equal(record.state, "pending");
    assert.equal(record.releaseSha, null);
    assert.deepEqual(Object.keys(record.proofs), REQUIRED_PROOFS);
  }
});

test("activation rejects missing, stale, and incomplete evidence", () => {
  const pending = createPendingEvidenceMatrix().agriculture;
  assert.throws(() => assertActivationReady(pending, SHA), /deployed release SHA/);
  const stale = { ...pending, releaseSha: SHA, rollbackRef: "rollback/main", proofs: Object.fromEntries(
    REQUIRED_PROOFS.map(proof => [proof, { state: "verified", evidenceId: proof, releaseSha: "b".repeat(40) }])) };
  assert.throws(() => assertActivationReady(stale, SHA), /production proofs/);
});

test("activation accepts only five verified proofs, rollback, and one exact release SHA", () => {
  const ready = { workspaceId: "agriculture", state: "candidate", releaseSha: SHA, rollbackRef: "recovery/path-1",
    proofs: Object.fromEntries(REQUIRED_PROOFS.map(proof => [proof, { state: "verified", evidenceId: `evidence-${proof}`, releaseSha: SHA }])) };
  assert.equal(assertActivationReady(ready, SHA), true);
});
