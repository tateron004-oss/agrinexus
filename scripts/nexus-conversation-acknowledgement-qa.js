"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 2,
    suiteId: "nexus-conversation-acknowledgement",
    suiteName: "Nexus Genesis Trust Chain Rail 2 QA",
    groups: ["transcript", "acknowledgement", "fallback", "companion"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
