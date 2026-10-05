"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { readRequest } = require("../../nexus/personal/items.js");
const { completeDocumentPlan } = require("../../nexus/brain/planner.js");

// Re-tested on production wording: "make a note of X" saved "of X", "remember that X" was never saved, and a document made by voice held the
// whole spoken request instead of what it should say.

const TODAY = "2026-10-05";
const note = text => { const request = readRequest(text, TODAY); return request?.action === "note-add" ? request.text : request; };

test("'a note of ...' and 'a note saying ...' save the note, not the joining word", () => {
  assert.equal(note("Make a note of the pump needs a new seal"), "pump needs a new seal");
  assert.equal(note("make a note of the new borehole price"), "new borehole price");
  assert.equal(note("Take a note of the invoice number 2231"), "invoice number 2231");
  assert.equal(note("Add a note saying the tank is low"), "tank is low");
  assert.equal(note("Make a note which says the gate is broken"), "gate is broken");
  assert.equal(note("Leave a note that says call the buyer"), "call the buyer");
});

test("the note phrasings that already worked still work", () => {
  assert.equal(note("Make a note that the pump needs a new seal"), "pump needs a new seal");
  assert.equal(note("Make a note: the pump needs a new seal"), "pump needs a new seal");
  assert.equal(note("Make a note to call the buyer"), "call the buyer");
  assert.equal(note("Take a note about the vet visit"), "vet visit");
  assert.equal(note("Note that the gate is broken"), "gate is broken");
  assert.equal(note("Write down the seed price"), "seed price");
  assert.equal(note("Jot down milk is 120 shillings"), "milk is 120 shillings");
  assert.equal(readRequest("make a note", TODAY), null, "no note text: nothing is saved");
});

test("'remember that ...' is kept as a note", () => {
  assert.equal(note("Remember that the pump needs a new seal"), "pump needs a new seal");
  assert.equal(note("Please remember that my mother's birthday is on 12 March"), "my mother's birthday is on 12 March");
  assert.equal(note("Remember: the vet comes on Friday"), "vet comes on Friday");
  assert.equal(note("remember this: call the buyer on Monday"), "call the buyer on Monday");
});

test("things that only look like a note or a memory are left alone", () => {
  for (const text of ["Do you remember that song?", "I remember that day", "remember to buy seed", "Remember me", "What did I note about the pump?"]) {
    const request = readRequest(text, TODAY);
    assert.notEqual(request?.action, "note-add", text);
  }
});

const catalog = { tools: [{ toolId: "documents.create" }], applications: [{ applicationId: "documents" }] };
const input = text => completeDocumentPlan(text, catalog).steps[0].input;

test("a document made by voice holds what it should say, and its title stops before that", () => {
  const made = input("Create a document called Farm Plan that says I will plant maize in March, and save it");
  assert.equal(made.title, "Farm Plan");
  assert.equal(made.content, "I will plant maize in March");
  const colon = input("Create a document titled Market Notes saying: maize is 60 shillings a kilo. Then save it and reopen it.");
  assert.equal(colon.title, "Market Notes");
  assert.equal(colon.content, "maize is 60 shillings a kilo");
  assert.equal(input("Write a report called Rain Log containing 12 mm on Monday and 8 mm on Tuesday, and save it").content, "12 mm on Monday and 8 mm on Tuesday");
  assert.equal(input("Draft a plan called Goat Shed with the text \"build the shed before the rains\" and save it").content, "build the shed before the rains");
});

test("with no body named the whole sentence is kept, exactly as before", () => {
  const plan = completeDocumentPlan("Create and save a farming plan document, then reopen it.", catalog).steps[0].input;
  assert.equal(plan.content, "Create and save a farming plan document, then reopen it.");
  assert.equal(input("Write and save a report titled Nakuru Harvest, then open again.").title, "Nakuru Harvest");
  assert.equal(input("Write and save a report titled Nakuru Harvest, then open again.").content, "Write and save a report titled Nakuru Harvest, then open again.");
  assert.equal(completeDocumentPlan("Tell me about farming plans.", catalog), null);
});
