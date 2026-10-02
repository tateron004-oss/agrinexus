"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const crypto = require("node:crypto");

// Found live (storage-infrastructure audit): /api/account/export never read nexus_artifacts, the real
// Postgres-backed table a signed-in user's own uploads land in via POST /api/nexus/runtime/artifacts
// (nexus/storage/artifact-repository.js). Account erasure already reaches this table
// (data-lifecycle-repository.js wipes title/metadata/object_key for every row scoped to this subject), so
// the same "erasable but never once downloadable" asymmetry this codebase has repeatedly had to close for
// other collections was open here too. collectOwnedNexusArtifactRecords() closes it. Tested here by
// extracting the real function bodies straight out of server.js (the established pattern for
// unit-testing this monolith's internal, non-exported functions -- see
// admin-sandbox-account-postgres-takeover.test.js) rather than booting a live server, since the live-server
// integration test file (account-erasure-and-export.test.js) runs against the JSON-blob store and cannot
// exercise the Postgres-backed path this fix actually adds.
const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

function extractFunction(name) {
  let start = source.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate function ${name} in server.js`);
  if (source.slice(Math.max(0, start - 6), start) === "async ") start -= 6;
  const parenStart = source.indexOf("(", start);
  let parenDepth = 0; let parenEnd = parenStart;
  for (; parenEnd < source.length; parenEnd += 1) {
    if (source[parenEnd] === "(") parenDepth += 1;
    else if (source[parenEnd] === ")") { parenDepth -= 1; if (parenDepth === 0) break; }
  }
  const bodyStart = source.indexOf("{", parenEnd);
  let depth = 0; let i = bodyStart;
  for (; i < source.length; i += 1) {
    if (source[i] === "{") depth += 1;
    else if (source[i] === "}") { depth -= 1; if (depth === 0) break; }
  }
  return source.slice(start, i + 1);
}

function stubPool(handlers) {
  const calls = [];
  return { calls, query: async (sql, params = []) => {
    calls.push({ sql, params });
    for (const [pattern, respond] of handlers) if (pattern.test(sql)) return respond(params, calls);
    throw new Error(`stubPool: no handler for query: ${sql}`);
  } };
}

function loadFns({ statePostgres, pool }) {
  const names = ["deterministicAuthoritativeUserId", "authoritativeRuntimeUser", "usingPostgresState", "collectOwnedNexusArtifactRecords"];
  const body = names.map(extractFunction).join("\n");
  const context = {
    crypto, console,
    STATE_STORE: statePostgres ? "postgres" : "json",
    NEXUS_AUTHORITATIVE_TENANT_ID: "00000000-0000-0000-0000-000000000001",
    getPgPool: () => pool
  };
  vm.createContext(context);
  vm.runInContext(`${body}\nglobalThis.__exports = { ${names.join(", ")} };`, context);
  return context.__exports;
}

test("collectOwnedNexusArtifactRecords returns nothing (not an error) when the state store is not Postgres", async () => {
  const { collectOwnedNexusArtifactRecords } = loadFns({ statePostgres: false, pool: stubPool([]) });
  const owned = await collectOwnedNexusArtifactRecords({ id: "user-1", email: "amina@example.com", role: "Standard User" });
  // Compared by shape, not assert.deepEqual against a literal {} -- the returned object comes from a
  // separate vm.Context realm, whose Object.prototype differs from this file's, so Node's strict
  // deepEqual reports "same structure but not reference-equal" even for two genuinely empty objects.
  assert.equal(Object.keys(owned).length, 0);
});

test("collectOwnedNexusArtifactRecords reads the real user's own nexus_artifacts rows, scoped to their authoritative tenant+owner id, with a real download path and no embedded bytes", async () => {
  const pool = stubPool([
    [/^select id from users where tenant_id=\$1 and lower\(email\)=\$2/, () => ({ rows: [{ id: "pg-user-1" }] })],
    [/^insert into users/, () => ({ rows: [] })],
    [/^insert into nexus_organization_memberships/, () => ({ rows: [] })],
    [/^select artifact_id,kind,title,content_type,checksum,size_bytes,created_at\s+from nexus_artifacts/, (params) => {
      assert.equal(params[0], "00000000-0000-0000-0000-000000000001", "must query the real authoritative tenant id");
      assert.equal(params[1], "pg-user-1", "must query the caller's own resolved authoritative user id, never a client-suppliable one");
      return { rows: [
        { artifact_id: "artifact_1", kind: "document", title: "Farm plan.pdf", content_type: "application/pdf", checksum: "abc123", size_bytes: 4096, created_at: "2026-09-20T00:00:00.000Z" },
        { artifact_id: "artifact_2", kind: "document", title: "Receipt.png", content_type: "image/png", checksum: "def456", size_bytes: 2048, created_at: "2026-09-19T00:00:00.000Z" }
      ] };
    }]
  ]);
  const { collectOwnedNexusArtifactRecords } = loadFns({ statePostgres: true, pool });
  const owned = await collectOwnedNexusArtifactRecords({ id: "user-1", email: "amina@example.com", role: "Standard User" });
  assert.equal(owned["nexus.artifacts"].length, 2);
  assert.equal(owned["nexus.artifacts"][0].artifactId, "artifact_1");
  assert.equal(owned["nexus.artifacts"][0].title, "Farm plan.pdf");
  assert.equal(owned["nexus.artifacts"][0].checksum, "abc123");
  assert.equal(owned["nexus.artifacts"][0].downloadPath, "/api/nexus/runtime/artifacts/artifact_1", "a real download path, not the file's own bytes, must be given");
  assert.equal(owned["nexus.artifacts"][0].objectKey, undefined, "the internal S3 object key must never be exposed");
});

test("collectOwnedNexusArtifactRecords returns nothing when the caller has no artifacts, without throwing", async () => {
  const pool = stubPool([
    [/^select id from users where tenant_id=\$1 and lower\(email\)=\$2/, () => ({ rows: [{ id: "pg-user-1" }] })],
    [/^insert into users/, () => ({ rows: [] })],
    [/^insert into nexus_organization_memberships/, () => ({ rows: [] })],
    [/^select artifact_id,kind,title,content_type,checksum,size_bytes,created_at\s+from nexus_artifacts/, () => ({ rows: [] })]
  ]);
  const { collectOwnedNexusArtifactRecords } = loadFns({ statePostgres: true, pool });
  const owned = await collectOwnedNexusArtifactRecords({ id: "user-1", email: "amina@example.com", role: "Standard User" });
  assert.equal(Object.keys(owned).length, 0);
});

test("collectOwnedNexusArtifactRecords fails closed (returns nothing, never throws) if the query itself errors", async () => {
  const pool = stubPool([
    [/^select id from users/, () => ({ rows: [] })],
    [/^insert into users/, () => ({ rows: [] })],
    [/^insert into nexus_organization_memberships/, () => ({ rows: [] })],
    [/^select artifact_id,kind,title,content_type,checksum,size_bytes,created_at\s+from nexus_artifacts/, () => { throw new Error("connection reset"); }]
  ]);
  const { collectOwnedNexusArtifactRecords } = loadFns({ statePostgres: true, pool });
  const owned = await collectOwnedNexusArtifactRecords({ id: "user-1", email: "amina@example.com", role: "Standard User" });
  assert.equal(Object.keys(owned).length, 0, "an export must never fail outright just because this one extra data source errored");
});
