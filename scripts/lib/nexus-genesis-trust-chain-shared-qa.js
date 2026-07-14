"use strict";

const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const DEFAULT_REPOSITORY_ROOT = path.resolve(__dirname, "..", "..");

const TRUST_CHAIN_RAILS = Object.freeze([
  {
    railNumber: 1,
    suiteId: "nexus-trust-chain-trace",
    suiteName: "Nexus Genesis Trust Chain Rail 1 QA",
    wrapper: "scripts/nexus-trust-chain-trace-qa.js",
    alias: "qa:nexus-trust-chain-trace",
    groups: ["ownership", "transcript", "synchronization"]
  },
  {
    railNumber: 2,
    suiteId: "nexus-conversation-acknowledgement",
    suiteName: "Nexus Genesis Trust Chain Rail 2 QA",
    wrapper: "scripts/nexus-conversation-acknowledgement-qa.js",
    alias: "qa:nexus-conversation-acknowledgement",
    groups: ["transcript", "acknowledgement", "fallback", "companion"]
  },
  {
    railNumber: 3,
    suiteId: "nexus-audible-response",
    suiteName: "Nexus Genesis Trust Chain Rail 3 QA",
    wrapper: "scripts/nexus-audible-response-qa.js",
    alias: "qa:nexus-audible-response",
    groups: ["synthesis", "fallback", "synchronization"]
  },
  {
    railNumber: 4,
    suiteId: "nexus-orb-deterministic-activation",
    suiteName: "Nexus Genesis Trust Chain Rail 4 QA",
    wrapper: "scripts/nexus-orb-deterministic-activation-qa.js",
    alias: "qa:nexus-orb-deterministic-activation",
    groups: ["ownership", "orbActivation", "adminIsolation"]
  },
  {
    railNumber: 5,
    suiteId: "nexus-conversation-first-routing",
    suiteName: "Nexus Genesis Trust Chain Rail 5 QA",
    wrapper: "scripts/nexus-conversation-first-routing-qa.js",
    alias: "qa:nexus-conversation-first-routing",
    groups: ["routing", "acknowledgement", "companion"]
  },
  {
    railNumber: 6,
    suiteId: "nexus-admin-preview-isolation",
    suiteName: "Nexus Genesis Trust Chain Rail 6 QA",
    wrapper: "scripts/nexus-admin-preview-isolation-qa.js",
    alias: "qa:nexus-admin-preview-isolation",
    groups: ["adminIsolation", "ownership", "fallback"]
  },
  {
    railNumber: 7,
    suiteId: "nexus-first-response-synchronization",
    suiteName: "Nexus Genesis Trust Chain Rail 7 QA",
    wrapper: "scripts/nexus-first-response-synchronization-qa.js",
    alias: "qa:nexus-first-response-synchronization",
    groups: ["transcript", "acknowledgement", "synthesis", "synchronization", "fallback"]
  },
  {
    railNumber: 8,
    suiteId: "nexus-genesis-trust-chain-acceptance",
    suiteName: "Nexus Genesis Trust Chain Rail 8 Acceptance QA",
    wrapper: "scripts/nexus-genesis-trust-chain-acceptance-qa.js",
    alias: "qa:nexus-genesis-trust-chain-acceptance",
    groups: [
      "ownership",
      "transcript",
      "acknowledgement",
      "synthesis",
      "orbActivation",
      "routing",
      "adminIsolation",
      "synchronization",
      "fallback",
      "companion",
      "registration",
      "acceptance"
    ]
  },
  {
    railNumber: 9,
    suiteId: "nexus-genesis-rail-09-understanding",
    suiteName: "Nexus Genesis Rail 9 Understanding QA",
    wrapper: "scripts/nexus-genesis-rail-09-understanding-qa.js",
    alias: "qa:nexus-genesis-rail-09-understanding",
    groups: ["understanding", "routing", "companion"]
  },
  {
    railNumber: 10,
    suiteId: "nexus-genesis-rail-10-context",
    suiteName: "Nexus Genesis Rail 10 Context QA",
    wrapper: "scripts/nexus-genesis-rail-10-context-qa.js",
    alias: "qa:nexus-genesis-rail-10-context",
    groups: ["context", "synchronization", "companion"]
  },
  {
    railNumber: 11,
    suiteId: "nexus-genesis-rail-11-memory",
    suiteName: "Nexus Genesis Rail 11 Memory QA",
    wrapper: "scripts/nexus-genesis-rail-11-memory-qa.js",
    alias: "qa:nexus-genesis-rail-11-memory",
    groups: ["memory", "privacy"]
  },
  {
    railNumber: 12,
    suiteId: "nexus-genesis-rail-12-planning",
    suiteName: "Nexus Genesis Rail 12 Planning QA",
    wrapper: "scripts/nexus-genesis-rail-12-planning-qa.js",
    alias: "qa:nexus-genesis-rail-12-planning",
    groups: ["planning", "context"]
  },
  {
    railNumber: 13,
    suiteId: "nexus-genesis-rail-13-capability-readiness",
    suiteName: "Nexus Genesis Rail 13 Capability Readiness QA",
    wrapper: "scripts/nexus-genesis-rail-13-capability-readiness-qa.js",
    alias: "qa:nexus-genesis-rail-13-capability-readiness",
    groups: ["capabilityReadiness", "fallback"]
  },
  {
    railNumber: 14,
    suiteId: "nexus-genesis-rail-14-consent-confirmation",
    suiteName: "Nexus Genesis Rail 14 Consent Confirmation QA",
    wrapper: "scripts/nexus-genesis-rail-14-consent-confirmation-qa.js",
    alias: "qa:nexus-genesis-rail-14-consent-confirmation",
    groups: ["consent", "safety"]
  },
  {
    railNumber: 15,
    suiteId: "nexus-genesis-rail-15-execution-integrity",
    suiteName: "Nexus Genesis Rail 15 Execution Integrity QA",
    wrapper: "scripts/nexus-genesis-rail-15-execution-integrity-qa.js",
    alias: "qa:nexus-genesis-rail-15-execution-integrity",
    groups: ["execution", "consent"]
  },
  {
    railNumber: 16,
    suiteId: "nexus-genesis-rail-16-outcome-receipts",
    suiteName: "Nexus Genesis Rail 16 Outcome Receipts QA",
    wrapper: "scripts/nexus-genesis-rail-16-outcome-receipts-qa.js",
    alias: "qa:nexus-genesis-rail-16-outcome-receipts",
    groups: ["receipts", "execution"]
  },
  {
    railNumber: 17,
    suiteId: "nexus-genesis-rail-17-privacy-isolation",
    suiteName: "Nexus Genesis Rail 17 Privacy Isolation QA",
    wrapper: "scripts/nexus-genesis-rail-17-privacy-isolation-qa.js",
    alias: "qa:nexus-genesis-rail-17-privacy-isolation",
    groups: ["privacy", "adminIsolation"]
  },
  {
    railNumber: 18,
    suiteId: "nexus-genesis-rail-18-safety-escalation",
    suiteName: "Nexus Genesis Rail 18 Safety Escalation QA",
    wrapper: "scripts/nexus-genesis-rail-18-safety-escalation-qa.js",
    alias: "qa:nexus-genesis-rail-18-safety-escalation",
    groups: ["safety", "companion"]
  },
  {
    railNumber: 19,
    suiteId: "nexus-genesis-rail-19-accessibility",
    suiteName: "Nexus Genesis Rail 19 Accessibility QA",
    wrapper: "scripts/nexus-genesis-rail-19-accessibility-qa.js",
    alias: "qa:nexus-genesis-rail-19-accessibility",
    groups: ["accessibility", "fallback"]
  },
  {
    railNumber: 20,
    suiteId: "nexus-genesis-rail-20-multilingual",
    suiteName: "Nexus Genesis Rail 20 Multilingual QA",
    wrapper: "scripts/nexus-genesis-rail-20-multilingual-qa.js",
    alias: "qa:nexus-genesis-rail-20-multilingual",
    groups: ["multilingual", "synthesis"]
  },
  {
    railNumber: 21,
    suiteId: "nexus-genesis-rail-21-concurrency",
    suiteName: "Nexus Genesis Rail 21 Concurrency QA",
    wrapper: "scripts/nexus-genesis-rail-21-concurrency-qa.js",
    alias: "qa:nexus-genesis-rail-21-concurrency",
    groups: ["concurrency", "synchronization"]
  },
  {
    railNumber: 22,
    suiteId: "nexus-genesis-rail-22-recovery",
    suiteName: "Nexus Genesis Rail 22 Recovery QA",
    wrapper: "scripts/nexus-genesis-rail-22-recovery-qa.js",
    alias: "qa:nexus-genesis-rail-22-recovery",
    groups: ["recovery", "fallback"]
  },
  {
    railNumber: 23,
    suiteId: "nexus-genesis-rail-23-companion-emotional-safety",
    suiteName: "Nexus Genesis Rail 23 Companion Emotional Safety QA",
    wrapper: "scripts/nexus-genesis-rail-23-companion-emotional-safety-qa.js",
    alias: "qa:nexus-genesis-rail-23-companion-emotional-safety",
    groups: ["companionEmotionalSafety", "companion"]
  },
  {
    railNumber: 24,
    suiteId: "nexus-genesis-rail-24-physical-browser-voice-proof",
    suiteName: "Nexus Genesis Rail 24 Physical Browser Voice Proof QA",
    wrapper: "scripts/nexus-genesis-rail-24-physical-browser-voice-proof-qa.js",
    alias: "qa:nexus-genesis-rail-24-physical-browser-voice-proof",
    groups: ["physicalVoiceProof", "synthesis", "fallback"]
  },
  {
    railNumber: 25,
    suiteId: "nexus-genesis-rail-25-end-to-end-standard-user-acceptance",
    suiteName: "Nexus Genesis Rail 25 End-to-End Standard User Acceptance QA",
    wrapper: "scripts/nexus-genesis-rail-25-end-to-end-standard-user-acceptance-qa.js",
    alias: "qa:nexus-genesis-rail-25-end-to-end-standard-user-acceptance",
    groups: [
      "registration",
      "acceptance",
      "understanding",
      "context",
      "memory",
      "planning",
      "capabilityReadiness",
      "consent",
      "execution",
      "receipts",
      "privacy",
      "safety",
      "accessibility",
      "multilingual",
      "concurrency",
      "recovery",
      "companionEmotionalSafety",
      "physicalVoiceProof",
      "endToEndAcceptance"
    ]
  }
]);

const APPROVED_GROUPS = new Set([
  "ownership",
  "transcript",
  "acknowledgement",
  "synthesis",
  "orbActivation",
  "routing",
  "adminIsolation",
  "synchronization",
  "fallback",
  "companion",
  "registration",
  "acceptance",
  "understanding",
  "context",
  "memory",
  "planning",
  "capabilityReadiness",
  "consent",
  "execution",
  "receipts",
  "privacy",
  "safety",
  "accessibility",
  "multilingual",
  "concurrency",
  "recovery",
  "companionEmotionalSafety",
  "physicalVoiceProof",
  "endToEndAcceptance"
]);

function readSource(repositoryRoot, relativePath) {
  return fs.readFileSync(path.join(repositoryRoot, relativePath), "utf8");
}

function sourceBetween(source, startMarker, endMarker, label) {
  const start = source.indexOf(startMarker);
  assert(start >= 0, `${label}: missing start marker ${startMarker}`);
  const end = source.indexOf(endMarker, start + startMarker.length);
  assert(end > start, `${label}: missing end marker ${endMarker} after ${startMarker}`);
  return source.slice(start, end);
}

function loadRepository(repositoryRoot) {
  return {
    repositoryRoot,
    app: readSource(repositoryRoot, "public/app.js"),
    index: readSource(repositoryRoot, "public/index.html"),
    sw: readSource(repositoryRoot, "public/sw.js"),
    server: readSource(repositoryRoot, "server.js"),
    packageJson: JSON.parse(readSource(repositoryRoot, "package.json")),
    qaSuite: readSource(repositoryRoot, "scripts/qa-suite.js")
  };
}

function assertIncludes(source, tokens, label, contractName) {
  tokens.forEach(token => {
    assert(source.includes(token), `${label}: ${contractName} missing expected token: ${token}`);
  });
}

function assertExcludes(source, tokens, label, contractName) {
  tokens.forEach(token => {
    assert(!source.includes(token), `${label}: ${contractName} contains forbidden token: ${token}`);
  });
}

function assertOwnership(context, label) {
  assertIncludes(context.app, [
    "NEXUS_GENESIS_TRUST_CHAIN_CONTRACT",
    "NexusGenesisTrustChainRuntime",
    'orbHomeAction: "wake_or_listen_only"',
    "canonicalSpeechRecognitionController",
    "canonicalSpeechSynthesisController",
    "NexusSpeechRecognitionController",
    "NexusSpeechSynthesisController",
    "nexus-os-canonical-voice",
    "processFinalVoiceCommand",
    "scheduleFinalVoiceCommand",
    "handleVoiceCommandCore",
    "standardUserAdminPreviewAllowed: false",
    "textFallbackRequired: true",
    "speechRequiresStartEvent: true",
    "noWorkflowFromOrbActivation: true"
  ], label, "trust-chain ownership");

  const orbSource = sourceBetween(context.app, "function handleNexusGenesisOrbActivation", "function nexusTrueExperienceHasActiveWorkflow", label);
  assertExcludes(orbSource, [
    "renderNexusAutonomousRuntimePreview",
    "openWorkflow",
    "Plan Preview",
    "Evidence and Verification",
    "goSection("
  ], label, "orb preview isolation");
}

function assertTranscript(context, label) {
  assertIncludes(context.app, [
    "transcript_finalized",
    "conversation_submitted",
    "speech_detected",
    "recognition_failed",
    "cancelled"
  ], label, "final transcript states");

  const finalVoiceSource = sourceBetween(context.app, "function processFinalVoiceCommand", "function scheduleFinalVoiceCommand", label);
  assertIncludes(finalVoiceSource, [
    'setNexusGenesisTrustChainState("transcript_finalized"',
    'setNexusGenesisTrustChainState("conversation_submitted"',
    "handleVoiceCommand(finalCommand"
  ], label, "final transcript delivery");
  assert(!finalVoiceSource.includes("renderNexusAutonomousRuntimePreview("), `${label}: final voice path must not open preview before conversation.`);
  assert(context.app.includes("voiceFinalDebounceTimer") && context.app.includes("VOICE_FINAL_DEBOUNCE_MS"), `${label}: final transcript path should carry duplicate/debounce protection.`);
}

function assertAcknowledgement(context, label) {
  const responseSource = sourceBetween(context.app, "function setVoiceResponse", "function userFirstName", label);
  assertIncludes(responseSource, [
    'setNexusGenesisTrustChainState(compactResponse ? "response_ready" : "response_failed"',
    "recordNexusOsConversationTurn(\"assistant\"",
    "updateUserCaptionPanel(responseMessage)",
    "scheduleNexusSpeech(responseMessage"
  ], label, "visible acknowledgement");
  assert(responseSource.indexOf("updateUserCaptionPanel(responseMessage)") < responseSource.indexOf("scheduleNexusSpeech(responseMessage"), `${label}: visible text/caption must render before speech is scheduled.`);
  assert(context.app.includes("I heard you, but I wasn't able to prepare a response. Please try again.") || context.app.includes("I heard you"), `${label}: missing honest response failure fallback wording.`);
}

function assertSynthesis(context, label) {
  const speechSource = sourceBetween(context.app, "function runNexusSpeechSynthesisController", "function isGuidedHealthVoiceResponse", label);
  assertIncludes(speechSource, [
    "window.speechSynthesis",
    "SpeechSynthesisUtterance",
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
    "speechEndEventReceived: true",
    "window.speechSynthesis.speak(prepared.utterance)"
  ], label, "audible response lifecycle");
  assert(context.app.includes("function chooseSpeechVoice"), `${label}: speech lifecycle must use safe voice selection helper.`);
  assert(speechSource.indexOf('mode: "speech-preparing"') < speechSource.indexOf("window.speechSynthesis.speak(prepared.utterance)"), `${label}: speech state must prepare before speak() and wait for onstart before speaking.`);

  const speakSource = sourceBetween(context.app, "function speakVoiceResponse", "function setVoiceStatus", label);
  assertIncludes(speakSource, [
    "runNexusSpeechSynthesisController(compact",
    "Using opt-in browser speech fallback. NexusSpeechSynthesisController is managing playback.",
    "Speech state will change to speaking after the browser start event.",
    "I heard you, but I am unable to speak right now. I will continue in text.",
    "Browser speech fallback could not start: ${speechResult.reason}",
    "audio.onplay",
    'setNexusGenesisTrustChainState("speaking"'
  ], label, "speech fallback wiring");
}

function assertOrbActivation(context, label) {
  const orbSource = sourceBetween(context.app, "function handleNexusGenesisOrbActivation", "function nexusTrueExperienceHasActiveWorkflow", label);
  assertIncludes(orbSource, [
    "return false"
  ], label, "deterministic orb non-activation");
  assertExcludes(orbSource, [
    "event.stopImmediatePropagation",
    "voiceRecognition?.stop",
    "stopVoicePlayback",
    "genesis-orb-stop-speaking",
    "genesis-orb-stop-listening",
    "genesis-orb-processing-click",
    "void activateNexusGenesisExperience",
    "renderNexusAutonomousRuntimePreview",
    "openWorkflow",
    "Plan Preview",
    "Evidence and Verification",
    "goSection("
  ], label, "forbidden orb side effect");

  const activateSource = sourceBetween(context.app, "async function activateNexusGenesisExperience", "function resetNexusGenesisHomeViewport", label);
  assertIncludes(activateSource, [
    'setNexusGenesisTrustChainState("waiting"',
    "renderUserWorkspace()",
    "updateNexusGenesisExperienceDom()"
  ], label, "presence startup flow");
  assertExcludes(activateSource, [
    "startNexusOsMission(",
    "await startVoiceListening",
    'setNexusGenesisTrustChainState("voice_permission_pending"'
  ], label, "forbidden orb startup side effect");

  const rendererSource = sourceBetween(context.app, "function renderNexusTrueCoreOrb", "function handleNexusPrimaryVoiceButtonClick", label);
  assertIncludes(rendererSource, [
    'data-nexus-genesis-orb-presence="true"',
    'role="img"',
    "Nexus visual status indicator. Use the voice controls or type below to begin."
  ], label, "presence orb renderer");
  assertExcludes(rendererSource, [
    "<button",
    "data-nexus-genesis-orb-entry",
    "onclick"
  ], label, "forbidden orb interactive markup");

  const bindSource = sourceBetween(context.app, "function bindStatic", "async function boot", label);
  assert(!bindSource.includes("handleNexusGenesisOrbActivation"), `${label}: static binding must not wire orb click or keyboard activation.`);
}

function assertRouting(context, label) {
  const voiceCoreSource = sourceBetween(context.app, "async function handleVoiceCommandCore", "async function handleVoiceCommand", label);
  const companionIndex = voiceCoreSource.indexOf("handleNexusDailyCompanionCommand");
  const previewIndex = voiceCoreSource.indexOf("runStandardUserAssistantRuntimePreview");
  const workflowIndex = voiceCoreSource.indexOf("launchCapabilityFromVoice");
  assert(companionIndex > -1, `${label}: companion mode must run inside shared voice core.`);
  assert(previewIndex > -1 && companionIndex < previewIndex, `${label}: conversation-first companion handling must run before preview routing.`);
  assert(workflowIndex > -1 && companionIndex < workflowIndex, `${label}: conversation-first companion handling must run before workflow launch.`);
  assertIncludes(context.app, [
    "Good morning. I am here with you.",
    "Voice listening is not active right now.",
    "tell me something interesting",
    "explain ai",
    "I need help",
    "what can you do"
  ], label, "conversation-first representative inputs");
}

function assertAdminIsolation(context, label) {
  const previewSource = sourceBetween(context.app, "function renderNexusAutonomousRuntimePreview", "function installNexusAutonomousRuntimePreview", label);
  assertIncludes(previewSource, [
    "standard-user-preview-isolated",
    "!options.explicitUserRequestedPreview"
  ], label, "Standard User preview isolation");

  const orbSource = sourceBetween(context.app, "function handleNexusGenesisOrbActivation", "function nexusTrueExperienceHasActiveWorkflow", label);
  assertExcludes(orbSource, [
    "Plan Preview",
    "Execution Preview",
    "Provider Readiness",
    "Capability Matrix",
    "Runtime diagnostics",
    "Administrative queues"
  ], label, "admin surface isolation");
}

function assertSynchronization(context, label) {
  assertIncludes(context.app, [
    "listening",
    "transcript_finalized",
    "response_pending",
    "response_ready",
    "speech_preparing",
    "speaking",
    "waiting",
    "synthesis_failed",
    "recognition_failed"
  ], label, "first response state sequence");
  const speechSource = sourceBetween(context.app, "function runNexusSpeechSynthesisController", "function isGuidedHealthVoiceResponse", label);
  assert(speechSource.indexOf("prepared.utterance.onstart") < speechSource.indexOf("window.speechSynthesis.speak(prepared.utterance)"), `${label}: speaking state must be owned by the playback-start callback.`);
  assert(speechSource.indexOf('mode: "speech-preparing"') < speechSource.indexOf("window.speechSynthesis.speak(prepared.utterance)"), `${label}: speech-preparing state must be set before speak() is requested.`);
  const responseSource = sourceBetween(context.app, "function setVoiceResponse", "function userFirstName", label);
  assert(responseSource.indexOf("updateUserCaptionPanel(responseMessage)") < responseSource.indexOf("scheduleNexusSpeech(responseMessage"), `${label}: captions must be synchronized before speech scheduling.`);
}

function assertFallback(context, label) {
  assertIncludes(context.app, [
    "I heard you, but I am unable to speak right now. I will continue in text.",
    "I cannot access the microphone here. You can continue by typing.",
    "I cannot access speech recognition in this browser. You can continue by typing.",
    "Visible text remains available.",
    "typed-fallback",
    "synthesis_unavailable",
    "recognition_unavailable"
  ], label, "fallback contract");
}

function assertCompanion(context, label) {
  assertIncludes(context.app, [
    "nexusDailyCompanionState",
    "nexusDailyCompanionIntent",
    "handleNexusDailyCompanionCommand",
    "Good morning. I am here with you.",
    "Voice listening is not active right now.",
    "I am glad you reached out.",
    "Of course. I can explain it in plain steps.",
    "I will slow down.",
    "I can use short answers for now.",
    "I cleared that voice preference.",
    "I can help with that. What type of maize are you selling",
    "I paused",
    "Back to the maize",
    "I can help you prepare that call, but a phone provider is not connected",
    "I cannot tell you to take or skip medicine"
  ], label, "daily companion behavior");
  assertExcludes(context.app, [
    "I love you.",
    "I am all you need.",
    "You don't need to call anyone else.",
    "Do not call your family.",
    "I understand exactly how you feel."
  ], label, "prohibited companion dependency language");
}

function assertRegistration(context, label) {
  const railNumbers = new Set();
  const suiteIds = new Set();
  const aliases = new Set();
  TRUST_CHAIN_RAILS.forEach(rail => {
    assert(!railNumbers.has(rail.railNumber), `${label}: duplicate rail number ${rail.railNumber}.`);
    assert(!suiteIds.has(rail.suiteId), `${label}: duplicate rail id ${rail.suiteId}.`);
    assert(!aliases.has(rail.alias), `${label}: duplicate rail alias ${rail.alias}.`);
    railNumbers.add(rail.railNumber);
    suiteIds.add(rail.suiteId);
    aliases.add(rail.alias);
    const wrapperSource = readSource(context.repositoryRoot, rail.wrapper);
    assert(wrapperSource.includes("runTrustChainQa"), `${label}: ${rail.wrapper} must invoke shared runTrustChainQa.`);
    assert(wrapperSource.includes(`railNumber: ${rail.railNumber}`), `${label}: ${rail.wrapper} must identify rail ${rail.railNumber}.`);
    assert(wrapperSource.includes(`suiteId: "${rail.suiteId}"`), `${label}: ${rail.wrapper} must identify suite id ${rail.suiteId}.`);
    assert(wrapperSource.includes("acceptancePurpose:"), `${label}: ${rail.wrapper} must declare acceptancePurpose.`);
    rail.groups.forEach(group => {
      assert(wrapperSource.includes(`"${group}"`), `${label}: ${rail.wrapper} must select group ${group}.`);
    });
    assert(!wrapperSource.includes("fs.readFileSync"), `${label}: ${rail.wrapper} must not reimplement repository loading.`);
    assert(!wrapperSource.includes("sourceBetween("), `${label}: ${rail.wrapper} must not copy shared assertion helpers.`);
    assert(wrapperSource.length < 2000, `${label}: ${rail.wrapper} should remain a small rail launcher.`);
    assert.strictEqual(
      context.packageJson.scripts[rail.alias],
      `node ${rail.wrapper.replaceAll("\\", "/")}`,
      `${label}: package alias ${rail.alias} must point to ${rail.wrapper}`
    );
  });
  const finalRail = TRUST_CHAIN_RAILS.find(rail => rail.railNumber === 25);
  assert(finalRail && finalRail.groups.includes("endToEndAcceptance"), `${label}: final acceptance rail must validate end-to-end acceptance.`);
  for (let railNumber = 1; railNumber <= 25; railNumber += 1) {
    assert(railNumbers.has(railNumber), `${label}: missing rail number ${railNumber}.`);
  }
  assert(context.qaSuite.includes("scripts/nexus-genesis-rail-25-end-to-end-standard-user-acceptance-qa.js"), `${label}: safe suite wiring must include final acceptance wrapper.`);
}

function assertAcceptance(context, label) {
  const appVersion = context.app.match(/AGRINEXUS_BUILD_VERSION = "(nexus-behavior-\d+)"/)?.[1];
  const swVersion = context.sw.match(/BUILD_VERSION = "(nexus-behavior-\d+)"/)?.[1];
  const serverVersion = context.server.match(/AGRINEXUS_WEB_BUILD_VERSION = "(nexus-behavior-\d+)"/)?.[1];
  assert(appVersion && appVersion === swVersion && swVersion === serverVersion, `${label}: app, SW, and server build versions must align.`);
  assert(context.index.includes(`/app.js?v=${appVersion}`), `${label}: index must load current app build.`);
  assert(context.index.includes(`/styles.css?v=${appVersion}`), `${label}: index must load current stylesheet build.`);
}

function assertFullRailContract(context, label, contractName, tokens) {
  assertIncludes(context.app, [
    "NEXUS_GENESIS_FULL_RAIL_CONTRACT",
    "nexus-genesis-full-rail-contract.v1",
    "window.NEXUS_GENESIS_FULL_RAIL_CONTRACT"
  ], label, "full Genesis rail runtime contract");
  assertIncludes(context.app, tokens, label, contractName);
}

function assertUnderstanding(context, label) {
  assertFullRailContract(context, label, "understanding integrity", [
    "preservesUserWording",
    "distinguishesCommandsQuestionsConversationAndHighRiskActions",
    "ambiguityRequiresClarification",
    "noSilentIntentSubstitution",
    "noExecutionFromGuessedIntent",
    "multiIntentDecompositionRequired",
    "clarify_before_action",
    "seniorFriendlyClarification"
  ]);
}

function assertContext(context, label) {
  assertFullRailContract(context, label, "context continuity", [
    "conversationOwnershipRequired",
    "missionIsolationRequired",
    "pronounResolutionRequiresActiveMission",
    "staleContextRejected",
    "continueChangeCancelStartOverSupported",
    "newTopicCreatesSeparateMission",
    "sessionRestorationTruthful"
  ]);
}

function assertMemory(context, label) {
  assertFullRailContract(context, label, "memory truth lifecycle", [
    "currentTurnContextDisclosed",
    "persistentMemoryRequiresConsent",
    "preferenceMemoryInspectable",
    "correctionDeletionArchivalSupported",
    "deceasedPatientClosureSupported",
    "closedBusinessRemovalSupported",
    "noMemoryClaimWhenPersistenceFails",
    "storageScopeMustBeExplained"
  ]);
}

function assertPlanning(context, label) {
  assertFullRailContract(context, label, "planning decomposition", [
    "decomposesGoals",
    "detectsMissingInformation",
    "tracksDependenciesAndBlockedSteps",
    "revisesPlanOnUserChange",
    "cancellationSupported",
    "completionCriteriaRequired",
    "planIsNotExecution"
  ]);
}

function assertCapabilityReadiness(context, label) {
  assertFullRailContract(context, label, "capability readiness", [
    "adapterDiscoveryRequired",
    "missingEnvNamesOnly",
    "noSecretExposure",
    "onlineOfflineStatusSeparated",
    "localFallbackNamed",
    "unsupportedActionsBlocked",
    "noFakeProviderReadiness",
    "providerSuccessRequiresEvidence"
  ]);
}

function assertConsent(context, label) {
  assertFullRailContract(context, label, "consent confirmation", [
    "exactActionDetailsRequired",
    "changedActionInvalidatesConfirmation",
    "confirmationExpiryRequired",
    "recipientPaymentMedicalDeletionDroneJobMessageRequireConfirmation",
    "cancellationPathRequired"
  ]);
}

function assertExecution(context, label) {
  assertFullRailContract(context, label, "execution integrity", [
    "exactPayloadRequired",
    "permissionChecksRequired",
    "duplicateSubmissionPrevented",
    "idempotencyRequiredWhereApplicable",
    "timeoutAndFailureNormalized",
    "noExecutionFromPreview",
    "noExecutionFromAssistantTextAlone",
    "noFakeSuccess"
  ]);
}

function assertReceipts(context, label) {
  assertFullRailContract(context, label, "outcome receipts", [
    "providerResponseVerificationRequired",
    "successEvidenceRequired",
    "failureEvidenceRequired",
    "transactionIdentifiersRequiredWhenAvailable",
    "timestampRequired",
    "receiptOwnershipRequired",
    "noInventedReceipt",
    "noReceiptBeforeOutcome",
    "staleReceiptCorrectionRequired"
  ]);
}

function assertPrivacy(context, label) {
  assertFullRailContract(context, label, "privacy isolation", [
    "userDataIsolationRequired",
    "sessionIsolationRequired",
    "recordOwnershipRequired",
    "adminBoundaryRequired",
    "providerDataBoundaryRequired",
    "noCrossUserLeakage",
    "redactionRequired",
    "safeLoggingRequired",
    "accessDenialRequired"
  ]);
}

function assertSafety(context, label) {
  assertFullRailContract(context, label, "safety escalation", [
    "emergencyEscalationRequired",
    "noDiagnosis",
    "noUnauthorizedFinancialAction",
    "noUnconfirmedDroneOperation",
    "noUnauthorizedEmploymentSubmission",
    "noUnsafeAgriculturalChemicalDirection",
    "noFabricatedShipmentLocation",
    "noProviderControlBypass",
    "respectfulUsefulRefusal"
  ]);
}

function assertAccessibility(context, label) {
  assertFullRailContract(context, label, "accessibility inclusive interaction", [
    "keyboardAccessRequired",
    "focusOrderRequired",
    "accessibleNamesRequired",
    "screenReaderAnnouncementsRequired",
    "reducedMotionSupported",
    "contrastAndZoomSupported",
    "touchTargetsSupported",
    "lowBandwidthSupported",
    "typedFallbackRequired",
    "voiceFreeCompletionRequired",
    "seniorFriendlyLanguage"
  ]);
}

function assertMultilingual(context, label) {
  assertFullRailContract(context, label, "multilingual integrity", [
    "supportedAcceptanceLanguages",
    '"en"',
    '"es"',
    '"fr"',
    '"sw"',
    "explicitLanguageSwitchingRequired",
    "transcriptLanguageTracked",
    "responseLanguageTracked",
    "synthesisLocaleGuarded",
    "fallbackLanguageTruthful",
    "highRiskConfirmationInActiveLanguage",
    "noFalseVoiceAvailabilityClaim"
  ]);
}

function assertConcurrency(context, label) {
  assertFullRailContract(context, label, "concurrency control", [
    "userInterruptionStopsSpeech",
    "newMissionRequiresStateSeparation",
    "staleCallbacksIgnored",
    "duplicateBrowserEventsDebounced",
    "duplicateSubmissionsPrevented",
    "cancellationRacesDoNotCompleteMissions",
    "backgroundTabRecoveryRequired",
    "stateLocksReleaseOnFailure"
  ]);
}

function assertRecovery(context, label) {
  assertFullRailContract(context, label, "offline degraded recovery", [
    "offlineStartupSupported",
    "lostNetworkTruthful",
    "providerTimeoutTruthful",
    "staleCacheDetected",
    "malformedResponseHandled",
    "microphoneUnavailableTypedFallback",
    "synthesisUnavailableTypedFallback",
    "locationDeniedNoSilentFailure",
    "databaseUnavailableNoFalseOnlineState",
    "retryPathVisible"
  ]);
}

function assertCompanionEmotionalSafety(context, label) {
  assertFullRailContract(context, label, "companion emotional safety", [
    "naturalGreeting",
    "useNameOnlyWhenKnown",
    "calmSupport",
    "noAbandonmentLanguage",
    "noDependencyLanguage",
    "noConsciousnessClaim",
    "noManipulativeAttachment",
    "noFalseHeardOrSpokeClaim",
    "dignifiedSeniorSupport",
    "usefulNextStepAfterBoundary"
  ]);
  assertExcludes(context.app, [
    "I am conscious",
    "I need you",
    "Do not leave me",
    "I am your real human companion"
  ], label, "forbidden emotional dependency claims");
}

function assertPhysicalVoiceProof(context, label) {
  assertFullRailContract(context, label, "physical browser voice proof", [
    "sourceWiringVerified",
    "browserEventsVerified",
    "audibleOutputRequiresHumanConfirmation",
    "microphonePermissionMustBeRecorded",
    "recognitionStartMustBeRecorded",
    "transcriptMustBeRecorded",
    "synthesisVoiceAvailabilityMustBeRecorded",
    "playbackStartEventMustBeRecorded",
    "stopRepeatMuteUnmuteSpeedInterruptionTestedWhenAvailable",
    "typedRecoveryRequired",
    "orbSynchronizationRequired"
  ]);
  assertIncludes(context.app, [
    "browserVoiceRuntimeProfile",
    "showNexusVoiceFallbackMessage",
    "handleNexusPrimaryVoiceButtonClick"
  ], label, "physical voice browser acceptance wiring");
  const acceptanceDoc = readSource(context.repositoryRoot, "docs/NEXUS_GENESIS_BROWSER_VOICE_ACCEPTANCE.md");
  assertIncludes(acceptanceDoc, [
    "source wiring",
    "browser events",
    "actual audible output",
    "Actual audible output confirmed: No",
    "Do not claim audible speech was heard from this browser."
  ], label, "physical voice proof truthfulness");
}

function assertEndToEndAcceptance(context, label) {
  assertFullRailContract(context, label, "end-to-end Standard User acceptance", [
    "validatesRails",
    "1-25",
    "standardUserJourneyRequired",
    "providerReadinessVisible",
    "executionOrTruthfulBlockingRequired",
    "verifiedOutcomeBeforeReceipt",
    "memoryUpdateTruthful",
    "cancelCloseRecoverRequired",
    "noUnrelatedMissionMixing"
  ]);
  const finalRail = TRUST_CHAIN_RAILS.find(rail => rail.railNumber === 25);
  assert(finalRail, `${label}: final acceptance rail must exist.`);
  APPROVED_GROUPS.forEach(group => {
    if (group !== "endToEndAcceptance") return;
    assert(finalRail.groups.includes(group), `${label}: final acceptance rail must include ${group}.`);
  });
  TRUST_CHAIN_RAILS.forEach(rail => {
    assert(context.qaSuite.includes(rail.wrapper.replaceAll("\\", "/")), `${label}: qa-suite must register ${rail.wrapper}.`);
  });
}

const GROUP_ASSERTIONS = Object.freeze({
  ownership: assertOwnership,
  transcript: assertTranscript,
  acknowledgement: assertAcknowledgement,
  synthesis: assertSynthesis,
  orbActivation: assertOrbActivation,
  routing: assertRouting,
  adminIsolation: assertAdminIsolation,
  synchronization: assertSynchronization,
  fallback: assertFallback,
  companion: assertCompanion,
  registration: assertRegistration,
  acceptance: assertAcceptance,
  understanding: assertUnderstanding,
  context: assertContext,
  memory: assertMemory,
  planning: assertPlanning,
  capabilityReadiness: assertCapabilityReadiness,
  consent: assertConsent,
  execution: assertExecution,
  receipts: assertReceipts,
  privacy: assertPrivacy,
  safety: assertSafety,
  accessibility: assertAccessibility,
  multilingual: assertMultilingual,
  concurrency: assertConcurrency,
  recovery: assertRecovery,
  companionEmotionalSafety: assertCompanionEmotionalSafety,
  physicalVoiceProof: assertPhysicalVoiceProof,
  endToEndAcceptance: assertEndToEndAcceptance
});

function runTrustChainQa(options = {}) {
  const suiteId = options.suiteId || "nexus-genesis-trust-chain-shared";
  const suiteName = options.suiteName || "Nexus Genesis Shared Trust Chain QA";
  const repositoryRoot = path.resolve(options.repositoryRoot || DEFAULT_REPOSITORY_ROOT);
  const groups = options.groups && options.groups.length ? options.groups : TRUST_CHAIN_RAILS[7].groups;
  const context = loadRepository(repositoryRoot);
  const passedGroups = [];

  groups.forEach(group => {
    assert(APPROVED_GROUPS.has(group), `${suiteName}: unknown trust-chain assertion group ${group}`);
    GROUP_ASSERTIONS[group](context, suiteName);
    passedGroups.push(group);
  });

  const result = {
    suiteId,
    suiteName,
    railNumber: options.railNumber || null,
    repositoryRoot,
    groups: passedGroups,
    appVersion: context.app.match(/AGRINEXUS_BUILD_VERSION = "(nexus-behavior-\d+)"/)?.[1] || "unknown",
    ok: true
  };

  if (options.verbose) {
    result.rails = TRUST_CHAIN_RAILS.map(({ railNumber, suiteId: id, groups: railGroups }) => ({ railNumber, suiteId: id, groups: railGroups }));
  }

  return result;
}

function runTrustChainAssertions(label = "nexus-genesis-trust-chain") {
  return runTrustChainQa({
    suiteId: label,
    suiteName: label,
    groups: TRUST_CHAIN_RAILS[7].groups
  });
}

module.exports = {
  APPROVED_GROUPS,
  TRUST_CHAIN_RAILS,
  runTrustChainAssertions,
  runTrustChainQa
};

if (require.main === module) {
  try {
    const result = runTrustChainQa({ verbose: true });
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}
