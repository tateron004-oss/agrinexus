"use strict";

const { createCommand } = require("../contracts/command.js");

class AgentService {
  constructor({ planner, engine, tasks, conversations, audit, cutover = null }) {
    Object.assign(this, { planner, engine, tasks, conversations, audit, cutover });
  }

  async command({ input, context }) {
    const command = createCommand({ ...input, tenantId: context.tenantId, actorId: context.userId });
    const priorTask = command.taskId ? await this.tasks.get({ tenantId: context.tenantId, taskId: command.taskId }) : null;
    await this.conversations?.ensure({ conversationId: command.conversationId, tenantId: context.tenantId,
      ownerId: context.userId, title: priorTask?.goal || command.text });
    const conversationHistory = this.conversations
      ? await this.conversations.recent({ tenantId: context.tenantId, conversationId: command.conversationId, limit: 24 }) : [];
    await this.conversations?.append({ tenantId: context.tenantId, conversationId: command.conversationId,
      actorId: context.userId, role: "user", content: command.text,
      provenance: { channel: command.channel, locale: command.locale, correlationId: command.correlationId } });
    const plan = await this.planner.plan({ command, context, priorTask, conversationHistory });
    if (plan.clarification) {
      await this.conversations?.append({ tenantId: context.tenantId, conversationId: command.conversationId,
        actorId: "nexus-brain", role: "assistant", content: plan.clarification,
        provenance: { type: "clarification", correlationId: command.correlationId } });
      await this.audit.record({ tenantId: context.tenantId, actorId: context.userId, correlationId: command.correlationId,
        taskId: priorTask?.taskId || null, eventType: "brain.clarification_requested", outcome: "clarifying", metadata: { question: plan.clarification } });
      return { command, task: priorTask, plan, action: "clarify" };
    }
    // Reasoning owns workspace selection. Cutover is checked only after the
    // authoritative planner has selected an application, never from a legacy
    // browser hint supplied before reasoning.
    await this.cutover?.requireAuthoritative(plan.application);
    const task = await this.engine.create({ command, goal: plan.goal, application: plan.application,
      riskTier: plan.riskTier, steps: plan.steps });
    await this.conversations?.append({ tenantId: context.tenantId, conversationId: command.conversationId,
      actorId: "nexus-brain", role: "assistant", content: `I created a ${plan.steps.length}-step plan for: ${plan.goal}`,
      provenance: { type: "plan", taskId: task.taskId, correlationId: command.correlationId } });
    await this.audit.record({ tenantId: context.tenantId, actorId: context.userId, correlationId: command.correlationId,
      taskId: task.taskId, eventType: "brain.plan_committed", outcome: "planned",
      metadata: { application: plan.application, planningAttempts: plan.planningAttempts, continuedFrom: priorTask?.taskId || null } });
    return { command, task, plan, action: priorTask ? "continue" : "create" };
  }
}

module.exports = Object.freeze({ AgentService });
