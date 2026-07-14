"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 4,
    suiteId: "nexus-orb-deterministic-activation",
    suiteName: "Nexus Genesis Trust Chain Rail 4 QA",
    acceptancePurpose: "Protect deterministic orb activation without workflow, provider, or admin side effects.",
    groups: ["ownership", "orbActivation", "adminIsolation"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
