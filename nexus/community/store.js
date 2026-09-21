"use strict";

const { createId } = require("../contracts/identifiers.js");

// Storage for the community desk (see desk.js), on the memory table that already exists (no new schema), all inside one tenant:
//   purpose "community_reports"  { kind: "report", number, text, category, status, reporter, day, note? }   principal = the reporter
//   purpose "community_notices"  { kind: "announcement", text, day, by, recipients, sentAt }                principal = the sender
//                                { kind: "pending", text, expiresAt }                                        principal = the staff member preparing it
//   purpose "community_optout"   { kind: "optout" }                                                          principal = the person who opted out
// Reports get the next number in their community. Removing anything is a soft delete.
const PLACEHOLDER_VECTOR = `[1${",0".repeat(1535)}]`;

class CommunityRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }

  async insert({ tenantId, userId, purpose, content, sensitivity = "internal" }) {
    const memoryId = createId("memory");
    await this.db.query(`insert into nexus_memory_items
      (memory_id,tenant_id,principal_id,memory_class,purpose,content,searchable_text,embedding,embedding_model,provenance,importance,confidence,verification_state,sensitivity)
      values ($1,$2,$3,'domain',$4,$5,$6,$7::vector,'none',$8,0.5,0.9,'user_confirmed',$9)`,
    [memoryId, tenantId, userId, purpose, content, `${content.kind}: ${String(content.text || "").slice(0, 80)}`, PLACEHOLDER_VECTOR, { source: "community-desk", capturedAt: new Date().toISOString() }, sensitivity]);
    return memoryId;
  }
  async select({ tenantId, userId = null, purpose, kind, limit = 500 }) {
    const result = await this.db.query(`select memory_id,principal_id,content from nexus_memory_items
      where tenant_id=$1 and ($2::text is null or principal_id::text=$2::text) and memory_class='domain' and purpose=$3 and deleted_at is null and content->>'kind'=$4
      order by created_at desc, memory_id desc limit $5`, [tenantId, userId, purpose, kind, Math.min(Math.max(Number(limit) || 500, 1), 2000)]);
    return (result.rows || result).map(row => ({ memoryId: row.memory_id, userId: row.principal_id, content: row.content }));
  }
  async softDelete({ tenantId, memoryId, purpose }) {
    const result = await this.db.query(`update nexus_memory_items set deleted_at=now(),updated_at=now()
      where tenant_id=$1 and memory_id=$2 and purpose=$3 and deleted_at is null returning memory_id`, [tenantId, memoryId, purpose]);
    return Boolean((result.rows || result)[0]);
  }

  // ---- reports ----
  async addReport({ tenantId, userId, content }) {
    const result = await this.db.query(`select coalesce(max((content->>'number')::int),0) as n from nexus_memory_items
      where tenant_id=$1 and purpose='community_reports' and content->>'kind'='report'`, [tenantId]);
    const number = Number((result.rows || result)[0]?.n || 0) + 1;
    await this.insert({ tenantId, userId, purpose: "community_reports", content: { ...content, number }, sensitivity: "sensitive" });
    return number;
  }
  // A person's own reports, or (no userId) every report in the community, newest first.
  listReports({ tenantId, userId = null, limit = 500 }) { return this.select({ tenantId, userId, purpose: "community_reports", kind: "report", limit }); }
  async getReport({ tenantId, number }) {
    const result = await this.db.query(`select memory_id,principal_id,content from nexus_memory_items
      where tenant_id=$1 and purpose='community_reports' and deleted_at is null and content->>'kind'='report' and (content->>'number')::int=$2 limit 1`, [tenantId, number]);
    const row = (result.rows || result)[0];
    return row ? { memoryId: row.memory_id, userId: row.principal_id, content: row.content } : null;
  }
  async updateReport({ tenantId, memoryId, content }) {
    const result = await this.db.query(`update nexus_memory_items set content=$3,updated_at=now()
      where tenant_id=$1 and memory_id=$2 and purpose='community_reports' and deleted_at is null returning memory_id`, [tenantId, memoryId, content]);
    return Boolean((result.rows || result)[0]);
  }

  // ---- announcements ----
  addAnnouncement({ tenantId, userId, content }) { return this.insert({ tenantId, userId, purpose: "community_notices", content }); }
  listAnnouncements({ tenantId, limit = 20 }) { return this.select({ tenantId, purpose: "community_notices", kind: "announcement", limit }); }
  async setPending({ tenantId, userId, content }) { await this.clearPending({ tenantId, userId }); await this.insert({ tenantId, userId, purpose: "community_notices", content }); }
  async getPending({ tenantId, userId }) { return (await this.select({ tenantId, userId, purpose: "community_notices", kind: "pending", limit: 1 }))[0] || null; }
  async clearPending({ tenantId, userId }) {
    const rows = await this.select({ tenantId, userId, purpose: "community_notices", kind: "pending", limit: 5 });
    for (const row of rows) await this.softDelete({ tenantId, memoryId: row.memoryId, purpose: "community_notices" });
    return rows.length > 0;
  }
  // People in this community whose devices can receive a push. Only this tenant's devices are ever read.
  async pushRecipients({ tenantId, limit = 5000 }) {
    const result = await this.db.query(`select distinct user_id from nexus_devices
      where tenant_id=$1 and state='active' and push_state='registered' and push_endpoint is not null and push_key_ciphertext is not null limit $2`, [tenantId, Math.min(Math.max(Number(limit) || 5000, 1), 5000)]);
    return (result.rows || result).map(row => String(row.user_id));
  }

  // ---- opting out of announcements ----
  async optOuts({ tenantId }) { return (await this.select({ tenantId, purpose: "community_optout", kind: "optout", limit: 2000 })).map(row => String(row.userId)); }
  async setOptOut({ tenantId, userId, value }) {
    const existing = await this.select({ tenantId, userId, purpose: "community_optout", kind: "optout", limit: 5 });
    if (value && !existing.length) await this.insert({ tenantId, userId, purpose: "community_optout", content: { kind: "optout", text: "opted out" } });
    if (!value) for (const row of existing) await this.softDelete({ tenantId, memoryId: row.memoryId, purpose: "community_optout" });
  }
}

module.exports = Object.freeze({ CommunityRepository });
