"use strict";

const { WORKSPACE_TOPOLOGY } = require("./workspace-topology.js");
const { REQUIRED_PROOFS, validateWorkspaceEvidence } = require("./workspace-evidence-contract.js");

const PROOF_SOURCES = Object.freeze({
  contract: Object.freeze({ component: "application-contract", verifier: "authoritative-contract-suite" }),
  "tenant-isolation": Object.freeze({ component: "tenant-isolation", verifier: "cross-tenant-denial-suite" }),
  "durable-write": Object.freeze({ component: "database-worker", verifier: "write-reload-worker-probe" }),
  receipt: Object.freeze({ component: "outcome-receipt", verifier: "receipt-reload-probe" }),
  "browser-outcome": Object.freeze({ component: "visible-audible-outcome", verifier: "production-browser-proof" })
});

function createPendingEvidenceMatrix() {
  return Object.freeze(Object.fromEntries(WORKSPACE_TOPOLOGY.map(workspace => [workspace.workspaceId,
    Object.freeze({
      workspaceId: workspace.workspaceId,
      state: "pending",
      releaseSha: null,
      rollbackRef: null,
      proofs: Object.freeze(Object.fromEntries(REQUIRED_PROOFS.map(proof => [proof,
        Object.freeze({ ...PROOF_SOURCES[proof], state: "pending", evidenceId: null, releaseSha: null })
      ])))
    })
  ])));
}

function assertActivationReady(record, expectedReleaseSha) {
  if (!expectedReleaseSha || !/^[0-9a-f]{40}$/.test(expectedReleaseSha)) throw new Error("An exact 40-character release SHA is required.");
  if (!record || record.releaseSha !== expectedReleaseSha) throw new Error("Workspace evidence is not bound to the deployed release SHA.");
  validateWorkspaceEvidence(record);
  return true;
}

module.exports = Object.freeze({ PROOF_SOURCES, createPendingEvidenceMatrix, assertActivationReady });
