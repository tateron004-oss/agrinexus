const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assert(condition, label) {
  if (!condition) {
    console.error(`FAIL ${label}`);
    process.exit(1);
  }
  console.log(`PASS ${label}`);
}

function sectionBetween(source, startNeedle, endNeedle) {
  const start = source.indexOf(startNeedle);
  assert(start >= 0, `${startNeedle} exists`);
  const end = source.indexOf(endNeedle, start);
  assert(end > start, `${endNeedle} follows ${startNeedle}`);
  return source.slice(start, end);
}

const app = read("public/app.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

const contractBlock = sectionBetween(app, "const NEXUS_PRESENCE_SYNCHRONIZATION_CONTRACT", "function updateNexusOsVoiceRuntimeState");
const voiceUpdateBlock = sectionBetween(app, "function updateNexusOsVoiceRuntimeState", "function nexusOsVoiceRuntimeSummary");
const renderBlock = sectionBetween(app, "function renderNexusOsVoiceRuntimeStatus", "function persistNexusOsMissionLifecycleState");
const responseBlock = sectionBetween(app, "function setVoiceResponse", "function userFirstName");
const synthesisBlock = sectionBetween(app, "function runNexusSpeechSynthesisController", "function isGuidedHealthVoiceResponse");
const playbackBlock = sectionBetween(app, "function speakVoiceResponse", "function setVoiceStatus");
const exposureBlock = sectionBetween(app, "function exposeNexusAppWindowApis", "function exposeNexusBrainIntelligenceRuntimeApis");

[
  "schemaVersion: \"nexus-presence-synchronization.v1\"",
  "NexusPresenceSynchronizationController",
  "nexus-core-orb",
  "voice-caption",
  "voice-runtime-status",
  "mission-lifecycle-status",
  "screen-reader-announcement",
  "speakingStartsOnlyOnPlaybackStart: true",
  "speakingEndsOnPlaybackEndOrFailure: true",
  "captionUsesExactUserFacingResponse: true",
  "executionAnimationIndependentOfSpeechPlayback: true",
  "completionRequiresHonestCompletionSignal: true",
  "reducedMotionUsesStatusText: true",
  "screenReaderAnnouncementRequired: true",
  "noFakeExecutionClaim: true",
  "noFakeCompletionClaim: true"
].forEach(token => assert(contractBlock.includes(token), `presence synchronization contract includes ${token}`));

[
  "starting: \"wake\"",
  "listening: \"listening\"",
  "\"speech-detected\": \"hearing\"",
  "\"partial-transcript\": \"hearing\"",
  "\"final-transcript\": \"processing\"",
  "speaking: \"speaking\"",
  "awaiting_confirmation: \"confirmation\"",
  "executing: \"executing\"",
  "verifying: \"verifying\"",
  "completed: \"completed\"",
  "\"permission-denied\": \"blocked\"",
  "\"microphone-unavailable\": \"blocked\"",
  "failed: \"error\""
].forEach(token => assert(contractBlock.includes(token), `presence synchronization state map includes ${token}`));

[
  "function normalizeNexusPresenceSyncMode",
  "function nexusPresenceSynchronizationState",
  "function syncNexusPresenceSurfaces",
  "setNexusCoreState(state.coreState",
  "data-nexus-presence-sync-state",
  "data-nexus-presence-speaking",
  "data-nexus-presence-caption-sync",
  "data-nexus-presence-status-announcement"
].forEach(token => assert(contractBlock.includes(token), `presence synchronization helper includes ${token}`));

assert(voiceUpdateBlock.includes("syncNexusPresenceSurfaces(nexusOsVoiceRuntimeState.mode || \"standby\""), "voice runtime updates synchronized presence surfaces");
assert(voiceUpdateBlock.includes("captionText: patch.captionText || patch.lastFinal || patch.lastPartial || patch.lastSpokenPreview"), "voice runtime forwards exact caption candidates");
assert(renderBlock.includes("aria-live=\"polite\" data-nexus-presence-status-announcement=\"true\""), "voice runtime renders screen-reader live status");
assert(renderBlock.includes("data-nexus-presence-caption-sync=\"true\""), "voice runtime renders synchronized caption surface");
assert(responseBlock.includes("syncNexusPresenceSurfaces(nexusOsVoiceRuntimeState.mode || \"standby\""), "setVoiceResponse syncs captions without forcing speaking state");
assert(responseBlock.includes("captionText: responseMessage"), "setVoiceResponse forwards exact response text");
assert(responseBlock.includes("captionText: translated"), "translated responses update exact synchronized caption");
assert(playbackBlock.includes("mode: \"speaking\""), "playback start enters speaking mode");
assert(playbackBlock.includes("captionText: compact"), "playback start uses exact spoken text as caption");
assert(playbackBlock.includes("resumeVoiceListeningAfterSpeech(playbackToken, interruptToken)"), "speech end resumes non-speaking state");
assert(synthesisBlock.includes("mode: \"speaking\""), "browser synthesis start enters speaking mode");
assert(synthesisBlock.includes("assistantSpeaking: false"), "browser synthesis end/error clears speaking flag");
assert(synthesisBlock.includes("captionText: compact"), "browser synthesis preserves exact caption text");
assert(app.includes("@media (prefers-reduced-motion: reduce)"), "reduced motion remains available");
assert(exposureBlock.includes("window.NEXUS_PRESENCE_SYNCHRONIZATION_CONTRACT"), "presence synchronization contract is exposed");
assert(exposureBlock.includes("window.nexusPresenceSynchronizationState"), "presence synchronization state helper is exposed");
assert(exposureBlock.includes("window.syncNexusPresenceSurfaces"), "presence synchronization sync helper is exposed");
assert(!/completed.*provider contacted|completed.*payment|speaking.*provider contacted/i.test(contractBlock), "presence synchronization does not claim fake execution");

assert(packageJson.scripts["qa:nexus-presence-synchronization"] === "node scripts/nexus-presence-synchronization-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-presence-synchronization-qa.js"), "safe QA suite includes presence synchronization QA");

console.log("Nexus Presence synchronization QA passed.");
