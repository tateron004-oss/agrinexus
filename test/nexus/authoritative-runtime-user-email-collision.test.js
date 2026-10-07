"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

const server = fs.readFileSync("server.js", "utf8");

// Found live (production outage, 2026-09-28, discovered while capability-
// testing the orb through the typed Nexus fallback against the deployed
// app): authoritativeRuntimeUser() derived a deterministic Postgres id from
// the legacy user's own id and unconditionally tried to insert a `users`
// row under it, guarding only against ON CONFLICT(id) -- but a real row can
// already exist under a DIFFERENT id for the same (tenant_id, email), e.g.
// from before this id-derivation scheme existed, or any other historical
// identity mismatch. That threw an uncaught "duplicate key value violates
// unique constraint users_tenant_id_email_key" for every affected real
// account on every single authenticated /api/nexus/runtime/* call --
// behavior/turn (the real conversational engine behind the orb), tasks,
// devices, observability, everything -- confirmed live via
// /api/admin/system/errors against the production deployment. The client
// silently fell back to a generic "what would you like help with" message
// with no visible error, so this was invisible from the UI alone.
//
// Not reproducible in this dev environment (no local Postgres -- a standing,
// documented gap), so this asserts the fixed shape at the source level,
// matching the established convention for server.js logic this environment
// can't exercise directly against real Postgres (see
// authoritative-entry-convergence.test.js's identical approach for the
// neighboring authoritativeRuntimeUser guest-identity behavior).
function authoritativeRuntimeUserSource() {
  const start = server.indexOf("async function authoritativeRuntimeUser(");
  const end = server.indexOf("\nfunction productIdentityMetadata(");
  assert.ok(start >= 0 && end > start, "could not locate authoritativeRuntimeUser in server.js");
  return server.slice(start, end);
}

test("authoritativeRuntimeUser looks up an existing row by (tenant, email) before inserting, instead of blindly inserting under the freshly-derived id", () => {
  const fn = authoritativeRuntimeUserSource();
  assert.match(fn, /select id from users where tenant_id=\$1 and lower\(email\)=\$2/, "must look up any existing row by email before inserting");
  assert.match(fn, /resolvedId = existing\.rows\[0\]\?\.id \|\| authoritativeUserId/, "an existing row's real id must win over the freshly-derived one");
});

test("both the users upsert and the membership upsert use the resolved id, not the raw derived one", () => {
  const fn = authoritativeRuntimeUserSource();
  assert.match(fn, /\[resolvedId, tenantId, email, user\.name \|\| "Nexus User", "legacy-auth-bound"\]/, "the users upsert must use the resolved id");
  assert.match(fn, /\[tenantId, resolvedId, role, permissions\]/, "the membership upsert must use the resolved id");
  assert.match(fn, /id: resolvedId,/, "the returned user object's id must be the resolved one, not the raw derived one");
});

test("the users upsert still exists and still guards ON CONFLICT(id), unaffected by the fix", () => {
  const fn = authoritativeRuntimeUserSource();
  assert.match(fn, /insert into users\(id,tenant_id,email,display_name,password_hash,status\)\s*\n\s*values\(\$1,\$2,\$3,\$4,\$5,'active'\) on conflict\(id\) do update set/);
});
