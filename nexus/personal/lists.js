"use strict";

// Reading what a person says about their lists -- the shopping list, the to-do list, and lists with a name of their own ("my packing list") -- in English, Kiswahili
// and the way the two are mixed. Kept apart from items.js so the many ways of saying "put milk on the list" live in one place.
//
//   readListRequest(text) -> { action, list, ... } | null        (list: "shopping" | "todo" | "<own name>" | null when the person only said "the list")
//
// Nothing here guesses. A request that is not plainly about a list is left alone (null) for the readers that follow, and a list whose name is one of Kyro's other things
// (reminders, calendar, contacts, notes...) is never taken as a list.

const clean = value => String(value ?? "").replace(/\s+/g, " ").trim();
const MAX_LIST_ITEMS_AT_ONCE = 20;
const MAX_ITEM_WORDS = 14;

// ---- naming a list ----
const KIND_SHOPPING = "(?:shop(?:p?ing)?|grocer(?:y|ies)|market|manunuzi|ununuzi|buy(?:ing)?)";
const KIND_TODO = "(?:to[ -]?do|todo|tasks?|chores?|kazi)";
const KIND = `(?:${KIND_SHOPPING}|${KIND_TODO})`;
const DET = "(?:(?:my|the|our|your|yangu|wangu|ya|za)\\s+)*";
const LIST_NOUN = "(?:lists?|orodha)";
const NAMED = "[a-z][a-z'-]*(?:\\s+[a-z][a-z'-]*){0,2}";
const POST = "(?:\\s+(?:yangu|wangu))?";
// "my shopping list" / "shopping list yangu" / "to-do" / "orodha yangu ya manunuzi" / "my packing list" / "the list"
const LREF = `(?:orodha\\s+${DET}${KIND}${POST}|${DET}${KIND}(?:\\s+${LIST_NOUN})?${POST}|${DET}${NAMED}\\s+${LIST_NOUN}${POST}|${DET}${LIST_NOUN}${POST})`;
// Words that make a "list" something else: Kyro's other features keep these.
const RESERVED = new Set(["reminder", "reminders", "calendar", "schedule", "diary", "contact", "contacts", "note", "notes", "mailing", "email", "phone", "call", "calls", "message", "messages", "event", "events", "appointment", "appointments", "address", "name", "names", "wallet", "order", "orders", "invoice", "invoices", "patient", "patients", "customer", "customers", "playlist", "music", "song", "songs", "weather", "market price", "price", "prices", "blacklist", "black", "white", "waiting", "mail", "inbox", "unread", "recent", "full", "whole", "entire", "complete", "completed", "done", "finished", "all"]);
const STOP_FIRST = new Set(["what", "whats", "what's", "which", "who", "how", "when", "where", "why", "this", "that", "these", "those", "a", "an", "some", "any", "every", "each", "me", "i", "you", "it", "to", "on", "in", "of", "for", "and", "or", "but", "if", "is", "are", "my", "the", "our", "your", "their", "his", "her", "its", "no", "not"]);

// "my shopping list" -> { list: "shopping" } | "to-do" -> { list: "todo" } | "my packing list" -> { list: "packing" } | "the list" -> { list: null } | a reserved/odd name -> null
function parseListRef(raw) {
  const words = clean(raw).toLowerCase().replace(/['’]s\b/g, "s").split(" ").filter(Boolean)
    .filter(word => !["my", "the", "our", "your", "yangu", "wangu", "ya", "za", "orodha"].includes(word));
  const withoutNoun = words.filter(word => !/^lists?$/.test(word));
  if (!withoutNoun.length) return { list: null };
  const name = withoutNoun.join(" ");
  if (new RegExp(`^${KIND_SHOPPING}$`).test(name)) return { list: "shopping" };
  if (new RegExp(`^${KIND_TODO}$`).test(name)) return { list: "todo" };
  if (withoutNoun.length > 3 || name.length > 30 || /\d/.test(name) || STOP_FIRST.has(withoutNoun[0]) || withoutNoun.some(word => RESERVED.has(word)) || RESERVED.has(name)) return null;
  // a name needs the word "list" (or "orodha") said; "to my farm" is not a list
  if (!words.some(word => /^lists?$/.test(word)) && !/orodha/i.test(raw)) return null;
  return { list: name };
}
const nounOf = (list, sw = false) => {
  if (sw) return list === "shopping" ? "orodha ya manunuzi" : list === "todo" ? "orodha ya kazi" : `orodha ya ${list}`;
  return list === "shopping" ? "shopping list" : list === "todo" ? "to-do list" : `${list} list`;
};

// ---- splitting "milk, eggs and bread" into separate things ----
const NUMBER_WORD = /^(?:\d+(?:[.,]\d+)?|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|half|moja|mbili|tatu|nne|tano)$/i;
const ACTION_VERBS = "fix|buy|call|pay|clean|check|send|book|visit|pick|water|feed|plant|harvest|repair|collect|take|bring|get|make|finish|write|order|sell|renew|wash|cook|paint|clear|weed|spray|prune|dip|vaccinate|text|email|remind|see|meet|go|ask|tell|buy|nunua|piga|lipa|safisha|kagua|tuma|pelekea|nenda|angalia|rekebisha|panda|vuna|mwagilia";
function splitListItems(value, list = "shopping") {
  const source = clean(value).replace(/[.!]+$/, "");
  if (!source) return [];
  const pieces = [];
  for (const segment of source.split(/\s*(?:,|;|&|\+|\bplus\b)\s*/i)) {
    if (!segment) continue;
    // "milk and eggs" -> two things. For a to-do list only when what follows "and" is another job ("fix the gate and buy paint"): "call mum and dad" is one.
    // Never inside a quantity ("two and a half kilos of sugar").
    const parts = segment.split(/\s+(?:and|na)\s+/i);
    const merged = [];
    for (const part of parts) {
      const last = merged.length ? merged[merged.length - 1] : null;
      const joinBack = last !== null && (NUMBER_WORD.test(last) || /^(?:a half|half|a quarter|quarter|a third)\b/i.test(part) || (list !== "shopping" && !new RegExp(`^(?:${ACTION_VERBS})\\b`, "i").test(part)));
      if (joinBack) merged[merged.length - 1] = `${last} and ${part}`; else merged.push(part);
    }
    pieces.push(...merged);
  }
  const seen = new Set();
  const items = [];
  for (const piece of pieces) {
    const item = clean(piece).replace(/^(?:and|na|also|some|a|an|the|more|pia|na pia)\s+/i, "").replace(/^["'“”‘’]+|["'“”‘’]+$/g, "").trim();
    if (!item || item.split(" ").length > MAX_ITEM_WORDS || !/[\p{L}\p{N}]/u.test(item)) continue;
    const key = item.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key); items.push(item);
  }
  return items.slice(0, MAX_LIST_ITEMS_AT_ONCE);
}

// ---- reading a request ----
const VERB_ADD = "(?:add|put|place|include|pop|stick|keep|weka|ongeza|andika|ingiza|tia)";
const PREP = "(?:to|on|onto|in|into|at|kwenye|katika|kwa|ktk|kwny|ndani ya)";
const addRequest = (itemsText, ref, sw, extra = {}) => {
  const where = parseListRef(ref);
  if (!where) return null;
  const items = splitListItems(itemsText, where.list || "shopping");
  if (!items.length) return null;
  return items.length === 1 ? { action: "todo-add", list: where.list, text: items[0], sw, ...extra } : { action: "todo-add-many", list: where.list, items, sw, ...extra };
};
const SW_VERBS = /^(?:weka|ongeza|andika|ingiza|tia|ondoa|futa|toa|nisomee|onyesha|nionyeshe|soma|angalia|nimenunua|nimemaliza|alama|safisha)\b/i;
const looksSwahili = text => SW_VERBS.test(text) || /\b(?:orodha|manunuzi|kwenye|katika|yangu|kazi)\b/i.test(text);

function readListRequest(text) {
  const t = clean(text).replace(/[’]/g, "'");
  if (!t) return null;
  const lower = t.toLowerCase().replace(/[.!?]+$/g, "");
  const sw = looksSwahili(lower);
  let m;
  const lref = `(${LREF})`;

  // "write down milk on the shopping list" / "jot down eggs in my shopping list": a list, not a note
  if ((m = new RegExp(`^(?:please )?(?:write|jot|note|put|type|list|scribble)(?: this| that| it)? down[:,]?\\s+(.+?)\\s+${PREP}\\s+${lref}$`, "i").exec(t))) { const r = addRequest(m[1], m[2], sw); if (r) return r; }
  // "add milk to my shopping list" / "put it on the list" / "weka maziwa kwenye orodha yangu ya manunuzi" / "weka milk kwa shopping list yangu"
  if ((m = new RegExp(`^(?:please )?${VERB_ADD}\\s+(.+?)\\s+${PREP}\\s+${lref}$`, "i").exec(t))) { const r = addRequest(m[1], m[2], sw); if (r) return r; }
  // "add to my shopping list: milk, eggs" / "weka kwenye orodha ya manunuzi: maziwa"
  if ((m = new RegExp(`^(?:please )?${VERB_ADD}\\s+${PREP}\\s+${lref}[:,]?\\s+(.+)$`, "i").exec(t))) { const r = addRequest(m[2], m[1], sw); if (r) return r; }
  // "I need to buy fertilizer, put it on my list" -- the thing to keep comes first
  if ((m = new RegExp(`^(?:i need to|i have to|i must|i want to|i should|nahitaji kununua|nataka kununua)\\s+(.+?)[,.]?\\s+(?:and |then |na )?(?:please )?(?:put|add|weka|ongeza) (?:it|that|this|hiyo|hii) ${PREP}\\s+${lref}$`, "i").exec(t))) { const r = addRequest(m[1], m[2], sw); if (r) return r; }
  // "make a shopping list with milk, eggs and bread" / "start a to-do list: fix the gate, buy seed"
  if ((m = new RegExp(`^(?:please )?(?:make|create|start|set up|write|build|prepare)\\s+(?:me\\s+)?(?:a new |new |another |a |an |my |the )?(${KIND}|${NAMED})\\s+list\\s*(?:with|including|containing|of|:)\\s*:?\\s*(.+)$`, "i").exec(t))) {
    const where = parseListRef(`${m[1]} list`);
    if (where && where.list) { const items = splitListItems(m[2], where.list); if (items.length) return { action: "todo-add-many", list: where.list, items, sw: false }; }
  }
  // "todo: fix the gate" / "to-do fix the gate" / "shopping: milk, eggs"
  if ((m = /^(to[ -]?do|todo)(?:\s+list)?[:,]?\s+(.+)$/i.exec(t)) && !/^(?:is|are|was|for|list)\b/i.test(m[2])) { const r = addRequest(m[2], "to-do list", false); if (r) return r; }
  if ((m = /^(?:shopping|grocery|groceries)(?:\s+list)?:\s+(.+)$/i.exec(t))) { const r = addRequest(m[1], "shopping list", false); if (r) return r; }

  // reading it back
  const READ_VERB = "(?:what(?:'s| is| are| do i have| have i got)|show|read|list|tell|give|let me hear|check|open|display|nisomee|onyesha|nionyeshe|soma|angalia|nipe)";
  if ((m = new RegExp(`^(?:please )?(?:${READ_VERB})(?: me)?(?: (?:what(?:'s| is| are)|everything|all|the items|the things))*(?: (?:on|in|left on|remaining on|kwenye|katika))?(?: all)?(?: of)? ${lref}$`, "i").exec(lower)) ||
      (m = new RegExp(`^(?:what(?:'s| is| do i have| have i got| else is)) ?(?:on |in |left on )?${lref}$`, "i").exec(lower)) ||
      (m = new RegExp(`^${lref}\\s+(?:ina nini|ina vitu gani|iko vipi|inasema nini|ni ipi|ina)$`, "i").exec(lower)) ||
      (m = new RegExp(`^(?:nina nini|kuna nini|nina vitu gani) (?:kwenye|katika) ${lref}$`, "i").exec(lower))) {
    const where = parseListRef(m[1]);
    if (where) return { action: "todo-list", list: where.list, sw };
  }
  // the name alone: "shopping list" / "my to-do list"
  if ((m = new RegExp(`^(?:my |the )?(${KIND})(?: lists?)$`, "i").exec(lower))) { const where = parseListRef(`${m[1]} list`); if (where) return { action: "todo-list", list: where.list, sw }; }
  if (/^what (?:do i|should i|must i|else do i|else should i) (?:still )?(?:need|have|want) to (?:buy|get|pick up|purchase)(?: today| tomorrow| now)?$/i.test(lower)) return { action: "todo-list", list: "shopping", sw: false };
  if (/^what (?:do i have|have i got|is left|is there|else is there|is there left) to do(?: today| now)?$/i.test(lower)) return { action: "todo-list", list: "todo", sw: false };
  if (/^(?:what|which) lists do i have$/i.test(lower) || /^(?:show|list|read) (?:me )?my lists$/i.test(lower) || /^(?:nina|nionyeshe) orodha (?:gani|zangu)$/i.test(lower)) return { action: "lists-overview", sw };

  // finishing and removing
  if ((m = new RegExp(`^(?:please )?(?:mark|tick off|tick|check off|cross off|weka alama)\\s+(.+?)\\s+(?:as |off )?(?:done|complete|completed|finished|imekamilika)(?: ${PREP} ${lref})?$`, "i").exec(t))) {
    const where = m[2] ? parseListRef(m[2]) : { list: null };
    if (where) return { action: "todo-done", query: clean(m[1]), list: where.list, sure: true, sw };
  }
  if ((m = new RegExp(`^(?:please )?(?:tick off|tick|check off|cross off)\\s+(.+?)(?: ${PREP} ${lref}| from ${lref})?$`, "i").exec(t)) && !/\b(?:done|complete|finished)$/i.test(m[1])) {
    const where = m[2] || m[3] ? parseListRef(m[2] || m[3]) : { list: null };
    if (where) return { action: "todo-done", query: clean(m[1]), list: where.list, sure: true, sw };
  }
  if ((m = /^(?:i(?:'ve| have)?\s+)?(?:just )?(?:finished|completed|done with|bought|got|picked up|nimemaliza|nimenunua)\s+(.+)$/i.exec(t))) return { action: "todo-done", query: clean(m[1]), list: null, sure: false, sw };
  if ((m = new RegExp(`^(?:please )?(?:remove|delete|take|cross|scratch|drop|ondoa|futa|toa)\\s+(.+?)\\s+(?:from|off|out of|kwenye|katika|kutoka|toka)\\s+${lref}$`, "i").exec(t))) {
    const where = parseListRef(m[2]);
    if (where) return { action: "todo-remove", list: where.list, query: clean(m[1]), sw };
  }
  if ((m = new RegExp(`^(?:please )?(?:remove|delete|drop|ondoa|futa|toa)\\s+(?:the |some )?([\\p{L}][\\p{L}' -]{0,40})$`, "iu").exec(t)) && !/\b(?:contact|note|notes|reminder|reminders|event|calendar|account|data|everything|all|memory|history|photo|file|document)\b/i.test(m[1]))
    return { action: "todo-remove", list: null, query: clean(m[1]), sw, bare: true };

  // clearing: finished items, or everything (asked about first)
  if ((m = new RegExp(`^(?:please )?(?:clear|remove|delete|futa|ondoa) (?:all )?(?:my |the )?(?:completed|done|finished|ticked|zilizokamilika)(?: items| tasks| to-?dos)?(?: from)?(?: my)?(?: ${KIND}(?: list)?s?)?$`, "i").exec(lower)))
    return { action: "todo-clear-done", list: parseListRef(`${(/(shop|groc|market|manunuzi)/i.exec(lower) || [])[0] || "to-do"} list`)?.list || "todo", sw };
  if ((m = new RegExp(`^(?:(?:yes|yeah|yep|ndiyo|ndio|ok|okay|sawa)[, ]+)?(?:please )?(?:clear|empty|wipe|erase|reset|delete everything (?:on|from|in)|remove everything (?:on|from|in)|clear everything (?:on|from|in)|clear out|futa|safisha|ondoa vyote (?:kwenye|katika)|futa vyote (?:kwenye|katika)) ?(?:all )?(?:of )?${lref}$`, "i").exec(lower))) {
    const where = parseListRef(m[1]);
    const confirmed = /^(?:yes|yeah|yep|ndiyo|ndio|ok|okay|sawa)[, ]/i.test(lower);
    if (where) return { action: "todo-clear-all", list: where.list, confirmed, sw };
  }
  return null;
}

// "yes" / "ndiyo" said right after Kyro asked whether to clear a list
const YES = /^(?:yes|yeah|yep|yup|sure|ok|okay|go ahead|do it|please do|ndiyo|ndio|sawa|haya|ndio futa)[.!, ]*(?:please)?[.!]*$/i;
function confirmsClear(text, history) {
  if (!YES.test(clean(text))) return null;
  const last = [...(Array.isArray(history) ? history : [])].reverse().find(turn => turn && /assistant|kyro|nexus/i.test(String(turn.role || "")));
  const asked = /"((?:yes|ndiyo), (?:clear|futa)[^"]+)"/i.exec(String(last?.content || ""));
  if (!asked) return null;
  const again = readListRequest(asked[1]);
  return again?.action === "todo-clear-all" ? { ...again, confirmed: true } : null;
}

module.exports = Object.freeze({ readListRequest, confirmsClear, splitListItems, parseListRef, nounOf, MAX_LIST_ITEMS_AT_ONCE });
