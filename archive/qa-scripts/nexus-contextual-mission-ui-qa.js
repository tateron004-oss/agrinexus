const { assertAlias, assertContextualMission } = require("./nexus-true-experience-qa-common");

assertContextualMission();
assertAlias("qa:nexus-contextual-mission-ui", "nexus-contextual-mission-ui-qa.js");

console.log("Nexus contextual mission UI QA passed.");
