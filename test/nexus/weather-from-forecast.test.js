"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { fetchForecast, fetchTodayForecast } = require("../../nexus/brief/weather.js");
const { parseWeatherQuestion, weatherAnswer, daysNeeded } = require("../../nexus/brief/weather-answer.js");
const { createBriefService } = require("../../nexus/brief/service.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

const reply = payload => ({ ok: true, status: 200, json: async () => payload });
const geocode = { results: [{ name: "Nakuru", country: "Kenya", latitude: -0.3, longitude: 36.07 }] };
const daily = (over = {}) => ({ daily: { time: ["2026-09-21", "2026-09-22", "2026-09-23"], weathercode: [61, 2, 95], temperature_2m_max: [25.4, 27.6, 24], temperature_2m_min: [16.2, 14.5, 15],
  precipitation_probability_max: [72, 10, 90], precipitation_sum: [4.24, 0, 12.5], ...over } });
const routes = (g, f) => async url => (String(url).includes("geocoding") ? g : f);

test("a multi-day forecast is read in Celsius and millimetres, with the country", async () => {
  const seen = [];
  const result = await fetchForecast({ place: "Nakuru", days: 3, fetchImpl: async url => { seen.push(String(url)); return String(url).includes("geocoding") ? reply(geocode) : reply(daily()); } });
  assert.equal(result.place, "Nakuru"); assert.equal(result.country, "Kenya"); assert.equal(result.days.length, 3);
  assert.deepEqual(result.days[0], { date: "2026-09-21", high: 25, low: 16, rainChance: 72, rainMm: 4.2, summary: "rain" });
  assert.deepEqual(result.days[2], { date: "2026-09-23", high: 24, low: 15, rainChance: 90, rainMm: 12.5, summary: "thunderstorms" });
  assert.match(seen[1], /forecast_days=3/); assert.match(seen[1], /precipitation_sum/); assert.doesNotMatch(seen[1], /fahrenheit/i, "Open-Meteo answers in Celsius by default");
  assert.equal((await fetchForecast({ place: "Nakuru", days: 99, fetchImpl: async url => { seen.push(String(url)); return String(url).includes("geocoding") ? reply(geocode) : reply(daily()); } })).days.length, 3);
  assert.match(seen.at(-1), /forecast_days=7/, "at most a week is asked for");
  const today = await fetchTodayForecast({ place: "Nakuru", fetchImpl: routes(reply(geocode), reply(daily())) });
  assert.deepEqual(today, { place: "Nakuru", high: 25, low: 16, rainChance: 72, summary: "rain" }, "the brief's shape is unchanged");
});

test("any trouble gives null, and a day with no temperatures ends the list", async () => {
  for (const [g, f] of [[reply({ results: [] }), reply(daily())], [{ ok: false }, reply(daily())], [reply(geocode), { ok: false }], [reply(geocode), reply({ daily: {} })], [reply(geocode), reply(daily({ temperature_2m_max: ["x", "y", "z"] }))]])
    assert.equal(await fetchForecast({ place: "Nakuru", fetchImpl: routes(g, f) }), null);
  assert.equal(await fetchForecast({ place: "Nakuru", fetchImpl: async () => { throw new Error("down"); } }), null);
  assert.equal(await fetchForecast({ place: "", fetchImpl: routes(reply(geocode), reply(daily())) }), null);
  const partial = await fetchForecast({ place: "Nakuru", days: 3, fetchImpl: routes(reply(geocode), reply(daily({ temperature_2m_max: [25, "x", 24] }))) });
  assert.equal(partial.days.length, 1, "stops at the first day it cannot read");
});

test("plain weather questions about a named place are recognized, and nothing else is", () => {
  const cases = { "What's the weather in Nakuru tomorrow?": ["nakuru", "tomorrow", "weather"], "weather in Kisumu": ["kisumu", "today", "weather"], "What is the weather like in Eldoret today": ["eldoret", "today", "weather"],
    "Forecast for Nairobi": ["nairobi", "week", "weather"], "forecast for Mombasa this week": ["mombasa", "week", "weather"], "How's the weather in Kakamega": ["kakamega", "today", "weather"],
    "Will it rain in Kisumu?": ["kisumu", "today", "rain"], "is it going to rain tomorrow in Nakuru": ["nakuru", "tomorrow", "rain"], "will it rain in Nairobi tomorrow": ["nairobi", "tomorrow", "rain"],
    "weather tomorrow in Nakuru": ["nakuru", "tomorrow", "weather"], "What's the weather in New York today": ["new york", "today", "weather"], "temperature in Lodwar": ["lodwar", "today", "weather"] };
  for (const [text, [place, scope, kind]] of Object.entries(cases)) assert.deepEqual(parseWeatherQuestion(text), { place, scope, kind }, text);
  for (const text of ["weather", "What's the weather", "How does weather affect maize?", "weather in my farm", "What is the weather in the field", "Weather in Nakuru and Kisumu", "will it rain", "Is the weather good for planting maize in Nakuru",
    "Why does it rain in Kisumu every afternoon and how do I protect my crops", "weather report", "x".repeat(200), ""])
    assert.equal(parseWeatherQuestion(text), null, text);
  assert.equal(daysNeeded({ scope: "today" }), 1); assert.equal(daysNeeded({ scope: "tomorrow" }), 2); assert.equal(daysNeeded({ scope: "week" }), 5);
});

test("the answer is plain, in Celsius, names the country and the source, and says how sure the rain is", () => {
  const forecast = { place: "Nakuru", country: "Kenya", days: [{ date: "2026-09-21", high: 25, low: 16, rainChance: 72, rainMm: 4.2, summary: "rain" }, { date: "2026-09-22", high: 28, low: 15, rainChance: 10, rainMm: 0, summary: "partly cloudy" },
    { date: "2026-09-23", high: 24, low: 15, rainChance: 90, rainMm: 12.5, summary: "thunderstorms" }] };
  assert.equal(weatherAnswer({ scope: "today", kind: "weather" }, forecast), "Nakuru, Kenya today: 25°C/16°C, rain, 72% chance of rain (about 4.2 mm). Source: Open-Meteo.");
  assert.equal(weatherAnswer({ scope: "tomorrow", kind: "weather" }, forecast), "Nakuru, Kenya tomorrow: 28°C/15°C, partly cloudy, rain unlikely. Source: Open-Meteo.");
  assert.equal(weatherAnswer({ scope: "week", kind: "weather" }, forecast), "Nakuru, Kenya, next 3 days: Mon 25°C/16°C, rain, 72% chance of rain (about 4.2 mm); Tue 28°C/15°C, partly cloudy, rain unlikely; Wed 24°C/15°C, thunderstorms, 90% chance of rain (about 12.5 mm). Source: Open-Meteo.");
  assert.equal(weatherAnswer({ scope: "today", kind: "rain" }, forecast), "Yes, rain is likely in Nakuru, Kenya today: 72% chance of rain (about 4.2 mm). Source: Open-Meteo.");
  assert.equal(weatherAnswer({ scope: "tomorrow", kind: "rain" }, forecast), "Probably not in Nakuru, Kenya tomorrow: 10% chance of rain. Source: Open-Meteo.");
  const maybe = { ...forecast, days: [{ ...forecast.days[0], rainChance: 30, rainMm: 0.4 }] };
  assert.equal(weatherAnswer({ scope: "today", kind: "rain" }, maybe), "Maybe in Nakuru, Kenya today: 30% chance of rain. Source: Open-Meteo.");
  assert.equal(weatherAnswer({ scope: "tomorrow", kind: "weather" }, maybe), null, "no data for the day asked about: not a guess");
  assert.equal(weatherAnswer({ scope: "today", kind: "rain" }, { ...forecast, days: [{ ...forecast.days[0], rainChance: null }] }), null);
  assert.equal(weatherAnswer({ scope: "today", kind: "weather" }, null), null); assert.equal(weatherAnswer(null, forecast), null);
  assert.equal(weatherAnswer({ scope: "today", kind: "weather" }, { place: "Somewhere", days: [{ date: "x", high: 1, low: 0, rainChance: null, rainMm: null, summary: "" }] }), "Somewhere today: 1°C/0°C. Source: Open-Meteo.");
});

const tools = { list: async () => [{ tool_id: "knowledge.search", availability: "available" }] };
const applications = { list: () => [{ applicationId: "learning", capabilities: [], riskTiers: [] }, { applicationId: "live-knowledge", capabilities: [], riskTiers: [] }] };
function planner({ forecast, profile = [] }) {
  const seen = { model: 0, forecast: [] };
  const memory = { async search() { return []; }, async recent() { return []; }, async saveProfileFact() { return {}; }, async forgetProfile() { return []; }, async profile() { return profile.map(([kind, value]) => ({ content: { kind, value } })); } };
  const model = { plan: async request => { seen.model += 1; return { goal: request.goal, application: "learning", riskTier: "low", steps: [{ id: "s", title: "Search", toolId: "knowledge.search", input: { query: request.goal } }] }; }, respond: async () => null };
  const brief = { compose: async () => null, forecast: async args => { seen.forecast.push(args); return typeof forecast === "function" ? forecast(args) : forecast; } };
  return { seen, planner: new OpenEndedPlanner({ model, tools, applications, memory, brief }) };
}
const ask = (p, text) => p.plan({ command: { text, channel: "typed", locale: "en", tenantId: "t1", actorId: "u1" }, context: { can: () => true, roles: [] } });
const nakuru = { place: "Nakuru", country: "Kenya", days: [{ date: "2026-09-21", high: 25, low: 16, rainChance: 72, rainMm: 4.2, summary: "rain" }, { date: "2026-09-22", high: 28, low: 15, rainChance: 10, rainMm: 0, summary: "partly cloudy" }] };

test("the planner answers a weather question from the forecast, with no web search and no model", async () => {
  const { planner: p, seen } = planner({ forecast: nakuru });
  const plan = await ask(p, "What's the weather in Nakuru tomorrow?");
  assert.equal(plan.response, "Nakuru, Kenya tomorrow: 28°C/15°C, partly cloudy, rain unlikely. Source: Open-Meteo."); assert.deepEqual(plan.steps, []); assert.equal(plan.application, "conversation");
  assert.deepEqual(seen.forecast, [{ place: "nakuru", days: 2 }]); assert.equal(seen.model, 0);
  assert.match((await ask(p, "Will it rain in Nakuru?")).response, /^Yes, rain is likely in Nakuru, Kenya today/);
});

test("a bare weather question with a saved town is answered from the forecast too, and is still asked for when no town is saved", async () => {
  const saved = planner({ forecast: nakuru, profile: [["location", "Nakuru"]] });
  assert.match((await ask(saved.planner, "weather")).response, /^Nakuru, Kenya today: 25°C\/16°C/); assert.equal(saved.seen.model, 0);
  const none = planner({ forecast: nakuru });
  assert.match((await ask(none.planner, "weather")).clarification, /^Which town or place should I check the weather for\?/);
});

test("if the forecast cannot be had, planning carries on with the web search as before; other questions never reach the forecast", async () => {
  const down = planner({ forecast: null });
  const plan = await ask(down.planner, "What's the weather in Nakuru today?");
  assert.equal(plan.steps[0].toolId, "knowledge.search"); assert.equal(down.seen.model, 1);
  const broken = planner({ forecast: () => { throw new Error("boom"); } });
  assert.equal((await ask(broken.planner, "weather in Kisumu")).steps[0].toolId, "knowledge.search", "a throwing forecast never breaks the turn");
  const other = planner({ forecast: nakuru });
  await ask(other.planner, "How does weather affect maize?"); await ask(other.planner, "Explain how mobile money works");
  assert.deepEqual(other.seen.forecast, []);
  const service = createBriefService({ fetchImpl: routes(reply(geocode), reply(daily())) });
  assert.equal((await service.forecast({ place: "Nakuru", days: 2 })).days.length, 2);
});
