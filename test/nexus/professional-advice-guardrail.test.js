"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { professionalAdviceTopic, professionalAdviceReply, professionalAdviceGoal, withProfessionalAdviceNote } = require("../../nexus/guardrails/professional-advice.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// For small and minority-owned businesses: a legal, tax, loan, grant, certification, licence, insurance or hiring QUESTION gets general information only, plainly not advice, with the official place to check,
// the free counselling that exists, and the statement that Kyro cannot file or apply for anything.
test("which sentences are professional-advice questions, and which are records, drafts or other talk", () => {
  const yes = {
    "Do I need to pay estimated taxes on my catering income?": "tax", "How do I get certified as a minority-owned business?": "certification", "Can you give me legal advice about my LLC?": "legal",
    "Should I take an SBA loan?": "funding", "What grants are available for black-owned businesses?": "funding", "Do I need a business license to sell food?": "licensing",
    "Can I hire a friend as an independent contractor?": "employment", "What insurance do I need for my food truck?": "insurance", "Is it better to be an S corp or an LLC?": "legal",
    "How do I apply for 8(a) certification": "certification"
  };
  for (const [text, topic] of Object.entries(yes)) assert.equal(professionalAdviceTopic(text), topic, text);
  for (const text of ["Log a tax payment of $300", "John took a loan of 5000", "Draft a grant proposal", "Sold 3 trays for $450", "What is the weather in Atlanta?", "Who owes me money?",
    "Create an invoice for Marcus for $1250", "Remind me to file quarterly taxes on April 15", "How do I plant maize?", "What should I do about my fever?", "Translate hire me to French", "show my contracts"]) {
    assert.equal(professionalAdviceTopic(text), null, text);
  }
});

test("the answer without an AI model says it is not a lawyer / tax / financial advisor, names where to check, the free help, that rules change, and that nothing is filed for the person", () => {
  for (const [topic, role, source] of [["tax", /not a tax advisor/, /irs\.gov/], ["legal", /not a lawyer/, /attorney/], ["funding", /not a financial advisor or a lender/, /sba\.gov/], ["certification", /not a certification officer/, /nmsdc\.org/],
    ["licensing", /not a lawyer or a licensing officer/, /business offices/], ["insurance", /not an insurance agent/, /insurance agent/], ["employment", /not a lawyer or an HR/, /dol\.gov/]]) {
    const reply = professionalAdviceReply(topic);
    assert.match(reply, role, topic); assert.match(reply, source, topic);
    assert.match(reply, /Small Business Development Center \(SBDC\)/); assert.match(reply, /SCORE/); assert.match(reply, /MBDA/);
    assert.match(reply, /change and differ by state/); assert.match(reply, /cannot file, apply, sign or pay anything for you/);
  }
});

test("the model is told the rules, and its answer gets the note only when it left it out", () => {
  const goal = professionalAdviceGoal("tax", "Do I need to pay estimated taxes?");
  assert.match(goal, /GENERAL information only/); assert.match(goal, /not a tax advisor/); assert.match(goal, /Never say or imply that you filed, applied, signed, sent or paid anything/); assert.match(goal, /Do I need to pay estimated taxes\?$/);
  assert.match(withProfessionalAdviceNote("tax", "Many self-employed people pay quarterly."), /^Many self-employed people pay quarterly\. I am not a tax advisor/);
  const already = "I am not a tax advisor, but quarterly payments are common. Check irs.gov.";
  assert.equal(withProfessionalAdviceNote("tax", already), already);
});

const catalog = { tools: [{ tool_id: "documents.create", domain: "documents", risk_tier: "low", confirmation_required: false }], applications: [{ applicationId: "documents", capabilities: ["documents.create"], riskTiers: ["low"] }] };
const ask = (planner, text, context = {}) => planner.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context });
function planner(respond) {
  return new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); }, ...(respond ? { respond } : {}) }, tools: { list: async () => catalog.tools }, applications: { list: () => catalog.applications } });
}

test("through the planner: the conversation model answers under the rules (never the planning model), and the note is added if missing", async () => {
  const seen = [];
  const plan = await ask(planner(async request => { seen.push(request.goal); return "Many self-employed people pay estimated taxes four times a year."; }), "Do I need to pay estimated taxes on my catering income?");
  assert.equal(plan.application, "conversation"); assert.deepEqual(plan.steps, []); assert.equal(plan.guardrail, "professional-advice");
  assert.match(seen[0], /A small business owner asks a tax question/);
  assert.match(plan.response, /^Many self-employed people pay estimated taxes four times a year\. I am not a tax advisor/);
});

test("through the planner: with no model, or on the model-free phone path, the fixed answer is used; and a failed model falls back to it", async () => {
  assert.match((await ask(planner(null), "How do I get certified as a minority-owned business?")).response, /I am not a certification officer/);
  assert.match((await ask(planner(async () => { throw new Error("down"); }), "Can you give me legal advice about my LLC?")).response, /I am not a lawyer/);
  assert.match((await ask(planner(async () => "never used"), "Can I hire a friend as an independent contractor?", { deterministicOnly: true })).response, /I am not a lawyer or an HR or payroll professional/);
});

test("the voice session's instructions carry the same rules", () => {
  const source = fs.readFileSync(path.join(__dirname, "..", "..", "server.js"), "utf8");
  const start = source.indexOf("function openAiRealtimeInstructions(");
  const body = source.slice(start, source.indexOf("\nfunction ", start + 10));
  assert.match(body, /any other legal, tax, loan, grant, certification, licence, insurance or hiring question, give general information only/);
  assert.match(body, /pass the person's complete question to the nexus_everyday_records tool and say what it returns/);
  assert.match(body, /never say or imply that you filed, applied, signed, sent or paid anything/);
});
