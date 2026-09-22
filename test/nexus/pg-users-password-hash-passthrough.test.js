"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const pgUsers = require("../../server/pg-users.js");

// Found while scoping the AUTH_STORE production cutover: foundation/scripts/backfill-users-from-blob.js
// assumed a blob user's `password` field was always plaintext -- true when it was written, but no longer
// true since the blob-password-hashing fix (server.js now stores a real scrypt hash for every seeded/
// migrated/admin-created account). Re-hashing an already-hashed value via createUser's old
// hashPassword(password) call would have silently produced a hash of the hash, permanently locking that
// real account out under AUTH_STORE=postgres. createUser now accepts a pre-hashed value directly.

function stubPool() {
  const calls = [];
  return { calls, query: async (sql, params) => { calls.push({ sql, params }); return { rows: [{ id: "u1", tenant_id: params[0], email: params[1], display_name: params[2], status: "active" }] }; } };
}

test("createUser hashes a plaintext password exactly as before when no passwordHash is given", async () => {
  const pool = stubPool();
  await pgUsers.createUser(pool, { email: "a@example.com", displayName: "A", password: "RealPassword2026!" });
  const insertedHash = pool.calls[0].params[3];
  assert.ok(insertedHash.startsWith("scrypt:"), "a real hash must be computed and stored");
  assert.notEqual(insertedHash, "RealPassword2026!");
  assert.equal(pgUsers.verifyPasswordHash("RealPassword2026!", insertedHash), true);
  assert.equal(pgUsers.verifyPasswordHash("WrongPassword", insertedHash), false);
});

test("createUser stores an already-hashed passwordHash verbatim, never re-hashing it", async () => {
  const pool = stubPool();
  const realHash = pgUsers.hashPassword("RealPassword2026!");
  await pgUsers.createUser(pool, { email: "b@example.com", displayName: "B", passwordHash: realHash });
  const insertedHash = pool.calls[0].params[3];
  assert.equal(insertedHash, realHash, "the exact same hash must be persisted, not a hash of the hash");
  assert.equal(pgUsers.verifyPasswordHash("RealPassword2026!", insertedHash), true, "the real password must still verify correctly");
});

test("createUser prefers passwordHash over password when (implausibly) both are supplied", async () => {
  const pool = stubPool();
  const realHash = pgUsers.hashPassword("TheRealOne!");
  await pgUsers.createUser(pool, { email: "c@example.com", displayName: "C", password: "SomethingElse!", passwordHash: realHash });
  assert.equal(pool.calls[0].params[3], realHash);
});
