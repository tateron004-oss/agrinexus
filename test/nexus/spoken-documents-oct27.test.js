"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const templates = require("../../public/kyro-template-topics.js");
const consulting = require("../../nexus/knowledge/consulting-templates.js");
const trips = require("../../public/kyro-trip-topics.js");
const resultScreen = require("../../public/kyro-result-screen.js");
const { OpenEndedPlanner, completeListsPlan } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { fakeMemory } = require("./farmwork-fake.js");

// Asked for on 27 October 2026 ("do the general fix for spoken documents"). The owner's rule: Kyro has to show lists and documents, whatever is asked, by voice as well as by typing. A probe of eight everyday spoken requests on the live site found:
// an explicit document, "a document about ...", and "a letter to ..." were shown; but "Draft a website brief for Grace's Bakery" was answered "Okay." with nothing on the screen; "Make a shopping list with milk, eggs and bread" said the items were added and showed nothing;
// "Make me a checklist of what to bring to a clinic visit" made an empty list called "Nexus checklist"; and "Make me a packing checklist for a trip to Kenya" was made into a seven day itinerary by the trip feature.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

test("a packing checklist for a trip is a checklist, not an itinerary; asking for a plan or itinerary is still a trip", () => {
  for (const say of ["Make me a packing checklist for a trip to Kenya.", "Make a to-do list for my trip to Paris.", "Give me a travel checklist for a trip to Africa.", "Make me a packing list for a week in Tokyo."]) assert.equal(trips.tripRequest(say), null, say);
  for (const say of ["Plan a 7 day trip to Kenya.", "Make me a sample itinerary for Paris for 5 days.", "I am traveling to Nairobi from Atlanta next month. Help me with my travel arrangements."]) assert.ok(trips.tripRequest(say), say);
});

test("the starter-document request matcher is one shared file: the page and the server read a request the same way, and it is unchanged", () => {
  assert.equal(templates.templateRequest, consulting.templateRequest);
  assert.deepEqual({ ...templates.templateRequest("Draft a website brief for Grace's Bakery.") }, { kind: "website-brief", client: "Grace's Bakery", format: "docx" });
  assert.deepEqual({ ...templates.templateRequest("Make an automation audit for Marcus as a PDF.") }, { kind: "automation-audit", client: "Marcus", format: "pdf" });
  assert.equal(templates.templateRequest("Write a letter to my landlord asking for a repair."), null);
  assert.equal(templates.templateRequest("Make a shopping list with milk, eggs and bread."), null);
});

test("on the page: a spoken starter document is taken by the page and made and shown, as typing it is; a business plan is left to its interview; other requests are left alone", () => {
  const start = app.indexOf("function kyroTemplateRequest(text) {");
  const end = app.indexOf("\n}\n", start) + 2;
  assert.ok(start > 0 && end > start);
  const ask = window => { const context = { window }; vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroTemplateRequest;`, context); return context.ask; };
  const claim = ask({ KyroTemplateTopics: templates });
  for (const say of ["Draft a website brief for Grace's Bakery.", "Create a technology roadmap.", "Make an automation audit for Marcus as a PDF.", "Write an AI use policy."]) assert.equal(claim(say), true, say);
  for (const say of ["Write a letter to my landlord asking for a repair.", "Make a shopping list with milk, eggs and bread.", "Play some music", "Create a document called Farm Plan that says I will plant maize in March, and save it."]) assert.equal(claim(say), false, say);
  assert.equal(templates.templateRequest("Create a business plan.")?.kind, "business-plan");
  assert.equal(claim("Create a business plan."), false, "its own interview asks its ten questions");
  assert.equal(ask({})("Draft a website brief for Grace's Bakery."), false, "no matcher loaded, no claim");
  assert.match(app, /if \(trimmed && typeof kyroTemplateRequest === "function" && kyroTemplateRequest\(trimmed\)\) \{\s+if \(!heardAgain\) \{\s+try \{ kyroTakeOverTurn\(\); \} catch \{ \/\* nothing to cut off \*\/ \}\s+kyroPageSpeaksUntil = Date\.now\(\) \+ 40000;\s+void handleNexusUnifiedBrainRuntimeCommand\(trimmed, \{ source: "typed", kyroDirect: true \}\);/);
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  const tag = '<script src="/kyro-template-topics.js?v=kyro-template-topics-1"></script>';
  assert.ok(index.includes(tag) && index.indexOf(tag) < index.search(/<script[^>]+src="\/app\.js/));
  assert.match(sw, /`\/kyro-template-topics\.js\?v=kyro-template-topics-1`/);
});

function planner() {
  const tools = [{ tool_id: "documents.create", domain: "documents", description: "", risk_tier: "low", confirmation_required: false }, { tool_id: "lists.create", domain: "lists", description: "", risk_tier: "low", confirmation_required: false }];
  return new OpenEndedPlanner({ model: { plan: async () => { throw new Error("the AI model must not plan"); }, respond: async () => null }, tools: { list: async () => tools }, applications: { list: () => defaultApplicationManifests() }, memory: Object.assign(fakeMemory(), { search: async () => [] }) });
}
const ask = (p, text) => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Chicago" } });

test("a list with no name and nothing on it is asked about (Kyro does not make up the items), not made empty; a named list, or one with items, is made as before", async () => {
  const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "lists.create" }] };
  const asked = completeListsPlan("Make me a checklist of what to bring to a clinic visit.", catalog);
  assert.deepEqual(asked.steps, []);
  assert.match(asked.clarification, /I need to know what goes on it, because I do not make up the items\. For example: "Create a checklist called Clinic Visit with items ID, insurance card and medicines"\. What should it be called, and what should be on it\?/);
  assert.deepEqual(completeListsPlan("Start a list for harvest tasks.", catalog).steps[0].input.items, []);
  const named = completeListsPlan("Create a checklist called Farm Chores with feed goats, water crops, and check fences.", catalog);
  assert.equal(named.steps[0].input.title, "Farm Chores"); assert.deepEqual(named.steps[0].input.items, ["feed goats", "water crops", "check fences"]);
  assert.equal(completeListsPlan("Make a list with seeds, sacks and a scale.", catalog).steps[0].input.items.length, 3);
  // through the whole planner
  const plan = await ask(planner(), "Make me a checklist of what to bring to a clinic visit.");
  assert.equal(plan.application, "lists"); assert.deepEqual(plan.steps, []); assert.match(plan.clarification, /What should it be called, and what should be on it\?/);
});

test("the list read-back is what the result screen draws as a list, and the one-line confirmation is a card with one sentence: the page follows the one with the other", () => {
  const read = { ok: true, status: "completed", intent: "planner-deterministic-answer", capability: "conversation", response: "On your shopping list: 1, milk; 2, eggs; 3, bread." };
  const model = resultScreen.buildModel(read, { command: "show my shopping list", lang: "en" });
  assert.equal(model.kind, "list"); assert.equal(model.title, "On your shopping list"); assert.deepEqual(model.items.map(item => item.name), ["1, milk", "2, eggs", "3, bread"]);
  const confirmed = resultScreen.buildModel({ ...read, response: "Added milk, eggs and bread to your shopping list. You have 3 open items." }, { command: "make a shopping list with milk, eggs and bread", lang: "en" });
  assert.equal(confirmed.kind, "text", "the confirmation alone is one sentence on a card, not the list");
});

test("on the page: after 'Added ... to your shopping list.' the list is fetched and shown in place of the confirmation; nothing else triggers it, and the list's own answer cannot loop", async () => {
  const start = app.indexOf("async function kyroShowListAfterAdd(result, command) {");
  const end = app.indexOf("\n}\n", start) + 2;
  assert.ok(start > 0 && end > start);
  const make = ({ listAnswer = "On your shopping list: 1, milk; 2, eggs; 3, bread.", ok = true } = {}) => {
    const log = [];
    const context = {
      languageCode: () => "en", kyroDeviceTimeZone: () => "America/Chicago", JSON, Date, Math,
      kyroFetchWithTimeout: async (url, init) => { log.push(["fetch", url, JSON.parse(init.body).arguments.command]); return { ok, json: async () => ({ response: listAnswer }) }; },
      kyroShowResultScreen: (tool, command, result) => { log.push(["show", tool, command, result.response]); return true; }
    };
    vm.runInNewContext(`${app.slice(start, end)}\nthis.run = kyroShowListAfterAdd;`, context);
    return { run: context.run, log };
  };
  const added = make();
  assert.equal(await added.run({ response: "Added milk, eggs and bread to your shopping list. You have 3 open items." }, "make a shopping list with milk, eggs and bread"), true);
  assert.deepEqual(added.log, [["fetch", "/api/voice/realtime/tool", "Show my shopping list"], ["show", "nexus_everyday_records", "Show my shopping list", "On your shopping list: 1, milk; 2, eggs; 3, bread."]]);
  const todo = make({ listAnswer: "On your to-do list: 1, call the vet; 2, fix the gate." });
  assert.equal(await todo.run({ response: "Added call the vet to your to-do list. You have 2 open items." }, "x"), true);
  assert.equal(todo.log[0][2], "Show my to-do list");
  for (const response of ["On your shopping list: 1, milk; 2, eggs; 3, bread.", "Those are already on your shopping list. You have 3 open items.", "Welcome home.", ""]) {
    const other = make(); assert.equal(await other.run({ response }, "x"), false, response); assert.deepEqual(other.log, [], `nothing fetched for: ${response}`);
  }
  const notAList = make({ listAnswer: "Sorry, I could not read it." });
  assert.equal(await notAList.run({ response: "Added milk to your shopping list. You have 1 open item." }, "x"), false); assert.equal(notAList.log.filter(entry => entry[0] === "show").length, 0, "not a list: the confirmation stays");
  const down = make({ ok: false });
  assert.equal(await down.run({ response: "Added milk to your shopping list. You have 1 open item." }, "x"), false);
  // wired: called after the confirmation card is drawn
  assert.match(app, /kyroNoteActivity\(\);\s+\/\/ \(a list that was just added to is shown as the list: see kyroShowListAfterAdd\)\s+try \{ void kyroShowListAfterAdd\(result, command\); \} catch \{ \/\* the confirmation is already showing \*\/ \}\s+return true;/);
});
