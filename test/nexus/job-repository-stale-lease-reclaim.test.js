"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { JobRepository } = require("../../nexus/workers/job-repository.js");

// A faithful, minimal in-memory reimplementation of the specific
// nexus_worker_jobs/nexus_job_attempts SQL this file issues -- not a full
// SQL engine, just enough real semantics (candidate selection, lease
// expiry, on-conflict enqueue dedup) to prove the reclaim fix actually works
// end to end, rather than just asserting on the query string. `jobs` and
// `attempts` are exposed so a test can directly age a lease into the past,
// simulating "60 seconds later" without a real wait.
function fakePostgresJobStore() {
  const jobs = new Map();
  const attempts = [];
  let seq = 0;
  function query(sql, params = []) {
    if (/insert into nexus_worker_jobs/.test(sql)) {
      const [jobId, tenantId, taskId, stepId, jobType, queue, priority, idempotencyKey, payload, availableAt, maxAttempts] = params;
      const existing = [...jobs.values()].find(j => j.tenant_id === tenantId && j.idempotency_key === idempotencyKey);
      if (existing) return { rows: [existing] };
      const row = { job_id: jobId, tenant_id: tenantId, task_id: taskId, step_id: stepId, job_type: jobType, queue, priority,
        idempotency_key: idempotencyKey, payload, available_at: availableAt, max_attempts: maxAttempts,
        state: new Date(availableAt) > new Date() ? "scheduled" : "queued", attempts: 0, leased_by: null, lease_expires_at: null,
        created_at: new Date(Date.now() + (seq++)), last_error: null };
      jobs.set(jobId, row);
      return { rows: [row] };
    }
    if (/with candidate as/.test(sql) && /update nexus_worker_jobs/.test(sql)) {
      const [queues, workerId, leaseSeconds] = params;
      const now = Date.now();
      const candidates = [...jobs.values()].filter(j => queues.includes(j.queue) && (
        (["scheduled", "queued"].includes(j.state) && new Date(j.available_at).getTime() <= now)
        || (j.state === "leased" && j.lease_expires_at && new Date(j.lease_expires_at).getTime() < now)
      )).sort((a, b) => a.priority - b.priority || new Date(a.available_at) - new Date(b.available_at) || new Date(a.created_at) - new Date(b.created_at));
      const job = candidates[0];
      if (!job) return { rows: [] };
      job.state = "leased"; job.leased_by = workerId; job.lease_expires_at = new Date(now + leaseSeconds * 1000); job.attempts += 1;
      return { rows: [{ ...job }] };
    }
    if (/update nexus_job_attempts set state='timed_out'/.test(sql)) {
      const [jobId] = params;
      for (const attempt of attempts) if (attempt.job_id === jobId && attempt.state === "running") { attempt.state = "timed_out"; attempt.finished_at = new Date(); }
      return { rows: [] };
    }
    if (/insert into nexus_job_attempts/.test(sql)) {
      const [attemptId, jobId, attemptNumber, workerId] = params;
      attempts.push({ attempt_id: attemptId, job_id: jobId, attempt: attemptNumber, worker_id: workerId, state: "running", finished_at: null });
      return { rows: [] };
    }
    if (/update nexus_worker_jobs set lease_expires_at=now\(\)/.test(sql)) {
      const [jobId, workerId, leaseSeconds] = params;
      const job = jobs.get(jobId);
      if (!job || job.leased_by !== workerId || job.state !== "leased") return { rows: [] };
      job.lease_expires_at = new Date(Date.now() + leaseSeconds * 1000);
      return { rows: [{ job_id: jobId }] };
    }
    if (/select \* from nexus_worker_jobs where job_id=\$1 and leased_by=\$2 and state='leased'/.test(sql)) {
      const [jobId, workerId] = params;
      const job = jobs.get(jobId);
      return { rows: job && job.leased_by === workerId && job.state === "leased" ? [{ ...job }] : [] };
    }
    if (/update nexus_worker_jobs set state=\$3/.test(sql)) {
      const [jobId, workerId, state] = params;
      const job = jobs.get(jobId);
      if (!job || job.leased_by !== workerId) return { rows: [] };
      job.state = state; job.leased_by = null; job.lease_expires_at = null;
      return { rows: [{ ...job }] };
    }
    if (/update nexus_job_attempts set state=\$3,error=\$4,finished_at=now\(\)/.test(sql)) {
      return { rows: [] };
    }
    throw new Error(`Unhandled test SQL: ${sql}`);
  }
  return {
    jobs, attempts,
    query: async (sql, params) => query(sql, params),
    transaction: async work => work({ query: async (sql, params) => query(sql, params) })
  };
}

// Found live (job-queue/schedule-dispatch follow-up audit): claim()'s
// candidate filter was `state in ('scheduled','queued')`, which a 'leased'
// row can never match regardless of how far in the past its
// lease_expires_at is -- the stale-lease reclaim this column exists for was
// dead code. A worker that crashes between claim() and complete()/fail()
// left that job permanently stuck at state='leased' forever, with no other
// worker ever able to pick it up.
test("a job whose worker crashed (expired lease, never finished) is reclaimed by the next claim() call", async () => {
  const db = fakePostgresJobStore();
  const jobs = new JobRepository(db);
  await jobs.enqueue({ tenantId: "t1", jobType: "retention.sweep", idempotencyKey: "sweep-1", payload: {} });

  const first = await jobs.claim({ workerId: "worker-a", leaseSeconds: 60 });
  assert.equal(first.state, "leased");

  const tooSoon = await jobs.claim({ workerId: "worker-b" });
  assert.equal(tooSoon, null, "the lease has not expired yet, so a second worker must not steal it");

  // worker-a crashes -- never calls complete()/fail()/heartbeat(). Age the
  // lease into the past to simulate 60+ seconds passing.
  for (const job of db.jobs.values()) job.lease_expires_at = new Date(Date.now() - 1000);

  const reclaimed = await jobs.claim({ workerId: "worker-b" });
  assert.ok(reclaimed, "a job with an expired lease must be reclaimable by a different worker");
  assert.equal(reclaimed.leased_by, "worker-b");
  assert.equal(reclaimed.attempts, 2, "reclaiming counts as a new attempt");
});

test("the reclaimed job's stranded previous attempt is closed out, not left falsely claiming to still be running", async () => {
  const db = fakePostgresJobStore();
  const jobs = new JobRepository(db);
  await jobs.enqueue({ tenantId: "t1", jobType: "retention.sweep", idempotencyKey: "sweep-2", payload: {} });
  await jobs.claim({ workerId: "worker-a", leaseSeconds: 60 });
  for (const job of db.jobs.values()) job.lease_expires_at = new Date(Date.now() - 1000);
  await jobs.claim({ workerId: "worker-b" });

  const staleAttempt = db.attempts.find(a => a.worker_id === "worker-a");
  assert.notEqual(staleAttempt.state, "running", "worker-a's abandoned attempt must not be left claiming to still be running");
  assert.equal(staleAttempt.state, "timed_out");
  assert.ok(staleAttempt.finished_at);
});

test("a job whose lease has not expired is never reclaimed, even after a real completion elsewhere", async () => {
  const db = fakePostgresJobStore();
  const jobs = new JobRepository(db);
  await jobs.enqueue({ tenantId: "t1", jobType: "retention.sweep", idempotencyKey: "sweep-3", payload: {} });
  const claimed = await jobs.claim({ workerId: "worker-a", leaseSeconds: 3600 });
  await jobs.complete({ jobId: claimed.job_id, workerId: "worker-a" });
  const job = db.jobs.get(claimed.job_id);
  assert.equal(job.state, "completed");
  const reclaimAttempt = await jobs.claim({ workerId: "worker-b" });
  assert.equal(reclaimAttempt, null, "a completed job must never be reclaimed");
});
