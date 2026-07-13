const { runTrustChainAssertions } = require("./nexus-genesis-trust-chain-common-qa");
console.log(JSON.stringify(runTrustChainAssertions("nexus-orb-deterministic-activation-qa"), null, 2));
