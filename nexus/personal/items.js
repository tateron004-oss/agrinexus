"use strict";

const { extractDay, extractTime, tidyTitle, extractRange, describeDay, addDays } = require("./dates.js");
const { formatTimeOfDay } = require("../brief/schedule.js");
const { localDay, validTimeZone, DEFAULT_TIME_ZONE } = require("../brief/compose.js");

// To-do and shopping lists, notes, and a calendar: things the person tells Kyro to keep, in their own words, and asks for back later.
// Nothing here is guessed or imported; a request that is not plainly one of these is left alone (returns null) for normal planning.
const clean = value => String(value ?? "").replace(/\s+/g, " ").trim();
const LIST_WORDS = "(to-?do|todo|task|shopping|grocery|groceries)";
const listNameOf = word => (/shopping|grocer/i.test(word) ? "shopping" : "todo");
const LIST_NOUN = { todo: "to-do list", shopping: "shopping list" };
const MAX_ITEMS = 300;
const MAX_TEXT = 200;

// ---- reading what was said ----

// { action, ...details } or null. `today` is the person's local day, used to read days in calendar requests.
function readRequest(text, today) {
  const t = clean(text).replace(/[’]/g, "'");
  if (!t || t.length > 260) return null;
  const lower = t.toLowerCase().replace(/[.!?]+$/g, "");
  let m;

  // calendar
  if ((m = /^(?:please )?(?:add|put|schedule|book|set up|create|pencil in)\s+(.+?)\s+(?:to|on|in|onto|into)\s+my\s+(?:calendar|schedule|diary)\b\s*(.*)$/i.exec(t)) || (m = /^(?:please )?(?:add to|put on|schedule on) my (?:calendar|schedule|diary)[:,]?\s+()(.+)$/i.exec(t)))
    return eventDetails(m[1], m[2], today);
  if ((m = /^(?:please )?(?:cancel|remove|delete|take off|take)\s+(.+?)\s+(?:from|off|on) my (?:calendar|schedule|diary)$/i.exec(t))) return { action: "event-remove", query: clean(m[1]) };
  if (/^(?:what(?:'s| is| are)|show|read|list|tell me|do i have anything on)\b.*\bmy (?:calendar|schedule|diary|events|appointments)\b/i.test(lower) ||
      /^(?:what do i have|what have i got|what(?:'s| is) on|do i have anything(?: on)?|what(?:'s| is) coming up)\s*(?:on |for )?(?:today|tomorrow|this week|next week)?$/i.test(lower)) {
    return { action: "event-list", range: extractRange(lower, today) };
  }

  // notes
  if ((m = /^(?:please )?(?:take|make|save|add|leave) a note(?: to self)?(?: that| about)?[:,]?\s+(.+)$/i.exec(t)) || (m = /^(?:please )?note(?: down)?(?: that)?[:,]\s*(.+)$/i.exec(t)) ||
      (m = /^(?:please )?(?:note down|jot down|note that)\s+(.+)$/i.exec(t))) return { action: "note-add", text: tidyTitle(m[1]) };
  if (/^(?:what(?:'s| are| is)|show|read|list|tell me) (?:me )?(?:all )?(?:of )?(?:my )?notes$/.test(lower) || /^(?:show|read|list) me my notes$/.test(lower)) return { action: "note-list" };
  if ((m = /^(?:what did i note|what notes do i have|find my notes?|what(?:'s| is| are) my notes?) (?:about|on|for|regarding)\s+(.+)$/i.exec(lower))) return { action: "note-find", query: clean(m[1]) };
  if ((m = /^(?:delete|remove|forget|erase) my notes? (?:about|on|for|regarding)\s+(.+)$/i.exec(lower))) return { action: "note-remove", query: clean(m[1]) };

  // to-do and shopping lists
  const listRef = `(?:my |the )?(?:${LIST_WORDS}(?: list)?s?|list)`;
  if ((m = new RegExp(`^(?:please )?(?:add|put)\\s+(.+?)\\s+(?:to|on|onto)\\s+${listRef}$`, "i").exec(t))) return { action: "todo-add", list: listNameOf(m[2] || ""), text: tidyTitle(m[1]) };
  if ((m = new RegExp(`^(?:please )?(?:add|put) (?:to|on) my ${LIST_WORDS}(?: list)?[:,]?\\s+(.+)$`, "i").exec(t))) return { action: "todo-add", list: listNameOf(m[1]), text: tidyTitle(m[2]) };
  if ((m = new RegExp(`^(?:please )?(?:mark|tick off|tick|check off)\\s+(.+?)\\s+(?:as |off )?(?:done|complete|completed|finished)(?: on my ${LIST_WORDS}(?: list)?)?$`, "i").exec(t))) return { action: "todo-done", query: clean(m[1]), sure: true };
  if ((m = /^(?:i(?:'ve| have)?\s+)?(?:just )?(?:finished|completed|done with)\s+(.+)$/i.exec(t))) return { action: "todo-done", query: clean(m[1]), sure: false };
  if ((m = new RegExp(`^(?:please )?(?:remove|delete|take|cross)\\s+(.+?)\\s+(?:from|off|out of)\\s+${listRef}$`, "i").exec(t))) return { action: "todo-remove", list: listNameOf(m[2] || ""), query: clean(m[1]) };
  if ((m = new RegExp(`^(?:please )?(?:clear|remove|delete) (?:all )?(?:my |the )?(?:completed|done|finished|ticked)(?: items)?(?: from)?(?: my)?(?: ${LIST_WORDS}(?: list)?s?)?$`, "i").exec(lower))) return { action: "todo-clear-done", list: listNameOf(m[1] || "") };
  if ((m = new RegExp(`^(?:what(?:'s| is| are)|show|read|list|tell me)(?: me)?(?: what(?:'s| is| are) on)?(?: what(?:'s| is| are))? ?(?:on )?(?:all )?${listRef}$`, "i").exec(lower)) ||
      (m = new RegExp(`^what(?:'s| is| do i have| have i got) ?(?:on )?my ${LIST_WORDS}(?: list)?s?$`, "i").exec(lower))) return { action: "todo-list", list: listNameOf(m[1] || m[2] || lower) };
  return null;
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

const STOP = new Set(["the", "a", "an", "my", "to", "and", "of", "for", "on", "in", "that", "about", "it"]);
const words = value => clean(value).toLowerCase().replace(/[^a-z0-9' ]/g, " ").split(" ").filter(word => word && !STOP.has(word));

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
function eventLine(event, today) {
  const when = describeDay(event.day, today);
  return `${event.time ? `${when} at ${formatTimeOfDay(event.time)}` : when}: ${event.text}`;
}
const byWhen = (a, b) => `${a.day} ${a.time || "00:00"}`.localeCompare(`${b.day} ${b.time || "00:00"}`);

// ---- acting on it ----

// Returns the words to answer with, or null when this is not for personal items. `memory` needs the personal item methods.
async function personalTurn({ text, memory, tenantId, userId, now = new Date(), timeZone }) {
  if (!memory?.addPersonalItem || !memory?.listPersonalItems) return null;
  const zone = validTimeZone(timeZone || DEFAULT_TIME_ZONE);
  const today = localDay(now, zone);
  const request = readRequest(text, today);
  if (!request) return null;
  const scope = { tenantId, userId };
  const list = kind => memory.listPersonalItems({ ...scope, kind });
  const add = async content => {
    if ((await memory.listPersonalItems({ ...scope })).length >= MAX_ITEMS) return false;
    await memory.addPersonalItem({ ...scope, content });
    return true;
  };
  const full = "Your lists are full. Tell me to clear finished to-dos, or delete some notes or events first.";
  try {
    switch (request.action) {
      case "todo-add": {
        if (!request.text) return null;
        const text1 = request.text.slice(0, MAX_TEXT);
        const existing = (await list("todo")).find(row => row.content.list === request.list && !row.content.done && words(row.content.text).join(" ") === words(text1).join(" "));
        if (existing) return `${text1} is already on your ${LIST_NOUN[request.list]}.`;
        if (!await add({ kind: "todo", list: request.list, text: text1, done: false })) return full;
        const open = (await list("todo")).filter(row => row.content.list === request.list && !row.content.done).length;
        return `Added ${text1} to your ${LIST_NOUN[request.list]}. You have ${open} open ${open === 1 ? "item" : "items"}.`;
      }
      case "todo-list": {
        const rows = (await list("todo")).filter(row => row.content.list === request.list);
        const open = rows.filter(row => !row.content.done).map(row => row.content.text).reverse(); const done = rows.length - open.length;
        if (!open.length) return done ? `Everything on your ${LIST_NOUN[request.list]} is done. Say "clear my completed to-dos" to tidy up.` : `Your ${LIST_NOUN[request.list]} is empty. Say "add buy seed to my ${LIST_NOUN[request.list]}".`;
        return `On your ${LIST_NOUN[request.list]}: ${sayList(open.map((item, i) => `${i + 1}, ${item}`))}.${done ? ` ${done} done.` : ""}`;
      }
      case "todo-done": case "todo-remove": {
        const rows = (await list("todo")).filter(row => request.list ? row.content.list === request.list : true);
        const candidates = request.action === "todo-done" ? rows.filter(row => !row.content.done) : rows;
        const found = findItem(candidates, request.query);
        if (found?.ambiguous) return `Which one: ${sayList(found.ambiguous.map(row => row.content.text), 5)}?`;
        if (!found) return request.action === "todo-done" && !request.sure ? null : `I couldn't find ${request.query} on your lists.`;
        if (request.action === "todo-remove") { await memory.removePersonalItem({ ...scope, memoryId: found.item.memory_id }); return `Removed ${found.item.content.text}.`; }
        await memory.updatePersonalItem({ ...scope, memoryId: found.item.memory_id, content: { ...found.item.content, done: true } });
        const left = rows.filter(row => !row.content.done && row.memory_id !== found.item.memory_id && row.content.list === found.item.content.list).length;
        return `Done. Ticked off ${found.item.content.text}. ${left ? `${left} still open.` : "That was the last one."}`;
      }
      case "todo-clear-done": {
        const rows = (await list("todo")).filter(row => row.content.done && row.content.list === request.list);
        for (const row of rows) await memory.removePersonalItem({ ...scope, memoryId: row.memory_id });
        return rows.length ? `Cleared ${rows.length} finished ${rows.length === 1 ? "item" : "items"}.` : "There was nothing finished to clear.";
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
        const found = findItem(await list("note"), request.query);
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
        const duplicate = (await list("event")).find(row => row.content.day === request.day && row.content.time === request.time && words(row.content.text).join(" ") === words(request.title).join(" "));
        if (duplicate) return `${eventLine(duplicate.content, today)} is already on your calendar.`;
        const event = { kind: "event", text: request.title.slice(0, MAX_TEXT), day: request.day, time: request.time };
        if (!await add(event)) return full;
        return `Added to your calendar: ${eventLine(event, today)}. I will mention it in your morning brief that day.`;
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
  } catch { return null; }
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
