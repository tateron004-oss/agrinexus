"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const map = require("../../.github/nexus-path-1-dependency-map.json");

test("dependency mapping is inventory-only and cannot authorize cutover or removal", () => {
  assert.equal(map.mode, "inventory-only");
  assert.equal(map.runtimeMutationAuthorized, false);
  assert.equal(map.removalAuthorized, false);
});

test("known topology mismatches remain explicit stop conditions", () => {
  assert.equal(map.workspaces["chronic-care"].manifestId, null);
  assert.match(map.workspaces["chronic-care"].gap, /must be resolved additively/);
  assert.equal(map.workspaces["music-media"].legacyAlias, "music");
  assert.equal(map.workspaces["offline-queue"].legacyAlias, "offline");
  assert.match(map.workspaces.reminders.gap, /durable port/);
});
