"use strict";

const { createId } = require("../contracts/identifiers.js");

class ScheduleRepository {
  constructor(db) {
    if (!db?.query || !db?.transaction) throw new Error("A transactional database runtime is required.");
    this.db = db;
  }

  async create(item) {
    if (!item.tenantId || !item.ownerId || !item.jobType || !item.timezone || !item.nextRunAt) {
      throw new Error("Schedule tenant, owner, job type, timezone, and next run are required.");
    }
    const result = await this.db.query(`insert into nexus_schedules
      (schedule_id,tenant_id,owner_id,task_id,job_type,payload,cadence,timezone,next_run_at,state)
      values ($1,$2,$3,$4,$5,$6,$7,$8,$9,'active') returning *`, [item.scheduleId || createId("schedule"),
      item.tenantId, item.ownerId, item.taskId || null, item.jobType, item.payload || {}, item.cadence || { once: true },
      item.timezone, item.nextRunAt]);
    return (result.rows || result)[0];
  }

  async dispatchDue({ jobs, limit = 100, now = new Date() }) {
    if (!jobs?.enqueue) throw new Error("A durable job repository is required.");
    return this.db.transaction(async trx => {
      const due = await trx.query(`select * from nexus_schedules where state='active' and next_run_at<=$1
        order by next_run_at,schedule_id for update skip locked limit $2`, [now, Math.min(Math.max(limit, 1), 500)]);
      const dispatched = [];
      for (const schedule of due.rows || due) {
        const occurrence = new Date(schedule.next_run_at).toISOString();
        const job = await jobs.enqueue({ tenantId: schedule.tenant_id, taskId: schedule.task_id,
          jobType: schedule.job_type, queue: "default", payload: { ...schedule.payload, scheduleId: schedule.schedule_id,
            ownerId: schedule.owner_id, occurrence }, idempotencyKey: `schedule:${schedule.schedule_id}:${occurrence}` });
        const next = nextOccurrence(schedule.cadence, schedule.next_run_at);
        await trx.query(`update nexus_schedules set state=$2,last_run_at=next_run_at,next_run_at=coalesce($3,next_run_at),
          updated_at=now() where schedule_id=$1`, [schedule.schedule_id, next ? "active" : "completed", next]);
        dispatched.push({ scheduleId: schedule.schedule_id, jobId: job.job_id || job.jobId, occurrence });
      }
      return dispatched;
    });
  }
}

function nextOccurrence(cadence, current) {
  if (!cadence || cadence.once === true) return null;
  const seconds = Number(cadence.everySeconds || 0);
  if (!Number.isFinite(seconds) || seconds < 60) throw new Error("Recurring schedules require everySeconds of at least 60.");
  return new Date(new Date(current).getTime() + seconds * 1000);
}

module.exports = Object.freeze({ ScheduleRepository, nextOccurrence });
