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

const flagsOff = Object.freeze({ enabled: false });
const flagsOn = Object.freeze({ enabled: true });
const envOn = Object.freeze({
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED: "true",
  NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED: "true",
  NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
  NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
  NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED: "true",
  NEXUS_WEATHER_PROVIDER_ENABLED: "true"
});

function buildExperience(prompt, flags = flagsOn) {
  const response = runtime.buildAssistantRuntimeResponse(prompt, { surface: "standard-user", previewOnly: true }, envOn);
  return standardUserAgentExperience.buildStandardUserAgentExperience(prompt, response, { flags });
}

function assertWorkflowCard(card, label) {
  assert(card, `${label} must include workflow card.`);
  assert.equal(card.schemaVersion, "nexus.aut6.standardUserWorkflowCard.v1", `${label} schema mismatch.`);
  assert.equal(card.status, "preview-only", `${label} must be preview-only.`);
  assert.equal(card.noExecutionAuthorized, true, `${label} must not authorize execution.`);
  assert.equal(card.noProviderHandoff, true, `${label} must not authorize provider handoff.`);
  assert.equal(card.noProviderContactAuthorized, true, `${label} must not authorize provider contact.`);
  assert.equal(card.noPermissionPromptAuthorized, true, `${label} must not authorize permissions.`);
  assert.equal(card.noLocationPermissionRequested, true, `${label} must not request location.`);
  assert.equal(card.noBackendActionWritePerformed, true, `${label} must not write backend actions.`);
  assert.equal(card.noNavigationAuthorized, true, `${label} must not authorize navigation.`);
  assert.equal(card.dataAttributes["data-read-only"], "true", `${label} must carry read-only marker.`);
  assert.equal(card.dataAttributes["data-execution-authority"], "false", `${label} must carry no-execution marker.`);
  assert.equal(card.dataAttributes["data-provider-handoff"], "false", `${label} must carry no-provider marker.`);
  assert(Array.isArray(card.steps) && card.steps.length > 0, `${label} must include steps.`);
  assert(Array.isArray(card.safeArtifacts) && card.safeArtifacts.length > 0, `${label} must include safe artifacts.`);
  assert(Array.isArray(card.safeNextSteps) && card.safeNextSteps.length > 0, `${label} must include safe next steps.`);
  assert(Array.isArray(card.safeControls) && card.safeControls.includes("continue"), `${label} must include continue control.`);
  assert(Array.isArray(card.blockedControls) && card.blockedControls.includes("call"), `${label} must block call control.`);
  assert(!/callNow|sendMessage|"checkoutAllowed":true|"paymentAllowed":true|"providerHandoff":true|"providerHandoffAllowed":true|"executionAuthority":true|navigator\.geolocation|window\.open/i.test(JSON.stringify(card)), `${label} must not include executable metadata.`);
}

function assertRuntimeModels() {
  const disabled = buildExperience("Help me get a farm job near Stockton.", flagsOff);
  assert.equal(disabled.standardUserWorkflowCard, null, "Flag-off experience must not include workflow card.");
  assert.equal(standardUserAgentExperience.isSafeStandardUserAgentExperience(disabled), true, "Disabled experience remains safe.");

  [
    ["Help me get a farm job near Stockton.", "job_search_workflow"],
    ["Help me prepare for agriculture training.", "agriculture_training_workflow"],
    ["Help me solve this crop issue.", "crop_issue_guidance_workflow"],
    ["Browse AgriTrade options.", "marketplace_browse_workflow"]
  ].forEach(([prompt, workflowType]) => {
    const experience = buildExperience(prompt, flagsOn);
    assert.equal(standardUserAgentExperience.isSafeStandardUserAgentExperience(experience), true, `${prompt} experience must remain safe.`);
    assertWorkflowCard(experience.standardUserWorkflowCard, prompt);
    assert.equal(experience.standardUserWorkflowCard.workflowType, workflowType, `${prompt} workflow type mismatch.`);
  });

  const blocked = buildExperience("Call this provider.", flagsOn);
  assert.equal(blocked.standardUserWorkflowCard, null, "High-risk provider contact prompt must not receive workflow card.");
}

function assertStaticRuntimeContract() {
  const app = read("public", "app.js");
  const styles = read("public", "styles.css");
  const serverModule = read("server", "nexus-standard-user-agent-experience.js");
  const server = read("server.js");
  const index = read("public", "index.html");
  const pkg = JSON.parse(read("package.json"));
  const suite = read("scripts", "qa-suite.js");

  const previewGate = functionSlice(app, "isNexusAssistantRuntimePreviewEnabled");
  const previewRunner = functionSlice(app, "runStandardUserAssistantRuntimePreview");
  const workflowRenderer = functionSlice(app, "renderStandardUserWorkflowCardMarkup");
  const agentRenderer = functionSlice(app, "renderStandardUserAgentExperienceMarkup");

  assert(previewGate.includes("executionAuthority === false"), "AUT6 must preserve existing executionAuthority false preview gate.");
  assert(previewRunner.includes("if (!prompt || !isNexusAssistantRuntimePreviewEnabled()) return false;"), "AUT6 must not run when flags are off.");
  assert(previewRunner.indexOf("isNexusAssistantRuntimePreviewEnabled()") < previewRunner.indexOf('"/api/nexus/assistant-runtime-preview"'), "AUT6 must check flags before network.");
  assert(server.indexOf("if (!flags.enabled)") < server.indexOf("buildStandardUserAgentExperience"), "Server must reject disabled flags before AUT6 card can be built.");

  [
    "nexus.aut6.standardUserWorkflowCard.v1",
    "buildStandardUserWorkflowCard",
    "createAutonomyWorkflowArtifacts",
    "noExecutionAuthorized",
    "noProviderHandoff",
    "noBackendActionWritePerformed"
  ].forEach(term => assert(serverModule.includes(term), `AUT6 server module must include ${term}.`));

  [
    'data-nexus-aut-workflow-card="true"',
    'data-read-only="true"',
    'data-execution-authority="false"',
    'data-provider-handoff="false"',
    'data-nexus-aut-workflow-control',
    "Controls are review-only in this phase."
  ].forEach(term => assert(workflowRenderer.includes(term), `AUT6 workflow renderer must include ${term}.`));

  [
    "call",
    "message",
    "apply",
    "buy",
    "pay",
    "book",
    "dispatch",
    "send location",
    "submit"
  ].forEach(term => assert(serverModule.includes(term), `AUT6 must enumerate blocked control: ${term}`));

  [
    "window.open",
    "location.href",
    "navigator.geolocation",
    "getCurrentPosition",
    "watchPosition",
    "getUserMedia",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "requestWithTimeout(",
    "fetch("
  ].forEach(term => assert(!workflowRenderer.includes(term), `AUT6 workflow renderer must not include unsafe behavior: ${term}`));

  assert(!index.includes("data-nexus-aut-workflow-card"), "AUT6 workflow card must not be static default HTML.");
  assert(agentRenderer.includes("renderStandardUserWorkflowCardMarkup"), "AUT6 agent renderer must include workflow card only as safe sub-markup.");
  assert(styles.includes(".nexus-aut-workflow-card"), "AUT6 CSS must style workflow card.");
  assert(styles.includes(".nexus-aut-workflow-controls button[disabled]"), "AUT6 controls must be visibly disabled.");

  assert.equal(
    pkg.scripts["qa:nexus-aut6-standard-user-workflow-card"],
    "node scripts/nexus-aut6-standard-user-workflow-card-qa.js",
    "AUT6 package alias must exist."
  );
  assert(suite.includes("scripts/nexus-aut6-standard-user-workflow-card-qa.js"), "AUT6 QA must be wired into local-safe suites.");
}

function runAut6StandardUserWorkflowCardQa() {
  assertRuntimeModels();
  assertStaticRuntimeContract();
  console.log(JSON.stringify({
    flagOffCardAbsent: true,
    flagOnWorkflowCardAppears: true,
    progressStepsRenderContract: true,
    safeControlsDisabled: true,
    unsafeControlsAbsent: true,
    readOnlyAttributesPreserved: true,
    noBackendActionWrite: true,
    noProviderContact: true,
    noPermissionPrompt: true,
    noAutoNavigation: true
  }, null, 2));
  console.log("[nexus-aut6-standard-user-workflow-card-qa] passed");
}

if (require.main === module) {
  try {
    runAut6StandardUserWorkflowCardQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runAut6StandardUserWorkflowCardQa
});
