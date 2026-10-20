"use strict";

const { createId } = require("../contracts/identifiers.js");

// Storage for the memory book (see memory-book.js), on the memory table that already exists (no new schema), under the purpose "memory-book" and the sensitivity "sensitive". The rows belong to the person whose book it is
// (principal_id), so an account export includes them and an account erasure removes them with everything else the person owns (server.js collectOwnedNexusMemoryRecords, data-lifecycle-repository.js).
//   { kind: "entry", title, text, addedById, addedByName, relationship, source: "self" | "family" }
// Removing an entry is a soft delete. The cap is taken under a lock, so two entries added at the same moment cannot both pass a stale count.
const PLACEHOLDER_VECTOR = `[1${",0".repeat(1535)}]`;
const PURPOSE = "memory-book";

class MemoryBookRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }

  async addUnlessCapped({ tenantId, userId, content, maxEntries }) {
    return this.db.transaction(async trx => {
      await trx.query("select pg_advisory_xact_lock(hashtext($1))", [`memory-book:${tenantId}:${userId}`]);
      const existing = await trx.query(`select memory_id,content from nexus_memory_items
        where tenant_id=$1 and principal_id=$2 and memory_class='domain' and purpose='${PURPOSE}' and deleted_at is null and content->>'kind'='entry'`, [tenantId, userId]);
      const rows = existing.rows || existing;
      if (rows.length >= maxEntries) return { capped: true, count: rows.length };
      const duplicate = rows.find(row => String(row.content?.text || "").trim().toLowerCase() === String(content.text || "").trim().toLowerCase());
      if (duplicate) return { duplicate: true, memoryId: duplicate.memory_id };
      const memoryId = createId("memory");
      await trx.query(`insert into nexus_memory_items
        (memory_id,tenant_id,principal_id,memory_class,purpose,content,searchable_text,embedding,embedding_model,provenance,importance,confidence,verification_state,sensitivity)
        values ($1,$2,$3,'domain','${PURPOSE}',$4,$5,$6::vector,'none',$7,0.6,0.9,'user_confirmed','sensitive')`,
      [memoryId, tenantId, userId, { kind: "entry", ...content }, `${content.title}`, PLACEHOLDER_VECTOR, { source: content.source === "family" ? "circle-member" : "user-statement", capturedAt: new Date().toISOString() }]);
      return { memoryId, content };
    });
  }

  // Oldest first, so a book reads in the order it was written. At most 200 (the cap), so the list is never cut short.
  async list({ tenantId, userId }) {
    const result = await this.db.query(`select memory_id,content,created_at from nexus_memory_items
      where tenant_id=$1 and principal_id=$2 and memory_class='domain' and purpose='${PURPOSE}' and deleted_at is null and content->>'kind'='entry'
      order by created_at, memory_id limit 200`, [tenantId, userId]);
    return (result.rows || result).map(row => ({ memoryId: row.memory_id, createdAt: row.created_at, ...row.content })).filter(entry => entry.text);
  }

  async remove({ tenantId, userId, memoryId }) {
    const result = await this.db.query(`update nexus_memory_items set deleted_at=now(),updated_at=now()
      where tenant_id=$1 and principal_id=$2 and memory_id=$3 and purpose='${PURPOSE}' and deleted_at is null returning memory_id`, [tenantId, userId, memoryId]);
    return Boolean((result.rows || result)[0]);
  }
}

module.exports = Object.freeze({ MemoryBookRepository, PURPOSE });
