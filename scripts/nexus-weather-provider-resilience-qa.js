const assert = require("node:assert/strict");
const weather = require("../server/nexus-weather-source-provider.js");

function response(status, payload = {}) {
  return { ok: status >= 200 && status < 300, status, json: async () => payload };
}

async function verifyRetryRecovery() {
  let calls = 0;
  const result = await weather.getWeatherSourceResultAsync({ locationText: "Retry City" }, {
    NEXUS_WEATHER_RETRY_ATTEMPTS: "2",
    NEXUS_WEATHER_WAIT_IMPL: async () => {},
    NEXUS_WEATHER_FETCH_IMPL: async target => {
      calls += 1;
      if (calls === 1) return response(429);
      if (String(target).includes("geocoding-api")) return response(200, { results: [{ name: "Retry City", latitude: 1, longitude: 2 }] });
      return response(200, { current: { temperature_2m: 21, weather_code: 1, wind_speed_10m: 8, time: "2026-08-05T12:00" } });
    }
  });
  assert.equal(result.sourceStatus, "source-result-available");
  assert.equal(result.sourceName, "Open-Meteo");
  assert.equal(calls, 3, "429 should retry before changing providers");
}

async function verifyIndependentFallbackAndCache() {
  const successfulCalls = [];
  const request = { locationText: "Nairobi, Kenya" };
  const result = await weather.getWeatherSourceResultAsync(request, {
    NEXUS_WEATHER_RETRY_ATTEMPTS: "1",
    NEXUS_WEATHER_FETCH_IMPL: async target => {
      const url = String(target);
      successfulCalls.push(url);
      if (url.includes("open-meteo.com")) return response(429);
      if (url.includes("nominatim.openstreetmap.org")) return response(200, [{ display_name: "Nairobi, Kenya", lat: "-1.286389", lon: "36.817223" }]);
      if (url.includes("api.met.no")) return response(200, { properties: { timeseries: [{ time: "2026-08-05T12:00:00Z", data: { instant: { details: { air_temperature: 24, wind_speed: 3 } }, next_1_hours: { summary: { symbol_code: "partly_cloudy_day" } } } }] } });
      throw new Error(`unexpected URL ${url}`);
    }
  });
  assert.equal(result.sourceStatus, "source-result-available");
  assert.equal(result.sourceName, "MET Norway Locationforecast");
  assert.match(result.resultSummary, /Current weather for Nairobi/i);
  assert(successfulCalls.some(url => url.includes("nominatim.openstreetmap.org")));
  assert(successfulCalls.some(url => url.includes("api.met.no")));

  let failedCalls = 0;
  const cached = await weather.getWeatherSourceResultAsync(request, {
    NEXUS_WEATHER_RETRY_ATTEMPTS: "1",
    NEXUS_WEATHER_CACHE_TTL_MS: "600000",
    NEXUS_WEATHER_FETCH_IMPL: async () => {
      failedCalls += 1;
      return response(503);
    }
  });
  assert.equal(cached.sourceStatus, "source-result-available");
  assert.equal(cached.sourceResultId, result.sourceResultId);
  assert(failedCalls >= 2, "cache should be used only after live providers fail");
}

(async () => {
  await verifyRetryRecovery();
  await verifyIndependentFallbackAndCache();
  console.log(JSON.stringify({
    ok: true,
    suite: "nexus-weather-provider-resilience",
    verifies: ["429 retry", "independent OpenStreetMap/MET Norway fallback", "bounded last-known-good cache"]
  }, null, 2));
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
