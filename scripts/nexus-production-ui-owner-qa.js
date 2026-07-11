const { assertAlias, assertTrueHomeOwner } = require("./nexus-true-experience-qa-common");

assertTrueHomeOwner();
assertAlias("qa:nexus-production-ui-owner", "nexus-production-ui-owner-qa.js");

console.log("Nexus production UI owner QA passed.");
