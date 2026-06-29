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

function assertStaticVoiceAndTypedWiring() {
  const app = read("public", "app.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const voiceCore = functionSlice(app, "handleVoiceCommandCore");
  const previewRunner = functionSlice(app, "runStandardUserAssistantRuntimePreview");
  const globalCommand = functionSlice(app, "runGlobalCommand");
  const handleVoice = functionSlice(app, "handleVoiceCommand");

  assert(voiceCore.includes("runStandardUserAssistantRuntimePreview"), "NAP7 voice core must route to the safe assistant runtime preview.");
  assert(voiceCore.indexOf("handleJarvisStyleStandardUserSafetyResponse") < voiceCore.indexOf("runStandardUserAssistantRuntimePreview"), "NAP7 high-risk safety response must stay before runtime preview.");
  assert(voiceCore.indexOf("runStandardUserAssistantRuntimePreview") < voiceCore.indexOf("fastLaneIntent"), "NAP7 safe assistant preview must run before legacy fast-lane workflow routing.");
  assert(voiceCore.includes("source: options.source || \"voice\""), "NAP7 voice core must preserve source metadata.");
  assert(voiceCore.includes("{ ...options, turnToken }"), "NAP7 voice core must preserve turn-token safety.");

  assert(previewRunner.includes("inputMode: options.source || \"typed\""), "NAP7 preview endpoint must preserve typed/voice input mode.");
  assert(previewRunner.includes("if (!prompt || !isNexusAssistantRuntimePreviewEnabled()) return false;"), "NAP7 preview runner must short-circuit when disabled.");
  assert(previewRunner.includes("allowHandoff: false"), "NAP7 preview runner must prevent provider handoff.");

  assert(globalCommand.includes("await handleVoiceCommand(command);"), "NAP7 typed global command must use the shared safe command path.");
  assert(handleVoice.includes("handleVoiceCommandCore(rawCommand, options)"), "NAP7 handleVoiceCommand must delegate to the guarded core.");
  assert(app.includes("event.target?.id === \"userCaptionInput\""), "NAP7 caption input must remain wired to the shared command path.");
  assert(app.includes("void handleVoiceCommand(command);"), "NAP7 typed caption enter must route through handleVoiceCommand.");

  [
    "SpeechRecognition(",
    "webkitSpeechRecognition(",
    "navigator.mediaDevices.getUserMedia",
    "getUserMedia(",
    "navigator.geolocation",
    "getCurrentPosition",
    "watchPosition",
    "window.open",
    "location.href",
    "providerHandoffAllowed = true",
    "executionAuthority: true"
  ].forEach(term => {
    assert(!voiceCore.includes(term), `NAP7 voice core must not introduce unsafe or new permission behavior: ${term}`);
    assert(!previewRunner.includes(term), `NAP7 preview runner must not introduce unsafe or new permission behavior: ${term}`);
  });

  assert.equal(
    pkg.scripts["qa:nexus-nap7-voice-command-layer-integration"],
    "node scripts/nexus-nap7-voice-command-layer-integration-qa.js",
    "NAP7 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-nap7-voice-command-layer-integration-qa.js"), "NAP7 QA must be wired into local-safe suites.");
}

function assertRuntimeVoicePromptSafety() {
  const env = Object.freeze({
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED: "true",
    NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED: "true",
    NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
    NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_ENABLED: "true"
  });

  [
    "Find farm jobs near Stockton",
    "Nexus, find farm jobs near Stockton",
    "What is the weather in Stockton?",
    "Turn this into a checklist"
  ].forEach(prompt => {
    const response = runtime.buildAssistantRuntimeResponse(prompt, { surface: "standard-user", inputMode: "voice", previewOnly: true }, env);
    assert.equal(runtime.isSafeAssistantRuntimeResponse(response), true, `${prompt} must produce a safe speakable preview response.`);
    assert.equal(response.noExecutionAuthorized, true, `${prompt} must not authorize execution.`);
    assert.equal(response.providerHandoffAllowed, false, `${prompt} must not authorize provider handoff.`);
    assert(Array.isArray(response.safeFollowUps), `${prompt} must expose safe follow-up prompts.`);
  });

  [
    "Call provider",
    "Buy fertilizer",
    "Dispatch help",
    "Send my location"
  ].forEach(prompt => {
    const response = runtime.buildAssistantRuntimeResponse(prompt, { surface: "standard-user", inputMode: "voice", previewOnly: true }, env);
    assert.equal(runtime.isSafeAssistantRuntimeResponse(response), true, `${prompt} must produce a safe blocked response.`);
    assert.equal(response.allowed, false, `${prompt} must remain blocked.`);
    assert.equal(response.noExecutionAuthorized, true, `${prompt} must not authorize execution.`);
    assert.equal(response.providerHandoffAllowed, false, `${prompt} must not authorize provider handoff.`);
  });
}

function runNap7VoiceCommandLayerIntegrationQa() {
  assertStaticVoiceAndTypedWiring();
  assertRuntimeVoicePromptSafety();
  console.log(JSON.stringify({
    typedCommandUsesSharedVoicePath: true,
    voiceCommandRoutesToAssistantRuntime: true,
    highRiskVoicePromptsBlocked: true,
    noNewMicrophonePermissionBehavior: true,
    noProviderHandoff: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-nap7-voice-command-layer-integration-qa] passed");
}

if (require.main === module) {
  try {
    runNap7VoiceCommandLayerIntegrationQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runNap7VoiceCommandLayerIntegrationQa
});
