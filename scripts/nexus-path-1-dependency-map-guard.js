"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { WORKSPACES } = require("../nexus/compat/workspace-migration-registry");
const { defaultApplicationManifests } = require("../nexus/apps/default-manifests");

const root = path.resolve(__dirname, "..");
const map = JSON.parse(fs.readFileSync(path.join(root, ".github/nexus-path-1-dependency-map.json"), "utf8"));
const mapped = Object.keys(map.workspaces);
const manifests = new Map(defaultApplicationManifests().map(item => [item.applicationId, item]));

assert.equal(map.mode, "inventory-only");
assert.equal(map.runtimeMutationAuthorized, false);
assert.equal(map.removalAuthorized, false);
assert.deepEqual([...mapped].sort(), [...WORKSPACES].sort(), "dependency map must cover every migration workspace");

for (const dependency of Object.values(map.shared)) {
  assert.equal(fs.existsSync(path.join(root, dependency)), true, `mapped dependency does not exist: ${dependency}`);
}
for (const [workspaceId, entry] of Object.entries(map.workspaces)) {
  assert.ok(entry.browserRoute, `${workspaceId} must identify its protected/browser route`);
  if (!entry.manifestId) {
    assert.ok(entry.gap, `${workspaceId} without a manifest must retain an explicit unresolved gap`);
    continue;
  }
  const manifest = manifests.get(entry.manifestId);
  assert.ok(manifest, `${workspaceId} references a missing manifest`);
  assert.deepEqual(entry.capabilities, manifest.capabilities, `${workspaceId} capability inventory drifted`);
}

const unmapped = [...manifests.keys()].filter(id => !mapped.includes(id));
assert.deepEqual(unmapped.sort(), [...map.unmappedAuthoritativeApplications].sort());
assert.ok(map.findings.length >= 4, "known dependency gaps must remain visible");

console.log(`NEXUS PATH 1 DEPENDENCY MAP: PASS — ${mapped.length} workspaces mapped; ${map.findings.length} findings retained.`);
