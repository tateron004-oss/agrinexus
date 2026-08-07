class JobRepository {
  constructor(db) {
    if (!db || typeof db.query !== "function") throw new Error("A database runtime is required.");
    this.db = db;
  }

  async enqueue(job) {
    const result = await this.db.query(`insert into nexus_worker_jobs
      (job_id, tenant_id, task_id, job_type, idempotency_key, payload, available_at, max_attempts)
      values ($1,$2,$3,$4,$5,$6::jsonb,$7,$8)
      on conflict (tenant_id, idempotency_key) do update set idempotency_key=excluded.idempotency_key
      returning *`, [job.jobId, job.tenantId, job.taskId || null, job.jobType,
      job.idempotencyKey, JSON.stringify(job.payload || {}), job.availableAt, job.maxAttempts || 5]);
    return (result.rows || result)[0];
  }

  async claim({ workerId, leaseSeconds = 60 }) {
    return this.db.transaction(async trx => {
      const result = await trx.query(`with candidate as (
        select job_id from nexus_worker_jobs
        where state='queued' and available_at <= now()
        order by available_at, created_at
        for update skip locked limit 1
      ) update nexus_worker_jobs j set state='leased', leased_by=$1,
        lease_expires_at=now() + ($2 * interval '1 second'), attempts=j.attempts+1, updated_at=now()
        from candidate where j.job_id=candidate.job_id returning j.*`, [workerId, leaseSeconds]);
      return (result.rows || result)[0] || null;
    });
  }
}

module.exports = Object.freeze({ JobRepository });
