"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { assembleExternalFaultProofs } = require("../../scripts/nexus-assemble-external-fault-proofs.js");

const sha = "a".repeat(40);
const component = (name, facts = {}) => ({
  component: name, releaseSha: sha, production: true, simulated: false,
  passed: true, observedAt: "2026-08-13T00:00:00.000Z", receipts: ["receipt:" + name], facts
});
function fixture() {
  return {
    releaseSha: sha, executionId: "run-1", candidateResult: "success",
    candidateGatesPassed: true, pipelineOwner: "github-actions", pipelineRunId: "123",
    blackBox: { passed: true, releaseSha: sha, checkedAt: "2026-08-13T00:00:00.000Z" },
    probes: {
      releaseSha: sha, source: "unified-release-live-probe",
      componentProbes: [
        component("semanticMemory", { restartPersistent: true, cleanupVerified: true }),
        component("database", { connected: true }),
        component("tools", { providerReady: true })
      ],
      capabilityProbes: Array.from({ length: 17 }, (_, index) => ({
        application: "app-" + index, releaseSha: sha, production: true, simulated: false,
        passed: true, rendered: true, visible: true
      })),
      browserProbe: { releaseSha: sha, visibleAuthenticatedLogin: true, visibleIngress: ["typed-command"] }
    }
  };
}

test("assembler emits only six externally observed contracts supported by current production evidence", () => {
  const proofs = assembleExternalFaultProofs(fixture());
  assert.deepEqual(Object.keys(proofs).sort(), [
    "developer-owned-production-acceptance", "exact-production-runtime-observation",
    "prepublication-gauntlet-run", "production-equivalent-black-box",
    "production-restart-persistence", "visible-production-capability-matrix"
  ]);
  assert.ok(Object.values(proofs).every(proof => proof.releaseSha === sha && proof.passed === true &&
    proof.observation.matched === true && proof.proofId && proof.executionId));
});

test("assembler does not infer capability proof from a partial or invisible matrix", () => {
  const input = fixture();
  input.probes.capabilityProbes[0].visible = false;
  const proofs = assembleExternalFaultProofs(input);
  assert.equal(proofs["visible-production-capability-matrix"], undefined);
});

test("assembler rejects stale black-box or probe evidence", () => {
  const stale = fixture();
  stale.blackBox.releaseSha = "b".repeat(40);
  assert.throws(() => assembleExternalFaultProofs(stale), /exact release SHA/);
});

test("assembler does not convert missing candidate or candidate-gate results into release proof", () => {
  const input = fixture();
  input.candidateResult = "failure";
  input.candidateGatesPassed = false;
  const proofs = assembleExternalFaultProofs(input);
  assert.equal(proofs["production-equivalent-black-box"], undefined);
  assert.equal(proofs["prepublication-gauntlet-run"], undefined);
  assert.equal(proofs["developer-owned-production-acceptance"], undefined);
});
