"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

const { classify, precheck, run, computeBusinessDashboard, periodIn } = voiceDispatch;

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
// request (e.g. "archive my old invoices" -- no such action exists) always
// fell through to the workspace-creation fallback and asked "what should I
// call this workspace," even when a real workspace already exists --
// actively misleading, since it implies no workspace was ever created.
test("an unrecognized request for an EXISTING workspace gets an honest 'I didn't understand' response, not a request to name a new one", async () => {
  const client = { record_id: "rec_1", version: 1, data: { info: { businessName: "Amina Farm" }, editable: {} } };
  const businessRequest = async ({ method }) => (method === "GET" ? { body: { clients: [client] } } : { body: client });
  const result = await run({ command: "archive my old invoices", confirmed: true, businessRequest });
  assert.equal(result.status, "needs-input");
  assert.match(result.response, /didn't understand that|Amina Farm/i);
  assert.doesNotMatch(result.response, /what should I call this/i, "must not imply no workspace exists");
});

test("an unrecognized request with no workspace at all still asks what to call one, unaffected by the fix", async () => {
  const result = await run({ command: "archive my old invoices", confirmed: true, businessRequest: async () => ({ body: { clients: [] } }) });
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
  const result = await run({ command: "archive my old invoices", confirmed: true, businessRequest: async () => { throw new Error("PostgreSQL is not configured"); } });
  assert.equal(result.status, "needs-input");
  assert.match(result.response, /what should I call this/i);
});

function ledgerClient(transactions) {
  return { record_id: "rec_1", version: 1, data: { info: { businessName: "Amina Farm" }, editable: { transactions } } };
}
const tx = (date, type, amount, currency, category = "", description = "") => ({ date, type, amount, currency, category, description });
const ask = (command, transactions) => run({ command, businessRequest: async () => ({ body: { clients: transactions ? [ledgerClient(transactions)] : [] } }) });

test("a summary question is answered from what was really logged, per currency and period", async () => {
  // Found live: this used to hardcode day-of-month 01/02/03 for its "this
  // month" fixtures, assuming "today" always falls on or after the 3rd --
  // false on the 1st or 2nd of any month, when periodIn's own "this month"
  // upper bound (today) excludes the fixture's later, still-future dates.
  // today/month are derived from periodIn itself (the function under test),
  // not recomputed independently, so this can't drift from its definition of
  // "today" the way a second, hand-rolled date calculation could.
  const today = periodIn("today", new Date()).from, month = today.slice(0, 7);
  const day = n => { const d = `${month}-${String(n).padStart(2, "0")}`; return d <= today ? d : today; };
  const rows = [tx(day(1), "income", 6000, "KES", "maize"), tx(day(2), "income", 4000, "KES", "beans"), tx(day(3), "expense", 1500, "KES", "seed"),
    tx(day(3), "expense", 20, "USD", "app"), tx("2020-01-05", "expense", 999, "KES", "seed")];
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

// Found live (date/timezone audit): periodIn used to compute "today"/"this week"/"this month"/"this year"
// from the SERVER's raw UTC clock (now.getUTCFullYear/getUTCDate/getUTCDay, toISOString().slice(0,10)),
// unlike every other module in this app, which all use the shared localDay(now, timeZone) utility. In
// this app's own default zone, Africa/Nairobi (UTC+3), local midnight falls 3 hours BEFORE UTC midnight:
// a sale logged just after local midnight (still the PREVIOUS day by the server's UTC clock) silently
// vanished from "today's" total once the server's UTC clock caught up to the new day a few hours later --
// both the write (transaction/invoice date stamps) and the read (periodIn) used the same wrong clock, so
// this stayed invisible except in exactly that ~3-hour window every real day.
test("periodIn computes 'today'/'this week'/'this month'/'last month' in the person's own local day, not the server's UTC day", () => {
  // 22:00 UTC on 29 Sept 2026 is already 01:00 on 30 Sept 2026 in Africa/Nairobi (UTC+3) -- the exact
  // "already tomorrow locally, still today by UTC" window the bug lived in.
  const now = new Date("2026-09-29T22:00:00.000Z");
  const nairobiToday = periodIn("today", now, "Africa/Nairobi");
  assert.equal(nairobiToday.from, "2026-09-30", "a Nairobi user's 'today' must be their own local day, not the server's UTC day");
  assert.equal(nairobiToday.to, "2026-09-30");

  const utcToday = periodIn("today", now, "UTC");
  assert.equal(utcToday.from, "2026-09-29", "a different, explicitly UTC caller must still see the UTC day -- proving the zone is genuinely honored, not hardcoded");

  const defaultZone = periodIn("today", now);
  assert.equal(defaultZone.from, "2026-09-30", "with no timeZone passed at all, the app's own real default (Africa/Nairobi) must be used, never the server's raw UTC clock -- this is the exact call shape financeSummary used before the fix");

  // "this week"/"this month"/"last month" must all be derived from that same corrected local day.
  const nairobiWeek = periodIn("this week", now, "Africa/Nairobi");
  assert.equal(nairobiWeek.to, "2026-09-30");
  const monthBoundary = new Date("2026-08-31T22:00:00.000Z"); // 01:00 on 1 Sept in Nairobi -- crosses a month AND a UTC-day boundary at once
  const nairobiMonth = periodIn("this month", monthBoundary, "Africa/Nairobi");
  assert.equal(nairobiMonth.from, "2026-09-01", "the new month must already be reflected in Nairobi even though it's still 31 August by UTC");
  const nairobiLastMonth = periodIn("last month", monthBoundary, "Africa/Nairobi");
  assert.deepEqual(nairobiLastMonth, { label: "last month", from: "2026-08-01", to: "2026-08-31" });
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

// Found live (money-arithmetic audit): invoiceItems rows each carry their own currency, but nothing
// stopped a later item from using a DIFFERENT currency than items already on the same invoice -- the
// invoice header itself has no currency field at all. exportInvoice's PDF total then summed raw
// quantity*unitPrice across every item regardless of currency, blending e.g. $100 USD and KES 3,000 into
// one meaningless number with no currency label. An invoice is inherently one bill in one currency, so
// addInvoiceItem now refuses a mismatched item outright rather than letting the PDF try to reconcile it.
test("adding an invoice line item in a different currency than the invoice's existing items is refused", async () => {
  const client = { record_id: "rec_1", version: 1, data: { info: { businessName: "Amina Farm" },
    editable: { invoices: [{ invoiceNumber: "INV-1042", clientName: "Green Valley Co-op" }], invoiceItems: [{ invoiceNumber: "INV-1042", description: "Consulting", quantity: 1, unitPrice: 50, currency: "USD" }] } } };
  const businessRequest = async ({ method }) => (method === "GET" ? { body: { clients: [client] } } : { body: client });
  const mismatched = await run({ command: "add a line item to invoice INV-1042: labour at 3000 shillings each", confirmed: true, businessRequest });
  assert.equal(mismatched.status, "needs-input", JSON.stringify(mismatched));
  assert.match(mismatched.response, /already has line items in USD.*can't mix/i);

  const matching = await run({ command: "add a line item to invoice INV-1042: supplies at $20 each", confirmed: false, businessRequest });
  assert.equal(matching.status, "needs-confirmation", "a genuinely matching currency must still be allowed through to confirmation");
});
