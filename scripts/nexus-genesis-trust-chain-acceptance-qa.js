const { runTrustChainAssertions } = require("./nexus-genesis-trust-chain-common-qa");
console.log(JSON.stringify(runTrustChainAssertions("nexus-genesis-trust-chain-acceptance-qa"), null, 2));
