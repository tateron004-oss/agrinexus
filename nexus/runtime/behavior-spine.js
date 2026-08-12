"use strict";

const { NexusRuntimeError } = require("./authoritative-task-engine.js");
const { createWorkspaceOutcome } = require("../contracts/workspace-outcome.js");

class BehaviorSpine {
  constructor({ agent, engine, tasks, conversations, workspaceStates }) {
    if (!agent?.command || !engine?.executeTask || !tasks?.get || !workspaceStates?.stage || !workspaceStates?.acknowledge) {
      throw new Error("The authoritative agent, task engine, and task repository are required.");
    }
    Object.assign(this, { agent, engine, tasks, conversations, workspaceStates });
  }

  async turn({ input, context }) {
    const planned = await this.agent.command({ input, context });
    if (planned.action === "clarify") {
      return envelope({ planned, state: "clarification_required", completed: false,
        response: planned.plan.clarification, outcome: { verified: false, reason: "clarification_required" } });
    }

    const execution = await this.engine.executeTask({ context, taskId: planned.task.taskId });
    const task = await this.tasks.get({ tenantId: context.tenantId, taskId: planned.task.taskId, includeSteps: true });
    if (execution.state === "awaiting_confirmation") {
      return envelope({ planned, execution, task, state: "confirmation_required", completed: false,
        response: "I prepared the request and need your confirmation before the next governed action.",
        outcome: { verified: false, reason: "confirmation_required", pendingStepId: execution.pendingStepId } });
    }
    if (execution.state === "awaiting_render") {
      const result = envelope({ planned, execution, task, state: "render_required", completed: false,
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
    await this.conversations?.append?.({ tenantId: context.tenantId, conversationId: planned.command.conversationId,
      actorId: null, role: "assistant", content: response,
      provenance: { type: "verified_outcome", systemActor: "nexus-brain", taskId: task.taskId,
        receiptIds: execution.receipts.map(item => item.receiptId) } });
    return envelope({ planned, execution, task, state: "completed", completed: true, response,
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

function envelope({ planned, execution = null, task = planned.task, state, completed, response, outcome }) {
  const render = createWorkspaceOutcome({ command: planned.command, plan: planned.plan, task,
    state, response, outcome });
  return Object.freeze({ schema: "nexus.behavior-turn.v1", authoritative: true,
    legacyFallbackUsed: false, commandId: planned.command.commandId,
    correlationId: planned.command.correlationId, conversationId: planned.command.conversationId,
    taskId: task?.taskId || null, application: planned.plan.application, state, completed,
    response, outcome, plan: planned.plan,
    receipts: execution?.receipts || [], render });
}

module.exports = Object.freeze({ BehaviorSpine });
