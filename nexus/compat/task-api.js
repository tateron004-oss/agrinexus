const { createCommand } = require("../contracts/command.js");
const { NexusRuntimeError } = require("../runtime/authoritative-task-engine.js");

function createTaskApi(engine) {
  return Object.freeze({
    async create(request) {
      return respond(async () => engine.create({
        command: createCommand({ correlationId: request.context.requestId, tenantId: request.context.tenantId,
          actorId: request.context.userId, channel: request.channel || "api", locale: request.locale || "en",
          text: request.body?.goal, conversationId: request.body?.conversationId }),
        goal: request.body?.goal, application: request.body?.application, riskTier: request.body?.riskTier,
        priority: request.body?.priority, dueAt: request.body?.dueAt, steps: request.body?.steps
      }), 201);
    },
    async get(request) { return respond(() => engine.tasks.get({ tenantId: request.context.tenantId, taskId: request.params.taskId })); },
    async transition(request) { return respond(() => engine.transition({ tenantId: request.context.tenantId,
      taskId: request.params.taskId, actorId: request.context.userId, nextState: request.body?.state,
      reason: request.body?.reason, outcome: request.body?.outcome })); },
    async approve(request) { return respond(() => engine.approve({ tenantId: request.context.tenantId,
      taskId: request.params.taskId, stepId: request.params.stepId, actorId: request.context.userId,
      approved: request.body?.approved })); },
    async execute(request) { return respond(() => engine.execute({ context: request.context,
      taskId: request.params.taskId, stepId: request.params.stepId })); }
  });
}

async function respond(work, successStatus = 200) {
  try { const body = await work(); return { status: successStatus, body }; }
  catch (error) {
    if (error instanceof NexusRuntimeError) return { status: error.status, body: { error: error.message, code: error.code, details: error.details } };
    throw error;
  }
}

module.exports = Object.freeze({ createTaskApi });
