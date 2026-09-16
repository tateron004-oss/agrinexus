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
