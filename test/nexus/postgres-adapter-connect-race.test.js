"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");

// 2026-09-23: found live from a real deploy log -- "Calling client.query()
// when the client is already executing a query is deprecated and will be
// removed in pg@9.0." Root cause: foundation/src/runtime/postgres-adapter.js
// fired the statement_timeout SET on every new pooled connection without
// awaiting it, so the caller who requested that connection could run its own
// query on the same client before the SET had finished.
//
// The adapter only wires up this connect-handler/timing logic when it
// creates its OWN `pg.Pool` (the `if (!pool)` branch) -- passing a `pool`
// option in as a test double, the obvious way to avoid a real Postgres
// connection, skips that exact branch and would make these tests pass
// trivially without proving anything. Instead this mocks the "pg" module's
// own Pool export via require.cache, so `new PostgresAdapter({ ... })` (no
// `pool` option) takes its real, unmodified "create my own pool" code path,
// and that path's `new pg.Pool(...)` call resolves to a fake, fully
// controllable pool/client that records exact query order.
const adapterPath = require.resolve("../../foundation/src/runtime/postgres-adapter");
const pgPath = require.resolve("pg");
const originalPgCacheEntry = require.cache[pgPath];

function fakeClient() {
  return {
    queries: [],
    query(sql) {
      this.queries.push(sql);
      // A real async round-trip: long enough that an unawaited fire-and-
      // forget SET would let a caller's own query race ahead of it if the
      // bug this fix closes were still present.
      return new Promise(resolve => setTimeout(() => resolve({ rows: [] }), 5));
    },
    release(err) { this.released = true; this.releasedWithError = err; }
  };
}

function withMockedPg(client, run) {
  const listeners = {};
  let connected = false;
  const fakePoolInstance = {
    on(event, handler) { (listeners[event] ||= []).push(handler); },
    async connect() {
      // A real pg Pool fires "connect" only once per genuinely new physical
      // connection, then reuses that client from the pool on later
      // checkouts without re-connecting or re-running any connect handler.
      if (!connected) {
        connected = true;
        for (const handler of listeners.connect || []) handler(client);
      }
      return client;
    },
    async end() {}
  };
  require.cache[pgPath] = {
    id: pgPath, filename: pgPath, loaded: true,
    exports: { Pool: function FakePool() { return fakePoolInstance; } }
  };
  delete require.cache[adapterPath];
  const { PostgresAdapter } = require(adapterPath);
  try {
    return run(PostgresAdapter);
  } finally {
    if (originalPgCacheEntry) require.cache[pgPath] = originalPgCacheEntry; else delete require.cache[pgPath];
    delete require.cache[adapterPath];
  }
}

test("query() waits for the new connection's statement_timeout SET before running the caller's own query on the same client", async () => {
  const client = fakeClient();
  await withMockedPg(client, async PostgresAdapter => {
    const adapter = new PostgresAdapter({ statementTimeoutMs: 1234 });
    await adapter.query("select 1");
  });
  assert.deepEqual(client.queries, ["set statement_timeout = 1234", "select 1"],
    "the SET must be the first query on this client, fully resolved before the real query runs");
});

test("transaction() also waits for the SET before issuing 'begin'", async () => {
  const client = fakeClient();
  await withMockedPg(client, async PostgresAdapter => {
    const adapter = new PostgresAdapter({ statementTimeoutMs: 5000 });
    await adapter.transaction(async trx => {
      await trx.query("insert into t values (1)");
    });
  });
  assert.deepEqual(client.queries, ["set statement_timeout = 5000", "begin", "insert into t values (1)", "commit"]);
});

test("a query error still releases the client back to the pool, marked so the pool can discard a possibly-bad connection", async () => {
  const client = fakeClient();
  await withMockedPg(client, async PostgresAdapter => {
    const adapter = new PostgresAdapter({ statementTimeoutMs: 1000 });
    const original = client.query.bind(client);
    client.query = sql => (sql === "select fail" ? Promise.reject(new Error("boom")) : original(sql));
    await assert.rejects(() => adapter.query("select fail"), /boom/);
  });
  assert.equal(client.released, true, "the client must still be released, not leaked");
  assert.ok(client.releasedWithError instanceof Error, "release must be called with the error so the pool discards this connection instead of reusing it");
});

test("a second query on a client whose setup already resolved does not re-run the SET or add any delay", async () => {
  const client = fakeClient();
  await withMockedPg(client, async PostgresAdapter => {
    const adapter = new PostgresAdapter({ statementTimeoutMs: 1000 });
    await adapter.query("select 1");
    await adapter.query("select 2");
  });
  assert.deepEqual(client.queries, ["set statement_timeout = 1000", "select 1", "select 2"],
    "the SET only ever runs once per physical connection, not once per query");
});

test("passing an already-constructed pool skips the statement_timeout wiring entirely, matching the existing !pool guard", async () => {
  const client = fakeClient();
  const listeners = {};
  const externalPool = {
    on(event, handler) { (listeners[event] ||= []).push(handler); },
    async connect() {
      for (const handler of listeners.connect || []) handler(client);
      return client;
    }
  };
  const { PostgresAdapter } = require(adapterPath);
  const adapter = new PostgresAdapter({ pool: externalPool, statementTimeoutMs: 1000 });
  await adapter.query("select 1");
  assert.deepEqual(client.queries, ["select 1"], "no connect handler should be registered when an external pool is supplied");
});
