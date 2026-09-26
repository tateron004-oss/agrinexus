"use strict";

const crypto = require("node:crypto");
const { createId } = require("../contracts/identifiers.js");

// Storage for daily check-ins, on tables that already exist (no new schema):
//  * the setting (on/off, time, time zone, how long to wait) is a parked nexus_schedules row like the brief's ('checkin.daily');
//  * each day's check-in is one row under the purpose "checkin" in the memory table:
//      { kind: "checkin", day, status: "pending"|"ok"|"low"|"alerted"|"missed"|"active", promptedAt, answeredAt?, alertedAt?, toldAt? }
const JOB_TYPE = "checkin.daily";
const PARKED = "2100-01-01T00:00:00.000Z";
const PLACEHOLDER_VECTOR = `[1${",0".repeat(1535)}]`;

class CheckinSettingsRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }
  async set({ tenantId, userId, timeOfDay, timeZone, graceHours = 3 }) {
    if (!tenantId || !userId || !timeOfDay || !timeZone) throw new Error("Tenant, user, time and time zone are required.");
    const cancelled = await this.db.query(`update nexus_schedules set state='cancelled',updated_at=now()
      where tenant_id=$1 and owner_id=$2 and job_type=$3 and state='active' returning schedule_id`, [tenantId, userId, JOB_TYPE]);
    const created = await this.db.query(`insert into nexus_schedules
      (schedule_id,tenant_id,owner_id,job_type,payload,cadence,timezone,next_run_at,state)
      values ($1,$2,$3,$4,$5,$6,$7,$8,'active') returning schedule_id`,
    [`sch_${crypto.randomUUID()}`, tenantId, userId, JOB_TYPE, { timeOfDay, timeZone, graceHours }, { kind: "setting" }, timeZone, PARKED]);
    return { scheduleId: (created.rows || created)[0]?.schedule_id, timeOfDay, timeZone, graceHours, replaced: (cancelled.rows || cancelled).length > 0 };
  }
  async stop({ tenantId, userId }) {
    const result = await this.db.query(`update nexus_schedules set state='cancelled',updated_at=now()
      where tenant_id=$1 and owner_id=$2 and job_type=$3 and state='active' returning schedule_id`, [tenantId, userId, JOB_TYPE]);
    return (result.rows || result).length;
  }
  async get({ tenantId, userId }) {
    const result = await this.db.query(`select schedule_id,payload,timezone from nexus_schedules
      where tenant_id=$1 and owner_id=$2 and job_type=$3 and state='active' order by created_at desc limit 1`, [tenantId, userId, JOB_TYPE]);
    const row = (result.rows || result)[0];
    return row ? { scheduleId: row.schedule_id, timeOfDay: row.payload?.timeOfDay, timeZone: row.payload?.timeZone || row.timezone, graceHours: Number(row.payload?.graceHours) || 3 } : null;
  }
  async listActive({ limit = 500 } = {}) {
    const result = await this.db.query(`select schedule_id,tenant_id,owner_id,payload,timezone from nexus_schedules
      where job_type=$1 and state='active' order by created_at limit $2`, [JOB_TYPE, Math.min(Math.max(Number(limit) || 500, 1), 2000)]);
    return (result.rows || result).map(row => ({ scheduleId: row.schedule_id, tenantId: row.tenant_id, userId: row.owner_id,
      timeOfDay: row.payload?.timeOfDay, timeZone: row.payload?.timeZone || row.timezone, graceHours: Number(row.payload?.graceHours) || 3 }));
  }
}

class CheckinStateRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }
  async get({ tenantId, userId, day }) {
    const result = await this.db.query(`select memory_id,content from nexus_memory_items
      where tenant_id=$1 and principal_id=$2 and memory_class='domain' and purpose='checkin' and deleted_at is null and content->>'day'=$3
      order by created_at desc limit 1`, [tenantId, userId, day]);
    const row = (result.rows || result)[0];
    return row ? { memoryId: row.memory_id, ...row.content } : null;
  }
  async create({ tenantId, userId, content }) {
    await this.db.query(`insert into nexus_memory_items
      (memory_id,tenant_id,principal_id,memory_class,purpose,content,searchable_text,embedding,embedding_model,provenance,importance,confidence,verification_state,sensitivity)
      values ($1,$2,$3,'domain','checkin',$4,$5,$6::vector,'none',$7,0.6,0.9,'user_confirmed','sensitive')`,
    [createId("memory"), tenantId, userId, { kind: "checkin", ...content }, `checkin: ${content.day}`, PLACEHOLDER_VECTOR, { source: "companion", capturedAt: new Date().toISOString() }]);
  }
  // Pass `expectedStatus` for a compare-and-swap update -- the write only
  // takes effect if the row's current status still matches. Found live: the
  // worker sweep's follow-up loop read a check-in row once at the top of
  // its iteration, then (several awaits and real push sends later) wrote
  // back a spread of that SAME STALE snapshot -- if the person answered in
  // between (via answer(), a separate fresh read-then-write), the worker's
  // final write silently clobbered their real "ok"/"low" answer back to
  // "alerted"/"missed", after already having sent a now-false "check-in
  // missed" alert to their circle. The CAS lets the caller detect that race
  // and skip the write (and, if checked before sending, the push) instead.
  async update({ tenantId, memoryId, content, expectedStatus }) {
    const { memoryId: _ignored, ...rest } = content;
    const params = [tenantId, memoryId, { kind: "checkin", ...rest }];
    let sql = `update nexus_memory_items set content=$3,updated_at=now()
      where tenant_id=$1 and memory_id=$2 and purpose='checkin' and deleted_at is null`;
    if (expectedStatus !== undefined) { sql += ` and coalesce(content->>'status','') = $4`; params.push(expectedStatus); }
    sql += ` returning memory_id`;
    const result = await this.db.query(sql, params);
    return Boolean((result.rows || result)[0]);
  }
  // Every check-in still waiting for an answer, across communities, for the worker's sweep.
  async listPending({ limit = 1000 } = {}) {
    const result = await this.db.query(`select memory_id,tenant_id,principal_id,content from nexus_memory_items
      where memory_class='domain' and purpose='checkin' and deleted_at is null and content->>'status'='pending'
      order by created_at limit $1`, [Math.min(Math.max(Number(limit) || 1000, 1), 5000)]);
    return (result.rows || result).map(row => ({ memoryId: row.memory_id, tenantId: row.tenant_id, userId: row.principal_id, ...row.content }));
  }
  // Whether the person has said anything to Kyro since a moment: a person who is chatting is plainly there.
  async hasActivitySince({ tenantId, userId, since }) {
    const result = await this.db.query(`select 1 from nexus_messages where tenant_id=$1 and actor_id=$2 and role='user' and created_at > $3 limit 1`, [tenantId, userId, since]);
    return (result.rows || result).length > 0;
  }
}

module.exports = Object.freeze({ CheckinSettingsRepository, CheckinStateRepository, JOB_TYPE, PARKED });
