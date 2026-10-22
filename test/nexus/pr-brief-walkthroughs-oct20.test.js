"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const KyroVoiceIntake = require("../../public/kyro-voice-intake.js");
const KyroIntakeForms = require("../../public/kyro-intake-forms.js");
const prTopics = require("../../public/kyro-pr-topics.js");
const { prBriefDocument } = require("../../nexus/knowledge/pr-brief.js");
const { prWalkthrough, WALKTHROUGHS } = require("../../nexus/knowledge/pr-walkthroughs.js");
const guide = require("../../nexus/knowledge/pr-events-guide.js");
const { structuredIntakePlan } = require("../../nexus/intake/structured-intakes.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// The brief for a PR or event firm (a ten-question voice interview that ends in a Word document) and two step-by-step walkthroughs (planning an event, preparing a crisis statement), added to the PR and events guide.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

test("a request to MAKE a brief starts the interview; a question about briefs is the guide's", () => {
  for (const text of ["Write me a PR brief", "Help me write a brief for an event company", "I need a brief for a PR firm", "Make a brief for my agency", "Can you draft a communications brief for me?", "I want to create a PR brief"]) assert.equal(prTopics.isPrBriefRequest(text), true, text);
  for (const text of ["How do I write a PR brief?", "What goes in a PR brief?", "What is a brief?", "Write me a poem", "Write a brief summary of my day", "I need a brief break", "Tell me about PR"]) assert.equal(prTopics.isPrBriefRequest(text), false, text);
  // the guide does not take the order, but still answers the question
  assert.equal(prTopics.prTopic("Write me a PR brief"), null);
  assert.equal(prTopics.prTopic("How do I write a PR brief?"), "hire-pr-firm");
  assert.match(guide.prEventsAnswer("hire-pr-firm").text, /say "write my PR brief"/);
});

test("the interview has ten questions, needs only the business and the goal, and reads back and returns exactly what was said", () => {
  const form = KyroIntakeForms.prBrief;
  assert.equal(form.fields.length, 10); assert.equal(form.id, "pr-brief");
  assert.deepEqual(form.fields.filter(field => field.required).map(field => field.key), ["business", "goal"]);
  const intake = KyroVoiceIntake.create(form, { now: () => 1000 });
  intake.start();
  const answers = ["Mama Grace Bakery, we bake bread and cakes", "Fill the shop for our grand opening", "Families near the market", "We bake fresh every morning", "Two thousand dollars", "The opening is 14 March", "We handed out flyers and it brought a few people", "Me and my sister Joan", "Spanish and Kiswahili", "No balloons"];
  let decision;
  answers.forEach((text, index) => { decision = intake.handleUtterance(text, { utteranceId: `u${index}` }); });
  assert.equal(decision.action, "confirm");
  assert.match(decision.say, /Shall I save it as a document you can edit and send\? Say yes, or tell me which part to change\./);
  const done = intake.handleUtterance("yes", { utteranceId: "yes" });
  assert.equal(done.action, "submit");
  const request = form.toRequest(done.values);
  assert.equal(request.business, answers[0]); assert.equal(request.goal, answers[1]); assert.equal(request.avoid, answers[9]);
  assert.deepEqual(Object.keys(request), ["business", "goal", "audience", "message", "budget", "timeline", "past", "approver", "needs", "avoid"]);
  // a skipped optional question is simply left out; the business and goal cannot be skipped
  const short = KyroVoiceIntake.create(form, { now: () => 1000 });
  short.start();
  const skipBusiness = short.handleUtterance("skip", { utteranceId: "s1" });
  assert.notEqual(skipBusiness.action, "confirm"); assert.equal(skipBusiness.field?.key || "business", "business", "the business cannot be skipped");
});

test("the brief document is the owner's words and nothing else; what was not said is 'Not decided yet'; a missing business or goal makes no brief", () => {
  assert.equal(prBriefDocument({ goal: "More customers" }), null); assert.equal(prBriefDocument({ business: "Mama Grace Bakery" }), null); assert.equal(prBriefDocument({}), null); assert.equal(prBriefDocument(null), null);
  const made = prBriefDocument({ business: "Mama Grace Bakery, we bake bread", goal: "Fill the shop for our grand opening", budget: "Two thousand dollars", needs: "Spanish and Kiswahili" });
  assert.equal(made.title, "PR and events brief: Mama Grace Bakery, we bake bread");
  const text = made.content;
  for (const said of ["Mama Grace Bakery, we bake bread", "Fill the shop for our grand opening", "Two thousand dollars", "Spanish and Kiswahili"]) assert.ok(text.includes(said), said);
  assert.equal((text.match(/Not decided yet/g) || []).length, 6, "the six things not said");
  assert.match(text, /Kyro's own starting template, not an official format/);
  assert.match(text, /QUESTIONS TO ASK THE FIRM[\s\S]*Who will actually do the work[\s\S]*fake reviews and testimonials[\s\S]*How will you measure results[\s\S]*Get the agreement in writing/);
  assert.doesNotMatch(text, /\bguarantee|will (?:definitely|certainly)|we recommend (?:hiring|the firm)\b/i, "no promise and no recommendation of a firm");
  // nothing is added about the business: every line of the owner's part is what was said or the placeholder
  const owner = text.split("\n").filter(line => line && !/^(?:\d+\. |PR AND EVENTS BRIEF|Prepared with Kyro|QUESTIONS TO ASK|Get the agreement)/.test(line));
  assert.deepEqual(owner, ["Mama Grace Bakery, we bake bread", "Fill the shop for our grand opening", "Not decided yet", "Not decided yet", "Two thousand dollars", "Not decided yet", "Not decided yet", "Not decided yet", "Spanish and Kiswahili", "Not decided yet"]);
});

test("on the server, the brief becomes a Word document built from the answers only; the client cannot send the text; the resume intake is unchanged", () => {
  const plan = structuredIntakePlan("pr-brief", { business: "Mama Grace Bakery", goal: "Fill the shop", budget: "2000 dollars", content: "FORGED TEXT", title: "FORGED", format: "pdf", toolId: "email.send", junk: "x" });
  assert.equal(plan.application, "documents"); assert.equal(plan.riskTier, "low"); assert.equal(plan.steps.length, 1);
  const step = plan.steps[0];
  assert.equal(step.toolId, "documents.create"); assert.equal(step.input.format, "docx"); assert.equal(step.input.reopenAfterSave, true);
  assert.equal(step.input.title, "PR and events brief: Mama Grace Bakery");
  assert.doesNotMatch(step.input.content, /FORGED|email\.send/); assert.match(step.input.content, /Fill the shop/); assert.match(step.input.content, /2000 dollars/);
  assert.throws(() => structuredIntakePlan("pr-brief", { business: "Mama Grace Bakery" }), error => error.code === "pr_brief_incomplete");
  assert.throws(() => structuredIntakePlan("send-money", { name: "x" }), error => error.code === "intake_unknown");
  assert.equal(structuredIntakePlan("resume", { name: "Amina", skills: "farming" }).steps[0].toolId, "resume.create");
  // an over-long answer is cut, not trusted
  const long = structuredIntakePlan("pr-brief", { business: "B", goal: "g".repeat(5000) });
  assert.ok(long.steps[0].input.content.length < 4000);
});

const official = /^https:\/\/(?:www\.)?(?:ftc\.gov|cdc\.gov|sba\.gov|ada\.gov)\//;

test("both walkthroughs: one step at a time, each with its words, what to gather and an official page or an honest 'Kyro's own'", () => {
  assert.deepEqual(Object.keys(WALKTHROUGHS).sort(), ["crisis", "event"]);
  for (const id of ["event", "crisis"]) {
    const walk = prWalkthrough(id);
    assert.equal(walk.id, `pr-${id}`); assert.equal(walk.checkedOn, guide.CHECKED_ON); assert.ok(walk.steps.length >= 7);
    assert.ok(walk.sources.length >= 2 && walk.sources.every(source => official.test(source.url)));
    for (const step of walk.steps) {
      assert.ok(step.title && step.text.length > 40, step.title);
      assert.ok(Array.isArray(step.gather));
      if (step.link) assert.ok(official.test(step.link.url), step.title);
      else assert.match(step.text, /Kyro's own working practice, not an official page/, `${step.title}: a step with no official page says so`);
      assert.doesNotMatch(step.text, /\bI will (?:send|book|publish|file)\b|\bguarantee\b/i, step.title);
    }
  }
  assert.equal(prWalkthrough("nonsense"), null);
  const event = prWalkthrough("event");
  assert.match(event.steps.map(step => step.text).join(" "), /does not mention event permits/);
  assert.match(event.steps.map(step => step.text).join(" "), /I cannot tell you what your city requires/);
  const crisis = prWalkthrough("crisis");
  assert.match(crisis.steps[0].text, /call your local emergency number before anything else/);
  assert.match(crisis.steps.map(step => step.text).join(" "), /I cannot send it for you: you send it/);
});

const planner = () => new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); }, respond: async () => { throw new Error("the guide must answer without the model"); } }, tools: { list: async () => [] }, applications: { list: () => [] } });
const ask = text => planner().plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context: { timeZone: "America/Chicago" } });

test("through the planner: 'walk me through' gives the walkthrough, a plain question gives the answer, and an order for a brief is left to the interview", async () => {
  for (const [text, id, steps] of [["Walk me through planning an event", "pr-event", 9], ["Step by step, how do I plan an event?", "pr-event", 9], ["Walk me through preparing a crisis communication plan", "pr-crisis", 7]]) {
    const plan = await ask(text);
    assert.equal(plan.walkthrough.id, id, text); assert.equal(plan.walkthrough.steps.length, steps); assert.equal(plan.knowledge, `pr-events-guide:walkthrough:${id}`);
    assert.match(plan.response, /one step at a time.*I only guide you: you do each step yourself, and I never send, book or publish anything for you\./);
    assert.ok(plan.sources.every(source => official.test(source.url)));
  }
  assert.equal((await ask("How do I plan an event?")).knowledge, "pr-events-guide:event-planning");
  assert.equal((await ask("How do I plan an event?")).walkthrough, undefined);
  await assert.rejects(ask("Write me a PR brief"), /must not reach the AI planning model|guide must answer/, "an order for a brief is the interview's, not the guide's");
});

test("on the page: a spoken or typed request starts the interview, the model is kept out of it, and the new scripts are cached", () => {
  assert.match(app, /function startKyroPrBriefIntake\(options = \{\}\) \{\s+if \(!window\.KyroIntakeForms\?\.prBrief\) return;\s+startKyroVoiceIntake\(window\.KyroIntakeForms\.prBrief, \{ \.\.\.options, onComplete: submitKyroPrBriefIntake \}\);/);
  assert.match(app, /intakeId: "pr-brief", values: request/);
  assert.match(app, /result\.code === "pr_brief_incomplete"/);
  assert.match(app, /if \(window\.KyroPrTopics\?\.isPrBriefRequest\?\.\(trimmed\)\) \{\s+startKyroPrBriefIntake\(\{ seedUtterance: \{ id: utteranceId, text: trimmed \}, source \}\);\s+return true;/);
  assert.match(app, /if \(!kyroActiveVoiceIntake && window\.KyroPrTopics\?\.isPrBriefRequest\?\.\(text\)\) \{\s+startKyroPrBriefIntake\(\{ seedUtterance: \{ id: "", text \}, source: options\.source \|\| "typed" \}\);/);
  assert.match(app, /return Boolean\(window\.KyroIntakeForms\?\.isBusinessPlanRequest\?\.\(command\) \|\| window\.KyroPrTopics\?\.isPrBriefRequest\?\.\(command\) \|\| window\.KyroIntakeForms\?\.isSponsorshipProposalRequest\?\.\(command\) \|\| window\.KyroIntakeForms\?\.isTeamPacketRequest\?\.\(command\) \|\| window\.KyroIntakeForms\?\.isResumeBuildRequest/);
  assert.match(app, /id === "pr-brief" \|\| \(!kyroActiveVoiceIntake && window\.KyroPrTopics\?\.isPrBriefRequest\?\.\(command\)\)\) return "Kyro is already asking the person the questions for a brief/);
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  for (const tag of ['<script src="/kyro-pr-topics.js?v=kyro-pr-topics-2"></script>', '<script src="/kyro-intake-forms.js?v=kyro-intake-forms-4"></script>']) assert.ok(index.includes(tag), tag);
  for (const entry of ["`/kyro-pr-topics.js?v=kyro-pr-topics-2`", "`/kyro-intake-forms.js?v=kyro-intake-forms-4`"]) assert.ok(sw.includes(entry), entry);
});
