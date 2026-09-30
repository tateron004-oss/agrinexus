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

  // Found live: the caller used to read the entries snapshot once at the top of the whole turn, find any
  // existing goal for this metric there, delete it, then insert the new one -- not atomic. Two concurrent
  // "my goal is N workouts a week" requests (a retried voice/phone turn) could both see the same existing
  // goal, both delete it (idempotent, so that alone looked safe), and both insert a new one, leaving two
  // live goal rows for the same metric. Reading the goal back always finds the newest first, so the app
  // keeps behaving correctly going forward -- but the older duplicate can then never again be matched by
  // that same "find the existing goal" read, and survives forever as an orphaned row against the 5000-entry
  // cap. Serializes the whole read-delete-insert sequence under one transaction-scoped advisory lock, keyed
  // per person+metric -- and clears out any already-existing duplicates for this metric while at it, so a
  // person who hit the race before this fix self-heals the next time they set this same goal again.
  async setGoal({ tenantId, userId, metric, target }) {
    const lockKey = `wellness-goal:${tenantId}:${userId}:${metric}`;
    return this.db.transaction(async trx => {
      await trx.query("select pg_advisory_xact_lock(hashtext($1))", [lockKey]);
      const existing = await trx.query(`select memory_id from nexus_memory_items
        where tenant_id=$1 and principal_id=$2 and memory_class='domain' and purpose='wellness' and deleted_at is null
        and content->>'kind'='goal' and content->>'metric'=$3`, [tenantId, userId, metric]);
      for (const row of (existing.rows || existing)) {
        await trx.query(`update nexus_memory_items set deleted_at=now(),updated_at=now() where memory_id=$1`, [row.memory_id]);
      }
      const content = { kind: "goal", metric, target };
      const saved = await trx.query(`insert into nexus_memory_items
        (memory_id,tenant_id,principal_id,memory_class,purpose,content,searchable_text,embedding,embedding_model,provenance,importance,confidence,verification_state,sensitivity)
        values ($1,$2,$3,'domain','wellness',$4,$5,$6::vector,'none',$7,0.5,0.9,'user_confirmed','health') returning memory_id`,
      [createId("memory"), tenantId, userId, content, `goal: ${metric}`, PLACEHOLDER_VECTOR, { source: "user-statement", capturedAt: new Date().toISOString() }]);
      return { memoryId: (saved.rows || saved)[0]?.memory_id, content };
    });
  }

  // The wellness-domain counterpart to RecordRepository.listStaleHealthSubjects():
  // a real structural signal on this table's two real content shapes
  // (content.kind='goal' vs content.kind='entry') -- someone who set a
  // weekly workout goal with no workout entry logged since staleBefore.
  // Global, not tenant-scoped, matching every other proactive-sweep query in
  // this codebase (see nexus/data/record-repository.js's own comment on
  // listStaleHealthSubjects for why).
  async listStaleWorkoutGoalPrincipals({ staleBefore, limit = 50 }) {
    const result = await this.db.query(`select g.tenant_id, g.principal_id, w.last_workout_at
      from (
        select distinct tenant_id, principal_id from nexus_memory_items
        where purpose='wellness' and deleted_at is null and content->>'kind'='goal' and content->>'metric'='workouts'
      ) g
      left join lateral (
        select max(created_at) as last_workout_at from nexus_memory_items e
        where e.tenant_id=g.tenant_id and e.principal_id=g.principal_id and e.purpose='wellness' and e.deleted_at is null
          and e.content->>'kind'='entry' and e.content->>'metric'='workout'
      ) w on true
      where w.last_workout_at is null or w.last_workout_at < $1
      order by w.last_workout_at nulls first
      limit $2`, [staleBefore, Math.min(Math.max(limit, 1), 200)]);
    return result.rows || result;
  }
}

module.exports = Object.freeze({ WellnessRepository });
