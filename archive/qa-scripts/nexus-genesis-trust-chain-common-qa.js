"use strict";

const {
  runTrustChainAssertions,
  runTrustChainQa
} = require("./lib/nexus-genesis-trust-chain-shared-qa");

module.exports = { runTrustChainAssertions, runTrustChainQa };

if (require.main === module) {
  try {
    console.log(JSON.stringify(runTrustChainAssertions(), null, 2));
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}
