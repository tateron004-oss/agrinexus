"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 11,
    suiteId: "nexus-genesis-rail-11-memory",
    suiteName: "Nexus Genesis Rail 11 Memory QA",
    acceptancePurpose: "Protect truthful session, preference, mission, persistent memory, correction, deletion, and closure lifecycle.",
    groups: ["memory", "privacy"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
