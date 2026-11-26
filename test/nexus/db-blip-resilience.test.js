"use strict";
// 26 Nov 2026, 09:55 and 12:31, a few minutes after a deploy: the live database ran out of memory while several requests read the whole state at once ("select state from
// agrinexus_app_state where id = $1" was the process it killed), went into recovery mode, and an idle connection's error, with no listener, took the whole site down for minutes.
// Now (1) the pools listen for that error, so the site rides out a database restart, and (2) requests that need the state at the same moment share one read of it.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { EventEmitter } = require("node:events");

const root = path.resolve(__dirname, "..", "..");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const slice = (from, to) => { const start = server.indexOf(from); const end = server.indexOf(to, start); assert.ok(start > 0 && end > start, from); return server.slice(start, end); };

test("requests that need the state at the same moment share one database read, each gets its own copy, and a read after a save reads again", async () => {
  const queries = [];
  let release;
  const pool = { query: (sql, params) => { queries.push(sql); return new Promise(resolve => { release = () => resolve({ rows: [{ state: JSON.stringify({ users: [{ id: 1 }], n: queries.length }) }] }); }); } };
  const context = { getPgPool: () => pool, Map, Promise, JSON, String };
  vm.runInNewContext(`${slice("let pgStateWriteGeneration = 0;", "\nasync function ensurePostgresState()")}\nthis.read = readPgStateText; this.saved = () => { pgStateWriteGeneration += 1; };`, context);
  const five = Array.from({ length: 5 }, () => context.read("default"));
  assert.equal(queries.length, 1, "five at once: one query");
  assert.match(queries[0], /^select state::text as state from agrinexus_app_state where id = \$1$/);
  release();
  const texts = await Promise.all(five);
  const copies = texts.map(text => JSON.parse(text));
  assert.ok(copies.every(copy => copy.users[0].id === 1));
  copies[0].users[0].id = 99;
  assert.equal(copies[1].users[0].id, 1, "each request has its own copy");

  const before = context.read("default");          // a read that began before a save ...
  context.saved();
  const after = context.read("default");           // ... is not joined by one that begins after it
  assert.equal(queries.length, 3, "a read after a save reads again");
  release(); await after; // (the second pending read)
  // once a read is over, the next one reads again too
  const later = context.read("default");
  assert.equal(queries.length, 4);
  release(); await later; void before;

  const reader = slice("async function readDbUntimed() {", "\nlet writeDbQueue");
  assert.match(reader, /const stateText = await readPgStateText\(space\);/);
  assert.match(reader, /const state = JSON\.parse\(stateText\);/, "each request parses its own copy");
  assert.match(slice("async function writeDbUntimed(db) {", "\nasync function writePgState(db)"), /finally \{ if \(typeof pgStateWriteGeneration === "number"\) pgStateWriteGeneration \+= 1; \}/);
});

test("an idle database connection that fails (the database restarted) does not take the site down", () => {
  // the server's own pool
  const pools = [];
  class FakePool extends EventEmitter { constructor(config) { super(); this.config = config; pools.push(this); } }
  const context = { require: name => (name === "pg" ? { Pool: FakePool } : require(name)), postgresConfig: () => ({}), console: { error: () => {} }, pgPool: null };
  vm.runInNewContext(`let pgPool = null;\n${slice("function getPgPool() {", "\n// Several requests that need the whole state")}\nthis.get = getPgPool;`, context);
  const pool = context.get();
  assert.equal(pool.listenerCount("error"), 1);
  assert.doesNotThrow(() => pool.emit("error", new Error("Connection terminated unexpectedly")), "with a listener, the error is not fatal");

  // the foundation adapter's pool
  const { PostgresAdapter } = require("../../foundation/src/runtime/postgres-adapter.js");
  const quiet = console.error; console.error = () => {};
  try {
    const adapter = new PostgresAdapter({ connectionString: "postgres://localhost:1/none" });
    assert.ok(adapter.pool.listenerCount("error") >= 1);
    assert.doesNotThrow(() => adapter.pool.emit("error", new Error("the database system is in recovery mode")));
    void adapter.pool.end().catch(() => {});
  } finally { console.error = quiet; }
});
