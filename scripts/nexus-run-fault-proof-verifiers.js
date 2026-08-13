#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const { FAULT_CONTRACTS, validateFaultClosure } = require("../nexus/acceptance/fault-register.js");
const { FAULT_VERIFIERS } = require("../nexus/acceptance/fault-verifier-registry.js");

function required(value, label) { if (!value) throw new Error(label + " is required."); return value; }
function slug(value) { return String(value).replace(/[^a-zA-Z0-9_.-]+/g, "-"); }

function executeNodeTest(binding, options = {}) {
  const result = spawnSync(process.execPath,
    ["--test", "--test-name-pattern", binding.testName, binding.file],
    { cwd: options.cwd || process.cwd(), encoding: "utf8", env: { ...process.env, ...(options.env || {}) } });
  const output = String(result.stdout || "") + "\n" + String(result.stderr || "");
  const namedAssertionRan = output.includes(" - " + binding.testName);
  const passedAssertions = Number((output.match(/# pass (\d+)/) || [])[1] || 0);
  return {
    passed: result.status === 0 && namedAssertionRan && passedAssertions > 0,
    exitCode: result.status, namedAssertionRan, passedAssertions,
    command: [process.execPath, "--test", "--test-name-pattern", binding.testName, binding.file],
    output: output.slice(-4000)
  };
}

function validExternalProof(value, contract, binding, releaseSha) {
  return value && value.releaseSha === releaseSha && value.verifierId === contract.verifierId &&
    value.method === contract.proofType && value.passed === true &&
    value.observation && value.observation.matched === true &&
    value.observation.expected === binding.expected &&
    Object.prototype.hasOwnProperty.call(value.observation, "actual") &&
    Number.isFinite(Date.parse(value.observedAt)) && value.proofId && value.executionId;
}

function closure(contract, binding, releaseSha, proof) {
  return {
    fault: contract.fault, status: "closed", releaseSha,
    verifierId: contract.verifierId, proofType: contract.proofType,
    implementation: {
      owner: contract.owner,
      contract: binding.expected,
      location: binding.kind === "node-test" ? binding.file + "#" + binding.testName : binding.evidenceKey
    },
    tests: [contract.verifierId], proofs: [proof]
  };
}

function runFaultVerifiers(input, options = {}) {
  const releaseSha = required(input.releaseSha, "releaseSha");
  if (!/^[0-9a-f]{40}$/.test(releaseSha)) throw new Error("releaseSha must be an exact 40-character SHA.");
  const observedAt = options.observedAt || new Date().toISOString();
  const executionRoot = options.executionId || "fault-verifiers-" + Date.now();
  const execute = options.executeNodeTest || executeNodeTest;
  const externalProofs = input.externalProofs || {};
  const evidence = []; const open = []; const results = [];

  for (const contract of FAULT_CONTRACTS) {
    const binding = FAULT_VERIFIERS[contract.fault];
    if (!binding) { open.push({ fault: contract.fault, reason: "verifier_not_registered" }); continue; }
    if (binding.kind === "node-test") {
      const result = execute(binding, options);
      results.push({ fault: contract.fault, binding, result });
      if (!result.passed) { open.push({ fault: contract.fault, reason: "node_test_failed", result }); continue; }
      evidence.push(closure(contract, binding, releaseSha, {
        proofId: slug(contract.fault) + "-" + slug(executionRoot),
        executionId: executionRoot + ":" + contract.verifierId,
        verifierId: contract.verifierId, method: contract.proofType, releaseSha,
        passed: true, observedAt,
        observation: { expected: binding.expected,
          actual: "named assertion passed: " + binding.testName, matched: true },
        command: result.command
      }));
      continue;
    }
    const supplied = externalProofs[binding.evidenceKey];
    if (!validExternalProof(supplied, contract, binding, releaseSha)) {
      open.push({ fault: contract.fault, reason: "exact_external_proof_missing", evidenceKey: binding.evidenceKey });
      continue;
    }
    evidence.push(closure(contract, binding, releaseSha, supplied));
  }

  let closed = false;
  if (open.length === 0) {
    validateFaultClosure({ releaseSha, evidence });
    closed = true;
  }
  return { schema: "nexus.fault-verifier-report.v1", releaseSha, closed,
    required: FAULT_CONTRACTS.length, proven: evidence.length, open, evidence, results, observedAt };
}

function run(env = process.env) {
  const releaseSha = required(env.EXPECTED_RELEASE_SHA, "EXPECTED_RELEASE_SHA");
  const externalProofs = env.NEXUS_EXTERNAL_FAULT_PROOFS
    ? JSON.parse(fs.readFileSync(env.NEXUS_EXTERNAL_FAULT_PROOFS, "utf8")) : {};
  const report = runFaultVerifiers({ releaseSha, externalProofs });
  const output = env.NEXUS_FAULT_PROOF_FILE || path.join("output", "nexus-fault-proof-report.json");
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ releaseSha, closed: report.closed, proven: report.proven,
    required: report.required, open: report.open.map(item => item.fault), output }, null, 2));
  if (!report.closed && env.NEXUS_FAULT_ALLOW_OPEN !== "true") throw new Error("Fault proof remains open: " + report.proven + "/" + report.required + " verified.");
  return report;
}

if (require.main === module) {
  try { run(); } catch (error) { console.error(error.message); process.exit(1); }
}
module.exports = Object.freeze({ executeNodeTest, runFaultVerifiers, run });
