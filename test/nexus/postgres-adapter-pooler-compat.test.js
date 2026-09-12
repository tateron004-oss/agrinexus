const test = require("node:test");
const assert = require("node:assert/strict");
const { PostgresAdapter } = require("../../foundation/src/runtime/postgres-adapter.js");

test("PostgresAdapter never puts statement_timeout in the Pool startup config (PgBouncer rejects unknown startup parameters)", () => {
  const adapter = new PostgresAdapter({ connectionString: "postgres://u:p@localhost:1/db", statementTimeoutMs: 45000 });
  try {
    assert.equal(adapter.pool.options.statement_timeout, undefined, "statement_timeout must not be a Pool/startup config option");
    assert.equal(adapter.pool.options.application_name, "agrinexus-foundation", "application_name is a standard, pooler-safe startup parameter and should still be set");
  } finally {
    adapter.pool.end();
  }
});

test("PostgresAdapter applies statement_timeout via a normal SET on new connections instead", () => {
  const adapter = new PostgresAdapter({ connectionString: "postgres://u:p@localhost:1/db", statementTimeoutMs: 45000 });
  try {
    assert.equal(adapter.pool.listenerCount("connect"), 1, "must register exactly one connect handler to apply the timeout post-connection");
  } finally {
    adapter.pool.end();
  }
});

test("PostgresAdapter's connect handler issues the configured timeout value and tolerates a query failure", async () => {
  const queries = [];
  const fakeClient = { query: async sql => { queries.push(sql); throw new Error("simulated SET failure"); } };
  const originalConsoleError = console.error;
  console.error = () => {};
  try {
    const adapter = new PostgresAdapter({ connectionString: "postgres://u:p@localhost:1/db", statementTimeoutMs: 12345 });
    try {
      adapter.pool.emit("connect", fakeClient);
      await new Promise(resolve => setImmediate(resolve));
      assert.equal(queries.length, 1);
      assert.match(queries[0], /^set statement_timeout = 12345$/);
    } finally {
      adapter.pool.end();
    }
  } finally {
    console.error = originalConsoleError;
  }
});

test("PostgresAdapter falls back to a 60s default when statementTimeoutMs is missing or invalid", () => {
  const adapter = new PostgresAdapter({ connectionString: "postgres://u:p@localhost:1/db", statementTimeoutMs: "not-a-number" });
  const queries = [];
  try {
    adapter.pool.emit("connect", { query: async sql => { queries.push(sql); } });
  } finally {
    adapter.pool.end();
  }
  return new Promise(resolve => setImmediate(() => {
    assert.match(queries[0], /^set statement_timeout = 60000$/);
    resolve();
  }));
});
