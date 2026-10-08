"use strict";

// Acceptance data hygiene: the production acceptance principal's own test data is cleared, and nothing else is.
// Fakes only (no Postgres, no internet): an in-memory database that understands the cleanup's tagged statements.
// docs/ACCEPTANCE_DATA_HYGIENE.md explains the incident (the lists probe failed because the acceptance account reached the
// 200-list cap) and the safety rules these tests pin.

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { createAcceptanceCleanup, ACCEPTANCE_CORRELATION_PATTERN, BATCH_SIZE, MAX_BATCHES, RECORD_TARGETS } = require("../../nexus/acceptance/data-hygiene.js");
const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");
const { createListsCreateExecutor, verifyListsCreateOutcome } = require("../../nexus/lists/executor.js");
const { CapabilityAdapterRegistry } = require("../../nexus/tools/capability-adapter-registry.js");
const { OutcomeVerifierRegistry } = require("../../nexus/verification/verifier-registry.js");
const { CapabilityExecutionAuthority } = require("../../nexus/runtime/capability-execution-authority.js");
const { runAcceptanceCleanup } = require("../../scripts/lib/nexus-acceptance-cleanup.js");
const { freePortSync } = require("../helpers/free-port.js");

const NOW = new Date("2026-10-07T12:00:00.000Z");
const minutesAgo = minutes => new Date(NOW.getTime() - minutes * 60000).toISOString();
const PATTERN = new RegExp(ACCEPTANCE_CORRELATION_PATTERN);
let counter = 0;
const uuid = () => { counter += 1; return `00000000-0000-4000-8000-${String(counter).padStart(12, "0")}`; };
const ACCEPTANCE = { tenantId: "tenant-1", userId: "user-acceptance" };

function createWorld() {
  const world = { memberships: [], tasks: [], records: [], documents: [], notifications: [], log: [], failOn: null };
  const acceptanceTask = (principal = ACCEPTANCE, taskId = `tsk_${uuid()}`) => {
    world.tasks.push({ task_id: taskId, tenant_id: principal.tenantId, owner_id: principal.userId, correlation_id: `acceptance-${uuid()}` });
    return taskId;
  };
  const ordinaryTask = (principal = ACCEPTANCE, correlation = "request-abc") => {
    const taskId = `tsk_${uuid()}`;
    world.tasks.push({ task_id: taskId, tenant_id: principal.tenantId, owner_id: principal.userId, correlation_id: correlation });
    return taskId;
  };
  const taskIsAcceptance = (tenantId, ownerId, taskId, pattern) => world.tasks.some(task => task.task_id === taskId &&
    task.tenant_id === tenantId && task.owner_id === ownerId && new RegExp(pattern).test(task.correlation_id));
  world.acceptanceTask = acceptanceTask; world.ordinaryTask = ordinaryTask;
  world.addRecord = (fields = {}) => {
    const row = { record_id: `rec_${uuid()}`, tenant_id: ACCEPTANCE.tenantId, owner_id: ACCEPTANCE.userId, workspace_id: "lists", record_type: "checklist",
      task_id: null, created_at: minutesAgo(600), deleted_at: null, state: "active", ...fields };
    world.records.push(row); return row;
  };
  world.liveLists = (principal = ACCEPTANCE) => world.records.filter(row => row.tenant_id === principal.tenantId && row.owner_id === principal.userId &&
    row.workspace_id === "lists" && row.record_type === "checklist" && !row.deleted_at).length;

  const tag = sql => /\/\* acceptance-cleanup:([a-z:]+) \*\//.exec(sql)?.[1] || null;
  const sortAsc = key => (a, b) => (a.created_at < b.created_at ? -1 : a.created_at > b.created_at ? 1 : a[key] < b[key] ? -1 : 1);
  const sortDesc = key => (a, b) => -sortAsc(key)(a, b);
  const ids = rows => ({ rows: rows.map(row => ({ record_id: row.record_id || row.document_id || row.notification_id })) });

  world.db = {
    log: world.log,
    query: async (sql, params = []) => {
      const name = tag(sql);
      world.log.push({ name, params });
      if (world.failOn && (name || "").includes(world.failOn)) throw Object.assign(new Error("relation \"nexus_records\" is on fire (secret-column value=hunter2)"), { code: "XX000" });
      if (name === "principal") {
        const [tenant, user, permission] = params;
        return { rows: world.memberships.filter(m => m.tenant_id === tenant && m.user_id === user && m.state === "active" && m.permissions.includes(permission)).map(() => ({ ok: 1 })) };
      }
      if (!name && /from nexus_organization_memberships\s+where state='active' and 'acceptance:identity'=any\(permissions\)/.test(sql)) {
        const row = world.memberships.find(m => m.state === "active" && m.permissions.includes("acceptance:identity"));
        return { rows: row ? [{ tenant_id: row.tenant_id, user_id: row.user_id, role: "acceptance-controller", permissions: row.permissions }] : [] };
      }
      const [tenantId, ownerId] = params;
      if (name === "records:keep" || name === "records:candidates") {
        const [, , workspaceId, recordType, pattern] = params;
        let rows = world.records.filter(r => r.tenant_id === tenantId && r.owner_id === ownerId && r.workspace_id === workspaceId && r.record_type === recordType &&
          !r.deleted_at && taskIsAcceptance(tenantId, ownerId, r.task_id, pattern));
        if (name === "records:keep") return ids(rows.sort(sortDesc("record_id")).slice(0, params[5]));
        const [cutoff, keepIds, limit] = [params[5], params[6], params[7]];
        rows = rows.filter(r => r.created_at < cutoff && !keepIds.includes(r.record_id));
        return ids(rows.sort(sortAsc("record_id")).slice(0, limit));
      }
      if (name === "records:remove") {
        const [, , workspaceId, recordType, idList, pattern] = params; const removed = [];
        for (const r of world.records) {
          if (r.tenant_id === tenantId && r.owner_id === ownerId && r.workspace_id === workspaceId && r.record_type === recordType && !r.deleted_at &&
              idList.includes(r.record_id) && taskIsAcceptance(tenantId, ownerId, r.task_id, pattern)) { r.deleted_at = NOW.toISOString(); r.state = "deleted"; removed.push(r); }
        }
        return ids(removed);
      }
      if (name === "documents:keep" || name === "documents:candidates") {
        const pattern = params[2];
        let rows = world.documents.filter(d => d.tenant_id === tenantId && d.owner_id === ownerId && !d.deleted_at && taskIsAcceptance(tenantId, ownerId, d.task_id, pattern));
        if (name === "documents:keep") return ids(rows.sort(sortDesc("document_id")).slice(0, params[3]));
        rows = rows.filter(d => d.created_at < params[3] && !params[4].includes(d.document_id));
        return ids(rows.sort(sortAsc("document_id")).slice(0, params[5]));
      }
      if (name === "documents:remove") {
        const removed = [];
        for (const d of world.documents) if (d.tenant_id === tenantId && d.owner_id === ownerId && !d.deleted_at && params[2].includes(d.document_id) &&
            taskIsAcceptance(tenantId, ownerId, d.task_id, params[3])) { d.deleted_at = NOW.toISOString(); removed.push(d); }
        return ids(removed);
      }
      if (name === "reminders:keep" || name === "reminders:candidates") {
        const pattern = params[2];
        let rows = world.notifications.filter(n => n.tenant_id === tenantId && n.user_id === ownerId && n.state === "queued" && n.content?.reminderText &&
          taskIsAcceptance(tenantId, ownerId, n.task_id, pattern));
        if (name === "reminders:keep") return ids(rows.sort(sortDesc("notification_id")).slice(0, params[3]));
        rows = rows.filter(n => n.created_at < params[3] && !params[4].includes(n.notification_id));
        return ids(rows.sort(sortAsc("notification_id")).slice(0, params[5]));
      }
      if (name === "reminders:remove") {
        const removed = [];
        for (const n of world.notifications) if (n.tenant_id === tenantId && n.user_id === ownerId && n.state === "queued" && n.content?.reminderText &&
            params[2].includes(n.notification_id) && taskIsAcceptance(tenantId, ownerId, n.task_id, params[3])) { n.state = "cancelled"; removed.push(n); }
        return ids(removed);
      }
      throw new Error(`unexpected statement in fake: ${name || sql.slice(0, 60)}`);
    }
  };
  world.memberships.push({ tenant_id: ACCEPTANCE.tenantId, user_id: ACCEPTANCE.userId, state: "active", permissions: ["acceptance:identity", "tasks:read", "tasks:execute"] });
  return world;
}

// A realistic mix: the acceptance principal's old test lists, a few fresh ones, and every kind of data that must survive.
function seedLists(world, { old = 250, fresh = 3 } = {}) {
  for (let i = 0; i < old; i += 1) world.addRecord({ task_id: world.acceptanceTask(), created_at: minutesAgo(600 + i) });
  for (let i = 0; i < fresh; i += 1) world.addRecord({ task_id: world.acceptanceTask(), created_at: minutesAgo(2 + i) });
}
function seedMustSurvive(world) {
  const survivors = [];
  // The acceptance account is a real user row: its OWN ordinary lists (task not from the acceptance route, or no task at all).
  for (let i = 0; i < 5; i += 1) survivors.push(world.addRecord({ task_id: world.ordinaryTask(), created_at: minutesAgo(5000 + i) }));
  survivors.push(world.addRecord({ task_id: null, created_at: minutesAgo(9000) }));
  // A different user in the same tenant, even with an acceptance-looking task.
  const realUser = { tenantId: ACCEPTANCE.tenantId, userId: "user-real" };
  for (let i = 0; i < 4; i += 1) survivors.push(world.addRecord({ owner_id: realUser.userId, task_id: world.acceptanceTask(realUser), created_at: minutesAgo(5000 + i) }));
  // Another tenant (even the same owner id), with acceptance-looking tasks.
  const otherTenant = { tenantId: "tenant-2", userId: ACCEPTANCE.userId };
  for (let i = 0; i < 4; i += 1) survivors.push(world.addRecord({ tenant_id: "tenant-2", task_id: world.acceptanceTask(otherTenant), created_at: minutesAgo(5000 + i) }));
  // Same account, a type the cleanup is not allowed to touch.
  for (let i = 0; i < 3; i += 1) survivors.push(world.addRecord({ workspace_id: "lists", record_type: "authoritative-workspace-state", task_id: world.acceptanceTask(), created_at: minutesAgo(5000 + i) }));
  survivors.push(world.addRecord({ workspace_id: "farm-log", record_type: "entry", task_id: world.acceptanceTask(), created_at: minutesAgo(5000) }));
  return survivors;
}
const cleaner = world => createAcceptanceCleanup({ db: world.db, logger: { info() {}, error() {} }, now: () => NOW });

test("cleanup soft-deletes the acceptance principal's old lists, keeps the newest N and everything fresh, and nothing else changes", async () => {
  const world = createWorld(); seedLists(world, { old: 250, fresh: 3 }); const survivors = seedMustSurvive(world);
  const before = world.records.filter(r => survivors.includes(r)).map(r => ({ ...r }));
  const result = await cleaner(world).cleanup({ principal: ACCEPTANCE });
  assert.equal(result.ok, true); assert.equal(result.complete, true);
  assert.equal(result.retainPerType, 10); assert.equal(result.olderThanMinutes, 30);
  // 253 acceptance lists -> newest 10 kept (that includes the 3 fresh ones) -> 243 removed.
  assert.equal(result.counts.lists, 243);
  const liveAcceptance = world.records.filter(r => !r.deleted_at && r.task_id && world.tasks.find(t => t.task_id === r.task_id && PATTERN.test(t.correlation_id) &&
    t.owner_id === ACCEPTANCE.userId && t.tenant_id === ACCEPTANCE.tenantId) && r.owner_id === ACCEPTANCE.userId && r.tenant_id === ACCEPTANCE.tenantId && r.record_type === "checklist");
  assert.equal(liveAcceptance.length, 10);
  assert.ok(world.records.filter(r => r.created_at > minutesAgo(10) && r.record_type === "checklist").every(r => !r.deleted_at), "fresh records are never touched");
  // Every row that must survive is byte-for-byte unchanged.
  assert.deepEqual(world.records.filter(r => survivors.includes(r)).map(r => ({ ...r })), before);
  assert.ok(survivors.every(r => !r.deleted_at && r.state === "active"));
});

test("every statement is scoped to the acceptance tenant and user; the principal is checked in the database first", async () => {
  const world = createWorld(); seedLists(world, { old: 30, fresh: 1 }); seedMustSurvive(world);
  await cleaner(world).cleanup({ principal: ACCEPTANCE });
  assert.equal(world.log[0].name, "principal", "the principal is re-verified before anything else");
  for (const entry of world.log) {
    assert.equal(entry.params[0], ACCEPTANCE.tenantId, entry.name); assert.equal(entry.params[1], ACCEPTANCE.userId, entry.name);
  }
  assert.ok(world.log.some(entry => entry.name === "records:remove"));
});

test("any principal that is not the acceptance identity is refused before a single row is read", async () => {
  const world = createWorld(); seedLists(world, { old: 5, fresh: 0 });
  world.memberships.push({ tenant_id: "tenant-2", user_id: "user-real", state: "active", permissions: ["tasks:read"] });
  world.memberships.push({ tenant_id: "tenant-3", user_id: "user-revoked", state: "revoked", permissions: ["acceptance:identity"] });
  for (const principal of [{ tenantId: "tenant-2", userId: "user-real" }, { tenantId: "tenant-3", userId: "user-revoked" },
    { tenantId: ACCEPTANCE.tenantId, userId: "someone-else" }, { tenantId: "tenant-2", userId: ACCEPTANCE.userId }, null, {}, { tenantId: "t" }]) {
    world.log.length = 0;
    await assert.rejects(() => cleaner(world).cleanup({ principal }), error => error.code === "acceptance_cleanup_refused" && error.status === 403);
    assert.ok(world.log.every(entry => entry.name === "principal"), "nothing but the principal check ran");
  }
  assert.equal(world.liveLists(), 5);
});

test("dry run reports what would be removed and removes nothing", async () => {
  const world = createWorld(); seedLists(world, { old: 40, fresh: 2 });
  const result = await cleaner(world).cleanup({ principal: ACCEPTANCE, dryRun: true });
  assert.equal(result.dryRun, true); assert.equal(result.counts.lists, 32); assert.equal(result.total, 32);
  assert.equal(world.liveLists(), 42, "nothing was deleted");
  const writes = world.log.filter(entry => (entry.name || "").endsWith(":remove"));
  assert.ok(writes.length > 0 && writes.every(entry => entry.params.some(value => Array.isArray(value) && value.length === 0)),
    "write statements are only prepared with an empty id list (they can match no row), to prove they run against the real schema");
});

test("cleanup is idempotent: a second run removes nothing more", async () => {
  const world = createWorld(); seedLists(world, { old: 60, fresh: 2 });
  const first = await cleaner(world).cleanup({ principal: ACCEPTANCE });
  const second = await cleaner(world).cleanup({ principal: ACCEPTANCE });
  assert.equal(first.counts.lists, 52); assert.equal(second.total, 0); assert.equal(second.complete, true);
  assert.equal(world.liveLists(), 10);
});

test("work per call is bounded; repeated calls converge", async () => {
  const world = createWorld(); seedLists(world, { old: BATCH_SIZE * MAX_BATCHES + 300, fresh: 0 });
  const first = await cleaner(world).cleanup({ principal: ACCEPTANCE });
  assert.equal(first.counts.lists, BATCH_SIZE * MAX_BATCHES); assert.equal(first.complete, false, "the bound was hit, the caller is told");
  const second = await cleaner(world).cleanup({ principal: ACCEPTANCE });
  assert.equal(second.counts.lists, 300 - 10); assert.equal(second.complete, true);
  assert.equal(world.liveLists(), 10);
  assert.ok(world.log.every(entry => !entry.name?.endsWith(":candidates") || entry.params[entry.params.length - 1] === BATCH_SIZE), "every candidate query is limited to one batch");
});

test("retention and window are clamped: a caller cannot ask for a shorter window or an empty keep list", async () => {
  const world = createWorld(); seedLists(world, { old: 20, fresh: 0 });
  world.addRecord({ task_id: world.acceptanceTask(), created_at: minutesAgo(15) });   // older than 10 min, younger than 30
  const result = await cleaner(world).cleanup({ principal: ACCEPTANCE, olderThanMinutes: 0, retainPerType: 0 });
  assert.equal(result.olderThanMinutes, 10); assert.equal(result.retainPerType, 1);
  assert.equal((await cleaner(world).cleanup({ principal: ACCEPTANCE, olderThanMinutes: "banana", retainPerType: 99999 })).retainPerType, 100);
});

test("documents and reminders are cleaned the same way and only for acceptance tasks", async () => {
  const world = createWorld();
  for (let i = 0; i < 30; i += 1) {
    world.documents.push({ document_id: `doc_${uuid()}`, tenant_id: ACCEPTANCE.tenantId, owner_id: ACCEPTANCE.userId, task_id: world.acceptanceTask(), created_at: minutesAgo(900 + i), deleted_at: null });
    world.notifications.push({ notification_id: `ntf_${uuid()}`, tenant_id: ACCEPTANCE.tenantId, user_id: ACCEPTANCE.userId, task_id: world.acceptanceTask(), state: "queued",
      content: { reminderText: "check my crops" }, created_at: minutesAgo(900 + i) });
  }
  const realDoc = { document_id: "doc_real", tenant_id: ACCEPTANCE.tenantId, owner_id: ACCEPTANCE.userId, task_id: world.ordinaryTask(), created_at: minutesAgo(9000), deleted_at: null };
  const realReminder = { notification_id: "ntf_real", tenant_id: ACCEPTANCE.tenantId, user_id: ACCEPTANCE.userId, task_id: world.ordinaryTask(), state: "queued", content: { reminderText: "pay school fees" }, created_at: minutesAgo(9000) };
  const delivered = { notification_id: "ntf_done", tenant_id: ACCEPTANCE.tenantId, user_id: ACCEPTANCE.userId, task_id: world.acceptanceTask(), state: "delivered", content: { reminderText: "old" }, created_at: minutesAgo(9000) };
  world.documents.push(realDoc); world.notifications.push(realReminder, delivered);
  const result = await cleaner(world).cleanup({ principal: ACCEPTANCE });
  assert.equal(result.counts.documents, 20); assert.equal(result.counts.reminders, 20);
  assert.equal(world.documents.filter(d => !d.deleted_at).length, 11); assert.equal(realDoc.deleted_at, null);
  assert.equal(realReminder.state, "queued"); assert.equal(delivered.state, "delivered", "history is never rewritten");
  assert.equal(world.notifications.filter(n => n.state === "cancelled").length, 20);
});

test("a database failure is reported as a cleanup failure and nothing is swallowed", async () => {
  const world = createWorld(); seedLists(world, { old: 20, fresh: 0 }); world.failOn = "records:remove";
  await assert.rejects(() => cleaner(world).cleanup({ principal: ACCEPTANCE }), /on fire/);
  assert.equal(world.liveLists(), 20, "a failed removal removed nothing");
});

test("after cleanup an account that reached the lists cap can create a list again, and the refusal names its reason", async () => {
  const world = createWorld(); seedLists(world, { old: 200, fresh: 0 });
  // Records repository fake sharing the world's table, with RecordRepository.createUnlessCapped's exact counting rule (live rows only).
  const records = { createUnlessCapped: async (item, { maxCount }) => {
    const count = world.records.filter(r => r.tenant_id === item.tenantId && r.owner_id === item.ownerId && r.workspace_id === item.workspaceId && r.record_type === item.recordType && !r.deleted_at).length;
    if (count >= maxCount) return { capped: true, count };
    return world.addRecord({ tenant_id: item.tenantId, owner_id: item.ownerId, task_id: item.taskId, created_at: NOW.toISOString() });
  }, create: async () => {}, list: async () => [] };
  const execute = createListsCreateExecutor({ records });
  const context = { tenantId: ACCEPTANCE.tenantId, userId: ACCEPTANCE.userId };
  const taskId = world.acceptanceTask();

  const refused = await execute({ input: { title: "Farm Chores", items: ["feed goats"] }, context, taskId });
  assert.deepEqual(refused, { persisted: false, reason: "list_cap_reached", maxLists: 200 });
  const verification = verifyListsCreateOutcome({ result: refused });
  assert.equal(verification.verified, false); assert.equal(verification.reason, "list_cap_reached"); assert.equal(verification.limit, 200);
  const authority = new CapabilityExecutionAuthority({
    adapters: new CapabilityAdapterRegistry([{ toolId: "lists.create", implementation: "test", execute }]),
    verifiers: new OutcomeVerifierRegistry([{ toolId: "lists.create", method: "real_record_write", verify: async ({ result }) => verifyListsCreateOutcome({ result }) }]) });
  await assert.rejects(() => authority.execute({ tool: { tool_id: "lists.create" }, input: { title: "Farm Chores" }, context, taskId }),
    error => error.code === "outcome_unverified" && error.message === "The authoritative verifier rejected the lists.create outcome (reason=list_cap_reached max=200)." && error.status === 502);

  await cleaner(world).cleanup({ principal: ACCEPTANCE });
  const created = await execute({ input: { title: "Farm Chores", items: ["feed goats"] }, context, taskId });
  assert.equal(created.persisted, true);
  assert.equal(verifyListsCreateOutcome({ result: created }).verified, true);
  assert.equal(RECORD_TARGETS.find(item => item.label === "lists").recordType, "checklist");
});

// ---- the HTTP route and the script client, end to end over a real socket with the fake database ----

function routeFixture(world, { releaseSha = "a".repeat(40), token = "candidate-only-token", logger } = {}) {
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: token, RENDER_GIT_COMMIT: releaseSha }, resolveUser: async () => null, logger: logger || { info() {}, error() {} },
    readJson: req => new Promise((resolve, reject) => { let data = ""; req.on("data", chunk => { data += chunk; }); req.on("end", () => { try { resolve(JSON.parse(data || "{}")); } catch (error) { reject(error); } }); }),
    createRuntimeFn: () => ({ ready: Promise.resolve(), db: world.db }) });
  const server = http.createServer(async (req, res) => {
    const send = (response, status, body) => { response.writeHead(status, { "content-type": "application/json" }); response.end(JSON.stringify(body)); };
    if (!(await adapter.handle(req, res, new URL(req.url, "http://local"), send))) send(res, 404, { error: "no route" });
  });
  return { releaseSha, token, server };
}
async function withServer(world, options, run) {
  const fixture = routeFixture(world, options); const port = freePortSync();
  await new Promise(resolve => fixture.server.listen(port, "127.0.0.1", resolve));
  try { return await run({ base: `http://127.0.0.1:${port}`, ...fixture }); } finally { await new Promise(resolve => fixture.server.close(resolve)); }
}
const silent = () => { const lines = []; return { lines, log: line => lines.push(["log", line]), warn: line => lines.push(["warn", line]) }; };

test("the cleanup route needs the acceptance token and the active release SHA, and reports counts only", async () => {
  const world = createWorld(); seedLists(world, { old: 30, fresh: 1 }); seedMustSurvive(world);
  await withServer(world, {}, async ({ base, releaseSha, token }) => {
    const liveBefore = world.liveLists();
    const post = (headers, body) => fetch(`${base}/api/nexus/runtime/production-acceptance/cleanup`, { method: "POST", headers: { "content-type": "application/json", ...headers }, body: JSON.stringify(body) });
    assert.equal((await post({}, { releaseSha })).status, 401);
    assert.equal((await post({ authorization: "Bearer wrong" }, { releaseSha })).status, 401);
    const stale = await post({ authorization: `Bearer ${token}` }, { releaseSha: "b".repeat(40) });
    assert.equal(stale.status, 409); assert.equal((await stale.json()).code, "evidence_sha_mismatch");
    assert.equal(world.liveLists(), liveBefore, "rejected requests touched nothing");

    // A body that names another tenant/user or widens the scope is ignored: the principal comes only from the database.
    const response = await post({ authorization: `Bearer ${token}` }, { releaseSha, tenantId: "tenant-2", userId: "user-real", workspaceId: "farm-log", dryRun: false });
    const body = await response.json();
    assert.equal(response.status, 200); assert.equal(body.ok, true); assert.equal(body.counts.lists, 21);
    assert.equal(body.releaseSha, releaseSha);
    assert.doesNotMatch(JSON.stringify(body), /rec_|tsk_|user-|tenant-/, "no record id, task id or account id is ever returned");
    assert.ok(world.records.filter(r => r.tenant_id === "tenant-2").every(r => !r.deleted_at));
  });
});

test("a cleanup failure is reported as a cleanup failure with a fixed message, never the raw database error", async () => {
  const world = createWorld(); seedLists(world, { old: 20, fresh: 0 }); world.failOn = "records:keep";
  await withServer(world, {}, async ({ base, releaseSha, token }) => {
    const response = await fetch(`${base}/api/nexus/runtime/production-acceptance/cleanup`, { method: "POST", headers: { authorization: `Bearer ${token}`, "content-type": "application/json" }, body: JSON.stringify({ releaseSha }) });
    const body = await response.json();
    assert.equal(response.status, 503); assert.equal(body.ok, false); assert.equal(body.code, "XX000");
    assert.match(body.error, /cleanup failed/i); assert.doesNotMatch(JSON.stringify(body), /hunter2|nexus_records|on fire/);
    const out = silent();
    const outcome = await runAcceptanceCleanup({ base, token, releaseSha, log: out, attempts: 2, delayMs: 1, env: {} });
    assert.equal(outcome.ok, false); assert.equal(outcome.status, 503);
    assert.ok(out.lines.some(([kind, line]) => kind === "warn" && /Acceptance data CLEANUP failed/.test(line) && /not a probe/.test(line)), "visible as a cleanup failure");
    assert.doesNotMatch(JSON.stringify(out.lines), /hunter2|nexus_records/);
  });
});

test("the script client cleans through the route, retries only server errors, and can be disabled or dry-run by environment", async () => {
  const world = createWorld(); seedLists(world, { old: 25, fresh: 0 });
  await withServer(world, {}, async ({ base, releaseSha, token }) => {
    const dry = await runAcceptanceCleanup({ base, token, releaseSha, log: silent(), env: { NEXUS_ACCEPTANCE_CLEANUP_DRY_RUN: "true" } });
    assert.equal(dry.ok, true); assert.equal(dry.dryRun, true); assert.equal(dry.counts.lists, 15); assert.equal(world.liveLists(), 25);
    const off = silent();
    const skipped = await runAcceptanceCleanup({ base, token, releaseSha, log: off, env: { NEXUS_ACCEPTANCE_CLEANUP: "off" } });
    assert.equal(skipped.skipped, true); assert.equal(world.liveLists(), 25);
    const real = await runAcceptanceCleanup({ base, token, releaseSha, log: silent(), env: {} });
    assert.equal(real.ok, true); assert.equal(real.counts.lists, 15); assert.equal(world.liveLists(), 10);
    const again = await runAcceptanceCleanup({ base, token, releaseSha, log: silent(), env: {} });
    assert.equal(again.total, 0, "idempotent through the client as well");

    // 4xx is a definite answer and is not retried; 5xx and transport failures are.
    let calls = 0; const fake = async () => { calls += 1; return { ok: false, status: 401, text: async () => JSON.stringify({ code: "acceptance_authentication_required", error: "A valid production acceptance token is required." }) }; };
    assert.equal((await runAcceptanceCleanup({ base, token, releaseSha, fetchFn: fake, log: silent(), env: {}, attempts: 3, delayMs: 1 })).ok, false); assert.equal(calls, 1);
    calls = 0; const flaky = async () => { calls += 1; throw Object.assign(new Error("socket hang up"), { code: "ECONNRESET" }); };
    const transport = await runAcceptanceCleanup({ base, token, releaseSha, fetchFn: flaky, log: silent(), env: {}, attempts: 3, delayMs: 1 });
    assert.equal(calls, 3); assert.equal(transport.ok, false); assert.equal(transport.code, "ECONNRESET");
  });
});

test("the browser probe cleans up before any browser starts or any test data exists, and never skips verification", () => {
  const source = fs.readFileSync(path.join(__dirname, "..", "..", "scripts", "nexus-run-browser-capability-probes.js"), "utf8");
  const cleanupAt = source.indexOf("await runAcceptanceCleanup(");
  assert.ok(cleanupAt > 0);
  assert.ok(cleanupAt < source.indexOf("await chromium.launch("), "cleanup runs before the browser launches");
  assert.ok(cleanupAt < source.indexOf("/probes/behavior-turn"), "cleanup runs before the first record-creating probe call");
  assert.ok(cleanupAt < source.indexOf("async function runScenario"), "cleanup is not inside the per-scenario path");
  // The probes still create a fresh record per scenario (both phases) and verify it through the same acknowledgement route.
  assert.match(source, /const candidate = await execute\("pre-cutover"\)/); assert.match(source, /await execute\("post-cutover"\)/);
  assert.match(source, /probes\/browser-acknowledgement/);
  // A cleanup failure is recorded in the evidence file and named in the step's error; it is fatal only when explicitly required.
  assert.match(source, /scenarioFailures, typedIngressWarnings, acceptanceCleanup,/);
  assert.match(source, /acceptance data cleanup ALSO failed/);
  assert.match(source, /NEXUS_ACCEPTANCE_CLEANUP_REQUIRED/);
  const deploy = fs.readFileSync(path.join(__dirname, "..", "..", ".github", "workflows", "nexus-protected-production-deploy.yml"), "utf8");
  assert.ok(deploy.includes("node scripts/nexus-run-browser-capability-probes.js"), "the production pipeline still runs the browser probes");
});

test("the 21-objective acceptance pass is read-only and is unchanged (it never creates the data being cleaned)", () => {
  const source = fs.readFileSync(path.join(__dirname, "..", "..", "scripts", "nexus-21-objective-production-acceptance.js"), "utf8");
  assert.doesNotMatch(source, /method:\s*"POST"/);
  assert.doesNotMatch(source, /behavior-turn|acceptance\/cleanup/);
});

test("the verifier rejection message carries only a plain machine reason and a numeric limit, never free text", async () => {
  const rejection = async verification => {
    const authority = new CapabilityExecutionAuthority({
      adapters: new CapabilityAdapterRegistry([{ toolId: "x.tool", implementation: "test", execute: async () => ({}) }]),
      verifiers: new OutcomeVerifierRegistry([{ toolId: "x.tool", method: "m", verify: async () => verification }]) });
    try { await authority.execute({ tool: { tool_id: "x.tool" }, input: {} }); } catch (error) { return error; }
    throw new Error("expected a rejection");
  };
  assert.equal((await rejection({ verified: false })).message, "The authoritative verifier rejected the x.tool outcome.", "no reason, no suffix (unchanged wording)");
  assert.equal((await rejection({ verified: false, reason: "list_create_incomplete" })).message, "The authoritative verifier rejected the x.tool outcome (reason=list_create_incomplete).");
  for (const reason of ["call me on +254700000000", "a@b.example", "token=abc def", "x".repeat(200), "9starts_with_digit", { toString: () => "obj" }]) {
    assert.equal((await rejection({ verified: false, reason })).message, "The authoritative verifier rejected the x.tool outcome.", String(reason).slice(0, 20));
  }
  assert.equal((await rejection({ verified: false, reason: "cap", limit: "200; drop table" })).message, "The authoritative verifier rejected the x.tool outcome (reason=cap).");
  assert.equal((await rejection({ verified: false, reason: "cap", limit: 200 })).message, "The authoritative verifier rejected the x.tool outcome (reason=cap max=200).");
  // The lists verifier itself only forwards a plain identifier from the executor and a finite number.
  assert.equal(verifyListsCreateOutcome({ result: { persisted: false, reason: "a free text reason!", maxLists: 5 } }).reason, "list_create_incomplete");
  assert.equal("limit" in verifyListsCreateOutcome({ result: { persisted: false, reason: "list_cap_reached", maxLists: "many" } }), false);
  assert.equal(verifyListsCreateOutcome({ result: { persisted: true, listId: "rec_1" } }).verified, true);
});
