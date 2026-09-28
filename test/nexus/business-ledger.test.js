"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

const { classify, precheck, run, computeBusinessDashboard } = voiceDispatch;

test("first-person and question phrasing reach the income and expense log", () => {
  for (const text of ["I sold 5 bags of maize for 6000 shillings", "We spent KES 2,000 on seed", "I paid 1500 naira for fuel", "Log a $75 expense for supplies", "Record an income of 500 shillings"])
    assert.equal(classify(text), "logTransaction", text);
  for (const text of ["How much did I spend on seed this month?", "Show me my farm expenses this month", "How much income did I make?", "What is my profit this year?", "What did I sell today?", "What were my total sales last month?"])
    assert.equal(classify(text), "financeSummary", text);
  for (const text of ["I sold my old phone", "I bought a phone", "How much is maize per kg?", "What are my reminders", "Add up my leads", "Show me my shopping list", "Where can I sell maize?", "How do I make compost?"])
    assert.ok(!["logTransaction", "financeSummary"].includes(classify(text)), `${text} must not be treated as ledger`);
});

test("an amount is read with its currency, and the currency must be stated", () => {
  const args = text => precheck(text, {});
  assert.equal(args("I sold 5 bags of maize for 6000 shillings").clarification, null);
  assert.match(args("Log an expense of 500 for seed").clarification, /Which currency is 500 in/);
  assert.match(args("Log an expense for seed").clarification, /amount for this expense, and in which currency/);
  assert.equal(args("Log a $50 expense for supplies").clarification, null);
  assert.equal(args("we spent KES 2,000 on seed").clarification, null);
});

test("logging keeps the currency, the item and the type, and reads the money back in that currency", async () => {
  let saved;
  const client = { record_id: "rec_1", version: 3, data: { info: { businessName: "Amina Farm" }, editable: { transactions: [] } } };
  const businessRequest = async ({ method, pathname, body }) => {
    if (method === "GET") return { body: { clients: [client] } };
    saved = { pathname, body }; return { body: { ...client, data: { ...client.data, editable: body.editable } } };
  };
  const sold = await run({ command: "I sold 5 bags of maize for 6,000 shillings", confirmed: true, businessRequest });
  assert.equal(sold.status, "completed"); assert.equal(sold.response, 'Logged a KES 6,000 income for 5 bags of maize in "Amina Farm".');
  assert.deepEqual([saved.body.editable.transactions[0].type, saved.body.editable.transactions[0].amount, saved.body.editable.transactions[0].currency, saved.body.editable.transactions[0].category], ["income", 6000, "KES", "5 bags of maize"]);
  const spent = await run({ command: "We spent $40.50 on seed", confirmed: true, businessRequest });
  assert.equal(spent.response, 'Logged a $40.50 expense for seed in "Amina Farm".');
  const unconfirmed = await run({ command: "Log a 500 naira expense for fuel", confirmed: false, businessRequest });
  assert.equal(unconfirmed.status, "needs-confirmation"); assert.match(unconfirmed.response, /I can log a NGN 500 expense for fuel in "Amina Farm"/);
  const noCurrency = await run({ command: "Log an expense of 500 for seed", confirmed: true, businessRequest });
  assert.equal(noCurrency.status, "needs-input"); assert.deepEqual(noCurrency.missingInformation, ["currency"]);
});

// Found live (business/CRM follow-up audit): a genuinely unrecognized
// request (e.g. "mark invoice paid" -- no such action exists yet) always
// fell through to the workspace-creation fallback and asked "what should I
// call this workspace," even when a real workspace already exists --
// actively misleading, since it implies no workspace was ever created.
test("an unrecognized request for an EXISTING workspace gets an honest 'I didn't understand' response, not a request to name a new one", async () => {
  const client = { record_id: "rec_1", version: 1, data: { info: { businessName: "Amina Farm" }, editable: {} } };
  const businessRequest = async ({ method }) => (method === "GET" ? { body: { clients: [client] } } : { body: client });
  const result = await run({ command: "mark invoice paid", confirmed: true, businessRequest });
  assert.equal(result.status, "needs-input");
  assert.match(result.response, /didn't understand that|Amina Farm/i);
  assert.doesNotMatch(result.response, /what should I call this/i, "must not imply no workspace exists");
});

test("an unrecognized request with no workspace at all still asks what to call one, unaffected by the fix", async () => {
  const result = await run({ command: "mark invoice paid", confirmed: true, businessRequest: async () => ({ body: { clients: [] } }) });
  assert.equal(result.status, "needs-input");
  assert.match(result.response, /what should I call this/i);
});

// Found live (full-suite run after the fix above): the honest-workspace-check
// itself does a real lookup, and when that lookup throws (e.g. no live
// Postgres) the error must not surface as a "blocked" response for what is
// really just an unrecognized command -- it should fall back to the original
// "name a new workspace" prompt exactly as if no workspace lookup had been
// attempted at all.
test("an unrecognized request whose workspace lookup itself fails still asks what to call a workspace, instead of surfacing the lookup error", async () => {
  const result = await run({ command: "mark invoice paid", confirmed: true, businessRequest: async () => { throw new Error("PostgreSQL is not configured"); } });
  assert.equal(result.status, "needs-input");
  assert.match(result.response, /what should I call this/i);
});

function ledgerClient(transactions) {
  return { record_id: "rec_1", version: 1, data: { info: { businessName: "Amina Farm" }, editable: { transactions } } };
}
const tx = (date, type, amount, currency, category = "", description = "") => ({ date, type, amount, currency, category, description });
const ask = (command, transactions) => run({ command, businessRequest: async () => ({ body: { clients: transactions ? [ledgerClient(transactions)] : [] } }) });

test("a summary question is answered from what was really logged, per currency and period", async () => {
  const now = new Date().toISOString().slice(0, 10), month = now.slice(0, 7);
  const rows = [tx(`${month}-01`, "income", 6000, "KES", "maize"), tx(`${month}-02`, "income", 4000, "KES", "beans"), tx(`${month}-03`, "expense", 1500, "KES", "seed"),
    tx(`${month}-03`, "expense", 20, "USD", "app"), tx("2020-01-05", "expense", 999, "KES", "seed")];
  const both = await ask("How much did I make this month?", rows);
  assert.equal(both.status, "completed");
  assert.match(both.response, /^This month, in "Amina Farm": KES 10,000 income \(2 entries\)/);
  const spent = await ask("How much did I spend this month?", rows);
  assert.equal(spent.response, 'This month, in "Amina Farm": KES 1,500 expenses (1 entry); $20.00 expenses (1 entry).');
  const seed = await ask("How much did I spend on seed so far?", rows);
  assert.match(seed.response, /KES 2,499 expenses \(2 entries\)/, "an item filter and all-time when no period is given");
  assert.doesNotMatch(seed.response, /\$/, "dollars are not mixed in");
  const profit = await ask("What is my profit this month?", rows);
  assert.match(profit.response, /KES 10,000 income \(2 entries\) and KES 1,500 expenses \(1 entry\), net KES 8,500; \$0\.00 income \(0 entries\) and \$20\.00 expenses \(1 entry\), net \$-20\.00/);
  const none = await ask("How much income did I make last month?", rows);
  assert.match(none.response, /^You have no income recorded last month\. To start, say for example "I sold 5 bags of maize for 6000 shillings"/);
});

test("with no workspace the answer says nothing is recorded instead of failing or guessing", async () => {
  const result = await ask("How much did I spend this month?", null);
  assert.equal(result.status, "completed"); assert.match(result.response, /You have not recorded any income or expenses yet, because you do not have a business or nonprofit workspace/);
});

test("the dashboard totals the currency used most and names the others instead of adding them", () => {
  const dashboard = computeBusinessDashboard({ transactions: [tx("2026-09-01", "income", 6000, "KES"), tx("2026-09-02", "expense", 1000, "KES"), tx("2026-09-02", "income", 50, "USD"), { type: "expense", amount: 10 }],
    leads: [], invoiceItems: [], invoices: [], grants: [], tasks: [], appointments: [] });
  assert.equal(dashboard.currency, "KES"); assert.equal(dashboard.income, 6000); assert.equal(dashboard.expenses, 1000); assert.equal(dashboard.netIncome, 5000);
  assert.deepEqual(dashboard.otherCurrencies, ["USD"]);
  const empty = computeBusinessDashboard({ transactions: [], leads: [], invoiceItems: [], invoices: [], grants: [], tasks: [], appointments: [] });
  assert.equal(empty.currency, "USD"); assert.equal(empty.netIncome, 0);
});

test("the planner sends a ledger phrase to the business tools, reads without confirmation, and asks for a missing currency", async () => {
  const tools = { list: async () => [{ tool_id: "business.manage", availability: "available" }, { tool_id: "business.query", availability: "available" }] };
  const planner = new OpenEndedPlanner({ model: { plan: async () => assert.fail("no model"), respond: async () => assert.fail("no model") }, tools,
    applications: { list: () => [{ applicationId: "business", capabilities: [], riskTiers: [] }] } });
  const plan = text => planner.plan({ command: { text, channel: "typed", locale: "en", tenantId: "t", actorId: "u" }, context: { can: () => true, roles: [] } });
  assert.equal((await plan("How much did I spend on seed this month?")).steps[0].toolId, "business.query");
  assert.equal((await plan("Show me my farm expenses this month")).steps[0].toolId, "business.query");
  assert.equal((await plan("I sold 5 bags of maize for 6000 shillings")).steps[0].toolId, "business.manage");
  assert.match((await plan("Log an expense of 500 for seed")).clarification, /Which currency is 500 in/);
});

const { BehaviorSpine } = require("../../nexus/runtime/behavior-spine.js");
const { createBusinessExecutor } = require("../../nexus/business/authoritative-executor.js");

test("the confirmation says exactly what will be logged, and every other business action keeps the generic wording", async () => {
  const tools = { get: async id => ({ tool_id: id }) };
  const spine = new BehaviorSpine({ agent: { command: async () => {} }, engine: { tools, executeTask: async () => ({}) }, tasks: { get: async () => null }, conversations: {}, workspaceStates: { stage: async () => {}, acknowledge: async () => {} } });
  const prompt = command => spine.confirmationPrompt({ task: { steps: [{ step_id: "s1", tool_id: "business.manage", input: { command } }] }, pendingStepId: "s1" });
  assert.equal(await prompt("I sold 5 bags of maize for 6000 shillings"), "I can log KES 6,000 as income for 5 bags of maize in your business workspace. Say yes to save it, or no to cancel.");
  assert.equal(await prompt("We spent $40.50 on seed"), "I can log $40.50 as an expense for seed in your business workspace. Say yes to save it, or no to cancel.");
  const generic = "I prepared the request and need your confirmation before the next governed action.";
  for (const command of ["Add a customer named Amina", "Log an expense of 500 for seed", "Start a business called Amina Farm", ""]) assert.equal(await prompt(command), generic, command);
});

test("a business read with nothing to read yet is an answer, not a 422 error", async () => {
  const execute = createBusinessExecutor({ repository: { list: async () => [] }, access: { authorize: async () => {} }, consents: { active: async () => ({ granted: true }), grant: async item => item }, env: {} });
  const context = { tenantId: "t", userId: "u", can: () => true, hasRole: () => false, roles: [], requestId: "r", correlationId: "c" };
  const result = await execute({ input: { command: "Show me my business dashboard" }, context }).catch(error => ({ error }));
  assert.ok(!result.error, result.error?.message);
  assert.equal(result.verified, true); assert.match(result.response, /You do not have a business or nonprofit workspace yet/);
  await assert.rejects(() => execute({ input: { command: "Log a $50 expense for supplies" }, context }), error => error.code === "business_action_incomplete", "a write with no workspace still fails honestly");
});
