"use strict";

const define = (fault, proofType, verifierId, owner) => Object.freeze({ fault, proofType, verifierId, owner });

const FAULT_CONTRACTS = Object.freeze([
  define("single-command-owner", "architecture", "verify.single-command-owner", "agent-runtime"),
  define("no-browser-reparse", "architecture", "verify.no-browser-reparse", "passive-ui"),
  define("immutable-command-envelope", "runtime", "verify.immutable-command-envelope", "agent-runtime"),
  define("passive-workspaces", "architecture", "verify.passive-workspaces", "passive-ui"),
  define("render-before-completion", "runtime", "verify.render-before-completion", "outcome-renderer"),
  define("stale-transition-isolation", "fault-injection", "inject.stale-transition", "task-engine"),
  define("provider-execution", "fault-injection", "inject.provider-failure", "tool-runtime"),
  define("database-diagnosis", "fault-injection", "inject.database-failure", "durable-state"),
  define("identity-binding", "isolation", "verify.identity-binding", "identity-runtime"),
  define("precise-errors", "runtime", "verify.precise-errors", "agent-runtime"),
  define("authoritative-persistence", "persistence", "verify.authoritative-persistence", "durable-state"),
  define("legacy-path-disconnected", "architecture", "verify.legacy-path-disconnected", "compatibility-boundary"),
  define("observable-success", "runtime", "verify.observable-success", "outcome-verifier"),
  define("production-equivalent-integration", "integration", "verify.production-equivalent-integration", "release-pipeline"),
  define("prepublication-gauntlet", "release", "verify.prepublication-gauntlet", "release-pipeline"),
  define("voice-typed-equivalence", "runtime", "verify.voice-typed-equivalence", "input-runtime"),
  define("transaction-observability", "runtime", "verify.transaction-observability", "observability"),
  define("single-authorization-scope", "isolation", "verify.single-authorization-scope", "authorization"),
  define("tooling-continuity", "fault-injection", "inject.tooling-continuity", "tool-runtime"),
  define("exact-release-identity", "release", "verify.exact-release-identity", "release-pipeline"),
  define("runtime-not-source-evidence", "production-observation", "observe.runtime-not-source", "production-acceptance"),
  define("capability-inventory", "integration", "verify.capability-inventory", "tool-registry"),
  define("exclusive-unified-ownership", "architecture", "verify.exclusive-unified-ownership", "agent-runtime"),
  define("shared-contract-repair", "integration", "verify.shared-contract-repair", "contract-registry"),
  define("evidence-calibrated-reporting", "release", "verify.evidence-calibrated-reporting", "production-acceptance"),
  define("outcome-first-reporting", "runtime", "verify.outcome-first-reporting", "outcome-verifier"),
  define("dependency-failure-isolation", "fault-injection", "inject.dependency-failure-isolation", "tool-runtime"),
  define("capability-verification", "production-observation", "observe.capability-verification", "production-acceptance"),
  define("authoritative-readiness", "integration", "verify.authoritative-readiness", "release-pipeline"),
  define("developer-owned-acceptance", "release", "verify.developer-owned-acceptance", "production-acceptance")
]);

const FAULTS = Object.freeze(FAULT_CONTRACTS.map(item => item.fault));
const contractByFault = new Map(FAULT_CONTRACTS.map(item => [item.fault, item]));
const PLACEHOLDER = /^(implemented|implementation|test|tests?|proof|proofs?|pass|passed|ok|true)$/i;

function nonPlaceholder(value) {
  return typeof value === "string" && value.trim().length >= 4 && !PLACEHOLDER.test(value.trim());
}

function validImplementation(value, contract) {
  return value && typeof value === "object" && value.owner === contract.owner &&
    nonPlaceholder(value.contract) && nonPlaceholder(value.location);
}

function validProof(proof, contract, releaseSha) {
  const observation = proof?.observation;
  return proof && typeof proof === "object" && nonPlaceholder(proof.proofId) &&
    nonPlaceholder(proof.executionId) && proof.verifierId === contract.verifierId &&
    proof.method === contract.proofType && proof.releaseSha === releaseSha && proof.passed === true &&
    Number.isFinite(Date.parse(proof.observedAt)) && observation && typeof observation === "object" &&
    Object.prototype.hasOwnProperty.call(observation, "expected") &&
    Object.prototype.hasOwnProperty.call(observation, "actual") &&
    observation.matched === true;
}

function validateFaultClosure({ releaseSha, evidence = [] }) {
  if (!/^[0-9a-f]{40}$/.test(String(releaseSha || ""))) {
    throw new Error("Fault closure requires an exact 40-character release SHA.");
  }
  const duplicateFaults = evidence.map(item => item?.fault).filter((fault, index, all) => all.indexOf(fault) !== index);
  const proofIds = evidence.flatMap(item => Array.isArray(item?.proofs) ? item.proofs.map(proof => proof?.proofId) : []);
  const duplicateProofIds = proofIds.filter((id, index, all) => id && all.indexOf(id) !== index);
  const byFault = new Map(evidence.map(item => [item?.fault, item]));
  const open = FAULT_CONTRACTS.filter(contract => {
    const item = byFault.get(contract.fault);
    return item?.status !== "closed" || item.releaseSha !== releaseSha ||
      item.verifierId !== contract.verifierId || item.proofType !== contract.proofType ||
      !validImplementation(item.implementation, contract) ||
      !Array.isArray(item.tests) || !item.tests.includes(contract.verifierId) ||
      item.tests.some(test => !nonPlaceholder(test)) ||
      !Array.isArray(item.proofs) || item.proofs.length === 0 ||
      item.proofs.some(proof => !validProof(proof, contract, releaseSha));
  }).map(contract => contract.fault);
  const unknown = evidence.map(item => item?.fault).filter(fault => !contractByFault.has(fault));
  if (duplicateFaults.length || duplicateProofIds.length || unknown.length || open.length) {
    const error = new Error(`The 30-fault correction is incomplete: ${open.join(", ") || "invalid evidence set"}.`);
    error.code = "fault_register_incomplete";
    error.openFaults = open;
    error.duplicateFaults = [...new Set(duplicateFaults)];
    error.duplicateProofIds = [...new Set(duplicateProofIds)];
    error.unknownFaults = [...new Set(unknown)];
    throw error;
  }
  return Object.freeze({ closed: true, releaseSha, faultCount: FAULTS.length, closedFaults: FAULTS });
}

module.exports = Object.freeze({ FAULTS, FAULT_CONTRACTS, validateFaultClosure });
