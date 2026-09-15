"use strict";

const { createCommand } = require("../contracts/command.js");

class AgentService {
  constructor({ planner, engine, tasks, conversations, audit, cutover = null }) {
    Object.assign(this, { planner, engine, tasks, conversations, audit, cutover });
  }

  async command({ input, context }) {
    // A caller-supplied conversationId is otherwise only tenant-scoped in storage,
    // not owner-scoped -- without this, any tenant member could point at another
    // user's conversationId (returned in plaintext elsewhere, e.g. task-creation
    // and behavior-turn responses) and both read their private message history
    // into this turn's planning context and write into their conversation under
    // a different actorId. Treat a foreign conversationId exactly like an absent
    // one: createCommand() below generates a fresh id when none is supplied.
    const requestedConversationId = input.conversationId || null;
    const conversationOwnerId = requestedConversationId
      ? await this.conversations?.owner?.({ tenantId: context.tenantId, conversationId: requestedConversationId })
      : null;
    const ownConversationId = conversationOwnerId && conversationOwnerId !== context.userId ? null : requestedConversationId;
    const command = createCommand({ ...input, conversationId: ownConversationId, tenantId: context.tenantId, actorId: context.userId });
    const fetchedTask = command.taskId ? await this.tasks.get({ tenantId: context.tenantId, taskId: command.taskId }) : null;
    // A caller-supplied taskId is otherwise only tenant-scoped, not owner-scoped -- without this
    // check any tenant member could pull another user's task goal/state/outcome into their own
    // planning turn (and into the raw API response) just by guessing/reusing a taskId.
    const priorTask = fetchedTask && fetchedTask.ownerId === context.userId ? fetchedTask : null;
    await this.conversations?.ensure({ conversationId: command.conversationId, tenantId: context.tenantId,
      ownerId: context.userId, title: priorTask?.goal || command.text });
    const conversationHistory = this.conversations
      ? await this.conversations.recent({ tenantId: context.tenantId, conversationId: command.conversationId, limit: 24 }) : [];
    await this.conversations?.append({ tenantId: context.tenantId, conversationId: command.conversationId,
      actorId: context.userId, role: "user", content: command.text,
      provenance: { channel: command.channel, locale: command.locale, correlationId: command.correlationId } });
    const plan = await this.planner.plan({ command, context, priorTask, conversationHistory });
    if (plan.response) {
      await this.conversations?.append({ tenantId: context.tenantId, conversationId: command.conversationId,
        actorId: null, role: "assistant", content: plan.response,
        provenance: { type: "conversation", systemActor: "nexus-brain", correlationId: command.correlationId,
          sourceRequired: false, providerInvoked: false } });
      await this.audit.record({ tenantId: context.tenantId, actorId: context.userId, correlationId: command.correlationId,
        taskId: priorTask?.taskId || null, eventType: "conversation.responded", outcome: "completed",
        metadata: { application: "conversation", sourceRequired: false, providerInvoked: false } });
      return { command, task: priorTask, plan, application: "conversation", action: "respond", response: plan.response };
    }
    if (plan.clarification) {
      await this.conversations?.append({ tenantId: context.tenantId, conversationId: command.conversationId,
        actorId: null, role: "assistant", content: plan.clarification,
        provenance: { type: "clarification", systemActor: "nexus-brain", correlationId: command.correlationId } });
      await this.audit.record({ tenantId: context.tenantId, actorId: context.userId, correlationId: command.correlationId,
        taskId: priorTask?.taskId || null, eventType: "brain.clarification_requested", outcome: "clarifying", metadata: { question: plan.clarification } });
      return { command, task: priorTask, plan, action: "clarify" };
    }
    // Reasoning owns workspace selection. Cutover is checked only after the
    // authoritative planner has selected an application, never from a legacy
    // browser hint supplied before reasoning.
    const governedPreCutover = context.acceptancePreCutover === true &&
      context.acceptanceApplication === plan.application &&
      context.permissions?.includes("acceptance:identity");
    if (!governedPreCutover) await this.cutover?.requireAuthoritative(plan.application);
    const task = await this.engine.create({ command, goal: plan.goal, application: plan.application,
      riskTier: plan.riskTier, steps: plan.steps });
    await this.conversations?.append({ tenantId: context.tenantId, conversationId: command.conversationId,
      actorId: null, role: "assistant", content: `I created a ${plan.steps.length}-step plan for: ${plan.goal}`,
      provenance: { type: "plan", systemActor: "nexus-brain", taskId: task.taskId, correlationId: command.correlationId } });
    await this.audit.record({ tenantId: context.tenantId, actorId: context.userId, correlationId: command.correlationId,
      taskId: task.taskId, eventType: "brain.plan_committed", outcome: "planned",
      metadata: { application: plan.application, planningAttempts: plan.planningAttempts, continuedFrom: priorTask?.taskId || null } });
    return { command, task, plan, action: priorTask ? "continue" : "create" };
  }
}

module.exports = Object.freeze({ AgentService });
