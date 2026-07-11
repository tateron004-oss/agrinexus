const { assertAlias, assertCacheResponsive } = require("./nexus-true-experience-qa-common");

assertCacheResponsive();
assertAlias("qa:nexus-production-cache-responsive", "nexus-production-cache-responsive-qa.js");

console.log("Nexus production cache responsive QA passed.");
