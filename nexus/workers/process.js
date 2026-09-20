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
  // Briefs go out at a chosen minute of the person's own day, so this checks about once a minute (a sent brief is remembered per local day).
  const briefIntervalMs = Number(process.env.NEXUS_BRIEF_POLL_MS || 60000);
  let lastBriefSweepAt = 0;
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
