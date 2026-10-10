"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const ai = require("../../nexus/knowledge/ai-tools-for-business.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// Choosing AI tools for the jobs a small business has, for owners in any country. Vendor-neutral: kinds of tool and how to choose, never a product or company name. Facts from the SBA's "AI for small business" page and
// the FTC pages the technology guide carries, read on 9 October 2026.
const TOPICS = Object.keys(ai.TOPICS);

test("which questions get which AI-tools answer, and which are left to other answers", () => {
  const yes = {
    "What AI tools should I use for my small business?": "ai-tools-overview", "What AI tools can I use?": "ai-tools-overview", "How do I choose an AI tool?": "ai-tools-choose", "What should I look for in an AI tool?": "ai-tools-choose",
    "Are free AI tools safe?": "ai-tools-choose", "Is it safe to use ChatGPT for my business?": "ai-tools-choose",
    "Which AI tool is best for writing a business plan?": "ai-for-planning", "Can AI help me write a business plan?": "ai-for-planning", "What AI can help me find funding?": "ai-for-planning", "Can ChatGPT help with my pitch to investors?": "ai-for-planning",
    "What AI tools can help with marketing?": "ai-for-marketing", "Can AI write my social media posts?": "ai-for-marketing", "How can AI help me get more customers?": "ai-for-marketing",
    "Should I use a chatbot for customer service?": "ai-for-customers", "Can AI answer my customers' questions?": "ai-for-customers", "What AI tools can help me reply to reviews?": "ai-for-customers",
    "Can AI do my bookkeeping?": "ai-for-operations", "How can AI help me schedule and sort email?": "ai-for-operations", "How can I use AI to save time in my shop?": "ai-for-operations"
  };
  for (const [text, topic] of Object.entries(yes)) assert.equal(ai.aiToolsTopic(text), topic, text);
  for (const text of ["What is AI?", "Draft a business plan", "Write an AI use policy for Sunrise Cafe", "What is the weather in Nairobi?", "How do I plant maize with AI?", "Which crops sell best?", "Sold 3 trays for $450", "Create a document called AI tools", "Are AI income schemes a scam?"]) {
    assert.equal(ai.aiToolsTopic(text), null, text);
  }
});

test("every answer has its sources and date, says it is general information, names no product or company, and for a person outside the United States says the sources are American", () => {
  for (const id of TOPICS) {
    const us = ai.aiToolsAnswer(id, { us: true }); const elsewhere = ai.aiToolsAnswer(id, { us: false });
    assert.equal(us.topic, id); assert.ok(us.sources.length >= 2, id);
    for (const source of us.sources) assert.match(source.url, /^https:\/\/(?:www\.)?(?:sba|ftc)\.gov\//, `${id}: ${source.url}`);
    assert.match(us.text, /\(checked 9 October 2026\)\. This is general information, not legal, tax, financial or security advice, and AI tools change quickly, so check each tool's current terms\. I cannot sign you up for, buy or change any tool for you\.$/, id);
    assert.doesNotMatch(us.text, /United States government sources/, id);
    assert.match(elsewhere.text, /These are United States government sources: laws, programmes and rules about AI and business differ in your country, so check with your local business or trade office too\./, id);
    // vendor-neutral: Kyro does not name or rank products or companies (other than saying so)
    assert.doesNotMatch(us.text.replace(/I do not name or rank products[^.]*\./, ""), /\b(?:ChatGPT|OpenAI|Claude|Gemini|Copilot|Canva|Grammarly|Jasper|Midjourney|Zapier|Notion|Microsoft|Google|Meta|Anthropic|Shopify)\b/, id);
  }
  assert.equal(ai.aiToolsAnswer("nope"), null);
});

test("the facts that matter are there as the official pages gave them", () => {
  const text = id => ai.aiToolsAnswer(id).text;
  assert.match(text("ai-tools-overview"), /start small, because AI is relatively new, and to test free or low-cost tools/); assert.match(text("ai-tools-overview"), /drafting|draft business plans, job postings, blogs and product descriptions/); assert.match(text("ai-tools-overview"), /I do not name or rank products/);
  assert.match(text("ai-tools-choose"), /test the free or low-cost version first/); assert.match(text("ai-tools-choose"), /never type in passwords/); assert.match(text("ai-tools-choose"), /patents, copyrights or trademarks/); assert.match(text("ai-tools-choose"), /guaranteed earnings, passive income or demands to pay up front/);
  assert.match(text("ai-tools-choose"), /practical questions I add, not an official source/); assert.match(text("ai-tools-choose"), /limited data/); assert.match(text("ai-tools-choose"), /language/); assert.match(text("ai-tools-choose"), /your own currency/);
  assert.match(text("ai-for-planning"), /AI answers can be wrong or made up, so never let a tool invent numbers/); assert.match(text("ai-for-planning"), /draft a business plan/);
  assert.match(text("ai-for-marketing"), /never use AI, or anyone else, to write fake reviews/); assert.match(text("ai-for-customers"), /Practical advice, not an official rule: tell customers when a chatbot is answering/);
  assert.match(text("ai-for-operations"), /I did not find official guidance on AI for bookkeeping, payroll or tax/);
});

const catalog = { tools: [], applications: [] };
function planner(respond) {
  return new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); }, ...(respond ? { respond } : {}) }, tools: { list: async () => catalog.tools }, applications: { list: () => catalog.applications } });
}
const ask = (text, timeZone) => planner(async () => { throw new Error("the guide must answer without the model"); }).plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context: { timeZone } });

test("through the planner, in the United States and in Africa alike, with no AI model call", async () => {
  const us = await ask("What AI tools can help with marketing?", "America/Chicago");
  assert.equal(us.knowledge, "ai-tools-for-business:ai-for-marketing"); assert.deepEqual(us.steps, []); assert.equal(us.guardrail, "professional-advice"); assert.doesNotMatch(us.response, /United States government sources/);
  for (const timeZone of ["Africa/Nairobi", "Africa/Lagos", "Africa/Johannesburg"]) {
    const plan = await ask("How do I choose an AI tool for my business?", timeZone);
    assert.equal(plan.knowledge, "ai-tools-for-business:ai-tools-choose", timeZone); assert.match(plan.response, /These are United States government sources/); assert.match(plan.response, /your own currency/);
  }
});

test("a question about AI safety, scams, fake reviews or claims still goes to the technology guide for a person in the United States", async () => {
  assert.equal((await ask("Is it safe to use ChatGPT for my business?", "America/Denver")).knowledge, "small-business-technology:ai-safe-use");
  assert.equal((await ask("Are AI income schemes a scam?", "America/Denver")).knowledge, "small-business-technology:ai-scams");
  assert.equal((await ask("Can I use AI to write reviews for my business?", "America/Denver")).knowledge, "small-business-technology:fake-reviews");
  // and the general "getting started" answer gives way to the tool answer when the question is about tools or a job
  assert.equal((await ask("Which AI tool is best for writing a business plan?", "America/Denver")).knowledge, "ai-tools-for-business:ai-for-planning");
  assert.equal((await ask("How do I use AI to grow my business?", "America/Denver")).knowledge, "small-business-technology:ai-getting-started");
});
