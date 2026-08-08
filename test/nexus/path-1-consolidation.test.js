"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { WORKSPACES, createWorkspaceMigrationRegistry } = require("../../nexus/compat/workspace-migration-registry");

const root = path.resolve(__dirname, "../..");
const policy = JSON.parse(fs.readFileSync(path.join(root, ".github/nexus-path-1-consolidation.json"), "utf8"));

test("Path 1 is additive, reversible, and covers every workspace", () => {
  assert.equal(policy.cutoverPolicy.mode, "additive-only");
  assert.equal(policy.cutoverPolicy.rollbackRequired, true);
  assert.equal(policy.cutoverPolicy.removalAuthorized, false);
  assert.deepEqual([...policy.workspaces].sort(), [...WORKSPACES].sort());
});

test("legacy workspace paths cannot write and cannot cut over without all proofs", () => {
  const migrations = createWorkspaceMigrationRegistry();
  for (const entry of migrations.list()) {
    assert.equal(entry.state, "legacy");
    assert.equal(entry.legacyReadAllowed, true);
    assert.equal(entry.legacyWriteAllowed, false);
    assert.throws(() => migrations.migrated(entry.workspaceId, ["contract"]), /missing migration proofs/);
  }
});

test("the ledger prohibits deletion in every governed storage and code category", () => {
  for (const [kind, state] of Object.entries(policy.deletionPolicy)) {
    if (kind === "separateOwnerAuthorizationRequired") continue;
    assert.equal(state, "prohibited", kind);
  }
  assert.equal(policy.deletionPolicy.separateOwnerAuthorizationRequired, true);
});
