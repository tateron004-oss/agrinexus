"use strict";

// What Kyro learns about a person from what they plainly say about themselves, and how they take it back.
//
// Deliberately narrow and deterministic (patterns, not guesses): a name, where they are, what they grow, what livestock they keep,
// and the language they prefer. Nothing about health, money, other people or anything Kyro merely infers is ever a "fact" here.
// A statement is only recognized when it is a plain declarative sentence, so a question or a request is never mistaken for one.
const KINDS = Object.freeze(["name", "location", "crops", "livestock", "language"]);

const NOT_A_NAME = new Set(["fine", "good", "well", "great", "ok", "okay", "sure", "sorry", "tired", "hungry", "sick", "ill", "happy", "sad", "here", "there", "back", "ready", "busy", "late", "new", "old",
  "kenyan", "african", "farmer", "student", "nexus", "kyro", "not", "just", "from", "in", "at", "on", "the", "a", "an", "also", "still", "very", "so", "trying", "looking", "wondering", "going", "coming", "working"]);
const NOT_A_PLACE = new Set(["a", "an", "the", "my", "our", "your", "this", "that", "here", "there", "home", "house", "town", "village", "city", "country", "countryside", "area", "place", "farm", "field", "garden", "shop", "office", "bed", "trouble", "need", "love", "doubt", "charge", "general"]);
const NOT_A_CROP = new Set(["a", "an", "the", "my", "some", "many", "few", "crops", "crop", "things", "thing", "food", "plants", "plant", "stuff", "it", "them", "that", "this", "everything", "anything", "nothing", "well", "here", "there", "own", "land", "farm", "living"]);
const LIVESTOCK = ["cows", "cattle", "goats", "sheep", "pigs", "chickens", "hens", "ducks", "turkeys", "rabbits", "bees", "donkeys", "camels", "cow", "goat", "pig", "chicken", "hen", "duck", "turkey", "rabbit", "donkey", "camel", "beehives", "hives"];
const LANGUAGES = { swahili: "Swahili", kiswahili: "Swahili", english: "English", french: "French", hausa: "Hausa", yoruba: "Yoruba", igbo: "Igbo", amharic: "Amharic", luganda: "Luganda", kinyarwanda: "Kinyarwanda",
  somali: "Somali", zulu: "Zulu", xhosa: "Xhosa", arabic: "Arabic", portuguese: "Portuguese", kikuyu: "Kikuyu", luo: "Luo", kalenjin: "Kalenjin", lingala: "Lingala", shona: "Shona", twi: "Twi" };
const QUESTION_OPENER = /^(?:what|which|who|whom|whose|when|where|why|how|can|could|would|should|will|shall|do|does|did|is|are|am|was|were|have|has|tell|show|find|give|make|send|call|text|email|remind|set|add|create|play|open|list|help)\b/i;

const clean = value => String(value ?? "").replace(/\s+/g, " ").trim();
const titleCase = value => value.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
const WORD = "[A-Za-z][A-Za-z'’-]{1,24}";

function properName(raw, banned) {
  const words = clean(raw).replace(/[.!,;:]+$/, "").split(" ").filter(Boolean);
  if (!words.length || words.length > 2) return "";
  if (words.some(word => !new RegExp(`^${WORD}$`).test(word) || banned.has(word.toLowerCase()))) return "";
  return titleCase(words.join(" "));
}

function listOf(raw, banned, max = 6) {
  const items = clean(raw).replace(/[.!;:]+$/, "").split(/\s*(?:,|&|\band\b|\bplus\b)\s*/i).map(item => clean(item).toLowerCase()).filter(Boolean);
  if (!items.length || items.length > max) return [];
  const words = items.map(item => item.replace(/^(?:some|a few|lots of|mostly|mainly)\s+/, ""));
  return words.every(item => new RegExp(`^${WORD}(?: ${WORD})?$`).test(item) && !banned.has(item) && !item.split(" ").some(part => banned.has(part))) ? words : [];
}

// Every fact stated in a plain sentence about the speaker, as [{ kind, value }] (at most one per kind). Empty for questions, requests,
// long text, or anything that does not match a known pattern.
function extractProfileStatement(text) {
  const original = clean(text);
  // "Call me Otieno" is a statement about a name; every other opener that starts with "call" (or any command word) is a request.
  if (!original || original.length > 220 || /[?]/.test(original) || (QUESTION_OPENER.test(original) && !/^call me\b/i.test(original))) return [];
  const facts = new Map(); const add = (kind, value) => { if (value && !facts.has(kind)) facts.set(kind, value); };
  const sentence = original.replace(/^(?:hello|hi|hey|ok|okay|so|well)[,!.\s]+/i, "");

  const named = /\b(?:my name is|my name's|call me|you can call me|people call me)\s+([^,.!]+?)(?=\s+(?:and|but|i|we)\b|[,.!]|$)/i.exec(sentence)?.[1] || /^I(?:'m| am|’m)\s+([A-Z][A-Za-z'’-]+(?: [A-Z][A-Za-z'’-]+)?)[.!]*$/.exec(sentence)?.[1];
  if (named) add("name", properName(named, NOT_A_NAME));

  const where = /\b(?:i live in|i'm based in|i am based in|i’m based in|we live in|my farm is (?:in|near)|our farm is (?:in|near)|i farm in|we farm in|i'm farming in|i am farming in)\s+([^,.!]+?)(?=\s+(?:and|but|where|because)\b|[,.!]|$)/i.exec(sentence)?.[1]
    || /\b(?:grow|farm|plant|cultivate|raise|keep)\b[^.!]*?\s(?:in|near)\s+([^,.!]+?)(?=\s+(?:and|but|where|because)\b|[,.!]|$)/i.exec(sentence)?.[1];
  if (where) add("location", properName(where, NOT_A_PLACE));

  const grows = /\b(?:i|we)\s+(?:mainly |mostly |also )?(?:grow|farm|plant|cultivate)\s+(.+?)(?=\s+(?:in|near|on|at)\s|[.!]|$)/i.exec(sentence)?.[1];
  if (grows && !/^(?:in|near|on|at)\b/i.test(grows)) { const crops = listOf(grows, NOT_A_CROP); if (crops.length) add("crops", crops.join(", ")); }
  const mine = /\bmy crops? (?:are|is)\s+(.+?)[.!]*$/i.exec(sentence)?.[1];
  if (mine) { const crops = listOf(mine, NOT_A_CROP); if (crops.length) add("crops", crops.join(", ")); }

  if (/\b(?:i|we)\s+(?:also |mainly )?(?:keep|raise|own|have)\b/i.test(sentence) || /\bmy livestock (?:is|are)\b/i.test(sentence)) {
    const found = [];
    for (const match of sentence.matchAll(new RegExp(`(?:(\\d{1,5})\\s+)?\\b(${LIVESTOCK.join("|")})\\b`, "gi"))) found.push(`${match[1] ? `${match[1]} ` : ""}${match[2].toLowerCase()}`);
    if (found.length && found.length <= 6) add("livestock", found.join(", "));
  }

  const spoken = new RegExp(`\\b(?:i speak|i prefer|my language is|speak to me in|talk to me in|reply in|answer in|respond in|write to me in)\\s+(${Object.keys(LANGUAGES).join("|")})\\b`, "i").exec(sentence)?.[1];
  if (spoken) add("language", LANGUAGES[spoken.toLowerCase()]);

  return [...facts].map(([kind, value]) => ({ kind, value }));
}

// "forget that", "forget my location", "forget everything about me": what to take back. kind is "last", one of KINDS, or "all".
function extractForgetRequest(text) {
  const t = clean(text).toLowerCase().replace(/[.!]+$/, "");
  if (!t || t.length > 80) return null;
  if (/^(?:please )?(?:forget|delete|remove|erase) (?:everything|all)(?: (?:you (?:know|remember|saved|have)|about me|that you know))?(?: about me)?$/.test(t)) return { kind: "all" };
  if (/^(?:please )?(?:forget|delete|remove|erase) (?:that|this|it)$/.test(t) || /^(?:please )?(?:forget|delete|remove|erase) what i (?:just )?(?:said|told you)$/.test(t)) return { kind: "last" };
  const named = /^(?:please )?(?:forget|delete|remove|erase) (?:my|the|what you know about my)\s+(name|location|town|place|city|region|crops?|livestock|animals|language)$/.exec(t)?.[1];
  if (!named) return null;
  const kind = { name: "name", location: "location", town: "location", place: "location", city: "location", region: "location", crop: "crops", crops: "crops", livestock: "livestock", animals: "livestock", language: "language" }[named];
  return kind ? { kind } : null;
}

// How a saved fact reads back to the person.
function describeFact({ kind, value }) {
  return { name: `your name is ${value}`, location: `you are in ${value}`, crops: `you grow ${value}`, livestock: `you keep ${value}`, language: `you prefer ${value}` }[kind] || "";
}
const sentenceFor = fact => { const text = describeFact(fact); return text ? `${text.charAt(0).toUpperCase()}${text.slice(1)}.` : ""; };
const isFact = content => Boolean(content && typeof content === "object" && KINDS.includes(content.kind) && typeof content.value === "string" && content.value);

function joinPhrases(items) { return items.length > 1 ? `${items.slice(0, -1).join(", ")} and ${items.at(-1)}` : items[0] || ""; }

// The sentence Kyro says whenever it saves something, so the person always knows and always knows how to undo it.
function savedNotice(facts, replaced = []) {
  const said = joinPhrases(facts.map(describeFact).filter(Boolean));
  const swapped = replaced.length ? ` This replaces what I had before.` : "";
  return `Got it. I'll remember that ${said}.${swapped} Say "forget that" any time, or ask "what do you know about me?"`;
}
function forgottenNotice(facts) {
  const said = joinPhrases(facts.map(describeFact).filter(Boolean));
  return said ? `Done. I've forgotten that ${said}.` : "I don't have that saved, so there is nothing to forget.";
}

module.exports = Object.freeze({ KINDS, extractProfileStatement, extractForgetRequest, describeFact, sentenceFor, isFact, savedNotice, forgottenNotice });
