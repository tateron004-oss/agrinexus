"use strict";

const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const index = read("public/index.html");
const manifest = read("public/manifest.webmanifest");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function between(source, start, end, label) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `${label}: missing start marker ${start}`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `${label}: missing end marker ${end}`);
  return source.slice(startIndex, endIndex);
}

function includesAll(source, tokens, label) {
  for (const token of tokens) {
    assert(source.includes(token), `${label}: missing ${token}`);
  }
}

assert(!app.includes("Nexus is blocked from executing externally."), "raw blocked execution phrase must not appear in the Standard User app runtime");
assert(app.includes("I can help here, but live external actions need a connected service."), "friendly external-action limitation must be present");
assert(index.includes('<meta name="mobile-web-app-capable" content="yes">'), "index should include modern mobile-web-app-capable metadata to avoid browser warning");
assert(!index.includes('name="apple-mobile-web-app-capable"'), "index should avoid deprecated apple-mobile-web-app-capable warning");
assert(index.includes("/manifest.webmanifest?v=nexus-behavior-428"), "index should version the manifest link to avoid stale manifest warnings");
assert(manifest.includes('"enctype": "application/x-www-form-urlencoded"'), "manifest share target should specify enctype to avoid browser warning");

includesAll(app, [
  "function isNexusVoiceTroubleshootingCommand",
  "function nexusVoiceTroubleshootingState",
  "function nexusVoiceTroubleshootingResponse",
  "function handleNexusVoiceTroubleshootingCommand",
  "Yes, I can hear you through this conversation. Voice listening is not active right now.",
  "I can respond on screen, but I cannot speak aloud in this browser right now.",
  "Voice can start from the Talk button.",
  "Microphone permission required",
  "Speech recognition unavailable",
  "Speech output unavailable"
], "voice troubleshooting runtime");
assert(!app.includes("Typed conversation available"), "Genesis runtime must not advertise general typed chat fallback");
assert(app.includes("Workflow forms available after Nexus opens them"), "voice status should describe workflow-scoped forms only");

const troubleshootingSource = between(app, "function nexusVoiceTroubleshootingResponse", "function handleNexusVoiceTroubleshootingCommand", "voice troubleshooting response");
includesAll(troubleshootingSource, [
  "i can't hear you",
  "i can t hear you",
  "still can t hear you",
  "why aren't you speaking",
  "why aren t you speaking",
  "turn on voice",
  "nexus talk to me",
  "is my microphone working",
  "Press Talk"
], "voice troubleshooting response");
assert(!troubleshootingSource.includes("Plan created"), "voice troubleshooting must never answer with Plan created");
assert(!troubleshootingSource.includes("continue by typing"), "voice troubleshooting must not advertise general typed fallback");

const activationSource = between(app, "async function activateNexusGenesisExperience", "function resetNexusGenesisHomeViewport", "Genesis presence activation");
includesAll(activationSource, [
  "renderUserWorkspace()",
  "nexusGenesisExperienceActivated = true",
  "nexusTrueExperienceSessionStarted = true",
  "Nexus is ready."
], "Genesis presence activation");
assert(!activationSource.includes("startNexusOsMission("), "voice activation must not create a mission");
assert(!activationSource.includes("startVoiceListening("), "workspace activation must not request microphone permission by itself");

const minimalConversationSource = between(app, "function renderNexusMinimalConversationExperience", "function renderNexusCommandCenterHero", "minimal companion surface");
assert(
  minimalConversationSource.includes("return renderNexusAudioCompanionExperience();"),
  "minimal companion route must redirect to the audio-only companion surface"
);

const orbSource = between(app, "function renderNexusTrueCoreOrb", "function handleNexusPrimaryVoiceButtonClick", "Genesis orb renderer");
includesAll(orbSource, [
  "data-nexus-genesis-orb-presence=\"true\"",
  "data-nexus-genesis-home-orb=\"true\"",
  "role=\"img\"",
  "Nexus voice companion visual status."
], "Genesis accessible orb renderer");
assert(!orbSource.includes("role=\"button\""), "Genesis orb must not expose button semantics");
assert(!orbSource.includes("tabindex=\"0\""), "Genesis orb must not be focusable");
assert(!orbSource.includes("<button"), "Genesis orb renderer must not use a separate button element");
assert(!orbSource.includes("data-nexus-genesis-orb-entry"), "Genesis orb renderer must not expose activation entry metadata");

const binding = between(app, "function bindStatic", "async function boot", "static binding");
assert(!binding.includes("handleNexusGenesisOrbActivation"), "static binding must not attach orb click/keyboard activation");

const userWorkspaceSource = between(app, "function renderUserWorkspace", "function renderUserAccessibilityPanel", "Standard User workspace render");
includesAll(userWorkspaceSource, [
  "renderNexusTrueHome",
  "renderNexusAudioCompanionExperience",
  "renderNexusAgenticMissionWorkspace",
  "renderNexusModeLauncher",
  "renderNexusPremiumActivityReceiptsPanel",
  "renderNexusPersistentMemoryPanel"
], "full Standard User mission workspace remains available after voice opens workflows");

const voiceControlSource = between(app, "async function handleNexusOsVoiceControlAction", "function userIsActivelySpeaking", "voice controls");
includesAll(voiceControlSource, [
  "normalized === \"enable-voice\"",
  "normalized === \"toggle-hands-free\"",
  "normalized === \"stop-listening\"",
  "explicit-enable-voice",
  "explicit-hands-free-toggle",
  "voiceRecognition.stop",
  "General typed commands are not available on Genesis home.",
  "renderUserWorkspace()"
], "voice controls");
assert(!voiceControlSource.includes("Stopped listening. You can type your request"), "stop listening must not advertise general typed fallback");
assert(!app.includes('localStorage.setItem("agrinexusVoiceFirst", "on")'), "hands-free voice mode must not persist as on across refresh");

const audioCompanion = between(app, "function renderNexusAudioCompanionExperience", "function renderNexusMinimalConversationExperience", "audio companion");
includesAll(audioCompanion, [
  "data-nexus-audio-companion=\"true\"",
  "data-genesis-companion-state=\"audio-only\"",
  "renderNexusGenesisHomeVoiceGate()",
  "data-read-only-transcript=\"true\""
], "audio-only companion");
assert(!audioCompanion.includes("renderNexusTrueCommandComposer()"), "audio companion must not mount a general composer");

assert(
  packageJson.scripts["qa:nexus-companion-voice-activation-flow"] === "node scripts/nexus-companion-voice-activation-flow-qa.js",
  "package alias must run companion voice activation QA"
);
assert(
  qaSuite.includes("scripts/nexus-companion-voice-activation-flow-qa.js"),
  "qa-suite must include companion voice activation QA"
);

console.log("Nexus companion voice activation flow QA passed.");
