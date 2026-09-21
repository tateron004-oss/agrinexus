"use strict";

const { createId } = require("../contracts/identifiers.js");

// The wellness and training log, on the memory table that already exists (no new schema): one row per entry or goal under the purpose
// "wellness", sensitivity "health", private to the person. Removing is a soft delete; newest first.
const PLACEHOLDER_VECTOR = `[1${",0".repeat(1535)}]`;

class WellnessRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }
  async addEntry({ tenantId, userId, content }) {
    const saved = await this.db.query(`insert into nexus_memory_items
      (memory_id,tenant_id,principal_id,memory_class,purpose,content,searchable_text,embedding,embedding_model,provenance,importance,confidence,verification_state,sensitivity)
      values ($1,$2,$3,'domain','wellness',$4,$5,$6::vector,'none',$7,0.5,0.9,'user_confirmed','health') returning memory_id`,
    [createId("memory"), tenantId, userId, content, `${content.kind}: ${content.metric}`, PLACEHOLDER_VECTOR, { source: "user-statement", capturedAt: new Date().toISOString() }]);
    return { memoryId: (saved.rows || saved)[0]?.memory_id, content };
  }
  async listEntries({ tenantId, userId, limit = 5000 }) {
    const result = await this.db.query(`select memory_id,content from nexus_memory_items
      where tenant_id=$1 and principal_id=$2 and memory_class='domain' and purpose='wellness' and deleted_at is null
      order by created_at desc, memory_id desc limit $3`, [tenantId, userId, Math.min(Math.max(Number(limit) || 5000, 1), 5000)]);
    return (result.rows || result).filter(row => row.content && typeof row.content === "object" && row.content.kind).map(row => ({ memoryId: row.memory_id, content: row.content }));
  }
  async removeEntry({ tenantId, userId, memoryId }) {
    const result = await this.db.query(`update nexus_memory_items set deleted_at=now(),updated_at=now()
      where tenant_id=$1 and principal_id=$2 and memory_id=$3 and purpose='wellness' and deleted_at is null returning memory_id`, [tenantId, userId, memoryId]);
    return Boolean((result.rows || result)[0]);
  }
}

module.exports = Object.freeze({ WellnessRepository });
