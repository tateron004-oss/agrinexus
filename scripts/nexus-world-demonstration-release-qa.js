"use strict";

const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const index = read("public/index.html");
const sw = read("public/sw.js");
const server = read("server.js");
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
  tokens.forEach(token => {
    assert(source.includes(token), `${label}: missing ${token}`);
  });
}

const conversationState = between(app, "function nexusTrueExperienceHasCurrentConversation", "function isNexusTrueExperienceReturnHomeCommand", "true experience state");
assert(!conversationState.includes("document.body?.classList?.contains?.(\"user-mode\")"), "user-mode alone must not count as active conversation");
includesAll(conversationState, [
  "if (nexusGenesisExperienceActivated || nexusTrueExperienceSessionStarted) return true;",
  "return \"home\";"
], "true experience state");

const workspaceRender = between(app, "function renderUserWorkspace", "function renderUserAccessibilityPanel", "workspace render");
includesAll(workspaceRender, [
  "trueExperienceMode === \"home\"",
  "renderNexusTrueHome",
  "trueExperienceMode === \"conversation\"",
  "renderNexusAudioCompanionExperience",
  "renderNexusCommandCenterHero",
  "renderNexusAgenticMissionWorkspace"
], "workspace render");

const orbMarkup = between(app, "function renderNexusTrueCoreOrb", "function handleNexusPrimaryVoiceButtonClick", "orb markup");
includesAll(orbMarkup, [
  "data-nexus-genesis-home-orb=\"true\"",
  "role=\"img\"",
  "Nexus voice companion visual status."
], "orb markup");
assert(!orbMarkup.includes('role="button"'), "orb markup must not expose button semantics");
assert(!orbMarkup.includes('tabindex="0"'), "orb markup must not be keyboard focusable");
assert(!orbMarkup.includes("Wake Nexus"), "orb markup must not expose launcher copy");

const homeAndAudio = between(app, "function renderNexusTrueHome", "function renderNexusMinimalConversationExperience", "home and audio companion");
includesAll(homeAndAudio, [
  "renderNexusGenesisHomeVoiceGate()",
  "Nexus Genesis home is audio-only.",
  "non-interactive voice companion presence",
  "data-nexus-audio-companion=\"true\"",
  "data-read-only-transcript=\"true\""
], "voice-native home");
assert(!homeAndAudio.includes("Activate the Nexus orb"), "Genesis home must not instruct users to activate the orb");
assert(!homeAndAudio.includes("renderNexusTrueCommandComposer()"), "Genesis home/audio companion must not mount a general composer");

const voiceGate = between(app, "function renderNexusGenesisHomeVoiceGate", "function renderNexusTrueHome", "voice gate");
includesAll(voiceGate, [
  "data-nexus-genesis-audio-gate=\"true\"",
  "data-nexus-genesis-mic-permission-control=\"true\"",
  "data-nexus-os-voice-control=\"enable-voice\"",
  "Allow microphone"
], "separate microphone permission gate");

const staticBindings = between(app, "function bindStatic", "async function boot", "static bindings");
assert(!staticBindings.includes("handleNexusGenesisOrbActivation"), "orb click/keyboard activation must not be globally bound");
assert(!app.includes("function handleNexusGenesisOrbActivation"), "orb activation handler must be removed");

const voiceTroubleshooting = between(app, "function nexusVoiceTroubleshootingResponse", "function saveNexusDailyCompanionState", "voice status routing");
includesAll(voiceTroubleshooting, [
  "I received this as on-screen text. Microphone recognition is not active right now,",
  "I received your message. If you cannot hear me",
  "setVoiceResponse(response, false"
], "voice status routing");
assert(!voiceTroubleshooting.includes("Plan created."), "voice status routing must not create plan copy");

const finalVoice = between(app, "function processFinalVoiceCommand", "function scheduleFinalVoiceCommand", "final voice processing");
includesAll(finalVoice, [
  "nexusGenesisExperienceActivated = true",
  "nexusTrueExperienceSessionStarted = true",
  "source: \"voice-final-transcript\""
], "final voice processing");

const orbCss = between(app, "[data-nexus-os-core-orb] {", "[data-nexus-os-core-orb].nexus-core-state-idle", "orb css");
includesAll(orbCss, [
  "[data-nexus-genesis-home-orb=\"true\"]",
  "pointer-events: none !important",
  "cursor: default !important"
], "home orb non-interactive cursor override");

const submitRouting = between(app, "function routeNexusCommandCenterCommunicationSubmit", "function isNexusPersistentOperationsCommand", "submit routing");
assert(submitRouting.indexOf("handleNexusVoiceTroubleshootingCommand(command, { source })") < submitRouting.indexOf("advanceNexusOsMissionForCommand(command, { source });"), "voice status commands must run before mission planning");

includesAll(index, [
  "/manifest.webmanifest?v=nexus-behavior-432",
  "/styles.css?v=nexus-behavior-432",
  "/app.js?v=nexus-behavior-432"
], "index cache bust");
includesAll(app, [
  "const AGRINEXUS_BUILD_VERSION = \"nexus-behavior-432\";",
  "const AGRINEXUS_PWA_CACHE_VERSION = \"agrinexus-pwa-v377\";"
], "app cache bust");
includesAll(sw, [
  "const CACHE_NAME = \"agrinexus-pwa-v377\";",
  "const BUILD_VERSION = \"nexus-behavior-432\";"
], "service worker cache bust");
includesAll(server, [
  "const AGRINEXUS_WEB_BUILD_VERSION = \"nexus-behavior-432\";",
  "const AGRINEXUS_PWA_CACHE_VERSION = \"agrinexus-pwa-v377\";"
], "server cache bust");

assert.strictEqual(
  packageJson.scripts["qa:nexus-world-demonstration-release"],
  "node scripts/nexus-world-demonstration-release-qa.js",
  "package alias must point to focused world demonstration release QA"
);
assert(qaSuite.includes("\"scripts/nexus-world-demonstration-release-qa.js\""), "qa-suite must include world demonstration release QA");

console.log(JSON.stringify({
  ok: true,
  suite: "nexus-world-demonstration-release",
  verifies: [
    "idle Standard User path is audio-only",
    "home orb is non-interactive visual presence",
    "separate microphone permission control owns guarded voice startup",
    "voice-status prompts run before mission planning",
    "production cache build is bumped"
  ]
}, null, 2));
