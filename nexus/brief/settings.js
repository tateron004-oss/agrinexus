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
    const write = async db => {
      const cancelled = await db.query(`update nexus_schedules set state='cancelled',updated_at=now()
        where tenant_id=$1 and owner_id=$2 and job_type=$3 and state='active' returning schedule_id`, [tenantId, userId, JOB_TYPE]);
      const created = await db.query(`insert into nexus_schedules
        (schedule_id,tenant_id,owner_id,job_type,payload,cadence,timezone,next_run_at,state)
        values ($1,$2,$3,$4,$5,$6,$7,$8,'active') returning schedule_id`,
      [`sch_${crypto.randomUUID()}`, tenantId, userId, JOB_TYPE, { timeOfDay, timeZone }, { kind: "setting" }, timeZone, PARKED]);
      return { scheduleId: (created.rows || created)[0]?.schedule_id, timeOfDay, timeZone, replaced: (cancelled.rows || cancelled).length > 0 };
    };
    // Found live (export/compliance & settings audit): cancel-then-insert was two
    // separate, non-transactional queries -- a double-submit (network retry,
    // double-tap, two devices) could interleave two set() calls so each
    // cancelled a different/stale row and both inserts landed active, leaving
    // two active daily-brief schedules for the same person. listActive() has
    // no per-user dedup, so the worker's sweep would silently send two morning
    // briefs every day from then on. Matches the advisory-lock-guarded-
    // transaction pattern already used for this exact shape elsewhere
    // (circle-repository.js's invite()).
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
    return row ? { scheduleId: row.schedule_id, timeOfDay: row.payload?.timeOfDay, timeZone: row.payload?.timeZone || row.timezone } : null;
  }

  // Every active brief setting, across tenants, for the worker's sweep. Found live (fresh-module audit,
  // same shape as nexus/alerts/settings.js's listActive): a fixed limit with no further paging meant a
  // single sweep always saw the exact same oldest rows -- anyone past the limit was permanently excluded
  // from every future sweep, not just skipped once. A keyset cursor on (created_at, schedule_id) lets the
  // caller page through every active row in one sweep.
  async listActive({ limit = 500, afterCreatedAt = null, afterScheduleId = null } = {}) {
    const values = [JOB_TYPE];
    let where = "job_type=$1 and state='active'";
    if (afterCreatedAt && afterScheduleId) { values.push(afterCreatedAt, afterScheduleId); where += ` and (created_at, schedule_id) > ($${values.length - 1}, $${values.length})`; }
    values.push(Math.min(Math.max(Number(limit) || 500, 1), 2000));
    const result = await this.db.query(`select schedule_id,tenant_id,owner_id,payload,timezone,created_at from nexus_schedules
      where ${where} order by created_at, schedule_id limit $${values.length}`, values);
    return (result.rows || result).map(row => ({ scheduleId: row.schedule_id, tenantId: row.tenant_id, userId: row.owner_id,
      timeOfDay: row.payload?.timeOfDay, timeZone: row.payload?.timeZone || row.timezone, createdAt: row.created_at }));
  }
}

module.exports = Object.freeze({ BriefSettingsRepository, JOB_TYPE, PARKED });
