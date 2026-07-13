const { runTrustChainAssertions } = require("./nexus-genesis-trust-chain-common-qa");
console.log(JSON.stringify(runTrustChainAssertions("nexus-first-response-synchronization-qa"), null, 2));
