const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const weather = require(path.join(root, "server/nexus-weather-source-provider.js"));
const maps = require(path.join(root, "server/providers/googleMapsProvider.js"));
const reminders = require(path.join(root, "server/providers/reminderProvider.js"));
const marketplace = require(path.join(root, "server/providers/marketplaceProvider.js"));
const productionRuntime = require(path.join(root, "server/nexusProductionRuntime.js"));
const planner = require(path.join(root, "server/nexusActionPlanner.js"));

const server = read("server.js");
const app = read("public/app.js");
const index = read("public/index.html");
const envExample = read(".env.example");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");
const voiceRuntime = read("public/nexus-genesis-voice-runtime-manager.js");
const appVoiceStartSnippet = read("public/app.js");

function assertNoSecretValues(payload, label) {
  const serialized = JSON.stringify(payload);
  assert(!/sk-live|sk-proj|AC[a-f0-9]{20,}|Bearer\s+[A-Za-z0-9._-]+|secret-value|real-api-key|twilio-auth-value|x-api-key-value/i.test(serialized), `${label} must not expose secret-shaped values`);
}

async function run() {
  assert(server.includes("fetchTavilyKnowledge(query)"), "live knowledge should attempt Tavily");
  assert(server.includes("fetchBraveKnowledge(query)"), "live knowledge should attempt Brave");
  assert(server.includes("fetchExaKnowledge(query)"), "live knowledge should attempt Exa");
  assert(server.includes("fetchConfiguredLiveKnowledgeEndpoint(query, command)"), "live knowledge should attempt generic endpoint");
  assert(
    server.indexOf("fetchTavilyKnowledge(query)") < server.indexOf("fetchBraveKnowledge(query)")
      && server.indexOf("fetchBraveKnowledge(query)") < server.indexOf("fetchExaKnowledge(query)")
      && server.indexOf("fetchExaKnowledge(query)") < server.indexOf("fetchConfiguredLiveKnowledgeEndpoint(query, command)"),
    "live knowledge priority should be Tavily, Brave, Exa, generic endpoint"
  );

  assert.strictEqual(weather.isOpenMeteoPublicProviderConfigured({}), true, "Open-Meteo public weather should be available by default");
  assert.strictEqual(weather.isOpenMeteoPublicProviderConfigured({ NEXUS_WEATHER_OPEN_METEO_PROVIDER_ENABLED: "false" }), false, "Open-Meteo can be disabled explicitly");
  const weatherFetches = [];
  const weatherResult = await weather.getWeatherSourceResultAsync(
    { locationText: "Stockton, CA", timeframe: "current" },
    {
      NEXUS_WEATHER_FETCH_IMPL: async url => {
        weatherFetches.push(String(url));
        if (String(url).includes("geocoding-api.open-meteo.com")) {
          return {
            ok: true,
            json: async () => ({ results: [{ name: "Stockton", admin1: "California", country_code: "US", latitude: 37.9577, longitude: -121.2908 }] })
          };
        }
        return {
          ok: true,
          json: async () => ({ current: { temperature_2m: 22.4, weather_code: 1, wind_speed_10m: 8, time: "2026-07-16T10:00" } })
        };
      }
    }
  );
  assert.equal(weatherResult.sourceName, "Open-Meteo", "weather should use Open-Meteo public provider");
  assert.equal(weatherResult.sourceStatus, "source-result-available", "weather should return source-backed result");
  assert(weatherResult.resultSummary.includes("Stockton"), "weather result should include requested location");
  assert.equal(weather.buildWeatherSourceQuery({ locationText: "Stockton, CA" }).usesBrowserGeolocation, false, "weather must not use browser geolocation");

  let routeFetchCount = 0;
  const mapsResult = await maps.route({
    origin: "Stockton, CA",
    destination: "Sacramento, CA",
    confirmed: true
  }, {
    NEXUS_MAPS_ENABLED: "true",
    NEXUS_MAPS_PUBLIC_OSM_ENABLED: "true",
    NEXUS_MAPS_FETCH_IMPL: async url => {
      routeFetchCount += 1;
      const value = String(url);
      if (value.includes("nominatim.openstreetmap.org") && value.includes("Stockton")) {
        return { ok: true, text: async () => JSON.stringify([{ display_name: "Stockton, California, United States", lat: "37.9577", lon: "-121.2908" }]) };
      }
      if (value.includes("nominatim.openstreetmap.org") && value.includes("Sacramento")) {
        return { ok: true, text: async () => JSON.stringify([{ display_name: "Sacramento, California, United States", lat: "38.5816", lon: "-121.4944" }]) };
      }
      return { ok: true, text: async () => JSON.stringify({ routes: [{ distance: 78234.4, duration: 4210.2 }] }) };
    }
  });
  assert.equal(mapsResult.body.provider, "openstreetmap-osrm", "maps should use public route provider when Google key is absent");
  assert.equal(mapsResult.body.status, "completed", "maps public route should complete");
  assert.equal(mapsResult.body.data.distanceMeters, 78234, "maps public route should normalize distance");
  assert.equal(mapsResult.body.data.durationSeconds, 4210, "maps public route should normalize duration seconds");
  assert.equal(mapsResult.body.data.noLocationPermissionRequested, true, "maps route must not request geolocation permission");
  assert.equal(routeFetchCount, 3, "maps route should geocode origin, geocode destination, and compute one route");

  const mapsNeedsConfirmation = await maps.route({ origin: "Stockton, CA", destination: "Sacramento, CA" }, { NEXUS_MAPS_ENABLED: "true" });
  assert.equal(mapsNeedsConfirmation.body.status, "confirmation_required", "maps route remains confirmation gated");

  const remindersDb = { profile: {} };
  const reminderBlocked = reminders.create({ title: "Check blood pressure" }, remindersDb, {});
  assert.equal(reminderBlocked.body.status, "confirmation_required", "reminder creation remains confirmation gated");
  const reminderCreated = reminders.create({ title: "Check blood pressure", confirmed: true }, remindersDb, {});
  assert.equal(reminderCreated.body.status, "completed", "confirmed reminder creates local in-app item");
  assert.equal(reminderCreated.body.data.reminder.osNotificationRequested, false, "reminder must not request OS notification permission");

  const marketplaceDb = { profile: {} };
  const listings = marketplace.listListings(marketplaceDb, {});
  assert.equal(listings.body.status, "completed", "marketplace discovery should load local listings");
  assert.equal(listings.body.data.localOnly, true, "marketplace discovery should be truthful about local source");
  const listingBlocked = marketplace.createListing({ title: "Maize", crop: "maize" }, marketplaceDb, {});
  assert.equal(listingBlocked.body.status, "confirmation_required", "marketplace write remains confirmation gated");

  const liveRuntimeStatus = productionRuntime.status({}, {
    NEXUS_PRODUCTION_RUNTIME_ENABLED: "true",
    NEXUS_LIVE_EXECUTION_ENABLED: "false"
  });
  assert.equal(liveRuntimeStatus.policy.noSilentExecution, true, "production runtime must preserve no-silent-execution policy");
  assert.equal(liveRuntimeStatus.liveExecutionEnabled, false, "live execution should remain disabled unless Render enables it");

  const capabilityCases = [
    ["weather in Stockton CA", "knowledge"],
    ["What time is it?", "general"],
    ["What are current best practices for tomato blight?", "agriculture"],
    ["Route from Stockton to Sacramento", "maps"],
    ["Prepare an SMS to my care team", "communications"],
    ["Show marketplace maize listings", "marketplace"],
    ["Remind me to check blood pressure tomorrow", "workflow"]
  ];
  for (const [goal, expectedDomain] of capabilityCases) {
    const plan = planner.planAction({ userGoal: goal });
    assert(plan.userMessage, `${goal} should produce a user message`);
    assert(plan.executionAttempted === false, `${goal} planning must not execute`);
    if (expectedDomain !== "general") assert.equal(plan.domain, expectedDomain, `${goal} should map to ${expectedDomain}`);
  }

  [
    "NEXUS_MAPS_PUBLIC_OSM_ENABLED=true",
    "NEXUS_WEATHER_OPEN_METEO_PROVIDER_ENABLED=true",
    "TAVILY_API_KEY=",
    "BRAVE_SEARCH_API_KEY=",
    "EXA_API_KEY=",
    "NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT=",
    "NEXUS_LIVE_KNOWLEDGE_API_KEY="
  ].forEach(token => assert(envExample.includes(token), `.env.example should document ${token}`));

  [
    "I can help with agriculture, health preparation, learning, jobs, marketplace review, maps, messages, reminders, language, offline support, and safe provider preparation.",
    "I can help draft or prepare a message later, but I will not send anything automatically.",
  ].forEach(token => assert(app.includes(token), `Standard User capability wording should include ${token}`));
  assert(index.includes("data-nexus-conversation-sources"), "Standard User citation/status markup should include data-nexus-conversation-sources");

  [
    "conversation starts",
    "recognition.start",
    "startVoiceRuntimeTransport({ source: \"genesis-controlled-restart\""
  ].forEach(token => assert(!voiceRuntime.includes(token), `voice runtime manager should not be changed into a new runtime patch: ${token}`));
  assert(appVoiceStartSnippet.includes("isTransportActive: () => Boolean(voiceRecognition || nexusOsVoiceStartInFlight || elevenLabsVoiceActive() || realtimeVoiceActive())"), "existing voice lifecycle ownership check must remain intact");

  assertNoSecretValues({ weatherResult, mapsResult, liveRuntimeStatus }, "activation pass results");
  console.log("Nexus production capability activation pass QA passed.");
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
