const assert = require("node:assert/strict");
const test = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const { readConfig, assertProductionConfig } = require("../../foundation/src/config.js");
const { redact } = require("../../nexus/observability/logger.js");

test("production refuses browser/local-only persistence and missing secrets", () => {
  assert.throws(() => assertProductionConfig(readConfig({ NODE_ENV: "production" })), error =>
    error.code === "UNSAFE_PRODUCTION_CONFIG" && /DATABASE_URL/.test(error.message));
  const config = readConfig({ NODE_ENV: "production", DATABASE_URL: "postgresql://nexus:secret@db/nexus",
    SESSION_SECRET: "s".repeat(32), PASSWORD_PEPPER: "p".repeat(16) });
  assert.equal(assertProductionConfig(config), config);
});

test("Render blueprint declares managed pgvector database, pooled connection, migrations, and worker", () => {
  const blueprint = fs.readFileSync(path.join(__dirname, "../../render.yaml"), "utf8");
  assert.match(blueprint, /preDeployCommand: node foundation\/scripts\/migrate\.js/);
  assert.match(blueprint, /name: nexus-background-worker[\s\S]*type: worker|type: worker[\s\S]*name: nexus-background-worker/);
  assert.match(blueprint, /name: nexus-postgres[\s\S]*postgresMajorVersion: "17"/);
  assert.match(blueprint, /connectionPool: pgbouncer/);
  assert.match(blueprint, /property: connectionPoolString/);
  assert.match(blueprint, /ipAllowList: \[\]/);
});

test("structured observability redacts credentials and sensitive record keys", () => {
  assert.deepEqual(redact({ token: "secret", nested: { password: "secret", safe: "ok" }, healthRecord: "private" }),
    { token: "[REDACTED]", nested: { password: "[REDACTED]", safe: "ok" }, healthRecord: "[REDACTED]" });
});
