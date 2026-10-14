"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { createOfflineSyncStatusExecutor, verifyOfflineSyncStatusOutcome } = require("../../nexus/sync/status-executor.js");
const { SyncRepository } = require("../../nexus/sync/repository.js");
const { verifyCapabilityCompletion } = require("../../nexus/apps/capability-completion-contracts.js");

const context = { tenantId: "t1", userId: "u1" };
const summary = (over = {}) => ({ applied: 0, conflicts: 0, pending: 0, rejected: 0, lastAppliedAt: null, ...over });
const run = async over => createOfflineSyncStatusExecutor({ sync: { summary: async () => summary(over) } })({ context, taskId: "tsk_1" });

test("the executor reports the server's own count of what devices sent, not a canned success", async () => {
  const idle = await run();
  assert.equal(idle.syncState, "synchronized"); assert.equal(idle.serverAcknowledged, true); assert.equal(idle.operationId, "sync-status-tsk_1");
  assert.match(idle.note, /applied 0 changes from your devices and none are waiting/);
  const some = await run({ applied: 3, lastAppliedAt: "2026-09-20T05:00:00.000Z" });
  assert.match(some.note, /applied 3 changes/); assert.equal(some.lastAppliedAt, "2026-09-20T05:00:00.000Z");
  const conflict = await run({ applied: 3, conflicts: 1 });
  assert.equal(conflict.syncState, "conflicts_need_review"); assert.match(conflict.note, /1 change from your devices conflict/);
  const pending = await run({ pending: 2 });
  assert.equal(pending.syncState, "pending_on_server"); assert.match(pending.note, /2 changes are received but not yet applied/);
  assert.match(idle.note, /upload automatically when it is back online/, "it does not claim to know what a device has not uploaded");
});

test("the outcome only verifies when the server state was really read", async () => {
  assert.equal(verifyOfflineSyncStatusOutcome({ result: await run({ applied: 1 }) }).verified, true);
  assert.equal(verifyOfflineSyncStatusOutcome({ result: await run({ conflicts: 1 }) }).verified, true, "a conflict is still a real answer");
  for (const bad of [{}, { operationId: "x", syncState: "synchronized", serverAcknowledged: true },
    { ...(await run()), serverAcknowledged: false }, { ...(await run()), syncState: "unknown" }, { ...(await run()), applied: "3" }, { ...(await run()), operationId: "" }])
    assert.equal(verifyOfflineSyncStatusOutcome({ result: bad }).verified, false, JSON.stringify(bad));
  await assert.rejects(() => createOfflineSyncStatusExecutor({ sync: { summary: async () => { throw new Error("db down"); } } })({ context, taskId: "t" }), /db down/, "a failed read is a failure, not a success");
  assert.throws(() => createOfflineSyncStatusExecutor({}), /sync repository is required/);
});

test("the result satisfies the offline-queue completion contract that gates every deploy", async () => {
  const evidence = { ...(await run()), rendered: true, visible: true };
  assert.equal(verifyCapabilityCompletion({ application: "offline-queue", releaseSha: "a".repeat(40), evidence }).verified, true);
});

test("the repository summary counts by state for one person", async () => {
  let seen;
  const db = { query: async (sql, params) => { seen = { sql, params }; return { rows: [{ state: "applied", count: 4, last_applied: "2026-09-20T05:00:00Z" }, { state: "conflict", count: 1, last_applied: null }] }; }, transaction: async () => {} };
  const result = await new SyncRepository(db).summary({ tenantId: "t1", userId: "u1" });
  assert.deepEqual(result, { applied: 4, conflicts: 1, pending: 0, rejected: 0, lastAppliedAt: "2026-09-20T05:00:00.000Z" });
  assert.deepEqual(seen.params, ["t1", "u1"]); assert.match(seen.sql, /user_id=\$2 group by state/);
});

test("the runtime uses it instead of the provider stand-in", () => {
  const runtime = fs.readFileSync(path.join(__dirname, "../../nexus/runtime/create-runtime.js"), "utf8");
  assert.match(runtime, /"offline\.sync": \{ create: \(\) => createOfflineSyncStatusExecutor\(\{ sync \}\), verify: verifyOfflineSyncStatusOutcome, method: "real_server_state" \}/);
});
