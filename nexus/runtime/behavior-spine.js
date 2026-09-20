"use strict";

const { NexusRuntimeError } = require("./authoritative-task-engine.js");
const { createWorkspaceOutcome } = require("../contracts/workspace-outcome.js");
const { createCommand } = require("../contracts/command.js");
const crypto = require("node:crypto");

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
    const execution = await this.engine.executeTask({ context, taskId });
    const task = await this.tasks.get({ tenantId: context.tenantId, taskId, includeSteps: true });
    return this.resolveExecution({ command, plan, execution, task, context });
  }

  async resolveExecution({ command, plan, execution, task, context }) {
    if (execution.state === "awaiting_confirmation") {
      return envelope({ command, plan, task, execution, state: "confirmation_required", completed: false,
        response: "I prepared the request and need your confirmation before the next governed action.",
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
