"use strict";

const { spawn } = require("node:child_process");
const net = require("node:net");

function tcpReady(host, port, timeoutMs = 500) {
  return new Promise((resolve) => {
    const socket = net.createConnection({ host, port });
    const finish = (ready) => {
      socket.removeAllListeners();
      socket.destroy();
      resolve(ready);
    };
    socket.setTimeout(timeoutMs, () => finish(false));
    socket.once("connect", () => finish(true));
    socket.once("error", () => finish(false));
  });
}

function createIntegrationRuntimeSupervisor({
  runtimes,
  spawnImpl = spawn,
  readinessProbe = tcpReady,
  readinessIntervalMs = 100,
  startupDeadlineMs = 15000,
  onFatal = () => {}
} = {}) {
  if (!Array.isArray(runtimes) || runtimes.length === 0) throw new Error("At least one integration runtime is required.");
  const records = new Map(runtimes.map((runtime) => {
    if (!runtime.name || !runtime.command || !Number.isInteger(runtime.port)) throw new Error("Every runtime requires a name, command, and port.");
    return [runtime.name, { ...runtime, child: null, ready: false, exited: false, exit: null }];
  }));
  let stopping = false;
  let fatal = null;
  let startPromise = null;

  function snapshot() {
    const children = Object.fromEntries([...records].map(([name, record]) => [name, {
      ready: record.ready,
      exited: record.exited,
      pid: record.child && record.child.pid || null,
      port: record.port,
      exit: record.exit
    }]));
    return Object.freeze({
      state: fatal ? "failed" : [...records.values()].every(record => record.ready) ? "ready" : stopping ? "stopping" : "starting",
      ready: !fatal && [...records.values()].every(record => record.ready),
      fatal,
      children: Object.freeze(children)
    });
  }

  async function waitUntilReady() {
    const deadline = Date.now() + startupDeadlineMs;
    while (Date.now() < deadline) {
      if (fatal) throw new Error(fatal.message);
      await Promise.all([...records.values()].map(async (record) => {
        if (!record.ready && !record.exited) record.ready = await readinessProbe(record.host || "127.0.0.1", record.port);
      }));
      if (snapshot().ready) return snapshot();
      await new Promise(resolve => setTimeout(resolve, readinessIntervalMs));
    }
    fatal = Object.freeze({ code: "startup-timeout", message: `Nexus integration runtimes did not become ready within ${startupDeadlineMs} ms.` });
    onFatal(fatal, snapshot());
    throw new Error(fatal.message);
  }

  function start() {
    if (startPromise) return startPromise;
    for (const record of records.values()) {
      record.child = spawnImpl(record.command, record.args || [], {
        cwd: record.cwd,
        env: record.env,
        stdio: record.stdio || ["ignore", "inherit", "inherit"]
      });
      record.child.once("exit", (code, signal) => {
        record.ready = false;
        record.exited = true;
        record.exit = Object.freeze({ code, signal });
        if (stopping || fatal) return;
        fatal = Object.freeze({
          code: "runtime-exited",
          runtime: record.name,
          message: `${record.name} runtime exited (${code == null ? signal : code}).`
        });
        onFatal(fatal, snapshot());
      });
      record.child.once("error", (error) => {
        if (stopping || fatal) return;
        fatal = Object.freeze({ code: "runtime-spawn-failed", runtime: record.name, message: error.message });
        onFatal(fatal, snapshot());
      });
    }
    startPromise = waitUntilReady();
    return startPromise;
  }

  async function requireReady() {
    if (!startPromise) start();
    await startPromise;
    const status = snapshot();
    if (!status.ready) throw new Error(status.fatal && status.fatal.message || "Nexus integration runtime is unavailable.");
    return status;
  }

  function stop(signal = "SIGTERM") {
    stopping = true;
    for (const record of records.values()) {
      if (record.child && !record.child.killed) record.child.kill(signal);
      record.ready = false;
    }
  }

  return Object.freeze({ start, stop, requireReady, snapshot });
}

module.exports = { createIntegrationRuntimeSupervisor, tcpReady };
