"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { completeSaveConversationPlan, completeDocumentPlan } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");

// User asked directly (2026-09-28): "can Kyro save the conversation somewhere in a doc
// or in the cloud for future use?" Kyro genuinely keeps recent conversation history
// (nexus/data/conversation-repository.js), but nothing turned it into a document the
// person could keep -- there was no handler for "save this conversation" at all, and
// the generic completeDocumentPlan fast path would have just echoed the raw command
// sentence ("save this conversation") as the file's content instead of the real
// conversation.

const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "documents.create" }] };

const history = [
  { role: "user", content: "What's the weather in Nakuru tomorrow?", created_at: "2026-09-28T08:00:00.000Z" },
  { role: "assistant", content: "It will be 24C and mostly sunny in Nakuru tomorrow.", created_at: "2026-09-28T08:00:05.000Z" }
];

test("a request to save the conversation produces a real documents.create plan built from the actual history, not the command text", () => {
  const plan = completeSaveConversationPlan("Can you save this conversation for me?", catalog, history);
  assert.equal(plan.application, "documents");
  assert.equal(plan.steps[0].toolId, "documents.create");
  const content = plan.steps[0].input.content;
  assert.match(content, /You: What's the weather in Nakuru tomorrow\?/);
  assert.match(content, /Nexus: It will be 24C and mostly sunny in Nakuru tomorrow\./);
  assert.doesNotMatch(content, /^Can you save this conversation for me\?$/, "must not just echo the command sentence like the generic document matcher does");
});

test("a requested format (PDF, Word, etc) is still honored for a conversation save, same as any other document", () => {
  const plan = completeSaveConversationPlan("Export this conversation as a PDF.", catalog, history);
  assert.equal(plan.steps[0].input.format, "pdf");
  assert.equal(completeSaveConversationPlan("Download our chat.", catalog, history).steps[0].input.format, undefined,
    "no format named -- must not invent one, documents.create's own default still applies");
});

test("various real phrasings for saving a conversation are all recognized", () => {
  for (const phrase of [
    "Save this conversation.",
    "Save our conversation to the cloud.",
    "Please export this chat.",
    "Get me a copy of this discussion.",
    "Give me a copy of this transcript."
  ]) {
    assert.ok(completeSaveConversationPlan(phrase, catalog, history), `expected a plan for: ${phrase}`);
  }
});

test("unrelated save/export/download requests are left alone -- the gate needs both an action and a conversation-shaped target", () => {
  assert.equal(completeSaveConversationPlan("Save a reminder to call the vet.", catalog, history), null);
  assert.equal(completeSaveConversationPlan("Export my farm report as a PDF.", catalog, history), null);
  assert.equal(completeSaveConversationPlan("Download my invoice.", catalog, history), null);
});

test("with no conversation history yet, Kyro says so honestly instead of creating an empty document", () => {
  const plan = completeSaveConversationPlan("Save this conversation.", catalog, []);
  assert.equal(plan.application, "conversation");
  assert.equal(plan.steps.length, 0);
  assert.match(plan.response, /no conversation history/i);
});

// Guards the priority ordering fix in planner.js's plan() dispatch: without
// completeSaveConversationPlan running first, "save this conversation as a document"
// falls through to completeDocumentPlan's generic gate (create/write/draft/make +
// document/plan/report + save/reopen/persist) -- confirmed this phrasing alone still
// matches completeDocumentPlan's regexes on their own, which is exactly why the new
// matcher has to run first in plan(), not just exist alongside it.
test("the phrasing 'create a document of this conversation and save it' would otherwise be swallowed by the generic document matcher", () => {
  const phrase = "Create a document of this conversation and save it.";
  const genericMatch = completeDocumentPlan(phrase, catalog);
  assert.ok(genericMatch, "sanity check: the generic matcher's own gate does match this phrasing");
  const conversationMatch = completeSaveConversationPlan(phrase, catalog, history);
  assert.ok(conversationMatch, "the conversation-specific matcher must also match it, so planner.js's ordering, not luck, decides which one wins");
  assert.match(conversationMatch.steps[0].input.content, /You: What's the weather in Nakuru tomorrow\?/,
    "and it must be the one that wins, since only it carries the real conversation content");
});
