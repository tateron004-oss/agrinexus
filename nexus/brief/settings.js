"use strict";

const crypto = require("node:crypto");

// A person's brief setting: whether they asked for a morning brief, at what local time, in which time zone. It lives in the existing
// nexus_schedules table (job_type 'brief.daily', one active row per person) because that table already is "persisted schedules for
// reminders". The row is only a setting: next_run_at is parked in the year 2100 so schedules.dispatch can never treat it as due, and
// the worker's own brief sweep decides when to send, in the person's local time.
const JOB_TYPE = "brief.daily";
const PARKED = "2100-01-01T00:00:00.000Z";

class BriefSettingsRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }

  // One brief per person: setting a new one cancels the old. Returns { scheduleId, timeOfDay, timeZone, replaced }.
  async set({ tenantId, userId, timeOfDay, timeZone }) {
    if (!tenantId || !userId || !timeOfDay || !timeZone) throw new Error("Tenant, user, time and time zone are required.");
    const cancelled = await this.db.query(`update nexus_schedules set state='cancelled',updated_at=now()
      where tenant_id=$1 and owner_id=$2 and job_type=$3 and state='active' returning schedule_id`, [tenantId, userId, JOB_TYPE]);
    const created = await this.db.query(`insert into nexus_schedules
      (schedule_id,tenant_id,owner_id,job_type,payload,cadence,timezone,next_run_at,state)
      values ($1,$2,$3,$4,$5,$6,$7,$8,'active') returning schedule_id`,
    [`sch_${crypto.randomUUID()}`, tenantId, userId, JOB_TYPE, { timeOfDay, timeZone }, { kind: "setting" }, timeZone, PARKED]);
    return { scheduleId: (created.rows || created)[0]?.schedule_id, timeOfDay, timeZone, replaced: (cancelled.rows || cancelled).length > 0 };
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
    return row ? { scheduleId: row.schedule_id, timeOfDay: row.payload?.timeOfDay, timeZone: row.payload?.timeZone || row.timezone } : null;
  }

  // Every active brief setting, across tenants, for the worker's sweep.
  async listActive({ limit = 500 } = {}) {
    const result = await this.db.query(`select schedule_id,tenant_id,owner_id,payload,timezone from nexus_schedules
      where job_type=$1 and state='active' order by created_at limit $2`, [JOB_TYPE, Math.min(Math.max(Number(limit) || 500, 1), 2000)]);
    return (result.rows || result).map(row => ({ scheduleId: row.schedule_id, tenantId: row.tenant_id, userId: row.owner_id,
      timeOfDay: row.payload?.timeOfDay, timeZone: row.payload?.timeZone || row.timezone }));
  }
}

module.exports = Object.freeze({ BriefSettingsRepository, JOB_TYPE, PARKED });
