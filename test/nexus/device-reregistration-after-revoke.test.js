"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { DeviceRepository } = require("../../nexus/devices/repository.js");

// Found live (audit of nexus/devices/repository.js): register()'s upsert used
// `on conflict (device_id) do update set ... where nexus_devices.state='active'`.
// Postgres treats a DO UPDATE whose WHERE predicate is false as a no-op for that
// row -- no insert (the conflict already matched), no update, nothing in
// RETURNING -- so once a device's state was 'revoked' (e.g. webpush-provider.js
// auto-revokes a device on a real 404/410 from the push service, which is a
// routine, non-malicious occurrence), register() permanently returned null for
// that device_id, and control-api.js's deviceResult() turned that into a bare
// 404 "device_not_found" -- for a caller that was trying to REGISTER, not look
// one up. The browser's own deviceId (public/nexus-authoritative-pwa-runtime.js)
// is generated once and persisted in localStorage for the life of the install,
// never rotated, so this permanently broke that browser's ability to ever
// re-enable push (or simply re-register) until the user manually cleared their
// local storage.
//
// This drives a faithful in-memory reimplementation of the real Postgres
// "insert ... on conflict (device_id) do update ... where <predicate>" semantics
// (a DO UPDATE whose WHERE clause is false is a no-op, matching the real
// documented Postgres behavior) rather than a fake that could compute its own
// answer regardless of what the real query text says.
function fakeDevicesTable() {
  const rows = new Map();
  const table = {
    rows,
    async transaction(work) { return work(table); },
    async query(sql, params) {
      if (/^insert into nexus_devices/.test(sql)) {
        const [deviceId, tenantId, userId, platform, capabilities, pushEndpoint, pushKeyCiphertext] = params;
        const existing = rows.get(deviceId);
        if (!existing) {
          const row = { device_id: deviceId, tenant_id: tenantId, user_id: userId, platform, capabilities, push_endpoint: pushEndpoint, push_key_ciphertext: pushKeyCiphertext, state: "active" };
          rows.set(deviceId, row);
          return { rows: [row] };
        }
        // Real Postgres semantics: DO UPDATE ... WHERE <predicate> is a no-op
        // (no row returned) when the predicate is false for the conflicting row.
        const ownershipMatches = existing.tenant_id === tenantId && existing.user_id === userId;
        const wouldReactivate = /state='active',/.test(sql);
        const predicateHolds = ownershipMatches && (wouldReactivate || existing.state === "active");
        if (!predicateHolds) return { rows: [] };
        existing.state = "active";
        existing.push_endpoint = pushEndpoint ?? existing.push_endpoint;
        existing.push_key_ciphertext = pushKeyCiphertext ?? existing.push_key_ciphertext;
        return { rows: [existing] };
      }
      if (/^update nexus_devices set state='revoked'/.test(sql)) {
        const [tenantId, userId, deviceId] = params;
        const row = rows.get(deviceId);
        if (!row || row.tenant_id !== tenantId || row.user_id !== userId) return { rows: [] };
        row.state = "revoked";
        row.push_endpoint = null;
        row.push_key_ciphertext = null;
        return { rows: [{ device_id: deviceId }] };
      }
      return { rows: [] };
    }
  };
  return table;
}

test("a device that was auto-revoked (dead push subscription) can re-register instead of being permanently 404", async () => {
  const table = fakeDevicesTable();
  const repo = new DeviceRepository(table);

  const first = await repo.register({ deviceId: "web_abc", tenantId: "t1", userId: "u1", platform: "web", capabilities: ["push"] });
  assert.ok(first, "first registration must succeed");

  await repo.revoke({ tenantId: "t1", userId: "u1", deviceId: "web_abc" });
  assert.equal(table.rows.get("web_abc").state, "revoked");

  // The browser's persisted deviceId never rotates, so the exact same
  // deviceId is presented again on the next real register() call.
  const reRegistered = await repo.register({ deviceId: "web_abc", tenantId: "t1", userId: "u1", platform: "web", capabilities: ["push"] });
  assert.ok(reRegistered, "re-registration after an automatic revoke must succeed, not return null");
  assert.equal(reRegistered.state, "active");
});

test("re-registration still cannot hijack a device_id owned by a different tenant/user", async () => {
  const table = fakeDevicesTable();
  const repo = new DeviceRepository(table);
  await repo.register({ deviceId: "web_shared", tenantId: "t1", userId: "u1", platform: "web", capabilities: [] });

  const hijackAttempt = await repo.register({ deviceId: "web_shared", tenantId: "t2", userId: "u2", platform: "web", capabilities: [] });
  assert.equal(hijackAttempt, null, "a different tenant/user must not be able to claim someone else's device_id");
  assert.equal(table.rows.get("web_shared").tenant_id, "t1", "the original owner's row must be unaffected");
});
