const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const dialogue = require("../public/nexus-assistant-dialogue-engine-contract.js");
const runtime = require("../server/nexus-assistant-runtime-entrypoint.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function response(payload) {
  return Object.freeze({
    ok: true,
    status: 200,
    async json() {
      return payload;
    }
  });
}

function buildMultiProviderFetch(calls) {
  return async function fetchImpl(url) {
    const href = String(url && url.href ? url.href : url);
    calls.push(href);
    if (href.includes("geocoding-api.open-meteo.com")) {
      return response({ results: [{ name: "Stockton", admin1: "California", country_code: "US", latitude: 37.9577, longitude: -121.2908 }] });
    }
    if (href.includes("api.open-meteo.com")) {
      return response({ current: { temperature_2m: 27, wind_speed_10m: 11, weather_code: 1, time: "2026-06-28T12:00" } });
    }
    if (href.includes("wikipedia.org")) {
      return response({ query: { search: [{ title: "Crop disease", snippet: "Crop disease guidance often starts with observation, extension advice, and source verification." }] } });
    }
    if (href.includes("reliefweb.int")) {
      return response({ data: [{ fields: { title: "Agriculture logistics and food security update", url: "https://reliefweb.int/report/example", date: { created: "2026-06-28T00:00:00Z" } } }] });
    }
    if (href.includes("remotive.com")) {
      return response({ jobs: [{ id: 7, title: "Farm Workforce Coordinator", company_name: "Public Partner", candidate_required_location: "United States", job_type: "full_time", publication_date: "2026-06-28T00:00:00Z", url: "https://remotive.com/remote-jobs/example" }] });
    }
    if (href.includes("archive.org")) {
      return response({ response: { docs: [{ title: "Farm Training Resource", identifier: "farm-training-resource" }] } });
    }
    throw new Error(`unexpected-url:${href}`);
  };
}

function buildEnv(fetchImpl) {
  return Object.freeze({
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED: "true",
    NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_ENABLED: "true",
    NEXUS_WEATHER_OPEN_METEO_PROVIDER_ENABLED: "true",
    NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
    NEXUS_AGRICULTURE_CONTEXT_PUBLIC_PROVIDER_ENABLED: "true",
    NEXUS_NEWS_SECURITY_PROVIDER_ENABLED: "true",
    NEXUS_NEWS_SECURITY_PUBLIC_PROVIDER_ENABLED: "true",
    NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
    NEXUS_JOB_SEARCH_PUBLIC_PROVIDER_ENABLED: "true",
    NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED: "true",
    NEXUS_MUSIC_MEDIA_PUBLIC_PROVIDER_ENABLED: "true",
    NEXUS_WEATHER_FETCH_IMPL: fetchImpl,
    NEXUS_AGRICULTURE_CONTEXT_FETCH_IMPL: fetchImpl,
    NEXUS_NEWS_SECURITY_FETCH_IMPL: fetchImpl,
    NEXUS_JOB_SEARCH_FETCH_IMPL: fetchImpl,
    NEXUS_MUSIC_MEDIA_FETCH_IMPL: fetchImpl
  });
}

async function assertProviderPrompt(prompt, selectedProvider, env) {
  const result = await runtime.buildAssistantRuntimeResponseAsync(prompt, {}, env);
  assert.equal(runtime.isSafeAssistantRuntimeResponse(result), true, `${prompt} must return a safe assistant response.`);
  assert.equal(result.selectedProvider, selectedProvider, `${prompt} must route to ${selectedProvider}.`);
  assert.equal(result.providerStatus, "ready", `${prompt} must return a ready source-backed result.`);
  assert.equal(result.noExecutionAuthorized, true, `${prompt} must not authorize execution.`);
  assert.equal(result.noLocationPermissionRequested, true, `${prompt} must not request location permission.`);
  assert.equal(result.noProviderContactAuthorized, true, `${prompt} must not authorize provider contact.`);
  assert(result.citations.length >= 1, `${prompt} must include citation metadata.`);
  assert.match(result.answer, /Here|Source|Retrieved|Confidence/i, `${prompt} must produce a natural source-aware answer.`);
  return result;
}

async function runNap2MultiProviderAssistantExpansionQa() {
  const dialogueSource = read("public", "nexus-assistant-dialogue-engine-contract.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const calls = [];
  const env = buildEnv(buildMultiProviderFetch(calls));

  assert(dialogueSource.includes("isMarketplaceReviewOnlyRequest"), "NAP2 must separate marketplace browse-only prompts.");
  assert(dialogueSource.includes("isMarketplaceExecutionRequest"), "NAP2 must preserve marketplace execution blocking.");
  assert.equal(
    pkg.scripts["qa:nexus-nap2-multi-provider-assistant-expansion"],
    "node scripts/nexus-nap2-multi-provider-assistant-expansion-qa.js",
    "NAP2 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-nap2-multi-provider-assistant-expansion-qa.js"), "NAP2 QA must be wired into local-safe suites.");

  await assertProviderPrompt("What is the weather in Stockton?", "weather", env);
  await assertProviderPrompt("What crop disease updates should farmers know?", "agriculture-context", env);
  await assertProviderPrompt("Find farm jobs near Stockton.", "job-search", env);
  await assertProviderPrompt("Find agriculture training videos.", "music-media", env);
  await assertProviderPrompt("What current agriculture news should farmers know?", "news-security", env);
  await assertProviderPrompt("Browse AgriTrade marketplace options.", "agriculture-context", env);

  const browseClassification = dialogue.classifyAssistantDialogueIntent("Browse AgriTrade marketplace options.", {});
  assert.equal(browseClassification.intentType, "agriculture-context", "Marketplace browse-only must route to read-only agriculture context.");
  const buyClassification = dialogue.classifyAssistantDialogueIntent("Buy fertilizer in the marketplace.", {});
  assert.equal(buyClassification.intentType, "marketplace-request", "Marketplace execution prompts must remain marketplace-request.");

  const shipment = await runtime.buildAssistantRuntimeResponseAsync("Track shipment ABC123456.", {}, env);
  assert.equal(runtime.isSafeAssistantRuntimeResponse(shipment), true, "Shipment safe unavailable response must remain safe.");
  assert.equal(shipment.noExecutionAuthorized, true, "Shipment lookup must not authorize execution.");
  assert.notEqual(shipment.providerStatus, "ready", "Shipment must not claim ready live provider without a safe public/test path.");

  const missingConfig = await runtime.buildAssistantRuntimeResponseAsync("Find farm jobs near Stockton.", {}, {
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "false"
  });
  assert.equal(runtime.isSafeAssistantRuntimeResponse(missingConfig), true, "Missing config must stay safe.");
  assert.notEqual(missingConfig.providerStatus, "ready", "Missing config must not claim ready provider.");

  const failingEnv = buildEnv(async () => {
    throw new Error("network-down");
  });
  const errorResult = await runtime.buildAssistantRuntimeResponseAsync("Find agriculture training resources.", {}, failingEnv);
  assert.equal(runtime.isSafeAssistantRuntimeResponse(errorResult), true, "Provider error path must stay safe.");
  assert.equal(errorResult.noExecutionAuthorized, true, "Provider error must not create execution fallback.");
  assert.match(errorResult.answer, /failed|unavailable|provider|source/i, "Provider error answer must be honest.");

  for (const prompt of ["Call this provider.", "Buy fertilizer.", "Send my location.", "Book me an appointment.", "Dispatch help."]) {
    const blocked = await runtime.buildAssistantRuntimeResponseAsync(prompt, {}, env);
    assert.equal(runtime.isSafeAssistantRuntimeResponse(blocked), true, `${prompt} must stay safe.`);
    assert.equal(blocked.allowed, false, `${prompt} must be blocked/downgraded.`);
    assert.equal(blocked.noExecutionAuthorized, true, `${prompt} must not authorize execution.`);
  }

  ["open-meteo.com", "wikipedia.org", "reliefweb.int", "remotive.com", "archive.org"].forEach(source => {
    assert(calls.some(url => url.includes(source)), `NAP2 must call mocked public source: ${source}`);
  });

  console.log(JSON.stringify({
    weather: "Open-Meteo",
    agricultureAndCropAlerts: "Wikipedia public search",
    jobs: "Remotive public jobs API",
    news: "ReliefWeb",
    mediaTraining: "Internet Archive public search",
    marketplaceBrowseOnly: "agriculture-context review-only",
    shipmentTracking: "safe unavailable unless configured",
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-nap2-multi-provider-assistant-expansion-qa] passed");
}

if (require.main === module) {
  runNap2MultiProviderAssistantExpansionQa().catch(error => {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  });
}

module.exports = Object.freeze({
  runNap2MultiProviderAssistantExpansionQa
});
