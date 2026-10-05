"use strict";

// What Kyro learns about a person from what they plainly say about themselves, and how they take it back.
//
// Deliberately narrow and deterministic (patterns, not guesses): a name, where they are, what they grow, what livestock they keep,
// the language they prefer, how big their farm is, and what work they do. Nothing about health, money, other people or anything Kyro merely infers is ever a "fact" here.
// A statement is only recognized when it is a plain declarative sentence, so a question or a request is never mistaken for one.
const KINDS = Object.freeze(["name", "location", "crops", "livestock", "language", "farmSize", "work"]);
const { normalizeSpokenText } = require("../i18n/spoken-input.js");
// The kinds of work people plainly say they do. Only these: "I am a bit tired" or "I'm a fan" must never become a job.
const WORKS = ["farmer", "trader", "teacher", "nurse", "driver", "student", "shopkeeper", "mechanic", "tailor", "carpenter", "vet", "veterinarian", "agronomist", "fisherman", "beekeeper", "butcher", "miller", "extension officer", "health worker", "community health worker", "midwife", "builder", "welder", "cook", "chef", "baker", "pastor", "retired"];

const NOT_A_NAME = new Set(["fine", "good", "well", "great", "ok", "okay", "sure", "sorry", "tired", "hungry", "sick", "ill", "happy", "sad", "here", "there", "back", "ready", "busy", "late", "new", "old",
  "kenyan", "african", "farmer", "student", "nexus", "kyro", "not", "just", "from", "in", "at", "on", "the", "a", "an", "also", "still", "very", "so", "trying", "looking", "wondering", "going", "coming", "working"]);
const NOT_A_PLACE = new Set(["a", "an", "the", "my", "our", "your", "this", "that", "here", "there", "home", "house", "town", "village", "city", "country", "countryside", "area", "place", "farm", "field", "garden", "shop", "office", "bed", "trouble", "need", "love", "doubt", "charge", "general", "size", "total", "all", "school", "class", "church", "hospital", "touch", "love",
  "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday",
  "spring", "summer", "autumn", "winter", "season", "seasons", "rain", "rains", "dry", "wet", "today", "tomorrow", "yesterday", "morning", "evening", "night", "week", "month", "year", "time", "future", "past"]);
const NOT_A_CROP = new Set(["a", "an", "the", "my", "some", "many", "few", "crops", "crop", "things", "thing", "food", "plants", "plant", "stuff", "it", "them", "that", "this", "everything", "anything", "nothing", "well", "here", "there", "own", "land", "farm", "living"]);
const LIVESTOCK = ["cows", "cattle", "goats", "sheep", "pigs", "chickens", "hens", "ducks", "turkeys", "rabbits", "bees", "donkeys", "camels", "cow", "goat", "pig", "chicken", "hen", "duck", "turkey", "rabbit", "donkey", "camel", "beehives", "hives"];
const LANGUAGES = { swahili: "Swahili", kiswahili: "Swahili", english: "English", french: "French", hausa: "Hausa", yoruba: "Yoruba", igbo: "Igbo", amharic: "Amharic", luganda: "Luganda", kinyarwanda: "Kinyarwanda",
  somali: "Somali", zulu: "Zulu", xhosa: "Xhosa", arabic: "Arabic", portuguese: "Portuguese", kikuyu: "Kikuyu", luo: "Luo", kalenjin: "Kalenjin", lingala: "Lingala", shona: "Shona", twi: "Twi" };
const QUESTION_OPENER = /^(?:what|which|who|whom|whose|when|where|why|how|can|could|would|should|will|shall|do|does|did|is|are|am|was|were|have|has|tell|show|find|give|make|send|call|text|email|remind|set|add|create|play|open|list|help)\b/i;

const ASKS_FOR_SOMETHING = /\b(?:remind(?:er)?|how (?:much|many|do|can|to|long|often)|what|why|can you|could you|would you|will you|i need|i want|i'd like|i would like|tell me|show me|help me|find|calculate|schedule|plan|call|text|send|set up|add|create|open|play|price|prices|cost|dose|should i|do i|must i)\b/i;
// What may follow a stated size or kind of work: the end of the sentence or the next clause, not more words that change the meaning
// ("5 acres of problems", "a farmer no more", "a farmer's son", "Farmer John", "a student of life").
const CLAUSE_END = "(?=\\s*$|\\s*[,.!;]|\\s+(?:and|but|in|near|at|from|here|now|too|also|by|since|who|with|for|where)\\b)";

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
  // A statement that also asks for something ("I am a farmer, please remind me to water the maize at 6pm", "I have 5 acres, how much fertilizer do I need") is a
  // request first: nothing is saved from it, so the request is carried out and the fact can be said again on its own.
  if (ASKS_FOR_SOMETHING.test(original.replace(/\b(?:you can |people )?call me\b/gi, " "))) return [];
  const facts = new Map(); const add = (kind, value) => { if (value && !facts.has(kind)) facts.set(kind, value); };
  const sentence = original.replace(/^(?:hello|hi|hey|ok|okay|so|well)[,!.\s]+/i, "");

  const named = /\b(?:my name is|my name's|call me|you can call me|people call me)\s+([^,.!]+?)(?=\s+(?:and|but|i|we)\b|[,.!]|$)/i.exec(sentence)?.[1] || /^I(?:'m| am|’m)\s+([A-Z][A-Za-z'’-]+(?: [A-Z][A-Za-z'’-]+)?)[.!]*$/.exec(sentence)?.[1];
  if (named) add("name", properName(named, NOT_A_NAME));

  const where = /\b(?:i live in|i live near|we live near|i live close to|we live close to|i stay in|i stay near|we stay in|i'm based in|i am based in|i’m based in|we live in|my farm is (?:in|near)|our farm is (?:in|near)|i farm in|we farm in|i'm farming in|i am farming in)\s+([^,.!]+?)(?=\s+(?:and|but|where|because)\b|[,.!]|$)/i.exec(sentence)?.[1]
    || /\b(?:grow|farm|plant|cultivate|raise|keep)\b[^.!]*?\s(?:in|near)\s+([^,.!]+?)(?=\s+(?:and|but|where|because)\b|[,.!]|$)/i.exec(sentence)?.[1];
  if (where) add("location", properName(where, NOT_A_PLACE));
  // "I am from Nakuru", "I come from Kitale": only when the place is written as a name (capital letter), so "I come from work" or "I am from the market" is not a place.
  const origin = /\b(?:[Ii] come from|[Ww]e come from|[Ii] am from|[Ii]'m from|[Ii]’m from)\s+([A-Z][A-Za-z'’-]*(?: [A-Z][A-Za-z'’-]*)?)(?=\s+(?:and|but|where|because)\b|[,.!]|$)/.exec(sentence)?.[1];
  if (origin) add("location", properName(origin, NOT_A_PLACE));

  const grows = /\b(?:i|we)\s+(?:mainly |mostly |also )?(?:grow|farm|plant|cultivate)\s+(.+?)(?=\s+(?:in|near|on|at)\s|[.!]|$)/i.exec(sentence)?.[1];
  if (grows && !/^(?:in|near|on|at)\b/i.test(grows)) { const crops = listOf(grows, NOT_A_CROP); if (crops.length) add("crops", crops.join(", ")); }
  const mine = /\bmy crops? (?:are|is)\s+(.+?)[.!]*$/i.exec(sentence)?.[1];
  if (mine) { const crops = listOf(mine, NOT_A_CROP); if (crops.length) add("crops", crops.join(", ")); }

  if (/\b(?:i|we)\s+(?:also |mainly )?(?:keep|raise|own|have)\b/i.test(sentence) || /\bmy livestock (?:is|are)\b/i.test(sentence)) {
    const found = [];
    for (const match of sentence.matchAll(new RegExp(`(?:(\\d{1,5})\\s+)?\\b(${LIVESTOCK.join("|")})\\b`, "gi"))) found.push(`${match[1] ? `${match[1]} ` : ""}${match[2].toLowerCase()}`);
    if (found.length && found.length <= 6) add("livestock", found.join(", "));
  }

  // "I have 5 acres", "my farm is about 2 hectares", "we farm three acres": the size of the farm, as said.
  const sizeSentence = normalizeSpokenText(sentence);
  const size = new RegExp(`\\b(?:(?:i|we) (?:have|own|farm|cultivate|manage|work)|my (?:farm|land|shamba|plot|holding) is|our (?:farm|land|shamba|plot|holding) is)\\s+(?:about |around |roughly |over |almost |nearly |only |just )?(\\d+(?:\\.\\d+)?)\\s*(acres?|hectares?|ha)\\b(?:\\s+of (?:land|farmland|farm|shamba))?(?:\\s+in (?:size|total))?${CLAUSE_END}`, "i").exec(sizeSentence);
  if (size && Number(size[1]) > 0 && Number(size[1]) <= 100000) {
    const unit = /^ha/i.test(size[2]) ? "hectares" : /^hectare/i.test(size[2]) ? "hectares" : "acres";
    const count = Number(size[1]);
    add("farmSize", `${count} ${count === 1 ? unit.replace(/s$/, "") : unit}`);
  }
  // "I am a farmer", "I work as a nurse", "my job is teaching" (not: only the listed kinds of work).
  const work = new RegExp(`\\b(?:i am|i'm|i’m|i work as|my job is|my work is|by profession i am)\\s+(?:an? |the )?(${WORKS.join("|")})${CLAUSE_END}`, "i").exec(sentence)?.[1];
  if (work) add("work", work.toLowerCase());

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
  // "forget that I keep chickens": the fact said again; the kind of fact it is is what is taken back (everything of that kind: goats and chickens are one fact).
  const sayAgain = /^(?:please )?(?:forget|delete|remove|erase) (?:that )?(i(?:'m| am| keep| raise| own| have| grow| farm| live| work| speak| prefer| stay| cultivate)\b.+)$/.exec(t)?.[1];
  if (sayAgain) { const again = extractProfileStatement(sayAgain.replace(/^i'm\b/, "i am")); if (again.length) return { kind: again[0].kind }; }
  const named = /^(?:please )?(?:forget|delete|remove|erase) (?:my|the|what you know about my)\s+(name|location|town|place|city|region|crops?|livestock|animals|language|farm size|size of my farm|land size|work|job|occupation|profession)$/.exec(t)?.[1];
  if (!named) return null;
  const kind = { name: "name", location: "location", town: "location", place: "location", city: "location", region: "location", crop: "crops", crops: "crops", livestock: "livestock", animals: "livestock", language: "language", "farm size": "farmSize", "size of my farm": "farmSize", "land size": "farmSize", work: "work", job: "work", occupation: "work", profession: "work" }[named];
  return kind ? { kind } : null;
}

// How a saved fact reads back to the person.
function describeFact({ kind, value }) {
  return { name: `your name is ${value}`, location: `you are in ${value}`, crops: `you grow ${value}`, livestock: `you keep ${value}`, language: `you prefer ${value}`, farmSize: `your farm is ${value}`, work: `you work as ${/^[aeiou]/i.test(value) ? "an" : "a"} ${value}` }[kind] || "";
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
