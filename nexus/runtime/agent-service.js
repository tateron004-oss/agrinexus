"use strict";

const { createCommand } = require("../contracts/command.js");

class AgentService {
  constructor({ planner, engine, tasks, audit }) { Object.assign(this, { planner, engine, tasks, audit }); }

  async command({ input, context }) {
    const command = createCommand({ ...input, tenantId: context.tenantId, actorId: context.userId });
    const priorTask = command.taskId ? await this.tasks.get({ tenantId: context.tenantId, taskId: command.taskId }) : null;
    const plan = await this.planner.plan({ command, context, priorTask });
    if (plan.clarification) {
      await this.audit.record({ tenantId: context.tenantId, actorId: context.userId, correlationId: command.correlationId,
        taskId: priorTask?.taskId || null, eventType: "brain.clarification_requested", outcome: "clarifying", metadata: { question: plan.clarification } });
      return { command, task: priorTask, plan, action: "clarify" };
    }
    const task = await this.engine.create({ command, goal: plan.goal, application: plan.application,
      riskTier: plan.riskTier, steps: plan.steps });
    await this.audit.record({ tenantId: context.tenantId, actorId: context.userId, correlationId: command.correlationId,
      taskId: task.taskId, eventType: "brain.plan_committed", outcome: "planned",
      metadata: { application: plan.application, planningAttempts: plan.planningAttempts, continuedFrom: priorTask?.taskId || null } });
    return { command, task, plan, action: priorTask ? "continue" : "create" };
  }
}

module.exports = Object.freeze({ AgentService });
