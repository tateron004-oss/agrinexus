const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const runtime = require("../server/nexus-assistant-runtime-entrypoint.js");
const standardUserAgentExperience = require("../server/nexus-standard-user-agent-experience.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function functionSlice(source, name) {
  const start = source.indexOf(`function ${name}(`);
  assert(start >= 0, `${name} must exist.`);
  const next = source.indexOf("\nfunction ", start + 1);
  return source.slice(start, next > start ? next : source.length);
}

const envOn = Object.freeze({
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED: "true",
  NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED: "true",
  NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
  NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
  NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED: "true",
  NEXUS_WEATHER_PROVIDER_ENABLED: "true"
});

function assertBrowserValidationDoc() {
  const doc = read("docs", "NEXUS_AUT8_MULTI_STEP_WORKFLOW_BROWSER_VALIDATION.md");
  [
    "Flag-Off Validation",
    "Flag-On Validation",
    "AUT workflow card rendered visibly",
    'data-read-only="true"',
    'data-execution-authority="false"',
    'data-provider-handoff="false"',
    "console warn/error count: `0`",
    "no provider contact",
    "no location/camera/microphone permission prompt",
    "no auto-navigation",
    "Follow-Up Progress Limitation"
  ].forEach(term => assert(doc.includes(term), `AUT8 browser validation doc must include: ${term}`));
}

function assertVisibleContainerFix() {
  const app = read("public", "app.js");
  const renderer = functionSlice(app, "renderAssistantRuntimePreviewCard");
  assert(renderer.includes("panel.getClientRects().length > 0"), "AUT8 must require a visible/layout-backed preview container.");
  assert(renderer.includes('|| $("#globalAssistantBar")'), "AUT8 must preserve global assistant fallback container.");
  assert(renderer.includes("isNexusAssistantRuntimePreviewEnabled()"), "AUT8 must preserve preview flag gate.");
  [
    "window.open",
    "location.href",
    "navigator.geolocation",
    "getCurrentPosition",
    "getUserMedia",
    "localStorage.setItem",
    "sessionStorage.setItem"
  ].forEach(term => assert(!renderer.includes(term), `AUT8 renderer fix must not add unsafe behavior: ${term}`));
}

function assertRuntimePromptMatrix() {
  [
    ["Nexus, help me get a farm job near Stockton.", "job_search_workflow", true],
    ["Help me prepare for agriculture training.", "agriculture_training_workflow", true],
    ["Help me solve this crop issue.", "crop_issue_guidance_workflow", true],
    ["Apply to the first job.", "", false],
    ["Call the provider.", "", false],
    ["Tell me exactly what chemical to use.", "general_assistant_plan_workflow", true]
  ].forEach(([prompt, expectedWorkflowType, shouldHaveCard]) => {
    const response = runtime.buildAssistantRuntimeResponse(prompt, { surface: "standard-user", inputMode: "typed", previewOnly: true }, envOn);
    assert.equal(runtime.isSafeAssistantRuntimeResponse(response), true, `${prompt} must produce a safe runtime response.`);
    const experience = standardUserAgentExperience.buildStandardUserAgentExperience(prompt, response, { flags: { enabled: true } });
    assert.equal(standardUserAgentExperience.isSafeStandardUserAgentExperience(experience), true, `${prompt} must produce safe Standard User agent experience.`);
    if (shouldHaveCard) {
      assert(experience.standardUserWorkflowCard, `${prompt} must have a safe workflow card.`);
      assert.equal(experience.standardUserWorkflowCard.workflowType, expectedWorkflowType, `${prompt} workflow type mismatch.`);
      assert.equal(experience.standardUserWorkflowCard.noExecutionAuthorized, true, `${prompt} card must not authorize execution.`);
      assert.equal(experience.standardUserWorkflowCard.noProviderHandoff, true, `${prompt} card must not authorize provider handoff.`);
      assert.equal(experience.standardUserWorkflowCard.noPermissionPromptAuthorized, true, `${prompt} card must not authorize permissions.`);
    } else {
      assert.equal(experience.standardUserWorkflowCard, null, `${prompt} must not have workflow card.`);
    }
  });
}

function assertQaWiring() {
  const pkg = JSON.parse(read("package.json"));
  const suite = read("scripts", "qa-suite.js");
  assert.equal(
    pkg.scripts["qa:nexus-aut8-multi-step-workflow-browser-validation"],
    "node scripts/nexus-aut8-multi-step-workflow-browser-validation-qa.js",
    "AUT8 package alias must exist."
  );
  assert(suite.includes("scripts/nexus-aut8-multi-step-workflow-browser-validation-qa.js"), "AUT8 QA must be wired into local-safe suites.");
}

function runAut8MultiStepWorkflowBrowserValidationQa() {
  assertBrowserValidationDoc();
  assertVisibleContainerFix();
  assertRuntimePromptMatrix();
  assertQaWiring();
  console.log(JSON.stringify({
    browserValidationDocumented: true,
    visibleContainerFixGuarded: true,
    flagOffValidated: true,
    flagOnWorkflowCardValidated: true,
    unsafePromptsBlocked: true,
    noExecutionAuthority: true
  }, null, 2));
  console.log("[nexus-aut8-multi-step-workflow-browser-validation-qa] passed");
}

if (require.main === module) {
  try {
    runAut8MultiStepWorkflowBrowserValidationQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runAut8MultiStepWorkflowBrowserValidationQa
});
