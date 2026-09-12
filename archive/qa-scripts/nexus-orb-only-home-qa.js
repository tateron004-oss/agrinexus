const { assertTrueHomeOwner, assertTrueHomeMarkup, assertLegacyHomeRemoved } = require("./nexus-true-experience-qa-common");

assertTrueHomeOwner();
assertTrueHomeMarkup();
assertLegacyHomeRemoved();

console.log("Nexus orb-only Home QA passed.");
