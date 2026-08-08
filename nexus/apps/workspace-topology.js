"use strict";

const WORKSPACE_TOPOLOGY = Object.freeze([
  entry("agriculture", "agriculture", "agriculture"),
  entry("health", "health", "health"),
  entry("chronic-care", "health", "health", { sharedManifest: true }),
  entry("telehealth", "telehealth", "telehealth"),
  entry("mobile-clinic", "mobile-clinic", "mobile-clinic"),
  entry("pharmacy", "pharmacy", "pharmacy"),
  entry("learning", "learning", "learning"),
  entry("workforce", "workforce", "workforce"),
  entry("marketplace", "marketplace", "marketplace"),
  entry("maps", "maps", "maps"),
  entry("music-media", "music-media", "music", { aliases: ["music"] }),
  entry("documents", "documents", "documents"),
  entry("reminders", "reminders", "reminders", { durablePort: "schedules" }),
  entry("offline-queue", "offline-queue", "offline", { aliases: ["offline"], durablePort: "sync" }),
  entry("live-knowledge", "live-knowledge", "live-knowledge")
]);

const BY_ID = new Map();
for (const item of WORKSPACE_TOPOLOGY) {
  BY_ID.set(item.workspaceId, item);
  for (const alias of item.aliases) BY_ID.set(alias, item);
}

function entry(workspaceId, manifestId, browserRoute, options = {}) {
  return Object.freeze({ workspaceId, manifestId, browserRoute, aliases: Object.freeze(options.aliases || []),
    sharedManifest: options.sharedManifest === true, durablePort: options.durablePort || null });
}

function resolveWorkspace(id) { return BY_ID.get(String(id || "")) || null; }

module.exports = Object.freeze({ WORKSPACE_TOPOLOGY, resolveWorkspace });
