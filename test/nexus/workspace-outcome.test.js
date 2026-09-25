"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const { createWorkspaceOutcome } = require("../../nexus/contracts/workspace-outcome.js");

const command = text => ({ commandId: "cmd_1", correlationId: "cor_1", conversationId: "cnv_1", channel: "typed", text });

test("server outcome preserves agriculture entities and original command", () => {
  const result = createWorkspaceOutcome({
    command: command("My tomato leaves have yellow spots. What should I do?"),
    plan: { application: "agriculture", steps: [{ input: { crop: "tomato", observations: ["yellow spots on leaves"] } }] },
    task: { taskId: "tsk_1", steps: [{ output: { assessment: "Inspect for fungal disease." } }] },
    state: "completed", response: "Assessment ready.", outcome: { verified: true }
  });
  assert.equal(result.workspace, "agriculture");
  assert.equal(result.operation, "agriculture_assessment");
  assert.equal(result.originalText, "My tomato leaves have yellow spots. What should I do?");
  assert.equal(result.data.crop, "tomato");
  assert.deepEqual(result.data.observations, ["yellow spots on leaves"]);
  assert.equal(result.verification.renderVerified, false);
  assert.equal(result.schema, "nexus.workspace-outcome.v2");
  assert.deepEqual(result.presentation, {
    kind: "assessment", renderer: "passive-ui", interaction: "receipt-only",
    commandAuthority: false, completionAuthority: false
  });
});

test("server outcome retains both map endpoints", () => {
  const result = createWorkspaceOutcome({
    command: command("Show me the route from Nairobi to Nakuru"),
    plan: { application: "maps", steps: [{ input: { origin: "Nairobi", destination: "Nakuru" } }] },
    task: { taskId: "tsk_2", steps: [] }, state: "completed", outcome: { verified: true }
  });
  assert.equal(result.operation, "show_route");
  assert.equal(result.presentation.kind, "map");
  assert.deepEqual({ origin: result.data.origin, destination: result.data.destination }, { origin: "Nairobi", destination: "Nakuru" });
});

test("server outcome registers lists as a real workspace, not a mock or a throw", () => {
  const created = createWorkspaceOutcome({
    command: command("Create a checklist called Farm Chores with feed goats and water crops."),
    plan: { application: "lists", steps: [{ toolId: "lists.create", input: { title: "Farm Chores", items: ["feed goats", "water crops"] } }] },
    task: { taskId: "tsk_3", steps: [{ output: { listId: "rec_1", itemCount: 2, persisted: true } }] },
    state: "completed", outcome: { verified: true }
  });
  assert.equal(created.workspace, "lists");
  assert.equal(created.operation, "create_list");
  assert.equal(created.presentation.kind, "checklist");
  assert.equal(created.data.listId, "rec_1");

  const updated = createWorkspaceOutcome({
    command: command("Add bring feed to my Farm Chores list."),
    plan: { application: "lists", steps: [{ toolId: "lists.update", input: { listId: "rec_1", addItems: ["bring feed"] } }] },
    task: { taskId: "tsk_4", steps: [{ output: { updated: true, listId: "rec_1" } }] },
    state: "completed", outcome: { verified: true }
  });
  assert.equal(updated.operation, "update_list");
});

// Found live: a real lists.read outcome (real executor in
// nexus/lists/executor.js) was always mislabeled "update_list" (when the
// merged input happened to carry a listId) or "create_list" (otherwise,
// including a genuine "show me all my lists" request with no single listId
// at all) -- telling the user their checklist was created/updated when they
// only asked to see it. The step's own toolId is now the signal used
// instead of guessing from the input shape.
test("server outcome reports a real lists.read as read_list, not create_list/update_list", () => {
  const singleLookup = createWorkspaceOutcome({
    command: command("What's on my Farm Chores checklist?"),
    plan: { application: "lists", steps: [{ toolId: "lists.read", input: { listId: "rec_1" } }] },
    task: { taskId: "tsk_5", steps: [{ output: { found: true, listId: "rec_1", list: { listId: "rec_1", title: "Farm Chores", items: [{ text: "feed goats" }] } } }] },
    state: "completed", outcome: { verified: true }
  });
  assert.equal(singleLookup.operation, "read_list");

  const allLookup = createWorkspaceOutcome({
    command: command("Show me all my checklists."),
    plan: { application: "lists", steps: [{ toolId: "lists.read", input: {} }] },
    task: { taskId: "tsk_6", steps: [{ output: { found: true, lists: [{ listId: "rec_1", title: "Farm Chores", items: [] }] } }] },
    state: "completed", outcome: { verified: true }
  });
  assert.equal(allLookup.operation, "read_list");
});

test("workspace selection is server-owned and rejects unknown applications", () => {
  assert.throws(() => createWorkspaceOutcome({ command: command("Do something"), plan: { application: "legacy-browser", steps: [] }, task: {}, state: "completed" }), /No authoritative workspace/);
});

test("business outcomes use the generic operation presentation, not the document lifecycle gate", () => {
  // Confirmed live against production: the client's document-kind renderer
  // (renderNexusAuthoritativeDocument) requires a real create/save/reopen
  // document lifecycle (documentId + savedVersion + reopenVerified) and
  // returns null otherwise. A real business.query/business.manage outcome
  // never carries those fields -- it carries businessRecord/businessClients/
  // businessDashboard -- so presentation.kind "document" rendered nothing
  // visible for every real business command. "operation" is the generic,
  // already-registered kind with no such field gate (the same one
  // `operations` already uses).
  const result = createWorkspaceOutcome({
    command: command("List my business workspaces."),
    plan: { application: "business", steps: [{ input: {} }] },
    task: { taskId: "tsk_5", steps: [{ output: { businessClients: [] } }] },
    state: "completed", response: "You do not have a business workspace yet.", outcome: { verified: true }
  });
  assert.equal(result.workspace, "business");
  assert.equal(result.operation, "business_workspace_action");
  assert.equal(result.presentation.kind, "operation");
});

test("workforce outcomes use the generic operation presentation, so a real job-search result renders", () => {
  // Confirmed live against production: workforce's manifest has THREE tools
  // (jobs.search, resume.create, documents.create -- see
  // nexus/apps/default-manifests.js), but only the latter two ever produce
  // documentId/savedVersion/reopenVerified (see scripts/provider-engines.js).
  // A real jobs.search result (listings/selectedListing) never has those
  // fields, so with presentation.kind "document" a real job search --
  // workforce's most common interaction -- rendered nothing visible at all.
  // "operation" has no field gate and was confirmed live to render both a
  // jobs.search-shaped and a resume.create-shaped outcome correctly.
  const searchResult = createWorkspaceOutcome({
    command: command("Find agriculture jobs in Nairobi with sources and select one listing."),
    plan: { application: "workforce", steps: [{ input: {} }] },
    task: { taskId: "tsk_6", steps: [{ output: { listings: [{ id: "rec_1", title: "Agriculture opportunity" }], selectedListing: "rec_1" } }] },
    state: "completed", response: "Found 1 agriculture job listing in Nairobi.", outcome: { verified: true }
  });
  assert.equal(searchResult.workspace, "workforce");
  assert.equal(searchResult.presentation.kind, "operation");
});
