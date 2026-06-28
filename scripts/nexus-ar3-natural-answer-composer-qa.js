const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const runtime = require("../server/nexus-assistant-runtime-entrypoint.js");
const composer = require("../server/nexus-assistant-answer-composer.js");

const root = path.resolve(__dirname, "..");

const UNSAFE_PATTERNS = Object.freeze([
  /\baction completed\b/i,
  /\bcalled\b/i,
  /\bmessaged\b/i,
  /\bpaid\b/i,
  /\bpurchased\b/i,
  /\bbooked\b/i,
  /\bscheduled\b/i,
  /\bsubmitted\b/i,
  /\bdispatched\b/i,
  /\bshared your location\b/i
]);

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function buildFakeOpenMeteoFetch(callLog) {
  return async function fakeFetch(url) {
    const target = String(url);
    callLog.push(target);
    if (target.includes("geocoding-api.open-meteo.com")) {
      return {
        ok: true,
        status: 200,
        async json() {
          return {
            results: [{
              name: "Stockton",
              admin1: "California",
              country_code: "US",
              latitude: 37.9577,
              longitude: -121.2908
            }]
          };
        }
      };
    }
    if (target.includes("api.open-meteo.com")) {
      return {
        ok: true,
        status: 200,
        async json() {
          return {
            current: {
              time: "2026-06-28T12:00",
              temperature_2m: 29,
              weather_code: 1,
              wind_speed_10m: 9
            }
          };
        }
      };
    }
    throw new Error(`unexpected-url:${target}`);
  };
}

function mockProviderEnv(extra = {}) {
  return Object.freeze(Object.assign({
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
    NEXUS_NEWS_SECURITY_PROVIDER_ENABLED: "true",
    NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
    NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED: "true"
  }, extra));
}

function assertNaturalAnswer(response, label) {
  assert.equal(runtime.isSafeAssistantRuntimeResponse(response), true, `${label} must satisfy safe runtime response contract.`);
  assert.equal(composer.isSafeComposedAssistantAnswer(response.answer), true, `${label} must satisfy safe natural answer contract.`);
  assert.match(response.answer, /Source:|not connected yet|cannot execute/i, `${label} must include source-aware, missing-provider, or blocked-action wording.`);
  assert(!/^\s*[\[{]/.test(response.answer), `${label} must not expose raw JSON/provider dumps.`);
  UNSAFE_PATTERNS.forEach(pattern => {
    assert(!pattern.test(response.answer), `${label} must not include unsafe execution language: ${pattern}`);
  });
}

function assertStaticContract() {
  assert(exists("server", "nexus-assistant-answer-composer.js"), "AR3 answer composer module must exist.");
  assert(exists("scripts", "nexus-ar3-natural-answer-composer-qa.js"), "AR3 QA must exist.");

  const runtimeSource = read("server", "nexus-assistant-runtime-entrypoint.js");
  const composerSource = read("server", "nexus-assistant-answer-composer.js");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(runtimeSource.includes("nexus-assistant-answer-composer"), "Runtime entrypoint must use AR3 answer composer.");
  ["Source:", "Retrieved:", "Confidence:", "Freshness:", "not connected yet", "No action has been taken"].forEach(term => {
    assert(composerSource.includes(term), `Answer composer must include natural answer term: ${term}`);
  });
  ["action completed", "called", "messaged", "paid", "purchased", "booked", "scheduled", "submitted", "dispatched"].forEach(term => {
    assert(composerSource.includes(term), `Answer composer must guard unsafe term: ${term}`);
  });

  ["nexus-assistant-answer-composer", "nexus-ar3-natural-answer-composer-qa"].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load ${term} in AR3.`);
    assert(!index.includes(term), `public/index.html must not load ${term} in AR3.`);
  });
  assert(!server.includes("nexus-assistant-answer-composer"), "server.js must not expose AR3 composer directly.");

  assert.equal(
    pkg.scripts["qa:nexus-ar3-natural-answer-composer"],
    "node scripts/nexus-ar3-natural-answer-composer-qa.js",
    "AR3 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-ar3-natural-answer-composer-qa.js"), "AR3 QA must be wired into local-safe suites.");
}

async function runNaturalAnswerCases() {
  const weatherCalls = [];
  const weatherResponse = await runtime.buildAssistantRuntimeResponseAsync("What is the weather in Stockton, CA?", {}, mockProviderEnv({
    NEXUS_WEATHER_PROVIDER_ENABLED: "true",
    NEXUS_WEATHER_OPEN_METEO_PROVIDER_ENABLED: "true",
    NEXUS_WEATHER_FETCH_IMPL: buildFakeOpenMeteoFetch(weatherCalls)
  }));
  assertNaturalAnswer(weatherResponse, "weather");
  assert.match(weatherResponse.answer, /Here's what I found/i, "Weather answer must use assistant-style opening.");
  assert.match(weatherResponse.answer, /Open-Meteo/i, "Weather answer must include source label.");
  assert.match(weatherResponse.answer, /Retrieved:/i, "Weather answer must include retrieved metadata.");
  assert.match(weatherResponse.answer, /Confidence:/i, "Weather answer must include confidence metadata.");
  assert.match(weatherResponse.answer, /Freshness:/i, "Weather answer must include freshness metadata.");
  assert.equal(weatherCalls.length, 2, "Weather answer must use deterministic fake public provider path.");

  const cases = [
    { label: "agriculture", prompt: "Find agriculture training resources.", provider: "agriculture-context" },
    { label: "jobs", prompt: "Find farm jobs near Stockton, CA.", provider: "job-search" },
    { label: "news", prompt: "What current agriculture news should farmers know?", provider: "news-security" },
    { label: "media", prompt: "Find agriculture training videos.", provider: "music-media" }
  ];

  cases.forEach(testCase => {
    const response = runtime.buildAssistantRuntimeResponse(testCase.prompt, {}, mockProviderEnv());
    assertNaturalAnswer(response, testCase.label);
    assert.equal(response.selectedProvider, testCase.provider, `${testCase.label} must select expected provider.`);
    assert.match(response.answer, /Here's what I found|Source:/i, `${testCase.label} answer must be natural and source-aware.`);
    assert.match(response.answer, /Retrieved:/i, `${testCase.label} answer must include retrieved metadata.`);
    assert.match(response.answer, /Confidence:/i, `${testCase.label} answer must include confidence metadata.`);
  });

  const missingProvider = runtime.buildAssistantRuntimeResponse("Find agriculture training resources.", {}, {});
  assertNaturalAnswer(missingProvider, "missing provider");
  assert.match(missingProvider.answer, /not connected yet/i, "Missing provider answer must be honest.");
  assert(!/live data returned|current live result/i.test(missingProvider.answer), "Missing provider answer must not falsely claim live data.");

  const blocked = runtime.buildAssistantRuntimeResponse("Call this provider.", {}, mockProviderEnv());
  assertNaturalAnswer(blocked, "blocked action");
  assert.equal(blocked.allowed, false, "Blocked action must remain blocked.");
  assert.match(blocked.answer, /cannot execute/i, "Blocked action answer must explain no execution.");
  assert.match(blocked.answer, /No action has been taken/i, "Blocked action answer must say no action was taken.");
}

async function runAr3NaturalAnswerComposerQa() {
  assertStaticContract();
  await runNaturalAnswerCases();

  console.log(JSON.stringify({
    naturalAnswerComposer: true,
    sourceAwareLanguage: true,
    missingProviderHonesty: true,
    blockedActionSafety: true,
    standardUserRuntimeActivated: false,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-ar3-natural-answer-composer-qa] passed");
}

if (require.main === module) {
  runAr3NaturalAnswerComposerQa().catch(error => {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  });
}

module.exports = Object.freeze({
  runAr3NaturalAnswerComposerQa
});
