const { assert, assertMinimalConversation, assertOrbPrimaryInteraction } = require("./nexus-true-experience-qa-common");
const fs = require("fs");
const path = require("path");

const app = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

assertOrbPrimaryInteraction();
assertMinimalConversation();
assert(app.includes("function handleNexusGenesisOrbActivation"), "orb activation handler exists");
assert(app.includes("[data-nexus-genesis-home-orb='true']"), "orb activation targets only the home orb");
assert(app.includes('document.addEventListener("click", handleNexusGenesisOrbActivation'), "orb click activation is bound");
assert(app.includes('document.addEventListener("keydown", handleNexusGenesisOrbActivation'), "orb keyboard activation is bound");
assert(app.includes('["Enter", " "].includes(event.key)'), "orb supports keyboard activation");
assert(app.includes("activateNexusGenesisExperience"), "orb activation opens the unified conversation experience");
assert(app.includes('handleNexusOsVoiceControlAction("enable-voice"'), "orb activation starts guarded voice activation");
assert(!app.includes("handleNexusGenesisOrbActivation(event) {\n  return false;"), "orb activation is no longer inert");
assert(app.includes("Nexus visual status indicator. Use the voice controls or type below to begin."), "orb preserves nonvisual status instruction");

console.log("Nexus orb conversation activation QA passed.");
