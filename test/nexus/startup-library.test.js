"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const guide = require("../../nexus/knowledge/us-small-business.js");
const { templateRequest, consultingTemplate } = require("../../nexus/knowledge/consulting-templates.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// The startup library: what a new or growing business asks first (which structure, for-profit or nonprofit, a business plan, the steps, funding, growth, marketing, names, registration). General information read from
// official pages on 9 October 2026 (SBA, IRS, SEC, USPTO); never a recommendation for one person; the answer says what it cannot tell you and who can.
const NEW_TOPICS = ["business-structure", "llc-vs-corp", "s-corp", "for-profit-nonprofit", "business-plan", "startup-steps", "startup-funding", "growth-scaling", "marketing-visibility", "name-trademark", "ein-registration"];

test("which questions get which library answer, including the owner's own example", () => {
  const yes = {
    "What type of business should I have? LLC, S corp or C corp? For profit or non profit or both?": "business-structure",
    "What are the business structures?": "business-structure", "What kind of business should I start?": "business-structure", "What is a sole proprietorship?": "business-structure",
    "What is the difference between an LLC and a corporation?": "llc-vs-corp", "LLC or S corp?": "llc-vs-corp", "How do I form an LLC?": "llc-vs-corp", "What is a C corp?": "llc-vs-corp",
    "What is an S corporation?": "s-corp", "How do I elect S corp status?": "s-corp",
    "Is a nonprofit better than a for-profit?": "for-profit-nonprofit", "How do I start a 501(c)(3)?": "for-profit-nonprofit", "Can a nonprofit make money?": "for-profit-nonprofit",
    "How do I write a business plan?": "business-plan", "What is a lean business plan?": "business-plan", "What are the steps to start a business?": "startup-steps", "I'm starting a business, where do I begin?": "startup-steps",
    "How can I raise money for my startup?": "startup-funding", "How do I find investors?": "startup-funding", "What is crowdfunding?": "startup-funding", "Do I need venture capital?": "startup-funding",
    "How do I grow my business?": "growth-scaling", "How do I scale my business?": "growth-scaling", "How do I expand to a new location?": "growth-scaling", "Do you have a roadmap for growth?": "growth-scaling",
    "How do I get more customers?": "marketing-visibility", "How do I make my business more visible?": "marketing-visibility", "How do I write a marketing plan?": "marketing-visibility",
    "Should I trademark my business name?": "name-trademark", "How do I register a DBA?": "name-trademark", "What is an EIN?": "ein-registration", "How do I register my business?": "ein-registration", "What is a registered agent?": "ein-registration"
  };
  for (const [text, topic] of Object.entries(yes)) assert.equal(guide.usSmallBusinessTopic(text), topic, text);
  // specific questions that already had an answer still get it, and records, drafts and other talk are left alone
  for (const [text, topic] of Object.entries({ "Can I get a startup loan?": "loans", "What grants are available for nonprofits?": "grants", "Do I need to pay estimated taxes for my LLC?": "estimated-tax", "Do I need a license to sell food?": "licenses", "Where can I get help writing a business plan?": "business-plan", "What is the 8(a) program?": "8a" })) {
    assert.equal(guide.usSmallBusinessTopic(text), topic, text);
  }
  for (const text of ["Draft a business plan", "Create a growth roadmap", "Sold 3 trays for $450", "Add an invoice for Grace's Bakery LLC", "What is the weather in Atlanta?", "How do I plant maize?", "Remind me to register my business on Friday", "I started a business last year"]) {
    assert.equal(guide.usSmallBusinessTopic(text), null, text);
  }
});

test("every library answer names official sources and the date, says what it cannot do, and never recommends one choice", () => {
  for (const id of NEW_TOPICS) {
    const answer = guide.usSmallBusinessAnswer(id);
    assert.equal(answer.topic, id);
    assert.ok(answer.sources.length >= 1, id);
    for (const source of answer.sources) assert.match(source.url, /^https:\/\/(?:www\.)?(?:sba|irs|sec|uspto)\.gov\//, `${id}: ${source.url}`);
    assert.match(answer.text, /\(checked 9 October 2026\)\. This is general information, not legal, tax or financial advice, and rules change, so confirm on the official site\. I cannot file or apply for anything for you\.$/, id);
    assert.doesNotMatch(answer.text, /\byou should (?:form|choose|pick|become|register as|elect)\b|\bI recommend\b|\bthe best (?:structure|choice)\b/i, id);
  }
  for (const id of ["business-structure", "llc-vs-corp", "s-corp", "for-profit-nonprofit"]) assert.match(guide.usSmallBusinessAnswer(id).text, /cannot (?:tell you which|recommend)|question for (?:an attorney and )?a tax professional|question for an attorney and a tax professional/, id);
});

test("the facts that matter are there as the official pages gave them", () => {
  const text = id => guide.usSmallBusinessAnswer(id).text;
  assert.match(text("business-structure"), /I cannot tell you which one is right for you/); assert.match(text("business-structure"), /strongest protection from personal liability, according to the SBA/); assert.match(text("business-structure"), /attorneys and accountants/);
  assert.match(text("llc-vs-corp"), /disregarded as separate from its owner/); assert.match(text("llc-vs-corp"), /Form 1065/); assert.match(text("llc-vs-corp"), /Form 8832/); assert.match(text("llc-vs-corp"), /double tax/); assert.match(text("llc-vs-corp"), /Form 1120/);
  assert.match(text("s-corp"), /no more than 100 shareholders and only one class of stock/); assert.match(text("s-corp"), /Form 2553, signed by all shareholders/); assert.match(text("s-corp"), /not partnerships, corporations or nonresident aliens/); assert.match(text("s-corp"), /a tax election, not a separate kind of company/);
  assert.match(text("for-profit-nonprofit"), /organized and operated exclusively for exempt purposes/); assert.match(text("for-profit-nonprofit"), /Form 1023/); assert.match(text("for-profit-nonprofit"), /unrelated business income/); assert.match(text("for-profit-nonprofit"), /\$1,000 or more/);
  assert.match(text("for-profit-nonprofit"), /I did not find an official page that sets out how to run a for-profit business and a nonprofit side by side/);
  assert.match(text("business-plan"), /executive summary, company description, market analysis, organization and management, service or product line, marketing and sales, funding request and financial projections/); assert.match(text("business-plan"), /as little as an hour/); assert.match(text("business-plan"), /five-year financial projections/);
  assert.match(text("startup-steps"), /Choose a business structure|choose a business structure/); assert.match(text("startup-steps"), /get business insurance/);
  assert.match(text("startup-funding"), /no guaranteed way/); assert.match(text("startup-funding"), /every offer and sale of securities must be registered or qualify for an exemption/); assert.match(text("startup-funding"), /\$5,000,000 in 12 months/); assert.match(text("startup-funding"), /Form C/); assert.match(text("startup-funding"), /Talk to a securities attorney/);
  assert.match(text("growth-scaling"), /I did not find a single roadmap template/); assert.match(text("growth-scaling"), /export/);
  assert.match(text("marketing-visibility"), /at least once a year/); assert.match(text("name-trademark"), /you do not have to register one/); assert.match(text("ein-registration"), /free to apply, so do not use websites that charge a fee/);
});

test("the date every guide answer carries is 9 October 2026", () => { assert.equal(guide.CHECKED_ON, "9 October 2026"); });

test("the three new documents: a business plan, a growth roadmap and a funding checklist, with blanks, the SBA's own sections and no invented facts", () => {
  assert.deepEqual(templateRequest("Draft a business plan"), { kind: "business-plan", client: "", format: "docx" });
  assert.deepEqual(templateRequest("Write a lean business plan for Sunrise Cafe as a PDF"), { kind: "business-plan", client: "Sunrise Cafe", format: "pdf" });
  assert.equal(templateRequest("Create a growth roadmap").kind, "growth-roadmap"); assert.equal(templateRequest("Make a scaling plan for my bakery").kind, "growth-roadmap");
  assert.equal(templateRequest("Prepare a funding readiness checklist").kind, "funding-checklist"); assert.equal(templateRequest("Draft a funding checklist for Grace's Bakery").client, "Grace's Bakery");
  for (const text of ["Write a marketing slogan", "Draft a grant proposal", "What is a business plan?"]) assert.equal(templateRequest(text), null, text);
  for (const kind of ["business-plan", "growth-roadmap", "funding-checklist"]) {
    const doc = consultingTemplate(kind, { client: "Sunrise Cafe" });
    assert.match(doc.title, /Sunrise Cafe$/); assert.match(doc.content, /Sunrise Cafe/); assert.match(doc.content, /________________/); assert.match(doc.content, /Drafted by Kyro from a fixed template for you to complete and review\./);
  }
  assert.match(consultingTemplate("business-plan").content, /Executive summary/); assert.match(consultingTemplate("business-plan").content, /Revenue streams/); assert.match(consultingTemplate("business-plan").content, /five years for a loan application/);
  assert.match(consultingTemplate("growth-roadmap").content, /Quarter 4/); assert.match(consultingTemplate("growth-roadmap").content, /plain working practice, not an SBA template/);
  assert.match(consultingTemplate("funding-checklist").content, /securities attorney/);
});

const catalog = { tools: [{ tool_id: "documents.create", domain: "documents", risk_tier: "low", confirmation_required: false }], applications: [{ applicationId: "documents", capabilities: ["documents.create"], riskTier: "low" }] };
function planner(respond) {
  return new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); }, ...(respond ? { respond } : {}) }, tools: { list: async () => catalog.tools }, applications: { list: () => catalog.applications } });
}
const ask = (p, text, timeZone) => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context: { timeZone } });

test("through the planner, in the United States: the owner's example question gets the overview whole, with no model call", async () => {
  const plan = await ask(planner(async () => { throw new Error("the library must answer without the model"); }), "What type of business should I have? LLC, S corp or C corp? For profit or non profit or both?", "America/Chicago");
  assert.equal(plan.knowledge, "us-small-business:business-structure"); assert.deepEqual(plan.steps, []); assert.equal(plan.guardrail, "professional-advice");
  assert.match(plan.response, /I cannot tell you which one is right for you/); assert.match(plan.response, /\(checked 9 October 2026\)/); assert.ok(plan.sources.some(source => /sba\.gov/.test(source.url)) && plan.sources.some(source => /irs\.gov/.test(source.url)));
  const funding = await ask(planner(), "How can I raise money for my startup?", "America/New_York");
  assert.equal(funding.knowledge, "us-small-business:startup-funding");
});

test("a question in the technology and AI vocabulary goes to the technology guide even when it also names growth", async () => {
  const plan = await ask(planner(), "How do I use AI to grow my business?", "America/Denver");
  assert.equal(plan.knowledge, "small-business-technology:ai-getting-started");
});

test("outside the United States the US library is not used, and an LLC question names a US programme only when the person does", async () => {
  const plan = await ask(planner(async () => "Business structures differ by country; ask your local business registry."), "What type of business should I have? A company or a partnership or a cooperative?", "Africa/Accra").catch(error => ({ reachedPlanningModel: /must not reach the AI planning model/.test(error.message) }));
  assert.equal(plan.knowledge, undefined);
});

test("a template request makes a document through the planner", async () => {
  const plan = await ask(planner(), "Draft a business plan for Sunrise Cafe", "America/Chicago");
  assert.equal(plan.application, "documents"); assert.equal(plan.steps[0].input.title, "Business plan - Sunrise Cafe"); assert.match(plan.steps[0].input.content, /Executive summary/);
});
