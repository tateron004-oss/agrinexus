"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 8,
    suiteId: "nexus-genesis-trust-chain-acceptance",
    suiteName: "Nexus Genesis Trust Chain Rail 8 Acceptance QA",
    acceptancePurpose: "Protect complete registration and acceptance coverage for the original Genesis rails.",
    groups: [
      "ownership",
      "transcript",
      "acknowledgement",
      "synthesis",
      "orbActivation",
      "routing",
      "adminIsolation",
      "synchronization",
      "fallback",
      "companion",
      "registration",
      "acceptance"
    ],
    verbose: true
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
