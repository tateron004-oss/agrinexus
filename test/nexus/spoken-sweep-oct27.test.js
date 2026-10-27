"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { OpenEndedPlanner, completeListsPlan } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { fakeMemory } = require("./farmwork-fake.js");

// "Fix everything the sweep finds" (27 October 2026). A sweep of 34 everyday spoken requests on the live site, each read from what was on the screen, found: thirteen that showed nothing (an agenda, an email, a thank you note,
// a bio, a meal plan, a study schedule, a speech, an expense table, a work schedule, "show me my lists", "what should I pack for Kenya", "write down milk, eggs and flour", directions with no location), and three empty checklists named after the trip.
// The cause was the same each time: the voice model reworded the request into a tool of its own, or answered aloud, and the page never took it. The typed route answers every one of them on the screen.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const lines = app.split("\n");
const from = lines.findIndex(line => line.startsWith("const KYRO_OPEN_LEAD = "));
const to = lines.findIndex(line => line.startsWith("const KYRO_LIST_NOT = "));
assert.ok(from > 0 && to > from, "the claim patterns are in app.js");
const context = {};
vm.runInNewContext(`${lines.slice(from, to + 1).filter(line => /^const (KYRO_OPEN_LEAD|KYRO_DOCUMENT_REQUEST|KYRO_DOCUMENT_NOT|KYRO_LIST_REQUEST|KYRO_LIST_NOT) /.test(line)).join("\n")}
this.documentClaim = said => KYRO_DOCUMENT_REQUEST.test(said) && !KYRO_DOCUMENT_NOT.test(said);
this.listClaim = said => KYRO_LIST_REQUEST.test(said) && !KYRO_LIST_NOT.test(said);`, context);
const { documentClaim, listClaim } = context;

test("the spoken document claim takes agendas, emails, notes, a bio, a speech, a meal plan, schedules and tables, as it takes letters; sending, notes to self, résumés and lists are left to their own routes", () => {
  for (const say of ["Make a meeting agenda for the church board.", "Draft an email to my son's teacher about a meeting.", "Write a thank you note to my case manager.", "Write a short bio for my website.", "Make me a weekly meal plan.",
    "Make a study schedule for my exam.", "Write a short speech for my daughter's graduation.", "Make a table of my monthly expenses: rent 500, food 200.", "Make me a schedule for my work week.", "Write a letter to my landlord asking for a repair.",
    "Write an apology note to my neighbor.", "Can you write me a job description for a cashier?", "Kyro, make a lesson plan about fractions."]) assert.equal(documentClaim(say), true, say);
  for (const say of ["Write an email to John and send it.", "Make a note that I paid the rent.", "Write my resume.", "Make a shopping list with milk and eggs.", "Create a checklist for opening a food truck.", "Remind me to buy bread tomorrow.",
    "How do I write a letter to a judge?", "What is a meal plan?", "Play some music.", "Set the table for dinner."]) assert.equal(documentClaim(say), false, say);
});

test("the spoken list claim takes making a list, showing my lists and 'what should I pack', and leaves how-to questions and walkthroughs alone", () => {
  for (const say of ["Make a shopping list with milk, eggs and bread.", "Make me a packing list for a week in Tokyo.", "Create a checklist for opening a food truck.", "Start a list of things to bring to my job interview.", "Show me my lists.",
    "What should I pack for Kenya?", "What should I bring to the clinic?", "Kyro, make a to-do list with call the clinic and pay the bill.", "Could you make me a travel checklist for Kenya?"]) assert.equal(listClaim(say), true, say);
  for (const say of ["How do I make a list?", "Walk me through using the shopping list.", "Show me how to make a checklist.", "What is a checklist?", "What's on my shopping list?", "Add eggs to my shopping list.", "Play some music.", "Write a letter to my landlord."]) assert.equal(listClaim(say), false, say);
});

test("both claims are in the page's spoken-request function, one after the other, and run the typed route", () => {
  assert.match(app, /if \(!options\.typed && KYRO_DOCUMENT_REQUEST\.test\(said\) && !KYRO_DOCUMENT_NOT\.test\(said\)\) \{\s+kyroTakeOverTurn\(\);\s+void handleNexusUnifiedBrainRuntimeCommand\(said, \{ source: "typed", kyroDirect: true \}\);\s+return true;\s+\}\s+if \(!options\.typed && KYRO_LIST_REQUEST\.test\(said\) && !KYRO_LIST_NOT\.test\(said\)\) \{\s+kyroTakeOverTurn\(\);\s+void handleNexusUnifiedBrainRuntimeCommand\(said, \{ source: "typed", kyroDirect: true \}\);\s+return true;\s+\}/);
});

test("a list 'for' something is named by it only when there are items for it; with nothing on it the person is asked what goes on it, not given an empty list named after the trip", () => {
  const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "lists.create" }] };
  for (const say of ["Make a packing list for a week in Tokyo.", "Create a checklist for opening a food truck.", "Make me a travel checklist for Kenya.", "Make me a checklist of what to bring to a clinic visit."]) {
    const plan = completeListsPlan(say, catalog);
    assert.deepEqual(plan.steps, [], say); assert.match(plan.clarification, /what goes on it/, say);
  }
  const market = completeListsPlan("Make a list for the market trip with maize and beans", catalog).steps[0].input;
  assert.equal(market.title, "the market trip"); assert.deepEqual(market.items, ["maize", "beans"]);
  const called = completeListsPlan("Create a checklist called planting day with seeds and water", catalog).steps[0].input;
  assert.equal(called.title, "planting day"); assert.deepEqual(called.items, ["seeds", "water"]);
  const named = completeListsPlan("Create a checklist called Trip to Kenya", catalog).steps[0].input;
  assert.equal(named.title, "Trip to Kenya"); assert.deepEqual(named.items, []);
});

test("'make a study schedule for my exam' is a schedule to write, so it reaches the planner's own writing; a lesson request is still a lesson", async () => {
  const tools = [{ tool_id: "documents.create", domain: "documents", description: "", risk_tier: "low", confirmation_required: false }, { tool_id: "knowledge.search", domain: "knowledge", description: "", risk_tier: "low", confirmation_required: false }];
  const planner = () => new OpenEndedPlanner({ model: { plan: async () => { throw new Error("MODEL_REACHED"); }, respond: async () => null }, tools: { list: async () => tools }, applications: { list: () => defaultApplicationManifests() }, memory: Object.assign(fakeMemory(), { search: async () => [] }) });
  const ask = text => planner().plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Chicago" } });
  await assert.rejects(ask("Make a study schedule for my exam."), /MODEL_REACHED/);
  await assert.rejects(ask("Make a work timetable for my study group."), /MODEL_REACHED/);
  const lesson = await ask("Give my student a lesson on fractions.");
  assert.equal(lesson.application, "learning");
});

test("when the page cannot see where the person is, it is shown on a card as well as said, with what to do instead", () => {
  assert.match(app, /if \(\/\^\(\?:I can't see your location\|I couldn't get your location\|I couldn't work out where you are\|Siwezi kuona eneo\)\/i\.test\(String\(reply\)\)\) \{[\s\S]{0,400}directions from Main Street to the pharmacy[\s\S]{0,200}kyroShowResultScreen\("typed", text, \{ ok: true, status: "completed", response: String\(reply\) \+ more \}\)/);
});
