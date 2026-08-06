"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");

const workflowDir = ".github/workflows";
const files = fs.readdirSync(workflowDir).filter(file => /\.ya?ml$/i.test(file));
const physicalOwners = [];
const manualEntries = [];

for (const file of files) {
  const source = fs.readFileSync(`${workflowDir}/${file}`, "utf8");
  if (/runs-on:\s*(?:\[[^\]]*self-hosted[^\]]*\]|self-hosted)/i.test(source)) physicalOwners.push(file);
  if (/^\s{2}workflow_dispatch:\s*$/m.test(source)) manualEntries.push(file);
}

assert.deepEqual(manualEntries, ["nexus-integrated-certification.yml"], "there must be exactly one certification entry point");
assert.deepEqual(physicalOwners.sort(), [
  "nexus-clean-windows-certification.yml",
  "nexus-integrated-certification.yml",
  "nexus-release-certification-v2.yml"
].sort(), "only the integrated workflow and its non-dispatchable protected compatibility workflows may reference the runner");

for (const file of ["nexus-clean-windows-certification.yml", "nexus-release-certification-v2.yml"]) {
  const source = fs.readFileSync(`${workflowDir}/${file}`, "utf8");
  assert.match(source, /^\s{2}workflow_call:\s*$/m, `${file} must be compatibility-only`);
  assert.doesNotMatch(source, /^\s{2}(?:push|workflow_dispatch):/m, `${file} must not dispatch itself`);
}

const canonical = fs.readFileSync(`${workflowDir}/nexus-integrated-certification.yml`, "utf8");
assert.match(canonical, /group: nexus-integrated-physical-certification\s+cancel-in-progress: true/);
assert.match(canonical, /NEXUS_CANONICAL_PRODUCTION_URL: https:\/\/nexus-genesis-certified\.onrender\.com/);
assert.match(canonical, /nexus-release-certification-controller\.js verify-deployment/);
assert.match(canonical, /nexus-windows-stability-certification\.ps1/);
assert.match(canonical, /NEXUS_STABILITY_RUNS: "3"/);

console.log("Nexus Windows certification orchestration: PASS (one entry point, one physical owner lock)");
