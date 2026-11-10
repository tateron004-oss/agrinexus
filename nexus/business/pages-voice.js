"use strict";

// PAGES THE OWNER'S CUSTOMERS CAN OPEN (9 November 2026): a landing page, a contact form, a survey, or an online booking page, each on its own public link ("/p/spring-sale-k3m9x2qa"), with no account and nothing to install.
// The owner builds one by voice, gets the link, and shares it; the answers come back into the workspace (a form or booking also adds the person to the customers, and a booking goes into the appointments with no double-booking).
// This file is the voice side: pure functions over the workspace data (client.data.editable), tested without a database. The public side (the page itself and taking the answers) is nexus/pages/public-pages.js.
//
//   editable.pages          { slug, kind (landing | form | survey | booking), title, headline, body, button, fields, status (on | off), askConsent (yes | no), minutes, daysAhead, createdOn }
//   editable.pageResponses  { page (the slug), title, at, name, contact, answers, consent, kind }
//
// The rules that keep it honest and safe:
//  * a page is public only while it is ON, and anyone with its link can open it; the link ends in a random code, so it cannot be guessed, and the page is marked "noindex" so search engines are asked to leave it alone;
//  * a form can ask a person to agree to get messages; ONLY a ticked box is recorded as agreeing (the same record campaigns and sequences read), and nothing is ever sent from here;
//  * the owner is told how to share the link and that anything a visitor types is kept in their workspace.

const crypto = require("node:crypto");
const { describeDay } = require("../personal/dates.js");
const chatVoice = require("./chat-voice.js");

const lower = value => String(value || "").toLowerCase();
const clean = value => String(value || "").replace(/\s+/g, " ").trim().replace(/^["'“”]+|["'“”.,;:!?]+$/g, "").trim();
const plural = (count, word) => `${count} ${count === 1 ? word : `${word}s`}`;
const say = (list, limit = 8) => {
  const shown = list.slice(0, limit); const more = list.length > limit ? list.length - limit : 0;
  if (shown.length <= 1 && !more) return shown.join("");
  return more ? `${shown.join(", ")}, and ${more} more` : `${shown.slice(0, -1).join(", ")} and ${shown[shown.length - 1]}`;
};

const MAX_PAGES = 20;
const MAX_FIELDS = 12;
const MAX_RESPONSES = 1000;
const FIELD_SPLIT = " | ";
const PAGE_READ_INTENTS = Object.freeze(["listPages", "pageLink", "pageResponses", ...chatVoice.CHAT_READ_INTENTS]);
const PAGE_WRITE_INTENTS = Object.freeze(["createPage", "setPageStatus", "deletePage", ...chatVoice.CHAT_WRITE_INTENTS]);
const KIND_WORDS = Object.freeze({ landing: "landing page", form: "contact form", survey: "survey", booking: "booking page", chat: "chat page" });

function classifyPage(command = "") {
  const text = String(command || "").replace(/\s+/g, " ").trim();
  if (!text || text.length > 900) return null;
  const chatSaid = chatVoice.classifyChat(text);
  if (chatSaid) return chatSaid;
  if (!/\b(?:landing\s+pages?|web\s*pages?|booking\s+pages?|online\s+booking|(?:contact|enquiry|inquiry|sign-?up|order|feedback)\s+forms?|forms?|surveys?|questionnaires?|pages?|web\s*chat|chatbot)\b/i.test(text)) return null;
  const asks = /\?|^(?:(?:hey|ok|okay|please)\s+)*(?:(?:kyro|nexus)[,.]?\s+)?(?:what|which|who|how|do|does|did|are|is|any|show|tell|list|give|read)\b/i.test(text);
  if (/^(?:how\s+(?:do|can|to|should|would|does)|why|explain|tell me how|should|what(?:'s|\u2019s| is| are)\s+(?:a|an)\b)/i.test(text) && !/\b(?:my|our)\b/i.test(text)) return null;
  // not these: a page of a book, a web page to read aloud, the farm and learning "form" words
  if (/\b(?:read|open|search|find|google|look up)\s+(?:a\s+|the\s+)?(?:web\s*page|page)\b/i.test(text) && !/\b(?:my|our)\b/i.test(text)) return null;
  if (!asks && /\b(?:delete|remove|get rid of)\b/i.test(text) && /\b(?:page|form|survey)\b/i.test(text) && /\b(?:the|my|our)\b/i.test(text)) return "deletePage";
  if (!asks && /\b(?:turn|switch)\s+(?:off|on)\b|\b(?:unpublish|publish|take down|put back up|stop|pause|reopen|close)\b/i.test(text) && /\b(?:page|form|survey)\b/i.test(text) && /\b(?:the|my|our)\b/i.test(text)) return "setPageStatus";
  if (!asks && /\b(?:create|make|build|set up|start|new|write|design)\b/i.test(text) && /\b(?:landing\s+page|web\s*page|web\s*chat|chatbot|booking\s+page|online booking|(?:contact|enquiry|inquiry|sign-?up|order|feedback)\s+form|form|survey|questionnaire|page)\b/i.test(text)) {
    // a bare "form" is the older blank-document request ("create an intake form", "make a consent form"): it is a page only when it is named ("a form called Enquiry") or is a customer-facing kind
    // a bare "page" is the older designed-document request ("write the website page for my catering business", "an email as a web page"): it is one of these pages only when it names its kind or is named
    const strong = chatVoice.CHAT_PAGE_WORDS.test(text) || /\b(?:landing\s+page|booking\s+page|online booking|survey|questionnaire|(?:contact|enquiry|inquiry|sign-?up|order|feedback)\s+form)\b/i.test(text);
    if (!strong && !/\b(?:called|named|titled)\b/i.test(text)) return null;
    if (/\bas\s+(?:a\s+|an\s+)?(?:web\s*page|website|page|pdf|html)\b/i.test(text) && !strong) return null;
    const onlyForm = !/\b(?:landing\s+page|web\s*page|booking\s+page|online booking|survey|questionnaire|page)\b/i.test(text) && !/\b(?:contact|enquiry|inquiry|sign-?up|order|feedback)\s+form\b/i.test(text);
    if (onlyForm && (!/\b(?:called|named|titled)\b/i.test(text) || /\b(?:intake|consent|application|registration|medical|tax|visa|permit)\s+forms?\b/i.test(text))) return null;
    return "createPage";
  }
  if (asks && /\b(?:link|address|url|web address)\b/i.test(text)) return "pageLink";
  if (asks && /\b(?:answers?|responses?|submissions?|replies|entries|sign-?ups?|bookings?|enquiries|inquiries|results?|got|get|received|filled)\b/i.test(text) && /\b(?:page|form|survey|questionnaire)\b/i.test(text)) return "pageResponses";
  if (asks && /\b(?:my|our)\s+(?:landing\s+|booking\s+|web\s*)?(?:pages|forms|surveys)\b|\bwhat (?:pages|forms|surveys)\b/i.test(text)) return "listPages";
  return null;
}

// ---- what was said ----
const kindOf = text => (chatVoice.CHAT_PAGE_WORDS.test(text) ? "chat" : /\b(?:survey|questionnaire)\b/i.test(text) ? "survey" : /\b(?:booking|online booking|appointment page|book (?:an )?appointment)\b/i.test(text) ? "booking" : /\bform\b/i.test(text) ? "form" : "landing");
function titleIn(text) {
  const named = /\b(?:called|named|titled)\s+["'“]?([^"'”,.:;]+?)["'”]?(?=\s+(?:with|that|for|and|where|saying|asking|about|to|which)\b|[,:.]|$)/i.exec(text);
  if (named) return clean(named[1]).slice(0, 60);
  const the = /\b(?:the|my|our)\s+["'“]?([A-Za-z0-9][\w' -]{1,40}?)["'”]?\s+(?:landing\s+page|booking\s+page|chat\s+page|web\s*page|contact\s+form|enquiry\s+form|inquiry\s+form|sign-?up\s+form|order\s+form|feedback\s+form|page|form|survey|questionnaire)\b/i.exec(text);
  const name = the ? clean(the[1]).replace(/^(?:the|my|our|a|an|new)\s+/i, "") : "";
  return /^(?:landing|booking|web|contact|new|this|that|it|one|online)$/i.test(name) ? "" : name.slice(0, 60);
}
const pageNamed = (editable, text) => {
  const wanted = lower(text);
  const pages = (editable.pages || []).slice().sort((a, b) => b.title.length - a.title.length);
  return pages.find(page => wanted.includes(lower(page.title))) || null;
};
// the fields a form asks for: "with the fields name, phone and message" -> ["Name", "Phone", "Message"]
function fieldsIn(text) {
  const m = /\b(?:fields?|asking for|that asks for|asks for|questions?|asking|with)\s*(?:are|is|:)?\s*(.+)$/i.exec(text.replace(/\bcalled\s+["'“]?[^"'”,.:;]+?["'”]?(?=\s+(?:with|that|asking|and)\b|[,:.]|$)/i, ""));
  if (!m) return [];
  let list = m[1].trim();
  list = list.replace(/^(?:the\s+)?(?:fields?|questions?)\s*(?:are|is|:)?\s*/i, "");
  const parts = /\?/.test(list) ? list.split(/(?<=\?)\s*/) : list.split(/\s*(?:;|,|\band then\b|\bthen\b|\band\b)\s*/i);
  const seen = new Set();
  return parts.map(item => clean(item).replace(/^(?:the|a|an|their|your)\s+/i, "")).filter(item => item && item.length <= 80).map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .filter(item => { const key = lower(item); if (seen.has(key)) return false; seen.add(key); return true; }).slice(0, MAX_FIELDS);
}
const headlineIn = text => { const m = /\b(?:headline|heading)\s*(?:is|:|says|saying)?\s*["'“]?(.+?)["'”]?(?=\s+(?:and\s+(?:the\s+)?(?:text|body|message|description|button)|with\s+the\s+(?:text|body))\b|[.!?]?$)/i.exec(text); return m ? clean(m[1]).slice(0, 120) : ""; };
const bodyIn = text => { const m = /\b(?:text|body|message|description|saying|it says|that says)\s*(?:is|:|says)?\s*["'“]?([\s\S]+?)["'”]?\s*$/i.exec(text.replace(/\b(?:headline|heading)\s*(?:is|:|says|saying)?\s*["'“]?.+?["'”]?(?=\s+(?:and\s+(?:the\s+)?(?:text|body|message|description)|with\s+the\s+(?:text|body))\b)/i, "")); return m ? m[1].replace(/\s+/g, " ").trim().slice(0, 1200) : ""; };
const minutesIn = text => { const m = /\b(?:for|lasting|of)\s+(\d{1,3})\s*(?:minutes?|mins?)\b/i.exec(text) || /\b(\d{1,3})[- ]minute\b/i.exec(text); if (m) return Math.min(Math.max(Number(m[1]), 10), 240); const h = /\b(?:an?|one|1)\s+hour\b/i.exec(text); return h ? 60 : 30; };
const newSlug = (title, taken) => {
  const base = lower(title).normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 30) || "page";
  for (let i = 0; i < 20; i += 1) {
    const code = crypto.randomBytes(6).toString("base64url").toLowerCase().replace(/[^a-z0-9]/g, "").padEnd(8, "x").slice(0, 8);
    const slug = `${base}-${code}`;
    if (!taken.has(slug)) return slug;
  }
  return `${base}-${Date.now().toString(36)}`;
};
const baseUrl = () => String(process.env.PUBLIC_BASE_URL || "").replace(/\/+$/, "");
const linkOf = slug => `${baseUrl()}/p/${slug}`;
const fieldList = page => String(page.fields || "").split(FIELD_SPLIT).map(item => item.trim()).filter(Boolean);

// ---- reads ----
function readPage(intent, { command, editable, workspace }) {
  const name = `"${workspace}"`;
  const pages = editable.pages || [];
  if (intent === "listPages") {
    if (!pages.length) return `${name} has no pages yet. Say, for example, "create a contact form called Enquiry", "create a landing page called Spring Sale", "create a survey called Feedback", or "create a booking page called Book a Haircut".`;
    return `${name} has ${plural(pages.length, "page")}: ${say(pages.map(page => `${page.title} (${KIND_WORDS[page.kind] || page.kind}, ${page.status === "on" ? "on" : "off"})`))}. Ask "what is the link to the ${pages[0].title} page" for a link to share.`;
  }
  if (chatVoice.CHAT_READ_INTENTS.includes(intent)) return chatVoice.readChat(intent, { command, editable, workspace });
  const page = pageNamed(editable, command) || (pages.length === 1 ? pages[0] : null);
  if (!page) return pages.length ? `Which page? You have ${say(pages.map(item => item.title))}.` : `${name} has no pages yet.`;
  if (intent === "pageLink") return `The ${page.title} ${KIND_WORDS[page.kind]} is ${page.status === "on" ? "on" : "turned off"}. Its link is ${linkOf(page.slug)}${baseUrl() ? "" : " (added to your Kyro website address)"}. Anyone with the link can open it${page.status === "on" ? "" : ", once you turn it on"}.`;
  if (intent === "pageResponses") {
    const rows = (editable.pageResponses || []).filter(row => row.page === page.slug);
    if (!rows.length) return `Nobody has used the ${page.title} ${KIND_WORDS[page.kind]} yet.${page.status === "on" ? ` Share its link: ${linkOf(page.slug)}` : " It is turned off."}`;
    if (page.kind === "survey") {
      const ratings = fieldList(page).filter(label => /\(1-5\)\s*$/.test(label));
      const averages = ratings.map(label => { const key = label.replace(/\s*\(1-5\)\s*$/, ""); const values = rows.map(row => { const m = new RegExp(`${key.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}[^|]*?:\\s*(\\d)`, "i").exec(row.answers || ""); return m ? Number(m[1]) : null; }).filter(value => value !== null); return values.length ? `${key} averages ${(values.reduce((a, b) => a + b, 0) / values.length).toFixed(1)} out of 5 from ${plural(values.length, "rating")}` : ""; }).filter(Boolean);
      return `The ${page.title} survey has ${plural(rows.length, "answer")}.${averages.length ? ` ${averages.join("; ")}.` : ""} Latest: ${rows.slice(-3).reverse().map(row => row.answers).join("; and ")}.`;
    }
    const latest = rows.slice(-5).reverse().map(row => `${row.name || "someone"}${row.contact ? `, ${row.contact}` : ""}${row.answers ? `: ${row.answers}` : ""}`);
    return `The ${page.title} ${KIND_WORDS[page.kind]} has ${plural(rows.length, page.kind === "booking" ? "booking" : "entry")}. Latest: ${latest.join("; ")}.`;
  }
  return null;
}

// ---- writes ----
function planPageWrite(intent, { command, editable, workspace, today, timeZone }) {
  const name = `"${workspace}"`;
  const text = String(command || "");
  const pages = editable.pages || [];

  if (intent === "createPage") {
    const kind = kindOf(text);
    const title = titleIn(text);
    if (!title) return { response: `What should the ${KIND_WORDS[kind]} be called? For example: "create a ${KIND_WORDS[kind]} called ${kind === "form" ? "Enquiry" : kind === "survey" ? "Feedback" : kind === "booking" ? "Book a Haircut" : "Spring Sale"}".`, missingInformation: ["title"] };
    if (pages.some(page => lower(page.title) === lower(title))) return { response: `${name} already has a page called ${title}. Pick another name.`, info: true };
    if (pages.length >= MAX_PAGES) return { response: `${name} already holds ${MAX_PAGES} pages. Delete one first.`, info: true };
    let fields = kind === "form" || kind === "survey" ? fieldsIn(text) : [];
    if (kind === "form" && !fields.length) fields = ["Name", "Phone or email", "Message"];
    if (kind === "survey" && !fields.length) return { response: `What should the survey ask? For example: "create a survey called ${title} with the questions how was your visit (1-5); what could we improve".`, missingInformation: ["questions"] };
    if (kind === "landing" && !headlineIn(text) && !bodyIn(text)) return { response: `What should the ${title} page say? For example: "create a landing page called ${title} with the headline Half price this week and the text Come in before Friday".`, missingInformation: ["text"] };
    const headline = kind === "landing" ? headlineIn(text) || title : title;
    const body = kind === "chat" ? bodyIn(text) || "Ask a question and I will answer from what this business has written down. If I do not know, you can leave a message." : kind === "landing" ? bodyIn(text) : kind === "booking" ? `Pick a time that suits you. ${bodyIn(text)}`.trim() : bodyIn(text);
    const wantsConsent = kind === "form" || kind === "booking" || kind === "chat";
    const minutes = kind === "booking" ? minutesIn(text) : 0;
    const taken = new Set(pages.map(page => page.slug));
    const slug = newSlug(title, taken);
    return {
      prompt: `I will make a ${KIND_WORDS[kind]} called ${title} in ${name}${fields.length ? `, asking for ${say(fields)}` : ""}${kind === "booking" ? `, for ${minutes} minutes at a time, using your opening hours and your appointments so nobody is double-booked` : ""}. It gets its own link that anyone can open, and what visitors type is kept in your workspace.${wantsConsent ? " The form has a box they can tick to agree to get messages from you." : ""} ${kind === "chat" ? ` It answers visitors only from the chat answers you write and your saved opening hours, never anything else, and it tells them it is an automatic helper; when it cannot answer, the visitor can leave a message. ${(editable.chatAnswers || []).length ? `You have ${plural((editable.chatAnswers || []).length, "chat answer")} so far.` : "You have no chat answers yet; after this, say 'when someone asks about delivery, tell them it is free over 50 dollars'."}` : ""} Should I go ahead?`,
      apply: current => ({ ...current, pages: [...(current.pages || []), { slug, kind, title, headline, body, button: kind === "chat" ? "Ask" : kind === "booking" ? "Book this time" : kind === "survey" ? "Send my answers" : kind === "landing" ? "" : "Send", fields: fields.join(FIELD_SPLIT), status: "on", askConsent: wantsConsent ? "yes" : "no", minutes, daysAhead: kind === "booking" ? 14 : 0, zone: timeZone || "", createdOn: today }] }),
      done: `Made the ${title} ${KIND_WORDS[kind]}. Its link is ${linkOf(slug)}${baseUrl() ? "" : " (added to your Kyro website address)"}. It is on now: share the link and the answers come back here. Say "what did the ${title} ${kind === "booking" ? "page" : KIND_WORDS[kind].split(" ").pop()} get" any time.`
    };
  }

  if (chatVoice.CHAT_WRITE_INTENTS.includes(intent)) return chatVoice.planChatWrite(intent, { command, editable, workspace });
  const page = pageNamed(editable, text) || (pages.length === 1 ? pages[0] : null);
  if (!page) return { response: pages.length ? `Which page? You have ${say(pages.map(item => item.title))}.` : `${name} has no pages yet.`, missingInformation: ["page"] };

  if (intent === "setPageStatus") {
    const turnOn = /\b(?:turn|switch)\s+on\b|\b(?:publish|put back up|reopen)\b/i.test(text);
    if ((page.status === "on") === turnOn) return { response: `The ${page.title} page is already ${turnOn ? "on" : "off"}.`, info: true };
    return {
      prompt: turnOn ? `I will turn the ${page.title} page on, so anyone with its link can open it. Should I go ahead?` : `I will turn the ${page.title} page off, so its link shows "not available" until you turn it on. What people sent is kept. Should I go ahead?`,
      apply: current => ({ ...current, pages: (current.pages || []).map(item => (item.slug === page.slug ? { ...item, status: turnOn ? "on" : "off" } : item)) }),
      done: `The ${page.title} page is ${turnOn ? "on. Its link is " + linkOf(page.slug) : "off"}.`
    };
  }
  if (intent === "deletePage") {
    const count = (editable.pageResponses || []).filter(row => row.page === page.slug).length;
    return {
      prompt: `I will delete the ${page.title} page, so its link stops working for good${count ? `. Its ${plural(count, "answer")} stay in your workspace` : ""}. Should I go ahead?`,
      apply: current => ({ ...current, pages: (current.pages || []).filter(item => item.slug !== page.slug) }),
      done: `Deleted the ${page.title} page.`
    };
  }
  return null;
}

module.exports = Object.freeze({ classifyPage, readPage, planPageWrite, pageNamed, fieldList, kindOf, titleIn, fieldsIn, linkOf, FIELD_SPLIT, KIND_WORDS, MAX_PAGES, MAX_FIELDS, MAX_RESPONSES, PAGE_READ_INTENTS, PAGE_WRITE_INTENTS });
void describeDay;
