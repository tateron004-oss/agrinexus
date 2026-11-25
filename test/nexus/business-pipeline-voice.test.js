"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");
const pipeline = require("../../nexus/business/pipeline-voice.js");

const { classify, precheck, run, isReadIntent } = voiceDispatch;

// 9 November 2026: a sales pipeline (the person's own stages, deals that move between them), tags, and a history of notes and calls for each contact, all by voice.
// Before, a customer's "stage" was one free-text word: no board, no deals, no tags, no notes.

const ZONE = "Africa/Nairobi";
function workspace(editableOverrides = {}) {
  const editable = {
    leads: [
      { name: "Grace Otieno", contact: "+254712345678", type: "customer", need: "", stage: "new", nextAction: "", followUpDate: "", tags: "" },
      { name: "John Kamau", contact: "", type: "customer", need: "", stage: "new", nextAction: "", followUpDate: "", tags: "wholesale" },
      { name: "Amina Hassan", contact: "", type: "customer", need: "", stage: "new", nextAction: "", followUpDate: "", tags: "" }
    ],
    invoices: [], invoiceItems: [], grants: [], tasks: [], appointments: [], listings: [], transactions: [{ date: "2026-11-01", type: "income", category: "sales", amount: 100, currency: "KES", description: "", fund: "" }],
    pipelineStages: [], deals: [], contactNotes: [], campaignLog: [],
    ...editableOverrides
  };
  const client = { record_id: "rec_1", version: 4, data: { info: { businessName: "Mama Grace Shop" }, editable } };
  const saves = [];
  const businessRequest = async ({ method, body }) => {
    if (method === "GET") return { body: { clients: [client] } };
    saves.push(body);
    client.version += 1; client.data = { ...client.data, editable: body.editable };
    return { body: client };
  };
  return { client, saves, businessRequest, editable: () => client.data.editable };
}
const say = (ws, command, confirmed = true) => run({ command, confirmed, businessRequest: ws.businessRequest, timeZone: ZONE });

test("the phrases are recognised as pipeline requests, and look-alikes are left to the other tools", () => {
  const yes = {
    addDeal: ["Add a deal for Grace Otieno, wedding cake, 400 dollars", "create a new deal with John Kamau for 2000 shillings", "log a deal for Amina Hassan"],
    moveDeal: ["Move Grace's deal to Won", "mark John Kamau's deal as lost", "we won the Amina Hassan deal", "move the wedding cake deal to Quoted", "Grace's deal is now Booked"],
    setStages: ["Set my pipeline stages to New, Quoted, Won and Lost"],
    addStage: ["Add a stage called Negotiating"],
    removeStage: ["Remove the stage Contacted"],
    tagContact: ["Tag Grace as VIP", "tag John Kamau with wholesale", "add the tag VIP to Amina Hassan"],
    untagContact: ["Remove the tag wholesale from John Kamau", "untag Grace"],
    addNote: ["Add a note to Grace: she wants delivery on Friday", "log a call with John Kamau, he will decide next week", "note about Amina Hassan that she prefers texts", "Add a note to customer Amina Hassan: She wants delivery on Friday."],
    listByTag: ["Who is tagged VIP?", "show customers tagged wholesale"],
    contactHistory: ["What is Grace's history?", "show Grace Otieno's notes", "what happened with John Kamau"],
    pipelineValue: ["How much is in my pipeline?", "what is my pipeline value"],
    pipelineStage: ["Which deals are in Quoted?", "what is in the Booked stage"],
    pipelineBoard: ["Show my pipeline", "what deals do I have", "how many deals do I have"]
  };
  for (const [intent, phrases] of Object.entries(yes)) for (const phrase of phrases) { assert.equal(pipeline.classifyPipeline(phrase), intent, phrase); assert.equal(classify(phrase), intent, `classify: ${phrase}`); }
  for (const phrase of ["add a customer named Grace", "list my customers", "who owes me money", "set a follow-up with Grace on Friday", "remind me to call Grace about the deal tomorrow", "how do I close a deal", "what is a sales pipeline",
    "tag me in the photo", "show me my invoices", "add a note to my shopping list", "mark invoice INV-1001 as paid", "show the weather", "what happened in Kenya yesterday"]) {
    assert.equal(pipeline.classifyPipeline(phrase), null, phrase);
  }
  assert.equal(isReadIntent("pipelineBoard"), true); assert.equal(isReadIntent("addDeal"), false);
  assert.equal(precheck("show my pipeline", {}).toolId, "business.query");
  assert.equal(precheck("add a deal for Grace Otieno, wedding cake, 400 dollars", {}).toolId, "business.manage");
});

test("a deal is added after a yes, starts at the first stage, and the person's history says so", async () => {
  const ws = workspace();
  const ask = await say(ws, "Add a deal for Grace Otieno, wedding cake, 400 dollars", false);
  assert.equal(ask.status, "needs-confirmation");
  assert.match(ask.response, /Grace Otieno, Wedding Cake, worth USD 400, at New/);
  assert.equal(ws.saves.length, 0, "nothing is saved before the yes");
  const done = await say(ws, "Add a deal for Grace Otieno, wedding cake, 400 dollars", true);
  assert.equal(done.status, "completed");
  const [deal] = ws.editable().deals;
  assert.deepEqual({ contact: deal.contact, title: deal.title, value: deal.value, currency: deal.currency, stage: deal.stage }, { contact: "Grace Otieno", title: "Wedding Cake", value: 400, currency: "USD", stage: "New" });
  assert.match(deal.id, /^D\d{6}-\d+$/);
  assert.match(ws.editable().contactNotes.at(-1).text, /Deal opened: Wedding Cake, USD 400 \(New\)/);
  // a currency said in words, and a deal with no amount, take the workspace's own currency
  const other = await say(ws, "add a deal for John Kamau, delivery contract, 50000 shillings", true);
  assert.equal(other.status, "completed");
  assert.deepEqual([ws.editable().deals[1].value, ws.editable().deals[1].currency], [50000, "KES"]);
  await say(ws, "add a deal for Amina Hassan", true);
  assert.equal(ws.editable().deals[2].currency, "KES");
  assert.equal(ws.editable().deals[2].title, "New deal");
  // a person must be named
  const none = await say(ws, "add a deal worth 500 dollars", true);
  assert.equal(none.status, "needs-input");
  assert.match(none.response, /Who is the deal with/);
});

test("a deal moves between stages, closing it records the day, 'we won it' means the Won stage, and every move is in the person's history", async () => {
  const ws = workspace();
  await say(ws, "add a deal for Grace Otieno, wedding cake, 400 dollars");
  const ask = await say(ws, "Move Grace's deal to Quoted", false);
  assert.equal(ask.status, "needs-confirmation");
  assert.match(ask.response, /from New to Quoted/);
  await say(ws, "Move Grace's deal to Quoted");
  assert.equal(ws.editable().deals[0].stage, "Quoted");
  assert.equal(ws.editable().deals[0].closedOn, "");
  const won = await say(ws, "we won the Grace Otieno deal");
  assert.match(won.response, /is now at Won\. Congratulations/);
  assert.equal(ws.editable().deals[0].stage, "Won");
  assert.match(ws.editable().deals[0].closedOn, /^\d{4}-\d{2}-\d{2}$/);
  assert.match(ws.editable().contactNotes.map(note => note.text).join("|"), /moved from New to Quoted\|.*moved from Quoted to Won/);
  // already there, and no such person
  const same = await say(ws, "move Grace's deal to Won");
  assert.match(same.response, /already at Won/);
  const nobody = await say(ws, "move Peter Mwangi's deal to Won");
  assert.equal(nobody.status, "needs-input");
  // two deals for one person: ask which
  await say(ws, "add a deal for John Kamau, delivery contract, 500 dollars");
  await say(ws, "add a deal for John Kamau, shop sign, 90 dollars");
  const which = await say(ws, "move John Kamau's deal to Booked", false);
  assert.equal(which.status, "needs-input");
  assert.match(which.response, /2 deals: Delivery Contract and Shop Sign/);
  const chosen = await say(ws, "move John Kamau's shop sign deal to Booked");
  assert.match(chosen.response, /Shop Sign/);
  assert.equal(ws.editable().deals.find(deal => deal.title === "Shop Sign").stage, "Booked");
  assert.equal(ws.editable().deals.find(deal => deal.title === "Delivery Contract").stage, "New");
});

test("the board, one stage and the open value are read back, in each currency and never added across them", async () => {
  const ws = workspace({ deals: [
    { id: "D1", title: "Wedding Cake", contact: "Grace Otieno", value: 400, currency: "USD", stage: "Quoted", openedOn: "2026-11-01", movedOn: "2026-11-02", closedOn: "", note: "" },
    { id: "D2", title: "Delivery Contract", contact: "John Kamau", value: 50000, currency: "KES", stage: "Quoted", openedOn: "2026-11-01", movedOn: "2026-11-01", closedOn: "", note: "" },
    { id: "D3", title: "Shop Sign", contact: "John Kamau", value: 90, currency: "USD", stage: "Won", openedOn: "2026-10-01", movedOn: "2026-10-05", closedOn: "2026-10-05", note: "" }
  ] });
  const board = await say(ws, "show my pipeline");
  assert.equal(board.status, "completed");
  assert.match(board.response, /3 deals: Quoted 2 \(USD 400 and KES 50,000\), Won 1 \(USD 90\)\. USD 400 and KES 50,000 is still open\./);
  const stage = await say(ws, "which deals are in Quoted?");
  assert.match(stage.response, /2 deals in Quoted: Grace Otieno, Wedding Cake, USD 400; and John Kamau, Delivery Contract, KES 50,000\./);
  const value = await say(ws, "how much is in my pipeline");
  assert.match(value.response, /2 open deals in "Mama Grace Shop", worth USD 400 and KES 50,000\. USD 90 has been won\./);
  const empty = await say(workspace(), "show my pipeline");
  assert.match(empty.response, /no deals yet/);
  assert.equal(pipeline.readPipeline("pipelineStage", { command: "what is in Negotiating", editable: ws.editable(), workspace: "X", today: "2026-11-09" }).startsWith("Which stage?"), true);
});

test("the stages are the person's own: set, add before the closing ones, and remove only when nothing is in them", async () => {
  const ws = workspace();
  assert.deepEqual(pipeline.stagesOf(ws.editable()), ["New", "Contacted", "Quoted", "Booked", "Won", "Lost"]);
  const set = await say(ws, "set my pipeline stages to Lead, Meeting, Proposal, Won and Lost");
  assert.equal(set.status, "completed");
  assert.deepEqual(ws.editable().pipelineStages.map(row => row.name), ["Lead", "Meeting", "Proposal", "Won", "Lost"]);
  await say(ws, "add a deal for Grace Otieno, wedding cake, 400 dollars");
  assert.equal(ws.editable().deals[0].stage, "Lead", "a new deal starts at the first stage of their own list");
  await say(ws, "add a stage called Negotiating");
  assert.deepEqual(ws.editable().pipelineStages.map(row => row.name), ["Lead", "Meeting", "Proposal", "Negotiating", "Won", "Lost"]);
  const blocked = await say(ws, "remove the stage Lead");
  assert.match(blocked.response, /1 deal is in Lead\. Move it first/);
  const removed = await say(ws, "remove the stage Meeting");
  assert.equal(removed.status, "completed");
  assert.equal(ws.editable().pipelineStages.some(row => row.name === "Meeting"), false);
  const few = await say(ws, "set my pipeline stages to Only");
  assert.equal(few.status, "needs-input");
  assert.match(few.response, /Say the stages in order/);
});

test("tags are added and removed, and a tag finds the people who carry it", async () => {
  const ws = workspace();
  const ask = await say(ws, "tag Grace as VIP", false);
  assert.equal(ask.status, "needs-confirmation");
  await say(ws, "tag Grace as VIP");
  await say(ws, "add the tag Lagos to Grace Otieno");
  assert.equal(ws.editable().leads[0].tags, "VIP, Lagos");
  const repeat = await say(ws, "tag Grace as vip");
  assert.match(repeat.response, /already tagged vip/);
  const tagged = await say(ws, "who is tagged VIP?");
  assert.match(tagged.response, /1 person tagged VIP: Grace Otieno\./);
  const wholesale = await say(ws, "show customers tagged wholesale");
  assert.match(wholesale.response, /John Kamau/);
  await say(ws, "remove the tag wholesale from John Kamau");
  assert.equal(ws.editable().leads[1].tags, "");
  const gone = await say(ws, "remove the tag wholesale from John Kamau");
  assert.match(gone.response, /is not tagged wholesale/);
  const nobody = await say(ws, "who is tagged Platinum?");
  assert.match(nobody.response, /Nobody in "Mama Grace Shop" is tagged Platinum/);
  const lost = await say(ws, "tag Peter Mwangi as VIP");
  assert.equal(lost.status, "needs-input");
});

test("a note or a call is kept on the person, and the history reads back the notes, the deals and the messages sent", async () => {
  const ws = workspace({ campaignLog: [{ campaign: "Diwali Sale", customer: "Grace Otieno", channel: "sms", to: "+254712345678", status: "sent", at: "2026-11-03T08:00:00Z", note: "" }] });
  const ask = await say(ws, "Add a note to Grace: she wants delivery on Friday", false);
  assert.equal(ask.status, "needs-confirmation");
  assert.match(ask.response, /save this note on Grace Otieno: "she wants delivery on Friday"/);
  await say(ws, "Add a note to Grace: she wants delivery on Friday");
  await say(ws, "log a call with Grace Otieno, she will decide next week");
  assert.deepEqual(ws.editable().contactNotes.map(note => [note.contact, note.kind, note.text]), [["Grace Otieno", "note", "she wants delivery on Friday"], ["Grace Otieno", "call", "she will decide next week"]]);
  await say(ws, "add a deal for Grace Otieno, wedding cake, 400 dollars");
  await say(ws, "tag Grace as VIP");
  const history = await say(ws, "What is Grace's history?");
  assert.match(history.response, /Grace Otieno is a customer, tagged VIP\./);
  assert.match(history.response, /1 deal: Wedding Cake is New, USD 400\./);
  assert.match(history.response, /she will decide next week/);
  assert.match(history.response, /Last message sent: Diwali Sale on 2026-11-03/);
  const empty = await say(workspace(), "what is Amina Hassan's history");
  assert.match(empty.response, /nothing in their history yet/);
  const missing = await say(ws, "add a note to Grace", false);
  assert.equal(missing.status, "needs-input");
  assert.match(missing.response, /What should the note say/);
  const stranger = await say(ws, "add a note to Peter Mwangi: hello", false);
  assert.equal(stranger.status, "needs-input");
});

test("the new lists are kept by the workspace, a workspace saved before they existed reads back unchanged, and the caps hold", () => {
  const service = require("../../nexus/business/service.js");
  const normalize = service.normalizeEditable;
  assert.equal(typeof normalize, "function");
  const info = { businessName: "Shop", industry: "retail", location: "Nairobi", customer: "", problem: "", objective: "" };
  const fresh = normalize(info, undefined);
  assert.deepEqual([fresh.pipelineStages, fresh.deals, fresh.contactNotes], [[], [], []]);
  const kept = normalize(info, { ...fresh, leads: [{ name: "Grace", tags: "VIP, Lagos" }], deals: [{ id: "D1", title: "Cake", contact: "Grace", value: 400, currency: "USD", stage: "New" }], pipelineStages: [{ name: "New" }, { name: "Won" }], contactNotes: [{ contact: "Grace", at: "2026-11-09", kind: "note", text: "hi" }] });
  assert.equal(kept.leads[0].tags, "VIP, Lagos");
  assert.equal(kept.deals[0].value, 400);
  assert.equal(kept.contactNotes[0].text, "hi");
  assert.throws(() => normalize(info, { ...fresh, deals: [{ id: "D", title: "x", contact: "y", value: -5, currency: "USD", stage: "New" }] }), /supported/);
  assert.throws(() => normalize(info, { ...fresh, pipelineStages: Array.from({ length: 11 }, (_, i) => ({ name: `S${i}` })) }), /supported/);
});

test("a note addressed to a NAMED person goes to the business contact; the person's own notes are left alone", () => {
  const { readRequest } = require("../../nexus/personal/items.js");
  for (const text of ["Add a note to Grace: she wants delivery on Friday", "Add a note to customer Amina Hassan: She wants delivery on Friday.", "add a note to the client John Kamau: call back", "add a note about Amina Hassan: she prefers texts", "Note on John Kamau that he will decide next week"]) assert.equal(readRequest(text, "2026-11-09"), null, text);
  for (const text of ["add a note to my shopping list: milk", "Add a note that the pump needs a seal", "Make a note about maize prices", "note that I paid the rent"]) assert.equal(readRequest(text, "2026-11-09")?.action, "note-add", text);
});

test("every change the pipeline can make is on the list of spoken changes, so the real runtime accepts it", () => {
  const source = require("node:fs").readFileSync(require("node:path").join(__dirname, "..", "..", "nexus", "business", "authoritative-executor.js"), "utf8");
  assert.ok(source.includes("...pipelineVoice.PIPELINE_WRITE_INTENTS"));
  for (const intent of pipeline.PIPELINE_WRITE_INTENTS) assert.ok(typeof intent === "string" && intent.length);
});

test("the voice model's habit of adding 'in <the business>' to a name is dropped, for sequences and pages", () => {
  const sequences = require("../../nexus/business/sequences-voice.js");
  const pages = require("../../nexus/business/pages-voice.js");
  const made = sequences.planSequenceWrite("createSequence", { command: "Create a sequence called Quote Follow-up in Mama Grace Spa", editable: { sequences: [], sequenceSteps: [], leads: [] }, workspace: "Mama Grace Spa", today: "2026-11-10" });
  assert.match(made.prompt, /sequence called Quote Follow-up in "Mama Grace Spa"./);
  assert.equal(made.apply({ sequences: [], sequenceSteps: [], leads: [] }).sequences[0].name, "Quote Follow-up");
  const page = pages.planPageWrite("createPage", { command: "Create a contact form called Enquiry in Mama Grace Spa", editable: { pages: [] }, workspace: "Mama Grace Spa", today: "2026-11-10" });
  assert.equal(page.apply({ pages: [] }).pages[0].title, "Enquiry");
  // a name that merely contains 'in' is kept
  const other = sequences.planSequenceWrite("createSequence", { command: "Create a sequence called Check in later", editable: { sequences: [], sequenceSteps: [], leads: [] }, workspace: "Mama Grace Spa", today: "2026-11-10" });
  assert.equal(other.apply({ sequences: [], sequenceSteps: [], leads: [] }).sequences[0].name, "Check in later");
});

test("the voice model's added 'in the <business> customer record' is not part of the tag (found live, 10 November 2026)", () => {
  const pipelineVoice = require("../../nexus/business/pipeline-voice.js");
  const editable = { leads: [{ name: "Amina Hassan", contact: "", type: "customer", stage: "new", tags: "" }], deals: [], pipelineStages: [], contactNotes: [] };
  for (const said of ["Tag Amina Hassan as VIP in the Mama Grace Bakery customer record", "Tag Amina Hassan as VIP in Mama Grace Bakery.", "Tag Amina Hassan as VIP"]) {
    const plan = pipelineVoice.planPipelineWrite(pipelineVoice.classifyPipeline(said), { command: said, editable, workspace: "Mama Grace Bakery" });
    assert.match(plan.prompt, /tag Amina Hassan as VIP in "Mama Grace Bakery"/, said);
  }
});
