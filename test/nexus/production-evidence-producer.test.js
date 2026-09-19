"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { compileProductionProof } = require("../../nexus/acceptance/evidence-producer.js");
const { FAULT_CONTRACTS } = require("../../nexus/acceptance/fault-register.js");
const { CONTRACTS } = require("../../nexus/apps/capability-completion-contracts.js");

const sha = "a".repeat(40); const observedAt = "2026-08-08T12:00:00.000Z";
const receipt = key => ({ releaseSha: sha, production: true, simulated: false, passed: true, observedAt, receipts: [`receipt:${key}`] });
const faultProbes = FAULT_CONTRACTS.map((contract, index) => ({
  fault: contract.fault, status: "closed", releaseSha: sha,
  verifierId: contract.verifierId, proofType: contract.proofType,
  implementation: { owner: contract.owner, contract: "Executed contract for " + contract.fault,
    location: "nexus/verifiers/" + contract.verifierId + ".js" },
  tests: [contract.verifierId], proofs: [{
    proofId: contract.fault + "-proof-" + index, executionId: contract.fault + "-execution-" + index,
    verifierId: contract.verifierId, method: contract.proofType, releaseSha: sha,
    passed: true, observedAt,
    observation: { expected: "control enforced", actual: "control enforced", matched: true }
  }]
}));
const capabilityProbes = Object.entries(CONTRACTS).map(([application, requirements]) => ({ application, ...receipt(application),
  rendered: true, visible: true, evidence: Object.fromEntries(requirements.map(key => [key, key === "playbackState" ? "playing" : "verified"])) }));
const complete = input => ({ faultProbes, capabilityProbes, ...input });

test("compiler binds genuine component and workspace evidence to one release", () => {
  const probes = Object.fromEntries(["contract", "tenant-isolation", "durable-write", "receipt", "browser-outcome"].map(key => [key, receipt(key)]));
  const proof = compileProductionProof(complete({ releaseSha: sha, source: "production-probe", rollbackRef: "refs/tags/pre-release",
    componentProbes: [{ component: "documents", ...receipt("documents"), facts: { fullLifecycle: true } }],
    workspaceProbes: [{ workspaceId: "documents", ...receipt("workspace"), proofs: probes }] }));
  assert.equal(proof.components[0].evidence.fullLifecycle, true);
  assert.equal(proof.workspaces[0].proofs["browser-outcome"].releaseSha, sha);
  assert.match(proof.workspaces[0].proofs.receipt.evidenceId, /^evd_/);
});

test("compiler rejects source-only, simulated, stale, and incomplete claims", () => {
  for (const mutation of [
    { production: false }, { simulated: true }, { releaseSha: "b".repeat(40) }, { passed: false }, { receipts: [] }
  ]) assert.throws(() => compileProductionProof(complete({ releaseSha: sha, source: "probe", rollbackRef: "rollback",
    componentProbes: [{ component: "taskEngine", ...receipt("task"), ...mutation }], workspaceProbes: [] })), /production|release|pass|receipts/i);
  assert.throws(() => compileProductionProof(complete({ releaseSha: sha, source: "probe", rollbackRef: "rollback",
    componentProbes: [{ component: "voice", ...receipt("voice"), facts: {} }], workspaceProbes: [] })), /realtimeEquivalent/);
});

test("compiler refuses to activate a workspace unless all five exact-release proofs exist", () => {
  assert.throws(() => compileProductionProof(complete({ releaseSha: sha, source: "probe", rollbackRef: "rollback", componentProbes: [],
    workspaceProbes: [{ workspaceId: "health", ...receipt("health"), proofs: { contract: receipt("contract") } }] })), /tenant-isolation/);
});

test("compiler refuses release evidence without every fault and capability proof", () => {
  assert.throws(() => compileProductionProof({ releaseSha: sha, source: "probe", rollbackRef: "rollback",
    faultProbes: faultProbes.slice(1), capabilityProbes }), /30-fault correction is incomplete/);
  assert.throws(() => compileProductionProof({ releaseSha: sha, source: "probe", rollbackRef: "rollback",
    faultProbes, capabilityProbes: capabilityProbes.slice(1) }), /capability evidence is incomplete/);
});

test("faultIsolation is validated as exact-release evidence but never compiled as an acceptance component", () => {
  // The production probes emit it for the fault-proof assembler; compiling it used to
  // abort the evidence step with "Unknown acceptance component: faultIsolation".
  const proof = compileProductionProof(complete({ releaseSha: sha, source: "probe", rollbackRef: "rollback", workspaceProbes: [],
    componentProbes: [{ component: "faultIsolation", ...receipt("fault"), facts: { staleTransitionRejected: true } },
      { component: "taskEngine", ...receipt("task") }] }));
  assert.deepEqual(proof.components.map(item => item.name), ["taskEngine"]);
  for (const mutation of [{ releaseSha: "b".repeat(40) }, { production: false }, { simulated: true }, { passed: false }, { receipts: [] }])
    assert.throws(() => compileProductionProof(complete({ releaseSha: sha, source: "probe", rollbackRef: "rollback", workspaceProbes: [],
      componentProbes: [{ component: "faultIsolation", ...receipt("fault"), ...mutation }] })), /release|production|pass|receipts/i);
  assert.throws(() => compileProductionProof(complete({ releaseSha: sha, source: "probe", rollbackRef: "rollback", workspaceProbes: [],
    componentProbes: [{ component: "somethingElse", ...receipt("x") }] })), /Unknown acceptance component: somethingElse/, "other unknown components still fail");
});

test("a held communications gate is accepted as gate evidence only, never as a delivery", () => {
  const gate = { application: "communications", ...receipt("communications"), rendered: true, visible: true,
    confirmationGateHeld: true, actionExecuted: false, evidence: { draft: "Draft a clinic follow-up message.", consentRequired: true } };
  const others = capabilityProbes.filter(item => item.application !== "communications");
  const compile = probes => compileProductionProof({ releaseSha: sha, source: "probe", rollbackRef: "rollback", faultProbes, capabilityProbes: probes });
  assert.equal(compile([...others, gate]).capabilityEvidence.communications.confirmationGateHeld, true);
  assert.throws(() => compile([...others, { ...gate, actionExecuted: true }]), /deliveryReceipt/, "an executed action needs its delivery receipt");
  assert.throws(() => compile([...others, { ...gate, confirmationGateHeld: undefined }]), /deliveryReceipt/, "without the gate statement the full contract applies");
  assert.throws(() => compile([...others, { ...gate, actionExecuted: undefined }]), /deliveryReceipt/, "the gate must state nothing was executed");
  const health = capabilityProbes.find(item => item.application === "health");
  assert.throws(() => compile([...others.filter(item => item.application !== "health"), { ...health, evidence: {}, confirmationGateHeld: true, actionExecuted: false }]),
    /health is missing completion evidence/, "no other application can use the gate exemption");
});

test("business has a completion contract requiring its own verified summary", () => {
  assert.deepEqual(CONTRACTS.business, ["command", "summary", "verified"]);
  const others = capabilityProbes.filter(item => item.application !== "business");
  assert.throws(() => compileProductionProof({ releaseSha: sha, source: "probe", rollbackRef: "rollback", faultProbes,
    capabilityProbes: [...others, { ...capabilityProbes.find(item => item.application === "business"), evidence: { command: "List my business workspaces." } }] }),
    /business is missing completion evidence: summary, verified/);
});
