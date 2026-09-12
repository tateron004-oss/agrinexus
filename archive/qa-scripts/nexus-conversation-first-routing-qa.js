"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 5,
    suiteId: "nexus-conversation-first-routing",
    suiteName: "Nexus Genesis Trust Chain Rail 5 QA",
    acceptancePurpose: "Protect conversation-first routing before workflow launch or preview rendering.",
    groups: ["routing", "acknowledgement", "companion"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
