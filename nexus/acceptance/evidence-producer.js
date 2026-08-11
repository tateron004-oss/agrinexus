"use strict";

const crypto = require("node:crypto");
const { COMPONENTS } = require("./repository.js");
const { REQUIRED_PROOFS, validateWorkspaceEvidence } = require("../apps/workspace-evidence-contract.js");
const { FAULTS, validateFaultClosure } = require("./fault-register.js");
const { CONTRACTS, verifyCapabilityCompletion } = require("../apps/capability-completion-contracts.js");

const COMPONENT_REQUIREMENTS = Object.freeze({
  taskEngine: [], database: [], semanticMemory: ["restartPersistent"], worker: [], tools: [],
  voice: ["physicalEvidence"], documents: ["fullLifecycle"], objectStorage: ["redeployPersistent"],
  identity: ["tenantIsolation"], consentAudit: ["immutableReceipts"], offlineSync: ["conflictRecovery"],
  security: ["criticalFindings"], healthcare: ["expertValidation"], predictive: ["validatedModels"],
  observability: ["alertsReady", "costsReady", "tracesReady"], delivery: ["windowsRunnerRequired"],
  testing: ["exactSha"], operations: []
});

function validSha(value) { return typeof value === "string" && /^[0-9a-f]{40}$/.test(value); }
function evidenceId(releaseSha, subject, kind) {
  return `evd_${crypto.createHash("sha256").update(`${releaseSha}:${subject}:${kind}`).digest("hex").slice(0, 24)}`;
}

function requireExactRelease(record, releaseSha, label) {
  if (!record || record.releaseSha !== releaseSha) throw new Error(`${label} is not bound to the exact release SHA.`);
  if (record.production !== true || record.simulated === true) throw new Error(`${label} is not genuine production evidence.`);
  if (record.passed !== true) throw new Error(`${label} did not pass.`);
  if (!record.observedAt || !Number.isFinite(Date.parse(record.observedAt))) throw new Error(`${label} has no valid observation time.`);
  if (!Array.isArray(record.receipts) || record.receipts.length === 0) throw new Error(`${label} has no production receipts.`);
  return record;
}

function compileComponent(record, releaseSha) {
  if (!COMPONENTS.includes(record?.component)) throw new Error(`Unknown acceptance component: ${record?.component}`);
  requireExactRelease(record, releaseSha, `Component ${record.component}`);
  const facts = record.facts || {};
  for (const key of COMPONENT_REQUIREMENTS[record.component]) {
    const expected = key === "criticalFindings" ? 0 : key === "windowsRunnerRequired" ? false : releaseSha;
    if (key === "exactSha" ? facts[key] !== expected : key === "criticalFindings" || key === "windowsRunnerRequired" ? facts[key] !== expected : facts[key] !== true) {
      throw new Error(`Component ${record.component} is missing required fact ${key}.`);
    }
  }
  return { name: record.component, evidence: { ...facts, evidence: record.receipts,
    evidenceId: evidenceId(releaseSha, record.component, "component"), observedAt: record.observedAt } };
}

function compileWorkspace(record, releaseSha, rollbackRef) {
  requireExactRelease(record, releaseSha, `Workspace ${record?.workspaceId}`);
  const proofs = {};
  for (const key of REQUIRED_PROOFS) {
    const proof = record.proofs?.[key];
    requireExactRelease(proof, releaseSha, `Workspace ${record.workspaceId} proof ${key}`);
    proofs[key] = { state: "verified", releaseSha, evidenceId: evidenceId(releaseSha, record.workspaceId, key),
      observedAt: proof.observedAt, receipts: proof.receipts };
  }
  validateWorkspaceEvidence({ workspaceId: record.workspaceId, proofs, releaseSha, rollbackRef });
  return { workspaceId: record.workspaceId, proofs, rollbackRef };
}

function compileProductionProof({ releaseSha, source, rollbackRef, componentProbes = [], workspaceProbes = [],
  faultProbes = [], capabilityProbes = [] }) {
  if (!validSha(releaseSha)) throw new Error("An exact 40-character release SHA is required.");
  if (!source || !rollbackRef) throw new Error("Evidence source and rollback reference are required.");
  const components = componentProbes.map(record => compileComponent(record, releaseSha));
  const workspaces = workspaceProbes.map(record => compileWorkspace(record, releaseSha, rollbackRef));
  const componentNames = components.map(item => item.name);
  const workspaceNames = workspaces.map(item => item.workspaceId);
  if (new Set(componentNames).size !== componentNames.length || new Set(workspaceNames).size !== workspaceNames.length) throw new Error("Duplicate production evidence subject.");
  const faultEvidence = faultProbes.map(record => {
    requireExactRelease(record, releaseSha, `Fault ${record?.fault}`);
    if (!FAULTS.includes(record.fault) || !record.implementation || !Array.isArray(record.tests) || !record.tests.length) {
      throw new Error(`Fault ${record?.fault || "unknown"} lacks implementation or test evidence.`);
    }
    return { fault: record.fault, status: "closed", releaseSha, implementation: record.implementation,
      tests: record.tests, proofs: record.receipts };
  });
  validateFaultClosure({ releaseSha, evidence: faultEvidence });
  const capabilityEvidence = Object.fromEntries(capabilityProbes.map(record => {
    requireExactRelease(record, releaseSha, `Capability ${record?.application}`);
    const evidence = { ...(record.evidence || {}), rendered: record.rendered, visible: record.visible, audible: record.audible };
    verifyCapabilityCompletion({ application: record.application, evidence, releaseSha });
    return [record.application, evidence];
  }));
  const missingCapabilities = Object.keys(CONTRACTS).filter(application => !capabilityEvidence[application]);
  if (missingCapabilities.length) throw new Error(`Production capability evidence is incomplete: ${missingCapabilities.join(", ")}.`);
  return { ok: true, releaseSha, source, generatedAt: new Date().toISOString(), components, workspaces,
    faultEvidence, capabilityEvidence };
}

module.exports = Object.freeze({ COMPONENT_REQUIREMENTS, compileProductionProof, evidenceId, requireExactRelease });
