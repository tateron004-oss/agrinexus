"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { DocumentRepository } = require("../../nexus/data/document-repository.js");

function fakeDb(results = []) {
  const calls = [];
  const db = { calls, async query(sql, params) { calls.push({ sql, params }); return results.shift() || { rows: [] }; },
    async transaction(work) { return work(db); } };
  return db;
}

test("constructor requires a transactional database runtime", () => {
  assert.throws(() => new DocumentRepository({}), /database runtime is required/);
});

test("create inserts a real, tenant/owner-scoped document row", async () => {
  const db = fakeDb([{ rows: [{ document_id: "doc_abc" }] }]);
  const repo = new DocumentRepository(db);
  const doc = await repo.create({ tenantId: "t1", ownerId: "u1", taskId: "tsk_1", title: "Field report", documentType: "pdf", metadata: { exportId: "exp_1" } });
  assert.equal(doc.document_id, "doc_abc");
  assert.match(db.calls[0].sql, /insert into nexus_documents/);
  assert.match(db.calls[0].params[0], /^doc_/);
  assert.deepEqual(db.calls[0].params.slice(1, 6), ["t1", "u1", "tsk_1", "Field report", "pdf"]);
  assert.deepEqual(db.calls[0].params[6], { exportId: "exp_1" });
});

test("addVersion assigns version 1 for a brand-new document and increments for an existing one", async () => {
  const dbFirst = fakeDb([{ rows: [] }, { rows: [{ version_id: "ver_1", version: 1 }] }, { rows: [] }]);
  const repo1 = new DocumentRepository(dbFirst);
  const first = await repo1.addVersion({ documentId: "doc_1", tenantId: "t1", content: { a: 1 }, objectKey: "local:a.txt", checksum: "abc", createdBy: "u1" });
  assert.equal(first.version, 1);
  assert.match(dbFirst.calls[1].sql, /insert into nexus_document_versions/);
  assert.equal(dbFirst.calls[1].params[2], 1);

  const dbSecond = fakeDb([{ rows: [{ version: 3 }] }, { rows: [{ version_id: "ver_4", version: 4 }] }, { rows: [] }]);
  const repo2 = new DocumentRepository(dbSecond);
  const second = await repo2.addVersion({ documentId: "doc_1", tenantId: "t1", content: { a: 2 }, objectKey: "local:b.txt", checksum: "def", createdBy: "u1" });
  assert.equal(second.version, 4);
  assert.equal(dbSecond.calls[1].params[2], 4);
});

test("get scopes strictly to tenant AND owner, never cross-user", async () => {
  const db = fakeDb([{ rows: [{ document_id: "doc_1", version: 2 }] }]);
  const repo = new DocumentRepository(db);
  await repo.get({ tenantId: "t1", ownerId: "u1", documentId: "doc_1" });
  assert.match(db.calls[0].sql, /where d\.tenant_id=\$1 and d\.owner_id=\$2 and d\.document_id=\$3/);
  assert.deepEqual(db.calls[0].params, ["t1", "u1", "doc_1"]);
  assert.match(db.calls[0].sql, /deleted_at is null/);
});

test("get returns null when no row matches", async () => {
  const db = fakeDb([{ rows: [] }]);
  const repo = new DocumentRepository(db);
  const result = await repo.get({ tenantId: "t1", ownerId: "u1", documentId: "doc_missing" });
  assert.equal(result, null);
});

test("list scopes to tenant and owner, orders by updated_at desc, and clamps limit", async () => {
  const db = fakeDb([{ rows: [{ document_id: "doc_1" }] }]);
  const repo = new DocumentRepository(db);
  await repo.list({ tenantId: "t1", ownerId: "u1", limit: 0 });
  assert.match(db.calls[0].sql, /where d\.tenant_id=\$1 and d\.owner_id=\$2/);
  assert.match(db.calls[0].sql, /order by d\.updated_at desc/);
  assert.equal(db.calls[0].params[2], 1);
});
