"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { DeviceRepository, MAX_DEVICES } = require("../../nexus/devices/repository.js");

// Found live (devices audit): nexus_devices/nexus_device_events (a person's real registered push
// devices -- platform, capabilities, app version, push provider -- and their app-lifecycle event
// history) are already correctly erased by nexus/security/data-lifecycle-repository.js's
// executeDeletion, but were never read anywhere for /api/account/export, the same
// erasable-but-never-downloadable asymmetry this codebase has repeatedly had to close elsewhere.
// Also found live: register() had no per-account cap, and list()/listPushable() ran unbounded queries
// -- a buggy client minting a fresh device_id every call could grow nexus_devices for one account
// without limit, amplifying every real push notification's fan-out via listPushable().

// ---------- export completeness: collectOwnedDeviceRecords, extracted from server.js ----------
const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
const start = source.indexOf("async function collectOwnedDeviceRecords(");
const end = source.indexOf("\nfunction knownUnownedProfileGaps", start);
assert.ok(start > 0 && end > start, "could not locate collectOwnedDeviceRecords in server.js");

function fakePgPool(rowsByQuery) {
  const calls = [];
  return { calls, async query(sql, params) {
    calls.push({ sql, params });
    if (/from nexus_devices where/.test(sql)) return { rows: rowsByQuery.devices || [] };
    if (/from nexus_device_events/.test(sql)) return { rows: rowsByQuery.events || [] };
    return { rows: [] };
  } };
}

function collectOwnedDeviceRecords({ postgres = true, authoritativeUser = { id: "resolved-1", tenantId: "tenant-1" }, pool = fakePgPool({}) } = {}) {
  const sandbox = { usingPostgresState: () => postgres, authoritativeRuntimeUser: async () => authoritativeUser, getPgPool: () => pool };
  vm.createContext(sandbox);
  vm.runInContext(source.slice(start, end) + "\nthis.run = collectOwnedDeviceRecords;", sandbox);
  return { run: user => sandbox.run(user), pool };
}

test("a real registered device and its event history are included in the owning account's export", async () => {
  const devices = [{ device_id: "phone-1", platform: "android", app_version: "1.2.0", permission_state: "granted", capabilities: ["push"], lifecycle_state: "foreground", push_provider: "fcm", push_state: "registered", state: "active", last_seen_at: "2026-09-20T00:00:00Z" }];
  const events = [{ event_id: "ev-1", device_id: "phone-1", event_type: "app.foreground", payload: {}, occurred_at: "2026-09-20T00:00:00Z" }];
  const { run, pool } = collectOwnedDeviceRecords({ authoritativeUser: { id: "u1", tenantId: "t1" }, pool: fakePgPool({ devices, events }) });
  const owned = await run({ id: "legacy-id" });
  assert.deepEqual(owned.nexusDevices, devices);
  assert.deepEqual(owned.nexusDeviceEvents, events);
  assert.ok(pool.calls.every(call => call.params[0] === "t1" && call.params[1] === "u1"), "every query must be scoped to the resolved authoritative tenant/user, not the legacy id");
});

test("an account with no registered devices gets an empty export, not an error", async () => {
  const { run } = collectOwnedDeviceRecords({ authoritativeUser: { id: "u2", tenantId: "t1" } });
  assert.equal(Object.keys(await run({ id: "u2" })).length, 0);
});

test("export gathers nothing for devices when not running on Postgres, instead of throwing", async () => {
  const { run } = collectOwnedDeviceRecords({ postgres: false });
  assert.equal(Object.keys(await run({ id: "u3" })).length, 0);
});

// ---------- per-account device cap ----------
function fakeDevicesDb() {
  const rows = new Map();
  const db = {
    rows,
    async transaction(work) { return work(db); },
    async query(sql, params) {
      if (/pg_advisory_xact_lock/.test(sql)) return { rows: [] };
      if (/^select 1 from nexus_devices where tenant_id=\$1 and user_id=\$2 and device_id=\$3/.test(sql)) {
        const [tenantId, userId, deviceId] = params;
        const row = rows.get(deviceId);
        return { rows: row && row.tenant_id === tenantId && row.user_id === userId ? [{ found: 1 }] : [] };
      }
      if (/^select count\(\*\)::int as n from nexus_devices/.test(sql)) {
        const [tenantId, userId] = params;
        return { rows: [{ n: [...rows.values()].filter(row => row.tenant_id === tenantId && row.user_id === userId).length }] };
      }
      if (/^insert into nexus_devices/.test(sql)) {
        const [deviceId, tenantId, userId, platform, capabilities, pushEndpoint, pushKeyCiphertext, appVersion, permissionState, lifecycleState] = params;
        const row = { device_id: deviceId, tenant_id: tenantId, user_id: userId, platform, capabilities, push_endpoint: pushEndpoint, push_key_ciphertext: pushKeyCiphertext, app_version: appVersion, permission_state: permissionState, lifecycle_state: lifecycleState, push_provider: null, push_state: null, state: "active", last_seen_at: new Date().toISOString() };
        rows.set(deviceId, row);
        return { rows: [row] };
      }
      return { rows: [] };
    }
  };
  return db;
}

test("registering a new device beyond the per-account cap is refused, but re-registering an existing one at the cap still succeeds", async () => {
  const db = fakeDevicesDb();
  const repo = new DeviceRepository(db);
  for (let i = 0; i < MAX_DEVICES; i += 1) {
    const result = await repo.register({ deviceId: `d${i}`, tenantId: "t1", userId: "u1", platform: "web", capabilities: [] });
    assert.ok(result, `device ${i} should register`);
  }
  await assert.rejects(() => repo.register({ deviceId: "d-over-cap", tenantId: "t1", userId: "u1", platform: "web", capabilities: [] }), /You already have 50 devices registered/);
  const reRegistered = await repo.register({ deviceId: "d0", tenantId: "t1", userId: "u1", platform: "web", capabilities: ["push"] });
  assert.ok(reRegistered, "re-registering an existing device_id must still succeed while at the cap");
  const otherAccount = await repo.register({ deviceId: "other-d0", tenantId: "t2", userId: "u2", platform: "web", capabilities: [] });
  assert.ok(otherAccount, "a different tenant/user is unaffected by another account's cap");
});

// A fake db whose advisory lock genuinely serializes concurrent transactions (matching real Postgres
// blocking behavior), proving the real cap-check race is actually closed, not just checked sequentially.
function lockingDevicesDb() {
  const rows = new Map(); const locks = new Map();
  const db = { rows,
    async transaction(fn) {
      let release = null; const trx = Object.create(db);
      trx.query = async (sql, params) => {
        if (/pg_advisory_xact_lock/.test(sql)) {
          const key = params[0]; const ahead = locks.get(key) || Promise.resolve();
          let myRelease; const held = new Promise(resolve => { myRelease = resolve; });
          locks.set(key, ahead.then(() => held)); await ahead; release = myRelease; return { rows: [] };
        }
        return db.query(sql, params);
      };
      try { return await fn(trx); } finally { if (release) release(); }
    },
    async query(sql, params) {
      if (/^select 1 from nexus_devices where tenant_id=\$1 and user_id=\$2 and device_id=\$3/.test(sql)) {
        const [tenantId, userId, deviceId] = params;
        const row = rows.get(deviceId);
        return { rows: row && row.tenant_id === tenantId && row.user_id === userId ? [{ found: 1 }] : [] };
      }
      if (/^select count\(\*\)::int as n from nexus_devices/.test(sql)) {
        const [tenantId, userId] = params;
        return { rows: [{ n: [...rows.values()].filter(row => row.tenant_id === tenantId && row.user_id === userId).length }] };
      }
      if (/^insert into nexus_devices/.test(sql)) {
        const [deviceId, tenantId, userId] = params;
        const row = { device_id: deviceId, tenant_id: tenantId, user_id: userId, state: "active" };
        rows.set(deviceId, row);
        return { rows: [row] };
      }
      return { rows: [] };
    } };
  return db;
}

test("two concurrent first-time registrations right at the cap boundary don't both slip past the count check", async () => {
  const db = lockingDevicesDb();
  const repo = new DeviceRepository(db);
  for (let i = 0; i < MAX_DEVICES - 1; i += 1) await repo.register({ deviceId: `d${i}`, tenantId: "t1", userId: "u1", platform: "web", capabilities: [] });
  const results = await Promise.allSettled([
    repo.register({ deviceId: "race-a", tenantId: "t1", userId: "u1", platform: "web", capabilities: [] }),
    repo.register({ deviceId: "race-b", tenantId: "t1", userId: "u1", platform: "web", capabilities: [] })
  ]);
  const succeeded = results.filter(result => result.status === "fulfilled").length;
  assert.equal(succeeded, 1, "only one of the two racing new-device registrations may claim the last cap slot");
  assert.equal(db.rows.size, MAX_DEVICES, "the account must end up at exactly the cap, not one over it");
});
