"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

// Found by running the real server and calling each of the ten tools the orb really registers with "sold 3 sacks of maize 4500", "add milk to my shopping list", "my cow gave 18 litres",
// "John owes me 800", a note, a contact: none of them saved it (the model's nearest tool was a marketplace lookup, a weather lookup or an "Agriculture Help opened" line), because the
// browser's voice session had no tool for saving anything everyday. The catch-all that does (nexus_general_conversation) was not registered there, and a QA rule keeps it out of the browser's function tools, so the orb gets it under the name nexus_everyday_records. These tests pin the fixes.
const root = path.join(__dirname, "..", "..");
const read = (...parts) => fs.readFileSync(path.join(root, ...parts), "utf8");
const server = read("server.js");
const agentSource = read("public", "nexus-openai-realtime-agent.js");
const bundle = read("public", "vendor", "nexus-openai-realtime-agent.bundle.mjs");

const registered = source => [...source.matchAll(/^\s*\["(nexus_[a-z_]+)", "/gm)].map(match => match[1]);

test("the orb registers the everyday-records tool, in the source and in the committed bundle, and never exposes plain conversation as a function tool", () => {
  assert.ok(registered(agentSource).includes("nexus_everyday_records"), "public/nexus-openai-realtime-agent.js must register nexus_everyday_records");
  assert.ok(registered(bundle).includes("nexus_everyday_records"), "the committed bundle must register it too (rebuild with npm run build:nexus-openai-realtime-agent)");
  assert.ok(!registered(agentSource).includes("nexus_general_conversation") && !registered(bundle).includes("nexus_general_conversation"), "ordinary conversation is answered by the model directly, not through a function tool");
  assert.deepEqual(registered(bundle).sort(), registered(agentSource).sort(), "the bundle and its source must register the same tools");
});

test("every tool the orb registers is a real tool on the server", () => {
  const serverTools = new Set([...server.matchAll(/tool\("(nexus_[a-z_]+)", "/g)].map(match => match[1]));
  for (const name of registered(agentSource)) assert.ok(serverTools.has(name), `${name} is registered in the browser but the server has no such tool`);
});

test("the voice instructions tell the model what to do when it lacks a tool they name", () => {
  const start = server.indexOf("function openAiRealtimeInstructions(");
  const body = server.slice(start, server.indexOf("\nfunction ", start + 10));
  assert.match(body, /tool list in this session may be shorter/);
  assert.match(body, /call nexus_everyday_records with their complete words/);
  for (const phrase of ["note", "shopping list", "sale", "debt", "farm log", "contact", "reminder", "undo"]) assert.ok(body.includes(phrase), `the steering sentence must mention ${phrase}`);
  assert.match(body, /Never say something was saved unless the tool says so/);
});

test("a tool the instructions name but the orb lacks is covered by that fallback sentence", () => {
  const start = server.indexOf("function openAiRealtimeInstructions(");
  const body = server.slice(start, server.indexOf("\nfunction ", start + 10));
  const named = new Set([...body.matchAll(/\b(nexus_[a-z_]+)\b/g)].map(match => match[1]));
  const lacking = [...named].filter(name => !registered(agentSource).includes(name) && name !== "nexus_capability_router");
  const fallbackSentence = body.slice(body.indexOf("tool list in this session may be shorter"), body.indexOf("nexus_everyday_records with their complete words"));
  for (const name of lacking.filter(name => ["nexus_lists", "nexus_automation_reminder", "nexus_business_assistant", "nexus_document_export", "nexus_memory"].includes(name))) {
    assert.ok(fallbackSentence.includes(name), `${name} is named in the instructions, not registered in the orb, and not covered by the fallback sentence`);
  }
});

test("the planner's no-model answers are tried first for the catch-all and the two nearest tools, and the check is left to the tool's own logic otherwise", () => {
  assert.match(server, /const PLANNER_BRIDGE_VOICE_TOOLS = new Set\(\["nexus_general_conversation", "nexus_agriculture", "nexus_workflow"\]\)/);
  assert.match(server, /PLANNER_BRIDGE_VOICE_TOOLS\.has\(toolName\) : toolName === "nexus_general_conversation"\) && effectiveMentalHealthSignal\.state !== "medical_emergency"/);
  // the marketplace, communications, weather, maps, knowledge, health and learning tools keep their own routes: a listing, a message or a lookup must not be answered by a bookkeeping door
  const set = server.match(/const PLANNER_BRIDGE_VOICE_TOOLS = new Set\(\[([^\]]*)\]\)/)[1];
  for (const kept of ["nexus_marketplace_logistics", "nexus_communications", "nexus_weather", "nexus_maps_route", "nexus_live_knowledge", "nexus_health_preparation", "nexus_workforce_learning"]) {
    assert.ok(!set.includes(kept), `${kept} must not go through the planner bridge`);
  }
});

test("the server dispatcher treats the everyday-records tool exactly as the catch-all conversation tool, and the phone line's tool set includes it", () => {
  const start = server.indexOf("async function executeNexusOpenAiNativeTool");
  const head = server.slice(start, start + 1500);
  assert.ok(head.includes('if (toolName === "nexus_everyday_records") toolName = "nexus_general_conversation";'));
  assert.ok(server.includes('tool("nexus_everyday_records", "Save or read the person\'s everyday records'));
  // the phone line registers every native tool except plain conversation, so it gets the new one too
  assert.ok(server.includes('nexusOpenAiNativeToolSchemas().filter(tool => tool.name !== "nexus_general_conversation")'));
});
