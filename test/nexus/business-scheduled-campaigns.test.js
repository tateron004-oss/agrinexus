"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");
const campaigns = require("../../nexus/business/campaigns-voice.js");
const { createScheduledCampaignSender } = require("../../nexus/business/scheduled-campaigns.js");
const { normalizeEditable } = require("../../nexus/business/service.js");
const { createHandlers } = require("../../nexus/workers/handlers.js");

const { classifyCampaign, readCampaign, planCampaignWrite, dueState } = campaigns;

// Sending a campaign by itself at a later time (owner, 6 November 2026). The owner says the day and time and says yes; the background worker sends it then. What must hold: only an account that may send can schedule; the list is checked
// again at send time; a send that is too late is NOT sent; it is claimed before it is sent so it can never go out twice; a send cut off half way is never retried by itself; the owner is told.

const TODAY = "2099-03-02"; // a Monday
const NAIROBI = "Africa/Nairobi"; // UTC+3, no clock changes
const lead = (name, contact, extra = {}) => ({ name, contact, type: "customer", need: "", stage: "new", nextAction: "", followUpDate: "", messageConsent: "yes", messageConsentDate: "2099-01-01", ...extra });
const draft = (name, extra = {}) => ({ name, channel: "email", subject: name, message: "We open Saturday at ten at the church hall.", status: "draft", createdOn: "2099-03-01", sentOn: "", ...extra });
function editableWith(overrides = {}) {
  return { leads: [lead("Grace Otieno", "grace@example.com"), lead("John Kamau", "john@example.com"), lead("Amina Hassan", "amina@example.com"), lead("Peter Njoroge", "peter@example.com", { messageConsent: "no" }), lead("Wanjiru Njeri", "")],
    appointments: [], hours: [], campaigns: [draft("Grand Opening")], campaignLog: [], invoices: [], invoiceItems: [], tasks: [], grants: [], transactions: [], listings: [], ...overrides };
}
const ctx = (editable, command, extra = {}) => ({ command, editable, workspace: "Mama Grace Salon", today: TODAY, timeZone: NAIROBI, nowClock: "10:00", canSend: true, formatMoney: (c, a) => `${c} ${a}`, ...extra });
const plan = (editable, command, extra) => planCampaignWrite(classifyCampaign(command), ctx(editable, command, extra));
const read = (editable, command, extra) => readCampaign(classifyCampaign(command), ctx(editable, command, extra));
const scheduled = (extra = {}) => draft("Grand Opening", { status: "scheduled", sendOn: "2099-03-04", sendTime: "09:00", scheduleZone: NAIROBI, ...extra });

test("the scheduling phrases are recognised, and sending now keeps its meaning", () => {
  const yes = {
    scheduleCampaign: ["Schedule the Grand Opening campaign for Friday at 9 am", "Send the Grand Opening campaign tomorrow at 9am", "Schedule the Grand Opening campaign", "Send the Grand Opening campaign on Wednesday at 10 in the morning", "Send the Grand Opening campaign in 2 hours"],
    cancelCampaignSchedule: ["Cancel the scheduled Grand Opening campaign", "Do not send the Grand Opening campaign", "Don't send the Grand Opening campaign", "Unschedule the Grand Opening campaign", "Stop the Grand Opening campaign"],
    listScheduledCampaigns: ["What campaigns are scheduled?", "What is scheduled to go out?", "Which messages are going out this week?"],
    sendCampaign: ["Send the Grand Opening campaign", "Send the Grand Opening campaign today", "Launch the Back to School campaign", "Send campaign Grand Opening now"],
    createCampaign: ["Create an email campaign called Grand Opening saying We open Saturday at ten at the church hall", "Make a text campaign called Sale saying Half price on Friday at 9 am"],
    listCampaigns: ["Show my campaigns", "What campaigns do I have?"],
    campaignResults: ["How did the Grand Opening campaign do?"]
  };
  for (const [intent, phrases] of Object.entries(yes)) for (const phrase of phrases) {
    assert.equal(classifyCampaign(phrase), intent, phrase);
    assert.equal(voiceDispatch.classify(phrase), intent, `dispatch: ${phrase}`);
  }
  assert.equal(voiceDispatch.classify("What appointments are scheduled tomorrow?") === "listScheduledCampaigns", false);
  assert.ok(campaigns.CAMPAIGN_READ_INTENTS.includes("listScheduledCampaigns") && voiceDispatch.isReadIntent("listScheduledCampaigns"));
  assert.ok(campaigns.CAMPAIGN_WRITE_INTENTS.includes("scheduleCampaign") && !voiceDispatch.isReadIntent("scheduleCampaign"));
  assert.match(campaigns.missingFor("scheduleCampaign", "Schedule the Grand Opening campaign"), /^What time should it go out\?/);
  assert.equal(campaigns.missingFor("scheduleCampaign", "Schedule the Grand Opening campaign for Friday at 9 am"), null);
});

test("scheduling asks first, says who it goes to and every rule, and saves the local day and time", () => {
  const ws = editableWith();
  const made = plan(ws, "Schedule the Grand Opening campaign for Wednesday at 9 am");
  assert.match(made.prompt, /^I can schedule the Grand Opening campaign to go by email on Wednesday 4 March at 9 AM, with nobody here\./);
  assert.match(made.prompt, /to 3 customers who agreed to get messages: Grace Otieno, John Kamau and Amina Hassan\./);
  assert.match(made.prompt, /1 person would be left out for having no usable email\./);
  assert.match(made.prompt, /anyone who has said stop is left out, nobody gets it twice, and at most 50 go out\. If I am more than 3 hours late, I will not send it, and I will tell you\./);
  assert.match(made.prompt, /Should I schedule it\?$/);
  const saved = made.apply(ws).campaigns[0];
  assert.deepEqual({ status: saved.status, sendOn: saved.sendOn, sendTime: saved.sendTime, scheduleZone: saved.scheduleZone }, { status: "scheduled", sendOn: "2099-03-04", sendTime: "09:00", scheduleZone: NAIROBI });
  assert.match(made.done, /^Scheduled the Grand Opening campaign for Wednesday 4 March at 9 AM\./);
  // "tomorrow at 9" and a bare time (it is 10:00, so 9 is tomorrow and 3 pm is today)
  assert.equal(plan(ws, "Send the Grand Opening campaign tomorrow at 9am").apply(ws).campaigns[0].sendOn, "2099-03-03");
  assert.equal(plan(ws, "Schedule the Grand Opening campaign at 9 am").apply(ws).campaigns[0].sendOn, "2099-03-03");
  assert.equal(plan(ws, "Schedule the Grand Opening campaign at 3 pm").apply(ws).campaigns[0].sendOn, TODAY);
  // a campaign whose own name holds a day word keeps it out of the day that is read
  const friday = editableWith({ campaigns: [draft("Friday Sale")] });
  assert.equal(plan(friday, "Schedule the Friday Sale campaign for Wednesday at 9 am").apply(friday).campaigns[0].sendOn, "2099-03-04");
  // moving a scheduled one says so
  const moved = plan(editableWith({ campaigns: [scheduled()] }), "Schedule the Grand Opening campaign for Thursday at 2 pm");
  assert.match(moved.prompt, /It is now scheduled for Wednesday 4 March at 9 AM; this moves it\./);
});

test("scheduling is refused, in words, when it must be", () => {
  const ws = editableWith();
  const guest = plan(ws, "Schedule the Grand Opening campaign for Wednesday at 9 am", { canSend: false });
  assert.equal(guest.info, true); assert.match(guest.response, /cannot send messages, so I cannot schedule a campaign\. Nothing was scheduled\./);
  assert.equal(plan(ws, "Schedule the Grand Opening campaign for Wednesday at 9 am", { canSend: undefined }).info, true, "an account that is not known to be allowed is refused");
  assert.match(plan(ws, "Schedule the Grand Opening campaign for Wednesday").response, /^What time should the Grand Opening campaign go out\? It can go out between 8 AM and 8 PM\./);
  assert.match(plan(ws, "Schedule the Grand Opening campaign for Wednesday at 6 am").response, /only send campaigns between 8 AM and 8 PM, so 6 AM is too early/);
  assert.match(plan(ws, "Schedule the Grand Opening campaign for Wednesday at 9 pm").response, /so 9 PM is too late/);
  assert.match(plan(ws, "Schedule the Grand Opening campaign for today at 10:02 am").response, /too close to schedule/, "10:02 today when it is 10:00");
  assert.equal(plan(ws, "Schedule the Grand Opening campaign at 10:02 am").apply(ws).campaigns[0].sendOn, "2099-03-03", "a bare time that has passed or is too close means tomorrow");
  assert.match(plan(ws, "Schedule the Grand Opening campaign for today at 9 am").response, /already passed/, "9 today when it is 10:00");
  assert.match(plan(ws, "Schedule the Grand Opening campaign for Monday at 9 am").prompt, /on Monday 9 March at 9 AM/, "a weekday name means the coming one");
  assert.match(plan(ws, "Schedule the Grand Opening campaign for Wednesday at 9 am", { today: TODAY }).prompt, /Should I schedule it\?/);
  const nobody = editableWith({ leads: [lead("Grace Otieno", "grace@example.com", { messageConsent: "" })] });
  assert.match(plan(nobody, "Schedule the Grand Opening campaign for Wednesday at 9 am").response, /Nobody in "Mama Grace Salon" has agreed to get messages yet, so there is nothing to schedule/);
  const noEmail = editableWith({ leads: [lead("Wanjiru Njeri", "")] });
  assert.match(plan(noEmail, "Schedule the Grand Opening campaign for Wednesday at 9 am").response, /nobody who agreed to get messages has a usable email address/);
  assert.match(plan(editableWith({ campaigns: [scheduled({ status: "sending" })] }), "Schedule the Grand Opening campaign for Thursday at 9 am").response, /being sent right now/);
  assert.match(plan(ws, "Schedule the Nonexistent campaign for Wednesday at 9 am").response, /^Which campaign\? You have Grand Opening\.$/);
  assert.match(plan(editableWith({ campaigns: [] }), "Schedule the Grand Opening campaign for Wednesday at 9 am").response, /has no campaigns yet/);
});

test("cancelling a scheduled send puts it back as a draft, and says so when there is nothing to cancel", () => {
  const ws = editableWith({ campaigns: [scheduled()] });
  const cancel = plan(ws, "Cancel the scheduled Grand Opening campaign");
  assert.match(cancel.prompt, /^I can cancel the scheduled send of the Grand Opening campaign \(Wednesday 4 March at 9 AM\)\. It stays saved as a draft and nothing goes out\. Should I go ahead\?$/);
  const after = cancel.apply(ws).campaigns[0];
  assert.deepEqual({ status: after.status, sendOn: after.sendOn, sendTime: after.sendTime }, { status: "draft", sendOn: "", sendTime: "" });
  assert.match(plan(editableWith(), "Do not send the Grand Opening campaign").response, /is not scheduled, so there is nothing to cancel\. Nothing was changed\./);
  assert.match(plan(editableWith({ campaigns: [scheduled({ status: "sending" })] }), "Cancel the scheduled Grand Opening campaign").response, /being sent right now, so it can no longer be stopped/);
  // cancelling never turns a campaign that was sent in the meantime back into a draft
  assert.equal(cancel.apply(editableWith({ campaigns: [scheduled({ status: "sent" })] })).campaigns[0].status, "sent");
});

test("what is scheduled, how a scheduled campaign is listed, and what a missed one says", () => {
  const ws = editableWith({ campaigns: [scheduled(), draft("Back to School")] });
  assert.match(read(ws, "What campaigns are scheduled?"), /^1 campaign in "Mama Grace Salon" is scheduled to go out: Grand Opening on Wednesday 4 March at 9 AM, by email\.$/);
  assert.match(read(ws, "Show my campaigns"), /Grand Opening \(scheduled for Wednesday 4 March at 9 AM, by email\) and Back to School \(not sent yet, by email\)/);
  assert.match(read(ws, "How did the Grand Opening campaign do?"), /^The Grand Opening campaign is scheduled for Wednesday 4 March at 9 AM\. It has not been sent yet\.$/);
  assert.match(read(editableWith(), "What campaigns are scheduled?"), /^Nothing in "Mama Grace Salon" is scheduled to go out\. Say, for example/);
  const missed = editableWith({ campaigns: [draft("Grand Opening", { status: "missed", note: "It was scheduled for Wednesday 4 March at 9 AM but I could not send it on time (it was 5 hours late), so I did not send it." })] });
  assert.match(read(missed, "What campaigns are scheduled?"), /Nothing in "Mama Grace Salon" is scheduled to go out\..*Grand Opening: It was scheduled for Wednesday 4 March at 9 AM but I could not send it on time/);
  assert.match(read(missed, "Show my campaigns"), /missed its time and was not sent/);
  assert.match(read(editableWith({ campaigns: [draft("Grand Opening", { status: "sending" })] }), "How did the Grand Opening campaign do?"), /being sent right now/);
});

test("when a scheduled send is due, in the owner's own day (two time zones, a late send, an evening send)", () => {
  const at = iso => new Date(iso);
  const nairobi = { sendOn: "2099-03-04", sendTime: "09:00", scheduleZone: NAIROBI }; // 09:00 Nairobi = 06:00 UTC
  assert.equal(dueState(nairobi, at("2099-03-04T05:59:00Z")).state, "waiting");
  assert.equal(dueState(nairobi, at("2099-03-04T06:00:00Z")).state, "due");
  assert.equal(dueState(nairobi, at("2099-03-04T08:59:00Z")).state, "due", "2 hours 59 minutes late is still sent");
  assert.equal(dueState(nairobi, at("2099-03-04T09:01:00Z")).state, "missed", "3 hours 1 minute late is stale");
  assert.equal(dueState(nairobi, at("2099-03-05T06:00:00Z")).state, "missed", "a day late");
  assert.equal(dueState(nairobi, at("2099-03-03T06:00:00Z")).state, "waiting", "the day before");
  // New York in March (EST until the 14th, UTC-5): 09:00 is 14:00 UTC
  const ny = { sendOn: "2099-03-04", sendTime: "09:00", scheduleZone: "America/New_York" };
  assert.equal(dueState(ny, at("2099-03-04T13:59:00Z")).state, "waiting");
  assert.equal(dueState(ny, at("2099-03-04T14:00:00Z")).state, "due");
  // an 8 PM send running 90 minutes late is past 9 PM: never sent at night
  const evening = { sendOn: "2099-03-04", sendTime: "20:00", scheduleZone: NAIROBI };
  assert.equal(dueState(evening, at("2099-03-04T17:30:00Z")).state, "due", "20:30 Nairobi");
  assert.equal(dueState(evening, at("2099-03-04T18:30:00Z")).state, "missed", "21:30 Nairobi is past 9 PM");
  assert.equal(dueState({ sendOn: "", sendTime: "", scheduleZone: NAIROBI }, at("2099-03-04T06:00:00Z")).state, "invalid");
});

test("spoken scheduling through the dispatcher: refused for a restricted account, asked first, then saved with the owner's time zone", async () => {
  const saves = [];
  const record = { record_id: "rec_1", version: 3, data: { info: { businessName: "Mama Grace Salon" }, editable: editableWith() } };
  const businessRequest = async ({ method, body }) => {
    if (method === "GET") return { status: 200, body: { clients: [record] } };
    saves.push(body); return { status: 200, body: { ...record, version: 4 } };
  };
  const command = "Schedule the Grand Opening campaign for Friday at 9 am";
  const refused = await voiceDispatch.run({ command, confirmed: false, businessRequest, timeZone: NAIROBI, canSend: false });
  assert.match(refused.response, /cannot send messages/);
  const notAsked = await voiceDispatch.run({ command, confirmed: false, businessRequest, timeZone: NAIROBI });
  assert.match(notAsked.response, /cannot send messages/, "no canSend given: refused");
  const asked = await voiceDispatch.run({ command, confirmed: false, businessRequest, timeZone: NAIROBI, canSend: true });
  assert.equal(asked.status, "needs-confirmation"); assert.match(asked.response, /Should I schedule it\?$/);
  assert.equal(saves.length, 0, "nothing is saved before the yes");
  const done = await voiceDispatch.run({ command, confirmed: true, businessRequest, timeZone: NAIROBI, canSend: true });
  assert.equal(done.status, "completed"); assert.match(done.response, /^Scheduled the Grand Opening campaign for /);
  const row = saves[0].editable.campaigns[0];
  assert.equal(row.status, "scheduled"); assert.equal(row.scheduleZone, NAIROBI); assert.equal(row.sendTime, "09:00"); assert.match(row.sendOn, /^\d{4}-\d{2}-\d{2}$/);
});

// ---- the worker -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function fakeRepository(records, hooks = {}) {
  const store = new Map(records.map(record => [record.record_id, JSON.parse(JSON.stringify(record))]));
  const repo = {
    writes: [],
    async listScheduledCampaignWorkspaces() { return [...store.values()].filter(r => (r.data.editable.campaigns || []).some(c => c.status === "scheduled" || c.status === "sending")).map(r => JSON.parse(JSON.stringify(r))); },
    async getOwned({ recordId }) { return JSON.parse(JSON.stringify(store.get(recordId))); },
    async update({ recordId, expectedVersion, data, provenance }) {
      hooks.beforeUpdate?.({ recordId, provenance, store });
      const current = store.get(recordId);
      if (!current || current.version !== expectedVersion) throw new Error("Record version conflict or record unavailable.");
      const next = { ...current, version: current.version + 1, data: JSON.parse(JSON.stringify(data)) };
      store.set(recordId, next); repo.writes.push(provenance.source); return JSON.parse(JSON.stringify(next));
    },
    peek: id => store.get(id)
  };
  return repo;
}
const workspace = (id, editable) => ({ tenant_id: "tenant_1", owner_id: `owner_${id}`, record_id: id, version: 1, data: { info: { businessName: "Mama Grace Salon" }, editable: normalizeEditable({ businessName: "Mama Grace Salon" }, editable) } });
const AT = "2099-03-04T06:00:30Z"; // 09:00:30 in Nairobi
function harness(records, { now = AT, send, paused = null, hooks } = {}) {
  const repository = fakeRepository(records, hooks);
  const sent = []; const told = []; const errors = [];
  const sender = createScheduledCampaignSender({ repository, now: () => new Date(now),
    sendMessageFor: context => async message => { if (send) return send(message, context, sent); sent.push({ ...message, owner: context.userId }); return { ok: true }; },
    notify: async item => { told.push(item); }, isPaused: paused, logger: { error: (name, data) => errors.push({ name, data }), info() {} } });
  return { repository, sender, sent, told, errors };
}
const campaignOf = (repository, id = "rec_1") => repository.peek(id).data.editable.campaigns[0];
const logOf = (repository, id = "rec_1") => repository.peek(id).data.editable.campaignLog;

test("a due campaign goes out once, only to people who still agree, with the stop line, and is recorded and the owner told", async () => {
  const { repository, sender, sent, told } = harness([workspace("rec_1", editableWith({ campaigns: [scheduled()],
    // Grace said stop AFTER it was scheduled; John was already sent it; Wanjiru has no email; Peter never agreed
    leads: [lead("Grace Otieno", "grace@example.com", { messageConsent: "no" }), lead("John Kamau", "john@example.com"), lead("Amina Hassan", "amina@example.com"), lead("Peter Njoroge", "peter@example.com", { messageConsent: "no" }), lead("Wanjiru Njeri", ""), lead("Esther Wafula", "esther@example.com")],
    campaignLog: [{ campaign: "Grand Opening", customer: "John Kamau", channel: "email", to: "john@example.com", status: "sent", at: "2099-03-01", note: "" }] }))]);
  const stats = await sender.sendDue();
  assert.deepEqual(sent.map(item => item.customer).sort(), ["Amina Hassan", "Esther Wafula"]);
  assert.ok(sent.every(item => item.message.endsWith(campaigns.STOP_LINE) && item.channel === "email" && item.owner === "owner_rec_1"));
  const row = campaignOf(repository);
  assert.deepEqual({ status: row.status, sentOn: row.sentOn, sendOn: row.sendOn, sendTime: row.sendTime, claimedAt: row.claimedAt, note: row.note }, { status: "sent", sentOn: "2099-03-04", sendOn: "", sendTime: "", claimedAt: "", note: "" });
  assert.deepEqual(logOf(repository).filter(item => item.at === "2099-03-04").map(item => `${item.customer}:${item.status}`).sort(), ["Amina Hassan:sent", "Esther Wafula:sent"]);
  assert.equal(stats.sent, 1); assert.equal(stats.messages, 2);
  assert.equal(told.length, 1); assert.match(told[0].title, /Grand Opening was sent/); assert.match(told[0].body, /went to 2 customers/); assert.equal(told[0].userId, "owner_rec_1");
  assert.deepEqual(repository.writes.slice(0, 2), ["scheduled-campaign-claim", "scheduled-campaign-result"]);
  // it never goes out a second time
  await sender.sendDue(); await sender.sendDue();
  assert.equal(sent.length, 2);
});

test("nothing goes out before its time, or for a campaign that is only a draft", async () => {
  const early = harness([workspace("rec_1", editableWith({ campaigns: [scheduled()] }))], { now: "2099-03-04T05:59:00Z" });
  assert.deepEqual(await early.sender.sendDue(), { checked: 1, sent: 0, messages: 0, failed: 0, missed: 0, interrupted: 0, conflicts: 0, paused: 0, errors: 0 });
  assert.equal(early.sent.length, 0); assert.equal(early.repository.writes.length, 0, "not even a save");
  const draftOnly = harness([workspace("rec_1", editableWith())]);
  assert.equal((await draftOnly.sender.sendDue()).checked, 0);
});

test("a send that is too late is NOT sent: it is marked missed, the owner is told, and it is never retried", async () => {
  const late = harness([workspace("rec_1", editableWith({ campaigns: [scheduled()] }))], { now: "2099-03-04T11:00:00Z" }); // 14:00 Nairobi, 5 hours late
  const stats = await late.sender.sendDue();
  assert.equal(late.sent.length, 0); assert.equal(stats.missed, 1);
  const row = campaignOf(late.repository);
  assert.equal(row.status, "missed"); assert.equal(row.sendOn, "");
  assert.match(row.note, /^It was scheduled for Wednesday 4 March at 9 AM but I could not send it on time \(it was 5 hours late\), so I did not send it\. Say "schedule the Grand Opening campaign" to pick a new time\.$/);
  assert.equal(late.told.length, 1); assert.match(late.told[0].title, /missed its time/);
  await late.sender.sendDue(); assert.equal(late.sent.length, 0); assert.equal(late.told.length, 1, "said once");
  const night = harness([workspace("rec_1", editableWith({ campaigns: [scheduled({ sendTime: "20:00" })] }))], { now: "2099-03-04T18:30:00Z" }); // 21:30 Nairobi
  await night.sender.sendDue(); assert.equal(night.sent.length, 0); assert.equal(campaignOf(night.repository).status, "missed"); assert.match(campaignOf(night.repository).note, /too late in the evening/);
});

test("two workers cannot both send it: the one that loses the claim sends nothing", async () => {
  // the owner (or another worker) saved the workspace between the list and this worker's claim, so the version it holds is out of date
  const { sender, sent, repository } = harness([workspace("rec_1", editableWith({ campaigns: [scheduled()] }))], { hooks: { beforeUpdate: ({ recordId, store, provenance }) => { if (provenance.source === "scheduled-campaign-claim") store.get(recordId).version += 1; } } });
  const stats = await sender.sendDue();
  assert.equal(sent.length, 0); assert.equal(stats.conflicts, 1);
  assert.equal(campaignOf(repository).status, "scheduled", "still waiting, to be tried again next minute");
});

test("cancelled between the list and the claim: nothing is sent", async () => {
  const { sender, sent, repository } = harness([workspace("rec_1", editableWith({ campaigns: [scheduled()] }))], { hooks: { beforeUpdate: ({ recordId, store, provenance }) => {
    if (provenance.source !== "scheduled-campaign-claim") return; const rec = store.get(recordId); rec.version += 1; rec.data.editable.campaigns[0].status = "draft";
  } } });
  await sender.sendDue(); assert.equal(sent.length, 0); assert.equal(campaignOf(repository).status, "draft");
});

test("messaging that is not set up sends nothing, stops at the first message, saves a draft with the reason and tells the owner", async () => {
  const { sender, repository, told } = harness([workspace("rec_1", editableWith({ campaigns: [scheduled()] }))], { send: async () => { throw new Error("I could not send it: email sending is not set up on this server yet, so nothing was sent."); } });
  const stats = await sender.sendDue();
  assert.equal(stats.sent, 0); assert.equal(stats.failed, 1, "one attempt, not one per customer");
  const row = campaignOf(repository);
  assert.equal(row.status, "draft"); assert.match(row.note, /^The scheduled send for Wednesday 4 March at 9 AM did not go out: I could not send it: email sending is not set up on this server yet, so nothing was sent\. Nothing was sent\. It is saved as a draft\.$/);
  assert.equal(logOf(repository).length, 1); assert.equal(logOf(repository)[0].status, "failed");
  assert.match(told[0].title, /was not sent/);
  assert.match(read(repository.peek("rec_1").data.editable, "How did the Grand Opening campaign do?"), /0 messages sent, 1 failed.*The scheduled send for Wednesday 4 March at 9 AM did not go out/);
});

test("some failing and some going out is counted honestly", async () => {
  const { sender, repository, told } = harness([workspace("rec_1", editableWith({ campaigns: [scheduled()] }))], { send: async (message, context, sent) => { if (message.customer === "John Kamau") throw new Error("The address was refused."); sent.push(message); return { ok: true }; } });
  const stats = await sender.sendDue(); assert.equal(stats.messages, 2); assert.equal(stats.failed, 1);
  assert.equal(campaignOf(repository).status, "sent"); assert.match(campaignOf(repository).note, /1 message failed: The address was refused\./);
  assert.match(told[0].body, /went to 2 customers, and 1 failed/);
});

test("at most 50 go out, and the owner is told how to send the rest", async () => {
  const many = Array.from({ length: 60 }, (_, index) => lead(`Customer ${index + 1}`, `c${index + 1}@example.com`));
  const { sender, sent, repository } = harness([workspace("rec_1", editableWith({ campaigns: [scheduled()], leads: many }))]);
  await sender.sendDue(); assert.equal(sent.length, 50);
  assert.match(campaignOf(repository).note, /^Only the first 50 of 60 were sent; say "send the Grand Opening campaign" for the rest\.$/);
});

test("a send cut off half way is marked interrupted and never retried by itself; a recent one is left alone", async () => {
  const cut = harness([workspace("rec_1", editableWith({ campaigns: [scheduled({ status: "sending", claimedAt: "2099-03-04T05:00:00.000Z" })] }))]); // an hour before
  const stats = await cut.sender.sendDue();
  assert.equal(cut.sent.length, 0); assert.equal(stats.interrupted, 1); assert.equal(campaignOf(cut.repository).status, "interrupted");
  assert.match(campaignOf(cut.repository).note, /cut off part way, so I did not try again\. Some people may already have it/);
  assert.match(cut.told[0].title, /cut off while sending/);
  await cut.sender.sendDue(); assert.equal(cut.sent.length, 0);
  assert.match(read(cut.repository.peek("rec_1").data.editable, "What campaigns are scheduled?"), /cut off part way/);
  const fresh = harness([workspace("rec_1", editableWith({ campaigns: [scheduled({ status: "sending", claimedAt: "2099-03-04T06:00:00.000Z" })] }))]);
  const quiet = await fresh.sender.sendDue(); assert.equal(quiet.interrupted, 0); assert.equal(campaignOf(fresh.repository).status, "sending");
});

test("when the owner saves something else while it is sending, the result is still saved on top of it", async () => {
  let bumped = false;
  const { sender, repository, sent } = harness([workspace("rec_1", editableWith({ campaigns: [scheduled()] }))], { hooks: { beforeUpdate: ({ recordId, store, provenance }) => {
    if (provenance.source !== "scheduled-campaign-result" || bumped) return; bumped = true; const rec = store.get(recordId); rec.version += 1; rec.data.editable.tasks = [{ title: "Order flyers", status: "todo", dueDate: "", assignee: "", priority: "medium" }];
  } } });
  await sender.sendDue();
  assert.equal(sent.length, 3); assert.equal(campaignOf(repository).status, "sent");
  assert.equal(repository.peek("rec_1").data.editable.tasks[0].title, "Order flyers", "what the owner saved in the meantime is kept");
});

test("a tenant that paused Kyro's actions is skipped, and a second campaign in the same workspace is sent too", async () => {
  const paused = harness([workspace("rec_1", editableWith({ campaigns: [scheduled()] }))], { paused: async () => true });
  const stats = await paused.sender.sendDue(); assert.equal(stats.paused, 1); assert.equal(paused.sent.length, 0); assert.equal(campaignOf(paused.repository).status, "scheduled");
  const two = harness([workspace("rec_1", editableWith({ campaigns: [scheduled(), scheduled({ name: "Back to School", message: "School supplies are half price this week." })] }))]);
  await two.sender.sendDue(); assert.equal(two.sent.length, 6);
  assert.deepEqual(two.repository.peek("rec_1").data.editable.campaigns.map(row => row.status), ["sent", "sent"]);
});

test("a campaign by text goes to phone numbers, and one broken workspace does not stop the others", async () => {
  const records = [workspace("rec_1", editableWith({ campaigns: [scheduled({ channel: "sms" })], leads: [lead("Grace Otieno", "+254712345678"), lead("John Kamau", "john@example.com")] })), workspace("rec_2", editableWith({ campaigns: [scheduled()] }))];
  const { sender, sent, errors } = harness(records, { send: async (message, context, list) => { if (context.userId === "owner_rec_1" && message.channel === "sms" && message.customer === "Grace Otieno") { list.push(message); return { ok: true }; } if (context.userId === "owner_rec_2") { list.push(message); return { ok: true }; } throw new Error("unexpected"); } });
  const stats = await sender.sendDue();
  assert.deepEqual(sent.filter(item => item.channel === "sms").map(item => item.to), ["+254712345678"]);
  assert.equal(sent.filter(item => item.channel === "email").length, 3);
  assert.equal(stats.checked, 2); assert.equal(errors.length, 0);
});

test("the worker is wired: a handler, a once-a-minute step, the query, the render settings and the saved shape", () => {
  const handlers = createHandlers({ runtime: {} });
  assert.equal(typeof handlers["business.campaigns-send-due"], "function");
  return handlers["business.campaigns-send-due"]({ job: { payload: {} } }).then(result => {
    assert.deepEqual(result, { checked: 0, sent: 0 }, "no repository: nothing is done and nothing breaks");
    const loop = fs.readFileSync("nexus/workers/process.js", "utf8");
    assert.match(loop, /NEXUS_CAMPAIGN_POLL_MS \|\| 60000/); assert.match(loop, /handlers\["business\.campaigns-send-due"\]/);
    const repo = fs.readFileSync("nexus/data/record-repository.js", "utf8");
    assert.match(repo, /listScheduledCampaignWorkspaces/); assert.match(repo, /c->>'status' in \('scheduled','sending'\)/);
    const worker = fs.readFileSync("render.yaml", "utf8").split("type: worker")[1];
    for (const key of ["SENDGRID_API_KEY", "TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "NEXUS_EMAIL_PROVIDER", "PUBLIC_BASE_URL"]) assert.ok(worker.includes(`key: ${key}`), `the worker has ${key}`);
    // an older saved campaign reads back with the new fields empty; the new fields are kept when saved
    const older = normalizeEditable({ businessName: "Mama Grace Salon" }, { campaigns: [{ name: "Old", channel: "email", subject: "Old", message: "Hello there", status: "sent", createdOn: "2099-01-01", sentOn: "2099-01-02" }] });
    assert.deepEqual({ sendOn: older.campaigns[0].sendOn, sendTime: older.campaigns[0].sendTime, note: older.campaigns[0].note, claimedAt: older.campaigns[0].claimedAt }, { sendOn: "", sendTime: "", note: "", claimedAt: "" });
    const again = normalizeEditable({ businessName: "Mama Grace Salon" }, { campaigns: [scheduled()] });
    assert.equal(again.campaigns[0].sendTime, "09:00"); assert.equal(again.campaigns[0].scheduleZone, NAIROBI);
  });
});
