"use strict";

const { extractDay, extractTime, tidyTitle, extractRange, describeDay, addDays } = require("./dates.js");
const { formatTimeOfDay } = require("../brief/schedule.js");
const { localDay, validTimeZone, DEFAULT_TIME_ZONE } = require("../brief/compose.js");
const { normaliseSpoken } = require("../speech/normalise.js");
const { readListRequest, confirmsClear, splitListItems, nounOf } = require("./lists.js");

// To-do and shopping lists, notes, and a calendar: things the person tells Kyro to keep, in their own words, and asks for back later.
// Nothing here is guessed or imported; a request that is not plainly one of these is left alone (returns null) for normal planning.
// How a list is asked for (shopping, to-do, a list with a name of its own, in English or Kiswahili) is read by lists.js.
const clean = value => String(value ?? "").replace(/\s+/g, " ").trim();
// "milk, eggs and bread"
const naturalList = values => (values.length <= 1 ? values.join("") : `${values.slice(0, -1).join(", ")} and ${values[values.length - 1]}`);
const naturalListSw = values => (values.length <= 1 ? values.join("") : `${values.slice(0, -1).join(", ")} na ${values[values.length - 1]}`);
const MAX_ITEMS = 300;
const MAX_TEXT = 200;
const MAX_NAMED_LISTS = 12;

// ---- reading what was said ----

// { action, ...details } or null. `today` is the person's local day, used to read days in calendar requests.
function readRequest(text, today, depth = 0) {
  // The one front door (speech/normalise.js) has usually cleaned this already; it is cheap and idempotent, so a caller that did not is covered too.
  // ("Put tomatoes on my shopping list as well": the closing "as well", "too" or "also" is not part of any item or name)
  const t = normaliseSpoken(text).text.replace(/[’]/g, "'").replace(/\s+(?:as well|too|also)(?=[.!?]*$)/i, "");
  if (!t || t.length > 260) return null;
  const lower = t.toLowerCase().replace(/[.!?]+$/g, "");
  let m;

  // calendar
  if (depth === 0) { const several = readSeveralEvents(t, today); if (several) return several; }
  if ((m = /^(?:please )?(?:add|put|schedule|book|set up|create|pencil in|weka|ongeza|andika)\s+(.+?)\s+(?:to|on|in|onto|into|kwenye|katika|kwa|ktk)\s+(?:my\s+|yangu\s+)?(?:calendar|schedule|diary|kalenda)\b(?:\s+yangu)?\s*(.*)$/i.exec(t)) || (m = /^(?:please )?(?:add to|put on|schedule on) my (?:calendar|schedule|diary)[:,]?\s+()(.+)$/i.exec(t)))
    return eventDetails(m[1], m[2], today);
  // Spoken without "my calendar": "schedule a meeting with the cooperative on Monday at 10". Only an event noun
  // (meeting, appointment, ...) plus a day/time word counts, so "put milk on Monday" is never read as an event.
  // (up to two words may come before the event noun: "a vet visit tomorrow at 10", "a team meeting on Friday")
  if ((m = /^(?:please )?(?:schedule|book|set up|arrange|put in|put|add|plan)\s+((?:a |an |the |my )?(?:[a-z'-]+ ){0,2}?(?:meeting|appointment|visit|interview|training|session|class|delivery|market day)\b.*?)\s+((?:on|at|for|next|this|tomorrow|today)\b.*)$/i.exec(t)))
    return eventDetails(m[1], m[2], today);
  if ((m = /^(?:please )?(?:cancel|remove|delete|take off|take)\s+(.+?)\s+(?:from|off|on) my (?:calendar|schedule|diary)$/i.exec(t))) return { action: "event-remove", query: clean(m[1]) };
  if (/^(?:what(?:'s| is| are)|what do i have|what have i got|show|read|list|tell me|do i have anything on)\b.*\bmy (?:calendar|schedule|diary|events|appointments)\b/i.test(lower) ||
      // "What do I have on Monday?", "What's on Friday?", "Do I have anything next Tuesday?", "What do I have on 12 October?": one named day.
      /^(?:what do i have|what have i got|what(?:'s| is) on|do i have anything(?: on)?|what(?:'s| is) happening|what(?:'s| is) planned)\s*(?:on |for |this |next )?(?:(?:mon|tues|wednes|thurs|fri|satur|sun)day|\d{1,2}(?:st|nd|rd|th)?(?: of)? [a-z]{3,9}|[a-z]{3,9} \d{1,2}(?:st|nd|rd|th)?)(?: please)?$/i.test(lower) ||
      /^(?:what do i have|what have i got|what(?:'s| is) on|do i have anything(?: on)?|what(?:'s| is) coming up)\s*(?:on |for )?(?:today|tomorrow|this week|next week)?$/i.test(lower)) {
    return { action: "event-list", range: extractRange(lower, today) };
  }

  // to-do and shopping lists, and lists with a name of their own: before notes, so "write down milk on the shopping list" is a list item and not a note
  const listRequest = readListRequest(t);
  if (listRequest) return listRequest;

  // "Add a note to Grace: she wants delivery on Friday" is a note on a CONTACT in the business workspace (business/pipeline-voice.js), not a note to self: the person's own notes are never addressed to a named person.
  // (found on the real runtime, 9 November 2026: it was kept as the personal note "Grace: she wants delivery on Friday" and never reached the contact's history)
  if (/^(?:[Pp]lease )?(?:[Aa]dd|[Ww]rite|[Mm]ake|[Ll]eave|[Ss]ave|[Pp]ut|[Ll]og)\s+(?:[Aa]\s+|[Aa]nother\s+)?(?:[Nn]ew\s+)?(?:[Nn]ote|[Cc]all(?:\s+[Nn]ote)?)\s+(?:to|on|about|for|with)\s+\p{Lu}/u.test(t) || /^(?:[Pp]lease )?[Nn]ote\s+(?:on|about|for)\s+\p{Lu}/u.test(t)) return null;
  // notes
  if ((m = /^(?:please )?(?:take|make|save|add|leave|write|create|record|type)(?: me)? a note(?: to self)?(?: (?:that|which|it) says| saying| that| about| of)?[:,]?\s+(.+)$/i.exec(t)) || (m = /^(?:please )?note(?: down)?(?: that)?[:,]\s*(.+)$/i.exec(t)) ||
      (m = /^(?:please )?(?:note down|jot down|note that)\s+(.+)$/i.exec(t)) ||
      (m = /^(?:please )?(?:write|put|jot)(?: this| that| it)? down(?: that)?[:,]?\s+(.+)$/i.exec(t))) return { action: "note-add", text: tidyTitle(m[1]) };
  // "Remember that the pump needs a new seal": kept as a note (a plain statement about the person, like "I grow maize", is saved as a fact before this is reached).
  if ((m = /^(?:please )?remember(?: this)?(?: that|:)\s+(.+)$/i.exec(t))) return { action: "note-add", text: tidyTitle(m[1]) };
  // Kiswahili: "andika kwamba ng'ombe anachechemea" / "weka kumbukumbu: pampu inahitaji mpira mpya"
  if ((m = /^(?:andika|weka kumbukumbu|kumbuka)(?: kwamba| ya| hii)?[:,]?\s+(.+)$/i.exec(t)) && !/\b(?:kwenye|katika)\s+(?:orodha|kalenda)\b/i.test(t)) return { action: "note-add", text: tidyTitle(m[1]) };
  if (/^(?:what(?:'s| are| is)|show|read|list|tell me) (?:me )?(?:all )?(?:of )?(?:my )?notes$/.test(lower) || /^(?:show|read|list) me my notes$/.test(lower)
      // "What notes do I have?", "do I have any notes", "what notes have I saved": found by the live voice audit, where the first was sent to the checklists and answered "I couldn't get your notes"
      || /^(?:what|which) notes (?:do i have|have i (?:saved|made|written|taken|kept|got)|are (?:saved|there)|did i (?:save|make|take|write))(?: saved)?$/.test(lower) || /^do i have any notes(?: saved)?$/.test(lower)) return { action: "note-list" };
  if ((m = /^(?:what did i (?:note|jot|write|put|save|say)(?: it)?(?: down)?|what notes do i have|find my notes?|what(?:'s| is| are) my notes?) (?:about|on|for|regarding)\s+(.+)$/i.exec(lower))) return { action: "note-find", query: clean(m[1]) };
  // Deleting notes (found on 4 November 2026: every way of saying it except "delete my note about ..." went to the AI model, which asked "which reminder to remove?"):
  // "delete my note about the cow", "delete the note about the pump", "remove note about the gate", "delete the cow note", "delete my last note"
  const DELETE_NOTE = "(?:delete|remove|forget|erase|get rid of|scrap|take away|clear)";
  if ((m = new RegExp(`^(?:please )?${DELETE_NOTE}\\s+(?:(?:my|the|that|this|a)\\s+)?(?:old\\s+)?notes?\\s+(?:about|on|for|regarding|that (?:says?|said|mentions?|reads?)|saying|with|called)\\s+(.+)$`, "i").exec(lower))) return { action: "note-remove", query: clean(m[1]) };
  if (new RegExp(`^(?:please )?${DELETE_NOTE}\\s+(?:(?:my|the|that|this)\\s+)?(?:last|latest|newest|most recent|previous)\\s+note$`, "i").test(lower)) return { action: "note-remove", newest: true, query: "" };
  if ((m = new RegExp(`^(?:please )?${DELETE_NOTE}\\s+(?:(?:my|the|that|this)\\s+)?([\\p{L}][\\p{L}' -]{0,40}?)\\s+note$`, "iu").exec(lower)) && !/\b(?:all|every|old|my|saved|calendar|reminder|reminders|contact|first|second|third)\b/i.test(m[1])) return { action: "note-remove", query: clean(m[1]) };
  // every note, asked about first: "delete all my notes", "clear my notes", "remove my notes", "wipe my old notes"
  if (new RegExp(`^(?:(?:yes|yeah|yep|ok|okay)[, ]+)?(?:please )?${DELETE_NOTE.replace("clear", "clear|wipe|empty")}\\s+(?:all\\s+(?:of\\s+)?)?(?:(?:my|the)\\s+)?(?:old\\s+|saved\\s+|previous\\s+)?notes$`, "i").test(lower))
    return { action: "note-clear-all", confirmed: /^(?:yes|yeah|yep|ok|okay)[, ]/i.test(lower) };

  return null;
}

// Two events said in one breath ("put a meeting with the cooperative on Monday at 10 am add vet visit to my calendar tomorrow at 10 am", or "add a meeting on Monday at 10 am and a vet visit tomorrow at 10 am"; speech recognition
// often runs two requests together) are two events, each with its own day and time. They used to become ONE event whose title held both and whose day was the second one's (found on 4 November 2026).
// Only when every piece is a complete event on its own: otherwise it is read as before.
const EVENT_VERB = "(?:add|put|schedule|book|set up|pencil in|arrange|plan)";
function readSeveralEvents(t, today) {
  if (t.length < 28) return null;
  let parts = t.split(new RegExp(`\\s+(?:(?:and|then|also)\\s+)?(?=(?:please\\s+)?${EVENT_VERB}\\s+(?:a|an|the|my|some)?\\s*\\S)`, "i")).map(clean).filter(Boolean);
  if (parts.length < 2) {
    const head = new RegExp(`^(?:please\\s+)?(${EVENT_VERB})\\s+(.+)$`, "i").exec(t);
    if (head) {
      const pieces = head[2].split(/\s+and\s+(?=(?:a|an|the|my)\s)/i).map(clean).filter(Boolean);
      if (pieces.length >= 2) parts = pieces.map(piece => `${head[1]} ${piece}`);
    }
  }
  if (parts.length < 2 || parts.length > 5) return null;
  const events = [];
  for (const part of parts) {
    const one = readRequest(part, today, 1);
    if (!one || one.action !== "event-add" || one.missing) return null;
    events.push(one);
  }
  return { action: "event-add-many", events };
}

function eventDetails(head, tail, today) {
  const combined = `${clean(head)} ${clean(tail)}`;
  const timed = extractTime(combined);
  const dated = extractDay(timed ? timed.text : combined, today);
  const title = tidyTitle(dated ? dated.text : timed ? timed.text : combined);
  if (!title) return { action: "event-add", missing: "title" };
  if (!dated) return { action: "event-add", title, missing: "day" };
  return { action: "event-add", title, day: dated.day, time: timed?.time || "" };
}

// ---- finding an item by the words the person used ----

const STOP = new Set(["the", "a", "an", "my", "to", "and", "of", "for", "on", "in", "that", "about", "it", "some", "ya", "za", "na", "yangu"]);
// letters of any script ("ng'ombe", "Ọ̀dọ́"), and "eggs" finds "egg"
const stem = word => (word.length > 3 && word.endsWith("s") && !word.endsWith("ss") ? word.slice(0, -1) : word);
const words = value => clean(value).toLowerCase().replace(/[^\p{L}\p{M}\p{N}' ]/gu, " ").split(" ").filter(word => word && !STOP.has(word)).map(stem);
const ORDINALS = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5, last: -1, "1st": 1, "2nd": 2, "3rd": 3, "4th": 4, "5th": 5, "number one": 1, "number two": 2, "number three": 3 };

// "the first item", "number 2", "item 3", "the last one" -> a position (1-based; -1 = last), else null
function ordinalPosition(query) {
  const q = clean(query).toLowerCase().replace(/^(?:the|my)\s+/, "");
  let m;
  if ((m = /^(first|second|third|fourth|fifth|last|1st|2nd|3rd|4th|5th)(?: (?:item|one|thing|task|entry))?$/.exec(q))) return ORDINALS[m[1]];
  if ((m = /^(?:item|number|no\.?|#)\s*(\d{1,2})$/.exec(q)) || (m = /^(\d{1,2})(?:st|nd|rd|th)(?: (?:item|one|thing))?$/.exec(q))) return Number(m[1]);
  return null;
}

// { item } | { ambiguous: [items] } | null
function findItem(items, query) {
  const wanted = words(query);
  if (!wanted.length) return null;
  const exact = items.filter(item => words(item.content.text).join(" ") === wanted.join(" "));
  // Several items with exactly the same words are the same thing said twice, so there is nothing to ask: take the newest (the list is
  // newest first). Found live: two identical notes could never be deleted because Kyro kept asking which one.
  if (exact.length >= 1) return { item: exact[0] };
  const all = items.filter(item => { const have = words(item.content.text); return wanted.every(word => have.includes(word)); });
  if (all.length === 1) return { item: all[0] };
  if (all.length > 1 && all.every(item => words(item.content.text).join(" ") === words(all[0].content.text).join(" "))) return { item: all[0] };
  return all.length > 1 ? { ambiguous: all } : null;
}

// ---- saying it back ----

const sayList = (values, limit = 10) => `${values.slice(0, limit).join("; ")}${values.length > limit ? ` and ${values.length - limit} more` : ""}`;
const sayListSw = (values, limit = 10) => `${values.slice(0, limit).join("; ")}${values.length > limit ? ` na ${values.length - limit} zaidi` : ""}`;
function eventLine(event, today) {
  const when = describeDay(event.day, today);
  return `${event.time ? `${when} at ${formatTimeOfDay(event.time)}` : when}: ${event.text}`;
}
const byWhen = (a, b) => `${a.day} ${a.time || "00:00"}`.localeCompare(`${b.day} ${b.time || "00:00"}`);

// ---- acting on it ----

// "yes" said right after Kyro asked whether to delete every note
const YES_PLAIN = /^(?:yes|yeah|yep|yup|sure|ok|okay|go ahead|do it|please do)[.!, ]*(?:please)?[.!]*$/i;
function confirmsNotes(text, history) {
  if (!YES_PLAIN.test(clean(text))) return null;
  const last = [...(Array.isArray(history) ? history : [])].reverse().find(turn => turn && /assistant|kyro|nexus/i.test(String(turn.role || "")));
  return /Say "yes, delete all my notes"/i.test(String(last?.content || "")) ? { action: "note-clear-all", confirmed: true } : null;
}

// Returns the words to answer with, or null when this is not for personal items. `memory` needs the personal item methods. `history` (optional) is the
// conversation so far, so a plain "yes" can answer Kyro's own "shall I clear the whole list?".
async function personalTurn({ text, memory, tenantId, userId, now = new Date(), timeZone, history = [] }) {
  if (!memory?.addPersonalItem || !memory?.listPersonalItems) return null;
  const zone = validTimeZone(timeZone || DEFAULT_TIME_ZONE);
  const today = localDay(now, zone);
  const request = confirmsClear(text, history) || confirmsNotes(text, history) || readRequest(text, today);
  if (!request) return null;
  const sw = request.sw === true;
  const scope = { tenantId, userId };
  const list = kind => memory.listPersonalItems({ ...scope, kind });
  // Found live (CAS-less-race audit): the real MemoryRepository does this check-then-insert as two
  // separate, unguarded calls -- two adds arriving close together when the person is one item under the
  // cap could both read the same under-cap count and both insert. addPersonalItemUnlessFull (when the
  // memory implementation provides it, e.g. the real Postgres-backed one) runs the count check and the
  // insert inside one advisory-lock-guarded transaction instead. Fall back to the old two-call form for
  // any memory implementation that doesn't provide it (e.g. test doubles), where there is no real
  // concurrent-request race to guard against in the first place.
  // `isDuplicate`, when passed, is checked inside the same locked transaction as the cap check (see
  // addPersonalItemUnlessFull's own comment) -- closing the check-then-act race the caller used to have
  // by looking up an existing duplicate itself, separately, before ever calling add().
  const add = async (content, isDuplicate = null) => {
    if (memory.addPersonalItemUnlessFull) {
      const result = await memory.addPersonalItemUnlessFull({ ...scope, content, maxItems: MAX_ITEMS, isDuplicate });
      if (result.duplicate) return { duplicate: result.duplicate };
      return !result.full;
    }
    if (isDuplicate) {
      const duplicate = (await memory.listPersonalItems({ ...scope, kind: content.kind })).map(row => row.content).find(isDuplicate);
      if (duplicate) return { duplicate };
    }
    if ((await memory.listPersonalItems({ ...scope })).length >= MAX_ITEMS) return false;
    await memory.addPersonalItem({ ...scope, content });
    return true;
  };
  const full = sw ? "Orodha zako zimejaa. Niambie nifute kazi zilizokamilika, au nifute madokezo fulani kwanza." : "Your lists are full. Tell me to clear finished to-dos, or delete some notes or events first.";
  const yourNoun = name => (sw ? (name === "shopping" ? "orodha yako ya manunuzi" : name === "todo" ? "orodha yako ya kazi" : `orodha yako ya ${name}`) : `your ${nounOf(name)}`);
  const openCount = (rows, name) => rows.filter(row => row.content.list === name && !row.content.done).length;
  const youHave = n => (sw ? (n === 1 ? "Una kitu 1 kilichobaki." : `Una vitu ${n} vilivyobaki.`) : `You have ${n} open ${n === 1 ? "item" : "items"}.`);
  // The lists a person has something on, with how many things are open on each ("shopping" and "todo" first, then lists with names of their own).
  const listsInUse = rows => {
    const names = [];
    for (const row of rows) if (row.content.list && !names.includes(row.content.list)) names.push(row.content.list);
    const rank = name => (name === "shopping" ? 0 : name === "todo" ? 1 : 2);
    return names.sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));
  };
  try {
    switch (request.action) {
      case "todo-add": case "todo-add-many": {
        const all = await list("todo");
        const addTexts = request.action === "todo-add" ? [request.text] : request.items;
        let target = request.list;
        if (!target) {
          const used = listsInUse(all.filter(row => !row.content.done));
          if (used.length === 1) target = used[0];
          else if (!used.length) target = "todo"; // nothing on any list yet: "put it on my list" starts the to-do list, as it always has
          else {
            const what = naturalList(addTexts);
            return sw ? `Niweke kwenye orodha ipi, ya manunuzi au ya kazi? Sema "weka ${what} kwenye orodha yangu ya manunuzi" au "weka ${what} kwenye orodha yangu ya kazi".`
              : `Which list: your shopping list or your to-do list? Say "add ${what} to my shopping list" or "add ${what} to my to-do list".`;
          }
        }
        if (!listsInUse(all).includes(target) && !["shopping", "todo"].includes(target) && listsInUse(all).filter(name => !["shopping", "todo"].includes(name)).length >= MAX_NAMED_LISTS)
          return sw ? `Una orodha ${MAX_NAMED_LISTS} tayari. Futa moja kwanza.` : `You already have ${MAX_NAMED_LISTS} named lists. Clear one before starting another.`;
        const added = []; const already = [];
        for (const raw of addTexts) {
          const text1 = tidyTitle(raw).slice(0, MAX_TEXT);
          if (!text1) continue;
          const isDuplicate = existing => existing.list === target && !existing.done && words(existing.text).join(" ") === words(text1).join(" ");
          const result = await add({ kind: "todo", list: target, text: text1, done: false }, isDuplicate);
          if (result?.duplicate) { already.push(text1); continue; }
          if (!result) return added.length ? (sw ? `Nimeongeza ${naturalListSw(added)} kwenye ${yourNoun(target)}, lakini kisha ikajaa. ${full}` : `I added ${naturalList(added)} to your ${nounOf(target)}, but then it was full. ${full}`) : full;
          added.push(text1);
        }
        if (!added.length && !already.length) return null;
        const open = openCount(await list("todo"), target);
        if (request.action === "todo-add" && added.length === 1) return sw ? `Nimeongeza ${added[0]} kwenye ${yourNoun(target)}. ${youHave(open)}` : `Added ${added[0]} to your ${nounOf(target)}. ${youHave(open)}`;
        if (request.action === "todo-add" && already.length === 1 && !added.length) return sw ? `${already[0]} tayari iko kwenye ${yourNoun(target)}.` : `${already[0]} is already on your ${nounOf(target)}.`;
        if (sw) return `${added.length ? `Nimeongeza ${naturalListSw(added)} kwenye ${yourNoun(target)}.` : `Hivyo tayari viko kwenye ${yourNoun(target)}.`}${added.length && already.length ? ` ${naturalListSw(already)} tayari ${already.length === 1 ? "ilikuwepo" : "vilikuwepo"}.` : ""} ${youHave(open)}`;
        return `${added.length ? `Added ${naturalList(added)} to your ${nounOf(target)}.` : `Those are already on your ${nounOf(target)}.`}${added.length && already.length ? ` ${naturalList(already)} ${already.length === 1 ? "was" : "were"} already there.` : ""} ${youHave(open)}`;
      }
      case "todo-list": {
        const all = await list("todo");
        const readOne = target => {
          const rows = all.filter(row => row.content.list === target);
          const open = rows.filter(row => !row.content.done).map(row => row.content.text).reverse(); const done = rows.length - open.length;
          if (!open.length) {
            if (sw) return done ? `Kila kitu kwenye ${yourNoun(target)} kimekamilika. Sema "futa zilizokamilika" ili kusafisha.` : `${yourNoun(target)[0].toUpperCase()}${yourNoun(target).slice(1)} haina kitu. Sema "weka mbegu kwenye ${nounOf(target, true)}".`;
            return done ? `Everything on your ${nounOf(target)} is done. Say "clear my completed to-dos" to tidy up.` : `Your ${nounOf(target)} is empty. Say "add buy seed to my ${nounOf(target)}".`;
          }
          return sw ? `Kwenye ${yourNoun(target)}: ${sayListSw(open.map((item, i) => `${i + 1}, ${item}`))}.${done ? ` ${done} zimekamilika.` : ""}`
            : `On your ${nounOf(target)}: ${sayList(open.map((item, i) => `${i + 1}, ${item}`))}.${done ? ` ${done} done.` : ""}`;
        };
        if (request.list) return readOne(request.list);
        const used = listsInUse(all.filter(row => !row.content.done));
        if (used.length === 1) return readOne(used[0]);
        if (!used.length) return sw ? 'Huna kitu kwenye orodha zako. Sema "weka maziwa kwenye orodha yangu ya manunuzi".' : 'Your lists are empty. Say "add milk to my shopping list" to start one.';
        return used.map(readOne).join(" ");
      }
      case "lists-overview": {
        const all = await list("todo");
        const used = listsInUse(all);
        if (!used.length) return sw ? 'Huna orodha bado. Sema "weka maziwa kwenye orodha yangu ya manunuzi" kuanza.' : 'You have no lists yet. Say "add milk to my shopping list" to start one.';
        const parts = used.map(name => `${sw ? nounOf(name, true) : nounOf(name)} (${openCount(all, name)} ${sw ? "wazi" : "open"})`);
        return sw ? `Una orodha: ${parts.join("; ")}.` : `You have: ${parts.join("; ")}.`;
      }
      case "todo-done": case "todo-remove": {
        const all = await list("todo");
        const rows = all.filter(row => (request.list ? row.content.list === request.list : true));
        const candidates = request.action === "todo-done" ? rows.filter(row => !row.content.done) : rows;
        let found;
        const position = ordinalPosition(request.query);
        if (position !== null) {
          // "the first item": numbered the way the list is read back (oldest first, open items only)
          const scoped = request.list ? candidates.filter(row => !row.content.done).reverse() : (listsInUse(all.filter(row => !row.content.done)).length === 1 ? candidates.filter(row => !row.content.done).reverse() : null);
          if (!scoped) return sw ? "Niambie ni orodha ipi, kwa mfano \"ondoa kitu cha kwanza kwenye orodha yangu ya manunuzi\"." : 'Which list? For example "remove the first item from my shopping list".';
          const pick = position === -1 ? scoped[scoped.length - 1] : scoped[position - 1];
          found = pick ? { item: pick } : null;
        } else found = findItem(candidates, request.query);
        if (found?.ambiguous) return sw ? `Ipi: ${sayListSw(found.ambiguous.map(row => row.content.text), 5)}?` : `Which one: ${sayList(found.ambiguous.map(row => row.content.text), 5)}?`;
        if (!found) {
          // "remove milk" with nothing called that on any list: said so when the person has lists at all, instead of leaving it to the AI model (which asked "which reminder to remove?")
          if (request.bare) return all.length ? (sw ? `Sijapata ${request.query} kwenye orodha zako.` : `I couldn't find ${request.query} on your lists.`) : null;
          if (request.action === "todo-done" && !request.sure) return null;
          return sw ? `Sijapata ${request.query} kwenye orodha zako.` : `I couldn't find ${request.query} on your lists.`;
        }
        if (request.action === "todo-remove") {
          // an older entry that holds several things in one ("milk, eggs and bread"): take out only the one asked for
          const original = found.item.content.text;
          const parts = splitListItems(original, found.item.content.list);
          if (parts.length > 1 && position === null) {
            const keep = parts.filter(part => !(words(part).length && words(request.query).every(word => words(part).includes(word))));
            if (keep.length && keep.length < parts.length) {
              await memory.updatePersonalItem({ ...scope, memoryId: found.item.memory_id, content: { ...found.item.content, text: keep.join(", ").slice(0, MAX_TEXT) } });
              const removedParts = parts.filter(part => !keep.includes(part));
              return sw ? `Nimeondoa ${naturalListSw(removedParts)}. ${naturalListSw(keep)} bado ${keep.length === 1 ? "iko" : "ziko"} kwenye orodha.` : `Removed ${naturalList(removedParts)}. ${naturalList(keep)} ${keep.length === 1 ? "is" : "are"} still on your ${nounOf(found.item.content.list)}.`;
            }
          }
          await memory.removePersonalItem({ ...scope, memoryId: found.item.memory_id });
          return sw ? `Nimeondoa ${found.item.content.text}.` : `Removed ${found.item.content.text}.`;
        }
        await memory.updatePersonalItem({ ...scope, memoryId: found.item.memory_id, content: { ...found.item.content, done: true } });
        const left = rows.filter(row => !row.content.done && row.memory_id !== found.item.memory_id && row.content.list === found.item.content.list).length;
        return sw ? `Sawa. Nimetia alama ${found.item.content.text}. ${left ? `Bado ${left} zimebaki.` : "Hicho kilikuwa cha mwisho."}` : `Done. Ticked off ${found.item.content.text}. ${left ? `${left} still open.` : "That was the last one."}`;
      }
      case "todo-clear-done": {
        const rows = (await list("todo")).filter(row => row.content.done && row.content.list === request.list);
        for (const row of rows) await memory.removePersonalItem({ ...scope, memoryId: row.memory_id });
        if (sw) return rows.length ? `Nimeondoa vitu ${rows.length} vilivyokamilika.` : "Hakuna kilichokamilika cha kufuta.";
        return rows.length ? `Cleared ${rows.length} finished ${rows.length === 1 ? "item" : "items"}.` : "There was nothing finished to clear.";
      }
      case "todo-clear-all": {
        const all = await list("todo");
        let target = request.list;
        if (!target) {
          const used = listsInUse(all);
          // no shopping or to-do list at all: "delete the list" may be about a checklist, which its own reader asks about
          if (!used.length) return null;
          if (used.length !== 1) return sw ? 'Niambie ni orodha ipi, kwa mfano "futa orodha yangu ya manunuzi".' : 'Which list should I clear? Say "clear my shopping list" or "clear my to-do list".';
          target = used[0];
        }
        const rows = all.filter(row => row.content.list === target);
        // a list with a name of its own that is not here ("delete my Tokyo packing list") may be a checklist: left to the checklist reader
        if (!rows.length && !["shopping", "todo"].includes(target)) return null;
        if (!rows.length) return sw ? `${nounOf(target, true)} yako tayari haina kitu.` : `Your ${nounOf(target)} is already empty.`;
        if (!request.confirmed) {
          const mine = target === "shopping" ? "orodha yangu ya manunuzi" : target === "todo" ? "orodha yangu ya kazi" : `orodha yangu ya ${target}`;
          return sw ? `Hii itaondoa vitu vyote ${rows.length} kwenye ${yourNoun(target)}. Sema "ndiyo, futa ${mine}" ili kuendelea.`
            : `That would remove all ${rows.length} ${rows.length === 1 ? "item" : "items"} from your ${nounOf(target)}. Say "yes, clear my ${nounOf(target)}" to go ahead.`;
        }
        for (const row of rows) await memory.removePersonalItem({ ...scope, memoryId: row.memory_id });
        return sw ? `Nimeondoa vitu ${rows.length} kwenye ${yourNoun(target)}.` : `Cleared your ${nounOf(target)}: removed ${rows.length} ${rows.length === 1 ? "item" : "items"}.`;
      }
      case "lists-clear-all": {
        const all = await list("todo");
        const used = listsInUse(all);
        // no shopping or to-do list: any checklists are asked about by their own reader
        if (!used.length) return null;
        const counts = used.map(name => ({ name, n: all.filter(row => row.content.list === name).length }));
        if (!request.confirmed) {
          return sw ? `Hii itaondoa orodha zako zote: ${counts.map(c => `${nounOf(c.name, true)} (vitu ${c.n})`).join("; ")}. Sema "yes, clear all my lists" ili kuendelea.`
            : `That would clear all your lists: ${naturalList(counts.map(c => `your ${nounOf(c.name)} (${c.n} ${c.n === 1 ? "item" : "items"})`))}. Say "yes, clear all my lists" to go ahead.`;
        }
        for (const row of all) await memory.removePersonalItem({ ...scope, memoryId: row.memory_id });
        return sw ? `Nimeondoa orodha zako zote: vitu ${all.length}.` : `Cleared all your lists: removed ${all.length} ${all.length === 1 ? "item" : "items"}.`;
      }
      case "note-clear-all": {
        const notes = await list("note");
        if (!notes.length) return "You have no notes to delete.";
        if (!request.confirmed) return `That would delete ${notes.length === 1 ? "your only note" : `all ${notes.length} of your notes`}. Say "yes, delete all my notes" to go ahead.`;
        for (const row of notes) await memory.removePersonalItem({ ...scope, memoryId: row.memory_id });
        return `Deleted all ${notes.length} ${notes.length === 1 ? "note" : "notes"}.`;
      }
      case "note-add": {
        if (!request.text) return null;
        if (!await add({ kind: "note", text: request.text.slice(0, 500), on: today })) return full;
        return `Noted: ${request.text.slice(0, 120)}. Say "what are my notes?" any time.`;
      }
      case "note-list": {
        const notes = (await list("note")).map(row => row.content.text);
        return notes.length ? `Your notes, newest first: ${sayList(notes, 8)}.` : 'You have no notes. Say "note that the pump needs a new seal".';
      }
      case "note-find": case "note-remove": {
        const notes = await list("note");
        // "delete my last note": the newest (the list is newest first)
        const found = request.newest ? (notes.length ? { item: notes[0] } : null) : findItem(notes, request.query);
        if (found?.ambiguous) return `${found.ambiguous.length} notes match. ${request.action === "note-find" ? sayList(found.ambiguous.map(row => row.content.text), 5) : "Say more of the note so I delete the right one."}`;
        if (!found) return `I have no note about ${request.query}.`;
        if (request.action === "note-find") return `${found.item.content.text}.`;
        await memory.removePersonalItem({ ...scope, memoryId: found.item.memory_id });
        return `Deleted your note: ${found.item.content.text}.`;
      }
      case "event-add": {
        if (request.missing === "title") return "What is the event called? For example, \"add vet visit to my calendar tomorrow at 10am\".";
        if (request.missing === "day") return `What day is ${request.title}? Say it again with a day, like "tomorrow" or "25 September".`;
        if (request.day < today) return `${describeDay(request.day, today)} has already passed. Tell me a day that is still ahead.`;
        const event = { kind: "event", text: request.title.slice(0, MAX_TEXT), day: request.day, time: request.time };
        const isDuplicate = existing => existing.day === event.day && existing.time === event.time && words(existing.text).join(" ") === words(event.text).join(" ");
        const result = await add(event, isDuplicate);
        if (result?.duplicate) return `${eventLine(result.duplicate, today)} is already on your calendar.`;
        if (!result) return full;
        return `Added to your calendar: ${eventLine(event, today)}. I will mention it in your morning brief that day.`;
      }
      case "event-add-many": {
        const added = []; const already = []; const passed = [];
        for (const one of request.events) {
          if (one.day < today) { passed.push(`${one.title} (${describeDay(one.day, today)})`); continue; }
          const event = { kind: "event", text: one.title.slice(0, MAX_TEXT), day: one.day, time: one.time };
          const isDuplicate = existing => existing.day === event.day && existing.time === event.time && words(existing.text).join(" ") === words(event.text).join(" ");
          const result = await add(event, isDuplicate);
          if (result?.duplicate) { already.push(eventLine(result.duplicate, today)); continue; }
          if (!result) return added.length ? `I added ${added.length} of them to your calendar, but then it was full. ${full}` : full;
          added.push(eventLine(event, today));
        }
        const lines = [];
        if (added.length) lines.push(`Added ${added.length === 1 ? "to your calendar" : `${added.length} events to your calendar`}: ${added.join("; ")}.`);
        if (already.length) lines.push(`${already.join("; ")} ${already.length === 1 ? "is" : "are"} already on your calendar.`);
        if (passed.length) lines.push(`I did not add ${passed.join("; ")}: that day has already passed.`);
        if (added.length) lines.push("I will mention each one in your morning brief that day.");
        return lines.join(" ");
      }
      case "event-list": {
        const events = (await list("event")).map(row => row.content).filter(event => event.day >= request.range.from && event.day <= request.range.to).sort(byWhen);
        if (!events.length) return `Nothing on your calendar for ${request.range.label}.`;
        return `On your calendar for ${request.range.label}: ${sayList(events.map(event => eventLine(event, today)))}.`;
      }
      case "event-remove": {
        const found = findItem((await list("event")).filter(row => row.content.day >= today), request.query);
        if (found?.ambiguous) return `Which one: ${sayList(found.ambiguous.map(row => eventLine(row.content, today)), 5)}?`;
        if (!found) return `I couldn't find ${request.query} on your calendar.`;
        await memory.removePersonalItem({ ...scope, memoryId: found.item.memory_id });
        return `Removed from your calendar: ${eventLine(found.item.content, today)}.`;
      }
      default: return null;
    }
  } catch {
    // Found live (business/personal sibling sweep, "outcome-shape honesty" bug class): request has
    // already been positively identified as a to-do/note/event action by readRequest() above, OUTSIDE
    // this try block -- returning null here (this module's own documented sentinel for "not a personal-
    // item request at all") on a genuine failure inside the switch (e.g. a transient error saving to
    // memory) silently re-labels a real, already-confirmed save attempt as "wasn't a personal item,"
    // and the caller (planner.js) falls through to unrelated generic conversation with no indication
    // the to-do/note/event was never saved.
    return "Something went wrong saving that. Please try again.";
  }
}

// What is on a person's calendar today and how many to-dos are open, for the morning brief.
function todayDigest(rows, today) {
  const contents = (rows || []).map(row => row?.content).filter(Boolean);
  const events = contents.filter(item => item.kind === "event" && item.day === today).sort(byWhen);
  const openTodos = contents.filter(item => item.kind === "todo" && item.list === "todo" && !item.done).length;
  return { events, openTodos };
}
function digestLine({ events = [], openTodos = 0 } = {}) {
  const parts = [];
  if (events.length) parts.push(`On your calendar: ${events.slice(0, 4).map(event => `${event.text}${event.time ? ` at ${formatTimeOfDay(event.time)}` : ""}`).join("; ")}${events.length > 4 ? ` and ${events.length - 4} more` : ""}.`);
  if (openTodos) parts.push(`${openTodos} open ${openTodos === 1 ? "item" : "items"} on your to-do list.`);
  return parts.join(" ");
}

module.exports = Object.freeze({ personalTurn, readRequest, findItem, todayDigest, digestLine, MAX_ITEMS });
