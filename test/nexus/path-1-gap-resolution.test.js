"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const { WORKSPACE_TOPOLOGY, resolveWorkspace } = require("../../nexus/apps/workspace-topology.js");
const { durableWorkspacePort } = require("../../nexus/apps/durable-workspace-ports.js");

test("all 15 user workspaces resolve to authoritative manifests without changing protected routes", () => {
  assert.equal(WORKSPACE_TOPOLOGY.length, 15);
  assert.equal(resolveWorkspace("chronic-care").manifestId, "health");
  assert.equal(resolveWorkspace("music").browserRoute, "music");
  assert.equal(resolveWorkspace("offline").workspaceId, "offline-queue");
});

test("reminders and offline queue use durable authoritative ports with no legacy write fallback", () => {
  const reminders = durableWorkspacePort("schedules");
  const offline = durableWorkspacePort("sync");
  assert.equal(reminders.persistence, "nexus_schedules");
  assert.equal(offline.persistence, "nexus_sync_operations");
  assert.equal(reminders.legacyWriteFallback, false);
  assert.equal(offline.legacyWriteFallback, false);
});
