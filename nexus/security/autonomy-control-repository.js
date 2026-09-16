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
    const existing = await this.current({ tenantId });
    const data = { paused: Boolean(paused), reason: String(reason || ""), changedBy: actorId, changedAt: new Date().toISOString() };
    const provenance = { source: "autonomy-control", eventType: "autonomy.pause_changed" };
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
