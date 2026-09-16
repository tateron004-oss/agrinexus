"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const exportProvider = require("../../server/providers/exportProvider.js");
const { createDocumentsCreateExecutor, verifyDocumentsCreateOutcome } = require("../../nexus/documents/executor.js");

function withPatched(moduleExports, fnName, replacement, run) {
  const original = moduleExports[fnName];
  moduleExports[fnName] = replacement;
  return Promise.resolve(run()).finally(() => { moduleExports[fnName] = original; });
}

test("a real export returns a verified outcome", async () => {
  await withPatched(exportProvider, "exportDocument", async body => {
    assert.equal(body.confirmed, true);
    assert.equal(body.title, "Field report");
    assert.equal(body.format, "pdf");
    return { httpStatus: 200, body: { ok: true, status: "completed", data: { exportId: "exp-1", bytes: 4096 } } };
  }, async () => {
    const execute = createDocumentsCreateExecutor({ env: {} });
    const result = await execute({ input: { title: "Field report", content: "yields", format: "PDF" } });
    assert.equal(result.data.exportId, "exp-1");
    assert.equal(verifyDocumentsCreateOutcome({ result }).verified, true);
  });
});

test("defaults title/content/format when not provided", async () => {
  await withPatched(exportProvider, "exportDocument", async body => {
    assert.equal(body.title, "Nexus document");
    assert.equal(body.format, "txt");
    return { httpStatus: 200, body: { ok: true, status: "completed", data: { exportId: "exp-2", bytes: 10 } } };
  }, async () => {
    const execute = createDocumentsCreateExecutor({ env: {} });
    await execute({ input: {} });
  });
});

test("a failed export does not verify", async () => {
  await withPatched(exportProvider, "exportDocument", async () => ({
    httpStatus: 400, body: { ok: false, status: "failed", data: {} }
  }), async () => {
    const execute = createDocumentsCreateExecutor({ env: {} });
    const result = await execute({ input: { title: "x", content: "y", format: "txt" } });
    assert.equal(verifyDocumentsCreateOutcome({ result }).verified, false);
  });
});

test("a zero-byte export does not verify", async () => {
  await withPatched(exportProvider, "exportDocument", async () => ({
    httpStatus: 200, body: { ok: true, status: "completed", data: { exportId: "exp-3", bytes: 0 } }
  }), async () => {
    const execute = createDocumentsCreateExecutor({ env: {} });
    const result = await execute({ input: { title: "x", content: "y", format: "txt" } });
    assert.equal(verifyDocumentsCreateOutcome({ result }).verified, false);
  });
});

test("indexes a real export into the document repository when one and a context are supplied", async () => {
  const fs = require("node:fs");
  const os = require("node:os");
  const path = require("node:path");
  const tmpFile = path.join(os.tmpdir(), `nexus-doc-test-${Date.now()}.txt`);
  fs.writeFileSync(tmpFile, "hello world");
  const created = []; const versions = [];
  const documents = {
    create: async input => { created.push(input); return { document_id: "doc_1" }; },
    addVersion: async input => { versions.push(input); return { version_id: "ver_1", version: 1 }; }
  };
  await withPatched(exportProvider, "exportDocument", async () => ({
    httpStatus: 200, body: { ok: true, status: "completed", data: { exportId: "exp-4", bytes: 11, filename: "exp-4.txt", localPath: tmpFile, downloadPath: "/exports/exp-4.txt" } }
  }), async () => {
    const execute = createDocumentsCreateExecutor({ env: {}, documents });
    const result = await execute({ input: { title: "Field report", content: "hello world", format: "txt" },
      context: { tenantId: "t1", userId: "u1" }, taskId: "tsk_1" });
    assert.equal(result.documentId, "doc_1");
    assert.equal(created.length, 1);
    assert.equal(created[0].tenantId, "t1"); assert.equal(created[0].ownerId, "u1"); assert.equal(created[0].taskId, "tsk_1");
    assert.equal(created[0].title, "Field report"); assert.equal(created[0].documentType, "txt");
    assert.equal(versions.length, 1);
    assert.equal(versions[0].documentId, "doc_1");
    assert.equal(versions[0].objectKey, "local:exp-4.txt");
    assert.equal(versions[0].createdBy, "u1");
    assert.match(versions[0].checksum, /^[0-9a-f]{64}$/);
  });
  fs.unlinkSync(tmpFile);
});

test("a failure to index the export does not fail the (already-successful) create", async () => {
  const documents = {
    create: async () => { throw new Error("db unavailable"); },
    addVersion: async () => { throw new Error("unreachable"); }
  };
  await withPatched(exportProvider, "exportDocument", async () => ({
    httpStatus: 200, body: { ok: true, status: "completed", data: { exportId: "exp-5", bytes: 5, filename: "exp-5.txt", localPath: "/nonexistent/path.txt" } }
  }), async () => {
    const execute = createDocumentsCreateExecutor({ env: {}, documents });
    const result = await execute({ input: { title: "x", content: "y", format: "txt" }, context: { tenantId: "t1", userId: "u1" }, taskId: "tsk_1" });
    assert.equal(result.data.exportId, "exp-5");
    assert.equal(result.documentId, undefined);
    assert.equal(verifyDocumentsCreateOutcome({ result }).verified, true);
  });
});

test("indexing is skipped entirely with no documents repository or no context, exactly as before", async () => {
  await withPatched(exportProvider, "exportDocument", async () => ({
    httpStatus: 200, body: { ok: true, status: "completed", data: { exportId: "exp-6", bytes: 5, filename: "exp-6.txt", localPath: "/nonexistent/path.txt" } }
  }), async () => {
    const execute = createDocumentsCreateExecutor({ env: {} });
    const result = await execute({ input: { title: "x", content: "y", format: "txt" } });
    assert.equal(result.documentId, undefined);
  });
});
