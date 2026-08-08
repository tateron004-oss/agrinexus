"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createReleaseHeartbeat } = require("../../nexus/workers/release-heartbeat.js");

test("release heartbeat renews independently of job completion and retains the last job identity", async () => {
  const writes = [];
  let scheduled;
  let cleared = false;
  const heartbeat = createReleaseHeartbeat({
    acceptance: { heartbeatWorker: async value => { writes.push(value); } },
    workerId: "worker-1", releaseSha: "a".repeat(40), queues: ["default"], handlers: ["acceptance.canary"],
    setIntervalImpl: callback => { scheduled = callback; return { unref() {} }; },
    clearIntervalImpl: () => { cleared = true; }
  });

  await heartbeat.start();
  heartbeat.recordJob("job-1");
  scheduled();
  await heartbeat.beat();
  await heartbeat.stop();

  assert.equal(writes.length, 2);
  assert.equal(writes[0].lastJobId, null);
  assert.equal(writes[1].lastJobId, "job-1");
  assert.equal(writes[1].releaseSha, "a".repeat(40));
  assert.equal(cleared, true);
});

test("release heartbeat serializes overlapping writes", async () => {
  let resolveWrite;
  let writes = 0;
  const heartbeat = createReleaseHeartbeat({
    acceptance: { heartbeatWorker: () => { writes += 1; return new Promise(resolve => { resolveWrite = resolve; }); } },
    workerId: "worker-1", releaseSha: "b".repeat(40), queues: ["default"], handlers: [],
    setIntervalImpl: () => ({ unref() {} }), clearIntervalImpl: () => {}
  });
  const first = heartbeat.beat();
  const overlapping = heartbeat.beat();
  assert.equal(writes, 1);
  resolveWrite();
  await Promise.all([first, overlapping]);
  assert.equal(writes, 1);
});
