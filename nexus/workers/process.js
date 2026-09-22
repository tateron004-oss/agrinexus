const { loadEnvFile } = require("../../foundation/src/runtime/env-file.js");
const { createRuntime } = require("../runtime/create-runtime.js");
const { checkRuntimeHealth } = require("../runtime/health.js");
const { createLogger } = require("../observability/logger.js");
const { createHandlers } = require("./handlers.js");
const { NexusWorker } = require("./worker.js");
const { createNotificationProviders } = require("../notifications/provider-catalog.js");
const { createWebPushProvider } = require("../notifications/webpush-provider.js");
const { resolveWorkerReleaseSha } = require("./release-identity.js");
const { createReleaseHeartbeat } = require("./release-heartbeat.js");

loadEnvFile();
const logger = createLogger({ service: "nexus-worker" });
const workerId = process.env.RENDER_INSTANCE_ID || `worker-${process.pid}`;
let runtime;
let releaseHeartbeat;
let stopping = false;

async function main() {
  runtime = createRuntime({ logger });
  await runtime.ready;
  const health = await checkRuntimeHealth(runtime);
  if (!health.ok) throw new Error("Nexus worker refuses to start before pgvector and migrations are ready.");
  const webPush = createWebPushProvider({ env: process.env, devices: runtime.devices, deviceTokens: runtime.deviceTokens });
  const deliveryProviders={ ...createNotificationProviders(), ...(webPush ? { push: webPush } : {}) };
  const handlers=createHandlers({ runtime,deliveryProviders,logger });
  const queues = ["default"];
  const releaseSha = resolveWorkerReleaseSha();
  const handlerNames = Object.keys(handlers);
  releaseHeartbeat = createReleaseHeartbeat({ acceptance: runtime.acceptance, workerId, releaseSha, queues,
    handlers: handlerNames, logger, intervalMs: Number(process.env.NEXUS_WORKER_HEARTBEAT_MS || 30000) });
  await releaseHeartbeat.start();
  const worker = new NexusWorker({ jobs: runtime.jobs, workerId, handlers, queues, logger });
  logger.info("worker.started", { workerId, health, registeredHandlers: Object.keys(handlers), pushDeliveryConfigured: Boolean(webPush) });
  // Nothing enqueues a "notifications.deliver" job today -- claim() itself
  // isn't tenant-scoped (it globally sweeps whatever's due), so there's no
  // real benefit to routing it through the durable per-tenant job queue.
  // Piggyback it onto this poll loop's existing cadence instead.
  const notificationIntervalMs = Number(process.env.NEXUS_NOTIFICATION_POLL_MS || 30000);
  let lastNotificationSweepAt = 0;
  // Same reasoning for the autonomous-task self-healing sweep: listStale()
  // is a global scan across tenants, not a per-tenant durable job.
  const agentSweepIntervalMs = Number(process.env.NEXUS_AGENT_SWEEP_POLL_MS || 120000);
  let lastAgentSweepAt = 0;
  // Situational awareness looks for day-scale staleness (no health check-in
  // in ~2 weeks), so it runs far less often than the other two sweeps --
  // there's nothing to gain from checking every couple of minutes.
  const situationalAwarenessIntervalMs = Number(process.env.NEXUS_SITUATIONAL_AWARENESS_POLL_MS || 6 * 60 * 60 * 1000);
  let lastSituationalAwarenessSweepAt = 0;
  // Same day-scale reasoning as situational-awareness.sweep -- escalation
  // grace periods are measured in days, not minutes.
  const situationalAwarenessEscalationIntervalMs = Number(process.env.NEXUS_SITUATIONAL_AWARENESS_ESCALATION_POLL_MS || 6 * 60 * 60 * 1000);
  let lastSituationalAwarenessEscalationSweepAt = 0;
  // The farm-domain counterpart, same day-scale reasoning -- "no farm log activity in ~2 weeks."
  const situationalAwarenessFarmIntervalMs = Number(process.env.NEXUS_SITUATIONAL_AWARENESS_FARM_POLL_MS || 6 * 60 * 60 * 1000);
  let lastSituationalAwarenessFarmSweepAt = 0;
  const situationalAwarenessFarmEscalationIntervalMs = Number(process.env.NEXUS_SITUATIONAL_AWARENESS_FARM_ESCALATION_POLL_MS || 6 * 60 * 60 * 1000);
  let lastSituationalAwarenessFarmEscalationSweepAt = 0;
  // Widening proactive initiative to the business domain: a business/nonprofit
  // workspace with open tasks or tracked grants untouched in ~2 weeks. Same
  // day-scale reasoning as the health/farm sweeps.
  const situationalAwarenessBusinessIntervalMs = Number(process.env.NEXUS_SITUATIONAL_AWARENESS_BUSINESS_POLL_MS || 6 * 60 * 60 * 1000);
  let lastSituationalAwarenessBusinessSweepAt = 0;
  // The wellness domain: a quiet week against an active workout goal is
  // meaningfully stale sooner than the 2-week health/farm window, but still
  // day-scale, not minute-scale.
  const situationalAwarenessWellnessIntervalMs = Number(process.env.NEXUS_SITUATIONAL_AWARENESS_WELLNESS_POLL_MS || 6 * 60 * 60 * 1000);
  let lastSituationalAwarenessWellnessSweepAt = 0;
  // "deletion.execute" is an internal-only job type that nothing schedules or claims unless something enqueues it (see requestDeletion's
  // immediate enqueue and this sweep's self-healing role) -- a global, not-per-tenant scan, same reasoning as agent.sweep-advanceable-tasks.
  // Erasure requests are rare and the whole point of this sweep is to catch a lost job promptly, so it checks every couple of minutes.
  const deletionSweepIntervalMs = Number(process.env.NEXUS_DELETION_SWEEP_POLL_MS || 120000);
  let lastDeletionSweepAt = 0;
  // "retention.sweep" is the same kind of internal-only, nothing-enqueues-it job type: it was registered as a handler but had no trigger
  // anywhere until this line. Artifacts expire on a day-scale retention window, not a live conversation, so a few checks a day is plenty.
  const retentionSweepIntervalMs = Number(process.env.NEXUS_RETENTION_SWEEP_POLL_MS || 6 * 60 * 60 * 1000);
  let lastRetentionSweepAt = 0;
  // "schedules.dispatch" (ScheduleRepository.dispatchDue) had the exact same problem, found during the 2026-09-22
  // capability audit: registered as a handler, nothing anywhere ever called it. No real (non-parked) nexus_schedules
  // row exists in this codebase today -- every real recurring behavior (checkins, brief, weekly summary, weather
  // alerts) deliberately uses a "parked at year 2100" row plus its own direct interval call instead, specifically so
  // none of them depend on this dispatcher -- but the mechanism is reachable (POST /api/nexus/runtime/schedules) and
  // would have silently never fired a real schedule if anything ever relied on it. Checked once a minute, the same
  // granularity as the reminders/notifications poll, since a schedule's own next_run_at is what actually paces it.
  const schedulesDispatchIntervalMs = Number(process.env.NEXUS_SCHEDULES_DISPATCH_POLL_MS || 60000);
  let lastSchedulesDispatchAt = 0;
  // Briefs go out at a chosen minute of the person's own day, so this checks about once a minute (a sent brief is remembered per local day).
  const briefIntervalMs = Number(process.env.NEXUS_BRIEF_POLL_MS || 60000);
  let lastBriefSweepAt = 0;
  // Weather changes slowly and the forecast service is free but shared, so alerts are checked every 30 minutes (towns are fetched once per pass).
  const weatherAlertIntervalMs = Number(process.env.NEXUS_WEATHER_ALERT_POLL_MS || 30 * 60 * 1000);
  let lastWeatherAlertSweepAt = 0;
  // The weekly summary is due on one weekday at one chosen time (a three-hour window), so checking every five minutes is plenty.
  const weeklySummaryIntervalMs = Number(process.env.NEXUS_WEEKLY_SUMMARY_POLL_MS || 5 * 60 * 1000);
  let lastWeeklySummarySweepAt = 0;
  // Check-ins are due at a chosen minute and followed up hours later, so every five minutes is plenty.
  const checkinIntervalMs = Number(process.env.NEXUS_CHECKIN_POLL_MS || 5 * 60 * 1000);
  let lastCheckinSweepAt = 0;
  while (!stopping) {
    const result = await worker.runOne();
    releaseHeartbeat.recordJob(result.job?.job_id || null);
    if (Date.now() - lastNotificationSweepAt >= notificationIntervalMs) {
      lastNotificationSweepAt = Date.now();
      try { await handlers["notifications.deliver"]({ job: { payload: {} }, heartbeat: async () => {} }); }
      catch (error) { logger.error("worker.notifications_sweep_failed", { error: { code: error.code, message: error.message } }); }
    }
    if (Date.now() - lastAgentSweepAt >= agentSweepIntervalMs) {
      lastAgentSweepAt = Date.now();
      try { await handlers["agent.sweep-advanceable-tasks"]({ job: { payload: {} }, heartbeat: async () => {} }); }
      catch (error) { logger.error("worker.agent_sweep_failed", { error: { code: error.code, message: error.message } }); }
    }
    if (Date.now() - lastBriefSweepAt >= briefIntervalMs) {
      lastBriefSweepAt = Date.now();
      try { const outcome = await handlers["brief.send-due"]({ job: { payload: {} }, heartbeat: async () => {} }); if (outcome?.sent) logger.info("worker.brief_sweep", outcome); }
      catch (error) { logger.error("worker.brief_sweep_failed", { error: { code: error.code, message: error.message } }); }
    }
    if (Date.now() - lastCheckinSweepAt >= checkinIntervalMs) {
      lastCheckinSweepAt = Date.now();
      try { const outcome = await handlers["companion.checkin-sweep"]({ job: { payload: {} }, heartbeat: async () => {} }); if (outcome?.prompted || outcome?.alerted || outcome?.medications?.prompted || outcome?.medications?.alerted) logger.info("worker.checkin_sweep", outcome); }
      catch (error) { logger.error("worker.checkin_sweep_failed", { error: { code: error.code, message: error.message } }); }
    }
    if (Date.now() - lastWeeklySummarySweepAt >= weeklySummaryIntervalMs) {
      lastWeeklySummarySweepAt = Date.now();
      try { const outcome = await handlers["summary.weekly-send-due"]({ job: { payload: {} }, heartbeat: async () => {} }); if (outcome?.sent) logger.info("worker.weekly_summary_sweep", outcome); }
      catch (error) { logger.error("worker.weekly_summary_sweep_failed", { error: { code: error.code, message: error.message } }); }
    }
    if (Date.now() - lastWeatherAlertSweepAt >= weatherAlertIntervalMs) {
      lastWeatherAlertSweepAt = Date.now();
      try { const outcome = await handlers["alerts.weather-sweep"]({ job: { payload: {} }, heartbeat: async () => {} }); if (outcome?.sent) logger.info("worker.weather_alert_sweep", outcome); }
      catch (error) { logger.error("worker.weather_alert_sweep_failed", { error: { code: error.code, message: error.message } }); }
    }
    if (Date.now() - lastSituationalAwarenessSweepAt >= situationalAwarenessIntervalMs) {
      lastSituationalAwarenessSweepAt = Date.now();
      try { await handlers["situational-awareness.sweep"]({ job: { payload: {} }, heartbeat: async () => {} }); }
      catch (error) { logger.error("worker.situational_awareness_sweep_failed", { error: { code: error.code, message: error.message } }); }
    }
    if (Date.now() - lastSituationalAwarenessEscalationSweepAt >= situationalAwarenessEscalationIntervalMs) {
      lastSituationalAwarenessEscalationSweepAt = Date.now();
      try { await handlers["situational-awareness.escalate-unacknowledged-nudges"]({ job: { payload: {} }, heartbeat: async () => {} }); }
      catch (error) { logger.error("worker.situational_awareness_escalation_failed", { error: { code: error.code, message: error.message } }); }
    }
    if (Date.now() - lastSituationalAwarenessFarmSweepAt >= situationalAwarenessFarmIntervalMs) {
      lastSituationalAwarenessFarmSweepAt = Date.now();
      try { await handlers["situational-awareness.farm-sweep"]({ job: { payload: {} }, heartbeat: async () => {} }); }
      catch (error) { logger.error("worker.situational_awareness_farm_sweep_failed", { error: { code: error.code, message: error.message } }); }
    }
    if (Date.now() - lastSituationalAwarenessFarmEscalationSweepAt >= situationalAwarenessFarmEscalationIntervalMs) {
      lastSituationalAwarenessFarmEscalationSweepAt = Date.now();
      try { await handlers["situational-awareness.escalate-unacknowledged-farm-nudges"]({ job: { payload: {} }, heartbeat: async () => {} }); }
      catch (error) { logger.error("worker.situational_awareness_farm_escalation_failed", { error: { code: error.code, message: error.message } }); }
    }
    if (Date.now() - lastSituationalAwarenessBusinessSweepAt >= situationalAwarenessBusinessIntervalMs) {
      lastSituationalAwarenessBusinessSweepAt = Date.now();
      try { await handlers["situational-awareness.business-sweep"]({ job: { payload: {} }, heartbeat: async () => {} }); }
      catch (error) { logger.error("worker.situational_awareness_business_sweep_failed", { error: { code: error.code, message: error.message } }); }
    }
    if (Date.now() - lastSituationalAwarenessWellnessSweepAt >= situationalAwarenessWellnessIntervalMs) {
      lastSituationalAwarenessWellnessSweepAt = Date.now();
      try { await handlers["situational-awareness.wellness-sweep"]({ job: { payload: {} }, heartbeat: async () => {} }); }
      catch (error) { logger.error("worker.situational_awareness_wellness_sweep_failed", { error: { code: error.code, message: error.message } }); }
    }
    if (Date.now() - lastDeletionSweepAt >= deletionSweepIntervalMs) {
      lastDeletionSweepAt = Date.now();
      try { const outcome = await handlers["deletion.sweep"]({ job: { payload: {} }, heartbeat: async () => {} }); if (outcome?.requeued) logger.info("worker.deletion_sweep", outcome); }
      catch (error) { logger.error("worker.deletion_sweep_failed", { error: { code: error.code, message: error.message } }); }
    }
    if (Date.now() - lastRetentionSweepAt >= retentionSweepIntervalMs) {
      lastRetentionSweepAt = Date.now();
      try { const outcome = await handlers["retention.sweep"]({ job: { payload: {} }, heartbeat: async () => {} }); if (outcome?.purged?.length) logger.info("worker.retention_sweep", { purged: outcome.purged.length }); }
      catch (error) { logger.error("worker.retention_sweep_failed", { error: { code: error.code, message: error.message } }); }
    }
    if (Date.now() - lastSchedulesDispatchAt >= schedulesDispatchIntervalMs) {
      lastSchedulesDispatchAt = Date.now();
      try { const outcome = await handlers["schedules.dispatch"]({ job: { payload: {} }, heartbeat: async () => {} }); if (outcome?.dispatched?.length) logger.info("worker.schedules_dispatch", { dispatched: outcome.dispatched.length }); }
      catch (error) { logger.error("worker.schedules_dispatch_failed", { error: { code: error.code, message: error.message } }); }
    }
    if (!result.claimed) await delay(Number(process.env.NEXUS_WORKER_POLL_MS || 2000));
  }
}

async function shutdown(signal) {
  if (stopping) return; stopping = true; logger.info("worker.stopping", { signal });
  if (releaseHeartbeat) await releaseHeartbeat.stop();
  if (runtime) await runtime.close(); process.exit(0);
}
process.on("SIGTERM", () => shutdown("SIGTERM")); process.on("SIGINT", () => shutdown("SIGINT"));
function delay(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
main().catch(async error => { logger.error("worker.fatal", { error: { code: error.code, message: error.message } });
  if (releaseHeartbeat) await releaseHeartbeat.stop(); if (runtime) await runtime.close(); process.exit(1); });
