"use strict";

// A SIMULATED sample travel itinerary, as a document, for a travel agent to show a client or for anyone planning a trip (asked for on 26 October 2026: "if I am a travel agent and I want to show my potential clients a simulated travel itinerary for anywhere they want
// to go, not just Africa"). The days are written by the AI model from general knowledge, so the document says in its first lines that it is an illustration: nothing is booked, no price, flight, schedule, opening time, visa or health rule is stated or checked, and
// the person is pointed to the official sources to check before a real trip. If the model cannot be asked (no key, over budget, an error) the document is an outline to fill in, and says so. Kyro never books, buys or reserves anything.
//
//   tripGoal(request) -> the instructions given to the model (it must answer with JSON only)
//   parseTripAnswer(text, days) -> { overview, days: [{ day, title, morning, afternoon, evening }], tips: [] } or null when the answer cannot be used
//   outlineContent(request) -> the same shape, with no destination-specific ideas (used when the model gives nothing)
//   tripDocument(request, content, { now, outline }) -> { title, content, format } for documents.create
//   needsPlaceAnswer(region) -> the question asked when only a region (Africa, Europe) was named
//   MAX_DAYS

const MAX_DAYS = 14;
// what the model is told it is, for this one job (its usual instructions are for farm questions)
const TRIP_INSTRUCTIONS = "You are Kyro, an assistant for travel agents and travelers. Follow the request exactly and answer with only the JSON object it asks for, with no other words.";
const MAX_FIELD = 260;
const OFFICIAL = [
  "Entry rules, visas, health advice and safety advisories: your own government's travel advice. For U.S. travelers that is travel.state.gov (the State Department) and wwwnc.cdc.gov/travel (the CDC's travelers' health pages).",
  "Prices, flights, hotels, tours, opening times and availability: the airline, the hotel or the tour company, on the day you book."
];

const clean = (value, max = MAX_FIELD) => String(value == null ? "" : value).replace(/[\u0000-\u001f\u007f]+/g, " ").replace(/\s+/g, " ").replace(/[<>]/g, "").trim().slice(0, max);
const plural = (count, word) => `${count} ${word}${count === 1 ? "" : "s"}`;

function tripGoal(request) {
  const days = Math.min(Math.max(Number(request.days) || 7, 1), MAX_DAYS);
  const who = request.travelers ? `${plural(request.travelers, "traveler")}` : "a small group";
  const bits = [`destination: ${request.destination}`, request.origin ? `starting from: ${request.origin}` : "", request.stops?.length ? `must include these stops, in this order: ${request.stops.join(", ")}` : "", `length: exactly ${days} days`, `travelers: ${who}`, request.style ? `style: ${request.style}` : ""].filter(Boolean).join("; ");
  return [
    "Write a SIMULATED sample travel itinerary that a travel agent can show a client as an illustration.",
    `Trip: ${bits}.`,
    "Answer with ONLY a JSON object, no other words, in this exact shape: {\"overview\": \"two short sentences about the trip\", \"days\": [{\"day\": 1, \"title\": \"short title\", \"morning\": \"...\", \"afternoon\": \"...\", \"evening\": \"...\"}], \"tips\": [\"three to five short, general tips\"]}.",
    `Rules: exactly ${days} items in "days", numbered from 1. Each of morning, afternoon and evening is one plain sentence of at most 25 words. Suggest only well-known places, experiences, foods and activities for the destination; if you are not sure of a specific place, say something general such as "a local market". Day 1 is arrival and settling in; the last day is departure.`,
    "Do NOT state any price, cost, flight number, airline, train or bus time, schedule, opening hour, visa rule, vaccine or health rule, or exchange rate. Do not promise anything. Do not say anything is booked or available. No markdown."
  ].join("\n");
}

function extractJson(text) {
  const value = String(text || "").trim();
  if (!value) return null;
  const start = value.indexOf("{"); const end = value.lastIndexOf("}");
  if (start < 0 || end <= start) return null;
  try { return JSON.parse(value.slice(start, end + 1)); } catch { return null; }
}

function parseTripAnswer(text, days) {
  const data = extractJson(text);
  if (!data || !Array.isArray(data.days)) return null;
  const wanted = Math.min(Math.max(Number(days) || 7, 1), MAX_DAYS);
  const rows = data.days.slice(0, wanted).map((row, index) => ({
    day: index + 1, title: clean(row?.title, 90), morning: clean(row?.morning), afternoon: clean(row?.afternoon), evening: clean(row?.evening)
  })).filter(row => row.title || row.morning || row.afternoon || row.evening);
  // a model that gave far fewer days than asked for is not a usable itinerary
  if (rows.length < Math.min(wanted, 3) || rows.length < Math.ceil(wanted / 2)) return null;
  return { overview: clean(data.overview, 400), days: rows.map((row, index) => ({ ...row, day: index + 1 })), tips: (Array.isArray(data.tips) ? data.tips : []).map(tip => clean(tip, 200)).filter(Boolean).slice(0, 6) };
}

function outlineContent(request) {
  const days = Math.min(Math.max(Number(request.days) || 7, 1), MAX_DAYS);
  const place = request.destination;
  const rows = [];
  for (let day = 1; day <= days; day += 1) {
    if (day === 1) rows.push({ day, title: "Arrival and settling in", morning: "Travel to " + place + ".", afternoon: "Check in and rest.", evening: "A relaxed first evening near where you are staying." });
    else if (day === days) rows.push({ day, title: "Last morning and departure", morning: "A last walk or a favorite stop.", afternoon: "Travel home.", evening: "" });
    else rows.push({ day, title: "To fill in", morning: "(add a morning activity)", afternoon: "(add an afternoon activity)", evening: "(add an evening plan)" });
  }
  return { overview: `An outline for ${plural(days, "day")} in ${place}. The ideas for each day were not written this time, so the days are blank for you to fill in.`, days: rows, tips: [], outline: true };
}

function tripTitle(request) {
  const days = Math.min(Math.max(Number(request.days) || 7, 1), MAX_DAYS);
  return clean(`Sample itinerary: ${plural(days, "day")} in ${request.destination}`, 90);
}

function tripDocument(request, content, { now = new Date(), outline = false } = {}) {
  const days = content.days.length;
  const route = [request.origin, ...(request.stops || []), request.destination].filter(Boolean);
  const lines = [];
  lines.push("# SAMPLE ITINERARY (SIMULATED)");
  lines.push(`${tripTitle(request)}`);
  lines.push("");
  lines.push("This is an illustration made by Kyro, not a booking or a quote. Nothing is reserved. No prices, flights, schedules, opening times or availability are shown or checked.");
  if (outline || content.outline) lines.push("The ideas for each day could not be written this time, so this is an outline for you to fill in.");
  lines.push("");
  lines.push("## The trip at a glance");
  lines.push(`- Destination: ${request.destination}`);
  if (request.origin) lines.push(`- Starting from: ${request.origin}`);
  if (request.stops?.length) lines.push(`- Stops on the way: ${request.stops.join(", ")}`);
  lines.push(`- Length: ${plural(days, "day")}`);
  if (request.travelers) lines.push(`- Travelers: ${request.travelers}`);
  if (request.style) lines.push(`- Style: ${request.style}`);
  if (route.length > 1) lines.push(`- Route on the map: ${route.join(" → ")} (say "show the route on the map")`);
  if (content.overview) { lines.push(""); lines.push(content.overview); }
  lines.push("");
  lines.push("## Day by day");
  for (const row of content.days) {
    lines.push(`## Day ${row.day}${row.title ? `: ${row.title}` : ""}`);
    if (row.morning) lines.push(`- Morning: ${row.morning}`);
    if (row.afternoon) lines.push(`- Afternoon: ${row.afternoon}`);
    if (row.evening) lines.push(`- Evening: ${row.evening}`);
  }
  if (content.tips?.length) { lines.push(""); lines.push("## Good to know (ideas, not rules)"); for (const tip of content.tips) lines.push(`- ${tip}`); }
  lines.push("");
  lines.push("## Before a real trip, check with the source");
  for (const item of OFFICIAL) lines.push(`- ${item}`);
  lines.push("");
  lines.push(`Made with Kyro on ${now.toISOString().slice(0, 10)}. A travel agent can add real quotes, dates and bookings to this outline.`);
  return { title: tripTitle(request), content: lines.join("\n").slice(0, 20000), format: "docx" };
}

function needsPlaceAnswer(region) {
  return `I can make a sample itinerary for ${region}, but I need a country or a city so the days make sense. For example: "Plan a 7 day trip to Kenya", or "Make an itinerary for Lisbon from Atlanta". I do not have a saved trip. Which country or city should I use?`;
}

module.exports = Object.freeze({ MAX_DAYS, TRIP_INSTRUCTIONS, tripGoal, parseTripAnswer, outlineContent, tripDocument, needsPlaceAnswer, tripTitle });
