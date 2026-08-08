"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { WORKSPACES } = require("../nexus/compat/workspace-migration-registry.js");
const { REQUIRED_PROOFS } = require("../nexus/apps/migration-repository.js");
const { PROOF_SOURCES, createPendingEvidenceMatrix } = require("../nexus/apps/workspace-evidence-plan.js");

const root = path.resolve(__dirname, "..");
const policy = JSON.parse(fs.readFileSync(path.join(root, ".github/nexus-path-1-evidence-policy.json"), "utf8"));
const matrix = createPendingEvidenceMatrix();

assert.equal(policy.mode, "evidence-collection-only");
assert.equal(policy.exactReleaseBindingRequired, true);
assert.equal(policy.runtimeCutoverAuthorized, false);
assert.equal(policy.removalAuthorized, false);
assert.equal(policy.rollbackRequired, true);
assert.equal(policy.requiredProductionStabilityPasses, 3);
assert.equal(policy.physicalVoiceCertificationRequired, true);
assert.deepEqual(policy.workspaces, WORKSPACES);
assert.deepEqual(policy.requiredProofs, REQUIRED_PROOFS);
assert.deepEqual(Object.keys(matrix), WORKSPACES);
assert.deepEqual(Object.keys(PROOF_SOURCES), REQUIRED_PROOFS);
for (const record of Object.values(matrix)) {
  assert.equal(record.state, "pending");
  assert.equal(record.releaseSha, null);
  assert.equal(record.rollbackRef, null);
  assert.deepEqual(Object.keys(record.proofs), REQUIRED_PROOFS);
  for (const proof of Object.values(record.proofs)) assert.equal(proof.state, "pending");
}

console.log("NEXUS PATH 1 EVIDENCE MATRIX: PASS — 15 workspaces remain held pending exact-release production proof.");
