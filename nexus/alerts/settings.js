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
    const write = async db => {
      const cancelled = await db.query(`update nexus_schedules set state='cancelled',updated_at=now()
        where tenant_id=$1 and owner_id=$2 and job_type=$3 and state='active' returning schedule_id`, [tenantId, userId, JOB_TYPE]);
      const created = await db.query(`insert into nexus_schedules
        (schedule_id,tenant_id,owner_id,job_type,payload,cadence,timezone,next_run_at,state)
        values ($1,$2,$3,$4,$5,$6,$7,$8,'active') returning schedule_id`,
      [`sch_${crypto.randomUUID()}`, tenantId, userId, JOB_TYPE, { timeZone }, { kind: "setting" }, timeZone, PARKED]);
      return { scheduleId: (created.rows || created)[0]?.schedule_id, timeZone, replaced: (cancelled.rows || cancelled).length > 0 };
    };
    // Found live (export/compliance & settings audit): cancel-then-insert was two
    // separate, non-transactional queries, and nexus_schedules has no unique
    // constraint on (tenant_id, owner_id, job_type) for state='active' -- a
    // double-submit (network retry, double-tap, two devices) could interleave
    // two set() calls so each cancelled a different/stale row and both inserts
    // landed active, leaving two active weather-alert schedules for the same
    // person. listActive() has no per-user dedup, so the worker's sweep would
    // silently send two weather alerts every day from then on. Matches the
    // advisory-lock-guarded-transaction pattern already used for this exact
    // "check-then-write" shape elsewhere (circle-repository.js's invite()).
    return typeof this.db.transaction === "function"
      ? this.db.transaction(async trx => {
          await trx.query("select pg_advisory_xact_lock(hashtext($1))", [`${JOB_TYPE}:${tenantId}:${userId}`]);
          return write(trx);
        })
      : write(this.db);
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

  // Found live (fresh-module audit): the sweep (nexus/alerts/service.js's sendDue) called this with a fixed
  // limit:500 and never paged further -- since this ordered by created_at with no cursor, every sweep
  // returned the exact same oldest 500 rows forever, permanently excluding the 501st-and-later person who
  // ever turned weather alerts on. A keyset cursor on (created_at, schedule_id) (a real tiebreaker, unlike
  // created_at alone which can collide) lets the caller page through every active row across a single sweep.
  async listActive({ limit = 500, afterCreatedAt = null, afterScheduleId = null } = {}) {
    const values = [JOB_TYPE];
    let where = "job_type=$1 and state='active'";
    if (afterCreatedAt && afterScheduleId) { values.push(afterCreatedAt, afterScheduleId); where += ` and (created_at, schedule_id) > ($${values.length - 1}, $${values.length})`; }
    values.push(Math.min(Math.max(Number(limit) || 500, 1), 2000));
    const result = await this.db.query(`select schedule_id,tenant_id,owner_id,payload,timezone,created_at from nexus_schedules
      where ${where} order by created_at, schedule_id limit $${values.length}`, values);
    return (result.rows || result).map(row => ({ scheduleId: row.schedule_id, tenantId: row.tenant_id, userId: row.owner_id, timeZone: row.payload?.timeZone || row.timezone, createdAt: row.created_at }));
  }
}

module.exports = Object.freeze({ WeatherAlertSettingsRepository, JOB_TYPE, PARKED });
