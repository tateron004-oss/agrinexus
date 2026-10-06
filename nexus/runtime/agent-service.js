"use strict";

const { createCommand } = require("../contracts/command.js");
const { structuredIntakePlan } = require("../intake/structured-intakes.js");

class AgentService {
  constructor({ planner, engine, tasks, conversations, audit, cutover = null }) {
    Object.assign(this, { planner, engine, tasks, conversations, audit, cutover });
  }

  // The part of committing a plan to a real task that's identical whether the plan came from the
  // AI planner (command()) or a completed structured voice intake (intake()): the cutover check,
  // task creation, the assistant's "I created a plan" conversation turn, and the audit entry.
  async #commitPlan({ command, context, plan, priorTask, auditMetadata = {} }) {
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
      metadata: { application: plan.application, planningAttempts: plan.planningAttempts, continuedFrom: priorTask?.taskId || null, ...auditMetadata } });
    return { command, task, plan, action: priorTask ? "continue" : "create" };
  }

  // A foreign/absent conversationId is resolved to either the caller's own conversation or a fresh
  // one, the same rule command() applies below -- shared so intake() can't be pointed at (or read
  // the history of) a conversation it doesn't own just by supplying someone else's id.
  async #ownConversationId({ requestedConversationId, context }) {
    const conversationOwnerId = requestedConversationId
      ? await this.conversations?.owner?.({ tenantId: context.tenantId, conversationId: requestedConversationId })
      : null;
    return conversationOwnerId && conversationOwnerId !== context.userId ? null : requestedConversationId;
  }

  // Turns a completed voice intake's already-collected, already-validated structured answers
  // (see public/kyro-voice-intake.js) directly into a plan step and commits it through the same
  // path as any other command -- deliberately skipping the AI planner/regex parser entirely, since
  // the answers are already clean structured data, not a sentence that needs re-extracting.
  async intake({ input, context }) {
    const ownConversationId = await this.#ownConversationId({ requestedConversationId: input.conversationId || null, context });
    const plan = structuredIntakePlan(input.intakeId, input.values);
    const command = createCommand({ text: plan.goal, channel: input.channel || "voice", locale: input.locale,
      correlationId: input.correlationId, conversationId: ownConversationId, tenantId: context.tenantId, actorId: context.userId });
    await this.conversations?.ensure({ conversationId: command.conversationId, tenantId: context.tenantId,
      ownerId: context.userId, title: plan.goal });
    await this.conversations?.append({ tenantId: context.tenantId, conversationId: command.conversationId,
      actorId: context.userId, role: "user", content: `Answered the ${input.intakeId} questions by voice.`,
      provenance: { channel: command.channel, locale: command.locale, correlationId: command.correlationId } });
    return this.#commitPlan({ command, context, plan, priorTask: null, auditMetadata: { structuredIntake: input.intakeId } });
  }

  async command({ input, context }) {
    // A caller-supplied conversationId is otherwise only tenant-scoped in storage,
    // not owner-scoped -- without this, any tenant member could point at another
    // user's conversationId (returned in plaintext elsewhere, e.g. task-creation
    // and behavior-turn responses) and both read their private message history
    // into this turn's planning context and write into their conversation under
    // a different actorId. Treat a foreign conversationId exactly like an absent
    // one: createCommand() below generates a fresh id when none is supplied.
    const ownConversationId = await this.#ownConversationId({ requestedConversationId: input.conversationId || null, context });
    const command = createCommand({ ...input, conversationId: ownConversationId, tenantId: context.tenantId, actorId: context.userId });
    const fetchedTask = command.taskId ? await this.tasks.get({ tenantId: context.tenantId, taskId: command.taskId }) : null;
    // A caller-supplied taskId is otherwise only tenant-scoped, not owner-scoped -- without this
    // check any tenant member could pull another user's task goal/state/outcome into their own
    // planning turn (and into the raw API response) just by guessing/reusing a taskId.
    const priorTask = fetchedTask && fetchedTask.ownerId === context.userId ? fetchedTask : null;
    // deterministicOnly: the spoken path asks only for the answers Kyro can give and save itself (no AI model, no tool steps). When the
    // planner has no such answer the turn is deferred to the caller's own pipeline, so nothing is written for it -- no conversation row,
    // no stored message, no task -- until there is a real answer to record.
    const deterministicOnly = context?.deterministicOnly === true;
    const ensureConversation = () => this.conversations?.ensure({ conversationId: command.conversationId, tenantId: context.tenantId,
      ownerId: context.userId, title: priorTask?.goal || command.text });
    const appendUserMessage = () => this.conversations?.append({ tenantId: context.tenantId, conversationId: command.conversationId,
      actorId: context.userId, role: "user", content: command.text,
      provenance: { channel: command.channel, locale: command.locale, correlationId: command.correlationId } });
    if (!deterministicOnly) await ensureConversation();
    // The spoken path normally reads no history, but a short reply ("yes") may be the answer to what Kyro just asked, such as the offer to alert the
    // trusted circle (companion/offer.js): then, and only then, it reads the last few turns.
    const mayAnswerKyro = deterministicOnly && String(command.text || "").trim().length <= 40;
    const conversationHistory = this.conversations && (!deterministicOnly || mayAnswerKyro)
      ? await this.conversations.recent({ tenantId: context.tenantId, conversationId: command.conversationId, limit: deterministicOnly ? 4 : 24 })
        .catch(error => { if (!deterministicOnly) throw error; return []; }) : [];
    if (!deterministicOnly) await appendUserMessage();
    const plan = await this.planner.plan({ command, context, priorTask, conversationHistory });
    if (deterministicOnly) {
      if (plan.deferred || !plan.response || plan.modelAnswered === true) return { command, task: priorTask, plan, action: "defer" };
      await ensureConversation();
      await appendUserMessage();
    }
    if (plan.response) {
      await this.conversations?.append({ tenantId: context.tenantId, conversationId: command.conversationId,
        actorId: null, role: "assistant", content: plan.response,
        provenance: { type: plan.modelAnswered ? "model_conversation" : "conversation", systemActor: "nexus-brain", correlationId: command.correlationId,
          sourceRequired: false, providerInvoked: plan.modelAnswered === true } });
      await this.audit.record({ tenantId: context.tenantId, actorId: context.userId, correlationId: command.correlationId,
        taskId: priorTask?.taskId || null, eventType: "conversation.responded", outcome: "completed",
        metadata: { application: "conversation", sourceRequired: false, providerInvoked: plan.modelAnswered === true } });
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
    return this.#commitPlan({ command, context, plan, priorTask });
  }
}

module.exports = Object.freeze({ AgentService });
