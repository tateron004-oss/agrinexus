"use strict";

// The words of a person's brief: a greeting with their name, today's weather for the town they told Kyro, and the reminders due
// today. Deliberately small, plain and private: no health information, nothing Kyro merely guessed. Returns null when there is
// nothing worth saying (no weather and no reminders), so a brief is never an empty greeting.
const DEFAULT_TIME_ZONE = "Africa/Nairobi";

function validTimeZone(zone) {
  try { new Intl.DateTimeFormat("en", { timeZone: zone }); return zone; } catch { return DEFAULT_TIME_ZONE; }
}

// The calendar day (YYYY-MM-DD) and hour a moment falls on in a time zone.
function localDay(date, timeZone) {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
  return parts;
}
function localHour(date, timeZone) {
  return Number(new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", hour12: false }).format(date)) % 24;
}

function weatherLine(forecast) {
  if (!forecast) return "";
  const parts = [`${forecast.place} today: ${forecast.high}°/${forecast.low}°`];
  if (forecast.summary) parts.push(forecast.summary);
  const rainy = forecast.rainChance !== null && forecast.rainChance >= 60;
  if (rainy) parts.push(`${forecast.rainChance}% chance of rain, so cover anything drying outside`);
  else if (forecast.high >= 33) parts.push("a hot day, so water early");
  return `${parts.join(", ")}.`;
}

// reminders: [{ text, scheduledAt }] (upcoming); only those that fall on today's date in the person's time zone are listed.
function reminderLine(reminders, now, timeZone) {
  const today = localDay(now, timeZone);
  const due = (reminders || []).filter(item => item?.text && item?.scheduledAt && !Number.isNaN(new Date(item.scheduledAt).getTime()) && localDay(new Date(item.scheduledAt), timeZone) === today)
    .sort((a, b) => new Date(a.scheduledAt) - new Date(b.scheduledAt));
  if (!due.length) return "";
  const shown = due.slice(0, 3).map(item => String(item.text).replace(/\s+/g, " ").trim().slice(0, 80));
  const more = due.length > 3 ? ` and ${due.length - 3} more` : "";
  return `Due today: ${shown.join("; ")}${more}.`;
}

function composeBrief({ name = "", forecast = null, reminders = [], now = new Date(), timeZone = DEFAULT_TIME_ZONE } = {}) {
  const zone = validTimeZone(timeZone);
  const weather = weatherLine(forecast); const due = reminderLine(reminders, now, zone);
  if (!weather && !due) return null;
  const first = String(name || "").trim().split(/\s+/)[0];
  const hello = localHour(now, zone) < 12 ? "Good morning" : localHour(now, zone) < 18 ? "Good afternoon" : "Good evening";
  return [`${hello}${first ? ` ${first}` : ""}.`, weather, due].filter(Boolean).join(" ");
}

module.exports = Object.freeze({ composeBrief, weatherLine, reminderLine, localDay, validTimeZone, DEFAULT_TIME_ZONE });
