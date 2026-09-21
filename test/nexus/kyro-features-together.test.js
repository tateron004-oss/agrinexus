"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// Every conversational feature (profile facts, contacts, lists/notes/calendar, farm log, weather alerts, feedback, resume) shares one
// planner. Each was built and tested alone; this proves they do not swallow each other's phrases, and that ordinary questions still
// reach the model.
function fullMemory() {
  const rows = []; let n = 0;
  const live = (userId, purpose) => rows.filter(row => row.userId === userId && row.purpose === purpose && !row.deleted);
  const add = (purpose, userId, content) => { rows.unshift({ memory_id: `m${++n}`, userId, purpose, content, deleted: false }); return { memoryId: `m${n}` }; };
  const list = (userId, purpose) => live(userId, purpose).map(row => ({ memory_id: row.memory_id, content: row.content }));
  const remove = (userId, memoryId) => { const row = rows.find(item => item.memory_id === memoryId && item.userId === userId); if (row) row.deleted = true; return Boolean(row); };
  return {
    async saveProfileFact({ userId, kind, value }) { const replaced = live(userId, "profile").filter(row => row.content.kind === kind).map(row => { row.deleted = true; return row.content; }); add("profile", userId, { kind, value }); return { fact: { kind, value }, replaced }; },
    async profile({ userId }) { return list(userId, "profile"); },
    async forgetProfile({ userId, kind }) { const cur = live(userId, "profile"); const chosen = kind === "all" ? cur : kind === "last" ? cur.slice(0, 1) : cur.filter(row => row.content.kind === kind); chosen.forEach(row => { row.deleted = true; }); return chosen.map(row => row.content); },
    async search() { return []; }, async recent() { return []; },
    async saveContact({ userId, name, phone = "", email = "" }) { const ex = live(userId, "contacts").find(row => row.content.name.toLowerCase() === name.toLowerCase()); if (ex) ex.deleted = true; const content = { kind: "contact", name, phone: phone || ex?.content.phone || "", email: email || ex?.content.email || "" }; add("contacts", userId, content); return { contact: content, updated: Boolean(ex) }; },
    async listContacts({ userId }) { return list(userId, "contacts"); },
    async forgetContact({ userId, name }) { const f = live(userId, "contacts").find(row => row.content.name.toLowerCase() === name.toLowerCase()); if (!f) return null; f.deleted = true; return f.content; },
    async addPersonalItem({ userId, content }) { return add("personal", userId, content); }, async listPersonalItems({ userId, kind = null }) { return list(userId, "personal").filter(row => !kind || row.content.kind === kind); },
    async updatePersonalItem({ userId, memoryId, content }) { const row = rows.find(item => item.memory_id === memoryId && item.userId === userId); if (row) row.content = content; return Boolean(row); }, async removePersonalItem({ userId, memoryId }) { return remove(userId, memoryId); },
    async addFarmEntry({ userId, content }) { return add("farm", userId, content); }, async listFarmEntries({ userId }) { return list(userId, "farm"); }, async removeFarmEntry({ userId, memoryId }) { return remove(userId, memoryId); },
    async addFeedback({ userId, content }) { return add("feedback", userId, content); }, async listFeedback({ userId }) { return list(userId, "feedback"); }, async updateFeedback() { return true; }
  };
}

test("each feature answers its own phrases, in one planner, and everything else still reaches the model", async () => {
  const modelCalls = [];
  const alerts = { async enable() { return { timeZone: "Africa/Nairobi", replaced: false, location: "Kisumu", hasPushDevice: true }; }, async disable() { return 1; }, async status() { return null; } };
  const catalog = { tools: [{ tool_id: "communications.send", availability: "available" }, { tool_id: "resume.create", availability: "available" }, { tool_id: "knowledge.search", availability: "available" }],
    applications: [{ applicationId: "communications", capabilities: [], riskTiers: [] }, { applicationId: "workforce", capabilities: [], riskTiers: [] }, { applicationId: "live-knowledge", capabilities: [], riskTiers: [] }] };
  const planner = new OpenEndedPlanner({ memory: fullMemory(), alerts,
    tools: { list: async () => catalog.tools }, applications: { list: () => catalog.applications },
    model: { plan: async request => { modelCalls.push(request.command?.text || request.text); return { goal: "g", application: "live-knowledge", riskTier: "low", clarification: null, steps: [{ id: "s", title: "t", toolId: "knowledge.search", input: { query: "q" } }] }; }, respond: async () => null } });
  const ask = async (text, history = []) => planner.plan({ command: { text, channel: "typed", locale: "en", tenantId: "t1", actorId: "u1", conversationId: "cnv_1" }, context: { can: () => true, roles: [], timeZone: "Africa/Nairobi" }, conversationHistory: history });
  const cases = [
    ["I live in Kisumu", /remember that you are in Kisumu/], ["My name is Amina Wanjiru", /your name is Amina Wanjiru/],
    ["Save Otieno's number as +254712345678", /^Saved Otieno: \+254712345678/], ["Who are my contacts?", /^Your contacts: Otieno/],
    ["Add buy seed to my to-do list", /^Added buy seed to your to-do list/], ["Note: the pump needs a new seal", /^Noted: pump needs a new seal/],
    ["Add vet visit to my calendar tomorrow at 10am", /^Added to your calendar/], ["What is on my calendar tomorrow?", /vet visit/],
    ["Log 12 mm of rain", /^Logged 12 mm of rain for today/], ["The tank is at 40 percent", /^Logged tank at 40%/], ["I harvested 200 kg of maize", /^Logged 200 kg of maize/],
    ["Warn me if the tank drops below 20 percent", /^I'll warn you when you log the tank below 20%/], ["Warn me about storms and heavy rain", /^Done\. Weather alerts are on\./],
    ["What are my notes?", /pump needs a new seal/], ["What is on my to-do list?", /buy seed/], ["How much rain did I get this month?", /^Rain this month: 12 mm/]
  ];
  for (const [text, expected] of cases) {
    const plan = await ask(text);
    assert.equal(plan.application, "conversation", `${text} -> ${plan.application}`);
    assert.deepEqual(plan.steps, [], text); assert.match(plan.response, expected, text);
  }
  assert.equal(modelCalls.length, 0, "none of those needed the model");

  const text = await ask("Text Otieno saying I am on my way");
  assert.equal(text.steps[0].toolId, "communications.send");
  assert.deepEqual(text.steps[0].input, { channel: "sms", to: "+254712345678", message: "I am on my way", contactName: "Otieno" });
  assert.match((await ask("Make my resume")).clarification, /What should it say/, "with nothing to put in it, it asks");
  const resume = await ask("Make my resume. Skills: crop planning");
  assert.equal(resume.steps[0].toolId, "resume.create"); assert.equal(resume.steps[0].input.name, "Amina Wanjiru");
  const wrong = await ask("That was wrong", [{ role: "user", content: "How deep do I plant maize?" }, { role: "assistant", content: "About 50 cm." }]);
  assert.match(wrong.response, /sent that answer to the team/);

  // Questions that merely sound close to a feature are not taken by it.
  for (const question of ["How deep should I plant maize?", "What is the spraying schedule for maize?", "How much rain will fall tomorrow?", "Who won the match?", "Call a taxi for me"]) {
    const plan = await ask(question);
    assert.doesNotMatch(String(plan.response || ""), /^(?:Logged|Added|Noted|Saved|Removed|Done.)|your calendar|to-do list|farm log/, question);
  }
  const taxi = await ask("Call a taxi for me");
  assert.ok(!(taxi.steps || []).some(step => step.toolId === "communications.send"), "a request with no saved name is not a call to someone");
  const schedule = await ask("What is the spraying schedule for maize?");
  assert.doesNotMatch(String(schedule.response || ""), /calendar/i);
});
