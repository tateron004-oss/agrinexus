"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const businessVoice = require("../../nexus/business/voice-dispatch.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { fakeMemory } = require("./farmwork-fake.js");

// The four gaps the sweep of 34 spoken requests left (27 October 2026): a flyer with no business workspace, "write down milk, eggs and flour", "make a list of the documents I need to get an ID", and a reminder said aloud.
// Notes and reminders were saved and confirmed aloud, but the page showed nothing. A flyer from a person with no workspace was told to start one. "Make a list of the documents I need" was read as a question about money
// (the business classifier counts "make" as a money word, as in "how much do I make") and answered with the workspace message.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const lines = app.split("\n");
const from = lines.findIndex(line => line.startsWith("const KYRO_OPEN_LEAD = "));
const to = lines.findIndex(line => line.startsWith("const KYRO_NOTE_NOT = "));
assert.ok(from > 0 && to > from, "the claim patterns are in app.js");
const context = {};
vm.runInNewContext(`${lines.slice(from, to + 1).filter(line => /^const (KYRO_OPEN_LEAD|KYRO_DOCUMENT_REQUEST|KYRO_DOCUMENT_NOT|KYRO_NOTE_REQUEST|KYRO_REMINDER_REQUEST|KYRO_NOTE_NOT) /.test(line)).join("\n")}
this.documentClaim = said => KYRO_DOCUMENT_REQUEST.test(said) && !KYRO_DOCUMENT_NOT.test(said);
this.noteClaim = said => (KYRO_NOTE_REQUEST.test(said) || KYRO_REMINDER_REQUEST.test(said)) && !KYRO_NOTE_NOT.test(said);`, context);
const { documentClaim, noteClaim } = context;

test("the page takes a spoken note or reminder, and leaves questions about what was said, and documents, to their own routes", () => {
  for (const say of ["Write down milk, eggs and flour.", "Kyro, write down call the clinic on Monday.", "Make a note that I paid the rent.", "Jot down the bus leaves at six.", "Note that the market is closed Friday.", "Write this down: buy seed.",
    "Remind me to buy bread tomorrow.", "Kyro, remind me at 5 to call Amina.", "Remind me every Monday to check the crops.", "Can you remind me to take my medicine tonight?"]) assert.equal(noteClaim(say), true, say);
  for (const say of ["What did I write down?", "Remind me what I said about the rent.", "How do I make a note?", "What are my notes?", "Write a letter to my landlord.", "Play some music.", "I need a reminder app"]) assert.equal(noteClaim(say), false, say);
});

test("the spoken document claim also takes a flyer, a newsletter, a poster, a brochure, a handout and an invitation", () => {
  for (const say of ["Make me a flyer for my bake sale on Saturday.", "Create a newsletter for the church.", "Make a poster for the clinic day.", "Write an invitation to my daughter's party.", "Draft a handout for the class."]) assert.equal(documentClaim(say), true, say);
  for (const say of ["Make a note that I paid the rent.", "Send the flyer to Amina.", "How do I make a flyer?"]) assert.equal(documentClaim(say), false, say);
});

test("'make a list of ...' is a list to make, not a question about money; 'how much do I make' still is one", () => {
  for (const say of ["Make a list of the documents I need to get an ID.", "Make a list of things to bring to my interview", "Can you make me a list of what I need for the clinic", "Kyro, make a list of the papers I need for school"]) assert.equal(businessVoice.classify(say), null, say);
  for (const say of ["How much do I make this month?", "Make a summary of my expenses", "What did I make on sales this week?"]) assert.equal(businessVoice.classify(say), "financeSummary", say);
});

const catalogTools = ["business.manage", "business.query", "documents.create", "lists.create"].map(tool_id => ({ tool_id, domain: tool_id.split(".")[0], description: "", risk_tier: "low", confirmation_required: false }));
function planner({ workspaces, seen = [] }) {
  return new OpenEndedPlanner({
    model: { plan: async request => { seen.push(request); throw new Error("MODEL_REACHED"); }, respond: async () => null },
    businessWorkspaces: { count: async () => workspaces },
    tools: { list: async () => catalogTools },
    applications: { list: () => defaultApplicationManifests() },
    memory: Object.assign(fakeMemory(), { search: async () => [] })
  });
}
const ask = (instance, text) => instance.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Chicago" } });

test("a flyer from a person with no business workspace is a saved document made from their words with blanks for the rest, with no model call; a promotional email is told to use documents, not the business tools; with a workspace a flyer is still the workspace's own marketing drafts", async () => {
  const seen = [];
  const flyer = await ask(planner({ workspaces: 0, seen }), "Make me a flyer for my bake sale on Saturday.");
  assert.equal(seen.length, 0);
  assert.equal(flyer.application, "documents");
  assert.equal(flyer.steps[0].toolId, "documents.create");
  assert.equal(flyer.steps[0].input.title, "Bake Sale Flyer");
  assert.match(flyer.steps[0].input.content, /^BAKE SALE\n\nWhen: Saturday\nWhere: \[the place\]/);
  assert.doesNotMatch(flyer.steps[0].input.content, /placeholders|editable|user's details/i);
  const news = await ask(planner({ workspaces: 0 }), "Create a newsletter for the church as a PDF.");
  assert.equal(news.steps[0].input.title, "Church Newsletter"); assert.equal(news.steps[0].input.format, "pdf");
  await assert.rejects(ask(planner({ workspaces: 0, seen }), "Create marketing material for my shop."), /MODEL_REACHED/);
  assert.match(seen[0].feedback.join(" "), /no business workspace[\s\S]*documents\.create/);
  const owner = await ask(planner({ workspaces: 1 }), "Make me a flyer for my bake sale on Saturday.");
  assert.equal(owner.application, "business");
  assert.equal(owner.steps.length, 1);
  const other = await ask(planner({ workspaces: 0 }), "Add a customer named Grace");
  assert.match(other.response, /no business or nonprofit workspace/);
});

test("'make a list of the documents I need to get an ID' asks what goes on it and says why it does not list the papers itself; it is no longer the workspace message", async () => {
  for (const say of ["Make a list of the documents I need to get an ID.", "Make a list of the papers I need to renew my license."]) {
    const plan = await ask(planner({ workspaces: 0 }), say);
    assert.equal(plan.application, "lists", say);
    assert.deepEqual(plan.steps, [], say);
    assert.match(plan.clarification, /official page/, say);
    assert.match(plan.clarification, /what goes on it/, say);
    assert.doesNotMatch(plan.clarification || "", /business or nonprofit/, say);
  }
  const plain = await ask(planner({ workspaces: 0 }), "Make me a checklist of what to bring to a clinic visit.");
  assert.doesNotMatch(plain.clarification, /official page/);
});

test("the note and reminder claims run the typed route, after the list claim", () => {
  assert.match(app, /KYRO_LIST_REQUEST\.test\(said\) && !KYRO_LIST_NOT\.test\(said\)\) \{[\s\S]{0,200}return true;\s+\}\s+if \(!options\.typed && \(KYRO_NOTE_REQUEST\.test\(said\) \|\| KYRO_REMINDER_REQUEST\.test\(said\)\) && !KYRO_NOTE_NOT\.test\(said\)\) \{\s+kyroTakeOverTurn\(\);\s+void handleNexusUnifiedBrainRuntimeCommand\(said, \{ source: "typed", kyroDirect: true \}\);\s+return true;\s+\}/);
});

// The model, asked for a flyer on the live site (27 October 2026), saved "Use the user's details only; since no extra details were provided, create a simple, editable flyer with placeholders..." AS the flyer.
// A flyer, poster, newsletter, brochure, handout or invitation is now a short fixed layout: the person's own words where they gave them, a [bracket] for everything else, nothing invented.
const handouts = require("../../nexus/knowledge/handout-templates.js");
test("a handout is read from what was said and made from a fixed layout with a [bracket] for every detail not given", () => {
  assert.deepEqual({ ...handouts.handoutRequest("Make me a flyer for my bake sale on Saturday.") }, { kind: "flyer", subject: "bake sale", when: "Saturday" });
  assert.deepEqual({ ...handouts.handoutRequest("Write an invitation to my daughter's party on Saturday at 3.") }, { kind: "invitation", subject: "daughter's party", when: "Saturday at 3" });
  assert.deepEqual({ ...handouts.handoutRequest("Make me a flyer.") }, { kind: "flyer", subject: "", when: "" });
  assert.equal(handouts.handoutRequest("Make a note that I paid the rent"), null);
  assert.equal(handouts.handoutRequest("Make a list of flyers"), null);
  assert.equal(handouts.handoutRequest("How do I make a flyer?"), null);
  const bare = handouts.handoutTemplate(handouts.handoutRequest("Make me a flyer."));
  assert.equal(bare.title, "Flyer");
  assert.match(bare.content, /^\[WHAT THIS IS FOR\]\n\nWhen: \[day and time\]/);
  for (const kind of ["flyer", "poster", "newsletter", "brochure", "handout", "invitation"]) {
    const made = handouts.handoutTemplate({ kind, subject: "church", when: "" });
    assert.match(made.title, new RegExp(`^Church ${kind}$`, "i"), kind);
    assert.match(made.content, /\[[^\]]+\]/, kind);
    assert.match(made.content, /Nothing here was looked up or added by Kyro\.$/, kind);
    assert.doesNotMatch(made.content, /placeholders|editable/i, kind);
  }
});
