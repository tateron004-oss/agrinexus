const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { usingPostgresState, loadBlobUsers, createUserArgsFromBlobUser } = require("../../foundation/scripts/backfill-users-from-blob.js");
const pgUsers = require("../../server/pg-users.js");

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

test("usingPostgresState matches server.js's own default: postgres once DATABASE_URL is set, json otherwise", () => {
  assert.equal(usingPostgresState({ DATABASE_URL: "postgres://x" }), true);
  assert.equal(usingPostgresState({}), false);
  assert.equal(usingPostgresState({ DATABASE_URL: "postgres://x", AGRINEXUS_STATE_STORE: "json" }), false);
  assert.equal(usingPostgresState({ AGRINEXUS_STATE_STORE: "postgres" }), true);
});

test("loadBlobUsers reads real production state from agrinexus_app_state, not a local file, when DATABASE_URL is set", async () => {
  const originalDatabaseUrl = process.env.DATABASE_URL;
  process.env.DATABASE_URL = "postgres://example";
  try {
    const pool = stubPool([
      [/^select state from agrinexus_app_state/, params => {
        assert.deepEqual(params, ["default"]);
        return { rowCount: 1, rows: [{ state: { users: [{ email: "admin@agrinexus.org", password: "Admin2026!", name: "Platform Admin" }] } }] };
      }]
    ]);
    const { users, source } = await loadBlobUsers(pool);
    assert.equal(users.length, 1);
    assert.equal(users[0].email, "admin@agrinexus.org");
    assert.match(source, /agrinexus_app_state/);
  } finally {
    if (originalDatabaseUrl === undefined) delete process.env.DATABASE_URL;
    else process.env.DATABASE_URL = originalDatabaseUrl;
  }
});

test("loadBlobUsers throws a clear error instead of silently returning nothing when the state table hasn't been seeded yet", async () => {
  const originalDatabaseUrl = process.env.DATABASE_URL;
  process.env.DATABASE_URL = "postgres://example";
  try {
    const pool = stubPool([[/^select state from agrinexus_app_state/, () => ({ rowCount: 0, rows: [] })]]);
    await assert.rejects(() => loadBlobUsers(pool), /has no 'default' row yet/);
  } finally {
    if (originalDatabaseUrl === undefined) delete process.env.DATABASE_URL;
    else process.env.DATABASE_URL = originalDatabaseUrl;
  }
});

test("createUserArgsFromBlobUser hashes a legacy plaintext blob password via the normal password field", () => {
  const args = createUserArgsFromBlobUser({ email: "Admin@Agrinexus.org", name: "Platform Admin", password: "Admin2026!" });
  assert.deepEqual(args, { email: "admin@agrinexus.org", displayName: "Platform Admin", password: "Admin2026!" });
});

test("createUserArgsFromBlobUser passes an already-hashed blob password straight through as passwordHash, never re-hashing it", () => {
  const realHash = pgUsers.hashPassword("Admin2026!");
  const args = createUserArgsFromBlobUser({ email: "admin@agrinexus.org", name: "Platform Admin", password: realHash });
  assert.deepEqual(args, { email: "admin@agrinexus.org", displayName: "Platform Admin", passwordHash: realHash });
  assert.equal(args.password, undefined, "must not also carry the plaintext-hashing field");
});

test("createUserArgsFromBlobUser falls back to the email as display name when the blob has no name", () => {
  const args = createUserArgsFromBlobUser({ email: "noname@agrinexus.org", password: "Something2026!" });
  assert.equal(args.displayName, "noname@agrinexus.org");
});

test("createUserArgsFromBlobUser returns null (counted as skipped) for a row with no email or no password", () => {
  assert.equal(createUserArgsFromBlobUser({ email: "", password: "x" }), null);
  assert.equal(createUserArgsFromBlobUser({ email: "x@example.com", password: "" }), null);
  assert.equal(createUserArgsFromBlobUser({}), null);
});

test("loadBlobUsers falls back to a local db.json file only in explicit local/dev mode (AGRINEXUS_STATE_STORE=json)", async () => {
  const originalDatabaseUrl = process.env.DATABASE_URL;
  const originalStateStore = process.env.AGRINEXUS_STATE_STORE;
  const originalDbPath = process.env.AGRINEXUS_DB_PATH;
  const tmpFile = path.join(os.tmpdir(), `backfill-test-db-${Date.now()}.json`);
  fs.writeFileSync(tmpFile, JSON.stringify({ users: [{ email: "local@agrinexus.org", password: "Local2026!", name: "Local Dev" }] }));
  delete process.env.DATABASE_URL;
  process.env.AGRINEXUS_STATE_STORE = "json";
  process.env.AGRINEXUS_DB_PATH = tmpFile;
  try {
    const pool = stubPool([]);
    const { users, source } = await loadBlobUsers(pool);
    assert.equal(users.length, 1);
    assert.equal(users[0].email, "local@agrinexus.org");
    assert.equal(source, tmpFile);
    assert.equal(pool.calls.length, 0, "must not query Postgres in local file mode");
  } finally {
    fs.unlinkSync(tmpFile);
    if (originalDatabaseUrl === undefined) delete process.env.DATABASE_URL; else process.env.DATABASE_URL = originalDatabaseUrl;
    if (originalStateStore === undefined) delete process.env.AGRINEXUS_STATE_STORE; else process.env.AGRINEXUS_STATE_STORE = originalStateStore;
    if (originalDbPath === undefined) delete process.env.AGRINEXUS_DB_PATH; else process.env.AGRINEXUS_DB_PATH = originalDbPath;
  }
});
