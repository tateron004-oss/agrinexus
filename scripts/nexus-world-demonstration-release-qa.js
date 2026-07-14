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
  "renderNexusCommandCenterHero",
  "renderNexusAgenticMissionWorkspace"
], "workspace render");

const orbMarkup = between(app, "function renderNexusTrueCoreOrb", "function handleNexusPrimaryVoiceButtonClick", "orb markup");
includesAll(orbMarkup, [
  "data-nexus-genesis-home-orb=\"true\"",
  "role=\"button\"",
  "tabindex=\"0\"",
  "Wake Nexus"
], "orb markup");

const orbHandler = between(app, "function handleNexusGenesisOrbActivation", "function nexusTrueExperienceHasActiveWorkflow", "orb activation");
includesAll(orbHandler, [
  "[data-nexus-genesis-home-orb='true']",
  "activateNexusGenesisExperience",
  "handleNexusOsVoiceControlAction(\"enable-voice\"",
  "event.type === \"keydown\"",
  "\"Enter\", \" \""
], "orb activation");

const staticBindings = between(app, "function bindStatic", "async function boot", "static bindings");
assert(staticBindings.indexOf("document.addEventListener(\"click\", handleNexusGenesisOrbActivation, true);") < staticBindings.indexOf("document.addEventListener(\"click\", handleNexusStandardUserHomeClick, true);"), "orb click handler must run before legacy Standard User click handling");
assert(staticBindings.includes("document.addEventListener(\"keydown\", handleNexusGenesisOrbActivation, true);"), "orb keyboard handler must be globally bound");

const voiceTroubleshooting = between(app, "function nexusVoiceTroubleshootingResponse", "function saveNexusDailyCompanionState", "voice status routing");
includesAll(voiceTroubleshooting, [
  "Yes, I can hear you through this conversation.",
  "I received your message. If you cannot hear me",
  "setVoiceResponse(response, false"
], "voice status routing");
assert(!voiceTroubleshooting.includes("Plan created."), "voice status routing must not create plan copy");

const orbCss = between(app, "[data-nexus-os-core-orb] {", "[data-nexus-os-core-orb].nexus-core-state-idle", "orb css");
includesAll(orbCss, [
  "[data-nexus-genesis-home-orb=\"true\"]",
  "pointer-events: auto",
  "cursor: pointer"
], "home orb pointer css");

const submitRouting = between(app, "function routeNexusCommandCenterCommunicationSubmit", "function isNexusPersistentOperationsCommand", "submit routing");
assert(submitRouting.indexOf("handleNexusVoiceTroubleshootingCommand(command, { source })") < submitRouting.indexOf("advanceNexusOsMissionForCommand(command, { source });"), "voice status commands must run before mission planning");

includesAll(index, [
  "/manifest.webmanifest?v=nexus-behavior-427",
  "/styles.css?v=nexus-behavior-427",
  "/app.js?v=nexus-behavior-427"
], "index cache bust");
includesAll(app, [
  "const AGRINEXUS_BUILD_VERSION = \"nexus-behavior-427\";",
  "const AGRINEXUS_PWA_CACHE_VERSION = \"agrinexus-pwa-v372\";"
], "app cache bust");
includesAll(sw, [
  "const CACHE_NAME = \"agrinexus-pwa-v372\";",
  "const BUILD_VERSION = \"nexus-behavior-427\";"
], "service worker cache bust");
includesAll(server, [
  "const AGRINEXUS_WEB_BUILD_VERSION = \"nexus-behavior-427\";",
  "const AGRINEXUS_PWA_CACHE_VERSION = \"agrinexus-pwa-v372\";"
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
    "idle Standard User path is orb-only",
    "home orb is the single accessible activation entry",
    "orb activation reveals conversation and starts guarded voice",
    "voice-status prompts run before mission planning",
    "production cache build is bumped"
  ]
}, null, 2));
