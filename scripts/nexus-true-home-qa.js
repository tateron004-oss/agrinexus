const { assertAlias, assertTrueHomeMarkup } = require("./nexus-true-experience-qa-common");

assertTrueHomeMarkup();
assertAlias("qa:nexus-true-home", "nexus-true-home-qa.js");

console.log("Nexus true home QA passed.");
