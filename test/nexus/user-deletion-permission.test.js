"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { createControlApi } = require("../../nexus/compat/control-api.js");

// Confirmed live: an ordinary signed-in user, asking to erase THEIR OWN data (POST /api/nexus/runtime/privacy/deletions with no
// subjectId), was rejected with 403 "Missing permission: privacy:delete". #549 fixed executeDeletion to actually erase
// nexus_memory_items, and #550 fixed nothing ever triggering it -- but this permission gap meant no real user could ever reach
// either fix: their own right-to-erasure request never even got past the door. Same class of bug, same fix shape, as the
// devices:write gap in user-device-permission.test.js.
const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
const start = source.indexOf("async function authoritativeRuntimeUser(");
const end = source.indexOf("\nfunction productIdentityMetadata", start);
assert.ok(start > 0 && end > start, "could not locate authoritativeRuntimeUser in server.js");

function runtimeUser(user) {
  const sandbox = { deterministicAuthoritativeUserId: id => `auth-${id}`, usingPostgresState: () => false,
    NEXUS_AUTHORITATIVE_TENANT_ID: "tenant-1" };
  vm.createContext(sandbox);
  vm.runInContext(source.slice(start, end) + "\nthis.run = authoritativeRuntimeUser;", sandbox);
  return sandbox.run(user);
}

test("a signed-in user may request erasure of their own data; a guest may not", async () => {
  const member = await runtimeUser({ id: "u1", role: "Standard User", email: "a@b.c" });
  assert.ok(member.permissions.includes("privacy:delete"));
  const guest = await runtimeUser({ id: "g1", role: "Guest", guest: true });
  assert.ok(!guest.permissions.includes("privacy:delete"));
  assert.ok(guest.permissions.includes("guest:restricted"));
});

// The narrow half of the grant: an ordinary user's privacy:delete only ever lets them erase their OWN subjectId (control-api.js
// checks this explicitly) -- naming someone else still requires privacy:delete:any, which nothing grants here.
test("the grant is narrow: it never includes privacy:delete:any, so a user can still only erase their own data", async () => {
  const member = await runtimeUser({ id: "u1", role: "Standard User", email: "a@b.c" });
  assert.ok(!member.permissions.includes("privacy:delete:any"));
});

test("a real signed-in user's context can now request their own deletion, and still cannot name someone else", async () => {
  const calls = [];
  const runtime = { dataLifecycle: { requestDeletion: async input => { calls.push(input); return { request_id: "req_1", ...input }; } } };
  const api = createControlApi(runtime);
  const member = await runtimeUser({ id: "u1", role: "Standard User", email: "a@b.c" });
  const context = { tenantId: member.tenantId, userId: member.id, can: permission => member.permissions.includes(permission) };
  assert.equal((await api.requestDeletion({ context, body: {} })).status, 202);
  assert.equal(calls[0].subjectId, member.id);
  await assert.rejects(api.requestDeletion({ context, body: { subjectId: "someone-else" } }), /Missing permission|Deleting another subject/);
});
