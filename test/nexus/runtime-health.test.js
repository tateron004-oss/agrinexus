"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { checkRuntimeHealth } = require("../../nexus/runtime/health.js");

test("optional provider absence is isolated from authoritative core health", async () => {
  const db = { query: async (sql, params) => sql.startsWith("select $1")
    ? { rows: [{ marker: params[0] }] }
    : { rows: [{ database: "nexus", version_num: 170000, pgvector: true, migrated: true }] } };
  const health = await checkRuntimeHealth({ db, access: { authorize() {} }, acceptance: { report() {} },
    providers: { definitions: [] }, behavior: { acknowledge() {} } }, { env: { RENDER_GIT_COMMIT: "a".repeat(40) } });
  assert.equal(health.ok, true);
  assert.equal(health.providersConfigured, false);
  assert.equal(health.components.providers, false);
});
