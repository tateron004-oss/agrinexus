const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}`);
  assert(start >= 0, `${name} should exist`);
  const signatureEnd = source.indexOf(")", start);
  const bodyStart = source.indexOf("{", signatureEnd);
  assert(signatureEnd > start && bodyStart > signatureEnd, `${name} body should start after its signature`);
  let depth = 0;
  for (let index = bodyStart; index < source.length; index += 1) {
    const char = source[index];
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error(`${name} body should be extractable`);
}

const app = read("public", "app.js");
const server = read("server.js");
const index = read("public", "index.html");
const memory = read("public", "nexus-session-memory.js");
const doc = read("docs", "NEXUS_JARVIS_STYLE_STANDARD_USER_EXPERIENCE.md");

const safetyHelper = extractFunction(app, "nexusJarvisStyleStandardUserSafetyResponse");
const safetyHandler = extractFunction(app, "handleJarvisStyleStandardUserSafetyResponse");
const previewBuilder = extractFunction(app, "buildControlledActionPreviewReadinessFromMetadata");
const commandCore = extractFunction(app, "handleVoiceCommandCore");
const globalCommand = extractFunction(app, "runGlobalCommand");

const safetyHandlerIndex = commandCore.indexOf("handleJarvisStyleStandardUserSafetyResponse");
const explicitPreflightIndex = commandCore.indexOf("runExplicitTypedGlobalControlPreflight");
const unifiedBrainIndex = commandCore.indexOf("unifiedNexusConversationBrain");
const fastLaneIndex = commandCore.indexOf("nexusFastLaneIntent");
const simpleUserIndex = commandCore.indexOf("simpleUserDirectVoiceIntent");
assert(safetyHandlerIndex >= 0, "Jarvis-style safety response should be wired into handleVoiceCommandCore");
assert(explicitPreflightIndex >= 0 && safetyHandlerIndex > explicitPreflightIndex, "Jarvis-style safety response should preserve explicit typed/global preflight first");
assert(unifiedBrainIndex >= 0 && safetyHandlerIndex < unifiedBrainIndex, "Jarvis-style safety response should run before the unified conversation brain");
assert(fastLaneIndex >= 0 && safetyHandlerIndex < fastLaneIndex, "Jarvis-style safety response should run before fast-lane generic routing");
assert(simpleUserIndex >= 0 && safetyHandlerIndex < simpleUserIndex, "Jarvis-style safety response should run before generic simple-user routing");

for (const phrase of [
  "help me find agriculture training",
  "teach me how irrigation works",
  "show me farm jobs",
  "browse agritrade",
  "i need help with crop issues",
  "call someone",
  "send a message",
  "use my camera",
  "find my location",
  "buy this item",
  "i have an emergency"
]) {
  assert(safetyHelper.includes(phrase), `safety helper should cover demo prompt: ${phrase}`);
}

for (const phrase of [
  "I am showing this as a controlled preview; no course has been opened or enrollment changed.",
  "This is lesson guidance only; no lesson record or workflow has been started.",
  "This preview does not apply, message an employer, submit a profile, or change your records.",
  "I will not buy, sell, contact a buyer, create an order, or process payment.",
  "This stays informational; I am not scanning a field, creating a record, or diagnosing from a camera.",
  "No real-world action has been taken.",
  "I will not call anyone from the first request.",
  "I will not send anything automatically.",
  "I will not activate the camera from this prompt",
  "I will not read or share your location automatically.",
  "I will not buy, sell, check out, create an account, or process payment.",
  "Nexus cannot dispatch emergency help"
]) {
  assert(safetyHelper.includes(phrase), `safety helper should include safe boundary copy: ${phrase}`);
}

for (const forbidden of [
  "fetch(",
  "request(",
  "mutate(",
  "goSection(",
  "openWorkflow",
  "window.open",
  "location.href",
  ".click(",
  "getUserMedia",
  "geolocation",
  "maybeDispatchConfirmedNativeCallHandoff",
  "agentPendingAction",
  "localStorage",
  "sessionStorage",
  "navigator.permissions",
  "ACTION_DIAL",
  "ACTION_CALL"
]) {
  assert(!safetyHelper.includes(forbidden), `safety helper must not call or reference ${forbidden}`);
  assert(!safetyHandler.includes(forbidden), `safety handler must not call or reference ${forbidden}`);
}

assert.match(safetyHandler, /renderLiveVoiceSuggestions/, "safety handler may offer non-executing text suggestions");
assert.match(safetyHandler, /setVoiceResponse/, "safety handler should render a visible response");
assert.match(safetyHandler, /allowHandoff:\s*false/, "safety handler must not allow native/provider handoff");
assert.match(safetyHandler, /paintLocalLevelOneSuggestionForSimpleUserIntent/, "low-risk Jarvis-style prompts should render existing preview metadata");
assert.match(safetyHandler, /lowRiskPreview\s*===\s*true/, "low-risk preview handling should be explicit");
assert(globalCommand.indexOf("handleJarvisStyleStandardUserSafetyResponse") >= 0, "global typed commands should use Jarvis-style preview/safety handling before legacy routing");
assert(globalCommand.indexOf("handleJarvisStyleStandardUserSafetyResponse") < globalCommand.indexOf("handleVoiceCommand"), "global typed Jarvis-style handling should run before handleVoiceCommand");
assert(/if \(handleJarvisStyleStandardUserSafetyResponse\(command\)\) return;\s+(?:if \(handleNexusSimulationCaptionCommand\(command\)\) return;\s+)?(?:if \(handleNexusMapNavigationHandoffCaptionCommand\(command\)\) return;\s+)?(?:if \(handleNexusInternalNavigationCaptionCommand\(command\)\) return;\s+)?(?:if \(handleNexusMarketplaceInquiryPreparationCaptionCommand\(command\)\) return;\s+)?(?:if \(handleNexusCareTeamReportCopyViewCaptionCommand\(command\)\) return;\s+)?(?:if \(handleNexusChronicCarePhysicianReportCaptionCommand\(command\)\) return;\s+)?(?:if \(handleNexusLocalDraftMessageCaptionCommand\(command\)\) return;\s+)?(?:if \(handleNexusCallPreparationCaptionCommand\(command\)\) return;\s+)?void handleVoiceCommand\(command\);/.test(app), "caption Send should use Jarvis-style handling before handleVoiceCommand");
assert(/if \(handleJarvisStyleStandardUserSafetyResponse\(command\)\) return;\s+(?:if \(handleNexusSimulationCaptionCommand\(command\)\) return;\s+)?(?:if \(handleNexusMapNavigationHandoffCaptionCommand\(command\)\) return;\s+)?(?:if \(handleNexusInternalNavigationCaptionCommand\(command\)\) return;\s+)?(?:if \(handleNexusMarketplaceInquiryPreparationCaptionCommand\(command\)\) return;\s+)?(?:if \(handleNexusCareTeamReportCopyViewCaptionCommand\(command\)\) return;\s+)?(?:if \(handleNexusChronicCarePhysicianReportCaptionCommand\(command\)\) return;\s+)?(?:if \(handleNexusLocalDraftMessageCaptionCommand\(command\)\) return;\s+)?(?:if \(handleNexusCallPreparationCaptionCommand\(command\)\) return;\s+)?void handleVoiceCommand\(command\);/.test(app), "caption Enter should use Jarvis-style handling before handleVoiceCommand");
assert.match(safetyHandler, /clearLevelOneAgentActionSuggestionLabel/, "safety handler should clear stale low-risk labels");

for (const phrase of [
  "I found the best next step",
  "safely help compare job pathways",
  "planning support only",
  "This preview keeps the lesson and records unchanged",
  "does not start commerce, contact, or money movement",
  "no field scan or crop record"
]) {
  assert(previewBuilder.includes(phrase), `low-risk preview copy should include: ${phrase}`);
}

assert.match(app, /Preview only - no action has been taken\./, "preview card must still state no action has been taken");
assert.match(app, /executionBoundary:\s*"previewOnlyReadiness"/, "preview readiness must remain preview-only");
assert.match(app, /executionBoundary:\s*"confirmationReadinessOnly"/, "confirmation readiness must remain readiness-only");
assert.match(app, /allowedAfterConfirmationOnly:\s*true/, "controlled navigation must remain behind explicit review");
assert.match(server, /allowedConfirmations:\s*\["yes", "confirm", "do it"\]/, "high-risk allowed confirmations must remain limited");
assert.match(server, /function isVagueConfirmationCommand[\s\S]*ok\|okay/, "vague confirmation guard must remain present");
assert.match(app, /confirmed-call-handoff/, "confirmed call handoff source must remain present");
assert(!index.includes("nexus-session-memory.js"), "Standard User page must not load session memory");
assert(!/localStorage|sessionStorage|indexedDB|fetch\(|XMLHttpRequest|window\.open|getUserMedia|geolocation|openWorkflow|agentPendingAction/.test(memory), "session memory module must remain non-persistent and non-executing");

for (const forbidden of [
  "Do it all",
  "Continue automatically",
  "Submit everything",
  "Yes, always"
]) {
  assert(!`${app}\n${server}`.includes(forbidden), `unsafe confirmation phrase must not appear: ${forbidden}`);
}

for (const phrase of [
  "Phase 11J",
  "Nexus feels more confident",
  "no real-world action has been taken",
  "Controlled, Not Fully Autonomous",
  "Presentation Script For Ron"
]) {
  assert(doc.includes(phrase), `Phase 11J doc should include: ${phrase}`);
}

console.log("Nexus Jarvis-style Standard User experience QA passed");
console.log("- low-risk previews use clearer planning copy");
console.log("- high-risk demo prompts receive no-action-taken safety responses");
console.log("- safety helper remains text-only and non-executing");
console.log("- session memory, provider, confirmation, and native boundaries remain guarded");
