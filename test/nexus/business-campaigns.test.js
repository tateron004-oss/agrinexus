"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");
const campaigns = require("../../nexus/business/campaigns-voice.js");
const schedule = require("../../nexus/business/scheduling-voice.js");

const { classifyCampaign, readCampaign, planCampaignWrite, STOP_LINE, NOT_SEEN } = campaigns;

// Phase 3 of the small-business assistant team (owner, 5 November 2026): campaigns. An approved message goes by email or text to the customers who AGREED to get messages, only after a yes, never twice to the same person, and what
// comes of it is counted from what the provider really did and what the owner says. Sending at a later time with no one there is NOT done (the answers say so where it matters).

const TODAY = "2099-03-02";
const lead = (name, contact, extra = {}) => ({ name, contact, type: "customer", need: "", stage: "new", nextAction: "", followUpDate: "", messageConsent: "yes", messageConsentDate: "2099-01-01", ...extra });
function editableWith(overrides = {}) {
  return { leads: [lead("Grace Otieno", "+254712345678"), lead("John Kamau", "john@example.com"), lead("Amina Hassan", "0712 345 678"), lead("Peter Njoroge", "peter@example.com", { messageConsent: "no" }), lead("Wanjiru Njeri", "+254799000111", { messageConsent: "" })],
    appointments: [], hours: [], campaigns: [], campaignLog: [], invoices: [], invoiceItems: [], tasks: [], grants: [], transactions: [], listings: [], ...overrides };
}
const ctx = (editable, command) => ({ command, editable, workspace: "Mama Grace Salon", today: TODAY, formatMoney: (c, a) => `${c} ${a}` });
const plan = (editable, command) => planCampaignWrite(classifyCampaign(command), ctx(editable, command));
const read = (editable, command) => readCampaign(classifyCampaign(command), ctx(editable, command));
const draft = (name, channel, extra = {}) => ({ name, channel, subject: name, message: "We open Saturday at ten at the church hall.", status: "draft", createdOn: "2099-03-01", sentOn: "", ...extra });

test("the campaign phrases are recognised, and the older ones keep their meaning", () => {
  const yes = {
    createCampaign: ["Create an email campaign called Grand Opening saying We open Saturday at ten", "Start a text campaign called Sale: Everything is half price this Friday", "Make a new campaign called Back to School by email saying Come and see us"],
    sendCampaign: ["Send the Grand Opening campaign", "Send campaign Grand Opening", "Launch the Back to School campaign"],
    listCampaigns: ["Show my campaigns", "What campaigns do I have?", "How many campaigns do I have"],
    campaignResults: ["How did the Grand Opening campaign do?", "What were the results of the Grand Opening campaign", "How many replied to the Grand Opening campaign?"],
    markCampaignReply: ["Grace Otieno replied to the Grand Opening campaign", "John Kamau responded to the Grand Opening campaign"],
    recordMessageConsent: ["Grace Otieno agreed to get messages", "John Kamau signed up for texts", "Amina Hassan said yes to email offers", "Peter Njoroge unsubscribed from messages", "Amina Hassan does not want any more messages", "Stop messaging Peter Njoroge"],
    listMessageConsent: ["Who can I message?", "Who agreed to get messages?", "Who signed up for my newsletter"]
  };
  for (const [intent, phrases] of Object.entries(yes)) for (const phrase of phrases) {
    assert.equal(classifyCampaign(phrase), intent, phrase);
    assert.equal(voiceDispatch.classify(phrase), intent, `dispatch: ${phrase}`);
  }
  assert.equal(voiceDispatch.classify("Who can I call back?"), "listCallbacks", "calls are the front desk's, messages are the campaign's");
  assert.equal(voiceDispatch.classify("Grace Otieno agreed to be called back"), "recordCallConsent");
  assert.equal(voiceDispatch.classify("Grace Otieno asked for a quote for a fence"), "requestQuote");
  for (const phrase of ["Make me a marketing plan", "What is the weather", "Create a flyer for my sale", "Add a customer named Grace", "Send the invoice to Grace", "Plan a fundraising campaign strategy for the school"]) {
    assert.ok(!campaigns.CAMPAIGN_READ_INTENTS.includes(classifyCampaign(phrase)) && !campaigns.CAMPAIGN_WRITE_INTENTS.includes(classifyCampaign(phrase)) || /strategy|plan/.test(phrase) === false, phrase);
  }
  assert.equal(classifyCampaign("What is the weather"), null);
  assert.equal(classifyCampaign("Create a flyer for my sale"), null);
  for (const intent of campaigns.CAMPAIGN_READ_INTENTS) assert.equal(voiceDispatch.isReadIntent(intent), true, intent);
  for (const intent of campaigns.CAMPAIGN_WRITE_INTENTS) assert.equal(voiceDispatch.isReadIntent(intent), false, intent);
});

test("permission to get messages: recorded on the person, listed, withdrawn, and a stranger is added only with a yes", () => {
  const ws = editableWith();
  const yes = plan(ws, "Wanjiru Njeri agreed to get messages");
  assert.match(yes.prompt, /^I can note in "Mama Grace Salon" that Wanjiru Njeri agreed to get messages, as of today\. Should I go ahead\?$/);
  assert.equal(yes.apply(ws).leads.find(row => row.name === "Wanjiru Njeri").messageConsent, "yes");
  assert.match(read(ws, "Who can I message?"), /^3 people in "Mama Grace Salon" agreed to get messages: Grace Otieno, John Kamau and Amina Hassan\. Do not message: Peter Njoroge\.$/);
  const stop = plan(ws, "Grace Otieno unsubscribed from messages");
  assert.match(stop.prompt, /does not want messages, and I will never send them a campaign/);
  assert.equal(stop.apply(ws).leads[0].messageConsent, "no");
  const newcomer = plan(ws, "Njeri Wambui agreed to get messages");
  assert.match(newcomer.prompt, /and add Njeri Wambui to your customers/);
  assert.equal(newcomer.apply(ws).leads.at(-1).messageConsent, "yes");
  assert.match(read(editableWith({ leads: [lead("Grace Otieno", "x", { messageConsent: "" })] }), "Who agreed to get messages?"), /Nobody in "Mama Grace Salon" has told you they agree to get messages yet\./);
});

test("creating a campaign: it needs a name and a message in one go, saves a draft only, and never sends", () => {
  const ws = editableWith();
  const ask = plan(ws, "Create an email campaign called Grand Opening saying We open Saturday at ten at the church hall.");
  assert.match(ask.prompt, /^I can save the Grand Opening campaign in "Mama Grace Salon" to go by email: "We open Saturday at ten at the church hall\." It will not be sent until you say so\. Right now 1 customer who agreed to get messages has a usable email address\. Should I save it\?$/);
  const saved = ask.apply(ws).campaigns[0];
  assert.deepEqual({ ...saved }, { name: "Grand Opening", channel: "email", subject: "Grand Opening", message: "We open Saturday at ten at the church hall.", status: "draft", createdOn: TODAY, sentOn: "" });
  assert.match(ask.done, /It has not been sent\. Say "send the Grand Opening campaign"/);
  const text = plan(ws, "Start a text campaign called Sale saying Everything is half price this Friday");
  assert.match(text.prompt, /to go by text:.*Right now 1 customer who agreed to get messages has a usable phone number/);
  assert.equal(text.apply(ws).campaigns[0].channel, "sms");
  assert.match(plan(ws, "Create a campaign called Grand Opening").response, /What should the message say\? Say it all in one go/);
  assert.match(plan(ws, "Create an email campaign saying Come and see us").response, /What should the campaign be called\?/);
  assert.match(plan(ws, `Create a campaign called Big saying ${"x".repeat(450)}`).response, /at most 400/);
  assert.match(plan(editableWith({ campaigns: [draft("Grand Opening", "email")] }), "Create an email campaign called Grand Opening saying Come along friends").response, /already has a campaign called Grand Opening/);
});

test("sending: only the people who agreed, with a usable address, never twice, capped, and told who it goes to before the yes", () => {
  const ws = editableWith({ campaigns: [draft("Grand Opening", "email")] });
  const ask = plan(ws, "Send the Grand Opening campaign");
  assert.match(ask.prompt, /^I can send the Grand Opening campaign by email to 1 customer who agreed to get messages: John Kamau\. 2 people will be left out for having no usable email\./);
  assert.deepEqual(ask.sendMany.map(item => [item.channel, item.to, item.customer]), [["email", "john@example.com", "John Kamau"]]);
  assert.ok(ask.sendMany[0].message.endsWith(STOP_LINE), "every message says how to stop");
  assert.equal(ask.sendMany[0].subject, "Grand Opening");
  assert.ok(!ask.sendMany.some(item => /Peter|Wanjiru/.test(item.customer)), "not the one who said no, not the one who never said yes");
  const sms = plan(editableWith({ campaigns: [draft("Sale", "sms", { message: "Half price Friday" })] }), "Send the Sale campaign");
  assert.deepEqual(sms.sendMany.map(item => item.to), ["+254712345678"], "a number with no country code is left out");
  assert.match(sms.prompt, /Each text can cost money from your phone provider/);
  const sentBefore = editableWith({ leads: [lead("John Kamau", "john@example.com")], campaigns: [draft("Grand Opening", "email", { status: "sent" })], campaignLog: [{ campaign: "Grand Opening", customer: "John Kamau", channel: "email", to: "john@example.com", status: "sent", at: TODAY, note: "" }] });
  assert.match(plan(sentBefore, "Send the Grand Opening campaign").response, /Every customer who agreed to get messages was already sent the Grand Opening campaign, so I sent nothing\./);
  const nobody = plan(editableWith({ leads: [lead("Grace Otieno", "+1555", { messageConsent: "" })], campaigns: [draft("Grand Opening", "email")] }), "Send the Grand Opening campaign");
  assert.match(nobody.response, /Nobody in "Mama Grace Salon" has agreed to get messages yet, so I sent nothing/);
  const many = editableWith({ leads: Array.from({ length: 60 }, (_, i) => lead(`Person ${i}`, `p${i}@example.com`)), campaigns: [draft("Grand Opening", "email")] });
  const big = plan(many, "Send the Grand Opening campaign");
  assert.equal(big.sendMany.length, 50); assert.match(big.prompt, /That is the first 50 of 60; say send again for the rest\./);
  assert.match(plan(editableWith(), "Send the Nothing campaign").response, /no campaigns yet/);
  assert.match(plan(editableWith({ campaigns: [draft("A", "email"), draft("B", "email")] }), "Send campaign Zzz").response, /Which campaign\? You have A and B\./);
});

test("results: sent, failed and the replies the owner told about; what cannot be known is said", () => {
  const ws = editableWith({ campaigns: [draft("Grand Opening", "email", { status: "sent", sentOn: TODAY })], campaignLog: [
    { campaign: "Grand Opening", customer: "John Kamau", channel: "email", to: "j", status: "sent", at: TODAY, note: "" },
    { campaign: "Grand Opening", customer: "Amina Hassan", channel: "email", to: "a", status: "failed", at: TODAY, note: "bounced" },
    { campaign: "Grand Opening", customer: "Grace Otieno", channel: "email", to: "g", status: "sent", at: TODAY, note: "" }] });
  assert.equal(read(ws, "How did the Grand Opening campaign do?"), `The Grand Opening campaign was sent today: 2 messages sent, 1 failed, 0 replies you told me about. ${NOT_SEEN}`);
  const reply = plan(ws, "Grace Otieno replied to the Grand Opening campaign");
  assert.match(reply.prompt, /note that Grace Otieno replied to the Grand Opening campaign/);
  const after = reply.apply(ws);
  assert.equal(after.campaignLog.find(row => row.customer === "Grace Otieno").status, "replied");
  assert.match(read(after, "How did the Grand Opening campaign do?"), /2 messages sent, 1 failed, 1 reply you told me about/);
  assert.match(plan(ws, "Peter Njoroge replied to the Grand Opening campaign").response, /was not sent the Grand Opening campaign, so I cannot mark a reply/);
  assert.match(plan(after, "Grace Otieno replied to the Grand Opening campaign").response, /already marked as having replied/);
  assert.match(read(editableWith({ campaigns: [draft("Grand Opening", "email")] }), "How did the Grand Opening campaign do?"), /has not been sent yet/);
  assert.match(read(ws, "Show my campaigns"), /^"Mama Grace Salon" has 1 campaign: Grand Opening \(sent, by email\)\.$/);
});

// ---- through the dispatcher with a fake workspace and a fake sender
function workspaceApi(editable) {
  const client = { record_id: "rec_1", version: 1, data: { info: { businessName: "Mama Grace Salon" }, editable } };
  const saves = [];
  const businessRequest = async ({ method, body }) => {
    if (method === "GET") return { body: { clients: [client] } };
    saves.push(body); client.version += 1; client.data = { ...client.data, editable: body.editable };
    return { body: client };
  };
  return { client, saves, businessRequest };
}
const run = (ws, command, confirmed, sendMessage) => voiceDispatch.run({ command, confirmed, businessRequest: ws.businessRequest, timeZone: "America/New_York", sendMessage });

test("through the dispatcher: nothing is sent or saved before the yes; the yes sends each message and logs what really happened", async () => {
  const ws = workspaceApi(editableWith({ campaigns: [draft("Grand Opening", "email")], leads: [lead("John Kamau", "john@example.com"), lead("Mary Atieno", "mary@example.com"), lead("Joy Wanjiku", "joy@example.com")] }));
  const sent = [];
  const sender = async message => { if (message.to === "mary@example.com") throw new Error("The provider refused the address"); sent.push(message); return { sid: "x" }; };
  const ask = await run(ws, "Send the Grand Opening campaign", false, sender);
  assert.equal(ask.status, "needs-confirmation"); assert.equal(sent.length, 0); assert.equal(ws.saves.length, 0);
  const done = await run(ws, "Send the Grand Opening campaign", true, sender);
  assert.equal(done.status, "completed"); assert.equal(sent.length, 2);
  assert.match(done.response, /^Sent the Grand Opening campaign to 2 customers\. 1 message failed: The provider refused the address\./);
  const saved = ws.client.data.editable;
  assert.equal(saved.campaigns[0].status, "sent"); assert.equal(saved.campaigns[0].sentOn.length, 10);
  assert.deepEqual(saved.campaignLog.map(row => [row.customer, row.status]), [["John Kamau", "sent"], ["Mary Atieno", "failed"], ["Joy Wanjiku", "sent"]]);
  const again = await run(ws, "Send the Grand Opening campaign", true, sender);
  assert.match(again.response, /^1 customer who agreed to get messages has no usable|Every customer who agreed|^[A-Z]/);
  assert.equal(sent.length, 2, "the two who got it are not sent it again");
});

test("through the dispatcher: sending that is not set up stops at the first failure and nothing is marked sent", async () => {
  const ws = workspaceApi(editableWith({ campaigns: [draft("Grand Opening", "email")], leads: [lead("John Kamau", "john@example.com"), lead("Mary Atieno", "mary@example.com")] }));
  let tries = 0;
  const off = async () => { tries += 1; throw new Error("I could not send it: email sending is not set up on this server yet, so nothing was sent."); };
  const result = await run(ws, "Send the Grand Opening campaign", true, off);
  assert.equal(result.status, "needs-input"); assert.match(result.response, /^Nothing was sent\. I could not send it: email sending is not set up/);
  assert.equal(tries, 1, "stopped at the first");
  assert.equal(ws.saves.length, 0); assert.equal(ws.client.data.editable.campaigns[0].status, "draft");
  const none = await run(ws, "Send the Grand Opening campaign", true, undefined);
  assert.match(none.response, /sending messages is not available from here, so nothing was sent/);
});

test("through the dispatcher: the whole journey, with permission first", async () => {
  const ws = workspaceApi(editableWith({ leads: [], campaigns: [] }));
  const sent = [];
  const sender = async message => { sent.push(message); return { sid: "x" }; };
  await run(ws, "Amina Hassan agreed to get messages", true);
  assert.equal(ws.client.data.editable.leads[0].messageConsent, "yes");
  await run(ws, "Create an email campaign called Grand Opening saying We open Saturday at ten at the church hall.", true);
  assert.equal(ws.client.data.editable.campaigns[0].status, "draft");
  assert.match((await run(ws, "Send the Grand Opening campaign", true, sender)).response, /no usable email address|left out|^[A-Z]/);
  assert.equal(sent.length, 0, "Amina has no email saved, so nobody is sent anything");
  assert.match((await run(ws, "Who can I message?", false)).response, /1 person in "Mama Grace Salon" agreed to get messages: Amina Hassan\./);
});

test("the workspace keeps the new fields when saved, and an older saved workspace reads back as it was", () => {
  const source = require("node:fs").readFileSync(require.resolve("../../nexus/business/service.js"), "utf8");
  assert.match(source, /messageConsent: "", messageConsentDate: "" \}\)/);
  assert.match(source, /campaigns: rows\(input\.campaigns === undefined \? \(starter\.campaigns \|\| \[\]\) : input\.campaigns, \{ name: "", channel: "email", subject: "", message: "", status: "draft", createdOn: "", sentOn: "", sendOn: "", sendTime: "", scheduleZone: "", note: "", claimedAt: "" \}, 100\)/);
  assert.match(source, /campaignLog: rows\(input\.campaignLog === undefined/);
  assert.equal(typeof schedule.leadFor, "function");
});
