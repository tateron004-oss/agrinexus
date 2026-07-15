"use strict";

const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const index = read("public/index.html");
const styles = read("public/styles.css");
const server = read("server.js");
const sw = read("public/sw.js");
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
  for (const token of tokens) assert(source.includes(token), `${label}: missing ${token}`);
}

function stylesBetweenHomeOrb() {
  return between(
    styles,
    "body.user-mode .nexus-genesis-orb-only-home .nexus-true-orb-stage {",
    "body.user-mode .nexus-genesis-orb-only-home .nexus-true-orb-stage:focus-visible",
    "home orb source CSS"
  );
}

const orb = between(app, "function renderNexusTrueCoreOrb", "function handleNexusPrimaryVoiceButtonClick", "orb renderer");
includesAll(orb, [
  "data-nexus-genesis-orb-presence=\"true\"",
  "data-nexus-genesis-home-orb=\"true\"",
  "role=\"img\"",
  "Nexus voice companion visual status."
], "non-interactive orb");
assert(!orb.includes("role=\"button\""), "orb must not expose button semantics");
assert(!orb.includes("tabindex=\"0\""), "orb must not be keyboard focusable");
assert(!orb.includes("Wake Nexus"), "orb must not read as launcher");
assert(!orb.includes("onclick"), "orb must not carry inline click behavior");
assert(!stylesBetweenHomeOrb().includes("cursor: pointer"), "source CSS must not give home orb a pointer cursor");
assert(stylesBetweenHomeOrb().includes("cursor: default"), "source CSS must give home orb a default cursor");
assert(stylesBetweenHomeOrb().includes("pointer-events: none"), "source CSS must disable pointer events on the home orb stage");
assert(!app.includes("function handleNexusGenesisOrbActivation"), "orb activation handler must be removed");
assert(!app.includes("handleNexusGenesisOrbActivation"), "orb activation references must be removed");
assert(!app.includes("genesis-orb-activation"), "orb click activation source must be absent");
assert(!app.includes("keyboard-orb"), "orb keyboard activation source must be absent");
assert(!app.includes("Press Enter or Space"), "orb keyboard activation instruction must be absent");

const home = between(app, "function renderNexusTrueHome", "function renderNexusAudioCompanionExperience", "Genesis home");
includesAll(home, [
  "data-nexus-true-home=\"true\"",
  "renderNexusGenesisHomeVoiceGate()",
  "Nexus Genesis home is audio-only.",
  "non-interactive voice companion presence"
], "audio-only home");
assert(!home.includes("renderNexusTrueCommandComposer()"), "Genesis home must not mount a general command composer");
assert(!home.includes("Ask Nexus anything"), "Genesis home must not show the Ask Nexus typed box");
assert(!home.includes("Activate the Nexus orb"), "Genesis home must not instruct orb activation");

const voiceGate = between(app, "function renderNexusGenesisHomeVoiceGate", "function renderNexusTrueHome", "Genesis voice gate");
includesAll(voiceGate, [
  "data-nexus-genesis-audio-gate=\"true\"",
  "data-nexus-genesis-mic-permission-control=\"true\"",
  "data-nexus-os-voice-control=\"enable-voice\"",
  "Allow microphone"
], "separate microphone permission gate");

const audioCompanion = between(app, "function renderNexusAudioCompanionExperience", "function renderNexusMinimalConversationExperience", "audio companion");
includesAll(audioCompanion, [
  "data-nexus-audio-companion=\"true\"",
  "data-genesis-companion-state=\"audio-only\"",
  "renderNexusTrueCoreOrb({ compact: true })",
  "renderNexusGenesisHomeVoiceGate()",
  "data-read-only-transcript=\"true\""
], "audio companion");
assert(!audioCompanion.includes("renderNexusTrueCommandComposer()"), "audio companion must not mount a general command composer");

const minimal = between(app, "function renderNexusMinimalConversationExperience", "function renderNexusCommandCenterHero", "minimal route");
assert(minimal.includes("return renderNexusAudioCompanionExperience();"), "broken minimal companion route must redirect to audio companion");

const workspace = between(app, "function renderUserWorkspace", "function renderUserAccessibilityPanel", "workspace");
includesAll(workspace, [
  "trueExperienceMode === \"home\"",
  "renderNexusTrueHome",
  "trueExperienceMode === \"conversation\"",
  "renderNexusAudioCompanionExperience",
  "renderNexusCommandCenterHero",
  "maybeStartGenesisRecognitionAfterGrantedPermission(\"render-user-workspace\")"
], "workspace routing");

const grantedAutoStart = between(app, "async function maybeStartGenesisRecognitionAfterGrantedPermission", "function nexusVoiceAudioDebugEnabled", "granted permission auto-start");
includesAll(grantedAutoStart, [
  "normalizeNexusMicrophonePermissionState(await chromeMicrophonePermissionState())",
  "runtimePermission === \"browser-managed\"",
  "permission === \"granted\"",
  "permission-not-authorized",
  "voiceStopRequested",
  "voiceConversationPaused",
  "voiceSpeaking",
  "permissions-api-granted",
  "browser-managed-state-requires-get-user-media-proof",
  "genesis-auto-start-triggered",
  "genesis-home-permission-granted-auto-start"
], "granted permission recognition auto-start");
assert(!grantedAutoStart.includes("granted-or-browser-managed"), "granted permission auto-start must not use legacy display labels for control flow");
assert(!grantedAutoStart.includes("data-nexus-genesis-home-orb"), "granted permission auto-start must not use the orb");

const bindStatic = between(app, "function bindStatic", "async function boot", "static bindings");
assert(!bindStatic.includes("handleNexusGenesisOrbActivation"), "static bindings must not attach orb activation");

const finalVoice = between(app, "function processFinalVoiceCommand", "function scheduleFinalVoiceCommand", "final voice processing");
includesAll(finalVoice, [
  "nexusGenesisExperienceActivated = true",
  "nexusTrueExperienceSessionStarted = true",
  "source: \"voice-final-transcript\"",
  "handleVoiceCommand"
], "voice transcript opens runtime path");

const typedFallback = between(app, "async function handleNexusOsVoiceControlAction", "function userIsActivelySpeaking", "voice control actions");
includesAll(typedFallback, [
  "normalized === \"typed-fallback\"",
  "nexusTrueExperienceHasActiveWorkflow()",
  "workflow-structured-entry",
  "General typed commands are not available on Genesis home."
], "workflow-scoped typing");
assert(!typedFallback.includes("Stopped listening. You can type your request"), "voice controls must not offer a general typed fallback");

const startVoice = app.slice(app.indexOf("async function startVoiceListening"), app.indexOf("async function sendModuleNotification"));
assert(startVoice.includes("async function startVoiceListening"), "voice startup source exists");
assert(!startVoice.includes("type your request"), "voice startup fallback must not advertise general typed chat");
assert(!startVoice.includes("typed request instead"), "voice startup fallback must not advertise general typed chat");

const orbCss = between(app, "[data-nexus-os-core-orb] {", "[data-nexus-os-core-orb].nexus-core-state-idle", "orb css");
includesAll(orbCss, [
  "[data-nexus-genesis-home-orb=\"true\"]",
  "pointer-events: none !important",
  "cursor: default !important"
], "home orb non-interactive cursor override");

includesAll(index, ["/app.js?v=nexus-behavior-433", "/styles.css?v=nexus-behavior-433"], "index cache");
includesAll(app, ["nexus-behavior-433", "agrinexus-pwa-v378"], "app cache");
includesAll(server, ["nexus-behavior-433", "agrinexus-pwa-v378"], "server cache");
includesAll(sw, ["nexus-behavior-433", "agrinexus-pwa-v378"], "service worker cache");

assert(
  packageJson.scripts["qa:nexus-genesis-voice-native-front-door"] === "node scripts/nexus-genesis-voice-native-front-door-qa.js",
  "package alias must run voice-native front-door QA"
);
assert(qaSuite.includes("scripts/nexus-genesis-voice-native-front-door-qa.js"), "qa-suite must include voice-native front-door QA");

console.log(JSON.stringify({
  ok: true,
  suite: "nexus-genesis-voice-native-front-door",
  verifies: [
    "Genesis orb is non-interactive visual presence",
    "Genesis home is audio-only",
    "microphone permission control is separate from the orb",
    "voice transcripts open the runtime path",
    "structured typing is workflow-scoped only"
  ]
}, null, 2));
