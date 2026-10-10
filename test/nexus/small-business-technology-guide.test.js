"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const tech = require("../../nexus/knowledge/small-business-technology.js");
const { templateRequest, consultingTemplate, KINDS } = require("../../nexus/knowledge/consulting-templates.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// A checked, vendor-neutral guide to technology and AI for small business owners, and fixed starter documents for a technology or automation consultant. Facts from outside sources were read on 9 October 2026
// (FTC, NIST) and carry their sources and that date; the two topics that are not from an outside source say so.
test("which questions get a technology answer, and which are records, drafts or other talk", () => {
  const yes = {
    "Is it safe to use ChatGPT for my business?": "ai-safe-use", "What should I not put into AI tools?": "ai-safe-use", "Can I use AI to write reviews for my business?": "fake-reviews",
    "Are AI income schemes a scam?": "ai-scams", "How do I spot a deepfake voice scam?": "ai-scams", "Can I say my product is AI powered?": "ai-claims", "How do I protect my business from hackers?": "cybersecurity-basics",
    "What is ransomware?": "phishing-ransomware", "How do I stop someone spoofing my email?": "email-domain", "What is DMARC?": "email-domain", "What should I ask a web host?": "web-host-designer",
    "How do I hire a web designer?": "web-host-designer", "What if my customer data was leaked?": "data-breach", "Do I need cyber insurance?": "cyber-insurance", "What can Kyro automate for my business?": "automation",
    "How do I get my business online?": "online-presence", "How do I build a website?": "online-presence", "How do I use AI to grow my business?": "ai-getting-started", "Can I use ChatGPT to answer customers?": "ai-getting-started"
  };
  for (const [text, topic] of Object.entries(yes)) assert.equal(tech.technologyTopic(text), topic, text);
  for (const text of ["Draft a website brief", "Log a hosting payment of $40", "Who owes me money?", "What is the weather in Atlanta?", "How do I plant maize?", "What is AI?", "Build my CV", "Remind me to back up the files on Friday", "Sold 3 trays for $450"]) {
    assert.equal(tech.technologyTopic(text), null, text);
  }
});

test("every topic has a plain answer; outside sources are official pages with the date checked, and the two that are not say so", () => {
  for (const id of Object.keys(tech.TOPICS)) {
    const answer = tech.technologyAnswer(id);
    assert.equal(answer.topic, id);
    for (const source of answer.sources) { assert.match(source.url, /^https:\/\/(?:www\.)?(?:ftc\.gov|csrc\.nist\.gov)\//, `${id}: ${source.url}`); assert.ok(source.name); }
    assert.match(answer.text, /This is general information, not legal, tax, financial or security-audit advice, and things change, so confirm on the official site\. I cannot buy, publish, file or change anything for you\.$/, id);
    if (answer.sources.length) assert.match(answer.text, new RegExp(`\\(checked ${tech.CHECKED_ON}\\)`), id);
  }
  assert.equal(tech.TOPICS.automation.sources.length, 0); assert.match(tech.TOPICS.automation.text, /^This part describes Kyro's own tools, not an outside source\./);
  assert.match(tech.TOPICS["online-presence"].text, /common practical advice, not an official rule/);
  assert.equal(tech.technologyAnswer("nope"), null);
});

test("the facts that matter are there as the official pages gave them", () => {
  const text = id => tech.technologyAnswer(id).text;
  assert.match(text("ai-scams"), /Air AI and its owners agreed in March 2026 to be banned from marketing business opportunities/); assert.match(text("ai-scams"), /ReportFraud\.ftc\.gov/);
  assert.match(text("fake-reviews"), /\$53,088 per violation, and that amount changes, so check the FTC site/); assert.match(text("fake-reviews"), /five-star reviews/);
  assert.match(text("ai-claims"), /Workado/); assert.match(text("ai-claims"), /\$930,000/);
  assert.match(text("cybersecurity-basics"), /one of the fastest, cheapest ways to protect your data/); assert.match(text("cybersecurity-basics"), /Govern, Identify, Protect, Detect, Respond and Recover/);
  assert.match(text("email-domain"), /SPF, DKIM and DMARC/); assert.match(text("web-host-designer"), /Do they use TLS/); assert.match(text("web-host-designer"), /who can change your website/);
  assert.match(text("phishing-ransomware"), /IC3\.gov/); assert.match(text("phishing-ransomware"), /reportphishing@apwg\.org/); assert.match(text("data-breach"), /IdentityTheft\.gov/);
  assert.match(text("automation"), /does not take payments, send anything on its own, or connect to your bank or accounting software/);
});

test("which sentences ask for a consulting template, and the document they name", () => {
  assert.deepEqual(templateRequest("Draft a website brief for Grace's Bakery"), { kind: "website-brief", client: "Grace's Bakery", format: "docx" });
  assert.deepEqual(templateRequest("Create a technology roadmap"), { kind: "technology-roadmap", client: "", format: "docx" });
  assert.deepEqual(templateRequest("Make an automation audit for Marcus Johnson as a PDF"), { kind: "automation-audit", client: "Marcus Johnson", format: "pdf" });
  assert.deepEqual(templateRequest("Write an AI use policy for Sunrise Cafe"), { kind: "ai-use-policy", client: "Sunrise Cafe", format: "docx" });
  assert.deepEqual(templateRequest("Draft questions for a web designer"), { kind: "vendor-questions", client: "", format: "docx" });
  assert.equal(templateRequest("Prepare an app brief for a barber shop booking app").kind, "app-brief");
  for (const text of ["Draft a grant proposal", "Create a document for my maize sales", "Draft a launch kit for my shop", "Write a business plan", "Create an invoice for Grace Otieno", "What is a website brief?"]) assert.equal(templateRequest(text), null, text);
});

test("every template is a fixed document with blanks, names the client, and never claims to know anything about them", () => {
  for (const kind of Object.keys(KINDS)) {
    const named = consultingTemplate(kind, { client: "Grace's Bakery" });
    assert.match(named.title, /Grace's Bakery$/); assert.match(named.content, /Grace's Bakery/); assert.match(named.content, /________________/);
    assert.match(named.content, /Drafted by Kyro from a fixed template for you to complete and review\. It is general information, not legal, tax or security advice\.$/, kind);
    assert.equal(consultingTemplate(kind).title, KINDS[kind]);
  }
  assert.match(consultingTemplate("technology-roadmap").content, /Multi-factor authentication is on for email and banking/);
  assert.match(consultingTemplate("vendor-questions").content, /Do you support email authentication \(SPF, DKIM and DMARC\)\?/);
  assert.match(consultingTemplate("ai-use-policy").content, /We never use AI, or anyone else, to write fake reviews or testimonials/);
  assert.equal(consultingTemplate("nope"), null);
});

const catalog = { tools: [{ tool_id: "documents.create", domain: "documents", risk_tier: "low", confirmation_required: false }], applications: [{ applicationId: "documents", capabilities: ["documents.create"], riskTiers: ["low"] }] };
function planner(respond) {
  return new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); }, ...(respond ? { respond } : {}) }, tools: { list: async () => catalog.tools }, applications: { list: () => catalog.applications } });
}
const ask = (p, text, context = {}) => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context });

test("through the planner, for a person in the United States: the technology guide answers with no model call, and says it is not an advisor", async () => {
  const plan = await ask(planner(async () => { throw new Error("the guide must answer without the model"); }), "Is it safe to use ChatGPT for my business?", { timeZone: "America/Chicago" });
  assert.equal(plan.knowledge, "small-business-technology:ai-safe-use"); assert.deepEqual(plan.steps, []); assert.equal(plan.guardrail, "professional-advice");
  assert.match(plan.response, /never type in passwords/); assert.match(plan.response, /\(checked 9 October 2026\)/); assert.ok(plan.sources.some(source => /ftc\.gov/.test(source.url)));
});

test("through the planner, outside the United States the US-agency guide is not used", async () => {
  // (it is left to the rest of the planner, which here is the planning model: the test planner's model refuses to plan, which is how this test sees the guide was not used)
  const plan = await ask(planner(async () => "AI can help, but check its answers."), "Is it safe to use ChatGPT for my business?", { timeZone: "Africa/Nairobi" }).catch(error => ({ reachedPlanningModel: /must not reach the AI planning model/.test(error.message) }));
  assert.equal(plan.knowledge, undefined); assert.equal(plan.reachedPlanningModel, true);
});

test("through the planner: a template request makes a document directly (no model), in the format asked for, and ordinary drafts are untouched", async () => {
  const plan = await ask(planner(), "Draft a website brief for Grace's Bakery as a PDF");
  assert.equal(plan.application, "documents"); assert.equal(plan.steps.length, 1);
  const step = plan.steps[0];
  assert.equal(step.toolId, "documents.create"); assert.equal(step.input.format, "pdf"); assert.equal(step.input.title, "Website brief - Grace's Bakery"); assert.match(step.input.content, /5\. Ask the web host/);
  const defaulted = await ask(planner(), "Create a technology roadmap");
  assert.equal(defaulted.steps[0].input.format, "docx");
});
