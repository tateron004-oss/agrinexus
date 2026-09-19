"use strict";

function parseAssistantReminderTime(text = "", options = {}) {
  const lower = String(text || "").toLowerCase();
  const now = new Date();
  const addMs = ms => new Date(now.getTime() + ms);
  const explicitTime = lower.match(/\bat\s+(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\b/);
  const setClock = date => {
    if (!explicitTime) return date;
    let hour = Number(explicitTime[1]);
    const minute = Number(explicitTime[2] || 0);
    const meridiem = explicitTime[3] || "";
    if (meridiem === "pm" && hour < 12) hour += 12;
    if (meridiem === "am" && hour === 12) hour = 0;
    const adjusted = new Date(date);
    adjusted.setHours(hour, minute, 0, 0);
    if (adjusted.getTime() <= now.getTime()) adjusted.setDate(adjusted.getDate() + 1);
    return adjusted;
  };
  const relative = lower.match(/\bin\s+(\d{1,3})\s*(minute|minutes|min|hour|hours|hr|day|days|week|weeks)\b/);
  if (relative) {
    const amount = Number(relative[1]);
    const unit = relative[2];
    const multiplier = /minute|min/.test(unit) ? 60 * 1000
      : /hour|hr/.test(unit) ? 60 * 60 * 1000
        : /week/.test(unit) ? 7 * 24 * 60 * 60 * 1000
          : 24 * 60 * 60 * 1000;
    const date = addMs(amount * multiplier);
    return { scheduledAt: date.toISOString(), whenLabel: `in ${amount} ${unit}` };
  }
  const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const weekdayIndex = dayNames.findIndex(day => lower.includes(day));
  if (weekdayIndex >= 0) {
    const date = new Date(now);
    const daysAhead = (weekdayIndex - date.getDay() + 7) % 7 || 7;
    date.setDate(date.getDate() + daysAhead);
    const scheduled = setClock(date);
    return { scheduledAt: scheduled.toISOString(), whenLabel: `${dayNames[weekdayIndex]}${explicitTime ? ` at ${explicitTime[0].replace(/^at\s+/, "")}` : ""}` };
  }
  if (/\btomorrow\b/.test(lower)) {
    const date = new Date(now);
    date.setDate(date.getDate() + 1);
    const scheduled = setClock(date);
    return { scheduledAt: scheduled.toISOString(), whenLabel: `tomorrow${explicitTime ? ` at ${explicitTime[0].replace(/^at\s+/, "")}` : ""}` };
  }
  if (/\btonight\b/.test(lower)) {
    const date = new Date(now);
    date.setHours(19, 0, 0, 0);
    if (date.getTime() <= now.getTime()) date.setDate(date.getDate() + 1);
    return { scheduledAt: date.toISOString(), whenLabel: "tonight" };
  }
  if (/\blater today\b|\bthis afternoon\b/.test(lower)) {
    const date = new Date(now);
    date.setHours(/\bafternoon\b/.test(lower) ? 15 : now.getHours() + 3, 0, 0, 0);
    if (date.getTime() <= now.getTime()) date.setTime(now.getTime() + 3 * 60 * 60 * 1000);
    return { scheduledAt: date.toISOString(), whenLabel: /\bafternoon\b/.test(lower) ? "this afternoon" : "later today" };
  }
  if (explicitTime) {
    const scheduled = setClock(new Date(now));
    return { scheduledAt: scheduled.toISOString(), whenLabel: explicitTime[0].replace(/^at\s+/, "") };
  }
  const fallback = addMs(24 * 60 * 60 * 1000);
  return { scheduledAt: fallback.toISOString(), whenLabel: "tomorrow" };
}

function extractAssistantReminderTask(text = "") {
  const source = String(text || "")
    .replace(/\bnexus\b/ig, " ")
    .replace(/\b(hey|please|can you|could you|would you)\b/ig, " ")
    .replace(/\s+/g, " ")
    .trim();
  const match = source.match(/\b(?:remind me to|remind me about|notify me to|notify me about|set a reminder to|set reminder to|remember to|follow up to|follow up about)\s+(.+)/i);
  const task = (match?.[1] || source)
    .replace(/\b(in\s+\d{1,3}\s*(minutes?|mins?|hours?|hrs?|days?|weeks?)|tomorrow|tonight|later today|this afternoon|on\s+(sunday|monday|tuesday|wednesday|thursday|friday|saturday)|at\s+\d{1,2}(:\d{2})?\s*(am|pm)?)\b/ig, " ")
    .replace(/\s+/g, " ")
    .trim();
  // Removing "in 2 minutes" from "test push in 2 minutes." left "test push ." (a space before the period).
  return task.replace(/\s+([.,!?;:])/g, "$1").trim() || "follow up";
}

module.exports = Object.freeze({ parseAssistantReminderTime, extractAssistantReminderTask });
