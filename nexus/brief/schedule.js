"use strict";

// The clock side of a scheduled brief: reading "7am" / "6:30" / "19:00", and deciding, in the person's own time zone, whether their
// chosen time has arrived today. Working in local time each time means there is no drift when clocks change.
const { validTimeZone, localDay } = require("./compose.js");

// "7am", "7:30 am", "6.30", "19:00", "7 p.m.", "at 7". Returns "HH:MM" (24-hour) or null. A bare number is read as a 24-hour hour, so "7" is 07:00.
function parseTimeOfDay(text) {
  const match = /(?:^|\s)(\d{1,2})(?:[:.](\d{2}))?\s*(a\.?m\.?|p\.?m\.?)?\s*(?:every (?:day|morning))?[.!]*$/i.exec(String(text || "").trim().toLowerCase());
  if (!match) return null;
  let hour = Number(match[1]); const minute = match[2] === undefined ? 0 : Number(match[2]); const suffix = (match[3] || "").replace(/\./g, "");
  if (!Number.isInteger(hour) || minute < 0 || minute > 59) return null;
  if (suffix) { if (hour < 1 || hour > 12) return null; hour = suffix === "pm" ? (hour === 12 ? 12 : hour + 12) : (hour === 12 ? 0 : hour); }
  else if (hour > 23) return null;
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function formatTimeOfDay(timeOfDay) {
  const [hour, minute] = String(timeOfDay || "").split(":").map(Number);
  if (!Number.isInteger(hour) || !Number.isInteger(minute)) return "";
  return `${hour % 12 === 0 ? 12 : hour % 12}:${String(minute).padStart(2, "0")} ${hour < 12 ? "am" : "pm"}`;
}

function minutesOfDay(timeOfDay) {
  const [hour, minute] = String(timeOfDay || "").split(":").map(Number);
  return Number.isInteger(hour) && Number.isInteger(minute) ? hour * 60 + minute : null;
}

// The person's calendar day and minutes since local midnight at a moment.
function localClock(now, timeZone) {
  const zone = validTimeZone(timeZone);
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: zone, hour: "2-digit", minute: "2-digit", hour12: false }).format(now).split(":").map(Number);
  return { day: localDay(now, zone), minutes: (parts[0] % 24) * 60 + parts[1], zone };
}

// Due once their chosen time has arrived, and only for a while afterwards: a morning brief is not sent at three in the afternoon
// because the worker was down at seven. It never runs past the end of the local day.
function isDueNow({ timeOfDay, timeZone, now = new Date(), windowMinutes = 180 }) {
  const target = minutesOfDay(timeOfDay);
  if (target === null) return false;
  const clock = localClock(now, timeZone);
  return clock.minutes >= target && clock.minutes < Math.min(target + windowMinutes, 1440);
}

module.exports = Object.freeze({ parseTimeOfDay, formatTimeOfDay, minutesOfDay, localClock, isDueNow });
