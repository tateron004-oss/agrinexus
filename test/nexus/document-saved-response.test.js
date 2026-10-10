"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const { documentSavedResponse, businessAnswerResponse } = require("../../nexus/runtime/behavior-spine.js");

// Found on production: a document that was really saved was announced only as "Nexus completed the governed execution and is rendering the verified result."
const plan = (title, format) => ({ steps: [{ toolId: "documents.create", input: { title, ...(format ? { format } : {}) } }] });
const task = output => ({ steps: [{ output }] });

test("a saved document is announced by name and kind, and the person is told where to get it", () => {
  assert.equal(documentSavedResponse(plan("TEST Kyro check"), task({ documentId: "doc_1", filename: "abc.txt" }), {}), 'Saved "TEST Kyro check" as a text file; press Download on the card.');
  assert.equal(documentSavedResponse(plan("Maize sales", "pdf"), task({ documentId: "doc_2", filename: "abc.pdf" }), {}), 'Saved "Maize sales" as a PDF file; press Download on the card.');
  assert.match(documentSavedResponse(plan("Business Plan"), task({ documentId: "doc_3", filename: "x.docx" }), {}), /as a Word file/);
});

test("in Kiswahili it says so (first draft, to be reviewed by a fluent speaker)", () => {
  assert.match(documentSavedResponse(plan("Mauzo ya mahindi"), task({ documentId: "doc_4", filename: "x.pdf" }), { locale: "sw" }), /^Nimehifadhi "Mauzo ya mahindi" kama faili ya PDF;/);
});

test("nothing is claimed unless a document was really saved, and other plans are left to their own sentences", () => {
  assert.equal(documentSavedResponse(plan("X"), task({}), {}), "", "no documentId: nothing saved");
  assert.equal(documentSavedResponse({ steps: [{ toolId: "reminders.schedule", input: {} }] }, task({ documentId: "doc_5" }), {}), "");
  assert.equal(documentSavedResponse(null, null, {}), "");
});

test("the sentence is part of the render-required answer, ahead of the generic line", () => {
  const source = fs.readFileSync(require.resolve("../../nexus/runtime/behavior-spine.js"), "utf8");
  assert.match(source, /placesFoundResponse\(plan, task, context\) \|\| documentSavedResponse\(plan, task, context\) \|\| businessAnswerResponse\(plan, task\) \|\| "Nexus completed the governed execution and is rendering the verified result\."/);
});

// "Open the business workspace" answered only with the generic line, although the business tool had worded its own answer.
test("a business answer is said in the tool's own words, and only for business steps that produced one", () => {
  const businessPlan = { steps: [{ toolId: "business.query", input: {} }] };
  assert.equal(businessAnswerResponse(businessPlan, task({ response: "You do not have a business or nonprofit workspace yet. Tell me its name and what it does, and I can start one." })),
    "You do not have a business or nonprofit workspace yet. Tell me its name and what it does, and I can start one.");
  assert.equal(businessAnswerResponse(businessPlan, task({ summary: "You have 2 workspaces: Sunrise Poultry and Grace Foundation." })), "You have 2 workspaces: Sunrise Poultry and Grace Foundation.");
  assert.equal(businessAnswerResponse(businessPlan, task({})), "");
  assert.equal(businessAnswerResponse({ steps: [{ toolId: "documents.create" }] }, task({ response: "x" })), "");
  assert.equal(businessAnswerResponse(null, null), "");
});
