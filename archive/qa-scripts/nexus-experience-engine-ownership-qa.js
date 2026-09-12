const { assert, assertTrueHomeOwner } = require("./nexus-true-experience-qa-common");
const fs = require("fs");
const path = require("path");

const app = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

assert(app.includes("NEXUS_GENESIS_EXPERIENCE_OWNERSHIP_REGISTRY"), "Genesis ownership registry exists");
assert(app.includes("coreStateOwner"), "core state owner is declared");
assert(app.includes("orbRendererOwner"), "orb renderer owner is declared");
assert(app.includes("particleRendererOwner"), "particle renderer owner is declared");
assert(app.includes("voiceSynchronizationOwner"), "voice synchronization owner is declared");
assert(app.includes("animationLoopPolicy"), "single animation loop policy is declared");
assert(app.includes("hiddenLegacyPolicy"), "hidden legacy policy is declared");
assert(app.includes("exposeNexusGenesisExperienceRuntime"), "ownership runtime is exposed for QA");
assertTrueHomeOwner();

console.log("Nexus Experience Engine ownership QA passed.");
