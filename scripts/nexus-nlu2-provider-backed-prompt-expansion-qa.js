const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const runtime = require("../server/nexus-assistant-runtime-entrypoint.js");
const dialogue = require("../public/nexus-assistant-dialogue-engine-contract.js");

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

function buildFetchRecorder(calls) {
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
      return response({ query: { search: [{ title: "Crop disease", snippet: "Crop disease guidance starts with field observation, local extension advice, and source verification." }] } });
    }
    if (href.includes("reliefweb.int")) {
      return response({ data: [{ fields: { title: "Agriculture logistics and food security update", url: "https://reliefweb.int/report/example", date: { created: "2026-06-28T00:00:00Z" } } }] });
    }
    if (href.includes("remotive.com")) {
      return response({ jobs: [{ id: 7, title: "Farm Workforce Coordinator", company_name: "Public Partner", candidate_required_location: "United States", job_type: "full_time", publication_date: "2026-06-28T00:00:00Z", url: "https://remotive.com/remote-jobs/example" }] });
    }
    if (href.includes("archive.org")) {
      return response({ response: { docs: [{ title: "Farm Training Video Resource", identifier: "farm-training-video-resource" }] } });
    }
    throw new Error(`unexpected-url:${href}`);
  };
}

function buildProviderEnv(fetchImpl) {
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
    NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED: "true",
    NEXUS_WEATHER_FETCH_IMPL: fetchImpl,
    NEXUS_AGRICULTURE_CONTEXT_FETCH_IMPL: fetchImpl,
    NEXUS_NEWS_SECURITY_FETCH_IMPL: fetchImpl,
    NEXUS_JOB_SEARCH_FETCH_IMPL: fetchImpl,
    NEXUS_MUSIC_MEDIA_FETCH_IMPL: fetchImpl
  });
}

async function assertSupportedPrompt(prompt, expectedProvider, env, options = {}) {
  const result = await runtime.buildAssistantRuntimeResponseAsync(prompt, {}, env);
  assert.equal(runtime.isSafeAssistantRuntimeResponse(result), true, `${prompt} must return a safe response.`);
  assert.equal(result.selectedProvider, expectedProvider, `${prompt} must route to ${expectedProvider}.`);
  assert.equal(result.noExecutionAuthorized, true, `${prompt} must not authorize execution.`);
  assert.equal(result.noLocationPermissionRequested, true, `${prompt} must not request geolocation permission.`);
  assert.equal(result.noProviderContactAuthorized, true, `${prompt} must not authorize provider contact.`);
  assert.equal(result.noBackendWritePerformed, true, `${prompt} must not perform backend writes.`);
  assert(!/\b(call now|send message|book now|buy now|pay now|dispatch now|apply now)\b/i.test(result.answer), `${prompt} must not expose execution controls.`);
  if (options.ready === true) {
    assert.equal(result.providerStatus, "ready", `${prompt} must produce a provider-backed preview.`);
    assert(result.citations.length >= 1, `${prompt} must include citation metadata.`);
    assert(result.sourceResultCount >= 1, `${prompt} must include source results.`);
  } else {
    assert(["missing_config", "provider_error", "fixture_only", "blocked_by_policy"].includes(result.providerStatus), `${prompt} must downgrade to a safe unavailable state.`);
  }
  return result;
}

async function assertBlockedPrompt(prompt, env) {
  const result = await runtime.buildAssistantRuntimeResponseAsync(prompt, {}, env);
  assert.equal(runtime.isSafeAssistantRuntimeResponse(result), true, `${prompt} must return a safe blocked response.`);
  assert.equal(result.allowed, false, `${prompt} must be blocked or downgraded.`);
  assert.equal(result.selectedProvider, null, `${prompt} must not select a provider for execution.`);
  assert.equal(result.providerStatus, "blocked_by_policy", `${prompt} must remain policy-blocked.`);
  assert.equal(result.noExecutionAuthorized, true, `${prompt} must not authorize execution.`);
  assert.equal(result.noProviderContactAuthorized, true, `${prompt} must not authorize provider contact.`);
  assert.equal(result.noLocationPermissionRequested, true, `${prompt} must not request location permission.`);
  assert.equal(result.noBackendWritePerformed, true, `${prompt} must not perform backend writes.`);
  assert.match(result.answer, /cannot execute|No action has been taken/i, `${prompt} must explain that no action occurred.`);
}

async function runNlu2ProviderBackedPromptExpansionQa() {
  const packageJson = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const orchestratorSource = read("server", "nexus-live-source-orchestrator.js");
  const dialogueSource = read("public", "nexus-assistant-dialogue-engine-contract.js");
  const calls = [];
  const env = buildProviderEnv(buildFetchRecorder(calls));

  assert(orchestratorSource.includes("\"shipment-tracking\": \"shipment-tracking\""), "NLU2 must preserve shipment tracking provider routing.");
  assert(dialogueSource.includes("isMarketplaceReviewOnlyRequest"), "NLU2 must preserve marketplace browse-only classification.");
  assert.equal(
    packageJson.scripts["qa:nexus-nlu2-provider-backed-prompt-expansion"],
    "node scripts/nexus-nlu2-provider-backed-prompt-expansion-qa.js",
    "NLU2 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-nlu2-provider-backed-prompt-expansion-qa.js"), "NLU2 QA must be wired into safe suites.");

  await assertSupportedPrompt("What is the weather in Stockton, CA?", "weather", env, { ready: true });
  await assertSupportedPrompt("Find agriculture training resources.", "agriculture-context", env, { ready: true });
  await assertSupportedPrompt("What crop disease updates should farmers know?", "agriculture-context", env, { ready: true });
  await assertSupportedPrompt("Find farm jobs near Stockton, CA.", "job-search", env, { ready: true });
  await assertSupportedPrompt("What current agriculture news should farmers know?", "news-security", env, { ready: true });
  await assertSupportedPrompt("Find agriculture training videos.", "music-media", env, { ready: true });
  await assertSupportedPrompt("Browse AgriTrade.", "agriculture-context", env, { ready: true });
  await assertSupportedPrompt("Track this shipment TEST123.", "shipment-tracking", env, { ready: false });

  const browseIntent = dialogue.classifyAssistantDialogueIntent("Browse AgriTrade.", {});
  assert.equal(browseIntent.intentType, "agriculture-context", "AgriTrade browse must remain read-only agriculture context.");
  const buyIntent = dialogue.classifyAssistantDialogueIntent("Buy fertilizer.", {});
  assert.equal(buyIntent.intentType, "marketplace-request", "Marketplace execution must remain blocked as marketplace-request.");

  for (const prompt of [
    "Call this provider.",
    "Buy fertilizer.",
    "Send my location.",
    "Book me an appointment.",
    "Apply to this job.",
    "Dispatch help.",
    "This is an emergency."
  ]) {
    await assertBlockedPrompt(prompt, env);
  }

  ["open-meteo.com", "wikipedia.org", "reliefweb.int", "remotive.com", "archive.org"].forEach(source => {
    assert(calls.some(url => url.includes(source)), `NLU2 must exercise mocked public source: ${source}`);
  });

  console.log(JSON.stringify({
    providerBackedPrompts: 7,
    safeUnavailablePrompts: 1,
    highRiskPromptsBlocked: 7,
    executionAuthorized: false,
    providerContactAuthorized: false,
    locationPermissionRequested: false,
    backendWritePerformed: false
  }, null, 2));
  console.log("[nexus-nlu2-provider-backed-prompt-expansion-qa] passed");
}

if (require.main === module) {
  runNlu2ProviderBackedPromptExpansionQa().catch(error => {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  });
}

module.exports = Object.freeze({
  runNlu2ProviderBackedPromptExpansionQa
});
