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
  const handlers=createHandlers({ runtime,deliveryProviders });
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
