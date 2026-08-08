"use strict";

const PORTS = Object.freeze({
  schedules: Object.freeze({ workspaceId: "reminders", capability: "reminders.schedule",
    method: "POST", path: "/api/nexus/runtime/schedules", repository: "nexus/schedules/repository.js",
    permission: "reminders:write", persistence: "nexus_schedules", worker: "schedules.dispatch",
    legacyWriteFallback: false }),
  sync: Object.freeze({ workspaceId: "offline-queue", capability: "offline.sync",
    method: "POST", path: "/api/nexus/runtime/sync/push", repository: "nexus/sync/repository.js",
    permission: "sync:write", persistence: "nexus_sync_operations", conflictPolicy: "explicit-resolution",
    legacyWriteFallback: false })
});

function durableWorkspacePort(id) { return PORTS[id] || null; }

module.exports = Object.freeze({ PORTS, durableWorkspacePort });
