"use strict";

const { NexusRuntimeError } = require("./authoritative-task-engine.js");
const { createWorkspaceOutcome } = require("../contracts/workspace-outcome.js");
const { createCommand } = require("../contracts/command.js");
const crypto = require("node:crypto");
const businessDispatch = require("../business/voice-dispatch.js");
const { userConfirmableConsent, consentRecipient, consentSendChannel, dailyCaps, informedConfirmationPrompt } = require("../consent/user-confirmable-consents.js");

// Errors from communications.send that mean nothing went out (the provider is switched off or not configured, or refused the
// request before sending). An undelivered text or failed call is not here: the provider did try, so it still counts.
const NOT_SENT_CODES = new Set(["communications_provider_unavailable", "communications_send_blocked"]);

class BehaviorSpine {
  constructor({ agent, engine, tasks, conversations, workspaceStates }) {
    if (!agent?.command || !engine?.executeTask || !tasks?.get || !workspaceStates?.stage || !workspaceStates?.acknowledge) {
      throw new Error("The authoritative agent, task engine, and task repository are required.");
    }
    Object.assign(this, { agent, engine, tasks, conversations, workspaceStates });
  }

  async turn({ input, context }) {
    const planned = await this.agent.command({ input, context });
    // A plain conversational answer (greeting, "who are you", a general question answered without tools) has
    // no task to execute or render. AgentService already returned it; it used to fall through to
    // executeTask(planned.task.taskId) with no task and surface as a 503 "runtime unavailable".
    if (planned.action === "respond") {
      return conversationEnvelope({ command: planned.command, plan: planned.plan, response: planned.response });
    }
    if (planned.action === "clarify") {
      return envelope({ command: planned.command, plan: planned.plan, task: planned.task,
        state: "clarification_required", completed: false,
        response: planned.plan.clarification, outcome: { verified: false, reason: "clarification_required" } });
    }

    const execution = await this.engine.executeTask({ context, taskId: planned.task.taskId });
    const task = await this.tasks.get({ tenantId: context.tenantId, taskId: planned.task.taskId, includeSteps: true });
    return this.resolveExecution({ command: planned.command, plan: planned.plan, execution, task, context });
  }

  // Resumes a task left in awaiting_confirmation by turn(): approves or
  // rejects the pending step, then continues the same task through the same
  // execution states turn() itself handles, rather than letting a fresh
  // command re-plan from scratch and lose the pending step's context.
  async confirm({ input, context }) {
    const { taskId, stepId, approved } = input;
    if (!taskId) throw new NexusRuntimeError("task_id_required", "A task ID is required to confirm a pending step.", 400);
    if (!stepId) throw new NexusRuntimeError("step_id_required", "A step ID is required to confirm a pending step.", 400);
    const priorTask = await this.tasks.get({ tenantId: context.tenantId, taskId, includeSteps: true });
    if (!priorTask) throw new NexusRuntimeError("task_not_found", "Task not found.", 404);
    if (priorTask.ownerId !== context.userId && !context.hasRole?.("admin")) {
      throw new NexusRuntimeError("task_owner_required", "Only the task owner may confirm this task.", 403);
    }
    const command = createCommand({ text: input.text || (approved ? "Confirmed." : "Cancelled."),
      channel: input.channel || "api", correlationId: input.correlationId || crypto.randomUUID(),
      conversationId: priorTask.conversationId, taskId, tenantId: context.tenantId, actorId: context.userId });
    const plan = { application: priorTask.application, goal: priorTask.goal, riskTier: priorTask.riskTier,
      clarification: null, steps: priorTask.steps || [] };
    await this.engine.approve({ tenantId: context.tenantId, taskId, stepId, actorId: context.userId, approved: Boolean(approved) });
    const consent = approved ? await this.recordConfirmedConsent({ priorTask, stepId, command, context, text: input.text, channel: input.channel }) : null;
    if (consent?.limitReached) {
      const response = `I did not send it: you have used today's limit of ${consent.limit} ${consent.noun || "messages"} through Nexus. Try again tomorrow.`;
      const cancelled = await this.engine.transition({ tenantId: context.tenantId, taskId, actorId: context.userId,
        nextState: "cancelled", reason: "Daily message send limit reached", outcome: { verified: false, reason: "send_limit_reached" } });
      await this.conversations?.append?.({ tenantId: context.tenantId, conversationId: command.conversationId,
        actorId: null, role: "assistant", content: response, provenance: { type: "send_limit_outcome", systemActor: "nexus-brain", taskId } });
      return envelope({ command, plan, task: cancelled, state: "cancelled", completed: false, response,
        outcome: { verified: false, reason: "send_limit_reached" } });
    }
    if (!approved) {
      const cancelled = await this.engine.transition({ tenantId: context.tenantId, taskId, actorId: context.userId,
        nextState: "cancelled", reason: "User declined the requested confirmation",
        outcome: { verified: false, reason: "declined_by_user" } });
      await this.conversations?.append?.({ tenantId: context.tenantId, conversationId: command.conversationId,
        actorId: null, role: "assistant", content: "Okay, I did not proceed with that.",
        provenance: { type: "declined_outcome", systemActor: "nexus-brain", taskId } });
      return envelope({ command, plan, task: cancelled, state: "cancelled", completed: false,
        response: "Okay, I did not proceed with that.", outcome: { verified: false, reason: "declined_by_user" } });
    }
    let execution;
    try {
      execution = await this.engine.executeTask({ context, taskId });
    } catch (error) {
      // A send that verifiably went nowhere (the provider is off, or refused the request before sending) must not use up a slot in
      // the person's daily cap: release the consent that was recorded for it, but only one recorded by this very confirmation.
      if (consent?.justGranted && NOT_SENT_CODES.has(error?.code) && this.engine.consents?.release) {
        await this.engine.consents.release({ tenantId: context.tenantId, subjectId: context.userId, consentId: consent.consent_id, reason: error.code }).catch(() => null);
      }
      throw error;
    }
    const task = await this.tasks.get({ tenantId: context.tenantId, taskId, includeSteps: true });
    return this.resolveExecution({ command, plan, execution, task, context });
  }

  // What the person is asked before they say yes. A step that will write their health information says exactly what
  // is stored and that yes is consent; every other confirmation keeps the generic wording.
  async confirmationPrompt({ task, pendingStepId }) {
    const generic = "I prepared the request and need your confirmation before the next governed action.";
    const step = (task?.steps || []).find(item => item.step_id === pendingStepId);
    const tool = step?.tool_id && this.engine.tools?.get ? await this.engine.tools.get(step.tool_id).catch(() => null) : null;
    return informedConfirmationPrompt({ scope: tool?.consent_scope, step })
      || (step?.tool_id === "business.manage" ? businessDispatch.confirmationPrompt(step.input?.command) : null) || generic;
  }

  // Saying yes to that prompt is the person's consent to that one write. Bound to this task and scope, and only when the
  // task's own owner says it: an administrator confirming for someone else does not consent on their behalf.
  async recordConfirmedConsent({ priorTask, stepId, command, context, text, channel }) {
    const consents = this.engine.consents;
    if (!consents?.grant || !consents?.active || !this.engine.tools?.get) return null;
    if (priorTask.ownerId !== context.userId) return null;
    const step = (priorTask.steps || []).find(item => item.step_id === stepId);
    const tool = step?.tool_id ? await this.engine.tools.get(step.tool_id) : null;
    const policy = userConfirmableConsent(tool?.consent_scope, step);
    if (!policy) return null;
    const existing = await consents.active({ tenantId: context.tenantId, subjectId: context.userId, scope: tool.consent_scope, taskId: priorTask.taskId });
    if (existing) return existing;
    // A capped scope (message sends, calls) stops the action rather than consenting once the person's daily allowance is used.
    if (consents.countGrantedSince) {
      for (const cap of dailyCaps(tool.consent_scope, step)) {
        const used = await consents.countGrantedSince({ tenantId: context.tenantId, subjectId: context.userId, scope: tool.consent_scope, hours: 24, channel: cap.channel });
        if (used >= cap.limit) return { limitReached: true, limit: cap.limit, noun: cap.noun };
      }
    }
    const granted = await consents.grant({ tenantId: context.tenantId, subjectId: context.userId, taskId: priorTask.taskId, scope: tool.consent_scope,
      purpose: policy.purpose, policyVersion: policy.policyVersion, recipient: consentRecipient(tool.consent_scope, step),
      receipt: { source: "user-confirmation", channel: channel || "api", sendChannel: consentSendChannel(tool.consent_scope, step), taskId: priorTask.taskId, stepId, commandId: command.commandId,
        correlationId: command.correlationId, confirmation: String(text || "").slice(0, 200), grantedAt: new Date().toISOString() } });
    return { ...granted, justGranted: true };
  }

  async resolveExecution({ command, plan, execution, task, context }) {
    if (execution.state === "awaiting_confirmation") {
      return envelope({ command, plan, task, execution, state: "confirmation_required", completed: false,
        response: await this.confirmationPrompt({ task, pendingStepId: execution.pendingStepId }),
        outcome: { verified: false, reason: "confirmation_required", pendingStepId: execution.pendingStepId } });
    }
    if (execution.state === "awaiting_render") {
      const result = envelope({ command, plan, task, execution, state: "render_required", completed: false,
        response: "Nexus completed the governed execution and is rendering the verified result.",
        outcome: { verified: true, renderVerified: false, reason: "renderer_acknowledgement_required" } });
      await this.workspaceStates.stage({ tenantId: context.tenantId, ownerId: context.userId,
        taskId: task.taskId, outcome: result.render });
      return result;
    }
    if (!execution.completed || execution.state !== "completed" || task?.outcome?.verified !== true) {
      throw new NexusRuntimeError("behavior_outcome_unverified",
        "Nexus did not verify a visible or audible outcome, so the request is not complete.", 502);
    }
    const response = completedResponse(task);
    await this.conversations?.append?.({ tenantId: context.tenantId, conversationId: command.conversationId,
      actorId: null, role: "assistant", content: response,
      provenance: { type: "verified_outcome", systemActor: "nexus-brain", taskId: task.taskId,
        receiptIds: execution.receipts.map(item => item.receiptId) } });
    return envelope({ command, plan, task, execution, state: "completed", completed: true, response,
      outcome: { verified: true, visibleOrAudible: true,
        receiptIds: execution.receipts.map(item => item.receiptId) } });
  }

  async acknowledge({ input, context }) {
    const execution = await this.engine.acknowledgeRender({ context, taskId: input.taskId,
      commandId: input.commandId, correlationId: input.correlationId, workspace: input.workspace, rendered: input.rendered,
      visible: input.visible, audible: input.audible, evidence: input.evidence });
    await this.workspaceStates.acknowledge({ tenantId: context.tenantId, actorId: context.userId,
      taskId: input.taskId, receipt: { rendered: input.rendered, visible: input.visible,
        audible: input.audible, evidence: input.evidence, observedAt: input.observedAt } });
    return Object.freeze({ schema: "nexus.behavior-acknowledgement.v1", authoritative: true,
      legacyFallbackUsed: false, taskId: input.taskId, commandId: input.commandId,
      state: execution.state, completed: execution.completed, outcome: execution.outcome });
  }
}

function completedResponse(task) {
  const explicit = task?.outcome?.summary || task?.outcome?.message;
  return explicit || `Completed and verified: ${task.goal}`;
}

// The client speaks and shows result.response for any state other than render_required, so a conversational
// turn carries no workspace render (there is no authoritative workspace for "conversation").
function conversationEnvelope({ command, plan, response }) {
  return Object.freeze({ schema: "nexus.behavior-turn.v1", authoritative: true, legacyFallbackUsed: false,
    commandId: command.commandId, correlationId: command.correlationId, conversationId: command.conversationId,
    taskId: null, application: "conversation", state: "completed", completed: true, response,
    outcome: { verified: true, reason: "conversation_response", modelAnswered: plan?.modelAnswered === true },
    plan, receipts: [], render: null });
}

function envelope({ command, plan, execution = null, task = null, state, completed, response, outcome }) {
  const render = createWorkspaceOutcome({ command, plan, task, state, response, outcome });
  return Object.freeze({ schema: "nexus.behavior-turn.v1", authoritative: true,
    legacyFallbackUsed: false, commandId: command.commandId,
    correlationId: command.correlationId, conversationId: command.conversationId,
    taskId: task?.taskId || null, application: plan.application, state, completed,
    response, outcome, plan,
    receipts: execution?.receipts || [], render });
}

module.exports = Object.freeze({ BehaviorSpine });
