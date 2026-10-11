"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { readDeskRequest } = require("../../nexus/community/desk.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

// Found by running every app's prompts through the orb on 10 October 2026.

const NOW = new Date("2026-09-20T05:00:00Z");
function farmer(store = fakeFarmStore()) {
  const memory = fakeMemory();
  const say = async text => farmWorkTurn({ text, store, tenantId: "t1", userId: "u1", now: NOW, timeZone: "Africa/Nairobi", memory, notifications: null, nameOf: async () => "Amina Wanjiru" });
  return { say, store, memory };
}
function planner({ store, documents } = {}) {
  const model = { plan: async () => { throw new Error("the AI model must not be asked"); } };
  return new OpenEndedPlanner({ model, tools: { list: async () => [{ tool_id: "documents.create", domain: "documents", description: "", risk_tier: "low", confirmation_required: false }] },
    applications: { list: () => [{ applicationId: "documents", capabilities: ["documents.create"], riskTiers: ["low"] }] },
    memory: Object.assign(fakeMemory(), { search: async () => [] }), farmWork: store ? { store, notifications: null, nameOf: async () => "Amina Wanjiru" } : undefined, documents });
}
const ask = (p, text) => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "Africa/Nairobi", deterministicOnly: true } });

test("'status of my reports' asks the community desk for the person's own reports, and reporting a problem is unchanged", () => {
  for (const text of ["status of my reports", "any updates on my reports", "update on my reports", "list my reports", "what is the status of my reports", "show my reports"]) assert.deepEqual(readDeskRequest(text), { action: "my-reports" }, text);
  assert.equal(readDeskRequest("Report the burst pipe on Moi road").action, "report");
});

test("'print my monthly report' asks which report to print, and a person with no farm records is left alone", async () => {
  const who = farmer();
  assert.equal(await who.say("Print my monthly report"), null, "no farm records yet");
  await who.say("Sold 200 kg of maize to Otieno at 45 per kg");
  const reply = await who.say("Print my monthly report");
  assert.match(reply, /^Which report\? I can print your farm summary, expense report/);
  assert.equal(typeof (await who.say("Print my income report")).report.content, "string", "a named report is still made");
});

test("spoken: 'print my farm summary' is read out and says how to get the file, instead of failing", async () => {
  const who = farmer(); await who.say("Spent 5000 on fertilizer for North Plot"); await who.say("Sold 200 kg of maize to Otieno at 45 per kg");
  const answer = await ask(planner({ store: who.store }), "Print my farm summary");
  assert.deepEqual(answer.steps, []); assert.match(answer.response, /Net|income|Income/i); assert.match(answer.response, /type "Print my farm summary as a PDF" on the main screen/);
  assert.ok(answer.response.length < 1000, "short enough to be spoken");
});

test("'show my documents' lists the person's saved documents, newest first, or says there are none", async () => {
  const some = planner({ documents: { list: async () => [{ title: "Farm Plan" }, { title: "Maize Sales" }] } });
  assert.match((await ask(some, "Show my documents")).response, /Your saved documents, newest first: 1, Farm Plan; 2, Maize Sales\./);
  assert.match((await ask(some, "What documents do I have?")).response, /Farm Plan/);
  assert.match((await ask(planner({ documents: { list: async () => [] } }), "list my documents")).response, /no saved documents yet/);
  const sentence = await ask(some, "Show my documents about maize in a table").catch(() => null);
  assert.doesNotMatch(String(sentence?.response || ""), /Your saved documents, newest first/);
});

test("the platform no longer reads a demo crop, a demo lot or a government briefing to an ordinary person", () => {
  const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  assert.doesNotMatch(server, /For \$\{product\?\.name \|\| "the selected crop"\}, I can check crop risk/, "the farmer advisor names no demo crop");
  assert.match(server, /productName: "your shipment"/, "a route packet names no demo lot or other account's order");
  assert.doesNotMatch(server, /lower\.includes\("presentation"\) \|\| lower\.includes\("report"\)/, "a plain 'report' is not a government briefing");
  assert.match(server, /government\|ministry\|pilot\|donor\|investor\)\\s\+reports\?/, "a government or ministry report still is");
  assert.match(server, /\|and\|then\|saying\|say\|tell\|ask\)\\b\.\*\$\/i, ""\)/, "'call my brother and say hi' keeps only 'brother'");
});

test("spoken: 'create a document ... and save it' says how to save it from the keyboard instead of making a plan", async () => {
  const answer = await ask(planner({ documents: { list: async () => [] } }), "Create a document called Farm Plan that says I will plant maize in March, and save it");
  assert.deepEqual(answer.steps, []);
  assert.match(answer.response, /I can only save one from the keyboard\. Type "Create a document called Farm Plan that says I will plant maize in March, and save it" in the box on the main screen/);
});
