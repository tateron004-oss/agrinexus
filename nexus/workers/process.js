const { loadEnvFile } = require("../../foundation/src/runtime/env-file.js");
const { createRuntime } = require("../runtime/create-runtime.js");
const { checkRuntimeHealth } = require("../runtime/health.js");
const { createLogger } = require("../observability/logger.js");
const { createHandlers } = require("./handlers.js");
const { NexusWorker } = require("./worker.js");
const { createNotificationProviders } = require("../notifications/provider-catalog.js");
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
  const deliveryProviders=createNotificationProviders();
  const handlers=createHandlers({ runtime,deliveryProviders });
  const queues = ["default"];
  const releaseSha = resolveWorkerReleaseSha();
  const handlerNames = Object.keys(handlers);
  releaseHeartbeat = createReleaseHeartbeat({ acceptance: runtime.acceptance, workerId, releaseSha, queues,
    handlers: handlerNames, logger, intervalMs: Number(process.env.NEXUS_WORKER_HEARTBEAT_MS || 30000) });
  await releaseHeartbeat.start();
  const worker = new NexusWorker({ jobs: runtime.jobs, workerId, handlers, queues, logger });
  logger.info("worker.started", { workerId, health, registeredHandlers: Object.keys(handlers) });
  while (!stopping) {
    const result = await worker.runOne();
    releaseHeartbeat.recordJob(result.job?.job_id || null);
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
