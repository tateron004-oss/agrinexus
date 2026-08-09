"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { REQUIRED_RELEASE_COMPONENTS, validateReleaseProof } = require("../../scripts/nexus-production-release-readiness.js");

const sha = "a".repeat(40);
const proof = { ok: true, releaseSha: sha, components: REQUIRED_RELEASE_COMPONENTS.map(name => ({ name })) };

test("release readiness accepts every deploy-stage production component", () => {
  const report = validateReleaseProof({ proof, expectedSha: sha });
  assert.equal(report.passed, true);
  assert.equal(report.requiredComponents, 14);
});

test("release readiness does not claim success without durable object storage", () => {
  const incomplete = { ...proof, components: proof.components.filter(item => item.name !== "objectStorage") };
  assert.throws(() => validateReleaseProof({ proof: incomplete, expectedSha: sha }), /objectStorage/);
});

test("release readiness rejects evidence from another deployment", () => {
  assert.throws(() => validateReleaseProof({ proof, expectedSha: "b".repeat(40) }), /exact release SHA/);
});
