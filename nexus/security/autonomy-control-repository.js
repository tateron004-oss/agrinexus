"use strict";

// A global (per-tenant) kill switch for autonomous task creation, following
// the same pattern nexus/apps/workspace-state-repository.js already
// establishes for durable app state: a thin wrapper over RecordRepository's
// existing nexus_records table (its own workspaceId, no new migration)
// rather than a bespoke settings table. Gates AuthoritativeTaskEngine.create()
// when autonomous:true only -- a live-conversation task the user asked for
// directly is never affected, per the plan's own scoping for this switch.
const WORKSPACE_ID = "autonomy-control";
const RECORD_TYPE = "autonomy_pause_state";

class AutonomyControlRepository {
  constructor(records) {
    if (!records?.create || !records?.list || !records?.update) {
      throw new Error("The durable record repository is required.");
    }
    this.records = records;
  }

  async isPaused({ tenantId }) {
    const state = await this.current({ tenantId });
    return Boolean(state?.data?.paused);
  }

  async status({ tenantId }) {
    const state = await this.current({ tenantId });
    return state?.data || { paused: false };
  }

  async setPaused({ tenantId, actorId, paused, reason = "" }) {
    const data = { paused: Boolean(paused), reason: String(reason || ""), changedBy: actorId, changedAt: new Date().toISOString() };
    const provenance = { source: "autonomy-control", eventType: "autonomy.pause_changed" };
    // Found live (fresh-module audit): the old read-then-branch below had no lock on the create path --
    // two concurrent FIRST-time setPaused() calls for the same tenant (a double-submit on the admin pause
    // toggle, or two admins racing) could both see no existing row and both create one, leaving two
    // autonomy_pause_state rows whose "current" read could non-deterministically flip between them.
    // upsertSingleton (when available) closes this with a real advisory-lock-guarded read-check-write;
    // falls back to the old unlocked path otherwise, the same feature-detection convention this session
    // uses for every optional-capability rollout so hand-rolled fakes across the test suite keep working.
    if (this.records.upsertSingleton) {
      return this.records.upsertSingleton({ tenantId, ownerId: actorId, workspaceId: WORKSPACE_ID,
        recordType: RECORD_TYPE, classification: "standard", data, provenance, actorId });
    }
    const existing = await this.current({ tenantId });
    if (existing) {
      return this.records.update({ tenantId, recordId: existing.record_id, expectedVersion: existing.version,
        actorId, data, provenance });
    }
    return this.records.create({ tenantId, ownerId: actorId, workspaceId: WORKSPACE_ID,
      recordType: RECORD_TYPE, classification: "standard", data, provenance });
  }

  async current({ tenantId }) {
    const records = await this.records.list({ tenantId, workspaceId: WORKSPACE_ID, recordType: RECORD_TYPE, limit: 1 });
    return records[0] || null;
  }
}

module.exports = Object.freeze({ AutonomyControlRepository, WORKSPACE_ID, RECORD_TYPE });
