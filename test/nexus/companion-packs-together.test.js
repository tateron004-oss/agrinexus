"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { createCompanion } = require("../../nexus/companion/index.js");

// The companion core (safety, circle, check-ins, medicines), the wellness log and the community desk all share one planner. Each has its
// own tests; this proves they do not take each other's phrases, and that safety and the person's own log come before general talk.
function plannerWithEverything() {
  const modelCalls = [];
  const notifications = { async enqueue() {} };
  const circle = { async userName() { return "Baba Kamau"; }, async activeMembers() { return []; }, async listFor() { return []; }, async findUserByEmail() { return null; } };
  const medRows = []; let n = 0;
  const medicationStore = {
    async listMedications() { return medRows.filter(row => row.content.kind === "medication").map(row => ({ memoryId: row.memoryId, content: row.content })); },
    async addMedication({ content }) { medRows.push({ memoryId: `m${++n}`, content }); },
    async updateMedication() { return true; }, async removeMedication() { return true; },
    async dosesForDay() { return []; }, async createDose() {}, async updateDose() {}, async getDose() { return null; },
    async listAllActiveMedications() { return []; }, async listPendingDoses() { return []; }
  };
  const companion = createCompanion({ circle, checkinSettings: { get: async () => null, listActive: async () => [], set: async args => ({ ...args, graceHours: 3, replaced: false }), stop: async () => 0 }, checkinState: { get: async () => null, listPending: async () => [] }, medicationStore, notifications, now: () => new Date("2026-09-20T05:00:00Z") });
  const wellRows = []; let w = 0;
  const wellnessStore = { async addEntry({ content }) { wellRows.unshift({ memoryId: `w${++w}`, content }); return {}; }, async listEntries() { return wellRows.map(row => ({ memoryId: row.memoryId, content: row.content })); }, async removeEntry() { return true; } };
  const reports = []; let r = 0;
  const store = { async addReport({ content }) { reports.push({ memoryId: `r${++r}`, userId: "u1", content: { ...content, number: r } }); return r; }, async listReports() { return reports; }, async getReport() { return null; }, async updateReport() { return true; },
    async addAnnouncement() { return "a1"; }, async listAnnouncements() { return []; }, async setPending() {}, async getPending() { return null; }, async clearPending() { return false; }, async pushRecipients() { return []; }, async optOuts() { return []; }, async setOptOut() {} };
  const planner = new OpenEndedPlanner({ companion, wellnessStore, community: { store, notifications, nameOf: async () => "Baba" }, memory: null, tools: { list: async () => [] }, applications: { list: () => [] },
    model: { plan: async request => { modelCalls.push(request.command?.text || request.text); throw new Error("the model was asked"); }, respond: async () => null } });
  const ask = text => planner.plan({ command: { text, channel: "typed", locale: "en", tenantId: "t1", actorId: "u1", conversationId: "c" }, context: { can: () => true, roles: [], timeZone: "Africa/Nairobi" } });
  return { ask, modelCalls };
}

test("every persona feature answers its own phrases in one planner, with no model and no tool", async () => {
  const { ask, modelCalls } = plannerWithEverything();
  const cases = [
    ["I want to die", /I'm really sorry you're feeling this way/], ["This is an emergency", /^I don't have anyone in your circle yet/], ["help", /^I'm here\./],
    ["Add amina@example.com to my circle as my daughter", /^If amina@example\.com has a Kyro account/], ["Who is in my circle?", /^Your circle is empty/],
    ["Check in on me every morning at 8", /^Done\. I'll check in on you every day at 8:00 am/],
    ["Add medication metformin 500mg at 8am and 8pm", /^Done\. I'll remind you to take metformin 500 mg at 8:00 am and 8:00 pm every day\./], ["What medications do I take?", /^Your medicines: metformin 500 mg/],
    ["I slept 7 hours", /^Logged 7 hours of sleep for today/], ["I ran 5 km in 30 minutes", /New personal best for 5 km: 30:00!/], ["My mood is 4 out of 5", /^Logged mood 4 out of 5/], ["My goal is 3 workouts a week", /^Goal set: 3 workouts a week/],
    ["Report: the borehole in ward 3 is broken", /^Thank you\. I've logged report #1/], ["What is the status of my reports?", /^Your reports: #1 open/]
  ];
  for (const [text, expected] of cases) {
    const plan = await ask(text);
    assert.equal(plan.application, "conversation", `${text} -> ${plan.application}`); assert.deepEqual(plan.steps, [], text); assert.match(plan.response, expected, text);
  }
  assert.equal(modelCalls.length, 0, "none of these needed the model");
});

test("phrases that only sound close to a persona feature are not taken by it, and reach the model", async () => {
  const { ask, modelCalls } = plannerWithEverything();
  await ask("Add medication metformin 500mg at 8am");
  const notMine = ["I take the bus every day at 7", "Remind me to take out the trash at 5pm", "I had lunch", "I took a walk", "I ran into a friend", "I slept badly", "Report on maize prices", "How do I help a friend who is suicidal?",
    "What is the spraying schedule for maize?", "What should I do in an emergency?", "Show open reports", "Announce: Water off Thursday", "I'm fine"];
  for (const text of notMine) {
    const before = modelCalls.length;
    await assert.rejects(ask(text), /the model was asked/, `${text} should reach the model`);
    assert.equal(modelCalls.length, before + 1, text);
  }
});

test("the person's own words about themselves stay separate: a low mood logged is not a check-in answer, and a check-in answer is not a mood log", async () => {
  const { ask } = plannerWithEverything();
  assert.match((await ask("My mood is low")).response, /^Logged mood 2 out of 5 for today\./);
  await assert.rejects(ask("Not so good"), /the model was asked/, "with no check-in waiting, this is just talk");
});
