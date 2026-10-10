"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vd = require("../../nexus/business/voice-dispatch.js");
const programs = require("../../nexus/business/programs-voice.js");
const { createBusinessApi } = require("../../nexus/business/api.js");
const { createBusinessReader } = require("../../nexus/business/authoritative-executor.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// Phase 3a of the business-intelligence tools, asked for by the owner on 10 October 2026: the people side of a nonprofit or community business. Volunteer hours, skills and availability; participants and their consent to have
// records kept; the services each received; the results measured; program goals; and an impact report added up from those records. Before this, "Log 3 volunteer hours for Joy" and "How many people did our program serve, and what
// results did we measure?" could only say "I do not keep that yet".

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
  return { businessRequest, repository, access, consents, context, rows,
    async create() { return (await businessRequest({ method: "POST", pathname: "/api/nexus/runtime/business/clients", body: { businessName: "Hope Garden", businessType: "nonprofit", consent: true } })).body; },
    editable: async () => [...rows.values()][0].data.editable,
    say: text => read({ command: text, context }),
    async confirm(text) { const prompt = await read({ command: text, context }); assert.match(prompt, /Should I go ahead\?/, `${text}: ${prompt}`); return read({ command: "yes", context }); } };
}
async function ready() { const workspace = makeWorkspace(); await workspace.create(); return workspace; }

test("which sentences are about the people side, and which are left to the existing intents", () => {
  const yes = {
    logVolunteerHours: ["Log 3 volunteer hours for Joy", "Record 2.5 hours of volunteer time for Joy", "Joy volunteered 3 hours at the pantry", "add 4 volunteer hours for Sam Park"],
    volunteerSummary: ["How many volunteer hours do we have?", "Who volunteered the most this month?", "How many volunteers do we have?", "Show volunteer hours this year"],
    setVolunteerInfo: ["Joy's skills are cooking and driving", "Joy is available on weekends", "Set Joy's skills to first aid"],
    recordConsent: ["Record consent from Maria Lopez to keep her records", "Maria Lopez gave consent", "Record that Sam Park declined consent"],
    listParticipants: ["Who has not given consent?", "Show participants", "How many participants do we have?", "Which participants are missing consent?"],
    logService: ["Maria Lopez received a food box", "Log a food box service for Maria Lopez", "We served Maria Lopez a hot meal", "Record a service for Maria Lopez: job coaching"],
    addProgramGoal: ["Set a goal of 500 meals served for the food program by December"],
    logOutcome: ["Record an outcome: 42 people completed job training"],
    goalProgress: ["How are we doing against our goals?", "What are our goals?"],
    impactReport: ["Give me the impact report", "Show our impact report this year", "What is our impact summary?"],
    peopleServed: ["How many people did our program serve, and what results did we measure?", "How many families did we help this year?", "What outcomes have we achieved?"]
  };
  for (const [intent, texts] of Object.entries(yes)) for (const text of texts) assert.equal(programs.classifyPrograms(text), intent, text);
  const no = ["Maria received a donation of 50 dollars", "Joy received a payment", "John received the invoice", "Add a volunteer named Joy", "Log a 50 dollar expense for seeds", "What is the weather", "Show my customers", "Tell me a joke",
    "I got a grant", "We served dinner at six", "Set a budget of 500 dollars a month for supplies", "Create a volunteer coordination plan", "Which grants are due soon?", ""];
  for (const text of no) assert.equal(programs.classifyPrograms(text), null, text);
  assert.equal(vd.classify("Log 3 volunteer hours for Joy"), "logVolunteerHours");
  assert.equal(vd.classify("Add a volunteer named Joy"), "addLead");
  for (const intent of programs.PROGRAM_READ_INTENTS) assert.equal(vd.isReadIntent(intent), true, intent);
  for (const intent of programs.PROGRAM_WRITE_INTENTS) assert.equal(vd.isReadIntent(intent), false, intent);
  assert.equal(vd.asksAboutOwnRecords("How many volunteer hours do we have?"), true);
});

test("volunteer hours: described, saved only after the yes, the person found by first name, nonsense refused", async () => {
  const workspace = await ready();
  await workspace.confirm("Add a volunteer named Joy Wanjiru");
  const prompt = await workspace.say("Log 3 volunteer hours for Joy on the food drive");
  assert.match(prompt, /I can log 3 volunteer hours for Joy Wanjiru on food drive, today, in "Hope Garden"\. Should I go ahead\?/);
  assert.deepEqual((await workspace.editable()).volunteerHours, [], "nothing before the yes");
  assert.match(await workspace.say("yes"), /Logged 3 volunteer hours for Joy Wanjiru on food drive/);
  assert.deepEqual((await workspace.editable()).volunteerHours.map(row => [row.volunteer, row.hours, row.activity, row.date]), [["Joy Wanjiru", 3, "food drive", day(0)]]);
  assert.match(await workspace.confirm("Log 1 volunteer hour for Joy yesterday"), /Logged 1 volunteer hour for Joy Wanjiru/);
  assert.equal((await workspace.editable()).volunteerHours.at(-1).date, day(-1));
  assert.match(await workspace.say("Log 30 volunteer hours for Joy"), /more than a day/);
  assert.match(await workspace.say("Log volunteer hours for Joy"), /How many hours\?/);
  assert.match(await workspace.say("Log 2 volunteer hours"), /Who volunteered\?/);
  assert.match(await workspace.say("Log 2 volunteer hours for Sam Park"), /Sam Park is not on your list of contacts yet; I will log the hours anyway/);
  await workspace.say("no");
  assert.equal((await workspace.editable()).volunteerHours.length, 2);
  assert.match(await workspace.confirm("Joy volunteered 2 hours at the pantry"), /Logged 2 volunteer hours for Joy Wanjiru on pantry/);
  const summary = await workspace.say("How many volunteer hours do we have?");
  assert.match(summary, /6 hours from 1 volunteer over 3 entries\. Most hours: Joy Wanjiru 6/);
  assert.match(await workspace.say("How many volunteer hours do we have last month?"), /No volunteer hours are logged .* last month/);
});

test("skills and availability go on the volunteer's contact; a name that is not on the list is not invented", async () => {
  const workspace = await ready();
  await workspace.confirm("Add a volunteer named Joy Wanjiru");
  assert.match(await workspace.say("Joy's skills are cooking and driving"), /I can note that Joy Wanjiru's skills are cooking and driving in "Hope Garden"/);
  await workspace.say("yes");
  assert.match(await workspace.confirm("Joy is available on weekends"), /Noted Joy Wanjiru's availability/);
  const joy = (await workspace.editable()).leads[0];
  assert.deepEqual([joy.skills, joy.availability], ["cooking and driving", "on weekends"]);
  assert.match(await workspace.say("Pat's skills are plumbing"), /Pat is not on your list/);
});

test("consent: recording it adds the person; a service is recorded only after consent is given, never after it is declined", async () => {
  const workspace = await ready();
  const refused = await workspace.say("Maria Lopez received a food box");
  assert.match(refused, /Maria Lopez is not on your list in "Hope Garden"\. Record their consent first, which also adds them/);
  assert.match(await workspace.say("Record consent from Maria Lopez to keep her records"), /has given consent to keep their records, as of today, in "Hope Garden", adding Maria Lopez as a participant/);
  await workspace.say("yes");
  let editable = await workspace.editable();
  assert.deepEqual([editable.leads[0].name, editable.leads[0].type, editable.leads[0].consent, editable.leads[0].consentDate], ["Maria Lopez", "client", "given", day(0)]);
  assert.match(await workspace.confirm("Maria Lopez received a food box"), /Recorded a food box for Maria Lopez/);
  assert.match(await workspace.confirm("We served Maria Lopez a hot meal in the pantry program"), /Recorded a hot meal for Maria Lopez/);
  editable = await workspace.editable();
  assert.deepEqual(editable.services.map(row => [row.participant, row.service, row.program]), [["Maria Lopez", "food box", ""], ["Maria Lopez", "hot meal", "pantry"]]);
  await workspace.confirm("Record that Sam Park declined consent");
  assert.match(await workspace.say("Sam Park received a food box"), /Sam Park declined consent to keep records, so I have not recorded the service/);
  await workspace.confirm("Add a customer named Pat Lopez");
  assert.match(await workspace.say("Pat Lopez received a food box"), /I need Pat Lopez's consent to keep their records before I record a service/);
  assert.equal((await workspace.editable()).services.length, 2, "no service without consent");
  // withdrawing consent stops further services
  await workspace.confirm("Record that Maria Lopez withdrew consent");
  assert.equal((await workspace.editable()).leads.find(row => row.name === "Maria Lopez").consent, "declined");
  assert.match(await workspace.say("Maria Lopez received a food box"), /declined consent/);
  // two people with the same first name: ask for the full name
  await workspace.confirm("Record consent from Maria Santos");
  assert.match(await workspace.say("Record consent from Maria"), /More than one person matches Maria/);
});

test("reports give counts and totals, never names, except the list of who still needs to give consent", async () => {
  const workspace = await ready();
  await workspace.confirm("Record consent from Maria Lopez");
  await workspace.confirm("Record consent from Sam Park");
  await workspace.confirm("Record that Dana Reyes declined consent");
  await workspace.confirm("Add a member named Leo Grant");
  await workspace.confirm("Maria Lopez received a food box");
  await workspace.confirm("Maria Lopez received a food box");
  await workspace.confirm("Sam Park attended job coaching");
  await workspace.confirm("Record an outcome: 42 people completed job training in the workforce program");
  const served = await workspace.say("How many people did our program serve, and what results did we measure?");
  assert.match(served, /so far, 2 people received 3 services: 2 food box and 1 job coaching/);
  assert.match(served, /Results you measured: 42 people completed job training \(workforce\)/);
  assert.doesNotMatch(served, /Maria|Sam|Dana|Leo/, "no names in a report");
  assert.match(served, /counts only/); assert.match(served, /no separate access levels inside it yet/);
  assert.doesNotMatch(await workspace.say("How many people did we serve this month?"), /Maria|Sam|Dana|Leo/);
  const consent = await workspace.say("Who has not given consent?");
  assert.match(consent, /has 4 participants: 2 with consent given, 1 declined, 1 not yet asked/);
  assert.match(consent, /Still to ask: Leo Grant/);
  assert.doesNotMatch(consent, /Maria Lopez|Sam Park|Dana/, "only those who still need to be asked are named");
  assert.doesNotMatch(await workspace.say("How many participants do we have?"), /Leo Grant/, "a count question names nobody");
});

test("goals count what was recorded: results with that name first, else services with that name; the rule is said", async () => {
  const workspace = await ready();
  assert.match(await workspace.say("How are we doing against our goals?"), /has no goals yet/);
  assert.match(await workspace.say("Set a goal of 2 food boxes for the pantry program by December"), /goal of 2 food boxes for the pantry program, by \w+ \d+ December in "Hope Garden"/);
  await workspace.say("yes");
  assert.match(programs.planProgramWrite("addProgramGoal", { command: "Set a goal of lots", editable: await workspace.editable(), workspace: "Hope Garden", today: day(0) }).response, /What is the goal\?/);
  const goal = (await workspace.editable()).programGoals[0];
  assert.deepEqual([goal.program, goal.goal, goal.target], ["pantry", "food boxes", 2]);
  assert.match(goal.deadline, /^\d{4}-12-31$/, "by December is the end of December");
  assert.match(await workspace.say("How are we doing against our goals?"), /food boxes \(pantry\): 0 of 2 \(0%\), due .*counted from nothing recorded yet/);
  await workspace.confirm("Record consent from Maria Lopez");
  await workspace.confirm("Maria Lopez received a food box");
  assert.match(await workspace.say("How are we doing against our goals?"), /1 of 2 \(50%\).*counted from services you recorded/);
  await workspace.confirm("Record an outcome: 5 food boxes delivered to homes in the pantry program");
  assert.match(await workspace.say("How are we doing against our goals?"), /5 of 2 \(250%\).*counted from results you recorded/);
  assert.match(programs.planProgramWrite("logOutcome", { command: "Record an outcome: lots", editable: await workspace.editable(), workspace: "Hope Garden", today: day(0) }).response, /What was measured\?/);
});

test("the impact report adds up what is recorded, says what is not, and invents nothing", async () => {
  const empty = await ready();
  const none = await empty.say("Give me the impact report");
  assert.match(none, /Impact report for "Hope Garden", so far: people: no services recorded\. Volunteers: no hours recorded\. Results measured: none recorded\. Money: nothing logged/);
  assert.match(none, /anything not logged is not counted/);
  const workspace = await ready();
  await workspace.confirm("Record consent from Maria Lopez");
  await workspace.confirm("Maria Lopez received a food box");
  await workspace.confirm("Log 4 volunteer hours for Joy");
  await workspace.confirm("Record an outcome: 42 people completed job training");
  await workspace.confirm("Set a goal of 10 food boxes by December");
  await workspace.confirm("Record 500 dollars donation");
  await workspace.confirm("We spent 120 dollars on supplies");
  const report = await workspace.say("Give me the impact report");
  assert.match(report, /people: 1 person received 1 service \(1 food box\)/);
  assert.match(report, /Volunteers: 4 hours from 1 volunteer/);
  assert.match(report, /Results measured: 42 people completed job training/);
  assert.match(report, /Goals: food boxes 1 of 10/);
  assert.match(report, /Money: \$500\.00 in and \$120\.00 out/);
  assert.doesNotMatch(report, /Maria|Joy/);
  assert.match(await workspace.say("Show our impact report last year"), /last year: people: no services recorded/);
});

test("the schema keeps the people-side lists, refuses negative hours, and reads an older workspace back with them empty", async () => {
  const workspace = await ready();
  const [record] = [...workspace.rows.values()];
  for (const key of ["volunteerHours", "services", "outcomes", "programGoals"]) delete record.data.editable[key];
  for (const lead of record.data.editable.leads) for (const key of ["skills", "availability", "source", "consent", "consentDate"]) delete lead[key];
  const read = (await workspace.businessRequest({ method: "GET", pathname: `/api/nexus/runtime/business/clients/${record.record_id}` })).body;
  for (const key of ["volunteerHours", "services", "outcomes", "programGoals"]) assert.deepEqual(read.data.editable[key], [], key);
  const editable = { ...read.data.editable, volunteerHours: [{ volunteer: "Joy", hours: 2, date: day(0), activity: "x", program: "" }],
    leads: [{ name: "Maria", contact: "", type: "client", need: "", stage: "new", nextAction: "", followUpDate: "", skills: "", availability: "", source: "", consent: "given", consentDate: day(0) }] };
  const saved = (await workspace.businessRequest({ method: "PUT", pathname: `/api/nexus/runtime/business/clients/${record.record_id}`, body: { expectedVersion: read.version, info: read.data.info, editable } })).body;
  assert.equal(saved.data.editable.leads[0].consent, "given"); assert.equal(saved.data.editable.volunteerHours[0].hours, 2);
  await assert.rejects(workspace.businessRequest({ method: "PUT", pathname: `/api/nexus/runtime/business/clients/${record.record_id}`, body: { expectedVersion: saved.version, info: saved.data.info, editable: { ...editable, volunteerHours: [{ ...editable.volunteerHours[0], hours: -3 }] } } }), /./);
});

test("the orb path: a spoken service, consent and hours conversation, with the yes, through the planner", async () => {
  const workspace = await ready();
  const read = createBusinessReader({ repository: workspace.repository, access: workspace.access, consents: workspace.consents, env: {} });
  const p = new OpenEndedPlanner({ model: { plan: async () => { throw new Error("REACHED THE AI MODEL"); }, respond: async () => { throw new Error("REACHED THE AI MODEL"); } }, tools: { list: async () => [] }, applications: { list: () => [] },
    businessWorkspaces: { count: async () => 1, read: ({ command }) => read({ command, context: workspace.context }) } });
  const spoken = async text => p.plan({ command: { text, tenantId: "t", actorId: "u", locale: "en", channel: "voice" }, context: { timeZone: TZ, deterministicOnly: true } });
  for (const [text, pattern] of [["Log 3 volunteer hours for Joy on the food drive", /Should I go ahead\?/], ["yes", /Logged 3 volunteer hours for Joy/],
    ["Record consent from Maria Lopez", /Should I go ahead\?/], ["yes", /Recorded that Maria Lopez has given consent/], ["Maria Lopez received a food box", /Should I go ahead\?/], ["yes", /Recorded a food box for Maria Lopez/],
    ["Give me the impact report", /Impact report for "Hope Garden"/]]) {
    const plan = await spoken(text);
    assert.notEqual(plan.deferred, true, text);
    assert.match(plan.response, pattern, text);
  }
  assert.equal((await workspace.editable()).services.length, 1);
});

test("the web editor shows and saves the people-side lists and fields; the orb is told how to handle them", () => {
  const html = fs.readFileSync(path.join(__dirname, "../../public/business-services.html"), "utf8");
  const script = fs.readFileSync(path.join(__dirname, "../../public/business-services.js"), "utf8");
  for (const id of ["volunteer-hours", "add-volunteer-hours", "volunteer-summary", "services", "add-service", "outcomes", "add-outcome", "program-goals", "add-goal", "program-summary"]) assert.match(html, new RegExp(`id="${id}"`), id);
  for (const needle of ['rows("volunteer-hours", editable.volunteerHours', 'rows("services", editable.services', 'rows("outcomes", editable.outcomes', 'rows("program-goals", editable.programGoals', '["skills", "Skills (volunteers)"]', '["consent", "Consent to keep their records', 'byId("add-service")', 'byId("add-goal")', 'skills: "", availability: "", source: "", consent: "", consentDate: ""', 'description: "", fund: ""']) assert.ok(script.includes(needle), needle);
  assert.match(html, /Record a person's consent to keep their records on their contact row first/);
  const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  assert.match(server, /talks about the people they serve or work with -- volunteer hours/);
  assert.match(server, /It records a service only for someone whose consent is recorded and gives counts, not names, in its reports/);
  assert.equal(server.split("talks about the people they serve or work with").length, 2, "said once");
  assert.doesNotThrow(() => new (require("node:vm").Script)(server, { filename: "server.js" }));
});
