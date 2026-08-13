"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { FAULTS, FAULT_CONTRACTS, validateFaultClosure } = require("../../nexus/acceptance/fault-register.js");
const sha = "b".repeat(40);

function evidenceFor(contract, index = 0) {
  return {
    fault: contract.fault,
    status: "closed",
    releaseSha: sha,
    verifierId: contract.verifierId,
    proofType: contract.proofType,
    implementation: {
      owner: contract.owner,
      contract: `Fail-closed contract for ${contract.fault}`,
      location: `nexus/verifiers/${contract.verifierId}.js`
    },
    tests: [contract.verifierId],
    proofs: [{
      proofId: `${contract.fault}-proof-${index}`,
      executionId: `execution-${contract.fault}-${index}`,
      verifierId: contract.verifierId,
      method: contract.proofType,
      releaseSha: sha,
      passed: true,
      observedAt: "2026-08-13T00:00:00.000Z",
      observation: { expected: "control enforced", actual: "control enforced", matched: true }
    }]
  };
}

test("the binding register contains exactly 30 typed and uniquely verified fault obligations", () => {
  assert.equal(FAULTS.length, 30);
  assert.equal(FAULT_CONTRACTS.length, 30);
  assert.equal(new Set(FAULT_CONTRACTS.map(item => item.verifierId)).size, 30);
  assert.ok(FAULT_CONTRACTS.every(item => item.owner && item.proofType && item.verifierId));
});

test("release fails closed if even one fault lacks executed proof", () => {
  const evidence = FAULT_CONTRACTS.slice(0, 29).map(evidenceFor);
  assert.throws(() => validateFaultClosure({ releaseSha: sha, evidence }), error =>
    error.code === "fault_register_incomplete" && error.openFaults.length === 1);
});

test("metadata placeholders and generic success receipts cannot close a fault", () => {
  const evidence = FAULT_CONTRACTS.map(evidenceFor);
  evidence[0] = { fault: FAULTS[0], status: "closed", releaseSha: sha,
    implementation: "implemented", tests: ["test"], proofs: ["proof"] };
  assert.throws(() => validateFaultClosure({ releaseSha: sha, evidence }), error =>
    error.code === "fault_register_incomplete" && error.openFaults.includes(FAULTS[0]));
});

test("proof method and verifier must match the registered fault contract", () => {
  const evidence = FAULT_CONTRACTS.map(evidenceFor);
  evidence[5].proofs[0].method = "architecture";
  assert.throws(() => validateFaultClosure({ releaseSha: sha, evidence }), error =>
    error.openFaults.includes(FAULT_CONTRACTS[5].fault));
});

test("shared proof identifiers are rejected instead of reused across faults", () => {
  const evidence = FAULT_CONTRACTS.map(evidenceFor);
  evidence[1].proofs[0].proofId = evidence[0].proofs[0].proofId;
  assert.throws(() => validateFaultClosure({ releaseSha: sha, evidence }), error =>
    error.code === "fault_register_incomplete" && error.duplicateProofIds.length === 1);
});

test("release closes only when all 30 typed obligations have exact-release observations", () => {
  const evidence = FAULT_CONTRACTS.map(evidenceFor);
  assert.equal(validateFaultClosure({ releaseSha: sha, evidence }).faultCount, 30);
});
