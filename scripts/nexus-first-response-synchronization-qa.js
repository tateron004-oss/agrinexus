"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 7,
    suiteId: "nexus-first-response-synchronization",
    suiteName: "Nexus Genesis Trust Chain Rail 7 QA",
    acceptancePurpose: "Protect transcript, visible response, speech preparation, and playback-start synchronization.",
    groups: ["transcript", "acknowledgement", "synthesis", "synchronization", "fallback"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
