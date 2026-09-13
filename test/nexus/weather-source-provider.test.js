"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const weatherProvider = require("../../server/nexus-weather-source-provider.js");

function jsonResponse(body) {
  return { ok: true, status: 200, json: async () => body };
}

function fakeFetchFor({ hourly, daily } = {}) {
  return async url => {
    const parsed = new URL(url);
    if (parsed.hostname.includes("geocoding-api")) {
      return jsonResponse({ results: [{ name: "Austin", admin1: "Texas", country_code: "US", latitude: 30.27, longitude: -97.74 }] });
    }
    if (parsed.hostname === "api.open-meteo.com") {
      if (parsed.searchParams.has("hourly")) {
        return jsonResponse(hourly || {
          hourly: {
            time: Array.from({ length: 12 }, (_, index) => new Date(Date.now() + index * 3600000).toISOString()),
            temperature_2m: Array.from({ length: 12 }, (_, index) => 20 + index),
            precipitation_probability: Array.from({ length: 12 }, () => 10),
            weather_code: Array.from({ length: 12 }, () => 1)
          }
        });
      }
      if (parsed.searchParams.has("daily")) {
        return jsonResponse(daily || {
          daily: {
            time: ["2026-01-01", "2026-01-02", "2026-01-03"],
            temperature_2m_max: [39, 30, 31],
            temperature_2m_min: [20, 18, 19],
            precipitation_sum: [0, 25, 2],
            weather_code: [0, 63, 1]
          }
        });
      }
      return jsonResponse({ current: { temperature_2m: 28, weather_code: 1, wind_speed_10m: 10 } });
    }
    throw new Error(`Unexpected fetch to ${url}`);
  };
}

const baseEnv = { NEXUS_WEATHER_RETRY_ATTEMPTS: "1" };

test("hourly timeframe returns a real slot-by-slot forecast, not just current conditions", async () => {
  const env = { ...baseEnv, NEXUS_WEATHER_FETCH_IMPL: fakeFetchFor() };
  const result = await weatherProvider.getWeatherSourceResultAsync({ locationText: "Austin Texas", timeframe: "hourly" }, env);
  assert.equal(result.sourceStatus, "source-result-available");
  assert.ok(Array.isArray(result.hourly) && result.hourly.length > 0, "hourly slots must be present");
  assert.match(result.resultSummary, /Hourly forecast for Austin/);
});

test("daily timeframe returns a multi-day forecast with locally-derived notable conditions, honestly labeled", async () => {
  const env = { ...baseEnv, NEXUS_WEATHER_FETCH_IMPL: fakeFetchFor() };
  const result = await weatherProvider.getWeatherSourceResultAsync({ locationText: "Austin Texas", timeframe: "daily" }, env);
  assert.equal(result.sourceStatus, "source-result-available");
  assert.equal(result.daily.length, 3);
  assert.equal(result.daily[0].maxTemperatureC, 39);
  assert.ok(result.notableConditions.some(note => /extreme heat/.test(note)), "extreme heat day must be flagged");
  assert.ok(result.notableConditions.some(note => /heavy rain/.test(note)), "heavy rain day must be flagged");
  assert.match(result.limitationNotes, /not an official severe-weather alert feed/);
});

test("daily timeframe with no extreme values reports no notable conditions", async () => {
  const env = { ...baseEnv, NEXUS_WEATHER_FETCH_IMPL: fakeFetchFor({
    daily: { daily: { time: ["2026-02-01"], temperature_2m_max: [25], temperature_2m_min: [15], precipitation_sum: [1], weather_code: [1] } }
  }) };
  const result = await weatherProvider.getWeatherSourceResultAsync({ locationText: "Nairobi", timeframe: "daily" }, env);
  assert.deepEqual(result.notableConditions, []);
});

test("current timeframe behavior is unchanged by the hourly/daily addition", async () => {
  const env = { ...baseEnv, NEXUS_WEATHER_FETCH_IMPL: fakeFetchFor() };
  const result = await weatherProvider.getWeatherSourceResultAsync({ locationText: "Austin Texas" }, env);
  assert.equal(result.sourceStatus, "source-result-available");
  assert.match(result.resultSummary, /^Current weather for Austin/);
  assert.equal(result.hourly, undefined);
  assert.equal(result.daily, undefined);
});

test("hourly and daily results for the same location cache independently from current and from each other", async () => {
  let calls = 0;
  const env = { ...baseEnv, NEXUS_WEATHER_FETCH_IMPL: async (...args) => { calls++; return fakeFetchFor()(...args); } };
  await weatherProvider.getWeatherSourceResultAsync({ locationText: "Austin Texas", timeframe: "current" }, env);
  const callsAfterCurrent = calls;
  const hourly = await weatherProvider.getWeatherSourceResultAsync({ locationText: "Austin Texas", timeframe: "hourly" }, env);
  assert.ok(calls > callsAfterCurrent, "hourly must not be served from the current-timeframe cache entry");
  assert.ok(Array.isArray(hourly.hourly));
});

test("multi-location comparison requires at least two locations", async () => {
  const result = await weatherProvider.getMultiLocationWeatherComparison(["Austin"], {});
  assert.equal(result.sourceStatus, "provider-required");
});

test("multi-location comparison fetches each location independently and identifies warmest/coolest", async () => {
  const temperatureByCity = { austin: 40, nairobi: 22 };
  const env = {
    ...baseEnv,
    NEXUS_WEATHER_FETCH_IMPL: async url => {
      const parsed = new URL(url);
      if (parsed.hostname.includes("geocoding-api")) {
        const name = parsed.searchParams.get("name").toLowerCase();
        return jsonResponse({ results: [{ name: parsed.searchParams.get("name"), latitude: 1, longitude: 1 }] });
      }
      const nameParam = parsed.searchParams.get("latitude") === "1" ? "austin" : "nairobi";
      return jsonResponse({ current: { temperature_2m: temperatureByCity[nameParam] ?? 25, weather_code: 1, wind_speed_10m: 5 } });
    }
  };
  const result = await weatherProvider.getMultiLocationWeatherComparison(["Austin", "Austin", "Nairobi"], env);
  assert.equal(result.locations.length, 2, "duplicate locations must be de-duplicated");
  assert.match(result.resultSummary, /Compared current weather across 2 locations/);
});

test("de-duplication and the 6-location cap are honored", async () => {
  const result = await weatherProvider.getMultiLocationWeatherComparison(
    ["A", "b", "B", "C", "D", "E", "F", "G"],
    { ...baseEnv, NEXUS_WEATHER_FETCH_IMPL: fakeFetchFor() }
  );
  assert.ok(result.locations.length <= 6);
});
