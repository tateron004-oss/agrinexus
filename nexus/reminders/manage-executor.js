"use strict";

const { extractAssistantReminderTask } = require("./time-phrase.js");

// Real executors for reminders.list and reminders.cancel. reminders.schedule
// could always create a reminder but nothing could show or remove one, so a
// mistaken or test reminder could never be undone.
//
// Result shapes are flat, and lists are arrays of readable strings on purpose:
// the client's generic outcome card prints an array of objects as
// "[object Object]".

function describe(row) {
  const content = row.content || {};
  const due = row.scheduled_at ? new Date(row.scheduled_at).toISOString().slice(0, 16).replace("T", " ") + " UTC" : "no time set";
  return `${String(content.reminderText || content.body || "Untitled reminder")} (due ${due})`;
}

function normalize(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

// Found live: a raw substring test (haystack.includes(subject)) let a
// request naming a reminder that does NOT exist silently match a real,
// different reminder whenever the requested text happened to be a
// character-for-character prefix of the stored one -- "invoice 2" (no such
// reminder) is a substring of the real "...invoice 23", so cancelling
// "invoice 2" silently cancelled the real "invoice 23" reminder instead of
// reporting not_found. Because the collision produces exactly one match,
// the matches.length>1 "ambiguous" guard below never sees it. Word-token
// matching (every word of the request must be a whole word in the stored
// text, the same pattern nexus/personal/items.js findItem and
// nexus/farmwork's findParty/findAnimal already use) closes this without
// requiring the two texts to match exactly.
function subjectMatches(storedText, subject) {
  const words = storedText.split(" ");
  return subject.split(" ").every(word => words.includes(word));
}

function createRemindersListExecutor({ notifications }) {
  if (!notifications?.listReminders) throw new Error("A notification repository is required.");
  return async function execute({ context }) {
    const rows = await notifications.listReminders({ tenantId: context.tenantId, userId: context.userId });
    return {
      count: rows.length,
      reminders: rows.map(describe),
      reminderIds: rows.map(row => row.notification_id),
      summary: rows.length
        ? `You have ${rows.length} upcoming reminder${rows.length === 1 ? "" : "s"}.`
        : "You have no upcoming reminders."
    };
  };
}

function verifyRemindersListOutcome({ result }) {
  const verified = Number.isInteger(result?.count) && Array.isArray(result?.reminders) && result.reminders.length === result.count;
  return { verified, method: "real_reminder_lookup", reason: verified ? null : "reminder_lookup_incomplete" };
}

// Never guesses: cancels only when exactly one upcoming reminder matches the
// given id or text. Zero matches, several matches, or no identifying text at
// all return a normal (non-throwing) "not cancelled" result that names the
// candidates, the same way a document lookup honestly reports "not found".
function createRemindersCancelExecutor({ notifications }) {
  if (!notifications?.listReminders || !notifications?.cancelReminder) throw new Error("A notification repository is required.");
  return async function execute({ input = {}, context }) {
    const rows = await notifications.listReminders({ tenantId: context.tenantId, userId: context.userId });
    const wantedId = String(input.reminderId || "").trim();
    // Strip any time phrase the same way reminders.schedule did when it stored
    // the text, so "cancel the reminder to call the vendor tomorrow at 3pm"
    // matches the stored "call the vendor".
    const rawSubject = String(input.reminder || input.subject || input.text || "");
    // (extractAssistantReminderTask returns a default like "follow up" for
    // empty input, so an absent subject must stay absent.)
    const subject = rawSubject.trim() ? normalize(extractAssistantReminderTask(rawSubject)) : "";
    let matches;
    if (wantedId) matches = rows.filter(row => row.notification_id === wantedId);
    else if (subject.length >= 3) matches = rows.filter(row => subjectMatches(normalize((row.content || {}).reminderText || (row.content || {}).body), subject));
    else matches = [];
    const unresolved = reason => ({ cancelled: false, reason, matches: matches.length,
      candidates: rows.map(describe), candidateIds: rows.map(row => row.notification_id) });
    if (!wantedId && subject.length < 3) return unresolved("which_reminder");
    if (matches.length === 0) return unresolved("not_found");
    if (matches.length > 1) return unresolved("ambiguous");
    const target = matches[0];
    const cancelled = await notifications.cancelReminder({ tenantId: context.tenantId, userId: context.userId, notificationId: target.notification_id });
    if (!cancelled) return unresolved("no_longer_upcoming");
    return { cancelled: true, reminderId: target.notification_id, reminder: describe(target),
      summary: `Cancelled the reminder: ${describe(target)}` };
  };
}

function verifyRemindersCancelOutcome({ result }) {
  // A lookup that honestly found nothing, or several, is still a correctly
  // executed request; only a result with neither shape is unverified.
  const done = result?.cancelled === true && typeof result?.reminderId === "string" && result.reminderId.length > 0;
  const declined = result?.cancelled === false && typeof result?.reason === "string" && Array.isArray(result?.candidates);
  return { verified: Boolean(done || declined), method: "real_reminder_cancel", reason: done || declined ? null : "reminder_cancel_incomplete" };
}

module.exports = Object.freeze({ createRemindersListExecutor, verifyRemindersListOutcome,
  createRemindersCancelExecutor, verifyRemindersCancelOutcome });
