"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { checkRuntimeHealth } = require("../../nexus/runtime/health.js");

test("optional provider absence is isolated from authoritative core health", async () => {
  const db = { query: async () => ({ rows: [{ database: "nexus", version_num: 170000, pgvector: true, migrated: true }] }),
    transaction: async work => work({ query: async (sql, params) => sql.startsWith("select marker")
      ? { rows: [{ marker: params[0] }] } : { rows: [] } }) };
  const health = await checkRuntimeHealth({ db, access: { authorize() {} }, acceptance: { report() {} },
    providers: { definitions: [] }, behavior: null }, { env: { RENDER_GIT_COMMIT: "a".repeat(40) } });
  assert.equal(health.ok, true);
  assert.equal(health.providersConfigured, false);
  assert.equal(health.components.providers, false);
  assert.equal(health.browserBundleCompatible, false);
});

test("runtime health proves a transactional write and readback", async () => {
  const statements = []; const db = {
    query: async () => ({ rows: [{ database: "nexus", version_num: 170000, pgvector: true, migrated: true }] }),
    transaction: async work => work({ query: async (sql, params = []) => {
      statements.push(sql); return sql.startsWith("select marker") ? { rows: [{ marker: params[0] }] } : { rows: [] };
    } })
  };
  const health = await checkRuntimeHealth({ db, access: { authorize() {} }, acceptance: { report() {} }, providers: { definitions: [] } });
  assert.equal(health.databaseReadWrite, true);
  assert.equal(statements.some(sql => sql.startsWith("insert into nexus_health_write_probe")), true);
  assert.equal(statements.some(sql => sql.startsWith("select marker from nexus_health_write_probe")), true);
});
