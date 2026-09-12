const { assertAlias, assertMinimalConversation } = require("./nexus-true-experience-qa-common");

assertMinimalConversation();
assertAlias("qa:nexus-minimal-conversation", "nexus-minimal-conversation-qa.js");

console.log("Nexus minimal conversation QA passed.");
