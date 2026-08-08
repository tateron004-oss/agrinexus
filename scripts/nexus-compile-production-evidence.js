#!/usr/bin/env node
"use strict";
const fs = require("node:fs");
const path = require("node:path");
const { compileProductionProof } = require("../nexus/acceptance/evidence-producer.js");

function required(value, label) { if (!value) throw new Error(`${label} is required.`); return value; }
function run(env = process.env) {
  const input = required(env.NEXUS_PROBE_FILE, "NEXUS_PROBE_FILE");
  const output = env.NEXUS_PROOF_FILE || path.join("output", "nexus-production-proof.json");
  const probes = JSON.parse(fs.readFileSync(input, "utf8"));
  const proof = compileProductionProof({ ...probes,
    releaseSha: required(env.EXPECTED_RELEASE_SHA || probes.releaseSha, "EXPECTED_RELEASE_SHA"),
    rollbackRef: required(env.NEXUS_ROLLBACK_REF || probes.rollbackRef, "NEXUS_ROLLBACK_REF") });
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, JSON.stringify(proof, null, 2));
  console.log(JSON.stringify({ ok: true, releaseSha: proof.releaseSha, components: proof.components.length, workspaces: proof.workspaces.length, output }, null, 2));
  return proof;
}
if (require.main === module) { try { run(); } catch (error) { console.error(error.message); process.exit(1); } }
module.exports = Object.freeze({ run });
