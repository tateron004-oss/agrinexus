"use strict";

const { createId } = require("../contracts/identifiers.js");

// The notification that carries an autonomous task's outcome summary is
// tagged with this content.kind so notifications.deliver can recognize it as
// render evidence for that specific task -- not any other notification that
// happens to reference the same taskId (e.g. a reminder's own future-dated
// payload, which is content the user asked for, not evidence the task itself
// was delivered).
const AUTONOMOUS_OUTCOME_NOTIFICATION_KIND = "autonomous_task_outcome";

function createHandlers({ runtime, deliveryProviders = {} }) {
  if (!runtime) throw new Error("The authoritative runtime is required.");
  return Object.freeze({
    "acceptance.canary": async ({ job }) => ({ accepted: true, releaseSha: process.env.RENDER_GIT_COMMIT || process.env.GIT_SHA || "development",
      nonce: required(job.payload?.nonce, "Acceptance canary nonce") }),
    "schedules.dispatch": async ({ job }) => ({ dispatched: await runtime.schedules.dispatchDue({ jobs: runtime.jobs,
      limit: job.payload?.limit || 100 }) }),
    "notifications.deliver": async ({ job, heartbeat }) => {
      const claimed = await runtime.notifications.claim(job.payload?.limit || 25);
      const outcomes = [];
      for (const notification of claimed) {
        await heartbeat();
        const provider = deliveryProviders[notification.channel];
        if (typeof provider !== "function") {
          const failedRow = await runtime.notifications.failed(notification.notification_id, { code: "delivery_provider_unavailable",
            message: `No ${notification.channel} delivery provider is configured.` });
          if (failedRow?.state === "failed") await blockStalledAutonomousTaskIfApplicable({ runtime, notification,
            error: { code: "delivery_provider_unavailable" } });
          outcomes.push({ notificationId: notification.notification_id, delivered: false, code: "delivery_provider_unavailable" });
          continue;
        }
        try {
          const receipt = await provider(notification);
          if (!receipt?.verified) throw Object.assign(new Error("Delivery provider returned no verified receipt."), { code: "delivery_unverified" });
          await runtime.notifications.delivered(notification.notification_id);
          await acknowledgeAutonomousOutcomeIfApplicable({ runtime, notification, receipt });
          outcomes.push({ notificationId: notification.notification_id, delivered: true, receipt });
        } catch (error) {
          const failedRow = await runtime.notifications.failed(notification.notification_id, { code: error.code || "delivery_failed", message: error.message });
          if (failedRow?.state === "failed") await blockStalledAutonomousTaskIfApplicable({ runtime, notification,
            error: { code: error.code || "delivery_failed" } });
          outcomes.push({ notificationId: notification.notification_id, delivered: false, code: error.code || "delivery_failed" });
        }
      }
      return { outcomes };
    },
    "retention.sweep": async ({ job }) => ({ purged: await runtime.dataLifecycle.purgeExpired({ limit: job.payload?.limit || 100 }) }),
    "deletion.execute": async ({ job }) => runtime.dataLifecycle.executeDeletion({ tenantId: job.tenant_id,
      requestId: required(job.payload?.requestId, "Deletion request ID") }),
    // Advances one task exactly the way BehaviorSpine.turn() would inside a
    // live conversation, minus the live render -- the only caller that ever
    // needed to be a live HTTP request. Triggered immediately when an
    // autonomous task is created (AuthoritativeTaskEngine.create()) and again
    // by agent.sweep-advanceable-tasks whenever one stalls.
    "agent.advance-task": async ({ job }) => {
      const taskId = required(job.payload?.taskId, "Task ID for agent.advance-task");
      const task = await runtime.tasks.get({ tenantId: job.tenant_id, taskId, includeSteps: false });
      if (!task) throw Object.assign(new Error("Task not found for agent.advance-task."), { code: "task_not_found" });
      if (["completed", "cancelled", "blocked", "expired"].includes(task.state)) {
        return { taskId, state: task.state, alreadyTerminal: true };
      }
      const context = systemContextForTask(task);
      const result = await runtime.engine.executeTask({ context, taskId });
      if (result.state === "awaiting_confirmation") {
        // A human still has to explicitly approve a confirmation-required
        // step -- notify them instead of silently stalling or, worse,
        // auto-approving on their behalf.
        await runtime.notifications.enqueue({ tenantId: job.tenant_id, userId: task.ownerId, taskId,
          channel: "push", scheduledAt: new Date(),
          idempotencyKey: `agent-confirm:${taskId}:${result.pendingStepId}`,
          content: { kind: "autonomous_task_confirmation", title: "Kyro needs your approval",
            body: `Kyro is ready to continue "${task.goal}" and needs your OK to proceed.`, taskId, stepId: result.pendingStepId } });
        return { taskId, state: "awaiting_confirmation" };
      }
      if (result.state === "awaiting_render" && task.autonomous) {
        await runtime.notifications.enqueue({ tenantId: job.tenant_id, userId: task.ownerId, taskId,
          channel: "push", scheduledAt: new Date(),
          idempotencyKey: `agent-outcome:${taskId}`,
          content: { kind: AUTONOMOUS_OUTCOME_NOTIFICATION_KIND, title: "Kyro finished a task",
            body: `Done: ${task.goal}`, taskId } });
        return { taskId, state: "awaiting_render", outcomeNotificationQueued: true };
      }
      return { taskId, state: result.state };
    },
    // Self-healing: re-drives any autonomous task that has sat in queued,
    // running, or verifying without progress past the staleness window --
    // a crashed worker, a missed job, or (for verifying) a step-approval
    // that nothing had re-triggered execution for. A live-conversation task
    // stuck the same way is a real bug worth surfacing, not something to
    // silently keep retrying, so only autonomous:true tasks are touched here.
    "agent.sweep-advanceable-tasks": async ({ job }) => {
      const staleMs = Number(job.payload?.staleMs || 120000);
      const stale = await runtime.tasks.listStale({ states: ["queued", "running", "verifying"],
        staleBefore: new Date(Date.now() - staleMs), limit: job.payload?.limit || 50 });
      let requeued = 0;
      for (const task of stale) {
        if (!task.autonomous) continue;
        await runtime.jobs.enqueue({ tenantId: task.tenantId, taskId: task.taskId, jobType: "agent.advance-task",
          idempotencyKey: `agent-advance-sweep:${task.taskId}:${createId("job")}`, payload: { taskId: task.taskId } });
        requeued += 1;
      }
      return { scanned: stale.length, requeued };
    }
  });
}

// A background job has no signed-in caller -- it acts as the task's own
// owner (the person who, directly or via a proactive trigger, is the reason
// this task exists) with exactly the permission every canonical tool's
// required_permission actually checks for (see canonical-provider-definitions.js).
function systemContextForTask(task) {
  return { tenantId: task.tenantId, userId: task.ownerId, requestId: `agent-advance:${task.taskId}`,
    hasRole: () => false, can: permission => permission === "tasks:execute" };
}

async function acknowledgeAutonomousOutcomeIfApplicable({ runtime, notification, receipt }) {
  if (notification.content?.kind !== AUTONOMOUS_OUTCOME_NOTIFICATION_KIND || !notification.task_id) return;
  const task = await runtime.tasks.get({ tenantId: notification.tenant_id, taskId: notification.task_id, includeSteps: false });
  if (!task || !task.autonomous || task.state !== "verifying") return;
  try {
    await runtime.engine.acknowledgeAutonomousDelivery({ context: systemContextForTask(task), taskId: task.taskId,
      commandId: task.commandId, correlationId: task.correlationId, deliveryReceipt: receipt });
  } catch {
    // A concurrent acknowledgement or a state change between the guard check
    // above and this call must not fail the notification-delivery job --
    // the notification itself was genuinely delivered either way.
  }
}

async function blockStalledAutonomousTaskIfApplicable({ runtime, notification, error }) {
  if (notification.content?.kind !== AUTONOMOUS_OUTCOME_NOTIFICATION_KIND || !notification.task_id) return;
  const task = await runtime.tasks.get({ tenantId: notification.tenant_id, taskId: notification.task_id, includeSteps: false });
  if (!task || !task.autonomous || task.state !== "verifying") return;
  try {
    await runtime.engine.transition({ tenantId: task.tenantId, taskId: task.taskId, actorId: "nexus-autonomy",
      nextState: "blocked", reason: `Autonomous outcome delivery failed permanently: ${error.code || "delivery_failed"}` });
  } catch {
    // Best-effort -- a task stuck at verifying is still visible via the
    // audit trail and the review surface even if this particular transition
    // loses a race.
  }
}

function required(value, label) { if (!value) throw new Error(`${label} is required.`); return value; }

module.exports = Object.freeze({ createHandlers, AUTONOMOUS_OUTCOME_NOTIFICATION_KIND });
