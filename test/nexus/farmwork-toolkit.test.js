"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { FarmRecordRepository } = require("../../nexus/farmwork/store.js");
const { farmWorkLine } = require("../../nexus/farmwork/brief.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

const NOW = new Date("2026-09-20T05:00:00Z"); // Sunday 20 September 2026 in Nairobi

// One farmer talking to Kyro. `say` returns the reply text (or null when the words were not for the toolkit, or the report object).
function farmer({ userId = "u1", store = fakeFarmStore(), memory = fakeMemory(), notifications = null, names = {} } = {}) {
  const sent = [];
  const push = notifications || { enqueue: async item => { sent.push(item); }, existsByKey: async key => sent.some(item => item.idempotencyKey === key.idempotencyKey) };
  const say = async text => farmWorkTurn({ text, store, tenantId: "t1", userId, now: NOW, timeZone: "Africa/Nairobi", memory, notifications: push, nameOf: async args => names[args.userId] || "A farmer" });
  return { say, store, memory, sent, userId };
}
const run = async (who, lines) => { const out = []; for (const line of lines) out.push(await who.say(line)); return out; };

// ---------- the store's SQL ----------
function recordingDb() {
  const calls = []; const rows = [];
  return { calls, rows, async query(sql, params) { calls.push({ sql, params }); if (/coalesce\(max/.test(sql)) return { rows: [{ n: rows.filter(row => /farm_records/.test(row.sql)).length }] }; if (/returning memory_id/.test(sql)) return { rows: [{ memory_id: params[params.length > 3 ? 2 : 2] }] }; if (/insert into/.test(sql)) rows.push({ sql, params }); return { rows: [] }; } };
}

test("the store scopes every private read and write to the person and keeps the market board the only shared collection", async () => {
  const db = recordingDb(); const store = new FarmRecordRepository(db);
  const record = await store.add({ tenantId: "t1", userId: "u1", collection: "field", data: { name: "North Plot" } });
  assert.equal(record.number, 1); assert.equal(record.data.name, "North Plot");
  await store.list({ tenantId: "t1", userId: "u1", collection: "field" });
  await store.listAll({ tenantId: "t1", userId: "u1" });
  await store.update({ tenantId: "t1", userId: "u1", record });
  await store.remove({ tenantId: "t1", userId: "u1", memoryId: record.memoryId });
  await store.getSession({ tenantId: "t1", userId: "u1" });
  for (const call of db.calls.filter(item => !/coalesce\(max/.test(item.sql) && !/insert into/.test(item.sql))) assert.match(call.sql, /principal_id=\$2/, call.sql);
  const before = db.calls.length;
  assert.deepEqual(await store.listPublic({ tenantId: "t1", collection: "field" }), []); // a private collection is never listed publicly
  assert.equal(db.calls.length, before, "no query is even issued for a private collection");
  await store.listPublic({ tenantId: "t1", collection: "listing" });
  assert.doesNotMatch(db.calls.at(-1).sql, /principal_id=/);
  for (const call of db.calls) assert.doesNotMatch(call.sql, /\$\d::text is null/);
});

// ---------- guided conversations ----------
test("adding a field asks plain questions, saves the answers and remembers the farm's crops", async () => {
  const who = farmer();
  const [first, , , done] = await run(who, ["Add a field called North Plot, 2 acres of maize", "skip", "skip", "skip"]);
  assert.match(first, /growing there now|planted|harvest/i);
  assert.match(done ?? "", /Added North Plot/);
  assert.equal((await who.store.list({ tenantId: "t1", userId: "u1", collection: "field" })).length, 1);
  assert.match(await who.say("Show my fields"), /North Plot/);
});

test("a guided question never traps someone: asking something else, or a whole new request, drops it and is handled normally", async () => {
  const who = farmer();
  await who.say("Add a worker called Juma"); // asks for a phone number
  assert.equal(await who.say("How do I plant maize?"), null, "a question is left to normal planning");
  assert.equal(who.store.sessions.size, 0);
  await who.say("Add a worker called Juma");
  assert.match(await who.say("Assign Juma to spray maize tomorrow"), /spray maize — Juma, due tomorrow/, "a new request is done, not answered with 'I need a number'");
  await who.say("Add a worker called Peter");
  assert.match(await who.say("banana"), /country code/); // one gentle retry
  assert.equal(await who.say("apple"), null); // a second miss lets go
  await who.say("Add a worker called Peter");
  assert.match(await who.say("cancel"), /stopped/);
  assert.equal(who.store.sessions.size, 0);
});

// ---------- workers and tasks ----------
test("jobs get people and days, appear in the list, and finish", async () => {
  const who = farmer();
  await run(who, ["Add a worker called Juma", "skip", "skip"]);
  assert.match(await who.say("Assign Juma to weed North Plot by Friday"), /Task 1: weed North Plot — Juma, due Friday/);
  assert.match(await who.say("Show Juma's tasks"), /Juma has 1 job/);
  assert.match(await who.say("Show my tasks"), /1 open job/);
  assert.match(await who.say("Mark task 1 done"), /Done: weed North Plot/);
  assert.match(await who.say("Show my tasks"), /no open jobs/i);
});

// ---------- stock ----------
test("stock goes in and out in ordinary words and warns when it runs low", async () => {
  const who = farmer();
  assert.match(await who.say("Add 10 bags of fertilizer to stock"), /You now have 10 bags/);
  assert.match(await who.say("Use 2 bags of fertilizer"), /8 bags left/);
  assert.match(await who.say("I used 1 bag of fertilizer on North Plot"), /7 bags left/);
  assert.match(await who.say("Take 1 bag of fertilizer out of stock"), /6 bags left/);
  assert.match(await who.say("How much fertilizer do I have"), /6 bags/);
});

// ---------- animals ----------
test("animals keep a history, and a treatment is only recorded for an animal the person actually has", async () => {
  const who = farmer();
  await run(who, ["Register a cow called Daisy", "skip", "female", "skip", "skip"]);
  assert.match(await who.say("Daisy was vaccinated for foot and mouth"), /daisy vaccinated \(foot and mouth\)/i);
  assert.match(await who.say("Daisy gave 12 liters of milk"), /daisy gave 12 L/i);
  assert.equal(await who.say("I was treated for malaria"), null);
  assert.match(await who.say("What is due for my animals"), /Nothing is due|due/i);
});

// ---------- money ----------
test("money is recorded in plain words, totalled, and never guessed", async () => {
  const who = farmer();
  await run(who, ["Add a field called North Plot", "skip", "skip", "skip", "skip"]);
  assert.match(await who.say("Spent 5000 on fertilizer for North Plot"), /spent 5,000 on fertilizer/i);
  assert.match(await who.say("Sold 200 kg of maize to Otieno at 45 per kg"), /sold 200 kg of maize to Otieno for 9,000/);
  assert.match(await who.say("How much did I spend this month"), /5,000/);
  assert.match(await who.say("What is my profit this year"), /4,000/);
});

test("someone with no farm records is not given farm books for ordinary buying and selling", async () => {
  const who = farmer();
  assert.equal(await who.say("Sold my old car for 500000"), null);
  assert.equal(await who.say("Bought 2 kg of sugar for 300"), null);
  assert.equal(who.store.rows.length, 0);
  assert.match(await who.say("Sold 200 kg of maize for 9000"), /Recorded/, "a farm word is enough");
});

// ---------- buyers and suppliers ----------
test("buyers keep notes, follow-ups and orders, and a delivered order records the sale", async () => {
  const who = farmer();
  await run(who, ["Add a buyer called Amina Traders", "skip", "skip", "skip"]);
  assert.match(await who.say("Add note for Amina Traders: wants 500 kg maize"), /Noted about Amina Traders/);
  assert.match(await who.say("Follow up with Amina Traders on Friday"), /Follow-up 1: Amina Traders/);
  assert.match(await who.say("Add an order from Amina Traders for 200 kg maize at 45 per kg"), /Order 1: 200 kg of maize for Amina Traders at 45 per kg \(9,000 in all\)/);
  assert.match(await who.say("Deliver order 1"), /income of 9,000 recorded/);
  assert.match(await who.say("What is my profit this year"), /9,000/);
});

test("a note to a calendar or list is not taken for a buyer note", async () => {
  const who = farmer();
  await run(who, ["Add a buyer called Amina Traders", "skip", "skip", "skip"]);
  assert.equal(await who.say("Add a note to my calendar: dentist"), null);
});

// ---------- loans and budgets ----------
test("a loan is worked out exactly and labelled as arithmetic, not a lender's terms", async () => {
  const text = await farmer().say("Calculate a loan of 100000 at 12 percent for 12 months");
  assert.match(text, /8,885 a month/); assert.match(text, /106,619 paid back/); assert.match(text, /arithmetic/);
  assert.match(await farmer().say("Calculate a loan of 100000 at 900 percent for 12 months"), /rate|percent/i);
});

// ---------- the market board ----------
test("the board lets people post and reply; only the poster's name is passed on, and only the poster can remove a listing", async () => {
  const names = { u1: "Amina", u2: "Otieno" }; const store = fakeFarmStore(); const memory = fakeMemory(); const sent = [];
  const notifications = { enqueue: async item => { sent.push(item); }, existsByKey: async ({ idempotencyKey }) => sent.some(item => item.idempotencyKey === idempotencyKey) };
  const seller = farmer({ userId: "u1", store, memory, notifications, names }); const buyer = farmer({ userId: "u2", store, memory, notifications, names });
  assert.match(await seller.say("Post for sale: 500 kg maize at 40 per kg"), /Listing 1: for sale — 500 kg of maize at 40 per kg — Amina/);
  assert.match(await buyer.say("What is for sale: maize"), /Listing 1/);
  assert.match(await buyer.say("I'm interested in listing 1"), /only gave your name/);
  assert.equal(sent.length, 1); assert.equal(sent[0].userId, "u1"); assert.match(sent[0].content.body, /Otieno is interested in your listing 1/); assert.doesNotMatch(sent[0].content.body, /\+\d{6}/);
  assert.match(await buyer.say("I'm interested in listing 1"), /already told them/);
  assert.equal(sent.length, 1, "the same interest is not sent twice in a day");
  assert.match(await buyer.say("Remove listing 1"), /isn't yours/);
  assert.match(await seller.say("Mark listing 1 sold"), /sold/);
  assert.match(await buyer.say("What is for sale: maize"), /Nothing|nothing/);
  assert.equal(await farmer().say("Post office hours"), null);
});

test("private records are never visible to another person", async () => {
  const store = fakeFarmStore(); const a = farmer({ userId: "u1", store }); const b = farmer({ userId: "u2", store });
  await run(a, ["Add a worker called Juma", "skip", "skip"]);
  await a.say("Assign Juma to weed North Plot by Friday");
  assert.match(await b.say("Show my tasks"), /no open jobs/i);
  assert.match(await b.say("Show my fields"), /no fields/i);
});

// ---------- safety guides ----------
test("emergencies get first steps at once; a guide is never handed out for an ordinary farm question", async () => {
  const swallowed = await farmer().say("What should I do if I swallowed pesticide");
  assert.match(swallowed, /emergency number|health facility/i);
  assert.match(await farmer().say("Guide on compost"), /compost/i);
  assert.equal(await farmer().say("What should I do if my maize is late"), null);
  assert.match(await farmer().say("list guides"), /guides/i);
});

test("pests are recorded but never diagnosed", async () => {
  const text = await farmer().say("I saw aphids on my tomatoes");
  assert.match(text, /I only keep a record/); assert.match(text, /agro-vet|extension/i);
  assert.equal(await farmer().say("I saw a rat in the kitchen"), null);
});

// ---------- printable reports ----------
test("reports are built only from what was recorded, in the format asked for", async () => {
  const memory = fakeMemory({ farmEntries: [{ kind: "reading", metric: "harvest", value: 650, unit: "kg", crop: "maize", place: "north plot", day: "2026-09-10" }] });
  const who = farmer({ memory, names: { u1: "Amina Wanjiru" } });
  await run(who, ["Add a field called North Plot, 2 acres", "skip", "skip", "skip", "skip"]);
  await who.say("Spent 5000 on fertilizer for North Plot"); await who.say("Sold 200 kg of maize to Otieno at 45 per kg");
  const summary = await who.say("Print my farm summary");
  assert.equal(summary.report.format, "txt"); assert.match(summary.report.content, /Prepared for: Amina Wanjiru/); assert.match(summary.report.content, /North Plot — 2 acres/); assert.match(summary.report.content, /Net:\s+4,000/);
  const harvest = await who.say("Print my harvest record as a PDF");
  assert.equal(harvest.report.format, "pdf"); assert.match(harvest.report.content, /maize\s+650 kg/);
  assert.match((await who.say("Print my expense report")).report.content, /fertilizer for North Plot/);
  assert.match((await who.say("Print a receipt for Otieno")).report.content, /200 kg of maize\s+9,000/);
  assert.match(await who.say("Print my inventory list"), /nothing recorded/i, "an empty report says so and invents nothing");
});

// Found live (business-ledger audit): a receipt() line was only kept when
// record.data.qty was truthy -- a sale recorded with no parseable quantity
// ("sold milk to Otieno for 500") has qty:null, so it was silently dropped
// from both the line items and the printed total, or the receipt was
// refused outright as "no recorded sales" if it was the buyer's only sale.
test("a receipt includes a recorded sale even when it has no parseable quantity, instead of silently dropping it", async () => {
  const who = farmer();
  await who.say("Sold milk to Otieno for 500");
  const receipt = await who.say("Print a receipt for Otieno");
  assert.notEqual(receipt, null, "a real recorded sale must never be reported as \"no recorded sales\"");
  assert.match(receipt.report.content, /milk\s+500/);
  assert.match(receipt.report.content, /TOTAL:\s+500/);

  const both = farmer();
  await both.say("Sold 200 kg of maize to Otieno at 45 per kg"); // qty'd sale: 9,000
  await both.say("Sold milk to Otieno for 500"); // no-qty sale
  const combined = await both.say("Print a receipt for Otieno");
  assert.match(combined.report.content, /200 kg of maize\s+9,000/);
  assert.match(combined.report.content, /milk\s+500/);
  assert.match(combined.report.content, /TOTAL:\s+9,500/, "the no-qty sale must be included in the printed total, not silently excluded");
});

// Found live (business-ledger audit): "Business so far" summed raw amounts
// across every currency a party was ever paid in or paid, then labeled the
// fabricated total with whichever record happened to be first in store
// order -- the same currency-combining bug already fixed in money.js's own
// report/receipt totals, just never applied to party history.
test("a party's history keeps different currencies separate instead of adding them together under one label", async () => {
  const who = farmer();
  await run(who, ["Add a buyer called Otieno", "skip", "skip", "skip"]);
  await who.say("Sold 10 kg of maize to Otieno for 500 dollars");
  await who.say("Sold 20 kg of beans to Otieno for 3000 shillings");
  const history = await who.say("Show history for Otieno");
  assert.match(history, /you earned/i);
  assert.match(history, /\$500(?:\.00)?/, "the USD total must appear on its own, not folded into a single combined number");
  assert.match(history, /3,000/, "the KES total must appear on its own, separate from the USD total");
});

test("report words are left alone when they are not about the farm", async () => {
  const empty = farmer();
  for (const text of ["Make a summary of this article", "Give me a summary of the news", "Print my resume", "Create a report about my sleep", "Print my task list"]) assert.equal(await empty.say(text), null, text);
  const keeper = farmer(); await run(keeper, ["Add a field called North Plot", "skip", "skip", "skip", "skip"]);
  assert.equal(await keeper.say("Make a summary of this article"), null);
  assert.equal(await keeper.say("Make a list of tasks for my wedding"), null);
});

// ---------- ordinary talk is not taken ----------
test("ordinary requests fall straight through to normal planning", async () => {
  const who = farmer(); await run(who, ["Add a field called North Plot", "skip", "skip", "skip", "skip"]);
  for (const text of ["Take 2 tablets of paracetamol", "Use 2 cups of sugar in the tea", "I used 3 hours on the road", "Use 10 minutes for the call", "What time is it", "Tell me a joke",
    "Remind me to call mum tomorrow", "Hello", "How do I plant maize?", "What is the weather", "Order pizza from Mario for 2", "Paid the school fees 20000", "Show me Amina's photos", "Print a copy of my passport"]) assert.equal(await who.say(text), null, text);
});

test("a failing store never breaks a conversation", async () => {
  const broken = new Proxy(fakeFarmStore(), { get(target, prop) { if (["list", "listAll", "add"].includes(prop)) return async () => { throw new Error("db down"); }; return target[prop]; } });
  assert.equal(await farmer({ store: broken }).say("Add 10 bags of fertilizer to stock"), null);
});

// ---------- the morning brief ----------
test("the brief line mentions only what is really due, and is empty when nothing is", () => {
  assert.equal(farmWorkLine([], "2026-09-20"), ""); assert.equal(farmWorkLine(undefined, "2026-09-20"), "");
  const line = farmWorkLine([
    { collection: "task", data: { title: "Spray maize", due: "2026-09-19", status: "open" } }, { collection: "task", data: { title: "Weed beans", due: "2026-09-20", status: "open" } },
    { collection: "stock", data: { name: "fertiliser", qty: 2, low: 5 } }, { collection: "followup", data: { party: "Amina", due: "2026-09-20", status: "open" } }], "2026-09-20");
  assert.match(line, /1 farm job is overdue \(Spray maize\)/); assert.match(line, /due today on the farm: Weed beans/); assert.match(line, /stock running low: fertiliser/); assert.match(line, /follow up with Amina/);
  assert.equal(farmWorkLine([{ collection: "task", data: { title: "Later", due: "2026-10-30", status: "open" } }], "2026-09-20"), "");
});

// ---------- the planner ----------
function planner({ farmWork, companion = null, documents = true }) {
  const model = { plan: async () => { throw new Error("the AI model must not be asked for a farm request"); } };
  const tools = { list: async () => (documents ? [{ tool_id: "documents.create", domain: "documents", description: "", risk_tier: "low", availability: "available" }] : []) };
  const applications = { list: () => (documents ? [{ applicationId: "documents", capabilities: [], riskTiers: ["low"] }] : []) };
  return new OpenEndedPlanner({ model, tools, applications, memory: fakeMemory(), farmWork, companion });
}
const command = text => ({ text, tenantId: "t1", actorId: "u1" });

test("the planner answers farm words itself and turns a report into a real document step", async () => {
  const store = fakeFarmStore(); const farmWork = { store, notifications: null, nameOf: async () => "Amina" };
  const who = farmer({ store });
  await run(who, ["Add a field called North Plot, 2 acres", "skip", "skip", "skip", "skip"]);
  await who.say("Sold 200 kg of maize for 9000");
  const answer = await planner({ farmWork }).plan({ command: command("Show my fields"), context: { timeZone: "Africa/Nairobi" } });
  assert.equal(answer.application, "conversation"); assert.deepEqual(answer.steps, []); assert.match(answer.response, /North Plot/);
  const report = await planner({ farmWork }).plan({ command: command("Print my profit statement as a PDF"), context: { timeZone: "Africa/Nairobi" } });
  assert.equal(report.application, "documents"); assert.equal(report.steps[0].toolId, "documents.create");
  assert.equal(report.steps[0].input.format, "pdf"); assert.match(report.steps[0].input.content, /PROFIT STATEMENT/);
  const noDocs = await planner({ farmWork, documents: false }).plan({ command: command("Print my profit statement"), context: { timeZone: "Africa/Nairobi" } });
  assert.equal(noDocs.application, "conversation"); assert.match(noDocs.response, /PROFIT STATEMENT/, "without a document tool the report is read out instead");
});

test("an emergency or crisis is answered by the companion before the farm toolkit is even consulted", async () => {
  let consulted = false;
  const store = new Proxy(fakeFarmStore(), { get(target, prop) { if (prop === "getSession") consulted = true; return target[prop]; } });
  const companion = { turn: async ({ command: given }) => (/help now/i.test(given.text) ? "EMERGENCY FIRST" : null) };
  const answer = await planner({ farmWork: { store }, companion }).plan({ command: command("I need help now"), context: {} });
  assert.equal(answer.response, "EMERGENCY FIRST"); assert.equal(consulted, false);
});

// The production acceptance probes (scripts/nexus-run-browser-capability-probes.js) must reach their own tools. A bare "Find ..." was once taken
// by the board and answered "Nothing for sale", which failed the deploy's evidence step for four capabilities.
test("every production acceptance probe phrase passes straight through the farm toolkit", async () => {
  const who = farmer(); await run(who, ["Add a field called North Plot", "skip", "skip", "skip", "skip"]);
  const src = require("node:fs").readFileSync(require("node:path").join(__dirname, "..", "..", "scripts", "nexus-run-browser-capability-probes.js"), "utf8");
  const block = /const SCENARIOS = Object\.freeze\(\{([\s\S]*?)\n\}\);/.exec(src)?.[1] || "";
  const phrases = [...block.matchAll(/:\s*"((?:[^"\\]|\\.)*)"/g)].map(match => match[1]);
  assert.ok(phrases.length >= 15, "the probe list was found");
  for (const text of [...phrases, "Find mobile clinic locations near Nairobi", "Find agriculture jobs in Nairobi", "Find pharmacy support for metformin", "Find maize marketplace listings", "Search for buyers of my house"]) assert.equal(await who.say(text), null, text);
});

// Found by the live check: "Remove the field X" and "Remove Daisy" (a name with no species word) did nothing.
test("a field or an animal can be removed in the words people use, after a yes", async () => {
  const who = farmer();
  await run(who, ["Add a field called North Plot, 2 acres", "skip", "skip", "skip", "Register a cow called Daisy", "skip", "female", "skip", "skip"]);
  assert.match(await who.say("Remove the field North Plot"), /Remove the field North Plot\?.*Say yes/);
  assert.match(await who.say("yes"), /removed North Plot/);
  assert.match(await who.say("Remove Daisy"), /Remove daisy and stop keeping its records\?/);
  assert.match(await who.say("no"), /left it as it is/);
  assert.match(await who.say("Show my animals"), /daisy/);
  assert.match(await who.say("Remove Daisy"), /Say yes/); assert.match(await who.say("yes"), /removed daisy/);
  assert.match(await who.say("Show my animals"), /no animals/i);
  assert.equal(await who.say("Remove the batteries"), null, "a name that is not one of the person's animals is not taken");
});

test("board searches still work in the words a farmer would use", async () => {
  const names = { u1: "Amina", u2: "Otieno" }; const store = fakeFarmStore();
  const seller = farmer({ userId: "u1", store, names }); const buyer = farmer({ userId: "u2", store, names });
  await seller.say("Post for sale: 500 kg maize at 40 per kg"); await buyer.say("Post wanted: 100 kg beans at 90 per kg");
  assert.match(await buyer.say("What is for sale: maize"), /Listing 1/);
  assert.match(await buyer.say("Find buyers for beans"), /Listing 2/);
  assert.match(await seller.say("Who is buying beans"), /Listing 2/);
});
