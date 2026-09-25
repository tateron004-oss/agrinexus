const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
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

test("hashPassword/verifyPasswordHash round-trip and reject tampered hashes", () => {
  const hash = pgUsers.hashPassword("Correct-Horse-1", "pepper");
  assert.match(hash, /^scrypt:[0-9a-f]+:[0-9a-f]+$/);
  assert.equal(pgUsers.verifyPasswordHash("Correct-Horse-1", hash, "pepper"), true);
  assert.equal(pgUsers.verifyPasswordHash("wrong-password", hash, "pepper"), false);
  assert.equal(pgUsers.verifyPasswordHash("Correct-Horse-1", hash, "different-pepper"), false);
  assert.equal(pgUsers.verifyPasswordHash("Correct-Horse-1", "not-a-real-hash"), false);
});

test("verifyPassword accepts the correct password and records last_login_at, rejects wrong password without mutation", async () => {
  const storedHash = pgUsers.hashPassword("Correct-Horse-1");
  const pool = stubPool([
    [/^select id, tenant_id, email, display_name, password_hash, status from users/, () => ({
      rows: [{ id: "user-1", tenant_id: "tenant-1", email: "demo@agrinexus.org", display_name: "Demo", password_hash: storedHash, status: "active" }]
    })],
    [/^update users set last_login_at = now\(\)/, params => {
      assert.deepEqual(params, ["user-1"]);
      return { rowCount: 1 };
    }]
  ]);
  const user = await pgUsers.verifyPassword(pool, "demo@agrinexus.org", "Correct-Horse-1");
  assert.equal(user.id, "user-1");
  assert.equal(pool.calls.length, 2, "successful login must record last_login_at");

  const pool2 = stubPool([
    [/^select id, tenant_id, email, display_name, password_hash, status from users/, () => ({
      rows: [{ id: "user-1", tenant_id: "tenant-1", email: "demo@agrinexus.org", display_name: "Demo", password_hash: storedHash, status: "active" }]
    })]
  ]);
  const rejected = await pgUsers.verifyPassword(pool2, "demo@agrinexus.org", "wrong-password");
  assert.equal(rejected, null);
  assert.equal(pool2.calls.length, 1, "a failed login must not update last_login_at");
});

// Found live (login-security follow-up audit): verifyPassword looked the
// account up FIRST and only ran the deliberately-expensive scrypt
// comparison when a real hashed credential was found -- so a nonexistent
// email returned near-instantly while a wrong password for a real account
// paid scrypt's real cost, even though both return the identical result
// (null). That timing difference alone lets an attacker enumerate valid
// emails, the exact leak the password-reset endpoint already explicitly
// guards against. Spying on the real crypto.scryptSync call count (rather
// than measuring wall-clock time, which would make this test flaky) proves
// the fix deterministically: both cases must now pay the same real cost.
test("verifyPassword always runs a real scrypt comparison, even for a nonexistent account, so response timing can't enumerate emails", async () => {
  const original = crypto.scryptSync;
  let calls = 0;
  crypto.scryptSync = (...args) => { calls += 1; return original(...args); };
  try {
    const noSuchAccount = stubPool([[/^select id, tenant_id, email, display_name, password_hash, status from users/, () => ({ rows: [] })]]);
    calls = 0;
    const result = await pgUsers.verifyPassword(noSuchAccount, "no-such-account@example.com", "anything");
    assert.equal(result, null);
    assert.equal(calls, 1, "a nonexistent account must still pay the real scrypt cost, exactly once");

    const storedHash = pgUsers.hashPassword("Correct-Horse-1");
    const wrongPassword = stubPool([[/^select id, tenant_id, email, display_name, password_hash, status from users/, () => ({
      rows: [{ id: "user-1", tenant_id: "tenant-1", email: "demo@agrinexus.org", display_name: "Demo", password_hash: storedHash, status: "active" }]
    })]]);
    calls = 0;
    const rejected = await pgUsers.verifyPassword(wrongPassword, "demo@agrinexus.org", "wrong-password");
    assert.equal(rejected, null);
    assert.equal(calls, 1, "a wrong password for a real account must pay the same real scrypt cost, exactly once");
  } finally {
    crypto.scryptSync = original;
  }
});

test("verifyPassword still returns the user when the last_login_at bookkeeping update fails (e.g. migration 017 not applied yet)", async () => {
  const storedHash = pgUsers.hashPassword("Correct-Horse-1");
  const originalConsoleError = console.error;
  console.error = () => {};
  try {
    const pool = stubPool([
      [/^select id, tenant_id, email, display_name, password_hash, status from users/, () => ({
        rows: [{ id: "user-1", tenant_id: "tenant-1", email: "demo@agrinexus.org", display_name: "Demo", password_hash: storedHash, status: "active" }]
      })],
      [/^update users set last_login_at = now\(\)/, () => { throw new Error('column "last_login_at" does not exist'); }]
    ]);
    const user = await pgUsers.verifyPassword(pool, "demo@agrinexus.org", "Correct-Horse-1");
    assert.equal(user.id, "user-1", "a correct password must still succeed even if the last_login_at write fails");
  } finally {
    console.error = originalConsoleError;
  }
});

test("verifyPassword rejects a non-active account even with the correct password", async () => {
  const storedHash = pgUsers.hashPassword("Correct-Horse-1");
  const pool = stubPool([
    [/^select id, tenant_id, email, display_name, password_hash, status from users/, () => ({
      rows: [{ id: "user-1", email: "demo@agrinexus.org", password_hash: storedHash, status: "suspended" }]
    })]
  ]);
  const result = await pgUsers.verifyPassword(pool, "demo@agrinexus.org", "Correct-Horse-1");
  assert.equal(result, null);
});

test("createUser stores a hashed password, never the plaintext, via an upsert", async () => {
  const pool = stubPool([
    [/^insert into users/, params => {
      assert.equal(params[0], pgUsers.DEMO_TENANT_ID);
      assert.equal(params[1], "new@agrinexus.org");
      assert.equal(params[2], "New Person");
      assert.notEqual(params[3], "Sup3rSecret!", "plaintext password must never reach the query params");
      assert.match(params[3], /^scrypt:/);
      return { rows: [{ id: "user-2", tenant_id: pgUsers.DEMO_TENANT_ID, email: "new@agrinexus.org", display_name: "New Person", status: "active" }] };
    }]
  ]);
  const created = await pgUsers.createUser(pool, { email: "new@agrinexus.org", displayName: "New Person", password: "Sup3rSecret!" });
  assert.equal(created.email, "new@agrinexus.org");
  assert.match(pool.calls[0].sql, /on conflict \(tenant_id, email\) do update/);
});

test("consumeResetToken accepts a matching, unexpired token and clears it after use; rejects a mismatched or expired token", async () => {
  const validHash = require("crypto").createHash("sha256").update("correct-raw-token").digest("hex");
  const futureExpiry = new Date(Date.now() + 60_000).toISOString();

  const acceptingPool = stubPool([
    [/^select id, tenant_id, email, display_name, password_hash, status from users/, () => ({ rows: [{ id: "user-1", email: "demo@agrinexus.org" }] })],
    [/^select password_reset_token_hash, password_reset_expires_at from users/, () => ({ rows: [{ password_reset_token_hash: validHash, password_reset_expires_at: futureExpiry }] })],
    [/^update users set password_hash = \$2, password_reset_token_hash = null/, params => {
      assert.equal(params[0], "user-1");
      assert.match(params[1], /^scrypt:/);
      return { rowCount: 1 };
    }]
  ]);
  assert.equal(await pgUsers.consumeResetToken(acceptingPool, "demo@agrinexus.org", "correct-raw-token", "Brand-New-Pass1"), true);

  const wrongTokenPool = stubPool([
    [/^select id, tenant_id, email, display_name, password_hash, status from users/, () => ({ rows: [{ id: "user-1", email: "demo@agrinexus.org" }] })],
    [/^select password_reset_token_hash, password_reset_expires_at from users/, () => ({ rows: [{ password_reset_token_hash: validHash, password_reset_expires_at: futureExpiry }] })]
  ]);
  assert.equal(await pgUsers.consumeResetToken(wrongTokenPool, "demo@agrinexus.org", "incorrect-token", "Brand-New-Pass1"), false);
  assert.equal(wrongTokenPool.calls.length, 2, "a rejected token must not issue the password-update query");

  const expiredPool = stubPool([
    [/^select id, tenant_id, email, display_name, password_hash, status from users/, () => ({ rows: [{ id: "user-1", email: "demo@agrinexus.org" }] })],
    [/^select password_reset_token_hash, password_reset_expires_at from users/, () => ({ rows: [{ password_reset_token_hash: validHash, password_reset_expires_at: new Date(Date.now() - 1000).toISOString() }] })]
  ]);
  assert.equal(await pgUsers.consumeResetToken(expiredPool, "demo@agrinexus.org", "correct-raw-token", "Brand-New-Pass1"), false);
});

test("the demo seed user's real password hash (migrations 002 and 018) actually verifies against \"Demo2026!\"", () => {
  const migrationsDir = path.join(__dirname, "../../foundation/migrations");
  const migration002 = fs.readFileSync(path.join(migrationsDir, "002_seed_demo.sql"), "utf8");
  const migration018 = fs.readFileSync(path.join(migrationsDir, "018_demo_user_real_password_hash.sql"), "utf8");
  const hashIn002 = migration002.match(/'(scrypt:[0-9a-f]+:[0-9a-f]+)'/)[1];
  const hashIn018 = migration018.match(/'(scrypt:[0-9a-f]+:[0-9a-f]+)'/)[1];
  assert.equal(hashIn002, hashIn018, "the fresh-database seed (002) and the already-migrated-database patch (018) must set the identical hash");
  assert.equal(pgUsers.verifyPasswordHash("Demo2026!", hashIn002, ""), true, "the seeded hash must actually verify against its documented password with an empty pepper");
  assert.equal(pgUsers.verifyPasswordHash("wrong-password", hashIn002, ""), false);
});

test("buildBlobShadowFromPostgresUser backfills a usable blob row for a Postgres-only account", () => {
  const pgUser = { id: "user-1", email: "demo@agrinexus.org", display_name: "Demo Person", status: "active" };
  const shadow = pgUsers.buildBlobShadowFromPostgresUser(pgUser, { defaultCountry: "Nigeria", defaultLanguage: "en" });
  assert.equal(shadow.email, "demo@agrinexus.org");
  assert.equal(shadow.name, "Demo Person");
  assert.equal(shadow.role, "Standard User");
  assert.equal(shadow.country, "Nigeria");
  assert.equal(shadow.language, "en");
  assert.match(shadow.id, /^[0-9a-f-]{36}$/, "must assign a fresh blob id, not the Postgres uuid");
  assert.notEqual(shadow.id, pgUser.id);

  const noDisplayName = pgUsers.buildBlobShadowFromPostgresUser({ id: "user-2", email: "nodisplay@agrinexus.org" });
  assert.equal(noDisplayName.name, "nodisplay@agrinexus.org", "must fall back to email when display_name is missing");
});

test("setPasswordResetToken reports whether a matching account exists", async () => {
  const found = stubPool([[/^update users set password_reset_token_hash/, () => ({ rowCount: 1 })]]);
  assert.equal(await pgUsers.setPasswordResetToken(found, "demo@agrinexus.org", { tokenHash: "h", expiresAt: "2026-01-01T00:00:00.000Z" }), true);

  const notFound = stubPool([[/^update users set password_reset_token_hash/, () => ({ rowCount: 0 })]]);
  assert.equal(await pgUsers.setPasswordResetToken(notFound, "nobody@agrinexus.org", { tokenHash: "h", expiresAt: "2026-01-01T00:00:00.000Z" }), false);
});
