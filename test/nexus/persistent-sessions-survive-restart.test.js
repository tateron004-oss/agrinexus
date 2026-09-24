"use strict";
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");
const assert = require("node:assert/strict");

// 2026-09-23: found live, more than once, during tonight's voice-testing
// session -- sessions were held only in an in-memory Map (server.js's
// `sessions`), so every deploy's server restart silently logged everyone
// out mid-conversation, even the account that had just confirmed a real
// action a moment earlier. Real Postgres isn't reachable in this sandbox
// (confirmed by test/nexus/postgres-shadow-status-endpoint.test.js, which
// deliberately sets DATABASE_URL="" and only tests the disabled path), so
// this extracts the new persistence functions verbatim from server.js and
// runs them against a mocked pg pool that records every query -- the same
// technique used for the Postgres connect-race fix.
const app = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

function sliceRange(startMarker, endMarker) {
  const start = app.indexOf(startMarker);
  assert.ok(start > 0, `could not find "${startMarker}" in server.js`);
  const end = app.indexOf(endMarker, start);
  assert.ok(end > start, `could not find "${endMarker}" after "${startMarker}" in server.js`);
  return app.slice(start, end);
}

// The real session-persistence functions are contiguous in server.js,
// between sessionsPostgresEnabled() and the start of currentUser().
const sessionsSource = sliceRange("function sessionsPostgresEnabled(", "\nfunction currentUser(req, db) {");

function load({ databaseUrl = "postgres://fake" } = {}) {
  const queries = [];
  const fakePool = {
    async query(sql, params) {
      queries.push({ sql: sql.replace(/\s+/g, " ").trim(), params });
      if (sql.includes("select sid, user_id, expires_at")) return { rows: [] };
      return { rows: [] };
    }
  };
  const errors = [];
  const sandbox = {
    process: { env: { DATABASE_URL: databaseUrl } },
    console: { log: () => {}, error: (...a) => errors.push(a.join(" ")) },
    getPgPool: () => fakePool,
    recordServerError: e => errors.push(e.message),
    sessions: new Map(),
    sessionTtlMs: () => 43_200_000,
    SESSIONS_SWEEP_THRESHOLD: 5000,
    sessionsPostgresReady: false,
    Date
  };
  vm.createContext(sandbox);
  vm.runInContext(sessionsSource, sandbox);
  return { sandbox, queries, errors, fakePool };
}

test("with DATABASE_URL configured, issueSession writes through to Postgres with the real session data", async () => {
  const { sandbox, queries } = load();
  await sandbox.issueSession("sid-1", "user-42");
  assert.equal(sandbox.sessions.get("sid-1").userId, "user-42", "the in-memory Map is still updated exactly as before");
  const insert = queries.find(q => q.sql.includes("insert into agrinexus_sessions"));
  assert.ok(insert, "must write the session through to Postgres, not only the in-memory cache");
  // insert.params is an array constructed inside the VM sandbox (a different
  // JS realm), which trips up assert.deepEqual against a plain array literal
  // here even when the values match -- compare elements directly instead.
  assert.equal(insert.params[0], "sid-1");
  assert.equal(insert.params[1], "user-42");
});

test("without DATABASE_URL, issueSession behaves exactly as it always has -- memory only, zero Postgres calls", async () => {
  const { sandbox, queries } = load({ databaseUrl: "" });
  await sandbox.issueSession("sid-1", "user-42");
  assert.equal(sandbox.sessions.get("sid-1").userId, "user-42");
  assert.deepEqual(queries, [], "no database configured must mean no database calls attempted at all");
});

test("deleteSessionFromPostgres actually issues a real delete for that exact sid", async () => {
  const { sandbox, queries } = load();
  await sandbox.deleteSessionFromPostgres("sid-to-remove");
  const del = queries.find(q => q.sql.includes("delete from agrinexus_sessions where sid"));
  assert.ok(del);
  assert.equal(del.params[0], "sid-to-remove");
});

test("hydrateSessionsFromPostgres loads real rows back into the in-memory Map, restoring an active login after a restart", async () => {
  const { sandbox, fakePool } = load();
  const expiresAt = new Date(Date.now() + 60_000).toISOString();
  fakePool.query = async sql => {
    if (sql.includes("select sid, user_id, expires_at")) {
      return { rows: [{ sid: "restored-sid", user_id: "restored-user", expires_at: expiresAt }] };
    }
    return { rows: [] };
  };
  assert.equal(sandbox.sessions.size, 0, "starts with the empty Map a fresh restart actually has");
  await sandbox.hydrateSessionsFromPostgres();
  assert.equal(sandbox.sessions.get("restored-sid")?.userId, "restored-user",
    "a session that existed before the restart must be usable immediately after it, not require a fresh login");
});

test("hydrateSessionsFromPostgres purges already-expired rows first instead of loading and immediately evicting them", async () => {
  const { sandbox, queries } = load();
  await sandbox.hydrateSessionsFromPostgres();
  const purge = queries.find(q => q.sql.includes("delete from agrinexus_sessions where expires_at"));
  assert.ok(purge, "must clean up expired rows as part of hydration");
});

test("a Postgres failure during issueSession does not throw or block login -- the in-memory session still works", async () => {
  const { sandbox, errors } = load();
  sandbox.getPgPool = () => ({ query: async () => { throw new Error("connection refused"); } });
  await assert.doesNotReject(() => sandbox.issueSession("sid-1", "user-42"));
  assert.equal(sandbox.sessions.get("sid-1").userId, "user-42", "the account can still use the app this request even if Postgres is briefly unreachable");
  assert.ok(errors.some(e => e.includes("connection refused")), "the failure must still be recorded, not silently swallowed");
});
