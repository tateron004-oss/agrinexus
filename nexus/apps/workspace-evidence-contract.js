"use strict";

const REQUIRED_PROOFS = Object.freeze(["contract", "tenant-isolation", "durable-write", "receipt", "browser-outcome"]);

function validateWorkspaceEvidence({ workspaceId, proofs, releaseSha, rollbackRef }) {
  if (!workspaceId || !releaseSha || !/^[0-9a-f]{40}$/.test(releaseSha)) {
    throw new Error("Workspace and exact 40-character release SHA are required.");
  }
  if (!rollbackRef || typeof rollbackRef !== "string") throw new Error("Workspace rollback evidence is required.");
  const missing = REQUIRED_PROOFS.filter(key => {
    const proof = proofs?.[key];
    return proof?.state !== "verified" || !proof.evidenceId || proof.releaseSha !== releaseSha;
  });
  if (missing.length) throw new Error(`Workspace ${workspaceId} is missing exact-release production proofs: ${missing.join(", ")}`);
  return Object.freeze({ workspaceId, releaseSha, rollbackRef, proofs });
}

function storedProofs(record) {
  const validated = validateWorkspaceEvidence(record);
  return { ...validated.proofs, rollback: { ref: validated.rollbackRef, releaseSha: validated.releaseSha } };
}

function storedProofsComplete(proofs, releaseSha) {
  if (!proofs?.rollback?.ref || proofs.rollback.releaseSha !== releaseSha) return false;
  return REQUIRED_PROOFS.every(key => {
    const proof = proofs[key];
    return proof?.state === "verified" && Boolean(proof.evidenceId) && proof.releaseSha === releaseSha;
  });
}

module.exports = Object.freeze({ REQUIRED_PROOFS, validateWorkspaceEvidence, storedProofs, storedProofsComplete });
