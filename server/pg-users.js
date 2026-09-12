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

async function findUserByEmail(pool, email) {
  const result = await pool.query(
    "select id, tenant_id, email, display_name, password_hash, status from users where lower(email) = lower($1)",
    [email]
  );
  return result.rows[0] || null;
}

async function verifyPassword(pool, email, password) {
  const user = await findUserByEmail(pool, email);
  if (!user || user.status !== "active" || !verifyPasswordHash(password, user.password_hash)) return null;
  await pool.query("update users set last_login_at = now() where id = $1", [user.id]);
  return user;
}

async function createUser(pool, { email, displayName, password, tenantId = DEMO_TENANT_ID }) {
  const passwordHash = hashPassword(password);
  const result = await pool.query(
    `insert into users (tenant_id, email, display_name, password_hash)
     values ($1, $2, $3, $4)
     on conflict (tenant_id, email) do update set
       display_name = excluded.display_name,
       password_hash = excluded.password_hash,
       updated_at = now()
     returning id, tenant_id, email, display_name, status`,
    [tenantId, email, displayName, passwordHash]
  );
  return result.rows[0];
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
  const valid = Boolean(
    row
    && row.password_reset_token_hash
    && row.password_reset_token_hash === tokenHash
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
  findUserByEmail,
  verifyPassword,
  createUser,
  setPasswordResetToken,
  consumeResetToken
};
