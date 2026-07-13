const { runTrustChainAssertions } = require("./nexus-genesis-trust-chain-common-qa");
console.log(JSON.stringify(runTrustChainAssertions("nexus-trust-chain-trace-qa"), null, 2));
