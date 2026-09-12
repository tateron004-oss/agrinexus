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
  const serverModule = read("server", "nexus-standard-user-agent-experience.js");
  const app = read("public", "app.js");
  const styles = read("public", "styles.css");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const normalizeCard = functionSlice(app, "normalizeAssistantRuntimePreviewCard");
  const renderExperience = functionSlice(app, "renderStandardUserAgentExperienceMarkup");

  [
    "buildArtifactPreviews",
    "artifactPreviews",
    "Application prep checklist",
    "Job option comparison",
    "Farm issue observation checklist",
    "Draft text for manual review",
    "executionAuthority: false",
    "providerHandoffAllowed: false",
    "sendAllowed: false",
    "submitAllowed: false",
    "bookingAllowed: false",
    "paymentAllowed: false"
  ].forEach(term => assert(serverModule.includes(term), `FAP4 server artifact contract must include ${term}.`));

  [
    "artifactPreviews",
    "data-nexus-safe-artifact-preview=\"true\"",
    "data-artifact-type=\"comparison\"",
    "Safe artifact previews",
    "<table>",
    "executionAuthority !== true",
    "providerHandoffAllowed !== true",
    "sendAllowed !== true",
    "submitAllowed !== true",
    "bookingAllowed !== true",
    "paymentAllowed !== true"
  ].forEach(term => assert(normalizeCard.includes(term) || renderExperience.includes(term), `FAP4 app renderer must include ${term}.`));

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
    "requestWithTimeout(",
    "pendingAction"
  ].forEach(term => assert(!renderExperience.includes(term), `FAP4 artifact renderer must not include unsafe behavior: ${term}`));

  [
    "nexus-assistant-runtime-artifacts",
    "border-collapse",
    "overflow-wrap"
  ].forEach(term => assert(styles.includes(term), `FAP4 styles must support safe artifacts with ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-fap4-safe-artifact-outputs"],
    "node scripts/nexus-fap4-safe-artifact-outputs-qa.js",
    "FAP4 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-fap4-safe-artifact-outputs-qa.js"), "FAP4 QA must be wired into local-safe suites.");
}

function assertSafeArtifact(artifact, prompt) {
  assert(artifact && typeof artifact === "object", `${prompt} artifact must be an object.`);
  assert(["checklist", "comparison", "draft-text"].includes(artifact.type), `${prompt} artifact type must be safe.`);
  assert.equal(artifact.executionAuthority, false, `${prompt} artifact must not authorize execution.`);
  assert.equal(artifact.providerHandoffAllowed, false, `${prompt} artifact must not allow provider handoff.`);
  assert.equal(artifact.sendAllowed, false, `${prompt} artifact must not allow sending.`);
  assert.equal(artifact.submitAllowed, false, `${prompt} artifact must not allow submission.`);
  assert.equal(artifact.bookingAllowed, false, `${prompt} artifact must not allow booking.`);
  assert.equal(artifact.paymentAllowed, false, `${prompt} artifact must not allow payment.`);

  const serialized = JSON.stringify(artifact).toLowerCase();
  [
    "send now",
    "call now",
    "submit now",
    "book now",
    "pay now",
    "dispatch now",
    "share location",
    "open provider",
    "contact provider"
  ].forEach(term => assert(!serialized.includes(term), `${prompt} artifact must not include unsafe claim: ${term}`));
}

function assertArtifactModels() {
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

  [
    "Help me find agriculture training",
    "Teach me how irrigation works",
    "Show me farm jobs",
    "Make a checklist for crop issues",
    "Compare training options",
    "Draft questions I should ask"
  ].forEach(prompt => {
    const response = runtime.buildAssistantRuntimeResponse(prompt, { surface: "standard-user", previewOnly: true }, env);
    const experience = standardUserAgentExperience.buildStandardUserAgentExperience(prompt, response, { flags: flagsOn });
    assert.equal(standardUserAgentExperience.isSafeStandardUserAgentExperience(experience), true, `${prompt} experience must be safe.`);
    assert(Array.isArray(experience.artifactPreviews), `${prompt} must include artifact previews.`);
    assert(experience.artifactPreviews.length > 0, `${prompt} must include at least one artifact preview.`);
    experience.artifactPreviews.forEach(artifact => assertSafeArtifact(artifact, prompt));
  });

  const jobResponse = runtime.buildAssistantRuntimeResponse("Show me farm jobs", { surface: "standard-user", previewOnly: true }, env);
  const jobExperience = standardUserAgentExperience.buildStandardUserAgentExperience("Show me farm jobs", jobResponse, { flags: flagsOn });
  assert(jobExperience.artifactPreviews.some(artifact => artifact.title === "Application prep checklist"), "FAP4 job prompt must include an application prep checklist.");
  assert(jobExperience.artifactPreviews.some(artifact => artifact.type === "comparison"), "FAP4 job prompt must include a comparison artifact.");

  const cropResponse = runtime.buildAssistantRuntimeResponse("I need help with crop issues", { surface: "standard-user", previewOnly: true }, env);
  const cropExperience = standardUserAgentExperience.buildStandardUserAgentExperience("I need help with crop issues", cropResponse, { flags: flagsOn });
  assert(cropExperience.artifactPreviews.some(artifact => artifact.title === "Farm issue observation checklist"), "FAP4 crop prompt must include farm observation checklist.");

  const blockedResponse = runtime.buildAssistantRuntimeResponse("Call the provider now.", { surface: "standard-user", previewOnly: true }, env);
  const blockedExperience = standardUserAgentExperience.buildStandardUserAgentExperience("Call the provider now.", blockedResponse, { flags: flagsOn });
  assert.equal(blockedExperience.noExecutionAuthorized, true, "FAP4 blocked prompt must not authorize execution.");
  assert.equal(blockedExperience.noProviderHandoff, true, "FAP4 blocked prompt must not allow provider handoff.");
  blockedExperience.artifactPreviews.forEach(artifact => assertSafeArtifact(artifact, "blocked prompt"));
}

function runFap4SafeArtifactOutputsQa() {
  assertStaticContracts();
  assertArtifactModels();
  console.log(JSON.stringify({
    safeArtifactTypes: ["checklist", "comparison", "draft-text"],
    jobApplicationPrepChecklist: true,
    farmIssueObservationChecklist: true,
    comparisonTablePreview: true,
    draftTextOnly: true,
    executionAuthority: false,
    providerHandoffAllowed: false
  }, null, 2));
  console.log("[nexus-fap4-safe-artifact-outputs-qa] passed");
}

if (require.main === module) {
  try {
    runFap4SafeArtifactOutputsQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runFap4SafeArtifactOutputsQa
});
