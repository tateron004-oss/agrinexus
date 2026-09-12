const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const runtime = require("../server/nexus-assistant-runtime-entrypoint.js");
const agriculture = require("../server/nexus-agriculture-context-source-provider.js");
const news = require("../server/nexus-news-security-source-provider.js");
const jobs = require("../server/nexus-job-search-source-provider.js");
const media = require("../server/nexus-music-media-source-provider.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function buildJsonResponse(payload) {
  return Object.freeze({
    ok: true,
    status: 200,
    async json() {
      return payload;
    }
  });
}

function buildFakePublicSourceFetch(calls) {
  return async function fakePublicSourceFetch(url) {
    const href = String(url && url.href ? url.href : url);
    calls.push(href);
    if (href.includes("wikipedia.org")) {
      return buildJsonResponse({
        query: {
          search: [{
            title: "Agricultural extension",
            snippet: "Agricultural extension supports training and information for farmers."
          }]
        }
      });
    }
    if (href.includes("reliefweb.int")) {
      return buildJsonResponse({
        data: [{
          fields: {
            title: "Agriculture and food security update",
            url: "https://reliefweb.int/report/example/agriculture-food-security-update",
            date: { created: "2026-06-28T00:00:00Z" }
          }
        }]
      });
    }
    if (href.includes("remotive.com")) {
      return buildJsonResponse({
        jobs: [{
          id: 42,
          title: "Agriculture Support Specialist",
          company_name: "Public Workforce Partner",
          candidate_required_location: "United States",
          job_type: "full_time",
          salary: "not listed",
          publication_date: "2026-06-28T00:00:00Z",
          url: "https://remotive.com/remote-jobs/example"
        }]
      });
    }
    if (href.includes("archive.org")) {
      return buildJsonResponse({
        response: {
          docs: [{
            title: "Agriculture Training Video Collection",
            identifier: "agriculture-training-video-collection"
          }]
        }
      });
    }
    throw new Error(`Unexpected public source URL: ${href}`);
  };
}

function buildPublicSourceEnv(fetchImpl) {
  return Object.freeze({
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED: "true",
    NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED: "true",
    NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
    NEXUS_AGRICULTURE_CONTEXT_PUBLIC_PROVIDER_ENABLED: "true",
    NEXUS_NEWS_SECURITY_PROVIDER_ENABLED: "true",
    NEXUS_NEWS_SECURITY_PUBLIC_PROVIDER_ENABLED: "true",
    NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
    NEXUS_JOB_SEARCH_PUBLIC_PROVIDER_ENABLED: "true",
    NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED: "true",
    NEXUS_MUSIC_MEDIA_PUBLIC_PROVIDER_ENABLED: "true",
    NEXUS_AGRICULTURE_CONTEXT_FETCH_IMPL: fetchImpl,
    NEXUS_NEWS_SECURITY_FETCH_IMPL: fetchImpl,
    NEXUS_JOB_SEARCH_FETCH_IMPL: fetchImpl,
    NEXUS_MUSIC_MEDIA_FETCH_IMPL: fetchImpl
  });
}

function assertSafeSourceResult(result, providerName) {
  assert.equal(result.providerName, providerName);
  assert.equal(result.providerMode, "live");
  assert.equal(result.sourceStatus, "source-result-available");
  assert.equal(result.evidenceStatus, "source-backed");
  assert.equal(result.readOnly, true);
  assert.equal(result.noExecutionRequired, true);
  assert.equal(result.executionAuthority, false);
  assert.match(result.sourceUrl, /^https:\/\//);
}

function assertSafeRuntimeResponse(response, providerName) {
  assert.equal(runtime.isSafeAssistantRuntimeResponse(response), true);
  assert.equal(response.selectedProvider, providerName);
  assert.equal(response.providerStatus, "ready");
  assert.equal(response.noExecutionAuthorized, true);
  assert.equal(response.noLocationPermissionRequested, true);
  assert.equal(response.noProviderContactAuthorized, true);
  assert.equal(response.noBackendWritePerformed, true);
  assert(response.citations.length >= 1);
  assert(response.answer.includes("Here") || response.answer.includes("found") || response.answer.includes("source"));
}

async function assertPublicProviderBehavior() {
  const calls = [];
  const env = buildPublicSourceEnv(buildFakePublicSourceFetch(calls));

  assertSafeSourceResult(await agriculture.getAgricultureContextSourceResultAsync({ topic: "agriculture training resources" }, env), "agriculture-context");
  assertSafeSourceResult(await news.getNewsSecuritySourceResultAsync({ regionOrTopic: "agriculture news" }, env), "news-security");
  assertSafeSourceResult(await jobs.getJobSearchSourceResultAsync({ query: "farm jobs", locationText: "Stockton, CA" }, env), "job-search");
  assertSafeSourceResult(await media.getMusicMediaSourceResultAsync({ mediaRequest: "agriculture training videos" }, env), "music-media");

  assertSafeRuntimeResponse(await runtime.buildAssistantRuntimeResponseAsync("Find agriculture training resources.", {}, env), "agriculture-context");
  assertSafeRuntimeResponse(await runtime.buildAssistantRuntimeResponseAsync("What current agriculture news should farmers know?", {}, env), "news-security");
  assertSafeRuntimeResponse(await runtime.buildAssistantRuntimeResponseAsync("Find farm jobs near Stockton, CA.", {}, env), "job-search");
  assertSafeRuntimeResponse(await runtime.buildAssistantRuntimeResponseAsync("Find agriculture training videos.", {}, env), "music-media");

  const blocked = await runtime.buildAssistantRuntimeResponseAsync("Call this provider.", {}, env);
  assert.equal(runtime.isSafeAssistantRuntimeResponse(blocked), true);
  assert.equal(blocked.allowed, false);
  assert.equal(blocked.noExecutionAuthorized, true);
  assert.equal(blocked.noProviderContactAuthorized, true);

  assert(calls.some(url => url.includes("wikipedia.org")), "Wikipedia public source should be called through injected fetch.");
  assert(calls.some(url => url.includes("reliefweb.int")), "ReliefWeb public source should be called through injected fetch.");
  assert(calls.some(url => url.includes("remotive.com")), "Remotive public source should be called through injected fetch.");
  assert(calls.some(url => url.includes("archive.org")), "Internet Archive public source should be called through injected fetch.");
}

function assertStaticSafety() {
  const files = [
    ["server", "nexus-agriculture-context-source-provider.js"],
    ["server", "nexus-news-security-source-provider.js"],
    ["server", "nexus-job-search-source-provider.js"],
    ["server", "nexus-music-media-source-provider.js"],
    ["server", "nexus-live-source-orchestrator.js"]
  ];
  const combined = files.map(parts => read(...parts)).join("\n");
  [
    "NEXUS_AGRICULTURE_CONTEXT_PUBLIC_PROVIDER_ENABLED",
    "NEXUS_NEWS_SECURITY_PUBLIC_PROVIDER_ENABLED",
    "NEXUS_JOB_SEARCH_PUBLIC_PROVIDER_ENABLED",
    "NEXUS_MUSIC_MEDIA_PUBLIC_PROVIDER_ENABLED",
    "Wikipedia public search",
    "ReliefWeb",
    "Remotive public jobs API",
    "Internet Archive public search",
    "getAgricultureContextSourceResultAsync",
    "getNewsSecuritySourceResultAsync",
    "getJobSearchSourceResultAsync",
    "getMusicMediaSourceResultAsync"
  ].forEach(term => assert(combined.includes(term), `BNA public provider expansion must include: ${term}`));

  [
    "window.open",
    "location.href",
    "navigator.geolocation",
    "getCurrentPosition",
    "getUserMedia",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "writeFileSync",
    "providerHandoffAllowed: true",
    "executionAuthority: true"
  ].forEach(term => assert(!combined.includes(term), `BNA public provider expansion must not introduce unsafe behavior: ${term}`));
}

async function runBnaPublicProviderExpansionQa() {
  assertStaticSafety();
  await assertPublicProviderBehavior();
  console.log(JSON.stringify({
    agriculturePublicSource: "Wikipedia public search",
    newsPublicSource: "ReliefWeb",
    jobsPublicSource: "Remotive public jobs API",
    mediaPublicSource: "Internet Archive public search",
    readOnly: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-bna-public-provider-expansion-qa] passed");
}

if (require.main === module) {
  runBnaPublicProviderExpansionQa().catch(error => {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  });
}

module.exports = Object.freeze({
  runBnaPublicProviderExpansionQa
});
