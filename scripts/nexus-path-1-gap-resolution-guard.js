"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { defaultApplicationManifests } = require("../nexus/apps/default-manifests.js");
const { WORKSPACES } = require("../nexus/compat/workspace-migration-registry.js");
const { WORKSPACE_TOPOLOGY, resolveWorkspace } = require("../nexus/apps/workspace-topology.js");
const { PORTS } = require("../nexus/apps/durable-workspace-ports.js");

const root = path.resolve(__dirname, "..");
const policy = JSON.parse(fs.readFileSync(path.join(root, ".github/nexus-path-1-gap-resolutions.json"), "utf8"));
const manifests = new Set(defaultApplicationManifests().map(item => item.applicationId));
const adapter = fs.readFileSync(path.join(root, "nexus/compat/server-runtime-adapter.js"), "utf8");

assert.equal(policy.runtimeCutoverAuthorized, false);
assert.equal(policy.removalAuthorized, false);
assert.deepEqual(WORKSPACE_TOPOLOGY.map(item => item.workspaceId), WORKSPACES);
for (const item of WORKSPACE_TOPOLOGY) assert.ok(manifests.has(item.manifestId), `${item.workspaceId} has no authoritative manifest`);
assert.equal(resolveWorkspace("music").workspaceId, "music-media");
assert.equal(resolveWorkspace("offline").workspaceId, "offline-queue");
assert.equal(resolveWorkspace("chronic-care").manifestId, "health");
for (const [name, port] of Object.entries(PORTS)) {
  assert.equal(port.legacyWriteFallback, false);
  assert.ok(fs.existsSync(path.join(root, port.repository)), `${name} repository is missing`);
  assert.ok(adapter.includes(port.path), `${name} authoritative API route is missing`);
}

console.log("NEXUS PATH 1 GAP RESOLUTION: PASS — topology and durable ports are additive and not cut over.");
