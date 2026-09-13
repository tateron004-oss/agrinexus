"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");

// Minimal in-memory stand-in for the real Postgres pool, matching the exact
// SQL shape nexus/data/record-repository.js issues for nexus_records.
function fakeDb() {
  const rows = [];
  const db = {
    async transaction(fn) { return fn(db); },
    async query(sql, params = []) {
      if (/^insert into nexus_records/i.test(sql)) {
        const [recordId, tenantId, subjectId, ownerId, taskId, workspaceId, recordType, classification, state, data, provenance] = params;
        const row = { record_id: recordId, tenant_id: tenantId, subject_id: subjectId, owner_id: ownerId,
          task_id: taskId, workspace_id: workspaceId, record_type: recordType, classification, state,
          data, provenance, version: 1, deleted_at: null };
        rows.push(row);
        return { rows: [row] };
      }
      if (/^insert into nexus_record_versions/i.test(sql)) return { rows: [] };
      if (/^select \* from nexus_records where tenant_id=\$1 and deleted_at is null/i.test(sql)) {
        const [tenantId, ownerId] = params;
        return { rows: rows.filter(row => row.tenant_id === tenantId && row.owner_id === ownerId && !row.deleted_at) };
      }
      return { rows: [] };
    }
  };
  return db;
}

function fixture() {
  const db = fakeDb();
  const accessCalls = [];
  const grants = new Map();
  const active = {
    ready: Promise.resolve(),
    db,
    access: { async authorize(item) { accessCalls.push(item); } },
    consents: {
      async active(item) { return grants.get(`${item.tenantId}:${item.subjectId}:${item.scope}`); },
      async grant(item) { const grant = { ...item, consent_id: "consent-1" }; grants.set(`${item.tenantId}:${item.subjectId}:${item.scope}`, grant); return grant; }
    }
  };
  const adapter = createServerRuntimeAdapter({ env: {}, resolveUser: async () => null, readJson: async () => ({}), createRuntimeFn: () => active });
  const authoritativeUser = { id: "authoritative-user-1", tenantId: "tenant-authoritative-1", role: "standard-user", permissions: ["tasks:execute"] };
  return { adapter, authoritativeUser, db, accessCalls };
}

test("businessRequest lists an authenticated user's business/nonprofit workspaces via the real service layer", async () => {
  const { adapter, authoritativeUser } = fixture();
  const empty = await adapter.businessRequest({ method: "GET", pathname: "/api/nexus/runtime/business/clients", user: authoritativeUser });
  assert.equal(empty.status, 200);
  assert.deepEqual(empty.body.clients, []);

  await adapter.businessRequest({
    method: "POST", pathname: "/api/nexus/runtime/business/clients",
    body: { businessName: "Sunrise Poultry Cooperative", consent: true }, user: authoritativeUser
  });
  const listed = await adapter.businessRequest({ method: "GET", pathname: "/api/nexus/runtime/business/clients", user: authoritativeUser });
  assert.equal(listed.status, 200);
  assert.equal(listed.body.clients.length, 1);
  assert.equal(listed.body.clients[0].data.info.businessName, "Sunrise Poultry Cooperative");
});

test("businessRequest creates a new workspace scoped to the authoritative tenant and user, not raw legacy fields", async () => {
  const { adapter, authoritativeUser } = fixture();
  const created = await adapter.businessRequest({
    method: "POST", pathname: "/api/nexus/runtime/business/clients",
    body: { businessName: "Clean Water Access Fund", consent: true, tenantId: "attacker-tenant", ownerId: "attacker-user" },
    user: authoritativeUser
  });
  assert.equal(created.status, 201);
  assert.equal(created.body.tenant_id, "tenant-authoritative-1");
  assert.equal(created.body.owner_id, "authoritative-user-1");
});

test("businessRequest enforces the real consent gate before creating a workspace", async () => {
  const { adapter, authoritativeUser } = fixture();
  await assert.rejects(
    () => adapter.businessRequest({
      method: "POST", pathname: "/api/nexus/runtime/business/clients",
      body: { businessName: "No Consent Cooperative" }, user: authoritativeUser
    }),
    error => error.code === "business_consent_required"
  );
});

test("businessRequest keeps two different authoritative users from seeing each other's workspaces", async () => {
  const { adapter, authoritativeUser } = fixture();
  const otherUser = { id: "authoritative-user-2", tenantId: "tenant-authoritative-1", role: "standard-user", permissions: ["tasks:execute"] };
  await adapter.businessRequest({
    method: "POST", pathname: "/api/nexus/runtime/business/clients",
    body: { businessName: "Owner One's Business", consent: true }, user: authoritativeUser
  });
  const otherListing = await adapter.businessRequest({ method: "GET", pathname: "/api/nexus/runtime/business/clients", user: otherUser });
  assert.deepEqual(otherListing.body.clients, []);
});
