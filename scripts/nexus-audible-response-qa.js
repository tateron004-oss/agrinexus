"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 3,
    suiteId: "nexus-audible-response",
    suiteName: "Nexus Genesis Trust Chain Rail 3 QA",
    groups: ["synthesis", "fallback", "synchronization"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
