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
        // Found live (job-queue/schedule-dispatch follow-up audit): this whole loop runs inside ONE
        // transaction, so an uncaught throw from any single schedule rolls back every OTHER schedule's
        // advancement in the same batch too, and leaves the poison-pill schedule's own next_run_at
        // unchanged -- so it sorts first again on every subsequent pass and throws every time, forever,
        // blocking the dispatcher for every tenant. This was originally guarded only around
        // nextOccurrence() (a malformed cadence), but jobs.enqueue() (a FK/check-constraint violation on
        // task_id/job_type, or a malformed payload) and the success-path state-transition update below it
        // could throw exactly the same way and were left unguarded -- reopening the identical wedge
        // through a different call. Every real step for one schedule now shares one try/catch: a schedule
        // that can't be dispatched at all is paused (not left "active" to be retried unboundedly) instead
        // of aborting the whole batch.
        try {
          const job = await jobs.enqueue({ tenantId: schedule.tenant_id, taskId: schedule.task_id,
            jobType: schedule.job_type, queue: "default", payload: { ...schedule.payload, scheduleId: schedule.schedule_id,
              ownerId: schedule.owner_id, occurrence }, idempotencyKey: `schedule:${schedule.schedule_id}:${occurrence}` });
          const next = nextOccurrence(schedule.cadence, schedule.next_run_at);
          await trx.query(`update nexus_schedules set state=$2,last_run_at=next_run_at,next_run_at=coalesce($3,next_run_at),
            updated_at=now() where schedule_id=$1`, [schedule.schedule_id, next ? "active" : "completed", next]);
          dispatched.push({ scheduleId: schedule.schedule_id, jobId: job.job_id || job.jobId, occurrence });
        } catch (error) {
          await trx.query(`update nexus_schedules set state='paused',last_run_at=next_run_at,updated_at=now()
            where schedule_id=$1`, [schedule.schedule_id]);
          dispatched.push({ scheduleId: schedule.schedule_id, occurrence, paused: true, error: error.message });
        }
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
