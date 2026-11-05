"use strict";

// The design a flyer, poster, newsletter, brochure, handout, invitation or promotional email is made in, and the one optional step of putting the person's OWN facts in the right places.
// "Make me a flyer for my bake sale on Saturday at ten at the church hall": the fixed layout (handout-templates.js) cannot tell the day from the place, so one tool-less model call sorts only what was said into fields (headline, when, where, what, cost, contact).
// Nothing is invented: every word the model returns must be a word the person said (or a short, fixed list of joining words), every number must be one the person said, and anything that fails is dropped back to a [bracket].
// If the model fails, or returns nothing usable, the fixed layout is used as it was. With no details beyond a subject and a day there is no model call at all.
//
// designFor(kind) -> "flyer"|"poster"|"newsletter"|"invitation"|"brochure"|"email"
// handoutTail(text) -> what was said after the kind word ("for my bake sale on Saturday at ten at the church hall")
// needsWording(handout) -> true when the person gave more than a subject and a day
// wordingInstructions(kind) / wordingGoal(handout, text) -> the model call
// validateWording(reply, text) -> { headline, subhead, when, where, what, cost, contact, points } (only the facts that passed) | null
// composeFromFacts(handout, facts) -> { title, content }

const { handoutTemplate } = require("./handout-templates.js");

const DESIGN_FOR = Object.freeze({ flyer: "flyer", poster: "poster", newsletter: "newsletter", brochure: "brochure", handout: "brochure", invitation: "invitation", email: "email" });
function designFor(kind) { return DESIGN_FOR[kind] || ""; }

const KIND_WORD = /\b(?:flyer|poster|newsletter|brochure|handout|invitation|(?:promotional|promo|marketing|sales|advertising)\s+e-?mail)\b/i;
function handoutTail(text) {
  const said = String(text || "").trim();
  const match = KIND_WORD.exec(said);
  const tail = match ? said.slice(match.index + match[0].length) : "";
  return tail.replace(/\s+as\s+(?:an?\s+)?(?:pdf|word document|word|docx|markdown|md|text file|txt)\s*[.!?]*$/i, "").trim();
}

const DAY_ONLY = /^(?:(?:this|next)\s+)?(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday|tomorrow|today|tonight|weekend)(?:\s+(?:morning|afternoon|evening|night))?$/i;
const tokensOf = text => String(text || "").toLowerCase().replace(/[’]/g, "'").match(/[a-z0-9]+(?:'[a-z]+)?/g) || [];

// A short subject and a bare day ("for my bake sale on Saturday") is everything the fixed layout can use. A time or a place after the day, or a subject that runs on ("... with news about the roof repair"), is detail to sort.
function needsWording(handout) {
  if (!handout) return false;
  const when = String(handout.when || "").trim().toLowerCase().replace(/^on\s+/, "");
  if (when && !DAY_ONLY.test(when)) return true;
  const subject = String(handout.subject || "").trim();
  return subject.split(/\s+/).filter(Boolean).length > 4 || /\b(?:with|that|including|which|who|where)\b|[,;]/i.test(subject);
}

const WORDING_INSTRUCTIONS = "You sort what a person said they want on a flyer, poster, newsletter, brochure, invitation or email into fields. Reply with ONE JSON object and nothing else, with exactly these keys: "
  + '{"headline":"","subhead":"","when":"","where":"","what":"","cost":"","contact":"","points":[]}. '
  + "Rules: use only words the person said; write \"\" for anything they did not say; never invent a place, time, price, name, phone number, claim or fact; do not add adjectives such as best, fresh, amazing or delicious. "
  + "headline is the short name of the event, business or group in their words (at most 8 words). subhead is \"\" unless they gave a short line to put under the headline. when is the day and time they said, where is the place they said, what is what is happening or for sale, cost is the price they said, contact is how to reach them. "
  + "points is a list of any other facts they gave, each one short and in their words (at most 5). Do not write anything outside the JSON.";
function wordingInstructions() { return WORDING_INSTRUCTIONS; }
function wordingGoal(handout, text) { return `The person asked for a ${handout.kind === "email" ? "promotional email" : handout.kind}. They said: "${String(text || "").slice(0, 600)}"`; }

// words that may appear in a field that the person did not say: joining words and a few plain, factual invitation words. No adjectives, no claims.
const JOINING = new Set(["a", "an", "the", "and", "at", "on", "in", "of", "for", "to", "with", "from", "by", "or", "is", "are", "we", "our", "you", "your", "us", "join", "come", "see", "all", "everyone", "welcome", "please", "there", "here", "it", "its", "this", "that", "will", "be", "open", "to"]);
const MAX = { headline: 60, subhead: 80, when: 80, where: 100, what: 120, cost: 60, contact: 100, point: 140 };

function checked(value, said, max) {
  const text = String(value === undefined || value === null ? "" : value).replace(/\s+/g, " ").trim();
  if (!text || text.length > max || /[\[\]{}<>`]/.test(text) || /^\s*(?:none|n\/a|not given|unknown)\s*$/i.test(text)) return "";
  const allowed = new Set(tokensOf(said));
  for (const word of tokensOf(text)) {
    if (/\d/.test(word)) { if (!allowed.has(word)) return ""; continue; }
    if (!allowed.has(word) && !JOINING.has(word)) return "";
  }
  // currency and other symbols must be the person's own
  for (const symbol of text.match(/[$£€]/g) || []) if (!String(said).includes(symbol)) return "";
  return text;
}

// "What: poster for the community clean-up" (found live on 5 November 2026): the line says what is happening, not what kind of paper this is, so a leading "poster for the" is taken off ("community clean-up"). A line that is only the kind word is dropped.
function withoutKindWord(value) {
  const text = String(value || "").trim();
  return text.replace(/^(?:an?\s+|the\s+|my\s+|our\s+)?(?:flyer|poster|newsletter|brochure|invitation|handout|email)s?(?:\s+(?:for|about|to|of|announcing)\b\s*(?:an?\s+|the\s+|my\s+|our\s+)?|\s*$)/i, "").trim();
}

function validateWording(reply, text) {
  let parsed = reply;
  if (typeof reply === "string") {
    const match = /\{[\s\S]*\}/.exec(reply);
    if (!match) return null;
    try { parsed = JSON.parse(match[0]); } catch { return null; }
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;
  const facts = { headline: checked(parsed.headline, text, MAX.headline), subhead: checked(parsed.subhead, text, MAX.subhead), when: checked(parsed.when, text, MAX.when), where: checked(parsed.where, text, MAX.where),
    what: withoutKindWord(checked(parsed.what, text, MAX.what)), cost: checked(parsed.cost, text, MAX.cost), contact: checked(parsed.contact, text, MAX.contact),
    points: (Array.isArray(parsed.points) ? parsed.points : []).slice(0, 5).map(point => checked(point, text, MAX.point)).filter(Boolean) };
  const useful = facts.headline || facts.when || facts.where || facts.what || facts.cost || facts.contact || facts.points.length;
  return useful ? facts : null;
}

const swap = (content, pattern, value) => value ? content.replace(pattern, () => value) : content;

// the fixed layout, with each fact that was given put where its [bracket] was
function composeFromFacts(handout, facts) {
  const subject = facts.headline || handout.subject || "";
  const when = facts.when || handout.when || "";
  const made = handoutTemplate({ kind: handout.kind, subject, when });
  let content = made.content;
  content = swap(content, /\[the place(?:, or the web page)?\]/, facts.where);
  content = swap(content, /\[what is happening, or what is for sale\]/, facts.what);
  content = swap(content, /\[the price, or free\]/, facts.cost);
  content = swap(content, /\[name and phone number\]|\[phone, email or address\]|\[name, phone, email or address(?:, and hours)?\]/, facts.contact);
  const points = facts.points || [];
  if (handout.kind === "email") content = swap(content, /\[what you are offering[^\]]*\]/, facts.what || points[0]);
  if (handout.kind === "newsletter") {
    content = swap(content, /\[a few sentences to greet your readers\]/, facts.subhead);
    content = swap(content, /\[what has happened since the last issue\]/, points.join("\n- ").replace(/^/, points.length ? "- " : ""));
    content = swap(content, /\[dates, times and places\]/, when ? `${when}${facts.where ? ` - ${facts.where}` : ""}` : "");
  } else if (handout.kind === "brochure") {
    content = swap(content, /\[who you are, in a few sentences\]/, facts.subhead);
    content = swap(content, /\[the main things you do or sell\]/, points.length ? points.map(point => `- ${point}`).join("\n") : facts.what);
  } else if (handout.kind === "handout") {
    points.forEach((point, index) => { content = content.replace(new RegExp(`^${index + 1}\\. \\[[^\\]]*\\]$`, "m"), () => `${index + 1}. ${point}`); });
  } else if (facts.subhead && ["flyer", "poster", "invitation"].includes(handout.kind)) {
    // straight under the headline, with no blank line between, is how the design finds the sub-heading
    const lines = content.split("\n"); const index = lines.findIndex(line => line.trim() && !/^YOU ARE INVITED$/i.test(line.trim()) && !/^Subject:/i.test(line.trim()));
    if (index >= 0) lines.splice(index + 1, 0, facts.subhead);
    content = lines.join("\n");
  }
  return { title: made.title, content };
}

module.exports = Object.freeze({ designFor, handoutTail, needsWording, wordingInstructions, wordingGoal, validateWording, composeFromFacts });
