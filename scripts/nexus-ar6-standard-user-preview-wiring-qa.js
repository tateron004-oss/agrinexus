const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const runtime = require("../server/nexus-assistant-runtime-entrypoint.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function functionSlice(source, name) {
  const start = source.indexOf(`function ${name}`);
  assert(start >= 0, `${name} must exist.`);
  const next = source.indexOf("\nfunction ", start + 1);
  return source.slice(start, next > start ? next : source.length);
}

function assertStaticWiring() {
  const server = read("server.js");
  const app = read("public", "app.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const previewRunner = functionSlice(app, "runStandardUserAssistantRuntimePreview");
  const previewGate = functionSlice(app, "isNexusAssistantRuntimePreviewEnabled");

  [
    "NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED",
    "NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED",
    "NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED",
    "assistantRuntimePreviewFlags",
    "/api/nexus/assistant-runtime-preview",
    "buildAssistantRuntimeResponseAsync",
    "noExecutionAuthorized",
    "noProviderHandoff",
    "noLocationPermissionRequested"
  ].forEach(term => assert(server.includes(term), `server.js must include AR6 term: ${term}`));

  assert(server.includes("enabled: liveSourceRetrievalEnabled && assistantDialogueLivePreviewEnabled && standardUserLiveSourcePreviewEnabled"), "AR6 server gate must require all three flags.");
  assert(server.includes("if (!flags.enabled)"), "AR6 preview endpoint must reject disabled flag state.");
  assert(server.includes("return send(res, 403"), "Disabled AR6 preview endpoint must not run provider lookup.");

  [
    "nexusAssistantRuntimePreviewConfig",
    "isNexusAssistantRuntimePreviewEnabled",
    "runStandardUserAssistantRuntimePreview",
    "/api/nexus/assistant-runtime-preview",
    "setVoiceResponse",
    "renderLiveVoiceSuggestions"
  ].forEach(term => assert(app.includes(term), `public/app.js must include AR6 term: ${term}`));

  assert(previewGate.includes("nexusAssistantRuntimePreviewConfig?.enabled === true"), "Browser gate must require enabled config.");
  assert(previewGate.includes("executionAuthority === false"), "Browser gate must preserve no execution authority.");
  assert(previewRunner.includes("if (!prompt || !isNexusAssistantRuntimePreviewEnabled()) return false;"), "Browser runner must short-circuit before network when disabled.");
  assert(previewRunner.indexOf("isNexusAssistantRuntimePreviewEnabled()") < previewRunner.indexOf('"/api/nexus/assistant-runtime-preview"'), "Browser runner must check flags before preview endpoint request.");

  [
    "navigator.geolocation",
    "getCurrentPosition",
    "watchPosition",
    "window.open",
    "location.href",
    "providerHandoffAllowed = true",
    "pendingAction",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "goSection("
  ].forEach(term => assert(!previewRunner.includes(term), `AR6 browser preview runner must not include unsafe behavior: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-ar6-standard-user-preview-wiring"],
    "node scripts/nexus-ar6-standard-user-preview-wiring-qa.js",
    "AR6 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-ar6-standard-user-preview-wiring-qa.js"), "AR6 QA must be wired into local-safe suites.");
}

function assertRuntimeResponsesRemainPreviewOnly() {
  const env = Object.freeze({
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED: "true",
    NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_ENABLED: "true",
    NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
    NEXUS_NEWS_SECURITY_PROVIDER_ENABLED: "true",
    NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
    NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED: "true"
  });
  const lowRiskPrompts = [
    "Weather in Stockton, CA",
    "Help me find agriculture training",
    "What crop disease updates should I know?",
    "Show me farm jobs in Stockton",
    "Current agriculture news",
    "Agriculture training videos"
  ];
  lowRiskPrompts.forEach(prompt => {
    const response = runtime.buildAssistantRuntimeResponse(prompt, { surface: "standard-user", previewOnly: true }, env);
    assert.equal(runtime.isSafeAssistantRuntimeResponse(response), true, `${prompt} must produce a safe runtime response.`);
    assert.equal(response.noExecutionAuthorized, true, `${prompt} must not authorize execution.`);
    assert.equal(response.providerHandoffAllowed, false, `${prompt} must not authorize provider handoff.`);
    assert(Array.isArray(response.safeNextSteps) && response.safeNextSteps.length > 0, `${prompt} must expose safe next steps.`);
    assert(String(response.answer || "").includes("Source:"), `${prompt} must include source context in the answer.`);
  });

  [
    "Call provider",
    "Buy fertilizer",
    "Send location",
    "Book appointment",
    "Apply to job",
    "Dispatch help",
    "emergency"
  ].forEach(prompt => {
    const response = runtime.buildAssistantRuntimeResponse(prompt, { surface: "standard-user", previewOnly: true }, env);
    assert.equal(runtime.isSafeAssistantRuntimeResponse(response), true, `${prompt} must remain safe.`);
    assert.equal(response.allowed, false, `${prompt} must be blocked or downgraded.`);
    assert.equal(response.noExecutionAuthorized, true, `${prompt} must not authorize execution.`);
    assert.equal(response.providerHandoffAllowed, false, `${prompt} must not authorize provider handoff.`);
  });
}

function runAr6StandardUserPreviewWiringQa() {
  assertStaticWiring();
  assertRuntimeResponsesRemainPreviewOnly();
  console.log(JSON.stringify({
    standardUserPreviewDefaultOff: true,
    allThreeFlagsRequired: true,
    lowRiskPreviewResponseSupported: true,
    highRiskPromptsBlockedOrDowngraded: true,
    noBrowserGeolocationOrProviderHandoff: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-ar6-standard-user-preview-wiring-qa] passed");
}

if (require.main === module) {
  try {
    runAr6StandardUserPreviewWiringQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runAr6StandardUserPreviewWiringQa
});
