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
  "role=\"button\"",
  "role=\"img\"",
  "Nexus visual status indicator. Use the voice controls or type below to begin.",
  "data-nexus-core-status-text"
], "accessible wake orb");
assert(!orb.includes("<button"), "orb must not render a separate button element");
assert(!orb.includes("data-nexus-genesis-orb-entry"), "orb must not expose activation metadata");
assert(!orb.includes("onclick"), "orb must not carry inline click behavior");

const binding = between("function bindStatic", "async function boot", "static bindings");
includesAll(binding, [
  "document.addEventListener(\"click\", handleNexusGenesisOrbActivation, true);",
  "document.addEventListener(\"keydown\", handleNexusGenesisOrbActivation, true);"
], "orb wake bindings");

const mode = between("function nexusTrueExperienceMode", "function isNexusTrueExperienceReturnHomeCommand", "experience mode");
includesAll(mode, [
  "if (nexusTrueExperienceHasActiveWorkflow()) return \"mission\";",
  "if (nexusTrueExperienceHasCurrentConversation()) return \"conversation\";",
  "return \"home\";"
], "orb-first startup");
assert(!mode.includes("currentNexusOsMission()) return \"mission\""), "conversation startup must not depend on mission creation");

const conversation = between("function renderNexusOsConversationTurns", "function renderNexusOsUnifiedConversationSurface", "conversation surface");
includesAll(conversation, [
  "Hello. I'm Nexus. You can talk to me or type below. Tell me what you need help with, and we'll work through it together.",
  "data-nexus-os-conversation-empty=\"true\""
], "natural startup greeting");
assert(!conversation.includes("Tell me your goal. I will ask for missing details"), "startup greeting must not lead with workflow planning");

const hero = between("function renderNexusCommandCenterHeroLegacy", "function nexusActiveSidebarId", "unified workspace hero");
includesAll(hero, [
  "Hello. I'm Nexus.",
  "You can talk to me or type below.",
  "renderNexusVoiceFirstPresenceControls()",
  "renderNexusOsUnifiedConversationSurface()",
  "renderNexusIntentDrivenWorkflowStatus()"
], "unified conversational workspace");
assert(!hero.includes("Start Mission"), "startup controls must not force mission language");

const voiceControls = between("function renderNexusVoiceFirstPresenceControls", "function renderNexusTrueCommandComposer", "voice-first controls");
includesAll(voiceControls, [
  "Enable voice",
  "Your browser needs permission before I can hear you.",
  "Hands-free Nexus",
  "Stop listening",
  "Stop speaking",
  "Repeat",
  "data-nexus-hands-free-active",
  "data-nexus-microphone-permission"
], "voice permission controls");

const voiceActions = between("async function handleNexusOsVoiceControlAction", "function userIsActivelySpeaking", "voice control actions");
includesAll(voiceActions, [
  "normalized === \"enable-voice\"",
  "normalized === \"toggle-hands-free\"",
  "explicit-enable-voice",
  "explicit-hands-free-toggle",
  "Microphone permission is blocked right now.",
  "Hands-free Nexus is on while this page is open.",
  "Stopped listening. You can type your request or press Talk again."
], "voice action handling");
assert(!app.includes('localStorage.setItem("agrinexusVoiceFirst", "on")'), "hands-free mode must not persist as enabled across refresh");

const submit = between("async function handleNexusPresenceCommandSendSubmit", "function handleNexusTrueCommandComposerKeydown", "typed submit");
assert(submit.includes("handleNexusVoiceTroubleshootingCommand(command"), "voice troubleshooting must be routed before planning/provider workflows");
assert(submit.includes("routeNexusIntentDrivenWorkflowCommand(command"), "conversation can still become a workflow inside the same workspace");
assert(!submit.includes("Plan created"), "typed conversational intake must not directly return Plan created");

const troubleshooting = between("function nexusVoiceTroubleshootingResponse", "function handleNexusVoiceTroubleshootingCommand", "voice troubleshooting");
assert(!troubleshooting.includes("Plan created"), "voice troubleshooting must never return Plan created");
includesAll(troubleshooting, [
  "can you hear me",
  "still can t hear you",
  "Yes, I can hear you through this conversation.",
  "continue by typing"
], "voice troubleshooting direct responses");

const css = between("[data-nexus-os-core-orb] {", "@media (prefers-reduced-motion: reduce)", "orb css");
includesAll(css, [
  "pointer-events: none",
  "user-select: none"
], "orb inner-piece safety css");

assert(pkg.scripts["qa:nexus-genesis-voice-first-conversational-presence"] === "node scripts/nexus-genesis-voice-first-conversational-presence-qa.js", "package alias must exist");
assert(qaSuite.includes("scripts/nexus-genesis-voice-first-conversational-presence-qa.js"), "qa-suite must include focused presence QA");

console.log("Nexus Genesis voice-first conversational presence QA passed.");
