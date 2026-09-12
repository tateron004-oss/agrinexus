const { assertAlias, assertOrbPrimaryInteraction } = require("./nexus-true-experience-qa-common");

assertOrbPrimaryInteraction();
assertAlias("qa:nexus-orb-primary-interaction", "nexus-orb-primary-interaction-qa.js");

console.log("Nexus orb primary interaction QA passed.");
