"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { createBusinessApi } = require("../../nexus/business/api.js");
const { createBusinessReader } = require("../../nexus/business/authoritative-executor.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

// Found by the owner's pre-test review on 10 October 2026: a person with a business or nonprofit workspace who asked "Who owes me money?" by voice was told "Nobody owes you anything that I know of", and "Show my customers"
// was answered "You have no customers yet. Say add a buyer": the farm and shop books matched the same words and answered first, while the workspace held the real unpaid invoices and contacts.

const TZ = "UTC";
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
  return { rows, context, businessRequest, read: ({ command }) => read({ command, context }),
    async create() { return (await businessRequest({ method: "POST", pathname: "/api/nexus/runtime/business/clients", body: { businessName: "Hope Garden", businessType: "nonprofit", consent: true } })).body; },
    async confirm(text) { const prompt = await read({ command: text, context }); assert.match(prompt, /Should I go ahead\?/, text); return read({ command: "yes", context }); } };
}
const BUSINESS_TOOLS = [{ tool_id: "business.manage", domain: "business", description: "", risk_tier: "low", confirmation_required: true }, { tool_id: "business.query", domain: "business", description: "", risk_tier: "low", confirmation_required: false }];
function planner(businessWorkspaces, farmWork = { store: fakeFarmStore(), notifications: null, nameOf: async () => "Amina" }) {
  const model = { plan: async () => { throw new Error("the AI model must not be asked"); } };
  return new OpenEndedPlanner({ model, tools: { list: async () => BUSINESS_TOOLS }, applications: { list: () => [{ applicationId: "business", capabilities: ["business.manage", "business.query"], riskTiers: ["low"] }] }, memory: Object.assign(fakeMemory(), { search: async () => [] }), farmWork, businessWorkspaces });
}
const ask = (p, text, deterministicOnly = false) => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "Africa/Nairobi", deterministicOnly } });

test("SPOKEN: a person with a workspace is answered from its invoices and contacts, and \"add a customer\" reaches the workspace instead of the farm's phone-number question", async () => {
  const workspace = makeWorkspace(); await workspace.create();
  const p = planner({ count: async () => 1, read: workspace.read });
  const prompt = await ask(p, "Add a customer named Grace Otieno", true);
  assert.match(prompt.response, /I can add Grace Otieno as a customer to "Hope Garden". Should I go ahead?/);
  assert.doesNotMatch(prompt.response, /phone number/i, "not the farm's guided question");
  assert.match((await ask(p, "yes", true)).response, /Added Grace Otieno as a customer/);
  await workspace.confirm("Add a donor named Maria Chen");
  await workspace.confirm("Create an invoice for Grace Otieno");
  const owed = await ask(p, "Who owes me money?", true);
  assert.match(owed.response, /INV-1001 for Grace Otieno/); assert.doesNotMatch(owed.response, /Nobody owes you anything/);
  const customers = await ask(p, "Show my customers", true);
  assert.match(customers.response, /Grace Otieno/); assert.doesNotMatch(customers.response, /Say "add a buyer"|no customers yet/);
  assert.match((await ask(p, "Show my donors", true)).response, /Maria Chen/);
  assert.doesNotMatch((await ask(p, "Who do I owe?", true)).response, /You don.t owe anyone anything/, "bills come from the workspace, not the farm debts");
});

test("TYPED: the same words go to the business tools (read, and change with its confirmation), not the farm and shop books", async () => {
  const p = planner({ count: async () => 1, read: async () => { throw new Error("the typed path uses the business tools, not the spoken reader"); } });
  const owed = await ask(p, "Who owes me money?");
  assert.equal(owed.steps[0].toolId, "business.query"); assert.equal(owed.application, "business");
  const customers = await ask(p, "Show my customers");
  assert.equal(customers.steps[0].toolId, "business.query");
  const add = await ask(p, "Add a customer named Grace Otieno");
  assert.equal(add.steps[0].toolId, "business.manage"); assert.equal(add.application, "business");
});

test("a person with no workspace, or whose workspace cannot be counted, goes to the farm and shop books exactly as before", async () => {
  const none = planner({ count: async () => 0, read: async () => { throw new Error("must not be read"); } });
  assert.match((await ask(none, "Who owes me money?", true)).response, /Nobody owes you anything that I know of/);
  assert.match((await ask(none, "Show my customers", true)).response, /no customers yet|Say "add a buyer"/i);
  assert.match((await ask(none, "Add a customer named Grace Otieno", true)).response, /phone number/i, "the farm's own guided question");
  const unknown = planner({ count: async () => { throw new Error("database down"); }, read: async () => "should not be used" });
  assert.match((await ask(unknown, "Who owes me money?", true)).response, /Nobody owes you anything/);
  const noCounter = planner({ read: async () => "should not be used" });
  assert.match((await ask(noCounter, "Who owes me money?", true)).response, /Nobody owes you anything/);
  const without = planner(undefined);
  assert.match((await ask(without, "Who owes me money?", true)).response, /Nobody owes you anything/);
});

test("farm words are still the farm's, even for a person who also has a workspace", async () => {
  const p = planner({ count: async () => 1, read: async () => { throw new Error("a farm request must not reach the workspace reader"); } });
  for (const text of ["Show my fields", "Sold 200 kg of maize for 9000", "How much milk did I get today"]) {
    const plan = await ask(p, text);
    assert.doesNotMatch(String(plan.steps?.[0]?.toolId || ""), /business./, text);
  }
});

test("the page's summaries say 1 volunteer, 1 hour, 1 person, 1 service and 1 result, and the plural otherwise", () => {
  const source = fs.readFileSync(path.join(__dirname, "../../public/business-services.js"), "utf8");
  const start = source.indexOf("    const volunteerCount = ");
  const end = source.indexOf("\"No services or results yet.\";", start);
  assert.ok(start > 0 && end > start, "found the summary code");
  const code = source.slice(start, end + "\"No services or results yet.\";".length);
  const summaries = (editable) => {
    const out = {};
    const byId = id => ({ set textContent(value) { out[id] = value; } });
    const hoursTotal = editable.volunteerHours.reduce((sum, row) => sum + row.hours, 0);
    // (the code between the markers also draws the row editors; those are not the point here)
    vm.runInNewContext(`(function (editable, byId, hoursTotal, rows) {\n${code}\n})`, {})(editable, byId, hoursTotal, () => {});
    return out;
  };
  const one = summaries({ volunteerHours: [{ volunteer: "Joy", hours: 1 }], services: [{ participant: "Maria" }], outcomes: [{}] });
  assert.equal(one["volunteer-summary"], "1 hour from 1 volunteer");
  assert.equal(one["program-summary"], "1 person received 1 service; 1 result recorded");
  const many = summaries({ volunteerHours: [{ volunteer: "Joy", hours: 2.5 }, { volunteer: "Sam", hours: 3 }], services: [{ participant: "Maria" }, { participant: "maria" }, { participant: "Leo" }], outcomes: [{}, {}] });
  assert.equal(many["volunteer-summary"], "5.5 hours from 2 volunteers");
  assert.equal(many["program-summary"], "2 people received 3 services; 2 results recorded");
  const none = summaries({ volunteerHours: [], services: [], outcomes: [] });
  assert.equal(none["volunteer-summary"], "No volunteer hours yet."); assert.equal(none["program-summary"], "No services or results yet.");
});

// Found by running the whole prompt battery on the live site on 10 October 2026.
test("a gift said without a subject ('Received a 1000 dollar donation from Maria Chen for the youth program') is the workspace's to log, and a pledge or a bill is not", async () => {
  const dispatch = require("../../nexus/business/voice-dispatch.js");
  for (const text of ["Received a 1000 dollar donation from Maria Chen for the youth program", "Got a 500 dollar donation from Pat", "Received a $200 gift from Lee", "We received a donation of 5000 shillings from Amina"]) assert.equal(dispatch.classify(text), "logTransaction", text);
  assert.equal(dispatch.classify("Sam Park pledged 2000 dollars"), "addPledge");
  assert.notEqual(dispatch.classify("Received the electricity bill for $340"), "logTransaction");
  assert.notEqual(dispatch.classify("Sold 200 kg of maize for 9000 shillings"), "logTransaction");
  const workspace = makeWorkspace(); await workspace.create();
  const p = planner({ count: async () => 1, read: workspace.read });
  const prompt = await ask(p, "Received a 1000 dollar donation from Maria Chen for the youth program", true);
  assert.match(prompt.response, /Should I go ahead\?/); assert.doesNotMatch(prompt.response, /^Recorded: income/);
  assert.match((await ask(p, "yes", true)).response, /Logged a \$1,000\.00 income/);
});

test("'Maria Lopez gave consent for services' records Maria Lopez, not a person called Services", async () => {
  const workspace = makeWorkspace(); await workspace.create();
  const prompt = await workspace.read({ command: "Maria Lopez gave consent for services" });
  assert.match(prompt, /record that Maria Lopez has given consent/); assert.doesNotMatch(prompt, /Services/);
  assert.match(await workspace.read({ command: "Record consent from Pat Lee to keep their records" }), /record that Pat Lee has given consent/);
});

test("a person with a workspace who asks how many of something is in inventory, or what it is worth, is answered from the workspace register, not told there is no record", async () => {
  const workspace = makeWorkspace(); await workspace.create();
  await workspace.confirm("Add 20 jars of candles to inventory");
  const p = planner({ count: async () => 1, read: workspace.read });
  const how = await ask(p, "How many candles do we have in inventory?", true);
  assert.match(how.response, /candles/i); assert.doesNotMatch(how.response, /on record/);
  assert.doesNotMatch((await ask(p, "What is our inventory worth?", true)).response, /on record, so I can't say/);
  const none = planner({ count: async () => 0, read: async () => { throw new Error("must not be read"); } });
  assert.match((await ask(none, "How many bags of maize do I have in stock?", true)).response, /in your stock yet|on record/, "the farmer's stock question is unchanged");
});
