"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { fetchTodayForecast, describeCode } = require("../../nexus/brief/weather.js");
const { composeBrief, weatherLine, reminderLine, validTimeZone } = require("../../nexus/brief/compose.js");
const { createBriefService } = require("../../nexus/brief/service.js");
const { OpenEndedPlanner, isBriefRequest } = require("../../nexus/brain/planner.js");

const reply = payload => ({ ok: true, status: 200, json: async () => payload });
const geocode = { results: [{ name: "Nakuru", latitude: -0.3, longitude: 36.07 }] };
const forecast = (over = {}) => ({ daily: { weathercode: [61], temperature_2m_max: [26.4], temperature_2m_min: [13.6], precipitation_probability_max: [72], ...over } });
const fakeFetch = (routes) => async url => { const key = String(url).includes("geocoding") ? "geocode" : "forecast"; const value = routes[key]; if (value instanceof Error) throw value; return value; };

test("today's forecast is read for the named place, in whole degrees", async () => {
  const result = await fetchTodayForecast({ place: "Nakuru", fetchImpl: fakeFetch({ geocode: reply(geocode), forecast: reply(forecast()) }) });
  assert.deepEqual(result, { place: "Nakuru", high: 26, low: 14, rainChance: 72, summary: "rain" });
  assert.equal(describeCode(0), "clear skies"); assert.equal(describeCode(2), "partly cloudy"); assert.equal(describeCode(3), "overcast"); assert.equal(describeCode(81), "showers"); assert.equal(describeCode(95), "thunderstorms"); assert.equal(describeCode(999), "");
});

test("any trouble getting the forecast gives null, never a guess", async () => {
  const cases = [{ geocode: reply({ results: [] }), forecast: reply(forecast()) }, { geocode: reply({}), forecast: reply(forecast()) }, { geocode: { ok: false, status: 500 }, forecast: reply(forecast()) },
    { geocode: reply(geocode), forecast: { ok: false, status: 503 } }, { geocode: new Error("network"), forecast: reply(forecast()) }, { geocode: reply(geocode), forecast: reply({ daily: {} }) },
    { geocode: reply(geocode), forecast: reply(forecast({ temperature_2m_max: ["x"] })) }, { geocode: reply({ results: [{ name: "X", latitude: "no", longitude: 1 }] }), forecast: reply(forecast()) }];
  for (const routes of cases) assert.equal(await fetchTodayForecast({ place: "Nakuru", fetchImpl: fakeFetch(routes) }), null, JSON.stringify(Object.keys(routes)));
  assert.equal(await fetchTodayForecast({ place: "", fetchImpl: fakeFetch({}) }), null); assert.equal(await fetchTodayForecast({ place: "Nakuru", fetchImpl: null }), null);
  const noRainField = await fetchTodayForecast({ place: "Nakuru", fetchImpl: fakeFetch({ geocode: reply(geocode), forecast: reply(forecast({ precipitation_probability_max: [] })) }) });
  assert.equal(noRainField.rainChance, null);
});

test("the message: greeting by local time, weather with cautious advice, and the reminders due today", () => {
  const morning = new Date("2026-09-21T04:30:00Z"); // 07:30 in Nairobi
  const rain = { place: "Nakuru", high: 26, low: 14, rainChance: 72, summary: "rain" };
  assert.equal(composeBrief({ name: "Amina Wanjiru", forecast: rain, now: morning }), "Good morning Amina. Nakuru today: 26°/14°, rain, 72% chance of rain, so cover anything drying outside.");
  assert.equal(weatherLine({ place: "Kisumu", high: 34, low: 22, rainChance: 10, summary: "clear skies" }), "Kisumu today: 34°/22°, clear skies, a hot day, so water early.");
  assert.equal(weatherLine({ place: "Kisumu", high: 28, low: 20, rainChance: 30, summary: "" }), "Kisumu today: 28°/20°.");
  assert.equal(weatherLine(null), "");
  assert.match(composeBrief({ forecast: rain, now: new Date("2026-09-21T12:00:00Z") }), /^Good afternoon\. /, "no name, afternoon in Nairobi");
  assert.match(composeBrief({ forecast: rain, now: new Date("2026-09-21T18:00:00Z") }), /^Good evening\. /);
  const reminders = [{ text: "Spray the tomatoes", scheduledAt: "2026-09-21T06:00:00Z" }, { text: "Call the buyer", scheduledAt: "2026-09-21T09:00:00Z" }, { text: "Tomorrow thing", scheduledAt: "2026-09-22T06:00:00Z" }];
  assert.equal(composeBrief({ name: "Amina", forecast: null, reminders, now: morning }), "Good morning Amina. Due today: Spray the tomatoes; Call the buyer.");
});

test("'today' is the person's own day, more than three reminders are summarized, and nothing to say means no brief", () => {
  // 22:30 UTC on the 20th is already the 21st in Nairobi (UTC+3), but still the 20th in UTC.
  const lateUtc = new Date("2026-09-20T22:30:00Z");
  const items = [{ text: "Early one", scheduledAt: "2026-09-21T03:00:00Z" }];
  assert.equal(reminderLine(items, lateUtc, "Africa/Nairobi"), "Due today: Early one.");
  assert.equal(reminderLine(items, lateUtc, "UTC"), "");
  const many = ["a", "b", "c", "d", "e"].map((text, index) => ({ text, scheduledAt: `2026-09-21T0${index + 1}:00:00Z` }));
  assert.equal(reminderLine(many, new Date("2026-09-21T00:30:00Z"), "UTC"), "Due today: a; b; c and 2 more.");
  assert.equal(composeBrief({ name: "Amina", forecast: null, reminders: [], now: lateUtc }), null);
  assert.equal(composeBrief({ name: "Amina" }), null);
  assert.equal(validTimeZone("Not/AZone"), "Africa/Nairobi"); assert.equal(validTimeZone("America/Los_Angeles"), "America/Los_Angeles");
  assert.equal(reminderLine([{ text: "", scheduledAt: "2026-09-21T03:00:00Z" }, { text: "x", scheduledAt: "not a date" }, null], lateUtc, "Africa/Nairobi"), "", "junk rows are ignored");
});

test("the service reads reminders and the forecast, and one failing never spoils the other", async () => {
  const now = new Date("2026-09-21T04:30:00Z"); const listed = [];
  const notifications = { async listReminders(args) { listed.push(args); return [{ content: { reminderText: "Spray the tomatoes" }, scheduled_at: "2026-09-21T06:00:00Z" }]; } };
  const ok = createBriefService({ notifications, fetchImpl: fakeFetch({ geocode: reply(geocode), forecast: reply(forecast()) }), now: () => now });
  assert.equal(await ok.compose({ tenantId: "t1", userId: "u1", known: { name: "Amina", location: "Nakuru" } }),
    "Good morning Amina. Nakuru today: 26°/14°, rain, 72% chance of rain, so cover anything drying outside. Due today: Spray the tomatoes.");
  assert.deepEqual(listed[0], { tenantId: "t1", userId: "u1", limit: 50 });
  const noWeather = createBriefService({ notifications, fetchImpl: fakeFetch({ geocode: new Error("down"), forecast: reply(forecast()) }), now: () => now });
  assert.equal(await noWeather.compose({ tenantId: "t1", userId: "u1", known: { name: "Amina", location: "Nakuru" } }), "Good morning Amina. Due today: Spray the tomatoes.");
  const brokenReminders = createBriefService({ notifications: { listReminders: async () => { throw new Error("db"); } }, fetchImpl: fakeFetch({ geocode: reply(geocode), forecast: reply(forecast()) }), now: () => now });
  assert.match(await brokenReminders.compose({ tenantId: "t1", userId: "u1", known: { location: "Nakuru" } }), /^Good morning\. Nakuru today/);
  let fetched = 0; const noTown = createBriefService({ notifications: { listReminders: async () => [] }, fetchImpl: async () => { fetched += 1; return reply({}); }, now: () => now });
  assert.equal(await noTown.compose({ tenantId: "t1", userId: "u1", known: { name: "Amina" } }), null); assert.equal(fetched, 0, "no saved town, no weather request");
});

test("only a request for the brief is one, never a request to schedule it", () => {
  for (const text of ["Give me my brief", "give me my morning brief", "Show me my daily brief", "What's my brief?", "what is my morning briefing", "Brief me", "brief me now", "my morning brief", "Morning brief", "Tell me my daily update", "Read me my brief today"])
    assert.equal(isBriefRequest(text), true, text);
  for (const text of ["Send me a morning brief at 7am", "Stop my morning brief", "Change my brief to 6:30", "Give me a brief history of maize", "What is a brief?", "Brief my supplier", "Summarize my week", "I need a brief break", ""])
    assert.equal(isBriefRequest(text), false, text);
});

test("the planner answers the brief from the service, or explains what it needs, without any tool", async () => {
  const tools = { list: async () => [{ tool_id: "knowledge.search", availability: "available" }] };
  const applications = { list: () => [{ applicationId: "learning", capabilities: [], riskTiers: [] }] };
  const memory = { async search() { return []; }, async recent() { return []; }, async saveProfileFact() { return {}; }, async forgetProfile() { return []; },
    async profile() { return [{ content: { kind: "name", value: "Amina" } }, { content: { kind: "location", value: "Nakuru" } }]; } };
  const model = { plan: async () => assert.fail("no model for a brief"), respond: async () => assert.fail("no model for a brief") };
  const ask = (brief, mem = memory) => new OpenEndedPlanner({ model, tools, applications, memory: mem, brief }).plan({ command: { text: "Give me my brief", channel: "typed", locale: "en", tenantId: "t1", actorId: "u1" }, context: { can: () => true, roles: [], timeZone: "Africa/Nairobi" } });
  let seen; const plan = await ask({ compose: async args => { seen = args; return "Good morning Amina. Due today: Spray the tomatoes."; } });
  assert.equal(plan.response, "Good morning Amina. Due today: Spray the tomatoes."); assert.deepEqual(plan.steps, []); assert.equal(plan.application, "conversation");
  assert.deepEqual([seen.tenantId, seen.userId, seen.known, seen.timeZone], ["t1", "u1", { name: "Amina", location: "Nakuru" }, "Africa/Nairobi"]);
  assert.equal((await ask({ compose: async () => null })).response, "I could not reach the weather for Nakuru just now, and you have no reminders due today, so I have nothing to brief you on.");
  const strangerMemory = { ...memory, async profile() { return []; } };
  assert.equal((await ask({ compose: async () => null }, strangerMemory)).response, 'I have nothing to brief you on yet. Tell me where you are ("I live in <your town>") and set a reminder, and I will have something to say.');
  assert.equal((await ask({ compose: async () => { throw new Error("x"); } })).response.startsWith("I could not reach the weather for Nakuru"), true, "a failing service never blocks the answer");
});
