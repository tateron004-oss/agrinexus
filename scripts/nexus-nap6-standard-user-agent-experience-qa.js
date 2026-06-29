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
  const start = source.indexOf(`function ${name}`);
  assert(start >= 0, `${name} must exist.`);
  const next = source.indexOf("\nfunction ", start + 1);
  return source.slice(start, next > start ? next : source.length);
}

function assertStaticContracts() {
  const server = read("server.js");
  const app = read("public", "app.js");
  const styles = read("public", "styles.css");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const moduleSource = read("server", "nexus-standard-user-agent-experience.js");
  const previewRunner = functionSlice(app, "runStandardUserAssistantRuntimePreview");
  const renderExperience = functionSlice(app, "renderStandardUserAgentExperienceMarkup");
  const normalizeCard = functionSlice(app, "normalizeAssistantRuntimePreviewCard");

  [
    "nexus-standard-user-agent-experience.js",
    "buildStandardUserAgentExperience",
    "standardUserAgentExperience",
    "/api/nexus/assistant-runtime-preview",
    "if (!flags.enabled)",
    "noExecutionAuthorized",
    "noProviderHandoff"
  ].forEach(term => assert(server.includes(term), `NAP6 server must include ${term}.`));

  assert(server.indexOf("if (!flags.enabled)") < server.indexOf("buildStandardUserAgentExperience"), "NAP6 server must reject disabled flags before building agent experience.");
  assert(previewRunner.includes("if (!prompt || !isNexusAssistantRuntimePreviewEnabled()) return false;"), "NAP6 browser runner must stay default-off before network.");
  assert(previewRunner.indexOf("isNexusAssistantRuntimePreviewEnabled()") < previewRunner.indexOf('"/api/nexus/assistant-runtime-preview"'), "NAP6 browser runner must check flags before endpoint request.");

  [
    "nexus.nap6.standardUserAgentExperience.v1",
    "standardUserAgentExperience",
    "renderStandardUserAgentExperienceMarkup",
    "data-nexus-nap6-agent-experience=\"true\"",
    "Preview only - no call, message, provider contact, permission request, navigation, payment, booking, dispatch, or submission has been started."
  ].forEach(term => assert(app.includes(term), `NAP6 app must include ${term}.`));

  [
    "<button",
    "<a ",
    "onclick",
    "data-command",
    "window.open",
    "location.href",
    "navigator.geolocation",
    "getCurrentPosition",
    "watchPosition",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "goSection(",
    "fetch(",
    "requestWithTimeout("
  ].forEach(term => assert(!renderExperience.includes(term), `NAP6 agent experience renderer must not include unsafe behavior: ${term}`));

  [
    "standardUserAgentExperience",
    "safeNextSteps",
    "followUpPrompts",
    "taskPlanPreview",
    "preparationPreview",
    "sourceReview",
    "noHiddenActionMetadata"
  ].forEach(term => assert(normalizeCard.includes(term), `NAP6 card normalization must include ${term}.`));

  [
    "nexus-assistant-runtime-agent-experience",
    "data-execution-authority=\"false\"",
    "data-provider-handoff=\"false\"",
    "data-permission-prompt=\"false\""
  ].forEach(term => assert(app.includes(term) || styles.includes(term), `NAP6 card/style must include ${term}.`));

  [
    "provider-backed answer",
    "follow-up refinement",
    "task plan",
    "checklist",
    "comparison",
    "draft preparation",
    "source review",
    "blocked unsafe action"
  ].forEach(term => assert(moduleSource.includes(term.replace("provider-backed answer", "selectedProvider")) || moduleSource.includes(term.split(" ")[0]), `NAP6 module should support ${term}.`));

  [
    "window.open",
    "location.href",
    "navigator.geolocation",
    "getCurrentPosition",
    "getUserMedia",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "writeFileSync",
    "executionAuthority: true",
    "providerHandoffAllowed: true"
  ].forEach(term => assert(!moduleSource.includes(term), `NAP6 module must not introduce unsafe behavior: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-nap6-standard-user-agent-experience"],
    "node scripts/nexus-nap6-standard-user-agent-experience-qa.js",
    "NAP6 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-nap6-standard-user-agent-experience-qa.js"), "NAP6 QA must be wired into local-safe suites.");
}

function assertExperienceModels() {
  const flagsOff = Object.freeze({ enabled: false });
  const flagsOn = Object.freeze({ enabled: true });
  const env = Object.freeze({
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED: "true",
    NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_ENABLED: "true",
    NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
    NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
    NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED: "true"
  });

  const prompts = [
    "Find farm jobs near Stockton.",
    "Compare these training options.",
    "Turn this into a checklist.",
    "Draft questions I should ask the provider.",
    "Review the sources for agriculture training.",
    "Call the provider."
  ];

  prompts.forEach(prompt => {
    const response = runtime.buildAssistantRuntimeResponse(prompt, { surface: "standard-user", previewOnly: true }, env);
    const disabled = standardUserAgentExperience.buildStandardUserAgentExperience(prompt, response, { flags: flagsOff });
    const enabled = standardUserAgentExperience.buildStandardUserAgentExperience(prompt, response, { flags: flagsOn });

    assert.equal(standardUserAgentExperience.isSafeStandardUserAgentExperience(disabled), true, `${prompt} disabled experience must be safe.`);
    assert.equal(disabled.enabled, false, `${prompt} disabled experience must stay off.`);
    assert.equal(disabled.displayMode, "disabled-default-off", `${prompt} disabled experience must not claim visible runtime.`);

    assert.equal(standardUserAgentExperience.isSafeStandardUserAgentExperience(enabled), true, `${prompt} enabled experience must be safe.`);
    assert.equal(enabled.enabled, true, `${prompt} enabled experience must be flag-gated.`);
    assert.equal(enabled.displayMode, "flag-gated-agent-preview", `${prompt} enabled experience must be preview-only.`);
    assert(Array.isArray(enabled.safeNextSteps) && enabled.safeNextSteps.length > 0, `${prompt} must include safe next steps.`);
    assert(Array.isArray(enabled.followUpPrompts) && enabled.followUpPrompts.length > 0, `${prompt} must include follow-up prompts.`);
    assert(enabled.taskPlanPreview.steps.length > 0, `${prompt} must include task plan steps.`);
    assert(enabled.preparationPreview.content.length > 0, `${prompt} must include preparation content.`);
    assert.equal(enabled.noExecutionAuthorized, true, `${prompt} must not authorize execution.`);
    assert.equal(enabled.noProviderHandoff, true, `${prompt} must not authorize provider handoff.`);
    assert.equal(enabled.noPermissionPromptAuthorized, true, `${prompt} must not authorize permissions.`);
    assert.equal(enabled.noHiddenActionMetadata, true, `${prompt} must hide action metadata.`);
  });

  const blockedResponse = runtime.buildAssistantRuntimeResponse("Buy fertilizer.", { surface: "standard-user", previewOnly: true }, env);
  const blockedExperience = standardUserAgentExperience.buildStandardUserAgentExperience("Buy fertilizer.", blockedResponse, { flags: flagsOn });
  assert.equal(blockedExperience.allowed, false, "NAP6 high-risk prompt must remain blocked.");
  assert.match(blockedExperience.blockedUnsafeActionExplanation, /cannot execute/i, "NAP6 high-risk prompt must explain blocked execution.");
}

function runNap6StandardUserAgentExperienceQa() {
  assertStaticContracts();
  assertExperienceModels();
  console.log(JSON.stringify({
    defaultFlagsOff: true,
    flagGatedAgentPreview: true,
    providerBackedAnswerSupported: true,
    followUpRefinementSupported: true,
    taskPlanSupported: true,
    checklistComparisonDraftSupported: true,
    sourceReviewSupported: true,
    blockedUnsafeActionExplanationSupported: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-nap6-standard-user-agent-experience-qa] passed");
}

if (require.main === module) {
  try {
    runNap6StandardUserAgentExperienceQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runNap6StandardUserAgentExperienceQa
});
