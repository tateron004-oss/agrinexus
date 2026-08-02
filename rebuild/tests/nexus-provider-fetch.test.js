"use strict";

const assert = require("node:assert/strict");
const { createProviderFetch } = require("../nexus-core/provider-fetch");
const { createVisualDataService } = require("../nexus-core/visual-data-service");

async function main() {
  {
    let calls = 0;
    const providerFetch = createProviderFetch({
      fetchImpl: async () => {
        calls += 1;
        if (calls < 3) throw new TypeError("fetch failed");
        return { ok: true, status: 200, headers: { get: () => null } };
      },
      sleepImpl: async () => {}
    });
    assert.equal((await providerFetch("https://provider.example/data")).status, 200);
    assert.equal(calls, 3, "transient network errors should be retried");
  }

  {
    let calls = 0;
    const providerFetch = createProviderFetch({
      fetchImpl: async () => {
        calls += 1;
        return calls === 1
          ? { ok: false, status: 503, headers: { get: () => "0" }, body: { cancel: async () => {} } }
          : { ok: true, status: 200, headers: { get: () => null } };
      },
      sleepImpl: async () => {}
    });
    assert.equal((await providerFetch("https://provider.example/data")).status, 200);
    assert.equal(calls, 2, "transient HTTP responses should be retried");
  }

  {
    let calls = 0;
    const providerFetch = createProviderFetch({
      fetchImpl: async () => {
        calls += 1;
        return { ok: false, status: 404, headers: { get: () => null } };
      },
      sleepImpl: async () => {}
    });
    assert.equal((await providerFetch("https://provider.example/missing")).status, 404);
    assert.equal(calls, 1, "permanent provider responses must not be retried");
  }

  {
    let calls = 0;
    const providerFetch = createProviderFetch({
      fetchImpl: async () => {
        calls += 1;
        throw new TypeError("fetch failed");
      },
      sleepImpl: async () => {}
    });
    await assert.rejects(() => providerFetch("https://provider.example/action", { method: "POST" }), /fetch failed/);
    assert.equal(calls, 1, "non-idempotent requests must not be retried");
  }

  {
    let calls = 0;
    const service = createVisualDataService({
      fetchImpl: async (url) => {
        calls += 1;
        if (calls === 1) throw new TypeError("fetch failed");
        if (String(url).includes("geocoding-api")) return {
          ok: true,
          status: 200,
          headers: { get: () => null },
          async json() { return { results: [{ name: "Nairobi", country: "Kenya", latitude: -1.28, longitude: 36.82, timezone: "Africa/Nairobi" }] }; }
        };
        return {
          ok: true,
          status: 200,
          headers: { get: () => null },
          async json() { return { timezone: "Africa/Nairobi", current: { time: "now", temperature_2m: 21, apparent_temperature: 21, precipitation: 0, weather_code: 1, wind_speed_10m: 8 }, daily: { temperature_2m_max: [25], temperature_2m_min: [14], precipitation_probability_max: [20] } }; }
        };
      }
    });
    const weather = await service.weather("Show today's live weather in Nairobi, Kenya");
    assert.equal(weather.status, "live-weather-ready");
    assert.equal(weather.location, "Nairobi, Kenya");
    assert.equal(calls, 3, "the live weather path should recover from one transient provider failure");
  }

  console.log("Nexus provider fetch retry tests passed.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
