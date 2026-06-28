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

function assertCardStaticContract() {
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const styles = read("public", "styles.css");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  const runner = functionSlice(app, "runStandardUserAssistantRuntimePreview");
  const gate = functionSlice(app, "isNexusAssistantRuntimePreviewEnabled");
  const normalizeCard = functionSlice(app, "normalizeAssistantRuntimePreviewCard");
  const renderMarkup = functionSlice(app, "renderAssistantRuntimePreviewCardMarkup");
  const renderCard = functionSlice(app, "renderAssistantRuntimePreviewCard");

  assert(!index.includes("data-nexus-assistant-runtime-preview-card"), "AR7 preview card must not be static HTML.");
  assert(gate.includes("nexusAssistantRuntimePreviewConfig?.enabled === true"), "AR7 must reuse the AR6 enabled gate.");
  assert(gate.includes("executionAuthority === false"), "AR7 gate must preserve executionAuthority false.");
  assert(runner.includes("if (!prompt || !isNexusAssistantRuntimePreviewEnabled()) return false;"), "AR7 runner must still short-circuit before network when disabled.");
  assert(runner.indexOf("isNexusAssistantRuntimePreviewEnabled()") < runner.indexOf('"/api/nexus/assistant-runtime-preview"'), "AR7 must check flags before endpoint request.");
  assert(runner.includes("renderAssistantRuntimePreviewCard(response)"), "AR7 must render the card only after the verified safe response.");

  [
    "answer",
    "sourceLabels",
    "citations",
    "retrievedAt",
    "confidence",
    "freshnessStatus",
    "safeFollowUps",
    "Read-only preview. No action has been taken."
  ].forEach(term => assert(normalizeCard.includes(term) || renderMarkup.includes(term), `AR7 card must include required field or copy: ${term}`));

  [
    'data-nexus-assistant-runtime-preview-card="true"',
    'data-read-only="true"',
    'data-execution-authority="false"',
    'data-provider-handoff="false"',
    "Source-backed preview",
    "Retrieved",
    "Confidence",
    "Freshness",
    "Preview citation details",
    "Safe follow-up prompts"
  ].forEach(term => assert(renderMarkup.includes(term), `AR7 card markup must include: ${term}`));

  [
    "<button",
    "<a ",
    "onclick",
    "data-voice-example",
    "data-command",
    "window.open",
    "location.href",
    "navigator.geolocation",
    "getCurrentPosition",
    "watchPosition",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "goSection(",
    "providerHandoffAllowed = true",
    "pendingAction"
  ].forEach(term => {
    assert(!renderMarkup.includes(term), `AR7 card markup must not include unsafe control or behavior: ${term}`);
    assert(!renderCard.includes(term), `AR7 card renderer must not include unsafe control or behavior: ${term}`);
  });

  [
    "nexus-assistant-runtime-preview-card",
    "nexus-assistant-runtime-preview-meta",
    "nexus-assistant-runtime-preview-citations",
    "nexus-assistant-runtime-preview-followups"
  ].forEach(term => assert(styles.includes(term), `AR7 CSS must style ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-ar7-assistant-preview-card"],
    "node scripts/nexus-ar7-assistant-preview-card-qa.js",
    "AR7 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-ar7-assistant-preview-card-qa.js"), "AR7 QA must be wired into local-safe suites.");
}

function assertRuntimeResponseHasCardInputs() {
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
  const response = runtime.buildAssistantRuntimeResponse("Help me find agriculture training", { surface: "standard-user", previewOnly: true }, env);
  assert.equal(runtime.isSafeAssistantRuntimeResponse(response), true, "AR7 runtime card input must be safe.");
  assert.equal(response.noExecutionAuthorized, true, "AR7 runtime card input must not authorize execution.");
  assert.equal(response.providerHandoffAllowed, false, "AR7 runtime card input must not allow provider handoff.");
  assert(Array.isArray(response.sourceLabels), "AR7 runtime card input must include source labels.");
  assert(Array.isArray(response.citations), "AR7 runtime card input must include citations.");
  assert(response.retrievedAt, "AR7 runtime card input must include retrievedAt.");
  assert(response.confidence, "AR7 runtime card input must include confidence.");
  assert(response.freshnessStatus, "AR7 runtime card input must include freshness.");
  assert(Array.isArray(response.safeFollowUps) && response.safeFollowUps.length > 0, "AR7 runtime card input must include safe follow-up prompts.");
}

function runAr7AssistantPreviewCardQa() {
  assertCardStaticContract();
  assertRuntimeResponseHasCardInputs();
  console.log(JSON.stringify({
    previewCardDefaultAbsent: true,
    previewCardRequiresAr6Flags: true,
    readOnlyFieldsRendered: true,
    sourceDetailsRenderedAsText: true,
    unsafeControlsAbsent: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-ar7-assistant-preview-card-qa] passed");
}

if (require.main === module) {
  try {
    runAr7AssistantPreviewCardQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runAr7AssistantPreviewCardQa
});
