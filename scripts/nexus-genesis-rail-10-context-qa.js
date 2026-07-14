"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 10,
    suiteId: "nexus-genesis-rail-10-context",
    suiteName: "Nexus Genesis Rail 10 Context QA",
    acceptancePurpose: "Protect multi-turn context, mission continuity, stale-context rejection, and topic separation.",
    groups: ["context", "synchronization", "companion"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
