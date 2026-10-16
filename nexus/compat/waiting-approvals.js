"use strict";

// What Kyro has drafted on its own and is waiting for the person's yes on, in words the person can read before they decide (the "ask first" side of
// Kyro acting on its own: a follow-up message to a client, say, is only ever drafted; it is sent when the person taps Send it). Read from the person's own
// tasks that stopped at a step needing confirmation. Only a message that Kyro would send (communications.send) is shown with buttons, because the exact
// words and the recipient can be shown in full; anything else stays a line in the activity list. Nothing here changes anything.

const SENDABLE_TOOL = "communications.send";
const MAX_SHOWN = 10;

function pendingStep(steps) {
  return (Array.isArray(steps) ? steps : []).filter(step => step && step.confirmation_state === "required" && step.state !== "completed").sort((a, b) => Number(a.sequence) - Number(b.sequence))[0] || null;
}

function describe(task, step) {
  const input = step.input && typeof step.input === "object" ? step.input : {};
  const message = String(input.message || input.text || input.body || "").replace(/\s+/g, " ").trim().slice(0, 600);
  const to = String(input.to || input.recipient || "").trim().slice(0, 120);
  if (!message || !to) return null;
  return {
    taskId: task.taskId, stepId: step.step_id, goal: String(task.goal || "").slice(0, 160), autonomous: task.autonomous === true,
    channel: String(input.channel || "sms").toLowerCase().slice(0, 12), to, subject: String(input.subject || "").replace(/\s+/g, " ").trim().slice(0, 120), message
  };
}

function createWaitingApprovalsApi(engine) {
  return Object.freeze({
    async list(request) {
      try {
        const { tenantId, userId } = request.context;
        const tasks = await engine.tasks.list({ tenantId, ownerId: userId, state: "awaiting_confirmation", limit: 40 });
        const approvals = [];
        for (const task of tasks) {
          if (approvals.length >= MAX_SHOWN) break;
          const full = await engine.tasks.get({ tenantId, taskId: task.taskId, includeSteps: true });
          const step = pendingStep(full?.steps);
          if (!step || step.tool_id !== SENDABLE_TOOL) continue;
          const shown = describe(task, step);
          if (shown) approvals.push(shown);
        }
        return { status: 200, body: { approvals } };
      } catch (error) {
        return { status: 500, body: { error: "I could not read what is waiting for your yes just now.", code: "waiting_approvals_failed" } };
      }
    }
  });
}

module.exports = Object.freeze({ createWaitingApprovalsApi, pendingStep, describe, SENDABLE_TOOL });
