const assert = require("node:assert/strict");
const test = require("node:test");
const { createHandlers } = require("../../nexus/workers/handlers.js");
const { NexusWorker } = require("../../nexus/workers/worker.js");

test("managed worker sends durable task jobs through the authoritative task engine", async () => {
  const calls = [];
  const handlers = createHandlers({ runtime: { engine: { execute: async input => {
    calls.push(input);
    return { duplicate: false, receipt: { verification: { verified: true } } };
  } } } });
  let heartbeat = 0;
  const result = await handlers["task.execute"]({
    job: { job_id: "job_1", tenant_id: "tenant_1", task_id: "task_1", step_id: "step_1",
      payload: { actorId: "user_1", requestId: "request_1", permissions: ["tasks:execute"], roles: ["member"] } },
    heartbeat: async () => { heartbeat += 1; }
  });
  assert.equal(heartbeat, 1);
  assert.equal(calls[0].context.tenantId, "tenant_1");
  assert.equal(calls[0].context.can("tasks:execute"), true);
  assert.equal(calls[0].taskId, "task_1");
  assert.equal(result.receipt.verification.verified, true);
});

test("managed worker never marks an unverified handler outcome complete", async () => {
  const completed = [];
  const failed = [];
  const worker = new NexusWorker({ workerId: "worker_1", logger: { error() {} },
    handlers: { "task.execute": async () => ({ execution: { state: "completed" } }) },
    jobs: {
      claim: async () => ({ job_id: "job_1", job_type: "task.execute" }),
      heartbeat: async () => true,
      complete: async input => { completed.push(input); return input; },
      fail: async input => { failed.push(input); return input; }
    }
  });
  const result = await worker.runOne();
  assert.equal(result.completed, false);
  assert.equal(completed.length, 0);
  assert.equal(failed[0].error.code, "unverified_worker_outcome");
});

test("invalid worker authorization snapshots fail closed", async () => {
  const handlers = createHandlers({ runtime: { engine: { execute: async () => assert.fail("must not execute") } } });
  await assert.rejects(() => handlers["task.execute"]({
    job: { job_id: "job_1", tenant_id: "tenant_1", task_id: "task_1", step_id: "step_1", payload: {} },
    heartbeat: async () => true
  }), error => error.code === "invalid_job_payload");
});
