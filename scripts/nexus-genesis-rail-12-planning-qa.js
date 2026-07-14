"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 12,
    suiteId: "nexus-genesis-rail-12-planning",
    suiteName: "Nexus Genesis Rail 12 Planning QA",
    acceptancePurpose: "Protect goal decomposition, missing-information detection, plan revision, cancellation, and no false execution claim.",
    groups: ["planning", "context"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
