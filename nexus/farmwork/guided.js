"use strict";

const { clean, parseQuantity, parseMoney, num, CANCEL_WORDS, looksLikeQuestion, formatMoney } = require("./parse.js");
const { anyDay } = require("./parse.js");
const { normalizeRecipient } = require("../communications/send-request.js");

// Guided conversations: for anything with several details (a field, an animal, a buyer...), Kyro asks one plain question at a time, so a
// person never has to remember a special phrase. They can say "skip" for anything optional and "cancel" at any time. One guided conversation
// is open at most (it expires after 30 minutes), and while it is open the person's next words are answers to it, unless they ask a question
// instead ("what is the weather?"), in which case Kyro says what it is waiting for and how to leave.
const SESSION_MINUTES = 30;
const SKIP_WORDS = /^(?:skip|pass|not sure|i don'?t know|dont know|none|no idea|n\/a|later)$/i;
const YES = /^(?:yes|yeah|yep|ok|okay|sure|confirm|do it|go ahead|please do)$/i;
const NO = /^(?:no|nope|don'?t|do not|not now)$/i;

const PARSERS = {
  text(raw, q) { const v = clean(raw).replace(/^["“]|["”]$/g, ""); return v && v.length <= (q.max || 80) ? { value: v } : { hint: `Please keep it short (${q.max || 80} letters at most).` }; },
  longtext(raw) { const v = clean(raw); return v && v.length <= 300 ? { value: v } : { hint: "Please keep it to a sentence or two." }; },
  area(raw) { const q = parseQuantity(raw); return q && (q.unit === "acre" || q.unit === "ha") ? { value: { value: q.value, unit: q.unit } } : { hint: 'Say the size with a unit, like "2 acres" or "1 hectare".' }; },
  quantity(raw, q) {
    const p = parseQuantity(raw);
    if (!p || (q.units && !q.units.includes(p.unit))) return { hint: q.hint || 'Say the amount with a unit, like "800 kg" or "3 bags".' };
    return { value: { value: p.value, unit: p.unit } };
  },
  number(raw, q) { const m = /(\d[\d,]*(?:\.\d+)?)/.exec(clean(raw)); const v = m ? num(m[1]) : NaN; return Number.isFinite(v) && v >= (q.min ?? 0) && v <= (q.max ?? 1e9) ? { value: v } : { hint: q.hint || "Please give me a number." }; },
  money(raw) {
    const m = parseMoney(raw); if (m) return { value: m };
    const bare = /^\s*(?:[a-z$€£₦]{0,5}\s*)?(\d[\d,]*(?:\.\d+)?)\s*$/i.exec(clean(raw)); return bare ? { value: { amount: num(bare[1]), currency: "" } } : { hint: 'Say the amount, like "5000" or "KSh 5,000".' };
  },
  date(raw, q, ctx) { const d = anyDay(raw, ctx.today); if (!d) return { hint: 'Give me a day, like "tomorrow", "12 October" or "2026-10-12".' }; // A day given without a year for something that already happened (a planting date) means the most recent one, not next year's.
    if (q.pastPreferred && d > ctx.today && !/\b\d{4}\b/.test(raw)) { const previous = `${Number(d.slice(0, 4)) - 1}${d.slice(4)}`; if (previous <= ctx.today) return { value: previous }; }
    if (q.past && d > ctx.today) return { hint: "That day is still ahead. Give me a day that has already happened." }; if (q.future && d < ctx.today) return { hint: "That day has already passed. Give me one that is still ahead." }; return { value: d }; },
  phone(raw) { const p = normalizeRecipient("sms", clean(raw)); return p ? { value: p } : { hint: 'I need the number with the country code, like +254712345678, or say "skip".' }; },
  choice(raw, q) {
    const t = clean(raw).toLowerCase();
    const hit = q.options.find(option => option.words.some(word => t === word || new RegExp(`\\b${word}\\b`).test(t)));
    return hit ? { value: hit.value } : { hint: `Please pick one: ${q.options.map(option => option.value).join(", ")}.` };
  }
};

// The words that summarise one stored answer.
function show(value, q) {
  if (value === null || value === undefined || value === "") return "";
  if (q.type === "area" || q.type === "quantity") return `${value.value} ${value.unit === "acre" ? "acres" : value.unit === "ha" ? "hectares" : value.unit}`;
  if (q.type === "money") return formatMoney(value.amount, value.currency);
  return String(value);
}

const expired = session => !session || Date.parse(session.expiresAt) < Date.now();
const ask = (q, index, total) => `${q.ask}${q.optional ? " (or say skip)" : ""}`;

// Opens a guided conversation for a template, with anything already known filled in. Finishes at once when nothing is left to ask.
async function startGuided(ctx, template, prefill = {}, extra = {}) {
  const answers = { ...prefill };
  const next = template.questions.find(q => !(q.key in answers));
  if (!next) return finish(ctx, template, answers, extra);
  await ctx.store.setSession({ tenantId: ctx.tenantId, userId: ctx.userId, session: { collection: template.collection, answers, asking: next.key, extra, expiresAt: new Date(Date.now() + SESSION_MINUTES * 60000).toISOString() } });
  return `${template.intro ? `${template.intro} ` : ""}${ask(next)}`;
}

async function finish(ctx, template, answers, extra) {
  await ctx.store.clearSession({ tenantId: ctx.tenantId, userId: ctx.userId });
  return template.finish(ctx, answers, extra);
}

// The person's words while a guided conversation is open. Returns the answer to say.
async function continueGuided(ctx, session, template) {
  const text = clean(ctx.text);
  const q = template.questions.find(item => item.key === session.asking);
  if (!q) { await ctx.store.clearSession({ tenantId: ctx.tenantId, userId: ctx.userId }); return null; }
  if (CANCEL_WORDS.test(text)) { await ctx.store.clearSession({ tenantId: ctx.tenantId, userId: ctx.userId }); return "Okay, I've stopped that. Nothing was saved."; }
  // Someone who asks something else, or types a whole new request, is not answering: let the question go and handle what they said.
  const dropped = async () => { await ctx.store.clearSession({ tenantId: ctx.tenantId, userId: ctx.userId }); return null; };
  if (looksLikeQuestion(text) && q.type !== "longtext") return dropped();
  const answers = { ...session.answers };
  if (SKIP_WORDS.test(text)) {
    if (!q.optional) return `I do need that one. ${ask(q)}`;
    answers[q.key] = null;
  } else {
    const parsed = PARSERS[q.type](text, q, ctx);
    if (parsed.hint) {
      const misses = (session.misses || 0) + 1;
      if (misses >= 2 || (q.type !== "longtext" && text.split(/\s+/).length >= 4)) return dropped();
      await ctx.store.setSession({ tenantId: ctx.tenantId, userId: ctx.userId, session: { ...session, misses, expiresAt: new Date(Date.now() + SESSION_MINUTES * 60000).toISOString() } });
      return `${parsed.hint} ${ask(q)} (Say "cancel" to stop.)`;
    }
    answers[q.key] = parsed.value;
  }
  const next = template.questions.find(item => !(item.key in answers));
  if (!next) return finish(ctx, template, answers, session.extra || {});
  await ctx.store.setSession({ tenantId: ctx.tenantId, userId: ctx.userId, session: { ...session, answers, misses: 0, asking: next.key, expiresAt: new Date(Date.now() + SESSION_MINUTES * 60000).toISOString() } });
  return ask(next);
}

// A yes/no question about something that cannot be undone (removing a record). `action` is data the module reads back on "yes".
async function askConfirm(ctx, sentence, action) {
  await ctx.store.setSession({ tenantId: ctx.tenantId, userId: ctx.userId, session: { collection: "_confirm", answers: {}, asking: "confirm", action, expiresAt: new Date(Date.now() + 10 * 60000).toISOString() } });
  return `${sentence} Say yes to go ahead, or no to leave it.`;
}

module.exports = Object.freeze({ startGuided, continueGuided, askConfirm, expired, show, YES, NO, PARSERS, SESSION_MINUTES });
