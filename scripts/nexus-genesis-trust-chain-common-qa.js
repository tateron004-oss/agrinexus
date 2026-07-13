const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function sourceBetween(source, startMarker, endMarker) {
  const start = source.indexOf(startMarker);
  assert(start >= 0, `Missing start marker: ${startMarker}`);
  const end = source.indexOf(endMarker, start + startMarker.length);
  assert(end > start, `Missing end marker after: ${startMarker}`);
  return source.slice(start, end);
}

function runTrustChainAssertions(label = "nexus-genesis-trust-chain") {
  const app = read("public/app.js");
  const index = read("public/index.html");
  const sw = read("public/sw.js");
  const server = read("server.js");

  [
    "NEXUS_GENESIS_TRUST_CHAIN_CONTRACT",
    "NexusGenesisTrustChainRuntime",
    "wake_requested",
    "voice_permission_pending",
    "listening",
    "speech_detected",
    "transcript_finalized",
    "conversation_submitted",
    "response_pending",
    "response_ready",
    "speech_preparing",
    "speaking",
    "waiting",
    "permission_denied",
    "recognition_unavailable",
    "recognition_failed",
    "response_failed",
    "synthesis_unavailable",
    "synthesis_failed",
    "cancelled",
    "standardUserAdminPreviewAllowed: false",
    "textFallbackRequired: true",
    "speechRequiresStartEvent: true",
    "noWorkflowFromOrbActivation: true"
  ].forEach(token => assert(app.includes(token), `${label}: missing trust-chain token ${token}`));

  [
    "nexusDailyCompanionState",
    "nexusDailyCompanionIntent",
    "handleNexusDailyCompanionCommand",
    "Good morning. I am here with you.",
    "Yes, I can hear you. What are we working on today?",
    "I am glad you reached out.",
    "I can help with that. What type of maize are you selling",
    "I can help you prepare that call, but a phone provider is not connected",
    "I cannot tell you to take or skip medicine",
    "I paused",
    "Back to the maize"
  ].forEach(token => assert(app.includes(token), `${label}: missing companion behavior ${token}`));

  const finalVoiceSource = sourceBetween(app, "function processFinalVoiceCommand", "function scheduleFinalVoiceCommand");
  assert(finalVoiceSource.includes('setNexusGenesisTrustChainState("transcript_finalized"'), `${label}: final transcript must enter trust chain.`);
  assert(finalVoiceSource.includes('setNexusGenesisTrustChainState("conversation_submitted"'), `${label}: final transcript must submit conversation before routing.`);
  assert(finalVoiceSource.includes("handleVoiceCommand(finalCommand"), `${label}: shared conversation runtime must receive final command.`);
  assert(!finalVoiceSource.includes("renderNexusAutonomousRuntimePreview("), `${label}: final voice path must not open preview before conversation.`);

  const voiceCoreSource = sourceBetween(app, "async function handleVoiceCommandCore", "async function handleVoiceCommand");
  const companionIndex = voiceCoreSource.indexOf("handleNexusDailyCompanionCommand");
  const previewIndex = voiceCoreSource.indexOf("runStandardUserAssistantRuntimePreview");
  const workflowIndex = voiceCoreSource.indexOf("launchCapabilityFromVoice");
  assert(companionIndex > -1, `${label}: daily companion handler must be in shared voice core.`);
  assert(previewIndex > -1 && companionIndex < previewIndex, `${label}: companion mode must run before preview routing.`);
  assert(workflowIndex > -1 && companionIndex < workflowIndex, `${label}: companion mode must run before workflow launch.`);

  const orbSource = sourceBetween(app, "function handleNexusGenesisOrbActivation", "function nexusTrueExperienceHasActiveWorkflow");
  [
    "event.stopImmediatePropagation",
    "voiceRecognition?.stop",
    "stopVoicePlayback",
    "genesis-orb-stop-speaking",
    "genesis-orb-stop-listening",
    "genesis-orb-processing-click",
    "void activateNexusGenesisExperience"
  ].forEach(token => assert(orbSource.includes(token), `${label}: orb activation missing deterministic behavior ${token}`));
  [
    "renderNexusAutonomousRuntimePreview",
    "openWorkflow",
    "Plan Preview",
    "Evidence and Verification",
    "goSection("
  ].forEach(token => assert(!orbSource.includes(token), `${label}: orb activation must not invoke ${token}`));

  const activateSource = sourceBetween(app, "async function activateNexusGenesisExperience", "function resetNexusGenesisHomeViewport");
  assert(activateSource.includes('setNexusGenesisTrustChainState("wake_requested"'), `${label}: activation must request wake state.`);
  assert(activateSource.includes('setNexusGenesisTrustChainState("voice_permission_pending"'), `${label}: activation must enter permission/listening chain.`);
  assert(activateSource.includes("await startVoiceListening"), `${label}: orb activation should start listening when supported.`);

  const speechSource = sourceBetween(app, "function runNexusSpeechSynthesisController", "function isGuidedHealthVoiceResponse");
  [
    "prepared.utterance.onstart",
    "prepared.utterance.onboundary",
    "prepared.utterance.onpause",
    "prepared.utterance.onresume",
    "prepared.utterance.onend",
    "prepared.utterance.onerror",
    'mode: "speech-preparing"',
    'setNexusGenesisTrustChainState("speaking"',
    'setNexusGenesisTrustChainState("synthesis_failed"',
    "speechStartEventReceived: true",
    "speechEndEventReceived: true"
  ].forEach(token => assert(speechSource.includes(token), `${label}: speech synthesis lifecycle missing ${token}`));

  const responseSource = sourceBetween(app, "function setVoiceResponse", "function userFirstName");
  assert(responseSource.includes('setNexusGenesisTrustChainState(compactResponse ? "response_ready" : "response_failed"'), `${label}: responses must update trust chain visibly.`);
  assert(responseSource.includes("recordNexusOsConversationTurn(\"assistant\""), `${label}: assistant response must be recorded in shared conversation.`);
  assert(responseSource.indexOf("updateUserCaptionPanel(responseMessage)") < responseSource.indexOf("scheduleNexusSpeech(responseMessage"), `${label}: text/caption must render before speech is scheduled.`);

  const previewSource = sourceBetween(app, "function renderNexusAutonomousRuntimePreview", "function installNexusAutonomousRuntimePreview");
  assert(previewSource.includes("standard-user-preview-isolated"), `${label}: Standard User voice/orb preview must be isolated.`);
  assert(previewSource.includes("!options.explicitUserRequestedPreview"), `${label}: preview should require explicit user request from Genesis voice/orb context.`);

  const appVersion = app.match(/AGRINEXUS_BUILD_VERSION = "(nexus-behavior-\d+)"/)?.[1];
  const swVersion = sw.match(/BUILD_VERSION = "(nexus-behavior-\d+)"/)?.[1];
  const serverVersion = server.match(/AGRINEXUS_WEB_BUILD_VERSION = "(nexus-behavior-\d+)"/)?.[1];
  assert(appVersion && appVersion === swVersion && swVersion === serverVersion, `${label}: app, SW, and server build versions must align.`);
  assert(index.includes(`/app.js?v=${appVersion}`), `${label}: index must load current app build.`);
  assert(index.includes(`/styles.css?v=${appVersion}`), `${label}: index must load current stylesheet build.`);

  [
    "I love you.",
    "I am all you need.",
    "You don't need to call anyone else.",
    "I understand exactly how you feel."
  ].forEach(forbidden => assert(!app.includes(forbidden), `${label}: prohibited dependency language present: ${forbidden}`));

  return {
    label,
    appVersion,
    trustChainStates: 19,
    companionDefault: true,
    conversationFirst: true,
    adminPreviewIsolated: true
  };
}

module.exports = { runTrustChainAssertions };

if (require.main === module) {
  const result = runTrustChainAssertions();
  console.log(JSON.stringify(result, null, 2));
}
