"use strict";

const { createId } = require("../contracts/identifiers.js");

// One store for all the farm's structured records (fields, animals, stock, tasks, buyers, money, cooperative, the market board...), on the
// memory table that already exists (no new schema). Every record is one row under the purpose "farm_records":
//   { kind: "record", collection, number, data: {...}, createdAt, updatedAt }
// `collection` names what it is ("field", "animal", "stock", ...); `number` counts within the person's own records of that collection (or
// across the whole community for the public market board), so people can say "task 3" or "listing 12". Removing is a soft delete.
// A separate purpose "farm_session" holds the one guided conversation a person may have open ("what do you call this field?").
const PLACEHOLDER_VECTOR = `[1${",0".repeat(1535)}]`;
const PUBLIC_COLLECTIONS = Object.freeze(["listing"]);

const toRecord = row => ({ memoryId: row.memory_id, userId: String(row.principal_id), number: row.content.number, collection: row.content.collection, data: row.content.data || {}, createdAt: row.content.createdAt, updatedAt: row.content.updatedAt });

class FarmRecordRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }

  async nextNumber({ tenantId, userId, collection }) {
    const wide = PUBLIC_COLLECTIONS.includes(collection);
    const result = wide
      ? await this.db.query(`select coalesce(max((content->>'number')::int),0) as n from nexus_memory_items
          where tenant_id=$1 and purpose='farm_records' and content->>'collection'=$2`, [tenantId, collection])
      : await this.db.query(`select coalesce(max((content->>'number')::int),0) as n from nexus_memory_items
          where tenant_id=$1 and principal_id=$2 and purpose='farm_records' and content->>'collection'=$3`, [tenantId, userId, collection]);
    return Number((result.rows || result)[0]?.n || 0) + 1;
  }

  async add({ tenantId, userId, collection, data }) {
    const number = await this.nextNumber({ tenantId, userId, collection });
    const now = new Date().toISOString();
    const memoryId = createId("memory");
    await this.db.query(`insert into nexus_memory_items
      (memory_id,tenant_id,principal_id,memory_class,purpose,content,searchable_text,embedding,embedding_model,provenance,importance,confidence,verification_state,sensitivity)
      values ($1,$2,$3,'domain','farm_records',$4,$5,$6::vector,'none',$7,0.5,0.9,'user_confirmed','sensitive')`,
    [memoryId, tenantId, userId, { kind: "record", collection, number, data, createdAt: now, updatedAt: now }, `${collection}: ${String(data?.name || data?.title || data?.item || "").slice(0, 80)}`, PLACEHOLDER_VECTOR, { source: "farm-toolkit", capturedAt: now }]);
    return { memoryId, userId, number, collection, data, createdAt: now, updatedAt: now };
  }

  // A person's own records of one collection, newest first.
  async list({ tenantId, userId, collection, limit = 1000 }) {
    const result = await this.db.query(`select memory_id,principal_id,content from nexus_memory_items
      where tenant_id=$1 and principal_id=$2 and memory_class='domain' and purpose='farm_records' and deleted_at is null and content->>'collection'=$3
      order by created_at desc, memory_id desc limit $4`, [tenantId, userId, collection, Math.min(Math.max(Number(limit) || 1000, 1), 5000)]);
    return (result.rows || result).filter(row => row.content && row.content.kind === "record").map(toRecord);
  }

  // Everything a person keeps, across collections, for summaries.
  async listAll({ tenantId, userId, limit = 5000 }) {
    const result = await this.db.query(`select memory_id,principal_id,content from nexus_memory_items
      where tenant_id=$1 and principal_id=$2 and memory_class='domain' and purpose='farm_records' and deleted_at is null
      order by created_at desc, memory_id desc limit $3`, [tenantId, userId, Math.min(Math.max(Number(limit) || 5000, 1), 10000)]);
    return (result.rows || result).filter(row => row.content && row.content.kind === "record").map(toRecord);
  }

  // Records everyone in the community may read (the market board). Only ever one tenant's.
  async listPublic({ tenantId, collection, limit = 500 }) {
    if (!PUBLIC_COLLECTIONS.includes(collection)) return [];
    const result = await this.db.query(`select memory_id,principal_id,content from nexus_memory_items
      where tenant_id=$1 and memory_class='domain' and purpose='farm_records' and deleted_at is null and content->>'collection'=$2
      order by created_at desc, memory_id desc limit $3`, [tenantId, collection, Math.min(Math.max(Number(limit) || 500, 1), 2000)]);
    return (result.rows || result).filter(row => row.content && row.content.kind === "record").map(toRecord);
  }

  // Only the owner of a record can change or remove it.
  async update({ tenantId, userId, record }) {
    const result = await this.db.query(`update nexus_memory_items set content=$4,searchable_text=$5,updated_at=now()
      where tenant_id=$1 and principal_id=$2 and memory_id=$3 and purpose='farm_records' and deleted_at is null returning memory_id`,
    [tenantId, userId, record.memoryId, { kind: "record", collection: record.collection, number: record.number, data: record.data, createdAt: record.createdAt, updatedAt: new Date().toISOString() },
      `${record.collection}: ${String(record.data?.name || record.data?.title || record.data?.item || "").slice(0, 80)}`]);
    return Boolean((result.rows || result)[0]);
  }
  async remove({ tenantId, userId, memoryId }) {
    const result = await this.db.query(`update nexus_memory_items set deleted_at=now(),updated_at=now()
      where tenant_id=$1 and principal_id=$2 and memory_id=$3 and purpose='farm_records' and deleted_at is null returning memory_id`, [tenantId, userId, memoryId]);
    return Boolean((result.rows || result)[0]);
  }

  // ---- the open guided conversation ----
  async getSession({ tenantId, userId }) {
    const result = await this.db.query(`select memory_id,content from nexus_memory_items
      where tenant_id=$1 and principal_id=$2 and purpose='farm_session' and deleted_at is null order by created_at desc limit 1`, [tenantId, userId]);
    const row = (result.rows || result)[0];
    return row && row.content?.kind === "session" ? { memoryId: row.memory_id, ...row.content } : null;
  }
  async clearSession({ tenantId, userId }) {
    await this.db.query(`update nexus_memory_items set deleted_at=now(),updated_at=now()
      where tenant_id=$1 and principal_id=$2 and purpose='farm_session' and deleted_at is null`, [tenantId, userId]);
  }
  async setSession({ tenantId, userId, session }) {
    await this.clearSession({ tenantId, userId });
    await this.db.query(`insert into nexus_memory_items
      (memory_id,tenant_id,principal_id,memory_class,purpose,content,searchable_text,embedding,embedding_model,provenance,importance,confidence,verification_state,sensitivity)
      values ($1,$2,$3,'domain','farm_session',$4,$5,$6::vector,'none',$7,0.1,0.9,'user_confirmed','internal')`,
    [createId("memory"), tenantId, userId, { kind: "session", ...session }, `session: ${session.collection}`, PLACEHOLDER_VECTOR, { source: "farm-toolkit", capturedAt: new Date().toISOString() }]);
  }
}

module.exports = Object.freeze({ FarmRecordRepository, PUBLIC_COLLECTIONS });
