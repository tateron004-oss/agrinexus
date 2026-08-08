"use strict";

function createReleaseHeartbeat({ acceptance, workerId, releaseSha, queues, handlers, logger = console,
  intervalMs = 30000, setIntervalImpl = setInterval, clearIntervalImpl = clearInterval }) {
  if (!acceptance?.heartbeatWorker) throw new Error("The production acceptance repository is required.");
  let timer = null;
  let inFlight = null;
  let lastJobId = null;

  async function beat() {
    if (inFlight) return inFlight;
    inFlight = acceptance.heartbeatWorker({ workerId, releaseSha, queues, handlers, status: "ready", lastJobId })
      .finally(() => { inFlight = null; });
    return inFlight;
  }

  async function start() {
    await beat();
    timer = setIntervalImpl(() => {
      beat().catch(error => logger.error("worker.release_heartbeat_failed", {
        error: { code: error.code, message: error.message }
      }));
    }, intervalMs);
    if (typeof timer?.unref === "function") timer.unref();
  }

  async function stop() {
    if (timer) clearIntervalImpl(timer);
    timer = null;
    if (inFlight) await inFlight;
  }

  function recordJob(jobId) { if (jobId) lastJobId = jobId; }

  return Object.freeze({ start, stop, beat, recordJob });
}

module.exports = Object.freeze({ createReleaseHeartbeat });
