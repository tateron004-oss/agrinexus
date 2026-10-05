"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { readRequest } = require("../../nexus/personal/items.js");
const { extractTime } = require("../../nexus/personal/dates.js");
const { extractProfileStatement } = require("../../nexus/memory/profile-facts.js");

// Plain things people say that were not understood: asking what is on a particular day, giving an event time without am/pm, and saying where
// they live as "near", "from" or "stay in".

const TODAY = "2026-10-05"; // a Monday

test("'What do I have on Monday?' and similar are read as a question about that one day", () => {
  const list = (text, from, label) => assert.deepEqual(readRequest(text, TODAY), { action: "event-list", range: { from, to: from, label } }, text);
  list("what do I have on Friday", "2026-10-09", "Friday 9 October");
  list("What's on Friday?", "2026-10-09", "Friday 9 October");
  list("What do I have on Tuesday?", "2026-10-06", "tomorrow");
  list("Do I have anything next Monday", "2026-10-12", "Monday 12 October");
  list("what do I have on 12 October", "2026-10-12", "Monday 12 October");
  list("what do I have on my calendar on Friday", "2026-10-09", "Friday 9 October");
  assert.equal(readRequest("what do I have tomorrow", TODAY).range.label, "tomorrow", "the days that already worked still do");
  assert.equal(readRequest("what do I have next week", TODAY).range.label, "next week");
});

test("questions that only look like a calendar question are left alone", () => {
  for (const text of ["what do I have in my pocket", "what do I have on my farm", "what do I have to do on Friday to prepare", "what's on the radio", "do I have anything for the market"]) {
    assert.notEqual(readRequest(text, TODAY)?.action, "event-list", text);
  }
});

test("an event time with no am or pm is read as a time, and the title is just the title", () => {
  const add = (text, title, day, time) => assert.deepEqual(readRequest(text, TODAY), { action: "event-add", title, day, time }, text);
  add("Schedule a meeting with the cooperative on Monday at 10", "a meeting with the cooperative", "2026-10-12", "10:00");
  add("Add a meeting on Friday at 3 to my calendar", "a meeting", "2026-10-09", "15:00");
  add("Add vet visit to my calendar on Friday at 10", "vet visit", "2026-10-09", "10:00");
  add("put the market day on my calendar on Saturday at 7am", "market day", "2026-10-10", "07:00");
  assert.equal(extractTime("meeting at 12 on Friday").time, "12:00");
  assert.equal(extractTime("class at 7").time, "07:00");
  assert.equal(extractTime("visit at 4").time, "16:00");
  assert.equal(extractTime("lunch at 12:30 pm").time, "12:30", "an explicit time is untouched");
  for (const text of ["plant at 3 acres", "spray at 5 percent", "sell at 3 shillings", "at 13", "at 0", "meet at the gate"]) assert.equal(extractTime(text), null, text);
});

test("where someone lives is saved however they say it", () => {
  const place = text => extractProfileStatement(text).find(fact => fact.kind === "location")?.value;
  for (const [text, value] of [["I live near Kisumu", "Kisumu"], ["I am from Nakuru", "Nakuru"], ["I'm from Eldoret", "Eldoret"], ["I come from Kitale", "Kitale"], ["I stay in Nyeri", "Nyeri"], ["We live close to Meru", "Meru"], ["I live in Kisumu", "Kisumu"], ["My farm is in Meru", "Meru"]]) assert.equal(place(text), value, text);
  assert.equal(place("I grow maize near Kakamega"), "Kakamega");
});

test("sentences that only look like a place are not saved as one", () => {
  for (const text of ["I stay in bed on Sundays", "I am from the market", "I come from work", "I am in the kitchen", "Where do I live near?", "I live near the river", "I am from a farming family"]) {
    assert.equal(extractProfileStatement(text).some(fact => fact.kind === "location"), false, text);
  }
});
