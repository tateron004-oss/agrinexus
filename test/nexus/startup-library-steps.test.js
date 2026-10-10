"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const guide = require("../../nexus/knowledge/us-small-business.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// The rest of the SBA's startup steps: costs, credit, buying a business or franchise, insurance, location, a bank account, the first employee, bookkeeping and taxes. Read from SBA pages on 9 October 2026. Where an SBA
// page said something that does not hold everywhere (for example that workers' compensation is a federal requirement), the answer does not repeat it; it sends the person to their state.
const STEP_TOPICS = ["startup-costs", "business-credit", "buy-business-franchise", "business-insurance", "business-location", "business-bank-account", "hiring-employees", "bookkeeping-accounting", "business-taxes"];

test("which questions get which answer, and the older answers keep their questions", () => {
  const yes = {
    "How much does it cost to start a business?": "startup-costs", "What are startup costs?": "startup-costs", "How do I do a break-even analysis?": "startup-costs",
    "How do I build business credit?": "business-credit", "What is a DUNS number?": "business-credit", "Should I buy a franchise?": "buy-business-franchise", "How do I buy an existing business?": "buy-business-franchise",
    "What insurance does my business need?": "business-insurance", "Do I need liability insurance?": "business-insurance", "What is workers comp?": "business-insurance",
    "Where should I open my shop?": "business-location", "What is zoning?": "business-location", "Can I run a business from home?": "business-location",
    "How do I open a business bank account?": "business-bank-account", "What is merchant services?": "business-bank-account",
    "How do I hire my first employee?": "hiring-employees", "What is a W-4?": "hiring-employees", "Is my worker an employee or an independent contractor?": "hiring-employees", "How does payroll work?": "hiring-employees",
    "Do I need an accountant?": "bookkeeping-accounting", "What is the difference between cash and accrual accounting?": "bookkeeping-accounting", "What is a balance sheet?": "bookkeeping-accounting",
    "What taxes does my business pay?": "business-taxes", "Do I have to collect sales tax?": "business-taxes", "What is a tax year?": "business-taxes",
    "How do I pay estimated taxes?": "estimated-tax", "Do I need to send a 1099?": "1099", "What are the steps to start a business?": "startup-steps", "How do I grow my business?": "growth-scaling", "How do I register my business?": "ein-registration"
  };
  for (const [text, topic] of Object.entries(yes)) assert.equal(guide.usSmallBusinessTopic(text), topic, text);
  for (const text of ["Add an employee named Grace", "Log a payroll payment of $400", "Pay my accountant $200", "Sold 3 trays for $450", "What is the weather in Atlanta?", "Draft a business plan", "Remind me to buy insurance on Friday"]) assert.equal(guide.usSmallBusinessTopic(text), null, text);
});

test("every answer names official SBA sources and the date, says it is general information, and does not recommend a choice", () => {
  for (const id of STEP_TOPICS) {
    const answer = guide.usSmallBusinessAnswer(id);
    assert.equal(answer.topic, id); assert.ok(answer.sources.length >= 1, id);
    for (const source of answer.sources) assert.match(source.url, /^https:\/\/(?:www\.)?(?:sba|irs)\.gov\//, `${id}: ${source.url}`);
    assert.match(answer.text, /\(checked 9 October 2026\)\. This is general information, not legal, tax or financial advice, and rules change, so confirm on the official site\. I cannot file or apply for anything for you\.$/, id);
    assert.doesNotMatch(answer.text, /\byou should (?:buy|choose|pick|hire|open)\b|\bI recommend\b|\bthe best\b/i, id);
  }
});

test("the facts that matter are there as the SBA pages gave them, and the one doubtful claim is not repeated", () => {
  const text = id => guide.usSmallBusinessAnswer(id).text;
  assert.match(text("startup-costs"), /at least one year of monthly expenses, with five years ideal/); assert.match(text("startup-costs"), /about 10 percent/); assert.match(text("startup-costs"), /break-even/);
  assert.match(text("business-credit"), /one of the main reasons small business loan applications are declined/); assert.match(text("business-credit"), /Dun & Bradstreet number/); assert.match(text("business-credit"), /AnnualCreditReport\.com is the only authorized source/);
  assert.match(text("buy-business-franchise"), /franchise contracts usually favor the franchisor/); assert.match(text("buy-business-franchise"), /not an endorsement or approval of the brand/); assert.match(text("buy-business-franchise"), /franchise specialist attorney/);
  assert.match(text("business-insurance"), /General liability/); assert.match(text("business-insurance"), /business owner's policy/); assert.match(text("business-insurance"), /I cannot tell you which coverage you need/);
  assert.match(text("business-insurance"), /check your state's website, because some states require additional coverage/); assert.doesNotMatch(text("business-insurance"), /federal government requires/);
  assert.match(text("business-location"), /contacting your city planning department/); assert.match(text("business-location"), /HUBZone/);
  assert.match(text("business-bank-account"), /EIN \(or your Social Security number if you are a sole proprietor\)/); assert.match(text("business-bank-account"), /you still need a business checking account/);
  assert.match(text("hiring-employees"), /Form W-4/); assert.match(text("hiring-employees"), /Form I-9/); assert.match(text("hiring-employees"), /California, Hawaii, New Jersey, New York, Rhode Island and Puerto Rico/); assert.match(text("hiring-employees"), /Requirements differ by state, so check yours\./);
  assert.match(text("bookkeeping-accounting"), /balance sheet the foundation of managing your finances/); assert.match(text("bookkeeping-accounting"), /I cannot choose software or an accountant for you/);
  assert.match(text("business-taxes"), /does not explain sales tax collection or rates/); assert.match(text("business-taxes"), /calendar tax year is the default/);
});

test("through the planner, in the United States, with no model call", async () => {
  const planner = new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); }, respond: async () => { throw new Error("the guide must answer without the model"); } }, tools: { list: async () => [] }, applications: { list: () => [] } });
  const ask = text => planner.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context: { timeZone: "America/Los_Angeles" } });
  assert.equal((await ask("How do I hire my first employee?")).knowledge, "us-small-business:hiring-employees");
  assert.equal((await ask("What insurance does my business need?")).knowledge, "us-small-business:business-insurance");
  // AI for payroll is the AI-tools guide's question, not the hiring guide's
  assert.equal((await ask("Can AI do payroll?")).knowledge, "ai-tools-for-business:ai-for-operations");
});
