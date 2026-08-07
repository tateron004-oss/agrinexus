const { createId } = require("../contracts/identifiers.js");

class JobRepository {
  constructor(db) { if (!db?.query || !db?.transaction) throw new Error("A transactional database runtime is required."); this.db = db; }

  async enqueue(job) {
    const jobId = job.jobId || createId("job");
    const result = await this.db.query(`insert into nexus_worker_jobs
      (job_id,tenant_id,task_id,step_id,job_type,queue,priority,idempotency_key,payload,available_at,max_attempts,state)
      values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,case when $10>now() then 'scheduled' else 'queued' end)
      on conflict (tenant_id,idempotency_key) do update set idempotency_key=excluded.idempotency_key returning *`,
    [jobId, job.tenantId, job.taskId || null, job.stepId || null, job.jobType, job.queue || "default",
      job.priority || 3, job.idempotencyKey, job.payload || {}, job.availableAt || new Date(), job.maxAttempts || 5]);
    return (result.rows || result)[0];
  }

  async claim({ workerId, queues = ["default"], leaseSeconds = 60 }) {
    return this.db.transaction(async trx => {
      const result = await trx.query(`with candidate as (select job_id from nexus_worker_jobs
        where queue=any($1::text[]) and state in ('scheduled','queued') and available_at<=now()
        and (lease_expires_at is null or lease_expires_at<now()) order by priority,available_at,created_at
        for update skip locked limit 1) update nexus_worker_jobs j set state='leased',leased_by=$2,
        lease_expires_at=now()+make_interval(secs=>$3),attempts=j.attempts+1,updated_at=now()
        from candidate where j.job_id=candidate.job_id returning j.*`, [queues, workerId, leaseSeconds]);
      const job = (result.rows || result)[0]; if (!job) return null;
      await trx.query(`insert into nexus_job_attempts(attempt_id,job_id,attempt,worker_id,state)
        values ($1,$2,$3,$4,'running')`, [createId("attempt"), job.job_id, job.attempts, workerId]);
      return job;
    });
  }

  async heartbeat({ jobId, workerId, leaseSeconds = 60 }) {
    const result = await this.db.query(`update nexus_worker_jobs set lease_expires_at=now()+make_interval(secs=>$3),updated_at=now()
      where job_id=$1 and leased_by=$2 and state='leased' returning job_id`, [jobId, workerId, leaseSeconds]);
    return Boolean((result.rows || result)[0]);
  }

  async complete({ jobId, workerId }) { return this.finish({ jobId, workerId, successful: true }); }
  async fail({ jobId, workerId, error, baseDelayMs = 1000 }) { return this.finish({ jobId, workerId, successful: false, error, baseDelayMs }); }

  async finish({ jobId, workerId, successful, error = null, baseDelayMs = 1000 }) {
    return this.db.transaction(async trx => {
      const locked = await trx.query("select * from nexus_worker_jobs where job_id=$1 and leased_by=$2 and state='leased' for update", [jobId, workerId]);
      const job = (locked.rows || locked)[0]; if (!job) return null;
      const dead = !successful && job.attempts >= job.max_attempts;
      const state = successful ? "completed" : dead ? "dead_letter" : "queued";
      const delay = Math.min(baseDelayMs * (2 ** Math.max(job.attempts - 1, 0)), 3600000);
      const result = await trx.query(`update nexus_worker_jobs set state=$3,last_error=$4,leased_by=null,lease_expires_at=null,
        available_at=case when $3='queued' then now()+make_interval(secs=>$5) else available_at end,updated_at=now()
        where job_id=$1 and leased_by=$2 returning *`, [jobId, workerId, state, error, Math.ceil(delay / 1000)]);
      await trx.query(`update nexus_job_attempts set state=$3,error=$4,finished_at=now()
        where job_id=$1 and attempt=$2`, [jobId, job.attempts, successful ? "completed" : dead ? "dead_letter" : "failed", error]);
      return (result.rows || result)[0];
    });
  }
}

module.exports = Object.freeze({ JobRepository });
