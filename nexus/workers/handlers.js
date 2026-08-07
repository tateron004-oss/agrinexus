const { createRequestContext } = require("../../foundation/src/runtime/request-context.js");

function createHandlers({ runtime }) {
  if (!runtime?.engine) throw new Error("The authoritative Nexus runtime is required.");
  return Object.freeze({
    "task.execute": async ({ job, heartbeat }) => {
      const payload = job.payload || {};
      const actorId = required(payload.actorId, "payload.actorId");
      const taskId = required(job.task_id, "job.task_id");
      const stepId = required(job.step_id, "job.step_id");
      await heartbeat();
      return runtime.engine.execute({
        context: createRequestContext({
          tenantId: required(job.tenant_id, "job.tenant_id"),
          userId: actorId,
          requestId: payload.requestId || job.job_id,
          roles: stringArray(payload.roles),
          permissions: stringArray(payload.permissions),
          ipAddress: null
        }),
        taskId,
        stepId
      });
    }
  });
}

function required(value, field) {
  const normalized = String(value || "").trim();
  if (!normalized) {
    const error = new Error(`${field} is required.`);
    error.code = "invalid_job_payload";
    throw error;
  }
  return normalized;
}

function stringArray(value) {
  return Array.isArray(value) ? value.map(item => String(item).trim()).filter(Boolean) : [];
}

module.exports = Object.freeze({ createHandlers });
