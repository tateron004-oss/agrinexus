"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");
const sequences = require("../../nexus/business/sequences-voice.js");
const campaigns = require("../../nexus/business/campaigns-voice.js");
const { createSequenceSender } = require("../../nexus/business/sequence-sender.js");
const { normalizeEditable } = require("../../nexus/business/service.js");
const { createHandlers } = require("../../nexus/workers/handlers.js");

// 9 November 2026: follow-up sequences. A few messages that go out by themselves, days apart, to the people who agreed to get messages, and stop the moment someone replies or says stop. Built and started by voice (each change
// asks first); sent by the background worker with the same safety rules as a scheduled campaign.

const NAIROBI = "Africa/Nairobi";
const lead = (name, contact, extra = {}) => ({ name, contact, type: "customer", need: "", stage: "new", nextAction: "", followUpDate: "", messageConsent: "yes", messageConsentDate: "2099-01-01", tags: "", ...extra });
function workspace(editableOverrides = {}) {
  const editable = {
    leads: [lead("Grace Otieno", "+254712345678", { tags: "VIP" }), lead("John Kamau", "john@example.com"), lead("Amina Hassan", "+254722000111", { messageConsent: "no" }), lead("Wanjiru Njeri", "")],
    invoices: [], invoiceItems: [], grants: [], tasks: [], appointments: [], listings: [], transactions: [],
    sequences: [], sequenceSteps: [], sequenceRuns: [], deals: [], campaignLog: [], contactNotes: [], ...editableOverrides
  };
  const client = { record_id: "rec_1", version: 4, data: { info: { businessName: "Mama Grace Salon" }, editable } };
  const saves = [];
  const businessRequest = async ({ method, body }) => {
    if (method === "GET") return { body: { clients: [client] } };
    saves.push(body); client.version += 1; client.data = { ...client.data, editable: body.editable };
    return { body: client };
  };
  return { client, saves, businessRequest, editable: () => client.data.editable };
}
const say = (ws, command, confirmed = true) => voiceDispatch.run({ command, confirmed, businessRequest: ws.businessRequest, timeZone: NAIROBI });
const ready = async () => {
  const ws = workspace();
  await say(ws, "Create a sequence called Quote Follow-up");
  await say(ws, "Add a step to Quote Follow-up: right away, send a text saying Thanks for asking about a quote.");
  await say(ws, "Add a step to Quote Follow-up: after 2 days, send a text saying Just checking in about your quote.");
  return ws;
};

test("the phrases are recognised as sequence requests, and campaigns, automations and general questions are left alone", () => {
  const yes = {
    createSequence: ["Create a sequence called Quote Follow-up", "make a follow-up sequence called Welcome"],
    addSequenceStep: ["Add a step to Quote Follow-up: right away, send a text saying Thanks for asking.", "add an email to the Welcome sequence: after 3 days saying Hello again"],
    removeSequenceStep: ["Remove step 2 from the Quote Follow-up sequence"],
    startSequence: ["Start the Quote Follow-up sequence for Grace Otieno", "start the Quote Follow-up sequence for everyone tagged VIP", "run the Welcome sequence for everyone in Quoted"],
    stopSequence: ["Stop the Quote Follow-up sequence for Grace Otieno", "stop the Quote Follow-up sequence for everyone"],
    pauseSequence: ["Pause the Quote Follow-up sequence"], resumeSequence: ["Resume the Quote Follow-up sequence"],
    markSequenceReply: ["Grace Otieno replied to the Quote Follow-up sequence"],
    listSequences: ["Show my sequences", "what sequences do I have"],
    sequenceDetails: ["What is in the Quote Follow-up sequence?"],
    sequenceWho: ["Who is in the Quote Follow-up sequence?"]
  };
  for (const [intent, phrases] of Object.entries(yes)) for (const phrase of phrases) {
    assert.equal(sequences.classifySequence(phrase), intent, phrase);
    assert.equal(voiceDispatch.classify(phrase), intent, `dispatch: ${phrase}`);
  }
  for (const phrase of ["Create an email campaign called Grand Opening saying We open Saturday", "send the Grand Opening campaign", "show my automations", "what is a sequence of numbers", "the next number in the sequence is 8", "how do I write a follow-up sequence", "add a customer named Grace"]) {
    assert.equal(sequences.classifySequence(phrase), null, phrase);
  }
  assert.equal(voiceDispatch.isReadIntent("listSequences"), true); assert.equal(voiceDispatch.isReadIntent("startSequence"), false);
  for (const intent of sequences.SEQUENCE_WRITE_INTENTS) assert.equal(voiceDispatch.isReadIntent(intent), false, intent);
});

test("a sequence is built step by step, each step after a yes, with its delay and channel read from the sentence", async () => {
  const ws = workspace();
  assert.match((await say(ws, "Create a sequence called Quote Follow-up", false)).response, /create a follow-up sequence called Quote Follow-up[\s\S]*sends nothing until you add steps and start it/);
  await say(ws, "Create a sequence called Quote Follow-up");
  assert.deepEqual(ws.editable().sequences.map(row => [row.name, row.status]), [["Quote Follow-up", "active"]]);
  const first = await say(ws, "Add a step to Quote Follow-up: right away, send a text saying Thanks for asking about a quote.", false);
  assert.equal(first.status, "needs-confirmation");
  assert.match(first.response, /step 1 to the Quote Follow-up sequence: right away, by text: "Thanks for asking about a quote\."/);
  await say(ws, "Add a step to Quote Follow-up: right away, send a text saying Thanks for asking about a quote.");
  await say(ws, "Add a step to Quote Follow-up: after 2 days, send an email saying Just checking in about your quote.");
  await say(ws, "Add a step to the Quote Follow-up sequence: after a week, send a text saying Last chance for this price.");
  assert.deepEqual(ws.editable().sequenceSteps.map(step => [step.step, step.afterDays, step.channel]), [[1, 0, "sms"], [2, 2, "email"], [3, 7, "sms"]]);
  const details = await say(ws, "What is in the Quote Follow-up sequence?");
  assert.match(details.response, /3 steps: step 1, right away, by text: Thanks for asking[\s\S]*step 2, after 2 days, by email: Just checking in[\s\S]*step 3, after 7 days, by text: Last chance/);
  assert.match((await say(ws, "show my sequences")).response, /1 sequence: Quote Follow-up \(3 steps, 0 running\)/);
  // questions, and what cannot be done
  assert.equal((await say(ws, "Add a step to Quote Follow-up: after 2 days saying Hello there")).status, "needs-input");
  assert.match((await say(ws, "Add a step to Quote Follow-up: after 2 days saying Hello there")).response, /by text or by email/);
  assert.match((await say(ws, "Add a step to Quote Follow-up: send a text saying Hello there")).response, /When should this step go out/);
  assert.match((await say(ws, "Add a step to Quote Follow-up: right away, send a text")).response, /What should the message say/);
  const whatsapp = await say(ws, "Add a step to Quote Follow-up: right away, send a WhatsApp saying Hello there");
  assert.match(whatsapp.response, /WhatsApp messages need a connected WhatsApp account/);
  assert.equal(ws.editable().sequenceSteps.length, 3, "nothing was added for any of those");
  // a step can be removed, and the rest move up
  await say(ws, "Remove step 2 from the Quote Follow-up sequence");
  assert.deepEqual(ws.editable().sequenceSteps.map(step => [step.step, step.channel]), [[1, "sms"], [2, "sms"]]);
});

test("starting a sequence asks first, enrols only people who agreed and can be reached, and says when the first message goes", async () => {
  const ws = await ready();
  const ask = await say(ws, "Start the Quote Follow-up sequence for Grace Otieno", false);
  assert.equal(ask.status, "needs-confirmation");
  assert.match(ask.response, /start the Quote Follow-up sequence for Grace Otieno\. The first message goes out today, between 8 AM and 8 PM, by text\. It stops for anyone who replies or says stop\./);
  assert.equal(ws.saves.length, 3, "nothing is saved by the question (only the sequence and its two steps were)");
  await say(ws, "Start the Quote Follow-up sequence for Grace Otieno");
  const [run] = ws.editable().sequenceRuns;
  assert.deepEqual({ sequence: run.sequence, customer: run.customer, nextStep: run.nextStep, status: run.status, zone: run.zone }, { sequence: "Quote Follow-up", customer: "Grace Otieno", nextStep: 1, status: "active", zone: NAIROBI });
  assert.match(run.dueOn, /^\d{4}-\d{2}-\d{2}$/);
  // not twice, and not for someone who has not agreed, or has nothing to send to
  assert.match((await say(ws, "Start the Quote Follow-up sequence for Grace Otieno")).response, /Nobody new to start/);
  assert.match((await say(ws, "Start the Quote Follow-up sequence for Amina Hassan")).response, /has not agreed to get messages yet/);
  const noNumber = await say(ws, "Start the Quote Follow-up sequence for Wanjiru Njeri");
  assert.match(noNumber.response, /has no phone number saved/);
  assert.equal(ws.editable().sequenceRuns.length, 1);
  // a group: those tagged, with the rest left out, said plainly
  const group = await say(ws, "Start the Quote Follow-up sequence for everyone tagged VIP", false);
  assert.match(group.response, /Nobody new to start/);
  const who = await say(ws, "Who is in the Quote Follow-up sequence?");
  assert.match(who.response, /1 person in the Quote Follow-up sequence: Grace Otieno \(step 1 of 2, next /);
});

test("stopping, replying, pausing and resuming", async () => {
  const ws = await ready();
  await say(ws, "Start the Quote Follow-up sequence for Grace Otieno");
  const reply = await say(ws, "Grace Otieno replied to the Quote Follow-up sequence", false);
  assert.match(reply.response, /note that Grace Otieno replied, and stop the Quote Follow-up sequence for them/);
  await say(ws, "Grace Otieno replied to the Quote Follow-up sequence");
  assert.equal(ws.editable().sequenceRuns[0].status, "replied");
  assert.equal(ws.editable().campaignLog.at(-1).status, "replied");
  assert.match((await say(ws, "Who is in the Quote Follow-up sequence?")).response, /Grace Otieno \(replied, so it stopped\)/);
  // restarting is allowed once it has stopped; stopping by name and for everyone
  await say(ws, "Start the Quote Follow-up sequence for Grace Otieno");
  assert.equal(ws.editable().sequenceRuns.filter(run => run.status === "active").length, 1);
  const stopped = await say(ws, "Stop the Quote Follow-up sequence for Grace Otieno");
  assert.match(stopped.response, /Stopped the Quote Follow-up sequence for Grace Otieno/);
  assert.equal(ws.editable().sequenceRuns.filter(run => run.status === "active").length, 0);
  assert.match((await say(ws, "Stop the Quote Follow-up sequence for Grace Otieno")).response, /not running through the Quote Follow-up sequence right now/);
  assert.equal((await say(ws, "Stop the Quote Follow-up sequence", false)).status, "needs-input");
  // pause and resume the whole sequence
  await say(ws, "Pause the Quote Follow-up sequence");
  assert.equal(ws.editable().sequences[0].status, "paused");
  assert.match((await say(ws, "Pause the Quote Follow-up sequence")).response, /already paused/);
  await say(ws, "Resume the Quote Follow-up sequence");
  assert.equal(ws.editable().sequences[0].status, "active");
  // the steps of a sequence with people in it are not edited under them
  await say(ws, "Start the Quote Follow-up sequence for Grace Otieno");
  assert.match((await say(ws, "Remove step 1 from the Quote Follow-up sequence")).response, /People are running through/);
});

test("a WhatsApp campaign is refused instead of being sent as a text", () => {
  const out = campaigns.planCampaignWrite("createCampaign", { command: "Create a WhatsApp campaign called Sale saying Half price on Friday at nine", editable: { leads: [], campaigns: [] }, workspace: "X", today: "2099-03-02" });
  assert.equal(out.info, true); assert.match(out.response, /WhatsApp campaigns are not set up yet/);
  const email = campaigns.planCampaignWrite("createCampaign", { command: "Create an email campaign called Sale saying Half price on Friday at nine", editable: { leads: [], campaigns: [] }, workspace: "X", today: "2099-03-02" });
  assert.ok(email.prompt, "an email campaign is still made");
  assert.equal(typeof campaigns.usable, "function");
});

// ---- the worker ----
function fakeRepository(records) {
  const store = new Map(records.map(record => [record.record_id, JSON.parse(JSON.stringify(record))]));
  const repo = {
    writes: [],
    async listActiveSequenceWorkspaces() { return [...store.values()].filter(r => (r.data.editable.sequenceRuns || []).some(run => run.status === "active")).map(r => JSON.parse(JSON.stringify(r))); },
    async getOwned({ recordId }) { return JSON.parse(JSON.stringify(store.get(recordId))); },
    async update({ recordId, expectedVersion, data, provenance }) {
      const current = store.get(recordId);
      if (!current || current.version !== expectedVersion) throw new Error("Record version conflict or record unavailable.");
      const next = { ...current, version: current.version + 1, data: JSON.parse(JSON.stringify(data)) };
      store.set(recordId, next); repo.writes.push(provenance.source); return JSON.parse(JSON.stringify(next));
    },
    peek: id => store.get(id)
  };
  return repo;
}
const AT = "2099-03-04T07:00:00Z"; // 10:00 in Nairobi, Wednesday 4 March
const stepRows = [
  { sequence: "Quote Follow-up", step: 1, afterDays: 0, channel: "sms", subject: "Quote Follow-up", message: "Thanks for asking about a quote." },
  { sequence: "Quote Follow-up", step: 2, afterDays: 2, channel: "sms", subject: "Quote Follow-up", message: "Just checking in about your quote." }
];
const run = (customer, extra = {}) => ({ sequence: "Quote Follow-up", customer, startedOn: "2099-03-04", nextStep: 1, dueOn: "2099-03-04", status: "active", lastSentOn: "", note: "", claimedAt: "", zone: NAIROBI, ...extra });
function record(id, overrides = {}) {
  const editable = normalizeEditable({ businessName: "Mama Grace Salon" }, {
    leads: [lead("Grace Otieno", "+254712345678"), lead("John Kamau", "john@example.com"), lead("Amina Hassan", "+254722000111"), lead("Peter Njoroge", "+254733000222", { messageConsent: "no" })],
    sequences: [{ name: "Quote Follow-up", status: "active", createdOn: "2099-03-01" }], sequenceSteps: stepRows, sequenceRuns: [run("Grace Otieno")], ...overrides
  });
  return { tenant_id: "tenant_1", owner_id: `owner_${id}`, record_id: id, version: 1, data: { info: { businessName: "Mama Grace Salon" }, editable } };
}
function harness(records, { now = AT, send, paused = null } = {}) {
  const repository = fakeRepository(records);
  const sent = []; const told = [];
  const sender = createSequenceSender({ repository, now: () => new Date(now), sendMessageFor: () => async message => { if (send) await send(message); sent.push(message); }, notify: async item => { told.push(item); }, isPaused: paused });
  return { repository, sender, sent, told };
}

test("the worker sends the step that is due, logs it, moves the person to the next step, and ends the run after the last", async () => {
  const h = harness([record("r1")]);
  const first = await h.sender.sendDue({});
  assert.equal(first.messages, 1);
  assert.equal(h.sent.length, 1);
  assert.deepEqual({ channel: h.sent[0].channel, to: h.sent[0].to, customer: h.sent[0].customer }, { channel: "sms", to: "+254712345678", customer: "Grace Otieno" });
  assert.match(h.sent[0].message, /^Thanks for asking about a quote\. To stop getting these messages/);
  let saved = h.repository.peek("r1").data.editable;
  assert.deepEqual({ nextStep: saved.sequenceRuns[0].nextStep, dueOn: saved.sequenceRuns[0].dueOn, status: saved.sequenceRuns[0].status, lastSentOn: saved.sequenceRuns[0].lastSentOn, claimedAt: saved.sequenceRuns[0].claimedAt }, { nextStep: 2, dueOn: "2099-03-06", status: "active", lastSentOn: "2099-03-04", claimedAt: "" });
  assert.deepEqual([saved.campaignLog.at(-1).status, saved.campaignLog.at(-1).campaign], ["sent", "Quote Follow-up (sequence), step 1"]);
  assert.match(saved.contactNotes.at(-1).text, /Quote Follow-up step 1 sent by text/);
  // the same pass again sends nothing (its next day has not come), and a claim cannot repeat
  assert.equal((await h.sender.sendDue({})).messages, 0);
  assert.equal(h.sent.length, 1);
  // two days later the second step goes out and the run is done
  const later = harness([{ ...h.repository.peek("r1") }], { now: "2099-03-06T07:00:00Z" });
  assert.equal((await later.sender.sendDue({})).messages, 1);
  assert.deepEqual({ channel: later.sent[0].channel, to: later.sent[0].to, message: later.sent[0].message.slice(0, 34) }, { channel: "sms", to: "+254712345678", message: "Just checking in about your quote." });
  saved = later.repository.peek("r1").data.editable;
  assert.equal(saved.sequenceRuns[0].status, "done");
  assert.match(later.told.at(-1).title, /Quote Follow-up finished for Grace Otieno/);
});

test("nothing is sent when it must not be: outside sending hours, not yet due, paused, no consent, replied, late, no address, or failed", async () => {
  // before 8 AM and after 8 PM in the person's own day
  assert.equal((await harness([record("r1")], { now: "2099-03-04T03:00:00Z" }).sender.sendDue({})).messages, 0, "6 AM");
  assert.equal((await harness([record("r1")], { now: "2099-03-04T17:30:00Z" }).sender.sendDue({})).messages, 0, "8:30 PM");
  // its day has not come
  assert.equal((await harness([record("r1", { sequenceRuns: [run("Grace Otieno", { dueOn: "2099-03-05" })] })]).sender.sendDue({})).messages, 0);
  // a paused sequence
  assert.equal((await harness([record("r1", { sequences: [{ name: "Quote Follow-up", status: "paused", createdOn: "2099-03-01" }] })]).sender.sendDue({})).messages, 0);
  // a tenant that paused Kyro's autonomous actions
  const paused = harness([record("r1")], { paused: async () => true });
  assert.deepEqual([(await paused.sender.sendDue({})).paused, paused.sent.length], [1, 0]);
  // a person who no longer agrees is stopped, never sent
  const noConsent = harness([record("r1", { sequenceRuns: [run("Peter Njoroge")] })]);
  const outcome = await noConsent.sender.sendDue({});
  assert.deepEqual([outcome.messages, outcome.stopped], [0, 1]);
  assert.equal(noConsent.repository.peek("r1").data.editable.sequenceRuns[0].status, "stopped");
  assert.match(noConsent.repository.peek("r1").data.editable.sequenceRuns[0].note, /no longer agree/);
  // more than three days late: stale, not sent
  const late = harness([record("r1", { sequenceRuns: [run("Grace Otieno", { dueOn: "2099-02-26" })] })]);
  assert.deepEqual([(await late.sender.sendDue({})).messages, late.repository.peek("r1").data.editable.sequenceRuns[0].status], [0, "stopped"]);
  assert.match(late.repository.peek("r1").data.editable.sequenceRuns[0].note, /late, so I did not send it/);
  // two days late is still sent
  assert.equal((await harness([record("r1", { sequenceRuns: [run("Grace Otieno", { dueOn: "2099-03-02" })] })]).sender.sendDue({})).messages, 1);
  // no usable number for the step's channel
  const noNumber = harness([record("r1", { leads: [lead("Grace Otieno", "")], sequenceRuns: [run("Grace Otieno")] })]);
  assert.equal((await noNumber.sender.sendDue({})).messages, 0);
  assert.match(noNumber.repository.peek("r1").data.editable.sequenceRuns[0].note, /no usable phone number/);
  // a replied or stopped run is never looked at
  const replied = harness([record("r1", { sequenceRuns: [run("Grace Otieno", { status: "replied" })] })]);
  assert.deepEqual([(await replied.sender.sendDue({})).checked, replied.sent.length], [0, 0]);
  // a send that fails is logged as failed, the run stops with the reason, the owner is told, and nothing is tried again
  const failing = harness([record("r1")], { send: async () => { throw new Error("The number is not valid."); } });
  const failed = await failing.sender.sendDue({});
  assert.deepEqual([failed.failed, failed.messages], [1, 0]);
  const saved = failing.repository.peek("r1").data.editable;
  assert.deepEqual([saved.campaignLog.at(-1).status, saved.sequenceRuns[0].status], ["failed", "stopped"]);
  assert.match(failing.told.at(-1).body, /did not go out: The number is not valid/);
  assert.equal((await failing.sender.sendDue({})).checked, 0);
});

test("a step is claimed before it is sent so it cannot go out twice, a cut-off claim is never retried, and one pass is capped", async () => {
  const claimOrder = [];
  const records = [record("r1")];
  const repository = fakeRepository(records);
  const original = repository.update;
  repository.update = async args => { claimOrder.push(args.provenance.source); return original(args); };
  const sent = [];
  const sender = createSequenceSender({ repository, now: () => new Date(AT), sendMessageFor: () => async message => { claimOrder.push("send"); sent.push(message); }, notify: async () => {} });
  await sender.sendDue({});
  assert.deepEqual(claimOrder, ["sequence-claim", "send", "sequence-result"]);
  // a claim that was never finished (the worker stopped) is not tried again
  const stuck = harness([record("r2", { sequenceRuns: [run("Grace Otieno", { claimedAt: "2099-03-04T05:00:00Z" })] })]);
  const outcome = await stuck.sender.sendDue({});
  assert.deepEqual([outcome.interrupted, stuck.sent.length, stuck.repository.peek("r2").data.editable.sequenceRuns[0].status], [1, 0, "stopped"]);
  // a claim that is only a minute old is left alone
  const fresh = harness([record("r3", { sequenceRuns: [run("Grace Otieno", { claimedAt: "2099-03-04T06:59:00Z" })] })]);
  assert.deepEqual([(await fresh.sender.sendDue({})).messages, fresh.sent.length], [0, 0]);
  // at most 50 a pass; the rest wait for the next
  const many = Array.from({ length: 60 }, (_, i) => `Person ${i}`);
  const big = harness([record("r4", { leads: many.map((n, i) => lead(n, `+2547000000${String(i).padStart(2, "0")}`)), sequenceRuns: many.map(n => run(n)) })]);
  assert.equal((await big.sender.sendDue({})).messages, 50);
  assert.equal((await big.sender.sendDue({})).messages, 10);
});

test("the worker runs the sequence sweep, the new lists are kept by the workspace, and a workspace saved before them reads back unchanged", async () => {
  const handlers = createHandlers({ runtime: { businessRecords: { listActiveSequenceWorkspaces: async () => [], update: async () => ({}), getOwned: async () => ({}) }, notifications: { enqueue: async () => {} } } });
  assert.equal(typeof handlers["business.sequences-send-due"], "function");
  assert.equal((await handlers["business.sequences-send-due"]({ job: { payload: {} } })).checked, 0);
  assert.deepEqual(await createHandlers({ runtime: {} })["business.sequences-send-due"]({ job: { payload: {} } }), { checked: 0, messages: 0 });
  const root = path.join(__dirname, "..", "..");
  assert.match(fs.readFileSync(path.join(root, "nexus", "workers", "process.js"), "utf8"), /handlers\["business\.sequences-send-due"\]/);
  assert.match(fs.readFileSync(path.join(root, "nexus", "data", "record-repository.js"), "utf8"), /async listActiveSequenceWorkspaces/);
  assert.ok(fs.readFileSync(path.join(root, "nexus", "business", "authoritative-executor.js"), "utf8").includes("...sequenceVoice.SEQUENCE_WRITE_INTENTS]);"));
  const info = { businessName: "Shop" };
  const fresh = normalizeEditable(info, undefined);
  assert.deepEqual([fresh.sequences, fresh.sequenceSteps, fresh.sequenceRuns], [[], [], []]);
  const kept = normalizeEditable(info, { ...fresh, sequences: [{ name: "A", status: "active", createdOn: "2099-01-01" }], sequenceSteps: stepRows, sequenceRuns: [run("Grace Otieno")] });
  assert.equal(kept.sequenceSteps[1].afterDays, 2);
  assert.equal(kept.sequenceRuns[0].zone, NAIROBI);
  assert.throws(() => normalizeEditable(info, { ...fresh, sequenceSteps: [{ ...stepRows[0], afterDays: -1 }] }), /supported/);
  assert.throws(() => normalizeEditable(info, { ...fresh, sequences: Array.from({ length: 21 }, (_, i) => ({ name: `S${i}`, status: "active", createdOn: "" })) }), /supported/);
});

test("an email step goes to the person's email address, and a sequence with both text and email steps is started only for people who have both", async () => {
  const email = harness([record("r1", { sequences: [{ name: "Welcome", status: "active", createdOn: "2099-03-01" }], sequenceSteps: [{ sequence: "Welcome", step: 1, afterDays: 0, channel: "email", subject: "Welcome", message: "Welcome to the salon." }], sequenceRuns: [{ ...run("John Kamau"), sequence: "Welcome" }] })]);
  assert.equal((await email.sender.sendDue({})).messages, 1);
  assert.deepEqual({ channel: email.sent[0].channel, to: email.sent[0].to, subject: email.sent[0].subject }, { channel: "email", to: "john@example.com", subject: "Welcome" });
  const ws = workspace({ leads: [lead("Grace Otieno", "+254712345678"), lead("John Kamau", "john@example.com")] });
  await say(ws, "Create a sequence called Mixed");
  await say(ws, "Add a step to Mixed: right away, send a text saying Thanks for asking.");
  await say(ws, "Add a step to Mixed: after 2 days, send an email saying Just checking in.");
  const refused = await say(ws, "Start the Mixed sequence for Grace Otieno");
  assert.match(refused.response, /has no email address saved that I can use for this sequence, which has both text and email steps/);
  assert.equal(ws.editable().sequenceRuns.length, 0);
});

test("a phone number or an email address said with a customer is kept as their contact, with or without the word number or address", () => {
  const { extractLeadArgs } = voiceDispatch;
  assert.equal(typeof extractLeadArgs, "function");
  for (const [said, contact] of [["Add a customer named Grace Otieno, phone number +254712345678", "+254712345678"], ["Add a customer named John Kamau, email john@example.com", "john@example.com"], ["Add a customer named John Kamau, email address john@example.com", "john@example.com"],
    ["Add a customer named Amina Hassan, her phone is +254722000111", "+254722000111"], ["Add a customer named Peter Njoroge, contact 0712345678", "0712345678"], ["Add a customer named Peter Njoroge, mobile number 0712345678", "0712345678"]]) {
    assert.equal(extractLeadArgs(said, {}).contact, contact, said);
  }
});
