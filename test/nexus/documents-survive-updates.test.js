"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { createDocumentsCreateExecutor } = require("../../nexus/documents/executor.js");
const { DocumentRepository } = require("../../nexus/data/document-repository.js");
const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");

// A document made by voice used to be a file on the app's own disk, which is lost whenever the app is updated, so the record said "saved" and the
// download later said "file unavailable". A copy of the file's bytes is now kept with the document's version record in the database.

function responseCapture() { const result = {}; return { result, send(_res, status, body) { result.status = status; result.body = body; } }; }

test("saving a document keeps a copy of the file's bytes with its version record", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "docs-survive-"));
  const versions = [];
  const documents = {
    async create() { return { document_id: "doc_1" }; },
    async addVersion(args) { versions.push(args); return { version: 1 }; },
    async get() { return { document_id: "doc_1", version: 1 }; }
  };
  try {
    const execute = createDocumentsCreateExecutor({ env: { NEXUS_EXPORT_DIR: dir }, documents });
    const result = await execute({ input: { title: "Farm Plan", content: "I will plant maize in March", format: "txt" }, context: { tenantId: "t1", userId: "u1" }, taskId: "tsk_1" });
    assert.equal(result.documentId, "doc_1");
    const saved = versions[0].content;
    assert.equal(saved.filename, result.data.filename);
    assert.equal(Buffer.from(saved.contentBase64, "base64").toString("utf8"), fs.readFileSync(path.join(dir, result.data.filename), "utf8"), "the kept copy is exactly the file");
    assert.match(Buffer.from(saved.contentBase64, "base64").toString("utf8"), /I will plant maize in March/);
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});

test("the repository hands the kept copy back to the document's owner only", async () => {
  const calls = [];
  const db = { async query(sql, params) { calls.push({ sql, params }); return { rows: [{ content_base64: "aGVsbG8=" }] }; } };
  const repo = new DocumentRepository({ ...db, transaction: async fn => fn(db) });
  assert.equal(await repo.getFileContent({ tenantId: "t1", ownerId: "u1", documentId: "doc_1" }), "aGVsbG8=");
  assert.match(calls[0].sql, /d\.tenant_id=\$1 and d\.owner_id=\$2 and d\.document_id=\$3 and d\.deleted_at is null/);
  assert.deepEqual(calls[0].params, ["t1", "u1", "doc_1"]);
  const none = new DocumentRepository({ query: async () => ({ rows: [] }), transaction: async fn => fn({}) });
  assert.equal(await none.getFileContent({ tenantId: "t1", ownerId: "u1", documentId: "x" }), null);
});

test("the download still works after the file on disk is gone, from the copy in the database", async () => {
  const gone = { document_id: "doc_gone", title: "Farm Plan", document_type: "txt", version: 1, object_key: "local:33333333-3333-3333-3333-333333333333.txt", created_at: "2026-09-01T00:00:00.000Z", updated_at: "2026-09-01T00:00:00.000Z" };
  const asked = [];
  const runtime = { engine: { tasks: {} }, documents: { get: async () => gone, getFileContent: async args => { asked.push(args); return Buffer.from("kept bytes").toString("base64"); } } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_EXPORT_DIR: os.tmpdir() }, resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1" }), readJson: async () => ({}), createRuntimeFn: () => runtime });
  const response = responseCapture();
  await adapter.handle({ method: "GET", headers: {} }, {}, new URL("http://local/api/nexus/runtime/documents/doc_gone"), response.send);
  assert.equal(response.result.status, 200);
  assert.equal(Buffer.from(response.result.body.contentBase64, "base64").toString("utf8"), "kept bytes");
  assert.equal(response.result.body.contentType, "text/plain");
  assert.deepEqual(asked, [{ tenantId: "tenant-1", ownerId: "user-1", documentId: "doc_gone" }], "asked for this owner's copy only");
});

test("when there is no copy either, the download still says the file is unavailable", async () => {
  const gone = { document_id: "doc_gone", title: "x", document_type: "txt", object_key: "local:44444444-4444-4444-4444-444444444444.txt" };
  for (const documents of [{ get: async () => gone, getFileContent: async () => null }, { get: async () => gone }, { get: async () => gone, getFileContent: async () => { throw new Error("db down"); } }]) {
    const adapter = createServerRuntimeAdapter({ env: { NEXUS_EXPORT_DIR: os.tmpdir() }, resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1" }), readJson: async () => ({}), createRuntimeFn: () => ({ engine: { tasks: {} }, documents }) });
    const response = responseCapture();
    await adapter.handle({ method: "GET", headers: {} }, {}, new URL("http://local/api/nexus/runtime/documents/doc_gone"), response.send);
    assert.equal(response.result.status, 404);
    assert.equal(response.result.body.code, "document_file_missing");
  }
});

test("erasing a person wipes the kept copy with the rest of the version record", () => {
  const source = fs.readFileSync(path.join(__dirname, "..", "..", "nexus", "security", "data-lifecycle-repository.js"), "utf8");
  assert.match(source, /update nexus_document_versions v set content='\{\}'::jsonb,object_key=null/);
});
