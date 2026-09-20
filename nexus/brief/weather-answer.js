"use strict";

// Plain weather questions ("What's the weather in Nakuru tomorrow?", "Will it rain in Kisumu?", "Forecast for Eldoret") answered from
// a real forecast in degrees Celsius, not from a scraped web snippet (which once said "28°F" for Nakuru and gave Kisumu in Fahrenheit).
const NOT_A_PLACE = new Set(["me", "my", "here", "there", "home", "the", "a", "an", "town", "farm", "area", "place", "it", "that", "this", "where", "us", "our", "general", "maize", "beans", "and", "or", "with", "than", "versus", "vs"]);
const WHEN = "today|tomorrow|tonight|now|right now|this week|this weekend|the next few days|over the next \\d days?";

function cleanPlace(raw) {
  const words = String(raw || "").replace(/[.,!?]+$/g, "").trim().split(/\s+/).filter(Boolean);
  if (!words.length || words.length > 3) return "";
  if (words.some(word => !/^[A-Za-z][A-Za-z'’-]{1,24}$/.test(word) || NOT_A_PLACE.has(word.toLowerCase()))) return "";
  return words.join(" ");
}

function dayScope(phrase) {
  const p = String(phrase || "").toLowerCase();
  if (p === "tomorrow") return "tomorrow";
  if (/week|weekend|next few days|next \d/.test(p)) return "week";
  return "today";
}

// { place, scope: "today" | "tomorrow" | "week", kind: "weather" | "rain" } or null when the text is not a plain weather question about a named place.
function parseWeatherQuestion(text) {
  const t = String(text || "").toLowerCase().replace(/[’]/g, "'").replace(/[.!?]+$/g, "").replace(/\s+/g, " ").trim();
  if (!t || t.length > 90) return null;
  const forms = [
    [new RegExp(`^(?:what(?:'s| is)? )?(?:the )?(?:weather|forecast|temperature)(?: like)? (?:in|for|at|around) ([a-z'’ -]+?)(?: (${WHEN}))?$`), "weather", 1, 2],
    [new RegExp(`^(?:what(?:'s| is)? )?(?:the )?(?:weather|forecast)(?: like)? (${WHEN}) (?:in|for|at|around) ([a-z'’ -]+)$`), "weather", 2, 1],
    [new RegExp(`^how(?:'s| is) the weather (?:in|at|around) ([a-z'’ -]+?)(?: (${WHEN}))?$`), "weather", 1, 2],
    [new RegExp(`^(?:will|is) it (?:going to )?rain (?:(today|tomorrow|tonight) )?(?:in|at|near|around) ([a-z'’ -]+?)(?: (today|tomorrow|tonight))?$`), "rain", 2, 3, 1]
  ];
  for (const [pattern, kind, placeGroup, whenGroup, altWhenGroup] of forms) {
    const match = pattern.exec(t);
    if (!match) continue;
    const place = cleanPlace(match[placeGroup]);
    if (!place) return null;
    const scope = dayScope(match[whenGroup] || (altWhenGroup ? match[altWhenGroup] : ""));
    const bare = /^(?:what(?:'s| is)? )?(?:the )?forecast/.test(t) && !(match[whenGroup] || (altWhenGroup && match[altWhenGroup]));
    return { place, scope: bare ? "week" : scope, kind };
  }
  return null;
}

// How many forecast days are needed to answer.
function daysNeeded(question) { return question.scope === "tomorrow" ? 2 : question.scope === "week" ? 5 : 1; }

function rainPhrase(day) {
  if (day.rainChance === null) return "";
  if (day.rainChance < 20) return "rain unlikely";
  return `${day.rainChance}% chance of rain${day.rainMm !== null && day.rainMm >= 1 ? ` (about ${day.rainMm} mm)` : ""}`;
}
function dayLine(day) {
  return [`${day.high}°C/${day.low}°C`, day.summary, rainPhrase(day)].filter(Boolean).join(", ");
}
const weekday = date => { const d = new Date(`${date}T12:00:00Z`); return Number.isNaN(d.getTime()) ? "" : new Intl.DateTimeFormat("en-GB", { timeZone: "UTC", weekday: "short" }).format(d); };

// The words of the answer, or null when the forecast cannot answer this question (so the caller falls back).
function weatherAnswer(question, forecast) {
  const days = forecast?.days || [];
  if (!question || !days.length) return null;
  const where = `${forecast.place}${forecast.country ? `, ${forecast.country}` : ""}`;
  const source = " Source: Open-Meteo.";
  if (question.scope === "week") return `${where}, next ${days.length} days: ${days.map(day => `${weekday(day.date) || "day"} ${dayLine(day)}`).join("; ")}.${source}`;
  const index = question.scope === "tomorrow" ? 1 : 0;
  const day = days[index];
  if (!day) return null;
  const label = question.scope === "tomorrow" ? "tomorrow" : "today";
  if (question.kind === "rain") {
    if (day.rainChance === null) return null;
    const detail = `${day.rainChance}% chance of rain${day.rainMm !== null && day.rainMm >= 1 ? ` (about ${day.rainMm} mm)` : ""}`;
    const lead = day.rainChance >= 50 ? "Yes, rain is likely" : day.rainChance >= 25 ? "Maybe" : "Probably not";
    return `${lead} in ${where} ${label}: ${detail}.${source}`;
  }
  return `${where} ${label}: ${dayLine(day)}.${source}`;
}

module.exports = Object.freeze({ parseWeatherQuestion, weatherAnswer, daysNeeded });
