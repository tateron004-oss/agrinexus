"use strict";

const assert = require("node:assert/strict");
const { EventEmitter } = require("node:events");
const { createIntegrationRuntimeSupervisor } = require("../integration-runtime-supervisor");

function child(pid) {
  const value = new EventEmitter();
  value.pid = pid;
  value.killed = false;
  value.kill = (signal) => { value.killed = true; value.signal = signal; };
  return value;
}

(async () => {
  const children = [];
  const fatals = [];
  const supervisor = createIntegrationRuntimeSupervisor({
    runtimes: [
      { name: "protected", command: "node", port: 4101 },
      { name: "certification", command: "node", port: 4102 }
    ],
    spawnImpl() {
      const value = child(100 + children.length);
      children.push(value);
      return value;
    },
    readinessProbe: async () => true,
    readinessIntervalMs: 1,
    startupDeadlineMs: 50,
    onFatal: failure => fatals.push(failure)
  });

  const ready = await supervisor.start();
  assert.equal(ready.ready, true);
  assert.equal(ready.state, "ready");
  assert.deepEqual(Object.keys(ready.children), ["protected", "certification"]);
  await supervisor.requireReady();

  children[0].emit("exit", 9, null);
  assert.equal(supervisor.snapshot().state, "failed");
  assert.equal(supervisor.snapshot().fatal.runtime, "protected");
  assert.equal(fatals.length, 1);

  supervisor.stop("SIGTERM");
  assert.equal(children[0].killed, true);
  assert.equal(children[1].killed, true);

  const timeoutSupervisor = createIntegrationRuntimeSupervisor({
    runtimes: [{ name: "never-ready", command: "node", port: 4199 }],
    spawnImpl: () => child(200),
    readinessProbe: async () => false,
    readinessIntervalMs: 1,
    startupDeadlineMs: 5
  });
  await assert.rejects(timeoutSupervisor.start(), /did not become ready/);
  assert.equal(timeoutSupervisor.snapshot().fatal.code, "startup-timeout");

  console.log("Nexus integration runtime supervisor: PASS");
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
