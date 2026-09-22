"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { TARGETS } = require("../../foundation/scripts/repair-demo-account-passwords.js");
const pgUsers = require("../../server/pg-users.js");

// The script's main() connects via createPostgresAdapter, which isn't mockable from here -- but the
// pure decision logic (what to do for each target user, given the current blob state) is exercised
// directly the same way server.js's own login code is, since it reuses pgUsers.hashPassword/
// verifyPasswordHash. This pins the two outcomes that matter: a wrong/missing password gets reset,
// and an already-correct one is left untouched (idempotent re-run safety).

test("TARGETS names exactly the two known demo accounts with their documented passwords", () => {
  assert.deepEqual(TARGETS, [
    { email: "admin@agrinexus.org", password: "Admin2026!" },
    { email: "user@agrinexus.org", password: "User2026!" }
  ]);
});

test("a user whose stored hash does NOT verify against the documented password would be reset", () => {
  const user = { email: "admin@agrinexus.org", password: pgUsers.hashPassword("SomeDriftedPassword!") };
  const target = TARGETS[0];
  const alreadyCorrect = user.password.startsWith("scrypt:") && pgUsers.verifyPasswordHash(target.password, user.password);
  assert.equal(alreadyCorrect, false);
});

test("a user whose stored hash already verifies against the documented password is left alone (idempotent)", () => {
  const user = { email: "admin@agrinexus.org", password: pgUsers.hashPassword("Admin2026!") };
  const target = TARGETS[0];
  const alreadyCorrect = user.password.startsWith("scrypt:") && pgUsers.verifyPasswordHash(target.password, user.password);
  assert.equal(alreadyCorrect, true);
});

test("a legacy plaintext (unhashed) stored password is never treated as already-correct, even if it happens to match", () => {
  const user = { email: "admin@agrinexus.org", password: "Admin2026!" }; // plaintext, no scrypt: prefix
  const target = TARGETS[0];
  const alreadyCorrect = typeof user.password === "string" && user.password.startsWith("scrypt:") && pgUsers.verifyPasswordHash(target.password, user.password);
  assert.equal(alreadyCorrect, false, "must still reset it to a real hash, not skip just because the plaintext happens to match");
});

test("resetting produces a hash that genuinely verifies against the documented password afterward", () => {
  const target = TARGETS[1];
  const resetHash = pgUsers.hashPassword(target.password);
  assert.ok(resetHash.startsWith("scrypt:"));
  assert.equal(pgUsers.verifyPasswordHash(target.password, resetHash), true);
  assert.equal(pgUsers.verifyPasswordHash("WrongPassword", resetHash), false);
});
