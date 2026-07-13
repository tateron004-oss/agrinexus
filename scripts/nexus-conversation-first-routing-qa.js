const { runTrustChainAssertions } = require("./nexus-genesis-trust-chain-common-qa");
console.log(JSON.stringify(runTrustChainAssertions("nexus-conversation-first-routing-qa"), null, 2));
