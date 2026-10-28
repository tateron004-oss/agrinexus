"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { scheduleRequest, scheduleTemplate } = require("../../nexus/knowledge/schedule-templates.js");
const { handoutRequest, handoutTemplate } = require("../../nexus/knowledge/handout-templates.js");
const { fakeMemory } = require("./farmwork-fake.js");

// Left over after the sweep of spoken requests (27 October 2026): a weekly meal plan, a study schedule and a work schedule came back as a document on one try and as a question on the next; a promotional email from a person with no
// business workspace went to the AI model with only a hint; and the page's claim for a spoken reminder knew English only, so "Nikumbushe kesho saa tatu asubuhi kunywa dawa" was left to the voice model and showed nothing.
const catalogTools = ["business.manage", "business.query", "documents.create", "lists.create"].map(tool_id => ({ tool_id, domain: tool_id.split(".")[0], description: "", risk_tier: "low", confirmation_required: false }));
function planner({ workspaces = 0, seen = [] } = {}) {
  return new OpenEndedPlanner({
    model: { plan: async request => { seen.push(request); throw new Error("MODEL_REACHED"); }, respond: async () => null },
    businessWorkspaces: { count: async () => workspaces },
    tools: { list: async () => catalogTools },
    applications: { list: () => defaultApplicationManifests() },
    memory: Object.assign(fakeMemory(), { search: async () => [] })
  });
}
const ask = (instance, text) => instance.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Chicago" } });

test("a meal plan, a study schedule and a work schedule are read from what was said", () => {
  assert.deepEqual({ ...scheduleRequest("Make me a weekly meal plan.") }, { kind: "meal", detail: "" });
  assert.deepEqual({ ...scheduleRequest("Make a meal plan for a family of four") }, { kind: "meal", detail: "a family of four" });
  assert.deepEqual({ ...scheduleRequest("Make a study schedule for my exam.") }, { kind: "study", detail: "my exam" });
  assert.deepEqual({ ...scheduleRequest("Create a study plan for my math exam as a PDF") }, { kind: "study", detail: "my math exam" });
  assert.deepEqual({ ...scheduleRequest("Make me a schedule for my work week.") }, { kind: "work", detail: "" });
  assert.deepEqual({ ...scheduleRequest("Kyro, can you make me a work schedule?") }, { kind: "work", detail: "" });
  for (const say of ["How do I make a meal plan?", "Make a list of meals", "Make a schedule for the church volunteers", "What is a study schedule?", "Show my schedule", "Write a letter to my boss about my work schedule"]) assert.equal(scheduleRequest(say), null, say);
});

test("each layout has one line per day, a [bracket] for what was not said, the person's own words where they were, and nothing invented", () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const meal = scheduleTemplate({ kind: "meal", detail: "" });
  assert.equal(meal.title, "Weekly Meal Plan");
  for (const day of days) assert.match(meal.content, new RegExp(`${day}\\nBreakfast: \\[meal\\]\\nLunch: \\[meal\\]\\nDinner: \\[meal\\]`));
  assert.match(meal.content, /For: \[how many people\]/);
  assert.match(scheduleTemplate({ kind: "meal", detail: "a family of four" }).content, /For: a family of four/);
  const study = scheduleTemplate({ kind: "study", detail: "my exam" });
  assert.equal(study.title, "Study Schedule");
  assert.match(study.content, /Studying for: my exam\nExam date: \[date\]/);
  for (const day of days) assert.match(study.content, new RegExp(`${day}: \\[subject or topic\\], \\[start time\\] to \\[end time\\]`));
  const work = scheduleTemplate({ kind: "work", detail: "" });
  assert.equal(work.title, "Work Schedule");
  for (const day of days) assert.match(work.content, new RegExp(`${day}: \\[start time\\] to \\[end time\\], or OFF`));
  for (const made of [meal, study, work]) {
    assert.match(made.content, /Made by Kyro from what you said\. Fill in each \[bracket\]/);
    assert.doesNotMatch(made.content, /for the user\b|user's details|placeholders for|keep it (?:practical|concise|friendly)/i);
  }
});

test("the planner saves each of the three as a document with no model call, in the file type asked for, and asks nothing", async () => {
  const seen = [];
  for (const [say, title, format] of [["Make me a weekly meal plan.", "Weekly Meal Plan", "docx"], ["Make a study schedule for my exam.", "Study Schedule", "docx"], ["Make me a schedule for my work week.", "Work Schedule", "docx"], ["Make a meal plan as a PDF", "Weekly Meal Plan", "pdf"]]) {
    for (const workspaces of [0, 1]) {
      const plan = await ask(planner({ workspaces, seen }), say);
      assert.equal(plan.application, "documents", say);
      assert.equal(plan.clarification, null, say);
      assert.equal(plan.steps.length, 1, say);
      assert.equal(plan.steps[0].toolId, "documents.create", say);
      assert.equal(plan.steps[0].input.title, title, say);
      assert.equal(plan.steps[0].input.format, format, say);
      assert.match(plan.steps[0].input.content, /\[/, say);
    }
  }
  assert.equal(seen.length, 0);
  await assert.rejects(ask(planner({ seen }), "Make a schedule for the church volunteers"), /MODEL_REACHED/);
});

test("a promotional email from a person with no business workspace is a saved document with blanks, made with no model call; with a workspace it is still the workspace's own marketing draft", async () => {
  assert.deepEqual({ ...handoutRequest("Create a promotional email for my shop.") }, { kind: "email", subject: "shop", when: "" });
  assert.deepEqual({ ...handoutRequest("Write a marketing email for my bake sale on Saturday.") }, { kind: "email", subject: "bake sale", when: "Saturday" });
  assert.equal(handoutRequest("Draft an email to my son's teacher"), null);
  const made = handoutTemplate(handoutRequest("Write a marketing email for my bake sale on Saturday."));
  assert.equal(made.title, "Bake Sale Promotional Email");
  assert.match(made.content, /^Subject: \[a short, clear subject line\]\n\nHello \[name\],\n\n\[what you are offering at the bake sale, and why they will want it\]\n\nWhen: Saturday\nWhere: /);
  assert.match(made.content, /Thank you,\n\[your name\]/);
  const seen = [];
  const plan = await ask(planner({ workspaces: 0, seen }), "Create a promotional email for my shop.");
  assert.equal(seen.length, 0);
  assert.equal(plan.application, "documents");
  assert.equal(plan.steps[0].input.title, "Shop Promotional Email");
  assert.equal((await ask(planner({ workspaces: 1 }), "Create a promotional email for my shop.")).application, "business");
});

const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const lines = app.split("\n");
const from = lines.findIndex(line => line.startsWith("const KYRO_OPEN_LEAD = "));
const to = lines.findIndex(line => line.startsWith("const KYRO_NOTE_NOT = "));
const context = {};
vm.runInNewContext(`${lines.slice(from, to + 1).filter(line => /^const (KYRO_OPEN_LEAD|KYRO_NOTE_REQUEST|KYRO_REMINDER_REQUEST|KYRO_NOTE_NOT) /.test(line)).join("\n")}
this.noteClaim = said => (KYRO_NOTE_REQUEST.test(said) || KYRO_REMINDER_REQUEST.test(said)) && !KYRO_NOTE_NOT.test(said);`, context);

test("the page also takes a reminder said in Kiswahili, and still leaves other sentences alone", () => {
  for (const say of ["Nikumbushe kesho saa tatu asubuhi kunywa dawa.", "Tafadhali nikumbushe kumpigia Amina simu", "Niwekee kikumbusho cha kupiga simu", "Kyro, nikumbushe baada ya dakika ishirini kunywa dawa", "Remind me to buy bread tomorrow."]) assert.equal(context.noteClaim(say), true, say);
  for (const say of ["Nikumbusha", "Nini kinaendelea?", "Habari yako", "What did I write down?", "Remind me what I said", "Play some music."]) assert.equal(context.noteClaim(say), false, say);
});
