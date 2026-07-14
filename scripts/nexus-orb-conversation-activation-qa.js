const { assert, assertMinimalConversation, assertOrbPrimaryInteraction } = require("./nexus-true-experience-qa-common");
const fs = require("fs");
const path = require("path");

const app = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

assertOrbPrimaryInteraction();
assertMinimalConversation();
assert(app.includes("handleNexusGenesisOrbActivation"), "legacy orb activation handler remains as inert guard");
assert(app.includes("function handleNexusGenesisOrbActivation") && app.includes("return false;"), "orb activation handler is inert");
assert(!app.includes('document.addEventListener("click", handleNexusGenesisOrbActivation'), "orb click activation is not bound");
assert(!app.includes('document.addEventListener("keydown", handleNexusGenesisOrbActivation'), "orb keyboard activation is not bound");
assert(!app.includes('["Enter", " "].includes(event.key)'), "orb no longer supports keyboard activation");
assert(app.includes("Nexus visual status indicator. Use the voice controls or type below to begin."), "orb explains status-only role");

console.log("Nexus orb conversation non-activation QA passed.");
