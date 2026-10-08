"use strict";

// An in-memory stand-in for the record store (nexus/data/record-repository.js), with the same calls and the same scoping, so the health-readings conversation can be exercised end to end
// without a database. A test or a local development server opts in with NEXUS_TEST_READINGS_STORE=memory (ignored when NODE_ENV is production). Nothing in it is ever persisted.

function createMemoryRecords() {
  const rows = []; let counter = 0;
  const live = row => !row.deleted_at;
  return {
    rows,
    async create(item) {
      if (!item.tenantId || !item.ownerId || !item.workspaceId || !item.recordType || !item.classification) throw new Error("Record tenant, owner, workspace, type, and classification are required.");
      counter += 1;
      const row = { record_id: item.recordId || `rec_mem_${counter}`, tenant_id: item.tenantId, subject_id: item.subjectId || null, owner_id: item.ownerId, task_id: item.taskId || null, workspace_id: item.workspaceId,
        record_type: item.recordType, classification: item.classification, state: item.state || "active", data: JSON.parse(JSON.stringify(item.data || {})), provenance: item.provenance || {}, version: 1,
        created_at: item.createdAt ? new Date(item.createdAt) : new Date(Date.now() + counter), updated_at: new Date(Date.now() + counter), deleted_at: null };
      rows.push(row); return row;
    },
    async list({ tenantId, subjectId, ownerId, workspaceId, recordType, limit = 100 }) {
      return rows.filter(row => live(row) && row.tenant_id === tenantId && (!subjectId || row.subject_id === subjectId) && (!ownerId || row.owner_id === ownerId)
        && (!workspaceId || row.workspace_id === workspaceId) && (!recordType || row.record_type === recordType))
        .sort((a, b) => b.updated_at - a.updated_at).slice(0, Math.min(Math.max(limit, 1), 200));
    },
    async update({ tenantId, recordId, expectedVersion, data, provenance = {} }) {
      const row = rows.find(item => live(item) && item.tenant_id === tenantId && item.record_id === recordId && item.version === expectedVersion);
      if (!row) throw new Error("Record version conflict or record unavailable.");
      row.data = JSON.parse(JSON.stringify(data)); row.provenance = provenance; row.version += 1; row.updated_at = new Date(); return row;
    },
    // Like the real one, scoped by tenant only: the caller is responsible for only passing ids it just listed for the right person.
    async remove({ tenantId, recordId }) {
      const row = rows.find(item => live(item) && item.tenant_id === tenantId && item.record_id === recordId);
      if (!row) return false;
      row.state = "deleted"; row.data = {}; row.deleted_at = new Date(); return true;
    }
  };
}

module.exports = Object.freeze({ createMemoryRecords });
