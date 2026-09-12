const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const dialogue = require("../public/nexus-assistant-dialogue-engine-contract.js");
const runtime = require("../server/nexus-assistant-runtime-entrypoint.js");

const root = path.resolve(__dirname, "..");

const SAFE_PROMPTS = Object.freeze([
  { prompt: "What is the weather in Stockton, CA?", provider: "weather" },
  { prompt: "Find agriculture training resources.", provider: "agriculture-context" },
  { prompt: "What current agriculture news should farmers know?", provider: "news-security" },
  { prompt: "Find farm jobs near Stockton, CA.", provider: "job-search" },
  { prompt: "Find agriculture training videos.", provider: "music-media" }
]);

const BLOCKED_PROMPTS = Object.freeze([
  "Call this provider.",
  "Buy fertilizer.",
  "Send my location.",
  "Book me an appointment.",
  "Dispatch help."
]);

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticContract() {
  assert(exists("server", "nexus-assistant-runtime-entrypoint.js"), "AR1 assistant runtime entrypoint module must exist.");
  assert(exists("scripts", "nexus-ar1-assistant-runtime-entrypoint-qa.js"), "AR1 QA must exist.");

  const runtimeSource = read("server", "nexus-assistant-runtime-entrypoint.js");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "responseId",
    "userPrompt",
    "selectedProvider",
    "providerStatus",
    "sourceLabels",
    "freshnessStatus",
    "trustTier",
    "safeFollowUps",
    "blockedActions",
    "noExecutionAuthorized",
    "noLocationPermissionRequested",
    "noProviderContactAuthorized",
    "noBackendWritePerformed"
  ].forEach(term => assert(runtimeSource.includes(term), `AR1 runtime must include ${term}.`));

  [
    "fetch" + "(",
    "XML" + "HttpRequest",
    "http." + "request",
    "https." + "request",
    "navigator." + "geolocation",
    "media" + "Devices",
    "write" + "File",
    "append" + "File",
    "localStorage." + "setItem",
    "sessionStorage." + "setItem",
    "window." + "open",
    "location." + "href"
  ].forEach(term => assert(!runtimeSource.includes(term), `AR1 runtime must not include unsafe side effect ${term}.`));

  ["nexus-assistant-runtime-entrypoint", "nexus-ar1-assistant-runtime-entrypoint-qa"].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load ${term} in AR1.`);
    assert(!index.includes(term), `public/index.html must not load ${term} in AR1.`);
  });
  if (server.includes("nexus-assistant-runtime-entrypoint")) {
    assert(server.includes("assistantRuntimePreviewFlags"), "server.js runtime exposure must be protected by AR6 preview flags.");
    assert(server.includes("NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED"), "server.js runtime exposure must require the Standard User live preview flag.");
    assert(server.includes("if (!flags.enabled)"), "server.js runtime exposure must reject disabled flags before runtime preview.");
  }

  assert.equal(
    pkg.scripts["qa:nexus-ar1-assistant-runtime-entrypoint"],
    "node scripts/nexus-ar1-assistant-runtime-entrypoint-qa.js",
    "AR1 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-ar1-assistant-runtime-entrypoint-qa.js"), "AR1 QA must be wired into safe suites.");
}

function assertSafeRuntimeResponse(response, label) {
  assert.equal(runtime.isSafeAssistantRuntimeResponse(response), true, `${label} must be a safe assistant runtime response.`);
  assert.match(response.responseId, /^assistant-runtime-[a-f0-9]{16}$/, `${label} responseId must be stable-shaped.`);
  assert.equal(response.noExecutionAuthorized, true, `${label} must authorize no execution.`);
  assert.equal(response.noLocationPermissionRequested, true, `${label} must request no location permission.`);
  assert.equal(response.providerHandoffAllowed, false, `${label} must authorize no provider handoff.`);
  assert.equal(response.noProviderContactAuthorized, true, `${label} must authorize no provider contact.`);
  assert.equal(response.noBackendWritePerformed, true, `${label} must perform no backend write.`);
  assert(response.safeFollowUps.length > 0, `${label} must include safe follow-ups.`);
  assert(response.blockedActions.includes("call"), `${label} must declare calls blocked.`);
  assert(response.blockedActions.includes("payment"), `${label} must declare payments blocked.`);
  assert(!/action completed|called|messaged|paid|purchased|booked|scheduled|submitted|dispatched|shared your location/i.test(response.answer), `${label} must not claim execution.`);
}

function runAr1AssistantRuntimeEntrypointQa() {
  assertStaticContract();

  const trainingClassification = dialogue.classifyAssistantDialogueIntent("Find agriculture training resources.", {});
  assert.notEqual(trainingClassification.intentType, "weather", "Training must not be misclassified as weather because it contains rain.");
  const videoClassification = dialogue.classifyAssistantDialogueIntent("Find agriculture training videos.", {});
  assert.equal(videoClassification.intentType, "music-media", "Training video discovery must route to music/media discovery.");

  SAFE_PROMPTS.forEach(testCase => {
    const response = runtime.buildAssistantRuntimeResponse(testCase.prompt, {}, {});
    assertSafeRuntimeResponse(response, testCase.prompt);
    assert.equal(response.selectedProvider, testCase.provider, `${testCase.prompt} must select ${testCase.provider}.`);
    assert.equal(response.allowed, true, `${testCase.prompt} must be allowed only as read-only assistant response.`);
    assert(["missing_config", "fixture_only", "ready"].includes(response.providerStatus), `${testCase.prompt} must use a safe provider status.`);
    assert(Array.isArray(response.citations), `${testCase.prompt} must expose citations array.`);
    assert(response.sourceLabels.length >= 1, `${testCase.prompt} must expose source labels.`);
  });

  BLOCKED_PROMPTS.forEach(prompt => {
    const response = runtime.buildAssistantRuntimeResponse(prompt, {}, {});
    assertSafeRuntimeResponse(response, prompt);
    assert.equal(response.allowed, false, `${prompt} must be blocked.`);
    assert.equal(response.selectedProvider, null, `${prompt} must not select a provider.`);
    assert(response.blockedReason, `${prompt} must include blocked reason.`);
    assert.match(response.answer, /cannot execute|cannot execute that request|cannot execute that action|cannot execute/i, `${prompt} must explain no execution.`);
  });

  console.log(JSON.stringify({
    safePromptCount: SAFE_PROMPTS.length,
    blockedPromptCount: BLOCKED_PROMPTS.length,
    runtimeModule: "server/nexus-assistant-runtime-entrypoint.js",
    standardUserRuntimeActivated: false,
    noExecutionAuthorized: true,
    noLocationPermissionRequested: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  }, null, 2));
  console.log("[nexus-ar1-assistant-runtime-entrypoint-qa] passed");
}

if (require.main === module) {
  try {
    runAr1AssistantRuntimeEntrypointQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  SAFE_PROMPTS,
  BLOCKED_PROMPTS,
  runAr1AssistantRuntimeEntrypointQa
});
