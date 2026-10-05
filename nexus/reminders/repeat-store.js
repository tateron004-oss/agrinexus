"use strict";

const crypto = require("node:crypto");

// A person's repeating reminders ("every morning at 8, check the pump"). Like the morning brief's setting, each one lives in the existing
// nexus_schedules table (job_type 'reminder.repeat') and is parked in the year 2100 so schedules.dispatch can never treat it as due: the worker's
// own sweep (repeat-service.js) decides when each one fires, in the person's local time, so a change of clocks never shifts it.
// Account erasure already cancels every schedule a person owns (security/data-lifecycle-repository.js), so these go with the account.
const JOB_TYPE = "reminder.repeat";
const PARKED = "2100-01-01T00:00:00.000Z";
const MAX_PER_PERSON = 20;

const shape = row => ({ scheduleId: row.schedule_id, tenantId: row.tenant_id, userId: row.owner_id, task: row.payload?.task || "", timeOfDay: row.payload?.timeOfDay || "",
  days: row.payload?.days || "daily", timeZone: row.payload?.timeZone || row.timezone, createdAt: row.created_at });

class RepeatReminderRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }

  // Adds one repeating reminder, unless the person already has 20 or already has this exact one (same words, time and days).
  // The count and the insert share one per-person lock, so two quick requests cannot both pass the limit.
  // -> { scheduleId } | { capped: true } | { duplicate: true, scheduleId }
  async add({ tenantId, userId, task, timeOfDay, days, timeZone }) {
    if (!tenantId || !userId || !task || !timeOfDay || !days || !timeZone) throw new Error("Tenant, user, task, time, days and time zone are required.");
    const payload = { task, timeOfDay, days, timeZone };
    const run = async db => {
      const existing = await db.query(`select schedule_id,payload from nexus_schedules where tenant_id=$1 and owner_id=$2 and job_type=$3 and state='active'`, [tenantId, userId, JOB_TYPE]);
      const rows = existing.rows || existing;
      const same = rows.find(row => String(row.payload?.task || "").toLowerCase() === task.toLowerCase() && row.payload?.timeOfDay === timeOfDay && JSON.stringify(row.payload?.days) === JSON.stringify(days));
      if (same) return { duplicate: true, scheduleId: same.schedule_id };
      if (rows.length >= MAX_PER_PERSON) return { capped: true };
      const created = await db.query(`insert into nexus_schedules (schedule_id,tenant_id,owner_id,job_type,payload,cadence,timezone,next_run_at,state)
        values ($1,$2,$3,$4,$5,$6,$7,$8,'active') returning schedule_id`, [`sch_${crypto.randomUUID()}`, tenantId, userId, JOB_TYPE, payload, { kind: "setting" }, timeZone, PARKED]);
      return { scheduleId: (created.rows || created)[0]?.schedule_id };
    };
    return typeof this.db.transaction === "function"
      ? this.db.transaction(async trx => { await trx.query("select pg_advisory_xact_lock(hashtext($1))", [`${JOB_TYPE}:${tenantId}:${userId}`]); return run(trx); })
      : run(this.db);
  }

  // One person's active repeating reminders, oldest first (so "reminder 2" means the same thing each time they ask).
  async list({ tenantId, userId, limit = 50 }) {
    const result = await this.db.query(`select schedule_id,tenant_id,owner_id,payload,timezone,created_at from nexus_schedules
      where tenant_id=$1 and owner_id=$2 and job_type=$3 and state='active' order by created_at, schedule_id limit $4`, [tenantId, userId, JOB_TYPE, Math.min(Math.max(Number(limit) || 50, 1), 200)]);
    return (result.rows || result).map(shape);
  }

  // Stops one (by id) for its owner only. Returns true when one was stopped.
  async cancel({ tenantId, userId, scheduleId }) {
    const result = await this.db.query(`update nexus_schedules set state='cancelled',updated_at=now()
      where tenant_id=$1 and owner_id=$2 and job_type=$3 and schedule_id=$4 and state='active' returning schedule_id`, [tenantId, userId, JOB_TYPE, scheduleId]);
    return (result.rows || result).length > 0;
  }

  async cancelAll({ tenantId, userId }) {
    const result = await this.db.query(`update nexus_schedules set state='cancelled',updated_at=now()
      where tenant_id=$1 and owner_id=$2 and job_type=$3 and state='active' returning schedule_id`, [tenantId, userId, JOB_TYPE]);
    return (result.rows || result).length;
  }

  // Every active repeating reminder, across people, for the worker's sweep. Paged with a keyset cursor so one sweep covers all of them,
  // however many there are (a fixed limit would leave the same oldest rows being read forever).
  async listActive({ limit = 500, afterCreatedAt = null, afterScheduleId = null } = {}) {
    const values = [JOB_TYPE];
    let where = "job_type=$1 and state='active'";
    if (afterCreatedAt && afterScheduleId) { values.push(afterCreatedAt, afterScheduleId); where += ` and (created_at, schedule_id) > ($${values.length - 1}, $${values.length})`; }
    values.push(Math.min(Math.max(Number(limit) || 500, 1), 2000));
    const result = await this.db.query(`select schedule_id,tenant_id,owner_id,payload,timezone,created_at from nexus_schedules
      where ${where} order by created_at, schedule_id limit $${values.length}`, values);
    return (result.rows || result).map(shape);
  }
}

module.exports = Object.freeze({ RepeatReminderRepository, JOB_TYPE, PARKED, MAX_PER_PERSON });
