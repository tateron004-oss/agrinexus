"use strict";

const { readRepeatRequest } = require("./repeat-phrase.js");
const { repeatReminderTurn } = require("./repeat-service.js");
const { parseSwahiliRepeating, parseSwahiliStop, parseSwahiliList, NEED_TIME_SW, NEED_TASK_SW, NEED_DAY_SW, UNSUPPORTED_REPEAT_SW, stoppedReplySw } = require("./swahili-reminder.js");
const { normalizeSpokenText } = require("../i18n/spoken-input.js");

// Repeating reminders, asked for in English or Kiswahili, answered in the language they were asked in. Used by the planner (with the real store) and by the older command route,
// which reaches the same store through the runtime adapter, so a reminder set on either path is one that is really delivered.

// What the person is asking for, without touching any store: "add" | "list" | "stop" | "unsupported" (a repeat that cannot be done, or is missing a day/time/task: said plainly) | null.
function classifyRepeatRequest(text) {
  const raw = String(text || "");
  const swahiliRepeat = parseSwahiliRepeating(raw);
  if (swahiliRepeat) return swahiliRepeat.english ? "add" : "unsupported";
  if (parseSwahiliStop(raw)) return "stop";
  if (parseSwahiliList(raw)) return "list";
  const request = readRepeatRequest(normalizeSpokenText(raw));
  if (!request) return null;
  if (request.action === "add") return "add";
  if (request.action === "list") return "list";
  if (request.action === "stop") return "stop";
  return "unsupported";
}

async function repeatTurnAnyLanguage({ text, store, tenantId, userId, timeZone, now }) {
  if (!store?.add) return null;
  const repeat = parseSwahiliRepeating(text);
  if (repeat) {
    if (repeat.needTime) return NEED_TIME_SW;
    if (repeat.needTask) return NEED_TASK_SW;
    if (repeat.needDay) return NEED_DAY_SW;
    if (repeat.unsupported) return UNSUPPORTED_REPEAT_SW;
    const reply = await repeatReminderTurn({ text: repeat.english, store, tenantId, userId, timeZone, ...(now ? { now } : {}) });
    return /^Okay\. I will/.test(reply || "") ? repeat.replySw : reply;
  }
  const stop = parseSwahiliStop(text);
  if (stop) {
    const reply = await repeatReminderTurn({ text: stop.english, store, tenantId, userId, timeZone, ...(now ? { now } : {}) });
    return /^Done|stopped/i.test(reply || "") ? stoppedReplySw(stop.task) : reply;
  }
  const list = parseSwahiliList(text);
  if (list) return repeatReminderTurn({ text: list.english, store, tenantId, userId, timeZone, ...(now ? { now } : {}) });
  return repeatReminderTurn({ text, store, tenantId, userId, timeZone, ...(now ? { now } : {}) });
}

// A store that is not reachable: the questions that need no store ("which day?", "what is the task?", "I can't do that repeat") are still answered; anything that
// would have to save or read a reminder returns null, which the caller says honestly.
const unreachableStore = Object.freeze({
  add: async () => { throw new Error("repeating reminders are not reachable"); },
  list: async () => { throw new Error("repeating reminders are not reachable"); },
  cancel: async () => { throw new Error("repeating reminders are not reachable"); },
  cancelAll: async () => { throw new Error("repeating reminders are not reachable"); }
});

module.exports = Object.freeze({ classifyRepeatRequest, repeatTurnAnyLanguage, unreachableStore });
