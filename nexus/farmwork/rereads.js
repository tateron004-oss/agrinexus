"use strict";

const { clean } = require("./parse.js");
const english = require("../i18n/english-numbers.js");
const numbers = require("../i18n/swahili-numbers.js");
const amounts = require("./books-amounts.js");
const { askConfirm } = require("./guided.js");

// When an amount could be read two ways ("Did you mean 4,500?") Kyro asks and keeps the half-finished entry. This file is what lets the person ANSWER it the way people do:
//   * a bare amount is the answer ("4500", "4.5k", "elfu nne mia tano", "KSh 4,500"): the sentence is read again with that amount in place of the doubtful one;
//   * a bare "yes" / "ndiyo" / "sawa" confirms the one reading that was offered (done in index.js, with the Swahili yes words accepted for any amount question).
// An answer that is itself unclear is asked about again, and nothing is recorded until an amount is plain.
const AMOUNT_TYPES = new Set(["reread", "sw-amount", "books-run", "books-debt"]);
const isAmountAsk = type => AMOUNT_TYPES.has(type);
const escape = value => String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const SESSION_MINUTES = 10;

// What was heard, with the English forms of speech turned into digits ("two grand" -> "2 thousand"); `ambiguity` is set when one of them is not clear.
const heard = text => english.rewrite(clean(text));

async function setPending(ctx, action) {
  await ctx.store.setSession({ tenantId: ctx.tenantId, userId: ctx.userId, session: { collection: "_confirm", answers: {}, asking: "confirm", action, expiresAt: new Date(Date.now() + SESSION_MINUTES * 60000).toISOString() } });
}
// An amount said in a way that could mean one number or another. One likely reading: asked as yes/no. Two readings: the person says the number.
async function askReread(ctx, text, ambiguity) {
  const [first, second] = ambiguity.values;
  const action = { type: "reread", text, from: String(first), says: ambiguity.says, choices: ambiguity.values, language: "en" };
  if (second === undefined) return askConfirm(ctx, `Did you mean ${english.spaced(first)} when you said "${ambiguity.says}"?`, action);
  await setPending(ctx, action);
  return `"${ambiguity.says}" could be ${english.spaced(first)} or ${english.spaced(second)}, so I have not recorded anything. Say the amount as a number, like ${first}.`;
}

// A whole reply that is only an amount -> { amount, currency, text, ambiguous: [a, b] | null }, else null.
function parseBareAmount(raw) {
  let t = clean(raw).replace(/[.!?]+$/g, "");
  t = t.replace(/^(?:no[, ]+|sorry[, ]+|hapana[, ]+|oh[, ]+|ah[, ]+)+/i, "").replace(/^(?:it was|it is|it's|its|i meant|i said|make it|the amount is|ni|ilikuwa|nilimaanisha|nilisema|kiasi ni)\s+/i, "");
  if (!t || t.length > 40) return null;
  const token = amounts.readToken(t);
  if (token && token.amount > 0) return { amount: token.unsure ? token.unsure : token.amount, currency: token.currency, text: token.unsure ? String(token.unsure) : token.text, ambiguous: token.unsure ? [token.unsure, token.amount] : null };
  const stripped = clean(t.replace(/\b(?:shilingi|shillingi|sh|shs|ksh|kshs|bob)\b\.?/gi, " "));
  const word = stripped ? numbers.parseSwahiliNumber(stripped) : null;
  if (word && word.value > 0) return word.ambiguous ? { amount: word.value, currency: "", text: String(word.value), ambiguous: word.values } : { amount: word.value, currency: "", text: numbers.digitString(word.value), ambiguous: null };
  return null;
}

// The doubtful amount in a sentence, replaced by the amount the person has now said. null when it cannot be found.
function replaceAmount(sentence, from, replacement) {
  for (const spelling of [String(from), amounts.sayAmount(from)]) {
    const pattern = new RegExp(`(?<![\\d.,])${escape(spelling)}(?![\\d]|[.,]\\d)`);
    if (pattern.test(sentence)) return sentence.replace(pattern, replacement);
  }
  return null;
}

const SAY = {
  en: { unclear: (a, b) => `Is that ${english.spaced(a)} or ${english.spaced(b)}? Please say the amount as a plain number, like ${a}.`, failed: "I could not record that. Say it again with the amount." },
  sw: { unclear: (a, b) => `Sijui kama ni ${english.spaced(a)} au ${english.spaced(b)}, kwa hivyo sijaandika chochote. Sema kiasi kwa namba, kwa mfano "${a}".`, failed: "Samahani, sikuweza kuandika hilo. Sema tena na kiasi." }
};

// A bare amount said while an amount question is open. Returns the reply, or undefined when the words are not an amount (the caller carries on: yes, no, or a new request).
// `again(text)` reads a sentence from the top (the way a fresh message is read).
async function amountReply(ctx, session, again, confirms) {
  const action = session.action; if (!isAmountAsk(action?.type)) return undefined;
  const said = parseBareAmount(ctx.text); if (!said) return undefined;
  const say = SAY[action.language === "sw" ? "sw" : "en"];
  if (said.ambiguous) return say.unclear(said.ambiguous[0], said.ambiguous[1]); // the session stays open: the half-finished entry is kept
  let sentence = null;
  if (action.type === "reread" || action.type === "sw-amount") { const next = replaceAmount(action.text, action.from, said.text); sentence = next === null ? null : { text: next }; }
  else if (action.type === "books-run") {
    const pieces = action.pieces.map(piece => ({ ...piece })); const index = pieces.findIndex(piece => replaceAmount(piece.text, action.candidate, said.text) !== null);
    if (index >= 0 && action.candidate !== undefined) { pieces[index].text = replaceAmount(pieces[index].text, action.candidate, said.text); sentence = { action: { ...action, pieces } }; }
  } else if (action.type === "books-debt") sentence = { action: { ...action, amount: said.amount, currency: said.currency || action.currency || "" } };
  if (!sentence) return undefined;
  await ctx.store.clearSession({ tenantId: ctx.tenantId, userId: ctx.userId });
  const reply = sentence.action ? await confirms[action.type](ctx, sentence.action) : await again(sentence.text);
  return reply || say.failed;
}

module.exports = Object.freeze({ heard, askReread, amountReply, isAmountAsk, parseBareAmount, replaceAmount });
