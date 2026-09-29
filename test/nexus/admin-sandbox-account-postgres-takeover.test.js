"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const pgUsers = require("../../server/pg-users.js");

// Found live (session/auth sibling audit, same bug class as PR #409's blob-store admin-takeover fix):
// the /api/admin/test-user, /admin-user, and /investor-user routes' existing-account guard checked
// ONLY the JSON-blob db.users array. When AUTH_STORE=postgres, pgUsers.createUser() (called
// unconditionally by all three routes right after that guard) is a plain `on conflict ... do update set
// password_hash = excluded.password_hash` upsert with no ownership check of its own. A real Postgres-
// authoritative account with no blob shadow row yet (seed data, or any account created before the
// AUTH_STORE=postgres cutover that has never logged in since -- login is the only thing that creates a
// blob shadow) would have its real password silently overwritten the moment anyone with the Admin role
// called one of these endpoints with that email -- a full account takeover needing no knowledge of the
// original password. Fixed with a shared refuseIfRealPostgresAccountExists(email, blobExisting) guard.
function stubPool(handlers) {
  const calls = [];
  return {
    calls,
    query: async (sql, params = []) => {
      calls.push({ sql, params });
      for (const [pattern, respond] of handlers) {
        if (pattern.test(sql)) return respond(params, calls);
      }
      throw new Error(`stubPool: no handler for query: ${sql}`);
    }
  };
}

const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

function loadGuard({ postgresAuth, pool }) {
  const start = source.indexOf("function usingPostgresAuth(");
  assert.ok(start > 0, "could not locate usingPostgresAuth in server.js");
  const end = source.indexOf("\nasync function refuseIfRealPostgresAccountExists(", start);
  assert.ok(end > start, "could not find the end of the usingPostgresAuth/refuseIfRealPostgresAccountExists region");
  const functionEnd = source.indexOf("\n}", end) + 2;
  const snippet = source.slice(start, functionEnd);
  const sandbox = {
    process: { env: postgresAuth ? { AUTH_STORE: "postgres", DATABASE_URL: "postgres://stub" } : {} },
    getPgPool: () => pool,
    pgUsers,
    String, Boolean
  };
  vm.createContext(sandbox);
  vm.runInContext(`${snippet}\nthis.fn = refuseIfRealPostgresAccountExists;`, sandbox);
  return sandbox.fn;
}

test("refuses when a real, active Postgres account exists and this email has no blob shadow yet", async () => {
  const pool = stubPool([
    [/^select id, tenant_id, email, display_name, password_hash, status from users/, () => ({
      rows: [{ id: "pg-user-1", email: "seed-account@example.com", status: "active" }]
    })]
  ]);
  const guard = loadGuard({ postgresAuth: true, pool });
  const refused = await guard("seed-account@example.com", null);
  assert.equal(refused, true, "a real Postgres account with no blob shadow must be protected from a silent takeover");
});

test("does not refuse when no Postgres account exists for that email", async () => {
  const pool = stubPool([
    [/^select id, tenant_id, email, display_name, password_hash, status from users/, () => ({ rows: [] })]
  ]);
  const guard = loadGuard({ postgresAuth: true, pool });
  const refused = await guard("brand-new-test-account@example.com", null);
  assert.equal(refused, false);
});

test("does not refuse when a blob shadow already exists, even if Postgres also has a row -- a known sandbox account can still be reset", async () => {
  const pool = stubPool([
    [/^select id, tenant_id, email, display_name, password_hash, status from users/, () => ({
      rows: [{ id: "pg-user-1", email: "already-sandboxed@example.com", status: "active" }]
    })]
  ]);
  const guard = loadGuard({ postgresAuth: true, pool });
  const refused = await guard("already-sandboxed@example.com", { isSandboxTestAccount: true });
  assert.equal(refused, false, "an endpoint's own previously-created sandbox account must still be resettable");
});

test("never queries Postgres at all when AUTH_STORE is not postgres", async () => {
  const pool = stubPool([]);
  const guard = loadGuard({ postgresAuth: false, pool });
  const refused = await guard("anyone@example.com", null);
  assert.equal(refused, false);
  assert.equal(pool.calls.length, 0, "must not touch Postgres when AUTH_STORE=blob");
});

test("a deleted/disabled Postgres account does not block reuse of its (now-freed) email", async () => {
  const pool = stubPool([
    [/^select id, tenant_id, email, display_name, password_hash, status from users/, () => ({
      rows: [{ id: "pg-user-1", email: "deleted-abc@erased.invalid", status: "deleted" }]
    })]
  ]);
  const guard = loadGuard({ postgresAuth: true, pool });
  const refused = await guard("deleted-abc@erased.invalid", null);
  assert.equal(refused, false);
});
