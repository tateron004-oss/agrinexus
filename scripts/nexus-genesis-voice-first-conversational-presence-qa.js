"use strict";

const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function between(start, end, label) {
  const startIndex = app.indexOf(start);
  assert(startIndex >= 0, `${label}: missing start marker ${start}`);
  const endIndex = app.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `${label}: missing end marker ${end}`);
  return app.slice(startIndex, endIndex);
}

function includesAll(source, tokens, label) {
  for (const token of tokens) {
    assert(source.includes(token), `${label}: missing ${token}`);
  }
}

const orb = between("function renderNexusTrueCoreOrb", "function handleNexusPrimaryVoiceButtonClick", "orb renderer");
includesAll(orb, [
  "data-nexus-genesis-orb-presence=\"true\"",
  "data-nexus-genesis-home-orb=\"true\"",
  "role=\"img\"",
  "Nexus voice companion visual status.",
  "data-nexus-core-status-text"
], "accessible status orb");
assert(!orb.includes("role=\"button\""), "orb must not expose button semantics");
assert(!orb.includes("tabindex=\"0\""), "orb must not be keyboard focusable");
assert(!orb.includes("<button"), "orb must not render a separate button element");
assert(!orb.includes("data-nexus-genesis-orb-entry"), "orb must not expose activation metadata");
assert(!orb.includes("onclick"), "orb must not carry inline click behavior");

const binding = between("function bindStatic", "async function boot", "static bindings");
assert(!binding.includes("handleNexusGenesisOrbActivation"), "orb wake bindings must be removed");

const mode = between("function nexusTrueExperienceMode", "function isNexusTrueExperienceReturnHomeCommand", "experience mode");
includesAll(mode, [
  "if (nexusTrueExperienceHasActiveWorkflow()) return \"mission\";",
  "if (nexusTrueExperienceHasCurrentConversation()) return \"conversation\";",
  "return \"home\";"
], "voice-native startup");
assert(!mode.includes("currentNexusOsMission()) return \"mission\""), "conversation startup must not depend on mission creation");

const home = between("function renderNexusTrueHome", "function renderNexusAudioCompanionExperience", "Genesis home");
includesAll(home, [
  "data-nexus-true-home=\"true\"",
  "renderNexusGenesisHomeVoiceGate()",
  "Nexus Genesis home is audio-only."
], "audio-first home");
assert(!home.includes("renderNexusTrueCommandComposer()"), "Genesis home must not mount a general typed composer");
assert(!home.includes("Ask Nexus anything"), "Genesis home must not show a general command box");

const voiceGate = between("function renderNexusGenesisHomeVoiceGate", "function renderNexusTrueHome", "voice gate");
includesAll(voiceGate, [
  "data-nexus-genesis-audio-gate=\"true\"",
  "data-nexus-genesis-voice-runtime=\"true\"",
  "NEXUS_GENESIS_VOICE_RUNTIME_VERSION"
], "nonvisual automatic voice runtime marker");
assert(!voiceGate.includes("data-nexus-genesis-mic-permission-control"), "Genesis home must not render a microphone permission control");
assert(!voiceGate.includes("Allow microphone"), "Genesis home must not render app permission copy");

const audioCompanion = between("function renderNexusAudioCompanionExperience", "function renderNexusMinimalConversationExperience", "audio companion");
includesAll(audioCompanion, [
  "data-nexus-audio-companion=\"true\"",
  "data-genesis-companion-state=\"audio-only\"",
  "renderNexusGenesisHomeVoiceGate()",
  "data-read-only-transcript=\"true\""
], "audio companion");
assert(!audioCompanion.includes("renderNexusTrueCommandComposer()"), "audio companion must not mount a general typed composer");

const workspace = between("function renderUserWorkspace", "function renderUserAccessibilityPanel", "workspace");
includesAll(workspace, [
  "renderNexusTrueHome",
  "renderNexusAudioCompanionExperience",
  "renderNexusCommandCenterHero",
  "renderNexusAgenticMissionWorkspace"
], "workspace mode routing");

const voiceControls = between("function renderNexusVoiceFirstPresenceControls", "function renderNexusTrueCommandComposer", "voice-first controls");
includesAll(voiceControls, [
  "Enable voice",
  "Enable microphone access to start the Realtime conversation. Provider errors will not remove this control.",
  "Microphone permission is blocked. Change microphone permission in your browser",
  "Hands-free Nexus",
  "Stop listening",
  "Stop speaking",
  "Repeat",
  "data-nexus-hands-free-active",
  "data-nexus-microphone-permission"
], "voice permission controls");

const autoStart = between("async function maybeStartGenesisRecognitionAfterGrantedPermission", "function nexusVoiceAudioDebugEnabled", "automatic startup");
includesAll(autoStart, [
  "nexusGenesisVoiceSessionActive = true",
  "voiceFirstMode = true",
  "voiceAutoRestart = true",
  "nexusMicrophonePermissionCanAttemptStart(permission)",
  "startVoiceListening({ source: \"genesis-home-permission-granted-auto-start\" })"
], "automatic Genesis startup");

const voiceActions = between("async function handleNexusOsVoiceControlAction", "function userIsActivelySpeaking", "voice control actions");
includesAll(voiceActions, [
  "normalized === \"enable-voice\"",
  "normalized === \"toggle-hands-free\"",
  "explicit-enable-voice",
  "explicit-hands-free-toggle",
  "Microphone permission is blocked right now.",
  "Hands-free Nexus is on while this page is open.",
  "General typed commands are not available on Genesis home."
], "voice action handling");
assert(!voiceActions.includes("Stopped listening. You can type your request"), "stop listening must not advertise typed fallback");
assert(!app.includes('localStorage.setItem("agrinexusVoiceFirst", "on")'), "hands-free mode must not persist as enabled across refresh");

const finalVoice = between("function processFinalVoiceCommand", "function scheduleFinalVoiceCommand", "voice final transcript");
includesAll(finalVoice, [
  "nexusGenesisExperienceActivated = true",
  "nexusTrueExperienceSessionStarted = true",
  "source: \"voice-final-transcript\""
], "voice transcript activation");

const troubleshooting = between("function nexusVoiceTroubleshootingResponse", "function handleNexusVoiceTroubleshootingCommand", "voice troubleshooting");
assert(!troubleshooting.includes("Plan created"), "voice troubleshooting must never return Plan created");
includesAll(troubleshooting, [
  "can you hear me",
  "still can t hear you",
  "I received this as on-screen text. Microphone recognition is not active right now,"
], "voice troubleshooting direct responses");
assert(!troubleshooting.includes("continue by typing"), "voice troubleshooting must not advertise general typed fallback");

const css = between("[data-nexus-os-core-orb] {", "@media (prefers-reduced-motion: reduce)", "orb css");
includesAll(css, [
  "pointer-events: none",
  "user-select: none",
  "[data-nexus-genesis-home-orb=\"true\"]",
  "cursor: default !important"
], "orb inner-piece safety css");

assert(pkg.scripts["qa:nexus-genesis-voice-first-conversational-presence"] === "node scripts/nexus-genesis-voice-first-conversational-presence-qa.js", "package alias must exist");
assert(qaSuite.includes("scripts/nexus-genesis-voice-first-conversational-presence-qa.js"), "qa-suite must include focused presence QA");

console.log("Nexus Genesis voice-first conversational presence QA passed.");
