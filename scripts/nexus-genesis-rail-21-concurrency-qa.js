"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 21,
    suiteId: "nexus-genesis-rail-21-concurrency",
    suiteName: "Nexus Genesis Rail 21 Concurrency QA",
    acceptancePurpose: "Protect interruption, duplicate browser events, stale callbacks, cancellation races, background-tab recovery, and lock release.",
    groups: ["concurrency", "synchronization"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
