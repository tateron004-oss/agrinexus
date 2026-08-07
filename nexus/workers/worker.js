class NexusWorker {
  constructor({ jobs, workerId, handlers, queues = ["default"], logger = console }) {
    Object.assign(this, { jobs, workerId, handlers, queues, logger });
  }
  async runOne() {
    const job = await this.jobs.claim({ workerId: this.workerId, queues: this.queues });
    if (!job) return { claimed: false };
    const handler = this.handlers[job.job_type];
    if (typeof handler !== "function") {
      const error = { code: "handler_unavailable", message: `No handler is registered for ${job.job_type}.` };
      return { claimed: true, completed: false, job: await this.jobs.fail({ jobId: job.job_id, workerId: this.workerId, error }), error };
    }
    try {
      const result = await handler({ job, heartbeat: () => this.jobs.heartbeat({ jobId: job.job_id, workerId: this.workerId }) });
      if (result?.receipt?.verification?.verified !== true) {
        const error = new Error(`Job ${job.job_id} returned without a verified execution receipt.`);
        error.code = "unverified_worker_outcome";
        throw error;
      }
      return { claimed: true, completed: true, job: await this.jobs.complete({ jobId: job.job_id, workerId: this.workerId }), result };
    } catch (cause) {
      const error = { code: cause.code || "job_failed", message: cause.message || "Job failed" };
      this.logger.error("Nexus worker job failed", { jobId: job.job_id, jobType: job.job_type, error });
      return { claimed: true, completed: false, job: await this.jobs.fail({ jobId: job.job_id, workerId: this.workerId, error }), error };
    }
  }
}

module.exports = Object.freeze({ NexusWorker });
