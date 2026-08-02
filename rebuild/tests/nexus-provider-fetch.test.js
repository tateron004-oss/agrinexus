"use strict";

const assert = require("node:assert/strict");
const { createProviderFetch } = require("../nexus-core/provider-fetch");
const { createVisualDataService } = require("../nexus-core/visual-data-service");
const { createContentActionService } = require("../nexus-core/content-action-service");

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

  {
    let resolverCalls = 0;
    const service = createContentActionService({
      goalResolver: { async resolve() { resolverCalls += 1; throw new Error("resolver must not own explicit reminder drafts"); } }
    });
    const reminder = await service.execute({ command: "Nexus, remind me tonight at 8 PM to check my blood pressure.", requestedWorkspace: "reminders" });
    assert.equal(reminder.status, "ready");
    assert.equal(reminder.workspace, "reminders");
    assert.equal(reminder.capability, "reminder");
    assert.equal(reminder.artifact.fields.find((field) => field.id === "when").value, "tonight");
    assert.equal(resolverCalls, 0, "an explicit reminder must render before the conversational resolver timeout window");
  }

  {
    let resolverCalls = 0;
    let searched = "";
    const service = createContentActionService({
      goalResolver: { async resolve() { resolverCalls += 1; throw new Error("resolver must not delay explicit recipe source searches"); } },
      webSearchProvider: async (query) => {
        searched = query;
        return { summary: "A source-backed apple pie recipe with ingredients and steps.", sources: [
          { title: "USDA recipe", url: "https://www.myplate.gov/recipes/supplemental-nutrition-assistance-program-snap/apple-pie" }
        ] };
      }
    });
    const recipe = await service.execute({ command: "Nexus, show sources for an apple pie recipe with ingredients and steps.", requestedWorkspace: "live-knowledge" });
    assert.equal(recipe.status, "ready");
    assert.equal(recipe.workspace, "live-knowledge");
    assert.equal(recipe.capability, "search");
    assert.match(searched, /apple pie recipe/i);
    assert.equal(recipe.artifact.items.length, 1);
    assert.equal(resolverCalls, 0, "explicit recipe source search must bypass the conversational resolver deadline");
  }

  {
    let resolverCalls = 0;
    const service = createContentActionService({
      goalResolver: { async resolve() { resolverCalls += 1; throw new Error("resolver must not delay an explicitly named application"); } }
    });
    const telehealth = await service.execute({ command: "Nexus, begin a telehealth intake.", requestedWorkspace: "telehealth" });
    assert.equal(telehealth.status, "ready");
    assert.equal(telehealth.workspace, "telehealth");
    assert.equal(telehealth.capability, "workspace");
    assert.ok(telehealth.artifact.fields.length >= 3);
    assert.equal(resolverCalls, 0, "an explicitly named application must render before the transaction deadline");
  }

  console.log("Nexus provider fetch retry tests passed.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
