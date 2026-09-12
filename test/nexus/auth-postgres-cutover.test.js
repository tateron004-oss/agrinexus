const test = require("node:test");
const assert = require("node:assert/strict");
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

test("setPasswordResetToken reports whether a matching account exists", async () => {
  const found = stubPool([[/^update users set password_reset_token_hash/, () => ({ rowCount: 1 })]]);
  assert.equal(await pgUsers.setPasswordResetToken(found, "demo@agrinexus.org", { tokenHash: "h", expiresAt: "2026-01-01T00:00:00.000Z" }), true);

  const notFound = stubPool([[/^update users set password_reset_token_hash/, () => ({ rowCount: 0 })]]);
  assert.equal(await pgUsers.setPasswordResetToken(notFound, "nobody@agrinexus.org", { tokenHash: "h", expiresAt: "2026-01-01T00:00:00.000Z" }), false);
});
