"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { FAULT_CONTRACTS } = require("../../nexus/acceptance/fault-register.js");
const { FAULT_VERIFIERS } = require("../../nexus/acceptance/fault-verifier-registry.js");
const { runFaultVerifiers } = require("../../scripts/nexus-run-fault-proof-verifiers.js");

const sha = "a".repeat(40);
const observedAt = "2026-08-13T00:00:00.000Z";
const passingNodeTest = binding => ({
  passed: true, exitCode: 0, namedAssertionRan: true, passedAssertions: 1,
  command: ["node", "--test", "--test-name-pattern", binding.testName, binding.file], output: "ok"
});

test("every fault has one executable registry binding", () => {
  assert.deepEqual(Object.keys(FAULT_VERIFIERS).sort(), FAULT_CONTRACTS.map(item => item.fault).sort());
  assert.ok(Object.values(FAULT_VERIFIERS).every(binding =>
    ["node-test", "external-proof"].includes(binding.kind) && binding.expected));
});

test("source verifier executes the exact named assertion and records its command", () => {
  const commands = [];
  const report = runFaultVerifiers({ releaseSha: sha }, {
    observedAt, executionId: "run-1",
    executeNodeTest(binding) { commands.push(binding); return passingNodeTest(binding); }
  });
  const immutable = report.evidence.find(item => item.fault === "immutable-command-envelope");
  assert.equal(immutable.proofs[0].observation.actual,
    "named assertion passed: all channels normalize into one immutable command envelope");
  assert.ok(immutable.proofs[0].command.includes("test/nexus/kernel-contracts.test.js"));
  assert.ok(commands.length > 0);
});

test("missing production observations remain open and cannot be inferred from source tests", () => {
  const report = runFaultVerifiers({ releaseSha: sha }, {
    observedAt, executeNodeTest: passingNodeTest
  });
  assert.equal(report.closed, false);
  assert.ok(report.open.some(item => item.fault === "provider-execution" &&
    item.reason === "exact_external_proof_missing"));
  assert.equal(report.proven < report.required, true);
});

test("external proof must match exact SHA, verifier, method, and expected observation", () => {
  const contract = FAULT_CONTRACTS.find(item => item.fault === "provider-execution");
  const binding = FAULT_VERIFIERS[contract.fault];
  const externalProofs = {};
  externalProofs[binding.evidenceKey] = {
    proofId: "provider-failure-proof", executionId: "provider-failure-run",
    releaseSha: sha, verifierId: contract.verifierId, method: contract.proofType,
    passed: true, observedAt,
    observation: { expected: binding.expected, actual: "typed provider_unavailable outcome", matched: true }
  };
  const report = runFaultVerifiers({ releaseSha: sha, externalProofs }, {
    observedAt, executeNodeTest: passingNodeTest
  });
  assert.ok(report.evidence.some(item => item.fault === "provider-execution"));
  externalProofs[binding.evidenceKey].releaseSha = "b".repeat(40);
  const stale = runFaultVerifiers({ releaseSha: sha, externalProofs }, {
    observedAt, executeNodeTest: passingNodeTest
  });
  assert.ok(stale.open.some(item => item.fault === "provider-execution"));
});
