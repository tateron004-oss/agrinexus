"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenEndedPlanner, parseAlertsControl } = require("../../nexus/brain/planner.js");
const { evaluateForecast, THRESHOLDS } = require("../../nexus/alerts/rules.js");
const { fetchAlertForecast } = require("../../nexus/alerts/forecast.js");
const { WeatherAlertSettingsRepository, PARKED } = require("../../nexus/alerts/settings.js");
const { createWeatherAlertService } = require("../../nexus/alerts/service.js");
const { createHandlers } = require("../../nexus/workers/handlers.js");

const day = (date, extra = {}) => ({ date, code: 1, high: 26, low: 14, rainMm: 1, rainChance: 10, gustKmh: 20, ...extra });

test("only serious weather is worth an alert, and each says what to do", () => {
  const calm = { place: "Kisumu", days: [day("2026-09-20"), day("2026-09-21")] };
  assert.deepEqual(evaluateForecast(calm, "2026-09-20"), []);
  const bad = { place: "Kisumu", days: [day("2026-09-20", { rainMm: 42, rainChance: 90 }), day("2026-09-21", { code: 95, rainChance: 60, gustKmh: 72, high: 36, low: 1 })] };
  const alerts = evaluateForecast(bad, "2026-09-20");
  assert.deepEqual(alerts.map(alert => `${alert.when}:${alert.kind}`), ["today:heavy_rain", "tomorrow:storm", "tomorrow:wind", "tomorrow:heat", "tomorrow:frost"]);
  assert.equal(alerts[0].text, "Heavy rain today in Kisumu: about 42 mm. Cover harvested crops and clear drains.");
  assert.match(alerts[1].text, /^Thunderstorms likely tomorrow in Kisumu\./);
  assert.match(alerts[3].text, /up to 36°C/);
});

test("the edges: a rainy total that is unlikely, a missing chance, and days beyond tomorrow are handled", () => {
  assert.deepEqual(evaluateForecast({ place: "X", days: [day("2026-09-20", { rainMm: THRESHOLDS.heavyRainMm + 5, rainChance: 20 })] }, "2026-09-20"), [], "big total but unlikely");
  assert.equal(evaluateForecast({ place: "X", days: [day("2026-09-20", { rainMm: 35, rainChance: null })] }, "2026-09-20").length, 1, "no chance given still warns for a big total");
  assert.deepEqual(evaluateForecast({ place: "X", days: [day("2026-09-23", { high: 40 })] }, "2026-09-20"), [], "three days out is not tomorrow");
  assert.deepEqual(evaluateForecast(null, "2026-09-20"), []);
});

function fakeFetch({ geocode = { results: [{ name: "Kisumu", latitude: -0.09, longitude: 34.77 }] }, daily = null, fail = false } = {}) {
  const calls = [];
  const impl = async url => {
    calls.push(String(url));
    if (fail) throw new Error("network");
    if (String(url).includes("geocoding")) return { ok: true, json: async () => geocode };
    return { ok: true, json: async () => ({ daily: daily || { time: ["2026-09-20", "2026-09-21"], weathercode: [1, 95], temperature_2m_max: [26, 30], temperature_2m_min: [14, 15], precipitation_sum: [0, 45], precipitation_probability_max: [10, 90], wind_gusts_10m_max: [20, 30] } }) };
  };
  impl.calls = calls; return impl;
}

test("the forecast is read for a named place, and any trouble gives null rather than a guess", async () => {
  const fetchImpl = fakeFetch();
  const forecast = await fetchAlertForecast({ place: "Kisumu", fetchImpl });
  assert.equal(forecast.place, "Kisumu"); assert.equal(forecast.days.length, 2); assert.equal(forecast.days[1].rainMm, 45); assert.equal(forecast.days[1].code, 95);
  assert.match(fetchImpl.calls[1], /forecast_days=2/); assert.match(fetchImpl.calls[1], /wind_gusts_10m_max/);
  assert.equal(await fetchAlertForecast({ place: "Nowhere", fetchImpl: fakeFetch({ geocode: { results: [] } }) }), null);
  assert.equal(await fetchAlertForecast({ place: "Kisumu", fetchImpl: fakeFetch({ fail: true }) }), null);
  assert.equal(await fetchAlertForecast({ place: "", fetchImpl }), null);
  assert.equal(await fetchAlertForecast({ place: "Kisumu", fetchImpl: fakeFetch({ daily: { time: [] } }) }), null);
});

test("the setting is a parked schedule row that can never be dispatched as a job", async () => {
  const calls = [];
  const db = { async query(sql, params) { calls.push({ sql, params }); return { rows: /insert/.test(sql) ? [{ schedule_id: "sch_1" }] : [{ schedule_id: "sch_1", payload: { timeZone: "Africa/Nairobi" }, timezone: "Africa/Nairobi", tenant_id: "t1", owner_id: "u1" }] }; } };
  const repo = new WeatherAlertSettingsRepository(db);
  const saved = await repo.set({ tenantId: "t1", userId: "u1", timeZone: "Africa/Nairobi" });
  assert.equal(saved.replaced, true);
  const insert = calls.find(call => /insert into nexus_schedules/.test(call.sql));
  assert.equal(insert.params[3], "alerts.weather"); assert.equal(insert.params[7], PARKED);
  assert.equal((await repo.get({ tenantId: "t1", userId: "u1" })).timeZone, "Africa/Nairobi");
  assert.equal((await repo.listActive())[0].userId, "u1");
  assert.equal(await repo.stop({ tenantId: "t1", userId: "u1" }), 1);
  await assert.rejects(repo.set({ tenantId: "t1", userId: "", timeZone: "x" }));
});

function harness({ settings, location = "Kisumu", devices = [{ id: 1 }], paused = false, existing = new Set(), fetchImpl = fakeFetch(), locationFor } = {}) {
  const queued = [];
  const notifications = { async enqueue(row) { queued.push(row); }, async existsByKey({ idempotencyKey }) { return existing.has(idempotencyKey); } };
  const memory = { async profile({ userId }) { const town = locationFor ? locationFor(userId) : location; return town ? [{ content: { kind: "location", value: town } }] : []; } };
  const service = createWeatherAlertService({ notifications, settings: { async listActive() { return settings; } }, memory, devices: { async listPushable() { return devices; } }, autonomyControl: { async isPaused() { return paused; } }, fetchImpl });
  return { service, queued, fetchImpl };
}
const person = (userId, timeZone = "Africa/Nairobi", tenantId = "t1") => ({ tenantId, userId, timeZone });
const MORNING = new Date("2026-09-20T05:00:00Z"); // 08:00 in Nairobi

test("a serious forecast becomes a push for people who asked, with a key per kind per day so it is not repeated", async () => {
  const existing = new Set();
  const { service, queued } = harness({ settings: [person("u1")], existing });
  const first = await service.sendDue({ at: MORNING });
  assert.equal(first.sent, 2, "at most two per person per pass");
  assert.deepEqual(queued.map(row => row.idempotencyKey), ["alert:u1:heavy_rain:2026-09-21", "alert:u1:storm:2026-09-21"]);
  assert.equal(queued[0].channel, "push"); assert.equal(queued[0].content.kind, "weather_alert"); assert.equal(queued[0].content.title, "Weather alert");
  assert.match(queued[0].content.body, /^Heavy rain tomorrow in Kisumu: about 45 mm./);
  for (const row of queued) existing.add(row.idempotencyKey);
  const second = await service.sendDue({ at: MORNING });
  assert.equal(second.sent, 0, "what was already sent is not sent again");
});

test("nothing is sent overnight, while paused, without a town, or without a device, and a calm forecast is silent", async () => {
  const night = new Date("2026-09-20T20:00:00Z"); // 23:00 in Nairobi
  assert.equal((await harness({ settings: [person("u1")] }).service.sendDue({ at: night })).skippedQuiet, 1);
  assert.equal((await harness({ settings: [person("u1")] }).service.sendDue({ at: new Date("2026-09-20T01:30:00Z") })).skippedQuiet, 1, "04:30 is still quiet");
  const paused = harness({ settings: [person("u1")], paused: true });
  assert.equal((await paused.service.sendDue({ at: MORNING })).skippedPaused, 1); assert.equal(paused.queued.length, 0);
  const noTown = harness({ settings: [person("u1")], location: "" });
  assert.equal((await noTown.service.sendDue({ at: MORNING })).skippedNoTown, 1); assert.equal(noTown.fetchImpl.calls.length, 0, "no town, no forecast lookup");
  const noDevice = harness({ settings: [person("u1")], devices: [] });
  assert.equal((await noDevice.service.sendDue({ at: MORNING })).skippedNoDevice, 1); assert.equal(noDevice.queued.length, 0);
  const calm = harness({ settings: [person("u1")], fetchImpl: fakeFetch({ daily: { time: ["2026-09-20", "2026-09-21"], weathercode: [1, 1], temperature_2m_max: [25, 25], temperature_2m_min: [14, 14], precipitation_sum: [0, 0], precipitation_probability_max: [5, 5], wind_gusts_10m_max: [10, 10] } }) });
  assert.deepEqual(await calm.service.sendDue({ at: MORNING }), { checked: 1, sent: 0, skippedPaused: 0, skippedNoDevice: 0, skippedNoTown: 0, skippedQuiet: 0, skippedNoForecast: 0 });
  const failing = harness({ settings: [person("u1")], fetchImpl: fakeFetch({ fail: true }) });
  assert.equal((await failing.service.sendDue({ at: MORNING })).skippedNoForecast, 1);
});

test("people in the same town share one forecast lookup, and quiet hours follow each person's own time zone", async () => {
  const shared = harness({ settings: [person("u1"), person("u2"), person("u3", "Pacific/Auckland")] });
  const result = await shared.service.sendDue({ at: MORNING }); // 17:00 in Auckland: not quiet
  assert.equal(result.checked, 3);
  assert.equal(shared.fetchImpl.calls.filter(url => url.includes("geocoding")).length, 1, "one lookup for one town");
  assert.equal(new Set(shared.queued.map(row => row.userId)).size, 3);
  const lateThere = harness({ settings: [person("u1"), person("u3", "Pacific/Auckland")] });
  assert.equal((await lateThere.service.sendDue({ at: new Date("2026-09-20T10:00:00Z") })).skippedQuiet, 1, "22:00 in Auckland is quiet, 13:00 in Nairobi is not");
});

test("turning weather alerts on, off, and asking, in plain words through the planner", async () => {
  const state = { on: false, enabled: [] };
  const alerts = { async enable(args) { state.on = true; state.enabled.push(args); return { timeZone: args.timeZone, replaced: state.enabled.length > 1, location: "Kisumu", hasPushDevice: true }; },
    async disable() { const was = state.on; state.on = false; return was ? 1 : 0; }, async status() { return state.on ? { timeZone: "Africa/Nairobi" } : null; } };
  const p = new OpenEndedPlanner({ alerts, tools: { list: async () => [] }, applications: { list: () => [] }, model: { plan: async () => { throw new Error("no model"); }, respond: async () => null } });
  const ask = (text, context = { can: () => true, roles: [], timeZone: "Africa/Nairobi" }) => p.plan({ command: { text, channel: "typed", locale: "en", tenantId: "t1", actorId: "u1", conversationId: "c" }, context });
  assert.match((await ask("Are weather alerts on?")).response, /Weather alerts are off/);
  const on = await ask("Warn me about storms and heavy rain");
  assert.equal(on.application, "conversation"); assert.deepEqual(on.steps, []);
  assert.match(on.response, /^Done\. Weather alerts are on\. I'll warn you by push when storms, heavy rain, strong wind, heat or frost are forecast for today or tomorrow\. I'll watch the forecast for Kisumu\./);
  assert.deepEqual(state.enabled[0], { tenantId: "t1", userId: "u1", timeZone: "Africa/Nairobi" });
  assert.match((await ask("Are weather alerts on?")).response, /Weather alerts are on\./);
  assert.equal((await ask("Stop weather alerts")).response, "Done. I've stopped your weather alerts.");
  assert.equal((await ask("Stop weather alerts")).response, "You don't have weather alerts turned on.");
  assert.match((await ask("Turn on weather alerts", { can: () => true, roles: [] })).response, /I do not know your time zone, so I used Africa\/Nairobi/);
  assert.equal(parseAlertsControl("Warn me if the tank drops below 20 percent"), null, "a farm-log level is not a weather alert");
  assert.equal(parseAlertsControl("What is the weather"), null);
});

test("the worker runs the alert sweep, and does nothing when alerts are unavailable", async () => {
  let ran = 0;
  const handlers = createHandlers({ runtime: { alerts: { async sendDue() { ran += 1; return { checked: 2, sent: 1 }; } } } });
  assert.deepEqual(await handlers["alerts.weather-sweep"]({ job: { payload: {} } }), { checked: 2, sent: 1 }); assert.equal(ran, 1);
  assert.deepEqual(await createHandlers({ runtime: {} })["alerts.weather-sweep"]({ job: { payload: {} } }), { checked: 0, sent: 0 });
});
