"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { REQUIRED_RELEASE_COMPONENTS, validateReleaseProof } = require("../../scripts/nexus-production-release-readiness.js");
const { FAULTS } = require("../../nexus/acceptance/fault-register.js");
const { CONTRACTS } = require("../../nexus/apps/capability-completion-contracts.js");

const sha = "a".repeat(40);
const faultEvidence = FAULTS.map(fault => ({ fault, status: "closed", releaseSha: sha,
  implementation: "implemented", tests: ["test"], proofs: ["proof"] }));
const capabilityEvidence = Object.fromEntries(Object.entries(CONTRACTS).map(([application, requirements]) =>
  [application, Object.fromEntries([...requirements.map(key => [key, key === "playbackState" ? "playing" : "verified"]),
    ["rendered", true], ["visible", true]])]));
const proof = { ok: true, releaseSha: sha, components: REQUIRED_RELEASE_COMPONENTS.map(name => ({ name })), faultEvidence, capabilityEvidence };

test("release readiness accepts every deploy-stage production component", () => {
  const report = validateReleaseProof({ proof, expectedSha: sha });
  assert.equal(report.passed, true);
  assert.equal(report.requiredComponents, 14);
  assert.equal(report.closedFaults, 30);
  assert.equal(report.verifiedCapabilities, 16);
});

test("release readiness does not claim success without durable object storage", () => {
  const incomplete = { ...proof, components: proof.components.filter(item => item.name !== "objectStorage") };
  assert.throws(() => validateReleaseProof({ proof: incomplete, expectedSha: sha }), /objectStorage/);
});

test("release readiness rejects evidence from another deployment", () => {
  assert.throws(() => validateReleaseProof({ proof, expectedSha: "b".repeat(40) }), /exact release SHA/);
});

test("release readiness rejects an open fault or an unproved capability", () => {
  assert.throws(() => validateReleaseProof({ proof: { ...proof, faultEvidence: faultEvidence.slice(1) }, expectedSha: sha }), /30-fault correction is incomplete/);
  const incompleteMaps = { ...capabilityEvidence, maps: { rendered: true, visible: true, origin: "Nairobi" } };
  assert.throws(() => validateReleaseProof({ proof: { ...proof, capabilityEvidence: incompleteMaps }, expectedSha: sha }), /destination, routeGeometry/);
});
