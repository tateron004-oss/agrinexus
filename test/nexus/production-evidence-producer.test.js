"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { compileProductionProof } = require("../../nexus/acceptance/evidence-producer.js");
const { FAULTS } = require("../../nexus/acceptance/fault-register.js");
const { CONTRACTS } = require("../../nexus/apps/capability-completion-contracts.js");

const sha = "a".repeat(40); const observedAt = "2026-08-08T12:00:00.000Z";
const receipt = key => ({ releaseSha: sha, production: true, simulated: false, passed: true, observedAt, receipts: [`receipt:${key}`] });
const faultProbes = FAULTS.map(fault => ({ fault, implementation: "implemented", tests: ["test"], ...receipt(fault) }));
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
