"use strict";
const fs = require("node:fs");
const vm = require("node:vm");
const test = require("node:test");
const assert = require("node:assert/strict");

const app = fs.readFileSync(require("node:path").join(__dirname, "..", "..", "server.js"), "utf8");
const start = app.indexOf("function nexusOpenAiNativeToolChoiceHint(");
const end = app.indexOf("function normalizeOpenAiFunctionArguments(", start);
const source = app.slice(start, end);

const box = {};
vm.createContext(box);
vm.runInContext(source, box);
const toolHint = box.nexusOpenAiNativeToolChoiceHint;

test("bare 'today'/'now'/'latest' no longer hijacks calendar/reminder/email requests -- ordering matters in this first-match-wins chain", () => {
  assert.equal(toolHint("Can you check my calendar for today?"), "nexus_calendar");
  assert.equal(toolHint("Cancel my meeting now"), "nexus_calendar");
  assert.equal(toolHint("Remind me now to email the buyer"), "nexus_automation_reminder");
  assert.equal(toolHint("Send me the latest invoice by email"), "nexus_email");
});

test("nexus_receipts is reachable -- it previously had no matching branch at all", () => {
  assert.equal(toolHint("Show me my receipts"), "nexus_receipts");
  assert.equal(toolHint("What's my audit history?"), "nexus_receipts");
});

test("a genuine live-knowledge question is unaffected by the reordering", () => {
  assert.equal(toolHint("What is the current price of maize in Nairobi?"), "nexus_live_knowledge");
  assert.equal(toolHint("Can you cite your sources for that?"), "nexus_live_knowledge");
});
