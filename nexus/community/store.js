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

  async insert({ tenantId, userId, purpose, content, sensitivity = "internal" }, db = this.db) {
    const memoryId = createId("memory");
    await db.query(`insert into nexus_memory_items
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
  // Found live: the number was computed with a plain select-max, then
  // inserted in a separate query -- no transaction, no lock, no unique
  // constraint. Two reports submitted by different citizens in the same
  // tenant close enough together could both read the same max and both be
  // assigned the same number, so a later "close report N" could land on the
  // wrong citizen's problem while the other's identically-numbered report
  // silently never gets touched. A transaction-scoped advisory lock, keyed
  // per tenant, serializes concurrent number allocation for this tenant's
  // reports without needing a real per-tenant counter row or table.
  async addReport({ tenantId, userId, content }) {
    return this.db.transaction(async trx => {
      await trx.query("select pg_advisory_xact_lock(hashtext($1))", [`community_reports:${tenantId}`]);
      const result = await trx.query(`select coalesce(max((content->>'number')::int),0) as n from nexus_memory_items
        where tenant_id=$1 and purpose='community_reports' and content->>'kind'='report'`, [tenantId]);
      const number = Number((result.rows || result)[0]?.n || 0) + 1;
      await this.insert({ tenantId, userId, purpose: "community_reports", content: { ...content, number }, sensitivity: "sensitive" }, trx);
      return number;
    });
  }
  // A person's own reports, or (no userId) every report in the community, newest first.
  listReports({ tenantId, userId = null, limit = 500 }) { return this.select({ tenantId, userId, purpose: "community_reports", kind: "report", limit }); }
  async getReport({ tenantId, number }) {
    const result = await this.db.query(`select memory_id,principal_id,content from nexus_memory_items
      where tenant_id=$1 and purpose='community_reports' and deleted_at is null and content->>'kind'='report' and (content->>'number')::int=$2 limit 1`, [tenantId, number]);
    const row = (result.rows || result)[0];
    return row ? { memoryId: row.memory_id, userId: row.principal_id, content: row.content } : null;
  }
  // Found live (follow-up sweep of the CAS/lost-update bug class closed elsewhere tonight):
  // this was a plain unconditional update with no guard that the report was still in the state
  // the caller read it in, unlike addReport()'s own advisory-lock-guarded numbering right above.
  // Two staff members updating the same report close together could both read the same starting
  // content and each write their own update; whichever lands last silently discards the other's
  // status/note. `expectedStatus` lets the caller require the report's current status to still
  // match what it read before writing, closing the race the same way the rest of the codebase does.
  async updateReport({ tenantId, memoryId, content, expectedStatus }) {
    const params = [tenantId, memoryId, content];
    let sql = `update nexus_memory_items set content=$3,updated_at=now()
      where tenant_id=$1 and memory_id=$2 and purpose='community_reports' and deleted_at is null`;
    if (expectedStatus !== undefined) { sql += ` and coalesce(content->>'status','') = $${params.length + 1}`; params.push(expectedStatus); }
    sql += ` returning memory_id`;
    const result = await this.db.query(sql, params);
    return Boolean((result.rows || result)[0]);
  }

  // ---- announcements ----
  addAnnouncement({ tenantId, userId, content }) { return this.insert({ tenantId, userId, purpose: "community_notices", content }); }
  // Found live: the daily announcement cap was enforced by desk.js with a plain check-then-act read
  // (count today's announcements, then insert), with no lock -- unlike addReport()'s own advisory-lock-
  // guarded numbering above. Two different staff members, each having independently prepared their own
  // pending announcement (setPending/getPending are keyed per staff userId, so this is a realistic
  // scenario, not the same principal racing itself), could both read "under the cap" and both insert,
  // pushing the tenant past its daily limit. Serializes the count-check and the insert under the same kind
  // of transaction-scoped advisory lock, keyed per tenant.
  async addAnnouncementUnlessCapped({ tenantId, userId, content, today, maxPerDay }) {
    return this.db.transaction(async trx => {
      await trx.query("select pg_advisory_xact_lock(hashtext($1))", [`community_announcements:${tenantId}`]);
      const result = await trx.query(`select count(*)::int as n from nexus_memory_items
        where tenant_id=$1 and memory_class='domain' and purpose='community_notices' and deleted_at is null and content->>'kind'='announcement' and content->>'day'=$2`, [tenantId, today]);
      const sentToday = Number((result.rows || result)[0]?.n || 0);
      if (sentToday >= maxPerDay) return { capped: true, sentToday };
      const announcementId = await this.insert({ tenantId, userId, purpose: "community_notices", content }, trx);
      return { announcementId };
    });
  }
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
  // Found live: this used to be a single select() capped at 2000 (select()'s own hard ceiling), so a
  // tenant with more than 2000 active opt-outs would silently lose its EARLIEST opt-outs from every read
  // -- the people who most plainly asked, first, to stop hearing from the community desk. Both callers
  // (announce/confirm-announcement) push to every recipient not in this list, so losing someone from it
  // means an announcement is sent to a person who explicitly opted out, contradicting this module's own
  // "who have not opted out" contract. A fixed cap can never be the right fix for a consent list -- it has
  // to return everyone, however many there are, so this pages through in batches via keyset pagination
  // instead of relying on select()'s single-page limit.
  async optOuts({ tenantId }) {
    const ids = new Set();
    let cursor = null;
    for (;;) {
      const result = await this.db.query(`select memory_id,principal_id,created_at from nexus_memory_items
        where tenant_id=$1 and memory_class='domain' and purpose='community_optout' and deleted_at is null and content->>'kind'='optout'
        and ($2::timestamptz is null or (created_at,memory_id) < ($2::timestamptz,$3::text))
        order by created_at desc, memory_id desc limit 2000`, [tenantId, cursor?.createdAt || null, cursor?.memoryId || null]);
      const rows = result.rows || result;
      for (const row of rows) ids.add(String(row.principal_id));
      if (rows.length < 2000) break;
      const last = rows[rows.length - 1];
      cursor = { createdAt: last.created_at, memoryId: last.memory_id };
    }
    return [...ids];
  }
  async setOptOut({ tenantId, userId, value }) {
    const existing = await this.select({ tenantId, userId, purpose: "community_optout", kind: "optout", limit: 5 });
    if (value && !existing.length) await this.insert({ tenantId, userId, purpose: "community_optout", content: { kind: "optout", text: "opted out" } });
    if (!value) for (const row of existing) await this.softDelete({ tenantId, memoryId: row.memoryId, purpose: "community_optout" });
  }
}

module.exports = Object.freeze({ CommunityRepository });
