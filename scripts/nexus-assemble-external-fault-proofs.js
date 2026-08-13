#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { FAULT_CONTRACTS } = require("../nexus/acceptance/fault-register.js");
const { FAULT_VERIFIERS } = require("../nexus/acceptance/fault-verifier-registry.js");

const contractByFault = new Map(FAULT_CONTRACTS.map(item => [item.fault, item]));
function required(value, label) { if (!value) throw new Error(label + " is required."); return value; }
function exactSha(value) { return /^[0-9a-f]{40}$/.test(String(value || "")); }

function makeProof(fault, releaseSha, executionId, observedAt, actual, facts) {
  const contract = contractByFault.get(fault);
  const binding = FAULT_VERIFIERS[fault];
  if (!contract || binding?.kind !== "external-proof") throw new Error("External fault binding is missing: " + fault);
  return {
    proofId: fault + "-" + executionId,
    executionId: executionId + ":" + contract.verifierId,
    releaseSha, verifierId: contract.verifierId, method: contract.proofType,
    passed: true, observedAt,
    observation: { expected: binding.expected, actual, matched: true },
    facts
  };
}

function assembleExternalFaultProofs(input) {
  const releaseSha = required(input.releaseSha, "releaseSha");
  if (!exactSha(releaseSha)) throw new Error("releaseSha must be an exact 40-character SHA.");
  const probes = input.probes || {};
  const blackBox = input.blackBox || {};
  if (probes.releaseSha !== releaseSha || blackBox.releaseSha !== releaseSha) {
    throw new Error("Probe and black-box evidence must match the exact release SHA.");
  }
  const observedAt = input.observedAt || new Date().toISOString();
  const executionId = required(input.executionId, "executionId");
  const component = name => (probes.componentProbes || []).find(item => item.component === name);
  const semantic = component("semanticMemory");
  const database = component("database");
  const tools = component("tools");
  const runtimeFacts = [database, tools].every(item => item?.passed === true && item.releaseSha === releaseSha);
  const capabilities = probes.capabilityProbes || [];
  const visibleMatrix = capabilities.length === 17 && capabilities.every(item =>
    item.releaseSha === releaseSha && item.production === true && item.simulated === false &&
    item.passed === true && item.rendered === true && item.visible === true);
  const browser = probes.browserProbe || {};
  const proofs = {};

  if (semantic?.passed === true && semantic.releaseSha === releaseSha &&
      semantic.facts?.restartPersistent === true && semantic.facts?.cleanupVerified === true) {
    const key = FAULT_VERIFIERS["authoritative-persistence"].evidenceKey;
    proofs[key] = makeProof("authoritative-persistence", releaseSha, executionId, observedAt,
      "semantic memory survived repository reconstruction and was reread before cleanup",
      { component: "semanticMemory", restartPersistent: true, cleanupVerified: true, receipts: semantic.receipts });
  }

  if (blackBox.passed === true && runtimeFacts && input.candidateResult === "success") {
    const key = FAULT_VERIFIERS["production-equivalent-integration"].evidenceKey;
    proofs[key] = makeProof("production-equivalent-integration", releaseSha, executionId, observedAt,
      "exact-SHA black-box boot, PostgreSQL runtime, and provider contract passed",
      { candidateResult: input.candidateResult, database: database.facts, tools: tools.facts, blackBox });
  }

  if (blackBox.passed === true && input.candidateResult === "success" && input.protectedChecksPassed === true) {
    const key = FAULT_VERIFIERS["prepublication-gauntlet"].evidenceKey;
    proofs[key] = makeProof("prepublication-gauntlet", releaseSha, executionId, observedAt,
      "protected checks and the exact candidate black-box qualification passed before release",
      { candidateResult: input.candidateResult, protectedChecksPassed: true, blackBoxCheckedAt: blackBox.checkedAt });
  }

  if (probes.source === "unified-release-live-probe" && runtimeFacts &&
      probes.componentProbes.every(item => item.production === true && item.simulated === false)) {
    const key = FAULT_VERIFIERS["runtime-not-source-evidence"].evidenceKey;
    proofs[key] = makeProof("runtime-not-source-evidence", releaseSha, executionId, observedAt,
      "running exact-SHA runtime returned genuine production component receipts",
      { source: probes.source, components: probes.componentProbes.length });
  }

  if (visibleMatrix && browser.releaseSha === releaseSha && browser.visibleAuthenticatedLogin === true) {
    const key = FAULT_VERIFIERS["capability-verification"].evidenceKey;
    proofs[key] = makeProof("capability-verification", releaseSha, executionId, observedAt,
      "17 supported capabilities rendered visible exact-SHA outcomes after authenticated UI ingress",
      { capabilities: capabilities.length, visibleAuthenticatedLogin: true, visibleIngress: browser.visibleIngress });
  }

  if (input.pipelineOwner === "github-actions" && input.pipelineRunId && input.candidateResult === "success") {
    const key = FAULT_VERIFIERS["developer-owned-acceptance"].evidenceKey;
    proofs[key] = makeProof("developer-owned-acceptance", releaseSha, executionId, observedAt,
      "GitHub Actions executed the candidate-qualified automated production acceptance workflow",
      { pipelineOwner: input.pipelineOwner, pipelineRunId: String(input.pipelineRunId), candidateResult: input.candidateResult });
  }

  return proofs;
}

function run(env = process.env) {
  const releaseSha = required(env.EXPECTED_RELEASE_SHA, "EXPECTED_RELEASE_SHA");
  const probes = JSON.parse(fs.readFileSync(required(env.NEXUS_PROBE_FILE, "NEXUS_PROBE_FILE"), "utf8"));
  const blackBox = JSON.parse(fs.readFileSync(required(env.NEXUS_BLACK_BOX_FILE, "NEXUS_BLACK_BOX_FILE"), "utf8"));
  const proofs = assembleExternalFaultProofs({
    releaseSha, probes, blackBox,
    candidateResult: required(env.NEXUS_CANDIDATE_RESULT, "NEXUS_CANDIDATE_RESULT"),
    protectedChecksPassed: env.NEXUS_PROTECTED_CHECKS_PASSED === "true",
    pipelineOwner: env.NEXUS_PIPELINE_OWNER,
    pipelineRunId: env.NEXUS_PIPELINE_RUN_ID,
    executionId: required(env.NEXUS_FAULT_EXECUTION_ID, "NEXUS_FAULT_EXECUTION_ID")
  });
  const output = env.NEXUS_EXTERNAL_FAULT_PROOFS || path.join("output", "nexus-external-fault-proofs.json");
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, JSON.stringify(proofs, null, 2));
  console.log(JSON.stringify({ releaseSha, proofCount: Object.keys(proofs).length,
    evidenceKeys: Object.keys(proofs), output }, null, 2));
  return proofs;
}

if (require.main === module) {
  try { run(); } catch (error) { console.error(error.message); process.exit(1); }
}
module.exports = Object.freeze({ assembleExternalFaultProofs, makeProof, run });
