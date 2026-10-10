"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const vd = require("../../nexus/business/voice-dispatch.js");
const insights = require("../../nexus/business/insights.js");
const { createBusinessApi } = require("../../nexus/business/api.js");
const { createBusinessReader } = require("../../nexus/business/authoritative-executor.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// Asked by the owner on 10 October 2026: a leader should be able to ask "How is my business or nonprofit doing this month?", "Will we have enough money to cover upcoming expenses?", "Which customers or donors need follow-up?",
// "Which grants or contracts have approaching deadlines?" and "How many people did our program serve, and what results did we measure?" by voice. Found on the way: by voice every one of them failed ("I couldn't do that one",
// or a reminders answer, or the Grants.gov paragraph) because the spoken path stopped before the business workspace; and "Log 3 volunteer hours for Joy" asked for a name to add.

const day = offset => new Date(Date.now() + offset * 86400000).toISOString().slice(0, 10);
const TZ = "UTC";

function makeWorkspace(editableOver = {}) {
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
  return { businessRequest, repository, access, consents, context, async seed(editable) {
    const made = (await businessRequest({ method: "POST", pathname: "/api/nexus/runtime/business/clients", body: { businessName: "Hope Garden", businessType: "nonprofit", consent: true } })).body;
    await businessRequest({ method: "PUT", pathname: `/api/nexus/runtime/business/clients/${made.record_id}`, body: { expectedVersion: made.version, info: made.data.info, editable: { ...made.data.editable, ...editable } } });
  } };
}
const SEED = () => ({
  transactions: [
    { date: day(0), type: "income", amount: 500, currency: "USD", category: "donation", description: "Donation from Maria Chen" },
    { date: day(0), type: "expense", amount: 120, currency: "USD", category: "supplies", description: "Seeds" },
    { date: day(-40), type: "income", amount: 9000, currency: "USD", category: "donation", description: "Donation from Big Gift" },
    { date: day(-45), type: "expense", amount: 300, currency: "USD", category: "rent", description: "Rent" }],
  leads: [
    { name: "Maria Chen", type: "donor", contact: "", stage: "new", followUpDate: day(-5) },
    { name: "Grace Otieno", type: "customer", contact: "", stage: "new", followUpDate: day(3) },
    { name: "Sam Park", type: "donor", contact: "", stage: "new", followUpDate: "" },
    { name: "Joy Wanjiru", type: "volunteer", contact: "", stage: "new", followUpDate: "" },
    { name: "Tom Lee", type: "client", contact: "", stage: "new", followUpDate: "" }],
  grants: [
    { funderName: "Green Fund", program: "Urban Gardens", amount: 5000, currency: "USD", deadline: day(30), status: "researching" },
    { funderName: "City Arts", program: "Youth", amount: 2000, currency: "USD", deadline: day(3), status: "applied" },
    { funderName: "Old Fund", program: "Past", amount: 1000, currency: "USD", deadline: day(-5), status: "researching" },
    { funderName: "Won Fund", program: "Done", amount: 7000, currency: "USD", deadline: day(-60), status: "awarded" }]
});
async function ask(workspace, text) {
  const result = await vd.run({ command: text, args: {}, confirmed: false, businessRequest: workspace.businessRequest, timeZone: TZ });
  return result;
}

test("which sentences are the insight questions, and which are left to the existing intents", () => {
  const yes = {
    howAreWeDoing: ["How is my nonprofit doing this month?", "How is my business doing this month?", "How are we doing this month?", "How's the business doing?", "How is our church doing", "how are we doing financially"],
    cashOutlook: ["Will we have enough money to cover upcoming expenses?", "Do we have enough cash for payroll?", "How long will our cash last?", "Can we afford to hire someone?", "what is our cash flow?"],
    followUpDue: ["Which customers or donors need follow-up?", "Who needs a follow up?", "Which donors are overdue for a follow-up?", "Who should I follow up with?", "What follow-ups are due this week?"],
    deadlinesDue: ["Which grants or contracts have approaching deadlines?", "Which grants are due soon?", "What funding deadlines are coming up?", "Do we have any grants closing this month?", "Which applications are overdue?"],
    programServed: ["How many people did our program serve, and what results did we measure?", "How many families did we help this year?", "What outcomes have we achieved?", "Give me the impact report"],
    volunteerHours: ["Log 3 volunteer hours for Joy", "Record 2.5 hours of volunteer time for Joy", "How many volunteer hours do we have?", "add 4 volunteer hours for Sam"]
  };
  for (const [intent, texts] of Object.entries(yes)) for (const text of texts) assert.equal(insights.classifyInsight(text), intent, text);
  const no = ["How are you doing today?", "how are we doing", "Add a donor named Maria Chen", "Set a follow-up with Sam Park next Tuesday", "Add a grant from Green Fund due December 1", "Create a cash flow forecast document", "I need enough money for a house", "What is the weather", "Show my customers", "Remind me to follow up with Grace tomorrow", "Draft a grant proposal", "What is the SBA?", ""];
  for (const text of no) assert.equal(insights.classifyInsight(text), null, text);
});

test("the dispatcher sends insight questions to their own reads; neighbouring commands keep their old routes", () => {
  assert.equal(vd.classify("How is my nonprofit doing this month?"), "dashboard");
  assert.equal(vd.classify("Which customers or donors need follow-up?"), "followUpDue");
  assert.equal(vd.classify("Log 3 volunteer hours for Joy"), "volunteerHours");
  assert.equal(vd.classify("Show my customers"), "listLeads");
  assert.equal(vd.classify("Add a volunteer named Joy"), "addLead");
  assert.equal(vd.classify("Set a follow-up with Sam Park next Tuesday"), "setFollowUp");
  assert.equal(vd.classify("Show my donations"), "donationSummary");
  assert.equal(vd.classify("Who owes me money?"), "listInvoices");
  for (const intent of ["cashOutlook", "followUpDue", "deadlinesDue", "programServed", "volunteerHours", "dashboard"]) assert.equal(vd.isReadIntent(intent), true, `${intent} is a read: no yes is asked and nothing is saved`);
  assert.equal(vd.precheck("Which grants are due soon?", {}).toolId, "business.query");
});

test("how is the nonprofit doing THIS MONTH: the money is for the month, the rest is overall", async () => {
  const workspace = makeWorkspace(); await workspace.seed(SEED());
  const month = (await ask(workspace, "How is my nonprofit doing this month?")).response;
  assert.match(month, /performance summary for "Hope Garden" this month: net income \$380\.00 \(income \$500\.00, expenses \$120\.00\)/);
  assert.match(month, /income and expenses are for this month/);
  const overall = (await ask(workspace, "Give me my nonprofit dashboard")).response;
  assert.match(overall, /net income \$9,080\.00/, "without a period it is everything recorded, as before");
  assert.doesNotMatch(overall, /are for this month/);
  const last = (await ask(workspace, "How is my nonprofit doing last month?")).response;
  assert.match(last, /last month/);
});

test("follow-ups: overdue, due this week, and the contacts with no day set; 'customers or donors' covers both kinds", async () => {
  const workspace = makeWorkspace(); await workspace.seed(SEED());
  const both = (await ask(workspace, "Which customers or donors need follow-up?")).response;
  assert.match(both, /customers and donors in "Hope Garden"/);
  assert.match(both, /1 follow-up overdue: Maria Chen \(donor\)/);
  assert.match(both, /1 follow-up due in the next 7 days: Grace Otieno \(customer\)/);
  assert.match(both, /Sam Park/);
  assert.doesNotMatch(both, /Joy Wanjiru/, "a volunteer was not asked about");
  const donors = (await ask(workspace, "Which donors need follow-up?")).response;
  assert.doesNotMatch(donors, /Grace Otieno/);
  const all = (await ask(workspace, "Who should I follow up with?")).response;
  assert.match(all, /contacts in "Hope Garden"/); assert.match(all, /Joy Wanjiru/);
  const empty = makeWorkspace(); await empty.seed({});
  assert.match((await ask(empty, "Who needs a follow-up?")).response, /has no contacts recorded yet/);
});

test("funding deadlines: passed-and-open, this week, this month; closed ones left out; an honest word about contracts", async () => {
  const workspace = makeWorkspace(); await workspace.seed(SEED());
  const text = (await ask(workspace, "Which grants or contracts have approaching deadlines?")).response;
  assert.match(text, /1 deadline already passed and still open: Old Fund \(Past\) \$1,000\.00/);
  assert.match(text, /Due in the next 7 days: City Arts \(Youth\) \$2,000\.00, applied/);
  assert.match(text, /Due in the next 30 days: Green Fund/);
  assert.doesNotMatch(text, /Won Fund/, "an awarded grant has no deadline to worry about");
  assert.match(text, /no separate contract record/, "said plainly, because contracts were asked about");
  assert.doesNotMatch((await ask(workspace, "Which grants are due soon?")).response, /contract record/, "not said when contracts were not asked about");
  const none = makeWorkspace(); await none.seed({});
  assert.match((await ask(none, "Which grants are due soon?")).response, /no grants or funding opportunities tracked yet/);
});

test("will we have enough money: nothing is promised that the records cannot show", async () => {
  const workspace = makeWorkspace(); await workspace.seed(SEED());
  const text = (await ask(workspace, "Will we have enough money to cover upcoming expenses?")).response;
  assert.match(text, /cannot tell you whether you will have enough/);
  assert.match(text, /do not have your bank balance or a list of bills/);
  assert.match(text, /so far this month \$500\.00 in and \$120\.00 out/);
  assert.match(text, /not tracked yet/);
  assert.doesNotMatch(text, /you will have enough\.|yes, you|you can afford/i);
});

test("people served and volunteer hours: the real counts, and a plain statement of what is not recorded yet", async () => {
  const workspace = makeWorkspace(); await workspace.seed(SEED());
  const served = (await ask(workspace, "How many people did our program serve, and what results did we measure?")).response;
  assert.match(served, /1 person recorded through intake \(Tom Lee\)/);
  assert.match(served, /I will not estimate one/);
  const hours = await ask(workspace, "Log 3 volunteer hours for Joy");
  assert.equal(hours.status, "completed");
  assert.match(hours.response, /nothing was saved/);
  assert.match(hours.response, /lists 1 volunteer as a contact/);
  assert.doesNotMatch(hours.response, /add a volunteer named Joy/, "Joy is already on the list");
  assert.match((await ask(workspace, "Log 2 volunteer hours for Sam Park")).response, /add a volunteer named Sam Park/);
  const before = (await workspace.businessRequest({ method: "GET", pathname: "/api/nexus/runtime/business/clients" })).body.clients[0].data.editable.leads.length;
  assert.equal(before, 5, "nothing was added");
});

test("with no workspace, an insight question says so and how to start, and invents nothing", async () => {
  const workspace = makeWorkspace();
  for (const text of ["Which grants are due soon?", "Who needs a follow-up?", "How is my nonprofit doing this month?"]) {
    const result = await ask(workspace, text);
    assert.match(result.response, /do not have a business or nonprofit workspace yet|You do not have a business/i, text);
  }
});

test("the spoken reader answers reads and refuses everything that would change the workspace", async () => {
  const workspace = makeWorkspace(); await workspace.seed(SEED());
  const read = createBusinessReader({ repository: workspace.repository, access: workspace.access, consents: workspace.consents, env: {} });
  assert.match(await read({ command: "Which grants are due soon?", context: workspace.context }), /Funding deadlines in "Hope Garden"/);
  assert.match(await read({ command: "How is my nonprofit doing this month?", context: workspace.context }), /this month/);
  for (const text of ["Add a donor named Maria Chen", "Log a 50 dollar expense for seeds", "Mark invoice INV-1001 paid", "Set a follow-up with Sam Park next Tuesday", "What is the weather", "Tell me a joke"]) {
    assert.equal(await read({ command: text, context: workspace.context }), null, text);
  }
  const leads = (await workspace.businessRequest({ method: "GET", pathname: "/api/nexus/runtime/business/clients" })).body.clients[0].data.editable.leads.length;
  assert.equal(leads, 5, "reading changed nothing");
});

function planner(businessWorkspaces) {
  return new OpenEndedPlanner({ model: { plan: async () => { throw new Error("REACHED THE AI MODEL"); }, respond: async () => { throw new Error("REACHED THE AI MODEL"); } }, tools: { list: async () => [] }, applications: { list: () => [] }, businessWorkspaces });
}
const spoken = (p, text, timeZone = TZ) => p.plan({ command: { text, tenantId: "t", actorId: "u", locale: "en", channel: "voice" }, context: { timeZone, deterministicOnly: true } });

test("through the spoken planner path: the five questions are answered from the workspace, with no AI model", async () => {
  const workspace = makeWorkspace(); await workspace.seed(SEED());
  const read = createBusinessReader({ repository: workspace.repository, access: workspace.access, consents: workspace.consents, env: {} });
  const p = planner({ count: async () => 1, read: ({ command }) => read({ command, context: workspace.context }) });
  const expectations = [
    ["How is my nonprofit doing this month?", /performance summary for "Hope Garden" this month/],
    ["How are we doing this month?", /performance summary for "Hope Garden" this month/],
    ["Will we have enough money to cover upcoming expenses?", /cannot tell you whether you will have enough/],
    ["Which customers or donors need follow-up?", /Follow-ups for customers and donors/],
    ["Which grants or contracts have approaching deadlines?", /Funding deadlines in "Hope Garden"/],
    ["How many people did our program serve, and what results did we measure?", /recorded through intake/],
    ["Show my donations", /Donations in "Hope Garden"/],
    ["Log 3 volunteer hours for Joy", /cannot log or total volunteer hours/]
  ];
  for (const [text, pattern] of expectations) {
    const plan = await spoken(p, text);
    assert.notEqual(plan.deferred, true, text);
    assert.match(plan.response, pattern, text);
    assert.equal(plan.modelAnswered, undefined, text);
    assert.deepEqual(plan.steps, [], text);
  }
});

test("the spoken path still leaves a change to the workspace (it needs a yes) and anything else to the old pipeline", async () => {
  const workspace = makeWorkspace(); await workspace.seed(SEED());
  const read = createBusinessReader({ repository: workspace.repository, access: workspace.access, consents: workspace.consents, env: {} });
  const p = planner({ count: async () => 1, read: ({ command }) => read({ command, context: workspace.context }) });
  for (const text of ["Add a donor named Maria Chen", "Log a 50 dollar expense for seeds", "Set a follow-up with Sam Park next Tuesday"]) assert.equal((await spoken(p, text)).deferred, true, text);
  const without = planner({ count: async () => 1 });
  assert.equal((await spoken(without, "How is my nonprofit doing this month?")).deferred, true, "no reader wired: deferred as before");
  const failing = planner({ count: async () => 1, read: async () => { throw new Error("database down"); } });
  assert.equal((await spoken(failing, "How is my nonprofit doing this month?")).deferred, true, "a read that fails falls back to the old pipeline");
});

test("a question about funding deadlines is about the person's own records, not the general grants guide", async () => {
  const workspace = makeWorkspace(); await workspace.seed(SEED());
  const read = createBusinessReader({ repository: workspace.repository, access: workspace.access, consents: workspace.consents, env: {} });
  const p = planner({ count: async () => 1, read: ({ command }) => read({ command, context: workspace.context }) });
  const plan = await spoken(p, "Which grants or contracts have approaching deadlines?");
  assert.doesNotMatch(plan.response, /Grants\.gov/);
  // the general question about what grants exist is still the guide
  const general = await spoken(p, "What grants are available for minority-owned businesses?", "America/Chicago");
  assert.match(String(general.knowledge || ""), /us-small-business:grants/);
});
