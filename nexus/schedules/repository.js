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
    // Found live (job-queue/schedule-dispatch follow-up audit): cadence's
    // shape was never validated here, only inside nextOccurrence() at
    // dispatch time -- a schedule created with an invalid cadence (e.g.
    // everySeconds under 60, or non-numeric) would persist successfully and
    // only fail once it actually became due, at which point (see
    // dispatchDue below) it could wedge the whole dispatcher. Reject it up
    // front instead, using the exact same rule nextOccurrence enforces.
    validateCadence(item.cadence);
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
        // Found live (job-queue/schedule-dispatch follow-up audit): this
        // whole loop ran inside ONE transaction, so a throw from
        // nextOccurrence for any single schedule (e.g. a malformed cadence
        // that create() previously never validated) rolled back every
        // OTHER schedule's advancement in the same batch too, and left the
        // poison-pill schedule's own next_run_at unchanged -- so it sorted
        // first again on every subsequent pass and threw every time,
        // forever, blocking the dispatcher for every tenant. A schedule
        // whose cadence can't be computed is paused (not left "active" to
        // be retried unboundedly) instead of aborting the whole batch.
        let next;
        try {
          next = nextOccurrence(schedule.cadence, schedule.next_run_at);
        } catch (error) {
          await trx.query(`update nexus_schedules set state='paused',last_run_at=next_run_at,updated_at=now()
            where schedule_id=$1`, [schedule.schedule_id]);
          dispatched.push({ scheduleId: schedule.schedule_id, jobId: job.job_id || job.jobId, occurrence, paused: true, error: error.message });
          continue;
        }
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

// Mirrors nextOccurrence's own rule, applied at creation time instead of
// only at dispatch time -- see create()'s comment above.
function validateCadence(cadence) {
  if (!cadence || cadence.once === true) return;
  const seconds = Number(cadence.everySeconds || 0);
  if (!Number.isFinite(seconds) || seconds < 60) throw new Error("Recurring schedules require everySeconds of at least 60.");
}

module.exports = Object.freeze({ ScheduleRepository, nextOccurrence, validateCadence });
