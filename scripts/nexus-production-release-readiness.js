#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REQUIRED_RELEASE_COMPONENTS = Object.freeze([
  "taskEngine", "semanticMemory", "consentAudit", "offlineSync", "identity",
  "observability", "database", "worker", "tools", "delivery", "testing",
  "operations", "objectStorage", "security"
]);

function validateReleaseProof({ proof, expectedSha }) {
  if (!expectedSha || !/^[0-9a-f]{40}$/.test(expectedSha)) {
    throw new Error("An exact 40-character release SHA is required.");
  }
  if (proof?.ok !== true || proof.releaseSha !== expectedSha) {
    throw new Error("Production proof is not bound to the exact release SHA.");
  }
  const names = new Set((proof.components || []).map(item => item.name));
  const missing = REQUIRED_RELEASE_COMPONENTS.filter(name => !names.has(name));
  if (missing.length) {
    throw new Error(`Production release evidence is incomplete: ${missing.join(", ")}.`);
  }
  return {
    passed: true,
    releaseSha: expectedSha,
    requiredComponents: REQUIRED_RELEASE_COMPONENTS.length,
    recordedComponents: names.size,
    checkedAt: new Date().toISOString()
  };
}

function run(env = process.env) {
  const proofPath = env.NEXUS_PROOF_FILE || path.join("output", "nexus-production-proof.json");
  const output = env.NEXUS_RELEASE_READINESS_OUTPUT || path.join("output", `nexus-production-release-pass-${env.NEXUS_PASS_NUMBER || "1"}.json`);
  const proof = JSON.parse(fs.readFileSync(proofPath, "utf8"));
  const report = validateReleaseProof({ proof, expectedSha: env.EXPECTED_RELEASE_SHA });
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, `${JSON.stringify(report, null, 2)}\n`);
  console.log(JSON.stringify(report, null, 2));
  return report;
}

if (require.main === module) {
  try { run(); } catch (error) { console.error(error.message); process.exit(1); }
}

module.exports = Object.freeze({ REQUIRED_RELEASE_COMPONENTS, run, validateReleaseProof });
