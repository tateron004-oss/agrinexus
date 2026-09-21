"use strict";

const crypto = require("node:crypto");

// Whether a person asked for weather alerts, and their time zone (so alerts stay quiet overnight for them). Like the brief setting it lives
// in nexus_schedules (job_type 'alerts.weather', one active row per person) and is parked in the year 2100 so schedules.dispatch never
// treats it as due; the worker's own weather-alert sweep does the checking.
const JOB_TYPE = "alerts.weather";
const PARKED = "2100-01-01T00:00:00.000Z";

class WeatherAlertSettingsRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }

  async set({ tenantId, userId, timeZone }) {
    if (!tenantId || !userId || !timeZone) throw new Error("Tenant, user and time zone are required.");
    const cancelled = await this.db.query(`update nexus_schedules set state='cancelled',updated_at=now()
      where tenant_id=$1 and owner_id=$2 and job_type=$3 and state='active' returning schedule_id`, [tenantId, userId, JOB_TYPE]);
    const created = await this.db.query(`insert into nexus_schedules
      (schedule_id,tenant_id,owner_id,job_type,payload,cadence,timezone,next_run_at,state)
      values ($1,$2,$3,$4,$5,$6,$7,$8,'active') returning schedule_id`,
    [`sch_${crypto.randomUUID()}`, tenantId, userId, JOB_TYPE, { timeZone }, { kind: "setting" }, timeZone, PARKED]);
    return { scheduleId: (created.rows || created)[0]?.schedule_id, timeZone, replaced: (cancelled.rows || cancelled).length > 0 };
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
    return row ? { scheduleId: row.schedule_id, timeZone: row.payload?.timeZone || row.timezone } : null;
  }

  async listActive({ limit = 500 } = {}) {
    const result = await this.db.query(`select schedule_id,tenant_id,owner_id,payload,timezone from nexus_schedules
      where job_type=$1 and state='active' order by created_at limit $2`, [JOB_TYPE, Math.min(Math.max(Number(limit) || 500, 1), 2000)]);
    return (result.rows || result).map(row => ({ scheduleId: row.schedule_id, tenantId: row.tenant_id, userId: row.owner_id, timeZone: row.payload?.timeZone || row.timezone }));
  }
}

module.exports = Object.freeze({ WeatherAlertSettingsRepository, JOB_TYPE, PARKED });
