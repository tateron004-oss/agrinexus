"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const spaces = require("../../server/businessSpaces.js");

// Stage 3 of business spaces: the newer engine (tasks, memory, reminders, notifications, devices, the worker) labels every row with a tenant. The default space keeps the tenant it has always had;
// each business gets its own. There is no Postgres in the test environment, so the real functions are lifted out of server.js and run against a fake database that records every query.

const root = path.resolve(__dirname, "..", "..");
const source = fs.readFileSync(path.join(root, "server.js"), "utf8");
const DEFAULT_TENANT = "00000000-0000-0000-0000-000000000001";

test("a tenant id per business: the default one for the default space, a stable valid UUID for each business, never shared", () => {
  assert.equal(spaces.tenantIdFor("default"), DEFAULT_TENANT);
  assert.equal(spaces.tenantIdFor(""), DEFAULT_TENANT);
  assert.equal(spaces.DEFAULT_TENANT_ID, DEFAULT_TENANT);
  const acme = spaces.tenantIdFor("acme");
  assert.match(acme, /^[0-9a-f]{8}-[0-9a-f]{4}-5[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
  assert.equal(spaces.tenantIdFor("acme"), acme, "the same every time, on every server");
  assert.notEqual(acme, DEFAULT_TENANT);
  assert.notEqual(spaces.tenantIdFor("acme"), spaces.tenantIdFor("acme-2"));
  const seen = new Set(Array.from({ length: 2000 }, (_, index) => spaces.tenantIdFor(`business-${index}`)));
  assert.equal(seen.size, 2000);
});

function loadEngineIdentity({ env = {} } = {}) {
  const start = source.indexOf("const NEXUS_AUTHORITATIVE_TENANT_ID");
  const end = source.indexOf("const authoritativeNexusRuntime = createServerRuntimeAdapter");
  assert.ok(start > 0 && end > start, "could not locate the tenant helpers");
  const grab = name => { const from = source.indexOf(`function ${name}(`); assert.ok(from > 0, name); return source.slice(from, source.indexOf("\nfunction ", from + 10)); };
  const grabAsync = name => { const from = source.indexOf(`async function ${name}(`); assert.ok(from > 0, name); return source.slice(from, source.indexOf("\n}\n", from) + 3); };
  const queries = [];
  const created = [];
  const pool = { query: async (sql, params) => { queries.push({ sql: sql.replace(/\s+/g, " ").trim(), params }); return { rows: [], rowCount: 0 }; } };
  const sandbox = {
    crypto, businessSpaces: spaces, process: { env }, usingPostgresState: () => true, getPgPool: () => pool,
    pgUsers: { createUser: async (givenPool, fields) => { created.push(fields); return {}; } },
    Set, Promise, String, Object
  };
  vm.createContext(sandbox);
  vm.runInContext(`${source.slice(start, end)}\n${grab("deterministicAuthoritativeUserId")}\n${grabAsync("authoritativeRuntimeUser")}
    this.authoritativeRuntimeUser = authoritativeRuntimeUser; this.ensureBusinessTenant = ensureBusinessTenant; this.pgCreateUserHere = pgCreateUserHere; this.currentTenantId = currentTenantId;`, sandbox);
  return { sandbox, queries, created, pool };
}

const user = { id: "u_1", email: "Person@Example.org", name: "Person", role: "Standard User" };

test("the engine principal in the default space uses the default tenant and never creates a tenant row", async () => {
  const { sandbox, queries } = loadEngineIdentity();
  const principal = await sandbox.authoritativeRuntimeUser(user);
  assert.equal(principal.tenantId, DEFAULT_TENANT);
  assert.equal(principal.organizationId, DEFAULT_TENANT);
  assert.ok(!queries.some(query => /insert into tenants/.test(query.sql)));
  assert.ok(queries.every(query => query.params[0] === DEFAULT_TENANT || query.params.includes(DEFAULT_TENANT)), "every query is scoped to the default tenant");
});

test("inside a business the engine principal uses the business's tenant, the tenant row is created first and only once", async () => {
  const { sandbox, queries } = loadEngineIdentity();
  const run = () => spaces.runInSpace("acme", () => sandbox.authoritativeRuntimeUser(user), { name: "Acme Farms" });
  const tenant = spaces.tenantIdFor("acme");
  const principal = await run();
  assert.equal(principal.tenantId, tenant);
  assert.equal(principal.organizationId, tenant);
  const sqls = queries.map(query => query.sql);
  const tenantInsert = sqls.findIndex(sql => /insert into tenants/.test(sql));
  const usersInsert = sqls.findIndex(sql => /insert into users/.test(sql));
  assert.ok(tenantInsert >= 0 && tenantInsert < usersInsert, "the tenant exists before anything refers to it");
  assert.deepEqual(Array.from(queries[tenantInsert].params), [tenant, "Acme Farms", "business-acme"]);
  assert.ok(!queries.some(query => query.params.includes(DEFAULT_TENANT)), "nothing touches the default tenant");
  assert.ok(queries.filter(query => /insert into nexus_organization_memberships/.test(query.sql)).every(query => query.params[0] === tenant));
  await run();
  assert.equal(queries.filter(query => /insert into tenants/.test(query.sql)).length, 1, "created once per tenant");
});

test("two businesses never share a tenant, even for the same email", async () => {
  const { sandbox, queries } = loadEngineIdentity();
  const a = await spaces.runInSpace("acme", () => sandbox.authoritativeRuntimeUser(user), { name: "Acme" });
  const b = await spaces.runInSpace("beta-co", () => sandbox.authoritativeRuntimeUser(user), { name: "Beta" });
  assert.notEqual(a.tenantId, b.tenantId);
  const lookups = queries.filter(query => /select id from users where tenant_id/.test(query.sql)).map(query => query.params[0]);
  assert.deepEqual(lookups, [a.tenantId, b.tenantId], "the person is looked up inside each tenant only");
});

test("a sign-in account written to Postgres goes to the tenant of its business; a new business's first Admin goes to the NEW business's tenant", async () => {
  const { sandbox, queries, created } = loadEngineIdentity();
  await spaces.runInSpace("acme", () => sandbox.pgCreateUserHere({ email: "a@acme.example", displayName: "A", password: "x" }), { name: "Acme" });
  assert.equal(created[0].tenantId, spaces.tenantIdFor("acme"));
  // Created by the platform owner (default space) for a business that does not exist yet.
  await sandbox.pgCreateUserHere({ email: "o@new.example", displayName: "O", password: "x" }, "new-biz", "New Biz");
  assert.equal(created[1].tenantId, spaces.tenantIdFor("new-biz"));
  const tenantRows = queries.filter(query => /insert into tenants/.test(query.sql)).map(query => query.params[0]);
  assert.deepEqual(tenantRows, [spaces.tenantIdFor("acme"), spaces.tenantIdFor("new-biz")], "each tenant row made before its first user");
  // The default space is unchanged.
  await sandbox.pgCreateUserHere({ email: "d@default.example", displayName: "D", password: "x" });
  assert.equal(created[2].tenantId, DEFAULT_TENANT);
});

test("the audit, AI-run and health-intake copies written to Postgres carry the business's tenant", async () => {
  const calls = [];
  const queries = [];
  const pool = { query: async (sql, params) => { queries.push({ sql, params }); return { rows: [], rowCount: 0 }; } };
  const grab = name => { const from = source.indexOf(`function ${name}(`); assert.ok(from > 0, name); return source.slice(from, source.indexOf("\n}\n", from) + 3); };
  const start = source.indexOf("const NEXUS_AUTHORITATIVE_TENANT_ID");
  const end = source.indexOf("const authoritativeNexusRuntime = createServerRuntimeAdapter");
  const sandbox = {
    crypto, businessSpaces: spaces, process: { env: { AUDIT_EVENT_STORE: "postgres", DATABASE_URL: "postgres://x", HEALTH_INTAKE_STORE: "postgres" } }, getPgPool: () => pool, Set, Promise, String, Object, console, recordServerError: () => {},
    pgUsers: {}, pgAuditEvents: { recordAuditEvent: async (p, fields) => calls.push(["audit", fields.tenantId]), recordAiRun: async (p, fields) => calls.push(["ai", fields.tenantId]) },
    pgHealthIntakes: { createIntake: async (p, fields) => calls.push(["intake", fields.tenantId]) }
  };
  vm.createContext(sandbox);
  vm.runInContext(`${source.slice(start, end)}
    ${grab("usingPostgresAuditEvents")} ${grab("shadowWriteAuditEventToPostgres")} ${grab("shadowWriteAiRunToPostgres")}
    function usingPostgresHealthIntakes() { return true; }
    ${grab("shadowWriteHealthIntakeToPostgres")}
    this.audit = shadowWriteAuditEventToPostgres; this.ai = shadowWriteAiRunToPostgres; this.intake = shadowWriteHealthIntakeToPostgres;`, sandbox);
  const settle = () => new Promise(resolve => setTimeout(resolve, 20));
  spaces.runInSpace("acme", () => { sandbox.audit({ action: "a", entityType: "t", entityId: "1", actorEmail: "x@y.z", metadata: {} }); sandbox.ai({ runType: "r", provider: "p", responseText: "hi" }); sandbox.intake({ countryId: "kenya", patientRef: "p1", needSummary: "n", riskLevel: "low" }); }, { name: "Acme" });
  sandbox.audit({ action: "a", entityType: "t", entityId: "1", actorEmail: "x@y.z", metadata: {} });
  await settle();
  const acme = spaces.tenantIdFor("acme");
  assert.deepEqual(calls.filter(call => call[1] === acme).map(call => call[0]).sort(), ["ai", "audit", "intake"]);
  assert.deepEqual(calls.filter(call => call[1] === DEFAULT_TENANT).map(call => call[0]), ["audit"], "the default space still writes to the default tenant");
});

test("the workforce-role, trade-order and course copies written to Postgres carry the business's tenant", async () => {
  const calls = [];
  const pool = { query: async () => ({ rows: [], rowCount: 0 }) };
  const grab = name => { const from = source.indexOf(`function ${name}(`); assert.ok(from > 0, name); return source.slice(from, source.indexOf("\n}\n", from) + 3); };
  const start = source.indexOf("const NEXUS_AUTHORITATIVE_TENANT_ID");
  const end = source.indexOf("const authoritativeNexusRuntime = createServerRuntimeAdapter");
  const sandbox = {
    crypto, businessSpaces: spaces, process: { env: {} }, getPgPool: () => pool, Set, Promise, String, Object, Number, console, recordServerError: () => {},
    pgUsers: {}, patchPersistedRecord: async () => null,
    pgWorkforce: { createWorkforceRole: async (p, fields) => { calls.push(["role", fields.tenantId]); return null; } },
    pgTrade: { upsertTradeOrder: async (p, fields) => { calls.push(["order", fields.tenantId]); } },
    pgCourses: { upsertCourse: async (p, fields) => { calls.push(["course", fields.tenantId]); return null; } }
  };
  vm.createContext(sandbox);
  vm.runInContext(`${source.slice(start, end)}
    function usingPostgresWorkforce() { return true; } function usingPostgresTrade() { return true; } function usingPostgresCourses() { return true; }
    ${grab("shadowWriteWorkforceRoleToPostgres")} ${grab("shadowWriteTradeOrderToPostgres")} ${grab("shadowWriteCourseProgressToPostgres")}
    this.role = shadowWriteWorkforceRoleToPostgres; this.order = shadowWriteTradeOrderToPostgres; this.course = shadowWriteCourseProgressToPostgres;`, sandbox);
  const settle = () => new Promise(resolve => setTimeout(resolve, 20));
  const fire = () => { sandbox.role({ title: "Picker", level: "entry", country: "kenya", minReadiness: 1 }); sandbox.order({ transactionId: "T-1", country: "kenya", status: "created", amount: 5 }); sandbox.course({ resourceId: "c1", title: "Course", category: "farm", status: "started" }, "x@y.z"); };
  spaces.runInSpace("acme", fire, { name: "Acme" });
  fire();
  await settle();
  const acme = spaces.tenantIdFor("acme");
  assert.deepEqual(calls.filter(call => call[1] === acme).map(call => call[0]).sort(), ["course", "order", "role"]);
  assert.deepEqual(calls.filter(call => call[1] === DEFAULT_TENANT).map(call => call[0]).sort(), ["course", "order", "role"], "the default space still writes to the default tenant");
});
