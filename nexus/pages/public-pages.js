"use strict";

// THE PUBLIC SIDE OF THE OWNER'S PAGES (9 November 2026): "/p/<slug>" shows a landing page, a form, a survey or a booking page that the owner made by voice (nexus/business/pages-voice.js), and takes what a visitor sends.
// Anyone with the link can open it, with no account, so this is built to be careful:
//   * the page is plain HTML with no script at all; every word that came from the owner or a visitor is escaped; the page asks search engines to leave it alone (noindex) and is never stored by a browser or a proxy;
//   * only a page that is ON is shown, and only the page's own words are read from the workspace, never anything else in it;
//   * a submission needs a signed time token (a bot that posts in a second, or a stale page, is turned away), an empty hidden "website" field (a bot fills it), and fits size limits (each answer 1,000 characters, 6,000 in all);
//   * it is rate limited: 5 an hour from one address to one page, 60 an hour to one page, 300 a day to one workspace; past that it says to try later;
//   * a form or a booking adds the person to the customers (never over an existing "no" to messages), and a tick in the consent box is the ONLY thing recorded as agreeing to get messages;
//   * a booking is checked against the opening hours and the appointments AGAIN when it is sent, inside a versioned save, so two people can never take the same time; the loser is told and shown the times that are left;
//   * the owner is told with a notification (never the visitor's words in it beyond a name), and everything is kept in the workspace.

const crypto = require("node:crypto");
const scheduling = require("../business/scheduling-voice.js");
const pagesVoice = require("../business/pages-voice.js");
const chatAnswer = require("./chat-answer.js");
const { localClock } = require("../brief/schedule.js");
const { normalizeEditable } = require("../business/service.js");
const { addDays, describeDay } = require("../personal/dates.js");

const SLUG = /^[a-z0-9][a-z0-9-]{3,78}[a-z0-9]$/;
const ANSWER_MAX = 1000;
const TOTAL_MAX = 6000;
const BODY_MAX = 24 * 1024;
const MIN_FILL_MS = 2000;
const MAX_FILL_MS = 2 * 60 * 60 * 1000;
const PER_IP_PER_HOUR = 5;
const PER_PAGE_PER_HOUR = 60;
const PER_WORKSPACE_PER_DAY = 300;
// a chat page answers a question without saving anything, so it can take more questions than a form takes answers
const CHAT_QUESTION_MAX = 300;
const CHAT_PER_IP_PER_HOUR = 40;
const CHAT_PER_PAGE_PER_HOUR = 400;
const SAVE_ATTEMPTS = 4;
const STEP = 30;

const esc = value => String(value ?? "").replace(/[&<>"'`]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;", "`": "&#96;" }[ch]));
const tidy = (value, max) => String(value ?? "").replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").replace(/[ \t]+/g, " ").replace(/\r\n?/g, "\n").trim().slice(0, max);
const lower = value => String(value || "").toLowerCase();
const paragraphs = text => String(text || "").split(/\n{1,}/).map(item => item.trim()).filter(Boolean).map(item => `<p>${esc(item)}</p>`).join("");

const CSS = "body{margin:0;font:17px/1.55 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:#f6f7f5;color:#1d2a24}main{max-width:36rem;margin:0 auto;padding:1.5rem 1rem 3rem}h1{font-size:1.7rem;line-height:1.2;margin:.2rem 0 1rem}p{margin:.6rem 0}form{margin-top:1.2rem}label{display:block;margin:.9rem 0 .25rem;font-weight:600}input,select,textarea{width:100%;box-sizing:border-box;font:inherit;padding:.65rem .7rem;border:1px solid #9aa59f;border-radius:.45rem;background:#fff;color:inherit}textarea{min-height:6rem}button{margin-top:1.2rem;font:inherit;font-weight:700;padding:.75rem 1.4rem;border:0;border-radius:.5rem;background:#1f6f54;color:#fff;cursor:pointer}.check{display:flex;gap:.6rem;align-items:flex-start;margin:1rem 0 0;font-weight:400}.check input{width:auto;margin-top:.35rem}.day{margin:1rem 0 .3rem;font-weight:700}.slots{display:flex;flex-wrap:wrap;gap:.5rem}.slot{display:inline-flex;align-items:center;gap:.35rem;margin:0;padding:.4rem .7rem;border:1px solid #9aa59f;border-radius:.45rem;background:#fff;font-weight:600}.slot input{width:auto}.note{color:#52605a;font-size:.92rem}.ok{background:#e4f3ea;border:1px solid #9cc9ae;border-radius:.5rem;padding:.8rem 1rem}.bad{background:#fbe9e7;border:1px solid #e0a9a2;border-radius:.5rem;padding:.8rem 1rem}.hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}.q{background:#fff;border:1px solid #c9d1cc;border-radius:.5rem;padding:.6rem .9rem}details{margin-top:1.4rem;border-top:1px solid #c9d1cc;padding-top:.6rem}summary{cursor:pointer;font-weight:700;padding:.4rem 0}footer{margin-top:2.5rem;color:#6b7771;font-size:.85rem}@media(prefers-color-scheme:dark){body{background:#14201b;color:#e7efe9}input,select,textarea,.slot{background:#1c2b24;border-color:#5b6b63}.note,footer{color:#a9b8b0}.ok{background:#173326;border-color:#2f6a4c}.bad{background:#3a1c18;border-color:#7a3a33}.q{background:#1c2b24;border-color:#5b6b63}details{border-color:#5b6b63}}";

function shell(title, inner) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>${esc(title)}</title><style>${CSS}</style></head><body><main>${inner}<footer>Made with Kyro</footer></main></body></html>`;
}
const notFoundHtml = () => shell("Page not available", `<h1>This page is not available</h1><p>The link may be wrong, or the page has been turned off.</p>`);

// ---- reading a visitor's form ----
function parseForm(raw) {
  const params = new URLSearchParams(String(raw || ""));
  const out = {};
  for (const [key, value] of params) if (/^[a-z0-9_]{1,12}$/i.test(key) && !(key in out)) out[key] = value;
  return out;
}

// the signed time token: "<issued-at ms>.<hmac>" so a page that is too fresh (a bot), too old, or for another page is refused
function tokenFor(secret, slug, at) { return `${at}.${crypto.createHmac("sha256", secret).update(`${slug}|${at}`).digest("base64url").slice(0, 22)}`; }
function tokenOk(secret, slug, token, now) {
  const m = /^(\d{10,16})\.([A-Za-z0-9_-]{22})$/.exec(String(token || ""));
  if (!m) return false;
  const expected = tokenFor(secret, slug, m[1]).split(".")[1];
  const a = Buffer.from(m[2]); const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return false;
  const age = now - Number(m[1]);
  return age >= MIN_FILL_MS && age <= MAX_FILL_MS;
}

// ---- the booking times that are free ----
const pad = n => String(n).padStart(2, "0");
const hhmm = minutes => `${pad(Math.floor(minutes / 60))}:${pad(minutes % 60)}`;
const toMin = time => { const m = /^(\d{1,2}):(\d{2})$/.exec(String(time || "")); return m ? Number(m[1]) * 60 + Number(m[2]) : null; };
function slotsFor(editable, page, now) {
  const clock = localClock(now, page.zone || undefined);
  const minutes = Math.max(10, Number(page.minutes) || 30);
  const days = Math.min(Math.max(Number(page.daysAhead) || 14, 1), 30);
  const nowTime = hhmm(clock.minutes);
  const out = [];
  for (let i = 0; i < days && out.length < 8; i += 1) {
    const day = addDays(clock.day, i);
    const hours = scheduling.hoursFor(editable, day);
    if (!hours) continue;
    const times = [];
    for (let start = toMin(hours.open); start + minutes <= toMin(hours.close) && times.length < 16; start += STEP) {
      if (scheduling.check(editable, day, hhmm(start), minutes, { today: clock.day, nowTime }).ok) times.push(hhmm(start));
    }
    if (times.length) out.push({ day, times });
  }
  return { slots: out, today: clock.day, nowTime, minutes };
}
const clockWords = time => { const [h, m] = time.split(":").map(Number); return `${((h + 11) % 12) + 1}${m ? `:${pad(m)}` : ""} ${h < 12 ? "AM" : "PM"}`; };

// ---- the page ----
function renderForm(page, { token, editable, now, message, values = {} }) {
  const fields = pagesVoice.fieldList(page);
  const rows = [];
  if (page.kind === "booking") {
    const { slots, today } = slotsFor(editable, page, now);
    if (!slots.length) rows.push(`<p class="bad">There are no free times in the next few days. Please try again later.</p>`);
    else {
      rows.push(`<p class="day">Choose a time</p>`);
      for (const day of slots) rows.push(`<p class="day">${esc(describeDay(day.day, today))}</p><div class="slots">${day.times.map(time => `<label class="slot"><input type="radio" name="slot" value="${esc(`${day.day}T${time}`)}" required> ${esc(clockWords(time))}</label>`).join("")}</div>`);
      rows.push(`<label for="n">Your name</label><input id="n" name="n" maxlength="80" autocomplete="name" required value="${esc(values.n)}"><label for="c">Your phone number or email</label><input id="c" name="c" maxlength="120" autocomplete="email" required value="${esc(values.c)}"><label for="q">Anything we should know (optional)</label><textarea id="q" name="q" maxlength="${ANSWER_MAX}">${esc(values.q)}</textarea>`);
    }
  } else {
    fields.forEach((label, index) => {
      const key = `f${index}`;
      const rating = /\(1-5\)\s*$/.test(label); const yesno = /\(yes\/no\)\s*$/i.test(label);
      const shown = label.replace(/\s*\((?:1-5|yes\/no)\)\s*$/i, "");
      const long = /message|comment|tell|why|what|how|anything|improve|note|describe|question/i.test(label) && !rating && !yesno;
      const value = values[key] || "";
      rows.push(`<label for="${key}">${esc(shown)}</label>${rating ? `<select id="${key}" name="${key}"><option value="">Choose</option>${[1, 2, 3, 4, 5].map(n => `<option value="${n}"${String(n) === value ? " selected" : ""}>${n}${n === 1 ? " (poor)" : n === 5 ? " (great)" : ""}</option>`).join("")}</select>` : yesno ? `<select id="${key}" name="${key}"><option value="">Choose</option><option${value === "Yes" ? " selected" : ""}>Yes</option><option${value === "No" ? " selected" : ""}>No</option></select>` : long ? `<textarea id="${key}" name="${key}" maxlength="${ANSWER_MAX}">${esc(value)}</textarea>` : `<input id="${key}" name="${key}" maxlength="${ANSWER_MAX}" value="${esc(value)}">`}`);
    });
  }
  if (!rows.length) return "";
  const consent = page.askConsent === "yes" ? `<label class="check"><input type="checkbox" name="agree" value="yes"> I agree to get messages from this business. I can tell them to stop at any time.</label>` : "";
  return `<form method="post" action="/p/${esc(page.slug)}" autocomplete="on">${message ? `<p class="bad">${esc(message)}</p>` : ""}${rows.join("")}${consent}<div class="hp" aria-hidden="true"><label for="website">Leave this empty</label><input id="website" name="website" tabindex="-1" autocomplete="off"></div><input type="hidden" name="t" value="${esc(token)}"><button type="submit">${esc(page.button || "Send")}</button><p class="note">What you type is sent to the business that made this page.</p></form>`;
}
// the chat page: no script, so a question is a form post and the answer comes back on a fresh page with the question above it, another question box below, and a way to leave a message
function renderChat(page, { token, message, values = {}, question = "", answer = null, leave = false }) {
  const hidden = `<div class="hp" aria-hidden="true"><label for="website">Leave this empty</label><input id="website" name="website" tabindex="-1" autocomplete="off"></div><input type="hidden" name="t" value="${esc(token)}">`;
  const answered = Boolean(answer && answer.text);
  const thread = question ? `<p class="q"><strong>You asked:</strong> ${esc(question)}</p>${answered ? `<p class="ok">${esc(answer.text)}</p>` : `<p class="bad">I do not have an answer to that. I only know what this business has written down. You can leave a message below and they will reply.</p>`}` : "";
  const ask = `<form method="post" action="/p/${esc(page.slug)}" autocomplete="off"><input type="hidden" name="act" value="ask"><label for="q">${question ? "Ask something else" : "Ask a question"}</label><input id="q" name="q" maxlength="${CHAT_QUESTION_MAX}" required>${hidden}<button type="submit">${esc(page.button || "Ask")}</button></form>`;
  const consent = page.askConsent === "yes" ? `<label class="check"><input type="checkbox" name="agree" value="yes"> I agree to get messages from this business. I can tell them to stop at any time.</label>` : "";
  const open = leave || (question && !answered);
  const form = `<details${open ? " open" : ""}><summary>Leave a message for the business</summary><form method="post" action="/p/${esc(page.slug)}" autocomplete="on">${message ? `<p class="bad">${esc(message)}</p>` : ""}<input type="hidden" name="act" value="leave"><label for="n">Your name</label><input id="n" name="n" maxlength="80" autocomplete="name" required value="${esc(values.n)}"><label for="c">Your phone number or email</label><input id="c" name="c" maxlength="120" autocomplete="email" required value="${esc(values.c)}"><label for="m">Your message</label><textarea id="m" name="m" maxlength="${ANSWER_MAX}">${esc(values.m !== undefined ? values.m : question)}</textarea>${consent}${hidden.replace('for="website"', 'for="website2"').replace('id="website"', 'id="website2"')}<button type="submit">Send message</button><p class="note">What you type is sent to the business that made this page.</p></form></details>`;
  return shell(page.title, `<h1>${esc(page.headline || page.title)}</h1>${paragraphs(page.body)}<p class="note">This is an automatic helper, not a person. It only knows what the business has written down, so it can be out of date.</p>${thread}${ask}${form}`);
}
function renderPage(page, ctx) {
  if (page.kind === "chat") return renderChat(page, { ...ctx, leave: Boolean(ctx.message) });
  const intro = `<h1>${esc(page.headline || page.title)}</h1>${paragraphs(page.body)}`;
  return shell(page.title, intro + renderForm(page, ctx));
}
const thanks = (page, extra = "") => shell(page.title, `<h1>Thank you</h1><p class="ok">${esc(extra || (page.kind === "survey" ? "Your answers were sent." : "Your message was sent. They will be in touch."))}</p>`);

// ---- what a submission does to the workspace ----
const CONTACT_LABEL = /phone|mobile|email|e-mail|contact|whatsapp|number/i;
const NAME_LABEL = /(^|\b)(?:your\s+|full\s+)?name\b/i;
function readSubmission(page, form, now) {
  const clock = localClock(now, page.zone || undefined);
  const answers = []; let name = ""; let contact = ""; let total = 0;
  if (page.kind === "booking" || page.kind === "chat") {
    name = tidy(form.n, 80); contact = tidy(form.c, 120);
    const q = tidy(page.kind === "chat" ? form.m : form.q, ANSWER_MAX);
    if (!name) return { error: "Please enter your name." };
    if (!contact) return { error: "Please enter your phone number or email." };
    if (q) answers.push(page.kind === "chat" ? `Message: ${q}` : `Note: ${q}`);
    if (page.kind === "chat" && !q) return { error: "Please type a message." };
  } else {
    const labels = pagesVoice.fieldList(page);
    labels.forEach((label, index) => {
      const value = tidy(form[`f${index}`], ANSWER_MAX);
      if (!value) return;
      const rating = /\(1-5\)\s*$/.test(label);
      if (rating && !/^[1-5]$/.test(value)) return;
      const shown = label.replace(/\s*\((?:1-5|yes\/no)\)\s*$/i, "");
      total += value.length;
      answers.push(`${shown}: ${value}`);
      if (page.kind !== "survey") {
        if (!contact && CONTACT_LABEL.test(label)) contact = value.slice(0, 120);
        else if (!name && NAME_LABEL.test(label)) name = value.slice(0, 80);
      }
    });
    if (!answers.length) return { error: "Please fill in at least one answer." };
    if (page.kind === "form" && !contact) return { error: "Please give a phone number or email so they can reply." };
  }
  if (total > TOTAL_MAX) return { error: "That is too long. Please shorten it." };
  const agree = page.askConsent === "yes" && form.agree === "yes";
  return { name, contact, answers: answers.join(" | ").slice(0, TOTAL_MAX), agree, day: clock.day, at: `${clock.day} ${hhmm(clock.minutes)}` };
}

function applySubmission(editable, page, sub, form, now) {
  const clock = localClock(now, page.zone || undefined);
  const responses = [...(editable.pageResponses || []), { page: page.slug, title: page.title, at: sub.at, name: sub.name, contact: sub.contact, answers: sub.answers, consent: sub.agree ? "yes" : "", kind: page.kind }];
  const capped = responses.length > pagesVoice.MAX_RESPONSES ? responses.slice(responses.length - pagesVoice.MAX_RESPONSES) : responses;
  let next = { ...editable, pageResponses: capped };
  let bookedAt = "";
  if (page.kind === "booking") {
    const [day, time] = String(form.slot || "").split("T");
    const minutes = Math.max(10, Number(page.minutes) || 30);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(day || "") || !/^\d{2}:\d{2}$/.test(time || "")) return { error: "Please choose a time." };
    const verdict = scheduling.check(next, day, time, minutes, { today: clock.day, nowTime: hhmm(clock.minutes) });
    if (!verdict.ok) return { conflict: true };
    const words = `${describeDay(day, clock.day)} at ${clockWords(time)}`;
    bookedAt = words;
    next = { ...next, appointments: [...(next.appointments || []), { title: `${page.title}: ${sub.name}`, start: words, end: "", notes: sub.answers || "Booked on the website.", status: "scheduled", calendarEventId: "", calendarLink: "", startAt: `${day}T${time}`, durationMinutes: minutes, customer: sub.name, service: page.title, confirmation: "online" }] };
  }
  // a form or a booking adds the person to the customers; a survey is anonymous
  if (page.kind !== "survey" && sub.contact) {
    const key = lower(sub.contact).replace(/[\s()-]/g, "");
    const leads = next.leads || [];
    const at = leads.findIndex(row => (row.contact && lower(row.contact).replace(/[\s()-]/g, "") === key) || (sub.name && lower(row.name) === lower(sub.name)));
    const consentRow = sub.agree ? { messageConsent: "yes", messageConsentDate: clock.day } : {};
    if (at < 0) next = { ...next, leads: [...leads, { name: sub.name || sub.contact, contact: sub.contact, type: "customer", need: (sub.answers || "").slice(0, 300), stage: "new", nextAction: "", followUpDate: "", source: `page: ${page.title}`, ...consentRow }].slice(0, 200) };
    else if (sub.agree && !String(leads[at].messageConsent || "").trim()) next = { ...next, leads: leads.map((row, i) => (i === at ? { ...row, ...consentRow } : row)) };
    const who = sub.name || sub.contact;
    next = { ...next, contactNotes: [...(next.contactNotes || []), { contact: (leads[at] || {}).name || who, at: clock.day, kind: "page", text: page.kind === "booking" ? `Booked online: ${page.title}, ${bookedAt}` : page.kind === "chat" ? `Left a message on the ${page.title} chat${sub.answers ? `: ${sub.answers.slice(0, 200)}` : ""}` : `Sent the ${page.title} form${sub.answers ? `: ${sub.answers.slice(0, 200)}` : ""}` }].slice(-2000) };
  }
  return { editable: next, bookedAt };
}

// ---- the HTTP side ----
function createPublicPages({ runtime, env = process.env, now = () => new Date(), notify = null, logger = null }) {
  if (typeof runtime !== "function") throw new Error("A way to reach the runtime is required.");
  const secret = env.PUBLIC_PAGES_SECRET || env.SESSION_SECRET || crypto.randomBytes(32).toString("hex");
  const hits = new Map();
  const tooMany = (key, limit) => {
    const at = now().getTime(); const list = (hits.get(key) || []).filter(time => at - time < 3600_000);
    if (list.length >= limit) { hits.set(key, list); return true; }
    list.push(at); hits.set(key, list);
    if (hits.size > 5000) for (const [k, v] of hits) { if (!v.some(time => at - time < 3600_000)) hits.delete(k); }
    return false;
  };
  const send = (res, status, html, extra = {}) => { res.writeHead(status, { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "x-robots-tag": "noindex, nofollow", "referrer-policy": "no-referrer", ...extra }); res.end(html); return true; };
  const readBody = req => new Promise((resolve, reject) => {
    let size = 0; const chunks = [];
    req.on("data", chunk => { size += chunk.length; if (size > BODY_MAX) { reject(Object.assign(new Error("too large"), { code: "too_large" })); req.destroy(); return; } chunks.push(chunk); });
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
  const clientKey = req => String((req.headers["x-forwarded-for"] || "").split(",")[0].trim() || req.socket?.remoteAddress || "unknown").slice(0, 64);
  const found = async slug => {
    const active = await runtime();
    const repository = active.businessRecords;
    if (!repository?.findPageRecord) return { repository: null };
    const record = await repository.findPageRecord({ slug });
    if (!record) return { repository, record: null };
    const editable = normalizeEditable(record.data.info, record.data.editable);
    const page = (editable.pages || []).find(item => item.slug === slug && item.status === "on") || null;
    return { active, repository, record, editable, page };
  };

  async function handle(req, res, url) {
    const m = /^\/p\/([a-z0-9-]{5,80})\/?$/.exec(url.pathname);
    if (!m || !SLUG.test(m[1])) return false;
    const slug = m[1];
    if (req.method !== "GET" && req.method !== "HEAD" && req.method !== "POST") return send(res, 405, shell("Not allowed", "<h1>Not allowed</h1>"), { allow: "GET, HEAD, POST" });
    let state;
    try { state = await found(slug); } catch (error) { logger?.error?.("public_page.lookup_failed", { error: { code: error.code, message: error.message } }); return send(res, 503, shell("Try again later", "<h1>Please try again in a moment</h1>")); }
    if (!state.page) return send(res, 404, notFoundHtml());
    const at = now();
    if (req.method !== "POST") return send(res, 200, req.method === "HEAD" ? "" : renderPage(state.page, { token: tokenFor(secret, slug, String(at.getTime())), editable: state.editable, now: at }));

    if (!/^application\/x-www-form-urlencoded\b/i.test(String(req.headers["content-type"] || ""))) return send(res, 415, shell("Not allowed", "<h1>Not allowed</h1>"));
    // a chat page's body is read first, because a question (answered, nothing saved) and a message (saved like a form) are limited differently
    let form = null;
    const readForm = async () => { try { form = parseForm(await readBody(req)); return null; } catch (error) { return send(res, error.code === "too_large" ? 413 : 400, shell("Too long", "<h1>That was too long</h1>")); } };
    if (state.page.kind === "chat") { const failed = await readForm(); if (failed) return failed; }
    const asking = state.page.kind === "chat" && form.act === "ask";
    const limited = asking ? tooMany(`chatip:${slug}:${clientKey(req)}`, CHAT_PER_IP_PER_HOUR) || tooMany(`chatpage:${slug}`, CHAT_PER_PAGE_PER_HOUR) : tooMany(`ip:${slug}:${clientKey(req)}`, PER_IP_PER_HOUR) || tooMany(`page:${slug}`, PER_PAGE_PER_HOUR);
    if (limited) return send(res, 429, shell("Please wait", "<h1>Please try again later</h1><p>Too many answers were sent to this page. Please wait a while.</p>"), { "retry-after": "3600" });
    if (!form) { const failed = await readForm(); if (failed) return failed; }
    // a bot fills the hidden field or posts at once; an old or foreign page has no good token. All of them are told the same, kindly
    if (form.website || !tokenOk(secret, slug, form.t, at.getTime())) return send(res, 400, shell("Please try again", `<h1>Please load the page again</h1><p class="bad">The page was out of date. Open the link again and send it once more.</p>`));
    if (asking) {
      const question = tidy(form.q, CHAT_QUESTION_MAX);
      const freshToken = tokenFor(secret, slug, String(at.getTime() - MIN_FILL_MS - 1));
      if (!question) return send(res, 422, renderPage(state.page, { token: freshToken, editable: state.editable, now: at }));
      const answer = chatAnswer.answerFor(state.editable, question, String(state.record.data?.info?.businessName || state.page.title));
      return send(res, 200, renderChat(state.page, { token: freshToken, question, answer }));
    }
    if (state.page.kind === "chat" && form.act !== "leave") return send(res, 400, shell("Please try again", `<h1>Please load the page again</h1>`));
    const sub = readSubmission(state.page, form, at);
    if (sub.error) return send(res, 422, renderPage(state.page, { token: tokenFor(secret, slug, String(at.getTime() - MIN_FILL_MS - 1)), editable: state.editable, now: at, message: sub.error, values: form }));

    let outcome = null; let current = state;
    for (let attempt = 0; attempt < SAVE_ATTEMPTS; attempt += 1) {
      const dayCount = (current.editable.pageResponses || []).filter(row => String(row.at).slice(0, 10) === sub.day).length;
      if (dayCount >= PER_WORKSPACE_PER_DAY) return send(res, 429, shell("Closed for today", "<h1>This page cannot take more answers today</h1><p>Please try again tomorrow.</p>"));
      const made = applySubmission(current.editable, current.page, sub, form, at);
      if (made.error) return send(res, 422, renderPage(current.page, { token: tokenFor(secret, slug, String(at.getTime() - MIN_FILL_MS - 1)), editable: current.editable, now: at, message: made.error, values: form }));
      if (made.conflict) return send(res, 409, renderPage(current.page, { token: tokenFor(secret, slug, String(at.getTime() - MIN_FILL_MS - 1)), editable: current.editable, now: at, message: "Sorry, that time was just taken. Please choose another.", values: form }));
      try {
        await current.repository.update({ tenantId: current.record.tenant_id, recordId: current.record.record_id, actorId: current.record.owner_id, expectedVersion: current.record.version, data: { ...current.record.data, editable: made.editable }, provenance: { source: "public-page" } });
        outcome = made; break;
      } catch (error) {
        if (attempt === SAVE_ATTEMPTS - 1) { logger?.error?.("public_page.save_failed", { error: { code: error.code, message: error.message } }); return send(res, 503, shell("Try again later", "<h1>Please try again in a moment</h1>")); }
        try { current = await found(slug); } catch { return send(res, 503, shell("Try again later", "<h1>Please try again in a moment</h1>")); }
        if (!current.page) return send(res, 404, notFoundHtml());
      }
    }
    if (typeof notify === "function") {
      try { await notify({ tenantId: current.record.tenant_id, userId: current.record.owner_id, key: `page:${slug}:${at.getTime()}:${crypto.randomBytes(3).toString("hex")}`, title: state.page.kind === "booking" ? `New booking: ${state.page.title}` : state.page.kind === "chat" ? `New chat message: ${state.page.title}` : `New answer: ${state.page.title}`, body: state.page.kind === "booking" ? `${sub.name || "Someone"} booked ${outcome.bookedAt}.` : state.page.kind === "chat" ? `${sub.name || "Someone"} left a message on your chat page.` : state.page.kind === "survey" ? "Someone answered your survey." : `${sub.name || "Someone"} sent the ${state.page.title} form.` }); } catch (error) { logger?.error?.("public_page.notify_failed", { error: { code: error.code, message: error.message } }); }
    }
    return send(res, 200, thanks(state.page, state.page.kind === "booking" ? `You are booked for ${outcome.bookedAt}. See you then.` : ""));
  }
  return Object.freeze({ handle });
}

module.exports = Object.freeze({ createPublicPages, renderPage, readSubmission, applySubmission, slotsFor, parseForm, tokenFor, tokenOk, esc, SLUG, PER_IP_PER_HOUR, PER_PAGE_PER_HOUR, PER_WORKSPACE_PER_DAY, MIN_FILL_MS, MAX_FILL_MS });
