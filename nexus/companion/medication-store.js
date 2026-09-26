"use strict";

const { createId } = require("../contracts/identifiers.js");

// Storage for medication reminders, on the memory table that already exists (no new schema), under the purpose "medications" and the
// sensitivity "health" (a person's medicines are health information, private to them). Two kinds of row:
//   { kind: "medication", name, dose, times: ["08:00", ...], timeZone, active }
//   { kind: "dose", medId, name, day, time, status: "pending"|"taken"|"missed"|"alerted", promptedAt, takenAt?, takenLocal?, alertedAt?, extra? }
// Removing a medicine is a soft delete.
const PLACEHOLDER_VECTOR = `[1${",0".repeat(1535)}]`;

class MedicationRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }

  async insert({ tenantId, userId, content }) {
    await this.db.query(`insert into nexus_memory_items
      (memory_id,tenant_id,principal_id,memory_class,purpose,content,searchable_text,embedding,embedding_model,provenance,importance,confidence,verification_state,sensitivity)
      values ($1,$2,$3,'domain','medications',$4,$5,$6::vector,'none',$7,0.8,0.9,'user_confirmed','health')`,
    [createId("memory"), tenantId, userId, content, `${content.kind}: ${content.name}`, PLACEHOLDER_VECTOR, { source: "user-statement", capturedAt: new Date().toISOString() }]);
  }
  addMedication(args) { return this.insert(args); }
  createDose(args) { return this.insert({ ...args, content: { kind: "dose", ...args.content } }); }

  async listMedications({ tenantId, userId }) {
    const result = await this.db.query(`select memory_id,content from nexus_memory_items
      where tenant_id=$1 and principal_id=$2 and memory_class='domain' and purpose='medications' and deleted_at is null and content->>'kind'='medication'
      order by created_at, memory_id limit 50`, [tenantId, userId]);
    return (result.rows || result).map(row => ({ memoryId: row.memory_id, content: row.content })).filter(item => item.content?.name && item.content.active !== false);
  }
  async updateMedication({ tenantId, userId, memoryId, content }) {
    const result = await this.db.query(`update nexus_memory_items set content=$4,searchable_text=$5,updated_at=now()
      where tenant_id=$1 and principal_id=$2 and memory_id=$3 and purpose='medications' and deleted_at is null returning memory_id`, [tenantId, userId, memoryId, content, `${content.kind}: ${content.name}`]);
    return Boolean((result.rows || result)[0]);
  }
  async removeMedication({ tenantId, userId, memoryId }) {
    const result = await this.db.query(`update nexus_memory_items set deleted_at=now(),updated_at=now()
      where tenant_id=$1 and principal_id=$2 and memory_id=$3 and purpose='medications' and deleted_at is null returning memory_id`, [tenantId, userId, memoryId]);
    return Boolean((result.rows || result)[0]);
  }
  // Every active medicine across communities, for the worker's sweep.
  async listAllActiveMedications({ limit = 2000 } = {}) {
    const result = await this.db.query(`select memory_id,tenant_id,principal_id,content from nexus_memory_items
      where memory_class='domain' and purpose='medications' and deleted_at is null and content->>'kind'='medication' and coalesce(content->>'active','true')<>'false'
      order by created_at limit $1`, [Math.min(Math.max(Number(limit) || 2000, 1), 5000)]);
    return (result.rows || result).map(row => ({ memoryId: row.memory_id, tenantId: row.tenant_id, userId: row.principal_id, content: row.content }));
  }

  async getDose({ tenantId, userId, medId, day, time }) {
    const result = await this.db.query(`select memory_id,content from nexus_memory_items
      where tenant_id=$1 and principal_id=$2 and purpose='medications' and deleted_at is null and content->>'kind'='dose'
      and content->>'medId'=$3 and content->>'day'=$4 and content->>'time'=$5 limit 1`, [tenantId, userId, medId, day, time]);
    const row = (result.rows || result)[0];
    return row ? { memoryId: row.memory_id, ...row.content } : null;
  }
  // Found live: the worker sweep's own check-then-act (getDose(), then
  // createDose() moments later) has no lock, so two workers ticking the same
  // due dose within the same race window could both see "no dose yet" and
  // both create one -- a duplicate "time for your medicine" push, and a
  // stray extra pending row that never gets marked taken (only the newest
  // one does), which later crosses GRACE_HOURS and falsely tells the
  // person's trusted circle they missed a dose they actually took. A
  // transaction-scoped advisory lock, keyed to this exact dose slot,
  // serializes the recheck-and-insert across concurrent workers so only one
  // ever wins; returns the dose it created, or null if another worker
  // already claimed this slot.
  async claimDoseSlot({ tenantId, userId, medId, day, time, content }) {
    return this.db.transaction(async trx => {
      await trx.query("select pg_advisory_xact_lock(hashtext($1))", [`medication-dose:${tenantId}:${userId}:${medId}:${day}:${time}`]);
      const existing = await trx.query(`select memory_id from nexus_memory_items
        where tenant_id=$1 and principal_id=$2 and purpose='medications' and deleted_at is null and content->>'kind'='dose'
        and content->>'medId'=$3 and content->>'day'=$4 and content->>'time'=$5 limit 1`, [tenantId, userId, medId, day, time]);
      if ((existing.rows || existing)[0]) return null;
      const memoryId = createId("memory");
      await trx.query(`insert into nexus_memory_items
        (memory_id,tenant_id,principal_id,memory_class,purpose,content,searchable_text,embedding,embedding_model,provenance,importance,confidence,verification_state,sensitivity)
        values ($1,$2,$3,'domain','medications',$4,$5,$6::vector,'none',$7,0.8,0.9,'user_confirmed','health')`,
      [memoryId, tenantId, userId, { kind: "dose", ...content }, `dose: ${content.name}`, PLACEHOLDER_VECTOR, { source: "user-statement", capturedAt: new Date().toISOString() }]);
      return { memoryId, ...content };
    });
  }
  async dosesForDay({ tenantId, userId, day }) {
    const result = await this.db.query(`select memory_id,content from nexus_memory_items
      where tenant_id=$1 and principal_id=$2 and purpose='medications' and deleted_at is null and content->>'kind'='dose' and content->>'day'=$3
      order by created_at limit 100`, [tenantId, userId, day]);
    return (result.rows || result).map(row => ({ memoryId: row.memory_id, ...row.content }));
  }
  async updateDose({ tenantId, memoryId, content }) {
    const { memoryId: _ignored, ...rest } = content;
    const result = await this.db.query(`update nexus_memory_items set content=$3,updated_at=now()
      where tenant_id=$1 and memory_id=$2 and purpose='medications' and deleted_at is null returning memory_id`, [tenantId, memoryId, { kind: "dose", ...rest }]);
    return Boolean((result.rows || result)[0]);
  }
  // Doses still waiting for the person to confirm, across communities.
  async listPendingDoses({ limit = 2000 } = {}) {
    const result = await this.db.query(`select memory_id,tenant_id,principal_id,content from nexus_memory_items
      where memory_class='domain' and purpose='medications' and deleted_at is null and content->>'kind'='dose' and content->>'status'='pending'
      order by created_at limit $1`, [Math.min(Math.max(Number(limit) || 2000, 1), 5000)]);
    return (result.rows || result).map(row => ({ memoryId: row.memory_id, tenantId: row.tenant_id, userId: row.principal_id, ...row.content }));
  }
}

module.exports = Object.freeze({ MedicationRepository });
