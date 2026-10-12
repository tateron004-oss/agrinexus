"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// The browser's voice session has eleven tools. Its door for everything else is the catch-all tool (nexus_everyday_records). A request the planner cannot answer by itself is handed, in the server, to the tool
// that really does it, so the person does not hear "I couldn't do that one just now" for a checklist, a PDF, the offline queue, a receipt, a translation or a flyer.

const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

function load() {
  const slice = (from, to) => { const start = server.indexOf(from); assert.ok(start >= 0, from); return server.slice(start, server.indexOf(to, start)); };
  const source = [
    slice("const NEXUS_DELEGATED_TOOLS = ", "function nexusOpenAiNativeToolChoiceHint("),
    slice("function nexusOpenAiNativeToolChoiceHint(", "function normalizeOpenAiFunctionArguments(")
  ].join("\n");
  const sandbox = { spokenRequests: { isBodyTemperatureReport: () => false }, parseNearbyPlacesRequest: () => null };
  vm.createContext(sandbox);
  vm.runInContext(`${source}\nthis.run = nexusDelegatedToolFor;`, sandbox);
  return sandbox.run;
}

test("a checklist, saving or exporting, the offline queue, receipts, a translation, a flyer and a service check go to the tool that does them", () => {
  const run = load();
  const expected = {
    "Create a checklist called Market Day with items seeds, sacks, scale": "nexus_lists",
    "Make a to-do list for Monday": "nexus_lists",
    "Export my notes as a PDF": "nexus_document_export",
    "Save this as a document": "nexus_document_export",
    "Turn my farm log into a spreadsheet": "nexus_document_export",
    "Queue this for when I am offline": "nexus_automation_reminder",
    "Sync my offline notes": "nexus_automation_reminder",
    "Show my last receipt": "nexus_receipts",
    "Show my audit history": "nexus_receipts",
    "Say good morning in Kiswahili": "nexus_translation",
    "Translate thank you to French": "nexus_translation",
    "How do you say water in Swahili": "nexus_translation",
    "Create a flyer for my bakery": "nexus_business_assistant",
    "Write a newsletter for my customers": "nexus_business_assistant",
    "Make an invoice for Amina Traders": "nexus_business_assistant",
    "Is Spotify connected": "nexus_provider_readiness",
    "Are text messages switched on": "nexus_provider_readiness"
  };
  for (const [text, tool] of Object.entries(expected)) assert.equal(run(text), tool, text);
});

test("everything else is left where it was: reminders, notes, weather, clinics, jobs, chat, uploads, 'status'", () => {
  const run = load();
  for (const text of [
    "Remind me to call Amina tomorrow at 5pm", "Show my reminders", "Take a note: buy seeds", "Add milk to my shopping list", "What is the weather in Nairobi", "Find a clinic near me",
    "Find jobs near me", "Hello Kyro", "What is the status of my order", "What does this document say", "Describe my uploaded file", "What time is it", "Tell me about drip irrigation", "I want to sell 50 bags of maize"
  ]) assert.equal(run(text), "", text);
});

test("it is applied only to the catch-all tool, only after the planner had its turn, and never twice", () => {
  assert.match(server, /if \(toolName === "nexus_general_conversation" && context\.deterministicOnly !== true && !context\.delegated\) \{\s*const delegate = nexusDelegatedToolFor\(command\);\s*if \(delegate\) \{ toolName = delegate; common\.toolName = delegate; \}\s*\}/);
  const at = server.indexOf("const delegate = nexusDelegatedToolFor(command);");
  assert.ok(server.indexOf("const planned = plannerUser ? await deterministicVoiceAnswer(", server.indexOf("PLANNER_BRIDGE_VOICE_TOOLS.has(toolName)")) < at, "after the planner's no-model answers");
  assert.ok(at < server.indexOf("if (context.deterministicOnly === true) {", at), "before the model-dependent tail");
});
