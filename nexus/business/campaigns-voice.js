"use strict";

// Campaigns for a small business, by voice or typed (phase 3 of the small-business assistant team, 5 November 2026): an approved message sent by email or text to the customers who AGREED to get messages, and what came of it.
// Pure functions over the workspace data (client.data.editable) so they can be tested without a database; voice-dispatch.js supplies the client, the day and the write bridge and does the sending.
//
//   classifyCampaign(command) -> an intent name or null
//   readCampaign(intent, ctx) -> the spoken answer
//   planCampaignWrite(intent, ctx) -> { response } to ask or refuse, or { prompt, apply, done }, or for a send { prompt, sendMany, finish(results) -> { apply, done } }
//
// The rules that keep it honest and kind:
//  * only people who said yes to messages are sent to; "who can I message" lists them, and a person who says stop is never sent to again;
//  * every send asks first, says who it goes to and how many, and is capped (50 a time); a person is never sent the same campaign twice;
//  * a message is counted "sent" only when the sending provider says it went out; a failure is counted and said, never hidden;
//  * the message ends with a line telling the person how to stop getting them;
//  * what is tracked is what Kyro can know: sent and failed, and the replies the owner tells it about. It cannot see who opened an email, and it says so;
//  * a campaign is sent when the owner says so, or at the day and time the owner chose (6 November 2026): the background worker (scheduled-campaigns.js) sends it then, with no one there. What keeps that safe:
//      - only an account that may send messages can schedule one (a guest or a demo account cannot), and it asks first like every send;
//      - the list is checked AGAIN when the time comes: a person who said stop in between is left out, a person already sent it is skipped, and at most 50 go out;
//      - it goes out only between 8 AM and 8 PM; a send that is more than 3 hours late (the server was down) or past 9 PM is NOT sent, and the owner is told;
//      - it is claimed before it is sent, so it can never go out twice; a send that was cut off half way is marked "interrupted" and is never retried by itself.

const { describeDay, addDays, extractTime } = require("../personal/dates.js");
const { nameIn, leadFor, parseWhen, clock } = require("./scheduling-voice.js");
const { localClock } = require("../brief/schedule.js");
const { normalizeRecipient } = require("../communications/send-request.js");

const lower = value => String(value || "").toLowerCase();
const IRREGULAR = Object.freeze({ person: "people", reply: "replies" });
const plural = (count, word) => `${count} ${count === 1 ? word : IRREGULAR[word] || `${word}s`}`;
const say = list => (list.length <= 1 ? list.join("") : `${list.slice(0, -1).join(", ")} and ${list[list.length - 1]}`);
const clean = value => String(value || "").replace(/\s+/g, " ").trim().replace(/^["'“”]+|["'“”.,;:!?]+$/g, "").trim();
const CAMPAIGN_LIMIT = 100;
const LOG_LIMIT = 1500;
const SEND_CAP = 50;
const MESSAGE_MIN = 5;
const MESSAGE_MAX = 400;
const STOP_LINE = "To stop getting these messages, just tell us and we will remove you.";
const NOT_SEEN = "I cannot see who opened an email or read a text; I only know what was sent, what failed, and the replies you tell me about.";

// when a scheduled campaign may go out, in minutes after local midnight
const SEND_FROM = 8 * 60; // not before 8 AM
const SEND_LATEST_START = 20 * 60; // a send may be scheduled for 8 PM at the latest
const WINDOW_END = 21 * 60; // and is never sent from 9 PM on, however late it is running
const LATE_GRACE = 180; // minutes: later than this and the message is stale (it said "this Saturday"), so it is not sent
const MIN_AHEAD = 5; // minutes from now: a time any sooner is too close to schedule
const MAX_DAYS_AHEAD = 90;
const SENDING_STALE_MS = 30 * 60 * 1000;

const CAMPAIGN_READ_INTENTS = Object.freeze(["listCampaigns", "campaignResults", "listMessageConsent", "listScheduledCampaigns"]);
const CAMPAIGN_WRITE_INTENTS = Object.freeze(["createCampaign", "sendCampaign", "markCampaignReply", "recordMessageConsent", "scheduleCampaign", "cancelCampaignSchedule"]);

// a day or a clock time said in the request ("tomorrow", "Friday", "at 9", "9 am", "in 2 hours"); "today" or "now" alone is NOT a schedule, it means send it now
const HAS_TIME = /\b(?:tomorrow|tonight|next week|(?:on\s+|this\s+|next\s+)?(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)|(?:at|@)\s*\d|\d{1,2}(?::\d{2})?\s*(?:a\.?m\.?|p\.?m\.?)|noon|in (?:an? hour|\d+ (?:hours?|days?)))\b/i;

const GIVES_OK = /\b(?:agreed|said (?:yes|ok(?:ay)?)|opted in|signed up|subscribed|consented|wants?|is ok(?:ay)? with|gave (?:me )?(?:permission|consent))\b/i;
const MSG = /\b(?:messages?|texts?|text messages?|e-?mails?|offers?|updates?|news|promotions?|newsletters?|messaged|texted|e-?mailed)\b|\bfrom (?:us|me)\b/i;
function classifyCampaign(command = "") {
  const text = String(command || "").replace(/\s+/g, " ").trim();
  if (!text || text.length > 700) return null;
  const asks = /\?|^(?:(?:hey|ok|okay|please)\s+)*(?:(?:kyro|nexus)[,.]?\s+)?(?:what|which|who|how|do|does|did|are|is|any|show|tell|list|give)\b/i.test(text);
  // ---- permission to send messages
  if (asks && /\bwho\b[^.?!]{0,30}\b(?:can|may|could|should)\s+(?:i|we)\s+(?:message|text|e-?mail|send)\b|\bwho\b[^.?!]{0,30}\b(?:agreed|said yes|opted in|signed up|subscribed|wants?)\b[^.?!]{0,30}\b(?:messages?|texts?|e-?mails?|offers?|updates?|news|promotions?|newsletters?)\b/i.test(text)) return "listMessageConsent";
  if (!asks && nameIn(text) && GIVES_OK.test(text) && MSG.test(text) && !/\bcalls?\b|\bcalled\b|\bquotes?\b|\bestimates?\b|\bcampaign\b/i.test(text)) return "recordMessageConsent";
  if (!asks && nameIn(text) && /\b(?:unsubscribed|opted out of (?:messages?|texts?|e-?mails?|offers?|updates?)|(?:does not|doesn['’]t|do not|don['’]t) want (?:any )?(?:more )?(?:messages?|texts?|e-?mails?|offers?|updates?|promotions?|newsletters?)|stop (?:messaging|texting|e-?mailing)|no more (?:messages?|texts?|e-?mails?|offers?))\b/i.test(text)) return "recordMessageConsent";
  if (!asks && /\b[Ss]top (?:messaging|texting|e-?mailing)\s+[A-Z]/.test(text)) return "recordMessageConsent";
  // ---- what is scheduled to go out ("what campaigns are scheduled", "what messages are going out")
  if (asks && /\b(?:scheduled|going out|go out|queued|lined up|coming up)\b/i.test(text) && /\b(?:campaigns?|messages?|e-?mails?|texts?|going out|go out)\b/i.test(text) && !/\bappointments?\b|\bbookings?\b/i.test(text)) return "listScheduledCampaigns";
  // ---- campaigns
  if (/\bcampaigns?\b/i.test(text)) {
    if (!asks && /\b(?:replied|responded|answered|wrote back|got back|texted back|e-?mailed back)\b/i.test(text) && nameIn(text)) return "markCampaignReply";
    // stopping a scheduled send, and scheduling one: both before "send", which would otherwise take "don't send the X campaign" and "send the X campaign Friday at 9" as a send NOW
    if ((!asks || /^(?:(?:hey|ok|okay|please)\s+)*(?:(?:kyro|nexus)[,.]?\s+)?(?:do not|don['’]t)\b/i.test(text)) && /\b(?:cancel|call off|unschedule|hold off|hold back|do not send|don['’]t send|stop)\b/i.test(text) && !/\b(?:create|make|draft|new)\b/i.test(text)) return "cancelCampaignSchedule";
    if (!asks && /\b(?:schedule|send|launch|run|fire off|go ahead with|start sending)\b/i.test(text) && (/\bschedule\b/i.test(text) || HAS_TIME.test(text)) && !/\b(?:create|make|start a|new|draft)\b/i.test(text)) return "scheduleCampaign";
    if (!asks && /\b(?:send|launch|run|fire off|go ahead with|start sending)\b/i.test(text) && !/\b(?:create|make|start a|new|draft|set up)\b/i.test(text.replace(/start sending/i, ""))) return "sendCampaign";
    if (!asks && /\b(?:create|make|start|new|set up|draft|build|begin)\b/i.test(text)) return "createCampaign";
    if (asks && /\b(?:how|results?|response|performing|did|doing|worked|replies|replied|sent|track|status)\b/i.test(text) && /\bcampaign\b/i.test(text)) return "campaignResults";
    if (asks && /\b(?:show|list|what|which|my|any|do i have|how many)\b/i.test(text)) return "listCampaigns";
  }
  return null;
}

// ---- reading what was said ------------------------------------------------------------------------------------------------------------------------------------------------------------
function channelOf(text) { return /\b(?:sms|texts?(?: messages?)?|texting|whatsapp)\b/i.test(text) && !/\be-?mails?\b/i.test(text) ? "sms" : "email"; }
function campaignName(command) {
  const text = String(command || "");
  const named = /\bcampaign\s+(?:called|named|titled)\s+["'“]?(.+?)["'”]?(?=\s+(?:by|via|on|using|with|saying|that|which|message|text|email|sms|to|for)\b|[,:.]|$)/i.exec(text)
    || /\b(?:send|launch|run|start)\s+(?:the\s+|my\s+|our\s+)?["'“]?(.+?)["'”]?\s+campaign\b/i.exec(text)
    || /\b(?:the|my|our)\s+["'“]?(.+?)["'”]?\s+campaign\b/i.exec(text)
    || /\bcampaign\s+["'“]?([A-Z][\w' -]{1,40}?)["'”]?(?=\s+(?:by|via|on|using|with|saying)\b|[,:.?]|$)/.exec(text);
  const name = named ? clean(named[1]).replace(/^(?:the|my|our|a|an)\s+/i, "") : "";
  return /^(?:campaign|new|this|that|it|one)$/i.test(name) ? "" : name.slice(0, 80);
}
function messageOf(command) {
  const m = /\b(?:saying|that says|which says|with the message|with the text|the message is|message\s*:|text\s*:|says)\s*[:,-]?\s*["'“]?([\s\S]+?)["'”]?\s*$/i.exec(String(command || ""))
    || /^[\s\S]*?\bcampaign\b[^:]{0,80}:\s*["'“]?([\s\S]+?)["'”]?\s*$/i.exec(String(command || ""));
  return m ? m[1].replace(/\s+/g, " ").trim() : "";
}
const usable = (channel, contact) => {
  const raw = String(contact || "").trim();
  if (channel === "email") { const email = (/[^\s@<>,;"]+@[^\s@<>,;"]+\.[^\s@<>,;"]+/.exec(raw) || [])[0]; return email && normalizeRecipient("email", email) ? email : ""; }
  return normalizeRecipient("sms", raw) || "";
};
const findCampaign = (editable, name) => {
  const list = editable.campaigns || [];
  const wanted = lower(name);
  if (!wanted) return list.length === 1 ? list[0] : null;
  return list.find(row => lower(row.name) === wanted) || list.filter(row => lower(row.name).includes(wanted) || wanted.includes(lower(row.name))).sort((a, b) => b.name.length - a.name.length)[0] || null;
};
const logFor = (editable, campaign) => (editable.campaignLog || []).filter(row => lower(row.campaign) === lower(campaign));
const counts = (editable, campaign) => {
  const rows = logFor(editable, campaign);
  return { sent: rows.filter(row => row.status === "sent" || row.status === "replied").length, failed: rows.filter(row => row.status === "failed").length, replied: rows.filter(row => row.status === "replied").length };
};

// ---- the schedule ---------------------------------------------------------------------------------------------------------------------------------------------------------------
// A scheduled send is saved as the LOCAL day and clock time the owner said (sendOn "2026-11-07", sendTime "09:00") and the time zone they were in (scheduleZone), so it is read back in their own day with no clock-change drift.
const toMinutes = time => { const m = /^(\d{1,2}):(\d{2})$/.exec(String(time || "")); return m ? Number(m[1]) * 60 + Number(m[2]) : null; };
const dayNumber = day => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(day || "")); return m ? Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3])) / 86400000 : null; };
// "tomorrow at 9 AM" when said now; with absolute = true always the date ("Wednesday 4 March at 9 AM"), for a note that is read on some other day
const whenWords = (campaign, today, absolute = false) => `${describeDay(campaign.sendOn, absolute ? addDays(campaign.sendOn, -10) : today)} at ${clock(campaign.sendTime)}`;

// "waiting" (its time has not come), "due" (send it now), "missed" (it is more than 3 hours late or past 9 PM: stale, so it is NOT sent) or "invalid" (no usable day and time saved). `late` is minutes after the chosen time.
function dueState(campaign, now = new Date()) {
  const target = toMinutes(campaign?.sendTime); const sendDay = dayNumber(campaign?.sendOn);
  if (target === null || sendDay === null) return { state: "invalid", late: 0 };
  const here = localClock(now, campaign.scheduleZone);
  const late = (dayNumber(here.day) - sendDay) * 1440 + here.minutes - target;
  if (late < 0) return { state: "waiting", late, day: here.day };
  if (late > LATE_GRACE || here.minutes >= WINDOW_END) return { state: "missed", late, day: here.day };
  return { state: "due", late, day: here.day };
}

// Who a campaign would go to RIGHT NOW: only people who agreed, not those already sent it, only those with a usable address or number, at most SEND_CAP. Used for a send now, for the question before a schedule, and again by the worker when the time comes.
function sendPlanFor(editable, campaign) {
  const already = new Set(logFor(editable, campaign.name).filter(row => row.status === "sent" || row.status === "replied").map(row => lower(row.customer)));
  const consenting = (editable.leads || []).filter(row => lower(row.messageConsent) === "yes");
  const todo = consenting.filter(row => !already.has(lower(row.name)));
  const reachable = todo.filter(row => usable(campaign.channel, row.contact));
  const skipped = todo.filter(row => !usable(campaign.channel, row.contact));
  const batch = reachable.slice(0, SEND_CAP);
  const body = `${campaign.message} ${STOP_LINE}`.replace(/\s+/g, " ").trim();
  const messages = batch.map(row => ({ channel: campaign.channel, to: usable(campaign.channel, row.contact), message: body, subject: campaign.subject || campaign.name, customer: row.name }));
  return { consenting, todo, reachable, skipped, batch, body, messages };
}

const statusWords = (row, today) => {
  if (row.status === "sent") return "sent";
  if (row.status === "scheduled") return `scheduled for ${whenWords(row, today)}`;
  if (row.status === "sending") return "being sent now";
  if (row.status === "missed") return "missed its time and was not sent";
  if (row.status === "interrupted") return "cut off while sending";
  return "not sent yet";
};

function readCampaign(intent, { command, editable, workspace, today }) {
  const name = `"${workspace}"`;
  if (intent === "listScheduledCampaigns") {
    const list = editable.campaigns || [];
    const scheduled = list.filter(row => row.status === "scheduled");
    const attention = list.filter(row => row.status === "missed" || row.status === "interrupted" || (row.status === "draft" && row.note));
    const lines = [];
    if (scheduled.length) lines.push(`${plural(scheduled.length, "campaign")} in ${name} ${scheduled.length === 1 ? "is" : "are"} scheduled to go out: ${say(scheduled.map(row => `${row.name} on ${whenWords(row, today)}, by ${row.channel === "sms" ? "text" : "email"}`))}.`);
    else lines.push(`Nothing in ${name} is scheduled to go out. Say, for example, "schedule the Grand Opening campaign for Friday at 9 am."`);
    for (const row of attention) lines.push(`${row.name}: ${row.note || (row.status === "interrupted" ? "it was cut off while sending, so I did not try again; check who got it before sending again." : "it missed its time and was not sent.")}`);
    return lines.join(" ");
  }
  if (intent === "listMessageConsent") {
    const yes = (editable.leads || []).filter(row => lower(row.messageConsent) === "yes");
    const no = (editable.leads || []).filter(row => lower(row.messageConsent) === "no");
    if (!yes.length) return `Nobody in ${name} has told you they agree to get messages yet.${no.length ? ` ${plural(no.length, "person")} asked not to.` : ""} Say, for example, "Grace Otieno agreed to get messages" to record it.`;
    return `${plural(yes.length, "person")} in ${name} agreed to get messages: ${say(yes.map(row => row.name))}.${no.length ? ` Do not message: ${say(no.map(row => row.name))}.` : ""}`;
  }
  if (intent === "listCampaigns") {
    const list = editable.campaigns || [];
    if (!list.length) return `${name} has no campaigns yet. Say, for example, "Create an email campaign called Grand Opening saying We open Saturday at ten."`;
    return `${name} has ${plural(list.length, "campaign")}: ${say(list.map(row => `${row.name} (${statusWords(row, today)}, by ${row.channel === "sms" ? "text" : "email"})`))}.`;
  }
  if (intent === "campaignResults") {
    const campaign = findCampaign(editable, campaignName(command));
    if (!campaign) return (editable.campaigns || []).length ? `Which campaign? You have ${say(editable.campaigns.map(row => row.name))}.` : `${name} has no campaigns yet.`;
    const c = counts(editable, campaign.name);
    if (campaign.status === "scheduled") return `The ${campaign.name} campaign is scheduled for ${whenWords(campaign, today)}. It has not been sent yet.${c.sent ? ` ${plural(c.sent, "message")} went out earlier.` : ""}`;
    if (campaign.status === "sending") return `The ${campaign.name} campaign is being sent right now. Ask again in a minute.`;
    if (!c.sent && !c.failed) return `The ${campaign.name} campaign has not been sent yet.${campaign.note ? ` ${campaign.note}` : ""}`;
    return `The ${campaign.name} campaign${campaign.sentOn ? ` was sent ${describeDay(campaign.sentOn, today)}` : ""}: ${plural(c.sent, "message")} sent${c.failed ? `, ${c.failed} failed` : ""}, ${plural(c.replied, "reply")} you told me about.${campaign.note ? ` ${campaign.note}` : ""} ${NOT_SEEN}`;
  }
  return null;
}

function planCampaignWrite(intent, ctx) {
  const { command, editable, workspace, today } = ctx;
  const name = `"${workspace}"`;
  const leads = editable.leads || [];

  if (intent === "recordMessageConsent") {
    const who = nameIn(command) || (/\bstop (?:messaging|texting|e-?mailing)\s+([A-Z][\w'’-]+(?:\s+[A-Z][\w'’-]+)?)/.exec(command) || [])[1] || "";
    if (!who) return { response: "Whose permission is this? For example: Grace Otieno agreed to get messages.", missingInformation: ["name"] };
    const optOut = /\b(?:unsubscribed|opted out|does not want|doesn['’]t want|do not want|don['’]t want|stop (?:messaging|texting|e-?mailing)|no more)\b/i.test(command);
    const lead = leadFor(editable, command, who);
    const person = lead ? lead.name : who;
    const status = optOut ? "no" : "yes";
    return {
      prompt: optOut ? `I can note in ${name} that ${person} does not want messages, and I will never send them a campaign. Should I go ahead?` : `I can note in ${name} that ${person} agreed to get messages, as of today${lead ? "" : `, and add ${person} to your customers`}. Should I go ahead?`,
      apply: current => {
        const stamp = { messageConsent: status, messageConsentDate: today };
        if (lead) return { ...current, leads: current.leads.map(row => (row.name === lead.name && row.contact === lead.contact ? { ...row, ...stamp } : row)) };
        return { ...current, leads: [...(current.leads || []), { name: person, contact: "", type: "customer", need: "", stage: "new", nextAction: "", followUpDate: "", skills: "", availability: "", source: "", consent: "", consentDate: "", callConsent: "", callConsentDate: "", ...stamp }] };
      },
      done: optOut ? `Noted in ${name}: ${person} does not want messages. They will never be sent a campaign.` : `Noted in ${name}: ${person} agreed to get messages. Say "who can I message" to see everyone who agreed.`
    };
  }

  if (intent === "createCampaign") {
    // (found in the 9 November 2026 audit: "whatsapp" was read as a text, so a WhatsApp campaign went out as an SMS. WhatsApp needs an account that is not connected here, so it is refused, never sent as something else)
    if (/\bwhats?app\b/i.test(command) && !/\be-?mails?\b/i.test(command)) return { response: "I can send a campaign by text or by email. WhatsApp campaigns are not set up yet, so I have not saved this one. Say it again with text or email.", info: true };
    const campaignTitle = campaignName(command);
    const channel = channelOf(command);
    const message = messageOf(command);
    if (!campaignTitle) return { response: 'What should the campaign be called? For example: "Create an email campaign called Grand Opening saying We open Saturday at ten at the church hall."', missingInformation: [] };
    if (message.length < MESSAGE_MIN) return { response: `What should the message say? Say it all in one go, for example: "Create an ${channel === "sms" ? "text" : "email"} campaign called ${campaignTitle} saying We open Saturday at ten at the church hall."`, missingInformation: [] };
    if (message.length > MESSAGE_MAX) return { response: `That message is ${message.length} characters, and a campaign message can be at most ${MESSAGE_MAX}. Say a shorter one.`, missingInformation: [] };
    if ((editable.campaigns || []).some(row => lower(row.name) === lower(campaignTitle))) return { response: `${name} already has a campaign called ${campaignTitle}. Pick another name, or say "send the ${campaignTitle} campaign".`, info: true };
    if ((editable.campaigns || []).length >= CAMPAIGN_LIMIT) return { response: `${name} already holds ${CAMPAIGN_LIMIT} campaigns. Remove some first.`, info: true };
    const audience = leads.filter(row => lower(row.messageConsent) === "yes");
    const reachable = audience.filter(row => usable(channel, row.contact));
    return {
      prompt: `I can save the ${campaignTitle} campaign in ${name} to go by ${channel === "sms" ? "text" : "email"}: "${message}" It will not be sent until you say so. Right now ${plural(reachable.length, "customer")} who agreed to get messages ${reachable.length === 1 ? "has" : "have"} a usable ${channel === "sms" ? "phone number" : "email address"}. Should I save it?`,
      apply: current => ({ ...current, campaigns: [...(current.campaigns || []), { name: campaignTitle, channel, subject: campaignTitle, message, status: "draft", createdOn: today, sentOn: "" }] }),
      done: `Saved the ${campaignTitle} campaign in ${name}. It has not been sent. Say "send the ${campaignTitle} campaign" when you are ready.`
    };
  }

  if (intent === "sendCampaign") {
    const campaign = findCampaign(editable, campaignName(command));
    if (!campaign) return { response: (editable.campaigns || []).length ? `Which campaign? You have ${say(editable.campaigns.map(row => row.name))}.` : `${name} has no campaigns yet. Say, for example, "Create an email campaign called Grand Opening saying We open Saturday at ten."`, missingInformation: [] };
    if (campaign.status === "sending") return { response: `The ${campaign.name} campaign is being sent right now, so I did not start a second send.`, info: true };
    const { consenting, todo, reachable, skipped, batch, body, messages } = sendPlanFor(editable, campaign);
    if (!consenting.length) return { response: `Nobody in ${name} has agreed to get messages yet, so I sent nothing. Say, for example, "Grace Otieno agreed to get messages", and then send the campaign.`, info: true };
    if (!reachable.length) return { response: `${todo.length ? `${plural(todo.length, "customer")} who agreed to get messages ${todo.length === 1 ? "has" : "have"} no usable ${campaign.channel === "sms" ? "phone number (with the country code, like +1 or +254)" : "email address"}` : `Every customer who agreed to get messages was already sent the ${campaign.name} campaign`}, so I sent nothing.`, info: true };
    const cost = campaign.channel === "sms" ? " Each text can cost money from your phone provider." : "";
    const replaces = campaign.status === "scheduled" ? ` It is scheduled for ${whenWords(campaign, today)}; sending it now cancels that.` : "";
    return {
      prompt: `I can send the ${campaign.name} campaign by ${campaign.channel === "sms" ? "text" : "email"} to ${plural(batch.length, "customer")} who agreed to get messages: ${say(batch.map(row => row.name).slice(0, 8))}${batch.length > 8 ? ` and ${batch.length - 8} more` : ""}.${reachable.length > SEND_CAP ? ` That is the first ${SEND_CAP} of ${reachable.length}; say send again for the rest.` : ""}${skipped.length ? ` ${plural(skipped.length, "person")} will be left out for having no usable ${campaign.channel === "sms" ? "number" : "email"}.` : ""} The message says: "${body}"${cost}${replaces} Should I send it?`,
      sendMany: messages,
      finish: results => {
        const ok = results.filter(item => item.ok); const bad = results.filter(item => !item.ok);
        const at = today;
        return {
          apply: current => ({ ...current,
            campaigns: (current.campaigns || []).map(row => (lower(row.name) === lower(campaign.name) ? { ...row, status: ok.length ? "sent" : row.status, sentOn: ok.length ? at : row.sentOn, ...(ok.length ? { sendOn: "", sendTime: "", scheduleZone: "", note: "", claimedAt: "" } : {}) } : row)),
            campaignLog: [...(current.campaignLog || []), ...results.map(item => ({ campaign: campaign.name, customer: item.message.customer, channel: campaign.channel, to: item.message.to, status: item.ok ? "sent" : "failed", at, note: item.ok ? "" : String(item.error || "not sent").slice(0, 200) }))].slice(-LOG_LIMIT) }),
          done: ok.length || bad.length
            ? `${ok.length ? `Sent the ${campaign.name} campaign to ${plural(ok.length, "customer")}.` : `Nothing was sent.`}${bad.length ? ` ${plural(bad.length, "message")} failed${bad[0].error ? `: ${String(bad[0].error).replace(/[.\s]+$/, "")}` : ""}.` : ""} Say "how did the ${campaign.name} campaign do" for the numbers.`
            : "Nothing was sent."
        };
      }
    };
  }

  if (intent === "scheduleCampaign") {
    const campaign = findCampaign(editable, campaignName(command));
    if (!campaign) return { response: (editable.campaigns || []).length ? `Which campaign? You have ${say(editable.campaigns.map(row => row.name))}.` : `${name} has no campaigns yet. Say, for example, "Create an email campaign called Grand Opening saying We open Saturday at ten."`, missingInformation: [] };
    if (ctx.canSend !== true) return { response: "This account cannot send messages, so I cannot schedule a campaign. Nothing was scheduled.", info: true };
    if (campaign.status === "sending") return { response: `The ${campaign.name} campaign is being sent right now, so I did not schedule it.`, info: true };
    // the campaign's own name may hold a day word ("Friday Sale"): it is taken out before the day and time are read
    const said = parseWhen(String(command || "").replace(new RegExp(campaign.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "ig"), " "), today);
    const wanted = toMinutes(said.time);
    if (wanted === null) return { response: `What time should the ${campaign.name} campaign go out? It can go out between 8 AM and 8 PM. For example: "schedule the ${campaign.name} campaign for Friday at 9 am".`, missingInformation: [] };
    const here = toMinutes(ctx.nowClock) ?? 0;
    const day = said.day || (wanted > here + MIN_AHEAD ? today : addDays(today, 1));
    if (wanted < SEND_FROM || wanted > SEND_LATEST_START) return { response: `I only send campaigns between 8 AM and 8 PM, so ${clock(said.time)} is too ${wanted < SEND_FROM ? "early" : "late"}. What time between 8 AM and 8 PM?`, missingInformation: [] };
    if (day < today || (day === today && wanted <= here + MIN_AHEAD)) return { response: `${said.day ? `${describeDay(day, today)} at ${clock(said.time)}` : `${clock(said.time)}`} has already passed, or is too close to schedule. What later day or time?`, missingInformation: [] };
    if (dayNumber(day) - dayNumber(today) > MAX_DAYS_AHEAD) return { response: `I can schedule a campaign up to ${MAX_DAYS_AHEAD} days ahead. Pick a nearer day.`, missingInformation: [] };
    const { consenting, reachable, skipped, batch, body } = sendPlanFor(editable, campaign);
    if (!consenting.length) return { response: `Nobody in ${name} has agreed to get messages yet, so there is nothing to schedule. Say, for example, "Grace Otieno agreed to get messages", and then schedule the campaign.`, info: true };
    if (!reachable.length) return { response: `Right now nobody who agreed to get messages has a usable ${campaign.channel === "sms" ? "phone number (with the country code, like +1 or +254)" : "email address"}, or they were all already sent the ${campaign.name} campaign, so there is nothing to schedule.`, info: true };
    const when = `${describeDay(day, today)} at ${clock(said.time)}`;
    const cost = campaign.channel === "sms" ? " Each text can cost money from your phone provider." : "";
    const moved = campaign.status === "scheduled" ? ` It is now scheduled for ${whenWords(campaign, today)}; this moves it.` : "";
    return {
      prompt: `I can schedule the ${campaign.name} campaign to go by ${campaign.channel === "sms" ? "text" : "email"} on ${when}, with nobody here.${moved} Right now it would go to ${plural(batch.length, "customer")} who agreed to get messages: ${say(batch.map(row => row.name).slice(0, 8))}${batch.length > 8 ? ` and ${batch.length - 8} more` : ""}.${skipped.length ? ` ${plural(skipped.length, "person")} would be left out for having no usable ${campaign.channel === "sms" ? "number" : "email"}.` : ""} When the time comes I check the list again: anyone who has said stop is left out, nobody gets it twice, and at most ${SEND_CAP} go out. If I am more than 3 hours late, I will not send it, and I will tell you. The message says: "${body}"${cost} Should I schedule it?`,
      apply: current => ({ ...current, campaigns: (current.campaigns || []).map(row => (lower(row.name) === lower(campaign.name) ? { ...row, status: "scheduled", sendOn: day, sendTime: said.time, scheduleZone: ctx.timeZone || "", note: "", claimedAt: "" } : row)) }),
      done: `Scheduled the ${campaign.name} campaign for ${when}. It goes to whoever has agreed to get messages at that time. Say "cancel the scheduled ${campaign.name} campaign" to stop it, or "what is scheduled" to see everything coming up.`
    };
  }

  if (intent === "cancelCampaignSchedule") {
    const campaign = findCampaign(editable, campaignName(command));
    if (!campaign) return { response: (editable.campaigns || []).length ? `Which campaign? You have ${say(editable.campaigns.map(row => row.name))}.` : `${name} has no campaigns yet.`, missingInformation: [] };
    if (campaign.status === "sending") return { response: `The ${campaign.name} campaign is being sent right now, so it can no longer be stopped.`, info: true };
    if (campaign.status !== "scheduled") return { response: `The ${campaign.name} campaign is not scheduled, so there is nothing to cancel. Nothing was changed.`, info: true };
    return {
      prompt: `I can cancel the scheduled send of the ${campaign.name} campaign (${whenWords(campaign, today)}). It stays saved as a draft and nothing goes out. Should I go ahead?`,
      apply: current => ({ ...current, campaigns: (current.campaigns || []).map(row => (lower(row.name) === lower(campaign.name) && row.status === "scheduled" ? { ...row, status: "draft", sendOn: "", sendTime: "", scheduleZone: "", note: "", claimedAt: "" } : row)) }),
      done: `Cancelled the scheduled send of the ${campaign.name} campaign. It is saved as a draft and nothing was sent.`
    };
  }

  if (intent === "markCampaignReply") {
    const who = nameIn(command);
    const campaign = findCampaign(editable, campaignName(command));
    if (!campaign) return { response: (editable.campaigns || []).length ? `Which campaign did they reply to? You have ${say(editable.campaigns.map(row => row.name))}.` : `${name} has no campaigns yet.`, missingInformation: [] };
    if (!who) return { response: "Who replied? For example: Grace Otieno replied to the Grand Opening campaign.", missingInformation: ["name"] };
    const row = logFor(editable, campaign.name).find(item => lower(item.customer) === lower(leadFor(editable, command, who)?.name || who) && (item.status === "sent" || item.status === "replied"));
    if (!row) return { response: `${who} was not sent the ${campaign.name} campaign, so I cannot mark a reply.`, info: true };
    if (row.status === "replied") return { response: `${row.customer} is already marked as having replied to the ${campaign.name} campaign.`, info: true };
    return {
      prompt: `I can note that ${row.customer} replied to the ${campaign.name} campaign in ${name}. Should I go ahead?`,
      apply: current => ({ ...current, campaignLog: current.campaignLog.map(item => (item === row || (lower(item.campaign) === lower(row.campaign) && lower(item.customer) === lower(row.customer) && item.status === "sent") ? { ...item, status: "replied" } : item)) }),
      done: `Noted: ${row.customer} replied to the ${campaign.name} campaign.`
    };
  }
  return null;
}

// The question to ask BEFORE anyone is asked for a yes (null when nothing is missing); it needs no workspace.
function missingFor(intent, command) {
  if (intent === "createCampaign") {
    if (!campaignName(command)) return 'What should the campaign be called? For example: "Create an email campaign called Grand Opening saying We open Saturday at ten at the church hall."';
    if (messageOf(command).length < MESSAGE_MIN) return `What should the message say? Say it all in one go, for example: "Create an email campaign called ${campaignName(command)} saying We open Saturday at ten at the church hall."`;
  } else if (intent === "scheduleCampaign") {
    if (campaignName(command) && !extractTime(command)) return `What time should it go out? It can go out between 8 AM and 8 PM, for example: "schedule the ${campaignName(command)} campaign for Friday at 9 am".`;
  } else if (intent === "sendCampaign" && !campaignName(command)) return null;
  else if ((intent === "markCampaignReply" || intent === "recordMessageConsent") && !nameIn(command) && !/\b[Ss]top (?:messaging|texting|e-?mailing)\s+[A-Z]/.test(command)) return "Who is this about? Say the customer's name.";
  return null;
}

module.exports = Object.freeze({ classifyCampaign, readCampaign, planCampaignWrite, missingFor, CAMPAIGN_READ_INTENTS, CAMPAIGN_WRITE_INTENTS, SEND_CAP, STOP_LINE, NOT_SEEN, campaignName, messageOf,
  usable, dueState, sendPlanFor, whenWords, LATE_GRACE, WINDOW_END, SENDING_STALE_MS, LOG_LIMIT, SEND_FROM, SEND_LATEST_START });
