"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const KyroVoiceIntake = require("../../public/kyro-voice-intake.js");
const KyroIntakeForms = require("../../public/kyro-intake-forms.js");
const { businessPlanDocument } = require("../../nexus/knowledge/business-plan-doc.js");
const { structuredIntakePlan } = require("../../nexus/intake/structured-intakes.js");
const { consultingTemplate, templateRequest } = require("../../nexus/knowledge/consulting-templates.js");

// The business plan used to come out as a blank outline: nine boxes and eight sections of "________________". "Write my business plan" now asks ten short questions and saves a one-page lean plan with the owner's own words under
// the SBA's lean-plan headings. The blank template is still there for "a business plan template" or "outline", and a question about business plans is still the guide's.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

test("an order for a business plan starts the interview; a template, an outline or a question does not", () => {
  const yes = ["Write my business plan", "Help me write a business plan for my bakery", "I need a business plan", "Create a business plan", "Hey Kyro, can you make a business plan for me?", "I want to build a business plan", "Please prepare a business plan"];
  for (const text of yes) assert.equal(KyroIntakeForms.isBusinessPlanRequest(text), true, text);
  const no = ["Draft a business plan outline", "Make a business plan template", "Create a lean business plan", "Give me a business plan example", "How do I write a business plan?", "What goes in a business plan?", "Tell me about my business plan", "Show my business plan pdf", "Write my resume", "I need a plan", ""];
  for (const text of no) assert.equal(KyroIntakeForms.isBusinessPlanRequest(text), false, text);
  // the blank template is still what "a template" and "an outline" make
  assert.equal(templateRequest("Draft a business plan outline").kind, "business-plan");
  assert.match(consultingTemplate("business-plan", { client: "Mama Grace" }).content, /LEAN STARTUP PLAN \(one page\)[\s\S]*TRADITIONAL PLAN/);
});

test("the interview has ten questions, needs only the business and the customers, and returns exactly what was said", () => {
  const form = KyroIntakeForms.businessPlan;
  assert.equal(form.id, "business-plan"); assert.equal(form.fields.length, 10);
  assert.deepEqual(form.fields.filter(field => field.required).map(field => field.key), ["business", "customers"]);
  const intake = KyroVoiceIntake.create(form, { now: () => 1000 });
  intake.start();
  const answers = ["Mama Grace Bakery, we bake bread and cakes", "Families near the market and two schools", "Our bread is fresh every morning", "From the shop and by phone orders", "We remember their names and give a free bun on birthdays", "We sell bread at 60 shillings and cakes from 800", "Baking at night, selling in the morning", "An oven, flour, and a helper", "Our flour supplier Joseph", "Flour and rent and charcoal"];
  let decision;
  answers.forEach((text, index) => { decision = intake.handleUtterance(text, { utteranceId: `u${index}` }); });
  assert.equal(decision.action, "confirm");
  assert.match(decision.say, /Shall I save it as a document you can edit and show to others\? Say yes, or tell me which part to change\./);
  const done = intake.handleUtterance("yes", { utteranceId: "yes" });
  assert.equal(done.action, "submit");
  const request = form.toRequest(done.values);
  assert.deepEqual(Object.keys(request), ["business", "customers", "value", "channels", "relationships", "revenue", "activities", "resources", "partners", "costs"]);
  assert.equal(request.business, answers[0]); assert.equal(request.costs, answers[9]);
  // the business and the customers cannot be skipped
  const short = KyroVoiceIntake.create(form, { now: () => 1000 });
  short.start();
  assert.notEqual(short.handleUtterance("skip", { utteranceId: "s1" }).action, "confirm");
});

test("the plan is the owner's words under the SBA's lean headings and nothing else; what was not said is 'Not decided yet'", () => {
  assert.equal(businessPlanDocument({ business: "Mama Grace Bakery" }), null); assert.equal(businessPlanDocument({ customers: "Families" }), null); assert.equal(businessPlanDocument(null), null);
  const made = businessPlanDocument({ business: "Mama Grace Bakery, we bake bread and cakes", customers: "Families near the market", revenue: "Bread at 60 shillings", costs: "Flour and rent" });
  assert.equal(made.title, "Business plan: Mama Grace Bakery");
  const text = made.content;
  for (const said of ["Mama Grace Bakery, we bake bread and cakes", "Families near the market", "Bread at 60 shillings", "Flour and rent"]) assert.ok(text.includes(said), said);
  for (const heading of ["Customer segments", "Value proposition", "Channels", "Customer relationships", "Revenue streams", "Key activities", "Key resources", "Key partnerships", "Cost structure"]) assert.ok(text.includes(heading), heading);
  assert.equal(text.split("\n").filter(line => line === "Not decided yet").length, 6, "the six things not said");
  assert.match(text, /STILL TO DO IF A LENDER OR INVESTOR ASKS[\s\S]*Executive summary[\s\S]*Financial projections/);
  assert.match(text, /not legal, tax or financial advice/);
  assert.doesNotMatch(text, /\bguarantee|will (?:definitely|certainly)|you will earn|projected profit of/i, "no promise and no invented figure");
  // the owner's part is exactly what was said or the placeholder
  const headings = /^(?:LEAN BUSINESS PLAN|Prepared with Kyro|About the business|Customer segments|Value proposition|Channels|Customer relationships|Revenue streams|Key activities|Key resources|Key partnerships|Cost structure|STILL TO DO|The SBA describes|\d\. |Ask Kyro|This plan is general)/;
  const owner = text.split("\n").filter(line => line && !headings.test(line));
  assert.deepEqual(owner, ["Mama Grace Bakery, we bake bread and cakes", "Families near the market", "Not decided yet", "Not decided yet", "Not decided yet", "Bread at 60 shillings", "Not decided yet", "Not decided yet", "Not decided yet", "Flour and rent"]);
});

test("on the server: a Word document built from the answers only; the client cannot send the text; the other intakes are unchanged", () => {
  const plan = structuredIntakePlan("business-plan", { business: "Mama Grace Bakery", customers: "Families", content: "FORGED TEXT", title: "FORGED", format: "pdf", toolId: "email.send" });
  const step = plan.steps[0];
  assert.equal(plan.application, "documents"); assert.equal(step.toolId, "documents.create"); assert.equal(step.input.format, "docx"); assert.equal(step.input.reopenAfterSave, true);
  assert.equal(step.input.title, "Business plan: Mama Grace Bakery");
  assert.doesNotMatch(step.input.content, /FORGED|email\.send/);
  assert.throws(() => structuredIntakePlan("business-plan", { business: "Mama Grace Bakery" }), error => error.code === "business_plan_incomplete");
  assert.equal(structuredIntakePlan("pr-brief", { business: "B", goal: "g" }).steps[0].input.title, "PR and events brief: B");
  assert.equal(structuredIntakePlan("resume", { name: "Amina", skills: "farming" }).steps[0].toolId, "resume.create");
});

test("on the page: the order starts the interview before the guides, typed or said, the model is kept out of it, and the form script is cached under a new version", () => {
  assert.match(app, /function startKyroBusinessPlanIntake\(options = \{\}\) \{\s+if \(!window\.KyroIntakeForms\?\.businessPlan\) return;\s+startKyroVoiceIntake\(window\.KyroIntakeForms\.businessPlan, \{ \.\.\.options, onComplete: submitKyroBusinessPlanIntake \}\);/);
  assert.match(app, /intakeId: "business-plan", values: request/); assert.match(app, /result\.code === "business_plan_incomplete"/);
  const spoken = app.indexOf("window.KyroIntakeForms?.isBusinessPlanRequest?.(trimmed)");
  assert.ok(spoken > 0 && spoken < app.indexOf("kyroMemoryBookFollowUp(trimmed)"), "before the memory book and every guide claim");
  assert.match(app, /if \(!kyroActiveVoiceIntake && window\.KyroIntakeForms\?\.isBusinessPlanRequest\?\.\(text\)\) \{\s+startKyroBusinessPlanIntake\(\{ seedUtterance: \{ id: "", text \}, source: options\.source \|\| "typed" \}\);/);
  assert.match(app, /return Boolean\(window\.KyroIntakeForms\?\.isBusinessPlanRequest\?\.\(command\) \|\| window\.KyroPrTopics\?\.isPrBriefRequest/);
  assert.match(app, /id === "business-plan" \|\| \(!kyroActiveVoiceIntake && window\.KyroIntakeForms\?\.isBusinessPlanRequest\?\.\(command\)\)\) return "Kyro is already asking the person the questions for a one-page business plan/);
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  assert.ok(index.includes('<script src="/kyro-intake-forms.js?v=kyro-intake-forms-3"></script>')); assert.ok(sw.includes("`/kyro-intake-forms.js?v=kyro-intake-forms-3`"));
});
