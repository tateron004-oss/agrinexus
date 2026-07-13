"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 1,
    suiteId: "nexus-trust-chain-trace",
    suiteName: "Nexus Genesis Trust Chain Rail 1 QA",
    groups: ["ownership", "transcript", "synchronization"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
