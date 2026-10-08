"use strict";

const { resolveReminderTime, describeMoment, extractAssistantReminderTask } = require("./time-phrase.js");
const { scanTime, SW_PERIODS } = require("./time-grammar.js");
const { normaliseSwahiliDates } = require("./sw-dates.js");

// What the older command route and the phone line understand about reminders: reading the request (set, list, change, cancel one, cancel all), finding the reminder meant,
// answering a "what time?" question, and not saving the same reminder twice. Pure functions over plain reminder records, so they are tested without a server.
// The reminders themselves are db.profile.assistantReminders (see server.js); repeating ones are a different store (see repeat-turn.js).
// The Kiswahili wording of every reply here should be checked by a fluent speaker.

const clean = value => String(value ?? "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
const strip = value => clean(value).replace(/[.!?]+$/g, "").toLowerCase();

const SET_REQUEST = /\b(?:remind\s+(?:me|us)|set\s+(?:a\s+)?reminder|notify\s+me|remember\s+to|follow\s+up|nikumbushe|nikumbushie|unikumbushe|niwekee\s+kikumbusho|weka\s+kikumbusho|ni-?remind)\b|^(?:(?:hey|please|ok|okay)\s+)*remind(?:er)?\b(?!s\b)/i;
// "nikumbushe" can also be a plain reminder lead-in; the repeating forms are read before this (see repeat-turn.js).
const isSetRequest = text => SET_REQUEST.test(clean(text)) && !/^(?:what|which|show|list|do i have)\b/i.test(clean(text));

const REMINDER_WORD = "(?:reminders?|remainders?|follow[- ]?ups?|vikumbusho|kikumbusho)";
function isListRequest(text) {
  const lower = strip(text);
  if (!lower || isSetRequest(lower) && !/^(?:list|show)\b/.test(lower)) return false;
  if (/\b(?:cancel|clear|delete|remove|forget|scrap|futa|ondoa|ghairi|change|move|reschedule|badilisha)\b/.test(lower)) return false;
  return new RegExp(`^(?:(?:my|the|all)\\s+)?(?:upcoming\\s+|pending\\s+|active\\s+)?${REMINDER_WORD}(?:\\s+(?:please|now|today|yangu|vyangu))?$`).test(lower)
    || new RegExp(`\\b(?:what|which)\\b.*\\b${REMINDER_WORD}\\b`).test(lower)
    || new RegExp(`\\b(?:do\\s+i|have\\s+i|am\\s+i|are\\s+there|is\\s+there|got|any)\\b.*\\b${REMINDER_WORD}\\b`).test(lower)
    || new RegExp(`\\b(?:list|show|read|check|view|see|display|tell\\s+me|give\\s+me|open|say|read\\s+out)\\b.*\\b${REMINDER_WORD}\\b`).test(lower)
    || /\b(?:nina|kuna|onyesha|nionyeshe|nionyesha|orodha\s+ya|angalia|soma|nisomee|niambie)\b.*\bvikumbusho\b/.test(lower)
    || /^vikumbusho(?:\s+vyangu)?$/.test(lower);
}

const YES = /^(?:yes|yeah|yep|yup|sure|ok|okay|confirm|confirmed|do it|go ahead|please do|ndiyo|ndio|sawa|haya|naam|nakubali)\b/i;
const NO = /^(?:no|nope|nah|don't|do not|never mind|cancel that|stop|hapana|siyo|acha|usifute)\b/i;

function isCancelAllRequest(text) {
  const lower = strip(text);
  if (/\bkila\b|\brepeating\b|\brecurring\b/.test(lower)) return false;
  return /\b(?:cancel|clear|delete|remove|scrap|wipe)\b.*\b(?:all|every|everything)\b.*\breminders?\b/.test(lower)
    || /\ball\b.*\breminders?\b.*\b(?:cancel|clear|delete|remove)\b/.test(lower)
    || /\b(?:cancel|clear|delete|remove|wipe)\s+(?:my|the)\s+reminders\b(?!\s+(?:to|about|for|of)\b)/.test(lower)
    || /\b(?:futa|ondoa|ghairi|safisha)\b.*\bvikumbusho\b(?:\s+(?:vyangu\s+)?vyote)?/.test(lower) && /\bvyote\b/.test(lower)
    || /\b(?:futa|ondoa|ghairi)\s+vikumbusho\s+vyangu\b/.test(lower);
}

// -> { subject, id } | null. "cancel my reminder to call the vet", "cancel the vet reminder", "delete reminder REM-003", "futa kikumbusho cha kunywa dawa"
function readCancelRequest(text) {
  const raw = clean(text); const lower = raw.toLowerCase().replace(/[.!?]+$/g, "");
  if (isCancelAllRequest(lower)) return null;
  if (!/\b(?:cancel|clear|delete|remove|forget|scrap|futa|ondoa|ghairi)\b/.test(lower) || !/\b(?:reminder|follow[- ]?up|kikumbusho|rem-?\d{1,6})\b/.test(lower)) return null;
  const idMatch = /\bREM-?(\d{1,6})\b/i.exec(raw);
  const id = idMatch ? [`REM-${idMatch[1].padStart(3, "0")}`] : null;
  const subject = (/\b(?:reminder|kikumbusho)\s+(?:to|about|for|of|cha|kuhusu|ya)\s+(.{2,120})$/i.exec(lower)
    || /\b(?:cancel|delete|remove|clear|forget|scrap)\s+(?:my|the|that|this)?\s*(.{2,80}?)\s+reminder\b/i.exec(lower) || [])[1] || "";
  const cleaned = subject.replace(/^(?:my|the|that|this|last|latest|previous|next|a|an)\s+/i, "").replace(/\s+(?:please|now)$/i, "").trim();
  return { subject: /^(?:my|last|latest|previous|first|it|that|this|one|a|an)$/i.test(cleaned) ? "" : cleaned, id: id ? id[0].toUpperCase() : "" };
}

// -> { subject, when } | null. "change it to 10am", "move the vet reminder to tomorrow at 9", "reschedule my reminder to 5pm", "badilisha kikumbusho kiwe saa tatu asubuhi"
function readChangeRequest(text) {
  const raw = clean(text).replace(/[.!?]+$/g, "");
  let m = /^(?:(?:please|hey|ok|okay|kyro|nexus)[,\s]+)*(?:change|move|reschedule|update|shift|postpone|push|set)\s+(?:it|that|this|(?:my|the)\s+(?:last\s+|latest\s+|previous\s+|next\s+)?reminder|(?:my|the)\s+(.+?)\s+reminder|(?:the\s+|my\s+)?reminder\s+(?:about|to|for)\s+(.+?))\s+(?:to|for|until|till|at)\s+(.+)$/i.exec(raw);
  if (m) return { subject: clean(m[1] || m[2] || ""), when: clean(m[3]) };
  m = /^(?:tafadhali\s+)?(?:badilisha|hamisha|sogeza)\s+(?:kikumbusho(?:\s+changu)?|hicho|kile)\s+(?:kiwe|hadi|mpaka|kwenda|iwe|kwa)\s+(.+)$/i.exec(raw);
  return m ? { subject: "", when: clean(m[1]) } : null;
}

const normalizeTask = value => String(value || "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
// The active reminders of one person, newest first.
const activeOf = (reminders, email) => (reminders || []).filter(item => item && item.status !== "canceled" && item.createdBy === email);
// The reminder meant: by number ("REM-003"), by the words of its task, or the most recent one. -> { match } | { none: true } | { ambiguous: [...] }
function findReminder(reminders, email, { subject = "", id = "" } = {}) {
  const active = activeOf(reminders, email);
  if (!active.length) return { none: true };
  if (id) { const byId = active.find(item => String(item.reminderNumber).toUpperCase() === id); return byId ? { match: byId } : { none: true, id }; }
  const wanted = normalizeTask(subject);
  if (!wanted) return { match: active[0], onlyOne: active.length === 1, count: active.length };
  const words = wanted.split(" ").filter(word => word.length > 1 && !["the", "a", "an", "my", "to", "about", "for", "of", "reminder", "ya", "cha", "kuhusu"].includes(word));
  if (!words.length) return { match: active[0], onlyOne: active.length === 1, count: active.length };
  const hits = active.filter(item => { const task = ` ${normalizeTask(item.task)} `; return words.every(word => task.includes(` ${word}`) || task.includes(word)); });
  if (hits.length === 1) return { match: hits[0] };
  return hits.length ? { ambiguous: hits } : { none: true, subject };
}

// "take my medicine, at 8:14 pm today" for a reminder the person made, said in their own zone.
function reminderLine(reminder, { now = new Date(), timeZone, language = "en" } = {}) {
  const when = reminder.scheduledAt && !Number.isNaN(Date.parse(reminder.scheduledAt)) ? describeMoment(reminder.scheduledAt, { now, timeZone, language }) : (reminder.whenLabel || "");
  return `${reminder.task}, ${when}`.replace(/,\s*$/, "");
}

const MESSAGES = Object.freeze({
  noReminders: {
    en: 'You do not have any reminders yet. Say, for example, "remind me tomorrow at 9 am to call Ron".',
    sw: 'Huna vikumbusho bado. Sema kwa mfano "nikumbushe kesho saa tatu asubuhi kumpigia Ron simu".'
  },
  list: {
    en: (count, lines) => `You have ${count} reminder${count === 1 ? "" : "s"}: ${lines.map((line, index) => `${index + 1}, ${line}`).join("; ")}.`,
    sw: (count, lines) => `Una vikumbusho ${count}: ${lines.map((line, index) => `${index + 1}, ${line}`).join("; ")}.`
  },
  nothingToCancel: { en: "I do not see an active reminder to cancel.", sw: "Sioni kikumbusho chochote cha kufuta." },
  canceled: {
    en: reminder => `Canceled${reminder.reminderNumber ? ` ${reminder.reminderNumber}` : ""}: ${reminder.task}.`,
    sw: reminder => `Nimefuta kikumbusho${reminder.reminderNumber ? ` ${reminder.reminderNumber}` : ""}: ${reminder.task}.`
  },
  notSaved: {
    en: "I could not save that reminder just now, so it was NOT saved and nothing will be sent. Please try again in a moment.",
    sw: "Sikuweza kuhifadhi kikumbusho hicho sasa hivi, kwa hiyo HAKIJAHIFADHIWA na hakuna kitakachotumwa. Tafadhali jaribu tena baadaye kidogo."
  },
  unreachable: {
    en: "I cannot reach the reminders right now, so I can neither list nor change them. Nothing was changed. Please try again in a moment.",
    sw: "Siwezi kufikia vikumbusho sasa hivi, kwa hiyo siwezi kuviorodhesha wala kuvibadilisha. Sijabadilisha chochote. Tafadhali jaribu tena baadaye kidogo."
  },
  listIncomplete: {
    en: "I cannot reach the reminder service right now, so this list may be missing some.",
    sw: "Siwezi kufikia huduma ya vikumbusho sasa hivi, kwa hiyo orodha hii inaweza kukosa vingine."
  },
  changeFailed: { en: "I could not change that reminder, so it stays as it was.", sw: "Sikuweza kubadilisha kikumbusho hicho, kwa hiyo kimebaki kama kilivyokuwa." },
  cancelFailed: { en: "I could not cancel that reminder (it may have just been sent), so nothing was changed.", sw: "Sikuweza kufuta kikumbusho hicho (huenda kimetumwa tu), kwa hiyo sijabadilisha chochote." },
  whichOne: {
    en: (count, lines, verb) => `You have ${count} reminders: ${lines.map((line, index) => `${index + 1}, ${line}`).join("; ")}. Which one should I ${verb}? Say, for example, "${verb} my reminder to" and its words. Nothing was changed.`,
    sw: (count, lines, verb) => `Una vikumbusho ${count}: ${lines.map((line, index) => `${index + 1}, ${line}`).join("; ")}. Nikubadilishe kipi? Taja maneno yake. Sijabadilisha chochote.`
  },
  notFound: { en: "I could not find a reminder like that, so I changed nothing. Say \"what reminders do I have\" to hear them.", sw: 'Sijapata kikumbusho kama hicho, kwa hiyo sijabadilisha chochote. Sema "nina vikumbusho gani" kuvisikia.' },
  cancelAllAsk: {
    en: count => `Cancel all ${count} reminder${count === 1 ? "" : "s"}? Say yes to confirm, or no to keep them.`,
    sw: count => `Nifute vikumbusho vyote ${count}? Sema ndiyo kuthibitisha, au hapana kuviacha.`
  },
  canceledAll: {
    en: count => `Done. I canceled all ${count} reminder${count === 1 ? "" : "s"}.`,
    sw: count => `Sawa. Nimefuta vikumbusho vyote ${count}.`
  },
  keptAll: { en: "Okay. I kept your reminders.", sw: "Sawa. Nimeviacha vikumbusho vyako." },
  changed: {
    en: (reminder, readback) => `Done. I changed the reminder to ${reminder.task}: it is now ${readback}.`,
    sw: (reminder, readbackSw) => `Sawa. Nimebadilisha kikumbusho cha ${reminder.task}: sasa ni ${readbackSw}.`
  },
  duplicate: {
    en: (reminder, readback) => `You already have that reminder${reminder.reminderNumber ? ` (${reminder.reminderNumber})` : ""}: ${reminder.task}, ${readback}. I did not add it again.`,
    sw: (reminder, readbackSw) => `Tayari una kikumbusho hicho${reminder.reminderNumber ? ` (${reminder.reminderNumber})` : ""}: ${reminder.task}, ${readbackSw}. Sijakiongeza tena.`
  },
  set: {
    en: (task, readback) => `Done. I will remind you ${/^about\s/i.test(task) ? "" : "to "}${task} ${readback}.`,
    sw: (task, readbackSw) => `Sawa. Nitakukumbusha ${task} ${readbackSw}.`
  },
  repeatUnavailable: {
    en: 'I cannot set a repeating reminder on this line right now, so nothing was saved. Try again in a moment, or ask for a one-time reminder, for example "remind me tomorrow at 8 am to take my medicine".',
    sw: 'Siwezi kuweka kikumbusho cha kujirudia kwenye mstari huu sasa hivi, kwa hiyo sijaweka chochote. Jaribu tena baadaye, au omba kikumbusho cha mara moja, kwa mfano "nikumbushe kesho saa mbili asubuhi kunywa dawa".'
  },
  needTask: { en: 'What should I remind you about? For example, "remind me in 20 minutes to take my medicine". Nothing was set yet.', sw: 'Nikukumbushe nini? Kwa mfano "nikumbushe baada ya dakika 20 kunywa dawa". Bado sijaweka chochote.' }
});

// ---- not saving the same reminder twice ----
// The same person, the same words and the same moment (to the minute), or the same request (correlation id) sent again: one reminder, not two.
function findDuplicate(reminders, email, { task, scheduledAt, correlationId = "" }) {
  const wanted = normalizeTask(task); const when = Date.parse(scheduledAt);
  return activeOf(reminders, email).find(item => {
    if (correlationId && item.correlationId && item.correlationId === correlationId && normalizeTask(item.task) === wanted) return true;
    const gap = Math.abs(Date.parse(item.scheduledAt) - when);
    return normalizeTask(item.task) === wanted && Number.isFinite(gap) && gap <= 90 * 1000;
  }) || null;
}

// ---- answering "what time?" ----
const ANSWER_PART = /(?:\b(?:in\s+the\s+|this\s+|at\s+)?(morning|afternoon|evening|night|noon|midday|midnight)\b|\b(asubuhi|alfajiri|mchana|alasiri|jioni|usiku)\b|\b(a\.?\s?m\.?|p\.?\s?m\.?)(?![a-z])|\b(tonight)\b)/i;
const PART_OF = { morning: "morning", am: "morning", asubuhi: "morning", alfajiri: "morning", noon: "noon", midday: "noon", mchana: "afternoon", alasiri: "afternoon", afternoon: "afternoon", evening: "evening", jioni: "evening", pm: "evening", night: "night", midnight: "night", usiku: "night", tonight: "night" };
const PENDING_LIFETIME_MS = 10 * 60 * 1000;
const isFresh = (pending, now = Date.now()) => Boolean(pending) && now - Date.parse(pending.askedAt) < PENDING_LIFETIME_MS;

// What was asked and why: { kind, task, original, ... } -> kept until the person answers (or ten minutes pass).
function pendingFromAsk({ ask, task, original, correlationId = "", now = new Date() }) {
  return { kind: ask.kind, task, original: clean(normaliseSwahiliDates(original)), clockSpan: ask.clockSpan || null, hour12: ask.hour12 || null, minute: ask.minute || 0, swahili: Boolean(ask.swahili), amount: ask.amount ?? null, askedAt: now.toISOString(), correlationId };
}

// -> { status: "ok", timing, task } | { status: "ask", ask } | { status: "other" } (not an answer: carry on with it as a new request)
function interpretPendingAnswer(pending, answer, { now = new Date(), timeZone, language } = {}) {
  const text = clean(answer).replace(/[.!?]+$/g, "");
  if (!text || text.length > 80) return { status: "other" };
  // A whole new reminder ("remind me in 5 minutes to stir the pot"), or words with a task of their own, is not an answer.
  if (isSetRequest(text) || (pending.kind !== "ambiguous-hour" && !/^\d{1,2}(?::\d{2})?$/.test(text) && extractAssistantReminderTask(text) !== "follow up")) return { status: "other" };
  const options = { now, timeZone, language };
  let timing;
  if (pending.kind === "ambiguous-hour" && pending.clockSpan) {
    const [start, end] = pending.clockSpan;
    const own = scanTime(text).clocks.find(item => !item.ambiguous);
    const said = ANSWER_PART.exec(text);
    let replacement = "";
    if (own) replacement = text;
    else if (said) {
      const part = PART_OF[(said[1] || said[2] || said[3] || said[4] || "").toLowerCase().replace(/[.\s]/g, "")];
      if (!part) return { status: "other" };
      if (pending.swahili) replacement = `${pending.original.slice(start, end).replace(new RegExp(`\\s*(?:${SW_PERIODS})\\s*$`, "i"), "").trim()} ${{ morning: "asubuhi", noon: "mchana", afternoon: "mchana", evening: "jioni", night: "usiku" }[part]}`;
      else if (pending.hour12 === 12 && !pending.minute) replacement = part === "night" ? "12 midnight" : "12 noon";
      else replacement = `${pending.hour12}${pending.minute ? `:${String(pending.minute).padStart(2, "0")}` : ""}${part === "morning" ? "am" : "pm"}`;
    } else return { status: "other" };
    timing = resolveReminderTime(`${pending.original.slice(0, start)}${replacement}${pending.original.slice(end)}`, options);
  } else if (pending.kind === "unit") {
    const unit = /^(?:in\s+)?(minutes?|mins?|hours?|hrs?|days?|weeks?|dakika|masaa|siku|wiki)$/i.exec(text);
    timing = resolveReminderTime(unit && pending.amount ? `in ${pending.amount} ${unit[1]}` : text, options);
  } else if (pending.kind === "need-time-today") {
    timing = resolveReminderTime(/\btoday\b|\bleo\b/i.test(text) ? text : `today ${text}`, options);
  } else {
    timing = resolveReminderTime(text, options);
    if (timing.status === "none" && /^\d/.test(text)) timing = resolveReminderTime(`at ${text}`, options);
  }
  if (timing.status === "ok") return { status: "ok", timing, task: pending.task };
  if (timing.status === "none") return { status: "other" };
  return { status: "ask", ask: timing.ask, timing };
}

module.exports = Object.freeze({ isSetRequest, isListRequest, isCancelAllRequest, readCancelRequest, readChangeRequest, findReminder, reminderLine, activeOf, findDuplicate,
  pendingFromAsk, interpretPendingAnswer, isFresh, MESSAGES, YES, NO, PENDING_LIFETIME_MS, extractAssistantReminderTask });
