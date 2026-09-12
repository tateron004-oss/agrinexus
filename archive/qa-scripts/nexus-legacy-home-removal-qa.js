const { assertAlias, assertLegacyHomeRemoved } = require("./nexus-true-experience-qa-common");

assertLegacyHomeRemoved();
assertAlias("qa:nexus-legacy-home-removal", "nexus-legacy-home-removal-qa.js");

console.log("Nexus legacy home removal QA passed.");
