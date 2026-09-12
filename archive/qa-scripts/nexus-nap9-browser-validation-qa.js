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

function assertPostAuthConfigRefresh() {
  const app = read("public", "app.js");
  const guestSession = functionSlice(app, "startGuestUserSession");
  const loginHandlerIndex = app.indexOf('$("#loginForm").addEventListener("submit"');
  assert(loginHandlerIndex >= 0, "Login submit handler must exist.");
  const loginHandlerEnd = app.indexOf("const loginLanguageSelect", loginHandlerIndex);
  assert(loginHandlerEnd > loginHandlerIndex, "Login submit handler end marker must exist.");
  const loginHandler = app.slice(loginHandlerIndex, loginHandlerEnd);

  assert(
    guestSession.includes("await loadPublicMapConfig();")
      && guestSession.indexOf("await loadPublicMapConfig();") < guestSession.indexOf("render();"),
    "NAP9 guest Standard User path must refresh public config after auth and before render."
  );
  assert(
    loginHandler.includes("await loadPublicMapConfig();")
      && loginHandler.indexOf("await loadPublicMapConfig();") < loginHandler.indexOf("render();"),
    "NAP9 signed-in path must refresh public config after auth and before render."
  );
}

function assertPreviewCardSafetyContract() {
  const app = read("public", "app.js");
  const runner = functionSlice(app, "runStandardUserAssistantRuntimePreview");
  const renderer = functionSlice(app, "renderAssistantRuntimePreviewCardMarkup");
  const experienceRenderer = functionSlice(app, "renderStandardUserAgentExperienceMarkup");

  assert(runner.includes("if (!prompt || !isNexusAssistantRuntimePreviewEnabled()) return false;"), "NAP9 runtime preview must stay flag-gated.");
  assert(runner.includes("previewOnly: true"), "NAP9 runtime preview requests must remain preview-only.");
  assert(runner.includes("allowHandoff: false"), "NAP9 runtime preview must disable handoff in spoken response.");
  assert(renderer.includes('data-read-only="true"'), "NAP9 card must mark read-only state.");
  assert(renderer.includes('data-execution-authority="false"'), "NAP9 card must deny execution authority.");
  assert(renderer.includes('data-provider-handoff="false"'), "NAP9 card must deny provider handoff.");
  assert(experienceRenderer.includes("no call, message, provider contact, permission request, navigation, payment, booking, dispatch, or submission"), "NAP9 agent experience must state no unsafe action started.");
}

function assertRuntimePromptMatrix() {
  const env = Object.freeze({
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED: "true",
    NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED: "true",
    NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
    NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_ENABLED: "true",
    NEXUS_NEWS_SECURITY_PROVIDER_ENABLED: "true"
  });

  [
    "Nexus, find farm jobs near Stockton.",
    "Only show entry-level ones.",
    "Compare the top two.",
    "Turn that into a checklist.",
    "Draft questions I should ask.",
    "What is the weather in Stockton?",
    "Find agriculture training resources.",
    "What current agriculture news should farmers know?",
    "Find agriculture training videos."
  ].forEach(prompt => {
    const response = runtime.buildAssistantRuntimeResponse(prompt, { surface: "standard-user", inputMode: "typed", previewOnly: true }, env);
    assert.equal(runtime.isSafeAssistantRuntimeResponse(response), true, `${prompt} must produce a safe runtime response.`);
    assert.equal(response.noExecutionAuthorized, true, `${prompt} must not authorize execution.`);
    assert.equal(response.providerHandoffAllowed, false, `${prompt} must not authorize provider handoff.`);
  });

  [
    "Apply to the first job.",
    "Call the provider.",
    "Buy fertilizer.",
    "Send my location.",
    "Book an appointment.",
    "Dispatch help.",
    "This is an emergency."
  ].forEach(prompt => {
    const response = runtime.buildAssistantRuntimeResponse(prompt, { surface: "standard-user", inputMode: "typed", previewOnly: true }, env);
    assert.equal(runtime.isSafeAssistantRuntimeResponse(response), true, `${prompt} must return a safe blocked response.`);
    assert.equal(response.noExecutionAuthorized, true, `${prompt} must not authorize execution.`);
    assert.equal(response.providerHandoffAllowed, false, `${prompt} must not authorize provider handoff.`);
  });
}

function assertQaWiring() {
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  assert.equal(
    pkg.scripts["qa:nexus-nap9-browser-validation"],
    "node scripts/nexus-nap9-browser-validation-qa.js",
    "NAP9 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-nap9-browser-validation-qa.js"), "NAP9 QA must be wired into local-safe suites.");
}

function runNap9BrowserValidationQa() {
  assertPostAuthConfigRefresh();
  assertPreviewCardSafetyContract();
  assertRuntimePromptMatrix();
  assertQaWiring();
  console.log(JSON.stringify({
    postAuthConfigRefresh: true,
    runtimePreviewCardReadOnly: true,
    promptMatrixSafe: true,
    noExecutionAuthorized: true,
    noProviderHandoff: true
  }, null, 2));
  console.log("[nexus-nap9-browser-validation-qa] passed");
}

if (require.main === module) {
  try {
    runNap9BrowserValidationQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runNap9BrowserValidationQa
});
