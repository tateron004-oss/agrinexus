"use strict";

class WorkspaceStateRepository {
  constructor(records) {
    if (!records?.create || !records?.list || !records?.update) {
      throw new Error("The durable record repository is required.");
    }
    this.records = records;
  }

  async stage({ tenantId, ownerId, taskId, outcome }) {
    if (!tenantId || !ownerId || !taskId || !outcome?.workspace) {
      throw new Error("Tenant, owner, task, and typed workspace outcome are required.");
    }
    const existing = await this.current({ tenantId, taskId });
    const data = snapshot(outcome, { lifecycle: "render_required", renderVerified: false });
    if (existing) {
      return this.records.update({ tenantId, recordId: existing.record_id, expectedVersion: existing.version,
        actorId: ownerId, data, provenance: provenance(outcome, "workspace.render_required") });
    }
    return this.records.create({ tenantId, ownerId, taskId, workspaceId: outcome.application,
      recordType: "authoritative-workspace-state", classification: "standard", state: "active", data,
      provenance: provenance(outcome, "workspace.render_required") });
  }

  async acknowledge({ tenantId, actorId, taskId, receipt }) {
    const existing = await this.current({ tenantId, taskId });
    if (!existing) {
      const error = new Error(`No durable workspace state exists for task ${taskId}.`);
      error.code = "workspace_state_missing"; error.status = 409; throw error;
    }
    if (receipt?.rendered !== true || (receipt.visible !== true && receipt.audible !== true)) {
      const error = new Error("A visible or audible renderer receipt is required.");
      error.code = "workspace_render_unverified"; error.status = 422; throw error;
    }
    const data = Object.freeze({ ...existing.data, lifecycle: "completed", completed: true,
      verification: Object.freeze({ ...existing.data.verification, renderVerified: true }),
      rendererReceipt: Object.freeze({ rendered: true, visible: receipt.visible === true,
        audible: receipt.audible === true, evidence: receipt.evidence || {},
        observedAt: receipt.observedAt || new Date().toISOString() }) });
    return this.records.update({ tenantId, recordId: existing.record_id, expectedVersion: existing.version,
      actorId, data, provenance: { ...existing.provenance, eventType: "workspace.render_verified",
        commandId: existing.data.commandId, correlationId: existing.data.correlationId } });
  }

  async current({ tenantId, taskId }) {
    const records = await this.records.list({ tenantId, recordType: "authoritative-workspace-state", limit: 200 });
    return records.find(record => record.task_id === taskId) || null;
  }
}

function snapshot(outcome, patch) {
  return Object.freeze({ ...outcome, ...patch,
    verification: Object.freeze({ ...outcome.verification, renderVerified: patch.renderVerified === true }) });
}
function provenance(outcome, eventType) {
  return Object.freeze({ source: "authoritative-runtime", eventType,
    commandId: outcome.commandId, correlationId: outcome.correlationId,
    schema: outcome.schema });
}
module.exports = Object.freeze({ WorkspaceStateRepository });
