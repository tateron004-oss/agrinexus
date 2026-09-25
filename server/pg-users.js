"use strict";

// Real relational auth storage against foundation/migrations' `users` table,
// used only when AUTH_STORE=postgres. Independent of AGRINEXUS_STATE_STORE,
// which still governs the separate JSON-blob app-state table.

const crypto = require("crypto");

const DEMO_TENANT_ID = "00000000-0000-0000-0000-000000000001";

function hashPassword(password, pepper = process.env.PASSWORD_PEPPER || "") {
  const salt = crypto.randomBytes(16);
  const derived = crypto.scryptSync(`${password}${pepper}`, salt, 64);
  return `scrypt:${salt.toString("hex")}:${derived.toString("hex")}`;
}

function verifyPasswordHash(password, stored, pepper = process.env.PASSWORD_PEPPER || "") {
  if (!stored || !stored.startsWith("scrypt:")) return false;
  const [, saltHex, hashHex] = stored.split(":");
  const salt = Buffer.from(saltHex, "hex");
  const expected = Buffer.from(hashHex, "hex");
  const derived = crypto.scryptSync(`${password}${pepper}`, salt, 64);
  return derived.length === expected.length && crypto.timingSafeEqual(derived, expected);
}

// Found live (login-security follow-up audit): both login paths looked the
// account up FIRST and only ran the deliberately-expensive scrypt
// comparison when a real hashed credential was found -- so "no such
// account" returned near-instantly while "account exists, wrong password"
// took tens of milliseconds (scrypt's real cost), even though both cases
// return the identical error message. That timing difference alone lets an
// attacker enumerate valid emails, the exact class of leak the password-
// reset endpoint already explicitly guards against. A fixed, valid-format
// dummy hash lets both login paths always pay the same scrypt cost, computed
// once at module load rather than per request.
const DUMMY_PASSWORD_HASH = hashPassword("nexus-login-timing-safety-dummy-password");

async function findUserByEmail(pool, email) {
  const result = await pool.query(
    "select id, tenant_id, email, display_name, password_hash, status from users where lower(email) = lower($1)",
    [email]
  );
  return result.rows[0] || null;
}

async function verifyPassword(pool, email, password) {
  const user = await findUserByEmail(pool, email);
  // Always run the real scrypt comparison, even when no account matches --
  // see DUMMY_PASSWORD_HASH's comment above.
  const hashMatches = verifyPasswordHash(password, user?.password_hash || DUMMY_PASSWORD_HASH);
  if (!user || user.status !== "active" || !hashMatches) return null;
  try {
    await pool.query("update users set last_login_at = now() where id = $1", [user.id]);
  } catch (error) {
    // Non-critical bookkeeping: a correctly-verified login must not fail just
    // because this column is missing (e.g. migration 017 not applied yet) or
    // the update otherwise errors. The caller wraps this whole function in a
    // .catch that treats any rejection as "invalid credentials" -- letting
    // that happen here would misreport a DB/migration problem as a bad password.
    console.error("[pg-users] failed to record last_login_at:", error.message);
  }
  return user;
}

// `passwordHash` lets a caller that already holds a real scrypt hash (e.g. the blob backfill script,
// once the blob itself stores hashed passwords rather than plaintext) install it directly instead of
// hashing `password` again -- hashing an already-hashed value would produce a hash of the hash, silently
// making the account unloginable with the real password.
async function createUser(pool, { email, displayName, password, passwordHash, tenantId = DEMO_TENANT_ID }) {
  const resolvedHash = passwordHash || hashPassword(password);
  const result = await pool.query(
    `insert into users (tenant_id, email, display_name, password_hash)
     values ($1, $2, $3, $4)
     on conflict (tenant_id, email) do update set
       display_name = excluded.display_name,
       password_hash = excluded.password_hash,
       updated_at = now()
     returning id, tenant_id, email, display_name, status`,
    [tenantId, email, displayName, resolvedHash]
  );
  return result.rows[0];
}

// A Postgres `users` row has no role/country/language columns (those stay
// blob-only for now). Builds a blob shadow row with safe defaults for a
// verified Postgres account that has no blob row yet (seed data, or an
// account created before the AUTH_STORE=postgres cutover), matching the
// same default shape the admin test-user/admin-user endpoints already use.
function buildBlobShadowFromPostgresUser(pgUser, { defaultCountry = "Nigeria", defaultLanguage = "en" } = {}) {
  return {
    id: crypto.randomUUID(),
    email: pgUser.email,
    name: pgUser.display_name || pgUser.email,
    role: "Standard User",
    country: defaultCountry,
    language: defaultLanguage,
    createdAt: new Date().toISOString()
  };
}

async function setPasswordResetToken(pool, email, { tokenHash, expiresAt }) {
  const result = await pool.query(
    `update users set password_reset_token_hash = $2, password_reset_expires_at = $3
     where lower(email) = lower($1)
     returning id`,
    [email, tokenHash, expiresAt]
  );
  return Boolean(result.rowCount);
}

async function consumeResetToken(pool, email, token, newPassword) {
  const user = await findUserByEmail(pool, email);
  if (!user) return false;
  const current = await pool.query(
    "select password_reset_token_hash, password_reset_expires_at from users where id = $1",
    [user.id]
  );
  const row = current.rows[0];
  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
  const suppliedBuffer = Buffer.from(tokenHash, "hex");
  const storedBuffer = row && row.password_reset_token_hash ? Buffer.from(row.password_reset_token_hash, "hex") : null;
  const tokenMatches = Boolean(
    storedBuffer
    && storedBuffer.length === suppliedBuffer.length
    && crypto.timingSafeEqual(storedBuffer, suppliedBuffer)
  );
  const valid = Boolean(
    row
    && tokenMatches
    && row.password_reset_expires_at
    && new Date(row.password_reset_expires_at).getTime() > Date.now()
  );
  if (!valid) return false;
  await pool.query(
    `update users set password_hash = $2, password_reset_token_hash = null, password_reset_expires_at = null, updated_at = now()
     where id = $1`,
    [user.id, hashPassword(newPassword)]
  );
  return true;
}

module.exports = {
  DEMO_TENANT_ID,
  hashPassword,
  verifyPasswordHash,
  DUMMY_PASSWORD_HASH,
  findUserByEmail,
  verifyPassword,
  buildBlobShadowFromPostgresUser,
  createUser,
  setPasswordResetToken,
  consumeResetToken
};
