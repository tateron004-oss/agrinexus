const WORKSPACES = Object.freeze([
  "agriculture", "health", "chronic-care", "telehealth", "mobile-clinic", "pharmacy",
  "learning", "workforce", "marketplace", "maps", "music-media", "documents", "reminders",
  "offline-queue", "live-knowledge", "provider-contact"
]);

function createWorkspaceMigrationRegistry() {
  const entries = new Map(WORKSPACES.map(id => [id, Object.freeze({ workspaceId: id,
    state: "legacy", authoritativeTaskEngine: false, legacyReadAllowed: true, legacyWriteAllowed: false,
    requiredProofs: Object.freeze(["contract", "tenant-isolation", "durable-write", "receipt", "browser-outcome"])
  })]));
  return Object.freeze({
    get: id => entries.get(id) || null,
    list: () => [...entries.values()],
    migrated(id, proofs) {
      const current = entries.get(id); if (!current) throw new Error(`Unknown workspace: ${id}`);
      const supplied = new Set(proofs || []); const missing = current.requiredProofs.filter(proof => !supplied.has(proof));
      if (missing.length) throw new Error(`Workspace ${id} is missing migration proofs: ${missing.join(", ")}`);
      const updated = Object.freeze({ ...current, state: "authoritative", authoritativeTaskEngine: true,
        legacyWriteAllowed: false, migratedAt: new Date().toISOString() }); entries.set(id, updated); return updated;
    }
  });
}

module.exports = Object.freeze({ WORKSPACES, createWorkspaceMigrationRegistry });
