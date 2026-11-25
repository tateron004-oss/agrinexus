"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { createDocumentsCreateExecutor } = require("../../nexus/documents/executor.js");
const { fakeMemory } = require("./farmwork-fake.js");

// The owner's test report of 4 November 2026 (a signed-in account that HAS a business workspace): "Make me a flyer", "Create a newsletter as a PDF" and "Create a promotional email" gave "nothing opened or was made available to download", "only as a text file",
// "could not build a PDF". The workspace's own marketing kit asked "Should I go ahead?" and then only said "Open Business services to review and download them" (Markdown and HTML files in that screen: no document card, no Word, no PDF).
// A flyer, newsletter, poster, brochure, handout, invitation or promotional email is made as a document for an owner too, in the file type asked for.
const catalogTools = ["business.manage", "business.query", "documents.create", "lists.create"].map(tool_id => ({ tool_id, domain: tool_id.split(".")[0], description: "", risk_tier: "low", confirmation_required: false }));
function planner({ workspaces, seen = [] }) {
  return new OpenEndedPlanner({
    model: { plan: async request => { seen.push(request); throw new Error("MODEL_REACHED"); }, respond: async () => null },
    businessWorkspaces: { count: async () => workspaces },
    tools: { list: async () => catalogTools }, applications: { list: () => defaultApplicationManifests() },
    memory: Object.assign(fakeMemory(), { search: async () => [] })
  });
}
const ask = (instance, text) => instance.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Chicago" } });

test("an owner who has a workspace gets a flyer, a newsletter and a promotional email as saved documents, with no 'Should I go ahead?' and no model call", async () => {
  const seen = [];
  for (const [say, title, format, start] of [
    ["Make me a flyer for my bake sale on Saturday.", "Bake Sale Flyer", "docx", /^BAKE SALE\n\nWhen: Saturday\nWhere: \[the place\]/],
    ["Create a newsletter for the church as a PDF.", "Church Newsletter", "pdf", /^CHURCH\b/],
    ["Create a promotional email for my shop.", "Shop Promotional Email", "docx", /^Subject: \[a short, clear subject line\]/],
    ["Generate a flyer for my clinic day as a Word document.", "Clinic Day Flyer", "docx", /^CLINIC DAY/]
  ]) {
    const plan = await ask(planner({ workspaces: 1, seen }), say);
    assert.equal(plan.application, "documents", say);
    assert.equal(plan.clarification, null, say);
    assert.equal(plan.steps.length, 1, say);
    assert.equal(plan.steps[0].toolId, "documents.create", say);
    assert.equal(plan.steps[0].input.title, title, say);
    assert.equal(plan.steps[0].input.format, format, say);
    assert.match(plan.steps[0].input.content, start, say);
    assert.equal(plan.steps[0].input.reopenAfterSave, true, say);
  }
  assert.equal(seen.length, 0);
});

test("the workspace's own marketing kit is still there for 'generate marketing materials', and other business requests are untouched", async () => {
  const kit = await ask(planner({ workspaces: 1 }), "Generate marketing material for my shop");
  assert.equal(kit.application, "business");
  assert.equal(kit.steps[0].toolId, "business.manage");
  const other = await ask(planner({ workspaces: 1 }), "Add a customer named Grace");
  assert.equal(other.application, "business");
  const none = await ask(planner({ workspaces: 0 }), "Make me a flyer for my bake sale on Saturday.");
  assert.equal(none.application, "documents");
});

test("the saved file is a real Word or PDF file, not a text file: the executor writes '%PDF' for a PDF and a Word zip for the default", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "owner-docs-"));
  try {
    const run = createDocumentsCreateExecutor({ env: { ...process.env, NEXUS_EXPORT_DIR: dir } });
    for (const [say, extension, magic] of [["Create a newsletter for the church as a PDF.", "pdf", "%PDF"], ["Make me a flyer for my bake sale on Saturday.", "docx", "PK\u0003\u0004"], ["Create a promotional email for my shop as a Word document.", "docx", "PK\u0003\u0004"]]) {
      const plan = await ask(planner({ workspaces: 2 }), say);
      const result = await run({ input: plan.steps[0].input, context: null, taskId: "t" });
      assert.equal(result.status, "completed", say);
      assert.equal(result.data.format, extension, say);
      assert.match(result.data.filename, new RegExp(`\\.${extension}$`), say);
      assert.equal(fs.readFileSync(result.data.localPath).subarray(0, 4).toString("latin1"), magic, say);
    }
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});
