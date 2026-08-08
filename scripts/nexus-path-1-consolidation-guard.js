"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");
const { WORKSPACES } = require("../nexus/compat/workspace-migration-registry");

const root = path.resolve(__dirname, "..");
const policy = JSON.parse(fs.readFileSync(path.join(root, ".github/nexus-path-1-consolidation.json"), "utf8"));
const protectedManifest = JSON.parse(fs.readFileSync(path.join(root, policy.protectedManifest), "utf8"));

assert.equal(policy.strategy, "migrate-prove-disable-observe-retain");
assert.equal(policy.cutoverPolicy.mode, "additive-only");
assert.equal(policy.cutoverPolicy.removalAuthorized, false);
assert.equal(policy.cutoverPolicy.legacyWriteFallbackAllowed, false);
assert.equal(policy.cutoverPolicy.rollbackRequired, true);
assert.equal(policy.cutoverPolicy.physicalVoiceCertificationRequired, true);
assert.equal(policy.cutoverPolicy.requiredProductionStabilityPasses, 3);

for (const [kind, state] of Object.entries(policy.deletionPolicy)) {
  if (kind === "separateOwnerAuthorizationRequired") continue;
  assert.equal(state, "prohibited", `${kind} deletion must remain prohibited`);
}
assert.equal(policy.deletionPolicy.separateOwnerAuthorizationRequired, true);
assert.deepEqual([...policy.workspaces].sort(), [...WORKSPACES].sort(), "ledger must cover every migration workspace");
assert.equal(Object.keys(protectedManifest.protectedFiles || {}).length, 13, "protected baseline must remain complete");

const base = process.env.NEXUS_CONSOLIDATION_BASE_REF || "origin/main";
let deleted = "";
try {
  deleted = execFileSync("git", ["diff", "--name-only", "--diff-filter=D", `${base}...HEAD`], {
    cwd: root,
    encoding: "utf8"
  }).trim();
} catch (error) {
  throw new Error(`Unable to compare Path 1 changes with ${base}: ${error.message}`);
}
assert.equal(deleted, "", `Path 1 does not authorize deleted files:\n${deleted}`);

console.log(`NEXUS PATH 1 CONSOLIDATION: PASS — ${WORKSPACES.length} workspaces inventoried; deletion prohibited.`);
