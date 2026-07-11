const { assertAlias, assertFinalAcceptance } = require("./nexus-true-experience-qa-common");

assertFinalAcceptance();
assertAlias("qa:nexus-true-experience-acceptance", "nexus-true-experience-acceptance-qa.js");

console.log("Nexus true experience acceptance QA passed.");
