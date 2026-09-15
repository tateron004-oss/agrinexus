const { createCommand } = require("../contracts/command.js");
const { NexusRuntimeError } = require("../runtime/authoritative-task-engine.js");

function createTaskApi(engine) {
  return Object.freeze({
    async list(request) { return respond(() => engine.tasks.list({ tenantId: request.context.tenantId,
      ownerId: request.context.userId, state: request.query?.state, limit: request.query?.limit })); },
    async create(request) {
      return respond(async () => engine.create({
        command: createCommand({ correlationId: request.context.requestId, tenantId: request.context.tenantId,
          actorId: request.context.userId, channel: request.channel || "api", locale: request.locale || "en",
          text: request.body?.goal, conversationId: request.body?.conversationId }),
        goal: request.body?.goal, application: request.body?.application, riskTier: request.body?.riskTier,
        priority: request.body?.priority, dueAt: request.body?.dueAt, steps: request.body?.steps
      }), 201);
    },
    async get(request) { return respond(() => assertTaskOwner(engine, request.context, request.params.taskId)); },
    async transition(request) { return respond(async () => { await assertTaskOwner(engine, request.context, request.params.taskId);
      return engine.transition({ tenantId: request.context.tenantId,
        taskId: request.params.taskId, actorId: request.context.userId, nextState: request.body?.state,
        reason: request.body?.reason, outcome: request.body?.outcome }); }); },
    async approve(request) { return respond(async () => { await assertTaskOwner(engine, request.context, request.params.taskId);
      return engine.approve({ tenantId: request.context.tenantId,
        taskId: request.params.taskId, stepId: request.params.stepId, actorId: request.context.userId,
        approved: request.body?.approved }); }); },
    async execute(request) { return respond(async () => { await assertTaskOwner(engine, request.context, request.params.taskId);
      return engine.execute({ context: request.context,
        taskId: request.params.taskId, stepId: request.params.stepId }); }); },
    async executeTask(request) { return respond(() => engine.executeTask({ context: request.context,
      taskId: request.params.taskId })); }
  });
}

// get/transition/approve/execute all resolve a caller-supplied taskId, which
// the underlying repository only scopes by tenant, not by owner. Without this
// check any authenticated tenant member could read, force-transition, approve,
// or execute steps on another user's task (defeating the confirmation gate
// that exists specifically so a risky action requires the *affected user's
// own* consent). create()/executeTask() already enforce this at the engine
// level; this brings the remaining task-scoped entry points in line.
async function assertTaskOwner(engine, context, taskId) {
  const task = await engine.tasks.get({ tenantId: context.tenantId, taskId });
  if (!task) throw new NexusRuntimeError("task_not_found", "Task not found.", 404);
  if (task.ownerId !== context.userId && !context.hasRole?.("admin")) {
    throw new NexusRuntimeError("task_owner_required", "Only the task owner may act on this task.", 403);
  }
  return task;
}

async function respond(work, successStatus = 200) {
  try { const body = await work(); return { status: successStatus, body }; }
  catch (error) {
    if (error instanceof NexusRuntimeError) return { status: error.status, body: { error: error.message, code: error.code, details: error.details } };
    throw error;
  }
}

module.exports = Object.freeze({ createTaskApi });
