const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const runtime = require("../server/nexus-assistant-runtime-entrypoint.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function functionSlice(source, name) {
  let start = source.indexOf(`async function ${name}(`);
  if (start < 0) start = source.indexOf(`function ${name}(`);
  assert(start >= 0, `${name} must exist.`);
  const next = source.indexOf("\nfunction ", start + 1);
  const nextAsync = source.indexOf("\nasync function ", start + 1);
  const candidates = [next, nextAsync].filter(index => index > start);
  const end = candidates.length ? Math.min(...candidates) : source.length;
  return source.slice(start, end);
}

function assertCardContentContract() {
  const app = read("public", "app.js");
  const normalizer = functionSlice(app, "normalizeAssistantRuntimePreviewCard");
  const renderer = functionSlice(app, "renderAssistantRuntimePreviewCardMarkup");
  const previewRunner = functionSlice(app, "runStandardUserAssistantRuntimePreview");
  const index = read("public", "index.html");

  [
    "intent",
    "selectedProvider",
    "providerStatus",
    "trustTier",
    "sourceResultCount",
    "retrievedAt",
    "confidence",
    "freshnessStatus",
    "safeFollowUps",
    "safetyNote"
  ].forEach(term => assert(normalizer.includes(term), `NLU1 normalizer must include ${term}.`));

  [
    "<dt>Intent</dt>",
    "<dt>Provider</dt>",
    "<dt>Status</dt>",
    "<dt>Retrieved</dt>",
    "<dt>Confidence</dt>",
    "<dt>Freshness</dt>",
    "<dt>Trust</dt>",
    "<dt>Sources</dt>",
    "Preview source labels",
    "Preview citation details",
    "Safe follow-up prompts"
  ].forEach(term => assert(renderer.includes(term), `NLU1 renderer must show ${term}.`));

  assert(renderer.includes('data-read-only="true"'), "NLU1 card must stay read-only.");
  assert(renderer.includes('data-execution-authority="false"'), "NLU1 card must deny execution authority.");
  assert(renderer.includes('data-provider-handoff="false"'), "NLU1 card must deny provider handoff.");
  assert(previewRunner.includes("if (!prompt || !isNexusAssistantRuntimePreviewEnabled()) return false;"), "NLU1 preview must stay flag-gated.");
  assert(!index.includes("data-nexus-assistant-runtime-preview-card"), "NLU1 preview card must not be static default-off HTML.");

  [
    "Call now",
    "Send message",
    "Book now",
    "Buy now",
    "Pay now",
    "Dispatch now",
    "Submit application",
    "Share location"
  ].forEach(term => assert(!renderer.includes(term), `NLU1 card must not expose unsafe control: ${term}`));
}

function assertRuntimeSourceFields() {
  const env = Object.freeze({
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED: "true",
    NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED: "true",
    NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
    NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_ENABLED: "true"
  });
  const response = runtime.buildAssistantRuntimeResponse("Find farm jobs near Stockton, CA.", { surface: "standard-user", inputMode: "typed", previewOnly: true }, env);
  assert.equal(runtime.isSafeAssistantRuntimeResponse(response), true, "NLU1 low-risk runtime response must be safe.");
  assert(typeof response.intent === "string" && response.intent.length > 0, "NLU1 runtime response must include intent.");
  assert(typeof response.selectedProvider === "string" || response.selectedProvider === null, "NLU1 runtime response must include selected provider field.");
  assert(typeof response.providerStatus === "string" && response.providerStatus.length > 0, "NLU1 runtime response must include provider status.");
  assert(typeof response.retrievedAt === "string" && response.retrievedAt.length > 0, "NLU1 runtime response must include retrievedAt.");
  assert(typeof response.confidence === "string" && response.confidence.length > 0, "NLU1 runtime response must include confidence.");
  assert(Array.isArray(response.citations), "NLU1 runtime response must include citations array.");
  assert(Array.isArray(response.safeFollowUps), "NLU1 runtime response must include safe follow-ups.");
  assert.equal(response.noExecutionAuthorized, true, "NLU1 runtime response must not authorize execution.");
  assert.equal(response.providerHandoffAllowed, false, "NLU1 runtime response must not authorize provider handoff.");
}

function assertQaWiring() {
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  assert.equal(
    pkg.scripts["qa:nexus-nlu1-standard-user-assistant-card-content"],
    "node scripts/nexus-nlu1-standard-user-assistant-card-content-qa.js",
    "NLU1 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-nlu1-standard-user-assistant-card-content-qa.js"), "NLU1 QA must be wired into local-safe suites.");
}

function runNlu1StandardUserAssistantCardContentQa() {
  assertCardContentContract();
  assertRuntimeSourceFields();
  assertQaWiring();
  console.log(JSON.stringify({
    cardFieldsVisible: true,
    flagOffStaticCardAbsent: true,
    readOnlyAttributesPreserved: true,
    unsafeControlsAbsent: true,
    runtimeSourceFieldsPresent: true
  }, null, 2));
  console.log("[nexus-nlu1-standard-user-assistant-card-content-qa] passed");
}

if (require.main === module) {
  try {
    runNlu1StandardUserAssistantCardContentQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runNlu1StandardUserAssistantCardContentQa
});
