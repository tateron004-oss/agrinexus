const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const runtime = require("../server/nexus-assistant-runtime-entrypoint.js");
const followUp = require("../server/nexus-assistant-follow-up-context.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function mockProviderEnv() {
  return Object.freeze({
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
    NEXUS_NEWS_SECURITY_PROVIDER_ENABLED: "true",
    NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
    NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED: "true"
  });
}

function assertSafeFollowUpResponse(response, label) {
  assert.equal(runtime.isSafeAssistantRuntimeResponse(response), true, `${label} must satisfy safe runtime response contract.`);
  assert.equal(response.noExecutionAuthorized, true, `${label} must authorize no execution.`);
  assert.equal(response.noLocationPermissionRequested, true, `${label} must request no location permission.`);
  assert.equal(response.noProviderContactAuthorized, true, `${label} must authorize no provider contact.`);
  assert.equal(response.noBackendWritePerformed, true, `${label} must perform no backend writes.`);
  assert(!/called|messaged|paid|purchased|booked|scheduled|submitted|dispatched|shared your location/i.test(response.answer), `${label} must not claim execution.`);
}

function assertStaticContract() {
  assert(exists("server", "nexus-assistant-follow-up-context.js"), "AR4 follow-up context module must exist.");
  assert(exists("scripts", "nexus-ar4-follow-up-context-qa.js"), "AR4 QA must exist.");

  const followUpSource = read("server", "nexus-assistant-follow-up-context.js");
  const runtimeSource = read("server", "nexus-assistant-runtime-entrypoint.js");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "lastIntent",
    "lastProvider",
    "lastQuery",
    "lastResultsSummary",
    "lastCitations",
    "lastRetrievedAt",
    "allowedRefinements",
    "blockedActions",
    "expiresAt",
    "sessionOnly"
  ].forEach(term => assert(followUpSource.includes(term), `Follow-up context must include ${term}.`));

  ["apply", "call", "message", "whatsapp", "buy", "pay", "book", "schedule", "dispatch", "send\\s+(my\\s+)?location", "submit", "upload\\s+resume"].forEach(term => {
    assert(followUpSource.includes(term), `Follow-up context must block ${term}.`);
  });
  assert(runtimeSource.includes("buildAssistantRuntimeFollowUpResponse"), "Runtime must expose AR4 follow-up response helper.");

  ["nexus-assistant-follow-up-context", "nexus-ar4-follow-up-context-qa", "buildAssistantRuntimeFollowUpResponse"].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load ${term} in AR4.`);
    assert(!index.includes(term), `public/index.html must not load ${term} in AR4.`);
  });
  assert(!server.includes("nexus-assistant-follow-up-context"), "server.js must not expose AR4 follow-up context directly.");

  assert.equal(
    pkg.scripts["qa:nexus-ar4-follow-up-context"],
    "node scripts/nexus-ar4-follow-up-context-qa.js",
    "AR4 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-ar4-follow-up-context-qa.js"), "AR4 QA must be wired into local-safe suites.");
}

function buildContextForPrompt(prompt) {
  const response = runtime.buildAssistantRuntimeResponse(prompt, {}, mockProviderEnv());
  assert.equal(runtime.isSafeAssistantRuntimeResponse(response), true, `${prompt} base response must be safe.`);
  const context = followUp.buildAssistantFollowUpContext(response, new Date("2026-06-28T12:00:00.000Z"));
  assert.equal(followUp.isSafeAssistantFollowUpContext(context), true, `${prompt} follow-up context must be safe.`);
  assert.equal(context.sessionOnly, true, "Follow-up context must be session-only.");
  assert.equal(context.noPersistence, true, "Follow-up context must not persist.");
  return context;
}

function assertSupportedFollowUps() {
  const jobsContext = buildContextForPrompt("Find farm jobs near Stockton, CA.");
  const jobsFollowUp = runtime.buildAssistantRuntimeFollowUpResponse("Only show entry-level ones.", jobsContext, mockProviderEnv(), new Date("2026-06-28T12:05:00.000Z"));
  assertSafeFollowUpResponse(jobsFollowUp, "jobs follow-up refinement");
  assert.equal(jobsFollowUp.selectedProvider, "job-search", "Jobs refinement must preserve previous job provider.");
  assert.match(jobsFollowUp.answer, /refine results|entry-level|previous job-search result/i, "Jobs refinement must understand previous result context.");

  const agricultureContext = buildContextForPrompt("Find agriculture training resources.");
  const agricultureFollowUp = runtime.buildAssistantRuntimeFollowUpResponse("Explain that result.", agricultureContext, mockProviderEnv(), new Date("2026-06-28T12:05:00.000Z"));
  assertSafeFollowUpResponse(agricultureFollowUp, "agriculture follow-up explanation");
  assert.equal(agricultureFollowUp.selectedProvider, "agriculture-context", "Agriculture explanation must preserve previous provider.");
  assert.match(agricultureFollowUp.answer, /explain result|previous agriculture-context result/i, "Agriculture follow-up must explain previous result.");

  const weatherContext = buildContextForPrompt("What is the weather in Stockton, CA?");
  const weatherFollowUp = runtime.buildAssistantRuntimeFollowUpResponse("Tell me more details.", weatherContext, mockProviderEnv(), new Date("2026-06-28T12:05:00.000Z"));
  assertSafeFollowUpResponse(weatherFollowUp, "weather follow-up detail");
  assert.equal(weatherFollowUp.selectedProvider, "weather", "Weather detail must preserve previous provider.");
  assert.match(weatherFollowUp.answer, /more detail|previous weather result/i, "Weather follow-up must use previous weather context.");

  const newsContext = buildContextForPrompt("What current agriculture news should farmers know?");
  const newsFollowUp = runtime.buildAssistantRuntimeFollowUpResponse("Compare sources.", newsContext, mockProviderEnv(), new Date("2026-06-28T12:05:00.000Z"));
  assertSafeFollowUpResponse(newsFollowUp, "news follow-up source comparison");
  assert.equal(newsFollowUp.selectedProvider, "news-security", "News comparison must preserve previous provider.");
  assert.match(newsFollowUp.answer, /compare sources|Source context/i, "News follow-up must compare source context.");
}

function assertBlockedAndExpiredFollowUps() {
  const jobsContext = buildContextForPrompt("Find farm jobs near Stockton, CA.");
  const blocked = runtime.buildAssistantRuntimeFollowUpResponse("Apply to that job.", jobsContext, mockProviderEnv(), new Date("2026-06-28T12:05:00.000Z"));
  assertSafeFollowUpResponse(blocked, "blocked follow-up action");
  assert.equal(blocked.allowed, false, "Blocked follow-up action must not be allowed.");
  assert.equal(blocked.selectedProvider, null, "Blocked follow-up action must not select a provider.");
  assert.match(blocked.blockedReason, /follow_up_execution_blocked/, "Blocked follow-up must include blocked reason.");
  assert.match(blocked.answer, /cannot execute|No action has been taken/i, "Blocked follow-up must explain no execution.");

  const expiredContext = Object.freeze(Object.assign({}, jobsContext, { expiresAt: "2026-06-28T11:00:00.000Z" }));
  const fallback = runtime.buildAssistantRuntimeFollowUpResponse("Only show entry-level ones.", expiredContext, mockProviderEnv(), new Date("2026-06-28T12:05:00.000Z"));
  assertSafeFollowUpResponse(fallback, "expired context fallback");
  assert.notEqual(fallback.providerStatus, "context_refinement", "Expired context must not produce a context refinement.");
  assert.match(fallback.answer, /not connected yet|cannot execute|could not|source/i, "Expired context fallback must stay safe and honest.");
}

function runAr4FollowUpContextQa() {
  assertStaticContract();
  assertSupportedFollowUps();
  assertBlockedAndExpiredFollowUps();

  console.log(JSON.stringify({
    sessionOnlyFollowUpContext: true,
    supportedFollowUps: ["refine results", "explain result", "compare sources", "more detail"],
    blockedFollowUpActions: true,
    expiredContextFallback: true,
    noPersistence: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-ar4-follow-up-context-qa] passed");
}

if (require.main === module) {
  try {
    runAr4FollowUpContextQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runAr4FollowUpContextQa
});
