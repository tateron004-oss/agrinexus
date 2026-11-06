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
//  * a campaign is sent when the owner says so. Sending by itself at a later time, with no one there, is NOT done.

const { describeDay } = require("../personal/dates.js");
const { nameIn, leadFor } = require("./scheduling-voice.js");
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

const CAMPAIGN_READ_INTENTS = Object.freeze(["listCampaigns", "campaignResults", "listMessageConsent"]);
const CAMPAIGN_WRITE_INTENTS = Object.freeze(["createCampaign", "sendCampaign", "markCampaignReply", "recordMessageConsent"]);

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
  // ---- campaigns
  if (/\bcampaigns?\b/i.test(text)) {
    if (!asks && /\b(?:replied|responded|answered|wrote back|got back|texted back|e-?mailed back)\b/i.test(text) && nameIn(text)) return "markCampaignReply";
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

function readCampaign(intent, { command, editable, workspace, today }) {
  const name = `"${workspace}"`;
  if (intent === "listMessageConsent") {
    const yes = (editable.leads || []).filter(row => lower(row.messageConsent) === "yes");
    const no = (editable.leads || []).filter(row => lower(row.messageConsent) === "no");
    if (!yes.length) return `Nobody in ${name} has told you they agree to get messages yet.${no.length ? ` ${plural(no.length, "person")} asked not to.` : ""} Say, for example, "Grace Otieno agreed to get messages" to record it.`;
    return `${plural(yes.length, "person")} in ${name} agreed to get messages: ${say(yes.map(row => row.name))}.${no.length ? ` Do not message: ${say(no.map(row => row.name))}.` : ""}`;
  }
  if (intent === "listCampaigns") {
    const list = editable.campaigns || [];
    if (!list.length) return `${name} has no campaigns yet. Say, for example, "Create an email campaign called Grand Opening saying We open Saturday at ten."`;
    return `${name} has ${plural(list.length, "campaign")}: ${say(list.map(row => `${row.name} (${row.status === "sent" ? "sent" : "not sent yet"}, by ${row.channel === "sms" ? "text" : "email"})`))}.`;
  }
  if (intent === "campaignResults") {
    const campaign = findCampaign(editable, campaignName(command));
    if (!campaign) return (editable.campaigns || []).length ? `Which campaign? You have ${say(editable.campaigns.map(row => row.name))}.` : `${name} has no campaigns yet.`;
    const c = counts(editable, campaign.name);
    if (!c.sent && !c.failed) return `The ${campaign.name} campaign has not been sent yet.`;
    return `The ${campaign.name} campaign${campaign.sentOn ? ` was sent ${describeDay(campaign.sentOn, today)}` : ""}: ${plural(c.sent, "message")} sent${c.failed ? `, ${c.failed} failed` : ""}, ${plural(c.replied, "reply")} you told me about. ${NOT_SEEN}`;
  }
  return null;
}

function planCampaignWrite(intent, { command, editable, workspace, today }) {
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
    const already = new Set(logFor(editable, campaign.name).filter(row => row.status === "sent" || row.status === "replied").map(row => lower(row.customer)));
    const consenting = leads.filter(row => lower(row.messageConsent) === "yes");
    const todo = consenting.filter(row => !already.has(lower(row.name)));
    const reachable = todo.filter(row => usable(campaign.channel, row.contact));
    const skipped = todo.filter(row => !usable(campaign.channel, row.contact));
    if (!consenting.length) return { response: `Nobody in ${name} has agreed to get messages yet, so I sent nothing. Say, for example, "Grace Otieno agreed to get messages", and then send the campaign.`, info: true };
    if (!reachable.length) return { response: `${todo.length ? `${plural(todo.length, "customer")} who agreed to get messages ${todo.length === 1 ? "has" : "have"} no usable ${campaign.channel === "sms" ? "phone number (with the country code, like +1 or +254)" : "email address"}` : `Every customer who agreed to get messages was already sent the ${campaign.name} campaign`}, so I sent nothing.`, info: true };
    const batch = reachable.slice(0, SEND_CAP);
    const body = `${campaign.message} ${STOP_LINE}`.replace(/\s+/g, " ").trim();
    const messages = batch.map(row => ({ channel: campaign.channel, to: usable(campaign.channel, row.contact), message: body, subject: campaign.subject || campaign.name, customer: row.name }));
    const cost = campaign.channel === "sms" ? " Each text can cost money from your phone provider." : "";
    return {
      prompt: `I can send the ${campaign.name} campaign by ${campaign.channel === "sms" ? "text" : "email"} to ${plural(batch.length, "customer")} who agreed to get messages: ${say(batch.map(row => row.name).slice(0, 8))}${batch.length > 8 ? ` and ${batch.length - 8} more` : ""}.${reachable.length > SEND_CAP ? ` That is the first ${SEND_CAP} of ${reachable.length}; say send again for the rest.` : ""}${skipped.length ? ` ${plural(skipped.length, "person")} will be left out for having no usable ${campaign.channel === "sms" ? "number" : "email"}.` : ""} The message says: "${body}"${cost} Should I send it?`,
      sendMany: messages,
      finish: results => {
        const ok = results.filter(item => item.ok); const bad = results.filter(item => !item.ok);
        const at = today;
        return {
          apply: current => ({ ...current,
            campaigns: (current.campaigns || []).map(row => (lower(row.name) === lower(campaign.name) ? { ...row, status: ok.length ? "sent" : row.status, sentOn: ok.length ? at : row.sentOn } : row)),
            campaignLog: [...(current.campaignLog || []), ...results.map(item => ({ campaign: campaign.name, customer: item.message.customer, channel: campaign.channel, to: item.message.to, status: item.ok ? "sent" : "failed", at, note: item.ok ? "" : String(item.error || "not sent").slice(0, 200) }))].slice(-LOG_LIMIT) }),
          done: ok.length || bad.length
            ? `${ok.length ? `Sent the ${campaign.name} campaign to ${plural(ok.length, "customer")}.` : `Nothing was sent.`}${bad.length ? ` ${plural(bad.length, "message")} failed${bad[0].error ? `: ${String(bad[0].error).replace(/[.\s]+$/, "")}` : ""}.` : ""} Say "how did the ${campaign.name} campaign do" for the numbers.`
            : "Nothing was sent."
        };
      }
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

module.exports = Object.freeze({ classifyCampaign, readCampaign, planCampaignWrite, CAMPAIGN_READ_INTENTS, CAMPAIGN_WRITE_INTENTS, SEND_CAP, STOP_LINE, NOT_SEEN, campaignName, messageOf });
