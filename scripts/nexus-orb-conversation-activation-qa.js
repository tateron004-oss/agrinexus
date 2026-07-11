const { assert, assertMinimalConversation, assertOrbPrimaryInteraction } = require("./nexus-true-experience-qa-common");
const fs = require("fs");
const path = require("path");

const app = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

assertOrbPrimaryInteraction();
assertMinimalConversation();
assert(app.includes("handleNexusGenesisOrbActivation"), "orb click/keyboard activation handler exists");
assert(app.includes('document.addEventListener("click", handleNexusGenesisOrbActivation'), "orb click activation is bound");
assert(app.includes('document.addEventListener("keydown", handleNexusGenesisOrbActivation'), "orb keyboard activation is bound");
assert(app.includes('["Enter", " "].includes(event.key)'), "orb supports Enter and Space activation");

console.log("Nexus orb conversation activation QA passed.");
