"use strict";

const { assert, assertMinimalConversation, assertOrbPrimaryInteraction } = require("./nexus-true-experience-qa-common");
const fs = require("fs");
const path = require("path");

const app = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

function between(start, end, label) {
  const startIndex = app.indexOf(start);
  assert(startIndex >= 0, `${label}: missing start marker ${start}`);
  const endIndex = app.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `${label}: missing end marker ${end}`);
  return app.slice(startIndex, endIndex);
}

assertOrbPrimaryInteraction();
assertMinimalConversation();

const orb = between("function renderNexusTrueCoreOrb", "function handleNexusPrimaryVoiceButtonClick", "orb renderer");
assert(orb.includes('data-nexus-genesis-home-orb="true"'), "home orb marker exists for visual presence");
assert(orb.includes('role="img"'), "home orb is an image/status presence");
assert(!orb.includes('role="button"'), "orb is not a button");
assert(!orb.includes('tabindex="0"'), "orb is not keyboard focusable");
assert(!orb.includes("Wake Nexus"), "orb does not use launcher wording");
assert(orb.includes("Nexus voice companion visual status."), "orb status wording is presence-only");

const bindStatic = between("function bindStatic", "async function boot", "static bindings");
assert(!bindStatic.includes("handleNexusGenesisOrbActivation"), "static bindings do not attach orb activation");
assert(!app.includes("function handleNexusGenesisOrbActivation"), "orb activation handler is removed");
assert(!app.includes("keyboard-orb"), "keyboard orb activation source is absent");
assert(!app.includes("genesis-orb-activation"), "orb activation source is absent");

const finalVoice = between("function processFinalVoiceCommand", "function scheduleFinalVoiceCommand", "final voice command processing");
assert(finalVoice.includes("nexusGenesisExperienceActivated = true"), "final voice transcript activates Genesis");
assert(finalVoice.includes("nexusTrueExperienceSessionStarted = true"), "final voice transcript starts the session");
assert(finalVoice.includes("source: \"voice-final-transcript\""), "final voice transcript records the source");

console.log("Nexus orb conversation activation QA passed.");
