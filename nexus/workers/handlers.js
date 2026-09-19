"use strict";

const { createId } = require("../contracts/identifiers.js");
const { createCommand } = require("../contracts/command.js");

// The notification that carries an autonomous task's outcome summary is
// tagged with this content.kind so notifications.deliver can recognize it as
// render evidence for that specific task -- not any other notification that
// happens to reference the same taskId (e.g. a reminder's own future-dated
// payload, which is content the user asked for, not evidence the task itself
// was delivered).
const AUTONOMOUS_OUTCOME_NOTIFICATION_KIND = "autonomous_task_outcome";

// situational-awareness.sweep's own cooldown marker: a plain (non-health-
// classified) nexus_records row, reusing RecordRepository rather than adding
// a new table. Its data carries no PHI, just why/when the nudge fired.
const SITUATIONAL_AWARENESS_WORKSPACE_ID = "situational-awareness";
const HEALTH_CHECKIN_NUDGE_RECORD_TYPE = "health_checkin_nudge";

function createHandlers({ runtime, deliveryProviders = {}, logger = null }) {
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
          logger?.warn?.("notifications.delivery_unavailable", { notificationId: notification.notification_id, channel: notification.channel,
            code: "delivery_provider_unavailable" });
          outcomes.push({ notificationId: notification.notification_id, delivered: false, code: "delivery_provider_unavailable" });
          continue;
        }
        try {
          const receipt = await provider(notification);
          if (!receipt?.verified) throw Object.assign(new Error("Delivery provider returned no verified receipt."), { code: "delivery_unverified" });
          await runtime.notifications.delivered(notification.notification_id);
          await acknowledgeAutonomousOutcomeIfApplicable({ runtime, notification, receipt });
          logger?.info?.("notifications.delivered", { notificationId: notification.notification_id, channel: notification.channel, method: receipt.method });
          outcomes.push({ notificationId: notification.notification_id, delivered: true, receipt });
        } catch (error) {
          const failedRow = await runtime.notifications.failed(notification.notification_id, { code: error.code || "delivery_failed", message: error.message });
          if (failedRow?.state === "failed") await blockStalledAutonomousTaskIfApplicable({ runtime, notification,
            error: { code: error.code || "delivery_failed" } });
          logger?.warn?.("notifications.delivery_failed", { notificationId: notification.notification_id, channel: notification.channel,
            code: error.code || "delivery_failed", detail: String(error.message || "").slice(0, 300) });
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
    },
    // Real proactive initiative: Kyro noticing something on its own, with no
    // request from the user in that moment, and acting. The only structural
    // (not freeform-JSONB-guessing) signal nexus_records can honestly support
    // today is staleness -- a subject with a health-classified record and no
    // newer one in a while -- so that's the v1 trigger. The remedial action
    // is scheduling a real reminders.schedule step (already a fully-real,
    // non-confirmation-required tool), not messaging the person directly:
    // communications.send is confirmationRequired, so an autonomous task that
    // tried to use it would correctly stall at awaiting_confirmation and just
    // become another approval notification -- reminders.schedule is the one
    // canonical tool this kind of nudge can complete autonomously end to end.
    "situational-awareness.sweep": async ({ job }) => {
      const staleMs = Number(job.payload?.staleMs || 14 * 24 * 60 * 60 * 1000);
      const cooldownMs = Number(job.payload?.cooldownMs || 7 * 24 * 60 * 60 * 1000);
      const dailyAutonomousTaskCapPerTenant = Number(job.payload?.dailyAutonomousTaskCapPerTenant || 10);
      const limit = Number(job.payload?.limit || 50);
      const candidates = await runtime.records.listStaleHealthSubjects({ staleBefore: new Date(Date.now() - staleMs), limit });
      const tenantCounts = new Map();
      const tenantPaused = new Map();
      let created = 0; let skippedPaused = 0;
      for (const candidate of candidates) {
        const tenantId = candidate.tenant_id; const subjectId = candidate.subject_id;
        if (!tenantPaused.has(tenantId)) {
          tenantPaused.set(tenantId, runtime.autonomyControl ? await runtime.autonomyControl.isPaused({ tenantId }) : false);
        }
        if (tenantPaused.get(tenantId)) { skippedPaused += 1; continue; }
        const recentNudges = await runtime.records.list({ tenantId, subjectId,
          workspaceId: SITUATIONAL_AWARENESS_WORKSPACE_ID, recordType: HEALTH_CHECKIN_NUDGE_RECORD_TYPE, limit: 1 });
        const lastNudge = recentNudges[0];
        if (lastNudge && Date.now() - new Date(lastNudge.updated_at).getTime() < cooldownMs) continue;
        if (!tenantCounts.has(tenantId)) {
          tenantCounts.set(tenantId, await runtime.tasks.countAutonomousCreatedSince({ tenantId, since: new Date(Date.now() - 24 * 60 * 60 * 1000) }));
        }
        if (tenantCounts.get(tenantId) >= dailyAutonomousTaskCapPerTenant) continue;
        const command = createCommand({ channel: "worker", tenantId, actorId: subjectId,
          correlationId: createId("event"), text: "Kyro noticed no recent health check-in and scheduled a reminder." });
        let task;
        try {
          task = await runtime.engine.create({ command, goal: "Nudge a health check-in after a quiet period",
            application: "health", riskTier: "low", autonomous: true, steps: [{ title: "Schedule a health check-in reminder",
              toolId: "reminders.schedule", input: { when: "Tomorrow, remind me to log a quick health check-in with Kyro." } }] });
        } catch (error) {
          // A toggle can race the cached check above; the engine's own guard
          // is the authoritative one and always wins.
          if (error.code === "autonomy_paused") { tenantPaused.set(tenantId, true); skippedPaused += 1; continue; }
          throw error;
        }
        await runtime.records.create({ tenantId, ownerId: subjectId, subjectId, taskId: task.taskId,
          workspaceId: SITUATIONAL_AWARENESS_WORKSPACE_ID, recordType: HEALTH_CHECKIN_NUDGE_RECORD_TYPE, classification: "standard",
          data: { reason: "health_checkin_stale", lastHealthRecordAt: candidate.last_health_record_at },
          provenance: { source: "situational-awareness-sweep" } });
        tenantCounts.set(tenantId, tenantCounts.get(tenantId) + 1);
        created += 1;
      }
      return { scanned: candidates.length, created, skippedPaused };
    },
    // The plan's other candidate proactive trigger, now validated against the
    // real schema and built: "a delivered reminder with no corresponding
    // follow-up afterward." An explicit user-facing acknowledgement doesn't
    // exist anywhere in this schema (a push notification has no read-receipt
    // concept), so this only claims what's honestly there -- the reminder was
    // confirmed *delivered* (a real nexus_notifications row, not merely
    // scheduled) and the subject still hasn't logged a newer health record
    // since. Escalates with a second, more direct reminders.schedule task
    // (still a non-confirmation-required tool, so it can complete
    // autonomously end to end) rather than communications.send -- that tool
    // has no resolved contact address here and would only ever stall at
    // awaiting_confirmation anyway. Each nudge is escalated at most once
    // (listUnacknowledgedNudges excludes anything already marked
    // data.escalatedAt); situational-awareness.sweep's own cooldown creates a
    // fresh nudge record on its next cycle, giving the subject a new
    // escalation candidate rather than repeating this one forever.
    "situational-awareness.escalate-unacknowledged-nudges": async ({ job }) => {
      const graceMs = Number(job.payload?.graceMs || 3 * 24 * 60 * 60 * 1000);
      const dailyAutonomousTaskCapPerTenant = Number(job.payload?.dailyAutonomousTaskCapPerTenant || 10);
      const limit = Number(job.payload?.limit || 50);
      const candidates = await runtime.records.listUnacknowledgedNudges({
        workspaceId: SITUATIONAL_AWARENESS_WORKSPACE_ID, recordType: HEALTH_CHECKIN_NUDGE_RECORD_TYPE,
        deliveredBefore: new Date(Date.now() - graceMs), limit
      });
      const tenantCounts = new Map();
      const tenantPaused = new Map();
      let escalated = 0; let skippedPaused = 0;
      for (const nudge of candidates) {
        const tenantId = nudge.tenant_id; const subjectId = nudge.subject_id;
        if (!tenantPaused.has(tenantId)) {
          tenantPaused.set(tenantId, runtime.autonomyControl ? await runtime.autonomyControl.isPaused({ tenantId }) : false);
        }
        if (tenantPaused.get(tenantId)) { skippedPaused += 1; continue; }
        if (!tenantCounts.has(tenantId)) {
          tenantCounts.set(tenantId, await runtime.tasks.countAutonomousCreatedSince({ tenantId, since: new Date(Date.now() - 24 * 60 * 60 * 1000) }));
        }
        if (tenantCounts.get(tenantId) >= dailyAutonomousTaskCapPerTenant) continue;
        const command = createCommand({ channel: "worker", tenantId, actorId: subjectId,
          correlationId: createId("event"), text: "Kyro's first health check-in reminder went unacknowledged, so it followed up again." });
        let task;
        try {
          task = await runtime.engine.create({ command, goal: "Follow up after an unacknowledged health check-in nudge",
            application: "health", riskTier: "low", autonomous: true, steps: [{ title: "Send a follow-up health check-in reminder",
              toolId: "reminders.schedule", input: { when: "Tomorrow, remind me again to log a quick health check-in with Kyro -- the last reminder didn't get a new entry." } }] });
        } catch (error) {
          if (error.code === "autonomy_paused") { tenantPaused.set(tenantId, true); skippedPaused += 1; continue; }
          throw error;
        }
        try {
          await runtime.records.update({ tenantId, recordId: nudge.record_id, expectedVersion: nudge.version, actorId: subjectId,
            data: { ...nudge.data, escalatedAt: new Date().toISOString(), escalationTaskId: task.taskId },
            provenance: { source: "situational-awareness-escalate" } });
        } catch {
          // A concurrent update to this exact nudge record (another worker,
          // or the subject's own action) losing this race must not fail the
          // whole sweep -- the escalation task itself was already created
          // successfully either way. Worst case, an unlucky repeat run
          // re-escalates the same nudge once more next cycle.
        }
        tenantCounts.set(tenantId, tenantCounts.get(tenantId) + 1);
        escalated += 1;
      }
      return { scanned: candidates.length, escalated, skippedPaused };
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

module.exports = Object.freeze({ createHandlers, AUTONOMOUS_OUTCOME_NOTIFICATION_KIND,
  SITUATIONAL_AWARENESS_WORKSPACE_ID, HEALTH_CHECKIN_NUDGE_RECORD_TYPE });
