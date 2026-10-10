"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const exportProvider = require("../../server/providers/exportProvider.js");
const { createDocumentsCreateExecutor } = require("../../nexus/documents/executor.js");
const { OpenEndedPlanner, exportLatestDocumentFormat } = require("../../nexus/brain/planner.js");

// Found on production: "Create a document ..." then "Export it as a PDF." -- nothing handled the second sentence (it went to the AI model). Now the latest saved document is exported again in the file type asked for.
const catalog = {
  tools: [{ tool_id: "documents.create", domain: "documents", risk_tier: "low", confirmation_required: false }],
  applications: [{ applicationId: "documents", capabilities: ["documents.create"], riskTiers: ["low"] }]
};
function planner(documents) {
  return new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); } }, tools: { list: async () => catalog.tools }, applications: { list: () => catalog.applications }, documents });
}
const ask = (p, text) => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context: {} });

test("which sentences mean 'export the latest document', and which do not", () => {
  const cases = { "Export it as a PDF.": "pdf", "export it as pdf": "pdf", "Convert that to Word.": "docx", "Save the document as a text file": "txt", "Please export this as markdown": "md", "Download it as a PDF": "pdf", "Make it a PDF": null };
  for (const [text, format] of Object.entries(cases)) assert.equal(exportLatestDocumentFormat(text), format, text);
  for (const text of ["Export this chat as a PDF", "save our conversation as a PDF", "export my report as a PDF", "Create a document called X that says Y and save it as a PDF", "what is a PDF", "Export all my patient records"]) {
    assert.equal(exportLatestDocumentFormat(text), null, text);
  }
});

test("'Export it as a PDF.' plans the same title and text again as a PDF, with no model call", async () => {
  const documents = { list: async () => [{ document_id: "doc_1", title: "Maize Sales" }], getSource: async () => ({ title: "Maize Sales", sourceText: "Sold 3 sacks of maize for 4500." }) };
  const plan = await ask(planner(documents), "Export it as a PDF.");
  assert.equal(plan.application, "documents");
  assert.equal(plan.steps.length, 1);
  assert.equal(plan.steps[0].toolId, "documents.create");
  assert.deepEqual({ title: plan.steps[0].input.title, content: plan.steps[0].input.content, format: plan.steps[0].input.format }, { title: "Maize Sales", content: "Sold 3 sacks of maize for 4500.", format: "pdf" });
});

test("with no saved document it says so and shows how to make one; with an older document whose text was not kept it says that", async () => {
  const none = await ask(planner({ list: async () => [] }), "Export it as a PDF.");
  assert.deepEqual(none.steps, []);
  assert.match(none.response, /no saved document yet/i);
  const old = await ask(planner({ list: async () => [{ document_id: "doc_9", title: "Old Plan" }], getSource: async () => ({ title: "Old Plan", sourceText: "" }) }), "Convert that to Word.");
  assert.deepEqual(old.steps, []);
  assert.match(old.response, /"Old Plan" because it was saved before I kept its text/);
});

test("the document executor now keeps the text a document was made from, with the saved version", async () => {
  const file = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "doc-src-")), "x.pdf");
  fs.writeFileSync(file, "%PDF-1.4 test");
  const original = exportProvider.exportDocument;
  let savedContent = null;
  exportProvider.exportDocument = async body => ({ httpStatus: 200, body: { ok: true, data: { exportId: "e1", filename: "x.pdf", localPath: file, bytes: 13, downloadPath: "/dl/x.pdf" } } });
  try {
    const documents = {
      create: async () => ({ document_id: "doc_7" }),
      addVersion: async ({ content }) => { savedContent = content; return { version: 1 }; },
      get: async () => ({ document_id: "doc_7" })
    };
    const run = createDocumentsCreateExecutor({ documents });
    await run({ input: { title: "Maize Sales", content: "Sold 3 sacks of maize for 4500.", format: "pdf" }, context: { tenantId: "t1", userId: "u1" }, taskId: "tsk_1" });
    assert.equal(savedContent.sourceText, "Sold 3 sacks of maize for 4500.");
  } finally { exportProvider.exportDocument = original; }
});
