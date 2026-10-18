"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Found by voice-testing the shipments fix on the live site: the voice tool answered correctly, but the page first ran "What shipments do I have?" and "Track my shipment." through the typed route, where the AI planner asked
// the person for "a town, county or region" to search in. These phrases go to the voice tool that reads the person's own orders, said or typed.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

function load() {
  const start = app.indexOf("const KYRO_VOICE_TOOL_ANSWERS = ");
  const end = app.indexOf("// Asks the voice route (where the lessons");
  assert.ok(start > 0 && end > start, "the shipment routing is in app.js");
  const context = {};
  vm.runInNewContext(`${app.slice(start, end)}\nthis.answers = KYRO_VOICE_TOOL_ANSWERS; this.toolFor = kyroTypedToolFor;`, context);
  return context;
}

test("shipment questions go to the tool that reads the person's own orders, said or typed", () => {
  const { answers, toolFor } = load();
  for (const say of ["What shipments do I have?", "Track my shipment.", "Where is my order?", "Where is my delivery", "Do I have any deliveries?", "Show me my shipments.", "Please track my package", "Which deliveries do I have?", "Check on my order"]) {
    assert.equal(answers.test(say), true, `${say} is answered by the tool`);
    assert.equal(toolFor(say), "nexus_marketplace_logistics", `${say} typed`);
  }
});

test("a request that names both places, or is about something else, is left to its own route", () => {
  const { answers, toolFor } = load();
  for (const say of ["Track my shipment from Nairobi to Nakuru.", "Estimate the delivery time from Stockton to Fresno.", "Create a crop order for 20 bags of maize", "Show me my orders.", "What is the weather in Tokyo?", "Where is my phone", "How long will delivery to Nakuru take"]) {
    assert.equal(answers.test(say), false, `${say} is not taken`);
    assert.equal(toolFor(say), "", `${say} typed`);
  }
  assert.equal(answers.test("Give me a provider summary"), true, "the earlier case still holds");
});

test("the tool-call gate and the typed route both use these", () => {
  assert.match(app, /KYRO_VOICE_TOOL_ANSWERS\.test\(command\)\)\) \|\| nexusPendingBehaviorConfirmation\) \{\s+const governed = await kyroAnswerLikeTyped\(command\);/);
  assert.match(app, /const typedTool = kyroTypedToolFor\(text\);/);
});

// "What are the side effects of ibuprofen?" was answered with "I can't see the specific side-effect list from here, so I don't want to guess" (found by the open-questions voice test). General facts about a medicine are
// now looked up, with their sources; a question about the person's own dose, symptoms, pregnancy or an overdose is not general information.
test("general medicine facts go to the health tool that looks them up, said or typed; a question about the person's own case does not", () => {
  const { answers, toolFor } = load();
  for (const say of ["What are the side effects of ibuprofen?", "What are the common side effects of metformin", "what are the side effects for amoxicillin."]) {
    assert.equal(answers.test(say), true, say);
    assert.equal(toolFor(say), "nexus_health_preparation", say);
  }
  for (const say of ["I am taking ibuprofen, what are the side effects?", "Side effects of the new tax law", "What are my side effects from ibuprofen"]) assert.equal(toolFor(say), "", say);
});

test("on the server, the health tool answers a general medicine question from the live lookup, with sources and a reminder, and never one about the person's own case", () => {
  const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  const at = server.indexOf("const asksMedicineFacts = ");
  assert.ok(at > 0, "the medicine branch is in server.js");
  const branch = server.slice(at, at + 2600);
  assert.match(branch, /medicine\.status === "source-backed"/);
  assert.match(branch, /liveKnowledgeSourcesLine\(medicine\.citations\)/);
  assert.match(branch, /not advice for your own situation: ask a pharmacist or doctor about your own case, and get urgent help for severe symptoms/);
  assert.ok(branch.includes("taking|took|take|dose|doses|pregnant|overdos"), "a question about the person's own case is excluded");
  assert.ok(server.indexOf("const asksMedicineFacts = ") < server.indexOf("const wantsHealthActionConfirmed = ", at), "it is asked before the rules below");
});
