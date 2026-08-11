"use strict";

const { NexusRuntimeError } = require("./authoritative-task-engine.js");

class BehaviorSpine {
  constructor({ agent, engine, tasks, conversations }) {
    if (!agent?.command || !engine?.executeTask || !tasks?.get) {
      throw new Error("The authoritative agent, task engine, and task repository are required.");
    }
    Object.assign(this, { agent, engine, tasks, conversations });
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
    if (!execution.completed || execution.state !== "completed" || task?.outcome?.verified !== true) {
      throw new NexusRuntimeError("behavior_outcome_unverified",
        "Nexus did not verify a visible or audible outcome, so the request is not complete.", 502);
    }
    const response = completedResponse(task);
    await this.conversations?.append?.({ tenantId: context.tenantId, conversationId: planned.command.conversationId,
      actorId: "nexus-brain", role: "assistant", content: response,
      provenance: { type: "verified_outcome", taskId: task.taskId,
        receiptIds: execution.receipts.map(item => item.receiptId) } });
    return envelope({ planned, execution, task, state: "completed", completed: true, response,
      outcome: { verified: true, visibleOrAudible: true,
        receiptIds: execution.receipts.map(item => item.receiptId) } });
  }
}

function completedResponse(task) {
  const explicit = task?.outcome?.summary || task?.outcome?.message;
  return explicit || `Completed and verified: ${task.goal}`;
}

function envelope({ planned, execution = null, task = planned.task, state, completed, response, outcome }) {
  return Object.freeze({ schema: "nexus.behavior-turn.v1", authoritative: true,
    legacyFallbackUsed: false, commandId: planned.command.commandId,
    correlationId: planned.command.correlationId, conversationId: planned.command.conversationId,
    taskId: task?.taskId || null, application: planned.plan.application, state, completed,
    response, outcome, plan: planned.plan,
    receipts: execution?.receipts || [], render: { application: planned.plan.application,
      response, taskId: task?.taskId || null, state, outcome } });
}

module.exports = Object.freeze({ BehaviorSpine });
