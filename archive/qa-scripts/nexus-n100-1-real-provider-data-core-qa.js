const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const n100 = require("../server/nexus-n100-real-provider-data-core.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function jsonResponse(payload) {
  return Object.freeze({
    ok: true,
    status: 200,
    async json() {
      return payload;
    }
  });
}

function buildN100FakeFetch(calls) {
  return async function fakeFetch(url) {
    const href = String(url && url.href ? url.href : url);
    calls.push(href);
    if (href.includes("geocoding-api.open-meteo.com")) {
      return jsonResponse({
        results: [{ name: "Stockton", admin1: "California", country_code: "US", latitude: 37.9577, longitude: -121.2908 }]
      });
    }
    if (href.includes("api.open-meteo.com")) {
      return jsonResponse({
        current: { time: "2026-06-28T12:00", temperature_2m: 30, weather_code: 1, wind_speed_10m: 10 }
      });
    }
    if (href.includes("wikipedia.org")) {
      return jsonResponse({
        query: {
          search: [{ title: "Agricultural extension", snippet: "Agricultural extension supports farmer training, crop disease awareness, irrigation, and public-source guidance." }]
        }
      });
    }
    if (href.includes("reliefweb.int")) {
      return jsonResponse({
        data: [{ fields: { title: "Agriculture food security update", url: "https://reliefweb.int/report/example/agriculture-food-security-update", date: { created: "2026-06-28T00:00:00Z" } } }]
      });
    }
    if (href.includes("remotive.com")) {
      return jsonResponse({
        jobs: [{ id: 100, title: "Farm Workforce Support Specialist", company_name: "Public Workforce Partner", candidate_required_location: "United States", job_type: "full_time", publication_date: "2026-06-28T00:00:00Z", url: "https://remotive.com/remote-jobs/example" }]
      });
    }
    if (href.includes("archive.org")) {
      return jsonResponse({
        response: { docs: [{ title: "Agriculture Training Video Collection", identifier: "agriculture-training-video-collection" }] }
      });
    }
    throw new Error(`Unexpected N100 fake provider URL: ${href}`);
  };
}

function assertSafeAnswer(answer, prompt) {
  assert.equal(n100.isSafeN100RealProviderAnswer(answer), true, `${prompt} must return a safe N100 answer.`);
  assert.equal(answer.noExecutionAuthorized, true, `${prompt} must not authorize execution.`);
  assert.equal(answer.noLocationPermissionRequested, true, `${prompt} must not request location permission.`);
  assert.equal(answer.noDispatchAuthorized, true, `${prompt} must not authorize dispatch.`);
  assert.equal(answer.providerHandoffAllowed, false, `${prompt} must not allow provider handoff.`);
  assert.equal(answer.noProviderContactAuthorized, true, `${prompt} must not authorize provider contact.`);
  assert.equal(answer.noBackendWritePerformed, true, `${prompt} must perform no backend writes.`);
  assert(answer.retrievedAt, `${prompt} must include retrievedAt.`);
  assert(answer.confidence, `${prompt} must include confidence.`);
  assert(answer.trustTier, `${prompt} must include trust metadata.`);
  assert(Array.isArray(answer.citations), `${prompt} must include citation metadata array.`);
  assert(!/action completed|called|messaged|paid|purchased|booked|scheduled|submitted|dispatched|shared your location/i.test(answer.answer), `${prompt} must not claim completed action.`);
}

function assertStaticSafety() {
  const moduleSource = read("server", "nexus-n100-real-provider-data-core.js");
  const doc = read("docs", "NEXUS_N100_1_REAL_PROVIDER_DATA_CONNECTION_CORE.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(exists("server", "nexus-n100-real-provider-data-core.js"), "N100-1 core module must exist.");
  assert(exists("docs", "NEXUS_N100_1_REAL_PROVIDER_DATA_CONNECTION_CORE.md"), "N100-1 doc must exist.");
  assert(exists("scripts", "nexus-n100-1-real-provider-data-core-qa.js"), "N100-1 QA must exist.");

  [
    "N100_REAL_PROVIDER_PROMPTS",
    "answerN100RealProviderQuestion",
    "isSafeN100RealProviderAnswer",
    "noExecutionAuthorized",
    "noLocationPermissionRequested",
    "noDispatchAuthorized",
    "noBackendWritePerformed"
  ].forEach(term => assert(moduleSource.includes(term), `N100-1 module must include ${term}.`));

  [
    "Weather: Open-Meteo public provider",
    "AgriTrade browse-only options",
    "Shipment tracking readiness",
    "does not activate Standard User runtime behavior"
  ].forEach(term => assert(doc.includes(term), `N100-1 doc must include ${term}.`));

  [
    "nexus-n100-real-provider-data-core",
    "answerN100RealProviderQuestion",
    "N100_REAL_PROVIDER_PROMPTS"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load N100-1 runtime term: ${term}.`);
    assert(!index.includes(term), `public/index.html must not load N100-1 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load N100-1 runtime term: ${term}.`);
  });

  [
    "navigator.geolocation",
    "getCurrentPosition",
    "watchPosition",
    "getUserMedia",
    "window.open",
    "location.href",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "writeFileSync",
    "ACTION_CALL",
    "executionAuthority: true",
    "providerHandoffAllowed: true"
  ].forEach(term => assert(!moduleSource.includes(term), `N100-1 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-n100-1-real-provider-data-core"],
    "node scripts/nexus-n100-1-real-provider-data-core-qa.js",
    "N100-1 package QA alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-n100-1-real-provider-data-core-qa.js"), "N100-1 QA must be wired into local-safe suites.");
}

async function assertPromptCoverage() {
  const calls = [];
  const env = n100.buildN100ProviderEnv(buildN100FakeFetch(calls));
  const expected = new Map([
    ["What is the weather in Stockton, CA?", "weather"],
    ["Should I irrigate this week?", "irrigation-support"],
    ["What current crop disease updates should farmers know?", "crop-disease-updates"],
    ["Find agriculture training resources.", "training-resources"],
    ["Find farm jobs near Stockton, CA.", "jobs-workforce"],
    ["What current agriculture news should farmers know?", "agriculture-news"],
    ["Find agriculture training videos.", "training-media"],
    ["Browse AgriTrade options.", "marketplace-browse"],
    ["Track this shipment TEST123.", "shipment-tracking"],
    ["Find nearby agriculture training in Stockton, CA.", "training-resources"]
  ]);

  for (const prompt of n100.N100_REAL_PROVIDER_PROMPTS) {
    const answer = await n100.answerN100RealProviderQuestion(prompt, {}, env);
    assertSafeAnswer(answer, prompt);
    assert.equal(answer.category, expected.get(prompt), `${prompt} must classify into expected N100-1 category.`);
    assert(answer.citations.length >= 1, `${prompt} must include source/citation metadata.`);
  }

  ["open-meteo.com", "wikipedia.org", "reliefweb.int", "remotive.com", "archive.org"].forEach(source => {
    assert(calls.some(url => url.includes(source)), `N100-1 must exercise mocked public source: ${source}.`);
  });

  const agriTrade = await n100.answerN100RealProviderQuestion("Browse AgriTrade options.", {}, env);
  assert.match(agriTrade.answer, /browse-only/i, "AgriTrade must stay browse-only.");
  assert.doesNotMatch(agriTrade.answer, /\b(can|will|ready to|authorized to)\s+(buy|sell|pay|contact)\b/i, "AgriTrade answer must not become transactional.");

  const shipment = await n100.answerN100RealProviderQuestion("Track this shipment TEST123.", {}, env);
  assert.match(shipment.answer, /requires a configured read-only carrier/i, "Shipment must stay provider-readiness until configured.");
  assert.equal(shipment.selectedProvider, "n100-real-provider-data-core", "Shipment must use fixture readiness provider in N100-1.");
}

async function assertSafeSkipsAndBlocks() {
  const offCalls = [];
  const offEnv = n100.buildN100ProviderEnv(buildN100FakeFetch(offCalls), {
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "false",
    NEXUS_WEATHER_PROVIDER_ENABLED: "false",
    NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "false",
    NEXUS_NEWS_SECURITY_PROVIDER_ENABLED: "false",
    NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "false",
    NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED: "false"
  });
  const skipped = await n100.answerN100RealProviderQuestion("What is the weather in Stockton, CA?", {}, offEnv);
  assertSafeAnswer(skipped, "disabled weather path");
  assert.equal(offCalls.length, 0, "Disabled provider flags must not call fetch.");
  assert.notEqual(skipped.providerStatus, "ready", "Disabled provider path must not claim ready live provider.");

  for (const prompt of [
    "Call a weather provider in Stockton.",
    "Buy fertilizer from AgriTrade.",
    "Send my location to the farm support team.",
    "Open the camera to diagnose crop disease.",
    "Schedule a telehealth appointment."
  ]) {
    const blocked = await n100.answerN100RealProviderQuestion(prompt, {}, n100.buildN100ProviderEnv(buildN100FakeFetch([])));
    assertSafeAnswer(blocked, prompt);
    assert.equal(blocked.providerStatus, "blocked_by_policy", `${prompt} must be blocked by policy.`);
    assert.equal(blocked.citations.length, 0, `${prompt} must not fetch sources after a high-risk request.`);
  }
}

async function runN100RealProviderDataCoreQa() {
  assertStaticSafety();
  await assertPromptCoverage();
  await assertSafeSkipsAndBlocks();

  console.log(JSON.stringify({
    phase: "N100-1",
    publicProvidersExercised: ["Open-Meteo", "Wikipedia", "ReliefWeb", "Remotive", "Internet Archive"],
    fixtureReadinessLanes: ["AgriTrade browse-only", "Shipment tracking readiness"],
    standardUserRuntimeActivated: false,
    noExecutionAuthorized: true,
    noLocationPermissionRequested: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  }, null, 2));
  console.log("[nexus-n100-1-real-provider-data-core-qa] passed");
}

if (require.main === module) {
  runN100RealProviderDataCoreQa().catch(error => {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  });
}

module.exports = Object.freeze({
  runN100RealProviderDataCoreQa
});
