"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { createControlApi } = require("../../nexus/compat/control-api.js");

// Confirmed live: an ordinary signed-in user was rejected with 403 "Missing
// permission: devices:write" on POST /api/nexus/runtime/devices, and the
// client's push-subscribe step swallows that error -- so no device could ever
// be registered and no reminder could be delivered as a push, whatever the
// VAPID configuration.
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

test("a signed-in user may manage their own push devices; a guest may not", async () => {
  const member = await runtimeUser({ id: "u1", role: "Standard User", email: "a@b.c" });
  assert.ok(member.permissions.includes("devices:write"));
  const guest = await runtimeUser({ id: "g1", role: "Guest", guest: true });
  assert.ok(!guest.permissions.includes("devices:write"));
  assert.ok(guest.permissions.includes("guest:restricted"));
});

test("the grant is narrow: no wider notification or admin permissions come with it", async () => {
  const member = await runtimeUser({ id: "u1", role: "Standard User", email: "a@b.c" });
  for (const denied of ["notifications:write", "reminders:write", "privacy:delete:any", "observability:read", "acceptance:identity"]) {
    assert.ok(!member.permissions.includes(denied), `${denied} must not be granted`);
  }
});

test("device calls are scoped to the caller's own tenant and user", async () => {
  const calls = [];
  const runtime = { deviceTokens: null, devices: {
    async list(args) { calls.push(["list", args]); return []; },
    async revoke(args) { calls.push(["revoke", args]); return true; } } };
  const api = createControlApi(runtime);
  const member = await runtimeUser({ id: "u1", role: "Standard User", email: "a@b.c" });
  const context = { tenantId: member.tenantId, userId: member.id, can: permission => member.permissions.includes(permission) };
  await api.listDevices({ context });
  await api.revokeDevice({ context, params: { deviceId: "dev-1" } });
  for (const [, args] of calls) { assert.equal(args.tenantId, "tenant-1"); assert.equal(args.userId, member.id); }
  const guestContext = { tenantId: "tenant-1", userId: "g1", can: () => false };
  await assert.rejects(() => api.listDevices({ context: guestContext }), /Missing permission: devices:write/);
});
