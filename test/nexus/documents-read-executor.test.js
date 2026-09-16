"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createDocumentsReadExecutor, verifyDocumentsReadOutcome } = require("../../nexus/documents/read-executor.js");

function fixture(rows = new Map()) {
  const documents = {
    get: async ({ tenantId, ownerId, documentId }) => rows.get(`${tenantId}:${ownerId}:${documentId}`) || null,
    list: async ({ tenantId, ownerId }) => [...rows.values()].filter(row => row._tenantId === tenantId && row._ownerId === ownerId)
  };
  return { documents };
}

test("throws without a document repository", () => {
  assert.throws(() => createDocumentsReadExecutor({}), /document repository is required/);
});

test("reads back one document that belongs to the caller", async () => {
  const rows = new Map([["t1:u1:doc_1", { document_id: "doc_1", title: "Field report", document_type: "pdf", version: 1,
    object_key: "local:exp-1.pdf", created_at: "2026-09-01T00:00:00.000Z", updated_at: "2026-09-01T00:00:00.000Z", _tenantId: "t1", _ownerId: "u1" }]]);
  const { documents } = fixture(rows);
  const execute = createDocumentsReadExecutor({ documents });
  const result = await execute({ input: { documentId: "doc_1" }, context: { tenantId: "t1", userId: "u1" } });
  assert.equal(result.found, true);
  assert.equal(result.document.documentId, "doc_1");
  assert.equal(result.document.title, "Field report");
  assert.equal(result.document.downloadPath, "/exports/exp-1.pdf");
  assert.equal(verifyDocumentsReadOutcome({ result }).verified, true);
});

test("a document that does not belong to the caller (or does not exist) is honestly reported as not found", async () => {
  const { documents } = fixture();
  const execute = createDocumentsReadExecutor({ documents });
  const result = await execute({ input: { documentId: "doc_missing" }, context: { tenantId: "t1", userId: "u1" } });
  assert.equal(result.found, false);
  assert.equal(result.documentId, "doc_missing");
  assert.equal(result.document, undefined);
  assert.equal(verifyDocumentsReadOutcome({ result }).verified, true);
});

test("lists the caller's own recent documents when no documentId is given", async () => {
  const rows = new Map([
    ["t1:u1:doc_1", { document_id: "doc_1", title: "A", document_type: "txt", version: 1, object_key: "local:a.txt", _tenantId: "t1", _ownerId: "u1" }],
    ["t1:u1:doc_2", { document_id: "doc_2", title: "B", document_type: "pdf", version: 2, object_key: "local:b.pdf", _tenantId: "t1", _ownerId: "u1" }],
    ["t1:u2:doc_3", { document_id: "doc_3", title: "Someone else's", document_type: "txt", version: 1, object_key: "local:c.txt", _tenantId: "t1", _ownerId: "u2" }]
  ]);
  const { documents } = fixture(rows);
  const execute = createDocumentsReadExecutor({ documents });
  const result = await execute({ input: {}, context: { tenantId: "t1", userId: "u1" } });
  assert.equal(result.found, true);
  assert.equal(result.documents.length, 2);
  assert.deepEqual(result.documents.map(item => item.documentId).sort(), ["doc_1", "doc_2"]);
  assert.equal(verifyDocumentsReadOutcome({ result }).verified, true);
});

test("an empty list is still a verified (honest, non-erroring) outcome", async () => {
  const { documents } = fixture();
  const execute = createDocumentsReadExecutor({ documents });
  const result = await execute({ input: {}, context: { tenantId: "t1", userId: "u1" } });
  assert.equal(result.found, false);
  assert.deepEqual(result.documents, []);
  assert.equal(verifyDocumentsReadOutcome({ result }).verified, true);
});

test("a non-local object key produces no download path (nothing to fabricate without real object storage)", async () => {
  const rows = new Map([["t1:u1:doc_1", { document_id: "doc_1", title: "A", document_type: "txt", version: 1,
    object_key: "s3://bucket/key", _tenantId: "t1", _ownerId: "u1" }]]);
  const { documents } = fixture(rows);
  const execute = createDocumentsReadExecutor({ documents });
  const result = await execute({ input: { documentId: "doc_1" }, context: { tenantId: "t1", userId: "u1" } });
  assert.equal(result.document.downloadPath, null);
});

test("verifyDocumentsReadOutcome rejects a malformed result", () => {
  assert.equal(verifyDocumentsReadOutcome({ result: {} }).verified, false);
  assert.equal(verifyDocumentsReadOutcome({ result: undefined }).verified, false);
  assert.equal(verifyDocumentsReadOutcome({ result: { found: true } }).verified, false);
});
