"use strict";

const FAULTS = Object.freeze([
  "single-command-owner", "no-browser-reparse", "immutable-command-envelope", "passive-workspaces",
  "render-before-completion", "stale-transition-isolation", "provider-execution", "database-diagnosis",
  "identity-binding", "precise-errors", "authoritative-persistence", "legacy-path-disconnected",
  "observable-success", "production-equivalent-integration", "prepublication-gauntlet", "voice-typed-equivalence",
  "transaction-observability", "single-authorization-scope", "tooling-continuity", "exact-release-identity",
  "runtime-not-source-evidence", "capability-inventory", "exclusive-unified-ownership", "shared-contract-repair",
  "evidence-calibrated-reporting", "outcome-first-reporting", "dependency-failure-isolation", "capability-verification",
  "authoritative-readiness", "developer-owned-acceptance"
]);

function validateFaultClosure({ releaseSha, evidence = [] }) {
  if (!/^[0-9a-f]{40}$/.test(String(releaseSha || ""))) throw new Error("Fault closure requires an exact 40-character release SHA.");
  const byFault = new Map(evidence.map(item => [item.fault, item]));
  const open = FAULTS.filter(fault => {
    const item = byFault.get(fault);
    return item?.status !== "closed" || item.releaseSha !== releaseSha || !item.implementation ||
      !Array.isArray(item.tests) || item.tests.length === 0 || !Array.isArray(item.proofs) || item.proofs.length === 0;
  });
  if (open.length) { const error = new Error(`The 30-fault correction is incomplete: ${open.join(", ")}.`); error.code = "fault_register_incomplete"; error.openFaults = open; throw error; }
  return Object.freeze({ closed: true, releaseSha, faultCount: FAULTS.length, closedFaults: FAULTS });
}

module.exports = Object.freeze({ FAULTS, validateFaultClosure });
