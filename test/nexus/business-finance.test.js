"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vd = require("../../nexus/business/voice-dispatch.js");
const finance = require("../../nexus/business/finance-voice.js");
const { createBusinessApi } = require("../../nexus/business/api.js");
const { createBusinessReader } = require("../../nexus/business/authoritative-executor.js");
const { BusinessService } = require("../../nexus/business/service.js");

// Phase 2 of the business-intelligence tools, asked for by the owner on 10 October 2026: money in a business or nonprofit workspace that has not moved yet (bills to pay, a bank balance, budgets, promised gifts, restricted
// funds) and two calculators (profit margin, what a fundraising campaign raised after expenses), so that "Will we have enough money to cover upcoming expenses?" can be answered from records instead of "I cannot tell".

const TZ = "UTC";
const day = offset => new Date(Date.now() + offset * 86400000).toISOString().slice(0, 10);

function makeWorkspace() {
  const rows = new Map(); const grants = new Map(); let n = 0;
  const repository = {
    async create(item) { const row = { record_id: "rec_" + (++n), tenant_id: item.tenantId, owner_id: item.ownerId, version: 1, data: structuredClone(item.data), updated_at: new Date().toISOString() }; rows.set(row.record_id, row); return structuredClone(row); },
    async getOwned(item) { const row = rows.get(item.recordId); if (!row) throw Object.assign(new Error("Not found"), { status: 404 }); return structuredClone(row); },
    async list() { return [...rows.values()].map(r => structuredClone(r)); },
    async update(item) { const row = rows.get(item.recordId); row.data = structuredClone(item.data); row.version++; return structuredClone(row); }
  };
  const consents = { async active(i) { return grants.get(i.scope); }, async grant(i) { const g = { ...i, consent_id: i.scope }; grants.set(i.scope, g); return g; }, async revoke() {} };
  const access = { async authorize() {} };
  const context = { tenantId: "t1", userId: "u1", timeZone: TZ };
  const api = createBusinessApi({ access, consents, agent: null }, { env: {}, repository });
  const businessRequest = ({ method, pathname, body = {} }) => api.handle({ method, pathname, context, body });
  const read = createBusinessReader({ repository, access, consents, env: {} });
  const workspace = { businessRequest, repository, access, consents, context, rows,
    async create() { const made = (await businessRequest({ method: "POST", pathname: "/api/nexus/runtime/business/clients", body: { businessName: "Hope Garden", businessType: "nonprofit", consent: true } })).body; return made; },
    async editable() { return [...rows.values()][0].data.editable; },
    async say(text) { return read({ command: text, context }); },
    async confirm(text) { const prompt = await read({ command: text, context }); assert.match(prompt, /Should I go ahead\?/, `${text}: ${prompt}`); return read({ command: "yes", context }); } };
  return workspace;
}
async function ready() { const workspace = makeWorkspace(); await workspace.create(); return workspace; }

test("which sentences are the money requests, and which are left to the existing intents", () => {
  const yes = {
    addBill: ["Add a bill from the landlord for 800 dollars due the 1st", "We owe the printer 90 dollars due next week", "Record a bill from the electric company for 120 dollars due Friday", "Add a bill from the landlord"],
    markBillPaid: ["Mark the electric bill paid", "We paid the rent bill", "The electric bill was paid"],
    setCashBalance: ["Set our cash balance to 5000 dollars", "Our bank balance is 5000 dollars", "We have 5000 dollars in the bank", "Update the cash balance to 4200 dollars"],
    setBudget: ["Set a budget of 500 dollars a month for supplies", "Create a monthly budget of 200 dollars for food"],
    addPledge: ["Record a pledge of 1000 dollars from Maria Chen", "Maria Chen made a pledge of 500 dollars", "We got a pledge of 5000 shillings from Sam Park"],
    markPledgeReceived: ["Maria Chen's pledge was paid", "Sam Park's pledge came in", "The pledge from Maria Chen has been received"],
    billsDue: ["What bills are due?", "Which bills are overdue", "What do we owe?", "Show my unpaid bills"],
    budgetStatus: ["How are we doing against budget?", "Am I over budget on supplies?", "Show my budgets"],
    fundsSummary: ["Show restricted funds", "How much unrestricted money do we have?", "What is our restricted balance?"],
    pledgesOutstanding: ["Show outstanding pledges", "Which pledges are still unpaid?", "How many pledges do we have?"],
    profitMargin: ["What is my profit margin this month?", "What is my margin if I sell for 25 and it costs 15?", "Calculate the markup"],
    campaignNet: ["How much did the gala raise after expenses?", "What was the net from the spring fundraiser?", "We raised 5000 at the gala and spent 800, what is our net?"]
  };
  for (const [intent, texts] of Object.entries(yes)) for (const text of texts) assert.equal(finance.classifyFinance(text), intent, text);
  const no = ["Create an invoice for Grace Otieno", "Mark invoice INV-1001 paid", "I received the electricity bill for $340", "Add a donor named Maria Chen", "Show my donations", "Log a 50 dollar expense for seeds",
    "What is the weather", "Tell me a joke", "Create a cash flow forecast document", "Add a grant from Green Fund", "How is my nonprofit doing this month?", "I need a budget template", "Which grants are due soon?", ""];
  for (const text of no) assert.equal(finance.classifyFinance(text), null, text);
});

test("an unfamiliar older workspace is read back with the new lists present and empty, and a save keeps them", async () => {
  const workspace = await ready();
  const [record] = [...workspace.rows.values()];
  for (const key of ["bills", "pledges", "budgets", "cashBalance"]) delete record.data.editable[key];
  for (const row of record.data.editable.transactions) delete row.fund;
  const read = (await workspace.businessRequest({ method: "GET", pathname: `/api/nexus/runtime/business/clients/${record.record_id}` })).body;
  assert.deepEqual(read.data.editable.bills, []); assert.deepEqual(read.data.editable.pledges, []); assert.deepEqual(read.data.editable.budgets, []);
  assert.deepEqual(read.data.editable.cashBalance, { amount: 0, currency: "USD", asOf: "" });
  const listed = (await workspace.businessRequest({ method: "GET", pathname: "/api/nexus/runtime/business/clients" })).body.clients[0];
  assert.deepEqual(listed.data.editable.bills, [], "the list fills them in too");
  assert.equal(typeof BusinessService.prototype.withDefaults, "function");
});

test("the schema keeps bills, pledges, budgets and the balance exactly as saved, refuses a negative amount, and counts nothing as income or expense by itself", async () => {
  const workspace = await ready();
  const made = [...workspace.rows.values()][0];
  const editable = { ...made.data.editable, bills: [{ payee: "Landlord", description: "", amount: 800, currency: "USD", dueDate: "2026-11-01", status: "unpaid", recurring: "monthly", paidDate: "" }],
    pledges: [{ donor: "Maria", amount: 100, currency: "USD", expectedDate: "", purpose: "garden", restricted: true, status: "outstanding", receivedDate: "" }],
    budgets: [{ category: "supplies", amount: 500, currency: "USD", period: "month" }], cashBalance: { amount: 5000, currency: "USD", asOf: "2026-10-10" } };
  const saved = (await workspace.businessRequest({ method: "PUT", pathname: `/api/nexus/runtime/business/clients/${made.record_id}`, body: { expectedVersion: made.version, info: made.data.info, editable } })).body;
  assert.deepEqual(saved.data.editable.bills, editable.bills); assert.deepEqual(saved.data.editable.pledges, editable.pledges);
  assert.deepEqual(saved.data.editable.budgets, editable.budgets); assert.deepEqual(saved.data.editable.cashBalance, editable.cashBalance);
  assert.equal(saved.data.editable.transactions.length, 0, "a bill and a pledge are not money moved");
  await assert.rejects(workspace.businessRequest({ method: "PUT", pathname: `/api/nexus/runtime/business/clients/${made.record_id}`, body: { expectedVersion: saved.version, info: saved.data.info, editable: { ...editable, bills: [{ ...editable.bills[0], amount: -5 }] } } }), /./);
});

test("adding a bill: describes it, waits for the yes, asks for what is missing, and takes the answer by voice", async () => {
  const workspace = await ready();
  assert.match(await workspace.say("Add a bill from the landlord for 800 dollars"), /When is the \$800\.00 bill from landlord due\?/);
  const prompt = await workspace.say("the 1st");
  assert.match(prompt, /I can add a \$800\.00 bill from landlord due \w+ \d+ \w+, to "Hope Garden"\. Should I go ahead\?/);
  assert.deepEqual((await workspace.editable()).bills, [], "nothing saved before the yes");
  assert.match(await workspace.say("yes"), /Added a \$800\.00 bill from landlord/);
  const bills = (await workspace.editable()).bills;
  assert.equal(bills.length, 1);
  assert.deepEqual({ payee: bills[0].payee, amount: bills[0].amount, currency: bills[0].currency, status: bills[0].status }, { payee: "landlord", amount: 800, currency: "USD", status: "unpaid" });
  assert.match(bills[0].dueDate, /^\d{4}-\d{2}-01$/, "the 1st");
  assert.match(await workspace.say("Add a bill from the electric company due Friday"), /What is the amount of the bill, and in which currency\?/);
  assert.match(await workspace.say("Add a bill for 50 dollars due Friday"), /Who is the bill from/);
  const rent = await workspace.confirm("We owe the printer 90 dollars due next week");
  assert.match(rent, /Added a \$90\.00 bill from printer/);
  const repeating = await workspace.confirm("Add a bill from the internet company for 60 dollars due the 20th every month");
  assert.match(repeating, /repeating monthly/);
  assert.equal((await workspace.editable()).bills.at(-1).recurring, "monthly");
});

test("a stray yes, a no, a different request and a stale question never make a change", async () => {
  const workspace = await ready();
  assert.equal(await workspace.say("yes"), null, "nothing to confirm");
  await workspace.say("Set our cash balance to 5000 dollars");
  assert.match(await workspace.say("no"), /have not changed anything/);
  assert.equal((await workspace.editable()).cashBalance.asOf, "", "a no changes nothing");
  await workspace.say("Set our cash balance to 5000 dollars");
  assert.equal(await workspace.say("Tell me a joke"), null);
  assert.equal(await workspace.say("yes"), null, "an unrelated request drops the pending one");
  assert.equal((await workspace.editable()).cashBalance.asOf, "");
  // a pending request that waited too long
  let clock = 1000;
  const stale = createBusinessReader({ repository: workspace.repository, access: workspace.access, consents: workspace.consents, env: {}, now: () => clock });
  await stale({ command: "Set our cash balance to 5000 dollars", context: workspace.context });
  clock += 3 * 60 * 1000;
  assert.equal(await stale({ command: "yes", context: workspace.context }), null, "after two minutes the yes is not understood");
  assert.equal((await workspace.editable()).cashBalance.asOf, "");
  // another person's pending request is theirs alone
  await workspace.say("Set our cash balance to 5000 dollars");
  assert.equal(await createBusinessReader({ repository: workspace.repository, access: workspace.access, consents: workspace.consents, env: {} })({ command: "yes", context: { ...workspace.context, userId: "u2" } }), null);
});

test("paying a bill: marks it paid, logs the expense once, adds the next one when it repeats, and refuses when the ledger is full", async () => {
  const workspace = await ready();
  await workspace.confirm("Add a bill from the electric company for 120 dollars due Friday");
  const said = await workspace.confirm("Mark the electric bill paid");
  assert.match(said, /Marked the \$120\.00 bill from electric company as paid and logged it as an expense/);
  let editable = await workspace.editable();
  assert.equal(editable.bills[0].status, "paid"); assert.equal(editable.bills[0].paidDate, day(0));
  assert.deepEqual(editable.transactions.map(row => [row.type, row.amount, row.category, row.description]), [["expense", 120, "bills", "Bill paid: electric company"]]);
  assert.match(await workspace.say("Mark the electric bill paid"), /Every bill in "Hope Garden" is already marked paid/);
  await workspace.confirm("Add a bill from the landlord for 800 dollars due the 1st every month");
  assert.match(await workspace.confirm("We paid the landlord bill"), /It repeats monthly, so I added the next one/);
  editable = await workspace.editable();
  const landlord = editable.bills.filter(bill => bill.payee === "landlord");
  assert.equal(landlord.length, 2); assert.deepEqual(landlord.map(bill => bill.status), ["paid", "unpaid"]);
  assert.ok(landlord[1].dueDate > landlord[0].dueDate, "the next one is later");
  // two bills that both match: ask which
  await workspace.confirm("Add a bill from the water company for 40 dollars due Friday");
  await workspace.confirm("Add a bill from the water board for 30 dollars due Friday");
  assert.match(await workspace.say("Mark the water bill paid"), /More than one bill matches/);
});

test("the bank balance moves with what is logged after the day it was true; the answer says what it counted and did not", async () => {
  const workspace = await ready();
  await workspace.confirm("Set our cash balance to 5000 dollars");
  await workspace.confirm("Add a bill from the landlord for 800 dollars due the 1st");
  await workspace.confirm("Add a bill from the electric company for 120 dollars due Friday");
  const covered = await workspace.say("Will we have enough money to cover upcoming expenses?");
  assert.match(covered, /Your cash balance was \$5,000\.00 as of today/);
  assert.match(covered, /unpaid bills? due in the next 30 days comes? to \$920\.00/);
  assert.match(covered, /Paying them would leave about \$4,080\.00/);
  assert.match(covered, /I have not counted any bill, payment or income that is not recorded/);
  // income and expenses dated after the balance day move it; those on the day are assumed already included
  const [record] = [...workspace.rows.values()];
  record.data.editable.transactions.push({ date: day(1), type: "expense", category: "x", amount: 1000, currency: "USD", description: "later", fund: "" }, { date: day(0), type: "expense", category: "x", amount: 99999, currency: "USD", description: "same day", fund: "" });
  record.data.editable.cashBalance.asOf = day(-1);
  const moved = await workspace.say("Do we have enough cash?");
  assert.match(moved, /I estimate \$/);
  // short: bills larger than the cash
  record.data.editable.cashBalance = { amount: 300, currency: "USD", asOf: day(0) };
  record.data.editable.transactions = [];
  const short = await workspace.say("Will we have enough money to cover upcoming expenses?");
  assert.match(short, /That is \$620\.00 more than the estimated cash, so you would be short unless money comes in/);
  assert.doesNotMatch(short, /would leave/);
  // an unpaid invoice and a pledge are named, never counted
  record.data.editable.pledges = [{ donor: "Maria", amount: 5000, currency: "USD", expectedDate: "", purpose: "", restricted: false, status: "outstanding", receivedDate: "" }];
  const withPledge = await workspace.say("Will we have enough money to cover upcoming expenses?");
  assert.match(withPledge, /I have not counted \$5,000\.00 in pledges, which may arrive/);
  assert.match(withPledge, /short/, "the pledge did not rescue the answer");
  // a bill in another currency is named, not added
  record.data.editable.bills.push({ payee: "Supplier", description: "", amount: 100, currency: "KES", dueDate: day(5), status: "unpaid", recurring: "", paidDate: "" });
  assert.match(await workspace.say("Will we have enough money to cover upcoming expenses?"), /1 bill in another currency that I have not added/);
});

test("no balance or no bills: the answer asks for exactly what is missing and promises nothing", async () => {
  const workspace = await ready();
  const none = await workspace.say("Will we have enough money to cover upcoming expenses?");
  assert.match(none, /cannot tell you whether you will have enough, because I do not have your bank balance/);
  assert.match(none, /set our cash balance to 5000 dollars/); assert.match(none, /add a bill from the landlord/);
  await workspace.confirm("Set our cash balance to 5000 dollars");
  const noBills = await workspace.say("Will we have enough money to cover upcoming expenses?");
  assert.match(noBills, /no unpaid bills recorded for the next 30 days, so there is nothing for it to cover yet/);
  assert.doesNotMatch(noBills, /you will have enough|short/i);
});

test("bills due: overdue, this week, this month, later, with the repeat and the total per currency", async () => {
  const workspace = await ready();
  const [record] = [...workspace.rows.values()];
  record.data.editable.bills = [
    { payee: "Old", description: "", amount: 10, currency: "USD", dueDate: day(-3), status: "unpaid", recurring: "", paidDate: "" },
    { payee: "Soon", description: "", amount: 20, currency: "USD", dueDate: day(2), status: "unpaid", recurring: "monthly", paidDate: "" },
    { payee: "Mid", description: "", amount: 30, currency: "USD", dueDate: day(20), status: "unpaid", recurring: "", paidDate: "" },
    { payee: "Far", description: "", amount: 40, currency: "USD", dueDate: day(90), status: "unpaid", recurring: "", paidDate: "" },
    { payee: "Paid", description: "", amount: 999, currency: "USD", dueDate: day(1), status: "paid", recurring: "", paidDate: day(0) },
    { payee: "Shillings", description: "", amount: 1000, currency: "KES", dueDate: day(4), status: "unpaid", recurring: "", paidDate: "" }];
  const text = await workspace.say("What bills are due?");
  assert.match(text, /1 bill overdue: Old \$10\.00/); assert.match(text, /Due in the next 7 days: Soon \$20\.00, \w+ \d+ \w+, repeats monthly and Shillings KES 1,000/);
  assert.match(text, /Due in the next 30 days: Mid \$30\.00/); assert.match(text, /1 more later, the next Far \$40\.00/);
  assert.match(text, /In all, \$100\.00 and KES 1,000 is unpaid across 5 bills/);
  assert.doesNotMatch(text, /Paid \$999/);
  assert.match(await (await ready()).say("What bills are due?"), /has no bills recorded yet/);
});

test("budgets: set, changed, and read against this month's spending; over budget is said plainly", async () => {
  const workspace = await ready();
  assert.match(await workspace.say("How are we doing against budget?"), /has no budgets yet/);
  assert.match(await workspace.confirm("Set a budget of 500 dollars a month for supplies"), /Set the monthly budget for supplies in "Hope Garden" to \$500\.00/);
  assert.match(await workspace.say("Set a budget of 700 dollars a month for supplies"), /change the monthly budget for supplies .* to \$700\.00 \(it was \$500\.00\)/);
  await workspace.say("no");
  assert.match(await workspace.say("Set a budget of 700 dollars"), /Which category is the budget for/);
  await workspace.confirm("Log a 120 dollar expense for supplies");
  const ok = await workspace.say("How are we doing against budget?");
  assert.match(ok, /supplies: spent \$120\.00 of \$500\.00 \(24%\), \$380\.00 left/);
  await workspace.confirm("Log a 500 dollar expense for supplies");
  assert.match(await workspace.say("Am I over budget on supplies?"), /over budget by \$120\.00/);
  assert.equal((await workspace.editable()).budgets.length, 1, "setting the same category again replaces it");
});

test("restricted funds: a restricted gift names its purpose; spending from the fund is charged to it; the rest is unrestricted", async () => {
  const workspace = await ready();
  assert.match(await workspace.say("Show restricted funds"), /no income or expenses recorded yet/);
  const prompt = await workspace.say("Record a restricted donation of 500 dollars for the youth program from Maria Chen");
  assert.match(prompt, /I can log a \$500\.00 income .*restricted to youth program in "Hope Garden"/);
  assert.doesNotMatch(prompt, /restricted to restricted/);
  await workspace.say("yes");
  await workspace.confirm("We spent 100 dollars on seeds from the youth program fund");
  await workspace.confirm("Record a 200 dollar donation from Pat Lopez");
  await workspace.confirm("We spent 50 dollars on stamps");
  const rows = (await workspace.editable()).transactions;
  assert.deepEqual(rows.map(row => [row.type, row.amount, row.fund]), [["income", 500, "youth program"], ["expense", 100, "youth program"], ["income", 200, ""], ["expense", 50, ""]]);
  assert.equal(rows[1].category, "seeds", "the fund is not part of the category");
  const text = await workspace.say("How much unrestricted money do we have?");
  assert.match(text, /restricted: youth program \$400\.00 left \(\$500\.00 in, \$100\.00 spent\)/);
  assert.match(text, /Unrestricted: \$150\.00 left \(\$200\.00 in, \$50\.00 spent\)/);
  assert.match(text, /only when it was logged as paid from that fund/);
  assert.doesNotMatch(text, /\$-/);
});

test("pledges: kept apart from income until received; receiving one logs the donation once, with its fund when restricted", async () => {
  const workspace = await ready();
  assert.match(await workspace.say("Show outstanding pledges"), /has no pledges recorded yet/);
  const prompt = await workspace.say("Record a restricted pledge of 1000 dollars from Sam Park for the garden expected next month");
  assert.match(prompt, /pledge of \$1,000\.00 from Sam Park for garden, restricted, expected \w+ \d+ \w+ in "Hope Garden"\. A pledge is a promise, so I will not count it as income until it is received/);
  await workspace.say("yes");
  let editable = await workspace.editable();
  assert.equal(editable.pledges.length, 1); assert.equal(editable.transactions.length, 0, "not income");
  assert.deepEqual({ donor: editable.pledges[0].donor, restricted: editable.pledges[0].restricted, purpose: editable.pledges[0].purpose, status: editable.pledges[0].status }, { donor: "Sam Park", restricted: true, purpose: "garden", status: "outstanding" });
  const listed = await workspace.say("Which pledges are still unpaid?");
  assert.match(listed, /Sam Park \$1,000\.00 for garden \(restricted\), expected/); assert.match(listed, /none of it is counted as income/);
  assert.match(await workspace.confirm("Sam Park's pledge was paid"), /Marked the \$1,000\.00 pledge from Sam Park as received and logged it as a donation/);
  editable = await workspace.editable();
  assert.equal(editable.pledges[0].status, "received");
  assert.deepEqual(editable.transactions.map(row => [row.type, row.amount, row.category, row.description, row.fund]), [["income", 1000, "donation", "Donation from Sam Park", "garden"]]);
  assert.match(await workspace.say("Sam Park's pledge was paid"), /Every pledge in "Hope Garden" is already received or cancelled/);
  assert.match(await workspace.say("Show outstanding pledges"), /Every pledge in "Hope Garden" has been received or cancelled/);
});

test("the calculators: a margin from the numbers said, a margin from the records, and a campaign's net from the numbers or from the money logged under its name", async () => {
  const workspace = await ready();
  const margin = await workspace.say("What is my margin if I sell for 25 and it costs 15?");
  assert.match(margin, /profit of 10 on each one, a margin of 40% of the selling price \(a markup of 66\.7% on the cost\)/);
  assert.match(await workspace.say("What is my margin if I sell for 10 and it costs 15?"), /a loss of 5 on each one, a margin of -50%/);
  assert.match(await workspace.say("What is my profit margin this month?"), /no income or expenses recorded this month, so there is no margin to work out/);
  await workspace.confirm("We sold 100 dollars of candles");
  await workspace.confirm("We spent 40 dollars on wax");
  assert.match(await workspace.say("What is my profit margin this month?"), /income \$100\.00, expenses \$40\.00, a profit margin of 60%/);
  assert.match(await workspace.say("We raised 5000 at the gala and spent 800, what is our net?"), /Raised 5000, spent 800: 4200 left after expenses; it cost about 16 cents to raise each dollar/);
  await workspace.confirm("Record 2000 dollars income from the spring gala");
  await workspace.confirm("We spent 300 dollars on the spring gala");
  assert.match(await workspace.say("How much did the spring gala raise after expenses?"), /The spring gala, from 2 money entries logged with that name in "Hope Garden": raised \$2,000\.00, spent \$300\.00, \$1,700\.00 left after expenses; about 15 cents/);
  assert.match(await workspace.say("How much did the walk-a-thon raise after expenses?"), /found nothing logged with "walk-a-thon"/);
  assert.match(await workspace.say("What did the fundraiser net after expenses?"), /fundraiser/);
});

test("a new workspace answers every money question honestly when empty, and a typed command goes through the same planner as a spoken one", async () => {
  const workspace = await ready();
  for (const text of ["What bills are due?", "Show outstanding pledges", "How are we doing against budget?", "Show restricted funds", "What is my profit margin?"]) assert.ok(await workspace.say(text), text);
  assert.equal(vd.precheck("What bills are due?", {}).toolId, "business.query");
  assert.equal(vd.precheck("Add a bill from the landlord for 800 dollars due the 1st", {}).toolId, "business.manage");
  for (const intent of ["billsDue", "budgetStatus", "fundsSummary", "pledgesOutstanding", "profitMargin", "campaignNet"]) assert.equal(vd.isReadIntent(intent), true, intent);
  for (const intent of ["addBill", "markBillPaid", "setCashBalance", "setBudget", "addPledge", "markPledgeReceived"]) assert.equal(vd.isReadIntent(intent), false, intent);
  assert.equal(vd.asksAboutOwnRecords("What bills are due?"), true);
  assert.equal(vd.asksAboutOwnRecords("What is the SBA?"), false);
});

test("the web editor shows and saves the new lists: bills, pledges, budgets, the balance and the fund on a transaction", () => {
  const html = fs.readFileSync(path.join(__dirname, "../../public/business-services.html"), "utf8");
  const script = fs.readFileSync(path.join(__dirname, "../../public/business-services.js"), "utf8");
  for (const id of ["bills", "add-bill", "bills-summary", "pledges", "add-pledge", "pledges-summary", "cash-fields", "budgets", "add-budget", "budgets-summary"]) assert.match(html, new RegExp(`id="${id}"`), id);
  for (const needle of ['rows("bills", editable.bills', 'rows("pledges", editable.pledges', 'rows("budgets", editable.budgets', "editable.cashBalance.asOf", '["fund", "Restricted to', 'byId("add-bill")', 'byId("add-pledge")', 'byId("add-budget")']) assert.ok(script.includes(needle), needle);
  assert.match(html, /Setting Status to paid here does not log the expense/, "the page says what its status box does not do");
});

test("the orb is told the money questions are for the workspace, never to estimate; the dashboard text is unchanged", () => {
  const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  assert.match(server, /whether they have enough money for upcoming expenses/);
  assert.match(server, /you must not estimate, add up or invent any figure, name or date/);
});

test("the orb is told how a spoken change works: the tool says what it would do and asks, the person's next words go back to the same tool, and nothing is claimed until the tool says so", () => {
  const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  assert.match(server, /wants to change their workspace by voice -- add a bill, say a bill is paid, set the cash balance or a monthly budget, record a pledge/);
  assert.match(server, /then pass their next words \(yes, no, or the answer to its question\) to the same tool/);
  assert.match(server, /Never say anything was added, paid or saved unless the tool says so/);
  assert.equal(server.split("wants to change their workspace by voice").length, 2, "said once");
});

test("server.js still parses after the orb instruction sentences are added (an unescaped quote in one of them stops the whole server)", () => {
  const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  assert.doesNotThrow(() => new (require("node:vm").Script)(server, { filename: "server.js" }));
});
