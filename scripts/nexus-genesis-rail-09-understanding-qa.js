"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 9,
    suiteId: "nexus-genesis-rail-09-understanding",
    suiteName: "Nexus Genesis Rail 9 Understanding QA",
    acceptancePurpose: "Protect user intent capture, ambiguity handling, and no execution based on guessed intent.",
    groups: ["understanding", "routing", "companion"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
