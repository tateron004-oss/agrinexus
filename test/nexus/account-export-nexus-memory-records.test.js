"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const crypto = require("node:crypto");

// Found live (wellness-toolkit follow-up audit): /api/account/export only ever read the legacy db.profile
// blob -- it never reached a signed-in user's real, Postgres-backed nexus/ data (companion, wellness,
// farm, health, community, personal items, and any other nexus/* toolkit writing to the shared
// nexus_memory_items table). Account erasure already correctly reaches this data; export did not, so a
// person's real tracked data could be permanently deleted on request while never once being downloadable.
// collectOwnedNexusMemoryRecords() closes that gap. Tested here by extracting the real function bodies
// straight out of server.js (the established pattern for unit-testing this monolith's internal,
// non-exported functions -- see admin-sandbox-account-postgres-takeover.test.js) rather than booting a
// live server, since the live-server integration test file (account-erasure-and-export.test.js) runs
// against the JSON-blob store and cannot exercise the Postgres-backed path this fix actually adds.
const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

function extractFunction(name) {
  let start = source.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate function ${name} in server.js`);
  if (source.slice(Math.max(0, start - 6), start) === "async ") start -= 6;
  const parenStart = source.indexOf("(", start);
  let parenDepth = 0; let parenEnd = parenStart;
  for (; parenEnd < source.length; parenEnd += 1) {
    if (source[parenEnd] === "(") parenDepth += 1;
    else if (source[parenEnd] === ")") { parenDepth -= 1; if (parenDepth === 0) break; }
  }
  const bodyStart = source.indexOf("{", parenEnd);
  let depth = 0; let i = bodyStart;
  for (; i < source.length; i += 1) {
    if (source[i] === "{") depth += 1;
    else if (source[i] === "}") { depth -= 1; if (depth === 0) break; }
  }
  return source.slice(start, i + 1);
}

function stubPool(handlers) {
  const calls = [];
  return { calls, query: async (sql, params = []) => {
    calls.push({ sql, params });
    for (const [pattern, respond] of handlers) if (pattern.test(sql)) return respond(params, calls);
    throw new Error(`stubPool: no handler for query: ${sql}`);
  } };
}

function loadFns({ statePostgres, pool }) {
  const names = ["deterministicAuthoritativeUserId", "authoritativeRuntimeUser", "usingPostgresState", "collectOwnedNexusMemoryRecords"];
  const body = names.map(extractFunction).join("\n");
  const context = {
    crypto, console,
    STATE_STORE: statePostgres ? "postgres" : "json",
    NEXUS_AUTHORITATIVE_TENANT_ID: "00000000-0000-0000-0000-000000000001",
    getPgPool: () => pool
  };
  vm.createContext(context);
  vm.runInContext(`${body}\nglobalThis.__exports = { ${names.join(", ")} };`, context);
  return context.__exports;
}

test("collectOwnedNexusMemoryRecords returns nothing (not an error) when the state store is not Postgres", async () => {
  const { collectOwnedNexusMemoryRecords } = loadFns({ statePostgres: false, pool: stubPool([]) });
  const owned = await collectOwnedNexusMemoryRecords({ id: "user-1", email: "amina@example.com", role: "Standard User" });
  // Compared by shape, not assert.deepEqual against a literal {} -- the returned object comes from a
  // separate vm.Context realm, whose Object.prototype differs from this file's, so Node's strict
  // deepEqual reports "same structure but not reference-equal" even for two genuinely empty objects.
  assert.equal(Object.keys(owned).length, 0);
});

test("collectOwnedNexusMemoryRecords reads the real user's own nexus_memory_items rows, grouped by purpose, scoped to their authoritative tenant+principal id", async () => {
  const pool = stubPool([
    [/^select id from users where tenant_id=\$1 and lower\(email\)=\$2/, () => ({ rows: [{ id: "pg-user-1" }] })],
    [/^insert into users/, () => ({ rows: [] })],
    [/^insert into nexus_organization_memberships/, () => ({ rows: [] })],
    [/^select purpose,content,created_at from nexus_memory_items/, (params) => {
      assert.equal(params[0], "00000000-0000-0000-0000-000000000001", "must query the real authoritative tenant id");
      assert.equal(params[1], "pg-user-1", "must query the caller's own resolved authoritative user id, never a client-suppliable one");
      return { rows: [
        { purpose: "wellness", content: { kind: "goal", metric: "workouts", target: 4 }, created_at: "2026-09-20T00:00:00.000Z" },
        { purpose: "wellness", content: { kind: "entry", metric: "sleep", value: 7 }, created_at: "2026-09-21T00:00:00.000Z" },
        { purpose: "circle", content: { kind: "circle", role: "person", otherName: "Joseph" }, created_at: "2026-09-19T00:00:00.000Z" }
      ] };
    }],
    [/^select workspace_id,record_type,data,created_at from nexus_records/, () => ({ rows: [] })],
    [/^select entity_type,entity_id,payload,state,device_id,created_at from nexus_sync_operations/, () => ({ rows: [] })]
  ]);
  const { collectOwnedNexusMemoryRecords } = loadFns({ statePostgres: true, pool });
  const owned = await collectOwnedNexusMemoryRecords({ id: "user-1", email: "amina@example.com", role: "Standard User" });
  assert.equal(owned["nexus.memory.wellness"].length, 2, "every purpose's rows must be grouped together, labeled by the real toolkit column");
  assert.equal(owned["nexus.memory.circle"].length, 1);
  assert.deepEqual(owned["nexus.memory.wellness"][0].content, { kind: "goal", metric: "workouts", target: 4 });
});

// Found live (lists-toolkit follow-up audit): the first version of this fix only queried nexus_memory_items
// -- a second, entirely separate Postgres table, nexus_records (RecordRepository, backing lists.create/
// update, health.record, telehealth.prepare, drone.plan, business templates, workspace/autonomy-control
// state), was still completely absent from export despite erasure already reaching it.
test("collectOwnedNexusMemoryRecords also reads the real user's own nexus_records rows, grouped by workspace and record type, scoped the same way erasure scopes them", async () => {
  const pool = stubPool([
    [/^select id from users where tenant_id=\$1 and lower\(email\)=\$2/, () => ({ rows: [{ id: "pg-user-1" }] })],
    [/^insert into users/, () => ({ rows: [] })],
    [/^insert into nexus_organization_memberships/, () => ({ rows: [] })],
    [/^select purpose,content,created_at from nexus_memory_items/, () => ({ rows: [] })],
    [/^select workspace_id,record_type,data,created_at from nexus_records/, (params) => {
      assert.equal(params[0], "00000000-0000-0000-0000-000000000001", "must query the real authoritative tenant id");
      assert.equal(params[1], "pg-user-1", "must query the caller's own resolved authoritative user id, never a client-suppliable one");
      return { rows: [
        { workspace_id: "lists", record_type: "checklist", data: { title: "Groceries", items: [{ text: "milk" }] }, created_at: "2026-09-20T00:00:00.000Z" },
        { workspace_id: "lists", record_type: "checklist", data: { title: "Farm tasks", items: [] }, created_at: "2026-09-19T00:00:00.000Z" },
        { workspace_id: "health", record_type: "observation", data: { kind: "vitals" }, created_at: "2026-09-18T00:00:00.000Z" }
      ] };
    }],
    [/^select entity_type,entity_id,payload,state,device_id,created_at from nexus_sync_operations/, () => ({ rows: [] })]
  ]);
  const { collectOwnedNexusMemoryRecords } = loadFns({ statePostgres: true, pool });
  const owned = await collectOwnedNexusMemoryRecords({ id: "user-1", email: "amina@example.com", role: "Standard User" });
  assert.equal(owned["nexus.records.lists.checklist"].length, 2, "every workspace+record type's rows must be grouped together");
  assert.equal(owned["nexus.records.health.observation"].length, 1);
  assert.deepEqual(owned["nexus.records.lists.checklist"][0].content, { title: "Groceries", items: [{ text: "milk" }] });
});

// Found live (fresh-module audit, same day): a THIRD, entirely separate Postgres table,
// nexus_sync_operations (nexus/sync/repository.js), stores a real per-device offline-sync history --
// whatever entity a person's device queued while offline -- keyed directly by user_id, and was also
// completely absent from export despite being real, retained data about the account.
test("collectOwnedNexusMemoryRecords also reads the real user's own nexus_sync_operations rows, grouped by entity type", async () => {
  const pool = stubPool([
    [/^select id from users where tenant_id=\$1 and lower\(email\)=\$2/, () => ({ rows: [{ id: "pg-user-1" }] })],
    [/^insert into users/, () => ({ rows: [] })],
    [/^insert into nexus_organization_memberships/, () => ({ rows: [] })],
    [/^select purpose,content,created_at from nexus_memory_items/, () => ({ rows: [] })],
    [/^select workspace_id,record_type,data,created_at from nexus_records/, () => ({ rows: [] })],
    [/^select entity_type,entity_id,payload,state,device_id,created_at from nexus_sync_operations/, (params) => {
      assert.equal(params[0], "00000000-0000-0000-0000-000000000001", "must query the real authoritative tenant id");
      assert.equal(params[1], "pg-user-1", "must query the caller's own resolved authoritative user id, never a client-suppliable one");
      return { rows: [
        { entity_type: "health_observation", entity_id: "obs-1", payload: { systolic: 120 }, state: "applied", device_id: "phone-1", created_at: "2026-09-20T00:00:00.000Z" },
        { entity_type: "health_observation", entity_id: "obs-2", payload: { systolic: 130 }, state: "conflict", device_id: "phone-1", created_at: "2026-09-19T00:00:00.000Z" },
        { entity_type: "business_record", entity_id: "inv-1", payload: { total: 500 }, state: "applied", device_id: "tablet-1", created_at: "2026-09-18T00:00:00.000Z" }
      ] };
    }]
  ]);
  const { collectOwnedNexusMemoryRecords } = loadFns({ statePostgres: true, pool });
  const owned = await collectOwnedNexusMemoryRecords({ id: "user-1", email: "amina@example.com", role: "Standard User" });
  assert.equal(owned["nexus.sync.health_observation"].length, 2, "every entity type's rows must be grouped together");
  assert.equal(owned["nexus.sync.business_record"].length, 1);
  assert.deepEqual(owned["nexus.sync.health_observation"][0].content, { systolic: 120 });
  assert.equal(owned["nexus.sync.health_observation"][1].state, "conflict", "a conflicted operation is still real, retained data and must be included");
});

test("collectOwnedNexusMemoryRecords fails closed (returns nothing, never throws) if the authoritative query itself errors", async () => {
  const pool = stubPool([
    [/^select id from users/, () => ({ rows: [] })],
    [/^insert into users/, () => ({ rows: [] })],
    [/^insert into nexus_organization_memberships/, () => ({ rows: [] })],
    [/^select purpose,content,created_at from nexus_memory_items/, () => { throw new Error("connection reset"); }]
  ]);
  const { collectOwnedNexusMemoryRecords } = loadFns({ statePostgres: true, pool });
  const owned = await collectOwnedNexusMemoryRecords({ id: "user-1", email: "amina@example.com", role: "Standard User" });
  assert.equal(Object.keys(owned).length, 0, "an export must never fail outright just because this one extra data source errored");
});
