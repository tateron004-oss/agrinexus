"use strict";

// A reminder said twice is ONE reminder. The same words (ignoring case and punctuation) due within 90 seconds of each other are copies of each other, whichever route made them: the planner's reminders.schedule,
// the older command route and phone line (delivery-store.js), or the voice model's own tool call arriving as well as the page's. Found from the owner's 4 November 2026 test report ("i cancelled the reminder and it
// sent the reminder anyway"): the planner's creator never looked for a copy the older route had just made, so one spoken reminder could be two rows, and a cancel that stopped one left the other to fire.
//
// Works on both shapes the code uses: a stored row ({ content: { reminderText }, scheduled_at }) and the delivery store's item ({ task, scheduledAt }).

const DUPLICATE_WINDOW_MS = 90 * 1000;
const normalise = value => String(value || "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
const wordsOf = reminder => normalise(reminder?.content?.reminderText || reminder?.content?.body || reminder?.task || "");
const timeOf = reminder => Date.parse(reminder?.scheduled_at || reminder?.scheduledAt || "");

function sameReminder(a, b, windowMs = DUPLICATE_WINDOW_MS) {
  const wordsA = wordsOf(a); const wordsB = wordsOf(b);
  const timeA = timeOf(a); const timeB = timeOf(b);
  return Boolean(wordsA) && wordsA === wordsB && Number.isFinite(timeA) && Number.isFinite(timeB) && Math.abs(timeA - timeB) <= windowMs;
}

// Every reminder in `reminders` that is a copy of `target` (including `target` itself when it is in the list).
const copiesOf = (reminders, target) => (Array.isArray(reminders) ? reminders : []).filter(reminder => sameReminder(reminder, target));

// True when there are two or more and every one is a copy of the first: they are one reminder, set more than once.
const areAllCopies = reminders => Array.isArray(reminders) && reminders.length > 1 && reminders.every(reminder => sameReminder(reminder, reminders[0]));

module.exports = Object.freeze({ DUPLICATE_WINDOW_MS, sameReminder, copiesOf, areAllCopies, normalise });
