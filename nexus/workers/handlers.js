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
const FARM_LOG_NUDGE_RECORD_TYPE = "farm_log_nudge";
const BUSINESS_FOLLOWUP_NUDGE_RECORD_TYPE = "business_followup_nudge";
const WELLNESS_GOAL_NUDGE_RECORD_TYPE = "wellness_goal_nudge";
const LEAD_FOLLOWUP_NUDGE_RECORD_TYPE = "lead_followup_nudge";
const BUSINESS_DEADLINE_NUDGE_RECORD_TYPE = "business_deadline_nudge";

function createHandlers({ runtime, deliveryProviders = {}, logger = null }) {
  if (!runtime) throw new Error("The authoritative runtime is required.");
  return Object.freeze({
    "acceptance.canary": async ({ job }) => ({ accepted: true, releaseSha: process.env.RENDER_GIT_COMMIT || process.env.GIT_SHA || "development",
      nonce: required(job.payload?.nonce, "Acceptance canary nonce") }),
    // Sends the morning brief to everyone whose brief is on and whose chosen local time has arrived (see nexus/brief/service.js).
    "brief.send-due": async () => (runtime.brief?.sendDue ? runtime.brief.sendDue({}) : { checked: 0, sent: 0 }),
    // Warns everyone who turned weather alerts on when their forecast turns serious (see nexus/alerts/service.js).
    // Sends the weekly summary to everyone whose chosen weekday and time has arrived (see nexus/brief/weekly.js).
    // Asks people how they are when their check-in time comes, and follows up once on missed ones (see nexus/companion/checkins.js).
    "companion.checkin-sweep": async () => (runtime.companion?.sendDue ? runtime.companion.sendDue({}) : { checked: 0, prompted: 0 }),
    "summary.weekly-send-due": async () => (runtime.weekly?.sendDue ? runtime.weekly.sendDue({}) : { checked: 0, sent: 0 }),
    "alerts.weather-sweep": async () => (runtime.alerts?.sendDue ? runtime.alerts.sendDue({}) : { checked: 0, sent: 0 }),
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
    // Self-healing sweep for erasure requests, the same shape as agent.sweep-advanceable-tasks: requestDeletion() enqueues
    // "deletion.execute" immediately, so this only ever finds one that was lost (a crash between the insert and the enqueue, a dropped job) --
    // a request must never be able to sit at 'queued' forever. executeDeletion is idempotent (its updates and the memory-items delete are all
    // no-ops once already applied), so re-enqueuing one that is in fact already mid-flight or done is harmless.
    "deletion.sweep": async ({ job }) => {
      const staleMs = Number(job.payload?.staleMs || 120000);
      const stale = await runtime.dataLifecycle.listStaleQueued({ staleBefore: new Date(Date.now() - staleMs), limit: job.payload?.limit || 50 });
      let requeued = 0;
      for (const request of stale) {
        await runtime.jobs.enqueue({ tenantId: request.tenant_id, jobType: "deletion.execute",
          idempotencyKey: `deletion-sweep:${request.request_id}:${createId("job")}`, payload: { requestId: request.request_id } });
        requeued += 1;
      }
      return { scanned: stale.length, requeued };
    },
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
    },
    // The farm-domain counterpart to situational-awareness.sweep -- same shape, but "gone quiet" is checked
    // against the farm toolkit's own real activity (nexus_memory_items, purpose 'farm_records', via
    // runtime.farmRecords.listStalePrincipals()) instead of the older nexus_records/health.record world,
    // since that's where a farmer's actual fields/animals/stock/money/journal entries actually live.
    "situational-awareness.farm-sweep": async ({ job }) => {
      const staleMs = Number(job.payload?.staleMs || 14 * 24 * 60 * 60 * 1000);
      const cooldownMs = Number(job.payload?.cooldownMs || 7 * 24 * 60 * 60 * 1000);
      const dailyAutonomousTaskCapPerTenant = Number(job.payload?.dailyAutonomousTaskCapPerTenant || 10);
      const limit = Number(job.payload?.limit || 50);
      const candidates = await runtime.farmRecords.listStalePrincipals({ staleBefore: new Date(Date.now() - staleMs), limit });
      const tenantCounts = new Map();
      const tenantPaused = new Map();
      let created = 0; let skippedPaused = 0;
      for (const candidate of candidates) {
        const tenantId = candidate.tenant_id; const subjectId = candidate.principal_id;
        if (!tenantPaused.has(tenantId)) {
          tenantPaused.set(tenantId, runtime.autonomyControl ? await runtime.autonomyControl.isPaused({ tenantId }) : false);
        }
        if (tenantPaused.get(tenantId)) { skippedPaused += 1; continue; }
        const recentNudges = await runtime.records.list({ tenantId, subjectId,
          workspaceId: SITUATIONAL_AWARENESS_WORKSPACE_ID, recordType: FARM_LOG_NUDGE_RECORD_TYPE, limit: 1 });
        const lastNudge = recentNudges[0];
        if (lastNudge && Date.now() - new Date(lastNudge.updated_at).getTime() < cooldownMs) continue;
        if (!tenantCounts.has(tenantId)) {
          tenantCounts.set(tenantId, await runtime.tasks.countAutonomousCreatedSince({ tenantId, since: new Date(Date.now() - 24 * 60 * 60 * 1000) }));
        }
        if (tenantCounts.get(tenantId) >= dailyAutonomousTaskCapPerTenant) continue;
        const command = createCommand({ channel: "worker", tenantId, actorId: subjectId,
          correlationId: createId("event"), text: "Kyro noticed no recent farm log activity and scheduled a reminder." });
        let task;
        try {
          task = await runtime.engine.create({ command, goal: "Nudge a farm log entry after a quiet period",
            application: "farm", riskTier: "low", autonomous: true, steps: [{ title: "Schedule a farm log reminder",
              toolId: "reminders.schedule", input: { when: "Tomorrow, remind me to log a quick farm update with Kyro." } }] });
        } catch (error) {
          if (error.code === "autonomy_paused") { tenantPaused.set(tenantId, true); skippedPaused += 1; continue; }
          throw error;
        }
        await runtime.records.create({ tenantId, ownerId: subjectId, subjectId, taskId: task.taskId,
          workspaceId: SITUATIONAL_AWARENESS_WORKSPACE_ID, recordType: FARM_LOG_NUDGE_RECORD_TYPE, classification: "standard",
          data: { reason: "farm_log_stale", lastFarmRecordAt: candidate.last_record_at },
          provenance: { source: "situational-awareness-farm-sweep" } });
        tenantCounts.set(tenantId, tenantCounts.get(tenantId) + 1);
        created += 1;
      }
      return { scanned: candidates.length, created, skippedPaused };
    },
    // The farm-domain counterpart to situational-awareness.escalate-unacknowledged-nudges: same shape, but
    // freshness is checked against nexus_memory_items (purpose 'farm_records') via
    // listUnacknowledgedMemoryNudges() instead of nexus_records classification='health'.
    "situational-awareness.escalate-unacknowledged-farm-nudges": async ({ job }) => {
      const graceMs = Number(job.payload?.graceMs || 3 * 24 * 60 * 60 * 1000);
      const dailyAutonomousTaskCapPerTenant = Number(job.payload?.dailyAutonomousTaskCapPerTenant || 10);
      const limit = Number(job.payload?.limit || 50);
      const candidates = await runtime.records.listUnacknowledgedMemoryNudges({
        workspaceId: SITUATIONAL_AWARENESS_WORKSPACE_ID, recordType: FARM_LOG_NUDGE_RECORD_TYPE, memoryPurpose: "farm_records",
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
          correlationId: createId("event"), text: "Kyro's first farm log reminder went unacknowledged, so it followed up again." });
        let task;
        try {
          task = await runtime.engine.create({ command, goal: "Follow up after an unacknowledged farm log nudge",
            application: "farm", riskTier: "low", autonomous: true, steps: [{ title: "Send a follow-up farm log reminder",
              toolId: "reminders.schedule", input: { when: "Tomorrow, remind me again to log a quick farm update with Kyro -- the last reminder didn't get a new entry." } }] });
        } catch (error) {
          if (error.code === "autonomy_paused") { tenantPaused.set(tenantId, true); skippedPaused += 1; continue; }
          throw error;
        }
        try {
          await runtime.records.update({ tenantId, recordId: nudge.record_id, expectedVersion: nudge.version, actorId: subjectId,
            data: { ...nudge.data, escalatedAt: new Date().toISOString(), escalationTaskId: task.taskId },
            provenance: { source: "situational-awareness-escalate-farm" } });
        } catch {
          // Same reasoning as the health escalation's own update: a lost race here must not fail the sweep --
          // the escalation task itself was already created successfully either way.
        }
        tenantCounts.set(tenantId, tenantCounts.get(tenantId) + 1);
        escalated += 1;
      }
      return { scanned: candidates.length, escalated, skippedPaused };
    },
    // Widening proactive initiative to a new domain AND a new autonomous
    // tool: a business/nonprofit workspace with open tasks or tracked grants
    // that hasn't been touched in a while (nexus/data/record-repository.js's
    // listStaleBusinessWorkspaces() -- see its own comment on why this is a
    // record-staleness signal, not a dueDate/deadline comparison, since
    // those fields are free, unvalidated text). Unlike the health/farm
    // sweeps, the remedial action here is documents.create, not
    // reminders.schedule: documents.create is equally real, equally
    // non-confirmation-required (same "tasks:execute"-only permission, no
    // consentScope), and produces a genuinely more useful artifact for this
    // domain -- a saved, specific summary of what's open -- than a bare
    // reminder text would. The completion notification pipeline
    // (agent.advance-task's awaiting_render handling) already works
    // identically for any tool, not just reminders.schedule, so this needed
    // no engine changes.
    "situational-awareness.business-sweep": async ({ job }) => {
      const staleMs = Number(job.payload?.staleMs || 14 * 24 * 60 * 60 * 1000);
      const cooldownMs = Number(job.payload?.cooldownMs || 7 * 24 * 60 * 60 * 1000);
      const dailyAutonomousTaskCapPerTenant = Number(job.payload?.dailyAutonomousTaskCapPerTenant || 10);
      const limit = Number(job.payload?.limit || 50);
      const candidates = await runtime.records.listStaleBusinessWorkspaces({ staleBefore: new Date(Date.now() - staleMs), limit });
      const tenantCounts = new Map();
      const tenantPaused = new Map();
      let created = 0; let skippedPaused = 0;
      for (const candidate of candidates) {
        const tenantId = candidate.tenant_id; const ownerId = candidate.owner_id;
        // The "subject" of this nudge is the specific business RECORD, not the
        // owner -- an owner with several workspaces must get an independent
        // cooldown per workspace, not one shared across all of them.
        const subjectId = candidate.record_id;
        if (!tenantPaused.has(tenantId)) {
          tenantPaused.set(tenantId, runtime.autonomyControl ? await runtime.autonomyControl.isPaused({ tenantId }) : false);
        }
        if (tenantPaused.get(tenantId)) { skippedPaused += 1; continue; }
        const recentNudges = await runtime.records.list({ tenantId, subjectId,
          workspaceId: SITUATIONAL_AWARENESS_WORKSPACE_ID, recordType: BUSINESS_FOLLOWUP_NUDGE_RECORD_TYPE, limit: 1 });
        const lastNudge = recentNudges[0];
        if (lastNudge && Date.now() - new Date(lastNudge.updated_at).getTime() < cooldownMs) continue;
        if (!tenantCounts.has(tenantId)) {
          tenantCounts.set(tenantId, await runtime.tasks.countAutonomousCreatedSince({ tenantId, since: new Date(Date.now() - 24 * 60 * 60 * 1000) }));
        }
        if (tenantCounts.get(tenantId) >= dailyAutonomousTaskCapPerTenant) continue;
        const businessName = candidate.business_name || "your business workspace";
        const openTasks = Array.isArray(candidate.open_task_titles) ? candidate.open_task_titles.filter(Boolean) : [];
        const openGrants = Array.isArray(candidate.open_grant_labels) ? candidate.open_grant_labels.filter(Boolean) : [];
        const lines = [`# Business Follow-Up -- ${businessName}`, "",
          "Kyro noticed this workspace has open items that have not been touched in a while."];
        if (openTasks.length) lines.push("", "## Open Tasks", ...openTasks.map(title => `- ${title}`));
        if (openGrants.length) lines.push("", "## Grants Not Yet Resolved", ...openGrants.map(label => `- ${label}`));
        const command = createCommand({ channel: "worker", tenantId, actorId: ownerId,
          correlationId: createId("event"), text: `Kyro noticed "${businessName}" has open items and saved a follow-up summary.` });
        let task;
        try {
          task = await runtime.engine.create({ command, goal: `Prepare a business follow-up summary for ${businessName}`,
            application: "business", riskTier: "low", autonomous: true, steps: [{ title: "Save a business follow-up summary document",
              toolId: "documents.create", input: { title: `Business Follow-Up -- ${businessName}`, content: lines.join("\n"), format: "md" } }] });
        } catch (error) {
          if (error.code === "autonomy_paused") { tenantPaused.set(tenantId, true); skippedPaused += 1; continue; }
          throw error;
        }
        await runtime.records.create({ tenantId, ownerId, subjectId, taskId: task.taskId,
          workspaceId: SITUATIONAL_AWARENESS_WORKSPACE_ID, recordType: BUSINESS_FOLLOWUP_NUDGE_RECORD_TYPE, classification: "standard",
          data: { reason: "business_workspace_stale", recordId: candidate.record_id, updatedAt: candidate.updated_at },
          provenance: { source: "situational-awareness-business-sweep" } });
        tenantCounts.set(tenantId, tenantCounts.get(tenantId) + 1);
        created += 1;
      }
      return { scanned: candidates.length, created, skippedPaused };
    },
    // The wellness-domain counterpart to situational-awareness.sweep: a
    // person with an active weekly workout goal (nexus/wellness/log.js) and
    // no workout logged since staleBefore (nexus/wellness/store.js's
    // listStaleWorkoutGoalPrincipals()). Uses reminders.schedule, the same
    // proven non-confirmation-required tool the health/farm sweeps use --
    // there is no third party involved here, so a plain reminder is the
    // right, minimal action, same as those domains.
    "situational-awareness.wellness-sweep": async ({ job }) => {
      // Shorter default than the 14-day health/farm staleness window: a
      // *weekly* goal going quiet is meaningfully stale well before two weeks.
      const staleMs = Number(job.payload?.staleMs || 10 * 24 * 60 * 60 * 1000);
      const cooldownMs = Number(job.payload?.cooldownMs || 7 * 24 * 60 * 60 * 1000);
      const dailyAutonomousTaskCapPerTenant = Number(job.payload?.dailyAutonomousTaskCapPerTenant || 10);
      const limit = Number(job.payload?.limit || 50);
      const candidates = await runtime.wellnessRecords.listStaleWorkoutGoalPrincipals({ staleBefore: new Date(Date.now() - staleMs), limit });
      const tenantCounts = new Map();
      const tenantPaused = new Map();
      let created = 0; let skippedPaused = 0;
      for (const candidate of candidates) {
        const tenantId = candidate.tenant_id; const subjectId = candidate.principal_id;
        if (!tenantPaused.has(tenantId)) {
          tenantPaused.set(tenantId, runtime.autonomyControl ? await runtime.autonomyControl.isPaused({ tenantId }) : false);
        }
        if (tenantPaused.get(tenantId)) { skippedPaused += 1; continue; }
        const recentNudges = await runtime.records.list({ tenantId, subjectId,
          workspaceId: SITUATIONAL_AWARENESS_WORKSPACE_ID, recordType: WELLNESS_GOAL_NUDGE_RECORD_TYPE, limit: 1 });
        const lastNudge = recentNudges[0];
        if (lastNudge && Date.now() - new Date(lastNudge.updated_at).getTime() < cooldownMs) continue;
        if (!tenantCounts.has(tenantId)) {
          tenantCounts.set(tenantId, await runtime.tasks.countAutonomousCreatedSince({ tenantId, since: new Date(Date.now() - 24 * 60 * 60 * 1000) }));
        }
        if (tenantCounts.get(tenantId) >= dailyAutonomousTaskCapPerTenant) continue;
        const command = createCommand({ channel: "worker", tenantId, actorId: subjectId,
          correlationId: createId("event"), text: "Kyro noticed no recent workout logged against a weekly goal and scheduled a reminder." });
        let task;
        try {
          task = await runtime.engine.create({ command, goal: "Nudge a workout after a quiet week",
            application: "wellness", riskTier: "low", autonomous: true, steps: [{ title: "Schedule a workout reminder",
              toolId: "reminders.schedule", input: { when: "Tomorrow, remind me to log a workout with Kyro -- it's been quiet against my weekly goal." } }] });
        } catch (error) {
          if (error.code === "autonomy_paused") { tenantPaused.set(tenantId, true); skippedPaused += 1; continue; }
          throw error;
        }
        await runtime.records.create({ tenantId, ownerId: subjectId, subjectId, taskId: task.taskId,
          workspaceId: SITUATIONAL_AWARENESS_WORKSPACE_ID, recordType: WELLNESS_GOAL_NUDGE_RECORD_TYPE, classification: "standard",
          data: { reason: "wellness_goal_stale", lastWorkoutAt: candidate.last_workout_at },
          provenance: { source: "situational-awareness-wellness-sweep" } });
        tenantCounts.set(tenantId, tenantCounts.get(tenantId) + 1);
        created += 1;
      }
      return { scanned: candidates.length, created, skippedPaused };
    },
    // A real, previously-unused signal in the business domain: a lead's own
    // followUpDate (nexus/data/record-repository.js's new
    // listBusinessWorkspacesWithDueFollowUps() -- see its own comment) has
    // passed. This field was captured and displayed by the dashboard but
    // never read by anything -- exactly the "stored but never acted on"
    // pattern this session has been closing elsewhere. Deliberately uses
    // reminders.schedule, not communications.send: the field's own purpose
    // (per service.js's comment) is for the OWNER to be reminded, not for
    // Kyro to draft outreach to the lead on the owner's behalf -- reaching
    // that third party is a materially different, higher-stakes decision
    // this sweep does not make. One consolidated reminder per business
    // workspace per cooldown window (not one per lead) -- leads have no
    // stable ID in this schema to track a per-lead cooldown against, and a
    // single reminder naming everyone due is honest and avoids notification
    // spam when several follow-ups land at once.
    "situational-awareness.lead-followup-sweep": async ({ job }) => {
      const cooldownMs = Number(job.payload?.cooldownMs || 7 * 24 * 60 * 60 * 1000);
      const dailyAutonomousTaskCapPerTenant = Number(job.payload?.dailyAutonomousTaskCapPerTenant || 10);
      const limit = Number(job.payload?.limit || 50);
      const candidates = await runtime.records.listBusinessWorkspacesWithDueFollowUps({ limit });
      const tenantCounts = new Map();
      const tenantPaused = new Map();
      let created = 0; let skippedPaused = 0;
      for (const candidate of candidates) {
        const tenantId = candidate.tenant_id; const ownerId = candidate.owner_id;
        const subjectId = candidate.record_id;
        if (!tenantPaused.has(tenantId)) {
          tenantPaused.set(tenantId, runtime.autonomyControl ? await runtime.autonomyControl.isPaused({ tenantId }) : false);
        }
        if (tenantPaused.get(tenantId)) { skippedPaused += 1; continue; }
        const recentNudges = await runtime.records.list({ tenantId, subjectId,
          workspaceId: SITUATIONAL_AWARENESS_WORKSPACE_ID, recordType: LEAD_FOLLOWUP_NUDGE_RECORD_TYPE, limit: 1 });
        const lastNudge = recentNudges[0];
        if (lastNudge && Date.now() - new Date(lastNudge.updated_at).getTime() < cooldownMs) continue;
        if (!tenantCounts.has(tenantId)) {
          tenantCounts.set(tenantId, await runtime.tasks.countAutonomousCreatedSince({ tenantId, since: new Date(Date.now() - 24 * 60 * 60 * 1000) }));
        }
        if (tenantCounts.get(tenantId) >= dailyAutonomousTaskCapPerTenant) continue;
        const businessName = candidate.business_name || "your business workspace";
        const dueLeads = Array.isArray(candidate.due_leads) ? candidate.due_leads.filter(lead => lead?.name) : [];
        const names = dueLeads.map(lead => lead.followUpDate ? `${lead.name} (due ${lead.followUpDate})` : lead.name).join(", ");
        const command = createCommand({ channel: "worker", tenantId, actorId: ownerId,
          correlationId: createId("event"), text: `Kyro noticed a follow-up date passed for ${names || "a contact"} in "${businessName}".` });
        let task;
        try {
          task = await runtime.engine.create({ command, goal: `Remind about a due follow-up in ${businessName}`,
            application: "business", riskTier: "low", autonomous: true, steps: [{ title: "Schedule a lead follow-up reminder",
              toolId: "reminders.schedule", input: { when: `Tomorrow, remind me to follow up with ${names || "a contact"} in "${businessName}" -- their follow-up date already passed.` } }] });
        } catch (error) {
          if (error.code === "autonomy_paused") { tenantPaused.set(tenantId, true); skippedPaused += 1; continue; }
          throw error;
        }
        await runtime.records.create({ tenantId, ownerId, subjectId, taskId: task.taskId,
          workspaceId: SITUATIONAL_AWARENESS_WORKSPACE_ID, recordType: LEAD_FOLLOWUP_NUDGE_RECORD_TYPE, classification: "standard",
          data: { reason: "lead_followup_due", dueLeads },
          provenance: { source: "situational-awareness-lead-followup-sweep" } });
        tenantCounts.set(tenantId, tenantCounts.get(tenantId) + 1);
        created += 1;
      }
      return { scanned: candidates.length, created, skippedPaused };
    },
    // The task/grant counterpart to situational-awareness.lead-followup-sweep:
    // a task's own dueDate already passed, or a grant's own deadline is
    // within the next 7 days (nexus/data/record-repository.js's new
    // listBusinessWorkspacesWithDatedDeadlines() -- see its own comment on
    // why this is safe alongside listStaleBusinessWorkspaces's coarser,
    // date-agnostic signal). Same reminders.schedule-only, owner-directed
    // shape as every other business-domain sweep -- no third party is ever
    // contacted by this sweep.
    "situational-awareness.business-deadline-sweep": async ({ job }) => {
      const cooldownMs = Number(job.payload?.cooldownMs || 7 * 24 * 60 * 60 * 1000);
      const dailyAutonomousTaskCapPerTenant = Number(job.payload?.dailyAutonomousTaskCapPerTenant || 10);
      const limit = Number(job.payload?.limit || 50);
      const candidates = await runtime.records.listBusinessWorkspacesWithDatedDeadlines({ limit });
      const tenantCounts = new Map();
      const tenantPaused = new Map();
      let created = 0; let skippedPaused = 0;
      for (const candidate of candidates) {
        const tenantId = candidate.tenant_id; const ownerId = candidate.owner_id;
        const subjectId = candidate.record_id;
        if (!tenantPaused.has(tenantId)) {
          tenantPaused.set(tenantId, runtime.autonomyControl ? await runtime.autonomyControl.isPaused({ tenantId }) : false);
        }
        if (tenantPaused.get(tenantId)) { skippedPaused += 1; continue; }
        const recentNudges = await runtime.records.list({ tenantId, subjectId,
          workspaceId: SITUATIONAL_AWARENESS_WORKSPACE_ID, recordType: BUSINESS_DEADLINE_NUDGE_RECORD_TYPE, limit: 1 });
        const lastNudge = recentNudges[0];
        if (lastNudge && Date.now() - new Date(lastNudge.updated_at).getTime() < cooldownMs) continue;
        if (!tenantCounts.has(tenantId)) {
          tenantCounts.set(tenantId, await runtime.tasks.countAutonomousCreatedSince({ tenantId, since: new Date(Date.now() - 24 * 60 * 60 * 1000) }));
        }
        if (tenantCounts.get(tenantId) >= dailyAutonomousTaskCapPerTenant) continue;
        const businessName = candidate.business_name || "your business workspace";
        const overdueTasks = Array.isArray(candidate.overdue_tasks) ? candidate.overdue_tasks.filter(item => item?.title) : [];
        const approachingGrants = Array.isArray(candidate.approaching_grants) ? candidate.approaching_grants.filter(item => item?.label) : [];
        const parts = [
          ...overdueTasks.map(item => `"${item.title}" (due ${item.dueDate})`),
          ...approachingGrants.map(item => `the "${item.label}" grant deadline (${item.deadline})`)
        ];
        const summary = parts.join(", ") || "an approaching deadline";
        const command = createCommand({ channel: "worker", tenantId, actorId: ownerId,
          correlationId: createId("event"), text: `Kyro noticed a real deadline in "${businessName}": ${summary}.` });
        let task;
        try {
          task = await runtime.engine.create({ command, goal: `Remind about a deadline in ${businessName}`,
            application: "business", riskTier: "low", autonomous: true, steps: [{ title: "Schedule a deadline reminder",
              toolId: "reminders.schedule", input: { when: `Tomorrow, remind me about ${summary} in "${businessName}".` } }] });
        } catch (error) {
          if (error.code === "autonomy_paused") { tenantPaused.set(tenantId, true); skippedPaused += 1; continue; }
          throw error;
        }
        await runtime.records.create({ tenantId, ownerId, subjectId, taskId: task.taskId,
          workspaceId: SITUATIONAL_AWARENESS_WORKSPACE_ID, recordType: BUSINESS_DEADLINE_NUDGE_RECORD_TYPE, classification: "standard",
          data: { reason: "business_deadline_due", overdueTasks, approachingGrants },
          provenance: { source: "situational-awareness-business-deadline-sweep" } });
        tenantCounts.set(tenantId, tenantCounts.get(tenantId) + 1);
        created += 1;
      }
      return { scanned: candidates.length, created, skippedPaused };
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
  SITUATIONAL_AWARENESS_WORKSPACE_ID, HEALTH_CHECKIN_NUDGE_RECORD_TYPE, FARM_LOG_NUDGE_RECORD_TYPE,
  BUSINESS_FOLLOWUP_NUDGE_RECORD_TYPE, WELLNESS_GOAL_NUDGE_RECORD_TYPE, LEAD_FOLLOWUP_NUDGE_RECORD_TYPE,
  BUSINESS_DEADLINE_NUDGE_RECORD_TYPE });
