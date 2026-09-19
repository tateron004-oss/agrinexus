"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const weather = require("../../server/nexus-weather-source-provider.js");

const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

// 2026-09-19: the spoken-weather path answered "provider-not-configured" on production while the provider-status
// report said Open-Meteo was "public_fallback_active": the answer path demanded all three flags be exactly "true",
// the status report (and the provider itself) treat Open-Meteo as on unless a flag is "false".
test("Open-Meteo is on by default and each of the three flags can still turn it off", () => {
  assert.equal(weather.isOpenMeteoPublicProviderConfigured({}), true, "no flags set: on");
  assert.equal(weather.isOpenMeteoPublicProviderConfigured({ NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true", NEXUS_WEATHER_PROVIDER_ENABLED: "true", NEXUS_WEATHER_OPEN_METEO_PROVIDER_ENABLED: "true" }), true);
  for (const flag of ["NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED", "NEXUS_WEATHER_PROVIDER_ENABLED", "NEXUS_WEATHER_OPEN_METEO_PROVIDER_ENABLED"])
    assert.equal(weather.isOpenMeteoPublicProviderConfigured({ [flag]: "false" }), false, `${flag}=false disables it`);
});

test("both spoken-weather answer paths use the provider's own gate, not an all-must-be-'true' check", () => {
  const uses = server.match(/const liveWeatherExplicitlyEnabled = nexusWeatherSourceProvider\.isOpenMeteoPublicProviderConfigured\(process\.env\);/g) || [];
  assert.equal(uses.length, 2, "both call sites");
  assert.doesNotMatch(server, /process\.env\.NEXUS_WEATHER_OPEN_METEO_PROVIDER_ENABLED\s*\n\s*\]\.every\(value => String\(value \|\| ""\)\.toLowerCase\(\) === "true"\)/);
});

test("a flag set to false still routes to the disabled result, never a live lookup", async () => {
  let fetched = 0;
  const env = { NEXUS_WEATHER_OPEN_METEO_PROVIDER_ENABLED: "false", NEXUS_WEATHER_FETCH_IMPL: async () => { fetched += 1; throw new Error("must not fetch"); } };
  const result = await weather.getWeatherSourceResultAsync({ locationText: "Nairobi", timeframe: "current", queryType: "current weather" }, env);
  assert.equal(fetched, 0, "no network call when disabled");
  assert.notEqual(result.sourceStatus, "source-result-available");
});
